import MyButton from "../components/MyButton.vue";

import { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "MyButton",
  component: MyButton,
} as Meta<typeof MyButton>;

export const Primary: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: '<MyButton primary label="Button" />',
});

export const Secondary: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: '<MyButton background="#ff0" label="😄👍😍💯" />',
});

const Template: StoryFn<typeof MyButton> = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

export const Tertiary = Template.bind({});
Tertiary.args = { label: "📚📕📈🤓" };
