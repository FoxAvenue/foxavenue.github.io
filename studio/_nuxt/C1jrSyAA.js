import{b as x,l as C,i as M,_ as j,T as E,S as R,a as A}from"./DOvuYwIw.js";import{K as n,S as _,o as y,t as c,v as d,z as i,x as t,M as o,N as $,O as f,_ as L,B as h,P as b,r as N,g as P,A as p,Q as w,R as S,a as T}from"./DFZKWXLV.js";const H={class:"about-section"},z={class:"container"},I={class:"text text-container"},q={__name:"About",setup(v){return n.registerPlugin(_),y(()=>{n.fromTo(".text-container .aboutp",{opacity:0,rotateZ:5},{opacity:1,rotateZ:0,duration:1,stagger:.04,ease:"power3.out",scrollTrigger:{trigger:".text-container",start:"top 90%",end:"bottom top",scrub:1,id:"text-container"}}),window.addEventListener("load",()=>{_.refresh()})}),(a,e)=>(c(),d("section",H,[i(x,{text:"ABOUT"}),t("div",z,[t("div",I,[e[2]||(e[2]=o('<p class="aboutp">Hi! We are Fox Avenue - </p><p class="aboutp">creative studio specializing</p><p class="aboutp">in the creation of commercial</p><p class="aboutp"> advertising graphics.</p><p class="aboutp">Feel free to contact us </p><p class="aboutp">with any creative request</p><p class="aboutp">for your advertising campaign.</p>',7)),t("button",{onClick:e[0]||(e[0]=$(r=>f(C).scrollTo("#contact"),["prevent"])),type:"button",class:"btn btn_about"},e[1]||(e[1]=[t("span",null,"GET IN TOUCH",-1)]))])])]))}},O={},V={class:"hero-section"};function B(v,a){return c(),d("section",V,a[0]||(a[0]=[t("div",{class:"video-container"},[t("iframe",{id:"vimeo-player",src:"https://player.vimeo.com/video/738220744?background=1&autopause=0&muted=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""})],-1),t("div",{class:"container"},[t("div",{class:"text-content"},[t("h2",{id:"creative-text"},[h(" WE CREATE"),t("br"),h(" EMOTIONS."),t("span",null," NOT"),t("br"),h(" PICTURES. ")])])],-1)]))}const U=L(O,[["render",B]]),G=""+new URL("Moth_Narrow.B8vwgYQR.png",import.meta.url).href,W=""+new URL("Fontain_Narrow.Cwv0pro-.png",import.meta.url).href,F=""+new URL("Tetris_Narrow.DDYiGPmv.png",import.meta.url).href,D=b("/images/classroom.png"),J=b("/images/sabali.png"),Q=b("/images/tranzaqt.png"),K={class:"work-section",id:"work"},Y={class:""},Z={class:"projects"},X={class:"project"},tt={class:"project"},st={class:"project"},at={__name:"Work",setup(v){n.registerPlugin(_);let a=N(!1);const e=window.matchMedia("(max-width: 800px)");function r(l){l.matches?a.value=!1:a.value=!0}e.addEventListener("change",r),r(e);function u(l){window.open(`${l}`,"_blank")}function k(){a.value=!a.value,a.value?document.querySelector(".load-more p").innerHTML="SEE LESS":document.querySelector(".load-more p").innerHTML="SEE MORE",n.to(".projects",{height:"auto",duration:2})}return y(()=>{n.set(".projects .project",{y:"50%",zIndex:1,opacity:0}),n.to(".projects .project",{y:"0%",stagger:{amount:1},opacity:1,scrollTrigger:{trigger:".projects .project",start:"top bottom-=100",end:"bottom top+=300",scrub:!0,id:"works"}})}),(l,s)=>{const m=P("router-link");return c(),d("section",K,[i(x,{text:"WORK"}),t("div",Y,[t("div",Z,[t("div",X,[i(m,{to:"/moth"},{default:p(()=>s[4]||(s[4]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"The Moth")],-1)])),_:1}),s[5]||(s[5]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="moth" href="/studio/moth"><img alt="Moth" src="'+G+'"></a></div>',2))]),t("div",tt,[i(m,{to:"/fontain"},{default:p(()=>s[6]||(s[6]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"Fontain")],-1)])),_:1}),s[7]||(s[7]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/fontain"><img alt="Moth" src="'+W+'"></a></div>',2))]),t("div",st,[i(m,{to:"/tetris"},{default:p(()=>s[8]||(s[8]=[t("div",{class:"container"},[t("div",{class:"dot"}),t("h3",null,"Tetris")],-1)])),_:1}),s[9]||(s[9]=o('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/studio/tetris"><img alt="Moth" src="'+F+'"></a></div>',2))]),t("div",{onClick:s[0]||(s[0]=g=>u("https://vr-classroom.netlify.app")),class:"project"},s[10]||(s[10]=[o('<div class="container"><div class="dot"></div><h3>VR Classroom</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span><span style="--i:3;">GSAP</span></div></div><div class="image"><a name="project-vrClassroom" target="_blank" href="https://vr-classroom.netlify.app"><img alt="Project VR Classroom" src="'+D+'"></a></div>',3)])),w(t("div",{onClick:s[1]||(s[1]=g=>u("https://sabalihealth.netlify.app")),class:"project more"},s[11]||(s[11]=[o('<div class="container"><div class="dot"></div><h3>Sabali Health</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div style="background-color:white;" class="image"><a name="project-sabali" target="_blank" href="https://sabalihealth.netlify.app"><img alt="Project Sabali Health" src="'+J+'"></a></div>',3)]),512),[[S,f(a)]]),w(t("div",{onClick:s[2]||(s[2]=g=>u("https://tranzaqt.netlify.app")),class:"project more"},s[12]||(s[12]=[o('<div class="container"><div class="dot"></div><h3>Tranzaqt</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div class="image"><a name="project-tranzaqt" target="_blank" href="https://tranzaqt.netlify.app"><img alt="Project Tranzaqt" src="'+Q+'"></a></div>',3)]),512),[[S,f(a)]]),t("div",{onClick:s[3]||(s[3]=g=>k()),class:"load-more"},s[13]||(s[13]=[t("p",null,"SEE MORE",-1),t("div",{class:"plus"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[t("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1)]))])])])}}},ot={__name:"index",setup(v){return y(()=>{M("vimeo-player");const a=T().$gsap,e=T().$ScrollTrigger;a.to(".hero-section",{opacity:1,duration:1}),e.create({trigger:".hero-section",start:"top center",end:"bottom center",onEnter:()=>{a.to(".hero-section h1",{x:100,duration:1})}}),e.refresh()}),(a,e)=>{const r=j;return c(),d("main",null,[e[0]||(e[0]=t("div",{class:"loader-cont",id:"loader-cont"},[t("div",{class:"loader_bg"},[t("div",{class:"loader"})])],-1)),i(r,null,{default:p(()=>[i(E),i(U),i(q),i(at),i(R),i(A)]),_:1})])}}};export{ot as default};
