<template>
  <el-container id="outer">
    <el-aside class="aside" width="20%">
      <div id="create">
        <el-link target="_blank" @click="createQuestion">+创建问卷</el-link>
      </div>
      <div class="other">
        <router-link to="/register"><el-link>创建</el-link></router-link>
        <router-link to="/login"><el-link>登录</el-link></router-link>
      </div>
    </el-aside>
    <el-main>
      <span>问卷列表</span>
      <!-- <el-button type="primary" icon="el-icon-search" @click="searchOne">搜索</el-button>
      <el-input
        v-model="search"
        placeholder="请输入要查询的内容"
      >
      </el-input> -->
      <el-divider></el-divider>
      <div class="questionCard" v-for="item in qlist" :key="item.id" >
        <el-card class="box-card" shadow="hover" v-if="!item.isdel">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
            <div class="tags">
              
              <el-tag size="mini" type="info">{{item.id}}</el-tag>
              <el-tag size="mini" type="warning">{{item.state}}</el-tag>
              <el-tag size="mini" type="info">数量:{{item.num}}</el-tag>
              <el-tag size="mini" type="danger">{{item.time}}</el-tag>
            </div>
          </div>
          <div class="questionAbout">
            <el-link @click="qdesign(item)" icon="el-icon-edit">问卷设计</el-link>
            <el-link icon="el-icon-document" @click="qsta(item)">问卷统计</el-link>
            <el-link icon="el-icon-share" @click="qwrite(item)">问卷填写</el-link>
          </div>
          <div class="crud">
            <el-button type="primary" icon="el-icon-close" @click="stop(item)">停止</el-button>
            <el-button type="primary" icon="el-icon-open" @click="send(item)">发布</el-button>
            <el-button type="primary" icon="el-icon-delete" @click='delqlist(item)'>删除</el-button>
          </div>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>


<script>
import {nanoid} from 'nanoid'
import{mapState} from'vuex'
import dayjs from 'dayjs'
import request from '@/api/requset';
export default {
  name: "QuestionList",
  data() {
    return {
      search: "",
      size: "",
      qlist:'',
      username:''
    };
  },
  methods: {
    qdesign(item) {
       if(item.state=="已发布"){
            this.$message({
                type:"error",
                message:"你已经发布了该问卷，请先停止该问卷"
            })
        }
        else{
            this.$router.push({name:'question',params:{item}})
        };
    },
    qwrite(item){
        if(item.state!="已发布"){
            this.$message({
                type:"error",
                message:"你还没有发布"
            })
        }
        else{
            this.$router.push({name:'display',params:{item}});
        }
    },
    qsta(item){
        //  if(item.num==0){
        //       this.$message({
        //         type:"error",
        //         message:"你还没有答卷"
        //     })
        //     return
        //  }
         this.$router.push({name:'charts',params:{item}});
    },
    searchOne(){
       if(this.search){
           for(let i in this.qlist){
               if(this.qlist[i].title==this.search){
                console.log(this.qlist[i].title);
               }
           }
       }
    },
    // load() {
    //   request
    //     .post("http://127.0.0.1:8088/api/login", {
    //       name: "root",
    //       password: "123456",
    //     })
    //     .then((res) => {
    //       user = { ...res };
    //       localStorage.setItem("user", ...res);
    //       console.log(res);
    //     });
    // },
    createQuestion() {
      this.$prompt("请输入你要创建的问卷标题", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: "",
        inputErrorMessage: "输入不对哦",
      })
        .then(({ value }) => {
          if(!value){
            this.$message({
                type: "error",
                message: "不能为空",
            });
          return
          }
          const qObj={ id:nanoid(),
            //问卷标题
            title:value,
            state:"设计中",
            num:0,
            time:dayjs().format('YYYY年MM月DD日HH时mm分ss秒'),
            isdel:false,
            question:[
                {   //问题标题
                    qtitle: "",
                    isdel: false,
                    //问题的类型 radio checkbox textarea 三选一
                    type: "radio",
                    visible:false,
                    text:'',
                    //问题选项相关
                    option: [
                      {title:'',num:0},
                    ],
                  }
            ]}
          request.post("http://127.0.0.1:8088/api/addqlist",{username:this.username,qObj}).then((res)=>{
              if(res.status==200){
                   this.$message({
                        type: "success",
                        message: "您已经成功创建了问卷 ",
                    });
                    this.qlist.unshift(qObj);
              }
              else{
                  this.$message({
                        type: "error",
                        message: "创建失败",
                    });
              }
          })
            
        })
    },
    delqlist(item){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          request.post("http://127.0.0.1:8088/api/delqlist",{username:this.username,item})
          item.isdel=true;
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    send(item){
        if(item.state=="已发布"){
            this.$message({
            type: 'error',
            message: '该问卷已经发布,请不要重复发布!'
          });
          return
        }
        else{
            request.post("http://127.0.0.1:8088/api/changelist2",{username:this.username,item})
        item.state="已发布",
         this.$message({
            type: 'success',
            message: '发布成功!'
          });
        }
    },
    stop(item){
        if(item.state=="设计中"){
            this.$message({
            type: 'error',
            message: '该问卷已经停止，请不要重复停止'
          });
          return
        }
        else{
        request.post("http://127.0.0.1:8088/api/changelist",{username:this.username,item})
        item.state="设计中"
        this.$message({
            type: 'success',
            message: '该问卷已经停止成功!'
          });
        }
    }

  },
  mounted(){
      request.post("http://127.0.0.1:8088/api/userinfo").then((res)=>{
          this.qlist=res.data.qlist
          this.username=res.data.username;
    })
  }
};
</script>

<style scoped lang='less'>
#outer {
  height: 650px;
  width: 80%;
  margin: 0 auto;
  .aside {
    #create {
      background-color: rgb(103, 100, 243);
      height: 80px;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 10px;
      .el-link {
        text-decoration: none;
        color: white;
        display: block;
        font-size: 30px;
        line-height: 80px;
        text-align: center;
      }
      .el-link:hover {
        color: white;
        background-color: darken(rgb(103, 100, 243), 15%);
      }
    }
    .other {
      height: 100px;
      width: 100%;
      .el-link {
        color: #000;
        font-size: 18px;
        text-decoration: none;
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 10px;
      }
      .el-link:hover {
        background-color: rgba(220, 220, 220, 0.6);
      }
    }
  }
  .el-main {
    margin-top: 10px;
    span {
      font-weight: bold;
      font-size: 30px;
    }
    .questionCard {
      margin: 20px 0px;
      span {
        font-weight: normal;
        font-size: 25px;
      }
      .text {
        font-size: 10px;
      }

      .item {
        margin-bottom: 18px;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both;
      }

      .box-card {
        height: 16vh;
        width: 100%;
        .tags {
          margin-top: 10px;
          float: right;
          .el-tag {
            font-size: 10px;
          }
        }
        .questionAbout {
          float: left;
          .el-link {
            float: left;
            margin: 15px 15px 15px 7px;
            font-size: 20px;
          }
        }
        .crud {
          float: right;
          .el-icon-delete {
            margin-top: 10px;
            float: left;
            font-size: 20px;
          }
        }
      }
    }

    .el-button {
      margin-left: 10px;
      display: flex;
      float: right;
    }
    .el-input {
      float: right;
      display: flex;
      width: 200px;
    }
  }
}
</style>