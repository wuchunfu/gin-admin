import{C as e}from"./index.3abbe753.js";import{e as a,v as t,aw as i,r as n,o as r,m as o,G as s,n as d}from"./index.5da963b2.js";import"./index.c0d37451.js";import"./index.184fa1e2.js";import{u as l}from"./useECharts.9e3397c7.js";import"./index.25809687.js";import"./vendor.afa0338c.js";import"./UpOutlined.f6a5c259.js";import"./responsiveObserve.c545f1cc.js";var m=a({components:{Card:e},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:n}=l(a);return i((()=>e.loading),(()=>{e.loading||n({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"电子产品"},{value:310,name:"服装"},{value:274,name:"化妆品"},{value:400,name:"家居"}].sort((function(e,a){return e.value-a.value})),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 400*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});m.render=function(e,a,t,i,l,m){const p=n("Card");return r(),o(p,{title:"成交占比",loading:e.loading},{default:s((()=>[d("div",{ref:"chartRef",style:{width:e.width,height:e.height}},null,4)])),_:1},8,["loading"])};export default m;
