import{_ as a,u as p,o as _,b as l,p as e,q as i,t as r,v as u,d as h,F as v}from"./vendor.da15b7c6.js";const g=o=>(i("data-v-48326406"),o=o(),r(),o),m={class:"topbar"},w=g(()=>e("div",{class:"logo"},null,-1)),b={setup(o){const s=p(),c=()=>{u("logout").then(t=>{console.log(t),localStorage.setItem("token_user",null),s.push("/login")}).catch(t=>{console.log(t)}),console.log("Logged out")};return(t,d)=>(_(),l("div",m,[w,e("button",{onClick:c},"Logout")]))}};var f=a(b,[["__scopeId","data-v-48326406"]]);const n=o=>(i("data-v-2961b3b4"),o=o(),r(),o),x=n(()=>e("h2",null,"Menu Card 1",-1)),I=n(()=>e("p",null,"Menu item 1 description.",-1)),k=[x,I],y=n(()=>e("h2",null,"Menu Card 2",-1)),B=n(()=>e("p",null,"Menu item 2 description.",-1)),C=[y,B],S={setup(o){var s=window.location.origin;const c=()=>{window.location.href=s+"/app/vehicles/view/list"},t=()=>{window.location.href=s+"/app/vehicles/new-vehicles-1"};return(d,M)=>(_(),l(v,null,[h(f),e("div",{class:"container"},[e("div",{class:"menu-card",onClick:c,style:{"margin-right":"20px"}},k),e("div",{class:"menu-card",onClick:t},C)])],64))}};var F=a(S,[["__scopeId","data-v-2961b3b4"]]);export{F as default};
