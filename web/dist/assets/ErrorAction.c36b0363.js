import{B as t}from"./index.4a84f8f2.js";import{e as o,aW as e,b6 as r,j as n,a$ as s,k as a,cs as i,aN as d,r as m,o as u,m as c,G as p,n as l}from"./index.5da963b2.js";import"./index.fbc8ef9b.js";import"./createAsyncComponent.b49d40c6.js";import"./RedoOutlined.6b053df0.js";import"./_baseIteratee.ead3a974.js";import"./get.6b33f9f0.js";import"./FullscreenOutlined.154838b3.js";import"./index.c84b70cd.js";import"./useWindowSizeFn.ed38b6f3.js";import"./vendor.afa0338c.js";import"./usePageContext.16f1954c.js";import"./index.9b98d5bd.js";import"./index.c0d37451.js";import"./UpOutlined.f6a5c259.js";import"./useSortable.143bde05.js";var f=o({name:"ErrorAction",components:{Icon:e,Tooltip:r,Badge:t},setup(){const{t:t}=n(),{push:o}=s();return{t:t,getCount:a((()=>i.getErrorListCountState)),handleToErrorList:function(){o(d.ERROR_LOG_PAGE).then((()=>{i.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,n,s){const a=m("Icon"),i=m("Badge"),d=m("Tooltip");return u(),c(d,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:p((()=>[l(i,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:p((()=>[l(a,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;
