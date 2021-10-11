<template>
  <div class="main_wrapper" v-scroll-lock="scrollLock">
    <div class="app_header" :class="{ activeHeader: activeHeader }">
      <div class="header_cont_menu">
        <div class="header_title_cont" :class="{ activeTitle: activeHeader }">
          <p class="header_title1">Alexandr Zelenin</p>
          <p class="header_title2">Resume</p>
        </div>

        <transition name="fade" mode="out-in">
          <ul class="main_header_navbar" v-if="maxScreen === true">
            <li class="main_header_link">
              <button
                v-scroll-to="{ element: '#about' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                About
              </button>
            </li>
            <li class="main_header_link">
              <button
                v-scroll-to="{ element: '#skills' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                Skills
              </button>
            </li>
            <li class="main_header_link">
              <button
                v-scroll-to="{ element: '#education' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                Education
              </button>
            </li>
            <li class="main_header_link">
              <button
              v-scroll-to="{ element: '#achievements' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                Achievements
              </button>
            </li>
            <li class="main_header_link">
              <button
                v-scroll-to="{ element: '#plans' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                Plans
              </button>
            </li>
            <li class="main_header_link">
              <button
                v-scroll-to="{ element: '#contact' }"
                class="main_header_button"
                :class="{ activeButtonHeader: activeHeader }"
              >
                Contact
              </button>
            </li>
          </ul>

          <button @click="editModule" class="hamburger" v-else>
            <div class="burger">
              <span
                :class="{
                  active: activeHumburger,
                  activeBurgerBlue: activeHeader,
                }"
              ></span>
            </div>
          </button>
        </transition>
      </div>

      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>

      <transition name="fade" mode="in-out">
        <div class="module_window animate__animated" :class="{animate__fadeInLeft: module, animate__fadeOutLeft: !module}" v-show="module === true">
          <ul class="main_header_navbar_mobile">
            <li class="main_header_link_mobile">
              <button class="main_header_button_mobile"
              v-scroll-to="{ element: '#about' }"
              @click="scrollBurger"
              >About</button>
            </li>
            <li class="main_header_link_mobile">
              <button 
              class="main_header_button_mobile"
              v-scroll-to="{ element: '#skills' }"
              @click="scrollBurger"
              >Skills</button>
            </li>
            <li class="main_header_link_mobile">
              <button
                v-scroll-to="{ element: '#education' }"
                class="main_header_button_mobile"
                @click="scrollBurger"
              >
                Education
              </button>
            </li>
            <li class="main_header_link_mobile">
              <button class="main_header_button_mobile"
              v-scroll-to="{ element: '#achievements' }"
              @click="scrollBurger"
              >Achievements</button>
            </li>
            <li class="main_header_link_mobile">
              <button class="main_header_button_mobile"
              v-scroll-to="{ element: '#plans' }"
              @click="scrollBurger"
              >Plans</button>
            </li>
            <li class="main_header_link_mobile">
              <button class="main_header_button_mobile"
              v-scroll-to="{ element: '#contact' }"
              @click="scrollBurger"
              >Contact</button>
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <div class="container">
      <Header />
      <About/>
      <Skills :nodataSkills="this.nodataSkills"></Skills>
      <Education />
      <Achievements/>
      <Plans/>
      <Contact/>
    </div>
    
  </div>
</template>

<script>
import "animate.css";
import Header from "./components/Header.vue";
import Skills from "./components/Skills.vue";
import Education from "./components/Education.vue";
import About from "./components/About.vue";
import Plans from "./components/Plans.vue";
import Contact from "./components/Contact.vue";
import Achievements from "./components/Achievements.vue";

