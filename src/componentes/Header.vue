<template>
  <section>
    <div class="header pb-2" :style="{ background: this.$store.state.colorDisplay }">
      <h1>
        The Great <br />
        <span class="colorDisplay">{{ setPickedColor }}</span>
        <br />
        Guessing Game
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-encabezado",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.colorDisplay {
  font-size: 200%;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}

.header {
  transition: all 0.3s;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
</style>
