// importando as dependencias necessárias 
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');

// inicializar bip32 com tiny-secp256k1
const bip32Factory = BIP32Factory(ecc);

// definir a rede bitcoin
const network = bitcoin.networks.testnet; // usar bitcoin.networks.bitcoin para mainnet, testnet para rede de teste

//derivação de carteiras HD(hierarchical deterministic), caso queria usar a rede 'm/49'/0'/0'/0'
const path = "m/49'/1'/0'/0";

//criando as palavras mnemonicas
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//criando a raiz da carteira HD
const root = bip32Factory.fromSeed(seed, network);

//criando uma conta par pvt-pub keys 
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddresses = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log("carteira gerada com sucesso!");
console.log("endereço BTC:", btcAddresses);
console.log("Chave privada (WIF):", node.toWIF());
console.log("Seed Mnemonic:", mnemonic);
