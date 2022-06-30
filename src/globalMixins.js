import Vue from 'vue';

const miMixingGlobal = {


  methods: {
    easy() {
      this.$store.dispatch('easy')
      this.restart();
    },

    hard() {
      this.$store.dispatch('hard')
      this.restart();
    },

    restart() {
      this.colors = this.createNewColors(this.$store.state.colorCount);
      this.$store.dispatch('colors', this.colors);
      this.$store.state.colorDisplay = "steelblue"
      this.pickedColor = this.colors[this.pickColor()]
      this.$store.dispatch('pickedColor', this.colors[this.pickColor()]);
      this.$store.state.messageDisplay = ""
      this.$store.state.restartButton = "NEW COLORS!"

    },

    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },

    pickColor() {
      var quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },

    createRandomStringColor() {
      var newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },



    actualizarColores(color) {
      this.$store.dispatch("actualizarColores", color);
    },

    resolver(color, index) {
      if (this.setPickedColor === color) {

        this.$store.dispatch("actualizarColores", this.setPickedColor);
        this.$store.state.messageDisplay = "You Picked Right!"
        this.$store.state.restartButton = "Play Again!"

      } else {
        this.elColor = "white"
        this.getStyle("white")
        this.$store.state.colors[index] = "#232323"
        this.$store.state.messageDisplay = "Try Again!"
      }
    },

    getStyle(index) {
      this.elColor = this.$store.state.colors[index]
      return this.elColor
    },





  },
  computed: {
    mostrarContadorVuex() {
      let contador = this.$store.state.contador
      return contador
    },

    setHard() {
      let hard = this.$store.state.isHard
      return hard
    },

    setPickedColor() {
      let pickedColor = this.$store.state.pickedColor
      return pickedColor
    },

    getColors() {
      let colors = this.$store.state.colors
      return colors
    },

    getEstadoJuego() {
      let estadoJuego = this.$store.state.estadoJuego
      return estadoJuego
    }




  }
}

Vue.mixin(miMixingGlobal)