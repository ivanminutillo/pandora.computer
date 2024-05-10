/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { request, gql } from "graphql-request";
import { getTradeStatistics, getTradeMetrics } from "@/lib/utils";
import { weiToXdai } from "@/lib/utils";

const OMEN_XDAI_SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/protofire/omen-xdai";

const OMEN_XDAI_TRADES_QUERY = gql`
  query ($creator: String!) {
    fpmmTrades(
      where: { type: Buy, creator: $creator }
      first: 1000
      orderDirection: desc
    ) {
      id
      collateralToken
      outcomeTokenMarginalPrice
      oldOutcomeTokenMarginalPrice
      collateralAmount
      collateralAmountUSD
      feeAmount
      outcomeIndex
      outcomeTokensTraded
      fpmm {
        id
        outcomes
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

async function fetchOmenXDaiTrades(creator: string): Promise<any[]> {
  const variables = {
    creator,
  };
  const data:any = await request(
    OMEN_XDAI_SUBGRAPH_URL,
    OMEN_XDAI_TRADES_QUERY,
    variables
  );
  return data;
}


const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async () => {
  return {
    image: (
        <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          fontSize: 32
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            pandora.computer
          </span>
        </div>
        <div style={{ fontSize: 80, margin: "0 75px" }}>🔮</div>
        <div tw="text-4xl mt-6 font-bold">
          Assess your Autonomous Agent performance
        </div>
      </div>
    ),
    textInput: "Enter your agent Safe address...",
    buttons: [
        // With query params
        <Button
          action="post"
          target={{ pathname: "/frames/performance", query: { address: "text" } }}
        >
          Get Performance
        </Button>,
        // Without query params
        <Button action="link" target="https://pandora.computer">
          View Agent Dashboard
        </Button>,
      ]
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;