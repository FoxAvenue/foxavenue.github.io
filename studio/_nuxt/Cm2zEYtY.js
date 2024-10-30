import{b as T,l as E,i as P,c as R,_ as L,T as $,S as q,a as I}from"./C3_Vx-fF.js";import{K as i,S as b,o as _,t as v,v as u,z as o,x as t,M as r,N,O as S,_ as M,B as y,r as j,P as H,Q as w,g as z,A as f,R as x,T as C,a as k}from"./CYwcJP0S.js";const O={class:"about-section"},U={class:"container"},V={class:"text text-container"},B={__name:"About",setup(m){return i.registerPlugin(b),_(()=>{i.fromTo(".text-container .aboutp",{opacity:0,rotateZ:5},{opacity:1,rotateZ:0,duration:1,stagger:.04,ease:"power3.out",scrollTrigger:{trigger:".text-container",start:"top 90%",end:"bottom top",scrub:1,id:"text-container"}}),window.addEventListener("load",()=>{b.refresh()})}),(a,e)=>(v(),u("section",O,[o(T,{text:"ABOUT"}),t("div",U,[t("div",V,[e[2]||(e[2]=r('<p class="aboutp">Hi! We are Fox Avenue - </p><p class="aboutp">creative studio specializing</p><p class="aboutp">in the creation of commercial</p><p class="aboutp"> advertising graphics.</p><p class="aboutp">Feel free to contact us </p><p class="aboutp">with any creative request</p><p class="aboutp">for your advertising campaign.</p>',7)),t("button",{onClick:e[0]||(e[0]=N(l=>S(E).scrollTo("#contact"),["prevent"])),type:"button",class:"btn btn_about"},e[1]||(e[1]=[t("span",null,"GET IN TOUCH",-1)]))])])]))}},F={},G={class:"hero-section"};function W(m,a){return v(),u("section",G,a[0]||(a[0]=[t("div",{class:"video-container"},[t("iframe",{id:"vimeo-player",src:"https://player.vimeo.com/video/738220744?background=1&autopause=0&muted=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""})],-1),t("div",{class:"container"},[t("div",{class:"text-content"},[t("h2",{id:"creative-text"},[y(" WE CREATE"),t("br"),y(" EMOTIONS."),t("span",null," NOT"),t("br"),y(" PICTURES. ")])])],-1)]))}const D=M(F,[["render",W]]),J={class:"preloader-section"},Q={__name:"Preloader",setup(m){return j(["Generating Nodes","Touching Up Images","Sipping Coffee","Finalzing Processes"]),_(()=>{let a=P(document.querySelectorAll("img")),e=document.querySelector("#counter"),l=document.querySelector("#loading-bar"),p=document.querySelectorAll("img").length,g=0,d=0;var n=i.timeline();a.on("progress",(h,A)=>{s()});function s(h,A){g++,d=g/p,i.to(n,{progress:d,duration:.1})}var n=i.timeline({paused:!1,onUpdate:c,onComplete:R});n.to(l,{width:"100%",duration:.1,ease:"easeInOut"});function c(){let h=(n.progress()*100).toFixed();e.innerHTML=h+"%"}}),(a,e)=>(v(),u(H,null,[t("section",J,[o(T,{text:"Loading"}),e[0]||(e[0]=r('<div class="container" data-v-fa713958><div class="loader-container" data-v-fa713958><div class="text" data-v-fa713958><p data-v-fa713958>Cooking...</p></div><div class="loader" data-v-fa713958><div id="loading-bar" data-v-fa713958></div></div><span id="counter" data-v-fa713958>0%</span></div></div>',1))]),e[1]||(e[1]=t("section",null,null,-1)),e[2]||(e[2]=t("section",null,null,-1))],64))}},K=M(Q,[["__scopeId","data-v-fa713958"]]),Y=""+new URL("Moth_Narrow.B8vwgYQR.png",import.meta.url).href,Z=""+new URL("Fontain_Narrow.Cwv0pro-.png",import.meta.url).href,X=""+new URL("Tetris_Narrow.DDYiGPmv.png",import.meta.url).href,tt=w("/images/classroom.png"),st=w("/images/sabali.png"),et=w("/images/tranzaqt.png"),at={class:"work-section",id:"work"},ot={class:""},it={class:"projects"},nt={class:"project"},rt={class:"project"},lt={class:"project"},dt={__name:"Work",setup(m){i.registerPlugin(b);let a=j(!1);const e=window.matchMedia("(max-width: 800px)");function l(d){d.matches?a.value=!1:a.value=!0}e.addEventListener("change",l),l(e);function p(d){window.open(`${d}`,"_blank")}function g(){a.value=!a.value,a.value?document.querySelector(".load-more p").innerHTML="SEE LESS":document.querySelector(".load-more p").innerHTML="SEE MORE",i.to(".projects",{height:"auto",duration:2})}return _(()=>{i.set(".projects .project",{y:"50%",zIndex:1,opacity:0}),i.to(".projects .project",{y:"0%",stagger:{amount:1},opacity:1,scrollTrigger:{trigger:".projects .project",start:"top bottom-=100",end:"bottom top+=300",scrub:!0,id:"works"}})}),(d,s)=>{const n=z("router-link");return v(),u("section",at,[o(T,{text:"WORK"}),t("div",ot,[t("div",it,[t("div",nt,[o(n,{to:"/moth"},{default:f(()=>s[4]||(s[4]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"The Moth")],-1)])),_:1}),s[5]||(s[5]=r('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="moth" href="/studio/moth"><img alt="Moth" src="'+Y+'"></a></div>',2))]),t("div",rt,[o(n,{to:"/fontain"},{default:f(()=>s[6]||(s[6]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"Fontain")],-1)])),_:1}),s[7]||(s[7]=r('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/fontain"><img alt="Moth" src="'+Z+'"></a></div>',2))]),t("div",lt,[o(n,{to:"/tetris"},{default:f(()=>s[8]||(s[8]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"Tetris")],-1)])),_:1}),s[9]||(s[9]=r('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/tetris"><img alt="Moth" src="'+X+'"></a></div>',2))]),t("div",{onClick:s[0]||(s[0]=c=>p("https://vr-classroom.netlify.app")),class:"project"},s[10]||(s[10]=[r('<div class="container"><div class="dot"></div><h3>VR Classroom</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span><span style="--i:3;">GSAP</span></div></div><div class="image"><a name="project-vrClassroom" target="_blank" href="https://vr-classroom.netlify.app"><img alt="Project VR Classroom" src="'+tt+'"></a></div>',3)])),x(t("div",{onClick:s[1]||(s[1]=c=>p("https://sabalihealth.netlify.app")),class:"project more"},s[11]||(s[11]=[r('<div class="container"><div class="dot"></div><h3>Sabali Health</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div style="background-color:white;" class="image"><a name="project-sabali" target="_blank" href="https://sabalihealth.netlify.app"><img alt="Project Sabali Health" src="'+st+'"></a></div>',3)]),512),[[C,S(a)]]),x(t("div",{onClick:s[2]||(s[2]=c=>p("https://tranzaqt.netlify.app")),class:"project more"},s[12]||(s[12]=[r('<div class="container"><div class="dot"></div><h3>Tranzaqt</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div class="image"><a name="project-tranzaqt" target="_blank" href="https://tranzaqt.netlify.app"><img alt="Project Tranzaqt" src="'+et+'"></a></div>',3)]),512),[[C,S(a)]]),t("div",{onClick:s[3]||(s[3]=c=>g()),class:"load-more"},s[13]||(s[13]=[t("p",null,"SEE MORE",-1),t("div",{class:"plus"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[t("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1)]))])])])}}},vt={__name:"index",setup(m){return _(()=>{const a=k().$gsap,e=k().$ScrollTrigger;a.to(".hero-section",{opacity:1,duration:1}),e.create({trigger:".hero-section",start:"top center",end:"bottom center",onEnter:()=>{a.to(".hero-section h1",{x:100,duration:1})}}),e.refresh()}),(a,e)=>{const l=L;return v(),u("main",null,[o(l,null,{default:f(()=>[o(K),o($),o(D),o(B),o(dt),o(q),o(I)]),_:1})])}}};export{vt as default};
