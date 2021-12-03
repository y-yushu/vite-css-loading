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

const classic_1 = () => {
  download(`.classic-1 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
    animation: c1 2s infinite linear;
}

.classic-1::before {
    content: "Loading...";
    color: #0000;
    padding: 0 5px;
    background: linear-gradient(90deg, #fff 50%, #000 0);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: inherit;
    background-position: inherit;
}

@keyframes c1 {
    100% {
        background-position: left
    }
}`)
}
const classic_2 = () => {
  download(`.classic-2 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: linear-gradient(135deg, #0000 calc(50% - 0.5em), #000 0 calc(50% + 0.5em), #0000 0) right/300% 100%;
    animation: c2 2s infinite;
}

.classic-2::before {
    content: "Loading...";
    color: #0000;
    padding: 0 5px;
    background: linear-gradient(135deg, #000 calc(50% - 0.5em), #fff 0 calc(50% + 0.5em), #000 0);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: inherit;
    background-position: inherit;
}

@keyframes c2 {
    100% {
        background-position: left
    }
}`)
}
const classic_3 = () => {
  download(`.classic-3 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    overflow: hidden;
}

.classic-3::before {
    content: "Loading...";
    color: #0000;
    text-shadow: 0 0 0 #000, 10ch 0 0 #fff, 20ch 0 0 #000;
    background: linear-gradient(90deg, #0000 calc(100%/3), #000 0 calc(2*100%/3), #0000 0) left/300% 100%;
    animation: c3 2s infinite;
}

@keyframes c3 {
    50% {
        background-position: center;
        text-shadow: -10ch 0 0 #000, 0 0 0 #fff, 10ch 0 0 #000
    }

    100% {
        background-position: right;
        text-shadow: -20ch 0 0 #000, -10ch 0 0 #fff, 0 0 0 #000
    }
}`)
}
const classic_4 = () => {
  download(`.classic-4 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: radial-gradient(circle closest-side, #000 94%, #0000) right/calc(200% - 1em) 100%;
    animation: c2 1s infinite alternate linear;
}

.classic-4::before {
    content: "Loading...";
    line-height: 1em;
    color: #0000;
    background: radial-gradient(circle closest-side, #fff 94%, #000);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: inherit;
    background-position: inherit;
}

@keyframes c4 {
    100% {
        background-position: left
    }
}`)
}
const classic_5 = () => {
  download(`.classic-5 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    animation: c5 1s infinite;
}

.classic-5::before {
    content: "Loading...";
}

@keyframes c5 {

    0%,
    12.5% {
        transform: translate(10px, 0)
    }

    13%,
    25% {
        transform: translate(4px, -4px)
    }

    26%,
    37.5% {
        transform: translate(2px, 8px)
    }

    38%,
    50% {
        transform: translate(12px, -6px)
    }

    51%,
    62.5% {
        transform: translate(0, 12px)
    }

    63%,
    75% {
        transform: translate(-8px, -4px)
    }

    76%,
    86.5% {
        transform: translate(-12px, 6px)
    }

    87%,
    100% {
        transform: translate(6px, 0)
    }
}`)
}
const classic_6 = () => {
  download(`.classic-6 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    animation: c6 2s infinite;
}

.classic-6::before {
    content: "Loading...";
}

@keyframes c6 {

    0%,
    10% {
        transform: perspective(200px) rotateX(0) rotateY(0) scale(1)
    }

    30%,
    36% {
        transform: perspective(200px) rotateX(180deg) rotateY(0) scale(1)
    }

    63%,
    69% {
        transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(1)
    }

    90%,
    100% {
        transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(-1)
    }
}`)
}
const classic_7 = () => {
  download(`.classic-7 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    display: flex;
}

.classic-7::before {
    content: "Loadi";
    animation: c7 2s infinite;
}

.classic-7::after {
    content: "ng...";
    animation: c7 2s infinite 1s;
}


@keyframes c7 {

    50%,
    100% {
        transform: rotate(1turn)
    }
}`)
}
const classic_8 = () => {
  download(`.classic-8 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    overflow: hidden;
    animation: c8 2s infinite;
}

.classic-8::before {
    content: "Loading...";
}

@keyframes c8 {

    0%,
    10% {
        transform: perspective(300px) rotate(0) rotateY(0) rotateX(0)
    }

    30%,
    36% {
        transform: perspective(300px) rotate(.5turn) rotateY(0) rotateX(0)
    }

    63%,
    69% {
        transform: perspective(300px) rotate(.5turn) rotateY(180deg) rotateX(0)
    }

    90%,
    100% {
        transform: perspective(300px) rotate(.5turn) rotateY(180deg) rotateX(180deg)
    }
}`)
}
const classic_9 = () => {
  download(`.classic-9 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    display: grid;
}

.classic-9:before,
.classic-9:after {
    content: "Loading...";
    grid-area: 1/1;
    -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    animation: c9 2s infinite;
}

.classic-9:after {
    -webkit-mask-position: 1ch 50%;
    mask-position: 1ch 50%;
    --s: -1;
}

@keyframes c9 {

    80%,
    100% {
        transform: rotate(calc(var(--s, 1)*1turn))
    }
}`)
}
const classic_10 = () => {
  download(`.classic-10 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    display: grid;
}

.classic-10:before,
.classic-10:after {
    content: "Loading...";
    grid-area: 1/1;
    line-height: 1em;
    -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    -webkit-mask-position: calc(var(--s, 0)*1ch) 50%;
    mask-position: calc(var(--s, 0)*1ch) 50%;
    animation: c10 2s infinite;
}

.classic-10:after {
    --s: -1;
}

@keyframes c10 {
    33% {
        transform: translateY(calc(var(--s, 1)*50%));
        -webkit-mask-position: calc(var(--s, 0)*1ch) 50%
    }

    66% {
        transform: translateY(calc(var(--s, 1)*50%));
        -webkit-mask-position: calc(var(--s, 0)*1ch + 1ch) 50%
    }

    100% {
        transform: translateY(calc(var(--s, 1)*0%));
        -webkit-mask-position: calc(var(--s, 0)*1ch + 1ch) 50%
    }
}`)
}
</script>
<template>
  <h1>经典款-3</h1>
  <div class="grid">
    <div class="classic-1" @click="classic_1()" />
    <div class="classic-2" @click="classic_2()" />
    <div class="classic-3" @click="classic_3()" />
    <div class="classic-4" @click="classic_4()" />
    <div class="classic-5" @click="classic_5()" />
    <div class="classic-6" @click="classic_6()" />
    <div class="classic-7" @click="classic_7()" />
    <div class="classic-8" @click="classic_8()" />
    <div class="classic-9" @click="classic_9()" />
    <div class="classic-10" @click="classic_10()" />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
