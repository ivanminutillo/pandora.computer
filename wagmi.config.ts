import { defineConfig } from '@wagmi/cli'
import contract from './contracts/ServiceStakingToken.json'
import {react, etherscan} from '@wagmi/cli/plugins'
import { gnosis, mainnet } from 'wagmi/chains'
export default defineConfig({
  out: 'contracts/generated.ts',
  contracts: [
    {
      name: "ServiceStakingToken",
      abi: contract.abi as any
    }
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: gnosis.id,
      contracts: [
        {
          name: 'ServiceStaking',
          address: {
            [gnosis.id]: '0x2Ef503950Be67a98746F484DA0bBAdA339DF3326',
          },
        },
      ],
    }),
    react()],
})
