(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[64],{1830:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});const i=["mouseup","touchend"];function o(e){const t=e.currentTarget;let n=e.clientX,o=e.clientY;if(e.touches){if(t.getAttribute("disabled"))return;t._rippleTouch=!0,n=e.touches[0].clientX,o=e.touches[0].clientY}else if(t._rippleTouch)return;var s=document.createElement("div");s.className="ripple";const r=t.getBoundingClientRect(),a=1.2*Math.max(r.width,r.height);var l;s.style.left=n-r.left-a/2+"px",s.style.top=o-r.top-a/2+"px",s.style.width=s.style.height=a+"px",t.appendChild(s),Promise.all([new Promise((e=>{l=e,i.forEach((e=>document.body.addEventListener(e,l,{once:!0,capture:!0})))})),new Promise((e=>setTimeout(e,300)))]).then((()=>{i.forEach((e=>document.body.removeEventListener(e,l,{once:!0,capture:!0}))),s.className+=" ripple-leave",setTimeout((()=>{s.remove()}),300)}))}window.$ripple=o,window.$materialRipple=o;var s=o,r={beforeMount:function(e){e.addEventListener("touchstart",s),e.addEventListener("mousedown",s)},beforeUnmount:function(e){e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)}}},5089:function(e,t,n){"use strict";var i=n(5863),o=n(8301),s=n(1930),r=document.getElementById("simple-tooltip"),a=r.children[0];const l=new WeakMap;function c(e){if(!s.SB){var t=e.currentTarget||e.target,n=l.get(t),c=n.value||n,u=n.placement||"top";c instanceof Function&&(c=c(t)),r.style.display="block",r.style.opacity="0",r.children[1].innerHTML=c,window.requestAnimationFrame((()=>{(0,i.oo)(t,r,{strategy:"fixed",placement:u,middleware:[(0,o.cv)(5),(0,o.uY)(),(0,o.RR)(),(0,o.x7)({element:a})]}).then((({x:e,y:t,placement:n,middlewareData:i})=>{r.setAttribute("x-placement",n);const o=i.arrow;Object.assign(a.style,{left:null!=o.x?`${o.x}px`:"",top:null!=o.y?`${o.y}px`:""}),Object.assign(r.style,{transform:"translate("+e+"px,"+t+"px)",opacity:1})}))}))}}function u(){r.style.opacity="0",r.children[1].innerHTML="",r.style.display="none",r.style.transform="translate(-100%,-100%)"}t["Z"]={beforeMount:function(e,t){l.set(e,t.value),e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",u)},update:function(e,t){l.set(e,t.value)},beforeUnmount:function(e){l.delete(e),e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",u)}}},9234:function(e,t,n){"use strict";n.d(t,{l:function(){return c}});n(6699);var i=n(9150);function o(e){return e.keys().map(e)}const s={en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},"long-with-time":{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}}},r=(0,i.o)({locale:"en",fallbackLocale:"en",datetimeFormats:s,messages:{},missingWarn:!1,fallbackWarn:!1});r.global._availableLocales=o(n(4077));const a=[];function l(e){return a.length>0&&r.global.locale===e||a.includes(e)?Promise.resolve(e):Promise.all([n(6014)(`./${e}/strings.json`).catch((()=>({}))),n(6711)(`./${e}/heroes.json`).catch((()=>({}))),n(3267)(`./${e}/artifacts.json`).catch((()=>({}))),n(6864)(`./${e}/camping.json`).catch((()=>({})))]).then((([t,n,i,o])=>(r.global.setLocaleMessage(e,{strings:t.default,heroes:n.default,artifacts:i.default,camping:o.default}),a.push(e),document.querySelector("html").setAttribute("lang",e),Promise.resolve(e)))).catch((()=>Promise.resolve(!1)))}function c(e){return l(e).then((e=>(r.global.locale=e,Promise.resolve(e)))).catch((()=>Promise.reject(e)))}t["Z"]=r;var u=[l(r.global.fallbackLocale)];Promise.all(u).catch((e=>console.error(e)))},7482:function(e,t){"use strict";class n{constructor(e,t,n,i){this.isPromise=!(i&&i instanceof Function),this.parentNode=document.createElement("div"),this.parentNode.className="center-modal",this.parentNode.style.zIndex=999;let o=document.createElement("div");o.className="flat-modal",o.style.textAlign="center";let s=document.createElement("h1");s.innerHTML=e,s.className="m-window-title",o.appendChild(s);let r=document.createElement("div");r.style="display: flex;flex-direction: column;";let a=document.createElement("div");a.style.padding="10px",n.forEach(((e,t)=>{let n=document.createElement("BUTTON");n.style.width="40%",e instanceof Object?(n.className=e.class||"flat-button material-button primary",n.innerText=e.name,n.style+=e.style):(n.innerText=e,n.className="flat-button material-button basic primary"),n.ontouchstart=window.$ripple,n.onmousedown=window.$ripple,n.onclick=e=>{this.buttonClicked(t,e)},a.appendChild(n)})),r.appendChild(a);let l=document.createElement("div");l.style="flex: 1; overflow: auto;","object"===typeof t&&"function"===typeof t.then?(a.style.display="none",l.innerHTML='<div class="infinite-loading-wrapper" style=""><div class="infinite-loading"></div></div>',t.then((e=>{document.body.contains(l)&&(l.innerHTML=e)})).catch((e=>{document.body.contains(l)&&(l.innerHTML="<div>Error"+(e?"<br>"+e:"")+"</div>")})).finally((()=>{document.body.contains(l)&&(l.style.padding="10px",a.style.display="")}))):t instanceof Function?(l.stye.padding="10px",l.innerHTML=t()):(l.style.padding="10px",l.innerHTML='<div style="padding: 10px;">'+t+"</div>"),r.insertBefore(l,a),o.appendChild(r),this.parentNode.appendChild(o),document.body.appendChild(this.parentNode)}buttonClicked(e,t){let n;function i(){n=!0}let o=()=>{let e=this.parentNode.querySelectorAll("input");for(var t=0;t<e.length;t++){let n=e[t];if(n.getAttribute("required")&&!n.value)return!1}return!0};if(this.isPromise){if(!o)return;this.resolveFunction([e,this.parentNode])}else this.callback(e,t,this.parentNode,{preventClosing:i,checkInputs:o}),n||this.remove()}async showCallback(e){this.parentNode.classList.add("show"),this.callback=e}async showPromise(){return this.parentNode.classList.add("show"),new Promise(((e,t)=>{this.resolveFunction=e,this.rejectFunction=t}))}async remove(){this.parentNode.remove()}}const i={ask:(e,t,i,o)=>{let s=new n(e,t,i||["Cancel"],o);s.showCallback(o)},askPromise:(e,t,i)=>{let o=new n(e,t,i||["Cancel"]),s=!1;return new Promise(((e,t)=>{o.showPromise().then((t=>{i[t[0]]&&i[t[0]].preventClosing&&(s=!0),e(t)})).catch((e=>{t(e)})).finally((()=>{s||o.remove()}))}))},install:e=>{e.config.globalProperties.$callbackAlert=i.ask,e.config.globalProperties.$promiseAlert=i.askPromise}};window.$callbackAlert=i.ask,window.$promiseAlert=i.askPromise,t["Z"]=i},725:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(7022),o=n(6252);const s=250;var r={name:"child-context",props:["options","parent","visible","direction"],data:function(){return{focused:-1,left:null,top:null,currDirection:0}},watch:{visible:function(e){1!=e||this.left||this.top||this.positionSubmenu()}},methods:{positionSubmenu:function(){const e=this.parent.x,t=this.parent.y+4;var n,i;if(1===this.direction?(e-s<0&&e+s<=window.innerWidth?(n=s,this.currDirection=0):e-s>0?(n=-s,this.currDirection=1):n=-s-(e-s),this.currDirection=1):e+2*s>window.innerWidth&&e-s>=0?(n=-s,this.currDirection=1):e+2*s<=window.innerWidth?(n=s,this.currDirection=0):(n=s-(e+2*s-window.innerWidth),this.currDirection=0),57*this.options.length<window.innerHeight&&this.parent.realY+57*this.options.length>window.innerHeight-5)i=t-57*(this.options.length-1);else if(57*this.options.length>window.innerHeight&&this.parent.realY+.8*window.innerHeight>window.innerHeight-5){const e=.8*window.innerHeight-(window.innerHeight-this.parent.realY),t=57*Math.floor(e/57);i=-Math.ceil(t)}else i=t;this.left=n,this.top=i},leftOptionBox:function(e){this.focused===e&&(this.focused=-1)},clickedOption:function(e,t){t.handler&&(this.$emit("clickOption",e,t),this.focused=-1)}},render:function(){return(0,o.h)("div",{class:"contextual-menu glass-container",style:{display:this.visible?"":"none","max-height":"80vh",position:"fixed",top:this.top+"px",left:this.left+"px","background-color":"var(--background-color-secondary)",color:"var(--font-color-secondary)"}},this.options.map(((e,t)=>(0,o.h)("div",{class:"option-wrapper mat-hover",style:{color:e.color},onClick:t=>this.clickedOption(t,e),onMouseenter:()=>this.focused=t,onMouseleave:()=>this.leftOptionBox(t)},[(0,o.h)("div",{class:"context-icon",style:e.noIcon?"margin:0; width:0;":""},[e.img?(0,o.h)("img",{src:e.img,crossorigin:"anonymous",SameSite:"Lax"}):(0,o.h)("i",{class:e.class})]),(0,o.h)("div",{class:"context-label"},e.name),e.children?[(0,o.h)("i",{class:"fas fa-angle-right context-more"}),(0,o.h)(l,{options:e.children,visible:this.focused===t,parent:{x:this.parent.x+this.left,y:57*t-4,realY:57*(t-1)},direction:this.currDirection,onClickOption:(e,t)=>this.clickedOption(e,t)})]:null]))))}};const a=r;var l=a,c={name:"ContextualMenu",data:function(){return{contextId:0,x:0,y:0,show:!1,focused:-1,options:[],mobile:!1,mobileIndex:"0",transition:"scroll-left"}},created:function(){document.body.addEventListener("mouseup",this.clickOff),document.body.addEventListener("contextmenu",this.clickOff),document.body.addEventListener("click",this.clickOff)},beforeUnmount:function(){document.body.removeEventListener("mouseup",this.clickOff),document.body.removeEventListener("contextmenu",this.clickOff),document.body.removeEventListener("click",this.clickOff)},watch:{},computed:{},methods:{setVisible(e){this.show=e},open(e){this.show=!1,this.focused=-1,this.options=[],(0,o.Y3)((()=>{this.contextId++,this.show=!0,this.options=e}))},setPosition:function(e){this.y=e.clientY,this.x=e.clientX,(0,o.Y3)((()=>{var t={height:60*this.options.length,width:250};if(this.x+t.width>window.innerWidth){let n=e.clientX-t.width;this.x=n>0?n:e.clientX-(e.clientX+t.width-window.innerWidth)}this.y+t.height>window.innerHeight&&(this.y=Math.max(e.clientY-t.height,0))}))},setOptions:function(){},setFocus:function(e){setTimeout((()=>this.focused=e),10)},insideClick:function(e,t){if(!t||t.children)return e.stopPropagation();t.handler&&(t.handler(),this.clickOff())},clickOff:function(){this.show&&(this.show=!1,this.focused=-1,this.mobileIndex="0",this.options.forEach((e=>{delete e.children})))},mobileIndexSetter:function(e,t){e&&(this.mobileIndex=t)},mobileIndexBack:function(){var e=(this.mobileIndex+"").split("-");e.pop(),this.mobileIndexSetter(!0,e.join("-"))},getRecusiveLayout(e,t){let n=[];const i=(e,t)=>{n.push([t,e]),e.forEach(((e,n)=>{var o=t+"-"+n;e.children&&i(e.children,o)}))};return i(e,t),n}},render:function(){return this.mobile?(0,o.h)("div",{key:"mobile-contextmenu",class:["contextual-menu mobile-contextmenu glass-container-2 noselect",{hidden:!this.show,visible:this.show}],style:{display:"flex","flex-direction":"column"},onClick:this.insideClick,onMouseup:this.insideClick,onMousedown:this.insideClick,onWheel:e=>e.stopPropagation()},[(0,o.h)("div",{class:"mobile-navigation"},["0"!==this.mobileIndex?(0,o.h)("i",{class:"fas fa-angle-left",onClick:()=>this.mobileIndexBack()}):(0,o.h)("i"),(0,o.h)("i",{class:"fas fa-times",onClick:this.clickOff})]),(0,o.h)("div",{class:"hide-scrollbar",style:"overflow: auto"},[this.getRecusiveLayout(this.options,"0").map((e=>this.mobileIndex===e[0]?(0,o.h)("div",{key:e[0]},e[1].map(((t,n)=>{let i=e[0]+"-"+n;return(0,o.h)("div",{class:"option-wrapper mat-hover",style:{color:t.color},onClick:e=>t.children?this.mobileIndexSetter(!0,i):this.insideClick(e,t,n)},[t.img?(0,o.h)("div",{class:"context-icon"},[(0,o.h)("img",{src:t.img})]):(0,o.h)("div",{class:"context-icon "+t.class}),(0,o.h)("div",{class:"context-label"},t.name),t.children?(0,o.h)("i",{class:"fas fa-angle-right context-more"}):null])}))):null))])]):(0,o.h)("div",{key:this.contextId,class:["contextual-menu glass-container-2 hide-scrollbar noselect",{hidden:!this.show,visible:this.show}],style:{left:this.x+"px",top:this.y+"px"},onClick:this.insideClick,onMouseup:this.insideClick,onMousedown:this.insideClick},[this.options.map(((e,t)=>(0,o.h)("div",{class:"option-wrapper mat-hover",style:{color:e.color},onClick:n=>this.insideClick(n,e,t),onMouseenter:()=>this.setFocus(t)},[e.img?(0,o.h)("div",{class:"context-icon"},[(0,o.h)("img",{attrs:{src:e.img}})]):(0,o.h)("div",{class:"context-icon "+e.class}),(0,o.h)("div",{class:"context-label"},e.name),e.children?[(0,o.h)("i",{class:"fas fa-angle-right context-more"}),(0,o.h)(l,{options:e.children,visible:this.focused===t,parent:{x:this.x,y:57*t-4,realY:this.y+8+57*t},direction:0,onClickOption:(e,t)=>this.insideClick(e,t)})]:null])))])}};const u=c;var d,h,p=u;const m={show:(e,t,n={})=>{e.preventDefault&&(e.preventDefault(),e.stopPropagation()),n.mobile?d.mobile=!0:d.mobile=!1,d.open(t),d.setPosition(e)},hide:()=>{d.show=!1,d.options=[]},install:e=>{const{vNode:t,el:n,destroy:o}=(0,i.Z)(p,{app:e});h={node:t,el:n,destroy:o,component:t.component.proxy},document.body.appendChild(n),d=h.component,e.config.globalProperties.$contextmenu=m.show}};var f=m},351:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(3577),o=n(6252),s=n(9963);const r=["onClick"],a={class:(0,i.C_)("flag-box")},l=["data-src"],c={style:{"font-size":"0.5em"}};function u(e,t,n,u,d,h){const p=(0,o.Q2)("lazyloader");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d.open?((0,o.wg)(),(0,o.iD)("div",{key:0,style:{position:"fixed",left:"0",top:"0",height:"100%",width:"100%","background-color":"#00000033"},onClick:t[0]||(t[0]=(...e)=>h.hide&&h.hide(...e))})):(0,o.kq)("",!0),(0,o._)("div",{class:(0,i.C_)(["lang-picker glass-container-2",{show:d.open}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.availableLangs,(e=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{key:e.code,class:"locale mat-hover",onClick:t=>h.setLocale(e)},[(0,o._)("div",a,[(0,o.wy)((0,o._)("img",{"data-src":e.flag,style:{width:"100%"}},null,8,l),[[p]])]),(0,o._)("div",null,[(0,o._)("p",null,(0,i.zw)(e.name),1),(0,o._)("p",c,(0,i.zw)(e.authors.join(", ")),1)])],8,r)),[[s.F8,h.locale!==e.code]]))),128))],2)],64)}var d=n(9234),h=n(2229),p={name:"LocalePicker",directives:{lazyloader:h.Z},data(){return{open:!1}},computed:{locale:function(){return this.$i18n.locale},availableLangs:function(){return this.$i18n._availableLocales},lang:function(){return this.availableLangs.filter((e=>e.code===this.locale))[0]||{}}},methods:{show(){document.getElementById("app").classList.add("animate-scale-out"),document.getElementById("app").classList.add("lang-picker-open"),this.open=!0},hide(){this.open&&(this.open=!1,document.getElementById("app").classList.remove("lang-picker-open"),setTimeout((()=>document.getElementById("app").classList.remove("animate-scale-out")),300))},setLocale(e){this.$store.commit("loading",[!0,"GETTING LANG PACK..."]),(0,d.l)(e.code).then((()=>{localStorage.setItem("USER_PREFERED_LOCALE",e.code),this.hide()})).finally((()=>{this.$store.commit("loading",!1)}))}}},m=n(3744);const f=(0,m.Z)(p,[["render",u]]);var g=f,v=n(7022);let y;window.show=()=>y.component.show(),window.hide=()=>y.component.hide();var w={install(e){const{vNode:t,el:n,destroy:i}=(0,v.Z)(g,{app:e});y={node:t,el:n,destroy:i,component:t.component.proxy},document.body.appendChild(n),e.config.globalProperties.$localePicker=window.show}}},5348:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7022),o=n(6252),s=n(9963),r={name:"SnackbarComponent",props:{},data:function(){return{ev:{},id:0}},computed:{},mounted:function(){},methods:{pushNotification:function(e){this.id++;let t="N"+this.id;e.id=t,this.ev[t]=e,e.manual||setTimeout((()=>{delete this.ev[t]}),3e3)}},render:function(){return(0,o.h)("div",[(0,o.h)("div",{class:"noselect",style:"z-index: 1000;position: fixed; top: 0; right: 0; height: 0; text-align: center;"},[(0,o.h)(s.W3,{name:"bounce"},(()=>Object.values(this.ev).map((e=>(0,o.h)("div",{key:"snack"+e.id,class:"snackbar snack-"+e.type,onClick:()=>delete this.ev[e.id]},[(0,o.h)("div",{class:"content"},[(0,o.h)("i",{class:["icon fa",{"fa-times-circle":"error"===e.type,"fa-check-circle":"success"===e.type,"fas fa-exclamation-circle":"info"===e.type||"warn"===e.type}]}),(0,o.h)("h3",{class:"title",innerHTML:e.title}),(0,o.h)("p",{class:"description",innerHTML:e.description})])])))))])])}};const a=r;var l,c,u=a;function d(e,t){let n={type:e||"info",title:t.title||t.name||"",description:t.description||""};for(var i in t)t[i]&&(t[i]=n[i]);return n}const h={log:e=>{l.pushNotification(d("success",e))},info:e=>{l.pushNotification(d("info",e))},warn:e=>{l.pushNotification(d("warn",e))},error:e=>{l.pushNotification(d("error",e))},install:function(e){const{vNode:t,el:n,destroy:o}=(0,i.Z)(u,{app:e});c={node:t,el:n,destroy:o,component:t.component.proxy},document.body.appendChild(n),l=c.component,e.config.globalProperties.$snackbar=h}};window.$snackbar=h;var p=h},4640:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(3907),o=n(2784);function s(e){return e.dt[0]&&e.c?e.id||(e.type.slice(0,1)+e.dt[0].replace(/-/g,"")+e.c[0].id.charAt(0)+e.c[0].id.slice(-4)).toUpperCase():""}var r=n(9234);function a(){return"dark"}var l=n(8439),c=(0,i.MT)({state:{loading:[!0,"CONNECTING..."],theme:a(),mainMenu:!1,isMobile:!1,screenWidth:0,screenHeight:0,currentOpenBanner:null,HeroDB:null,ArtifactDB:null,TierListDB:null,rateUpHistory:null,powderShop:null,indexedDB:null,pulls:null},getters:{getIsMobile:e=>()=>e.isMobile,getHeroDB:e=>()=>e.HeroDB,getHero:e=>t=>e.HeroDB?e.HeroDB[t]||{id:t,_id:t,name:t,rarity:5,attribute:"fire",role:"knight"}:t,getHeroName:e=>t=>e.HeroDB?r.Z.global.te("heroes."+t)?r.Z.global.t("heroes."+t):(e.HeroDB[t]||{}).name||t:t,getHeroIcon:e=>t=>e.HeroDB?l.cK+"face/"+(e.HeroDB[t]||{id:t}).id+"_s.png":t,getArtifact:e=>t=>e.ArtifactDB[t]||{id:t,_id:t,name:t,rarity:5},getArtifactName:e=>t=>e.ArtifactDB?r.Z.global.te("artifacts."+t)?r.Z.global.t("artifacts."+t):(e.ArtifactDB[t]||{}).name||t:t,getArtifactIcon:(e,t)=>e=>{let n=t.getArtifact(e).id;return l.cK+"item_arti/icon_"+n+".png"},getArtifactImage:(e,t)=>e=>{let n=t.getArtifact(e).id;return l.cK+"item_arti/"+n+"_fu.png"},getBannerPulls:e=>t=>e.pulls[t]||{},getRarityIcon:()=>e=>{switch(e){default:return l.cK+"cm_icon_star.png";case"all":return l.cK+"label-all.png"}},getRoleIcon:()=>e=>{var t=l.cK+"class/cm_icon_role_";switch(e){default:return t+e+".png";case"assassin":return t+"thief.png";case"manauser":return t+"soul-weaver.png";case"all":return l.cK+"label-all.png"}},getAttributeIcon:()=>e=>{var t=l.cK+"attribute/cm_icon_pro";switch(e){default:return t+e+".png";case"wind":return t+"earth.png";case"dark":return t+"mdark.png";case"all":return l.cK+"label-all.png"}},getTierListDB:e=>()=>e.TierListDB||{},getRateUpHistory(e){return e.rateUpHistory||[]}},mutations:{loading:function(e,t=[!1,"CONNECTING..."]){Array.isArray(t)?(e.loading[0]=t[0],e.loading[1]=t[1]||"CONNECTING..."):(e.loading[0]=t,e.loading[1]="CONNECTING...")},installPWAButton:function(e,t){e.installPWAButton=t},toggleMainMenu:function(e){e.mainMenu=!e.mainMenu},toggleBannerModal:function(e,t=null){e.currentOpenBanner=t},updateIsMobile:function(e,t=!1){e.isMobile=t},updateWindowSize:function(e,t){e.screenWidth=t},updateWindowHeight:function(e,t){e.screenHeight=t},updateHeroDB:function(e,t){e.HeroDB=t},updateArtifactDB:function(e,t){e.ArtifactDB=t},updateTierListDB:function(e,t){e.TierListDB=t},updateRateUpHistory:function(e,t){e.rateUpHistory=t},updatePowderShop:function(e,t){e.powderShop=t},updateIndexedPulls:function(e,t){e.indexedDB=t},updateUserPulls:function(e,t){e.pulls=t},addUserPull:function(e,t){e.pulls&&(e.pulls[t.id]=t)}},actions:{LOADING:function(e,t){return e.commit("loading",!0,t),new Promise((t=>{setTimeout((()=>{t(),this.$nextTick((()=>{e.commit("loading",!1)}))}),0)}))},GET_HERO_DB:function(e){return new Promise(((t,n)=>{if(e.state.HeroDB)return t(e.state.HeroDB);(0,o.Z)("./data/HeroDatabase.json").then((n=>{var i=JSON.parse(n);e.commit("updateHeroDB",i),t(i)})).catch((e=>{n(e)}))}))},GET_ARTIFACT_DB:function(e){return new Promise(((t,n)=>{if(e.state.ArtifactDB)return t(e.state.ArtifactDB);(0,o.Z)("./data/artifacts.json").then((n=>{var i=JSON.parse(n),o={};for(var s in i)o[i[s]._id]=i[s];e.commit("updateArtifactDB",i),t(o)})).catch((e=>{n(e)}))}))},GET_RATE_UP_HISTORY:function(e){return new Promise(((t,n)=>{if(e.state.rateUpHistory)return t(e.state.rateUpHistory);(0,o.Z)("./data/timeline/timeline-items.json").then((n=>{var i=JSON.parse(n);i.forEach((e=>{"event"!=e.type&&(e.id=s(e))})),e.commit("updateRateUpHistory",i),t(i)})).catch((e=>{n(e)}))}))},GET_POWDER_SHOP:function(e){return new Promise(((t,n)=>{if(e.state.powderShop)return t(e.state.powderShop);(0,o.Z)("./data/timeline/powder-shop.json").then((n=>{var i=JSON.parse(n);e.commit("updatePowderShop",i),t(i)})).catch((e=>{n(e)}))}))},LOAD_INDEXED_DB:function(e,t="timeline",n=2){return new Promise(((i,o)=>{if(e.state.indexedDB)return i(e.state.indexedDB);let s=window.indexedDB.open(t,n);s.onerror=e=>{console.log("Error opening db",e),o("can't_open_indexed_db")},s.onsuccess=t=>{console.log("IDB Loaded"),e.commit("updateIndexedPulls",t.target.result),i(t.target.result)},s.onupgradeneeded=e=>{var t=[{name:"pulls",keyPath:"id"},{name:"tierlist",keyPath:"id"},{name:"camping",keyPath:"id"}];let n=e.target.result;for(var i=0;i<t.length;i++){var o=t[i];n.objectStoreNames.contains(o.name)||n.createObjectStore(o.name,{keyPath:o.keyPath})}}}))},loadUserDataDB:function(e,t,n="pulls"){return new Promise(((i,o)=>{if(t||(t=e.state.indexedDB),e.state[n])return void i(e.state[n]);let s=t.transaction(n,IDBTransaction.READ_ONLY);s.oncomplete=()=>{e.commit("updateUserPulls",a),i(a)};let r=s.objectStore(n),a={};r.openCursor().onsuccess=e=>{let t=e.target.result;t&&(a[t.value.id]=t.value,t.continue())},s.onerror=e=>{console.log(e),o(e)}}))},savePullData:function(e,t){return new Promise(((n,i)=>{if(e.state.indexedDB){var o=e.state.indexedDB.transaction(["pulls"],"readwrite"),s=o.objectStore("pulls"),r=s.put(t);r.onerror=e=>{i("Error",e.target.error.name)},r.onsuccess=i=>{e.commit("addUserPull",t),n(i,!0)}}else i("Can't open database")}))},getBannerPulls:function(e,t){return new Promise(((n,i)=>{e.dispatch("LOAD_INDEXED_DB").then((e=>{var o=e.transaction(["pulls"],IDBTransaction.READ_ONLY),s=o.objectStore("pulls"),r=s.get(t);r.onerror=()=>{i({})},r.onsuccess=e=>{n(e.target.result,!0),console.log(e.target.result)}})).catch((()=>{i({})}))}))},LOAD_TIER_LIST_DB:function(e){return new Promise(((t,n)=>{e.dispatch("LOAD_INDEXED_DB").then((i=>{let o=i.transaction("tierlist",IDBTransaction.READ_ONLY),s={};o.oncomplete=()=>{e.commit("updateTierListDB",s),t(s)};let r=o.objectStore("tierlist");r.openCursor().onsuccess=e=>{let t=e.target.result;t&&(s[t.value.id]=t.value,t.continue())},o.onerror=e=>{console.log(e),n(e)}})).catch((e=>n(e)))}))},SAVE_TIER_LIST:function(e,t){return new Promise(((n,i)=>{e.dispatch("LOAD_INDEXED_DB").then((o=>{var s=o.transaction(["tierlist"],"readwrite"),r=s.objectStore("tierlist"),a=r.put(t);a.onerror=e=>{i("Error",e.target.error)},a.onsuccess=i=>{e.state.TierListDB[t.id]=t,n(i,!0)}})).catch((e=>i(e)))}))},DELETE_TIER_LIST:function(e,t){return new Promise(((n,i)=>{e.dispatch("LOAD_INDEXED_DB").then((o=>{var s=o.transaction(["tierlist"],"readwrite"),r=s.objectStore("tierlist"),a=r.delete(t.id);a.onerror=e=>{i("Error",e.target.error.name)},a.onsuccess=i=>{delete e.state.TierListDB[t.id],n(i,!0)}})).catch((e=>i(e)))}))}},modules:{}})},2784:function(e,t,n){"use strict";function i(e,t="GET",n){return new Promise((function(i,o){let s=new XMLHttpRequest;s.open(t,e),s.onload=function(){this.status>=200&&this.status<300?i(s.response):o({status:this.status,statusText:s.statusText})},s.onerror=function(){o({status:this.status,statusText:s.statusText})},s.setRequestHeader("Content-Type","application/json;charset=UTF-8"),s.send(n)}))}n.d(t,{Z:function(){return i}})},849:function(e,t){"use strict";t["Z"]={Android:function(){return null!=navigator.userAgent.match(/Android/i)},BlackBerry:function(){return null!=navigator.userAgent.match(/BlackBerry/i)},IOS:function(){return null!=navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return null!=navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return null!=navigator.userAgent.match(/IEMobile/i)},any:function(){return this.Android()||this.BlackBerry()||this.IOS()||this.Opera()||this.Windows()}}},7022:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(6252),o=n(9963);function s(e,{props:t,children:n,element:s,app:r}={}){let a=s,l=(0,i.Wm)(e,t,n);r&&r._context&&(l.appContext=r._context),a?(0,o.sY)(l,a):"undefined"!==typeof document&&(0,o.sY)(l,a=document.createElement("div"));const c=()=>{a&&(0,o.sY)(null,a),a.remove(),a=null,l=null};return{vNode:l,destroy:c,el:a}}},974:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(6252),o=n(8439),s=n(2229),r={name:"HeroIcon",emits:["click","context","remove"],props:{type:{type:Number,default:0},hero:{type:String},skin:{type:String,default:void 0},showrole:{type:Boolean,required:!1,default:!0},showname:{type:Boolean,default:!1},showrarity:{type:Boolean,default:!1},removable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},size:{type:Number,default:75},style:{default:""},lazyload:{type:Boolean,default:!0}},computed:{heroData:function(){return this.$store.getters.getHero(this.hero)},name:function(){return this.$store.getters.getHeroName(this.hero)},icon:function(){return o.cK+"face"+["","2","2"][this.type]+"/"+(this.skin||this.heroData.id)+"_"+["s","su","l"][this.type]+".png"},roleIcon:function(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon:function(){return this.$store.getters.getAttributeIcon(this.heroData.attribute)},computedStyle(){return{opacity:this.lazyload?0:""}}},render:function(){if(this.hero)return(0,i.h)("div",{class:["hero-icon-comp noselect",{hoverable:this.hover}],style:[this.style,{"font-size":this.size+"px"}],onClick:e=>{-1!=e.target.className.indexOf("remove")?this.$emit("remove",this.hero,e):this.$emit("click",this.hero,e)},onContextmenu:e=>{e.preventDefault(),this.$emit("context",this.hero,e)}},[(0,i.h)("div",{style:{position:"relative",height:"1em","min-width":1+(this.removable?.35:0)+"em","text-align":"start","pointer-events":"none"}},[this.selected?[(0,i.h)("div",{class:"circle",style:{"animation-delay":"-3s"}}),(0,i.h)("div",{class:"circle",style:{"animation-delay":"-2s"}}),(0,i.h)("div",{class:"circle",style:{"animation-delay":"-1s"}}),(0,i.h)("div",{class:"circle",style:{"animation-delay":"0s"}})]:null,this.lazyload?(0,i.h)("img",{key:"lazy",class:"avatar",style:"position: absolute;",src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png","data-lazy-fader":!0,crossorigin:"anonymous",SameSite:"Lax"}):null,(0,i.wy)((0,i.h)("img",{key:"avatar",class:["avatar",{fit:1===this.type}],style:this.computedStyle,[this.lazyload?"data-src":"src"]:this.icon,crossorigin:"anonymous",SameSite:"Lax"}),[[s.Z]]),this.showrole?(0,i.h)("div",{class:"attribute-role",style:{"background-image":"url("+this.roleIcon+"),url("+this.attributeIcon+")"}}):null,this.showrarity?(0,i.h)("div",{class:"wrapper-hero-info rarity-"+this.heroData.rarity}):null,this.selected?(0,i.h)("i",{class:"fa fa-lock text-black-stroke",style:{position:"absolute",bottom:0,left:"-0.15em","font-size":"0.3em",color:"white"}}):null,this.removable?(0,i.h)("span",{class:"remove",style:{fontSize:"0.35em"},title:"Remove "+this.name},"×"):null]),this["showname"]?(0,i.h)("div",{"pointer-events":"none",style:{width:this.size+(this.removable?.35*this.size:0)+"px"}},[(0,i.h)("p",{class:"label"},this.name)]):null])}};const a=r;var l=a},2536:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(6252),o={name:"MobileFloatingMenu",props:{options:{type:Array,required:!1,default:function(){return[]}},style:{required:!1}},data:function(){return{open:!1}},computed:{mobile:function(){return this.$store.state.isMobile}},mounted:function(){},methods:{closeMenu:function(){this.open=!1},clickEvent:function(e,t){this.closeMenu(),this.$emit(e.click,e)}},render:function(){return(0,i.h)("div",{style:this.style||{zIndex:10,position:"absolute"}},this.options.length>0?[1===this.options.length?(0,i.h)("div",{class:"mobile-menu "+this.options[0].class,onClick:()=>this.clickEvent(this.options[0])}):[(0,i.h)("div",{class:["mobile-menu-items",{closed:!this.open}]},this.options.map((e=>e.click?[(0,i.h)("div",{class:e.class,onClick:()=>this.clickEvent(e)}),(0,i.h)("span",e.title||e.name)]:null))),(0,i.h)("div",{class:["fa mobile-menu",this.open?"fa-times":"fa-bars",{open:this.open}],onClick:()=>this.open=!this.open})]]:null)}};const s=o;var r=s},3267:function(e,t,n){var i={"./ja/artifacts.json":[2885,570]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(i)},o.id=3267,e.exports=o},6864:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=6864,e.exports=t},6711:function(e,t,n){var i={"./en/heroes.json":[3503,124],"./es/heroes.json":[6669,30],"./ja/heroes.json":[8761,68],"./ko/heroes.json":[4441,608],"./pt/heroes.json":[1013,763],"./th/heroes.json":[2396,747]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(i)},o.id=6711,e.exports=o},6014:function(e,t,n){var i={"./en/strings.json":[8276,428],"./es/strings.json":[9999,910],"./it/strings.json":[7556,540],"./ja/strings.json":[6788,227],"./ko/strings.json":[2369,886],"./pt/strings.json":[5808,985],"./th/strings.json":[4630,101]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(i)},o.id=6014,e.exports=o},4077:function(e,t,n){var i={"./en/info.json":5448,"./es/info.json":4725,"./it/info.json":2174,"./ja/info.json":4331,"./ko/info.json":3792,"./pt/info.json":1966,"./th/info.json":8714};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id=4077},5448:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["en-*"],"code":"en","name":"English","authors":[],"flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"}')},4725:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["es-*"],"code":"es","name":"Español","authors":["-"],"flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"}')},2174:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["it-*"],"code":"it","name":"Italiano","authors":[],"flag":"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"}')},4331:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["ja-*"],"code":"ja","name":"日本語","authors":["-"],"flag":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"}')},3792:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["ko-*"],"code":"ko","name":"한국어","authors":["-"],"flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png"}')},1966:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["pt-*"],"code":"pt","name":"Portuguese","authors":["-"],"flag":"https://boaondaguesthousepeniche.com/wp-content/uploads/2022/06/Bandiera-del-Portogallo-915x610.webp"}')},8714:function(e){"use strict";e.exports=JSON.parse('{"langCodes":["th-*","tha-*"],"code":"th","name":"ภาษาไทย","authors":["-"],"flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png"}')}}]);