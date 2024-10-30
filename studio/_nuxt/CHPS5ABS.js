import{_ as h,T as y,S as x,a as _}from"./C3_Vx-fF.js";import{r as v,o as T,J as k,K as n,S as P,v as a,z as d,A as B,t as u,x as e,B as m,L as O}from"./CYwcJP0S.js";import{P as S}from"./Cdr9tgl2.js";const M={class:"portfolio-item"},C={class:"banner"},L={class:"banner3d-1"},V={class:"banner3d-1-front tex tracking-in-expand"},N={class:"arrowtitle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",width:"38",height:"38",fill:"none",style:{transform:"rotate(-90deg)",scale:"100%"}},q={class:"banner"},z={class:"banner3d-3"},E={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},K={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},j={style:{padding:"177.78% 0 0 0",position:"relative"}},$={__name:"moth",setup(A){const s=v(!1),r=v(!0);let p=null,o=null,c;const g=v(null);T(()=>{k(()=>{o=new S(g.value),o.on("play",()=>{s.value=!0,i()}),o.on("pause",()=>{s.value=!1,r.value=!0}),o.on("ended",()=>{o.setCurrentTime(0)}),n.registerPlugin(P),n.set(".banner3d-1",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-2",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-3",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-4",{perspectiveOrigin:"left -100vh"}),n.to(".banner3d-1",{scrollTrigger:{trigger:".banner3d-1",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-2",{scrollTrigger:{trigger:".banner3d-2",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-3",{scrollTrigger:{trigger:".banner3d-3",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center",ease:"none"}),n.to(".banner3d-4",{scrollTrigger:{trigger:".banner3d-4",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),window.addEventListener("scroll",()=>{const l=document.querySelector("iframe");l!==null&&(l.classList.add("disable-events"),window.clearTimeout(c),c=setTimeout(()=>{l.classList.remove("disable-events")},100))},{passive:!0})})});function b(){s.value?o.pause():(o.play(),i())}function f(){r.value=!0,clearTimeout(p),s.value&&(p=setTimeout(()=>{i()},400))}function i(){s.value&&(p=setTimeout(()=>{r.value=!1},400))}return(l,t)=>{const w=h;return u(),a("main",null,[d(w,null,{default:B(()=>[d(y),e("div",M,[e("section",C,[e("div",L,[e("div",V,[t[1]||(t[1]=m(" Moth")),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=m("Low season in Thailand ")),(u(),a("svg",N,t[0]||(t[0]=[e("path",{stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m2 2 34 34m0 0V6.046M36 36H6.046"},null,-1)])))])])]),t[8]||(t[8]=e("section",{class:"mini"},null,-1)),t[9]||(t[9]=e("section",{class:"banner"},[e("div",{class:"banner3d-2"},[e("div",{class:"banner3d-2-front tex"}," Personal work ")])],-1)),e("section",q,[e("div",z,[e("div",{class:"banner3d-3-front tex video-container",onMousemove:f,onMouseleave:i},[e("div",{class:O(["custom-play-button",{playing:s.value,visible:r.value}]),onClick:b},[s.value?(u(),a("svg",K,t[5]||(t[5]=[e("rect",{x:"5",y:"3",width:"4",height:"18"},null,-1),e("rect",{x:"15",y:"3",width:"4",height:"18"},null,-1)]))):(u(),a("svg",E,t[4]||(t[4]=[e("polygon",{points:"5,3 19,12 5,21"},null,-1)])))],2),t[6]||(t[6]=e("div",{class:"corner top-left"},null,-1)),t[7]||(t[7]=e("div",{class:"corner bottom-right"},null,-1)),e("div",j,[e("iframe",{ref_key:"vimeoPlayer",ref:g,src:"https://player.vimeo.com/video/1011700857?quality=1080p&?badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"fontain"},null,512)])],32)])]),t[10]||(t[10]=e("section",{class:"banner"},[e("div",{class:"banner3d-4"},[e("div",{class:"banner3d-4-front tex"}," Koh Phangan, Thailand ")])],-1))]),d(x),d(_)]),_:1})])}}};export{$ as default};
