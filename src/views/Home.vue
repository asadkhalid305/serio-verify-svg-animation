<template>
  <div id="home">
    <div id="container">
      <Intro />
      <Works />
      <Outcome />
      <Quality />
      <Profitability />
      <Features />
      <Track />
      <Signup />
      <Process />
      <Contact />
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
import Track from "../components/track";
import Signup from "../components/signup";
import Contact from "../components/contact";
import Process from "../components/process";

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
    Features,
    Track,
    Signup,
    Contact,
    Process
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
