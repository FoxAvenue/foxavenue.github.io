import{J as o,S as a,r as s,o as c,t as g,v as n,R as i}from"./psi8oYc-.js";const p={__name:"Gallery",setup(y){o.registerPlugin(a);const e=s(null);return c(()=>{e.value.querySelectorAll(".gallery-row").forEach(r=>{const t=r.querySelectorAll("img");o.fromTo(t,{opacity:0,y:50},{opacity:1,y:0,stagger:.2,duration:.6,scrollTrigger:{trigger:r,start:"top bottom"}})})}),(l,r)=>(g(),n("div",{class:"gallery",ref_key:"gallery",ref:e},[i(l.$slots,"default")],512))}};export{p as _};
