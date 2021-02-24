import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'

const { ApiGatewayToLambda } = require('@aws-solutions-constructs/aws-apigateway-lambda');

export class FirstAwsCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    new ApiGatewayToLambda(this, 'ApiGatewayToLambdaPattern', {
        lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(`${__dirname}/lambda`)
        }
    });
  }
}
