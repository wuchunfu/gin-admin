import{j as e,aI as a,r as n,i as t,u as s,I as r,J as i,K as o,o as l,m as c,n as d,x as f}from"./vendor.0af35baf.js";import{p,c as m,aa as u}from"./index.3d8324dd.js";import{u as g}from"./useWindowSizeFn.2da1ca2c.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:p.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=m("iframe-page");g(f,150,{immediate:!0});const d=t((()=>({height:`${s(o)}px`})));function f(){const e=s(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n;const t=document.documentElement.clientHeight-n;e.style.height=`${t}px`}function p(){e.value=!1,f()}return r((()=>{e.value=!0,i((()=>{const e=s(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{p()})):e.onload=()=>{p()}}))})),{getWrapStyle:d,loading:e,frameRef:l,prefixCls:c}}});const h=f(),x=h(((e,a,n,t,s,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[d(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[d("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-4d9a5dd8";export default v;
