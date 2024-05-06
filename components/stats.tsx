'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query'
import { getBuiltGraphSDK } from '@/.graphclient'
import { useMemo, useState } from 'react'
import { getTradeStatistics, getTradeMetrics, weiToXdai } from '@/lib/utils'
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
interface StatsProps {
  id: string;
  jan2024: number;
  today: number;
}

interface TradeStatistics {
  total: number;
  open: number;
  pending: number;
  finalizing: number;
  arbitriting: number;
  closed: number;
  unknown: number;
}

const sdk = getBuiltGraphSDK()

export function Stats({ id, jan2024, today }: StatsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMetricOpen, setIsMetricOpen] = useState(false)


  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['allTrades'],
    queryFn: () => sdk.AllTrades({ creator: id.toLowerCase() }),
    enabled: !!id
  });

  const tradeStatistics = useMemo(() => {
    if (data?.fpmmTrades) {
      return getTradeStatistics(data.fpmmTrades);
    }
    return {
      total: 0,
      open: 0,
      pending: 0,
      finalizing: 0,
      arbitriting: 0,
      closed: 0,
      unknown: 0
    };
  }, [data]);
 
  const tradeMetrics = useMemo(() => {
    if (data?.fpmmTrades) {
      return getTradeMetrics(data.fpmmTrades);
    }
    return {
      winnerTradesPercentage: 0,
      winnerTrades: 0,
      totalEarnings: 0,
      totalRedemptions: 0,
      totalInvestment: 0,
      totalFees: 0,
      roi: 0,
    };
  }, [data]);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col gap-2">
      <Card className="p-4">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className=" space-y-2"
          >
            <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">
            {tradeStatistics.total} Total trades : {tradeMetrics.winnerTrades} Trades won ({Math.floor(tradeMetrics.winnerTradesPercentage)}%)
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <span className="">Expand</span>
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>

          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.open}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Open
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.pending}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Pending
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.finalizing}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Finalizing
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.arbitriting}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Arbitriting
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.closed}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Closed
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.unknown}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Unknown
              </span>
            </div>
            
          </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
      {/* <Card className="p-4">
        <Collapsible open={isMetricOpen}
          onOpenChange={setIsMetricOpen}
          className=" space-y-2">
            <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">
            Trades Metrics
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>

          <div className="flex justify-between gap-3">
          <div className="flex flex-col gap-0">
            <span className="font-bold">{tradeMetrics.winnerTrades}  ({tradeMetrics.winnerTradesPercentage}%)</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Trades won
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalEarnings))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Earnings
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalInvestment))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Total Investment
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalFees))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Fees
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{0}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              ROI
            </span>
          </div>
          </div>
          </CollapsibleContent>
        </Collapsible>
      </Card> */}
          


      
    </div>
  );
}
