import{C as e}from"./index.3abbe753.js";import{e as a,v as t,aw as i,r as o,o as n,m as r,G as s,n as l}from"./index.5da963b2.js";import"./index.c0d37451.js";import"./index.184fa1e2.js";import{u as d}from"./useECharts.9e3397c7.js";import"./index.25809687.js";import"./vendor.afa0338c.js";import"./UpOutlined.f6a5c259.js";import"./responsiveObserve.c545f1cc.js";var m=a({components:{Card:e},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:o}=d(a);return i((()=>e.loading),(()=>{e.loading||o({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 100*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});m.render=function(e,a,t,i,d,m){const p=o("Card");return n(),r(p,{title:"访问来源",loading:e.loading},{default:s((()=>[l("div",{ref:"chartRef",style:{width:e.width,height:e.height}},null,4)])),_:1},8,["loading"])};export default m;
