<template>
  <section id="section1a">
    <h1>Hello World!</h1>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Intro2",

  computed: mapGetters(["docHeightPerc", "sectionsEndingPerc"]),
  methods: {
    ...mapActions(["getDocumentHeightPercentage"]),
    //event on scroll
    handleScroll() {
      // this.getDocumentHeightPercentage();
      // window.console.log(this.sectionsEndingPerc.section2);
      // if (this.docHeightPerc < 0) {
      //   this.svg2.setAttribute("stroke-dashoffset", this.svg2.getTotalLength());
      // } else if (
      //   this.docHeightPerc >= 0 &&
      //   this.docHeightPerc <= this.sectionsEndingPerc.section1
      // ) {
      // } else if (this.docHeightPerc > this.sectionsEndingPerc.section1) {
      //   this.svg2.setAttribute("stroke-dashoffset", 0);
      // }
    }
  },
  mounted() {
    this.getDocumentHeightPercentage();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
#section1a {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(129, 167, 164);

  h1 {
    padding-top: 45vh;
    text-align: center;
    font-size: 10vh;
    color: #ffffff;
  }
}
</style>