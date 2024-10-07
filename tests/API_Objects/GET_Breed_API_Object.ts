import { APIRequestContext as Context } from '@playwright/test';

import * as envData from 'dotenv';
const path = require('path')
const envPath = path.join(__dirname, '../../.env/');
const envFile = process.env.TEST_ENV ?? 'uat';
const fullPath = path.join(envPath, `\\.env.${envFile}`);
envData.config({path: fullPath})

export default class GET_Breed_API {
  private readonly requestData = {
    endPoint: '/breeds',
    invalidEndpoint: '/bree',
    queryParam: { limit: 5 },
  };

  constructor(public readonly request: Context) {}

  public async getBreedWithoutParam() {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endPoint}`, {
      ignoreHTTPSErrors: true,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN!}
    });
  }

  public async getBreedInvalidEndPoint() {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.invalidEndpoint}`, {
      ignoreHTTPSErrors: true,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN!}
    });
  }

  public async getBreedWithParam() {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endPoint}`, {
      ignoreHTTPSErrors: true,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN!},
    });
  }
}
