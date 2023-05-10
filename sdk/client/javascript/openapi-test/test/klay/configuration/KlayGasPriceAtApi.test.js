const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay gasPriceAt  API', () => {
    test('should return gas price at block number.', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()   
            done();
        };
        const blockNumber=1
        sdk.klay.gasPriceAt({blockNumber}, callbackOne);
    });
});
