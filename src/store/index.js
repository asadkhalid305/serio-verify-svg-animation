import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docHeightPerc: 0
  },
  getters: {
    docHeightPerc: state => state.docHeightPerc
  },
  actions: {
    getDocumentHeightPercentage({
      commit
    }) {
      var body = document.body,
        html = document.documentElement;

      var documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      let scrollY = window.pageYOffset;
      let scrollProgress = (scrollY / documentHeight) * 100;
      // window.console.log(scrollProgress);
      commit('setDocHeight', scrollProgress)
    },

    //path covered within svg
    // getSVGPathCoveredPercentage() {
    //   var pathCovered =
    //     this.svg1.getTotalLength() -
    //     this.svg1.getAttribute("stroke-dashoffset");

    //   var percCovered = (pathCovered / this.svg1.getTotalLength()) * 100;
    //   return percCovered;
    // },
  },
  mutations: {
    setDocHeight: (state, newHeightPerc) => {
      state.docHeightPerc = newHeightPerc
    }
  },
})