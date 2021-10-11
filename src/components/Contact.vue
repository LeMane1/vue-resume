<template>
  <div 
  class="contact_container" 
  id="contact"
    v-animate-onscroll="'animate__animated animate__slideInUp'"
  >
    <div class="contact_part">
      <p class="contact_title_1">Alexandr Zelenin</p>
      <p class="contact_title_2">Resume</p>
      <p class="contact_year">2021</p>
    </div>
    <div class="contact_part">
      <p class="button_label">Write me an email</p>
      <button class="contact_button"><a href="mailto:alexandrzelenin2013@yandex.ru" class="button_contact_link">Write</a></button>
    </div>
    <div class="contact_part_social">
        <a class="social_contact"
            href="https://www.instagram.com/zelenin.al/"
            target="_blank"
        >Instagram</a>
        <a class="social_contact"
            href="https://github.com/LeMane1"
            target="_blank"
        >Github</a>
        <a class="social_contact"
            href="https://vk.com/aleksstandup"
            target="_blank"
        >Vkontakte</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact_container {
  background: #497eb3;
  color: #f8f8f8;
  width: 100%;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px;
  justify-content: space-between;
}

.contact_part {
  width: 30%;
}

.contact_part_social{
    width: 30%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
}

.contact_title_1 {
  font-size: 0.7rem;
  margin-bottom: 0;
  white-space: nowrap;
}

.contact_title_2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0px;
}

.contact_year {
  font-size: 1rem;
  font-weight: 600;
  color:#d4d3ff;
}

.button_label{
    font-size: 0.9rem;
  font-weight: 600;
  color:#d4d3ff;
  margin-bottom: 10px;
}

.contact_button{
    width: 90%;
    padding: 7px 10px;
    background: #5f9ddb;
    color: #f8f8f8;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 6px;
    transition: all .3s ease-in-out;
}

.button_contact_link{
    color: #f8f8f8;
    text-decoration: none;
}

.contact_button:hover{
    transform: translateY(-3px);
    background: #6eb3f8;
    transition: all .3s ease-in-out;
}

.social_contact{
    font-size: 1rem;
    font-weight: 600;
    color:#f8f8f8;
    text-decoration: none;
    width: 100%;
    margin-bottom: 15px;
}

.social_contact:hover{
    text-decoration: underline;
}
@media screen and (max-width: 650px) {
  .contact_part{
    width: 45%;
  }
  .contact_part_social{
      width: 45%;
  }
}

@media screen and (max-width: 360px) {
  .contact_part{
    width: 100%;
  }
  .contact_part_social{
      width: 100%;
  }
}

@media screen and (max-width: 962px) {
  .contact_container{
      border-radius: 0;
  }
}
</style>