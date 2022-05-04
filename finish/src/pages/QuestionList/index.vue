<template>
  <el-container id="outer">
    <el-aside class="aside" width="20%">
      <div id="create">
        <el-link target="_blank" @click="createQuestion">+创建问卷</el-link>
      </div>

      <div class="other">
        <router-link to="/register"><el-link>创建</el-link></router-link>
        <router-link to="/login"><el-link>登录</el-link></router-link>
        <router-link to="/home/userinfo/items"><el-link>主页</el-link></router-link>
      </div>
    </el-aside>
    <el-main>
      <span><em>问卷列表</em></span>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-input
        v-model="search"
        placeholder="请输入要查询的内容"
        icon="el-icon-search"></el-input>
      <el-divider></el-divider>
      <div>
        <el-empty v-show="false"></el-empty>
        <template>
          <el-table  style="width: 100%">
            <el-table-column label="日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </template>
        </div></el-main>
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
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 30px;
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