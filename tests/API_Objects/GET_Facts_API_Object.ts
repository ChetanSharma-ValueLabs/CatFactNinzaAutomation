import { APIRequestContext as Context } from '@playwright/test';

import * as envData from 'dotenv';
const path = require('path')
const envPath = path.join(__dirname, '../../.env/');
const envFile = process.env.TEST_ENV ?? 'uat';
const fullPath = path.join(envPath, `\\.env.${envFile}`);
envData.config({path: fullPath})

export default class GETFacts {
  private readonly requestData = {
    endpoints: {
      fact: '/fact',
      facts: '/facts',
      invalid: '/fac',
    },
    queryParam: {
      maxLength: 'max_length=',
      limit: 'limit=',
    },
  };

  constructor(public readonly request: Context) {}

  public async getFactWithoutParam() {
    const url = `${process.env.APPLICATION_HOST}${this.requestData.endpoints.fact}`;
    return this.request.get(url, { headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN! }, ignoreHTTPSErrors: true });
  }

  public async getFactInvalidEndPoint() {
    const url = `${process.env.APPLICATION_HOST}${this.requestData.endpoints.invalid}`;
    return this.request.get(url, { ignoreHTTPSErrors: true });
  }

  public async getFactWithMaxLength(maxLength: number) {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endpoints.fact}`, {
      ignoreHTTPSErrors: true,
      params: `${this.requestData.queryParam.maxLength}${maxLength}`,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN! },
    });
  }

  public async getFactsWithoutParam() {
    const url = `${process.env.APPLICATION_HOST}${this.requestData.endpoints.facts}`;
    return this.request.get(url, { headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN! }, ignoreHTTPSErrors: true });
  }

  public async getFactsWithMaxLength(maxLength: number) {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endpoints.facts}`, {
      ignoreHTTPSErrors: true,
      params: `${this.requestData.queryParam.maxLength}${maxLength}`,
      headers: { "X-CSRF-TOKEN": process.env.XCSRFTOKEN! },
    });
  }

  public async getFactsWithLimit(limit: number) {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endpoints.facts}`, {
      ignoreHTTPSErrors: true,
      params: `${this.requestData.queryParam.limit}${limit}`,
    });
  }

  public async getFactsMaxLenthAndLimit(maxLength: number, limit: number) {
    return this.request.get(`${process.env.APPLICATION_HOST}${this.requestData.endpoints.facts}`, {
      ignoreHTTPSErrors: true,
      params: `${this.requestData.queryParam.limit}${limit}&${this.requestData.queryParam.maxLength}${maxLength}`,
    });
  }
}
