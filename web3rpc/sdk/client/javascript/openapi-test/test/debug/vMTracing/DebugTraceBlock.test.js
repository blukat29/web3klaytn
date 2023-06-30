const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlock API', () => {
    test('should return debug_traceBlock', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            if (data.length > 0) {
                expect(typeof data[0] === 'object').toBeTruthy();
                expect(typeof data[0].result === 'object').toBeTruthy();
            }
            done();
        };

        const blockRlp = "0xf90273f9026fa0c36f3961fd16dff60764c63f76f67542ca20dedbff039ee52cd20e772f567bd794043c471bee060e00a56ccd02c0ca286808a5a436a0d044a2b68f0e5da76178af5ea4a7deb852fd6cb4a8369f6f924e72414ef1cf99a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010180846438c9cc2eb8c0d883010a02846b6c617988676f312e31352e37856c696e757800000000000000f89ed59465b47be3457ff26f2911cf89fd079cef0475a2e6b841395cf5ecab6c9c69d4571dc85bc39075242570c9c947fb4be4e23639faae4d512d5690f47244f41e0138314098a63d533e761a16b7e36e68322d7605a2ea6b0f01f843b8418259cb2f6beaee384e0a52e8b37fca77084982557d406817cc1ae8e1b96556a243e97b51317b9e3fa1545942b18e2ba68b94d33bb0fd62a5a5fdba23cc85be040180808505d21dba00c0";

        sdk.debug.traceBlock(blockRlp, {}, callbackOne);
    });
});

