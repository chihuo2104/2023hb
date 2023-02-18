<script setup>
import { ref } from 'vue'
const yuanshi = ref(-1)
const tipMessage = ref('')
const getYuanshiCount = ref(-1)
const isTaskCompleted = ref(false)
const isAyakaGet = ref(false)
function completeTask () {
  if (getYuanshiCount.value >= 0) {
    tipMessage.value = '大伟哥：我不允许'
  } else {
    yuanshi.value += getYuanshiCount.value
    if (yuanshi.value < -9223372036854775808) yuanshi.value = 9223372036854775808
    tipMessage.value = '大伟哥同意了你的请求并加上了原石'
    isTaskCompleted.value = true
  }
}

function shot (count) {
  const yuanshiYouHave = yuanshi.value
  if (yuanshiYouHave <= count * 160) tipMessage.value = '然而你并没有原石'
  else {
    yuanshi.value = yuanshi.value - count * 160
    let message = '你抽到了：'
    for (let i = 0; i < count; i++){
      const canYouChooseMiHoYo = Math.random()
      if (canYouChooseMiHoYo <= 0.006) {
        const characterList = [ '神里绫华', '七七', '刻晴', '迪卢克', '提纳里', '莫娜', '琴']
        const whatDoYoChoose = Math.floor(Math.random() * characterList.length)
        if (whatDoYoChoose === 0) isAyakaGet.value = true
        message += ' ' + characterList[whatDoYoChoose]
      } else if (canYouChooseMiHoYo <= 0.1) {
        message += ' 不配拥有姓名的四星'
      } else {
        message += ' 不配拥有姓名的三星'
      }
      tipMessage.value = message 
    }
  }
}
</script>

<template>
  <div>
    <div id="backend">
      <img id="de" src="@/assets/anya.png"/>
      <img id="mo" src="@/assets/nahida-m.jpg"/>
    </div>
    <div id="container">
      <h1>chi的小请求&nbsp;<small>你能帮chi抽出心心念念的神里绫华吗？求求你了，求求你了！</small></h1>
      <h2>你剩余 {{yuanshi}} 原石</h2>
      <button @click="shot(1)">抽一发</button><button @click="shot(10)">抽十发</button>
      <div>{{ tipMessage }}</div>
      <div v-if="isAyakaGet">
        恭喜你抽中了神里绫华！最后一个红包码是 2023不要摆烂 还有三个隐藏红包等着你探索~当然你做出来了就算我没说（x。总之，祝你新年快乐！
      </div>
      <div v-if="!isTaskCompleted">
        <hr/>
        <div>小任务（只能做一次）</div>
        这次小任务可以获取<input type="number" max="-1" v-model="getYuanshiCount">原石
        <button @click="completeTask">快点点我做任务罢 我是一个一个一个按钮啊啊啊啊</button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@font-size: 15px;
// container主元素
// #con {
//   position: fixed;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
// }
#de,#mo {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
@media screen and (min-width: 768px) {
  #de {
    display: block;
  }
  #mo {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  #de {
    display: none;
  }
  #mo {
    display: block;
  }
}
#mcimg {
  width: 100%;
}
#container {
  word-break: break-all;
  font-family: 'PingFang SC', '微软雅黑', 'Microsoft Yahei', 'Sogoe UI';
  position: fixed;
  @media screen and (min-width: 768px) {
    left: 50%;
    top: 10%;
    right: 0;
    transform: translate(-50%, -5%);
    bottom: 0;
    overflow-y: auto;
  }
  @media screen and (max-width: 768px) {
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    // top:50%;
    // transform: translate(0, -60%);
  }
  border: 1px solid rgba(0,0,0,0,0.8);
  border-radius: 2px;
  padding: 8px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2), 1px 2px 3px 3px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
}
// 底层
#container {
  // font size.
  // 不要用 h5 h6!
  h1 {
    font-size: @font-size * 1.8; 
    font-weight: bolder;
  }
  h2 {
    font-size: @font-size * 1.5;
    font-weight: bold;
  }
  h3 {
    font-size: @font-size * 1.3;
    font-weight: bold;
    margin: 2px;
  }
  h4 {
    font-size: @font-size * 1.2;
    font-weight: bold;
  }
  table,table tr th, table tr td {
    border:1px solid #666666;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  a,a:hover,a:active,a:link {
    text-decoration: none;
  }
  a,a:active,a:link {
    color: blue;
  }
  a:hover {
    color:cyan;
  }
  // input select code 必须指定
  p,input,select,span,code,kbd,button,a {
    font-size: @font-size;
  }
  button,input {
    font-size: @font-size * 1.2;
    border-radius: 4px;
    border:1px solid #666666;
    background-color: #ffffff;
    appearance: none;
    -webkit-appearance: none;
  }
  button {
    cursor: pointer;
    a,a:hover,a:active,a:link {
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: black;
    }
  }
  details summary::marker {
    transition: all 10s ease-in-out;
  }
}
</style>