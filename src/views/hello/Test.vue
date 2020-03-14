<template>
  <div style="width: 500px;height:500px;border: 2px solid #F00">
    <div style="border: 2px solid green;width: 50px;height:50px;">
      <div style="border: 2px solid green;width: 50px;height:300px; background: red;float: left">
        111
      </div>
    </div>
    <div style="border: 2px solid green;width: 60px;height:30px;background:blue">
      4444
    </div>
    <div class="div_b div_r">
      5555555555555555
    </div>
  </div>
</template>

<script>
  export default {
    // import 'element-ui/lib/theme-chalk/index.css'
    name: 'home',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .divcss5 {
    border: 1px solid #F00
  }

  span {
    width: 100px;
    height: 100px;
  }
.div_r{
  background: red;
}
.div_b{
  background: blue;
}
  input {
    width: 100px;
    height: 100px;
  }
</style>
