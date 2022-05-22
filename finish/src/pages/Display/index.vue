<template>
  <div class="display">
      <h1>{{root.title}}</h1>
        <el-divider></el-divider>
        <el-main>
            <div class="questionCard"  v-for="item,index in root.question" :key="index">
            <el-card class="box-card" shadow="hover" v-show="!item.isdel">
            <div slot="header" class="clearfix">
                <p>问题</p>
              <el-input v-model="item.title" disabled></el-input>
            </div>
            <!--区分组别-->
 
                <el-radio-group v-model="item.qtitle">
                    <el-radio v-show="item.type=='radio'"  v-for="select in item.option" :key="select.id"  :label="select.title">{{select.title}}</el-radio>
                </el-radio-group>           
                <el-checkbox v-show="item.type=='checkbox'" v-for="select in item.option" :key="select.id" :label="select.title">{{select.title}}</el-checkbox>
            <el-input
                v-show="item.type=='textarea'"
                placeholder="请输入内容"
                v-model="item.text"
                clearable>
            </el-input>

            </el-card>
          <el-button type="primary" @click="submit">点击提交</el-button>
        </div>
        </el-main>
  </div>
</template>

<script>
import{mapState,mapGetters} from 'vuex'
export default {
    name:"Display",
    data() {
        return {
            root:'',
        }
    },
    methods:{
        submit(){
            this.$message({
                type:"success",
                message:"提交成功"
            })
            this.root.num++;
            this.$router.push("/home/questionlist");
        }
    },
    mounted(){
      this.root=this.$route.params.item;
  }

}
</script>

<style scoped lang="less">
    .display{
        h1{
            margin-top:5vh;
            font-size: 30px;
            text-align: center;
        }
        .el-main{
            height: 600px;
        }
        .el-divider{
            background-color: rgb(191, 200, 255);
            height: 1vh;
        }
        .questionCard{
            margin:2vh auto;
            width: 80%;
            .box-card{
                border: 1px solid rgb(204, 204, 204);
            }
        }
        .el-button{
           position: fixed;
           left: 47%;
           top: 90%
        }
    }
</style>