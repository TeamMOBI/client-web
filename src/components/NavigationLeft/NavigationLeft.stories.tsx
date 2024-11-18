import type { Meta, StoryObj } from "@storybook/react";
import { NavigationLeft, NavigationLeftProps } from "./NavigationLeft";

const meta = {
  title: "Example/NavigationLeft",
  component: NavigationLeft,
  decorators: [
    (Story) => (
      <div style={{ width: 1000 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<NavigationLeftProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
