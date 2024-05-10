/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

import { frames } from "../frames";

export const GET = frames(async () => {
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
          target="/performance"
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
 
