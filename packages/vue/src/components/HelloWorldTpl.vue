<!-- Vue template Component -->
<template>
  <!-- <div>Single root element no longer required in vue 3 -->
    <h1 class="greeting">Hello {{name}}</h1>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    name: String
  },
  setup(props) {
    props.name
  }
};
</script>

<style>
.greeting {
  color: fuchsia
}
</style>