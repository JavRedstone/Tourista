import{s as X,d as _,n as b}from"../chunks/scheduler.446313d3.js";import{S as Y,i as j,d as T,v as A,s as y,j as u,C as D,g as h,c as P,k as v,l as N,A as w,m as i,a as S,B as d}from"../chunks/index.c6fa1565.js";const f="C:/Users/darre/Documents/GitHub/HTN2023/src/routes/+page.svelte";function $(p){let t,e,n,s,l="Tourista",C,o,k="The best way to travel",x,a,R="Explore Now";const E={c:function(){t=y(),e=u("main"),n=u("div"),s=u("h1"),s.textContent=l,C=y(),o=u("h2"),o.textContent=k,x=y(),a=u("a"),a.textContent=R,this.h()},l:function(r){D("svelte-lpnj92",document.head).forEach(h),t=P(r),e=v(r,"MAIN",{class:!0});var c=N(e);n=v(c,"DIV",{class:!0});var H=N(n);s=v(H,"H1",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-i7gvr1"&&(s.textContent=l),H.forEach(h),C=P(c),o=v(c,"H2",{class:!0,"data-svelte-h":!0}),w(o)!=="svelte-1vmbsm5"&&(o.textContent=k),x=P(c),a=v(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),w(a)!=="svelte-6n06uz"&&(a.textContent=R),c.forEach(h),this.h()},h:function(){document.title="Tourista",i(s,"class","s-y_bCXRrkrYfP"),_(s,f,9,4,118),i(n,"class","title"),_(n,f,8,2,94),i(o,"class","s-y_bCXRrkrYfP"),_(o,f,11,2,147),i(a,"href","/explore"),i(a,"class","s-y_bCXRrkrYfP"),_(a,f,12,2,181),i(e,"class","s-y_bCXRrkrYfP"),_(e,f,7,0,85)},m:function(r,g){S(r,t,g),S(r,e,g),d(e,n),d(n,s),d(e,C),d(e,o),d(e,x),d(e,a)},p:b,i:b,o:b,d:function(r){r&&(h(t),h(e))}};return T("SvelteRegisterBlock",{block:E,id:$.name,type:"component",source:"",ctx:p}),E}function B(p,t){let{$$slots:e={},$$scope:n}=t;A("Page",e,[]);const s=[];return Object.keys(t).forEach(l=>{!~s.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)}),[]}class q extends Y{constructor(t){super(t),j(this,t,B,$,X,{}),T("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:$.name})}}export{q as component};