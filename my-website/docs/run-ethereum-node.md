---
id: run-ethereum-node
title: Run Ethereum Node
---

# Create a new validator for Native restaking

## 2. Run an Ethereum Node

An Ethereum staking node refers to both
- Full node running **Execution** and **Consensus** clients to do block-by-block validation of the blockchain.
- **Validator client** for active participation in block proposals and attestations with sufficient stake.

**Hardware requirements:**

- RAM: 32 GB - 16 GB (Min) can be challenging depending on client mix
- CPU: 4 CPU cores (Min)
- Storage: 2TB Minimum - 4TB Recommended. Quality is highly important suitable models advised [here.](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038)

### Option 1: Manual Configuration

Users comfortable setting up and configuring an Ethereum Validator and server environment, you can refer directly to client team documents:  

NOTE: The HTTP connection between your beacon node and execution node needs to be authenticated using a JWT token.

Example with OpenSSL:
```
openssl rand -hex 32 | tr -d "\n" > "./jwtsecret/jwt.hex"
```

**Execution Clients:**

[Nethermind:](https://docs.nethermind.io/)

[Besu:](https://besu.hyperledger.org/)

[Erigon:](https://github.com/ledgerwatch/erigon) 

[Geth:](https://geth.ethereum.org/)

**Consensus Clients:**

[Lighthouse:](https://lighthouse.sigmaprime.io/)

[Lodestar:](https://lodestar.chainsafe.io/) 

[Nimbus:](https://nimbus.team/)

[Prysm:](https://docs.prylabs.network/docs/getting-started/)

[Teku:](https://consensys.net/knowledge-base/ethereum-2/teku/)

**Validator Clients:**

All Consensus clients above can be configured to run as validator separately, some can be run as both.

**Execution Rewards:**

:warning: Validators SHOULD NOT direct execution rewards (`suggested_fee_recipient`) to their EigenPod. These funds may be irretrievably stuck.

Execution reward address can be any Ethereum address you have full control of such as the **controller account.**


### Option 2: Easy deployment tools

There are multiple projects to make the setup of a Ethereum validator node easier, these tools automate much of the process with working configurations and guidance through the setup.

[**DappNode:**](https://docs.dappnode.io/docs/user/install/overview/) 
DappNode Core is a dedicated OS with easy to user interface to install DappNode Packages, most client teams have DappNode packages making installation and management of Ethereum nodes simple. DappNode also offer a prebuilt devices or (Core) can be installed on most systems.

[**Avado:**](https://ava.do/ethereum-staking/)
Avado offer devices with pre-installed software to download pre-built packages from Avado App Store. AVADO takes away the hardware pain and brings convenience to home staking.

[**Nethermind Sedge:**](https://docs.sedge.nethermind.io/docs/intro)
Sedge takes care of the entire on-premises full node setup with client selection and generates docker-compose scripts based on the desired configuration.

[**Eth Docker:**](https://eth-docker.net/) 
A docker automation project for Ethereum clients, easy to setup by answering simple dialog-based questions on terminal.


**Execution Rewards:**
:warning: Validators SHOULD NOT direct execution rewards (suggested_fee_recipient) to their EigenPod. These funds may be irretrievably stuck.

Execution reward address can be any Ethereum address you have full control of such as the **controller account.**