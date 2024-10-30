import{_ as h,T as y,S as x,a as T}from"./BaXrNoAT.js";import{r as v,o as _,J as k,K as n,S as P,v as l,z as a,A as B,t as d,x as t,B as g,L as O}from"./CGP7egHt.js";import{P as S}from"./Cdr9tgl2.js";const M={class:"portfolio-item"},C={class:"banner"},L={class:"banner3d-1"},N={class:"banner3d-1-front tex tracking-in-expand"},V={class:"arrowtitle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",width:"38",height:"38",fill:"none",style:{transform:"rotate(-90deg)",scale:"100%"}},z={class:"banner"},E={class:"banner3d-3"},K={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},j={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},q={style:{padding:"177.78% 0 0 0",position:"relative"}},W={__name:"fontain",setup(A){const s=v(!1),r=v(!0);let u=null,o=null,c;const m=v(null);_(()=>{k(()=>{o=new S(m.value),o.on("play",()=>{s.value=!0,i()}),o.on("pause",()=>{s.value=!1,r.value=!0}),o.on("ended",()=>{o.setCurrentTime(0)}),n.registerPlugin(P),n.set(".banner3d-1",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-2",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-3",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-4",{perspectiveOrigin:"left -100vh"}),n.to(".banner3d-1",{scrollTrigger:{trigger:".banner3d-1",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-2",{scrollTrigger:{trigger:".banner3d-2",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-3",{scrollTrigger:{trigger:".banner3d-3",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center",ease:"none"}),n.to(".banner3d-4",{scrollTrigger:{trigger:".banner3d-4",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),window.addEventListener("scroll",()=>{const p=document.querySelector("iframe");p.classList.add("disable-events"),window.clearTimeout(c),c=setTimeout(()=>{p.classList.remove("disable-events")},100)},{passive:!0})})});function b(){s.value?o.pause():(o.play(),i())}function f(){r.value=!0,clearTimeout(u),s.value&&(u=setTimeout(()=>{i()},400))}function i(){s.value&&(u=setTimeout(()=>{r.value=!1},400))}return(p,e)=>{const w=h;return d(),l("main",null,[a(w,null,{default:B(()=>[a(y),t("div",M,[t("section",C,[t("div",L,[t("div",N,[e[1]||(e[1]=g(" Fontain")),e[2]||(e[2]=t("br",null,null,-1)),e[3]||(e[3]=g("No man ever steps into")),e[4]||(e[4]=t("br",null,null,-1)),e[5]||(e[5]=g(" the same river twice ")),(d(),l("svg",V,e[0]||(e[0]=[t("path",{stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m2 2 34 34m0 0V6.046M36 36H6.046"},null,-1)])))])])]),e[10]||(e[10]=t("section",{class:"mini"},null,-1)),e[11]||(e[11]=t("section",{class:"banner"},[t("div",{class:"banner3d-2"},[t("div",{class:"banner3d-2-front tex"}," Personal work ")])],-1)),t("section",z,[t("div",E,[t("div",{class:"banner3d-3-front tex video-container",onMousemove:f,onMouseleave:i},[t("div",{class:O(["custom-play-button",{playing:s.value,visible:r.value}]),onClick:b},[s.value?(d(),l("svg",j,e[7]||(e[7]=[t("rect",{x:"5",y:"3",width:"4",height:"18"},null,-1),t("rect",{x:"15",y:"3",width:"4",height:"18"},null,-1)]))):(d(),l("svg",K,e[6]||(e[6]=[t("polygon",{points:"5,3 19,12 5,21"},null,-1)])))],2),e[8]||(e[8]=t("div",{class:"corner top-left"},null,-1)),e[9]||(e[9]=t("div",{class:"corner bottom-right"},null,-1)),t("div",q,[t("iframe",{ref_key:"vimeoPlayer",ref:m,src:"https://player.vimeo.com/video/1010923246?badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"fontain"},null,512)])],32)])]),e[12]||(e[12]=t("section",{class:"banner"},[t("div",{class:"banner3d-4"},[t("div",{class:"banner3d-4-front tex"}," Koh Phangan, Thailand ")])],-1))]),a(x),a(T)]),_:1})])}}};export{W as default};
