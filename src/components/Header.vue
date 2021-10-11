<template>
  <div class="header_container">
    <transition name="check">
      <div class="check_mark" v-if="check_seen === true">
        <div class="check_mark_cont">
          <p><i class="far fa-check-square"></i>Copied to the clipboard!</p>
        </div>
      </div>
    </transition>
    <header>
      <div class="title">
        <div class="animate__animated animate__fadeInLeft cont_sub_1">
          <p class="subtitle_1">Hi! I am</p>
        </div>
        <p class="animate__animated animate__fadeInLeft subtitle_2">
          Alexandr Zelenin
        </p>
        <p class="animate__animated animate__fadeInLeft subtitle_3">
          Frontend Developer
        </p>

        <div class="wrapper animate__animated animate__fadeInLeft">
          <button class="icon phone" @click="clickPhone">
            <div class="tooltip">Phone</div>
            <span><i class="fas fa-phone-alt"></i></span>
          </button>
          <button class="icon email" href="#!" @click="clickEmail">
            <div class="tooltip">Email</div>
            <span><i class="fas fa-envelope"></i></span>
          </button>
          <a
            class="icon instagram"
            href="https://www.instagram.com/zelenin.al/"
            target="_blank"
          >
            <div class="tooltip">Instagram</div>
            <span><i class="fab fa-instagram"></i></span>
          </a>
          <a
            class="icon github"
            href="https://github.com/LeMane1"
            target="_blank"
          >
            <div class="tooltip">Github</div>
            <span><i class="fab fa-github"></i></span>
          </a>
          <a class="icon vk" href="https://vk.com/aleksstandup" target="_blank">
            <div class="tooltip">VK</div>
            <span><i class="fab fa-vk"></i></span>
          </a>
        </div>

        <transition name="slide-fade">
          <div class="phone_class" v-if="seen_phone === true">
            <div class="phone_number">
              <p class="phone_number_text">{{this.phone}}</p>
            </div>
            <button class="icon_copy" @click="checkFunc">
              <i class="fas fa-copy"></i>
            </button>
          </div>

          <div class="phone_class" v-if="seen_email === true">
            <div class="phone_number">
              <p class="phone_number_text">{{this.email}}</p>
            </div>
            <button class="icon_copy" @click="checkFunc">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </transition>
      </div>
      <div class="animate__animated animate__fadeInRight pic_container">
        <img src="../../public/picture.jpg" alt="It's me" class="pic_class" />
      </div>
    </header>

    <div class="arrow_down_cont">
      <div class="arrow-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import "vue-scrollto";
export default {
  data() {
    return {
      seen_phone: false,
      seen_email: false,
      check_seen: false,
      choose:'',
      phone: '+7(999)-519-76-40',
      email:'alexandrzelenin2013@yandex.ru',
    };
  },
  methods: {
    clickPhone: function () {
      if (this.seen_email) {
        this.seen_email = false;
        this.seen_phone = true;
        this.choose = this.phone;
      } else {
        this.choose = this.phone;
        this.seen_phone = !this.seen_phone;
        }
    },
    clickEmail: function () {
      if (this.seen_phone) {
        this.seen_phone = false;
        this.seen_email = true;
        this.choose = this.email;
      } else {
        this.choose =this.email;
        this.seen_email = !this.seen_email;
        }
    },
    checkFunc: function(){
      this.$clipboard(this.choose)
      this.check_seen = true;
      setTimeout(()=>{
        this.check_seen = false
      }, 1500)
    },
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.pic_class {
  max-height: 400px;
  max-width: 200px;
  border-radius: 1000px;
  /*border: 10px solid #61a3e6;*/
  box-shadow:  0 0 0 10px #61a3e6, 0 0 0 20px #89bbee, 0 0 0 30px #afd3f7;
}

.pic_class:hover,
.pic_class:focus{
  /*animation: rubberBand; 
  animation-duration: 2s; */
  animation: picture 3s infinite;
  transition: all 3s cubic-bezier(.24,1.43,.84,.51);
}

@keyframes picture {
  0% {
    box-shadow:  0 0 0 15px #61a3e6, 0 0 0 25px #89bbee, 0 0 0 35px #afd3f7;
    scale: 1;
  }
  50% {
    scale: 1.5;
    box-shadow:  0 0 0 5px #61a3e6, 0 0 0 10px #89bbee, 0 0 0 15px #afd3f7;
  }
  100% {
    scale: 1;
    box-shadow:  0 0 0 15px #61a3e6, 0 0 0 25px #89bbee, 0 0 0 35px #afd3f7;
  }
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;
}

.header_container {
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  min-height: 60vh;
}

.subtitle_1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

.subtitle_2 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 10px;
  color: #313131;
}

.subtitle_3 {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
  color: #a1a1a1;
}

.cont_sub_1 {
  background: #61a3e6;
  color: #f8f8f8;
  border-radius: 25px 25px 25px 0;
  padding: 5px;
  text-align: center;
  margin-bottom: 10px;
  width: 50%;
}

.title {
  padding: 0 30px;
}

.pic_container {
  padding: 20px 30px;
}

.social_links_pic {
  max-width: 50px;
  max-height: 50px;
}

.social_links {
  color: #61a3e6;
}

.arrow_down_cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.arrow-down {
  margin: 30px;
}
.arrow-down span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #61a3e6;
  border-right: 5px solid #61a3e6;
  transform: rotate(45deg);
  margin: -16px;
  animation: arrow-down 2s infinite;
}
.arrow-down span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-down span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-down {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

.wrapper {
  display: inline-flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.wrapper .icon {
  position: relative;
  border: none;
  background-color: #ffffff;
  color: #61a3e6;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .phone:hover,
.wrapper .phone:hover .tooltip,
.wrapper .phone:hover .tooltip::before {
  background-color: #37a74f;
  color: #ffffff;
}

.wrapper .email:hover,
.wrapper .email:hover .tooltip,
.wrapper .email:hover .tooltip::before {
  background-color: #e6871b;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #bc2a8d;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .vk:hover,
.wrapper .vk:hover .tooltip,
.wrapper .vk:hover .tooltip::before {
  background-color: #2787f5;
  color: #ffffff;
}

.phone_class {
  display: flex;
  flex-wrap: wrap;
  background: #e4e4e4;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 7px;
  color: #313131;
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 30px;
}

@media screen and (max-width: 400px) {
  .phone_class{
    font-size: .9rem;
    justify-content: center;
  }
}

.phone_number_text {
  margin: 0;
  word-wrap: break-word;
}

.phone_number {
  margin-right: 10px;
}

.icon_copy:hover {
  color: #686868;
}

.icon_copy {
  border: none;
  background: transparent;
  font-size: 1.3rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.check_mark {
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: #ffffff;
  margin-top: 100px;
  max-width: 40%;
  margin-top: 100px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.check_mark_cont {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  
  padding: 0 10px;
}

.fa-check-square {
  margin-right: 10px;
  color: #37a74f;
}

.check-enter-active {
  animation: check-in .5s;
}
.check-leave-active {
  animation: check-in .5s reverse;
}
@keyframes check-in {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}
</style>