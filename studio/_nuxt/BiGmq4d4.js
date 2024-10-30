import{b,l as k,i as R,c as E,_ as j,T as $,S as A,a as P}from"./RNFWDF2u.js";import{K as n,S as w,o as u,t as m,v as g,z as o,x as s,M as d,N as O,O as T,r as h,_ as q,P as H,Q as x,g as N,A as _,R as C,T as S,a as M}from"./i_2vza7i.js";const z={class:"about-section"},I={class:"container"},F={class:"text text-container"},U={__name:"About",setup(f){return n.registerPlugin(w),u(()=>{n.fromTo(".text-container .aboutp",{opacity:0,rotateZ:5},{opacity:1,rotateZ:0,duration:1,stagger:.04,ease:"power3.out",scrollTrigger:{trigger:".text-container",start:"top 90%",end:"bottom top",scrub:1,id:"text-container"}}),window.addEventListener("load",()=>{w.refresh()})}),(a,e)=>(m(),g("section",z,[o(b,{text:"ABOUT"}),s("div",I,[s("div",F,[e[2]||(e[2]=d('<p class="aboutp">Hi! We are Fox Avenue - </p><p class="aboutp">creative studio specializing</p><p class="aboutp">in the creation of commercial</p><p class="aboutp"> advertising graphics.</p><p class="aboutp">Feel free to contact us </p><p class="aboutp">with any creative request</p><p class="aboutp">for your advertising campaign.</p>',7)),s("button",{onClick:e[0]||(e[0]=O(i=>T(k).scrollTo("#contact"),["prevent"])),type:"button",class:"btn btn_about"},e[1]||(e[1]=[s("span",null,"GET IN TOUCH",-1)]))])])]))}},V="data:image/svg+xml,%3csvg%20width='38'%20height='41'%20viewBox='0%200%2038%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.9234%200.549805L17.0752%200.549805L17.0752%2028.6121C16.4938%2027.8678%2015.8553%2027.1629%2015.1641%2026.5037C13.293%2024.7192%2011.0717%2023.3037%208.62701%2022.338C6.18232%2021.3723%203.56213%2020.8752%200.916016%2020.8752L0.916016%2024.6458C9.8331%2024.6458%2017.0618%2031.5613%2017.0618%2040.0919H20.9368C20.9368%2031.5613%2028.1655%2024.6458%2037.0826%2024.6458V20.8752C34.4365%2020.8752%2031.8163%2021.3723%2029.3716%2022.338C26.9269%2023.3037%2024.7056%2024.7192%2022.8345%2026.5037C22.1433%2027.1629%2021.5048%2027.8678%2020.9234%2028.6121L20.9234%200.549805Z'%20fill='%23131313'/%3e%3c/svg%3e",B={class:"hero-section"},D={__name:"Hero",setup(f){const a=h(0);h(["classroom.png","zenpad.png","tranzaqt.png","portfolio.png"]);function e(){a.value<3?a.value++:a.value=0,setTimeout(()=>e(),1300)}return u(()=>{const i=document.querySelector(".roundText p");i.innerHTML=i.innerText.split("").map((c,l)=>`<span style="transform:rotate(${l*8}deg)">${c}</span>`).join(""),e(),n.timeline({yoyo:!0,repeat:-1}).fromTo(".arrowDown",{y:-10},{y:10,duration:1,yoyoEase:!0})}),(i,r)=>(m(),g("section",B,r[0]||(r[0]=[d('<div class="container"><div class="text-content"><div class="t1"></div><h2 id="creative-text"> WE CREATE<br> EMOTIONS.<span> NOT</span><br> PICTURES. </h2></div><div class="scroller"><div class="bg"><div class="circle"><img alt="arrow down" class="arrowDown" src="'+V+'"><div class="roundText" id="text"><p>SCROLL DOWN FOR MORE . SCROLL DOWN FOR MORE .</p></div></div></div></div></div>',1)])))}},G={class:"preloader-section"},W={__name:"Preloader",setup(f){return h(["Generating Nodes","Touching Up Images","Sipping Coffee","Finalzing Processes"]),u(()=>{let a=R(document.querySelectorAll("img")),e=document.querySelector("#counter"),i=document.querySelector("#loading-bar"),r=document.querySelectorAll("img").length,c=0,l=0;var p=n.timeline();a.on("progress",(y,L)=>{t()});function t(y,L){c++,l=c/r,n.to(p,{progress:l,duration:.1})}var p=n.timeline({paused:!1,onUpdate:v,onComplete:E});p.to(i,{width:"100%",duration:.1,ease:"easeInOut"});function v(){let y=(p.progress()*100).toFixed();e.innerHTML=y+"%"}}),(a,e)=>(m(),g(H,null,[s("section",G,[o(b,{text:"Loading"}),e[0]||(e[0]=d('<div class="container" data-v-fa713958><div class="loader-container" data-v-fa713958><div class="text" data-v-fa713958><p data-v-fa713958>Cooking...</p></div><div class="loader" data-v-fa713958><div id="loading-bar" data-v-fa713958></div></div><span id="counter" data-v-fa713958>0%</span></div></div>',1))]),e[1]||(e[1]=s("section",null,null,-1)),e[2]||(e[2]=s("section",null,null,-1))],64))}},J=q(W,[["__scopeId","data-v-fa713958"]]),Q=""+new URL("Moth_Narrow.B8vwgYQR.png",import.meta.url).href,Z=""+new URL("Fontain_Narrow.Cwv0pro-.png",import.meta.url).href,K=""+new URL("Tetris_Narrow.DDYiGPmv.png",import.meta.url).href,Y=x("/images/classroom.png"),X=x("/images/sabali.png"),tt=x("/images/tranzaqt.png"),st={class:"work-section",id:"work"},et={class:""},at={class:"projects"},ot={class:"project"},it={class:"project"},nt={class:"project"},rt={__name:"Work",setup(f){n.registerPlugin(w);let a=h(!1);const e=window.matchMedia("(max-width: 800px)");function i(l){l.matches?a.value=!1:a.value=!0}e.addEventListener("change",i),i(e);function r(l){window.open(`${l}`,"_blank")}function c(){a.value=!a.value,a.value?document.querySelector(".load-more p").innerHTML="SEE LESS":document.querySelector(".load-more p").innerHTML="SEE MORE",n.to(".projects",{height:"auto",duration:2})}return u(()=>{n.set(".projects .project",{y:"50%",zIndex:1,opacity:0}),n.to(".projects .project",{y:"0%",stagger:{amount:1},opacity:1,scrollTrigger:{trigger:".projects .project",start:"top bottom-=100",end:"bottom top+=300",scrub:!0,id:"works"}})}),(l,t)=>{const p=N("router-link");return m(),g("section",st,[o(b,{text:"WORK"}),s("div",et,[s("div",at,[s("div",ot,[o(p,{to:"/moth"},{default:_(()=>t[4]||(t[4]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"The Moth")],-1)])),_:1}),t[5]||(t[5]=d('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="moth" href="/moth"><img alt="Moth" src="'+Q+'"></a></div>',2))]),s("div",it,[o(p,{to:"/fontain"},{default:_(()=>t[6]||(t[6]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"Fontain")],-1)])),_:1}),t[7]||(t[7]=d('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/fontain"><img alt="Moth" src="'+Z+'"></a></div>',2))]),s("div",nt,[o(p,{to:"/tetris"},{default:_(()=>t[8]||(t[8]=[s("div",{class:"container"},[s("div",{class:"dot"}),s("h3",null,"Tetris")],-1)])),_:1}),t[9]||(t[9]=d('<div class="container"><div class="skills"><span style="--i:0;">Mixed reality</span><span style="--i:1;">CGI</span><span style="--i:2;">Motion graphics</span><span style="--i:3;">AR</span></div></div><div class="image"><a name="" href="/tetris"><img alt="Moth" src="'+K+'"></a></div>',2))]),s("div",{onClick:t[0]||(t[0]=v=>r("https://vr-classroom.netlify.app")),class:"project"},t[10]||(t[10]=[d('<div class="container"><div class="dot"></div><h3>VR Classroom</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span><span style="--i:3;">GSAP</span></div></div><div class="image"><a name="project-vrClassroom" target="_blank" href="https://vr-classroom.netlify.app"><img alt="Project VR Classroom" src="'+Y+'"></a></div>',3)])),C(s("div",{onClick:t[1]||(t[1]=v=>r("https://sabalihealth.netlify.app")),class:"project more"},t[11]||(t[11]=[d('<div class="container"><div class="dot"></div><h3>Sabali Health</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div style="background-color:white;" class="image"><a name="project-sabali" target="_blank" href="https://sabalihealth.netlify.app"><img alt="Project Sabali Health" src="'+X+'"></a></div>',3)]),512),[[S,T(a)]]),C(s("div",{onClick:t[2]||(t[2]=v=>r("https://tranzaqt.netlify.app")),class:"project more"},t[12]||(t[12]=[d('<div class="container"><div class="dot"></div><h3>Tranzaqt</h3></div><div class="container"><div class="skills"><span style="--i:0;">HTML</span><span style="--i:1;">CSS</span><span style="--i:2;">JAVASCRIPT</span></div></div><div class="image"><a name="project-tranzaqt" target="_blank" href="https://tranzaqt.netlify.app"><img alt="Project Tranzaqt" src="'+tt+'"></a></div>',3)]),512),[[S,T(a)]]),s("div",{onClick:t[3]||(t[3]=v=>c()),class:"load-more"},t[13]||(t[13]=[s("p",null,"SEE MORE",-1),s("div",{class:"plus"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[s("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1)]))])])])}}},pt={__name:"index",setup(f){return u(()=>{const a=M().$gsap,e=M().$ScrollTrigger;a.to(".hero-section",{opacity:1,duration:1}),e.create({trigger:".hero-section",start:"top center",end:"bottom center",onEnter:()=>{a.to(".hero-section h1",{x:100,duration:1})}}),e.refresh()}),(a,e)=>{const i=j;return m(),g("main",null,[o(i,null,{default:_(()=>[o(J),o($),o(D),o(U),o(rt),o(A),o(P)]),_:1})])}}};export{pt as default};
