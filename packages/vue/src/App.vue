<template>
  <HelloWorldFn name="World" />
</template>

<script>
import HelloWorldFn from "./components/HelloWorldFn.vue";
// import HelloWorldTpl from './components/HelloWorldTpl.vue'

export default {
  name: "App",
  components: {
    HelloWorldFn,
    // HelloWorldTpl
  },
};
</script>

<style>
:root {
  --brand-color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
