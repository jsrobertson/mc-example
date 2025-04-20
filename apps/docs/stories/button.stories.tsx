import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mc-example/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      onClick={() => {
        alert("Button clicked");
      }}
      {...props}
    >
      Click me
    </Button>
  ),
  name: "Primary",
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  ...Primary,
  name: "Secondary",
  args: {
    variant: "secondary",
  },
};
