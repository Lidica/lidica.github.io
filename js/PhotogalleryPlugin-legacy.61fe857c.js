"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[909],{39624:function(t,i,e){e.r(i),e.d(i,{default:function(){return E}});e(82526),e(41817);var n=e(73396),o=e(87139),s=e(77524),a=function(t){return(0,n.dD)("data-v-20144ad8"),t=t(),(0,n.Cn)(),t},r={class:"container noselect"},c={class:"slide-counter"},h=a((function(){return(0,n._)("i",{class:"fa fa-times"},null,-1)})),l=[h],d=a((function(){return(0,n._)("i",{class:"fas fa-copy"},null,-1)})),u=[d],g=a((function(){return(0,n._)("i",{class:"fas fa-download"},null,-1)})),m=[g],p=a((function(){return(0,n._)("i",{class:"fa fa-angle-left"},null,-1)})),f=[p],v=a((function(){return(0,n._)("i",{class:"fa fa-angle-right"},null,-1)})),z=[v],y={class:"center"},w={class:"fas fa-spinner fa-spin"},I={key:0},b=["src"],x=a((function(){return(0,n._)("br",null,null,-1)})),M={style:{height:"100%",width:"100%"}},k=["onLoad","src"],_={key:0},Z=["innerHTML"];function O(t,i,a,h,d,g){var p=this,v=(0,n.up)("Interactive"),O=(0,n.Q2)("tooltip");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",{class:(0,o.C_)(["nav-bar text-black-stroke",{invisible:!d.ui}])},[(0,n._)("span",c,(0,o.zw)(d.localIndex+1)+"/"+(0,o.zw)(a.album.length),1),(0,n.wy)(((0,n.wg)(),(0,n.iD)("span",{class:"nav-icon",onClick:i[0]||(i[0]=function(){return g.closeGallery&&g.closeGallery.apply(g,arguments)})},l)),[[O,function(){return p.$t("strings.close")}]]),g.canCopy?(0,n.wy)(((0,n.wg)(),(0,n.iD)("span",{key:0,class:"nav-icon",onClick:i[1]||(i[1]=function(){return t.copyImage&&t.copyImage.apply(t,arguments)}),style:{"font-weight":"800","margin-top":"-2px","font-size":"0.8em"}},u)),[[O,function(){return p.$t("strings.copy")}]]):(0,n.kq)("",!0),g.canDownload?(0,n.wy)(((0,n.wg)(),(0,n.iD)("span",{key:1,class:"nav-icon",onClick:i[2]||(i[2]=function(){return g.downloadImage&&g.downloadImage.apply(g,arguments)}),style:{"font-weight":"800","margin-top":"-2px","font-size":"0.8em"}},m)),[[O,function(){return p.$t("strings.download")}]]):(0,n.kq)("",!0),(0,n.wy)(((0,n.wg)(),(0,n.iD)("span",{class:(0,o.C_)(["nav-icon",{invisible:g.isLast}]),onClick:i[3]||(i[3]=function(){return g.nextImage&&g.nextImage.apply(g,arguments)}),style:{"font-weight":"800","margin-top":"-2px"}},[(0,n.Uk)(">")],2)),[[O,function(){return p.$t("strings.next")}]]),(0,n.wy)(((0,n.wg)(),(0,n.iD)("span",{class:(0,o.C_)(["nav-icon",{invisible:g.isFirst}]),onClick:i[4]||(i[4]=function(){return g.prevImage&&g.prevImage.apply(g,arguments)}),style:{"font-weight":"800","margin-top":"-2px"}},[(0,n.Uk)("<")],2)),[[s.F8,!g.isFirst],[O,function(){return p.$t("strings.back")}]]),(0,n._)("div",{class:(0,o.C_)(["next-prev-img",{invisible:g.isFirst}]),onClick:i[5]||(i[5]=function(){return g.prevImage&&g.prevImage.apply(g,arguments)}),style:{left:"10px"}},f,2),(0,n._)("div",{class:(0,o.C_)(["next-prev-img",{invisible:g.isLast}]),onClick:i[6]||(i[6]=function(){return g.nextImage&&g.nextImage.apply(g,arguments)}),style:{right:"10px"}},z,2)],2),(0,n._)("div",y,[(0,n.wy)((0,n._)("i",w,null,512),[[s.F8,d.loadingImage]]),d.imageFailed?((0,n.wg)(),(0,n.iD)("span",I,[(0,n._)("img",{src:e(28890)},null,8,b),x,(0,n.Uk)((0,o.zw)(t.$t("strings.app_not_found")),1)])):(0,n.kq)("",!0)]),(0,n._)("div",M,[(0,n.Wm)(v,{height:1,width:1,maxzoom:10,minzoom:.03,padding:"50 0 60 0",smooth:!0,onDraggingStart:g.hideUI,onDraggingEnd:g.showUI},{default:(0,n.w5)((function(t){var e=t.loadEvent;return[a.album[d.localIndex]?((0,n.wg)(),(0,n.iD)("img",{ref:"active-image",key:d.localIndex,style:{transform:"scale(0.2)",opacity:"0"},onLoad:function(t){e(t),g.imageLoaded(t)},onError:i[7]||(i[7]=function(){return g.imageFailedLoading&&g.imageFailedLoading.apply(g,arguments)}),src:a.album[d.localIndex].src},null,40,k)):(0,n.kq)("",!0)]})),_:1},8,["minzoom","onDraggingStart","onDraggingEnd"])]),(0,n._)("div",{class:(0,o.C_)(["caption text-black-stroke",{invisible:!d.ui}]),ref:"debug-gallery"},[a.album[d.localIndex]?((0,n.wg)(),(0,n.iD)("p",_,(0,o.zw)(a.album[d.localIndex].description),1)):(0,n.kq)("",!0),a.album[d.localIndex]&&a.album[d.localIndex].author?((0,n.wg)(),(0,n.iD)("span",{key:1,innerHTML:"Author: "+a.album[d.localIndex].author},null,8,Z)):(0,n.kq)("",!0)],2)])}e(74916),e(4723),e(41539),e(33948),e(60285),e(41637);var C=e(39975),D={name:"PhotoGallery",emits:["close"],components:{Interactive:C.Z},props:{index:{type:Number,default:0},album:{type:Array,default(){return[]}},download:{type:Boolean,default:!0},copy:{type:Boolean,default:!0},onCloseHandler:{type:Function,default(){}}},data(){return{ui:!0,localIndex:0,loadingImage:!0,imageFailed:!1}},computed:{isFirst(){return 0===this.localIndex},isLast(){return!this.album.length||this.localIndex===this.album.length-1},canDownload(){return this.download&&!this.loadingImage&&!this.imageFailed},canCopy(){return!1}},created(){this.localIndex=this.index},watch:{localIndex:function(){this.loadingImage=!0,this.imageFailed=!1}},methods:{hideUI(){this.ui=!1},showUI(){this.ui=!0},nextImage(){this.isLast||this.localIndex++},prevImage(){this.isFirst||this.localIndex--},imageLoaded(t){this.loadingImage=!1,t.target.onload=null,t.target.onerror=null},imageFailedLoading(t){this.imageFailed=!0,this.loadingImage=!1,t.target.onload=null,t.target.onerror=null},downloadImage(){var t=this,i=this.album[this.localIndex],e=i.src.match(/(?:.+\/)([^#?]+)/);if(e)fetch(i.src).then((function(t){return t.blob()})).then((function(t){var n=window.URL.createObjectURL(t),o=document.createElement("a");o.style.display="none",o.href=n,o.download=i.name||e[1]||"Untitled",document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(n),document.body.removeChild(o)})).catch((function(){return t.$snackbar.error({title:"Something went wrong"})}));else{var n=document.createElement("a");n.download=i.name+".png",n.href=i.src,document.body.appendChild(n),n.click(),document.body.removeChild(n)}},closeGallery(t){if(t.currentTarget){var i=new Event("mouseleave");t.currentTarget.dispatchEvent(i)}this.$emit("close"),this.onCloseHandler&&this.onCloseHandler()}}},L=e(40089);const X=(0,L.Z)(D,[["render",O],["__scopeId","data-v-20144ad8"]]);var E=X},39975:function(t,i,e){e.d(i,{Z:function(){return u}});var n=e(73396),o=e(87139),s={style:{position:"absolute",width:"100%","z-index":"1","text-align":"center"}};function a(t,i,e,a,r,c){return(0,n.wg)(),(0,n.iD)("div",{ref:"interactive-element",tabindex:"-1",class:"main-container",onMouseenter:i[0]||(i[0]=function(){return c.focus&&c.focus.apply(c,arguments)}),onTouchstart:i[1]||(i[1]=function(){return c.touchStart&&c.touchStart.apply(c,arguments)}),onTouchmove:i[2]||(i[2]=function(){return c.touchMove&&c.touchMove.apply(c,arguments)}),onTouchend:i[3]||(i[3]=function(){return c.touchEnd&&c.touchEnd.apply(c,arguments)}),onMousemove:i[4]||(i[4]=function(){return c.mouseMove&&c.mouseMove.apply(c,arguments)}),onMouseup:i[5]||(i[5]=function(){return c.mouseUp&&c.mouseUp.apply(c,arguments)}),onMouseleave:i[6]||(i[6]=function(){return c.mouseLeave&&c.mouseLeave.apply(c,arguments)}),onMousedown:i[7]||(i[7]=function(){return c.mouseDown&&c.mouseDown.apply(c,arguments)}),onWheel:i[8]||(i[8]=function(){return c.mouseWheelZoom&&c.mouseWheelZoom.apply(c,arguments)}),onKeydownCapture:i[9]||(i[9]=function(){return c.keyDown&&c.keyDown.apply(c,arguments)})},[(0,n._)("div",s,[(0,n.WI)(t.$slots,"buttons",{},void 0,!0)]),(0,n._)("div",{class:(0,o.C_)(["noselect",{zoomed:c.zoomed,smooth:this.smoothTransitions}]),style:(0,o.j5)({display:"inline-block",width:this.size[0]+"px",height:this.size[1]+"px",transform:"translate("+this.coordinates[0]+"px,"+this.coordinates[1]+"px) scale("+this.zoom+")","transform-origin":"0 0 0"})},[(0,n.WI)(t.$slots,"default",{loadEvent:c.loadEvent},void 0,!0)],6)],544)}e(41539),e(54747),e(74916),e(23123);var r,c={},h={name:"interactive-zoom-move",emits:["draggingStart","draggingEnd"],props:["width","height","padding","maxzoom","minzoom","smooth"],provide(){var t=this;return{zoom:(0,n.Fl)((function(){return t.zoom}))}},data:function(){return{size:[0,0],zoom:1,defaultZoom:1,MAX_ZOOM:10,MIN_ZOOM:.2,dragging:!1,coordinates:[0,0],parentcontainer:null,parentPadding:[0,0,0,0],pinch:!1,isLoading:!1}},computed:{zoomed:function(){return this.zoom>this.defaultZoom},smoothTransitions:function(){return this.smooth&&!this.dragging&&!this.isLoading}},created:function(){!this.maxzoom||(this.MAX_ZOOM=Number(this.maxzoom)),!this.minzoom||(this.MIN_ZOOM=Number(this.minzoom)),window.addEventListener("resize",this.onScreenResize)},mounted:function(){this.parentcontainer=this.$el,this.$el.focus(),this.size=[this.width,this.height]},beforeUnmount:function(){this.parentcontainer=null,c={},r=null,window.removeEventListener("resize",this.onScreenResize)},watch:{padding:{immediate:!0,handler(t){var i=this;t&&t.split(" ").forEach((function(t,e){i.parentPadding[e]=Number(t)}))}},size(){var t=this.setStartingZoom(this.size),i=this.zoom===t;this.zoom=t,this.defaultZoom=t,i&&(this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates))},zoom:function(){this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)},dragging(t){var i="draggingStart";t||(i="draggingEnd"),this.$emit(i)},pinch(t){var i="draggingStart";t||(i="draggingEnd"),this.$emit(i)}},methods:{loadEvent(t){var i=this;this.isLoading=!0,setTimeout((function(){i.isLoading=!1}),400);var e=t.target||t.originalTarget||t.path[0],n=e.height,o=e.width;this.coordinates=[0,0],this.size=[o,n],e.style.opacity=1,e.style.transition="all .4s ease",e.style.transform="scale(1)"},focus(){this.$el.focus()},blur(){this.$el.blur()},setStartingZoom:function(t){var i=this.parentcontainer.getBoundingClientRect(),e=i.width-this.parentPadding[1]-this.parentPadding[3],n=t[0],o=i.height-this.parentPadding[0]-this.parentPadding[2],s=t[1],a=e/n,r=o/s;return Math.min(a,r,1)},centerImage:function(t,i,e){var n=this.parentcontainer.getBoundingClientRect(),o=n.width,s=t[0]*i,a=n.height,r=t[1]*i,c=this.parentPadding,h=e[0],l=e[1];return s<=o-c[1]-c[3]?h=(o-s)/2:e[0]>=c[3]?h=c[3]:s+e[0]<o-c[1]&&(h=-s+o-c[1]),r<a-c[0]-c[2]?l=(a-r)/2:e[1]>c[0]?l=c[0]:r+e[1]<a-c[2]&&(l=-r+a-c[2]),[h,l]},restoreZoom:function(){this.zoom=this.defaultZoom},doubleZoom:function(){this.zoom*=2},originalResolution:function(){this.zoom=1},clickImage:function(t){if("IMG"===t.target.tagName&&2!==t.button){var i=(t.clientX-this.coordinates[0])/this.zoom,e=(t.clientY-this.coordinates[1])/this.zoom;this.zoomed?this.restoreZoom():this.defaultZoom-1>.2?this.originalResolution():this.doubleZoom(),this.coordinates=[t.clientX-i*this.zoom,t.clientY-e*this.zoom]}},isDragging:function(t){return!!(c.x&&Math.abs(c.x-t.clientX)>2&&Math.abs(c.y-t.clientY)>2)},mouseDown:function(t){2!==t.button&&(t.preventDefault(),t.stopPropagation(),this.dragging=!1,c={x:t.clientX-this.coordinates[0],y:t.clientY-this.coordinates[1]})},mouseMove:function(t){(this.dragging||this.isDragging(t))&&(this.dragging=!0,t.preventDefault(),this.coordinates=[t.clientX-c.x,t.clientY-c.y])},mouseUp:function(t){this.dragging?(this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)):void 0!==!t.detail&&2!==t.detail||this.clickImage(t),c={}},mouseLeave:function(){this.dragging&&(c={},this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates))},mouseWheelZoom:function(t){if(t.preventDefault(),!this.dragging||!this.isLoading){var i=(t.clientX-this.coordinates[0])/this.zoom,e=(t.clientY-this.coordinates[1])/this.zoom,n=t.wheelDelta||-t.deltaY;this.zoom=n>0?1.1*this.zoom>this.MAX_ZOOM?this.MAX_ZOOM:1.1*this.zoom:this.zoom/1.1<this.MIN_ZOOM?this.MIN_ZOOM:this.zoom/1.1,this.coordinates=[t.clientX-i*this.zoom,t.clientY-e*this.zoom]}},getPinchZoomSize(t,i){var e=t.clientX-i.clientX,n=t.clientY-i.clientY;return Math.sqrt(e*e+n*n)},touchStart:function(t){var i=t.touches||t.changedTouches;this.pinch=!1,this.dragging=!1,2===i.length?(this.pinch=!0,this.dragging=!1,r=this.getPinchZoomSize(t.touches[0],t.touches[1]),c={x:(i[0].clientX+i[1].clientX)/2,y:(i[0].clientY+i[1].clientY)/2}):(c.x=i[0].clientX-this.coordinates[0],c.y=i[0].clientY-this.coordinates[1])},touchMove:function(t){var i=t.touches||t.changedTouches;if(this.pinch){var e=this.getPinchZoomSize(t.touches[0],t.touches[1]),n=1,o=(c.x-this.coordinates[0])/this.zoom,s=(c.y-this.coordinates[1])/this.zoom,a=this.zoom*(1+(e/r-1)*n);this.zoom=a>this.MAX_ZOOM?this.MAX_ZOOM:a<this.MIN_ZOOM?this.MIN_ZOOM:a,this.coordinates=[c.x-o*this.zoom,c.y-s*this.zoom],r=e}else{if(!this.dragging&&!this.isDragging(i[0]))return;this.dragging=!0,t.preventDefault(),this.coordinates=[i[0].clientX-c.x,i[0].clientY-c.y]}},touchEnd:function(t){this.pinch&&2!==t.changedTouches.length&&(this.pinch=!1,this.pinchCenter=null),this.dragging&&(this.dragging=!1,this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates)),c={}},keyDown(t){if(console.log(t),!this.dragging){var i=0,e=0,n=0;switch(t.keyCode){case 38:case 87:e++;break;case 40:case 83:e--;break;case 37:case 65:i++;break;case 39:case 68:i--;break;case 187:case 107:case 69:n++;break;case 189:case 109:case 81:n--;break}if(i||e){t.preventDefault(),t.stopPropagation();var o=this.parentcontainer.getBoundingClientRect(),s=Math.min(o.width,o.height),a=.05;this.coordinates=this.centerImage(this.size,this.zoom,[this.coordinates[0]+s*a*i,this.coordinates[1]+s*a*e])}if(n){var r=this.zoom+.05*n,c=this.parentcontainer.getBoundingClientRect(),h=(c.width/2-this.coordinates[0])/this.zoom,l=(c.height/2-this.coordinates[1])/this.zoom;r>this.MAX_ZOOM?r=this.MAX_ZOOM:r<this.MIN_ZOOM&&(r=this.MIN_ZOOM),this.zoom=r,this.coordinates=[c.width/2-h*this.zoom,c.height/2-l*this.zoom]}}},onScreenResize:function(){var t=this.setStartingZoom(this.size);this.zoom===this.defaultZoom?t==this.zoom?this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates):this.zoom=t:this.coordinates=this.centerImage(this.size,this.zoom,this.coordinates),this.defaultZoom=t}}},l=e(40089);const d=(0,l.Z)(h,[["render",a],["__scopeId","data-v-69ff600e"]]);var u=d},28890:function(t,i,e){t.exports=e.p+"img/cermia404.00418f21.png"}}]);