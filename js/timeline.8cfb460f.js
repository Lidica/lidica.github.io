(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[951],{77475:function(t,e,i){var n=i(43157),s=i(4411),a=i(70111),o=i(5112),r=o("species"),h=Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,s(e)&&(e===h||n(e.prototype))?e=void 0:a(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?h:e}},65417:function(t,e,i){var n=i(77475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},7207:function(t){var e=TypeError,i=9007199254740991;t.exports=function(t){if(t>i)throw e("Maximum allowed index exceeded");return t}},6790:function(t,e,i){"use strict";var n=i(43157),s=i(26244),a=i(7207),o=i(49974),r=function(t,e,i,h,c,l,u,d){var g,f,m=c,p=0,v=!!u&&o(u,d);while(p<h)p in i&&(g=v?v(i[p],p,e):i[p],l>0&&n(g)?(f=s(g),m=r(t,e,g,f,m,l-1)-1):(a(m+1),t[m]=g),m++),p++;return m};t.exports=r},84944:function(t,e,i){"use strict";var n=i(82109),s=i(6790),a=i(47908),o=i(26244),r=i(19303),h=i(65417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),i=o(e),n=h(e,0);return n.length=s(n,e,e,i,0,void 0===t?1:r(t)),n}})},33792:function(t,e,i){var n=i(51223);n("flat")},70513:function(){},23528:function(){},26771:function(t,e,i){"use strict";var n=i(73396),s=i(76163);e["Z"]={name:"ctrlf-component",props:{events:{type:Array,required:!1,default:()=>[]},renderBox:{type:Boolean,required:!1,default:!0},searchFunction:{type:Function,required:!0},toDisplay:{type:Function,required:!0}},data:function(){return{render:!1,localRenderBox:!1,current:0,results:[],hideResultsBox:!1}},watch:{renderBox:{immediate:!0,handler:function(t){this.localRenderBox=t}}},computed:{mobile:function(){return!0}},created:function(){document.addEventListener("keydown",this.openCtrl,!0)},beforeUnmount:function(){document.removeEventListener("keydown",this.openCtrl,!0)},mounted:function(){},methods:{openCtrl:function(t){t.ctrlKey&&"f"===t.key&&(t.preventDefault(),this.render=!0,this.openSearchBar())},openSearchBar:function(){this.render=!0,this.focusInput(),this.selectInputContent()},focus:function(){this.focusInput(),this.selectInputContent()},focusInput:function(){this.$nextTick((()=>{this.$refs["input-search-box"].focus()}))},selectInputContent:function(){this.$nextTick((()=>{this.$refs["input-search-box"].select()}))},searchEvent:(0,s.Ds)((function(t){this.results=this.searchFunction(t.target.value),this.current=0,this.clickEvent(this.results[this.current])}),400),goToSearchEvent:function(t){this.results.length&&(this.current=t,this.current<0&&(this.current=this.results.length-1),this.current>this.results.length-1&&(this.current=0),this.clickEvent(this.results[this.current]))},clickEvent:function(t){this.$emit("event",t)},closeSearchBar:function(){this.render=!1}},render:function(){return(0,n.h)("div",{class:"search-box-pos",style:{display:this.render?"":"none"}},[(0,n.h)("div",{class:"ch-search-box"},[(0,n.h)("input",{ref:"input-search-box",onInput:t=>this.searchEvent(t),onKeydown:t=>{("enter"===t.key||13===t.keyCode)&&this.goToSearchEvent(this.current+1)},autocomplete:"off"}),(0,n.h)("div",{},Math.min(this.current+1,this.results.length)+"/"+this.results.length),(0,n.h)("span",{class:["fas fa-angle-up",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current+1)}),(0,n.h)("span",{class:["fas fa-angle-down",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current-1)}),(0,n.h)("span",{class:"fas fa-bars",onClick:()=>this.localRenderBox=!this.localRenderBox}),(0,n.h)("span",{class:"fas fa-times",onClick:()=>this.closeSearchBar()})]),this.localRenderBox?(0,n.h)("div",{class:["search-results-box",{hidebox:this.hideResultsBox}]},this.results.map(((t,e)=>(0,n.h)("div",{class:["item",{active:e===this.current}],onClick:()=>this.goToSearchEvent(e)},this.toDisplay(t))))):null])}}},7620:function(t,e,i){"use strict";var n=i(73396),s=i(35089),a=i(82229);e["Z"]={name:"shop-overlay",props:["events","vertical","timelinelength","timelinedates","daysize","direction"],data:function(){return{initialRender:!1,timelineItems:[],isOpen:!1}},created:function(){},computed:{rdte:function(){return[0,1].filter((t=>t!==this.direction))[0]}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},checkRender:function(){},dateDiff:function(t,e){if(!t||!e)return 1;let i=t,n=e;if(i>n){var s=i;i=n,n=s}return(new Date(n).getTime()-new Date(i).getTime())/864e5},getEvents:function(){}},render:function(){return(0,n.h)("section",{},[(0,n.h)("div",{class:"tshop-overlay-label noselect",onClick:()=>this.isOpen?this.close():this.open()},[(0,n.h)("div",{style:"font-size: 20px;line-height: 40px;"+(this.vertical?"height:"+this.$store.state.screenHeight+"px;":"width:"+this.$store.state.screenWidth+"px")},this.isOpen?[(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]}),(0,n.h)("span","Hide shop rotations"),(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]})]:[(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]}),(0,n.h)("span","View shop rotations"),(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]})])]),(0,n.h)("div",{class:["glass-container shop-timeline",{open:this.isOpen}],style:{[this.vertical?"height":"width"]:"100%"}},[this.events.map(((t,e)=>(0,n.h)("div",{class:"shop-row"},[t.map((t=>t.dt[1]?(0,n.h)("div",{class:"shop-rotation",style:{[this.vertical?"height":"width"]:this.dateDiff(t.dt[this.direction],t.dt[this.rdte],this.direction)*this.daysize+"px",[this.vertical?"top":"left"]:this.dateDiff(t.dt[this.direction],this.timelinedates[1!==this.direction?this.timelinedates.length-1:0])*this.daysize+"px"}},(t.a||t.c).map((t=>(0,n.wy)((0,n.h)("img",{src:0===e?"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_art0000.png":"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png","data-src":0===e?this.$store.getters.getArtifactIcon(t.id):this.$store.getters.getHeroIcon(t.id),crossorigin:"anonymous",SameSite:"Lax"}),[[a.Z],[s.Z,()=>0===e?this.$store.getters.getArtifactName(t.id):this.$store.getters.getHeroName(t.id)]])))):null))])))])])}}},81208:function(t,e,i){"use strict";i(33948),i(26699),i(2707),i(24603),i(28450),i(74916),i(84944),i(33792),i(65069);var n,s=i(73396),a=i(41622),o=i(35089),r=i(82229),h=i(86235),c=i(42536),l=i(46909),u=i(52784),d=i(43241);e["Z"]={name:"timeline-main",components:{},props:["standalone"],data:function(){return{VERSION:1.15,events:[],timelineItems:[],vertical:!1,daySize:20,direction:0,today:"",openBanner:!1,openChangelog:!1,covenantShop:[],galaxyShop:[],powderShop:[],balance:[]}},beforeCreate:function(){},created:function(){this.toggleLoading(!0,"downloading"),Promise.all([(0,u.Z)("./data/timeline/covenant.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/mystic.json").catch((()=>"[]")),this.$store.dispatch("GET_HERO_DB"),this.$store.dispatch("GET_ARTIFACT_DB")]).then((t=>{this.events=this.compatibilityModeDates([].concat(JSON.parse(t[0]),JSON.parse(t[1]))),this.today=(new Date).toISOString().substr(0,10),this.$nextTick((()=>{this.toggleLoading(!1)})),Promise.all([(0,u.Z)("./data/timeline/powder-shop.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/galaxy-coin-shop.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/covenant-coin-shop.json").catch((()=>"[]"))]).then((t=>{this.powderShop=this.compatibilityModeDates(JSON.parse(t[0])),this.galaxyShop=this.compatibilityModeDates(JSON.parse(t[1])),this.covenantShop=this.compatibilityModeDates(JSON.parse(t[2]))}))}))},beforeMount:function(){},mounted:function(){n=this.$refs.TIMELINE_CONTAINER,n.addEventListener("wheel",this.horizionatlScroll)},beforeUnmount:function(){n.removeEventListener("wheel",this.horizionatlScroll),n=null},watch:{timelineDates:function(){this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))},direction:function(){this.loading().then((()=>{this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}))},vertical:function(t){this.direction=t?1:0,this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}},computed:{mobile:function(){return this.$store.state.isMobile},timelineDates:function(){for(var t=[this.today],e=0;e<this.events.length;e++){let n=this.events[e].dt;if(n)for(var i=0;i<n.length;i++)t.includes(n[i])||t.push(n[i])}return t.sort(((t,e)=>t<e?1:t===e?0:-1)),t},timelinePixelLength:function(){return this.dateDiff(this.timelineDates[0],this.timelineDates[this.timelineDates.length-1])}},methods:{compatibilityModeDates(t){var e=t=>t<10?"0"+t:t;return t.forEach((t=>{t.dt=(t.dt||[]).map((t=>{var i=new Date(t);return i.getUTCFullYear()+"-"+e(i.getUTCMonth()+1)+"-"+e(i.getUTCDate())}))})),t},home:function(){this.$store.commit("toggleMainMenu")},toggleLoading:function(t,e){this.$store.commit("loading",t,e)},loading:function(t){return this.toggleLoading(!0,t),new Promise((t=>{setTimeout((()=>{t(),this.$nextTick((()=>{this.$store.commit("loading",!1)}))}),0)}))},getHero:function(t){return this.$store.getters.getHero(t)},getHeroName:function(t){return this.$store.getters.getHeroName(t)},getHeroIcon:function(t){return this.$store.getters.getHeroIcon(t)},getArtifact:function(t){return this.$store.getters.getArtifact(t)},getArtifactName:function(t){return this.$store.getters.getArtifactName(t)||""},getArtifactIcon:function(t){return this.$store.getters.getArtifactIcon(t)},showSearchBar:function(){this.$refs.ctrlf.openSearchBar()},searchFunction:function(t){const e=this.events;if(!e.length||!t)return[];const i=new RegExp("(\\b|-)"+t,"i");var n=[["Banner",this.events],["Powder Shop",this.powderShop],["Galaxy Coin",this.galaxyShop],["Covenant Coin",this.covenantShop]].map((t=>t[1].filter((t=>!(!t.name||!i.test(t.name))||(!(!t.c||!t.c.some((t=>i.test(this.getHeroName(t.id)))))||(!!(t.a&&t.a.length&&t.a.some((t=>i.test(this.getArtifactName(t.id)))))||void 0)))).map((e=>("Banner"===t[0]?(e.handler=()=>this.$refs["shop-timeline"].close(),e.resultName=e.c?e.c.map((t=>this.getHeroName(t.id))).join(", "):t[0]):(e.handler=()=>this.$refs["shop-timeline"].open(),e.resultName=t[0]),e))))).flat().sort(((t,e)=>t.dt[0]<e.dt[0]?1:t.dt[0]===e.dt[0]?0:-1));return n},searchToDisplay:function(t){return t.dt[0]+" - "+t.resultName},goToSearchResult:function(t){if(t){t.handler&&t.handler();var e=this.dateDiff(t.dt[this.direction],this.timelineDates[1!==this.direction?this.timelineDates.length-1:0]),i={top:0,left:0,behavior:"smooth"};this.vertical?i.top=e*this.daySize:i.left=e*this.daySize+100-window.innerWidth/2,n.scrollTo(i)}},goToDate:function(t){this.$refs[t].scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},horizionatlScroll:function(t){const e=n;if(this.vertical)return;const i=t.deltaY<0&&e.scrollLeft>0,s=t.deltaY>0&&e.scrollLeft<e.scrollWidth-e.clientWidth;(i||s)&&(e.scrollLeft+=t.deltaY)},onContextMenu:function(t){this.$contextmenu(t,[{name:"Direction",children:[{class:0===this.direction?"fa fa-check":"",name:"Normal",handler:()=>this.direction=0},{class:1===this.direction?"fa fa-check":"",name:"Reverse",handler:()=>this.direction=1}]},{name:"Orientation",children:[{class:this.vertical?"":"fa fa-check",name:"Horizontal",handler:()=>this.vertical=!1},{class:this.vertical?"fa fa-check":"",name:"Vertical",handler:()=>this.vertical=!0}]},{name:"Change Day Size",children:[15,20,30,40,50].map((t=>({class:this.daySize===t?"fa fa-check":"",name:t,handler:()=>this.setDaySize(t)})))},{class:"fas fa-map-marker-alt",name:this.$t("strings.scroll_to_today"),handler:()=>this.goToDate(this.today)},{class:"fa fa-search",name:this.$t("strings.search"),handler:()=>this.showSearchBar()}])},dateDiff:function(t,e){if(!t||!e)return 1;let i=t,n=e;if(i>n){var s=i;i=n,n=s}return(new Date(n).getTime()-new Date(i).getTime())/864e5},formatDate:function(t,e){if(!t)return"";var i=t.split(/-/g),n=i[2],s=["January","February","March","April","May","June","July","August","September","October","November","December"][Number(i[1])-1],a=i[0];return Number(n)+" "+s.slice(0,3)+" "+a+(e?" - "+e:"")},dayGraphSize:function(t,e){return this.daySize*this.dateDiff(t,e)},setDaySize:function(t){this.loading().then((()=>{this.daySize=t,this.timelineItems=this.buildRenderArray()}))},buildRenderArray:function(){const t=[0,1][this.direction||0],e=[0,1].filter((e=>e!==t))[0],i=(t,e)=>({date:t,size:1===this.direction?this.dayGraphSize(e,t):this.dayGraphSize(t,e),m:[],n:[],e:[]});var n=this.events,s=this.timelineDates.slice().reverse(),a=[];1===this.direction&&(s=s.reverse());for(var o=0;o<s.length;o++){console.log(s[o]),a[o]||(a[o]=i(s[o],s[o+1]));for(var r=0;r<n.length;r++){var h=-1,c=n[r].dt[t]||n[r].dt[e],l="event"===n[r].type?"e":"mystic"===n[r].type?"m":"n";if(s[o]===c){n[r].dt[1]<this.today?n[r].bTooltip='Ended: <span style="color: #ff1919">'+(0,d.cX)(n[r].dt[1],this.today)+"</span> ago":n[r].dt[0]>this.today?n[r].bTooltip='Starts: <span style="color: green">'+(0,d.cX)(n[r].dt[0],this.today)+"</span>":n[r].bTooltip='Started: <span style="color: green">'+(0,d.cX)(n[r].dt[0],this.today)+'</span> ago<br>Ends: <span style="color: #ff1919">'+(0,d.cX)(n[r].dt[1],this.today)+"</span>",n[r].duration=this.dateDiff(n[r].dt[0],n[r].dt[1]),n[r].bannerClass="","limited"===n[r].type?n[r].bannerClass="limited":"mystic"===n[r].type?n[r].bannerClass="mystic":n[r].c&&n[r].c[0]&&(n[r].bannerClass=this.getHero(n[r].c[0].id).attribute),n[r].bannerSize=a[o].size-10;for(var u=0;u<a[o][l].length;u++)if(!a[o][l][u]){a[o][l][u]=n[r],h=u;break}-1===h&&(a[o][l].push(n[r]),h=a[o][l].length-1);var g=s.indexOf(n[r].dt[e])||1;for(u=o;u<g;u++)a[u]||(a[u]=i(s[u],s[u+1])),u!=o&&(n[r].bannerSize+=a[u].size),a[u][l][h]=n[r]}}}return a}},render:function(){return(0,s.h)("div",{style:"height: inherit",onContextmenu:this.onContextMenu},[this.openChangelog?(0,s.h)("div",{class:"center-modal",style:"position: absolute; z-index: 10;",onClick:t=>t.target===t.currentTarget?this.openChangelog=!this.openChangelog:null},[(0,s.h)("div",{class:"flat-modal glass-container-2",style:"padding: 10px; color: var(--font-color); overflow: auto;"},[(0,s.h)(a.Z,{path:"/views/timeline/",style:"height: auto;"})])]):null,(0,s.h)(c.Z,{mobile:this.mobile,options:[{title:this.$t("strings.search"),class:"fa fa-search",click:"search"},{title:this.$t("strings.scroll_to_today"),class:"fas fa-map-marker-alt",click:"goToday"},{title:this.$t("strings.vertical_toggle"),class:"fa fa-mobile "+(this.vertical?"fa-rotate-90":""),click:"vertical"},{title:this.$t("strings.changelog"),class:"fa fa-history",click:"changelog"},this.standalone?{}:{title:this.$t("strings.home"),class:"fa fa-home",click:"home"}],onSearch:()=>this.showSearchBar(),onGoToday:()=>this.goToDate(this.today),onHome:()=>this.home(),onVertical:()=>this.loading().then((()=>this.vertical=!this.vertical)),onChangelog:()=>this.openChangelog=!this.openChangelog,onLanguage:this.$localePicker}),(0,s.h)(l.Z,{ref:"ctrlf",key:"ctrlf-timeline",mobile:this.mobile,events:this.events,toDisplay:this.searchToDisplay,searchFunction:this.searchFunction,onEvent:this.goToSearchResult}),(0,s.h)("div",{ref:"TIMELINE_CONTAINER",style:"height: inherit; width: inherit; overflow: auto;"},[(0,s.h)("ul",{class:this.vertical?"vtimeline":"timeline"},[(0,s.h)(h.Z,{ref:"shop-timeline",events:[this.powderShop,this.galaxyShop,this.covenantShop],vertical:this.vertical,timelinedates:this.timelineDates,daysize:this.daySize,timelinelength:this.timelinePixelLength*this.daySize,direction:this.direction}),this.timelineItems.map(((t,e)=>(0,s.h)("li",{ref:t.date,key:t.date,class:{today:this.today===t.date},index:e,"data-date":this.$d(t.date,"short"),id:t.date,style:{[this.vertical?"height":"width"]:t.size+"px"}},[["m","n"].map((e=>(0,s.h)("section",{class:"wrapper-"+e,key:"wrapper-key-"+t.date+e},[t[e].map((e=>e.dt[this.direction||0]===t.date?(0,s.wy)((0,s.h)("div",{ref:e.id+"-"+t.date,key:e.id,class:"banner "+e.bannerClass,tabindex:0,"data-hero":e.c?e.c[0].id:"null",style:{[this.vertical?"height":"width"]:e.bannerSize+"px"}},[e.c?(0,s.h)("div",{class:"icon_container"},e.c.map((t=>(0,s.h)("div",{class:{isnew:t.new}},[(0,s.wy)((0,s.h)("img",{"data-src":this.getHeroIcon(this.getHero(t.id).id),src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png",crossorigin:"anonymous",SameSite:"Lax"}),[[r.Z]])])))):null,e.name?(0,s.h)("span",{class:"banner-description"},e.name):null]),[[o.Z,{value:e.bTooltip}]]):(0,s.h)("div",{class:"banner dummy"})))])))])))])])])},renderError:function(){}}},43241:function(t,e,i){"use strict";i.d(e,{OW:function(){return a},Pg:function(){return s},R6:function(){return r},cX:function(){return n},uG:function(){return o}});i(33948);function n(t,e){var i=new Date(new Date(t).toISOString().substr(0,10));e||(e=(new Date).toISOString().substr(0,10));var n=new Date(e);if(i>n){var s=i;i=n,n=s}var a=i.getFullYear(),o=a%4===0&&a%100!==0||a%400===0?29:28,r=[31,o,31,30,31,30,31,31,30,31,30,31],h=n.getFullYear()-a,c=n.getMonth()-i.getMonth();c<0&&(h--,c+=12);var l=n.getDate()-i.getDate();return l<0&&(c>0?c--:(h--,c=11),l+=r[i.getMonth()]),h+"Y "+c+"M "+l+"D"}function s(t,e){if(!t||!e)return 1;isNaN(t)&&(t=new Date(t).getTime()),isNaN(e)&&(e=new Date(e).getTime());let i=t,n=e;if(i>n){var s=i;i=n,n=s}return(n-i)/864e5}function a(t,e="2022-09-29"){return!(Math.round(s(t,e))%14)}function o(t,e=0,i){if(t instanceof Date||(t=new Date(t)),i&&t.setUTCHours(...i),void 0===e||isNaN(e))return console.error("Missing target day."),null;e=Math.min(e,6);var n=new Date(t),s=new Date(t);while(n.getUTCDay()!=e)n.setUTCDate(n.getUTCDate()+1);while(s.getDay()!=e)s.setUTCDate(s.getUTCDate()-1);Math.abs(t-n)<Math.abs(t-s)?t.setTime(n):t.setTime(s)}function r(t,e){var i=!1,n=new Date(new Date(t).toISOString().substr(0,10));e||(e=(new Date).toISOString().substr(0,10));var s=new Date(e);if(n>s){i=!0;var a=n;n=s,s=a}var o=n.getFullYear(),r=o%4===0&&o%100!==0||o%400===0?29:28,h=[31,r,31,30,31,30,31,31,30,31,30,31],c=s.getFullYear()-o,l=s.getMonth()-n.getMonth();l<0&&(c--,l+=12);var u=s.getDate()-n.getDate();return u<0&&(l>0?l--:(c--,l=11),u+=h[n.getMonth()]),[c,l,u,i]}},76163:function(t,e,i){"use strict";i.d(e,{Ds:function(){return n},P2:function(){return s}});i(74916);function n(t,e){var i=null;return function(){clearTimeout(i);var n=arguments,s=this;i=setTimeout((function(){t.apply(s,n)}),e)}}function s(t,e){var i=!1;return function(){i||(t.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),e))}}},41622:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});i(33948);var n=i(73396),s={name:"ChangelogComponent",props:["path"],data:function(){return{changelog:[],normalizedPath:this.path,changelogLang:"",changelogFetching:!1,changelogFailed:!1,isVisible:!1,observer:null}},created:function(){while("."===this.normalizedPath.charAt(0)||"/"===this.normalizedPath.charAt(0))this.normalizedPath=this.normalizedPath.substring(1);this.observer=new IntersectionObserver(this.onElementObserved,{root:this.$el,threshold:0})},beforeUnmount(){this.observer.disconnect()},mounted:function(){this.observer.observe(this.$refs.changelog)},computed:{lang:function(){return this.$i18n.locale}},watch:{lang:function(){this.changelog=[],!this.changelogFetching&&this.visible&&this.getChangelog()}},methods:{onElementObserved(t){t.forEach((({isIntersecting:t})=>{t?(this.visible=!0,this.changelogFetching||this.changelogFailed||this.changelog.length&&this.changelogLang===this.$i18n.locale||this.getChangelog()):this.visible=!1}))},getChangelog:function(){return this.changelogFailed=!1,this.changelogFetching=!0,Promise.all([i(68080)(`./${this.normalizedPath}changelog/${this.$i18n.locale}.json`).catch((async()=>await i(57630)(`./${this.normalizedPath}changelog/en.json`)))]).then((([t])=>{var e=t.default||[];return this.changelog=e,Promise.resolve(t)})).catch((t=>(this.changelogFailed=t,Promise.resolve(!1)))).finally((()=>{this.changelogLang=this.$i18n.locale,this.changelogFetching=!1}))}},render:function(){return(0,n.h)("div",{ref:"changelog",class:"camping-change-log"},[(0,n.h)("h2",{class:"title"},[this.$t("strings.changelog"),":"]),this.changelog.length?this.changelog.map((t=>(0,n.h)("section",{class:"changelog-section"},[(0,n.h)("header",{class:"changelog-sec-header"},[(0,n.h)("span",{class:"changelog-badge version"},t[0].toFixed(2)),(0,n.h)("h2",{class:"changelog-header-title"},t[1])]),t[2].map((t=>(0,n.h)("ul",{},[(0,n.h)("li",{},[(0,n.h)("div",{class:"changelog-badge "+t[0]},t[0]),(0,n.h)("div",{class:"changelog-description flex-fill",innerHTML:t[1]})])])))]))):(0,n.h)("div",{style:"text-align: center"},[this.changelogFetching?(0,n.h)("div",{class:"fa fa-circle-notch fa-spin"}):this.changelogFailed?(0,n.h)("div",{},this.changelogFailed):this.changelog&&this.changelog.length?null:(0,n.h)("div",{},"Changelog is empty")])])}};const a=s;var o=a},46909:function(t,e,i){"use strict";var n=i(93134);i(91010);const s=n.Z;e["Z"]=s},86235:function(t,e,i){"use strict";var n=i(71883),s=(i(17301),i(40089));const a=(0,s.Z)(n.Z,[["__scopeId","data-v-25dd5ae8"]]);e["Z"]=a},94263:function(t,e,i){"use strict";i.r(e);var n=i(36034),s=i(40089);const a=(0,s.Z)(n.Z,[["__scopeId","data-v-a6832fca"]]);e["default"]=a},91010:function(t,e,i){"use strict";i(70513)},17301:function(t,e,i){"use strict";i(23528)},93134:function(t,e,i){"use strict";i.d(e,{Z:function(){return n.Z}});var n=i(26771)},71883:function(t,e,i){"use strict";i.d(e,{Z:function(){return n.Z}});var n=i(7620)},36034:function(t,e,i){"use strict";i.d(e,{Z:function(){return n.Z}});var n=i(81208)},68080:function(t,e,i){var n={"./views/camping-simulator/changelog/en.json":[35502,402],"./views/tierlist-maker/changelog/en.json":[90419,57],"./views/timeline/changelog/en.json":[7467,483],"./views/timeline2/changelog/en.json":[58370,393]};function s(t){if(!i.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return i.e(e[1]).then((function(){return i.t(s,19)}))}s.keys=function(){return Object.keys(n)},s.id=68080,t.exports=s},57630:function(t,e,i){var n={"./views/camping-simulator/changelog/en.json":[35502,402],"./views/tierlist-maker/changelog/en.json":[90419,57],"./views/timeline/changelog/en.json":[7467,483],"./views/timeline2/changelog/en.json":[58370,393]};function s(t){if(!i.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return i.e(e[1]).then((function(){return i.t(s,19)}))}s.keys=function(){return Object.keys(n)},s.id=57630,t.exports=s}}]);