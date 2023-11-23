module.exports = {
    someSidebar: {
      'Native Restaking': [
        'native-restaking',
        {
          type: 'category',
          label: 'Create EigenPod',
          items: ['create-eigenpod'],
        },
        {
          type: 'category',
          label: 'For Existing Validators',
          items: [
            'for-existing-validators/verify-validator-withdrawal-prefix',
            'for-existing-validators/repoint-validator-withdrawal-credentials'
          ],
        },
        {
          type: 'category',
          label: 'For New Validators',
          items: [
            'for-new-validators/create-validator-keys',
            'for-new-validators/run-ethereum-node',
            'for-new-validators/import-validator-keystores',
            'for-new-validators/make-deposit'
          ],
        },
        {
          type: 'category',
          label: 'Withdraw from EigenLayer',
          items: [
            'withdraw-from-eigenlayer/full-withdrawal',
            'withdraw-from-eigenlayer/withdraw-validator-consensus-layer',
            'withdraw-from-eigenlayer/partial-withdrawal'
          ],
        },
      ],
      // ... other categories or documentation sections ...
    },
  };
  