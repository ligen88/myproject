<template>
  <div class="display">
      <h1>{{root.title}}</h1>
        <el-divider></el-divider>
        <div class="questionCard" v-for="item in root.question" :key="item.id">
          <el-card class="box-card" shadow="hover" v-if="!item.isdel">
            <div slot="header" class="clearfix">
                <p>问题号{{item.id}}</p>
              <el-input
                placeholder="题目名称"
                v-model="item.title"
                clearable
                disabled
              ></el-input>
            </div>
            <el-radio-group  v-for="(select, index) in item.option" :key="index">
              <el-radio >{{ select.title }}</el-radio>
            </el-radio-group>
            <el-checkbox-group  v-for="(select, index) in item.option" :key="index" >
                <el-checkbox label="禁用" disabled>{{select.title}}</el-checkbox>
            </el-checkbox-group>
          </el-card>
        </div>
  </div>
</template>

<script>
export default {
    name:"Display",
    data() {
        return {
            root:{title:"这是一个标题"}
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
    }
</style>