// @ts-nocheck
// ignore ts
import { request, gql } from 'graphql-request';
// Import the necessary types
import { NextResponse } from 'next/server';

import type { NextApiRequest, NextApiResponse } from 'next';

// Define the response data type for better type safety
type ResponseData = {
  message: string;
};
const OMEN_XDAI_SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/protofire/omen-xdai';
const CONDITIONAL_TOKENS_GC_SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/gnosis/conditional-tokens-gc';

const CONDITIONAL_TOKENS_GC_USER_QUERY = gql`
  query($id: String!, $first: Int!, $userPositionsIdGt: String!) {
    user(id: $id) {
      userPositions(
        first: $first
        where: {
          id_gt: $userPositionsIdGt
        }
        orderBy: id
      ) {
        balance
        id
        position {
          id
          conditionIds
        }
        totalBalance
        wrappedBalance
      }
    }
  }
`;
const OMEN_XDAI_TRADES_QUERY = gql`
  query($creator: String!, $fromTimestamp: Int!, $toTimestamp: Int!, $fpmmFromTimestamp: Int!, $fpmmToTimestamp: Int!, $first: Int!, $creationTimestampGt: String!) {
    fpmmTrades(
      where: {
        type: Buy,
        creator: $creator,
        fpmm_: {
          creator: "0x89c5cc945dd550bcffb72fe42bff002429f46fec"
          creationTimestamp_gte: $fpmmFromTimestamp,
          creationTimestamp_lt: $fpmmToTimestamp
        },
        creationTimestamp_gte: $fromTimestamp,
        creationTimestamp_lte: $toTimestamp
        creationTimestamp_gt: $creationTimestampGt
      }
      first: $first
      orderBy: creationTimestamp
      orderDirection: asc
    ) {
      id
      title
      collateralToken
      outcomeTokenMarginalPrice
      oldOutcomeTokenMarginalPrice
      type
      creator {
        id
      }
      creationTimestamp
      collateralAmount
      collateralAmountUSD
      feeAmount
      outcomeIndex
      outcomeTokensTraded
      transactionHash
      fpmm {
        id
        outcomes
        title
        answerFinalizedTimestamp
        currentAnswer
        isPendingArbitration
        arbitrationOccurred
        openingTimestamp
        condition {
          id
        }
      }
    }
  }
`;

const QUERY_BATCH_SIZE = 1000;
 

async function fetchOmenXDaiTrades(
    creator: string,
    fromTimestamp: number,
    toTimestamp: number,
    fpmmFromTimestamp: number,
    fpmmToTimestamp: number
  ): Promise<any[]> {
    let allResults: any[] = [];
    let creationTimestampGt = '0';
  
    while (true) {
      const variables = {
        creator,
        fromTimestamp,
        toTimestamp,
        fpmmFromTimestamp,
        fpmmToTimestamp,
        first: QUERY_BATCH_SIZE,
        creationTimestampGt,
      };
  
      const data = await request(OMEN_XDAI_SUBGRAPH_URL, OMEN_XDAI_TRADES_QUERY, variables);
      console.log("data qui")
      console.log(data)
      const trades = data.fpmmTrades;
  
      if (trades.length === 0) {
        break;
      }
  
      allResults = [...allResults, ...trades];
      creationTimestampGt = trades[trades.length - 1].creationTimestamp;
    }
  
    return allResults;
  }

  async function fetchConditionalTokensGCUserPositions(creator: string): Promise<any[]> {
    let allResults: any[] = [];
    let userPositionsIdGt = '';
  
    while (true) {
      const variables = {
        id: creator.toLowerCase(),
        first: QUERY_BATCH_SIZE,
        userPositionsIdGt,
      };
  
      const data = await request(CONDITIONAL_TOKENS_GC_SUBGRAPH_URL, CONDITIONAL_TOKENS_GC_USER_QUERY, variables);
      const userPositions = data.user?.userPositions || [];
  
      if (userPositions.length === 0) {
        break;
      }
  
      allResults = [...allResults, ...userPositions];
      userPositionsIdGt = userPositions[userPositions.length - 1].id;
    }
  
    return allResults;
  }



  // export async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  //     const { creator, fromTimestamp, toTimestamp, fpmmFromTimestamp, fpmmToTimestamp } = req.body;
  
  //     const trades = await fetchOmenXDaiTrades(creator, fromTimestamp, toTimestamp, fpmmFromTimestamp, fpmmToTimestamp);
  //     const userPositions = await fetchConditionalTokensGCUserPositions(creator);
  
  //     res.status(200).json({ trades, userPositions });
   
  // }

  export async function POST(request: Request) {
    const { creator, fromTimestamp, toTimestamp, fpmmFromTimestamp, fpmmToTimestamp } = await request.json();
    const trades = await fetchOmenXDaiTrades(creator, fromTimestamp, toTimestamp, fpmmFromTimestamp, fpmmToTimestamp);
    const userPositions = await fetchConditionalTokensGCUserPositions(creator);
    return NextResponse.json({ trades, userPositions });
    }