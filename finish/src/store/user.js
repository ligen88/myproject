import request from "@/api/requset"
import dayjs from "dayjs"
import { nanoid } from "nanoid"
const user={
    namespaced:true,
    actions:{
    },
    mutations:{
    },
    state:{
        info:'帅哥',
        uid:nanoid(),
        phone:'15562672341',
        nickname:'小帅哥蛮这不是',
        address:"山东女子学院",
        //问卷
        qlist:[
        {   //问卷id
            id:nanoid(),
            //问卷标题
            title:'这是一个样本',
            state:'还没完成77',
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
            state:'完成了',
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