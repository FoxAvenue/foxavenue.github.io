import{i as T,_ as x,S}from"./Bk27lSh1.js";import{J as s,S as f,r as p,o as h,t as d,v as c,K as O,L as E,x as e,z as l,A as m,B as a,M as L}from"./BSfIB-vw.js";import{P as M}from"./Cdr9tgl2.js";import{T as C,_ as P}from"./wlX0t6AR.js";const I={__name:"Gallery",setup(w){s.registerPlugin(f);const o=p(null);return h(()=>{o.value.querySelectorAll(".gallery-row").forEach(n=>{const i=n.querySelectorAll("img");s.fromTo(i,{opacity:0,y:50},{opacity:1,y:0,stagger:.2,duration:.6,scrollTrigger:{trigger:n,start:"top bottom"}})})}),(r,n)=>(d(),c("div",{class:"gallery",ref_key:"gallery",ref:o},[O(r.$slots,"default")],512))}},R={class:"portfolio-item"},q={class:"banner"},B={class:"banner3d-1"},D={class:"banner3d-1-front tex tracking-in-expand"},N={class:"arrowtitle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",width:"38",height:"38",fill:"none",style:{transform:"rotate(-90deg)",scale:"100%"}},H={class:"banner main-info-mediacont"},V={class:"banner3d-3"},j={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},F={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"60",height:"60",fill:"rgba(255, 255, 255, 0.7)"},G={style:{padding:"177.78% 0 0 0",position:"relative"}},X={__name:"fontain",setup(w){const o=p(!1),r=p(!0);let n=null,i=null,v;const b=p(null);h(()=>{E(()=>{i=new M(b.value),i.on("play",()=>{o.value=!0,g()}),i.on("pause",()=>{o.value=!1,r.value=!0}),i.on("ended",()=>{i.setCurrentTime(0)}),s.registerPlugin(f),s.set(".banner3d-1",{perspectiveOrigin:"center -100vh"}),s.set(".banner3d-2",{perspectiveOrigin:"center -100vh"}),s.set(".banner3d-3",{perspectiveOrigin:"center -100vh"}),s.set(".banner3d-4",{perspectiveOrigin:"left -100vh"}),s.to(".banner3d-1",{scrollTrigger:{trigger:".banner3d-1",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),s.to(".banner3d-2",{scrollTrigger:{trigger:".banner3d-2",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),s.to(".banner3d-3",{scrollTrigger:{trigger:".banner3d-3",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center",ease:"none"}),s.to(".banner3d-4",{scrollTrigger:{trigger:".banner3d-4",scrub:!0,start:"top bottom",end:"bottom top"},perspectiveOrigin:"center 100vh",ease:"none"}),window.addEventListener("scroll",()=>{const u=document.querySelector("iframe");u.classList.add("disable-events"),window.clearTimeout(v),v=setTimeout(()=>{u.classList.remove("disable-events")},100)},{passive:!0})}),T("vimeo-player")});function y(){o.value?i.pause():(i.play(),g())}function _(){r.value=!0,clearTimeout(n),o.value&&(n=setTimeout(()=>{g()},400))}function g(){o.value&&(n=setTimeout(()=>{r.value=!1},400))}return(u,t)=>{const k=x;return d(),c("main",null,[t[15]||(t[15]=e("div",{class:"loader-cont",id:"loader-cont"},[e("div",{class:"loader_bg"},[e("div",{class:"loader"})])],-1)),l(k,null,{default:m(()=>[l(C),e("div",R,[e("section",q,[e("div",B,[e("div",D,[t[1]||(t[1]=a(" Fontain")),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=a("No man ever steps into")),t[4]||(t[4]=e("br",null,null,-1)),t[5]||(t[5]=a(" the same river twice ")),(d(),c("svg",N,t[0]||(t[0]=[e("path",{stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m2 2 34 34m0 0V6.046M36 36H6.046"},null,-1)])))])])]),t[12]||(t[12]=e("section",{class:"mini"},null,-1)),t[13]||(t[13]=e("section",{class:"banner"},[e("div",{class:"banner3d-2"},[e("div",{class:"banner3d-2-front tex"}," VFX, creative direction ")])],-1)),e("section",H,[e("div",V,[e("div",{class:"banner3d-3-front tex video-container",onMousemove:_,onMouseleave:g},[e("div",{class:L(["custom-play-button",{playing:o.value,visible:r.value}]),onClick:y},[o.value?(d(),c("svg",F,t[7]||(t[7]=[e("rect",{x:"5",y:"3",width:"4",height:"18"},null,-1),e("rect",{x:"15",y:"3",width:"4",height:"18"},null,-1)]))):(d(),c("svg",j,t[6]||(t[6]=[e("polygon",{points:"5,3 19,12 5,21"},null,-1)])))],2),t[8]||(t[8]=e("div",{class:"corner top-left"},null,-1)),t[9]||(t[9]=e("div",{class:"corner bottom-right"},null,-1)),e("div",G,[e("iframe",{ref_key:"vimeoPlayer",ref:b,src:"https://player.vimeo.com/video/1010923246?quality=1080p&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"fontain"},null,512)])],32)]),t[10]||(t[10]=e("div",{class:"main-info"},[e("div",{class:"info-block"},[e("div",{class:"block-title"},"ROLES:"),e("div",{class:"block-details"},[e("strong",null,"CLIENT:"),a("Red Hat"),e("br"),e("br"),e("strong",null,"DIRECTOR OF CONTENT:"),a("Mack Garrison"),e("br"),e("strong",null,"EXECUTIVE PRODUCER:"),a("Mack Garrison"),e("br"),e("strong",null,"PRODUCER:"),a("Mack Garrison"),e("br")])]),e("div",{class:"info-block"},[e("div",{class:"block-title"},"DETAILS:"),e("div",{class:"block-details"}," Red Hat needed assistance expanding on their “Keep your options open” campaign with a series of topic-based ad packages. These monochromatic spaces and stylized lighting elements add focus and emotion while the 3d elements bridge the digital and physical world to help convey more nuanced themes. It was a fun opportunity for dash to help evolve the creative expression of the Red Hat brand that extends into a myriad of channels and topics. ")])],-1))]),t[14]||(t[14]=e("section",{class:"banner"},[e("div",{class:"banner3d-4"},[e("div",{class:"banner3d-4-front tex"}," Koh Phangan, Thailand ")])],-1)),l(I,null,{default:m(()=>t[11]||(t[11]=[e("div",{class:"gallery-row"},[e("img",{src:"https://freight.cargo.site/w/800/q/75/i/ffd52752f9af8a8c5b4968c51585fed72e2aa7cd4cf58a7484c110ec7ca03351/XK_Studio_biotherm_01.jpg",alt:"Image 1"}),e("img",{src:"https://freight.cargo.site/w/2500/q/75/i/eabe50023cde1641148b98d6d31da3e430c16699d0be92cce81fc1e7d1af3de6/Mini_02_Design_F_SH03_Logo_Side_DH_v005_00055.png",alt:"Image 2"})],-1),e("div",{class:"gallery-row"},[e("img",{src:"https://freight.cargo.site/w/700/q/75/i/abb4984cd7d204100da7376a0011c98a0a8e106486038bcfd37123f50528a36d/LMD_Composition_Lookdev_028_NL_c.jpg",alt:"Image 3"})],-1),e("div",{class:"gallery-row"},[e("img",{src:"https://freight.cargo.site/w/1500/q/75/i/7619e4a0e73a99b6497f54ea51b7a0b5a73b36333ba8c33e73679c043bc49445/LMD_Grapefruit_Flower_08_backlit_SH_01.jpg",alt:"Image 4"}),e("img",{src:"https://freight.cargo.site/w/2000/q/75/i/ad41f13d5545766f26b62aabbe1d70ed89f037a74069024f1741f3e834eafb27/01.jpg",alt:"Image 5"})],-1)])),_:1})]),l(S),l(P)]),_:1})])}}};export{X as default};
