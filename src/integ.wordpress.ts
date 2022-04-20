import {
  Stack, App,
} from 'aws-cdk-lib';
import { WordPress } from './wordpress';


const app = new App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(app, 'demo-wordpress', { env });

new WordPress(stack, 'WP', {
  auroraServerless: true,
  spot: true,
  enableExecuteCommand: true,
});

