import{u as n,r as m,j as e,E as r}from"./index-b87b6c56.js";import{u,a as c,F as d}from"./store-b58ee5de.js";import{B as f}from"./index.esm-7c24bd5f.js";import{S as b}from"./index.esm-d428687b.js";function j(){var o;let{theme:a,toggleTheme:i}=u(),s=n(),t=c();return m.useEffect(()=>{t.getCollection()},[]),e.jsxs("div",{className:"h-screen w-full flex flex-col justify-center items-center dark:bg-dark-primary-50 relative",children:[e.jsx("div",{className:"absolute right-5 top-5",children:e.jsx("button",{onClick:i,className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition items-end justify-self-end rounded border border-gray-200 p-2 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:a==="dark"?e.jsx(d,{size:18}):e.jsx(f,{size:18})})}),e.jsx(b,{size:60,className:"text-[#c16630] mb-3"}),e.jsx("h1",{className:"dark:text-white text-xl",children:"Welcome to API Docs"}),e.jsx("button",{onClick:()=>{var l;(l=t==null?void 0:t.apiCollections)!=null&&l.length?s(r.API_COLLECTIONS):s(r.CREATE_API_COLLECTION)},className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 items-end justify-self-end rounded border border-gray-200 px-14 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2 mt-3",children:(o=t==null?void 0:t.apiCollections)!=null&&o.length?"Go to collections":"Create API"})]})}export{j as default};