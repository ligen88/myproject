import request from "@/api/requset"
import { reqUserinfo } from "@/api"
const user={
    namespaced:true,
    actions:{
        async getUserinfo(){
            await reqUserinfo()
        }
    },
    mutations:{
    },
    state:{},
    getters:{}
}
export default user