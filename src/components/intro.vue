<template>
  <section id="section1">
    <div class="txt1">
      <h1>
        intro<br />ducing<br /><span class="color-blue">serio<br />verify</span>
      </h1>
      <p>The leading cloud<br />platform for inside<br />sales optimization.</p>
    </div>

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
          stroke-width="15"
          stroke="#019b94"
          d="M1150,376h38v372H952.5v201"
        ></path>
        <path
          id="svg_2"
          fill="none"
          stroke-width="15"
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
  computed: mapGetters(["docHeightPerc", "sectionsEndingPerc"]),
  methods: {
    ...mapActions(["getDocumentHeightPercentage"]),
    //event on scroll
    handleScroll() {
      this.getDocumentHeightPercentage();
      // window.console.log(this.sectionsEndingPerc.section1);
      if (this.docHeightPerc < 0) {
        this.svg2.setAttribute("stroke-dashoffset", this.svg2.getTotalLength());
      } else if (
        this.docHeightPerc >= 0 &&
        this.docHeightPerc <= this.sectionsEndingPerc.section1
      ) {
        this.drawPath(this.svg2, 0, this.sectionsEndingPerc.section1);
      } else if (this.docHeightPerc > this.sectionsEndingPerc.section1) {
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

    let animation = document.querySelector("#section1");
    animation.style.transform = "translate(0,0)";
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
  transform: translate(0, 100vh);
  transition: all 1.5s ease;
  background-color: rgb(76, 175, 169);

  .txt1 {
    font-size: 20px;
    position: absolute;
    opacity: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    bottom: 27%;
    left: 39.5%;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);

    h1 {
      font-size: 4vw;
      line-height: 3.2vw;
      letter-spacing: 2px;
      padding-bottom: 1vw;
      color: #fff;
      -webkit-animation: h 1s ease 0.85s both;
      animation: h 1s ease 0.85s both;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: canada-type-gibson, sans-serif;
      font-weight: 1000;

      .color-blue {
        color: #18252a;
      }
    }

    p {
      font-size: 2.4vw;
      line-height: 2.7vw;
      -webkit-animation: i 1.7s ease 0.95s both;
      animation: i 1.7s ease 0.95s both;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      letter-spacing: 1px;
      font-family: grad, serif;
    }
  }
}
</style>