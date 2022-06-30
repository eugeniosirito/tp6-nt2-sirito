import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        colors: [],
        pickedColor: "",
        isHard: true,
        restartButton: "",
        colorCount: 6,
        messageDisplay: "",
        colorDisplay: "",
    },

    actions: {
        async hard({ commit }) {
            commit('hard')
        },
        async easy({ commit }) {
            commit('easy')
        },
        async pickedColor({ commit }, pickedColor) {
            commit('pickedColor', pickedColor)
        },
        async actualizarColores({ commit }, color) {
            commit('actualizar_colores', color)
        },
        async finDelJuego({ commit }, estado) {
            commit('set_estadoJuego', estado)
        },
        async colors({ commit }, colors) {
            commit('set_colors', colors)
        },
    },

    mutations: {
        easy(state) {
            state.isHard = false;
            state.colorCount = 3;
        },
        hard(state) {
            state.isHard = true;
            state.colorCount = 6;
        },
        pickedColor(state, color) {
            state.pickedColor = color;
        },

        set_colors(state, colors) {
            state.colors = colors;
        },

        set_estadoJuego(state, estado) {
            state.estadoJuego = estado;
        },

        actualizar_colores(state, color) {
            let colorsAux = []
            for (let i = 0; i < state.colors.length; i++) {
                colorsAux.push(color)
            }
            state.colors = colorsAux
            state.colorDisplay = color
        },
    },
})



