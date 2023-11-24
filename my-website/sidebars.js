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
          'for-existing-validators',
          'verify-validator-withdrawal-prefix',
          'repoint-validator-withdrawal-credentials'
        ],
      },
      {
        type: 'category',
        label: 'For New Validators',
        items: [
          'for-new-validators',
          'create-validator-keys',
          'run-ethereum-node',
          'import-validator-keystores',
          'make-deposit'
        ],
      },
      {
        type: 'category',
        label: 'Withdraw from EigenLayer',
        items: [
          'withdraw-from-eigenlayer',
          'full-withdrawal',
          'withdraw-validator-consensus-layer',
          'partial-withdrawal'
        ],
      },
    ],
    // ... other categories or documentation sections ...
  },
};