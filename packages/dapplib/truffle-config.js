require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember essay good arctic blue gesture'; 
let testAccounts = [
"0x03d4c8f0244f63e76013d01901714abdfe28c67d0e84ae8c4518f185788aecfc",
"0x93d1dad54b398e8f87ca27dcc60d62521b3903897c0ebf352e2f2ef972c23b98",
"0x6baae6ecf8ecd605463ba630d4e2f27bd3d2699bc3f58995ad5ce2f36edd07ed",
"0xc4d4529e81c3526f3068893525d249e4c16d099648b5c76a1e18d62f89a12c88",
"0x4e41c0158b6a0f5300cd096ae3ace9388564ef78a621f49ef628fa82b4fdbdba",
"0xbb78ee7ac047493a52c04650fd5cd62a7e346960b541261bb10de1f8364da0b2",
"0x2fa42a2ae982862784d2e13e8a175145684eba9874f8c191afa784db7a13de5e",
"0x36d06021a73728f149f00d0fc1b12bec218b28747c379c4b8815bbdbf0f7ba06",
"0x7b65dc8ad439e41c861555b2fee7250e0624dbf0a6c8086b73d11d0a82b0b08a",
"0xc813c33efbfc64942085380a754408375a6d385c5eae81b2a6b62f0f40b8e8f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
