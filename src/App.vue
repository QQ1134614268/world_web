<template>
  <div id="app">
      <div style="display: flex;justify-content: space-around">
          <div>消息</div>
          <div>搜索</div>
          <div>设置</div>

          <!--# 仿 pycharm风格  另设置一处,查找一处-->
          <!--# 左侧 root的分类叉树,新增 删除-->
          <!--# 中上 select查找 其下分类查找-->
          <!--# 中间改变-->
          <!--# 右侧消息列表,类似弹幕-->
          <!--# 最下输出-->
      </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
