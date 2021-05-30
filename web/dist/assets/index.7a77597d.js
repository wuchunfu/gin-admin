import e from"./DetailModal.a48929e0.js";import{_ as r,u as o}from"./useTable.987c3b87.js";import{_ as t}from"./useForm.675e3b3a.js";import{u as i}from"./useModal.e9f696f2.js";import{e as s,v as a,j as n,aw as l,V as c,ab as d,cs as m,r as p,o as u,m as f,J as j,ay as b,E as g,F as x,n as y,G as v,H as E,p as w}from"./index.5da963b2.js";import{getColumns as h}from"./data.7687ab74.js";import"./useDescription.aef10244.js";import"./responsiveObserve.c545f1cc.js";import"./get.6b33f9f0.js";import"./index.0471517d.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.b03f3a83.js";import"./useExpose.0682e64c.js";import"./index.def285ad.js";import"./UpOutlined.f6a5c259.js";import"./index.0720f544.js";import"./useWindowSizeFn.ed38b6f3.js";import"./index.4f8a523c.js";import"./useSortable.143bde05.js";import"./RedoOutlined.6b053df0.js";import"./_baseIteratee.ead3a974.js";import"./FullscreenOutlined.154838b3.js";import"./index.f8af06a3.js";import"./index.184fa1e2.js";import"./vendor.afa0338c.js";import"./index.25809687.js";import"./index.954e8ab9.js";import"./Tree.44ce5ced.js";import"./CountdownInput.48c66347.js";import"./download.b91e24b5.js";import"./index.9e073956.js";var T=s({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:t},setup(){const e=a(),r=a([]),{t:t}=n(),[s,{setTableData:p}]=o({title:t("sys.errorLog.tableTitle"),columns:h(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[u,{openModal:f}]=i();return l((()=>m.getErrorInfoState),(e=>{c((()=>{p(d(e))}))}),{immediate:!0}),{register:s,registerModal:u,handleDetail:function(r){e.value=r,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,r=null,o=function*(){},new Promise(((t,i)=>{var s=e=>{try{n(o.next(e))}catch(r){i(r)}},a=e=>{try{n(o.throw(e))}catch(r){i(r)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((o=o.apply(e,r)).next())}));var e,r,o},imgList:r,rowInfo:e,t:t}}});const C={class:"p-4"};T.render=function(e,r,o,t,i,s){const a=p("DetailModal"),n=p("a-button"),l=p("TableAction"),c=p("BasicTable");return u(),f("div",C,[(u(!0),f(j,null,b(e.imgList,(e=>g((u(),f("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),y(a,{info:e.rowInfo,onRegister:e.registerModal},null,8,["info","onRegister"]),y(c,{onRegister:e.register,class:"error-handle-table"},{toolbar:v((()=>[y(n,{onClick:e.fireVueError,type:"primary"},{default:v((()=>[E(w(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),y(n,{onClick:e.fireResourceError,type:"primary"},{default:v((()=>[E(w(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),y(n,{onClick:e.fireAjaxError,type:"primary"},{default:v((()=>[E(w(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:v((({record:r})=>[y(l,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default T;
