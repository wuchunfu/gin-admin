import{_ as e,u as t}from"./useTable.585b5b8b.js";import{_ as o}from"./useForm.43f38e14.js";import{e as i,dN as n,w as s,dO as r,r as a,o as l,m as d,n as c,G as p,H as u}from"./index.0c45daab.js";import{u as m}from"./useDrawer.1d5e576f.js";import{_ as f,c as j,s as b}from"./MenuDrawer.a25e3f42.js";import"./get.1f72a36d.js";import"./index.87bd43c9.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.3efe9084.js";import"./useExpose.26ff2771.js";import"./index.2a260539.js";import"./UpOutlined.1a4ae035.js";import"./index.95ad8259.js";import"./useWindowSizeFn.3d647fbc.js";import"./useModal.523cc79e.js";import"./FullscreenOutlined.376d19c7.js";import"./index.36d45010.js";import"./useSortable.dbc12562.js";import"./RedoOutlined.79ef2a08.js";import"./_baseIteratee.7894c36e.js";import"./index.ae6dd566.js";import"./index.7c86b16a.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.e8b12ea3.js";import"./index.9ee90b29.js";import"./Tree.9abd8786.js";import"./CountdownInput.0363810b.js";import"./download.3545e518.js";import"./index.98f4c0b8.js";import"./index.9df9f5dd.js";import"./ArrowLeftOutlined.99049e45.js";var x=i({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:f,TableAction:o},setup(){const[e,{openDrawer:o}]=m(),[i,{reload:a,expandAll:l,collapseAll:d}]=t({title:"菜单列表",api:n,columns:j,isTreeTable:!0,formConfig:{labelWidth:120,schemas:b},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return s((()=>{setTimeout((()=>{l()}),200)})),{registerTable:i,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return t=this,o=null,i=function*(){(yield r({id:e.id}))&&(a(),setTimeout((()=>{l()}),500))},new Promise(((e,n)=>{var s=e=>{try{a(i.next(e))}catch(t){n(t)}},r=e=>{try{a(i.throw(e))}catch(t){n(t)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);a((i=i.apply(t,o)).next())}));var t,o,i},handleSuccess:function(){a(),setTimeout((()=>{l()}),500)},expandAll:l,collapseAll:d}}});const h=u(" 新增菜单 "),w=u("展开全部"),T=u("折叠全部");x.render=function(e,t,o,i,n,s){const r=a("a-button"),u=a("TableAction"),m=a("BasicTable"),f=a("MenuDrawer");return l(),d("div",null,[c(m,{onRegister:e.registerTable},{toolbar:p((()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:p((()=>[h])),_:1},8,["onClick"]),c(r,{type:"success",onClick:e.expandAll},{default:p((()=>[w])),_:1},8,["onClick"]),c(r,{type:"success",onClick:e.collapseAll},{default:p((()=>[T])),_:1},8,["onClick"])])),action:p((({record:t})=>[c(u,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),c(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
