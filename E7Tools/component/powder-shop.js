console.log('powder shop');
/*global Vue*/
var mobileTouch = {};
function touchStart (e) {
  if (!mobileTouch.start) mobileTouch.start = e.touches[0] || e.changedTouches[0];
};
function touchMove (e) {
  e.preventDefault(); /* Disable normal scrolling */
};
function touchEnd (e) {
  var end = e.touches[0] || e.changedTouches[0];
  if (mobileTouch.start) {
    if (mobileTouch.start.clientX - end.clientX > 100) { //swipe left
      const evt = new CustomEvent("swipe-left", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientX - end.clientX < -100) { // swipe left
      const evt = new CustomEvent("swipe-right", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientY - end.clientY > 100) { //swipe down
      const evt = new CustomEvent("swipe-down", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientY - end.clientY < -100) { // swipe up
      const evt = new CustomEvent("swipe-up", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    }
    delete mobileTouch.start;
  };
};



export default {
  name: 'timeline',
  props: {
  },
  data: function () {
    return {
      shop: null,
      artifacts: null,
      slide: 0,
      animationEnter: 'slide-from-right'
    }
  },
  watch: {
    slide: function (old, val) {
      if (val > old) {
        this.animationEnter = 'slide-from-right';
      } else {
        this.animationEnter = 'slide-from-left';
      }
    }
  },
  beforeCreate: function () {
    this.$store.commit('loading', true);
  },
  created: function () {
    this.toggleLoading(true);
    Promise.all([this.$store.dispatch('getPowderShop'), this.$store.dispatch('getArtifactDB')]).then(data => {
      this.shop = data[0];
      this.artifacts = data[1];
      this.ready = true;
      this.$nextTick(() => {
        this.toggleLoading(false);
        this.createObserver();
        var el = document.getElementById('shop-slides');
        el.addEventListener('wheel', this.mousewheel, true);
        el.addEventListener('touchstart', touchStart);
        el.addEventListener('touchmove', touchMove);
        el.addEventListener('touchend', touchEnd);
      })
    });
  },
  beforeDestroy: function(){
    document.getElementById('shop-slides').removeEventListener('wheel', this.mousewheel);
  },
  mounted: function () {
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  methods: {
    home: function () {
      this.$store.commit('toggleMainMenu');
    },
    toggleLoading: function (val,text) {
      this.$store.commit('loading', val, text);
    },
    loading: function () { /*VUE  will update dom then run js*/
      this.$store.commit('loading', true);
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve();
          this.$nextTick(()=>{
            this.$store.commit('loading', false);
          })
        }, 0);
      })
    },
    artifact: function (id) {
      return this.$store.getters.getArtifact(id);
    },
    getArtifactIcon: function (id) {
      return this.$store.getters.getArtifactIcon(id);
    },
    getRarityIcon: function (id) {
      return this.$store.getters.getRarityIcon(id);
    },
    getRoleIcon: function (id) {
      return this.$store.getters.getRoleIcon(id);
    },
    mousewheel: function (e) {
      e.preventDefault();
      if (e.deltaY<0) {
        if (this.slide > 0)
          document.getElementById('shop-slides').scrollTop=(this.slide-1)*window.innerHeight;
      } else {
        if (this.slide < this.shop.length)
          document.getElementById('shop-slides').scrollTop=(this.slide+1)*window.innerHeight;
      };
    },
    scrollSlide: function (e) {
      var lastPos = document.body.scrollTop;
      window.requestAnimationFrame(() => {
        var pos = document.body.scrollTop;
        if (lastPos >= pos) {
          if (this.slide > 0)
            window.scrollY = (this.slide-1)*window.innerHeight-10;
        } else {
          if (this.slide < this.shop.length)
            window.scrollY = (this.slide+1)*window.innerHeight-10;
        };
      });
    },
    scrollBySwipe: function (n) {
      if (n>0&&this.slide<this.shop.length) {
        document.getElementById('shop-slides').scrollTop = (this.slide+1)*window.innerHeight;
      } else if (n<0&&this.slide>0) {
        document.getElementById('shop-slides').scrollTop = (this.slide-1)*window.innerHeight;
      };
    },
    createObserver: function () {
      let observer;
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
      };
      observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            var val=parseInt(entry.target.attributes.index.value);
            if (entry.isIntersecting) {
              this.slide = val;
              return;
            } else {
              
            }
          });
          console.log(this.slide);
        }, 
        options
      );
      const boxElList = document.querySelectorAll('li');
      boxElList.forEach((el) => {
        observer.observe(el);
      });
    },
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    }
  },
  render: function (h) {
    return h('section', {staticClass: '', style: {/*width: '100%', 'max-width': '800px', margin: 'auto'*/} }, [
      h('floating-menu',{props: {mobile: this.mobile, options: [{title: 'Home', class: 'fa fa-home', click: 'home'}]}, on: {home: ()=>this.home()} }),
      /*h('h2', 'Powder shop rotations'),*/
      /*
      this.shop ? h('table', {style: {width: '100%', 'background-color': '#252526', 'border-collapse': 'collapse', border: 'solid black', 'text-align': 'center'}}, this.shop.map( (rotation,i) => {
        return rotation.a.map( (artifact,j) => {
          return h('tr', {style: {'border-top': i!==0&&j===0?'solid black':''}}, [
            j===0 ? h('td', {attrs: {rowspan: rotation.a.length || 1}}, rotation.dt[0]) : null,
            h('td', [h('img', {attrs: {src: this.getArtifactIcon(artifact.id)}, style: {height: '70px'} })]),
            h('td', this.artifact(artifact.id).name),
            h('td', [h('img', {attrs: {src: this.getRoleIcon(this.artifact(artifact.id).role) }, style: {height: '36px', 'vertical-align': 'middle'}})]),
            h('td', {style: {'padding-left': '8px'}}, new Array(this.artifact(artifact.id).rarity || 1).fill(h('img', {attrs: {src: this.getRarityIcon()}, style: {height: '20px', 'margin-left': '-8px', 'vertical-align': 'middle'} })))
          ])
        })
      })) : null*/
      this.shop ? h('ul', {style: {width: '100%', height: '100%', overflow: 'auto'}, attrs: {id: 'shop-slides'}, on: {'swipe-left': () => this.scrollBySwipe(1),'swipe-right': () => this.scrollBySwipe(-1),'swipe-up': () => this.scrollBySwipe(-1),'swipe-down': () => this.scrollBySwipe(1)}}, [
        h('transition', {attrs: {name: this.animationEnter}}, [
          h('div', {key: this.slide, staticClass: 'powder-slide-rotations', style: {position: 'absolute', 'z-index': 1, top: 0, left: 0}}, [
            h('div', {staticClass: 'title-container'}, 'Data della rotazione (' + (this.slide+1) + '/' + this.shop.length + ')'),
            h('div', {staticClass: 'rotation'},
              this.shop[this.slide].a.map( (artifact,j) => {
                return h('div', {staticClass: 'artifact', style: {'background-image': 'url('+['https://assets.epicsevendb.com/_source/item_arti/art5_21_fu.png','https://assets.epicsevendb.com/_source/item_arti/art0122_fu.png','https://epic7x.com/wp-content/uploads/2020/10/Double-Edged-Decrescent.png','https://assets.epicsevendb.com/_source/item_arti/art0094_fu.png','https://assets.epicsevendb.com/_source/item_arti/art5_20_fu.png','https://assets.epicsevendb.com/_source/item_arti/art4_5_fu.png','https://assets.epicsevendb.com/_source/item_arti/art4_16_fu.png'][j] +')'  }}, [
                    h('td', {style: {'padding-left': '8px'}}, new Array(this.artifact(artifact.id).rarity || 1).fill(h('img', {attrs: {src: this.getRarityIcon()}, style: {height: '20px', 'margin-left': '-8px', 'vertical-align': 'middle'} }))),
                    h('span', {style: {'writing-mode': 'vertical-lr','text-orientation': 'inherit',transform: 'rotate(180deg)',position: 'absolute',bottom: 0,right: 0,'font-size': '30px','color': 'yellow','text-shadow': '0 0px 5px #e99e14'} }, this.artifact(artifact.id).name)
                ])
              })
            )
          ])
        ]),
        this.shop.map( (rotation,i) => {
          return h('li', {staticClass: 'powder-slide-rotations', style: {visibility: 'hidden'}, attrs: {index: i}}, [
            h('div', {staticClass: 'title-container'}, 'Data della rotazione'),
            h('div', {staticClass: 'rotation'},
              rotation.a.map( (artifact,j) => {
                return h('div', {staticClass: 'artifact', style: {}}, [
                    h('td', {style: {'padding-left': '8px'}}, new Array(this.artifact(artifact.id).rarity || 1).fill(h('img', {attrs: {src: this.getRarityIcon()}, style: {height: '20px', 'margin-left': '-8px', 'vertical-align': 'middle'} }))),
                    h('span', {style: {'writing-mode': 'vertical-lr','text-orientation': 'inherit',transform: 'rotate(180deg)',position: 'absolute',bottom: 0,right: 0,'font-size': '30px','color': 'yellow','text-shadow': '0 0px 5px #e99e14'} }, this.artifact(artifact.id).name)
                ])
              })
            )
          ])
        })
      ]) : null
    ]);
  }
};






