<template>
  <section class="container">
    <div class="container h-auto d-inline-block">
    <Square
      v-for="(color, index) in getColors"
      :key="index"
      :color="color"
      :index="index"
    />
    </div>
  </section>
</template>

<script>
import Square from "./Square.vue";

export default {
  name: "src-componentes-container",

  props: [],

  components: {
    Square,
  },

  mounted() {},
  updated() {},

  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.container {
  margin: 20px auto;
  max-width: 600px;
  
}
</style>
