import{bd as t,e as a,aW as e,r as o,o as l,m as s,J as n,ay as i,G as r,n as c,H as d,p}from"./index.36139107.js";import{c as m}from"./createAsyncComponent.6607da70.js";import{C as u}from"./index.bb346a53.js";import{T as f}from"./index.e09997a3.js";import"./index.f78d18e2.js";import"./index.a91809e5.js";import"./vendor.afa0338c.js";import"./index.54daea1f.js";import"./UpOutlined.7b40a54f.js";import"./responsiveObserve.c545f1cc.js";const x=m((()=>t((()=>__import__("./index.85f38c3a.js")),["/dist/assets/index.85f38c3a.js","/dist/assets/index.36139107.js","/dist/assets/index.95584525.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css"]))),v=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var g=a({components:{CountTo:x,Tag:f,Card:u,Icon:e},setup:()=>({growCardList:v})});const j={class:"md:flex"},b={class:"py-4 px-4 flex justify-between"},C={class:"p-2 px-4 flex justify-between"};g.render=function(t,a,e,m,u,f){const x=o("Tag"),v=o("CountTo"),g=o("Icon"),w=o("Card");return l(),s("div",j,[(l(!0),s(n,null,i(t.growCardList,((a,e)=>(l(),s(w,{key:a.title,size:"small",loading:t.$attrs.loading,title:a.title,class:["md:w-1/4 w-full md:mt-0 !mt-4",[e+1<4&&"!md:mr-4"]],canExpan:!1},{extra:r((()=>[c(x,{color:a.color},{default:r((()=>[d(p(a.action),1)])),_:2},1032,["color"])])),default:r((()=>[c("div",b,[c(v,{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),c(g,{icon:a.icon,size:40},null,8,["icon"])]),c("div",C,[c("span",null,"总"+p(a.title),1),c(v,{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default g;
