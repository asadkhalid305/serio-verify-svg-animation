<template>
  <div id="home">
    <div id="container">
      <Intro />
      <Outcome />
    </div>
  </div>
</template>

<script>
import Intro from "../components/intro";
import Outcome from "../components/outcome";

export default {
  name: "home",
  data() {
    return {};
  },
  components: { Intro, Outcome }
};
</script>

<style scoped>
#container {
  position: relative;
  height: 400vh;
  width: 100%;
}
</style>
