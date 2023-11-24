---
id: create-eigenpod
title: Create EigenPod
---

# Create EigenPod for Withdrawal Credentials

## How to restake with Native Staking

**Step 1:** Open the [EigenLayer App](http://app.eigenlayer.xyz/) and connect your Web3 wallet, making sure you are connected to Ethereum mainnet.

_Don't have a crypto wallet yet? We recommend installing_ [_Metamask_](https://metamask.io/download/)_._

**Step 2:** Click **Create Pod**:
![](/images/page_1_1.png)

If successful, you should receive the following confirmation:

![](/images/page_1_2.png)

Click **Pod Details** to view your **EigenPod address**:

![](/images/page_1_3.png)

![](/images/page_1_4.png)

**Copy** this address. (this will be the withdrawal address for the validator for native restaking.)

**The address that created the EigenPod in Step 2 is responsible for all subsequent restaking and withdrawal operations from that EigenPod.**

:warning: Validators SHOULD NOT direct execution rewards (`suggested_fee_recipient`) to their EigenPod. These funds may be irretrievably stuck.

:warning: execution layer rewards (e.g. from MEV boost) should be set to an Ethereum address under full control of the native restaker, (example: controller account)

[**For Exisitng validators**](for-existing-validators.md)- those with active validators and wish to repoint for native restaking.

[**For New Validators**](for-new-validators.md) - for those who wish to deploy new validators for native restaking.