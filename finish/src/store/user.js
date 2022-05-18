import request from "@/api/requset"
import dayjs from "dayjs"
import { nanoid } from "nanoid"
const user={
    namespaced:true,
    actions:{
        getuserinfo(ministore,value){
            request.post("http://127.0.0.1:8088/api/userinfo",{}).then((res)=>{
                ministore.commit("GETUSERINFO",res.data);
                console.log(res.data);
            })
        }
    },
    mutations:{
        GETUSERINFO(state,value){
            var{address,age,gender,name,info,nickname,phone,qlist,status,admin,username}=value
            state.address=address
            state.age=age
            state.gender=gender
            state.name=name
            state.nickname=nickname
            state.qlist=qlist;
            state.admin=admin;
            state.username=username
        }
    },
    state:{
        username:'',
        info:'如果该用户没有填写则显示这个',
        uid:nanoid(),
        phone:'15562672341',
        nickname:'大帅比',
        address:"村里",
        admin:false,
        //问卷
        qlist:[ 
        {   //问卷id
            id:nanoid(),
            //问卷标题
            title:'这是一个样本',
            num:0,
            state:'设计中',
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
                      {},
                    ],
                  }
            ]
        },
        {   //问卷id
            id:nanoid(),
            //问卷标题
            title:'这是一个样本77',
            state:'设计中',
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
                      {},
                    ],
                  }
            ]
        }],
    },
    getters:{
    }
}
export default user