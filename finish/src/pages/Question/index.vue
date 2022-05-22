<template>
  <div class="qdesign">
    <el-container>
      <el-aside width="20%">
        <el-link @click="addsingle"><i class="el-icon-edit"></i>单选题</el-link>
        <el-link @click="addmulti"><i class="el-icon-circle-plus"></i>多选题</el-link>
        <el-link @click="addtext"><i class="el-icon-tickets"></i>填空题</el-link>
        <el-link @click="back"><i class="el-icon-tickets"></i>返回</el-link>
      </el-aside>
      <el-main>
        <h1>{{this.$route.params.item.title}}</h1>
        <el-divider></el-divider>
        <div class="questionCard" v-for="item in root" :key="item.id">
          <el-card class="box-card" shadow="hover" v-if="!item.isdel">
            <div slot="header" class="clearfix">
                <p>问题</p>
              <el-input
                placeholder="题目名称"
                v-model="item.title"
                clearable
                disabled
              ></el-input>
            </div>
            <el-dialog
            title="提示"
            :visible.sync="item.visible"
            width="30%"
            center
            > 
            <span>题目名称</span> <el-input v-model="item.title" placeholder=""></el-input>
            <div v-show="item.type!=='textarea'" class="more" v-for="(select, index) in item.option" :key="index">
                <span>第{{index+1}}个选项</span> <el-input v-model="select.title" placeholder="不能为空"></el-input>
                <el-button  @click="deloption(item.option,index)">删除选项</el-button>
            </div>
            <el-button v-if="item.type!=='textarea'" id="new" type="primary" @click="addoption(item.option)">新增选项</el-button>
            <span slot="footer" class="dialog-footer">
                <el-button @click="item.visible = false">取 消</el-button>
                <el-button type="primary" @click="item.visible = false">确 定</el-button>
            </span>
            </el-dialog>
            <el-radio-group v-show="item.type=='radio'" v-for="select in item.option" :key="select.id">
              <el-radio :label="item.id">{{ select.title }}</el-radio>
            </el-radio-group>
            <el-checkbox-group v-show="item.type=='checkbox'" v-for="select in item.option" :key="select.id" >
                <el-checkbox label="禁用" disabled>{{select.title}}</el-checkbox>
            </el-checkbox-group>
            <el-input v-if="item.type=='textarea'"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="item.text">
            </el-input>
            <div class="crud">
              <el-button 
                type="primary"
                icon="el-icon-edit"
                @click="editqlist(item)"
                >编辑</el-button
              >
              <el-button
                type="primary"
                icon="el-icon-delete"
                @click="delqlist(item)">删除</el-button>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import {mapState,mapGetters} from 'vuex'
import request from '@/api/requset';
export default {
  name: "Question",
  data() {
    return {
      root:[],
      Visible: [],
      nowuser:'',
      item:'',
      qlist:'',
      username:''
    };
  },

  methods: {

    addsingle() {
      const qObj = {
        title: "",
        isdel: false,
        radio: "暂时为空",
        type: "radio",
        visible:false,
        text:'',
        option: [
          {title:'',
           num:0 },
        ],
      };
      this.root.push(qObj);
    },
    addmulti() {
      const qObj = {
       title: "",
        isdel: false,
        radio: "暂时为空",
        type: "checkbox",
        visible:false,
        text:'',
        option: [
          { title:'',num:0 },
        ],
      };
      this.root.push(qObj);
    },
    addtext(){
        const qObj = {
        title: "",
        isdel: false,
        radio: "暂时为空",
        type: "textarea",
        visible:false,
        text:'',
        option: [
          { title:'',num:0 },
        ],
      };
      this.root.push(qObj);
    },
    delqlist(item) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
        
          item.isdel = true;
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
    editqlist(item) {
      item.visible=true
    },
    addoption(options){
        const option={
            title:'',
            id:nanoid(),
            num:0
        }
        options.push(option);   
    },
    deloption(array,index){
      if(array.length!==1)
      {
        array.splice(index,1);
      }
      else{
          alert("不能再删除了")
      }
    },
    back(){
        this.$router.replace('/home/questionlist')
    },
    yes(){
        this.item.visible=true;
    }
  },
  mounted(){
       request.post("http://127.0.0.1:8088/api/userinfo").then((res)=>{
           const{username}=res.data;
           this.nowuser=username;
       })       
      this.root=this.$route.params.item.question;
      this.item=this.$route.params.item
     
  },
  beforeDestroy() {
      request.post("http://127.0.0.1:8088/api/savequestion",{
          username:this.nowuser,
          question:this.root,
          item:this.item
      }).then((res)=>{
          if(res.status==200){
                request.post("http://127.0.0.1:8088/api/userinfo").then((res)=>{
                    this.qlist=res.data.qlist
                    this.username=res.data.username;
                })
          }
          else{
              console.log("失败了");
          }
      })
      
  },

};
</script>

<style scoped lang='less'>

.qdesign {
  .el-container {
    height: 800px;
    .el-aside {
      margin-top: 5vh;
      background-color: rgba(255, 255, 255, 0.63);
      overflow: hidden;
      border-right: 1px solid rgb(226, 222, 222);
      .el-link {
        display: block;
        padding: 20px;
        font-size: 25px;
        text-align: center;
      }
      .el-link:hover {
        background-color: rgb(233, 241, 247);
      }
    }
    .el-main {
      h1 {
        margin-top: 5vh;
        font-size: 35px;
        text-align: center;
      }
      .questionCard {
        margin: 30px;
        .el-card {
          border: 1px solid rgb(178, 170, 252);
        }
        .crud{
        .el-button {
          float: right;
          margin: 0px 10px;
        }
        }
      }
      .el-input {
        width: 20%;
      }
      .el-divider {
        height: 1vh;
        background-color: rgb(131, 149, 255);
      }
      .el-radio-group {
        display: block;
        .el-radio {
          margin: 5px 0px;
        }
      }
    }
  }
}
#new{
    float:right;
}
</style>