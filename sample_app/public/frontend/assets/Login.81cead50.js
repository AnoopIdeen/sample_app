import{_ as x,v as b,w as p,b as y,d as o,x as c,u as V,r as a,o as I,n,y as C,z as T,p as B,q as U,t as L}from"./vendor.30472ecf.js";const _=s=>(B("data-v-f7be0b28"),s=s(),U(),s),k={class:"login-container"},K=T(" Login "),N={class:"flex flex-column gap-2"},S=_(()=>n("label",{for:"username"},"Username",-1)),P={class:"flex flex-column gap-2"},j=_(()=>n("label",{for:"password"},"Password",-1)),q={setup(s){const m=b(),l=p(""),d=p(""),f=V();var v=window.location.origin;const i=()=>{L("login",{usr:l.value,pwd:d.value}).then(e=>{console.log(e),e.full_name=="Administrator"?window.location.href=v+"/app/build":f.push("/")}).catch(e=>{m.add({severity:"info",summary:"info",detail:"Invalid Credentials",life:3e3}),console.log(e)})};return(e,t)=>{const u=a("InputText"),w=a("Button"),g=a("Card"),h=a("Toast");return I(),y("div",k,[o(g,{style:{width:"30em",padding:"20px"}},{title:c(()=>[K]),content:c(()=>[n("div",N,[S,o(u,{id:"username",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"Username"},null,8,["modelValue"])]),n("div",P,[j,o(u,{id:"password",type:"password",modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=r=>d.value=r),placeholder:"Password",onKeyup:C(i,["enter"])},null,8,["modelValue","onKeyup"])])]),footer:c(()=>[o(w,{label:"Login",onClick:i})]),_:1}),o(h)])}}};var A=x(q,[["__scopeId","data-v-f7be0b28"]]);export{A as default};