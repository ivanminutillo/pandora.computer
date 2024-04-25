'use client'
import React, { useEffect } from 'react'
import Donought from '@/components/donought'
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { TradesDocument, TradesQuery, execute } from '../.graphclient'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
  
function App() {
  const [data, setData] = React.useState<TradesQuery>()
  const [addressBalance, setAddressBalance] = React.useState<string>()
  const creator = '0xccb133749b4a2d58be39d66238e56f29D042c219'.toLowerCase();

  const jan2024 = new Date('2024-01-01T00:00:00Z').getTime();  
  const today = new Date().getTime();
  
  const weiToXdai = (wei: bigint): string => {
    const xdai = Number(wei) / 1e18; // Convert wei to xDAI
    return `${xdai.toFixed(2)} xDAI`;
  }

  const fetchTotalInvestment = (trades: any) => {
    try {
      let totalInvestment = 0;
      trades.fpmmTrades.forEach((trade: { collateralAmount: string }) => {
          totalInvestment += parseInt(trade.collateralAmount);
      });
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

  useEffect(() => {
    execute(TradesDocument, {
      creator: creator, // Assuming 'creator' is already a String
      fromTimestamp: BigInt(Math.floor(jan2024 / 1000)).toString(),
      toTimestamp: BigInt(Math.floor(today / 1000)).toString(),
      first: 1000, // As an Int
    }).then((result) => {
      console.log(result)
      setData(result?.data)
    })
  }, [setData])

  useEffect(() => {
    fetchAccountBalance();
  }, [setAddressBalance]);
  return (
    data && (
      <div className="App p-2 md:p-0">
        <div className='max-w-screen-md mx-auto md:my-6'>
          <div className='h-60 rounded-md bg-muted-foreground bg-center' style={{backgroundImage: 'url("/coastal.webp")'}}>
          </div>
          <div className='md:-mt-12 px-6 mb-8 flex-col md:flex-row flex items-center gap-6'>
            <div className='w-40 h-40 -mt-12 md:mt-0 border-2 border-background rounded-full bg-muted-foreground'>
              <Image src="/416.png" alt="avatar" className="rounded-full" width={160} height={160} />
            </div>
            <div className='flex md:mt-10 text-center md:text-left flex-col gap-1'>
              <span className='font-bold text-xl'>Agent Pandora #421</span>
              <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                Safe address: {creator}
              </span>
              <div className='flex items-center gap-3'>
                <span className='text-sm'>
                  <span className='font-bold'>{addressBalance}</span> <span className='text-muted-foreground'>Address Balance</span>
                </span>
                <span>·</span>
                <span className='text-sm'>
                  <span className='font-bold'>ToDo WxDAI</span> <span className='text-muted-foreground'>Token Balance</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            {/* <div className=''>
              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                <div className='flex justify-between'>
                    <Donought />
                  <div className='max-w-[250px] w-full flex border-l border-border px-12  place-content-center  flex-col gap-3'>
                    <div className='flex flex-col gap-0'>
                      <span className='font-bold'>{fetchTotalInvestment(data)}</span> <span className='uppercase text-xs text-muted-foreground'>Total Investement</span>
                    </div>
                    <div className='flex flex-col gap-0'>
                      <span className='font-bold'>3.43 xDAI</span> <span className='uppercase text-xs text-muted-foreground'>Successfull Trades</span>
                    </div>
                    <div className='flex flex-col gap-0'>
                      <span className='font-bold'>{fetchNetEarnings(data)}</span> <span className='uppercase text-xs text-muted-foreground'>Net Earnings</span>
                    </div>
                    <div className='flex flex-col gap-0'>
                      <span className='font-bold'>20%</span> <span className='uppercase text-xs text-muted-foreground'>ROI</span>
                    </div>

                  </div>
                </div>
                </CardContent>
              </Card>
            </div> */}
          </div>
          <div className='mt-6 my-4 text-xs text-muted-foreground uppercase tracking-wider pb-2 border-b border-border'>Trades</div>
            <div className='flex flex-col gap-3'>
              {data.fpmmTrades.map((trade, i) => (
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
                          <span className='font-bold'>{trade.fpmm.outcomes ? trade.fpmm.outcomes[trade.outcomeIndex] : 'unknown'}</span>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Agent prevision
                          </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <div>
                            <Badge className='inline' variant="outline">{market_status(trade)}</Badge>
                          </div>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Market status
                          </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <div>
                            <Badge className='inline' variant="outline">{trade.type}</Badge>
                          </div>
                          <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                            Type
                          </span>
                        </div>
                      </div>
                      <div className='mt-6 md:mt-0 w-full md:w-auto'>
                        <Button className='w-full md:w-auto'>
                          <a target='blank' href={`https://aiomen.eth.limo/#/${trade.fpmm.id}`}>View Market</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
        </div>
      </div>
    )
  )
}

export default App