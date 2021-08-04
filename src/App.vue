<template>
  <TheClassicI />
  <TheClassicIi />
  <TheClassicIii />
  <TheArcade />
  <TheFlipping />
  <TheShurikenI />
  <ThePulsing />
  <TheWobbling />
  <TheWobblingIi />
  <TheProgress />
  <TheProgressIi />
  <TheContinuous />
  <TheInfinity />
  <TheBarsI />
  <TheBarsIi />
  <TheDotsVsTheBars />
  <TheDiscord />
  <TheDotsI />
  <TheDotsIi />
  <TheDotsIii />
  <TheHungry />
  <TheHypnotic />
  <TheHypnoticIi />
  <TheNature />
  <TheShapeI />
  <TheShapeIi />
  <TheShapeIii />
  <TheSpinnerI />
  <TheSpinnerIi />
  <TheSpinnerIii />
  <TheTime />
</template>

<script>
import TheArcade from './components/the-arcade/index.vue'
import TheFlipping from './components/the-flipping/index.vue'
import TheShurikenI from './components/the-shuriken-i/index.vue'
import ThePulsing from './components/the-pulsing/index.vue'
import TheWobbling from './components/the-wobbling/index.vue'
import TheWobblingIi from './components/the-wobbling-ii/index.vue'
import TheProgress from './components/the-progress/index.vue'
import TheProgressIi from './components/the-progress-ii/index.vue'
import TheContinuous from './components/the-continuous/index.vue'
import TheInfinity from './components/the-infinity/index.vue'
import TheBarsI from './components/the-bars-i/index.vue'
import TheBarsIi from './components/the-bars-ii/index.vue'
import TheClassicI from './components/the-classic-i/index.vue'
import TheClassicIi from './components/the-classic-ii/index.vue'
import TheClassicIii from './components/the-classic-iii/index.vue'
import TheDiscord from './components/the-discord/index.vue'
import TheDotsI from './components/the-dots-i/index.vue'
import TheDotsIi from './components/the-dots-ii/index.vue'
import TheDotsIii from './components/the-dots-iii/index.vue'
import TheDotsVsTheBars from './components/the-dots-vs-the-bars/index.vue'
import TheHungry from './components/the-hungry/index.vue'
import TheHypnotic from './components/the-hypnotic/index.vue'
import TheHypnoticIi from './components/the-hypnotic-ii/index.vue'
import TheNature from './components/the-nature/index.vue'
import TheShapeI from './components/the-shape-i/index.vue'
import TheShapeIi from './components/the-shape-ii/index.vue'
import TheShapeIii from './components/the-shape-iii/index.vue'
import TheSpinnerI from './components/the-spinner-i/index.vue'
import TheSpinnerIi from './components/the-spinner-ii/index.vue'
import TheSpinnerIii from './components/the-spinner-iii/index.vue'
import TheTime from './components/the-time/index.vue'

export default {
  components: {
    TheArcade,
    TheFlipping,
    TheShurikenI,
    ThePulsing,
    TheWobbling,
    TheWobblingIi,
    TheProgress,
    TheProgressIi,
    TheContinuous,
    TheInfinity,
    TheBarsI,
    TheBarsIi,
    TheClassicI,
    TheClassicIi,
    TheClassicIii,
    TheDiscord,
    TheDotsI,
    TheDotsIi,
    TheDotsIii,
    TheDotsVsTheBars,
    TheHungry,
    TheHypnotic,
    TheHypnoticIi,
    TheNature,
    TheShapeI,
    TheShapeIi,
    TheShapeIii,
    TheSpinnerI,
    TheSpinnerIi,
    TheSpinnerIii,
    TheTime
  }
}
</script>

<style>
/* 公共样式 */
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 120px;
  place-items: center;
}

* {
  box-sizing: border-box;
}

h1 {
  padding-left: 40px;
  color: #409eff;
  text-decoration: underline;
  /* -webkit-user-select: none;
  user-select: none; */
}
</style>
