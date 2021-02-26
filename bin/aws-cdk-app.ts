#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';
import * as widget_service from '../lib/widget-service';

const app = new cdk.App();
new AwsCdkAppStack(app, 'AwsCdkAppStack');
new widget_service.WidgetService(app, 'Widgets');
