import{_ as e}from"./useModal.b8d34e83.js";import{_ as s,u as t}from"./useDescription.fd6273ff.js";import{e as r,j as o,r as a,o as i,m as n,G as d,n as c,q as p}from"./index.36139107.js";import{getDescSchema as l}from"./data.66ba8227.js";import"./useWindowSizeFn.8e9d6af8.js";import"./FullscreenOutlined.b8cdb727.js";import"./responsiveObserve.c545f1cc.js";import"./get.1890df82.js";import"./vendor.afa0338c.js";import"./index.e09997a3.js";var m=r({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[s]=t({column:2,schema:l()});return{register:s,useI18n:o,t:e}}});m.render=function(e,s,t,r,o,l){const m=a("Description"),f=a("BasicModal");return i(),n(f,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:d((()=>[c(m,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default m;
