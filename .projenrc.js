const { awscdk, DevEnvironmentDockerImage, Gitpod } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Pahud Hsieh',
  authorAddress: 'pahudnet@gmail.com',
  cdkVersion: '2.20.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-fargate-patterns',
  description: 'CDK patterns for serverless container with AWS Fargate',
  repositoryUrl: 'https://github.com/pahud/cdk-fargate-patterns.git',
  deps: [
    'cdk-nag@^2.12.30',
  ],
  peerDeps: [
    'cdk-nag@^2.12.30',
  ],
  devDeps: [
    'cdk-nag@^2.12.30',
  ],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['pahud'],
  },
  publishToPypi: {
    distName: 'cdk-fargate-patterns',
    module: 'cdk_fargate_patterns',
  },
  catalog: {
    announce: false,
    twitter: 'pahudnet',
  },
  keywords: [
    'cdk',
    'fargate',
    'serverless',
    'aws',
  ],
});


const gitpodPrebuild = project.addTask('gitpod:prebuild', {
  description: 'Prebuild setup for Gitpod',
});
// install and compile only, do not test or package.
gitpodPrebuild.exec('yarn install --frozen-lockfile --check-files');
gitpodPrebuild.exec('npx projen compile');

let gitpod = new Gitpod(project, {
  dockerImage: DevEnvironmentDockerImage.fromFile('.gitpod.Dockerfile'),
  prebuilds: {
    addCheck: true,
    addBadge: true,
    addLabel: true,
    branches: true,
    pullRequests: true,
    pullRequestsFromForks: true,
  },
});

gitpod.addCustomTask({
  init: 'yarn gitpod:prebuild',
  // always upgrade after init
  command: 'npx projen upgrade',
});

gitpod.addVscodeExtensions(
  'dbaeumer.vscode-eslint',
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'dependabot.yml', 'website/public', '.vscode'];
project.npmignore.exclude(...common_exclude, 'images', 'docs', 'website');
project.gitignore.exclude(...common_exclude);

project.synth();
