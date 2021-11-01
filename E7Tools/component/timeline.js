console.log('timeline downloaded');
/*global Vue*/

export default {
  name: 'timeline',
  props: {
    daySize: {
      type: Number,
      required: false,
      default: 15
    },
    vertical: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data: function () {
    return {
      events: [],
      
      collapseSize: 40,
      allItemsCollapsed: false,
      searchBar: false,
      timelineItems: [],
      //minMax: [10000000000,0],
      filters: {role: false, attribute: true, year: false, month: false}
    }
  },
  beforeCreate: function () {
    this.$store.commit('loading', true);
  },
  created: function () {
    this.toggleLoading(true);
    Promise.all([this.$store.dispatch('getBanners'), this.$store.dispatch('getHeroDB')]).then(data => {
      this.events=data[0];
      this.renderStuff();
      this.$nextTick(() => {
        this.toggleLoading(false);
        //this.createObserver()
      })
    });
    document.body.addEventListener('wheel', this.horizionatlScroll);
    document.addEventListener('keydown', this.showSearchBar,false);
  },
  beforeDestroy: function(){
    document.body.removeEventListener('wheel', this.horizionatlScroll);
    document.removeEventListener('keydown', this.showSearchBar);
  },
  mounted: function () {
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  watch: {
    filters: {
      handler: function (a,b,c,d) {
        console.log(a,b,c,d)
      },
      deep: true
    }
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
    createObserver: function () {
      /*
      let observer;
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };
      observer = new IntersectionObserver((entries) => {
        console.log(entries)
          entries.forEach(entry => {
            var val=parseInt(entry.target.attributes.index.value);
            if (entry.isIntersecting) {
              if (val<this.minMax[0]) this.minMax.splice(0,1,val);
              if (val>this.minMax[1]) this.minMax.splice(1,1,val);
            } else {
              if (val===this.minMax[1]) this.minMax.splice(1,1,val-1);
              if (val===this.minMax[0]) this.minMax.splice(0,1,val+1);
            }
          });
          console.log(this.minMax)
        }, 
        options
      );
      const boxElList = document.querySelectorAll('li');
      boxElList.forEach((el) => {
        observer.observe(el);
      });
      */
    },
    gethero: function (id) {
      return this.$store.getters.getHero(id);
    },
    horizionatlScroll: function(event) {
      const target = document.body;
      if (this.vertical) return;
      const toLeft  = event.deltaY < 0 && target.scrollLeft > 0
      const toRight = event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth

      if (toLeft || toRight) {
        if (target.classList.contains('modal-open')) return;
        target.scrollLeft += event.deltaY;
      }
    },
    showSearchBar: function (e) {
      if (e && (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70))) {
        if (!this.searchBar) this.searchBar=true;
        else this.$refs.searchBar.$emit('focus');
        e.preventDefault();
      } else if (!e) this.searchBar=!this.searchBar;
    },
    goToEvent: function (e) {
      this.$refs[e.end].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
      this.$refs[e.end].focus();
    },
    goToDay: function (e) {
      this.$refs[e].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
      this.$refs[e].focus();
    },
    dateDiff: function (a,b) {
      if (!a||!b) return 1;
      return (new Date(b).getTime()-new Date(a).getTime())/(1000 * 3600 * 24);
    },
    dayGraphSize: function (ds,de) {
      return this.daySize*this.dateDiff(ds,de)+25;
    },
    defaultDayFormat: function (day,nextDay) {
      return {date: day, collapsed: false, filtred: false, size: this.dayGraphSize(nextDay,day), m:[],n:[], events: []}
    },
    formatDate: function (date,event) {
      var d=date.split(/-/g);
      var day=d[2], month=['January','February','March','April','May','June','July','August','September','October','November','December'][Number(d[1])-1], year=d[0];
      return Number(day) + ' ' + month.slice(0,3) + ' ' + year + (event?' - ' + event:'');
    },
    collapseDay: function (b,t=false,force=undefined) {
      if (!t&&event.target.tagName.toLowerCase()!=='li') return;
      if (force && b.collapsed) return;
      b.collapsed=force!==undefined?force:!b.collapsed;
      var val = b.size;
      if (b.collapsed) val-=this.collapseSize;
      else val = 0-val+this.collapseSize;
      b.n.forEach(i=> i.bannerSize-=val);
      b.m.forEach(i=> i.bannerSize-=val);
    },
    collapseAll: function (collapse=true) {
      this.loading().then( () => {
        this.allItemsCollapsed=collapse;
        this.timelineItems.map(item=>this.collapseDay(item,true,collapse));
      });
    },
    collapseYear: function (year) {
      this.loading().then(()=> {
        this.timelineItems.forEach(item=>{
          if (year==item.date.slice(0,4)) this.collapseDay(item,true,true);
        });
      });
    },
    hideDay: function (d,force) {
      let val=d.collapsed?70:d.size;
      d.filtred=true;
      d.n.forEach(i=> i.bannerSize-=val);
      d.m.forEach(i=> i.bannerSize-=val);
    },
    clickBanner: function (b) {
      this.$store.commit('toggleBannerModal', b);
      //this.$emit('openbanner', b);
    },
    renderStuff: function () {
      console.log('rendering timeline');
      var o=this.events, d=this.timelineDates.slice().reverse(), x=[];
      for (var i=0;i<d.length;i++) {
        if (!x[i]) x.push(this.defaultDayFormat(d[i],d[i+1]));
        for (var j=0;j<o.length;j++) {
          var pos=-1;
          if (o[j].type==='event') {
            if (d[i] != o[j].start) continue;
            x[i].events.push(o[j]);
            continue;
          };
          if (d[i] != o[j].end) continue;
          o[j].bannerSize=x[i].size-10;//o[j].bannerSize=this.daySize*this.dateDiff(o[j].start,o[j].end)+25*(d.indexOf(o[j].start)-i)-10;
          if (o[j].type==='mystic') x[i].m.push(o[j]), pos=0;
          else {
            for (var k=0; k<x[i].n.length; k++) {
              if (x[i].n[k]) continue;
              x[i].n[k] = o[j];
              pos=k;
              break;
            };
            if (pos===-1) { // could not find an empty slot;
              x[i].n.push(o[j]);
              pos=x[i].n.length-1;
            };
          };
          //if (o[j].type==='mystic') continue;
          var z=d.indexOf(o[j].start)||1;
          var diff = z-i;
          //if (z-i <2) continue;
          for (var k=i;k<z;k++) {
            if (!x[k]) x[k]=this.defaultDayFormat(d[k],d[k+1]);
            if (k!=i) o[j].bannerSize+=x[k].size;
            if (o[j].type!='mystic') x[k].n[pos] = o[j];
            else x[k].m[pos] = o[j];
          };
        };
      };
      this.timelineItems = x;
    }
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    },
    timelineDates: function () {
      var s=[];
      for (var i=0;i<this.events.length;i++) {
        if (this.events[i].start && !s.includes(this.events[i].start)) s.push(this.events[i].start);
        if (this.events[i].end && !s.includes(this.events[i].end)) s.push(this.events[i].end);
      };
      s.sort((a,b) => {
        return a>b?1:a===b?0:-1;
      });
      return s;
    },
    activeFilters: function () {
      return Object.keys(this.filters).filter(i=>{
        if (this.filters[i]) return true;
        return false;
      })
    }
  },
  render: function (h) {
    if(!this.timelineItems) return h('div');
    return h('section', {staticClass: 'noselect'}, [
      h('div', {staticClass: 'float-quick-filters'}, [
        this.allItemsCollapsed?h('div', {staticClass: 'item', on: {click: ()=> this.collapseAll(false)} },'Collapsed'):null,
        this.activeFilters.map(x=>{return h('div', {staticClass: 'item', on: {click: ()=> this.loading().then(()=>{this.filters[x]=false}) }  },x)}) 
      ]),
      h('floating-menu',{props: {mobile: this.mobile, options: [{title: 'Search', class: 'fa fa-search', click: 'search'},{title: 'Vertical toggle', class: 'fa fa-mobile '+(this.vertical?'fa-rotate-90':''), click: 'vertical'},{title: 'Collapse all', class: 'fa fa-compress-alt', click: 'collapse-all'},{title: 'Home', class: 'fa fa-home', click: 'home'}]}, on: {search: ()=>this.showSearchBar(), home: ()=>this.home(), vertical: () => this.loading().then(()=>this.vertical=!this.vertical), 'collapse-all': ()=>this.collapseAll() } }),
      this.searchBar?h('search-bar', {ref: 'searchBar', props: {mobile: this.mobile, events: this.events}, on: {eventClick: (e) => this.goToEvent(e), close: () => this.showSearchBar()} }):null,
      h('ul', {class: {vtimeline: this.vertical, timeline: !this.vertical}},
        this.timelineItems.map ((day,i) => {
          return  h('li', {ref: day.date, attrs: {index: i, 'data-date': this.formatDate(day.date), id: day.date}, class: {collapsed: day.collapsed, 'full-hide': day.filtred }, style: { [!this.vertical?'width':'height']: day.size+'px'}, on:  {contextmenu: ()=>this.hideDay(day,true), click: ()=>this.collapseDay(day)} }, [
              h('span', {staticClass: 'tevent'}, [h('b', day.events.map( ev=> {return h('a', {on: {click: () => ev.ref?this.goToDay(ev.ref):null}}, ev.name) }))]),
              day.m.map((b,j)=>{
                return b&&b.end===day.date
                  ? h('div', {ref: b.id, staticClass: 'banner mystic', attrs: {tabindex: 0}, style: {[!this.vertical?'width':'height']: b.bannerSize+'px'}, on: {click: () => this.clickBanner(b)} },[
                        h('div', {staticClass: 'icon_container'}, b.c.map(c=>{
                          return h('div', {class: {isnew: c.new}}, [
                            h('img', {attrs: {src: 'https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2F'+this.gethero(c.id).id+'_s.png'}})
                          ])
                        })),
                        h('div', {staticClass: 'upulls'})
                    ])
                  : null
              }),
              h('div', {staticClass: 'wrapper'},
                day.n.map((b,j) => {
                  return b&&b.end===day.date
                    ? h('div', {ref:b.id,staticClass: 'banner '+(b.type!='covenant'?b.type:this.gethero(b.c[0].id).attribute), attrs: {tabindex: 0}, class: {}, style: {[!this.vertical?'width':'height']: b.bannerSize+'px'}, on: {click: () => this.clickBanner(b)} }, [
                        h('div', {staticClass: 'icon_container'}, b.c.map(c=>{
                          return h('div', {class: {isnew: c.new}}, [
                            h('img', {attrs: {src: 'https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2F'+this.gethero(c.id).id+'_s.png'}})
                          ])
                        })),
                        h('div', {staticClass: 'upulls'})
                      ])
                    : h('div',{staticClass: 'banner dummy'})
                })
              )
            ])
        })
      )
    ]);
  }
};