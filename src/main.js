import App from "./App.svelte";
// import Gun from "gun/gun";
// const gun = Gun();

const app = new App({
  target: document.body,
  props: {
    // name: 'world'
    // gun: gun,
  },
});

export default app;
