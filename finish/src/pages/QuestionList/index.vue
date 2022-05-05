<template>
  <el-container id="outer">
    <el-aside class="aside" width="20%">
      <div id="create">
        <el-link target="_blank" @click="createQuestion">+创建问卷</el-link>
      </div>

      <div class="other">
        <router-link to="/register"><el-link>创建</el-link></router-link>
        <router-link to="/login"><el-link>登录</el-link></router-link>
        <router-link to="/home/userinfo/items"
          ><el-link>主页</el-link></router-link
        >
      </div>
    </el-aside>
    <el-main>
      <span>问卷列表</span>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-input
        v-model="search"
        placeholder="请输入要查询的内容"
        icon="el-icon-search">
        </el-input>
      <el-divider></el-divider>
      <div class="questionCard" v-for="list in list" :key="list.id">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>问卷名称</span>
            <div class="tags">
                <el-tag size="mini" type="info">问卷id</el-tag>
                <el-tag size="mini" type="info">问卷状态</el-tag>
                <el-tag size="mini" type="info">问卷数量</el-tag>
                <el-tag size="mini" type="info">问卷发布时间</el-tag>
            </div>
          </div>
          <div class="questionAbout">
              <el-link href="https://element.eleme.io" target="_blank" icon='el-icon-edit'>问卷设计</el-link>
              <el-link href="https://element.eleme.io" target="_blank" icon='el-icon-document'>问卷统计</el-link>
              <el-link href="https://element.eleme.io" target="_blank" icon='el-icon-share'>问卷分享</el-link>
          </div>
          <div class="crud">
              <el-button type="primary" icon='el-icon-close'>停止</el-button>
             <el-button type="primary" icon='el-icon-delete'>删除</el-button>
          </div>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "QuestionList",
  data() {
    return {
      list:[
          {id:1},
          {id:3},
          {id:3},
          ],
      search: "",
      size: "",
    };
  },
  methods: {
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
          this.$message({
            type: "success",
            message: "您已经成功创建了问卷 ",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消创建",
          });
        });
    },
  },
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
      font:normal bold 30px "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .questionCard {
        margin: 20px 0px;
        span{
            font:normal normal 25px "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
        height:16vh;
        width:100%;
        .tags{
            margin-top:10px;
            float: right;
            .el-tag{
                font-size: 10px;
            }
        }
        .questionAbout{
            float: left;
            .el-link{
                float: left;
                margin: 15px 15px 15px 7px;
                font-size: 20px;
            }
        }
        .crud{
            float: right;
            .el-icon-delete{
                 margin-top: 10px;
                 float: left;
                 font-size:20px;
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