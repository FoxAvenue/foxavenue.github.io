import{i as y,_ as h}from"./CBuvMfGR.js";import{_ as x,r as v,o as _,E as T,C as n,S as k,v as l,x as t,z as a,A as P,t as d,B as m,F as B}from"./6gqU-gtR.js";import{P as O}from"./Cdr9tgl2.js";import{T as S}from"./Ba5Gxm7V.js";import{S as C}from"./ChI6ETSD.js";import{_ as M}from"./DRRFEhK4.js";import"./qQmxkD6g.js";import"./uCaivKen.js";const L={class:"portfolio-item"},N={class:"banner"},V={class:"banner3d-1"},E={class:"banner3d-1-front tex tracking-in-expand"},q={class:"arrowtitle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",width:"38",height:"38",fill:"none",style:{transform:"rotate(-90deg)",scale:"100%"}},z={class:"banner"},F={class:"banner3d-3"},j={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},A={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},H={style:{padding:"56.25% 0 0 0",position:"relative"}},I={__name:"tetris",setup(K){const o=v(!1),r=v(!0);let u=null,s=null,c;const g=v(null);_(()=>{T(()=>{s=new O(g.value),s.on("play",()=>{o.value=!0,i()}),s.on("pause",()=>{o.value=!1,r.value=!0}),s.on("ended",()=>{s.setCurrentTime(0)}),n.registerPlugin(k),n.set(".banner3d-1",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-2",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-3",{perspectiveOrigin:"center -100vh"}),n.set(".banner3d-4",{perspectiveOrigin:"left -100vh"}),n.to(".banner3d-1",{scrollTrigger:{trigger:".banner3d-1",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-2",{scrollTrigger:{trigger:".banner3d-2",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),n.to(".banner3d-3",{scrollTrigger:{trigger:".banner3d-3",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center",ease:"none"}),n.to(".banner3d-4",{scrollTrigger:{trigger:".banner3d-4",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),window.addEventListener("scroll",()=>{const p=document.querySelector("iframe");p.classList.add("disable-events"),window.clearTimeout(c),c=setTimeout(()=>{p.classList.remove("disable-events")},100)},{passive:!0})}),y("vimeo-player")});function b(){o.value?s.pause():(s.play(),i())}function f(){r.value=!0,clearTimeout(u),o.value&&(u=setTimeout(()=>{i()},400))}function i(){o.value&&(u=setTimeout(()=>{r.value=!1},400))}return(p,e)=>{const w=h;return d(),l("main",null,[e[13]||(e[13]=t("div",{class:"loader-cont",id:"loader-cont"},[t("div",{class:"loader_bg"},[t("div",{class:"loader"})])],-1)),a(w,null,{default:P(()=>[a(S),t("div",L,[t("section",N,[t("div",V,[t("div",E,[e[1]||(e[1]=m(" Fontain")),e[2]||(e[2]=t("br",null,null,-1)),e[3]||(e[3]=m("No man ever steps into")),e[4]||(e[4]=t("br",null,null,-1)),e[5]||(e[5]=m(" the same river twice ")),(d(),l("svg",q,e[0]||(e[0]=[t("path",{stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m2 2 34 34m0 0V6.046M36 36H6.046"},null,-1)])))])])]),e[10]||(e[10]=t("section",{class:"mini"},null,-1)),e[11]||(e[11]=t("section",{class:"banner"},[t("div",{class:"banner3d-2"},[t("div",{class:"banner3d-2-front tex"}," Personal work ")])],-1)),t("section",z,[t("div",F,[t("div",{class:"banner3d-3-front tex video-container",onMousemove:f,onMouseleave:i},[t("div",{class:B(["custom-play-button",{playing:o.value,visible:r.value}]),onClick:b},[o.value?(d(),l("svg",A,e[7]||(e[7]=[t("rect",{x:"5",y:"3",width:"4",height:"18"},null,-1),t("rect",{x:"15",y:"3",width:"4",height:"18"},null,-1)]))):(d(),l("svg",j,e[6]||(e[6]=[t("polygon",{points:"5,3 19,12 5,21"},null,-1)])))],2),e[8]||(e[8]=t("div",{class:"corner top-left"},null,-1)),e[9]||(e[9]=t("div",{class:"corner bottom-right"},null,-1)),t("div",H,[t("iframe",{ref_key:"vimeoPlayer",ref:g,src:"https://player.vimeo.com/video/1010923038?quality=1080p&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"fontain"},null,512)])],32)])]),e[12]||(e[12]=t("section",{class:"banner"},[t("div",{class:"banner3d-4"},[t("div",{class:"banner3d-4-front tex"}," Koh Phangan, Thailand ")])],-1))]),a(C),a(M)]),_:1})])}}},X=x(I,[["__scopeId","data-v-906c9613"]]);export{X as default};