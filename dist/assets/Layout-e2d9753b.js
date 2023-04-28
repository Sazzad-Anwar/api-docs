import{r as n,u as v,a as j,j as e,E as x,c as N,O as S}from"./index-b87b6c56.js";import{u as w,a as h,k as C}from"./useDeviceWidth-103e4d5b.js";import{a as O,c as A,u as E}from"./store-b58ee5de.js";import{V as B}from"./index.esm-b9e3a8c2.js";import{a as I}from"./index.esm-61455ff0.js";import{B as D}from"./index.esm-b1584aad.js";import{C as L}from"./DynamicUrl-a233fc08.js";function P({apiId:u,collectionId:o,className:b}){var g;const[i,m]=n.useState([]),f=v(),{isMobileWidth:l}=w(),[y,c]=n.useState(""),{id:k}=j(),r=O();let t=((g=r==null?void 0:r.apiCollections)==null?void 0:g.find(a=>(a==null?void 0:a.id)===o))??{},p=(t==null?void 0:t.routes)??[];return n.useEffect(()=>{var a;(a=t==null?void 0:t.routes)==null||a.map(s=>{s!=null&&s.isGrouped&&(s==null?void 0:s.groupName)!==""&&(i!=null&&i.find(d=>d===(s==null?void 0:s.groupName))||i.push(s==null?void 0:s.groupName))}),r.toggleSidebar()},[]),n.useEffect(()=>{l&&r.isSidebarOpen?c("h-screen overflow-auto border-r bg-primary-300 dark:bg-dark-primary-40 border-gray-200 dark:border-gray-800 absolute top-0 bottom-0 left-0 z-20 w-80 "):l&&!r.isSidebarOpen?c("hidden"):l||c("h-screen overflow-auto relative border-r bg-primary-300 dark:bg-dark-primary-40 border-gray-200 dark:border-gray-800 w-3/12 2xl:w-2/12")},[l,r.isSidebarOpen]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:y,children:[e.jsx("div",{className:"flex justify-between items-center max-w-xl bg-gray-100 dark:bg-dark-primary-50",children:e.jsxs("div",{className:"px-7 py-3 truncate dark:text-white sticky top-0  flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>f(x.API_COLLECTIONS),className:"mr-3",children:e.jsx(D,{})}),e.jsx("span",{className:"text-lg lg:text-sm xl:text-lg",children:"API Docs"})]}),e.jsx("div",{className:"flex items-center",children:l&&e.jsx("button",{onClick:()=>r.toggleSidebar(),className:"justify-self-end cursor-pointer text-sm font-ubuntu normal-transition p-2 items-end rounded border border-gray-200 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white",children:r.isSidebarOpen?e.jsx(B,{}):e.jsx(I,{})})})]})}),e.jsx("div",{className:"flex justify-between border-t border-t-gray-300 dark:border-t-gray-700 items-center max-w-xl bg-gray-100 dark:bg-dark-primary-50",children:e.jsxs("div",{className:"px-7 py-3 truncate dark:text-white sticky top-0  flex items-center justify-between w-full",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("span",{className:"truncate w-[20ch] lg:text-sm xl:text-base",children:t==null?void 0:t.collectionName})}),A.environment==="development"&&e.jsx("button",{onClick:()=>f(L(k)),className:"justify-self-end cursor-pointer text-sm font-ubuntu normal-transition py-1 items-end rounded border border-gray-200 px-3 ml-1 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white",children:"Add api"})]})}),e.jsxs("div",{className:"px-7 pb-5 ml-2",children:[i.map((a,s)=>e.jsx(h,{apiName:a,api:p.filter(d=>(d==null?void 0:d.groupName)===a)},a)),!i.length&&e.jsx(h,{api:p})]})]}),l&&r.isSidebarOpen&&e.jsx("div",{onClick:r.toggleSidebar,className:"absolute inset-0 backdrop-blur-sm h-full w-full block z-10"})]})}function V(){const{theme:u}=E(),{isMobileWidth:o}=w(),{id:b,apiId:i}=j(),m=N();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex shadow-xl w-full",children:[m.pathname!==x.DASHBOARD&&e.jsx(P,{apiId:i,collectionId:b}),e.jsx("div",{className:m.pathname===x.DASHBOARD||o?"w-full":"w-9/12 2xl:w-10/12",children:e.jsx(S,{})})]}),e.jsx(C,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:u})]})}export{V as default};