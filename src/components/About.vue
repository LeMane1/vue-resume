<template>
  <div class="container">
    <p
      class="comp_title"
      v-animate-onscroll="'animate__animated animate__slideInUp'"
      id="about"
    >
      About
    </p>
    <div class="about_cont">
      
       <div class="about-pic-cont">
          <img src="../../public/about_new.jpg" 
          alt="About me" 
          class="about-pic" 
          v-animate-onscroll="'animate__animated animate__slideInUp'"
          />
       </div>
      
      <div class="about-description"
            v-animate-onscroll="'animate__animated animate__fadeInUp'"
      >
        <p class="about_text">I am 23 years old and I study at Polytechnic University for the 2nd year of Master's degree.</p>
        <p class="about_text">I have Bachelor's Degree in Instrumentation, where I studied some programming languages such as PHP or C.</p>
        <p class="about_text">But I decide to learn Web technologies that's why I studied basics of HTML and CSS, peculiarities of JS.</p>
        <p class="about_text">I do not stop there therefore I continued to study related topics, for example CSS frameforks like as Bootstrap or MaterailUI, 
          system of control of version git, CSS-preprocessors (SASS(SCCS)), JS-frameforks like as Vue(Vuex) or React(Redux). This resume was written at Vue.js. 
        </p>
        <p class="about_text">I have no commercial experience but I have experience of development (6 months).</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.about-pic-cont {
  max-width: 50%;
  margin: 0;
  padding: 0 15px;
  object-fit: cover;
}

.about-pic{
  width: 100%;
}


.about-description{
    max-width: 50%;
    margin: 0;
    padding: 0 15px;
}

.about_cont{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px;
}

.about_text{
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(54, 54, 54);
}

@media screen and (max-width: 780px) {
  .about-pic-cont {
    max-width: 90%;
  }
  .about-description{
    max-width: 90%;
}
}
</style>