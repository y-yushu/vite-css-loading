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

const continuous_1 = () => {
  download(`.continuous-1 {
    width: 120px;
    height: 20px;
    background:
        linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
    background-size: 300% 100%;
    animation: ct1 1s infinite linear;
}

@keyframes ct1 {
    0% {
        background-position: right
    }
}`)
}
const continuous_2 = () => {
  download(`.continuous-2 {
    width: 120px;
    height: 20px;
    background:
        linear-gradient(90deg, #0000, orange) left -50px top 0/50px 20px no-repeat lightblue;
    animation: ct2 1s infinite linear;
}

@keyframes ct2 {
    100% {
        background-position: right -50px top 0
    }
}`)
}
const continuous_3 = () => {
  download(`.continuous-3 {
    width: 120px;
    height: 20px;
    transform: skewX(-45deg);
    background:
        linear-gradient(#f03355 0 0) left -30px top 0/30px 20px no-repeat #ccc;
    animation: ct3 1s infinite linear;
}

@keyframes ct3 {
    100% {
        background-position: right -30px top 0
    }
}`)
}
const continuous_4 = () => {
  download(`.continuous-4 {
    width: 120px;
    height: 22px;
    border-radius: 40px;
    color: #514b82;
    border: 2px solid;
    position: relative;
    overflow: hidden;
}

.continuous-4::before {
    content: "";
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);
    animation: ct4 1s infinite linear;
}

@keyframes ct4 {
    100% {
        left: calc(100% + 20px)
    }
}`)
}
const continuous_5 = () => {
  download(`.continuous-5 {
    width: 120px;
    height: 20px;
    background:
        linear-gradient(#25b09b 0 0) left -40px top 0/40px 20px,
        linear-gradient(#ddd 0 0) center/100% 50%;
    background-repeat: no-repeat;
    animation: ct5 1s infinite linear;
}

@keyframes ct5 {
    100% {
        background-position: right -40px top 0, center
    }
}`)
}
const continuous_6 = () => {
  download(`.continuous-6 {
    width: 120px;
    height: 20px;
    background:
        radial-gradient(circle 10px, #000 95%, #0000) right /calc(200% + 20px) 100%,
        linear-gradient(#000 0 0) center/100% 6px;
    background-repeat: no-repeat;
    -webkit-mask: radial-gradient(circle 4px, #0000 93%, #000) right/calc(200% + 20px) 100%;
    mask: radial-gradient(circle 4px, #0000 93%, #000) right/calc(200% + 20px) 100%;
    animation: ct6 1s infinite linear;
}

@keyframes ct6 {
    100% {
        background-position: left;
        -webkit-mask-position: left
    }
}`)
}
const continuous_7 = () => {
  download(`.continuous-7 {
    width: 120px;
    height: 20px;
    -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
    mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
    background:
        linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat #ddd;
    animation: ct7 1s infinite steps(6);
}

@keyframes ct7 {
    100% {
        background-position: right -25% top 0
    }
}`)
}
const continuous_8 = () => {
  download(`.continuous-8 {
    width: 40px;
    height: 40px;
    background:
        linear-gradient(to bottom right, #0000 calc(50% - 40px), #fff 50%, #0000 calc(50% + 40px)) bottom right/calc(200% + 80px) calc(200% + 80px) orange;
    animation: ct8 1s infinite;
}

@keyframes ct8 {
    100% {
        background-position: top left
    }
}`)
}
const continuous_9 = () => {
  download(`.continuous-9 {
    width: 120px;
    height: 20px;
    background:
        radial-gradient(circle closest-side, #f03355 94%, #0000) 50% 50%/calc(50% + 10px) 70% repeat-x #ccc;
    animation: ct9 1s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes ct9 {
    100% {
        background-position: calc(200% - 5px)
    }
}`)
}
const continuous_10 = () => {
  download(`.continuous-10 {
    width: 120px;
    height: 20px;
    background: linear-gradient(#514b82 0 0) left -40px top 0/40px 100% no-repeat #eee;
    -webkit-mask:
        linear-gradient(#000 0 0) top /100% 5px no-repeat,
        linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
        repeating-linear-gradient(90deg, #000 0 5px, #0000 0 20%) left/calc(100% - 5px) 100%;
    mask:
        linear-gradient(#000 0 0) top /100% 5px no-repeat,
        linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
        repeating-linear-gradient(90deg, #000 0 5px, #0000 0 20%) left/calc(100% - 5px) 100%;
    animation: ct10 1s infinite linear;
}

@keyframes ct10 {
    100% {
        background-position: right -40px top 0
    }
}`)
}
</script>
<template>
  <h1>连续款</h1>
  <div class="grid">
    <div class="continuous-1" @click="continuous_1()" />
    <div class="continuous-2" @click="continuous_2()" />
    <div class="continuous-3" @click="continuous_3()" />
    <div class="continuous-4" @click="continuous_4()" />
    <div class="continuous-5" @click="continuous_5()" />
    <div class="continuous-6" @click="continuous_6()" />
    <div class="continuous-7" @click="continuous_7()" />
    <div class="continuous-8" @click="continuous_8()" />
    <div class="continuous-9" @click="continuous_9()" />
    <div class="continuous-10" @click="continuous_10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
