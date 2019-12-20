<template>
  <section id="section1">
    <div class="s1-txt">
      <h1>
        intro<br />ducing<br /><span class="color-blue">svg<br />design</span>
      </h1>
      <p>The best animation<br />format for web<br />apps interactivity.</p>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 184 1440 900"
    >
      <path
        fill="none"
        stroke-width="10"
        stroke="#019b94"
        d="M822,376h38v372H664.5v152"
      ></path>
      <path
        class="arrow"
        fill="#fff"
        d="M778.5,382h2.2v-11.1h-2.2V382z M773.4,382h3.2v-11.1h-3.2V382z M767.3,382h4.1v-11.1h-4.1L767.3,382
			L767.3,382z M808.3,376.4l-14.3-13v7.4h-11.3V382H794v7.4L808.3,376.4z"
      ></path>

      <g>
        <path
          id="s1svg_1"
          fill="none"
          stroke="#fff"
          stroke-width="10"
          d="M822,376h38v372H664.5v152"
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
      s1svg1: ""
    };
  },
  computed: mapGetters(["docHeightPerc", "sectionsEndingPerc"]),
  methods: {
    ...mapActions(["getDocumentHeightPercentage", "getSectionsClientHeight"]),
    //event on scroll
    handleScroll() {
      this.getDocumentHeightPercentage();
      // window.console.log(this.sectionsEndingPerc.section1);
      let start = this.sectionsEndingPerc.section1;
      if (this.docHeightPerc < 0) {
        this.unFill([this.s1svg1]);
      } else if (this.docHeightPerc >= 0 && this.docHeightPerc <= start) {
        this.drawPath(this.s1svg1, 0, start - 0.1);
      } else if (this.docHeightPerc > start) {
        this.fill([this.s1svg1]);
      }
    },

    //draw line
    drawPath(el, startPerc = 0, endPerc, sign = 1) {
      var drawLen = 0;
      var pathLen = el.getTotalLength();
      var scrollPerc = (this.docHeightPerc - startPerc) / (endPerc - startPerc);
      drawLen = pathLen - pathLen * scrollPerc;
      el.setAttribute("stroke-dashoffset", sign * drawLen);
    },

    //unfill path
    unFill(els) {
      els.forEach(el => {
        el.setAttribute("stroke-dashoffset", el.getTotalLength());
      });
    },

    //fill path
    fill(els) {
      els.forEach(el => {
        el.setAttribute("stroke-dashoffset", 0);
      });
    },

    setDashArrayAndOffset(els) {
      els.forEach(el => {
        el.setAttribute("stroke-dasharray", el.getTotalLength());
        el.setAttribute("stroke-dashoffset", el.getTotalLength());
      });
    }
  },
  mounted() {
    this.getDocumentHeightPercentage();
    window.addEventListener("scroll", this.handleScroll);

    this.s1svg1 = document.querySelector("#s1svg_1");

    this.setDashArrayAndOffset([this.s1svg1]);

    document.querySelector("#section1").style.transform = "translate(0,0)";
    document.querySelector(".s1-txt").style.opacity = "1";
    document.querySelector(".arrow").style.opacity = "1";
    document.querySelector(".arrow").style.transform = "translateX(0px)";

    this.getSectionsClientHeight({
      sectionId: "section1",
      sectionClientHeight: document.querySelector("#section1").offsetHeight
    });
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

  .arrow {
    transform-origin: center;
    transform: translateX(-10px);
    opacity: 0;
    transition: all 3s ease;
  }

  .s1-txt {
    bottom: 27%;
    left: 35.5%;
    opacity: 1;
    width: 100%;
    font-size: 20px;
    line-height: 34px;
    position: absolute;
    opacity: 0;
    transition: all 3s ease;

    h1 {
      font-size: 5vw;
      line-height: 4.2vw;
      letter-spacing: 2px;
      padding-bottom: 1vw;
      color: #fff;
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
      font-size: 2.2vw;
      line-height: 2.7vw;
      animation: i 1.7s ease 0.95s both;
      transform: translateY(0);
      letter-spacing: 1px;
      font-family: grad, serif;
    }
  }
}
</style>