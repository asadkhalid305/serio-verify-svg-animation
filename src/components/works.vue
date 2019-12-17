<template>
  <section id="section6"></section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Features",
  data() {
    return {
      svg12a: 0
    };
  },
  computed: mapGetters(["docHeightPerc", "sectionsEndingPerc"])
  //   methods: {
  //     ...mapActions(["getDocumentHeightPercentage"]),

  //     //event on scroll
  //     handleScroll() {
  //       this.getDocumentHeightPercentage();
  //       this.initial = this.sectionsEndingPerc.section5;
  //       let start = this.initial;
  //       window.console.log(start);
  //       // window.console.log(this.docHeightPerc);

  //       if (this.docHeightPerc < start) {
  //         this.unFill([
  //           this.svg10a,
  //           this.svg10b,
  //           // this.svg10c,
  //           // this.svg10d,
  //           // this.svg10e,
  //           this.svg11
  //         ]);
  //         document.querySelector(".fixed-container").style.position = "static";
  //       }
  //       if (this.docHeightPerc >= start) {
  //         document.querySelector(".fixed-container").style.position = "fixed";

  //         if (this.docHeightPerc <= start + 3) {
  //           this.drawPath(this.svg10a, start, start + 3);
  //           // this.unFill([this.svg10c, this.svg10d, this.svg10e]);
  //         }

  //         if (this.docHeightPerc <= start + 20) {
  //           this.drawPath(this.svg11, start, start + 20);
  //           this.unFill([
  //             this.svg10b
  //             // this.svg10c, this.svg10d, this.svg10e
  //           ]);
  //         }
  //       }

  //       if (this.docHeightPerc <= start + 8) {
  //         document.querySelector(".featureImgContainer").style.transform =
  //           "translate3d(0px, 348px, 0px)";

  //         document.querySelector(".slides").style.opacity = "0";
  //       }

  //       if (this.docHeightPerc > start + 8 && this.docHeightPerc <= start + 25) {
  //         this.drawPath(this.svg10b, start + 8, start + 25);
  //         document.querySelector(".featureImgContainer").style.transform =
  //           "translate3d(0px, 0px, 0px)";
  //         this.fill([this.svg10a, this.svg11]);

  //         document.querySelector(".slides").style.opacity = "1";

  //         this.screenNo = 1;
  //         document.querySelector(".slide h3").innerHTML = "the dashboard";
  //         document.querySelector(".slide p").innerHTML =
  //           "The dashboard is your one-stop for information in Serio Verify. Costs, activities and key performance indicators are consolidated in a single screen, giving you an executive overview of your entire value chain.";

  //         if (this.docHeightPerc >= start + 12.25) {
  //           document.querySelector(".featureImgContainer").style.transform =
  //             "translate3d(0px, -348px, 0px)";

  //           document.querySelector(".slides").style.opacity = "2";

  //           this.screenNo = 2;
  //           document.querySelector(".slide h3").innerHTML = "effeciency";
  //           document.querySelector(".slide p").innerHTML =
  //             "Get insights into cost per new customer across multiple traffic sources and call centers.";
  //         }
  //         if (this.docHeightPerc >= start + 16.5) {
  //           document.querySelector(".featureImgContainer").style.transform =
  //             "translate3d(0px, -700px, 0px)";

  //           this.screenNo = 3;
  //           document.querySelector(".slide h3").innerHTML = "statistic";
  //           document.querySelector(".slide p").innerHTML =
  //             "Monitor your data cleansing and see trends for flows of interested consumers.";
  //         }
  //         if (this.docHeightPerc >= start + 20.5) {
  //           document.querySelector(".featureImgContainer").style.transform =
  //             "translate3d(0px, -1050px, 0px)";

  //           this.screenNo = 4;
  //           document.querySelector(".slide h3").innerHTML = "conversion";
  //           document.querySelector(".slide p").innerHTML =
  //             "Get insights into cost per new customer across multiple traffic sources and call centers.";
  //         }
  //       }

  //       if (this.docHeightPerc > start + 25) {
  //         document.querySelector(".fixed-container").style.position = "static";
  //       }
  //     },

  //     //draw line
  //     drawPath(el, startPerc = 0, endPerc, sign = 1) {
  //       var drawLen = 0;
  //       var pathLen = el.getTotalLength();
  //       var scrollPerc = (this.docHeightPerc - startPerc) / (endPerc - startPerc);
  //       drawLen = pathLen - pathLen * scrollPerc;
  //       el.setAttribute("stroke-dashoffset", sign * drawLen);
  //     },

  //     //unfill path
  //     unFill(els) {
  //       els.forEach(el => {
  //         el.setAttribute("stroke-dashoffset", el.getTotalLength());
  //       });
  //     },

  //     //fill path
  //     fill(els) {
  //       els.forEach(el => {
  //         el.setAttribute("stroke-dashoffset", 0);
  //       });
  //     },

  //     //set offset and dasharray to full length
  //     setDashArrayAndOffset(els) {
  //       els.forEach(el => {
  //         el.setAttribute("stroke-dasharray", el.getTotalLength());
  //         el.setAttribute("stroke-dashoffset", el.getTotalLength());
  //       });
  //     }
  //   },
  //   mounted() {
  //     this.getDocumentHeightPercentage();
  //     window.addEventListener("scroll", this.handleScroll);

  //     this.svg10a = document.querySelector("#svg_10a");
  //     this.svg10b = document.querySelector("#svg_10b");
  //     // this.svg10c = document.querySelector("#svg_10c");
  //     // this.svg10d = document.querySelector("#svg_10d");
  //     // this.svg10e = document.querySelector("#svg_10e");
  //     this.svg11 = document.querySelector("#svg_11");

  //     this.setDashArrayAndOffset([
  //       this.svg10a,
  //       this.svg10b,
  //       // this.svg10c,
  //       // this.svg10d,
  //       // this.svg10e,
  //       this.svg11
  //     ]);
  //   },
  //   destroyed() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   }
};
</script>

<style lang="scss">
</style>