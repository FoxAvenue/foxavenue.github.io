import{_ as g,r as m,N as f,P as k,J as l,E as y,o as N,t as _,v as b,x as s,K as $,z as e,g as w,A as c,B as u,Q as C}from"./DTDXB2KP.js";import{S as h,C as x,H as S}from"./DX0k2etO.js";const L={class:"mobile-nav-section"},T={class:"mobile-nav"},B={class:"footer"},M={class:"footer-item"},V={class:"footer-item"},A={__name:"MobileNav_ru",props:{active:Boolean},setup(v){const a=v;m(!1),f(),k();function i(){document.querySelector("body").classList.toggle("light")}const n=l.timeline({paused:!0});return y(a,()=>{a.active?n.play():n.reverse()}),N(()=>{l.set(".mobile-nav-section",{left:"100%"}),n.to(".mobile-nav-section",{left:"0%",duration:.3}).add(()=>{l.from(".mobile-nav .controls .nav-links .nav-link",{x:"70%",opacity:0,stagger:{amount:.2},duration:.3}),l.from(".mobile-nav .footer, .mobile-nav .header-buttons",{y:"70%",opacity:0,stagger:{amount:.2},duration:.3})},"-=0.3")}),(r,o)=>(_(),b("section",L,[s("div",T,[o[3]||(o[3]=$('<div class="controls" data-v-16842591><div class="nav-links" data-v-16842591><a href="/ru/works" class="nav-link" data-v-16842591> РАБОТЫ</a><a href="/ru/about" class="nav-link" data-v-16842591> О НАС</a><a href="/ru/contact" class="nav-link" data-v-16842591> КОНТАКТЫ</a></div></div>',1)),s("div",B,[s("div",M,[o[1]||(o[1]=s("p",null,"ТЕМА",-1)),e(h,{onClick:o[0]||(o[0]=t=>i()),class:"switch"})]),s("div",V,[o[2]||(o[2]=s("p",null,"ЯЗЫК",-1)),e(x)])])])]))}},q=g(A,[["__scopeId","data-v-16842591"]]),E={class:"header container"},H={class:"controls"},I={class:"nav-links"},R={class:"acont"},z={class:"acont"},F={class:"acont"},J={__name:"Topbar_ru",setup(v){const a=m(!1);f();const i=k();function n(){document.body.classList.toggle("light")}function r(){a.value=!a.value,document.querySelector("header").classList.toggle("fixed")}return console.log("Текущий маршрут:",i.path),(o,t)=>{const d=w("router-link");return _(),b(C,null,[s("header",null,[t[7]||(t[7]=s("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1)),t[8]||(t[8]=s("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1)),t[9]||(t[9]=s("link",{href:"https://fonts.googleapis.com/css2?family=Micro+5&display=swap",rel:"stylesheet"},null,-1)),s("div",E,[t[6]||(t[6]=s("div",{class:"logo micro-5-regular"},[s("a",{href:"/ru/",style:{all:"unset",cursor:"pointer"}},[s("span",null,"moono labs")])],-1)),s("div",H,[s("div",I,[s("span",R,[e(d,{to:"/ru/works","data-text":"[РАБОТЫ]",class:"nav-link desktop-a"},{default:c(()=>t[3]||(t[3]=[u(" [РАБОТЫ] ")])),_:1})]),s("span",z,[e(d,{to:"/ru/about","data-text":"[О НАС]",href:"",class:"nav-link desktop-a"},{default:c(()=>t[4]||(t[4]=[u(" [О НАС] ")])),_:1})]),s("span",F,[e(d,{to:"/ru/contact","data-text":"[КОНТАКТЫ]",class:"nav-link desktop-a"},{default:c(()=>t[5]||(t[5]=[u(" [КОНТАКТЫ] ")])),_:1})])]),s("div",{onClick:t[0]||(t[0]=p=>n()),class:"switch"},[e(h)]),e(x),s("div",{onClick:t[1]||(t[1]=p=>r()),class:"hamburger"},[e(S,{active:a.value},null,8,["active"])])])])]),e(q,{onToggleActive:t[2]||(t[2]=p=>r()),active:a.value},null,8,["active"])],64)}}},Q=g(J,[["__scopeId","data-v-e6346e5a"]]);export{Q as T};
