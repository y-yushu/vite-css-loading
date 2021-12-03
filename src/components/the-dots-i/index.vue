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
  width: 50px;
  height: 12px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0 0/33% 100% space;
  clip-path: inset(0 100% 0 0);
  animation: d1 1s steps(4) infinite;
}

@keyframes d1 {
  to {
    clip-path: inset(0 -34% 0 0)
  }
}`)
}
const dots_2 = () => {
  download(`.dots-2 {
  width: 50px;
  height: 12px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0 0/33% 100% no-repeat;
  animation: d2 1s steps(3) infinite;
}

@keyframes d2 {
  to {
    background-position: 150% 0
  }
}`)
}
const dots_3 = () => {
  download(`.dots-3 {
  width: 50px;
  height: 24px;
  background:
    radial-gradient(circle closest-side, currentColor 90%, #0000) 0% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100%/3) 12px;
  background-repeat: no-repeat;
  animation: d3 1s infinite linear;
}

@keyframes d3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%
  }

  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }

  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%
  }

  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%
  }
}`)
}
const dots_4 = () => {
  download(`.dots-4 {
  width: 50px;
  height: 12px;
  background:
    radial-gradient(circle closest-side at left 6px top 50%, currentColor 90%, #0000),
    radial-gradient(circle closest-side, currentColor 90%, #0000),
    radial-gradient(circle closest-side at right 6px top 50%, currentColor 90%, #0000);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: d4 1s infinite alternate;
}

@keyframes d4 {
  to {
    width: 20px;
    height: 24px
  }
}`)
}
const dots_5 = () => {
  download(`.dots-5 {
  width: 12px;
  height: 12px;
  background: #000000;
  border-radius: 50%;
  box-shadow: 20px 0 #00000022, -20px 0 #000000;
  animation: d5 1s infinite linear alternate;
}

@keyframes d5 {
  0% {
    box-shadow: 20px 0 #000000, -20px 0 #00000022;
    background: #000000
  }

  33% {
    box-shadow: 20px 0 #000000, -20px 0 #00000022;
    background: #00000022
  }

  66% {
    box-shadow: 20px 0 #00000022, -20px 0 #000000;
    background: #00000022
  }
}`)
}
const dots_6 = () => {
  download(`.dots-6 {
  width: 12px;
  height: 12px;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 12px 0 currentColor, -24px 0 currentColor;
  animation: d6 1s infinite linear alternate;
}

@keyframes d6 {
  50% {
    box-shadow: 12px 0 currentColor, -12px 0 currentColor
  }

  100% {
    box-shadow: 24px 0 currentColor, -12px 0 currentColor
  }
}`)
}
const dots_7 = () => {
  download(`.dots-7 {
  width: 50px;
  height: 12px;
  background:
    radial-gradient(circle closest-side, currentColor 90%, #0000) 0% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100%/3) 100%;
  background-repeat: no-repeat;
  animation: d7 1s infinite linear;
}

@keyframes d7 {
  33% {
    background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%
  }

  50% {
    background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%
  }

  66% {
    background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%
  }
}`)
}
const dots_8 = () => {
  download(`.dots-8 {
  width: 12px;
  height: 12px;
  position: relative;
}

.dots-8::before,
.dots-8::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: currentColor;
}

.dots-8::before {
  box-shadow: -24px 0 currentColor;
  animation: d8-1 1s infinite linear;
}

.dots-8::after {
  transform: rotate(0deg) translateX(24px);
  animation: d8-2 1s infinite linear;
}

@keyframes d8-1 {
  100% {
    transform: translateX(24px)
  }
}

@keyframes d8-2 {
  100% {
    transform: rotate(-180deg) translateX(24px)
  }
}`)
}
const dots_9 = () => {
  download(`.dots-9 {
  width: 12px;
  height: 12px;
  position: relative;
  animation: d9-0 2s infinite steps(2);
}

.dots-9::before,
.dots-9::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: currentColor;
}

.dots-9::before {
  box-shadow: 24px 0 currentColor;
  transform: translateX(-24px);
  animation: d9-1 1s infinite linear alternate;
}

.dots-9::after {
  transform: translateX(12px) rotate(0deg) translateX(12px);
  animation: d9-2 1s infinite linear alternate;
}

@keyframes d9-0 {

  0%,
  49.9% {
    transform: scale(1)
  }

  50%,
  100% {
    transform: scale(-1)
  }
}

@keyframes d9-1 {
  100% {
    box-shadow: 48px 0 currentColor
  }
}

@keyframes d9-2 {
  100% {
    transform: translateX(12px) rotate(-180deg) translateX(12px)
  }
}`)
}
const dots_10 = () => {
  download(`.dots-10 {
  width: 12px;
  height: 12px;
  position: relative;
}

.dots-10::before,
.dots-10::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: currentColor;
}

.dots-10::before {
  box-shadow: -24px 0 currentColor;
  animation: d10-1 2s infinite linear;
}

.dots-10::after {
  transform: rotate(0deg) translateX(24px);
  animation: d10-2 2s infinite linear;
}

@keyframes d10-1 {
  50% {
    transform: translateX(24px)
  }
}

@keyframes d10-2 {
  100% {
    transform: rotate(-360deg) translateX(24px)
  }
}`)
}
</script>

<template>
  <h1>多点动画款-1</h1>
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
