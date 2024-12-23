import{i as C,_ as k}from"./CBuvMfGR.js";import{C as n,S as f,o as _,t as c,v as d,N as o,_ as M,x as s,B as h,O as y,r as j,g as E,z as i,A as p,P as b,Q as w,R as S,a as T}from"./6gqU-gtR.js";import{T as R,_ as A}from"./4XNwaqRM.js";import{S as L}from"./ChI6ETSD.js";import"./qQmxkD6g.js";import"./uCaivKen.js";const $={class:"about-section"},N={__name:"About",setup(v){return n.registerPlugin(f),_(()=>{n.fromTo(".text-container .aboutp",{opacity:0,rotateZ:5},{opacity:1,rotateZ:0,duration:1,stagger:.04,ease:"power3.out",scrollTrigger:{trigger:".text-container",start:"top 90%",end:"bottom top",scrub:1,id:"text-container"}}),window.addEventListener("load",()=>{f.refresh()})}),(a,e)=>(c(),d("section",$,e[0]||(e[0]=[o('<div class="container"><div class="text text-container"><p class="aboutp">Hi! We are Moono Labs - </p><p class="aboutp">creative studio specializing</p><p class="aboutp">in the creation of captivating</p><p class="aboutp"> advertising graphics for brands.</p><p class="aboutp">We specialize in beauty, welness and fashion brands. </p><p class="aboutp">Our mission is to create inclusive, innovative and impactfull</p><p class="aboutp">campaigns for clients that share our values.</p><button type="button" class="btn btn_about"><span>GET IN TOUCH</span></button></div></div>',1)])))}},P={},z={class:"hero-section"};function H(v,a){return c(),d("section",z,a[0]||(a[0]=[s("div",{class:"video-container"},[s("iframe",{id:"vimeo-player",src:"https://player.vimeo.com/video/738220744?background=1&autopause=0&muted=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""})],-1),s("div",{class:"container"},[s("div",{class:"text-content"},[s("h2",{id:"creative-text"},[h(" WE CREATE"),s("br"),h(" EMOTIONS."),s("span",null," NOT"),s("br"),h(" PICTURES. ")])])],-1)]))}const I=M(P,[["render",H]]),V=""+new URL("Moth_Narrow.B8vwgYQR.png",import.meta.url).href,q=""+new URL("Fontain_Narrow.Cwv0pro-.png",import.meta.url).href,O=""+new URL("Tetris_Narrow.DDYiGPmv.png",import.meta.url).href,B=y("/images/classroom.png"),G=y("/images/sabali.png"),U=y("/images/tranzaqt.png"),W={class:"work-section",id:"work"},D={class:""},J={class:"projects"},Q={class:"project"},F={class:"project"},Y={class:"project"},Z={__name:"Work",setup(v){n.registerPlugin(f);let a=j(!1);const e=window.matchMedia("(max-width: 800px)");function r(l){l.matches?a.value=!1:a.value=!0}e.addEventListener("change",r),r(e);function u(l){window.open(`${l}`,"_blank")}function x(){a.value=!a.value,a.value?document.querySelector(".load-more p").innerHTML="SEE LESS":document.querySelector(".load-more p").innerHTML="SEE MORE",n.to(".projects",{height:"auto",duration:2})}return _(()=>{n.set(".projects .project",{y:"50%",zIndex:1,opacity:0}),n.to(".projects .project",{y:"0%",stagger:{amount:1},opacity:1,scrollTrigger:{trigger:".projects .project",start:"top bottom-=100",end:"bottom top+=300",scrub:!0,id:"works"}})}),(l,t)=>{const m=E("router-link");return c(),d("section",W,[s("div",D,[s("div",J,[s("div",Q,[i(m,{to:"/moth"},{default:p(()=>t[4]||(t[4]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"The Moth")],-1)])),_:1}),t[5]||(t[5]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="moth" href="/studio/moth"><img alt="Moth" src="'+V+'"></a></div>',2))]),s("div",F,[i(m,{to:"/fontain"},{default:p(()=>t[6]||(t[6]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"Fontain")],-1)])),_:1}),t[7]||(t[7]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/fontain"><img alt="Moth" src="'+q+'"></a></div>',2))]),s("div",Y,[i(m,{to:"/tetris"},{default:p(()=>t[8]||(t[8]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"Tetris")],-1)])),_:1}),t[9]||(t[9]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/tetris"><img alt="Moth" src="'+O+'"></a></div>',2))]),s("div",{onClick:t[0]||(t[0]=g=>u("https://vr-classroom.netlify.app")),class:"project"},t[10]||(t[10]=[o('<div class="container"><div class="dot"></div><h3>VR Classroom</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span><span style="--i:3;">GSAP</span></div></div><div class="image"><a name="project-vrClassroom" target="_blank" href="https://vr-classroom.netlify.app"><img alt="Project VR Classroom" src="'+B+'"></a></div>',3)])),b(s("div",{onClick:t[1]||(t[1]=g=>u("https://sabalihealth.netlify.app")),class:"project more"},t[11]||(t[11]=[o('<div class="container"><div class="dot"></div><h3>Sabali Health</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div style="background-color:white;" class="image"><a name="project-sabali" target="_blank" href="https://sabalihealth.netlify.app"><img alt="Project Sabali Health" src="'+G+'"></a></div>',3)]),512),[[w,S(a)]]),b(s("div",{onClick:t[2]||(t[2]=g=>u("https://tranzaqt.netlify.app")),class:"project more"},t[12]||(t[12]=[o('<div class="container"><div class="dot"></div><h3>Tranzaqt</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div class="image"><a name="project-tranzaqt" target="_blank" href="https://tranzaqt.netlify.app"><img alt="Project Tranzaqt" src="'+U+'"></a></div>',3)]),512),[[w,S(a)]]),s("div",{onClick:t[3]||(t[3]=g=>x()),class:"load-more"},t[13]||(t[13]=[s("p",null,"SEE MORE",-1),s("div",{class:"plus"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[s("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1)]))])])])}}},is={__name:"index",setup(v){return _(()=>{C("vimeo-player");const a=T().$gsap,e=T().$ScrollTrigger;a.to(".hero-section",{opacity:1,duration:1}),e.create({trigger:".hero-section",start:"top center",end:"bottom center",onEnter:()=>{a.to(".hero-section h1",{x:100,duration:1})}}),e.refresh()}),(a,e)=>{const r=k;return c(),d("main",null,[e[0]||(e[0]=s("div",{class:"loader-cont",id:"loader-cont"},[s("div",{class:"loader_bg"},[s("div",{class:"loader"})])],-1)),i(r,null,{default:p(()=>[i(R),i(I),i(N),i(Z),i(L),i(A)]),_:1})])}}};export{is as default};
