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
  download(`.hypnotic-1 {
  width: 50px;
  height: 50px;
  border: 2px solid;
  border-radius: 50%;
  display: grid;
  animation: h1 1.5s infinite linear;
  transform-origin: 50% 80%;
}
.hypnotic-1:before,
.hypnotic-1:after {
  content:"";
  grid-area: 1/1;
  border:inherit;
  border-radius: 50%;
  animation: inherit;
  animation-duration: 1s;
  transform-origin: inherit;
}
.hypnotic-1:after {
  --s:-1;
}

@keyframes h1 {
   100% {transform:rotate(calc(var(--s,1)*1turn))}
}`)
}
const dome2 = () => {
  download(`.hypnotic-2 {
  width: 60px;
  height: 25px;
  border: 2px solid;
  border-radius: 50%;
  display: grid;
  animation: h2 2s infinite linear;
}
.hypnotic-2:before,
.hypnotic-2:after {
  content:"";
  grid-area: 1/1;
  border:inherit;
  border-radius: 50%;
  animation: inherit;
  animation-duration: 3s;
}
.hypnotic-2:after {
  --s:-1;
}

@keyframes h2 {
   100% {transform:rotate(calc(var(--s,1)*1turn))}
}`)
}
const dome3 = () => {
  download(`.hypnotic-3 {
  width: 60px;
  height: 30px;
  display: flex;
  background:
    radial-gradient(farthest-side at bottom,#0000 calc(100% - 5px),currentColor calc(100% - 4px) 96%,#0000) 0 0,
    radial-gradient(farthest-side at top   ,#0000 calc(100% - 5px),currentColor calc(100% - 4px) 96%,#0000) 100% 100%;
  background-size:calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: h3 2s infinite linear;
}
.hypnotic-3:before {
  content:"";
  flex:1;
  background:inherit;
  transform:rotate(90deg);
}

@keyframes h3 {
   100% {transform:rotate(1turn)}
}`)
}
const dome4 = () => {
  download(`.hypnotic-4 {
  width: 60px;
  height: 30px;
  display: grid;
  background:
    radial-gradient(farthest-side at bottom,#0000 calc(100% - 5px),currentColor calc(100% - 4px) 96%,#0000) 0 0,
    radial-gradient(farthest-side at top   ,#0000 calc(100% - 5px),currentColor calc(100% - 4px) 96%,#0000) 100% 100%;
  background-size:calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: h4 1.5s infinite linear;
}
.hypnotic-4:before,
.hypnotic-4:after {
  content:"";
  grid-area:1/1;
  background:inherit;
  animation: inherit;
  animation-duration: 2s;
}
.hypnotic-4:after {
  --s:-1;
}

@keyframes h4 {
   100% {transform:rotate(calc(var(--s,1)*1turn))}
}`)
}
const dome5 = () => {
  download(`.hypnotic-5 {
  width: 50px;
  height: 50px;
  border: 2px solid;
  background: 
    conic-gradient(from 180deg at 50% calc(100% - 2px),#000 90deg, #0000 0),
    conic-gradient(from 180deg at 50% calc(100% - 2px),#000 90deg, #0000 0);
  background-position: 0 0,8px 0;
  background-size: 16px 9.6px;
  animation: h5 1s infinite;
}

@keyframes h5 {
  100% {background-position: 0 -9.6px,8px 9.6px}
}`)
}
const dome6 = () => {
  download(`.hypnotic-6 {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border: 2px solid;
}
.hypnotic-6::before {
  content: "";
  position: absolute;
  inset:-48px;
  background: 
    conic-gradient(from 180deg at 50% calc(100% - 2px),#000 90deg, #0000 0),
    conic-gradient(from 180deg at 50% calc(100% - 2px),#000 90deg, #0000 0);
  background-position: 0 0,8px 0;
  background-size: 16px 9.6px;
  animation: h6 2s infinite;
}

@keyframes h6 {
  50%  {background-position: 0 -9.6px ,8px 9.6px; transform:rotate(90deg)}
  100% {background-position: 0 -19.2px,8px 19.2px;transform:rotate(180deg)}
}`)
}
const dome7 = () => {
  download(`.hypnotic-7 {
  width: 30px;
  height: calc(30px*1.732);
  display: grid;
  background:
    linear-gradient(currentColor 0 0) top   /100% 1px,
    linear-gradient(currentColor 0 0) bottom/100% 1px,
    linear-gradient(to bottom right, #0000 calc(50% - 2px),currentColor calc(50% - 1px),#0000 50%) top/100% calc(100% + 2px),
    linear-gradient(to bottom left , #0000 calc(50% - 2px),currentColor calc(50% - 1px),#0000 50%) top/100% calc(100% + 2px); 
  background-repeat: no-repeat;
  animation: h7 4s infinite linear;
}
.hypnotic-7::before,
.hypnotic-7::after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  border:inherit;
  animation: inherit;
}

.hypnotic-7::after {
  animation-duration: 2s;
}

@keyframes h7 {
  100% {transform: rotate(1turn)}
}`)
}
const dome8 = () => {
  download(`.hypnotic-8 {
  width: 25px;
  height: 50px;
  display: grid;
  background:
    linear-gradient(currentColor 0 0) top/100% 2px,
    radial-gradient(farthest-side at  top, #0000 calc(100% - 2px),currentColor calc(100% - 1px) ,#0000) top,
    linear-gradient(currentColor 0 0) bottom/100% 2px,
    radial-gradient(farthest-side at  bottom, #0000 calc(100% - 2px),currentColor calc(100% - 1px) ,#0000) bottom;
  background-size: 100% 1px,100% 50%; 
  background-repeat: no-repeat;
  animation: h8 4s infinite linear;
}
.hypnotic-8::before,
.hypnotic-8::after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  border:inherit;
  animation: inherit;
}

.hypnotic-8::after {
  animation-duration: 2s;
}

@keyframes h8 {
  100% {transform: rotate(1turn)}
}`)
}
const dome9 = () => {
  download(`.hypnotic-9 {
  width: 50px;
  height: 50px;
  display: grid;
}

.hypnotic-9::before,
.hypnotic-9::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-radial-gradient(farthest-side,#0000 0%,currentColor 1% 10%,#0000 11% 30%);
  -webkit-mask: repeating-conic-gradient(#000 0 36deg,#0000 0 72deg);
  animation: h9 4s infinite linear;
}
.hypnotic-9::after {
  -webkit-mask: repeating-conic-gradient(#0000 0 36deg,#000 0 72deg);
  animation-direction: reverse;
}

@keyframes h9 {
  100% {transform:rotate(1turn)}
}`)
}
const dome10 = () => {
  download(`.hypnotic-10 {
  width: 50px;
  height: 50px;    
  --g: #0000 calc(100% - 5px),currentColor calc(100% - 3px) 93%,#0000;
  background: 
    radial-gradient(farthest-side at bottom,var(--g)) top                  /100% 50%,
    radial-gradient(farthest-side at top   ,var(--g)) bottom 18% right  0  /80%  40%,
    radial-gradient(farthest-side at bottom,var(--g)) left   50% top    30%/60%  30%,
    radial-gradient(farthest-side at top   ,var(--g)) right  34% bottom 37%/40%  20%,
    radial-gradient(farthest-side at bottom,var(--g)) left   52% top    43%/24%  12%;
  background-repeat: no-repeat;
  animation: h10 1s infinite linear;
}

@keyframes h10 {
  100% {transform: rotate(1turn)}
}`)
}
</script>
<template>
  <h1>催眠款-2</h1>
  <div class="grid">
    <div class="hypnotic-1" @click="dome1()" />
    <div class="hypnotic-2" @click="dome2()" />
    <div class="hypnotic-3" @click="dome3()" />
    <div class="hypnotic-4" @click="dome4()" />
    <div class="hypnotic-5" @click="dome5()" />
    <div class="hypnotic-6" @click="dome6()" />
    <div class="hypnotic-7" @click="dome7()" />
    <div class="hypnotic-8" @click="dome8()" />
    <div class="hypnotic-9" @click="dome9()" />
    <div class="hypnotic-10" @click="dome10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
