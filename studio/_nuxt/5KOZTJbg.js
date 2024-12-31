import{_ as h}from"./I0E0Cqkd.js";import{r as v,o as y,M as x,J as n,S as _,v as a,x as e,z as d,A as T,t as u,B as g,N as k}from"./D9FWiKGL.js";import{P}from"./Cdr9tgl2.js";import{T as B}from"./B9_rEpNW.js";import{S as M}from"./Cttm32W8.js";import{_ as O}from"./DIKld35w.js";import{i as S}from"./Djop-bkG.js";const C={class:"portfolio-item"},L={class:"banner"},N={class:"banner3d-1"},V={class:"banner3d-1-front tex tracking-in-expand"},q={class:"arrowtitle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",width:"38",height:"38",fill:"none",style:{transform:"rotate(-90deg)",scale:"100%"}},z={class:"banner"},E={class:"banner3d-3"},j={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},A={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},H={style:{padding:"177.78% 0 0 0",position:"relative"}},Q={__name:"moth",setup(J){const o=v(!1),r=v(!0);let p=null,s=null,c;const m=v(null);y(()=>{x(()=>{s=new P(m.value),s.on("play",()=>{o.value=!0,i()}),s.on("pause",()=>{o.value=!1,r.value=!0}),s.on("ended",()=>{s.setCurrentTime(0)}),n.registerPlugin(_),n.set(".banner3d-1",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-2",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-3",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-4",{perspectiveOrigin:"left -100vh"}),n.to(".banner3d-1",{scrollTrigger:{trigger:".banner3d-1",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-2",{scrollTrigger:{trigger:".banner3d-2",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-3",{scrollTrigger:{trigger:".banner3d-3",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center",ease:"none"}),n.to(".banner3d-4",{scrollTrigger:{trigger:".banner3d-4",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),window.addEventListener("scroll",()=>{const l=document.querySelector("iframe");l!==null&&(l.classList.add("disable-events"),window.clearTimeout(c),c=setTimeout(()=>{l.classList.remove("disable-events")},100))},{passive:!0})}),S("vimeo-player")});function b(){o.value?s.pause():(s.play(),i())}function f(){r.value=!0,clearTimeout(p),o.value&&(p=setTimeout(()=>{i()},400))}function i(){o.value&&(p=setTimeout(()=>{r.value=!1},400))}return(l,t)=>{const w=h;return u(),a("main",null,[t[11]||(t[11]=e("div",{class:"loader-cont",id:"loader-cont"},[e("div",{class:"loader_bg"},[e("div",{class:"loader"})])],-1)),d(w,null,{default:T(()=>[d(B),e("div",C,[e("section",L,[e("div",N,[e("div",V,[t[1]||(t[1]=g(" Moth")),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=g("Low season in Thailand ")),(u(),a("svg",q,t[0]||(t[0]=[e("path",{stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m2 2 34 34m0 0V6.046M36 36H6.046"},null,-1)])))])])]),t[8]||(t[8]=e("section",{class:"mini"},null,-1)),t[9]||(t[9]=e("section",{class:"banner"},[e("div",{class:"banner3d-2"},[e("div",{class:"banner3d-2-front tex"}," Personal work ")])],-1)),e("section",z,[e("div",E,[e("div",{class:"banner3d-3-front tex video-container",onMousemove:f,onMouseleave:i},[e("div",{class:k(["custom-play-button",{playing:o.value,visible:r.value}]),onClick:b},[o.value?(u(),a("svg",A,t[5]||(t[5]=[e("rect",{x:"5",y:"3",width:"4",height:"18"},null,-1),e("rect",{x:"15",y:"3",width:"4",height:"18"},null,-1)]))):(u(),a("svg",j,t[4]||(t[4]=[e("polygon",{points:"5,3 19,12 5,21"},null,-1)])))],2),t[6]||(t[6]=e("div",{class:"corner top-left"},null,-1)),t[7]||(t[7]=e("div",{class:"corner bottom-right"},null,-1)),e("div",H,[e("iframe",{ref_key:"vimeoPlayer",ref:m,src:"https://player.vimeo.com/video/1011700857?quality=1080p&?badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"fontain"},null,512)])],32)])]),t[10]||(t[10]=e("section",{class:"banner"},[e("div",{class:"banner3d-4"},[e("div",{class:"banner3d-4-front tex"}," Koh Phangan, Thailand ")])],-1))]),d(M),d(O)]),_:1})])}}};export{Q as default};
