const countAbout={
    namespaced:true,
    actions:{ 
        jia(miniStore,value){
            console.log("加被调用了值为"+value);
            miniStore.commit('JIA',value);
        }
    },
    mutations:{
        JIA(state,value){
            state.num+=value;
        }
    },
    state:{num:1},
    getters:{}
}
export default countAbout
