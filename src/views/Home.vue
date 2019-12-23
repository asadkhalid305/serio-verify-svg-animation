<template>
  <div id="home">
    <div id="container">
      <Intro />
      <Works />
      <Outcome />
      <Quality />
      <Profitability />
      <Features />
    </div>
  </div>
</template>

<script>
import Intro from "../components/intro";
import Works from "../components/works";
import Outcome from "../components/outcome";
import Quality from "../components/quality";
import Profitability from "../components/profitability";
import Features from "../components/features";

import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      sectionsHeight: []
    };
  },
  components: {
    Intro,
    Works,
    Outcome,
    Quality,
    Profitability,
    Features
  },
  methods: {
    ...mapActions(["getSectionsPercetages"])
  },
  mounted() {
    this.getSectionsPercetages();
  }
};
</script>

<style scoped>
#container {
  position: relative;
  height: 4475.5vh;
  width: 100%;
  overflow: hidden;
  background-color: #111;
}
</style>
