import DurianImage from "./DurianImage.svelte";

export default {
  title: "Image",
  component: DurianImage,
};

export const card = () => ({
  Component: DurianImage,
  props: {
    src: "https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif",
    alt: "Foo bar image alt",
  },
});
