<template  >
    <div class="bg">
        <Row style="height: 10%;">
            <div class="card" style="height: 80%;text-align: center;font-size: 35px;padding-top:8px;font-weight:bold;letter-spacing:3px;">成都市共享单车监管平台</div>
        </Row>
        <Row style="height: 55%;">
            <Col span="6" style="height: 100%;">
              <Row style="height: 20%;">
                <Col span="12" style="height: 100%;">
                  <div class="card" style="height: 93%;padding:5px;padding-left:10px;">
                      <span style="font-size: 15px;line-height:15px;">投放总量:</span>
                     <span style="text-align: center;font-size: 38px;line-height:38px;color:rgb(180, 255, 255);font-weight:bold;"> <count-to :end-val="68789"></count-to> </span>
                  </div>
                </Col>
                <Col span="12" style="height: 100%;">
                  <div class="card" style="height: 93%;padding:5px;padding-left:10px;">
                      <span style="font-size: 15px;line-height:15px;">骑行次数:</span>
                     <span style="text-align: center;font-size: 38px;line-height:38px;color:rgb(180, 255, 255);font-weight:bold;"> <count-to :end-val="4589712"></count-to> </span>
                  </div>
                </Col>
              </Row>
              <Row style="height: 80%;margin-top:4px;">
                <div id="area_bike" class="card" style="height:93%;"></div>
              </Row>
            </Col>
            <Col span="10"  style="height: 95%;">
                <div class="card"  style="height: 100%;">

                </div>
            </Col>
            <Col span="8"  style="height: 100%;">
                <Row  style="height: 50%;">
                    <Col style="height: 100%;" span="12">
                      <div id="person_num"  style="height: 90%;" class="card"></div>
                    </Col>
                    <Col style="height: 100%;" span="12">
                      <div id="bike_num" style="height: 90%;" class="card"></div>
                    </Col>
                </Row>
                <Row  style="height: 50%;">
                    <div id="toufang_date_num" style="height: 90%;" class="card"></div>
                </Row>
            </Col>
        </Row>
        <Row style="height: 35%;">
            <Col style="height: 95%;" span="6">
                <div id="bike_area_num" class="card" style="height: 100%;"></div>
            </Col>
            <Col style="height: 95%;" span="10">
                <div class="card content" style="height: 100%;">
                  <Row>
                    <h2>实时消息推送</h2>
                  </Row>
                  <transition-group name="list" tag="p">
                      <Row  v-for="item in current_news" v-bind:key="item.id" class="item_row">
                        <Col class="item" span="2"><Tag  color="red">{{item.type}}</Tag></Col>
                        <Col class="item" span="3">{{item.area}}</Col>
                        <Col class="item" span="4">{{item.date}}</Col>
                        <Col class="item" span="15">{{item.info}}</Col>
                      </Row>
                    </transition-group>
                </div>
            </Col>
            <Col style="height: 95%;" span="8">
                <div id="complaint_date_num" style="height: 100%;" class="card"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
