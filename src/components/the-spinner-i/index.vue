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

const dome1 = () => {
  download(`.spinner-1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: s1 1s infinite;
}

@keyframes s1 {
  to {
    transform: rotate(.5turn)
  }
}`)
}
const dome2 = () => {
  download(`
.spinner-2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: lightblue;
  border-right-color: orange;
  animation: s2 1s infinite linear;
}

@keyframes s2 {
  to {
    transform: rotate(1turn)
  }
}`)
}
const dome3 = () => {
  download(`
.spinner-3 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #25b09b);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  to {
    transform: rotate(1turn)
  }
}`)
}
const dome4 = () => {
  download(`
.spinner-4 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #f03355) content-box;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg),
    radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 calc(100% - 8px));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s4 1s infinite steps(10);
}

@keyframes s4 {
  to {
    transform: rotate(1turn)
  }
}`)
}
const dome5 = () => {
  download(`
.spinner-5 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
    radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 calc(100% - 8px));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s5 1s infinite;
}

@keyframes s5 {
  to {
    transform: rotate(.5turn)
  }
}`)
}
const dome6 = () => {
  download(`
.spinner-6 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 3px;
  background:
    radial-gradient(farthest-side, #ffa516 95%, #0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 5px), #ffa516 calc(100% - 4px)) content-box;
  animation: s6 2s infinite;
}

@keyframes s6 {
  to {
    transform: rotate(1turn)
  }
}`)
}
const dome7 = () => {
  download(`
.spinner-7 {
  width: 50px;
  height: 50px;
  --c: radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: s7 1s infinite;
}

@keyframes s7 {
  to {
    transform: rotate(.5turn)
  }
}`)
}
const dome8 = () => {
  download(`
.spinner-8 {
  width: 50px;
  height: 50px;
  color: #f03355;
  --c: radial-gradient(farthest-side, currentColor 92%, #0000);
  background:
    var(--c) 50% 0 /12px 12px,
    var(--c) 50% 100%/12px 12px,
    var(--c) 100% 50%/12px 12px,
    var(--c) 0 50%/12px 12px,
    var(--c) 50% 50%/12px 12px,
    linear-gradient(currentColor 0 0) 50% 50%/4px 100%,
    linear-gradient(currentColor 0 0) 50% 50%/100% 4px;
  background-repeat: no-repeat;
  animation: s8 1s infinite linear;
}

@keyframes s8 {
  to {
    transform: rotate(.5turn)
  }
}`)
}
const dome9 = () => {
  download(`
.spinner-9 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #f03355 95%, #0000) 50% 1px/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 14px), #ccc 0);
  animation: s9 2s infinite linear;
}

@keyframes s9 {
  to {
    transform: rotate(1turn)
  }
}`)
}
const dome0 = () => {
  download(`
.spinner-10 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #854f1d;
  background:
    linear-gradient(currentColor 0 0) center/100% 4px,
    linear-gradient(currentColor 0 0) center/4px 100%,
    radial-gradient(farthest-side, #0000 calc(100% - 6px), currentColor calc(100% - 5px)),
    radial-gradient(circle 6px, currentColor 94%, #0000 0);
  background-repeat: no-repeat;
  animation: s10 2s infinite linear;
  position: relative;
}

.spinner-10:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: inherit;
  transform: rotate(45deg);
}

@keyframes s10 {
  to {
    transform: rotate(.5turn)
  }
}`)
}
</script>
<template>
  <h1>旋转动画款-1</h1>
  <div class="grid">
    <div class="spinner-1" @click="dome1()" />
    <div class="spinner-2" @click="dome2()" />
    <div class="spinner-3" @click="dome3()" />
    <div class="spinner-4" @click="dome4()" />
    <div class="spinner-5" @click="dome5()" />
    <div class="spinner-6" @click="dome6()" />
    <div class="spinner-7" @click="dome7()" />
    <div class="spinner-8" @click="dome8()" />
    <div class="spinner-9" @click="dome9()" />
    <div class="spinner-10" @click="dome0()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
