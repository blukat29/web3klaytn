const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const address = '0xA2a8854b1802D8Cd5De631E690817c253d6a9153';
    const message = '0xdeadbeef';
    const signature = '0x1e6338d6e4a8d688a25de78cf2a92efec9a92e52eb8425acaaee8c3957e68cdb3f91bdc483f0ed05a0da26eca3be4c566d087d90dc2ca293be23b2a9de0bcafc1c'
    const blockNumber = 'latest'
    
    sdk.klay.recoverFromMessage(address, message, signature, blockNumber, {}, (err, data, response) => {
        console.log(data);
    });

}
)()