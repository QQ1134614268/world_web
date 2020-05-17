<template>
  <div style="width: 30%">
    <div>err</div>
    <div style="display: flex; justify-content: space-around">
      <div>注意:</div>
      <div>{{msg}}</div>
    </div>
    <div style="display: flex; justify-content: space-around">
      <div>data:</div>
      <div>{{message}}</div>
    </div>
    <table>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>address</th>
      </tr>
      <tr>
        <td>Tom</td>
        <td>36</td>
        <td>earth</td>
      </tr>
      <tr>
        <td>Tom son</td>
        <td>12</td>
        <td>earth</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ElSelectDropdown from "element-ui/packages/select/src/select-dropdown";

  export default {
    name: 'err',
    components: {ElSelectDropdown},
    props: {
      msg: String
    },
    data() {
      return {
        message: "this is data message"
      }
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
