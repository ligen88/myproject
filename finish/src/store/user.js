import request from "@/api/requset"
import { reqUserinfo } from "@/api"
import { nanoid } from "nanoid"
const user={
    namespaced:true,
    actions:{
    },
    mutations:{
    },
    state:{
        uid:'66',
        phone:'',
        nickname:'',
        //问卷
        qlist:[
        {   //问卷id
            id:nanoid(),
            //问卷标题
            title:'这是一个样本',
            state:'还没完成77',
            time:Date.now(),
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
        }
        ]
    },
    getters:{}
}
export default user