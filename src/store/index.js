import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docHeightPerc: 0,
    sectionsEndingPerc: 0
  },
  getters: {
    docHeightPerc: state => state.docHeightPerc,
    sectionsEndingPerc: state => state.sectionsEndingPerc
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
      commit('setDocHeight', scrollProgress)
    },

    getSectionsPercetages({
      commit
    }) {
      var sectionsList = document.querySelectorAll("section");
      var body = document.body,
        html = document.documentElement;

      var documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      let sectionsHeight = {};

      for (let i = 0; i < sectionsList.length; i++) {
        let sum = 0;
        if (i === 0) {
          sectionsHeight[`section${i+1}`] =
            (sectionsList[i].offsetHeight / documentHeight) * 100;
        } else {
          for (let j = 0; j < i; j++) {
            sum += sectionsList[j].offsetHeight;
          }
          sectionsHeight[`section${i+1}`] =
            ((sectionsList[i].offsetHeight + sum) / documentHeight) * 100;
        }
      }
      commit('setSectionsEndingPerc', sectionsHeight)
    }
  },
  mutations: {
    setDocHeight: (state, newDocHeightPerc) => {
      state.docHeightPerc = newDocHeightPerc
    },
    setSectionsEndingPerc: (state, newSectionsEndingPerc) => {
      state.sectionsEndingPerc = newSectionsEndingPerc
    }
  },
})