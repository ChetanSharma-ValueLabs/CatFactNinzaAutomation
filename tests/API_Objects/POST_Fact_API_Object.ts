import { APIRequestContext as Context } from '@playwright/test';
import * as envData from 'dotenv';
const path = require('path')
const envPath = path.join(__dirname, '../../.env/');
const envFile = process.env.TEST_ENV ?? 'uat';
const fullPath = path.join(envPath, `\\.env.${envFile}`);
envData.config({path: fullPath})

export default class POST_Fact_API {
  private readonly requestData = {
    endPoint: '/fact',
    invalidEndpoint: '/fac'
  };

  constructor(public readonly request: Context) {}

  public async postCatFact(apiData:{}) {
    return this.request.post(`${process.env.APPLICATION_HOST}${this.requestData.endPoint}`, {
      data:apiData,
      ignoreHTTPSErrors: true,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN!}
    });
  }
}