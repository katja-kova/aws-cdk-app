#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';

const app = new cdk.App();
new AwsCdkAppStack(app, 'AwsCdkAppStack');
