import o from"./LockPage.946f835f.js";import{u as e}from"./lock.450a510a.js";import{j as a,i as t,K as r,o as s,m as n,P as d,W as m,T as c}from"./vendor.0af35baf.js";import"./index.3d8324dd.js";import"./header.d801b988.js";var f=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});f.render=function(o,e,a,t,f,i){const u=r("LockPage");return s(),n(c,{name:"fade-bottom",mode:"out-in"},{default:d((()=>[o.getIsLock?(s(),n(u,{key:0})):m("",!0)])),_:1})};export default f;
