<template>
  <el-container>
    <el-main>
      <p>个人信息</p>
      <el-divider></el-divider>
        <el-descriptions
            class="margin-top"
            :column="1"
            border
        >
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                用户名
            </template>
            {{User.nickname}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
            </template>
            {{User.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
            </template>
             {{User.address}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
            </template>
            <el-tag size="small"> {{User.information}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
            </template>
             {{User.address}}
            </el-descriptions-item>
        </el-descriptions>
      <!-- <h2>{{ num }}</h2>
      <button @click="add(1)">点我增加1</button> -->
      <div id="main"></div>
    </el-main>
  </el-container>
</template>


<script>
import * as echarts from "echarts";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "items",
  data() {
      return {
          User:{
              nickname:'帅哥',
              phone:'15526272341',
              address:'',
              gender:'565656',
              information:'2323',
          }
      }
  },
//   methods: {
//     ...mapActions("countAbout", { add: "jia" }),
//   },
//   computed: {
//     ...mapState("countAbout", ["num"]),
//   },
//   mounted() {
//     var chartDom = document.getElementById("main");
//     var myChart = echarts.init(chartDom);
//     var option = {
//       xAxis: {
//         type: "category",
//         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//       },
//       yAxis: {
//         type: "value",
//       },
//       series: [
//         {
//           data: [120, 200, 150, 80, 70, 110, 130],
//           type: "bar",
//         },
//       ],
//     };
//     myChart.setOption(option);
//   },
};
</script>

<style scoped lang="less">
.el-container {
  height: 750px;
  .el-main {
    background-color: #fff;
    p {
      font: normal bold 25px "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    #main {
      height: 300px;
      width: 400px;
    }
  }
}
</style>