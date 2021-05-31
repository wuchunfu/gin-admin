import{e,ci as o,aX as t,bd as a,au as n,g as s,j as r,k as i,y as l,bu as c,aB as d,r as u,o as m,m as p,n as f,G as k,L as g,p as h,J as x}from"./index.1f097b66.js";import{D as _}from"./siteSetting.c485f07c.js";import{u as C}from"./useModal.a2845802.js";import{h as D}from"./header.d801b988.js";import{c as w}from"./createAsyncComponent.a97ba2a0.js";import"./vendor.afa0338c.js";import"./useWindowSizeFn.a1eec47f.js";import"./FullscreenOutlined.b9367bd4.js";var y=e({name:"UserDropdown",components:{Dropdown:o,Menu:t,MenuItem:w((()=>a((()=>__import__("./DropMenuItem.de294660.js")),["/dist/assets/DropMenuItem.de294660.js","/dist/assets/index.1f097b66.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css"]))),MenuDivider:t.Divider,LockAction:w((()=>a((()=>__import__("./LockModal.e2674af5.js")),["/dist/assets/LockModal.e2674af5.js","/dist/assets/LockModal.c2a09df5.css","/dist/assets/index.1f097b66.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css","/dist/assets/useModal.a2845802.js","/dist/assets/useModal.b1a1b797.css","/dist/assets/useWindowSizeFn.a1eec47f.js","/dist/assets/FullscreenOutlined.b9367bd4.js","/dist/assets/useForm.52d88ecd.js","/dist/assets/useForm.bd5dea06.css","/dist/assets/index.c3ecc781.js","/dist/assets/index.81ecbe86.css","/dist/assets/index.a9c1d7e8.js","/dist/assets/index.0edc9df2.css","/dist/assets/responsiveObserve.c545f1cc.js","/dist/assets/_baseIteratee.a09744c9.js","/dist/assets/get.2a8bce36.js","/dist/assets/index.41f0e12d.js","/dist/assets/RedoOutlined.a29e4a12.js","/dist/assets/index.441b5e01.js","/dist/assets/index.2d2e7aa6.css","/dist/assets/index.0676b090.js","/dist/assets/index.06c7b3c0.css","/dist/assets/index.73a92d9c.js","/dist/assets/index.0b3eba88.css","/dist/assets/UpOutlined.3d518c56.js","/dist/assets/index.401595d7.js","/dist/assets/index.4a4a1593.css","/dist/assets/Tree.01a39524.js","/dist/assets/CountdownInput.de0b3f56.js","/dist/assets/CountdownInput.05ee5bdd.css","/dist/assets/index.9aefb1ec.js","/dist/assets/index.2b38113f.css","/dist/assets/download.67a3b443.js","/dist/assets/index.848484b1.js","/dist/assets/index.9cf06c39.css","/dist/assets/header.d801b988.js"])))},props:{theme:n.oneOf(["dark","light"])},setup(){const{prefixCls:e}=s("header-user-dropdown"),{t:o}=r(),{getShowDoc:t}=c(),a=i((()=>{const{username:e="",nickname:o}=l.getUserInfoState||{};return{username:e,nickname:o}})),[n,{openModal:u}]=C();return{prefixCls:e,t:o,getUserInfo:a,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":d(_);break;case"lock":u(!0)}},getShowDoc:t,headerImg:D,register:n}}});y.render=function(e,o,t,a,n,s){const r=u("MenuItem"),i=u("MenuDivider"),l=u("Menu"),c=u("Dropdown"),d=u("LockAction");return m(),p(x,null,[f(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:k((()=>[f(l,{onClick:e.handleMenuClick},{default:k((()=>[e.getShowDoc?(m(),p(r,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(m(),p(i,{key:1})):g("",!0),f(r,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),f(r,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:k((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(d,{onRegister:e.register},null,8,["onRegister"])],64)};export default y;
