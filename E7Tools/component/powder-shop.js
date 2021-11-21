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
    if (mobileTouch.start.clientX - end.clientX > 50) { //swipe left
      const evt = new CustomEvent("swipe-left", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientX - end.clientX < -50) { // swipe left
      const evt = new CustomEvent("swipe-right", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientY - end.clientY > 50) { //swipe down
      const evt = new CustomEvent("swipe-down", {"bubbles":true, "cancelable":false});
      e.target.dispatchEvent(evt);
    } else if (mobileTouch.start.clientY - end.clientY < -50) { // swipe up
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
      observer: null,
      animationEnter: 'slide-from-right',
      openShopList: false
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
        document.addEventListener('keydown', this.handleKeyDown, false)
        el.addEventListener('touchstart', touchStart);
        el.addEventListener('touchmove', touchMove);
        el.addEventListener('touchend', touchEnd);
      })
    });
  },
  beforeDestroy: function(){
    document.removeEventListener('keydown', this.handleKeyDown)
    //document.getElementById('shop-slides').removeEventListener('wheel', this.mousewheel);
    const boxElList = document.querySelectorAll('li');
    boxElList.forEach((el) => {
      this.observer.unobserve(el);
    });
    this.observer = null;
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
    getArtifactImage: function (id) {
      return this.$store.getters.getArtifactImage(id);
    },
    getRarityIcon: function (id) {
      return this.$store.getters.getRarityIcon(id);
    },
    getRoleIcon: function (id) {
      return this.$store.getters.getRoleIcon(id);
    },
    toggleShopList: function () {
      this.openShopList = !this.openShopList;
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
    handleKeyDown: function (e) {
      if (e.ctrlKey) return;
      e.preventDefault();
      if (
        e.keyCode === 39 || e.key === 'ArrowRight' ||
        e.keyCode === 40 || e.key === 'ArrowDown' ||
        e.keyCode === 68 || e.key === 'd'
      ) this.scrollBySwipe(1);
      else if (
        e.keyCode === 37 || e.key === 'ArrowLeft' ||
        e.keyCode === 38 || e.key === 'ArrowUp' ||
        e.keyCode === 65 || e.key === 'a'
      ) this.scrollBySwipe(-1);
    },
    scrollToSelected: function (n) {
      document.getElementById('shop-slides').scrollTop = (n)*window.innerHeight;
    },
    createObserver: function () {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
      };
      this.observer = new IntersectionObserver((entries) => {
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
        this.observer.observe(el);
      });
    },
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    }
  },
  render: function (h) {
    return h('section', {staticClass: '', attrs: {id: 'shop-container'}, style: {/*width: '100%', 'max-width': '800px', margin: 'auto'*/} }, [
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
            h('div', {staticClass: 'title-container'}, [
              h('button', {staticClass: 'fa fa-list rotation-list-btn', on: {click: () => this.toggleShopList()}}),
              h('span', {style: {float: 'left', 'padding-left': '10px'}}, (this.slide+1) + '/' + this.shop.length ),
              this.shop[this.slide].dt.join(' ~ ')
            ]),
            h('div', {staticClass: 'rotation'},
              this.shop[this.slide].a.map( (artifact,j) => {
                return h('div', {staticClass: 'artifact', style: {'background-image': 'url(' + this.getArtifactImage(artifact.id) + ')'  }}, [
                    h('span', {style: {'padding-left': '8px'}}, new Array(this.artifact(artifact.id).rarity || 1).fill(h('img', {attrs: {src: this.getRarityIcon()}, style: {height: '20px', 'margin-left': '-8px', 'vertical-align': 'middle'} }))),
                    h('span', {staticClass: 'vertical-name'}, this.artifact(artifact.id).name)
                ])
              })
            )
          ])
        ]),
        this.shop.map( (rotation,i) => {
          return h('li', {staticClass: 'powder-slide-rotations', style: {visibility: 'hidden'}, attrs: {index: i}}, [
            h('div', {staticClass: 'title-container'}, 'Data della rotazione'),
            h('div', {staticClass: 'rotation'}
            /*,
              rotation.a.map( (artifact,j) => {
                return h('div', {staticClass: 'artifact', style: {}}, [
                    h('span', {style: {'padding-left': '8px'}}, new Array(this.artifact(artifact.id).rarity || 1).fill(h('img', {attrs: {src: this.getRarityIcon()}, style: {height: '20px', 'margin-left': '-8px', 'vertical-align': 'middle'} }))),
                    h('span', {staticClass: 'vertical-name' }, this.artifact(artifact.id).name)
                ])
              })
            */
            )
          ])
        })
      ]) : null,
      this.shop&&this.openShopList ? h('div', {staticClass: 'glass-container rotation-list-box'}, [
        this.shop.map( (rotation,i) => {
          return h('div', {staticClass: 'elements', class: {active: this.slide === i}, on: {click: () => this.scrollToSelected(i)} }, (i+1) + '. ' + rotation.dt[0])
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
        transform: translateX(-70%) scale(0.85);
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
      height: 45px;
      width: 100%;
      height: 45px;
      width: 100%;
      background-color: white;
      color: black;
      text-align: center;
      line-height: 45px;
    }
    .powder-slide-rotations > .rotation {
      display: flex;
      width: 100%;
      height: calc(100% - 45px);
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
    .powder-slide-rotations > .rotation > .artifact > .vertical-name{
      writing-mode: vertical-lr;
      text-orientation: inherit;
      transform: rotate(180deg);
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 30px;
      color: yellow;
      text-shadow: 0 0px 5px #e91414;
      pointer-events: none;
    }
    .rotation-list-btn {
      float: right;
      padding: 6px;
      margin: 2px 10px 2px 0;
      cursor: pointer;
      background-color: #0001;
      border: none;
      font-size: 16px;
      height: 40px;
      width: 40px;
      border-radius: 4px;
    }
    .rotation-list-box {
      position: absolute;
      height: calc(100% - 45px);
      top: 45px;
      width: 300px;
      right: 0;
      overflow: auto;
      z-index: 1;
    }
    .rotation-list-box > .elements {
      color: white;
      padding: 10px;
      cursor: pointer;
    }
    .rotation-list-box > .elements.active {
      background-color: #05050540;
    }
    .rotation-list-box > .elements:not(.active):hover {
      background-color: #05050540;
    }

  }
  `;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
})();
