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
  download(`.infinity-1 {
    width: 90px;
    height: 14px;
    background: repeating-linear-gradient(90deg, currentColor 0 calc(25% - 5px), #0000 0 25%) left/calc(4*100%/3) 100%;
    animation: i1 0.5s infinite linear;
}

@keyframes i1 {
    100% {
        background-position: right
    }
}`)
}
const dome2 = () => {
  download(`.infinity-2 {
    width: 90px;
    height: 14px;
    background: radial-gradient(circle closest-side, currentColor 92%, #0000) calc(100%/3) 0/calc(100%/4) 100%;
    animation: i2 0.5s infinite linear;
}

@keyframes i2 {
    100% {
        background-position: 0 0
    }
}`)
}
const dome3 = () => {
  download(`.infinity-3 {
    width: calc(80px / 0.707);
    /* 0.707 = cos(45deg) */
    height: 14px;
    background: repeating-linear-gradient(-45deg, currentColor 0 15px, #0000 0 20px) left/200% 100%;
    animation: i3 2s infinite linear;
}

@keyframes i3 {
    100% {
        background-position: right
    }
}`)
}
const dome4 = () => {
  download(`.infinity-4 {
    width: calc(80px / 0.707);
    height: 14px;
    background:
        repeating-linear-gradient(135deg, currentColor 0 15px, #0000 0 20px) left top,
        repeating-linear-gradient(45deg, currentColor 0 15px, #0000 0 20px) left bottom;
    background-size: 200% 50%;
    background-repeat: no-repeat;
    animation: i4 2s infinite linear;
}

@keyframes i4 {
    100% {
        background-position: top right, bottom right
    }
}`)
}
const dome5 = () => {
  download(`.infinity-5 {
    width: 90px;
    height: 14px;
    background:
        radial-gradient(circle 10px at right 7px top 50%, #0000 92%, currentColor),
        radial-gradient(circle 10px at right 0 top 50%, currentColor 92%, #0000);
    background-size: calc(100%/3) 100%;
    background-position: 50% 0%;
    animation: i5 .5s infinite linear;
}

@keyframes i5 {
    100% {
        background-position: 0% 0%
    }
}`)
}
const dome6 = () => {
  download(`.infinity-6 {
    width: 90px;
    height: 14px;
    background:
        conic-gradient(from 45deg at calc(100% - 7px) 50%, currentColor 90deg, #0000 0),
        conic-gradient(from -135deg at 7px 50%, currentColor 90deg, #0000 0);
    background-position: calc(100%/3) 0;
    background-size: calc(100%/4) 100%;
    animation: i6 0.5s infinite linear;
}

@keyframes i6 {
    100% {
        background-position: 0 0
    }
}`)
}
const dome7 = () => {
  download(`.infinity-7 {
    width: 90px;
    height: 14px;
    background:
        linear-gradient(90deg, currentColor 50%, #0000 0) repeat-x,
        conic-gradient(from 45deg at right 7px top 50%, currentColor 90deg, #0000 0);
    background-position: calc(100%/3) 50%;
    background-size: calc(100%/4) 60%, calc(100%/4) 100%;
    animation: i7 0.5s infinite linear;
}

@keyframes i7 {
    100% {
        background-position: 0 50%
    }
}`)
}
const dome8 = () => {
  download(`.infinity-8 {
    width: 90px;
    height: 12px;
    background:
        linear-gradient(90deg, currentColor 50%, #0000 0) 0 0%,
        linear-gradient(-90deg, currentColor 50%, #0000 0) 0 50%,
        linear-gradient(90deg, currentColor 50%, #0000 0) 0 100%;
    background-size: 8px calc(100%/3);
    background-repeat: repeat-x;
    animation: i8 .25s infinite linear;
}

@keyframes i8 {
    100% {
        background-position: -8px 0%, -8px 50%, -8px 100%
    }
}`)
}
const dome9 = () => {
  download(`.infinity-9 {
    width: 90px;
    height: 14px;
    background:
        linear-gradient(90deg, #0000 16px, currentColor 0 30px, #0000 0),
        radial-gradient(circle closest-side at 68% 50%, currentColor 92%, #0000),
        conic-gradient(from 45deg at calc(100% - 7px) 50%, currentColor 90deg, #0000 0),
        conic-gradient(from -135deg at 7px 50%, currentColor 90deg, #0000 0);
    background-position: 0 0;
    background-size: calc(3*100%/4) 100%;
    background-repeat: repeat-x;
    animation: i9 2s infinite linear;
}

@keyframes i9 {
    100% {
        background-position: -300% 0
    }
}`)
}
const dome10 = () => {
  download(`.infinity-10 {
    width: 90px;
    height: 12px;
    background:
        linear-gradient(90deg, currentColor 50%, #0000 0) 0 0%,
        linear-gradient(-90deg, currentColor 50%, #0000 0) 0 0%;
    background-size: 20px 100%;
    background-repeat: repeat-x;
    animation: i10 1s infinite linear;
}

@keyframes i10 {
    100% {
        background-position: -20px 0%, 20px 0%
    }
}`)
}
</script>
<template>
  <h1>无限循环款</h1>
  <div class="grid">
    <div class="infinity-1" @click="dome1()" />
    <div class="infinity-2" @click="dome2()" />
    <div class="infinity-3" @click="dome3()" />
    <div class="infinity-4" @click="dome4()" />
    <div class="infinity-5" @click="dome5()" />
    <div class="infinity-6" @click="dome6()" />
    <div class="infinity-7" @click="dome7()" />
    <div class="infinity-8" @click="dome8()" />
    <div class="infinity-9" @click="dome9()" />
    <div class="infinity-10" @click="dome10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
