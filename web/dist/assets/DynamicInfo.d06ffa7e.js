import{C as t}from"./index.bb346a53.js";import{L as e}from"./index.b0ed962b.js";import{e as a,aW as s,r as i,o as r,m as n,G as o,n as m,H as d,p as l,q as p}from"./index.36139107.js";import"./index.f78d18e2.js";import"./index.a91809e5.js";import{d as c}from"./data.8ddc77c3.js";import{h as u}from"./header.d801b988.js";import"./index.54daea1f.js";import"./vendor.afa0338c.js";import"./UpOutlined.7b40a54f.js";import"./responsiveObserve.c545f1cc.js";var f=a({components:{Card:t,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:s},setup:()=>({items:c,headerImg:u})});const j=d("更多");f.render=function(t,e,a,s,c,u){const f=i("a-button"),I=i("Icon"),L=i("ListItemMeta"),b=i("ListItem"),x=i("List"),v=i("Card");return r(),n(v,p({title:"最新动态"},t.$attrs),{extra:o((()=>[m(f,{type:"link",size:"small"},{default:o((()=>[j])),_:1})])),default:o((()=>[m(x,{"item-layout":"horizontal","data-source":t.items},{renderItem:o((({item:t})=>[m(b,null,{default:o((()=>[m(L,null,{description:o((()=>[d(l(t.date),1)])),title:o((()=>[d(l(t.name)+" ",1),m("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:o((()=>[m(I,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;
