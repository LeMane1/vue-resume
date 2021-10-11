<template>
  <div class="container">
    <p
      class="comp_title"
      v-animate-onscroll="'animate__animated animate__slideInUp'"
      id="skills"
    >
      Skills
    </p>

    <div class="skills_cont" id="circle">
      <vue-ellipse-progress
        class="skill"
        :progress="progress.html"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
        :gap="10"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">HTML</p>
      </vue-ellipse-progress>

      <vue-ellipse-progress
        class="skill"
        :progress="progress.css"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">CSS</p>
      </vue-ellipse-progress>

      <vue-ellipse-progress
        class="skill"
        :progress="progress.js"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">JS</p>
      </vue-ellipse-progress>

      <vue-ellipse-progress
        class="skill"
        :progress="progress.php"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">PHP</p>
      </vue-ellipse-progress>

      <vue-ellipse-progress
        class="skill"
        :progress="progress.vue"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">Vue.js</p>
      </vue-ellipse-progress>

      <vue-ellipse-progress
        class="skill"
        :progress="progress.react"
        animation="reverse 1500 400"
        :legend="true"
        :angle="-90"
        :size="180"
        :noData="nodataSkills"
        color="#61a3e6"
        :thickness="10"
        legendClass="skill_class"
        dot="10 blue"
      >
        <span slot="legend-value">/100</span>
        <p slot="legend-caption" class="skill_name">React.js</p>
      </vue-ellipse-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: {
        html: 90,
        css: 80,
        js: 70,
        php: 50,
        vue: 60,
        react: 40,
      },
    };
  },
  props: {
    nodataSkills: Boolean,
  },
  methods: {
    skiLL: function () {
      console.log(this.nodataSkills);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.skill_class {
  font-size: 1.5rem;
  font-weight: 700;
  color: #313131;
}

.skill_name {
  color: #313131;
  font-size: 1.4rem;
}

.skills_cont {
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
}

.skill{
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}
</style>