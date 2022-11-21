"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[795],{70513:function(){},26771:function(t,e,s){var i=s(73396),n=s(76163);e["Z"]={name:"ctrlf-component",props:{events:{type:Array,required:!1,default:()=>[]},renderBox:{type:Boolean,required:!1,default:!0},searchFunction:{type:Function,required:!0},toDisplay:{type:Function,required:!0}},data:function(){return{render:!1,localRenderBox:!1,current:0,results:[],hideResultsBox:!1}},watch:{renderBox:{immediate:!0,handler:function(t){this.localRenderBox=t}}},computed:{mobile:function(){return!0}},created:function(){document.addEventListener("keydown",this.openCtrl,!0)},beforeUnmount:function(){document.removeEventListener("keydown",this.openCtrl,!0)},mounted:function(){},methods:{openCtrl:function(t){t.ctrlKey&&"f"===t.key&&(t.preventDefault(),this.render=!0,this.openSearchBar())},openSearchBar:function(){this.render=!0,this.focusInput(),this.selectInputContent()},focus:function(){this.focusInput(),this.selectInputContent()},focusInput:function(){this.$nextTick((()=>{this.$refs["input-search-box"].focus()}))},selectInputContent:function(){this.$nextTick((()=>{this.$refs["input-search-box"].select()}))},searchEvent:(0,n.Ds)((function(t){this.results=this.searchFunction(t.target.value),this.current=0,this.clickEvent(this.results[this.current])}),400),goToSearchEvent:function(t){this.results.length&&(this.current=t,this.current<0&&(this.current=this.results.length-1),this.current>this.results.length-1&&(this.current=0),this.clickEvent(this.results[this.current]))},clickEvent:function(t){this.$emit("event",t)},closeSearchBar:function(){this.render=!1}},render:function(){return(0,i.h)("div",{class:"search-box-pos",style:{display:this.render?"":"none"}},[(0,i.h)("div",{class:"ch-search-box"},[(0,i.h)("input",{ref:"input-search-box",onInput:t=>this.searchEvent(t),onKeydown:t=>{("enter"===t.key||13===t.keyCode)&&this.goToSearchEvent(this.current+1)},autocomplete:"off"}),(0,i.h)("div",{},Math.min(this.current+1,this.results.length)+"/"+this.results.length),(0,i.h)("span",{class:["fas fa-angle-up",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current+1)}),(0,i.h)("span",{class:["fas fa-angle-down",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current-1)}),(0,i.h)("span",{class:"fas fa-bars",onClick:()=>this.localRenderBox=!this.localRenderBox}),(0,i.h)("span",{class:"fas fa-times",onClick:()=>this.closeSearchBar()})]),this.localRenderBox?(0,i.h)("div",{class:["search-results-box",{hidebox:this.hideResultsBox}]},this.results.map(((t,e)=>(0,i.h)("div",{class:["item",{active:e===this.current}],onClick:()=>this.goToSearchEvent(e)},this.toDisplay(t))))):null])}}},76163:function(t,e,s){s.d(e,{Ds:function(){return i},P2:function(){return n}});s(74916);function i(t,e){var s=null;return function(){clearTimeout(s);var i=arguments,n=this;s=setTimeout((function(){t.apply(n,i)}),e)}}function n(t,e){var s=!1;return function(){s||(t.apply(this,arguments),s=!0,setTimeout((function(){s=!1}),e))}}},15614:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});s(33948);var i=s(73396),n=s(49242),o=s(46909),r=s(42536),h=s(35089),c=s(76163),l={};function a(t){l.start||(l.start=t.touches[0]||t.changedTouches[0])}function d(t){t.preventDefault()}function u(t){var e=t.touches[0]||t.changedTouches[0];if(l.start){if(l.start.clientX-e.clientX>50){const e=new CustomEvent("swipe-left",{bubbles:!0,cancelable:!1});t.target.dispatchEvent(e)}else if(l.start.clientX-e.clientX<-50){const e=new CustomEvent("swipe-right",{bubbles:!0,cancelable:!1});t.target.dispatchEvent(e)}else if(l.start.clientY-e.clientY>50){const e=new CustomEvent("swipe-down",{bubbles:!0,cancelable:!1});t.target.dispatchEvent(e)}else if(l.start.clientY-e.clientY<-50){const e=new CustomEvent("swipe-up",{bubbles:!0,cancelable:!1});t.target.dispatchEvent(e)}delete l.start}}var f={name:"powder-shop",components:{ctrlf:o.Z},data:function(){return{shop:[],artifacts:null,slide:0,focused:null,observer:null,animationEnter:"slide-from-right",openShopList:!1}},computed:{mobile:function(){return this.$store.state.isMobile},saveDataMode:function(){return this.mobile}},watch:{slide:function(t,e){this.focused=null,this.animationEnter=e>t?"slide-from-right":"slide-from-left"}},beforeCreate:function(){this.$store.commit("loading",!0)},created:function(){this.toggleLoading(!0),Promise.all([this.$store.dispatch("GET_POWDER_SHOP"),this.$store.dispatch("GET_ARTIFACT_DB")]).then((t=>{this.shop=t[0],this.artifacts=t[1],this.ready=!0,this.$nextTick((()=>{this.toggleLoading(!1),this.createObserver();var t=document.getElementById("shop-slides");t.addEventListener("wheel",this.mousewheel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!1),t.addEventListener("touchstart",a,{passive:!0}),t.addEventListener("touchmove",d,{passive:!1}),t.addEventListener("touchend",u,{passive:!0})}))})).catch((t=>console.log(t)))},beforeUnmount:function(){var t=document.getElementById("shop-slides");document.removeEventListener("keydown",this.handleKeyDown),t.removeEventListener("wheel",this.mousewheel),t.removeEventListener("touchstart",a),t.removeEventListener("touchmove",d),t.removeEventListener("touchend",u);const e=document.querySelectorAll("li");e.forEach((t=>{this.observer.unobserve(t)})),this.destroyObserver(),this.observer=null},mounted:function(){},beforeUpdate:function(){},updated:function(){},methods:{home:function(){this.$store.commit("toggleMainMenu")},toggleLoading:function(t,e){this.$store.commit("loading",t,e)},loading:function(){return this.$store.commit("loading",!0),new Promise((t=>{setTimeout((()=>{t(),this.$nextTick((()=>{this.$store.commit("loading",!1)}))}),0)}))},artifact:function(t){return this.$store.getters.getArtifact(t)},getArtifactName:function(t){return this.$store.getters.getArtifactName(t)},getArtifactIcon:function(t){return this.$store.getters.getArtifactIcon(t)},getArtifactImage:function(t){return this.$store.getters.getArtifactImage(t)},getRarityIcon:function(t){return this.$store.getters.getRarityIcon(t)},getRoleIcon:function(t){return this.$store.getters.getRoleIcon(t)},toggleShopList:function(){this.openShopList=!this.openShopList},focusArtifact:function(t){this.focused!==t?this.focused=t:this.focused=null},searchFunction:function(t){const e=this.shop;if(!e.length||!t)return[];const s=t.toLowerCase();return e.filter((t=>!(!t.a||!Array.isArray(t.a))&&t.a.some((t=>-1!==this.$store.getters.getArtifactName(t.id).toLowerCase().indexOf(s)))))},searchToDisplay:function(t){return t.dt.join(" ~ ")},goToResult:function(t){this.shop.forEach(((e,s)=>{e===t&&(this.slide=s)}))},mousewheel:(0,c.P2)((function(t){t.deltaY<0?this.slide>0&&(document.getElementById("shop-slides").scrollTop=(this.slide-1)*window.innerHeight):this.slide<this.shop.length&&(document.getElementById("shop-slides").scrollTop=(this.slide+1)*window.innerHeight)}),300),scrollSlide:function(){var t=document.body.scrollTop;window.requestAnimationFrame((()=>{var e=document.body.scrollTop;t>=e?this.slide>0&&(window.scrollY=(this.slide-1)*window.innerHeight-10):this.slide<this.shop.length&&(window.scrollY=(this.slide+1)*window.innerHeight-10)}))},scrollBySwipe:function(t){t>0&&this.slide<this.shop.length?document.getElementById("shop-slides").scrollTop=(this.slide+1)*window.innerHeight:t<0&&this.slide>0&&(document.getElementById("shop-slides").scrollTop=(this.slide-1)*window.innerHeight)},handleKeyDown:(0,c.P2)((function(t){t.ctrlKey||"INPUT"!==t.target.tagName&&"TEXTAREA"!==t.target.tagName&&"true"!=t.target.contentEditable&&(t.preventDefault(),39===t.keyCode||"ArrowRight"===t.key||40===t.keyCode||"ArrowDown"===t.key||68===t.keyCode||"d"===t.key?this.scrollBySwipe(1):37!==t.keyCode&&"ArrowLeft"!==t.key&&38!==t.keyCode&&"ArrowUp"!==t.key&&65!==t.keyCode&&"a"!==t.key||this.scrollBySwipe(-1))}),300),scrollToSelected:function(t){document.getElementById("shop-slides").scrollTop=t*window.innerHeight},createObserver:function(){let t={root:null,rootMargin:"0px",threshold:.8};this.observer=new IntersectionObserver((t=>{t.forEach((t=>{var e=parseInt(t.target.attributes.index.value);t.isIntersecting&&(this.slide=e)}))}),t);const e=document.querySelectorAll("li");e.forEach((t=>{this.observer.observe(t)}))},destroyObserver:function(){this.observer&&this.observer.disconnect()}},render:function(){return(0,i.h)("section",{class:"",id:"shop-container"},[(0,i.h)(r.Z,{mobile:this.mobile,options:[{title:"Search",class:"fa fa-search",click:"search"},{title:"Home",class:"fa fa-home",click:"home"}],onHome:()=>this.home(),onSearch:()=>this.$refs.ctrlf.openSearchBar()}),(0,i.h)(o.Z,{ref:"ctrlf",events:this.shop,searchFunction:this.searchFunction,toDisplay:this.searchToDisplay,onEvent:this.goToResult}),(0,i.h)("ul",{style:{width:"100%",height:"100%",overflow:"auto"},id:"shop-slides",onSwipeLeft:()=>this.scrollBySwipe(1),onSwipeRight:()=>this.scrollBySwipe(-1),onSwipeUp:()=>this.scrollBySwipe(-1),onSwipeDown:()=>this.scrollBySwipe(1)},[this.shop[this.slide]?(0,i.h)(n.uT,{name:this.animationEnter},(()=>[(0,i.h)("div",{key:this.slide,class:"powder-slide-rotations",style:{position:"absolute","z-index":1,top:0,left:0}},[(0,i.h)("div",{class:"title-container"},[(0,i.h)("button",{class:["fa rotation-list-btn",{"fa-list":!this.openShopList,"fa-times":this.openShopList}],onClick:()=>this.toggleShopList()}),this.shop[this.slide].nid?(0,i.wy)((0,i.h)("a",{target:"_blank",href:"https://page.onstove.com/epicseven/global/view/"+this.shop[this.slide].nid,crossorigin:"anonymous",SameSite:"Lax",style:{float:"right",height:"100%",width:"110px","margin-right":"14px",background:"url(https://static-cdn.onstove.com/0.0.14/img/gnb/bi.svg) no-repeat scroll 0% 50%"}}),[[h.Z,"Read notice on stove"]]):null,(0,i.h)("span",{style:{float:"left","padding-left":"10px"}},this.slide+1+"/"+this.shop.length),(0,i.h)("div",{style:{margin:"0 180px 0 55px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},this.shop[this.slide].dt.join(" ~ "))]),(0,i.h)("div",{class:"rotation"},[this.saveDataMode?(0,i.h)("div",{style:{"align-self":"center",width:"100%","max-width":"450px"}},[this.shop[this.slide].a.map((t=>{var e=(window.innerHeight-100)/this.shop[this.slide].a.length+"px";return(0,i.h)("div",{style:{display:"flex",width:"100%","align-items":"center"}},[(0,i.h)("img",{src:this.getArtifactIcon(t.id),crossorigin:"anonymous",SameSite:"Lax",style:{height:e}}),(0,i.h)("img",{src:this.getRoleIcon(this.artifact(t.id).role),style:{height:"30px"}}),(0,i.h)("span",{style:{flex:1,margin:"0 20px"}},this.getArtifactName(t.id)),(0,i.h)("span",{style:{overflow:"hidden","white-space":"nowrap","padding-left":"8px"}},new Array(this.artifact(t.id).rarity||1).fill((0,i.h)("img",{src:this.getRarityIcon(),style:{height:"20px","margin-left":"-8px","vertical-align":"middle"}})))])}))]):this.shop[this.slide].a.map(((t,e)=>(0,i.h)("div",{class:["artifact",{focused:this.focused===e}],onClick:()=>this.focusArtifact(e)},[(0,i.h)("img",{class:"artwork",crossorigin:"anonymous",SameSite:"Lax",src:this.getArtifactImage(t.id),onLoad:t=>t.target.style.opacity=1}),(0,i.h)("span",{style:{"padding-left":"8px"}},new Array(this.artifact(t.id).rarity||1).fill((0,i.h)("img",{src:this.getRarityIcon(),SameSite:"Lax",crossorigin:"anonymous",style:{height:"20px","margin-left":"-8px","vertical-align":"middle"}}))),(0,i.h)("span",{class:"vertical-name"},this.getArtifactName(t.id))]))),this.shop[this.slide].content?(0,i.h)("div",{innerHTML:this.shop[this.slide].content}):null])])])):null,this.shop.map(((t,e)=>(0,i.h)("li",{class:"powder-slide-rotations",style:{visibility:"hidden"},index:e},[(0,i.h)("div",{class:"title-container"},"Data della rotazione"),(0,i.h)("div",{class:"rotation"})])))]),this.shop&&this.openShopList?(0,i.h)("div",{class:"glass-container rotation-list-box"},[this.shop.map(((t,e)=>(0,i.h)("div",{class:["elements",{active:this.slide===e}],onClick:()=>this.scrollToSelected(e)},e+1+". "+t.dt[0])))]):null])}};const p=f;var g=p},46909:function(t,e,s){var i=s(93134);s(91010);const n=i.Z;e["Z"]=n},91010:function(t,e,s){s(70513)},93134:function(t,e,s){s.d(e,{Z:function(){return i.Z}});var i=s(26771)}}]);