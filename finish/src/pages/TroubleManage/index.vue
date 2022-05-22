<template>
    <el-container>
        <el-aside width="20%">
            <el-input v-model="search" placeholder="请输入用户名"></el-input>
            <el-button icon="el-icon-search" type="primary" :disabled='!search' @click="searchOne">搜索</el-button>
            <el-table :data="alluser" style="width: 100%">
              <el-table-column label="用户列表" >
                <template slot-scope="scope">
                  <div style="padding:20px"  @click="my(scope.row.message_content)">{{scope.row.sender_id}}</div>
                </template>
              </el-table-column>
            </el-table>
        </el-aside>
        <el-main>         
           <el-card ref="card">
               <p>用户信息（点击左侧用户刷新消息</p> 
               <h1 ref="content"></h1>
           </el-card>
        </el-main>
    </el-container>

</template>

<script>
import request from "@/api/requset"
export default {
    name:"TroubleManage",
    data() {
        return {
            alluser:[],
            search:''
        }
    },
    methods:{
        my(item){
            var c=[]
            for(let i in item){
                c.push(item[i])
            }
            this.$refs.content.innerHTML=c
            
        },
        searchOne(){
          let c=[]
          for(let i in this.alluser){
              if(this.alluser[i].sender_id==this.search)
              {
                  for(let j in this.alluser[i].message_content)
                  {
                    c.push(this.alluser[i].message_content[j])
                  }
                  this.$refs.content.innerHTML=c
                  break
              }
          }
          
        }
    },
    mounted(){
        request.post("http://127.0.0.1:8088/get/all").then((res)=>{
            if(res.status==200){
                this.alluser=res.data
            }
        })
    }
}
</script>

<style scoped lang="less">
    .el-container{
        .el-aside{
            height: 800px;
            border-right:1px solid rgb(209, 208, 208) ;
            .el-input{
                float: left;
                width: 70%;
            }
            .el-button{
                float: right;
                width: 30%;
            }
        }
        div{
        }
    }
</style>