/** @jsxImportSource frog/jsx */
import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/next";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
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

const app = new Frog({
  basePath: "/api",
  browserLocation: "/",
});

app.frame("/", async (c) => {
  const { buttonValue, status, inputText } = c;

  return c.res({
    browserLocation: "/",
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
    intents: [
      <TextInput key="input" placeholder="Enter your agent Safe address..." />,
      <Button key="button" action="/performance" value={inputText}>
        Get Performance
      </Button>,
      <Button.Link key="link" href="https://pandora.computer">
        Visit Dashboard
      </Button.Link>,
    ],
  });
});

app.frame("/performance", async (c) => {
  const { inputText } = c;

  const trades: any = await fetchOmenXDaiTrades(
    String(inputText).toLowerCase()
  );
  const stats = getTradeStatistics(trades?.fpmmTrades);
  const metrics = getTradeMetrics(trades?.fpmmTrades);
  return c.res({
    image: (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
        }}
        >
        <div tw="flex flex-col w-2/3 my-6 bg-white/70 p-8">
          <div tw="flex items-center flex-row">
            <span tw="text-4xl font-medium">🤖</span>
            <span tw="text-2xl bg-blue-200 p-2 rounded-md text-blue-900 ml-4 px-3 font-medium">{inputText}</span>
          </div>
          
          {/* <div tw="flex flex-row mt-6 pt-6 border-t border-gray-300 justify-between">
            <span tw="text-2xl font-medium">SAFE BALANCE</span>
            <span tw="text-4xl font-medium">46.18 xDAI</span>
          </div> */}
          <div tw="flex flex-row items-center mt-8 pt-8 border-t-2 border-gray-300 justify-between">
            <span tw="text-2xl font-medium">EARNING %</span>
            <span tw="text-4xl font-medium">{Math.floor(metrics.winnerTradesPercentage)}%</span>
          </div>
          <div tw="flex flex-row items-center mt-8 justify-between">
            <span tw="text-2xl font-medium">TOTAL EARNINGS</span>
            <span tw="text-4xl font-medium">{weiToXdai(BigInt(metrics.totalEarnings))}</span>
          </div>
          <div tw="flex flex-row items-center mt-8 justify-between">
            <span tw="text-2xl font-medium">INVESTED</span>
            <span tw="text-4xl font-medium">{weiToXdai(BigInt(metrics.totalInvestment))}</span>
          </div>
          <div tw="flex flex-row p-10 px-6 mt-6 items-center bg-blue-600 text-white rounded-lg justify-between text-white">
          <div tw="flex flex-col items-center gap-4">
            <span tw="text-6xl font-extrabold">{stats.total}</span>
            <span tw="text-2xl">TOTAL TRADES</span>
          </div>
          <div tw="flex flex-col items-center  gap-4">
            <span tw="text-6xl font-extrabold">{stats.open}</span>
            <span tw="text-2xl">OPEN TRADES</span>
          </div>
          <div tw="flex flex-col items-center   gap-4">
            <span tw="text-6xl font-extrabold">{metrics.winnerTrades}</span>
            <span tw="text-2xl">WINNING TRADES</span>
          </div>
          <div tw="flex flex-col items-center  gap-4">
            <span tw="text-6xl font-extrabold">{stats.closed + stats.pending - metrics.winnerTrades}</span>
            <span tw="text-2xl">LOST TRADES</span>
          </div>
        </div>
        </div>
      </div>
    ),
    intents: [
      <Button key="back" action="/">
        Back
      </Button>,
      <Button.Link key="dashboard" href={`https://pandora.computer/predict/${inputText}`}>
        View Agent Dashboard
      </Button.Link>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