/* ADD extra css */
(function () {
  var styles = `
    .slide-from-left-enter-active {
      animation: rotation-slide-in .5s;
    }
    .slide-from-left-leave-active {
      animation: rotation-slide-out .5s;
    }
    .slide-from-right-enter-active {
      animation: rotation-slide-in-left .5s;
    }
    .slide-from-right-leave-active {
      animation: rotation-slide-out .5s;
    }
    @keyframes rotation-slide-in {
      0% {
        transform: translateX(70%) scale(0.85);
      }
      100% {
        transform: translateX(0) scale(1);
      }
    }
    @keyframes rotation-slide-in-left {
      0% {
        transform: translateX(-30%) scale(0.85);
      }
      100% {
        transform: translateX(0) scale(1);
      }
    }
    @keyframes rotation-slide-out {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.85);
      }
    }
    .powder-slide-rotations {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: #252526;
    }
    .powder-slide-rotations > .title-container {
      height: 35px;
      width: 100%;
      height: 35px;
      width: 100%;
      background-color: white;
      color: black;
      text-align: center;
      line-height: 35px;
    }
    .powder-slide-rotations > .rotation {
      display: flex;
      width: 100%;
      height: calc(100% - 35px);
    }
    .powder-slide-rotations > .rotation > .artifact {
      flex: 1;
      position: relative;
      height: 100%;
      max-width: 378px;
      display: inline-block;
      transition: all ease .3s;
      background-image: url(https://assets.epicsevendb.com/_source/item_arti/art0105_fu.png);
      background-size: cover; 
      background-position-x: 50%;
      filter: grayscale(50%);
    }
    .powder-slide-rotations > .rotation > .artifact:hover {
      filter: grayscale(0);
    }
  }
  `;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
})();
