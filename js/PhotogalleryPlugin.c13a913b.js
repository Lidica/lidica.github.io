"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[909],{39624:function(t,i,e){e.r(i),e.d(i,{default:function(){return E}});e(33948),e(41817);var o=e(73396),n=e(87139),s=e(49242);const a=t=>((0,o.dD)("data-v-20144ad8"),t=t(),(0,o.Cn)(),t),h={class:"container noselect"},r={class:"slide-counter"},c=a((()=>(0,o._)("i",{class:"fa fa-times"},null,-1))),l=[c],d=a((()=>(0,o._)("i",{class:"fas fa-copy"},null,-1))),g=[d],m=a((()=>(0,o._)("i",{class:"fas fa-download"},null,-1))),u=[m],p=a((()=>(0,o._)("i",{class:"fa fa-angle-left"},null,-1))),f=[p],v=a((()=>(0,o._)("i",{class:"fa fa-angle-right"},null,-1))),z=[v],w={class:"center"},I={class:"fas fa-spinner fa-spin"},y={key:0},b=["src"],x=a((()=>(0,o._)("br",null,null,-1))),M={style:{height:"100%",width:"100%"}},k=["onLoad","src"],_={key:0},Z=["innerHTML"];function O(t,i,a,c,d,m){const p=(0,o.up)("Interactive"),v=(0,o.Q2)("tooltip");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",{class:(0,n.C_)(["nav-bar text-black-stroke",{invisible:!d.ui}])},[(0,o._)("span",r,(0,n.zw)(d.localIndex+1)+"/"+(0,n.zw)(a.album.length),1),(0,o.wy)(((0,o.wg)(),(0,o.iD)("span",{class:"nav-icon",onClick:i[0]||(i[0]=(...t)=>m.closeGallery&&m.closeGallery(...t))},l)),[[v,()=>this.$t("strings.close")]]),m.canCopy?(0,o.wy)(((0,o.wg)(),(0,o.iD)("span",{key:0,class:"nav-icon",onClick:i[1]||(i[1]=(...i)=>t.copyImage&&t.copyImage(...i)),style:{"font-weight":"800","margin-top":"-2px","font-size":"0.8em"}},g)),[[v,()=>this.$t("strings.copy")]]):(0,o.kq)("",!0),m.canDownload?(0,o.wy)(((0,o.wg)(),(0,o.iD)("span",{key:1,class:"nav-icon",onClick:i[2]||(i[2]=(...t)=>m.downloadImage&&m.downloadImage(...t)),style:{"font-weight":"800","margin-top":"-2px","font-size":"0.8em"}},u)),[[v,()=>this.$t("strings.download")]]):(0,o.kq)("",!0),(0,o.wy)(((0,o.wg)(),(0,o.iD)("span",{class:(0,n.C_)(["nav-icon",{invisible:m.isLast}]),onClick:i[3]||(i[3]=(...t)=>m.nextImage&&m.nextImage(...t)),style:{"font-weight":"800","margin-top":"-2px"}},[(0,o.Uk)(">")],2)),[[v,()=>this.$t("strings.next")]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("span",{class:(0,n.C_)(["nav-icon",{invisible:m.isFirst}]),onClick:i[4]||(i[4]=(...t)=>m.prevImage&&m.prevImage(...t)),style:{"font-weight":"800","margin-top":"-2px"}},[(0,o.Uk)("<")],2)),[[s.F8,!m.isFirst],[v,()=>this.$t("strings.back")]]),(0,o._)("div",{class:(0,n.C_)(["next-prev-img",{invisible:m.isFirst}]),onClick:i[5]||(i[5]=(...t)=>m.prevImage&&m.prevImage(...t)),style:{left:"10px"}},f,2),(0,o._)("div",{class:(0,n.C_)(["next-prev-img",{invisible:m.isLast}]),onClick:i[6]||(i[6]=(...t)=>m.nextImage&&m.nextImage(...t)),style:{right:"10px"}},z,2)],2),(0,o._)("div",w,[(0,o.wy)((0,o._)("i",I,null,512),[[s.F8,d.loadingImage]]),d.imageFailed?((0,o.wg)(),(0,o.iD)("span",y,[(0,o._)("img",{src:e(28890)},null,8,b),x,(0,o.Uk)((0,n.zw)(t.$t("strings.app_not_found")),1)])):(0,o.kq)("",!0)]),(0,o._)("div",M,[(0,o.Wm)(p,{height:1,width:1,maxzoom:10,minzoom:.03,padding:"50 0 60 0",smooth:!0,onDraggingStart:m.hideUI,onDraggingEnd:m.showUI},{default:(0,o.w5)((({loadEvent:t})=>[a.album[d.localIndex]?((0,o.wg)(),(0,o.iD)("img",{ref:"active-image",key:d.localIndex,style:{transform:"scale(0.2)",opacity:"0"},onLoad:i=>{t(i),m.imageLoaded(i)},onError:i[7]||(i[7]=(...t)=>m.imageFailedLoading&&m.imageFailedLoading(...t)),src:a.album[d.localIndex].src},null,40,k)):(0,o.kq)("",!0)])),_:1},8,["minzoom","onDraggingStart","onDraggingEnd"])]),(0,o._)("div",{class:(0,n.C_)(["caption text-black-stroke",{invisible:!d.ui}]),ref:"debug-gallery"},[a.album[d.localIndex]?((0,o.wg)(),(0,o.iD)("p",_,(0,n.zw)(a.album[d.localIndex].description),1)):(0,o.kq)("",!0),a.album[d.localIndex]&&a.album[d.localIndex].author?((0,o.wg)(),(0,o.iD)("span",{key:1,innerHTML:"Author: "+a.album[d.localIndex].author},null,8,Z)):(0,o.kq)("",!0)],2)])}e(74916),e(60285),e(41637);var C=e(39975),D={name:"PhotoGallery",emits:["close"],components:{Interactive:C.Z},props:{index:{type:Number,default:0},album:{type:Array,default(){return[]}},download:{type:Boolean,default:!0},copy:{type:Boolean,default:!0},onCloseHandler:{type:Function,default(){}}},data(){return{ui:!0,localIndex:0,loadingImage:!0,imageFailed:!1}},computed:{isFirst(){return 0===this.localIndex},isLast(){return!this.album.length||this.localIndex===this.album.length-1},canDownload(){return this.download&&!this.loadingImage&&!this.imageFailed},canCopy(){return!1}},created(){this.localIndex=this.index},watch:{localIndex:function(){this.loadingImage=!0,this.imageFailed=!1}},methods:{hideUI(){this.ui=!1},showUI(){this.ui=!0},nextImage(){this.isLast||this.localIndex++},prevImage(){this.isFirst||this.localIndex--},imageLoaded(t){this.loadingImage=!1,t.target.onload=null,t.target.onerror=null},imageFailedLoading(t){this.imageFailed=!0,this.loadingImage=!1,t.target.onload=null,t.target.onerror=null},downloadImage(){const t=this.album[this.localIndex];var i=t.src.match(/(?:.+\/)([^#?]+)/);if(i)fetch(t.src).then((t=>t.blob())).then((e=>{const o=window.URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.href=o,n.download=t.name||i[1]||"Untitled",document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(o),document.body.removeChild(n)})).catch((()=>this.$snackbar.error({title:"Something went wrong"})));else{var e=document.createElement("a");e.download=t.name+".png",e.href=t.src,document.body.appendChild(e),e.click(),document.body.removeChild(e)}},closeGallery(t){if(t.currentTarget){const i=new Event("mouseleave");t.currentTarget.dispatchEvent(i)}this.$emit("close"),this.onCloseHandler&&this.onCloseHandler()}}},L=e(40089);const X=(0,L.Z)(D,[["render",O],["__scopeId","data-v-20144ad8"]]);var E=X},39975:function(t,i,e){e.d(i,{Z:function(){return g}});e(33948);var o=e(73396),n=e(87139);const s={style:{position:"absolute",width:"100%","z-index":"1","text-align":"center"}};function a(t,i,e,a,h,r){return(0,o.wg)(),(0,o.iD)("div",{ref:"interactive-element",tabindex:"-1",class:"main-container",onMouseenter:i[0]||(i[0]=(...t)=>r.focus&&r.focus(...t)),onTouchstart:i[1]||(i[1]=(...t)=>r.touchStart&&r.touchStart(...t)),onTouchmove:i[2]||(i[2]=(...t)=>r.touchMove&&r.touchMove(...t)),onTouchend:i[3]||(i[3]=(...t)=>r.touchEnd&&r.touchEnd(...t)),onMousemove:i[4]||(i[4]=(...t)=>r.mouseMove&&r.mouseMove(...t)),onMouseup:i[5]||(i[5]=(...t)=>r.mouseUp&&r.mouseUp(...t)),onMouseleave:i[6]||(i[6]=(...t)=>r.mouseLeave&&r.mouseLeave(...t)),onMousedown:i[7]||(i[7]=(...t)=>r.mouseDown&&r.mouseDown(...t)),onWheel:i[8]||(i[8]=(...t)=>r.mouseWheelZoom&&r.mouseWheelZoom(...t)),onKeydownCapture:i[9]||(i[9]=(...t)=>r.keyDown&&r.keyDown(...t))},[(0,o._)("div",s,[(0,o.WI)(t.$slots,"buttons",{},void 0,!0)]),(0,o._)("div",{class:(0,n.C_)(["noselect",{zoomed:r.zoomed,smooth:this.smoothTransitions}]),style:(0,n.j5)({display:"inline-block",width:this.size[0]+"px",height:this.size[1]+"px",transform:"translate("+this.coordinates[0]+"px,"+this.coordinates[1]+"px) scale("+this.zoom+")","transform-origin":"0 0 0"})},[(0,o.WI)(t.$slots,"default",{loadEvent:r.loadEvent},void 0,!0)],6)],544)}e(74916);var h,r={},c={name:"interactive-zoom-move",emits:["draggingStart","draggingEnd"],props:["width","height","padding","maxzoom","minzoom","smooth"],provide(){return{zoom:(0,o.Fl)((()=>this.zoom))}},data:function(){return{size:[0,0],zoom:1,defaultZoom:1,MAX_ZOOM:10,MIN_ZOOM:.2,dragging:!1,coordinates:[0,0],parentcontainer:null,parentPadding:[0,0,0,0],pinch:!1,isLoading:!1}},computed:{zoomed:function(){return this.zoom>this.defaultZoom},smoothTransitions:function(){return this.smooth&&!this.dragging&&!this.isLoading}},created:function(){!this.maxzoom||(this.MAX_ZOOM=Number(this.maxzoom)),!this.minzoom||(this.MIN_ZOOM=Number(this.minzoom)),window.addEventListener("resize",this.onScreenResize)},mounted:function(){this.parentcontainer=this.$el,this.$el.focus(),this.size=[this.width,this.height]},beforeUnmount:function(){this.parentcontainer=null,r={},h=null,window.removeEventListener("resize",this.onScreenResize)},watch:{padding:{immediate:!0,handler(t){t&&t.split(" ").forEach(((t,i)=>{this.parentPadding[i]=Number(t)}))}},size(){const t=this.setStartingZoom(this.size);var i=this.zoom===t;this.zoom=t,this.defaultZoom=t,i&&(this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates))},zoom:function(){this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)},dragging(t){var i="draggingStart";t||(i="draggingEnd"),this.$emit(i)},pinch(t){var i="draggingStart";t||(i="draggingEnd"),this.$emit(i)}},methods:{loadEvent(t){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1}),400);var i=t.target||t.originalTarget||t.path[0],e=i.height,o=i.width;this.coordinates=[0,0],this.size=[o,e],i.style.opacity=1,i.style.transition="all .4s ease",i.style.transform="scale(1)"},focus(){this.$el.focus()},blur(){this.$el.blur()},setStartingZoom:function(t){var i=this.parentcontainer.getBoundingClientRect(),e=i.width-this.parentPadding[1]-this.parentPadding[3],o=t[0],n=i.height-this.parentPadding[0]-this.parentPadding[2],s=t[1],a=e/o,h=n/s;return Math.min(a,h,1)},centerImage:function(t,i,e){var o=this.parentcontainer.getBoundingClientRect(),n=o.width,s=t[0]*i,a=o.height,h=t[1]*i,r=this.parentPadding,c=e[0],l=e[1];return s<=n-r[1]-r[3]?c=(n-s)/2:e[0]>=r[3]?c=r[3]:s+e[0]<n-r[1]&&(c=-s+n-r[1]),h<a-r[0]-r[2]?l=(a-h)/2:e[1]>r[0]?l=r[0]:h+e[1]<a-r[2]&&(l=-h+a-r[2]),[c,l]},restoreZoom:function(){this.zoom=this.defaultZoom},doubleZoom:function(){this.zoom*=2},originalResolution:function(){this.zoom=1},clickImage:function(t){if("IMG"===t.target.tagName&&2!==t.button){var i=(t.clientX-this.coordinates[0])/this.zoom,e=(t.clientY-this.coordinates[1])/this.zoom;this.zoomed?this.restoreZoom():this.defaultZoom-1>.2?this.originalResolution():this.doubleZoom(),this.coordinates=[t.clientX-i*this.zoom,t.clientY-e*this.zoom]}},isDragging:function(t){return!!(r.x&&Math.abs(r.x-t.clientX)>2&&Math.abs(r.y-t.clientY)>2)},mouseDown:function(t){2!==t.button&&(t.preventDefault(),t.stopPropagation(),this.dragging=!1,r={x:t.clientX-this.coordinates[0],y:t.clientY-this.coordinates[1]})},mouseMove:function(t){(this.dragging||this.isDragging(t))&&(this.dragging=!0,t.preventDefault(),this.coordinates=[t.clientX-r.x,t.clientY-r.y])},mouseUp:function(t){this.dragging?(this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)):void 0!==!t.detail&&2!==t.detail||this.clickImage(t),r={}},mouseLeave:function(){this.dragging&&(r={},this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates))},mouseWheelZoom:function(t){if(t.preventDefault(),!this.dragging||!this.isLoading){var i=(t.clientX-this.coordinates[0])/this.zoom,e=(t.clientY-this.coordinates[1])/this.zoom,o=t.wheelDelta||-t.deltaY;this.zoom=o>0?1.1*this.zoom>this.MAX_ZOOM?this.MAX_ZOOM:1.1*this.zoom:this.zoom/1.1<this.MIN_ZOOM?this.MIN_ZOOM:this.zoom/1.1,this.coordinates=[t.clientX-i*this.zoom,t.clientY-e*this.zoom]}},getPinchZoomSize(t,i){var e=t.clientX-i.clientX,o=t.clientY-i.clientY;return Math.sqrt(e*e+o*o)},touchStart:function(t){var i=t.touches||t.changedTouches;this.pinch=!1,this.dragging=!1,2===i.length?(this.pinch=!0,this.dragging=!1,h=this.getPinchZoomSize(t.touches[0],t.touches[1]),r={x:(i[0].clientX+i[1].clientX)/2,y:(i[0].clientY+i[1].clientY)/2}):(r.x=i[0].clientX-this.coordinates[0],r.y=i[0].clientY-this.coordinates[1])},touchMove:function(t){const i=t.touches||t.changedTouches;if(this.pinch){var e=this.getPinchZoomSize(t.touches[0],t.touches[1]),o=1,n=(r.x-this.coordinates[0])/this.zoom,s=(r.y-this.coordinates[1])/this.zoom,a=this.zoom*(1+(e/h-1)*o);this.zoom=a>this.MAX_ZOOM?this.MAX_ZOOM:a<this.MIN_ZOOM?this.MIN_ZOOM:a,this.coordinates=[r.x-n*this.zoom,r.y-s*this.zoom],h=e}else{if(!this.dragging&&!this.isDragging(i[0]))return;this.dragging=!0,t.preventDefault(),this.coordinates=[i[0].clientX-r.x,i[0].clientY-r.y]}},touchEnd:function(t){this.pinch&&2!==t.changedTouches.length&&(this.pinch=!1,this.pinchCenter=null),this.dragging&&(this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)),r={}},keyDown(t){if(console.log(t),!this.dragging){var i=0,e=0,o=0;switch(t.keyCode){case 38:case 87:e++;break;case 40:case 83:e--;break;case 37:case 65:i++;break;case 39:case 68:i--;break;case 187:case 107:case 69:o++;break;case 189:case 109:case 81:o--;break}if(i||e){t.preventDefault(),t.stopPropagation();var n=this.parentcontainer.getBoundingClientRect(),s=Math.min(n.width,n.height),a=.05;this.coordinates=this.centerImage(this.size,this.zoom,[this.coordinates[0]+s*a*i,this.coordinates[1]+s*a*e])}if(o){var h=this.zoom+.05*o,r=this.parentcontainer.getBoundingClientRect(),c=(r.width/2-this.coordinates[0])/this.zoom,l=(r.height/2-this.coordinates[1])/this.zoom;h>this.MAX_ZOOM?h=this.MAX_ZOOM:h<this.MIN_ZOOM&&(h=this.MIN_ZOOM),this.zoom=h,this.coordinates=[r.width/2-c*this.zoom,r.height/2-l*this.zoom]}}},onScreenResize:function(){let t=this.setStartingZoom(this.size);this.zoom===this.defaultZoom?t==this.zoom?this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates):this.zoom=t:this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates),this.defaultZoom=t}}},l=e(40089);const d=(0,l.Z)(c,[["render",a],["__scopeId","data-v-69ff600e"]]);var g=d},28890:function(t,i,e){t.exports=e.p+"img/cermia404.00418f21.png"}}]);