import{bM as e,n,bN as o,bO as a}from"./index.1f097b66.js";function s(s,t={}){const{size:i="small",delay:r=100,timeout:l=3e4,loading:m=!1,retry:d=!0}=t;return e({loader:s,loadingComponent:m?n(o,{spinning:!0,size:i},null):void 0,timeout:l,delay:r,onError:d?(e,n,o,a)=>{e.message.match(/fetch/)&&a<=3?n():o()}:a})}export{s as c};
