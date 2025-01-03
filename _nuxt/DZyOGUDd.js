import{_ as k}from"./tz4udByB.js";import{_ as R,N as j,o as z,e as N,v as V,z as M,A as G,t as $,x as e,B as n}from"./C-40dw6s.js";import{T as J,W as K,a as Q,L as X,S as Y,C as Z,O as ee,b as te,P as ae,M as ne}from"./CZIR_oW1.js";import{T as ie}from"./BLkHHmVM.js";import{s as re}from"./Buji-J9_.js";const oe={__name:"index",setup(se){return j().beforeEach((v,a,o)=>{a.path==="/"&&localStorage.setItem("cameFromHome","true"),o()}),z(()=>{console.log(imagesLoaded),console.log(J),console.log(TweenMax);const v=function(a){let o=`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,h=`
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            void main() {
                vec2 uv = vUv;
                vec4 _currentImage;
                vec4 _nextImage;
                float intensity = 0.3;

                vec4 orig1 = texture2D(currentImage, uv);
                vec4 orig2 = texture2D(nextImage, uv);

                _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
                _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
                vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        `,q=a.images,m,u=[],x=1920,O=1080,_=a.parent,g=Math.max(document.documentElement.clientWidth,window.innerWidth||0),y=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=g>x?g:x,b=O,i=new K({antialias:!1});i.setPixelRatio(window.devicePixelRatio),i.setClearColor(2303786,1),i.setSize(w,b),_.appendChild(i.domElement);let S=new Q;S.crossOrigin="anonymous",q.forEach(t=>{m=S.load(t.getAttribute("src")+"?v="+Date.now()),m.magFilter=m.minFilter=X,m.anisotropy=i.capabilities.getMaxAnisotropy(),u.push(m)});let d=new Y;d.background=new Z(0);let I=new ee(g/-2,g/2,y/2,y/-2,1,1e3);I.position.z=1;let r=new te({uniforms:{dispFactor:{type:"f",value:0},currentImage:{type:"t",value:u[0]},nextImage:{type:"t",value:u[1]}},vertexShader:o,fragmentShader:h,transparent:!0,opacity:1}),D=new ae(_.offsetWidth,_.offsetHeight,1),T=new ne(D,r);T.position.set(0,0,0),d.add(T);const P=()=>{for(;d.children.length>0;){const t=d.children.pop();t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose(),d.remove(t)}i.dispose()};(function(){let t=Array.from(document.getElementById("pagination").querySelectorAll("button")),p=0;const c=1.5;let E;const A=s=>{var C,H,F;TweenLite.killTweensOf(r.uniforms.dispFactor),(C=document.getElementById("pagination").querySelector(".active"))==null||C.classList.remove("active"),t[s].classList.add("active"),r.uniforms.nextImage.value=u[s],r.uniforms.nextImage.needsUpdate=!0,TweenLite.to(r.uniforms.dispFactor,c,{value:1,ease:"Power2.easeInOut",onComplete:function(){r.uniforms.currentImage.value=u[s],r.uniforms.currentImage.needsUpdate=!0,r.uniforms.dispFactor.value=0}});let l=document.getElementById("slide-title"),f=document.getElementById("slide-status"),U=((H=document.querySelector(`[data-slide-title="${s}"]`))==null?void 0:H.innerHTML)||"",W=((F=document.querySelector(`[data-slide-status="${s}"]`))==null?void 0:F.innerHTML)||"";TweenLite.killTweensOf(l),TweenLite.killTweensOf(f),TweenLite.fromTo(l,c/2,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:"Power2.easeInOut",onComplete:function(){l.innerHTML=U,TweenLite.to(l,c/2,{autoAlpha:1,y:0})}}),TweenLite.fromTo(f,c/2,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:"Power2.easeInOut",onComplete:function(){f.innerHTML=W,TweenLite.to(f,c/2,{autoAlpha:1,y:0,delay:.1})}})};t.forEach((s,l)=>{s.addEventListener("click",function(){clearInterval(E),p=l,A(l),B()})});const B=()=>{E=re(()=>{p=(p+1)%t.length,A(p)},(c+1)*1e3)};B()})(),window.addEventListener("resize",function(t){i.setSize(w,b)});let L=function(){requestAnimationFrame(L),i.render(d,I)};return L(),{clearScene:P}};imagesLoaded(document.querySelectorAll("img"),()=>{document.body.classList.remove("loading");const a=document.getElementById("slider"),o=Array.from(a.querySelectorAll("img")),h=v({parent:a,images:o});N(()=>{h.clearScene()})})}),(v,a)=>{const o=k;return $(),V("main",null,[M(o,null,{default:G(()=>[M(ie),a[0]||(a[0]=e("main",{style:{position:"fixed",width:"100%",height:"100vh"}},[e("div",{id:"slider"},[e("div",{class:"slider-inner"},[e("div",{id:"slider-content"},[e("div",{class:"meta"},"Species"),e("h2",{id:"slide-title"},[n("Amur "),e("br"),n("Leopard")]),e("span",{"data-slide-title":"0"},[n("Amur "),e("br"),n("Leopard")]),e("span",{"data-slide-title":"1"},[n("Asiatic "),e("br"),n("Lion")]),e("span",{"data-slide-title":"2"},[n("Siberian "),e("br"),n("Tiger")]),e("span",{"data-slide-title":"3"},[n("Brown "),e("br"),n("Bear")]),e("div",{class:"meta"},"Status"),e("div",{id:"slide-status"},"Critically Endangered"),e("span",{"data-slide-status":"0"},"Critically Endangered"),e("span",{"data-slide-status":"1"},"Endangered"),e("span",{"data-slide-status":"2"},"Endangered"),e("span",{"data-slide-status":"3"},"Least Concern")])]),e("img",{src:"https://freight.cargo.site/w/1920/q/94/i/dd903d75de0913e7c67e92c78bc5ac5508a57eefc96e06c1ca29159431dcf4dc/SH02_Release_Close_04_7_5.jpg"}),e("img",{src:"https://freight.cargo.site/w/1920/q/94/i/538461ab42122e7914a11ec13e697f934b2675068f24556007cc73d67587ba33/SH01_Build_01_7_5.jpg"}),e("img",{src:"https://freight.cargo.site/w/1500/q/75/i/881c915b4cc9911c0ad0317fd7424ab74b04511d1c18418f1dd6062a25c6da65/SH02_Release_Close_02_7_5.jpg"}),e("img",{src:"https://freight.cargo.site/w/1920/q/75/i/bd044608d44e4c72ea0bb9fe46ea69fbb00ce8be110452e950343c929dc2d8b5/LSO24_BrainUniverse_07_c2.jpg"}),e("div",{id:"pagination"},[e("button",{class:"active","data-slide":"0"}),e("button",{"data-slide":"1"}),e("button",{"data-slide":"2"}),e("button",{"data-slide":"3"})])])],-1))]),_:1})])}}},fe=R(oe,[["__scopeId","data-v-599a6cc9"]]);export{fe as default};