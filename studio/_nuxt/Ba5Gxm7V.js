import{_ as f,r as p,T as g,U as m,o as N,C as l,I as T,t as b,v as k,x as s,N as h,z as o,g as S,A as v,B as u,W as x}from"./6gqU-gtR.js";import{S as C,C as _,H as y}from"./qQmxkD6g.js";const E={class:"mobile-nav-section"},$={class:"mobile-nav"},A={class:"footer"},R={class:"footer-item"},w={class:"footer-item"},L={__name:"MobileNav",props:{active:Boolean},setup(d){const e=d;p(!1),g();const i=m();console.log("Текущий маршрут:",i.path);function n(){document.querySelector("body").classList.toggle("light")}return N(()=>{const a=l.timeline({paused:!0});T(e,()=>{e.active?a.play():a.reverse()}),l.set(".mobile-nav-section",{left:"100%"}),a.to(".mobile-nav-section",{left:"0%",duration:.3}).add(()=>{l.from(".mobile-nav .controls .nav-links .nav-link",{x:"70%",opacity:0,stagger:{amount:.2},duration:.3}),l.from(".mobile-nav .footer, .mobile-nav .header-buttons",{y:"70%",opacity:0,stagger:{amount:.2},duration:.3})},"-=0.3")}),(a,t)=>(b(),k("section",E,[s("div",$,[t[3]||(t[3]=h('<div class="controls" data-v-88df1bf4><div class="nav-links" data-v-88df1bf4><a href="" class="nav-link" data-v-88df1bf4> WORK</a><a href="" class="nav-link" data-v-88df1bf4> SERVICES</a><a href="" class="nav-link" data-v-88df1bf4> CONTACT</a></div></div>',1)),s("div",A,[s("div",R,[t[1]||(t[1]=s("p",null,"THEME",-1)),o(C,{onClick:t[0]||(t[0]=r=>n()),class:"switch"})]),s("div",w,[t[2]||(t[2]=s("p",null,"LANGUAGE",-1)),o(_)])])])]))}},V=f(L,[["__scopeId","data-v-88df1bf4"]]),I={class:"header container"},O={class:"controls"},B={class:"nav-links"},M={class:"acont"},W={class:"acont"},H={__name:"Topbar",setup(d){const e=p(!1);g(),m();function i(){document.body.classList.toggle("light")}function n(){e.value=!e.value,document.querySelector("header").classList.toggle("fixed")}return(a,t)=>{const r=S("router-link");return b(),k(x,null,[s("header",null,[t[7]||(t[7]=s("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1)),t[8]||(t[8]=s("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1)),t[9]||(t[9]=s("link",{href:"https://fonts.googleapis.com/css2?family=Micro+5&display=swap",rel:"stylesheet"},null,-1)),s("div",I,[t[6]||(t[6]=s("div",{class:"logo micro-5-regular"},[s("a",{href:"/studio",style:{all:"unset",cursor:"pointer"}},[s("span",null,"moono labs")])],-1)),s("div",O,[s("div",B,[s("span",M,[o(r,{to:"/works","data-text":"[WORK]",class:"nav-link desktop-a"},{default:v(()=>t[3]||(t[3]=[u(" [WORK] ")])),_:1})]),t[5]||(t[5]=s("span",{class:"acont"},[s("a",{"data-text":"[SERVICES]",href:"",class:"nav-link desktop-a"}," [SERVICES] ")],-1)),s("span",W,[o(r,{to:"/contact","data-text":"[CONTACT]",class:"nav-link desktop-a"},{default:v(()=>t[4]||(t[4]=[u(" [CONTACT] ")])),_:1})])]),s("div",{onClick:t[0]||(t[0]=c=>i()),class:"switch"},[o(C)]),o(_),s("div",{onClick:t[1]||(t[1]=c=>n()),class:"hamburger"},[o(y,{active:e.value},null,8,["active"])])])])]),o(V,{onToggleActive:t[2]||(t[2]=c=>n()),active:e.value},null,8,["active"])],64)}}},G=f(H,[["__scopeId","data-v-cdc56bf0"]]);export{G as T};
