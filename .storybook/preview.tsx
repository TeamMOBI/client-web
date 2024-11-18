import React from "react";
import localFont from "next/font/local";
import type { Preview } from "@storybook/react";
import { themeClass, vars } from "../src/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#000000",
        },
      ],
    },
  },
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const decorators = [
  (Story) => (
    <div className={`${themeClass} ${pretendard}`}>
      <Story />
    </div>
  ),
];

export default preview;
