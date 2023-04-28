import{u as w,r as s,j as e,L as l,E as S,_ as u}from"./index-8e74ae3b.js";import{u as C,a as _,F as E,v as c}from"./store-d66fdfbd.js";import{B as A}from"./index.esm-c86b5d13.js";import{A as D,D as O}from"./api-model-15bb46da.js";import{B as I}from"./index.esm-98a46209.js";import{H as L}from"./index.esm-eb339150.js";import{V as P}from"./index.esm-8f156d9d.js";import T from"./Error-b57ffdec.js";const z=s.lazy(()=>u(()=>import("./Modal-6cdf3196.js"),["assets/Modal-6cdf3196.js","assets/index-8e74ae3b.js","assets/index-090edb4d.css"])),m=s.lazy(()=>u(()=>import("./Index-cc693698.js"),["assets/Index-cc693698.js","assets/index-8e74ae3b.js","assets/index-090edb4d.css","assets/index-4d501b15.js"]));function Y(){let{theme:x,toggleTheme:b}=C(),i=w(),[o,h]=s.useState(""),[p]=s.useState(D),[f,j]=s.useState(!1),[a,r]=s.useState(!1),d=_(),g=v=>{var n;let t=JSON.parse(v),k=(n=t==null?void 0:t.routes)==null?void 0:n.map(y=>({...y,id:c()})),N={id:c(),collectionName:t==null?void 0:t.collectionName,baseUrl:t==null?void 0:t.baseUrl,routes:k};h(JSON.stringify(N)),j(!0)};return d.env==="production"?e.jsx(T,{message:"You have no permission"}):e.jsxs("div",{className:"h-screen w-full dark:bg-dark-primary-50 relative",children:[e.jsx("button",{onClick:b,className:"absolute right-5 top-5 dark:text-white z-10",children:x==="dark"?e.jsx(E,{}):e.jsx(A,{})}),e.jsxs("div",{className:"container mx-auto pt-10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>{i(-1)},className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 items-end justify-self-end rounded pr-2  font-medium active:scale-95  mr-2",children:e.jsx(I,{className:"text-dark dark:text-white",size:25})}),e.jsx("h1",{className:"text-xl dark:text-gray-200 font-medium mb-0",children:"Create API collection:"})]}),e.jsxs("button",{className:"font-base flex items-center cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 justify-self-end rounded border border-gray-200 px-2 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",onClick:()=>r(!0),children:[e.jsx(L,{size:20,className:"mr-1"}),e.jsx("span",{className:"hidden lg:block",children:"Show structure"})]})]}),e.jsx(s.Suspense,{fallback:e.jsx(l,{}),children:e.jsx(m,{jsonData:p,readOnly:!1,height:"80vh",setData:g})}),e.jsx("button",{disabled:!f,onClick:()=>{o!==""&&(d.addApiCollection(o),i(S.API_COLLECTIONS))},className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 items-end justify-self-end rounded border border-gray-200 px-14 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white mt-3 disabled:dark:border-blue-900 disabled:bg-blue-600 disabled:bg-opacity-20 disabled:text-gray-400 disabled:cursor-not-allowed disabled:active:scale-100",children:"Save"})]}),e.jsx(s.Suspense,{fallback:e.jsx(l,{}),children:e.jsx(z,{isOpen:a,onClose:()=>r(!a),children:e.jsxs("div",{className:"dark:bg-dark-primary-50 p-5 w-[60vw] bg-white",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("h1",{className:"text-lg font-medium dark:text-white",children:"Sample structure of data to make an API docs"}),e.jsx("button",{onClick:()=>r(!a),className:"p-2 rounded-full dark:hover:bg-dark-primary-40 dark:text-white",children:e.jsx(P,{})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(s.Suspense,{fallback:e.jsx(l,{}),children:e.jsx(m,{jsonData:O,readOnly:!0,height:"60vh",width:"58vw"})})})]})})})]})}export{Y as default};
