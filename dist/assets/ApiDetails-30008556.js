import{r as f,R as Ae,a as Tt,u as Nt,E as Lt,j as c,L as Be,_ as _t}from"./index-eef0c48c.js";import{G as nt,u as Pt,a as Ct,c as $t,F as qt,b as Xe}from"./store-5b407069.js";import{a as Mt,b as Wt,B as Bt}from"./index.esm-109716a4.js";import{u as Ft,A as It,Q as Vt}from"./useDeviceWidth-fb13c9aa.js";import{V as ot}from"./index.esm-35211849.js";import{a as Ht}from"./index.esm-605e6fe7.js";import{U as zt}from"./DynamicUrl-7f224ebf.js";import{M as Ut,r as Gt}from"./index-498de29a.js";import Jt from"./Modal-f0c81578.js";import"./index-4d501b15.js";const Xt="https://jsonplaceholder.typicode.com",Kt=[{id:"1",name:"Get Posts",description:"",url:{path:"/posts"},method:"GET"},{id:"2",name:"Get Single Posts",description:"",url:{path:"/posts/:id",variables:{isRequired:!0,params:{id:"1"}}},method:"GET"},{id:"3",name:"Get Comments of Posts",description:"",url:{path:"/posts/:id/comments",variables:{isRequired:!0,params:{id:"1"}}},method:"GET"},{id:"4",name:"Get Comments",description:"",url:{path:"/comments"},method:"GET",query:{isRequired:!0,params:{postId:"1"}}},{id:"5",name:"Add Post",description:"",url:{path:"/posts"},method:"POST",body:{isRequired:!0,params:{title:"New post title",body:"This is new post body",userId:"1"}}},{id:"6",name:"Update a post",description:"",url:{path:"/posts/:id",variables:{isRequired:!0,params:{id:"1"}}},method:"PUT",body:{isRequired:!0,params:{title:"Updated post title",body:"Updated post body",userId:"1"}}}],Ke={baseUrl:Xt,routes:Kt};function Qt(e){return nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]})(e)}var Ze={},Yt={get exports(){return Ze},set exports(e){Ze=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function o(){for(var r=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var t=typeof s;if(t==="string"||t==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var l=o.apply(null,s);l&&r.push(l)}}else if(t==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var u in s)n.call(s,u)&&s[u]&&r.push(u)}}}return r.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(Yt);const st=Ze;function $e(e){return e.split("-")[1]}function rt(e){return e==="y"?"height":"width"}function we(e){return e.split("-")[0]}function qe(e){return["top","bottom"].includes(we(e))?"x":"y"}function lt(e,n,o){let{reference:r,floating:a}=e;const s=r.x+r.width/2-a.width/2,t=r.y+r.height/2-a.height/2,l=qe(n),u=rt(l),d=r[u]/2-a[u]/2,m=l==="x";let i;switch(we(n)){case"top":i={x:s,y:r.y-a.height};break;case"bottom":i={x:s,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:t};break;case"left":i={x:r.x-a.width,y:t};break;default:i={x:r.x,y:r.y}}switch($e(n)){case"start":i[l]-=d*(o&&m?-1:1);break;case"end":i[l]+=d*(o&&m?-1:1)}return i}const Zt=async(e,n,o)=>{const{placement:r="bottom",strategy:a="absolute",middleware:s=[],platform:t}=o,l=s.filter(Boolean),u=await(t.isRTL==null?void 0:t.isRTL(n));let d=await t.getElementRects({reference:e,floating:n,strategy:a}),{x:m,y:i}=lt(d,r,u),h=r,y={},x=0;for(let b=0;b<l.length;b++){const{name:v,fn:j}=l[b],{x:S,y:T,data:q,reset:k}=await j({x:m,y:i,initialPlacement:r,placement:h,strategy:a,middlewareData:y,rects:d,platform:t,elements:{reference:e,floating:n}});m=S??m,i=T??i,y={...y,[v]:{...y[v],...q}},k&&x<=50&&(x++,typeof k=="object"&&(k.placement&&(h=k.placement),k.rects&&(d=k.rects===!0?await t.getElementRects({reference:e,floating:n,strategy:a}):k.rects),{x:m,y:i}=lt(d,h,u)),b=-1)}return{x:m,y:i,placement:h,strategy:a,middlewareData:y}};function yt(e){return typeof e!="number"?function(n){return{top:0,right:0,bottom:0,left:0,...n}}(e):{top:e,right:e,bottom:e,left:e}}function Ie(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function bt(e,n){var o;n===void 0&&(n={});const{x:r,y:a,platform:s,rects:t,elements:l,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:i="floating",altBoundary:h=!1,padding:y=0}=n,x=yt(y),b=l[h?i==="floating"?"reference":"floating":i],v=Ie(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(b)))==null||o?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:m,strategy:u})),j=i==="floating"?{...t.floating,x:r,y:a}:t.reference,S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),T=await(s.isElement==null?void 0:s.isElement(S))&&await(s.getScale==null?void 0:s.getScale(S))||{x:1,y:1},q=Ie(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:j,offsetParent:S,strategy:u}):j);return{top:(v.top-q.top+x.top)/T.y,bottom:(q.bottom-v.bottom+x.bottom)/T.y,left:(v.left-q.left+x.left)/T.x,right:(q.right-v.right+x.right)/T.x}}const Dt=Math.min,en=Math.max;function De(e,n,o){return en(e,Dt(n,o))}const tn=e=>({name:"arrow",options:e,async fn(n){const{element:o,padding:r=0}=e||{},{x:a,y:s,placement:t,rects:l,platform:u,elements:d}=n;if(o==null)return{};const m=yt(r),i={x:a,y:s},h=qe(t),y=rt(h),x=await u.getDimensions(o),b=h==="y",v=b?"top":"left",j=b?"bottom":"right",S=b?"clientHeight":"clientWidth",T=l.reference[y]+l.reference[h]-i[h]-l.floating[y],q=i[h]-l.reference[h],k=await(u.getOffsetParent==null?void 0:u.getOffsetParent(o));let G=k?k[S]:0;G&&await(u.isElement==null?void 0:u.isElement(k))||(G=d.floating[S]||l.floating[y]);const J=T/2-q/2,X=m[v],I=G-x[y]-m[j],K=G/2-x[y]/2+J,N=De(X,K,I),$=$e(t)!=null&&K!=N&&l.reference[y]/2-(K<X?m[v]:m[j])-x[y]/2<0;return{[h]:i[h]-($?K<X?X-K:I-K:0),data:{[h]:N,centerOffset:K-N}}}}),nn=["top","right","bottom","left"];nn.reduce((e,n)=>e.concat(n,n+"-start",n+"-end"),[]);const rn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(e){return e.replace(/left|right|bottom|top/g,n=>rn[n])}function on(e,n,o){o===void 0&&(o=!1);const r=$e(e),a=qe(e),s=rt(a);let t=a==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[s]>n.floating[s]&&(t=Ve(t)),{main:t,cross:Ve(t)}}const sn={start:"end",end:"start"};function Qe(e){return e.replace(/start|end/g,n=>sn[n])}const ln=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var o;const{placement:r,middlewareData:a,rects:s,initialPlacement:t,platform:l,elements:u}=n,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:i,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:x=!0,...b}=e,v=we(r),j=we(t)===t,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),T=i||(j||!x?[Ve(t)]:function(N){const $=Ve(N);return[Qe(N),$,Qe($)]}(t));i||y==="none"||T.push(...function(N,$,_,z){const W=$e(N);let C=function(oe,Z,pe){const ce=["left","right"],ue=["right","left"],de=["top","bottom"],Q=["bottom","top"];switch(oe){case"top":case"bottom":return pe?Z?ue:ce:Z?ce:ue;case"left":case"right":return Z?de:Q;default:return[]}}(we(N),_==="start",z);return W&&(C=C.map(oe=>oe+"-"+W),$&&(C=C.concat(C.map(Qe)))),C}(t,x,y,S));const q=[t,...T],k=await bt(n,b),G=[];let J=((o=a.flip)==null?void 0:o.overflows)||[];if(d&&G.push(k[v]),m){const{main:N,cross:$}=on(r,s,S);G.push(k[N],k[$])}if(J=[...J,{placement:r,overflows:G}],!G.every(N=>N<=0)){var X,I;const N=(((X=a.flip)==null?void 0:X.index)||0)+1,$=q[N];if($)return{data:{index:N,overflows:J},reset:{placement:$}};let _=(I=J.filter(z=>z.overflows[0]<=0).sort((z,W)=>z.overflows[1]-W.overflows[1])[0])==null?void 0:I.placement;if(!_)switch(h){case"bestFit":{var K;const z=(K=J.map(W=>[W.placement,W.overflows.filter(C=>C>0).reduce((C,oe)=>C+oe,0)]).sort((W,C)=>W[1]-C[1])[0])==null?void 0:K[0];z&&(_=z);break}case"initialPlacement":_=t}if(r!==_)return{reset:{placement:_}}}return{}}}},an=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){const{x:o,y:r}=n,a=await async function(s,t){const{placement:l,platform:u,elements:d}=s,m=await(u.isRTL==null?void 0:u.isRTL(d.floating)),i=we(l),h=$e(l),y=qe(l)==="x",x=["left","top"].includes(i)?-1:1,b=m&&y?-1:1,v=typeof t=="function"?t(s):t;let{mainAxis:j,crossAxis:S,alignmentAxis:T}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...v};return h&&typeof T=="number"&&(S=h==="end"?-1*T:T),y?{x:S*b,y:j*x}:{x:j*x,y:S*b}}(n,e);return{x:o+a.x,y:r+a.y,data:a}}}};function cn(e){return e==="x"?"y":"x"}const un=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:o,y:r,placement:a}=n,{mainAxis:s=!0,crossAxis:t=!1,limiter:l={fn:v=>{let{x:j,y:S}=v;return{x:j,y:S}}},...u}=e,d={x:o,y:r},m=await bt(n,u),i=qe(we(a)),h=cn(i);let y=d[i],x=d[h];if(s){const v=i==="y"?"bottom":"right";y=De(y+m[i==="y"?"top":"left"],y,y-m[v])}if(t){const v=h==="y"?"bottom":"right";x=De(x+m[h==="y"?"top":"left"],x,x-m[v])}const b=l.fn({...n,[i]:y,[h]:x});return{...b,data:{x:b.x-o,y:b.y-r}}}}};function te(e){var n;return((n=e.ownerDocument)==null?void 0:n.defaultView)||window}function ae(e){return te(e).getComputedStyle(e)}function gt(e){return e instanceof te(e).Node}function ye(e){return gt(e)?(e.nodeName||"").toLowerCase():""}let Fe;function xt(){if(Fe)return Fe;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Fe=e.brands.map(n=>n.brand+"/"+n.version).join(" "),Fe):navigator.userAgent}function ie(e){return e instanceof te(e).HTMLElement}function me(e){return e instanceof te(e).Element}function at(e){return typeof ShadowRoot>"u"?!1:e instanceof te(e).ShadowRoot||e instanceof ShadowRoot}function Pe(e){const{overflow:n,overflowX:o,overflowY:r,display:a}=ae(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+o)&&!["inline","contents"].includes(a)}function dn(e){return["table","td","th"].includes(ye(e))}function et(e){const n=/firefox/i.test(xt()),o=ae(e),r=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!r&&r!=="none"||n&&o.willChange==="filter"||n&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(a=>o.willChange.includes(a))||["paint","layout","strict","content"].some(a=>{const s=o.contain;return s!=null&&s.includes(a)})}function tt(){return/^((?!chrome|android).)*safari/i.test(xt())}function ze(e){return["html","body","#document"].includes(ye(e))}const it=Math.min,_e=Math.max,He=Math.round;function vt(e){const n=ae(e);let o=parseFloat(n.width),r=parseFloat(n.height);const a=ie(e),s=a?e.offsetWidth:o,t=a?e.offsetHeight:r,l=He(o)!==s||He(r)!==t;return l&&(o=s,r=t),{width:o,height:r,fallback:l}}function wt(e){return me(e)?e:e.contextElement}const jt={x:1,y:1};function Re(e){const n=wt(e);if(!ie(n))return jt;const o=n.getBoundingClientRect(),{width:r,height:a,fallback:s}=vt(n);let t=(s?He(o.width):o.width)/r,l=(s?He(o.height):o.height)/a;return t&&Number.isFinite(t)||(t=1),l&&Number.isFinite(l)||(l=1),{x:t,y:l}}function Ce(e,n,o,r){var a,s;n===void 0&&(n=!1),o===void 0&&(o=!1);const t=e.getBoundingClientRect(),l=wt(e);let u=jt;n&&(r?me(r)&&(u=Re(r)):u=Re(e));const d=l?te(l):window,m=tt()&&o;let i=(t.left+(m&&((a=d.visualViewport)==null?void 0:a.offsetLeft)||0))/u.x,h=(t.top+(m&&((s=d.visualViewport)==null?void 0:s.offsetTop)||0))/u.y,y=t.width/u.x,x=t.height/u.y;if(l){const b=te(l),v=r&&me(r)?te(r):r;let j=b.frameElement;for(;j&&r&&v!==b;){const S=Re(j),T=j.getBoundingClientRect(),q=getComputedStyle(j);T.x+=(j.clientLeft+parseFloat(q.paddingLeft))*S.x,T.y+=(j.clientTop+parseFloat(q.paddingTop))*S.y,i*=S.x,h*=S.y,y*=S.x,x*=S.y,i+=T.x,h+=T.y,j=te(j).frameElement}}return Ie({width:y,height:x,x:i,y:h})}function he(e){return((gt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function St(e){return Ce(he(e)).left+Ue(e).scrollLeft}function Ee(e){if(ye(e)==="html")return e;const n=e.assignedSlot||e.parentNode||at(e)&&e.host||he(e);return at(n)?n.host:n}function kt(e){const n=Ee(e);return ze(n)?n.ownerDocument.body:ie(n)&&Pe(n)?n:kt(n)}function At(e,n){var o;n===void 0&&(n=[]);const r=kt(e),a=r===((o=e.ownerDocument)==null?void 0:o.body),s=te(r);return a?n.concat(s,s.visualViewport||[],Pe(r)?r:[]):n.concat(r,At(r))}function ct(e,n,o){let r;if(n==="viewport")r=function(t,l){const u=te(t),d=he(t),m=u.visualViewport;let i=d.clientWidth,h=d.clientHeight,y=0,x=0;if(m){i=m.width,h=m.height;const b=tt();(!b||b&&l==="fixed")&&(y=m.offsetLeft,x=m.offsetTop)}return{width:i,height:h,x:y,y:x}}(e,o);else if(n==="document")r=function(t){const l=he(t),u=Ue(t),d=t.ownerDocument.body,m=_e(l.scrollWidth,l.clientWidth,d.scrollWidth,d.clientWidth),i=_e(l.scrollHeight,l.clientHeight,d.scrollHeight,d.clientHeight);let h=-u.scrollLeft+St(t);const y=-u.scrollTop;return ae(d).direction==="rtl"&&(h+=_e(l.clientWidth,d.clientWidth)-m),{width:m,height:i,x:h,y}}(he(e));else if(me(n))r=function(t,l){const u=Ce(t,!0,l==="fixed"),d=u.top+t.clientTop,m=u.left+t.clientLeft,i=ie(t)?Re(t):{x:1,y:1};return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:m*i.x,y:d*i.y}}(n,o);else{const t={...n};if(tt()){var a,s;const l=te(e);t.x-=((a=l.visualViewport)==null?void 0:a.offsetLeft)||0,t.y-=((s=l.visualViewport)==null?void 0:s.offsetTop)||0}r=t}return Ie(r)}function Rt(e,n){const o=Ee(e);return!(o===n||!me(o)||ze(o))&&(ae(o).position==="fixed"||Rt(o,n))}function ut(e,n){return ie(e)&&ae(e).position!=="fixed"?n?n(e):e.offsetParent:null}function dt(e,n){const o=te(e);if(!ie(e))return o;let r=ut(e,n);for(;r&&dn(r)&&ae(r).position==="static";)r=ut(r,n);return r&&(ye(r)==="html"||ye(r)==="body"&&ae(r).position==="static"&&!et(r))?o:r||function(a){let s=Ee(a);for(;ie(s)&&!ze(s);){if(et(s))return s;s=Ee(s)}return null}(e)||o}function fn(e,n,o){const r=ie(n),a=he(n),s=Ce(e,!0,o==="fixed",n);let t={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(r||!r&&o!=="fixed")if((ye(n)!=="body"||Pe(a))&&(t=Ue(n)),ie(n)){const u=Ce(n,!0);l.x=u.x+n.clientLeft,l.y=u.y+n.clientTop}else a&&(l.x=St(a));return{x:s.left+t.scrollLeft-l.x,y:s.top+t.scrollTop-l.y,width:s.width,height:s.height}}const mn={getClippingRect:function(e){let{element:n,boundary:o,rootBoundary:r,strategy:a}=e;const s=o==="clippingAncestors"?function(d,m){const i=m.get(d);if(i)return i;let h=At(d).filter(v=>me(v)&&ye(v)!=="body"),y=null;const x=ae(d).position==="fixed";let b=x?Ee(d):d;for(;me(b)&&!ze(b);){const v=ae(b),j=et(b);j||v.position!=="fixed"||(y=null),(x?!j&&!y:!j&&v.position==="static"&&y&&["absolute","fixed"].includes(y.position)||Pe(b)&&!j&&Rt(d,b))?h=h.filter(S=>S!==b):y=v,b=Ee(b)}return m.set(d,h),h}(n,this._c):[].concat(o),t=[...s,r],l=t[0],u=t.reduce((d,m)=>{const i=ct(n,m,a);return d.top=_e(i.top,d.top),d.right=it(i.right,d.right),d.bottom=it(i.bottom,d.bottom),d.left=_e(i.left,d.left),d},ct(n,l,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:n,offsetParent:o,strategy:r}=e;const a=ie(o),s=he(o);if(o===s)return n;let t={scrollLeft:0,scrollTop:0},l={x:1,y:1};const u={x:0,y:0};if((a||!a&&r!=="fixed")&&((ye(o)!=="body"||Pe(s))&&(t=Ue(o)),ie(o))){const d=Ce(o);l=Re(o),u.x=d.x+o.clientLeft,u.y=d.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-t.scrollLeft*l.x+u.x,y:n.y*l.y-t.scrollTop*l.y+u.y}},isElement:me,getDimensions:function(e){return vt(e)},getOffsetParent:dt,getDocumentElement:he,getScale:Re,async getElementRects(e){let{reference:n,floating:o,strategy:r}=e;const a=this.getOffsetParent||dt,s=this.getDimensions;return{reference:fn(n,await a(o),r),floating:{x:0,y:0,...await s(o)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>ae(e).direction==="rtl"},ft=(e,n,o)=>{const r=new Map,a={platform:mn,...o},s={...a.platform,_c:r};return Zt(e,n,{...a,platform:s})},mt=(e,n,o)=>{let r=null;return function(...a){const s=()=>{r=null,o||e.apply(this,a)};o&&!r&&(e.apply(this,a),r=setTimeout(s,n)),o||(r&&clearTimeout(r),r=setTimeout(s,n))}},pn={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},hn=f.createContext({getTooltipData:()=>pn});function Et(e="DEFAULT_TOOLTIP_ID"){return f.useContext(hn).getTooltipData(e)}const yn=typeof window<"u"?f.useLayoutEffect:f.useEffect,pt=async({elementReference:e=null,tooltipReference:n=null,tooltipArrowReference:o=null,place:r="top",offset:a=10,strategy:s="absolute",middlewares:t=[an(Number(a)),ln(),un({padding:5})]})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(n===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};const l=t;return o?(l.push(tn({element:o,padding:5})),ft(e,n,{placement:r,strategy:s,middleware:l}).then(({x:u,y:d,placement:m,middlewareData:i})=>{var h,y;const x={left:`${u}px`,top:`${d}px`},{x:b,y:v}=(h=i.arrow)!==null&&h!==void 0?h:{x:0,y:0};return{tooltipStyles:x,tooltipArrowStyles:{left:b!=null?`${b}px`:"",top:v!=null?`${v}px`:"",right:"",bottom:"",[(y={top:"bottom",right:"left",bottom:"top",left:"right"}[m.split("-")[0]])!==null&&y!==void 0?y:"bottom"]:"-4px"},place:m}})):ft(e,n,{placement:"bottom",strategy:s,middleware:l}).then(({x:u,y:d,placement:m})=>({tooltipStyles:{left:`${u}px`,top:`${d}px`},tooltipArrowStyles:{},place:m}))};var ve={tooltip:"styles-module_tooltip__mnnfp",fixed:"styles-module_fixed__7ciUi",arrow:"styles-module_arrow__K0L3T",noArrow:"styles-module_noArrow__T8y2L",clickable:"styles-module_clickable__Bv9o7",show:"styles-module_show__2NboJ",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const bn=({id:e,className:n,classNameArrow:o,variant:r="dark",anchorId:a,anchorSelect:s,place:t="top",offset:l=10,events:u=["hover"],openOnClick:d=!1,positionStrategy:m="absolute",middlewares:i,wrapper:h,delayShow:y=0,delayHide:x=0,float:b=!1,noArrow:v=!1,clickable:j=!1,closeOnEsc:S=!1,style:T,position:q,afterShow:k,afterHide:G,content:J,contentWrapperRef:X,isOpen:I,setIsOpen:K,activeAnchor:N,setActiveAnchor:$})=>{const _=f.useRef(null),z=f.useRef(null),W=f.useRef(null),C=f.useRef(null),[oe,Z]=f.useState(t),[pe,ce]=f.useState({}),[ue,de]=f.useState({}),[Q,be]=f.useState(!1),[ge,fe]=f.useState(!1),w=f.useRef(!1),M=f.useRef(null),{anchorRefs:B,setActiveAnchor:F}=Et(e),V=f.useRef(!1),[H,D]=f.useState([]),A=f.useRef(!1),O=d||u.includes("click");yn(()=>(A.current=!0,()=>{A.current=!1}),[]),f.useEffect(()=>{if(!Q){const p=setTimeout(()=>{fe(!1)},150);return()=>{clearTimeout(p)}}return()=>null},[Q]);const P=p=>{A.current&&(p&&fe(!0),setTimeout(()=>{A.current&&(K==null||K(p),I===void 0&&be(p))},10))};f.useEffect(()=>{if(I===void 0)return()=>null;I&&fe(!0);const p=setTimeout(()=>{be(I)},10);return()=>{clearTimeout(p)}},[I]),f.useEffect(()=>{Q!==w.current&&(w.current=Q,Q?k==null||k():G==null||G())},[Q]);const je=(p=x)=>{C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{V.current||P(!1)},p)},Oe=p=>{var L;if(!p)return;const R=(L=p.currentTarget)!==null&&L!==void 0?L:p.target;if(!(R!=null&&R.isConnected))return $(null),void F({current:null});y?(W.current&&clearTimeout(W.current),W.current=setTimeout(()=>{P(!0)},y)):P(!0),$(R),F({current:R}),C.current&&clearTimeout(C.current)},Te=()=>{j?je(x||100):x?je():P(!1),W.current&&clearTimeout(W.current)},Se=({x:p,y:L})=>{pt({place:t,offset:l,elementReference:{getBoundingClientRect:()=>({x:p,y:L,width:0,height:0,top:L,left:p,right:p,bottom:L})},tooltipReference:_.current,tooltipArrowReference:z.current,strategy:m,middlewares:i}).then(R=>{Object.keys(R.tooltipStyles).length&&ce(R.tooltipStyles),Object.keys(R.tooltipArrowStyles).length&&de(R.tooltipArrowStyles),Z(R.place)})},ke=p=>{if(!p)return;const L=p,R={x:L.clientX,y:L.clientY};Se(R),M.current=R},Me=p=>{Oe(p),x&&je()},We=p=>{var L;[document.querySelector(`[id='${a}']`),...H].some(R=>R==null?void 0:R.contains(p.target))||!((L=_.current)===null||L===void 0)&&L.contains(p.target)||P(!1)},Y=p=>{p.key==="Escape"&&P(!1)},ee=mt(Oe,50,!0),g=mt(Te,50,!0);f.useEffect(()=>{var p,L;const R=new Set(B);H.forEach(xe=>{R.add({current:xe})});const le=document.querySelector(`[id='${a}']`);le&&R.add({current:le}),S&&window.addEventListener("keydown",Y);const U=[];O?(window.addEventListener("click",We),U.push({event:"click",listener:Me})):(U.push({event:"mouseenter",listener:ee},{event:"mouseleave",listener:g},{event:"focus",listener:ee},{event:"blur",listener:g}),b&&U.push({event:"mousemove",listener:ke}));const ne=()=>{V.current=!0},re=()=>{V.current=!1,Te()};return j&&!O&&((p=_.current)===null||p===void 0||p.addEventListener("mouseenter",ne),(L=_.current)===null||L===void 0||L.addEventListener("mouseleave",re)),U.forEach(({event:xe,listener:Ne})=>{R.forEach(Ge=>{var Le;(Le=Ge.current)===null||Le===void 0||Le.addEventListener(xe,Ne)})}),()=>{var xe,Ne;O&&window.removeEventListener("click",We),S&&window.removeEventListener("keydown",Y),j&&!O&&((xe=_.current)===null||xe===void 0||xe.removeEventListener("mouseenter",ne),(Ne=_.current)===null||Ne===void 0||Ne.removeEventListener("mouseleave",re)),U.forEach(({event:Ge,listener:Le})=>{R.forEach(Ot=>{var Je;(Je=Ot.current)===null||Je===void 0||Je.removeEventListener(Ge,Le)})})}},[ge,B,H,S,u]),f.useEffect(()=>{let p=s??"";!p&&e&&(p=`[data-tooltip-id='${e}']`);const L=new MutationObserver(R=>{const le=[];R.forEach(U=>{if(U.type==="attributes"&&U.attributeName==="data-tooltip-id"&&U.target.getAttribute("data-tooltip-id")===e&&le.push(U.target),U.type==="childList"&&(N&&[...U.removedNodes].some(ne=>{var re;return!!(!((re=ne==null?void 0:ne.contains)===null||re===void 0)&&re.call(ne,N))&&(fe(!1),P(!1),$(null),!0)}),p))try{const ne=[...U.addedNodes].filter(re=>re.nodeType===1);le.push(...ne.filter(re=>re.matches(p))),le.push(...ne.flatMap(re=>[...re.querySelectorAll(p)]))}catch{}}),le.length&&D(U=>[...U,...le])});return L.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{L.disconnect()}},[e,s,N]);const E=()=>{q?Se(q):b?M.current&&Se(M.current):pt({place:t,offset:l,elementReference:N,tooltipReference:_.current,tooltipArrowReference:z.current,strategy:m,middlewares:i}).then(p=>{A.current&&(Object.keys(p.tooltipStyles).length&&ce(p.tooltipStyles),Object.keys(p.tooltipArrowStyles).length&&de(p.tooltipArrowStyles),Z(p.place))})};f.useEffect(()=>{E()},[Q,N,J,T,t,l,m,q]),f.useEffect(()=>{if(!(X!=null&&X.current))return()=>null;const p=new ResizeObserver(()=>{E()});return p.observe(X.current),()=>{p.disconnect()}},[J,X==null?void 0:X.current]),f.useEffect(()=>{var p;const L=document.querySelector(`[id='${a}']`),R=[...H,L];N&&R.includes(N)||$((p=H[0])!==null&&p!==void 0?p:L)},[a,H,N]),f.useEffect(()=>()=>{W.current&&clearTimeout(W.current),C.current&&clearTimeout(C.current)},[]),f.useEffect(()=>{let p=s;if(!p&&e&&(p=`[data-tooltip-id='${e}']`),p)try{const L=Array.from(document.querySelectorAll(p));D(L)}catch{D([])}},[e,s]);const se=J&&Q&&Object.keys(pe).length>0;return ge?Ae.createElement(h,{id:e,role:"tooltip",className:st("react-tooltip",ve.tooltip,ve[r],n,`react-tooltip__place-${oe}`,{[ve.show]:se,[ve.fixed]:m==="fixed",[ve.clickable]:j}),style:{...T,...pe},ref:_},J,Ae.createElement(h,{className:st("react-tooltip-arrow",ve.arrow,o,{[ve.noArrow]:v}),style:ue,ref:z})):null},gn=({content:e})=>Ae.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),Ye=({id:e,anchorId:n,anchorSelect:o,content:r,html:a,render:s,className:t,classNameArrow:l,variant:u="dark",place:d="top",offset:m=10,wrapper:i="div",children:h=null,events:y=["hover"],openOnClick:x=!1,positionStrategy:b="absolute",middlewares:v,delayShow:j=0,delayHide:S=0,float:T=!1,noArrow:q=!1,clickable:k=!1,closeOnEsc:G=!1,style:J,position:X,isOpen:I,setIsOpen:K,afterShow:N,afterHide:$})=>{const[_,z]=f.useState(r),[W,C]=f.useState(a),[oe,Z]=f.useState(d),[pe,ce]=f.useState(u),[ue,de]=f.useState(m),[Q,be]=f.useState(j),[ge,fe]=f.useState(S),[w,M]=f.useState(T),[B,F]=f.useState(i),[V,H]=f.useState(y),[D,A]=f.useState(b),[O,P]=f.useState(null),{anchorRefs:je,activeAnchor:Oe}=Et(e),Te=Y=>Y==null?void 0:Y.getAttributeNames().reduce((ee,g)=>{var E;return g.startsWith("data-tooltip-")&&(ee[g.replace(/^data-tooltip-/,"")]=(E=Y==null?void 0:Y.getAttribute(g))!==null&&E!==void 0?E:null),ee},{}),Se=Y=>{const ee={place:g=>{var E;Z((E=g)!==null&&E!==void 0?E:d)},content:g=>{z(g??r)},html:g=>{C(g??a)},variant:g=>{var E;ce((E=g)!==null&&E!==void 0?E:u)},offset:g=>{de(g===null?m:Number(g))},wrapper:g=>{var E;F((E=g)!==null&&E!==void 0?E:i)},events:g=>{const E=g==null?void 0:g.split(" ");H(E??y)},"position-strategy":g=>{var E;A((E=g)!==null&&E!==void 0?E:b)},"delay-show":g=>{be(g===null?j:Number(g))},"delay-hide":g=>{fe(g===null?S:Number(g))},float:g=>{M(g===null?T:g==="true")}};Object.values(ee).forEach(g=>g(null)),Object.entries(Y).forEach(([g,E])=>{var se;(se=ee[g])===null||se===void 0||se.call(ee,E)})};f.useEffect(()=>{z(r)},[r]),f.useEffect(()=>{C(a)},[a]),f.useEffect(()=>{Z(d)},[d]),f.useEffect(()=>{var Y;const ee=new Set(je);let g=o;if(!g&&e&&(g=`[data-tooltip-id='${e}']`),g)try{document.querySelectorAll(g).forEach(R=>{ee.add({current:R})})}catch{console.warn(`[react-tooltip] "${o}" is not a valid CSS selector`)}const E=document.querySelector(`[id='${n}']`);if(E&&ee.add({current:E}),!ee.size)return()=>null;const se=(Y=O??E)!==null&&Y!==void 0?Y:Oe.current,p=new MutationObserver(R=>{R.forEach(le=>{var U;if(!se||le.type!=="attributes"||!(!((U=le.attributeName)===null||U===void 0)&&U.startsWith("data-tooltip-")))return;const ne=Te(se);Se(ne)})}),L={attributes:!0,childList:!1,subtree:!1};if(se){const R=Te(se);Se(R),p.observe(se,L)}return()=>{p.disconnect()}},[je,Oe,O,n,o]);let ke=h;const Me=f.useRef(null);s?ke=Ae.createElement("div",{ref:Me,className:"react-tooltip-content-wrapper"},s({content:_??null,activeAnchor:O})):_&&(ke=_),W&&(ke=Ae.createElement(gn,{content:W}));const We={id:e,anchorId:n,anchorSelect:o,className:t,classNameArrow:l,content:ke,contentWrapperRef:Me,place:oe,variant:pe,offset:ue,wrapper:B,events:V,openOnClick:x,positionStrategy:D,middlewares:v,delayShow:Q,delayHide:ge,float:w,noArrow:q,clickable:k,closeOnEsc:G,style:J,position:X,isOpen:I,setIsOpen:K,afterShow:N,afterHide:$,activeAnchor:O,setActiveAnchor:Y=>P(Y)};return Ae.createElement(bn,{...We})};function xn(e){return nt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"}}]})(e)}function vn(e){return nt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}const ht=f.lazy(()=>_t(()=>import("./Index-224f8646.js"),["assets/Index-224f8646.js","assets/index-eef0c48c.js","assets/index-090edb4d.css","assets/index-4d501b15.js"]));function Ln(){var ue,de,Q,be,ge,fe;const{id:e,apiId:n}=Tt();let{theme:o,toggleTheme:r}=Pt(),a=Nt();const s=Ct();let t=(de=(ue=s==null?void 0:s.api)==null?void 0:ue.routes)==null?void 0:de.find(w=>(w==null?void 0:w.id)===n),[l,u]=f.useState(!1);const[d,m]=f.useState(!1),[i,h]=f.useState(""),[y,x]=f.useState(""),[b,v]=f.useState({}),[j,S]=f.useState(),[T,q]=f.useState(!1),[k,G]=f.useState(((Q=t==null?void 0:t.query)==null?void 0:Q.params)??{}),[J,X]=f.useState({}),[I,K]=f.useState(((ge=(be=t==null?void 0:t.url)==null?void 0:be.variables)==null?void 0:ge.params)??{}),[N,$]=f.useState({}),[_,z]=f.useState({}),{isMobileWidth:W}=Ft();new FormData;let C=[{name:"headers",label:"Headers"},{name:"body",label:"Body"},{name:"query",label:"Query Params"},{name:"pathVariables",label:"URL Params"}];const oe=w=>{w&&(i==="headers"?X(JSON.parse(w)):i==="body"?v(JSON.parse(w)):i==="query"?G(JSON.parse(w)):K(JSON.parse(w)))};let Z=f.useCallback(w=>{S(w)},[]);f.useEffect(()=>{var w,M,B,F,V,H,D,A,O,P;G({}),Z({}),z({}),(w=t==null?void 0:t.headers)!=null&&w.isRequired?(h("headers"),$((M=t==null?void 0:t.headers)==null?void 0:M.params)):(B=t==null?void 0:t.body)!=null&&B.isRequired?(h("body"),$((F=t==null?void 0:t.body)==null?void 0:F.params)):(V=t==null?void 0:t.query)!=null&&V.isRequired?(h("query"),$((H=t==null?void 0:t.query)==null?void 0:H.params)):(A=(D=t==null?void 0:t.url)==null?void 0:D.variables)!=null&&A.isRequired?(h("pathVariables"),$((P=(O=t==null?void 0:t.url)==null?void 0:O.variables)==null?void 0:P.params)):h(""),t===null&&a(Lt.DASHBOARD),s.getApiDetails(e)},[e,n]),f.useEffect(()=>{var w,M,B,F,V;$(i==="headers"?(w=t==null?void 0:t.headers)==null?void 0:w.params:i==="body"?(M=t==null?void 0:t.body)==null?void 0:M.params:i==="query"?(B=t==null?void 0:t.query)==null?void 0:B.params:(V=(F=t==null?void 0:t.url)==null?void 0:F.variables)==null?void 0:V.params)},[i,e,n]),f.useEffect(()=>{var B,F,V,H,D;let w="",M=((B=s==null?void 0:s.api)==null?void 0:B.baseUrl)+((F=t==null?void 0:t.url)==null?void 0:F.path);(V=t==null?void 0:t.query)!=null&&V.isRequired&&Object.keys(k).length&&Object.keys(k).map((A,O)=>{Object.values(k)[O]!==""&&(w+=A+"="+Object.values(k)[O],Object.keys(k).length>O+1&&Object.values(k)[O+1]!==""&&(w+="&"))}),(D=(H=t==null?void 0:t.url)==null?void 0:H.variables)!=null&&D.isRequired&&Object.keys(I).length&&Object.keys(I).map((A,O)=>{Object.values(I)[O]!==""&&(M=M.replace(`/:${Object.keys(I)[O]}`,`/${Object.values(I)[O]}`))}),x(M+(Object.keys(k).length&&!Object.values(k).includes("")&&Object.values(k).indexOf(Object.values(k).length-1)!==Object.values(k)[Object.values(k).length-1]?"?":"")+w)},[t,y,k,I,J,b]);const pe=async()=>{var w,M,B,F,V,H,D;q(!0);try{if((M=(w=t==null?void 0:t.url)==null?void 0:w.variables)!=null&&M.isRequired&&Object.values(I).includes("")){debugger;Vt.warn("Please set the 'Path Variables'")}else{Xe.interceptors.request.use(O=>{const P={...O};return P.metadata={startTime:new Date},P},O=>Promise.reject(O)),Xe.interceptors.response.use(O=>{const P={...O};return P.config.metadata.endTime=new Date,P.duration=P.config.metadata.endTime-P.config.metadata.startTime,P},O=>{const P={...O};return P.config.metadata.endTime=new Date,P.duration=P.config.metadata.endTime-P.config.metadata.startTime,Promise.reject(P)});let A=await Xe({method:t==null?void 0:t.method,url:y,baseURL:Ke==null?void 0:Ke.baseUrl,headers:J,data:(B=t==null?void 0:t.body)!=null&&B.isRequired&&Object.keys(b).length>0?b:(F=t==null?void 0:t.body)==null?void 0:F.params,timeout:4e3});Z(A.data),z({status:A==null?void 0:A.status,statusText:A==null?void 0:A.statusText,time:(A==null?void 0:A.duration)+" ms"})}q(!1)}catch(A){console.log(A),Z((V=A.response)!=null&&V.data?A.response.data:A),z({status:(H=A.response)==null?void 0:H.status,statusText:(D=A.response)==null?void 0:D.statusText,time:A.duration+" ms"}),q(!1)}},ce=w=>{const M=JSON.stringify(w),B=new TextEncoder().encode(M).length,F=+(B/1024).toFixed(2);return F>1?`${F} KB`:`${B} B`};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"w-full h-screen dark:bg-dark-primary-50 bg-white px-5 relative",children:[c.jsxs("div",{className:"flex justify-between items-center pr-10",children:[c.jsxs("div",{className:"flex items-center",children:[W&&c.jsx("button",{onClick:()=>s.toggleSidebar(),className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 items-end justify-self-end rounded border border-gray-200 px-1 mr-2 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white",children:s.isSidebarOpen?c.jsx(ot,{}):c.jsx(Ht,{})}),c.jsx("h1",{className:"py-3 truncate font-medium dark:text-white text-xl sticky top-0 max-w-xl dark:bg-dark-primary-50 flex items-center justify-between",children:t==null?void 0:t.name})]}),c.jsxs("div",{className:"flex items-center",children:[$t.environment==="development"&&c.jsxs("button",{"data-tooltip-id":"edit-api","data-tooltip-content":"Edit API",onClick:()=>a(zt(e,n)),className:"font-base cursor-pointer lg:text-base font-ubuntu normal-transition py-2 items-end justify-self-end rounded border border-gray-200 px-3 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:[c.jsx(vn,{size:18}),c.jsx(Ye,{id:"edit-api"})]}),c.jsxs("button",{"data-tooltip-id":"documentation","data-tooltip-content":"API documentation",onClick:()=>u(!0),className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-2 items-end justify-self-end rounded border border-gray-200 px-3 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:[c.jsx(xn,{size:18}),c.jsx(Ye,{id:"documentation"})]}),c.jsx("button",{"data-tooltip-id":"copy","data-tooltip-content":"Copy",onClick:async()=>{await navigator.clipboard.writeText(y),m(!0),setTimeout(()=>{m(!1)},2e3)},className:"font-base flex items-center cursor-pointer lg:font-lg font-ubuntu normal-transition py-2 justify-self-end rounded border border-gray-200 px-2 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:d?c.jsx(c.Fragment,{children:c.jsx(Wt,{size:18})}):c.jsxs(c.Fragment,{children:[c.jsx(Mt,{size:18}),c.jsx(Ye,{id:"copy"})]})}),c.jsx("button",{onClick:r,className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition items-end justify-self-end rounded border border-gray-200 p-2 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:o==="dark"?c.jsx(qt,{size:18}):c.jsx(Bt,{size:18})})]})]}),c.jsxs("div",{className:"flex items-center pr-10",children:[c.jsx("button",{className:"pr-2 py-2 rounded-l-md dark:text-primary-400 ",children:It(t==null?void 0:t.method,t==null?void 0:t.method)}),c.jsxs("div",{className:"flex items-center w-full",children:[c.jsx("input",{type:"text",className:"px-2 py-2 flex-1 bg-transparent bg-primary-400 dark:bg-transparent dark:text-primary-400 w-full ",disabled:!0,value:y}),c.jsx("button",{onClick:()=>pe(),className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1.5 items-end justify-self-end rounded border border-gray-200 px-3 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:"Send"})]})]}),c.jsx("div",{className:"flex items-center mt-5",children:C.map(w=>{var M,B,F,V,H;return c.jsxs("button",{onClick:()=>h(w.name),className:"dark:text-primary-400 mr-4 flex items-center mx-2 py-1 border-b-2 rounded-bl-sm rounded-br-sm "+(i===w.name?" border-[#c16630] ":" border-transparent"),children:[c.jsx("span",{className:"tex-base mr-1",children:w.label}),w.name==="headers"&&((M=t==null?void 0:t.headers)==null?void 0:M.isRequired)&&c.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500"}),w.name==="body"&&((B=t==null?void 0:t.body)==null?void 0:B.isRequired)&&c.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500"}),w.name==="query"&&((F=t==null?void 0:t.query)==null?void 0:F.isRequired)&&c.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500"}),w.name==="pathVariables"&&((H=(V=t==null?void 0:t.url)==null?void 0:V.variables)==null?void 0:H.isRequired)&&c.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500"})]},w.name)})}),c.jsx("div",{className:"mt-3",children:c.jsx(f.Suspense,{fallback:c.jsx(Be,{}),children:c.jsx(ht,{jsonData:N,readOnly:!1,height:"20vh",setData:oe})})}),c.jsx("div",{className:"mt-3",children:c.jsxs("div",{className:"mt-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"mb-3 flex items-center",children:[c.jsx("h1",{className:"font-ubuntu text-base font-medium dark:text-white lg:text-lg",children:"Response"}),c.jsx("button",{onClick:()=>Z({}),className:"font-base cursor-pointer lg:font-lg font-ubuntu normal-transition py-1 items-end justify-self-end rounded border border-gray-200 px-3 bg-blue-600 font-medium hover:shadow-lg active:scale-95 dark:border-blue-600 text-white ml-2",children:c.jsx(Qt,{})})]}),Object.keys(_).length?c.jsxs("div",{className:"flex items-center",children:[c.jsxs("p",{className:"font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",children:["Status:",c.jsxs("span",{className:(fe=_.status)!=null&&fe.toString().startsWith("2",0)?"ml-1 font-medium text-green-600 dark:font-normal dark:text-green-400":"ml-1 font-medium text-red-500 dark:font-normal",children:[_.status," ",_.statusText]})]}),c.jsxs("p",{className:"font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",children:["Time:",c.jsx("span",{className:"ml-1 font-normal text-green-600 dark:font-normal dark:text-green-400",children:_.time})]}),c.jsxs("p",{className:"font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",children:["Size:",c.jsx("span",{className:"ml-1 font-normal text-green-600 dark:font-normal dark:text-green-400",children:ce(j)})]})]}):null]}),T?c.jsx(Be,{}):c.jsx(f.Suspense,{fallback:c.jsx(Be,{}),children:c.jsx(ht,{jsonData:j,readOnly:!0,height:"55vh"})})]})})]}),c.jsx(f.Suspense,{fallback:c.jsx(Be,{}),children:c.jsx(Jt,{isOpen:l,onClose:()=>u(!l),children:c.jsxs("div",{className:"dark:bg-dark-primary-50 p-5 w-[60vw] bg-white",children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsx("h1",{className:"text-lg font-medium dark:text-white",children:"API Documentation"}),c.jsx("button",{onClick:()=>u(!l),className:"p-2 rounded-full dark:hover:bg-dark-primary-40 dark:text-white",children:c.jsx(ot,{})})]}),c.jsx("div",{className:"mt-4",children:c.jsx(Ut,{value:t==null?void 0:t.description,preview:"preview",commands:[],previewOptions:{rehypePlugins:[[Gt]]},height:650,extraCommands:[]})})]})})})]})}export{Ln as default};