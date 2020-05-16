<template>
  <div>
    <div>err</div>
    <div style="display: flex; justify-content: space-around">
      <div>注意:</div>
      <div>{{msg}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'err',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
