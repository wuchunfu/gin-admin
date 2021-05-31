import{e,j as s,g as r,k as a,y as o,e1 as t,r as i,o as n,m as l,G as d,n as c,p as m,H as p,q as f}from"./index.36139107.js";import{_ as u,b as j}from"./useModal.b8d34e83.js";import{h,i as x}from"./useForm.8f794468.js";import{h as b}from"./header.d801b988.js";import"./vendor.afa0338c.js";import"./useWindowSizeFn.8e9d6af8.js";import"./FullscreenOutlined.b8cdb727.js";import"./index.4ec510ae.js";import"./index.a91809e5.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.3a167269.js";import"./get.1890df82.js";import"./index.54daea1f.js";import"./RedoOutlined.113c5797.js";import"./index.cb9e9314.js";import"./index.e09997a3.js";import"./index.93fbdfe0.js";import"./UpOutlined.7b40a54f.js";import"./index.7842b685.js";import"./Tree.2328cf2f.js";import"./CountdownInput.b08211a1.js";import"./index.b04ba115.js";import"./download.65a5aba1.js";import"./index.a0933f43.js";var g=e({name:"LockModal",components:{BasicModal:u,BasicForm:h},setup(){const{t:e}=s(),{prefixCls:i}=r("header-lock-modal"),n=a((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[l,{closeModal:d}]=j(),[c,{validateFields:m,resetFields:p}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:i,getRealName:n,register:l,registerForm:c,handleLock:function(){return e=this,s=null,r=function*(){const e=(yield m()).password;d(),t.commitLockInfoState({isLock:!0,pwd:e}),yield p()},new Promise(((a,o)=>{var t=e=>{try{n(r.next(e))}catch(s){o(s)}},i=e=>{try{n(r.throw(e))}catch(s){o(s)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,i);n((r=r.apply(e,s)).next())}));var e,s,r},headerImg:b}}});g.render=function(e,s,r,a,o,t){const u=i("BasicForm"),j=i("a-button"),h=i("BasicModal");return n(),l(h,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:d((()=>[c("div",{class:`${e.prefixCls}__entry`},[c("div",{class:`${e.prefixCls}__header`},[c("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),c("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),c(u,{onRegister:e.registerForm},null,8,["onRegister"]),c("div",{class:`${e.prefixCls}__footer`},[c(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:d((()=>[p(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default g;
