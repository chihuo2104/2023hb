<script setup>
import { ref } from 'vue'
const activityStatus = ref('Pending')
const now = (new Date()).getTime()
if (now > 1674266400000 && now < 1674352800000) activityStatus.value = 'Active'
if (now > 1674352800000) activityStatus.value = 'Ended'
// activityStatus.value = 'Active'
function go () {
  window.location.href='https://rb.chihuo2104.dev/quiz1/'
}
</script>

<template>
  <div>
    <div id="backend">
      <img id="de" src="@/assets/nahida.jpg"/>
      <img id="mo" src="@/assets/nahida-m.jpg"/>
    </div>
    <div id="container">
      <h1>chi的小红包冒险&nbsp;<small>v.e.r. 2023</small></h1>
      <h2>一共花了四五个小时写代码和组题，祝大家兔年快乐啦~<br/>活动时间：2023.1.21 10:00 - 2023.1.22 10:00<br/>官方题解将会在2023.1.22 14:00发布（x</h2>
      <h2 v-if="activityStatus === 'Pending'">活动还没有开始哦~</h2>
      <h2 v-else-if="activityStatus === 'Active'">
        活动开始啦~<button @click="go">戳我前往第一题</button>
        <br/>2023.1.21 13：00更新：活动已经3个小时了，仍然没有人做出quiz2，在这里提醒一下：第一题的答案是 2022-08-03 其他都可以通过搜索引擎得出。
        <br/>2023.1.21 16:00更新：怎么还没人过quiz2，是不是我的问题啊，再透露一些：第五题的笔记软件没有移动客户端，有网页端。
      </h2>
      <h2 v-else-if="activityStatus === 'Ended'">活动结束啦~等待明年的红包挑战吧~</h2>
      <hr/>
      <h1>Q&As</h1>
      <h2>本次红包活动的红包是支付宝的口令红包，你可以打开支付宝，搜索红包，输入口令来领取红包</h2>
      <h2>本次活动的口令形式为 '2023[四个汉字]'</h2>
      <h2>获取口令后，请对口令<a href="https://www.strerr.com/cn/sha1.html" target="_blank">进行sha1加密</a>并取前16位数字才为支付宝红包中输入的口令</h2>
      <h3>e.g. '2023野兽先辈' -> sha1('2023野兽先辈') -> 217498b12154b8893eec8b52c80657fb84c1a88a -> (取前16位) 217498b12154b889 -> 输入支付宝 -> 获取红包</h3>
      <h2>红包设置</h2>
      <h3>quiz1 100红包 16.66 CNY 拼手气</h3>
      <h3>quiz2 50红包 12.20 CNY 拼手气</h3>
      <h3>quiz3 30红包 20.23 CNY 拼手气</h3>
      <h3>还有几个隐藏红包，等着你们发现（x</h3>
      <h2>小提示：在做题过程中你会使用到手机无法使用的工具，推荐使用电脑才能愉快的玩耍。如果你们是组团做题的，不要贪心多领哦~</h2>
      <hr/>
      <p>Powered by <a href="//im.chihuo2104.dev/" target="_blank">chihuo2104</a>. All rights reserved &copy;2018-{{ new Date().getFullYear() }}. Build by <a href="//vitejs.dev/" target="_blank">Vite</a>&nbsp;&&nbsp;<a href="//vuejs.org/" target="_blank">Vue</a></p>
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
    overflow-y: auto;
    // top:50%;
    // transform: translate(0, -60%);
  }
  border: 1px solid rgba(0,0,0,0,0.8);
  border-radius: 2px;
  padding: 8px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2), 1px 2px 3px 3px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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