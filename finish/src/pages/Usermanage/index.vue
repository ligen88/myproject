<template>
  <div class="usermanage">
    <el-container>
      <el-aside width="20%"><el-button @click="sub">添加一个用户</el-button></el-aside>
      <el-main>
        <div class="usertable">
          <template>
            <el-table :data="alluser" style="width: 100%">
              <el-table-column label="用户名" width="300">
                <template slot-scope="scope">
                  <i class="el-icon-user"></i>
                  <span style="margin-left: 10px">{{
                    scope.row.username
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column label="密码" width="300">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.password }}</el-tag>
                  </div>
                </template>
              </el-table-column>
             
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="uedit(scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="udelete(scope.row.username)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <el-dialog title="添加一个新用户" width="30%" :visible.sync="visible">
          <el-input v-model="username" placeholder="输入用户名"></el-input>
          <el-input v-model="password" placeholder="输入密码"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="no">取 消</el-button>
            <el-button type="primary" @click="yes">确 定</el-button>
          </span>
        </el-dialog>
         <el-dialog title="修改一个用户的密码" width="30%" :visible.sync="editvisible">
          <el-input v-model="password" placeholder="输入要修改的密码"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="eno">取 消</el-button>
            <el-button type="primary" @click="edityes">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import request from "@/api/requset";
import {mapState} from "vuex"
export default {
  name: "Usermanage",
  data() {
    return {
      alluser: [],
      visible: false,
      username: "",
      password: "",
      nowuser:'',
      editvisible:false
    };
  },
  methods: {
    sub() {
      this.visible = true;
      this.username = "";
      this.password = "";
    },
    yes() {
        if(!this.password||!this.username){
           this.$message({
               type:"error",
               message:"用户名或者密码不能为空"
           })
           return
        }
      request
        .post("http://127.0.0.1:8088/api/subuserinfo", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.status == 400) {
            this.$message({
            type: "error",
            message: "用户已经存在或是输入不符合规范",
          });
          } else if (res.status == 200) {
              this.$message({
                type: "success",
                message: "用户成功插入",
            });
             request.post("http://127.0.0.1:8088/api/getall").then((res) => {
                this.alluser = res.data;
            });
          }
        });
      this.visible = false;
    },
    no(){
        this.visible = false
        this.$message({
            type:"info",
            message:"取消创建"
        })
    },
    uedit(user) {
         this.editvisible = true;
         this.username =user.username;
         this.password = user.password;
    },
    eno(){
        this.editvisible = false
         this.$message({
            type:"info",
            message:"取消修改"
        })
    },
    edityes(){
        if(!this.password){
           this.$message({
               type:"error",
               message:"修改的密码不能为空"
           })
           return
        }
         request.post("http://127.0.0.1:8088/api/edituserinfo",{username:this.username,password:this.password})
         .then((res)=>{
             if(res.status==200){
                 alert("修改成功")
                 request.post("http://127.0.0.1:8088/api/getall").then((res) => {
                    this.alluser = res.data;
                });
             }
         })
         this.editvisible = false;
    },
   
    udelete(username) {
      if(username==this.nowuser){
          this.$message({
              type:"error",
              message:"你不能删除你自己"
          })
          return
      }
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
             request
                .post("http://127.0.0.1:8088/api/deluserinfo", { username })
                .then((res) => {
                if (res.status == 200) {
                    request.post("http://127.0.0.1:8088/api/getall").then((res) => {
                    this.alluser = res.data;
                    });
                }
                });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    
    },
  },

  mounted() {
    request.post("http://127.0.0.1:8088/api/getall").then((res) => {
      this.alluser = res.data;
    });
    request.post("http://127.0.0.1:8088/api/userinfo").then((res)=>{
        const {username}=res.data
        this.nowuser=username;
    })
  },
};
</script>

<style scoped lang="less">
.usermanage {
  .el-aside {
    background-color: rgb(255, 255, 255);
    height: 800px;
    border-right: 1px solid rgb(209, 208, 208);
    .el-button{
        margin-top: 20px;
        width: 100%;
        height: 50px;
    }
  }
  .el-main {
    background-color: rgb(252, 252, 252);
    height: 800px;
    .el-input {
      margin-top: 10px;
    }
    .usertable {
      .listitem {
        border: 1px solid navy;
        margin: 20px 0px;
      }
    }
  }
}
</style>