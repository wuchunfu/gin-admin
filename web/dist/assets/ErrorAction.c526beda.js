import{B as t}from"./index.f7cb6047.js";import{e as o,aW as e,b6 as r,j as a,a$ as n,k as s,cs as i,aN as c,r as d,o as m,m as u,G as p,n as l}from"./index.1f097b66.js";import"./index.90cd64cd.js";import"./createAsyncComponent.a97ba2a0.js";import"./RedoOutlined.a29e4a12.js";import"./_baseIteratee.a09744c9.js";import"./get.2a8bce36.js";import"./FullscreenOutlined.b9367bd4.js";import"./index.fcde5f62.js";import"./useWindowSizeFn.a1eec47f.js";import"./vendor.afa0338c.js";import"./usePageContext.8d7cba42.js";import"./index.091e603f.js";import"./index.623c98e2.js";import"./UpOutlined.3d518c56.js";import"./useSortable.3abcaf61.js";var f=o({name:"ErrorAction",components:{Icon:e,Tooltip:r,Badge:t},setup(){const{t:t}=a(),{push:o}=n();return{t:t,getCount:s((()=>i.getErrorListCountState)),handleToErrorList:function(){o(c.ERROR_LOG_PAGE).then((()=>{i.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,n){const s=d("Icon"),i=d("Badge"),c=d("Tooltip");return m(),u(c,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:p((()=>[l(i,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:p((()=>[l(s,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;
