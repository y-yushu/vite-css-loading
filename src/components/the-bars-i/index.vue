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
    width: 50px;
    height: 40px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: calc(100%/3) 100%;
    background-repeat: no-repeat;
    animation: b1 1s infinite linear;
}

@keyframes b1 {
    33% {
        background-size: calc(100%/3) 10%, calc(100%/3) 100%, calc(100%/3) 100%
    }

    50% {
        background-size: calc(100%/3) 100%, calc(100%/3) 10%, calc(100%/3) 100%
    }

    66% {
        background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 10%
    }
}`)
}
const bars_2 = () => {
  download(`.bars-2 {
    width: 50px;
    height: 40px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 100%,
        var(--c) 50% 100%,
        var(--c) 100% 100%;
    background-size: calc(100%/3) 100%;
    background-repeat: no-repeat;
    animation: b2 1s infinite linear;
}

@keyframes b2 {
    20% {
        background-size: calc(100%/3) 60%, calc(100%/3) 100%, calc(100%/3) 100%
    }

    40% {
        background-size: calc(100%/3) 80%, calc(100%/3) 60%, calc(100%/3) 100%
    }

    60% {
        background-size: calc(100%/3) 100%, calc(100%/3) 80%, calc(100%/3) 60%
    }

    80% {
        background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 80%
    }
}`)
}
const bars_3 = () => {
  download(`.bars-3 {
    width: 50px;
    height: 40px;
    background:
        linear-gradient(#0000 calc(1*100%/6), currentColor 0 calc(3*100%/6), #0000 0) left bottom,
        linear-gradient(#0000 calc(2*100%/6), currentColor 0 calc(4*100%/6), #0000 0) center bottom,
        linear-gradient(#0000 calc(3*100%/6), currentColor 0 calc(5*100%/6), #0000 0) right bottom;
    background-size: calc(100%/3 - 6px) 600%;
    background-repeat: no-repeat;
    animation: b3 1s infinite linear;
}

@keyframes b3 {
    100% {
        background-position: left top, center top, right top
    }
}`)
}
const bars_4 = () => {
  download(`.bars-4 {
    width: 50px;
    height: 40px;
    --c: linear-gradient(#000 calc(50% - 10px), #0000 0 calc(50% + 10px), currentColor 0);
    background:
        var(--c) 0% 100%,
        var(--c) 50% 100%,
        var(--c) 100% 100%;
    background-size: calc(100%/3 - 6px) calc(200% + 20px);
    background-repeat: no-repeat;
    animation: b4 1s infinite linear;
}

@keyframes b4 {
    33% {
        background-position: 0% 50%, 50% 100%, 100% 100%
    }

    50% {
        background-position: 0% 0%, 50% 50%, 100% 100%
    }

    66% {
        background-position: 0% 0%, 50% 0%, 100% 50%
    }

    100% {
        background-position: 0% 0%, 50% 0%, 100% 0%
    }
}`)
}
const bars_5 = () => {
  download(`.bars-5 {
    width: 50px;
    height: 60px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 100%,
        var(--c) 50% 100%,
        var(--c) 100% 100%;
    background-size: calc(100%/3) 65%;
    background-repeat: no-repeat;
    animation: b5 1s infinite linear;
}

@keyframes b5 {
    20% {
        background-position: 0% 50%, 50% 100%, 100% 100%
    }

    40% {
        background-position: 0% 0%, 50% 50%, 100% 100%
    }

    60% {
        background-position: 0% 100%, 50% 0%, 100% 50%
    }

    80% {
        background-position: 0% 100%, 50% 100%, 100% 0%
    }
}`)
}
const bars_6 = () => {
  download(`.bars-6 {
    width: 50px;
    height: 60px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: calc(100%/3) 50%;
    background-repeat: no-repeat;
    animation: b6 1s infinite linear;
}

@keyframes b6 {
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
const bars_7 = () => {
  download(`.bars-7 {
    width: 50px;
    height: 60px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: calc(100%/3) 50%;
    background-repeat: no-repeat;
    animation: b7 1s infinite linear alternate;
}

@keyframes b7 {
    20% {
        background-size: calc(100%/3) 20%, calc(100%/3) 50%, calc(100%/3) 50%
    }

    40% {
        background-size: calc(100%/3) 100%, calc(100%/3) 20%, calc(100%/3) 50%
    }

    60% {
        background-size: calc(100%/3) 50%, calc(100%/3) 100%, calc(100%/3) 20%
    }

    80% {
        background-size: calc(100%/3) 50%, calc(100%/3) 50%, calc(100%/3) 100%
    }
}`)
}
const bars_8 = () => {
  download(`.bars-8 {
    width: 50px;
    height: 60px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 100%,
        var(--c) 50% 100%,
        var(--c) 100% 100%;
    background-size: calc(100%/3) 65%;
    background-repeat: no-repeat;
    animation: b8 1s infinite linear;
}

@keyframes b8 {
    16.67% {
        background-position: 0% 0%, 50% 100%, 100% 100%
    }

    33.33% {
        background-position: 0% 0%, 50% 0%, 100% 100%
    }

    50% {
        background-position: 0% 0%, 50% 0%, 100% 0%
    }

    66.67% {
        background-position: 0% 100%, 50% 0%, 100% 0%
    }

    83.33% {
        background-position: 0% 100%, 50% 100%, 100% 0%
    }

}`)
}
const bars_9 = () => {
  download(`.bars-9 {
    width: 50px;
    height: 60px;
    --c: linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: calc(100%/3) 60%;
    background-repeat: no-repeat;
    animation: b9 1s infinite;
}

@keyframes b9 {
    33% {
        background-position: 0% 0%, 50% 100%, 100% 0%
    }

    66% {
        background-position: 0% 100%, 50% 0%, 100% 100%
    }
}`)
}
const bars_10 = () => {
  download(`.bars-10 {
    width: 51px;
    height: 45px;
    background:
        linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0) 50% 0,
        linear-gradient(90deg, #0000 4px, currentColor 0 calc(100% - 4px), #0000 0) 50% 100%;
    background-size: calc(100%/3) 50%;
    background-repeat: repeat-x;
    animation: b10 1.5s infinite;
}

@keyframes b10 {
    33% {
        background-position: calc(50% - 4px) 0%, calc(50% + 4px) 100%
    }

    66% {
        background-position: calc(50% - 4px) 100%, calc(50% + 4px) 0%
    }

    100% {
        background-position: 50% 100%, 50% 0%
    }
}`)
}
</script>

<template>
  <h1>条形款-1</h1>
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
