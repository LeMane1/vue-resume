<template>
  <div class="container">
      <p
      class="comp_title"
      v-animate-onscroll="'animate__animated animate__slideInUp'"
      id="plans"
    >
      Plans
    </p>
    <div class="plans_cont"
    v-animate-onscroll="'animate__animated animate__slideInUp'"
    >
      <div class="plans-description">
        <p class="plans_text">
          In the future, I plan to study the features of JS, its frameworks and libraries, learn new frameworks (Angular), understand existing solutions and make them better.
          Also, since the value of the fullstack specialists is increasing every year, I plan to study the development of the server side.
        </p>
      </div>
      <div class="plans-pic-cont">
          <img src="../../public/plans.jpg" 
          alt="Plans" 
          class="plans-pic" 
          v-animate-onscroll="'animate__animated animate__slideInUp'"
          />
       </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.plans-pic-cont {
  max-width: 50%;
  margin: 0;
  padding: 0 15px;
  object-fit: cover;
}

.plans-pic{
  width: 100%;
}


.plans-description{
    max-width: 50%;
    margin: 0;
    padding: 0 15px;
}

.plans_cont{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px;
    padding-bottom: 60px;
}

.plans_text{
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(54, 54, 54);
}

@media screen and (max-width: 780px) {
  .plans-pic-cont {
    max-width: 90%;
  }
  .plans-description{
    max-width: 90%;
}
}

</style>