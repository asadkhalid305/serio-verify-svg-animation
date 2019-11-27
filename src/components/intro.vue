<template>
  <section id="section1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1905 949"
      id="path"
    >
      <g style="clip-path: url(#landingClipTop);">
        <path
          id="svg_1"
          fill="none"
          stroke-width="10"
          stroke="#019b94"
          d="M1150,376h38v372H952.5v201"
        ></path>
        <!-- <path
            class="arrow"
            fill="#fff"
            d="M778.5,382h2.2v-11.1h-2.2V382z M773.4,382h3.2v-11.1h-3.2V382z M767.3,382h4.1v-11.1h-4.1L767.3,382
			L767.3,382z M808.3,376.4l-14.3-13v7.4h-11.3V382H794v7.4L808.3,376.4z"
          ></path> -->
        <path
          id="svg_2"
          fill="none"
          stroke-width="10"
          stroke="#FFF"
          d="M1150,376h38v372H952.5v201"
        ></path>
      </g>
    </svg>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Intro",
  data() {
    return {
      svg2: ""
    };
  },
  computed: mapGetters(["docHeightPerc"]),
  methods: {
    ...mapActions(["getDocumentHeightPercentage"]),
    //event on scroll
    handleScroll() {
      this.getDocumentHeightPercentage();

      if (this.docHeightPerc < 0) {
        this.svg2.setAttribute("stroke-dashoffset", this.svg2.getTotalLength());
      } else if (this.docHeightPerc >= 0 && this.docHeightPerc <= 24) {
        this.drawPath(this.svg2, 0, 24);
      } else if (this.docHeightPerc > 24) {
        this.svg2.setAttribute("stroke-dashoffset", 0);
      }
    },

    //draw line
    drawPath(el, startPerc = 0, endPerc, sign = 1) {
      var drawLen = 0;
      var pathLen = el.getTotalLength();
      var scrollPerc = (this.docHeightPerc - startPerc) / (endPerc - startPerc);
      drawLen = pathLen - pathLen * scrollPerc;
      el.setAttribute("stroke-dashoffset", sign * drawLen);
    }
  },
  mounted() {
    this.getDocumentHeightPercentage();
    window.addEventListener("scroll", this.handleScroll);

    this.svg2 = document.querySelector("#svg_2");
    this.svg2.setAttribute("stroke-dasharray", this.svg2.getTotalLength());
    this.svg2.setAttribute("stroke-dashoffset", this.svg2.getTotalLength());
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang='scss'>
#section1 {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(76, 175, 169);
}
</style>