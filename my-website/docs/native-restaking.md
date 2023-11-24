---
id: native-restaking 
title: Native Restaking
---

# Native Restaking

## How to restake and withdraw with Native Staking

Native restaking describes the process of operating a validator node to secure Ethereum consensus and extending this cryptoeconomic security to other applications though Eigenlayer, by pointing withdrawal credentials to EigenLayer's smart contracts.

There are two options for Native restaking:

1. [**Repoint validator credentials:**](for-existing-validators.md) for existing validators to restake with EigenLayer.

2. [**Create a new validator for Native restaking:**](for-new-validators.md) setup of a new validator for restaking with EigenLayer.

### Definitions: 

**EigenPod:** is a custom contract created by native restakers to opt their validator into native restaking. The **EigenPod contract address** is what must be set as the **validator withdrawal address**.

**Controller Account:** the address that creates the EigenPod contract, this address is responsible for all subsequent restaking and withdrawal operations from that EigenPod. _This can be any Ethereum address under control of the native restaker._

:warning: EigenLayer Native Restaking is not yet compatible with RocketPool validators, do not attempt to set minipool withdrawal addresses to EigenPods.

:warning: Please read this entire guide before launching your new validator or integrating your existing validator.

