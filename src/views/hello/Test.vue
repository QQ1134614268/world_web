<template>
  <div>


    <div style="width: 100%; text-align: center;">
      <table cellpadding="0" cellspacing="0" border="0" class="tabDiv_tab tabTabs"
             style="border-collapse: collapse; margin: 0 auto; margin-top: 36px;">
        <tr>
          <td>
            <span class="lf tdTab on" style="width: auto;">
              汇总
            </span>
            <span class="lf tdTab" style="width: auto;">
              远传表
            </span>
            <span class="lf tdTab" style="width: auto;">
			 单费率水表
            </span>
            <span class="lf tdTab" style="width: auto;">
              复费率水表
            </span>
            <span class="lf tdTab" style="width: auto;"></span>
          </td>
        </tr>
      </table>
    </div>
    <div style="clear:both;"></div>

    <div id="divShow_0">
              this is first div
    </div>
    <div id="divShow_1">
              this is second div
    </div>
    <div id="divShow_2">
              this is third div
    </div>
  </div>
</template>

<script>
  export default {
    // import 'element-ui/lib/theme-chalk/index.css'
    name: 'home',
    data() {
      return {}
    },
    methods: {
// 方法显示div，隐藏div
      ChangeDiv(divIndex, divName, zDivCount) {
        for (var i = 0; i < zDivCount; i++) {
          // 将所有的层都隐藏
          document.getElementById(divName + i).style.display = "none";
          // 显示当前层
          document.getElementById(divName + divIndex).style.display = "block";
        }
        // 切换按钮
        $('.tdTab').on('click', function () {
          $(this).addClass("on").siblings().removeClass("on");
        });
        $('.tabDiv_tab td .tdTab').bind('click', function () {
          var tdIndex = $(this).index();// 获取当前点击td的索引值
          var zDivCount = $('.tabDiv_tab td .tdTab').length;// 获取td的长度从零开始
          ChangeDiv(tdIndex, 'divShow_', zDivCount);// 调用函数，点击切换div显示隐藏

        });
      }
    }
  }
</script>

<style scoped>

  .lf {

    float: left;

  }

  .tabTabsDiv {
    padding: 20px 20px 0 20px;
    background-color: #fff;
  }


  .tabTabs {
    border-radius: 3px;
    margin: 6px 0;
  }


  .tabTabs td {
    padding: 0;
    height: 24px;
    border: 1px solid #d7dde4;
    border-right: 0;
    border-radius: 3px;
  }

  .tabTabs td span {
    cursor: pointer;
    float: left;
    padding: 0 12px;
    height: 24px;
    line-height: 24px;
    border-right: 1px solid #d7dde4;
    background-color: #ffffff;
  }


  .tabTabs td span:hover {
    background-color: #3475c1;
    color: #fff;
    cursor: pointer;
  }


  .tabTabs td .on {
    cursor: pointer;
    background: #2f6099 none;
    color: #fff;
  }

</style>
