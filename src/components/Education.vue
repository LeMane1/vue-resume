<template>
  <div>
    <p class="comp_title"
    v-animate-onscroll="'animate__animated animate__slideInUp'"
    id="education"
    >Education</p>
    <div class="poly_container">
      <div class="poly_subcontainer"
      v-animate-onscroll.repeat="{
        down: 'animate__animated animate__flipInX',
        up: '',
      }"
      >
        <div class="contpolypic">
            <img
          src="../assets/poly.png"
          alt="Peter the Great St.Petersburg Polytechnic University"
          class="poly_pic"
        />
        </div>
        <div class="poly_text">
          <p class="poly_title">Peter the Great St.Petersburg Polytechnic University</p>
          <p class="poly_subtitle">
            B.S.E. in Instrumentation (2016-2020)
          </p>
        </div>
      </div>
      <div class="poly_subcontainer"
      v-animate-onscroll.repeat="{
        down: 'animate__animated animate__flipInX',
        up: '',
      }"
      >
        <div class="contpolypic">
            <img
          src="../assets/poly.png"
          alt="Peter the Great St.Petersburg Polytechnic University"
          class="poly_pic"
        />
        </div>
        <div class="poly_text">
          <p class="poly_title">Peter the Great St.Petersburg Polytechnic University</p>
          <p class="poly_subtitle">
            M.E. in Medical Instrumentation (2020-2022)
          </p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import "animate.css";
import "vue-scrollto";
export default {};
</script>

<style>
.comp_title {
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.poly_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 50px;
}

.poly_subcontainer {
  width: 45%;
  border-radius: 20px;
  padding: 0 20px;
  transition: all .5s ease-in-out;
}

@media screen and (max-width: 450px) {
  .poly_subcontainer{
    width: 100%;
  }
}

.poly_subcontainer:hover {
  box-shadow: inset 0 0 0 2px #61a3e6;
  transition: all .5s ease-in-out;
}

.poly_title {
  font-size: 1.2rem;
  color: #313131;
  font-weight: 600;
  margin-bottom: 5px;
}

.poly_subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #a1a1a1;
  max-width: 100%;
  word-wrap: break-word;
  margin-top: 0;
}

.poly_pic {
  max-width: 50px;
  max-height: 50px;
}

.contpolypic {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;

}
</style>