import{_ as e,u as t}from"./useTable.018ac77d.js";import{_ as o}from"./useForm.52d88ecd.js";import{e as n,e0 as r,e1 as i,r as a,o as s,m as c,G as d,n as l,H as p}from"./index.1f097b66.js";import{_ as m}from"./PageWrapper.62d8e105.js";import u from"./DeptTree.c0cfa31b.js";import{u as f}from"./useModal.a2845802.js";import{_ as b,c as j,s as x}from"./UserModal.bb35610b.js";import"./get.2a8bce36.js";import"./index.441b5e01.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.671c45b8.js";import"./useExpose.777f5fdb.js";import"./index.73a92d9c.js";import"./UpOutlined.3d518c56.js";import"./index.401595d7.js";import"./useWindowSizeFn.a1eec47f.js";import"./index.9aefb1ec.js";import"./useSortable.3abcaf61.js";import"./RedoOutlined.a29e4a12.js";import"./_baseIteratee.a09744c9.js";import"./FullscreenOutlined.b9367bd4.js";import"./index.c3ecc781.js";import"./index.a9c1d7e8.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.41f0e12d.js";import"./index.0676b090.js";import"./Tree.01a39524.js";import"./CountdownInput.de0b3f56.js";import"./download.67a3b443.js";import"./index.848484b1.js";import"./usePageContext.8d7cba42.js";import"./index.b35ce9ea.js";import"./index.1aad8dcc.js";import"./ArrowLeftOutlined.f339ed43.js";import"./index.vue_vue&type=style&index=0&lang.bc75d22e.js";var h=n({name:"AccountManagement",components:{BasicTable:e,PageWrapper:m,DeptTree:u,AccountModal:b,TableAction:o},setup(){const[e,{openModal:o}]=f(),[n,{reload:a}]=t({title:"账号列表",api:r,columns:j,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return t=this,o=null,n=function*(){(yield i({id:e.id}))&&a()},new Promise(((e,r)=>{var i=e=>{try{s(n.next(e))}catch(t){r(t)}},a=e=>{try{s(n.throw(e))}catch(t){r(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,a);s((n=n.apply(t,o)).next())}));var t,o,n},handleSuccess:function(){a()},handleSelect:function(e=""){a({searchInfo:{deptId:e}})}}}});const g=p("新增账号");h.render=function(e,t,o,n,r,i){const p=a("DeptTree"),m=a("a-button"),u=a("TableAction"),f=a("BasicTable"),b=a("AccountModal"),j=a("PageWrapper");return s(),c(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:d((()=>[l(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),l(f,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:d((()=>[l(m,{type:"primary",onClick:e.handleCreate},{default:d((()=>[g])),_:1},8,["onClick"])])),action:d((({record:t})=>[l(u,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default h;
