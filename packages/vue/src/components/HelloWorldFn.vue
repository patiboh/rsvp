<!-- Vue render function Component -->
<script>
import { h } from "vue";
export default {
  props: {
    name: String,
  },
  setup(props) {
    return () => h("h1", { class: "greeting" }, ["Hello ", props.name]);
  },
};
</script>

<style>
.greeting {
  color: var(--brand-color);
}
</style>