import echarts from "echarts";
import CountTo from '../page/components/CountTo.vue';
export default {
  components:{
    CountTo
  },
  data() {
    return {
      news: [
        {id:"1",type:"报警",area:"青羊区",date:"2018-05-23",info:"区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！区域投放车辆超过阈值！"},
        {id:"2",type:"投诉",area:"青羊区",date:"2018-05-23",info:"ofo服务人员态度恶劣"},
        {id:"3",type:"报警",area:"锦江区",date:"2018-05-23",info:"摩拜维护人员低于30人"},
        {id:"4",type:"投诉",area:"金牛区",date:"2018-05-23",info:"摩拜的服务质量差"},
        {id:"5",type:"报警",area:"成华区",date:"2018-05-23",info:"区域投放车辆超过阈值！"},
        {id:"6",type:"警告",area:"龙泉驿区",date:"2018-05-23",info:"区域投放车辆接近阈值！"},
        {id:"7",type:"投诉",area:"锦江区",date:"2018-05-23",info:"一步单车的坏车太多了"},
        {id:"8",type:"投诉",area:"双流区",date:"2018-05-23",info:"机场附近的单车太多，占用人行道！"},
        {id:"9",type:"投诉",area:"武侯区",date:"2018-05-23",info:"火车南站地铁站附近堆积了大量单车"},
        {id:"0",type:"投诉",area:"青白江区",date:"2018-05-23",info:"单车占用人行道"},
        {id:"11",type:"投诉",area:"青羊区",date:"2018-05-23",info:"摩拜服务人员态度差"},
        {id:"12",type:"投诉",area:"温江区",date:"2018-05-23",info:"单车堆积"},
        {id:"13",type:"报警",area:"温江区",date:"2018-05-23",info:"区域投放车辆超过阈值！"},
        {id:"14",type:"报警",area:"双流区",date:"2018-05-23",info:"区域投放车辆超过阈值！"}
      ],
      current_news:[],
      area_bike: [
        { area: "锦江区", mobai: 9664, ofo: 10042, etc: 15082 },
        { area: "成华区", mobai: 9464, ofo: 8942, etc: 12082 },
        { area: "武侯区", mobai: 8564, ofo: 8842, etc: 11182 },
        { area: "青羊区", mobai: 8864, ofo: 8742, etc: 7882 },
        { area: "金牛区", mobai: 8064, ofo: 7842, etc: 7682 },
        { area: "双流区", mobai: 7564, ofo: 7642, etc: 7582 },
        { area: "龙泉驿区", mobai: 7064, ofo: 5642, etc: 7482 },
        { area: "温江区", mobai: 6664, ofo: 5442, etc: 7382 },
        { area: "郫都区", mobai: 6164, ofo: 3142, etc: 7282 },
        { area: "新都区", mobai: 5864, ofo: 3042, etc: 7182 },
        { area: "青白江区", mobai: 4364, ofo: 2342, etc: 5682 }
      ],
      complaint_date_num: [
        { date: "2018-05-23", mobai: 64, ofo: 42, etc: 82 },
        { date: "2018-05-24", mobai: 35, ofo: 62, etc: 92 },
        { date: "2018-05-25", mobai: 62, ofo: 92, etc: 72 },
        { date: "2018-05-26", mobai: 142, ofo: 172, etc: 52 },
        { date: "2018-05-27", mobai: 81, ofo: 12, etc: 32 },
        { date: "2018-05-28", mobai: 36, ofo: 42, etc: 122 },
        { date: "2018-05-29", mobai: 24, ofo: 52, etc: 132 }
      ],
      toufang_date_num: [
        { date: "2018-05-23", mobai: 64, ofo: 42, etc: 82 },
        { date: "2018-05-24", mobai: 35, ofo: 62, etc: 92 },
        { date: "2018-05-25", mobai: 62, ofo: 92, etc: 72 },
        { date: "2018-05-26", mobai: 142, ofo: 172, etc: 52 },
        { date: "2018-05-27", mobai: 81, ofo: 12, etc: 32 },
        { date: "2018-05-28", mobai: 36, ofo: 42, etc: 122 },
        { date: "2018-05-29", mobai: 24, ofo: 52, etc: 132 }
      ],
      bike_area_num: [
        {
          area: "青羊区",
          num: 3100
        },
        {
          area: "武侯区",
          num: 4005
        },
        {
          area: "金牛区",
          num: 12509
        },
        {
          area: "锦江区",
          num: 11115
        },
        {
          area: "成华区",
          num: 14210
        },
        {
          area: "双流区",
          num: 23520
        },
        {
          area: "龙泉驿区",
          num: 15130
        },
        {
          area: "郫都区",
          num: 14330
        },
        {
          area: "温江区",
          num: 6303
        },
        {
          area: "青白江区",
          num: 14330
        },
        {
          area: "新都区",
          num: 2303
        }
      ],
      bike_num: [
        { name: "摩拜", num: 48756 },
        { name: "ofo", num: 35555 },
        { name: "青桔", num: 25360 },
        { name: "黑拜", num: 15360 },
        { name: "1 步", num: 5360 },
        { name: "哈罗", num: 2360 },
        { name: "赳赳", num: 4360 },
        { name: "智聪", num: 1360 }
      ],
      person_num: [
        { name: "摩拜", num: 38756 },
        { name: "ofo", num: 25555 },
        { name: "青桔", num: 15360 },
        { name: "黑拜", num: 5360 },
        { name: "1 步", num: 4360 },
        { name: "哈罗", num: 3060 },
        { name: "赳赳", num: 1360 },
        { name: "智聪", num: 2360 }
      ]
    };
  },
  methods: {
    create_complaint_date_num: function(data) {
      let myChart = echarts.init(document.getElementById("complaint_date_num"));
      let xAxis = {
        name: "数量",
        type: "category",
        data: [],
        axisLine: { lineStyle: { color: "#eeeeee" } },
        axisTick: { lineStyle: { color: "#eeeeee" } },
        nameTextStyle: { color: "#eeeeee" },
        axisLabel: { color: "#eeeeee" }
      };
      let mobai_series = {
        name: "摩拜",
        type: "bar",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: []
      };
      let ofo_series = {
        name: "ofo",
        type: "bar",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: []
      };
      let etc_series = {
        name: "其它",
        type: "bar",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: []
      };
      for (let i in data) {
        xAxis.data.push(data[i].date);
        ofo_series.data.push(data[i].ofo);
        mobai_series.data.push(data[i].mobai);
        etc_series.data.push(data[i].etc);
      }

      let option = {
        //color: ["#FFFFCC", "#99CCFF", "#006699"],
        title: { text: "投诉事件时间分布", textStyle: { color: "#eeeeee" } },
        grid:{y2:30},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["摩拜", "ofo", "其它"],
          left: 200,
          textStyle: { color: "#eeeeee" }
        },
        xAxis: xAxis,
        yAxis: {
          name: "日期",
          type: "value",
          axisLine: { lineStyle: { color: "#eeeeee" } },
          axisTick: { lineStyle: { color: "#eeeeee" } },
          nameTextStyle: { color: "#eeeeee" },
          axisLabel: { color: "#eeeeee" }
        },
        series: [mobai_series, ofo_series, etc_series]
      };
      myChart.setOption(option);
    },
    create_toufang_date_num: function(data) {
      let myChart = echarts.init(document.getElementById("toufang_date_num"));
      let xAxis = {
        name: "数量",
        type: "category",
        data: [],
        axisLine: { lineStyle: { color: "#eeeeee" } },
        axisTick: { lineStyle: { color: "#eeeeee" } },
        nameTextStyle: { color: "#eeeeee" },
        axisLabel: { color: "#eeeeee" }
      };
      let mobai_series = {
        areaStyle: {normal: {}},
        name: "摩拜",
        type: "line",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        stack: "总量",
        data: []
      };
      let ofo_series = {
        areaStyle: {normal: {}},
        name: "ofo",
        type: "line",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        stack: "总量",
        data: []
      };
      let etc_series = {
        areaStyle: {normal: {}},
        name: "其它",
        type: "line",
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        stack: "总量",
        data: []
      };
      for (let i in data) {
        xAxis.data.push(data[i].date);
        ofo_series.data.push(data[i].ofo);
        mobai_series.data.push(data[i].mobai);
        etc_series.data.push(data[i].etc);
      }

      let option = {
        color: ["#FFFFCC", "#99CCFF", "#006699"],
        title: { text: "车辆投放数量时间分布", textStyle: { color: "#eeeeee" } },
        grid:{y2:30},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["摩拜", "ofo", "其它"],
          left: 200,
          textStyle: { color: "#eeeeee" }
        },
        xAxis: xAxis,
        yAxis: {
          name: "日期",
          type: "value",
          axisLine: { lineStyle: { color: "#eeeeee" } },
          axisTick: { lineStyle: { color: "#eeeeee" } },
          nameTextStyle: { color: "#eeeeee" },
          axisLabel: { color: "#eeeeee" }
        },
        series: [mobai_series, ofo_series, etc_series]
      };
      myChart.setOption(option);
    },
    create_area_bike: function(data) {
      let myChart = echarts.init(document.getElementById("area_bike"));
      let yAxis = {
        splitLine: false,
        type: "category",
        data: [],
        axisLine: { show: false },
        axisTick: { show: false },
        nameTextStyle: { color: "#eeeeee", width: 500 },
        axisLabel: { color: "#eeeeee" }
      };
      let mobai_series = {
        name: "摩拜",
        type: "bar",
        stack: "总量",
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        barWidth: 17,
        data: []
      };
      let ofo_series = {
        name: "ofo",
        type: "bar",
        stack: "总量",
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        barWidth: 17,
        data: []
      };
      let etc_series = {
        name: "其它",
        type: "bar",
        stack: "总量",
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        barWidth: 17,
        data: []
      };
      for (let j in data) {
        let i = data.length - j - 1;
        yAxis.data.push(data[i].area);
        ofo_series.data.push(data[i].ofo);
        mobai_series.data.push(data[i].mobai);
        etc_series.data.push(data[i].etc);
      }

      let option = {
        //color: ["#FFFFCC", "#99CCFF", "#006699"],
        grid: { x: 70, x2: 20,y:35, y2: 5 },
        title: {
          text: "单车区域投放数量排名",
          textStyle: { color: "#eeeeee" }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          show: false,
          name: "地区",
          nameRotate: 270,
          type: "value",
          axisLine: { lineStyle: { color: "#eeeeee" } },
          axisTick: { show: false },
          splitLine: false,
          nameTextStyle: { color: "#eeeeee" },
          axisLabel: { color: "#eeeeee", rotate: 270 }
        },
        yAxis: yAxis,
        series: [mobai_series, ofo_series, etc_series]
      };
      myChart.setOption(option);
    },
    create_bike_num: function(data) {
      let myChart = echarts.init(document.getElementById("bike_num"));
      let legend=[];
      let series = {
        type: "pie",
        radius:"40%",
        data: []
      };
      for (let i in data) {
        legend.push(data[i].name);
        let temp = { name: data[i].name, value: data[i].num };
        series.data.push(temp);
      }
      let option = {
        title: { text: "车辆品牌数量分布", textStyle: { color: "#eeeeee" } },
        tooltip: {},
        legend: {
            type: 'scroll',
            bottom: 1,
            left: 'center',
            textStyle: { color: "#eeeeee" },
            data: legend
        },
        series: [series]
      };
      myChart.setOption(option);
    },
    create_bike_area_num: function(data) {
      let myChart = echarts.init(document.getElementById("bike_area_num"));
      let series = {
        type: "pie",
        radius:"65%",
        data: []
      };
      for (let i in data) {
        let temp = { name: data[i].area, value: data[i].num };
        series.data.push(temp);
      }
      let option = {
        title: { text: "车辆投放区域分布", textStyle: { color: "#eeeeee" } },
        tooltip: {},
        series: [series]
      };
      myChart.setOption(option);
    },
    create_person_num: function(data) {
      let myChart = echarts.init(document.getElementById("person_num"));
      let legend=[];
      let series = {
        type: "pie",
        radius:"40%",
        data: []
      };
      for (let i in data) {
        legend.push(data[i].name);
        let temp = { name: data[i].name, value: data[i].num };
        series.data.push(temp);
      }
      let option = {
        title: { text: "车辆维护人员分布", textStyle: { color: "#eeeeee" } },
        tooltip: {},
        legend: {
            type: 'scroll',
            bottom: 1,
            left: 'center',
            textStyle: { color: "#eeeeee" },
            data: legend
        },
        series: [series]
      };
      myChart.setOption(option);
    },
    scrollNews:function(i){
      if(this.current_news.length>8){
        this.current_news.splice(0,1);
      }
      while(this.current_news.length<=8){
        this.current_news.push(this.news[i]);
        i++;
      }
      this.current_news.push(this.news[i]);
      i++;
      if(i>=this.news.length){
        i=0;
      }
      let self=this;
      if (self && !self._isDestroyed) {
          setTimeout(() => {
              if (self && !self._isDestroyed){
                self.scrollNews(i);
              }
                  
          }, 3000);
      }
    }
  },
  mounted: function() {
    this.create_area_bike(this.$data.area_bike);
    this.create_complaint_date_num(this.$data.complaint_date_num);
    this.create_bike_num(this.$data.bike_num);
    this.create_person_num(this.$data.person_num);
    this.create_bike_area_num(this.$data.bike_area_num);
    this.create_toufang_date_num(this.$data.toufang_date_num);
    this.scrollNews(0);
  }
};
</script>
<style scoped>
.bg {
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    rgb(0, 117, 196),
    rgb(0, 31, 66)
  );
  padding: 10px;
  color: #eeeeee;
}
.card {
  margin: 15px;
  padding: 15px;
  box-shadow: 0px 0px 30px rgba(200, 255, 255, 0.75) inset;
  background: linear-gradient(to left, rgb(180, 255, 255), rgb(180, 255, 255))
      left top no-repeat,
    linear-gradient(to bottom, rgb(180, 255, 255), rgb(180, 255, 255)) left top
      no-repeat,
    linear-gradient(to left, rgb(180, 255, 255), rgb(180, 255, 255)) right top
      no-repeat,
    linear-gradient(to bottom, rgb(180, 255, 255), rgb(180, 255, 255)) right top
      no-repeat,
    linear-gradient(to left, rgb(180, 255, 255), rgb(180, 255, 255)) left bottom
      no-repeat,
    linear-gradient(to bottom, rgb(180, 255, 255), rgb(180, 255, 255)) left
      bottom no-repeat,
    linear-gradient(to left, rgb(180, 255, 255), rgb(180, 255, 255)) right
      bottom no-repeat,
    linear-gradient(to left, rgb(180, 255, 255), rgb(180, 255, 255)) right
      bottom no-repeat;
  background-size: 2px 20px, 20px 2px, 2px 20px, 20px 2px;
  background-color: rgba(0, 0, 0, 0.23);
}
.item_row{
  margin: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}
.item {
  margin-top: 11px;
  font-size: 15px;
  text-align: center;
}
.list-enter-active {
  transition: all 1s;
}
.list-leave-active{
  transition: all 1s;
}
.list-enter{
  opacity: 0;
  transform: translateX(10px);
}
.list-leave-to{
  opacity: 0;
  transform: translateX(10px);
}
.content{
  overflow: hidden;
}
</style>


