# 🪙 Bitcoin Wallet Generator

Gerador simples de carteiras Bitcoin utilizando Node.js. Este projeto cria carteiras HD (Hierarchical Deterministic) com suporte para testnet e mainnet.

## 📋 Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- NPM ou Yarn

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
git clone <seu-repositorio>
cd btc-wallet
npm install
```

## 📦 Dependências

- **bip32**: Implementação de carteiras HD (Hierarchical Deterministic)
- **bip39**: Geração e validação de frases mnemônicas
- **bitcoinjs-lib**: Biblioteca principal para operações com Bitcoin

## 💻 Como Usar

Execute o script de criação de carteira:

```bash
node src/createwallet.js
```

O script irá gerar:
- ✅ Endereço Bitcoin (testnet ou mainnet)
- ✅ Chave privada (formato WIF)
- ✅ Seed Mnemonic (12 palavras)

## ⚙️ Configuração

Por padrão, o projeto está configurado para **testnet**. Para usar na **mainnet**, edite o arquivo `src/createwallet.js`:

```javascript
// Testnet (padrão)
const network = bitcoin.networks.testnet

// Mainnet (produção)
const network = bitcoin.networks.bitcoin
```

## 🔍 Validação e Testes

Para validação das carteiras geradas e realização de transações de teste, foi utilizado o **Electrum Wallet**, uma carteira Bitcoin leve e confiável que suporta tanto testnet quanto mainnet.

## 🔐 Segurança

⚠️ **IMPORTANTE**: 
- Nunca compartilhe sua chave privada ou seed mnemonic
- Use testnet para testes
- Mantenha suas chaves privadas em local seguro

## 📝 Licença

ISC

## 👨‍💻 Autor

Samuel Cotinguiba

## 🎓 Créditos

Projeto desenvolvido como parte do curso de Blockchain da [Digital Innovation One (DIO)](https://www.dio.me/).
