import{t as r,v as i,x as e,_ as m,o as u,y as l,z as o,r as d,M as h}from"./D9FWiKGL.js";import{s as x}from"./B9_rEpNW.js";const v={width:"74",height:"68",viewBox:"0 0 74 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f=["fill"],s={__name:"arrow",props:{color:String},setup(t){return(c,n)=>(r(),i("svg",v,[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.39453 30.4205L0.39453 37.5791L52.5965 37.5791C51.2119 38.6606 49.9007 39.8483 48.6743 41.1342C45.3549 44.6148 42.7218 48.7469 40.9253 53.2945C39.1288 57.8422 38.2042 62.7163 38.2042 67.6387L45.2183 67.6387C45.2183 51.051 58.0826 37.604 73.9515 37.604L73.9515 30.3956C58.0826 30.3957 45.2183 16.9487 45.2183 0.360952L38.2042 0.360953C38.2042 5.28329 39.1288 10.1574 40.9253 14.7051C42.7218 19.2527 45.3549 23.3848 48.6743 26.8654C49.9007 28.1513 51.2119 29.339 52.5965 30.4205L0.39453 30.4205Z",fill:t.color},null,8,f)]))}},g=["id"],p=["id"],w=["id"],C=["id"],y={__name:"SectionHeader",props:{text:String,orientation:String},setup(t){const c=t;return u(()=>{const n=document.querySelector("#section-"+c.text),a=document.querySelector("#content-"+c.text).cloneNode(!0);n.append(a)}),(n,a)=>t.orientation=="vertical"?(r(),i("div",{key:0,class:"section-header vertical",id:"section-"+t.text},[e("div",{class:"content",id:"content-"+t.text},[e("div",null,[e("h1",null,[e("span",null,l(t.text),1)]),o(s,{class:"arrow",color:"#242424"})]),e("div",null,[e("h1",null,l(t.text),1),o(s,{class:"arrow",color:"white"})]),e("div",null,[e("h1",null,[e("span",null,l(t.text),1)]),o(s,{class:"arrow",color:"#242424"})]),e("div",null,[e("h1",null,l(t.text),1),o(s,{class:"arrow",color:"white"})])],8,p)],8,g)):(r(),i("div",{key:1,class:"section-header",id:"section-"+t.text},[e("div",{class:"content",id:"content-"+t.text},[e("div",null,[e("h1",null,[e("span",null,l(t.text),1)]),o(s,{class:"arrow",color:"#242424"})]),e("div",null,[e("h1",null,l(t.text),1),o(s,{class:"arrow",color:"white"})]),e("div",null,[e("h1",null,[e("span",null,l(t.text),1)]),o(s,{class:"arrow",color:"#242424"})]),e("div",null,[e("h1",null,l(t.text),1),o(s,{class:"arrow",color:"white"})])],8,C)],8,w))}},O=m(y,[["__scopeId","data-v-210a119f"]]),S={class:"contact-section",id:"contact"},A={__name:"Contact",setup(t){return d(["","hello@moono.studio"]),d("CLICK TO COPY EMAIL"),u(()=>{h(()=>{const c=["Привет!","Hello!","Hola!","Bonjour!","Hallo!","Ciao!","สวัสดี!"];let n=0;const a=document.getElementById("hola");a&&x(function(){n=(n+1)%c.length,a.style.opacity=0,setTimeout(()=>{a.textContent=c[n],a.style.opacity=1},500)},1500)})}),(c,n)=>(r(),i("section",S,[o(O,{text:"CONTACT"}),n[0]||(n[0]=e("div",{class:"section"},[e("div",{class:"form-container"},[e("div",{class:"formdescr"},[e("p",{class:"contacth"},"Let's TALK ABOUT YOU, YOUR COMPANY, YOUR PRODUCT, AND YOUR GOALS.")]),e("form",{id:"contactForm",action:"https://formspree.io/f/myzgogwj",method:"POST"},[e("input",{type:"text",name:"name",placeholder:"YOUR NAME",required:""}),e("input",{type:"email",name:"email",placeholder:"EMAIL",required:""}),e("input",{name:"company",placeholder:"COMPANY",required:""}),e("textarea",{name:"message",placeholder:"YOUR MESSAGE",required:""}),e("button",{class:"custom-btn btn-13",type:"submit"},[e("span",null,"Send")]),e("p",{class:"success-message"},"Your message has been sent successfully"),e("p",{class:"error-message"},"Error. Try again or send a message directly from the mail site")])]),e("div",{class:"container"})],-1))]))}};export{A as _};
