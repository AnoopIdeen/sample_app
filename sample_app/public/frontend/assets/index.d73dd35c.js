var g=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var u=(s,e,o)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,p=(s,e)=>{for(var o in e||(e={}))E.call(e,o)&&u(s,o,e[o]);if(l)for(var o of l(e))L.call(e,o)&&u(s,o,e[o]);return s},m=(s,e)=>v(s,y(e));import{c as P,a as k,_ as b,b as $,d as A,r as O,o as S,e as T,P as R,s as j,f as q,T as w,i as C,g as I,h as V,j as H,k as N,l as x,m as B,n as D}from"./vendor.da15b7c6.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};W();const F="modulepreload",f={},G="/assets/sample_app/frontend/",a=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${G}${n}`,n in f)return;f[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":F,t||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),t)return new Promise((_,h)=>{i.addEventListener("load",_),i.addEventListener("error",h)})})).then(()=>e())},K=[{path:"/",name:"Home",component:()=>a(()=>import("./Home.2c95d541.js"),["assets/Home.2c95d541.js","assets/Home.aa52f74f.css","assets/vendor.da15b7c6.js","assets/vendor.1f7d581e.css"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>a(()=>import("./Login.0bbf2e5e.js"),["assets/Login.0bbf2e5e.js","assets/Login.85c49755.css","assets/vendor.da15b7c6.js","assets/vendor.1f7d581e.css"])},{path:"/sample_1",name:"Sample_1",component:()=>a(()=>import("./Sample_1.e69f146b.js"),["assets/Sample_1.e69f146b.js","assets/vendor.da15b7c6.js","assets/vendor.1f7d581e.css"])}];let d=P({history:k("/sample_app"),routes:K});d.beforeEach((s,e,o)=>{const n=!s.path.startsWith("/login");let t=!1;document.cookie.split("; ").map(r=>r.split("=")).forEach(([r,i])=>{r==="user_id"&&i!="Guest"&&(t=!0)}),console.log(n,document.cookie),n&&!t?o({name:"Login"}):!n&&t?o({name:"Home"}):o()});const M={};function z(s,e){const o=O("router-view");return S(),$("div",null,[A(o)])}var J=b(M,[["render",z]]);const Q=9006;let c=T(J);c.use(R);j("resourceFetcher",s=>D(m(p({},s),{onError(e){e.messages&&e.messages[0]&&console.log({title:"Error",variant:"error",message:e.messages[0]})}})));c.use(d);c.use(q);c.use(w);c.provide("$socket",C({port:Q}));c.component("Card",I);c.component("InputText",V);c.component("Password",H);c.component("Button",N);c.component("Message",x);c.component("Toast",B);c.mount("#app");