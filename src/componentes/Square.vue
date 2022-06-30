<template>
  <section class="square" :style="{background: getStyle(index)}" @click="resolver(color, index)">
  </section>
</template>


<script>
export default {
  name: "src-componentes-square",
  props: ["color","index"],

  mounted() {},

  data() {
    return {
      white: false,
      elColor: ''
    };
  },
  methods: {
   
    
    
  },
  computed: {},
};
</script>

<style scoped lang="css">
.square {
  width: 30%;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
