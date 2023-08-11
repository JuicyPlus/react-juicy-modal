import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "components/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Common: Story = {
  args: {
    title: "확인하시겠습니까?",
    buttons: [
      {
        label: "확인",
        onClick: () => {
          console.log("OK");
        },
      },
      {
        label: "닫기",
        onClick: () => {
          console.log("Close");
        },
      },
    ],
    content: "변경사항을 적용합니다!",
    onClose: () => {
      console.log("onClose");
    },
  },
};
