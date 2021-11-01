/*global Vue*/
// requested getHero, heroIcon, Banners, HeroDB from Store
export default {
  name: 'chrs-stats',
  props: {
    stats: {
      type: Object,
      required: false,
      default: function () {return {} }
    }
  },
  data: function () {
    return {
      events: [],
      userdata: {},
      userStats: {}, //userPulls
      dataStats: [],
      now: {},
      sort: ['recent',false],
      filter: {role: [], attribute: [], rarity: [], noReruns: false},
      filterOpen: false
    }
  },
  beforeCreate: function () {
    this.$store.commit('loading', true);
  },
  created: function () {
    this.toggleLoading(true);
    Promise.all([this.$store.dispatch('getHeroDB'), this.$store.dispatch('getBanners')]).then (data => {
      this.events = data[1];
      this.now=new Date();
      this.$store.dispatch('loadIndexedDB').then(db => {
        this.$store.dispatch('loadUserDataDB',db,'pulls').then(store => {
          this.userdata = store;
          this.calcStats();
          this.toggleLoading(false);
        });
      }).catch(err=>{
        this.calcStats();
        this.toggleLoading(false);
      });
    }).catch(err=> {
      console.log('Error while fetching HeroDB and Banner list');
      this.toggleLoading(false);
    });
  },
  mounted: function () {
  },
  updated: function () {
  },
  watch: {
    sort: function () {
      this.loading().then(()=>{this.sorter()});
    },
    filter: {
      handler: function () {
        this.loading().then(()=>{this.filterEl()})
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
    gethero: function (id) {
      return this.$store.getters.getHero(id);
    },
    dateDiff: function (a,b) {
      if (!b) return undefined;
      if (!a||!b) return 1;
      return (new Date(b).getTime()-new Date(a).getTime())/(1000 * 3600 * 24);
    },
    formatDate: function (date) {
      if (!date) return undefined;
      var d=date.split(/-/g);
      var day=d[2], month=['January','February','March','April','May','June','July','August','September','October','November','December'][Number(d[1])-1], year=d[0];
      return Number(day) + ' ' + month.slice(0,3) + ' ' + year;
    },
    pullData: function (id) {
      return this.userdata[id] || {c:[],a:[]};
    },
    charPullData: function (id,chId) {
      return this.pullData(id)[chId]||{};
    },
    sorter: function () {
      var v=this.sort[0];
      switch (v) {
        case 'rarity':
          this.dataStats.sort((a,b)=>{ return (this.gethero(a.id)[v] < this.gethero(b.id)[v] ) - (this.gethero(a.id)[v] > this.gethero(b.id)[v] ) || (this.gethero(a.id).name > this.gethero(b.id).name ) - (this.gethero(a.id).name < this.gethero(b.id).name ) });
          break;
        case 'attribute':
        case 'name':
        case 'role':
        case 'id':
          this.dataStats.sort((a,b)=>{return (this.gethero(a.id)[v]>this.gethero(b.id)[v]) - (this.gethero(a.id)[v]<this.gethero(b.id)[v]) || (this.gethero(a.id).name > this.gethero(b.id).name ) - (this.gethero(a.id).name < this.gethero(b.id).name) });
          break;
        case 'nOfBanners':
          this.dataStats.sort((a,b)=>{return b.banners.length-a.banners.length})
          break;
        case 'recent':
          this.dataStats.sort((a,b)=>{return b.banners[b.banners.length-1].start>a.banners[a.banners.length-1].start?1:b.banners[b.banners.length-1].start<a.banners[a.banners.length-1].start?-1:0})
          break;
        default:
      };
      if (this.sort[1]) this.dataStats.reverse();
    },
    filterEl: function () {
      this.dataStats.forEach((item,i) => {
        if (this.filter.attribute.length && (!this.filter.attribute.some(attribute => attribute===this.gethero(item.id).attribute) ))
          return item.visible=false;
        if (this.filter.role.length && (!this.filter.role.some(role => role===this.gethero(item.id).role) ))
          return item.visible=false;
        if (this.filter.rarity.length && (!this.filter.rarity.some(rarity => rarity===this.gethero(item.id).rarity) ))
          return item.visible=false;
        if (this.filter.noReruns && (item.banners.length>1))
          return item.visible=false;
        return item.visible=true;
      });
    },
    openFilter: function () {
      
    },
    clickEvent: function (event,date) {
      this.$emit(event.click, event);
    },
    clickBanner: function (b) {
      this.$store.commit('toggleBannerModal', b);
      //this.$emit('openbanner',b)
    },
    calcStats: function () {
      if (Object.keys(this.stats).length!==0) {
        this.dataStats=this.stats;
        this.filterEl();
        this.sorter();
        return;
      };
      var x={};
      this.events.forEach(item=>{
        if (!item.c||item.type==='event') return;
        item.c.forEach((h,i)=>{
          if (!x[h.id]) x[h.id] = {visible: true, id: h.id, banners: []};
          item.pulls=0;
          item.pity=0;
          item.obtained=0;
          /*if (this.pullData(item.id)) {
            let t=this.pullData(item.id);
            if (t.c && t.c[i]) {
              item.pulls+=t.pulls;
              item.obtained+=t.c[i].g;
              item.pity+=t.c[i].p;
            };
          };*/
          x[h.id].banners.push(item);
        })
      });
      this.dataStats=Object.values(x).reverse();
      this.filterEl();
      this.sorter();
    }
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    }
  },
  render: function (h) {
    return h('div', {staticClass: 'ch-cards-wrap'}, [
      this.filterOpen?h('filters-modal', {on: {save: (a,b) => {this.filterOpen=false; this.filter=a; this.sort=b}, close: () => this.filterOpen=false }, props: {res: this.filter, sorting: this.sort, extrasort: [{name: 'Last banner', id: 'recent'},{name: '# of reruns', id: 'nOfBanners'}]}}, [
        h('label', {staticClass: 'custom-check'}, [
          h('input', {attrs: {type: 'checkbox', checked: this.filter.noReruns}, on: {change: e => {this.$set(this.filter, 'noReruns', e.target.checked)}  }}),
          h('span', {staticClass: 'checkmark'}),
          'Characters with no banners'
        ])
      ]):null,
      h('floating-menu',{props: {mobile: this.mobile, options: [{title: 'Filter', class: 'fa fa-filter', click: 'filter'},{title: 'Home', class: 'fa fa-home', click: 'home'}]}, on: {search: ()=>this.showSearchBar(), home: ()=>this.home(), 'filter': ()=>this.filterOpen=true } }),
      this.dataStats.map(item=>{
        return h('div', {staticClass: 'ch-card-stats', key: item.id, style: {display: item.visible?'':'none'}}, [
          h('div', {staticClass: 'header '+this.gethero(item.id).attribute, style: {'--card-icon': 'url(https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2F'+this.gethero(item.id).id+'_s.png)'} }, this.gethero(item.id).name),
          h('div', {staticClass: 'body'}, [
            h('div', {staticClass: 'body-item noselect'}, [
                h('div',{style: {flex: 1.2}},'Date'),
                h('div',{},'Dal precedente'),
                h('div',{},'Da oggi'),
                h('div',{},'Pulls'),
                h('div',{},'Pity'),
                h('div',{},'Obtained'),
            ]),
            item.banners.map((b,i)=> {
              return h('div', {staticClass: 'body-item', on: {click: ()=>this.clickBanner(b)} }, [
                h('div',{style: {flex: 1.2}},this.formatDate(b.start)),
                h('div',{},i!=0?this.dateDiff(item.banners[i-1].start,b.start):''),
                h('div',{},Math.ceil(this.dateDiff(b.start,this.now)) ),
                h('div',{},this.pullData(b.id).pulls||''),
                h('div',{},this.charPullData(b.id,item.id).p||''),
                h('div',{},this.charPullData(b.id,item.id).g||''),
              ])
            })
          ])
        ])
      })
    ]);
  }
};