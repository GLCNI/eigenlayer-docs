---
id: create-validator-keys
title: Create Validator Keys
---

# Create a new validator for Native restaking

## 1. Create Validator Keys

can be done using the **[Staking Deposit CLI](https://github.com/ethereum/staking-deposit-cli),** a tool for creating keystores and a corresponding `deposit_data*.json` file for [Ethereum Staking Launchpad](https://github.com/ethereum/staking-launchpad).

For Native restaking in the keystore generation **provision withdrawal credentials directly to your EigenPod**.

```
--execution_address <EIGENPOD ACCOUNT>
```

:warning: **Please generate your keystores on your own safe, completely offline device.**

:warning: **Please backup your mnemonic, keystores, and password securely.**

Please read [Launchpad Validator FAQs](https://launchpad.ethereum.org/faq#keys) before generating the keys.
