<script setup>
import { ElMessage } from 'element-plus'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()

const download = text => {
  toClipboard(text)
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}

const dots_1 = () => {
  download(`.dots-1 {
  width: 32px;
  height: 32px;
  --c: radial-gradient(circle closest-side, currentColor 90%, #0000);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 100% 100%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: d1 1s infinite linear;
}

@keyframes d1 {
  25% {
    background-position: 100% 0, 0 100%, 100% 100%
  }

  50% {
    background-position: 100% 0, 0 0, 100% 100%
  }

  75% {
    background-position: 100% 0, 0 0, 0 100%
  }

  100% {
    background-position: 100% 100%, 0 0, 0 100%
  }
}`)
}
const dots_2 = () => {
  download(`.dots-2 {
  width: 50px;
  height: 28px;
  --c: radial-gradient(farthest-side, currentColor 90%, #0000);
  background:
    var(--c) 0 50%,
    var(--c) 50% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: d2 1s infinite linear;
}

@keyframes d2 {
  33% {
    background-position: 0 0, 50% 100%, 50% 100%, 100% 0
  }

  66% {
    background-position: 50% 0, 0 100%, 100% 100%, 50% 0
  }

  100% {
    background-position: 50% 50%, 0 50%, 100% 50%, 50% 50%
  }
}`)
}
const dots_3 = () => {
  download(`.dots-3 {
  width: 50px;
  height: 28px;
  background:
    radial-gradient(farthest-side at bottom, currentColor 90%, #0000) 0 calc(50% - 3px),
    radial-gradient(farthest-side at top, currentColor 90%, #0000) 0 calc(50% + 3px),

    radial-gradient(farthest-side at bottom, currentColor 90%, #0000) 50% calc(50% - 3px),
    radial-gradient(farthest-side at top, currentColor 90%, #0000) 50% calc(50% + 3px),

    radial-gradient(farthest-side at bottom, currentColor 90%, #0000) 100% calc(50% - 3px),
    radial-gradient(farthest-side at top, currentColor 90%, #0000) 100% calc(50% + 3px);
  background-size: 12px 6px;
  background-repeat: no-repeat;
  animation: d3 1s infinite linear;
}

@keyframes d3 {
  16.67% {
    background-position: 0 0, 0 100%, 50% calc(50% - 3px), 50% calc(50% + 3px), 100% calc(50% - 3px), 100% calc(50% + 3px)
  }

  33.33% {
    background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% calc(50% - 3px), 100% calc(50% + 3px)
  }

  50% {
    background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%
  }

  66.67% {
    background-position: 0 calc(50% - 3px), 0 calc(50% + 3px), 50% 0, 50% 100%, 100% 0, 100% 100%
  }

  83.33% {
    background-position: 0 calc(50% - 3px), 0 calc(50% + 3px), 50% calc(50% - 3px), 50% calc(50% + 3px), 100% 0, 100% 100%
  }
}`)
}
const dots_4 = () => {
  download(`.dots-4 {
  width: 50px;
  height: 28px;
  background:
    radial-gradient(farthest-side, currentColor 90%, #0000) 0 50%/12px 12px,

    radial-gradient(farthest-side at bottom, currentColor 90%, #0000) 50% calc(50% - 3px)/12px 6px,
    radial-gradient(farthest-side at top, currentColor 90%, #0000) 50% calc(50% + 3px)/12px 6px,

    radial-gradient(farthest-side at bottom, currentColor 90%, #0000) 100% calc(50% - 3px)/12px 6px,
    radial-gradient(farthest-side at top, currentColor 90%, #0000) 100% calc(50% + 3px)/12px 6px;
  background-repeat: no-repeat;
  animation: d4 1s infinite;
}

@keyframes d4 {
  25% {
    background-position: 0 50%, 50% 0, 50% 100%, 100% 0, 100% 100%
  }

  50% {
    background-position: 100% 50%, 0 0, 0 100%, 50% 0, 50% 100%
  }

  75%,
  100% {
    background-position: 100% 50%, 0 calc(50% - 3px), 0 calc(50% + 3px), 50% calc(50% - 3px), 50% calc(50% + 3px)
  }
}`)
}
const dots_5 = () => {
  download(`.dots-5 {
  width: 50px;
  height: 12px;
  background:
    radial-gradient(farthest-side, currentColor 90%, #0000) left,
    radial-gradient(farthest-side, currentColor 90%, #0000) right;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  position: relative;
  animation: d5-0 1s infinite linear;
}

.dots-5::before {
  content: "";
  position: absolute;
  background: currentColor;
  border-radius: 50%;
  inset: 0 calc(50% - 6px);
  transform-origin: -13px 50%;
  animation: d5-1 0.5s infinite linear;
}

@keyframes d5-0 {

  0%,
  49.99% {
    transform: scale(1)
  }

  50%,
  100% {
    transform: scale(-1)
  }
}

@keyframes d5-1 {

  80%,
  100% {
    transform: rotate(1turn)
  }
}`)
}
const dots_6 = () => {
  download(`.dots-6 {
  width: 30px;
  height: 27.6px;
  --c: radial-gradient(farthest-side, currentColor 90%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 0 100%,
    var(--c) 100% 100%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  position: relative;
  animation: d6 1s infinite;
}

@keyframes d6 {

  50%,
  100% {
    background-position: 100% 100%, 50% 0, 0 100%
  }
}`)
}
const dots_7 = () => {
  download(`.dots-7 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  clip-path: inset(-25px -100px);
  box-shadow: 19px -40px, 38px -40px, 57px -40px;
  transform: translateX(-38px);
  animation: d7 1s infinite;
}

@keyframes d7 {
  16.67% {
    box-shadow: 19px 0px, 38px -40px, 57px -40px
  }

  33.33% {
    box-shadow: 19px 0px, 38px 0px, 57px -40px
  }

  45%,
  55% {
    box-shadow: 19px 0px, 38px 0px, 57px 0px
  }

  66.67% {
    box-shadow: 19px 40px, 38px 0px, 57px 0px
  }

  83.33% {
    box-shadow: 19px 40px, 38px 40px, 57px 0px
  }

  100% {
    box-shadow: 19px 40px, 38px 40px, 57px 40px
  }
}`)
}
const dots_8 = () => {
  download(`.dots-8 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: -19px 0px, 19px 0px;
  animation: d8 1s infinite;
}

@keyframes d8 {
  25% {
    box-shadow: -19px -19px, 19px 19px
  }

  50% {
    box-shadow: 0px -19px, 0px 19px
  }

  75% {
    box-shadow: 19px -19px, -19px 19px
  }

  100% {
    box-shadow: 19px 0px, -19px 0px
  }
}`)
}
const dots_9 = () => {
  download(`.dots-9 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  clip-path: inset(-45px);
  box-shadow: -60px 15px, -60px 15px, -60px 15px;
  transform: translateY(-15px);
  animation: d9 1s infinite linear;
}

@keyframes d9 {
  16.67% {
    box-shadow: -60px 15px, -60px 15px, 19px 15px
  }

  33.33% {
    box-shadow: -60px 15px, 0px 15px, 19px 15px
  }

  40%,
  60% {
    box-shadow: -19px 15px, 0px 15px, 19px 15px
  }

  66.67% {
    box-shadow: -19px 15px, 0px 15px, 60px 15px
  }

  83.33% {
    box-shadow: -19px 15px, 60px 15px, 60px 15px
  }

  100% {
    box-shadow: 60px 15px, 60px 15px, 60px 15px
  }
}`)
}
const dots_10 = () => {
  download(`.dots-10 {
  width: 76px;
  height: 12px;
  display: flex;
}

.dots-10:before,
.dots-10:after {
  content: "";
  flex: 1;
  background:
    radial-gradient(farthest-side, currentColor 90%, #0000) center/12px 100%,
    radial-gradient(farthest-side at right, currentColor 90%, #0000) right /6px 100%;
  background-repeat: no-repeat;
  transform: scale(var(--s, 1)) translate(0px) rotate(0);
  animation: d10 2s infinite;
}

.dots-10:after {
  --s: -1;
}

@keyframes d10 {
  25% {
    transform: scale(var(--s, 1)) translate(-10px) rotate(0);
  }

  50% {
    transform: scale(var(--s, 1)) translate(-10px) rotate(1turn);
  }

  75%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) rotate(1turn);
  }
}`)
}
</script>

<template>
  <h1>多点动画款-2</h1>
  <div class="grid">
    <div class="dots-1" @click="dots_1()" />
    <div class="dots-2" @click="dots_2()" />
    <div class="dots-3" @click="dots_3()" />
    <div class="dots-4" @click="dots_4()" />
    <div class="dots-5" @click="dots_5()" />
    <div class="dots-6" @click="dots_6()" />
    <div class="dots-7" @click="dots_7()" />
    <div class="dots-8" @click="dots_8()" />
    <div class="dots-9" @click="dots_9()" />
    <div class="dots-10" @click="dots_10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
