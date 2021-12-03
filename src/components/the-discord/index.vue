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

const css = `.discord {
  width: 50px;
  height: 40px;
  border-radius: 50%;
  background:
    radial-gradient(circle 6px at calc(50% + 2px) calc(50% + 4px), #000 90%, #fff) left,
    radial-gradient(circle 6px at calc(50% - 2px) calc(50% + 4px), #000 90%, #fff) right;
  background-size: 51% 100%;
  background-repeat: no-repeat;
  position: relative;
  filter: drop-shadow(.5px 0px 0px #000) drop-shadow(0px -.5px 0px #000) drop-shadow(0px .5px 0px #000) drop-shadow(1px 1px 0px #000) drop-shadow(-.5px 0px 0px #000);
  animation: dis-0 1s infinite;
}

.discord::before,
.discord::after {
  content: "";
  position: absolute;
  animation: inherit;
}

.discord::before {
  inset: -5px -7px -10px;
  animation-name: dis-1;
  border: solid #fff;
  border-width: 2px 12px 6px;
  border-radius: 50% / 35%;
  clip-path: polygon(8% 0, 35% 0, 40% 15px, 60% 15px, 65% 0, 92% 0, 100% 100%, 70% 100%, 60% calc(100% - 20px), 40% calc(100% - 20px), 30% 100%, 0 100%);
}

.discord::after {
  inset: -6px -9px -8px;
  animation-name: dis-2;
  background: #fff;
  border-radius: 85% 85% 77% 77%;
  -webkit-mask: radial-gradient(50% 110%, #0000 82%, #000 0);
  clip-path: polygon(10% 0, 90% 0, 105% 100%, -5% 100%);
}

@keyframes dis-0 {
  20% {
    transform: rotate(-20deg)
  }

  75% {
    transform: rotate(380deg)
  }

  80%,
  100% {
    transform: rotate(360deg)
  }
}

@keyframes dis-1 {
  20% {
    transform: rotate(0deg);
    inset: -5px -7px -10px
  }

  60% {
    transform: rotate(-60deg);
    inset: -10px -12px -15px
  }

  80%,
  100% {
    transform: rotate(0deg);
    inset: -5px -7px -10px
  }
}

@keyframes dis-2 {
  20% {
    transform: rotate(0deg);
    inset: -6px -9px -8px
  }

  60% {
    transform: rotate(-60deg);
    inset: -17px -21px -19px
  }

  80%,
  100% {
    transform: rotate(0deg);
    inset: -6px -9px -8px
  }
}`

const copy1 = () => {
  const text =
    `.flex {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
}\n` + css
  download(text)
}
const copy2 = () => {
  download(css)
}
</script>
<template>
  <h1>不对称图形</h1>
  <div class="grid">
    <div class="flex" @click="copy1()">
      <div class="discord"></div>
    </div>
    <div class="discord" @click="copy2()"></div>
  </div>
</template>

<style scoped>
@import './style.css';
.flex {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
}
</style>
