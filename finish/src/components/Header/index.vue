<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="black"
    active-text-color="rgb(103, 100, 243)"
  >
    <el-menu-item index="1" @click="back()">我的问卷</el-menu-item>
    <el-menu-item index="2" @click="userInfo()">个人中心</el-menu-item>
    <el-menu-item index="3" :disabled="!admin" @click="userManage()">用户管理</el-menu-item>
    <el-menu-item index="4" v-show="admin" @click="modelManage()">问卷模板</el-menu-item>
    <el-menu-item index="5" v-show="admin" @click="troubleManage()">问题反馈</el-menu-item>
    <!--用户信息-->
    <el-header>
      <el-dropdown>
        <i class="el-icon-user-solid"></i>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/home/userinfo/items">
            <el-dropdown-item>我的帐号</el-dropdown-item></router-link>
          <el-dropdown-item v-show="!admin" @click.native="help">客服帮助</el-dropdown-item>
          <el-dropdown-item @click.native="quit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>用户信息</span>
    </el-header>
    <el-dialog :visible.sync="helpvisible">
      <div class="talk">
          <div class="model" v-for="m,index in message.message_content" :key="index">
              <p id="users">{{message.sender_id}}</p>
              <p id="messages" >{{m}}</p>
          </div>
        
      </div>
      <el-input v-model="talkto" placeholder="请输入你要对话的内容"></el-input>
      <el-button type="" :disabled="!talkto" @click="sendhelp">发送</el-button>
      <span slot="footer" class="dialog-footer">
        <el-button @click="helpvisible = false">取 消</el-button>
        <el-button type="primary" @click="helpvisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-menu>
</template>

<script>
import dayjs from "dayjs"
import throttle from "lodash";
import { mapState } from "vuex";
import request from "@/api/requset";
export default {
  name: "Header",
  data() {
    return {
      activeIndex2: "",
      helpvisible: false,
      talkto:"",
      message: "",
      nowuser: "",
      time:dayjs().format('YYYY年MM月DD日HH时mm分ss秒')
    };
  },
  computed: {
    ...mapState("user", ["admin", "username"]),
  },
  methods: {
    back() {
      this.$router.push("/home/questionlist", (err) => {});
    },
    userInfo() {
      this.$router.push("/home/userinfo/items", (err) => {});
    },
    userManage() {
      this.$router.push("/home/usermanage", (err) => {});
    },
    modelManage() {
      this.$router.push("/home/modelmanage", (err) => {});
    },
    troubleManage(){
      this.$router.push("/home/troublemanage", (err) => {});
    },
    handleSelect() {
      console.log("header");
    },
    help() {
      this.helpvisible = true;
      request
        .post("http://127.0.0.1:8088/get/help",{sender_id:this.username}).then((res) => {
           if(res.status==200){
               this.message=res.data
           }
           else{
               console.log("请求失败");
               return;
           }   
        });
    },
    sendhelp() {     
      request.post("http://127.0.0.1:8088/get/send",{sender_id:this.username,content:this.talkto}).then((res)=>{
          if(res.status==200){
               this.message=res.data
           }
      })
       this.talkto = "";
    },
    myinfo() {
      this.$router.push("/home/userinfo/items", (err) => {});
    },
    quit() {
      this.$notify({
        title: "成功",
        message: "你已经成功退出",
        type: "success",
      });
      localStorage.setItem("user", "");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$store.dispatch("user/getuserinfo");
  },
};
</script>

<style scoped lang="less">
#head {
  height: 60px;
  line-height: 60px;
}
.el-menu {
  display: block;
  .el-header {
    text-align: right;
    font-size: 14px;
    .el-icon-user-solid {
      margin-right: 10px;
      color: black;
    }
    span {
      line-height: 60px;
      color: #000;
    }
  }
}
.talk {
  height: 500px;
  overflow: scroll;
  width: 100%;
  border: 1px solid rgb(218, 218, 218);
  background-color: rgb(255, 255, 255);
  .model{
      #time{
          color: rgb(177, 177, 177);
      }
      #users{
          color: rgb(177, 177, 177);
      }
      #messages{
          padding: 2px;
          font-size: 25px;
          border-radius: 5px;
      }
  }
}
</style>