import{l as c}from"./scheduler.446313d3.js";function d(n){const t=n-1;return t*t*t+1}function U(n,{delay:t=0,duration:a=400,easing:e=d,x:i=0,y:f=0,opacity:u=0}={}){const o=getComputedStyle(n),s=+o.opacity,l=o.transform==="none"?"":o.transform,y=s*(1-u),[m,p]=c(i),[$,x]=c(f);return{delay:t,duration:a,easing:e,css:(r,_)=>`
			transform: ${l} translate(${(1-r)*m}${p}, ${(1-r)*$}${x});
			opacity: ${s-y*_}`}}export{U as f};
