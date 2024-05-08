import { useReadContract } from 'wagmi'
import ServiceStakingToken from '@/contracts/ServiceStakingToken.json'
import { useReadServiceStakingToken } from '@/contracts/generated'

export default function StakingBox({id}: {id: string}) {
  console.log(id)
  const { data: balance,
    error,
    isPending} = useReadContract({
    address: '0x2Ef503950Be67a98746F484DA0bBAdA339DF3326',
    abi: ServiceStakingToken.abi,
    functionName: 'getServiceStakingState',
    args: [416]
  })

  console.log(balance)
  console.log(error)
  console.log(isPending)

      // useEffect(() => {
      //   if (!serviceStakingTokenContract) return;
    
      //   const fetchStakingData = async () => {
      //     const state = await serviceStakingTokenContract.getServiceStakingState(id);
      //     const staked = state === 'STAKED' || state === 'EVICTED';
      //     setIsStaked(staked);
      //     setStakingState(state);
    
      //     const serviceInfo = await serviceStakingTokenContract.mapServiceInfo(id);
      //     setRewards(ethers.utils.formatEther(serviceInfo[3]));
    
      //     const livenessRatio = await serviceStakingTokenContract.livenessRatio();
      //     const nextCheckpointTs = await serviceStakingTokenContract.getNextRewardCheckpointTimestamp();
      //     const livenessPeriod = await serviceStakingTokenContract.livenessPeriod();
      //     const lastCheckpointTs = nextCheckpointTs.sub(livenessPeriod);
      //     // You need to implement _getMechRequestsCount or similar functionality
      //     // setMechRequestsCurrentEpoch(_getMechRequestsCount(mechRequests, lastCheckpointTs));
      //   };
    
      //   fetchStakingData();
      // }, [serviceStakingTokenContract, id]);
      return (
        <div className="flex flex-col items-center justify-center h-[100px] w-[100px] rounded-md bg-gray-100">
            <span>Staking</span>
        </div>
    )
}