export default {
  name: "App",
  components: {
    Header,
    Skills,
    Education,
    About,
    Plans,
    Contact,
    Achievements,
  },
  data() {
    return {
      activeHeader: false,
      windowTop: window.top.scrollY,
      activeHumburger: false,
      maxScreen: false,
      width: window.innerWidth,
      module: false,
      scrollLock: false,
      circle: '',
      nodataSkills: true,
    };
  },
  watch: {
    windowTop: {
      immediate: true,
      handler(windowTop, activeHeader) {
        if (windowTop > 100) {
          this.activeHeader = true;
        } else {
          this.activeHeader = false;
        }

        if ((this.circle) - windowTop < 400){
          this.nodataSkills = false;
        }else this.nodataSkills = true
        //console.log(this.circle);
        //console.log(windowTop)
      },
    },
    scrolIndicator: {
      immediate: true,
      handler() {
        window.onscroll = function () {
          var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
          var height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";
        };
      },
    },
    width: {
      immediate: true,
      handler(width) {
        if (width > 780) {
          this.maxScreen = true;
          this.module = false;
          this.activeHumburger = false;
          this.scrollLock = false;
        } else this.maxScreen = false;
        //console.log(width)
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.updateWidth);
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY;
      this.circle = document.getElementById("circle").getBoundingClientRect().top + pageYOffset;

    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    editModule: function () {
      this.activeHumburger = !this.activeHumburger;
      this.module = !this.module;
      this.scrollLock = !this.scrollLock;
    },
    scrollBurger: function(){
      this.activeHumburger = !this.activeHumburger;
      this.module = !this.module;
      this.scrollLock = !this.scrollLock;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap");

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #61a3e6;
  font-family: "Montserrat", sans-serif;
  color: #61a3e6;
  scroll-behavior: smooth;
  place-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 962px;
  margin: 0 auto;
  background: #f8f8f8;
  margin-top: 75px;
  border-radius: 30px;
}

.main_wrapper{
  padding-bottom: 30px;
}

@media screen and (max-width: 962px) {
  .container{
      border-radius: 30px 30px 0 0;
  }
  .main_wrapper{
  padding-bottom: 0;
}
}

.app_header {
  position: fixed;
  top: 0;
  left: 0;
  color: #f8f8f8;
  z-index: 1000;
  background: #61a3e6;
  transition: all 0.25s ease-in-out;
  width: 100%;
  /*border-bottom: 5px solid #45719c;*/
}

.header_cont_menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.main_header_navbar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
}
.main_header_link {
  list-style: none;
  margin-right: 20px;
}

.main_header_link:last-child {
  margin-right: 30px;
}

.main_header_button {
  outline: none;
  border: 0;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #f8f8f8;
  transition: all 0.3s ease-in-out;
  position: relative;
  padding-bottom: 4px;
}

.main_header_button:before {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  margin: auto;
  border-bottom: 2px solid #f8f8f8;
  content: "";
}

.main_header_button:hover:before {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.main_header_button:hover {
  color: #ececec;
  transition: all 0.3s ease-in-out;
}

.activeButtonHeader {
  color: #61a3e6;
  transition: all 0.3s ease-in-out;
}

.activeButtonHeader:before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  margin: auto;
  right: 0;
  border-bottom: 2px solid #61a3e6;
  content: "";
}

.activeButtonHeader:hover {
  color: #4a90d6;
  transition: all 0.3s ease-in-out;
}

.activeButtonHeader:hover:before {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.header_title1 {
  font-size: 0.7rem;
  margin-bottom: 0;
  margin-top: 10px;
  min-width: 100%;
  white-space: nowrap;
}

.header_title2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
  min-width: 100%;
}

.header_title_cont {
  margin-left: 30px;
}

.activeHeader {
  background: #f8f8f8;
  color: #61a3e6;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 3px 3px -2px #61a3e6;
}

.activeTitle {
  color: #a1a1a1;
}
.progress-container {
  width: 100%;
  height: 8px;
  background: #61a3e6;
}

.progress-bar {
  height: 8px;
  background: #45719c;
  width: 0%;
}

.burger {
  position: fixed;
  right: 30px;
  top: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.burger span,
.burger span:before,
.burger span:after {
  width: 100%;
  position: absolute;
  height: 4px;
  background: #f8f8f8;
  display: block;
  transition: 0.3s;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}

.burger span.activeBurgerBlue,
.burger span.activeBurgerBlue:before,
.burger span.activeBurgerBlue:after {
  background: #61a3e6;
  transition: all 0.25s ease-in-out;
}
.burger span:before {
  content: "";
  top: -10px;
  transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.burger span {
  top: 10px;
}
.burger span:after {
  content: "";
  bottom: -10px;
  transition: bottom 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.burger span.active:before {
  content: "";
  top: 0px;
  transform: rotate(45deg);
  transition: top 300ms,
    transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger span.active:after {
  content: "";
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms,
    transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger span.active {
  background: rgba(255, 255, 255, 0);
}

.hamburger {
  background: transparent;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.module_window {
  width: 100%;
  background: #2d74bb;
  height: 100vh;
}


.main_header_navbar_mobile {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 30px;
  padding-left: 30px;
}

.main_header_link_mobile {
  list-style: none;
  margin-bottom: 30px;
}

.main_header_button_mobile:hover,
.main_header_button_mobile:active,
.main_header_button_mobile:focus {
  color: #cecece;
}

.main_header_button_mobile {
  outline: none;
  border: 0;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
  color: #f8f8f8;
  transition: all 0.3s ease-in-out;
  position: relative;
  padding-bottom: 4px;
}

@media screen and (max-width: 400px) {
  .main_header_button_mobile{
    font-size: 1.9rem;
  }
}
</style>
