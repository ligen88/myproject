<template>
    <div class="charts">
        <el-main>
            <h1>{{qlist.title}}</h1>
            <el-tag>{{qlist.id}}</el-tag>
            <div class="questionCard" >
                <el-card class="box-card" shadow="hover" v-show="!item.isdel" v-for="item,index in qlist.question" :key="index">
                    <div slot="header" class="clearfix">
                        <el-tag>{{item.title}}</el-tag>
                    </div>
                    <div v-show="item.type=='radio'||item.type=='checkbox'">
                        <el-table :data="item.option" style="width: 100%">
                        <el-table-column label="选项" width="180">
                            <template slot-scope="scope">
                            <span style="margin-left: 10px">{{
                                scope.row.title
                            }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="数量" width="180">
                            <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.num }}</el-tag>
                            </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="占比" width="180">
                            <template >
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ account }}</el-tag>
                            </div>
                            </template>
                        </el-table-column>
                        </el-table>
                        <div :id="'img'+index"></div>
                        <div id="bar"></div>
                        <div id="pie"></div>
                    </div>
                     <div v-show="item.type=='textarea'">
                         <el-button type="">详细内容</el-button>
                     </div>
                </el-card>
            </div>
        </el-main>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:"Charts",
    data() {
        return {
            data1:[{ value: 50, name: '选项一' }, { value: 100, name: '选项二' },{ value: 100, name: '选项三' },],
            data3:[],
            data2:[],
            qlist:'',
            account:''
        }
    },
    methods:{
        setbar(){
            for(let i in this.data1){
            this.data3.push(this.data1[i].name);
            this.data2.push(this.data1[i].value);
            }
            var chartDom = document.getElementById("bar");
            var myChart = echarts.init(chartDom);
            var option = {
            xAxis: {
                type: "category",
                data: this.data3,
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: this.data2,
                    type: "bar",
                },
            ],
            };
            myChart.setOption(option);
            },
        setpie(){
                var chartDom = document.getElementById('pie');
                var myChart = echarts.init(chartDom);
                var option = {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data:this.data1,
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
                };
                myChart.setOption(option);
                }
    },
    mounted(){
        this.qlist=this.$route.params.item;
        console.log(this.qlist);
    }
}

</script>

<style scoped lang="less">
.charts{
    
    h1{
        font-size: 30px;
        text-align: center;
    }
    .el-main{
        height: 800px;
        width: 70%;
        margin: 0 auto;
        .el-tag{
            float: left;
            margin:0 auto;
        }
        .questionCard{
            .box-card{
                margin:30px 0px;
                width: 100%;
                #bar{
                    float: left;
                    height: 100px;
                    width: 100px;
                }
                #pie{
                    float: right;
                    height: 100px;
                    width: 100px;
                }
            }
        }
}

}
    
</style>