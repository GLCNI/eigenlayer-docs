---
id: for-new-validators
title: For New Validators
---

# Create a new validator for Native restaking

## For New Validators

If setting up a new validator for native restaking, withdrawal credentials can be set to point directly to your EigenPod at the time of validator keystore creation.

The Process is as follows: 
1. [Create Validator Keys](./create-validator-keys.md)
2. [Run Ethereum Node](./run-ethereum-node.md)
3. [Import Keystores](./import-validator-keystores.md)
4. [Make Deposit](./make-deposit.md)


:warning: Validators SHOULD NOT direct execution rewards (`suggested_fee_recipient`) to their EigenPod. These funds may be irretrievably stuck.

[← Create EigenPod](./create-eigenpod.md)    [Create Validator Keys →](./create-validator-keys.md)