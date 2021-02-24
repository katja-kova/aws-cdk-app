#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FirstAwsCdkAppStack } from '../lib/first-aws-cdk-app-stack';

const app = new cdk.App();
new FirstAwsCdkAppStack(app, 'FirstAwsCdkAppStack');
