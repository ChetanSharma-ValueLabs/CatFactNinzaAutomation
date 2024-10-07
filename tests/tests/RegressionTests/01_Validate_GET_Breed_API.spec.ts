import{test,expect} from '@playwright/test'

import GET_Breed_API from '../../API_Objects/GET_Breed_API_Object';

import {StatusCodes} from 'http-status-codes'

import * as requestData from '../../RequestData/GET_Fact_RequestPayload.json'
import * as responseData from '../../ResponeData/GET_Breed_ResponsePayload.json'

test.describe('TC_01_Validate_CatNinza_Automation',async ()=>{

    test('Test_01_GET_Breed_Request_withOut_Param', async ({request})=>{
        const getBreed = new GET_Breed_API(request);

        const apiResponse = await getBreed.getBreedWithoutParam();

        const jsonBody = await apiResponse.json();
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(jsonBody["data"][1]).toEqual(responseData.data[1])
    })

    test('Test_02_GET_Breed_Request_Invalid_Endpoint', async ({request})=>{
        const getBreed = new GET_Breed_API(request);

        const apiResponse = await getBreed.getBreedInvalidEndPoint();

        const jsonBody = await apiResponse.json();
        expect(await apiResponse.status()).toBe(StatusCodes.NOT_FOUND);
    })

    test('Test_03_GET_Breed_Request_Param', async ({request})=>{
        const getBreed = new GET_Breed_API(request);

        const apiResponse = await getBreed.getBreedWithParam();

        const jsonBody = await apiResponse.json();
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(await apiResponse.json["per_page"]).toEqual[5];
        expect(jsonBody["data"][1]).toEqual(responseData.data[1]);
    })
})