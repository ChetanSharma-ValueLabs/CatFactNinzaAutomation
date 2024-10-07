import{test,expect} from '@playwright/test'
import POST_Fact_API from '../../API_Objects/POST_Fact_API_Object';
import {StatusCodes} from 'http-status-codes';
import * as requestData from '../../RequestData/POST_Fact_RequestPayload.json';

test.describe('TC_01_Validate_CatNinza_Fact_Automation',async ()=>{

    test('Test_01_GET_Fact_Request_withOut_Param', async ({request})=>{
        const postFact = new POST_Fact_API(request);
        const apiResponse = await postFact.postCatFact(requestData);
        const responseBody = await apiResponse.json()
        
        expect(await apiResponse.status()).toBe(StatusCodes.OK);
        expect(responseBody.fact).not.toBeNull;
    })
})