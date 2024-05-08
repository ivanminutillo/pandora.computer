import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ServiceStaking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const serviceStakingAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_stakingParams',
        internalType: 'struct ServiceStakingBase.StakingParams',
        type: 'tuple',
        components: [
          { name: 'maxNumServices', internalType: 'uint256', type: 'uint256' },
          {
            name: 'rewardsPerSecond',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'minStakingDeposit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'minNumStakingPeriods',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'maxNumInactivityPeriods',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'livenessPeriod', internalType: 'uint256', type: 'uint256' },
          { name: 'livenessRatio', internalType: 'uint256', type: 'uint256' },
          {
            name: 'numAgentInstances',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'agentIds', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'threshold', internalType: 'uint256', type: 'uint256' },
          { name: 'configHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: '_serviceRegistry', internalType: 'address', type: 'address' },
      {
        name: '_serviceRegistryTokenUtility',
        internalType: 'address',
        type: 'address',
      },
      { name: '_stakingToken', internalType: 'address', type: 'address' },
      { name: '_proxyHash', internalType: 'bytes32', type: 'bytes32' },
      { name: '_agentMech', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'AgentInstanceRegistered',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'AgentInstancesSlotsFilled',
  },
  {
    type: 'error',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'AgentNotFound',
  },
  {
    type: 'error',
    inputs: [
      { name: 'agentId', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'AgentNotInService',
  },
  {
    type: 'error',
    inputs: [{ name: 'componentId', internalType: 'uint256', type: 'uint256' }],
    name: 'ComponentNotFound',
  },
  { type: 'error', inputs: [], name: 'HashExists' },
  {
    type: 'error',
    inputs: [
      { name: 'sent', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'IncorrectAgentBondingValue',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sent', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'IncorrectRegistrationDepositValue',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LowerThan',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'manager', internalType: 'address', type: 'address' },
    ],
    name: 'ManagerOnly',
  },
  {
    type: 'error',
    inputs: [
      { name: 'maxNumServices', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'MaxNumServicesReached',
  },
  { type: 'error', inputs: [], name: 'NoRewardsAvailable' },
  {
    type: 'error',
    inputs: [
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
      { name: 'tsProvided', internalType: 'uint256', type: 'uint256' },
      { name: 'tsExpected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotEnoughTimeStaked',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'address', type: 'address' },
      { name: 'expected', internalType: 'address', type: 'address' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'OnlyOwnServiceMultisig',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'OperatorHasNoInstances',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'max', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Overflow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'OwnerOnly',
  },
  { type: 'error', inputs: [], name: 'Paused' },
  { type: 'error', inputs: [], name: 'ReentrancyGuard' },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'ServiceMustBeInactive',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'ServiceNotUnstaked',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TokenTransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [{ name: 'multisig', internalType: 'address', type: 'address' }],
    name: 'UnauthorizedMultisig',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ValueLowerThan',
  },
  {
    type: 'error',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongAgentId',
  },
  {
    type: 'error',
    inputs: [
      { name: 'numValues1', internalType: 'uint256', type: 'uint256' },
      { name: 'numValues2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongServiceConfiguration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'state', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongServiceState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'expected', internalType: 'address', type: 'address' },
      { name: 'provided', internalType: 'address', type: 'address' },
    ],
    name: 'WrongStakingToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'currentThreshold', internalType: 'uint256', type: 'uint256' },
      { name: 'minThreshold', internalType: 'uint256', type: 'uint256' },
      { name: 'maxThreshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongThreshold',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroMechAgentAddress' },
  { type: 'error', inputs: [], name: 'ZeroValue' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'availableRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'rewards',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'Checkpoint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'availableRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'multisig',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonces',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ServiceStaked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'multisig',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonces',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ServiceUnstaked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'serviceIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'owners',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'multisigs',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'serviceInactivity',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ServicesEvicted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'agentIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'agentMech',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'availableRewards',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'balance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateServiceStakingLastReward',
    outputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateServiceStakingReward',
    outputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'checkpoint',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[][]', type: 'uint256[][]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'evictServiceIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'configHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'epochCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAgentIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNextRewardCheckpointTimestamp',
    outputs: [{ name: 'tsNext', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getServiceIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'getServiceInfo',
    outputs: [
      {
        name: 'sInfo',
        internalType: 'struct ServiceInfo',
        type: 'tuple',
        components: [
          { name: 'multisig', internalType: 'address', type: 'address' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonces', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'tsStart', internalType: 'uint256', type: 'uint256' },
          { name: 'reward', internalType: 'uint256', type: 'uint256' },
          { name: 'inactivity', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'getServiceStakingState',
    outputs: [
      {
        name: 'stakingState',
        internalType: 'enum ServiceStakingBase.ServiceStakingState',
        type: 'uint8',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'livenessPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'livenessRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'mapServiceInfo',
    outputs: [
      { name: 'multisig', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'tsStart', internalType: 'uint256', type: 'uint256' },
      { name: 'reward', internalType: 'uint256', type: 'uint256' },
      { name: 'inactivity', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxInactivityDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxNumInactivityPeriods',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxNumServices',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minStakingDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minStakingDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'numAgentInstances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxyHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardsPerSecond',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'serviceRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'serviceRegistryTokenUtility',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'setServiceIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'stakingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'threshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tsCheckpoint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'unstake',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const serviceStakingAddress = {
  100: '0x2Ef503950Be67a98746F484DA0bBAdA339DF3326',
} as const

/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const serviceStakingConfig = {
  address: serviceStakingAddress,
  abi: serviceStakingAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ServiceStakingToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const serviceStakingTokenAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_stakingParams',
        internalType: 'struct ServiceStakingBase.StakingParams',
        type: 'tuple',
        components: [
          { name: 'maxNumServices', internalType: 'uint256', type: 'uint256' },
          {
            name: 'rewardsPerSecond',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'minStakingDeposit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'minNumStakingPeriods',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'maxNumInactivityPeriods',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'livenessPeriod', internalType: 'uint256', type: 'uint256' },
          { name: 'livenessRatio', internalType: 'uint256', type: 'uint256' },
          {
            name: 'numAgentInstances',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'agentIds', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'threshold', internalType: 'uint256', type: 'uint256' },
          { name: 'configHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: '_serviceRegistry', internalType: 'address', type: 'address' },
      {
        name: '_serviceRegistryTokenUtility',
        internalType: 'address',
        type: 'address',
      },
      { name: '_stakingToken', internalType: 'address', type: 'address' },
      { name: '_proxyHash', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'AgentInstanceRegistered',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'AgentInstancesSlotsFilled',
  },
  {
    type: 'error',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'AgentNotFound',
  },
  {
    type: 'error',
    inputs: [
      { name: 'agentId', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'AgentNotInService',
  },
  {
    type: 'error',
    inputs: [{ name: 'componentId', internalType: 'uint256', type: 'uint256' }],
    name: 'ComponentNotFound',
  },
  { type: 'error', inputs: [], name: 'HashExists' },
  {
    type: 'error',
    inputs: [
      { name: 'sent', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'IncorrectAgentBondingValue',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sent', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'IncorrectRegistrationDepositValue',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LowerThan',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'manager', internalType: 'address', type: 'address' },
    ],
    name: 'ManagerOnly',
  },
  {
    type: 'error',
    inputs: [
      { name: 'maxNumServices', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'MaxNumServicesReached',
  },
  { type: 'error', inputs: [], name: 'NoRewardsAvailable' },
  {
    type: 'error',
    inputs: [
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
      { name: 'tsProvided', internalType: 'uint256', type: 'uint256' },
      { name: 'tsExpected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotEnoughTimeStaked',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'address', type: 'address' },
      { name: 'expected', internalType: 'address', type: 'address' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'OnlyOwnServiceMultisig',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'OperatorHasNoInstances',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'max', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Overflow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'OwnerOnly',
  },
  { type: 'error', inputs: [], name: 'Paused' },
  { type: 'error', inputs: [], name: 'ReentrancyGuard' },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'ServiceMustBeInactive',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'ServiceNotUnstaked',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TokenTransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [{ name: 'multisig', internalType: 'address', type: 'address' }],
    name: 'UnauthorizedMultisig',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ValueLowerThan',
  },
  {
    type: 'error',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongAgentId',
  },
  {
    type: 'error',
    inputs: [
      { name: 'numValues1', internalType: 'uint256', type: 'uint256' },
      { name: 'numValues2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'WrongServiceConfiguration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'state', internalType: 'uint256', type: 'uint256' },
      { name: 'serviceId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongServiceState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'expected', internalType: 'address', type: 'address' },
      { name: 'provided', internalType: 'address', type: 'address' },
    ],
    name: 'WrongStakingToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'currentThreshold', internalType: 'uint256', type: 'uint256' },
      { name: 'minThreshold', internalType: 'uint256', type: 'uint256' },
      { name: 'maxThreshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WrongThreshold',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroValue' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'availableRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'rewards',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'Checkpoint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'availableRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'multisig',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonces',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ServiceStaked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'multisig',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonces',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ServiceUnstaked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'serviceIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'owners',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'multisigs',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'serviceInactivity',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ServicesEvicted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'agentIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'availableRewards',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'balance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateServiceStakingLastReward',
    outputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateServiceStakingReward',
    outputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'checkpoint',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[][]', type: 'uint256[][]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'evictServiceIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'configHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'epochCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAgentIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNextRewardCheckpointTimestamp',
    outputs: [{ name: 'tsNext', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getServiceIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'getServiceInfo',
    outputs: [
      {
        name: 'sInfo',
        internalType: 'struct ServiceInfo',
        type: 'tuple',
        components: [
          { name: 'multisig', internalType: 'address', type: 'address' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonces', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'tsStart', internalType: 'uint256', type: 'uint256' },
          { name: 'reward', internalType: 'uint256', type: 'uint256' },
          { name: 'inactivity', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'getServiceStakingState',
    outputs: [
      {
        name: 'stakingState',
        internalType: 'enum ServiceStakingBase.ServiceStakingState',
        type: 'uint8',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'livenessPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'livenessRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'mapServiceInfo',
    outputs: [
      { name: 'multisig', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'tsStart', internalType: 'uint256', type: 'uint256' },
      { name: 'reward', internalType: 'uint256', type: 'uint256' },
      { name: 'inactivity', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxInactivityDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxNumInactivityPeriods',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxNumServices',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minStakingDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minStakingDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'numAgentInstances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxyHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardsPerSecond',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'serviceRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'serviceRegistryTokenUtility',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'setServiceIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'stakingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'threshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tsCheckpoint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'unstake',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStaking = /*#__PURE__*/ createUseReadContract({
  abi: serviceStakingAbi,
  address: serviceStakingAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingVersion = /*#__PURE__*/ createUseReadContract(
  {
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'VERSION',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"agentIds"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingAgentIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'agentIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"agentMech"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingAgentMech =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'agentMech',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"availableRewards"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingAvailableRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'availableRewards',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"balance"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingBalance = /*#__PURE__*/ createUseReadContract(
  {
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'balance',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"calculateServiceStakingLastReward"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingCalculateServiceStakingLastReward =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'calculateServiceStakingLastReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"calculateServiceStakingReward"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingCalculateServiceStakingReward =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'calculateServiceStakingReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"configHash"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingConfigHash =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'configHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"epochCounter"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingEpochCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'epochCounter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"getAgentIds"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingGetAgentIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'getAgentIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"getNextRewardCheckpointTimestamp"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingGetNextRewardCheckpointTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'getNextRewardCheckpointTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"getServiceIds"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingGetServiceIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'getServiceIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"getServiceInfo"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingGetServiceInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'getServiceInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"getServiceStakingState"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingGetServiceStakingState =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'getServiceStakingState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"livenessPeriod"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingLivenessPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'livenessPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"livenessRatio"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingLivenessRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'livenessRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"mapServiceInfo"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMapServiceInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'mapServiceInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"maxInactivityDuration"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMaxInactivityDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'maxInactivityDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"maxNumInactivityPeriods"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMaxNumInactivityPeriods =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'maxNumInactivityPeriods',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"maxNumServices"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMaxNumServices =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'maxNumServices',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"minStakingDeposit"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMinStakingDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'minStakingDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"minStakingDuration"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingMinStakingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'minStakingDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"numAgentInstances"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingNumAgentInstances =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'numAgentInstances',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"proxyHash"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingProxyHash =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'proxyHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"rewardsPerSecond"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingRewardsPerSecond =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'rewardsPerSecond',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"serviceRegistry"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingServiceRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'serviceRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"serviceRegistryTokenUtility"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingServiceRegistryTokenUtility =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'serviceRegistryTokenUtility',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"setServiceIds"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingSetServiceIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'setServiceIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"stakingToken"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingStakingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'stakingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"threshold"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'threshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"tsCheckpoint"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useReadServiceStakingTsCheckpoint =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'tsCheckpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStaking = /*#__PURE__*/ createUseWriteContract({
  abi: serviceStakingAbi,
  address: serviceStakingAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"checkpoint"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStakingCheckpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStakingDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"onERC721Received"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStakingOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"stake"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStakingStake = /*#__PURE__*/ createUseWriteContract(
  {
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'stake',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"unstake"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWriteServiceStakingUnstake =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'unstake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStaking =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"checkpoint"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStakingCheckpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStakingDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"onERC721Received"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStakingOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"stake"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStakingStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingAbi}__ and `functionName` set to `"unstake"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useSimulateServiceStakingUnstake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    functionName: 'unstake',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"Checkpoint"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingCheckpointEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'Checkpoint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"Deposit"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"ServiceStaked"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingServiceStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'ServiceStaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"ServiceUnstaked"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingServiceUnstakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'ServiceUnstaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"ServicesEvicted"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingServicesEvictedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'ServicesEvicted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2Ef503950Be67a98746F484DA0bBAdA339DF3326)
 */
export const useWatchServiceStakingWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingAbi,
    address: serviceStakingAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__
 */
export const useReadServiceStakingToken = /*#__PURE__*/ createUseReadContract({
  abi: serviceStakingTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"VERSION"`
 */
export const useReadServiceStakingTokenVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"agentIds"`
 */
export const useReadServiceStakingTokenAgentIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'agentIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"availableRewards"`
 */
export const useReadServiceStakingTokenAvailableRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'availableRewards',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"balance"`
 */
export const useReadServiceStakingTokenBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'balance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"calculateServiceStakingLastReward"`
 */
export const useReadServiceStakingTokenCalculateServiceStakingLastReward =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'calculateServiceStakingLastReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"calculateServiceStakingReward"`
 */
export const useReadServiceStakingTokenCalculateServiceStakingReward =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'calculateServiceStakingReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"configHash"`
 */
export const useReadServiceStakingTokenConfigHash =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'configHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"epochCounter"`
 */
export const useReadServiceStakingTokenEpochCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'epochCounter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"getAgentIds"`
 */
export const useReadServiceStakingTokenGetAgentIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'getAgentIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"getNextRewardCheckpointTimestamp"`
 */
export const useReadServiceStakingTokenGetNextRewardCheckpointTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'getNextRewardCheckpointTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"getServiceIds"`
 */
export const useReadServiceStakingTokenGetServiceIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'getServiceIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"getServiceInfo"`
 */
export const useReadServiceStakingTokenGetServiceInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'getServiceInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"getServiceStakingState"`
 */
export const useReadServiceStakingTokenGetServiceStakingState =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'getServiceStakingState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"livenessPeriod"`
 */
export const useReadServiceStakingTokenLivenessPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'livenessPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"livenessRatio"`
 */
export const useReadServiceStakingTokenLivenessRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'livenessRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"mapServiceInfo"`
 */
export const useReadServiceStakingTokenMapServiceInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'mapServiceInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"maxInactivityDuration"`
 */
export const useReadServiceStakingTokenMaxInactivityDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'maxInactivityDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"maxNumInactivityPeriods"`
 */
export const useReadServiceStakingTokenMaxNumInactivityPeriods =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'maxNumInactivityPeriods',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"maxNumServices"`
 */
export const useReadServiceStakingTokenMaxNumServices =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'maxNumServices',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"minStakingDeposit"`
 */
export const useReadServiceStakingTokenMinStakingDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'minStakingDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"minStakingDuration"`
 */
export const useReadServiceStakingTokenMinStakingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'minStakingDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"numAgentInstances"`
 */
export const useReadServiceStakingTokenNumAgentInstances =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'numAgentInstances',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"proxyHash"`
 */
export const useReadServiceStakingTokenProxyHash =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'proxyHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"rewardsPerSecond"`
 */
export const useReadServiceStakingTokenRewardsPerSecond =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'rewardsPerSecond',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"serviceRegistry"`
 */
export const useReadServiceStakingTokenServiceRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'serviceRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"serviceRegistryTokenUtility"`
 */
export const useReadServiceStakingTokenServiceRegistryTokenUtility =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'serviceRegistryTokenUtility',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"setServiceIds"`
 */
export const useReadServiceStakingTokenSetServiceIds =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'setServiceIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"stakingToken"`
 */
export const useReadServiceStakingTokenStakingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'stakingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"threshold"`
 */
export const useReadServiceStakingTokenThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'threshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"tsCheckpoint"`
 */
export const useReadServiceStakingTokenTsCheckpoint =
  /*#__PURE__*/ createUseReadContract({
    abi: serviceStakingTokenAbi,
    functionName: 'tsCheckpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__
 */
export const useWriteServiceStakingToken = /*#__PURE__*/ createUseWriteContract(
  { abi: serviceStakingTokenAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useWriteServiceStakingTokenCheckpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingTokenAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteServiceStakingTokenDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingTokenAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteServiceStakingTokenOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingTokenAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteServiceStakingTokenStake =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingTokenAbi,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"unstake"`
 */
export const useWriteServiceStakingTokenUnstake =
  /*#__PURE__*/ createUseWriteContract({
    abi: serviceStakingTokenAbi,
    functionName: 'unstake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__
 */
export const useSimulateServiceStakingToken =
  /*#__PURE__*/ createUseSimulateContract({ abi: serviceStakingTokenAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useSimulateServiceStakingTokenCheckpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingTokenAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateServiceStakingTokenDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingTokenAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateServiceStakingTokenOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingTokenAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateServiceStakingTokenStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingTokenAbi,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `functionName` set to `"unstake"`
 */
export const useSimulateServiceStakingTokenUnstake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: serviceStakingTokenAbi,
    functionName: 'unstake',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__
 */
export const useWatchServiceStakingTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: serviceStakingTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"Checkpoint"`
 */
export const useWatchServiceStakingTokenCheckpointEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'Checkpoint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchServiceStakingTokenDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"ServiceStaked"`
 */
export const useWatchServiceStakingTokenServiceStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'ServiceStaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"ServiceUnstaked"`
 */
export const useWatchServiceStakingTokenServiceUnstakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'ServiceUnstaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"ServicesEvicted"`
 */
export const useWatchServiceStakingTokenServicesEvictedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'ServicesEvicted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link serviceStakingTokenAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchServiceStakingTokenWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: serviceStakingTokenAbi,
    eventName: 'Withdraw',
  })
