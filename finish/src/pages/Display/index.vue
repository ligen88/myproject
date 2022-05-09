<template>
  <div class="display">
      <h1>{{root.title}}</h1>
        <el-divider></el-divider>
        <div class="questionCard" >
          <el-card class="box-card" shadow="hover" >
            <div slot="header" class="clearfix">
                <p>问题号</p>
              <el-input
                placeholder="题目名称"
                clearable
                disabled
              ></el-input>
            </div>
            <!--区分组别-->
                <el-radio v-show="type=='radio'" v-model="radio" v-for="i in radio1" :key="i" :label="i">{{i}}</el-radio>
                <el-checkbox v-for="i in checklist" :key=i label="i">{{i}}</el-checkbox>
            <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
            </el-input>
          </el-card>
        </div>
  </div>
</template>

<script>
export default {
    name:"Display",
    data() {
        return {
            root:{title:"这是一个标题"},
            checklist:['选项1','选项2','选项3','选项3'],
            radio:'问题1',
            radio1:['1','2','3','4'],
            type:'radio'
        }
    },
}
</script>

<style scoped lang="less">
    .display{
        h1{
            margin-top:5vh;
            font-size: 30px;
            text-align: center;
        }
        .el-divider{
            background-color: rgb(131, 149, 255);
            height: 1vh;
        }
        .questionCard{
            margin:0 auto;
            width: 80%;
        }
    }
</style>