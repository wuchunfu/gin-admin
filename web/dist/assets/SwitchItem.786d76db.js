import{S as e}from"./index.0720f544.js";import{e as t,g as n,j as s,k as i,r as d,o as a,m as o,n as r,p,q as l,aA as c}from"./index.5da963b2.js";import{b as m}from"./index.54de8f10.js";import"./vendor.afa0338c.js";import"./useDrawer.b89d9ac7.js";import"./index.9b98d5bd.js";import"./ArrowLeftOutlined.3c31c900.js";import"./index.4f8a523c.js";import"./createAsyncComponent.b49d40c6.js";import"./index.fbc8ef9b.js";import"./RedoOutlined.6b053df0.js";import"./_baseIteratee.ead3a974.js";import"./get.6b33f9f0.js";import"./FullscreenOutlined.154838b3.js";import"./index.c84b70cd.js";import"./useWindowSizeFn.ed38b6f3.js";import"./usePageContext.16f1954c.js";import"./index.c0d37451.js";import"./UpOutlined.f6a5c259.js";import"./useSortable.143bde05.js";var f=t({name:"SwitchItem",components:{Switch:e},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=n("setting-switch-item"),{t:d}=s();return{prefixCls:t,t:d,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const u=c()(((e,t,n,s,i,c)=>{const m=d("Switch");return a(),o("div",{class:e.prefixCls},[r("span",null,p(e.title),1),r(m,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;
