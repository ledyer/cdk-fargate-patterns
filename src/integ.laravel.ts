import * as path from 'path';
import {
  Stack, App, RemovalPolicy,
  aws_ec2 as ec2,
  aws_certificatemanager as acm,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { Laravel } from './laravel';

const app = new App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(app, 'demo-laravel', { env });
const certArn = stack.node.tryGetContext('ACM_CERT_ARN');
const cert = certArn ? acm.Certificate.fromCertificateArn(stack, 'Cert', certArn) : undefined;
const vpc = getOrCreateVpc(stack);

/**
 * laravel-nginx-php-fpm
 */
new Laravel(stack, 'LaravelNginxDemo', {
  vpc,
  auroraServerless: true,
  spot: true,
  enableExecuteCommand: true,
  code: path.join(__dirname, '../services/laravel-nginx-php-fpm'),
  loadbalancer: cert ? { port: 443, certificate: [cert] } : { port: 80 },
  efsFileSystem: {
    vpc,
    removalPolicy: RemovalPolicy.DESTROY,
  },
});


/**
 * laravel-bitnami
 */
new Laravel(stack, 'LaravelBitnamiDemo', {
  vpc,
  auroraServerless: true,
  spot: true,
  enableExecuteCommand: true,
  code: path.join(__dirname, '../services/laravel-bitnami'),
  containerPort: 3000,
  loadbalancer: cert ? { port: 443, certificate: [cert] } : { port: 80 },
  efsFileSystem: {
    vpc,
    removalPolicy: RemovalPolicy.DESTROY,
  },
});


function getOrCreateVpc(scope: Construct): ec2.IVpc {
  // use an existing vpc or create a new one
  return scope.node.tryGetContext('use_default_vpc') === '1'
    || process.env.CDK_USE_DEFAULT_VPC === '1' ? ec2.Vpc.fromLookup(scope, 'Vpc', { isDefault: true }) :
    scope.node.tryGetContext('use_vpc_id') ?
      ec2.Vpc.fromLookup(scope, 'Vpc', { vpcId: scope.node.tryGetContext('use_vpc_id') }) :
      new ec2.Vpc(scope, 'Vpc', { maxAzs: 3, natGateways: 1 });
}
