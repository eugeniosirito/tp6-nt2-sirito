<template>
  <section class="navigator">
      <button @click="restart()">
        {{ this.$store.state.restartButton }}
      </button>

      <span class="message">{{ this.$store.state.messageDisplay }} </span>

      <button @click="easy()" :class="{ selected: !setHard }">
        {{ easyButton }}
      </button>

      <button @click="hard()" :class="{ selected: setHard }">
        {{ hardButton }}
      </button>

  </section>
</template>

<script>
export default {
  name: "src-componentes-navigator",
  props: [],
  mounted() {
    this.restart();
  },

  updated() {},

  data() {
    return {         
      easyButton: "Easy",
      hardButton: "Hard",      
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.message {
  color: #000;
  display: inline-block;
  width: 20%;
}
button {
  border: none;
  background-color: white; 
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
.selected {
  background-color: steelblue;
  color: white;
}
</style>

