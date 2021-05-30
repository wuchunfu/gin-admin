import{e as t,Q as n,Y as e,Z as r,n as o,X as s,ai as i,aQ as a,af as c,S as u,c7 as l,aj as f,R as p,ac as h,E as d,F as m,a0 as b,ae as y,ag as g}from"./index.5da963b2.js";import{i as v}from"./index.fbc8ef9b.js";function C(){return(C=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function S(t){return t?t.toString().split("").reverse().map((function(t){var n=Number(t);return isNaN(n)?t:n})):[]}var x=t({name:"ScrollNumber",mixins:[n],inheritAttrs:!1,props:{prefixCls:u.string,count:u.any,component:u.string,title:u.oneOfType([u.number,u.string,null]),displayComponent:u.any,onAnimated:u.func},emits:["animated"],setup:function(){return{configProvider:e("configProvider",r),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,n=this.animateStarted,e=this.count;n&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:e},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,n){var e=this.sCount,r=Math.abs(Number(e)),o=Math.abs(Number(this.lastCount)),s=Math.abs(S(e)[n]),i=Math.abs(S(this.lastCount)[n]);return this.animateStarted?10+t:r>o?s>=i?10+t:20+t:s<=i?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,n){for(var e=[],r=0;r<30;r++)e.push(o("p",{key:r.toString(),class:s(n,{current:t===r})},[r%10]));return e},renderCurrentNumber:function(t,n,e){if("number"==typeof n){var r=this.getPositionByNum(n,e),s={transition:this.animateStarted||void 0===S(this.lastCount)[e]?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")};return o("span",{class:"".concat(t,"-only"),style:s,key:e},[this.renderNumberList(r,"".concat(t,"-only-unit"))])}return o("span",{key:"symbol",class:"".concat(t,"-symbol")},[n])},renderNumberElement:function(t){var n=this,e=this.sCount;return e&&Number(e)%1==0?S(e).map((function(e,r){return n.renderCurrentNumber(t,e,r)})).reverse():e}},render:function(){var t,n=this.prefixCls,e=this.title,r=this.component,u=void 0===r?"sup":r,l=this.displayComponent,f=(0,this.configProvider.getPrefixCls)("scroll-number",n),p=this.$attrs,h=p.class,d=p.style,m=void 0===d?{}:d;if(l)return i(l,{class:s("".concat(f,"-custom-component"),l.props&&l.props.class)});var b,y=a(C(C({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),g=C({},m),v=C(C({},y),{title:e,style:g,class:s(f,h)});return m&&m.borderColor&&(v.style.boxShadow="0 0 0 1px ".concat(m.borderColor," inset")),o(u,v,"function"==typeof(b=t=this.renderNumberElement(f))||"[object Object]"===Object.prototype.toString.call(b)&&!c(b)?t:{default:function(){return[t]}})}});function N(){return(N=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var P=function(t,n){var s,i,a,c=n.attrs,u=n.slots,f=t.prefixCls,p=t.color,h=t.text,d=void 0===h?null===(i=u.text)||void 0===i?void 0:i.call(u):h,m=t.placement,b=void 0===m?"end":m,y=c.class,g=c.style,v=null===(a=u.default)||void 0===a?void 0:a.call(u),C=e("configProvider",r),S=C.getPrefixCls,x=C.direction,P=S("ribbon",f),j=function(t){return-1!==l.indexOf(t)}(p),w=[P,"".concat(P,"-placement-").concat(b),(s={},O(s,"".concat(P,"-rtl"),"rtl"===x),O(s,"".concat(P,"-color-").concat(p),j),s),y],T={},B={};return p&&!j&&(T.background=p,B.color=p),o("div",{class:"".concat(P,"-wrapper")},[v,o("div",{class:w,style:N(N({},T),g)},[o("span",{class:"".concat(P,"-text")},[d]),o("div",{class:"".concat(P,"-corner"),style:B},null)])])};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function T(){return(T=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function B(t){return-1!==l.indexOf(t)}P.displayName="ABadgeRibbon",P.inheritAttrs=!1,P.props={prefix:u.string,color:u.string,text:u.any,placement:u.oneOf(f("start","end"))};var D=t({name:"ABadge",Ribbon:P,props:p({count:u.VNodeChild,showZero:u.looseBool,overflowCount:u.number,dot:u.looseBool,prefixCls:u.string,scrollNumberPrefixCls:u.string,status:u.oneOf(f("success","processing","default","error","warning")),color:u.string,text:u.VNodeChild,offset:u.arrayOf(u.oneOfType([String,Number])),numberStyle:u.style,title:u.string},{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:e("configProvider",r),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,n=this.badgeCount;return n>t?"".concat(t,"+"):n},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,n=this.badgeCount;return t||("string"==typeof n||"number"==typeof n?n:void 0)},getStyleWithOffset:function(){var t=this.$props,n=t.offset,e=t.numberStyle;return T(n?{right:"".concat(-parseInt(n[0],10),"px"),marginTop:v(n[1])?"".concat(n[1],"px"):n[1]}:{},e)},getBadgeClassName:function(t,n){var e,r=this.hasStatus();return s(t,(w(e={},"".concat(t,"-status"),r),w(e,"".concat(t,"-dot-status"),r&&this.dot&&!this.isZero()),w(e,"".concat(t,"-not-a-wrapper"),!n.length),e))},hasStatus:function(){var t=this.$props,n=t.status,e=t.color;return!!n||!!e},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,n=this.isZero();return t&&!n||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,n=this.getDispayCount(),e=this.isZero(),r=this.isDot();return(null==n||""===n||e&&!t)&&!r},renderStatusText:function(t){var n=h(this,"text");return this.isHidden()||!n?null:o("span",{class:"".concat(t,"-status-text")},[n])},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===j(t))return i(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,n){var e,r=this.$props,s=r.status,i=r.color,a=this.badgeCount,c=this.getDispayCount(),u=this.isDot(),l=this.isHidden(),f=(w(e={},"".concat(t,"-dot"),u),w(e,"".concat(t,"-count"),!u),w(e,"".concat(t,"-multiple-words"),!u&&a&&a.toString&&a.toString().length>1),w(e,"".concat(t,"-status-").concat(s),!!s),w(e,"".concat(t,"-status-").concat(i),B(i)),e),p=this.getStyleWithOffset();return i&&!B(i)&&((p=p||{}).background=i),l?null:d(o(x,{prefixCls:n,"data-show":!l,class:f,count:c,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:p,key:"scrollNumber"},null),[[m,!l]])}},render:function(){var t,n=this.prefixCls,e=this.scrollNumberPrefixCls,r=this.status,i=this.color,a=h(this,"text"),u=this.configProvider.getPrefixCls,l=u("badge",n),f=u("scroll-number",e),p=b(this),d=h(this,"count");Array.isArray(d)&&(d=d[0]),this.badgeCount=d;var m=this.renderBadgeNumber(l,f),v=this.renderStatusText(l),C=s((w(t={},"".concat(l,"-status-dot"),this.hasStatus()),w(t,"".concat(l,"-status-").concat(r),!!r),w(t,"".concat(l,"-status-").concat(i),B(i)),t)),S={};if(i&&!B(i)&&(S.background=i),!p.length&&this.hasStatus()){var x=this.getStyleWithOffset(),N=x&&x.color;return o("span",{class:this.getBadgeClassName(l,p),style:x},[o("span",{class:C,style:S},null),o("span",{style:{color:N},class:"".concat(l,"-status-text")},[a])])}var O,P=y(p.length?"".concat(l,"-zoom"):"");return o("span",{class:this.getBadgeClassName(l,p)},[p,o(g,P,(O=m,"function"==typeof O||"[object Object]"===Object.prototype.toString.call(O)&&!c(O)?m:{default:function(){return[m]}})),v])}});D.install=function(t){return t.component(D.name,D),t.component(D.Ribbon.displayName,D.Ribbon),t};export{D as B};
