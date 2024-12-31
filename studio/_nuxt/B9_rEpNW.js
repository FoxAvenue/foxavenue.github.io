import{_ as d,t as c,v as u,x as e,N as p,R as m,r as h,O as _,T as C,o as $,J as v,E as x,K as T,z as a,g as L,A as g,B as k,Q as M}from"./D9FWiKGL.js";const N="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%2019C15.3261%2019%2016.5979%2018.4732%2017.5355%2017.5355C18.4732%2016.5979%2019%2015.3261%2019%2014C19%2012.6739%2018.4732%2011.4021%2017.5355%2010.4645C16.5979%209.52678%2015.3261%209%2014%209C12.6739%209%2011.4021%209.52678%2010.4645%2010.4645C9.52678%2011.4021%209%2012.6739%209%2014C9%2015.3261%209.52678%2016.5979%2010.4645%2017.5355C11.4021%2018.4732%2012.6739%2019%2014%2019Z'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%206H14.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2014H22.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2022H14.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2014H6.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.6562%208.34277H19.6663'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.6562%2019.6572H19.6663'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.34375%2019.6572H8.35375'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.34375%208.34277H8.35375'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.35404%208.27997C1.59404%2011.7133%204.50738%2014.5066%207.99404%2014.66C10.454%2014.7666%2012.654%2013.62%2013.974%2011.8133C14.5207%2011.0733%2014.2274%2010.58%2013.314%2010.7466C12.8674%2010.8266%2012.4074%2010.86%2011.9274%2010.84C8.66738%2010.7066%206.00071%207.97997%205.98738%204.75997C5.98071%203.89331%206.16071%203.07331%206.48738%202.32664C6.84738%201.49997%206.41404%201.10664%205.58071%201.45997C2.94071%202.57331%201.13404%205.23331%201.35404%208.27997Z'%20fill='%23353535'/%3e%3c/svg%3e",H={};function A(o,s){return c(),u("div",{onClick:s[0]||(s[0]=n=>o.active=!o.active),class:"switch-icon"},[s[1]||(s[1]=e("div",{class:"sun"},[e("img",{alt:"sun-icon",src:N})],-1)),s[2]||(s[2]=e("div",{class:"moon"},[e("img",{alt:"moon-icon",src:y})],-1)),e("div",{class:p(["ball",[o.active&&"active"]])},null,2)])}const b=d(H,[["render",A],["__scopeId","data-v-cb5f3955"]]),B={__name:"Hamburger",props:{active:Boolean},setup(o){return(s,n)=>(c(),u("div",{class:p([[o.active&&"active"],"hamburger-icon"])},n[0]||(n[0]=[e("div",{class:"line-1"},null,-1),e("div",{class:"line-2"},null,-1),e("div",{class:"line-3"},null,-1)]),2))}},j=d(B,[["__scopeId","data-v-fda07e89"]]),O={data(){return{currentLang:"en"}},mounted(){this.currentLang=(this._.provides[m]||this.$route).path.startsWith("/ru")?"ru":"en"},methods:{changeLanguage(o){if(o===this.currentLang)return;const s=(this._.provides[m]||this.$route).path;let n;o==="ru"?n=s.startsWith("/ru")?s:`/ru${s}`:n=s.replace(/^\/ru/,"")||"/",this.$router.push(n)}}},R={class:"language-switcher"};function S(o,s,n,l,i,t){return c(),u("div",R,[e("span",{class:p({active:i.currentLang==="en"}),onClick:s[0]||(s[0]=r=>t.changeLanguage("en"))},"EN",2),s[2]||(s[2]=e("span",{class:"divider"},"|",-1)),e("span",{class:p({active:i.currentLang==="ru"}),onClick:s[1]||(s[1]=r=>t.changeLanguage("ru"))},"RU",2)])}const w=d(O,[["render",S],["__scopeId","data-v-c6ab1bcc"]]),E={class:"mobile-nav-section"},I={class:"mobile-nav"},W={class:"footer"},V={class:"footer-item"},K={class:"footer-item"},U={__name:"MobileNav",props:{active:Boolean},setup(o){const s=o;h(!1),_();const n=C();console.log("Текущий маршрут:",n.path);function l(){document.querySelector("body").classList.toggle("light")}return $(()=>{const i=v.timeline({paused:!0});x(s,()=>{s.active?i.play():i.reverse()}),v.set(".mobile-nav-section",{left:"100%"}),i.to(".mobile-nav-section",{left:"0%",duration:.3}).add(()=>{v.from(".mobile-nav .controls .nav-links .nav-link",{x:"70%",opacity:0,stagger:{amount:.2},duration:.3}),v.from(".mobile-nav .footer, .mobile-nav .header-buttons",{y:"70%",opacity:0,stagger:{amount:.2},duration:.3})},"-=0.3")}),(i,t)=>(c(),u("section",E,[e("div",I,[t[3]||(t[3]=T('<div class="controls" data-v-88df1bf4><div class="nav-links" data-v-88df1bf4><a href="" class="nav-link" data-v-88df1bf4> WORK</a><a href="" class="nav-link" data-v-88df1bf4> SERVICES</a><a href="" class="nav-link" data-v-88df1bf4> CONTACT</a></div></div>',1)),e("div",W,[e("div",V,[t[1]||(t[1]=e("p",null,"THEME",-1)),a(b,{onClick:t[0]||(t[0]=r=>l()),class:"switch"})]),e("div",K,[t[2]||(t[2]=e("p",null,"LANGUAGE",-1)),a(w)])])])]))}},P=d(U,[["__scopeId","data-v-88df1bf4"]]),q={class:"header container"},z={class:"controls"},G={class:"nav-links"},Z={class:"acont"},F={class:"acont"},J={class:"acont"},Q={__name:"Topbar",setup(o){const s=h(!1);_(),C();function n(){document.body.classList.toggle("light")}function l(){s.value=!s.value,document.querySelector("header").classList.toggle("fixed")}return(i,t)=>{const r=L("router-link");return c(),u(M,null,[e("header",null,[t[7]||(t[7]=e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1)),t[8]||(t[8]=e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1)),t[9]||(t[9]=e("link",{href:"https://fonts.googleapis.com/css2?family=Micro+5&display=swap",rel:"stylesheet"},null,-1)),e("div",q,[t[6]||(t[6]=e("div",{class:"logo micro-5-regular"},[e("a",{href:"/studio",style:{all:"unset",cursor:"pointer"}},[e("span",null,"moono labs")])],-1)),e("div",z,[e("div",G,[e("span",Z,[a(r,{to:"/works","data-text":"[WORK]",class:"nav-link desktop-a"},{default:g(()=>t[3]||(t[3]=[k(" [WORK] ")])),_:1})]),e("span",F,[a(r,{to:"/about","data-text":"[ABOUT]",href:"",class:"nav-link desktop-a"},{default:g(()=>t[4]||(t[4]=[k(" [ABOUT] ")])),_:1})]),e("span",J,[a(r,{to:"/contact","data-text":"[CONTACT]",class:"nav-link desktop-a"},{default:g(()=>t[5]||(t[5]=[k(" [CONTACT] ")])),_:1})])]),e("div",{onClick:t[0]||(t[0]=f=>n()),class:"switch"},[a(b)]),a(w),e("div",{onClick:t[1]||(t[1]=f=>l()),class:"hamburger"},[a(j,{active:s.value},null,8,["active"])])])])]),a(P,{onToggleActive:t[2]||(t[2]=f=>l()),active:s.value},null,8,["active"])],64)}}},X=d(Q,[["__scopeId","data-v-688d531c"]]),Y=window.setInterval;export{X as T,Y as s};