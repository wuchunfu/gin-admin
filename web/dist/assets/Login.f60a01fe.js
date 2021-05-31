import{e,_ as o,f as t,u as s,g as r,j as l,k as i,l as a,r as m,o as n,m as x,n as p,p as d}from"./index.4d27a91d.js";import c from"./LoginForm.692175a0.js";import f from"./ForgetPasswordForm.9f712019.js";import g from"./RegisterForm.a8082e4b.js";import u from"./MobileForm.c1ba0fce.js";import w from"./QrCodeForm.e96d1306.js";import"./vendor.afa0338c.js";import"./index.71cbe8e9.js";import"./index.e58715d5.js";import"./index.a73b37e0.js";import"./responsiveObserve.c545f1cc.js";import"./index.c9803280.js";import"./index.aa3f7561.js";import"./_baseIteratee.370a9985.js";import"./get.b9cb18d5.js";import"./LoginFormTitle.30dc6f7b.js";import"./GithubFilled.bc864c72.js";import"./CountdownInput.2934f587.js";import"./index.b9099596.js";import"./download.57ce1035.js";var b=e({name:"Login",components:{AppLogo:o,LoginForm:c,ForgetPasswordForm:f,RegisterForm:g,MobileForm:u,QrCodeForm:w,AppLocalePicker:t},setup(){const e=s(),{prefixCls:o}=r("login"),{t:t}=l();return{t:t,prefixCls:o,title:i((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:a.getShowPicker}}});const j={class:"-enter-x xl:hidden"},h={class:"container relative h-full py-2 mx-auto sm:px-10"},F={class:"flex h-full"},v={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},y={class:"my-auto"},L={class:"mt-10 font-medium text-white -enter-x"},C={class:"mt-4 text-3xl inline-block"},k={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},P={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"},A={class:"my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 py-8 sm:px-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto enter-x relative"};b.render=function(e,o,t,s,r,l){const i=m("AppLocalePicker"),a=m("AppLogo"),c=m("LoginForm"),f=m("ForgetPasswordForm"),g=m("RegisterForm"),u=m("MobileForm"),w=m("QrCodeForm");return n(),x("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[p(i,{class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1}),p("span",j,[p(a,{alwaysShowTitle:!0})]),p("div",h,[p("div",F,[p("div",v,[p(a,{class:"-enter-x"}),p("div",y,[p("img",{alt:e.title,src:"/dist/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),p("div",L,[p("span",C,d(e.t("sys.login.signInTitle")),1)]),p("div",k,d(e.t("sys.login.signInDesc")),1)])]),p("div",P,[p("div",A,[p(c),p(f),p(g),p(u),p(w)])])])])],2)};export default b;
