import DurianCard from "./DurianCardView.svelte";

export default {
  title: "Card",
  component: DurianCard,
};

export const card = () => ({
  Component: DurianCard,
  props: {
    heading: "Heading",
  },
});
