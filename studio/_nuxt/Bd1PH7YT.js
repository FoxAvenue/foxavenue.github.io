import{_ as w,r as v,T as x,U as L,e as y,t as g,v as h,x as e,Q as u,z as c,V as k,J as p,o as _,y as C,M as T}from"./DORpFRL5.js";import{l as m,b as M,C as b,H as $,M as z,s as E,a as A}from"./DArpBLJf.js";const I={class:"header container"},q={class:"controls"},S={class:"nav-links"},B={class:"acont"},H={class:"acont"},N={class:"acont"},O={__name:"Topbar_ru",setup(f){const n=v(!1),i=x(),d=L();function r(){document.body.classList.toggle("light")}function s(){n.value=!n.value,document.querySelector("header").classList.toggle("fixed")}function a(l){d.name==="ru"?(console.log("ЭТО ГЛАВНАЯ"),p(()=>{requestAnimationFrame(()=>{const o=document.querySelector(l);o&&m.scrollTo(o)})})):(console.log("Переход на главную страницу с якорем:",l),i.push({name:"ru",hash:l}).then(()=>{console.log("Переход на главную страницу успешен"),p(()=>{setTimeout(()=>{requestAnimationFrame(()=>{window.scrollTo(0,0),p(()=>{requestAnimationFrame(()=>{const o=document.querySelector(l);o&&m.scrollTo(o)})})})},100)})}))}return console.log("Текущий маршрут:",d.path),y(()=>{m.scrollTo(0)}),(l,t)=>(g(),h(k,null,[e("header",null,[t[7]||(t[7]=e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1)),t[8]||(t[8]=e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1)),t[9]||(t[9]=e("link",{href:"https://fonts.googleapis.com/css2?family=Micro+5&display=swap",rel:"stylesheet"},null,-1)),e("div",I,[t[6]||(t[6]=e("div",{class:"logo micro-5-regular"},[e("a",{href:"/",style:{all:"unset",cursor:"pointer"}},[e("span",null,"moono.")])],-1)),e("div",q,[e("div",S,[e("span",B,[e("a",{"data-text":"[РАБОТЫ]",href:"",onClick:t[0]||(t[0]=u(o=>a("#work"),["prevent"])),class:"nav-link desktop-a"}," [РАБОТЫ] ")]),e("span",H,[e("a",{"data-text":"[УСЛУГИ]",href:"",onClick:t[1]||(t[1]=u(o=>a("#skills"),["prevent"])),class:"nav-link desktop-a"}," [УСЛУГИ] ")]),e("span",N,[e("a",{"data-text":"[КОНТАКТЫ]",href:"",onClick:t[2]||(t[2]=u(o=>a("#contact"),["prevent"])),class:"nav-link desktop-a"}," [КОНТАКТЫ] ")])]),e("div",{onClick:t[3]||(t[3]=o=>r()),class:"switch"},[c(M)]),c(b),e("div",{onClick:t[4]||(t[4]=o=>s()),class:"hamburger"},[c($,{active:n.value},null,8,["active"])])])])]),c(z,{onToggleActive:t[5]||(t[5]=o=>s()),active:n.value},null,8,["active"])],64))}},U=w(O,[["__scopeId","data-v-62e3fdd2"]]),F={class:"contact-section",id:"contact"},P={class:"section"},V={class:"container"},D={class:"footer"},Y={class:"email-container"},j={class:"copy-text"},J={__name:"Contact_ru",setup(f){const n=v(["","foxavenue1@gmail.com"]),i=v("CLICK TO COPY EMAIL");function d(){navigator.clipboard.writeText((n.value[0]+n.value[1]).toLowerCase()),i.value="EMAIL COPIED !",setTimeout(()=>{i.value="CLICK TO COPY EMAIL"},2e3)}return _(()=>{p(()=>{const r=["Привет!","Hello!","Hola!","Bonjour!","Hallo!","Ciao!","สวัสดี!"];let s=0;const a=document.getElementById("hola");a&&E(function(){s=(s+1)%r.length,a.style.opacity=0,setTimeout(()=>{a.textContent=r[s],a.style.opacity=1},500)},1500)})}),(r,s)=>(g(),h("section",F,[c(A,{text:"CONTACT"}),e("div",P,[s[2]||(s[2]=e("div",{class:"form-container"},[e("div",{class:"formdescr"},[e("p",{class:"contacth"},"Давайте поговорим о Ваших целях и идеях.")]),e("form",{id:"contactForm",action:"https://formspree.io/f/myzgogwj",method:"POST"},[e("input",{type:"text",name:"name",placeholder:"ВАШЕ ИМЯ",required:""}),e("input",{type:"email",name:"email",placeholder:"EMAIL",required:""}),e("input",{name:"company",placeholder:"КОМПАНИЯ",required:""}),e("textarea",{name:"message",placeholder:"НАПИШИТЕ НАМ",required:""}),e("button",{class:"custom-btn btn-13",type:"submit"},[e("span",null,"Send")]),e("p",{class:"success-message"},"Your message has been sent successfully"),e("p",{class:"error-message"},"Error. Try again or send a message directly from the mail site")])],-1)),e("div",V,[e("div",D,[e("div",Y,[s[1]||(s[1]=e("div",{class:"hola-container"},null,-1)),e("div",j,[e("p",null,C(i.value),1)]),e("div",{onClick:s[0]||(s[0]=u(a=>d(),["prevent"])),class:"email"},[e("h2",null,C(n.value[1]),1)])])])])]),s[3]||(s[3]=T('<div class="copyrights-cont"><div class="copyrights"><p> All rights reserved <br>2024, Daria Silakova </p></div><div class="social-media-container"><p>Follow us on social media</p><div class="social-links"><a href="https://www.instagram.com" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 24.849609 10 C 11.077609 10 10 11.077609 10 24.849609 L 10 25.150391 C 10 38.922391 11.077609 40 24.849609 40 L 25.150391 40 C 38.922391 40 40 38.922391 40 25.150391 L 40 24.849609 C 40 11.077609 38.922391 10 25.150391 10 L 24.849609 10 z M 23.751953 11 L 26.248047 11 C 38.074047 11 39 11.925953 39 23.751953 L 39 26.248047 C 39 38.074047 38.074047 39 26.248047 39 L 23.751953 39 C 11.925953 39 11 38.074047 11 26.248047 L 11 23.751953 C 11 11.925953 11.925953 11 23.751953 11 z M 33.496094 15 C 32.668094 15.002 31.998 15.674906 32 16.503906 C 32.002 17.331906 32.674906 18.002 33.503906 18 C 34.331906 17.998 35.002 17.325094 35 16.496094 C 34.998 15.668094 34.325094 14.998 33.496094 15 z M 24.980469 17 C 20.562469 17.011 16.989 20.601531 17 25.019531 C 17.01 29.437531 20.601531 33.011 25.019531 33 C 29.437531 32.99 33.011 29.398469 33 24.980469 C 32.99 20.562469 29.398469 16.989 24.980469 17 z M 24.982422 18 C 28.848422 17.991 31.991 21.116422 32 24.982422 C 32.009 28.848422 28.883578 31.991 25.017578 32 C 21.151578 32.009 18.009 28.883578 18 25.017578 C 17.991 21.151578 21.116422 18.009 24.982422 18 z"></path></svg></a><a href="https://www.tiktok.com" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 17.722656 10 C 10.560656 10 10 10.560656 10 17.722656 L 10 32.277344 C 10 39.439344 10.560656 40 17.722656 40 L 32.277344 40 C 39.439344 40 40 39.439344 40 32.277344 L 40 17.769531 C 40 10.563531 39.436469 10 32.230469 10 L 17.722656 10 z M 17 11 L 33 11 C 38.565 11 39 11.435 39 17 L 39 33 C 39 38.565 38.565 39 33 39 L 17 39 C 11.435 39 11 38.565 11 33 L 11 17 C 11 11.435 11.435 11 17 11 z M 26.013672 15.769531 L 26.013672 28.435547 C 26.013672 30.176547 24.499109 31.076172 23.412109 31.076172 C 22.593109 31.076172 20.732422 30.436016 20.732422 28.416016 C 20.732422 26.296016 22.470594 25.755859 23.433594 25.755859 C 23.993594 25.755859 24.212891 25.875 24.212891 25.875 L 24.212891 22.496094 C 24.212891 22.496094 23.7925 22.433594 23.3125 22.433594 C 19.8635 22.433594 17.410156 25.224016 17.410156 28.416016 C 17.410156 31.113016 19.520047 34.378906 23.373047 34.378906 C 27.477047 34.378906 29.355469 30.955547 29.355469 28.435547 L 29.355469 22.152344 C 29.355469 22.152344 31.185672 23.433594 33.638672 23.433594 L 33.638672 20.232422 C 30.825672 20.031422 29.320797 18.141531 29.216797 15.769531 L 26.013672 15.769531 z"></path></svg></a><a href="https://www.youtube.com" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 12 C 11.492 12 9.6880312 12.135469 7.9570312 13.855469 C 6.2260312 15.576469 6 18.311 6 25 C 6 31.689 6.2260313 34.423531 7.9570312 36.144531 C 9.6880313 37.864531 11.492 38 25 38 C 38.508 38 40.311969 37.864531 42.042969 36.144531 C 43.773969 34.423531 44 31.689 44 25 C 44 18.311 43.773969 15.576469 42.042969 13.855469 C 40.311969 12.135469 38.508 12 25 12 z M 25 13 C 38.937 13 40.20775 13.362063 41.21875 14.414062 C 42.23075 15.466062 43 16.2 43 25 C 43 33.8 42.222984 34.549594 41.208984 35.558594 C 40.174984 36.588594 39.165 37 25 37 C 10.835 37 9.7317031 36.554953 8.7207031 35.501953 C 7.7087031 34.449953 7 33.687 7 25 C 7 16.313 7.76925 15.466063 8.78125 14.414062 C 9.79225 13.362063 11.95 13 25 13 z M 21.759766 19.414062 L 21.759766 30.585938 L 31.476562 24.955078 L 21.759766 19.414062 z"></path></svg></a></div></div></div>',1))]))}};export{U as T,J as _};
