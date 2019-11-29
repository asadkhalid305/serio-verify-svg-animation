<template>
  <div id="home">
    <div id="container">
      <Intro />
      <Intro2 />
      <Outcome />
      <Quality />
    </div>
  </div>
</template>

<script>
import Intro from "../components/intro";
import Intro2 from "../components/intro2";
import Outcome from "../components/outcome";
import Quality from "../components/quality";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      sectionsHeight: []
    };
  },
  components: { Intro, Intro2, Outcome, Quality },
  computed: mapGetters(["sectionsEndingPerc"]),
  methods: {
    ...mapActions(["getSectionsPercetages"])
  },
  mounted() {
    this.getSectionsPercetages();
    // window.console.log(this.sectionsEndingPerc);
  }
};
</script>

<style scoped>
#container {
  position: relative;
  height: 1000vh;
  width: 100%;
}
</style>
