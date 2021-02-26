import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import s3 = require('@aws-cdk/aws-s3');
import dynamodb = require('@aws-cdk/aws-dynamodb');
import {Duration} from '@aws-cdk/core';
import iam = require('@aws-cdk/aws-iam');
import event_sources = require('@aws-cdk/aws-lambda-event-sources');
import { S3ApiDefinition } from '@aws-cdk/aws-apigateway';

const { ApiGatewayToLambda } = require('@aws-solutions-constructs/aws-apigateway-lambda');
const imgBucketName = "cdk-img-bucket";

export class AwsCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    new ApiGatewayToLambda(this, 'ApiGatewayToLambdaPattern', {
        lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(`${__dirname}/lambda`)
        }
    });

    //----------
    //IMG BUCKET
    //----------
    const imgBucket = new s3.Bucket(this, imgBucketName);
    new cdk.CfnOutput(this, 'imgBucket', {value: imgBucket.bucketName});
  }
}
