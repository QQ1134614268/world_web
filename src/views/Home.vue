<template>
  <div class="hello">
    <div>
      <div>消息</div>
    </div>
    <h1>{{ webSite }}</h1>
    <div>
      <a href="/btree">BTree</a>
    </div>
    <div>
      <a href="/user/login">Login</a>
    </div>
    <div>
      <a href="http://www.beian.miit.gov.cn" target="_blank">皖ICP备20002024号-1</a>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Home',
    data() {
      return {
        webSite: 'world',
        msg: 'Hello world',

      }
    }
  }
</script>
