<template>
  <div class="container">
    <p
      class="comp_title"
      v-animate-onscroll="'animate__animated animate__slideInUp'"
      id="achievements"
    >
      Achievements
    </p>
    <div class="achieve_cont" v-animate-onscroll="'animate__animated animate__flipInY'">
        <p class="achieve">
      <i class="fas fa-check-square"></i>Course on Stepik: HTML + CSS
    </p>
    <p class="achieve">
      <i class="fas fa-check-square"></i>Course on Stepik: Javascript
    </p>
    <p class="achieve">
      <i class="fas fa-check-square"></i>Participation in the hackathon from
      Finodays
    </p>
    </div>



  </div>
</template>

<script>
export default {};
</script>

<style>
.achieve {
  font-size: 1.6rem;
  font-weight: 700;
  color: #313131;
  width: 100%;
  text-align: center;
  transition: all .5s ease-in-out;
  margin-bottom: 10px;
}

.achieve_cont{
    margin: 0 auto;
    margin-top: 5px;
    padding: 5px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 70%;
    border-radius: 20px;
    padding-bottom: 20px;
    transition: all .5s ease-in-out;
}

.achieve_cont:hover {
  box-shadow: inset 0 0 0 2px #61a3e6;
  transition: all .5s ease-in-out;
}
</style>