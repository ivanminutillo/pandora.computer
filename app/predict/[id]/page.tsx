'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from "next/image"
import { Check, CircleOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { weiToXdai } from '@/lib/utils'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getBuiltGraphSDK } from '@/.graphclient'
import { Separator } from '@/components/ui/separator'
import { useInfiniteQuery } from '@tanstack/react-query';
import { Stats } from '@/components/stats'


const sdk = getBuiltGraphSDK()


function App() {
  const { id } = useParams()
  const [addressBalance, setAddressBalance] = React.useState<string>()
  const creator = String(id).toLowerCase();
  // const [tradesPerPage] = React.useState(10);
  

  const jan2024 = new Date('2024-01-01T00:00:00Z').getTime();  
  const today = new Date().getTime();
  


  const fetchTotalInvestment = (trades: any) => {
    console.log(trades)
    try {
      let totalInvestment = 0;
      trades.fpmmTrades.forEach((trade: { collateralAmount: string }) => {
          totalInvestment += parseInt(trade.collateralAmount);
      });
      console.log(totalInvestment)
      return weiToXdai(BigInt(totalInvestment))
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  const fetchNetEarnings = (trades: any) => {
    try {
       
        let totalInvestment = 0;
        let totalFees = 0;
        let totalEarnings = 0;

        trades.fpmmTrades.forEach((trade: { collateralAmount: string; feeAmount: string; outcomeTokensTraded: string }) => {
            const collateralAmount = parseInt(trade.collateralAmount);
            const feeAmount = parseInt(trade.feeAmount);
            const earnings = parseInt(trade.outcomeTokensTraded); // Simplified assumption

            totalInvestment += collateralAmount;
            totalFees += feeAmount;
            totalEarnings += earnings;
        });

        const netEarnings = totalEarnings - (totalInvestment + totalFees);
        return weiToXdai(BigInt(netEarnings))
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

  const market_status = function(market: any) {
    const utcOpeningTimestamp = new Date(market.fpmm.openingTimestamp * 1000).getTime();
    const utcFinalizedTimestamp = new Date(market.fpmm.answerFinalizedTimestamp * 1000).getTime();
    try {
      if (market.fpmm.currentAnswer == null && today >= utcOpeningTimestamp) {
        return "Pending"
      } else if (market.fpmm.currentAnswer == null) {
        return "Open"
      } else if (market.fpmm.isPendingArbitration) {
        return "Arbitrating"
      } else if (today < utcFinalizedTimestamp) {
        return "Finalizing"
      } else {
        return "Closed"
      }
    } catch (error) {
      console.error(error);
      return "Exception"
    }
  }

  const fetchAccountBalance = async () => {
    const apiKey = process.env.GNOSIS_API_KEY;
    const accountAddress = creator;
    const url = `https://api.gnosisscan.io/api?module=account&action=balance&address=${accountAddress}&tag=latest&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === '1') {
        const addressBalance = weiToXdai(data.result)
        return setAddressBalance(addressBalance)
      } else {
        console.error('Failed to fetch balance:', data.message);
      }
    } catch (error) {
      console.error('Error fetching account balance:', error);
    }
  };

  const fetchTrades = async ({ pageParam = 0 }) => {
    const result = await sdk.Trades({
        creator: creator, 
        fromTimestamp: BigInt(Math.floor(jan2024 / 1000)).toString(), 
        toTimestamp: BigInt(Math.floor(today / 1000)).toString(), 
        first: 10, 
        skip: pageParam
    })
    return result
    // const result = await execute(TradesDocument, {
    //   creator: creator,
    //   fromTimestamp: BigInt(Math.floor(jan2024 / 1000)).toString(),
    //   toTimestamp: BigInt(Math.floor(today / 1000)).toString(),
    //   first: 10,
    //   skip: pageParam,
    // });
    // console.log(result)
    // return result.data;
  };
  

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['trades'],
    queryFn: ({ pageParam }) => fetchTrades({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPage.fpmmTrades.length === 10 ? allPages.length * 10 : undefined;
    }
  })


  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   status,
  //   isFetchingNextPage,
  // } = useInfiniteQuery({
  //     queryKey: ['trades'], 
  //     queryFn: fetchTrades, 
  //     getNextPageParam: (lastPage, pages) => {
  //       const nextOffset = pages.length * 10;
  //       return lastPage.fpmmTrades.length === 10 ? nextOffset : undefined;
  //     },
  //     initialPageParam: 0
  // });


  useEffect(() => {
    fetchAccountBalance();
  }, [setAddressBalance]);

  const trades = data?.pages.flatMap((page) => page.fpmmTrades) || [];

  return status === 'pending' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error</p>
  ) : (
    <>
    {data && (
      <div className="App p-2 md:p-0">
        <div className='max-w-screen-md mx-auto md:my-6'>
          <div className='h-60 rounded-md bg-muted-foreground bg-center' style={{backgroundImage: 'url("/coastal.webp")'}}>
          </div>
          <div className='md:-mt-12 px-6 mb-8 flex-col md:flex-row flex items-center gap-6'>
            <div className='w-40 h-40 -mt-12 md:mt-0 border-2 border-background rounded-full bg-muted-foreground'>
              <Image src="/416.png" alt="avatar" className="rounded-full" width={160} height={160} />
            </div>
            <div className='flex md:mt-10 text-center md:text-left flex-col gap-1'>
              <span className='font-bold text-xl'>Trader Agent</span>
              <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                Safe address: {creator}
              </span>
              <div className='flex items-center mt-1 gap-3'>
                <span className='text-sm'>
                  <span className='font-bold'>{addressBalance}</span> <span className='text-muted-foreground'>Address Balance</span>
                </span>
                {/* <span>·</span>
                <span className='text-sm'>
                  <span className='font-bold'>ToDo WxDAI</span> <span className='text-muted-foreground'>Token Balance</span>
                </span> */}
              </div>
            </div>
          </div>
          <div>
            <Stats id={creator} jan2024={jan2024} today={today} />
          </div>
          <div className='mt-6 my-4 text-xs text-muted-foreground uppercase tracking-wider pb-2 border-b border-border'>Trades</div>
            <div className='flex flex-col gap-3'>
              {trades.map((trade, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className='font-medium leading-6'>
                        {trade.title}
                        <div className='!text-sm mt-1 !font-normal text-muted-foreground flex items-center gap-2'>
                          <span className='text-sm !font-normal text-muted-foreground'>{new Date(trade.creationTimestamp * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>·</span>
                          <span>Bought {weiToXdai(trade.collateralAmount)} for {weiToXdai(trade.outcomeTokensTraded)} {trade.fpmm.outcomes ? trade.fpmm.outcomes[trade.outcomeIndex] : 'unknown'} tokens</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className='flex flex-col md:flex-row items-center pt-4 justify-between'>
                      <div className='flex items-center gap-10 '>
                        <div className='flex flex-col gap-1'>
                          <div className='flex items-center gap-2'>
                            {trade.fpmm.outcomes && trade.fpmm.outcomes[trade.outcomeIndex] == 'Yes' ? 
                            <div className='flex items-center gap-2'>
                              <Check className="w-4 h-4 text-green-500" />
                              <span className='font-bold text-green-500'>Yes</span>
                            </div> : 
                            <div className='flex items-center gap-2'>
                              <CircleOff className="w-4 h-4 text-red-500" />
                              <span className='font-bold text-red-500'>No</span>
                            </div>
                            }
                            {/* <span className='font-bold'>{trade.fpmm.outcomes ? trade.fpmm.outcomes[trade.outcomeIndex] : 'unknown'}</span> */}
                            
                          </div>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Agent prevision
                          </span>
                        </div>
                        {/* if market_status(trade) == "Closed" show <span>closed</span> otherwise show <span>{market_status(trade)}</span> */}
                        {market_status(trade) == "Closed" ? (
                          <div className='flex flex-col gap-1'>
                          <div>
                          {trade.fpmm.outcomes && (
  <Badge className='inline'>
    {trade.fpmm.outcomes}
  </Badge>
)}
                          </div>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Final result
                          </span>
                        </div>
                        ) : (
                          <div className='flex flex-col gap-1'>
                            <div>
                              <Badge className='inline' variant="outline">{market_status(trade)}</Badge>
                            </div>
                            <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                              Market status
                            </span>
                          </div>
                        )}

                        <div className='flex flex-col gap-1'>
                          <div>
                            <Badge className='inline' variant="outline">{Math.round(trade.outcomeTokenMarginalPrice * 100)}%</Badge>
                          </div>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Probability
                          </span>
                        </div>
                      </div>
                      <div className='mt-6 md:mt-0 w-full md:w-auto'>
                          <a className={buttonVariants({ variant: "outline" })} target='blank' href={`https://aiomen.eth.limo/#/${trade.fpmm.id}`}>View Market</a>
                      </div>
                    </CardContent>
                  </Card>
              ))}
              
            </div>
            <div className='flex justify-center mt-4'>
                {hasNextPage && (
            <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
        >
            {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
        </Button>
        )}

            </div>
        </div>
      </div>
    )}
      </>
    )
  
}


export default App