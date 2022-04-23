<template>
  <div>
    <Header />
        <el-container id="outer">
                <el-aside class="aside" width="20%">
                    <div id="create">
                        <el-link target="_blank" @click="createQuestion">+创建问卷</el-link>
                    </div>
                    
                    <div class="other">
                            <router-link to="/register"><el-link>创建</el-link></router-link>
                            <router-link to="/login"><el-link>登陆</el-link></router-link>
                            <router-link to="/home"><el-link>主页</el-link></router-link>             
                    </div>
                </el-aside>
                <el-main>
                    <span><em>问卷列表</em></span>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-input v-model="search" placeholder="请输入要查询的内容" icon="el-icon-search"></el-input>
                    <el-divider></el-divider>
                    <div>
                        <router-link to='/home/userinfo'>点我</router-link>
                        <router-view></router-view>
                    </div>
                </el-main>
                
        </el-container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: "Home",
  components:{
      Header,
      Footer
  },
  data() {
      return {
          search:'',
          size:"",
      }
  },
  methods:{
      createQuestion(){
         this.$prompt('请输入你要创建的问卷标题', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: '输入不对哦'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您已经成功创建了问卷 '
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消创建'
          });       
        });
      }
  }
};
</script>

<style scoped lang="less">
        #outer{
            height: 650px;
            width: 80%;
            margin:0 auto;
            .aside
            {
                #create
                {
                    background-color: rgb(103, 100, 243);
                    height: 80px;
                    width: 100%;
                    margin-top:30px;
                    margin-bottom: 10px;
                        .el-link{
                            text-decoration: none;
                            color:white;
                            display: block;
                            font-size: 30px;
                            line-height: 80px;
                            text-align: center;
                        }
                        .el-link:hover{
                            color:white;
                            background-color: darken(rgb(103, 100, 243),15%);
                        }
                }
                .other{
                    height: 100px;
                    width: 100%;
                    .el-link{
                        color: #000;
                        font-size:18px;
                        text-decoration: none;
                        display: block;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        margin: 10px;
                    }
                    .el-link:hover{
                       background-color: rgba(220, 220, 220, .6);
                    }
                }
            }
            .el-main{
                margin-top:10px;
                span{
                    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                    font-size: 30px;
                }
                .el-button{
                    margin-left: 10px;
                    display: flex;
                     float: right;
                }
                .el-input{
                    float: right;
                    display: flex;
                    width: 200px;
                }
            }
    }
 
</style>