import o from"./LockPage.09a07d5d.js";import{u as e}from"./lock.7367a071.js";import{j as a,i as t,K as r,o as s,m as n,P as m,W as c,T as d}from"./vendor.0af35baf.js";import"./index.55b83891.js";import"./header.d801b988.js";var i=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});i.render=function(o,e,a,t,i,u){const f=r("LockPage");return s(),n(d,{name:"fade-bottom",mode:"out-in"},{default:m((()=>[o.getIsLock?(s(),n(f,{key:0})):c("",!0)])),_:1})};export default i;
