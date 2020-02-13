<template>
  <section
    id="contact"
    class="contact grid-parent bg-blue txt-white txt-center ng-scope"
  >
    <div class="one-half full-height one-half-bg"></div>
    <div class="one-half full-height centered-parent">
      <div class="centered">
        <svg
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 32 28.8"
          data-ui-sref="about"
          href="/the-team"
        >
          <path
            fill="#3aafa9"
            d="M1080.32,12296.7l-14.09-13a9.78,9.78,0,0,1-2.23-6.2,9.534,9.534,0,0,1,9.5-9.5,9.231,9.231,0,0,1,6.5,2.6,9.231,9.231,0,0,1,6.5-2.6,9.534,9.534,0,0,1,9.5,9.5,9.78,9.78,0,0,1-2.23,6.2l-0.1.1-11,9.9-1.34-1.4,10.95-10a7.682,7.682,0,0,0,1.72-4.8,7.484,7.484,0,0,0-13.24-4.8l-0.76.9-0.76-.9a7.484,7.484,0,0,0-13.24,4.8,7.633,7.633,0,0,0,1.73,4.8l13.95,13Zm-1.11-6.4-10.07-9.4a5.745,5.745,0,0,1-1.14-3.4,5.529,5.529,0,0,1,5.5-5.5v2a3.52,3.52,0,0,0-2.82,5.6l9.89,9.2Zm4.23-14.3-1.75-.9a5.395,5.395,0,0,1,7.47-2.2l-0.96,1.7a4.09,4.09,0,0,0-2.67-.3A3.727,3.727,0,0,0,1083.44,12276Z"
            transform="translate(-1064 -12268)"
          ></path>
        </svg>
        <h1>Made with<br />love in<br />Copenhagen</h1>
      </div>
      <p>
        SERIO VERIFY<br />
        Store&nbsp;Kongensgade&nbsp;66, DK‑1264&nbsp;København&nbsp;K<br />
        <a class="txt-teal" href="mailto:info@serioverify.com"
          >info@serioverify.com</a
        >
        /
        <a class="txt-teal" href="tel:+4531112231"
          >+45&nbsp;31&nbsp;11&nbsp;22&nbsp;31</a
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" >
* {
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

section.contact {
  height: 100vh;
  position: relative;
}
.grid-parent {
  position: relative;
  font-size: 0;
}
.txt-center {
  text-align: center;
}
.bg-blue {
  background-color: #18252a;
}
.txt-white {
  color: #fff;
}

section {
  position: relative;
  width: 100vw;
  z-index: 3;
  background-color: #27363b;
}

section.contact .one-half {
  background-size: cover;
  background-position: bottom;
}
.full-height {
  height: 100%;
}
.one-half,
.one-third {
  display: inline-block;
  vertical-align: top;
}
.one-half {
  width: 50%;
}
.one-half-bg {
  background-image: url("../assets/images/contact/contact.jpg");
}
.centered-parent {
  position: relative;
}
.full-height {
  height: 100%;
}
.one-half,
.one-third {
  display: inline-block;
  vertical-align: top;
}
.one-half {
  width: 50%;
  background-repeat: no-repeat;
}

.centered,
.centered-x {
  position: absolute;
  left: 50%;
}

.centered {
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 4vw;
  line-height: 4.2vw;
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 800 !important;
}
section.contact .one-half p {
  position: absolute;
  bottom: 10%;
  width: 100%;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 1px;
  font-family: grad, serif;
}

.txt-teal {
  color: #3aafa9;
  cursor: pointer;
  text-decoration: none;
}
</style>