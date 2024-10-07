import{test,expect} from '@playwright/test'
import GET_Facts from '../../API_Objects/GET_Facts_API_Object';
import {StatusCodes} from 'http-status-codes';
import * as requestData from '../../RequestData/GET_Fact_RequestPayload.json';

test.describe('TC_01_Validate_CatNinza_Fact_Automation',async ()=>{

    test('Test_01_GET_Fact_Request_withOut_Param', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactWithoutParam();
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.fact).not.toBeNull;
        expect(responseBody.length).not.toBeNull;
        expect(responseBody.fact.length===responseBody.length).toBeTruthy();
    })

    test('Test_02_GET_Fact_Request_with_Higher_MaxLength_Value', async ({request})=>{
        const getBreed = new GET_Facts(request);

        const apiResponse = await getBreed.getFactWithMaxLength(requestData.MaxLength);

        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.fact).not.toBeNull;
        expect(responseBody.length).not.toBeNull;
        expect(responseBody.fact.length).toBeLessThanOrEqual(requestData.MaxLength)
    })

    test('Test_03_GET_Fact_Request_with_Minimum_MaxLength_Value', async ({request})=>{
        const getBreed = new GET_Facts(request);

        const apiResponse = await getBreed.getFactWithMaxLength(requestData.MinLength);

        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.fact).not.toBeNull;
        expect(responseBody.length).not.toBeNull;
        expect(responseBody.fact.length===requestData.MinLength).toBeTruthy();
    })

    test('Test_04_GET_Fact_Request_with_Failing_MaxLength_Value', async ({request})=>{
        const getBreed = new GET_Facts(request);

        const apiResponse = await getBreed.getFactWithMaxLength(requestData.MinLength);

        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody).toBeNull;
    })

    test('Test_05_GET_Fact_Request_Invalid_Endpoint', async ({request})=>{
        const getBreed = new GET_Facts(request);

        const apiResponse = await getBreed.getFactInvalidEndPoint();

        expect(await apiResponse.status()).toBe(StatusCodes.NOT_FOUND);
    })
})

test.describe('TC_01_Validate_CatNinza_Facts_Automation',async ()=>{

    test('Test_01_GET_Facts_Request_withOut_Param', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsWithoutParam();
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data[1]).not.toBeNull;
        expect(responseBody.data[1].fact.length===responseBody.data[1].length).toBeTruthy();
    })

    test('Test_02_GET_Facts_Request_with_Higher_MaxLength_Value', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsWithMaxLength(requestData.MaxLength);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data[1]).not.toBeNull;
        expect(responseBody.data.every(item => item.length <= requestData.MaxLength)).toBeTruthy();
        
    })

    test('Test_03_GET_Facts_Request_with_Minimum_MaxLength_Value', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsWithMaxLength(requestData.MinLength);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data[1]).not.toBeNull;
        expect(responseBody.data.every(item => item.length = requestData.MaxLength)).toBeTruthy();
    })

    test('Test_04_GET_Facts_Request_with_Failing_MaxLength_Value', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsWithMaxLength(requestData.MinLength);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data).toBeEmpty;
    })

    test('Test_05_GET_Facts_Request_with_Limit_Value', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsWithLimit(requestData.Limit);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data.length===requestData.Limit).toBeTruthy;        
    })

    test('Test_06_GET_Facts_Request_with_Limit_And_MaxLimit_Value', async ({request})=>{
        const getFact = new GET_Facts(request);
        const apiResponse = await getFact.getFactsMaxLenthAndLimit(requestData.MaxLength,requestData.Limit);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.data.length===requestData.Limit).toBeTruthy;   
        expect(responseBody.data.every(item => item.length = requestData.MaxLength)).toBeTruthy();     
    })
})