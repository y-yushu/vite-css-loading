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

const bars_1 = () => {
  download(`.bars-1 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
    background-size: 9px 50%;
    background-repeat: no-repeat;
    animation: b1 1s infinite linear;
}

@keyframes b1 {
    80% {
        background-size: 9px 30%;
    }

    90% {
        background-size: 9px 50%;
    }
}`)
}
const bars_2 = () => {
  download(`.bars-2 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
    background-size: 9px 50%;
    background-repeat: no-repeat;
    animation: b2 1s infinite;
}

@keyframes b2 {
    16.67% {
        background-size: 9px 30%, 9px 30%, 9px 50%, 9px 50%, 9px 50%, 9px 50%;
    }

    33.33% {
        background-size: 9px 30%, 9px 30%, 9px 30%, 9px 30%, 9px 50%, 9px 50%;
    }

    50% {
        background-size: 9px 30%, 9px 30%, 9px 30%, 9px 30%, 9px 30%, 9px 30%;
    }

    66.67% {
        background-size: 9px 50%, 9px 50%, 9px 30%, 9px 30%, 9px 30%, 9px 30%;
    }

    83.33% {
        background-size: 9px 50%, 9px 50%, 9px 50%, 9px 50%, 9px 30%, 9px 30%;
    }
}`)
}
const bars_3 = () => {
  download(`.bars-3 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 50%, var(--c) 100% 0, var(--c) 100% 100%;
    background-repeat: no-repeat;
    animation: b3 1s infinite alternate;
}

@keyframes b3 {

    0%,
    10% {
        background-size: 9px 100%;
    }

    50% {
        background-size: 9px 9px;
    }

    90%,
    100% {
        background-size: 100% 9px;
    }
}`)
}
const bars_4 = () => {
  download(`.bars-4 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
    background-repeat: no-repeat;
    animation: b4-1 0.5s infinite alternate, b4-2 2s infinite;
}

@keyframes b4-1 {

    0%,
    10% {
        background-size: 9px 100%;
    }

    100% {
        background-size: 9px 9px;
    }
}

@keyframes b4-2 {

    0%,
    49.9% {
        background-position: 0 0, 0 100%, 50% 50%, 50% 50%, 100% 0, 100% 100%;
    }

    50%,
    100% {
        background-position: 0 50%, 0 50%, 50% 0, 50% 100%, 100% 50%, 100% 50%;
    }
}`)
}
const bars_5 = () => {
  download(`.bars-5 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c);
    background-repeat: no-repeat;
    animation: b5-1 1s infinite, b5-2 1s infinite;
}

@keyframes b5-1 {

    0%,
    100% {
        background-size: 9px 100%;
    }

    33%,
    66% {
        background-size: 9px 40%;
    }
}

@keyframes b5-2 {

    0%,
    33% {
        background-position: 0 0, 50% 100%, 100% 100%;
    }

    66%,
    100% {
        background-position: 100% 0, 0 100%, 50% 100%;
    }
}`)
}
const bars_6 = () => {
  download(`.bars-6 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c);
    background-repeat: no-repeat;
    animation: b6-1 1s infinite, b6-2 1s infinite;
}

@keyframes b6-1 {

    0%,
    100% {
        background-size: 9px 100%;
    }

    33%,
    66% {
        background-size: 9px 40%;
    }
}

@keyframes b6-2 {

    0%,
    33% {
        background-position: 0 0, 50% 100%, 100% 0;
    }

    66%,
    100% {
        background-position: 0 100%, 50% 0, 100% 100%;
    }
}`)
}
const bars_7 = () => {
  download(`.bars-7 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c) 0 0, var(--c) 50% 50%, var(--c) 100% 100%;
    background-repeat: no-repeat;
    animation: b7 1s infinite alternate;
}

@keyframes b7 {

    0%,
    10% {
        background-size: 9px 100%;
    }

    50% {
        background-size: 9px 9px;
    }

    90%,
    100% {
        background-size: 100% 9px;
    }
}`)
}
const bars_8 = () => {
  download(`.bars-8 {
    width: 45px;
    height: 45px;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c);
    background-repeat: no-repeat;
    animation: b8-1 1s infinite, b8-2 1s infinite;
}

@keyframes b8-1 {

    0%,
    100% {
        background-size: 9px 100%;
    }

    33%,
    66% {
        background-size: 9px 9px;
    }
}

@keyframes b8-2 {

    0%,
    33% {
        background-position: 0 0, 50% 50%, 100% 100%;
    }

    66%,
    100% {
        background-position: 100% 0, 50% 50%, 0 100%;
    }
}`)
}
const bars_9 = () => {
  download(`.bars-9 {
    width: 45px;
    height: 45px;
    --c: conic-gradient(from -90deg, currentColor 90deg, #0000 0);
    background: var(--c), var(--c);
    background-size: 18px 18px;
    animation: b9 1s infinite alternate;
}

@keyframes b9 {

    0%,
    10% {
        background-position: 0 0, 0 9px;
    }

    50% {
        background-position: 0 0, 9px 9px;
    }

    90%,
    100% {
        background-position: 0 0, 9px 0;
    }
}`)
}
const bars_10 = () => {
  download(`.bars-10 {
    width: 45px;
    height: 45px;
    --c: conic-gradient(from -90deg, currentColor 90deg, #0000 0);
    background: var(--c), var(--c);
    background-size: 18px 18px;
    animation: b10 1.5s infinite;
}

@keyframes b10 {

    0%,
    20% {
        background-position: 0 0, 0 9px;
    }

    33% {
        background-position: 0 0, 9px 9px;
    }

    66% {
        background-position: 0 9px, 9px 0;
    }

    80%,
    100% {
        background-position: 0 9px, 0 0;
    }
}`)
}
</script>

<template>
  <h1>条形款-2</h1>
  <div class="grid">
    <div class="bars-1" @click="bars_1()" />
    <div class="bars-2" @click="bars_2()" />
    <div class="bars-3" @click="bars_3()" />
    <div class="bars-4" @click="bars_4()" />
    <div class="bars-5" @click="bars_5()" />
    <div class="bars-6" @click="bars_6()" />
    <div class="bars-7" @click="bars_7()" />
    <div class="bars-8" @click="bars_8()" />
    <div class="bars-9" @click="bars_9()" />
    <div class="bars-10" @click="bars_10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
