<script setup>
import { ElMessage } from 'element-plus'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()

const download = text => {
  const ttt =
    `[class*=classic]:before {
    content: "Loading...";
}\n` + text
  toClipboard(ttt)
  ElMessage({
    message: 'ε€εΆζε',
    type: 'success'
  })
}

const classic_1 = () => {
  download(`.classic-1 {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 30px;
    animation: c1 1s linear infinite alternate;
}

@keyframes c1 {
    to {
        opacity: 0
    }
}`)
}
const classic_2 = () => {
  download(`.classic-2 {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 30px;
    padding-bottom: 8px;
    background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
    animation: c2 2s linear infinite;
}

@keyframes c2 {
    to {
        background-size: 100% 3px
    }
}`)
}
const classic_3 = () => {
  download(`.classic-3 {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 30px;
    padding: 0 5px 8px 0;
    background: repeating-linear-gradient(90deg, currentColor 0 8%, #0000 0 10%) 200% 100%/200% 3px no-repeat;
    animation: c3 2s steps(6) infinite;
}

@keyframes c3 {
    to {
        background-position: 80% 100%
    }
}`)
}
const classic_4 = () => {
  download(`.classic-4 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    clip-path: inset(0 3ch 0 0);
    animation: c4 1s steps(4) infinite;
}

@keyframes c4 {
    to {
        clip-path: inset(0 -1ch 0 0)
    }
}`)
}
const classic_5 = () => {
  download(`.classic-5 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    clip-path: inset(0 100% 0 0);
    animation: c5 2s steps(11) infinite;
}

@keyframes c5 {
    to {
        clip-path: inset(0 -1ch 0 0)
    }
}`)
}
const classic_6 = () => {
  download(`.classic-6 {
    --c: #000;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    overflow: hidden;
    text-shadow: 0 0 var(--c), 11ch 0 var(--c);
    animation: c6 2s infinite linear;
}

@keyframes c6 {
    to {
        text-shadow: -11ch 0 var(--c), 0ch 0 var(--c)
    }
}`)
}
const classic_7 = () => {
  download(`.classic-7 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    background: linear-gradient(90deg, red calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: c7 2s infinite steps(11);
}

@keyframes c7 {
    to {
        background-position: left
    }
}`)
}
const classic_8 = () => {
  download(`.classic-8 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    background: linear-gradient(90deg, #000 calc(50% - 0.5ch), red 0 calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: c8 2s infinite steps(11);
}

@keyframes c8 {
    to {
        background-position: left
    }
}`)
}
const classic_9 = () => {
  download(`.classic-9 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    overflow: hidden;
    text-shadow: 0 0 #000, 11ch 0 green, 22ch 0 red, 33ch 0 blue, 44ch 0 #000;
    animation: c9 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes c9 {
    25% {
        text-shadow: -11ch 0 #000, 0ch 0 green, 11ch 0 red, 22ch 0 blue, 33ch 0 #000
    }

    50% {
        text-shadow: -22ch 0 #000, -11ch 0 green, 0ch 0 red, 11ch 0 blue, 22ch 0 #000
    }

    75% {
        text-shadow: -33ch 0 #000, -22ch 0 green, -11ch 0 red, 0ch 0 blue, 11ch 0 #000
    }

    100% {
        text-shadow: -44ch 0 #000, -33ch 0 green, -22ch 0 red, -11ch 0 blue, 0ch 0 #000
    }
}`)
}
const classic_10 = () => {
  download(`.classic-10 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    background: linear-gradient(90deg, #000 25%, green 0 50%, red 0 75%, blue 0) 0 0/400% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: c10 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes c10 {
    25% {
        background-position: calc(1*100%/3) 0
    }

    50% {
        background-position: calc(2*100%/3) 0
    }

    75% {
        background-position: calc(3*100%/3) 0
    }

    100% {
        background-position: calc(4*100%/3) 0
    }
}`)
}
</script>
<template>
  <h1>η»εΈζ¬Ύ-1</h1>
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
