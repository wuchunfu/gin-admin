import{e as t,Q as n,S as e,aj as a,Y as i,Z as o,af as r,ck as c,n as l,cl as s,a0 as d,ac as u}from"./index.5da963b2.js";import{T as f}from"./index.c0d37451.js";import{R as v,C as g}from"./index.25809687.js";function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b=f.TabPane,h=t({name:"ACard",mixins:[n],props:{prefixCls:e.string,title:e.VNodeChild,extra:e.VNodeChild,bordered:e.looseBool.def(!0),bodyStyle:e.style,headStyle:e.style,loading:e.looseBool.def(!1),hoverable:e.looseBool.def(!1),type:e.string,size:e.oneOf(a("default","small")),actions:e.VNodeChild,tabList:{type:Array},tabBarExtraContent:e.VNodeChild,activeTabKey:e.string,defaultActiveTabKey:e.string,cover:e.VNodeChild,onTabChange:{type:Function}},setup:function(){return{configProvider:i("configProvider",o)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(t){return t.map((function(n,e){return r(n)&&!c(n)||!r(n)?l("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(e)},[l("span",null,[n])]):null}))},triggerTabChange:function(t){this.$emit("tabChange",t)},isContainGrid:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.forEach((function(n){n&&s(n.type)&&n.type.__ANT_CARD_GRID&&(t=!0)})),t}},render:function(){var t,n,e,a,i,o=this.$props,c=o.prefixCls,s=o.headStyle,h=void 0===s?{}:s,y=o.bodyStyle,C=void 0===y?{}:y,m=o.loading,x=o.bordered,P=void 0===x||x,k=o.size,A=void 0===k?"default":k,T=o.type,j=o.tabList,N=o.hoverable,V=o.activeTabKey,_=o.defaultActiveTabKey,B=this.$slots,w=d(this),G=(0,this.configProvider.getPrefixCls)("card",c),K=u(this,"tabBarExtraContent"),O=(p(n={},"".concat(G),!0),p(n,"".concat(G,"-loading"),m),p(n,"".concat(G,"-bordered"),P),p(n,"".concat(G,"-hoverable"),!!N),p(n,"".concat(G,"-contain-grid"),this.isContainGrid(w)),p(n,"".concat(G,"-contain-tabs"),j&&j.length),p(n,"".concat(G,"-").concat(A),"default"!==A),p(n,"".concat(G,"-type-").concat(T),!!T),n),R=0===C.padding||"0px"===C.padding?{padding:24}:void 0,S=l("div",{class:"".concat(G,"-loading-content"),style:R},[l(v,{gutter:8},{default:function(){return[l(g,{span:22},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}})]}}),l(v,{gutter:8},{default:function(){return[l(g,{span:8},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}}),l(g,{span:15},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}})]}}),l(v,{gutter:8},{default:function(){return[l(g,{span:6},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}}),l(g,{span:18},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}})]}}),l(v,{gutter:8},{default:function(){return[l(g,{span:13},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}}),l(g,{span:9},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}})]}}),l(v,{gutter:8},{default:function(){return[l(g,{span:4},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}}),l(g,{span:3},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}}),l(g,{span:16},{default:function(){return[l("div",{class:"".concat(G,"-loading-block")},null)]}})]}})]),$=void 0!==V,D=(p(e={size:"large"},$?"activeKey":"defaultActiveKey",$?V:_),p(e,"tabBarExtraContent",K),p(e,"onChange",this.triggerTabChange),p(e,"class","".concat(G,"-head-tabs")),e),E=j&&j.length?l(f,D,"function"==typeof(i=t=j.map((function(t){var n=t.tab,e=t.slots,a=null==e?void 0:e.tab,i=void 0!==n?n:B[a]?B[a](t):null;return l(b,{tab:i,key:t.key,disabled:t.disabled},null)})))||"[object Object]"===Object.prototype.toString.call(i)&&!r(i)?t:{default:function(){return[t]}}):null,z=u(this,"title"),I=u(this,"extra");(z||I||E)&&(a=l("div",{class:"".concat(G,"-head"),style:h},[l("div",{class:"".concat(G,"-head-wrapper")},[z&&l("div",{class:"".concat(G,"-head-title")},[z]),I&&l("div",{class:"".concat(G,"-extra")},[I])]),E]));var L=u(this,"cover"),M=L?l("div",{class:"".concat(G,"-cover")},[L]):null,F=l("div",{class:"".concat(G,"-body"),style:C},[m?S:w]),Q=u(this,"actions"),Y=Q&&Q.length?l("ul",{class:"".concat(G,"-actions")},[this.getAction(Q)]):null;return l("div",{class:O,ref:"cardContainerRef"},[a,M,w?F:null,Y])}});var y=t({name:"ACardMeta",props:{prefixCls:e.string,title:e.VNodeChild,description:e.VNodeChild,avatar:e.VNodeChild},setup:function(){return{configProvider:i("configProvider",o)}},render:function(){var t,n,e,a=this.$props.prefixCls,i=(0,this.configProvider.getPrefixCls)("card",a),o=(t={},n="".concat(i,"-meta"),e=!0,n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t),r=u(this,"avatar"),c=u(this,"title"),s=u(this,"description"),d=r?l("div",{class:"".concat(i,"-meta-avatar")},[r]):null,f=c?l("div",{class:"".concat(i,"-meta-title")},[c]):null,v=s?l("div",{class:"".concat(i,"-meta-description")},[s]):null,g=f||v?l("div",{class:"".concat(i,"-meta-detail")},[f,v]):null;return l("div",{class:o},[d,g])}});function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=t({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:e.string,hoverable:e.looseBool},setup:function(){return{configProvider:i("configProvider",o)}},render:function(){var t,n=this.$props,e=n.prefixCls,a=n.hoverable,i=void 0===a||a,o=(0,this.configProvider.getPrefixCls)("card",e),r=(C(t={},"".concat(o,"-grid"),!0),C(t,"".concat(o,"-grid-hoverable"),i),t);return l("div",{class:r},[d(this)])}});h.Meta=y,h.Grid=m,h.install=function(t){return t.component(h.name,h),t.component(y.name,y),t.component(m.name,m),t};export{h as C};
