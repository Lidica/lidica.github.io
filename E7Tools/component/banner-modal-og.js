/*global Vue*/
Vue.component('banner-modal', {
  name: 'banner-modal',
  props: {
  },
  created: function () {
    this.$store.commit('loading', true);
    this.$store.dispatch('getBannerPulls', this.banner.id).then(res => {
      if (res) this.userdata = res;
    }).catch(err=>{
    }).finally( () => {
      this.$store.commit('loading', false);
    });
  },
  data: function () {
    return {
      userdata: {}
    }
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    },
    banner: function () {
      return this.$store.state.currentOpenBanner;
    },
  },
  mounted: function () {
  },
  methods: {
    hero: function (id) {
      return this.$store.getters.getHero(id)
    },
    heroicon: function (id) {
      return this.$store.getters.getHeroIcon(id);
    },
    charData: function (chId) {
      return this.userdata[chId]||{};
    },
    pad: function (d) {return (d < 10) ? '0' + d.toString() : d.toString()},
    getUtcString: function (date) {
      return date.getUTCFullYear() + '-' + this.pad(date.getUTCMonth()+1) + '-' + this.pad(date.getUTCDate())
    },
    saveMethod: function (event) {
      if (this.getUtcString(new Date)<this.banner.start) {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'This banner is not aviable yet!'});
        return;
      };
      var defaultPity = this.banner.type==='mystic'?201:121;
      let d= {id: this.banner.id, pulls: Number(this.$refs['pulls'].value)};
      var b=this.banner;
      var pityCount=0, gotCount=0;
      b.c.forEach((h,i)=>{
        d[h.id]={
          g:Number(this.$refs[h.id+'_g'].value),
          p:Number(this.$refs[h.id+'_p'].value)
        };
        if (this.hero(h.id).rarity<5) return;
        pityCount+=d[h.id].p, gotCount+=d[h.id].g;
      });
      if (isNaN(pityCount) || isNaN(gotCount) || isNaN(d.pulls) ) {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'Some values are not numbers'});
        return;
      } else if (gotCount<pityCount) {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'Pity counter is higher than characters obtained.'});
        return;
      } else if (d.pulls-pityCount*defaultPity-(gotCount-pityCount)<0) {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'Number of pulls and pity don\'t match.'});
        return;
      } else if (d.pulls-(pityCount*defaultPity)-((defaultPity)*(gotCount-pityCount))>=defaultPity) {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'Too many pulls without pity'});
        return;
      };
      this.$store.dispatch('savePullData', d).then(()=> {
        this.close();
      }).catch((e)=> {
        this.$root.$emit('snackbar', {type: 'error', title: 'ERROR', description: 'Error while opening the database.'});
        console.log('error while saving')
      });
    },
    close: function () {
      this.$store.commit('toggleBannerModal', null);
    }
  },
  render: function (h) {
    return h('div', {}, [
      h('div',{staticClass: 'modal animatezoom'},[
        h('div',{staticClass: 'modal-content modal-three-parts'},[
          h('div', [
            h('span', {staticClass: 'modal-title'}, this.banner.title+' ('+this.banner.subtitle+')')
          ]),
          h('div',[
            h('div',{style: {textAlign: 'center'}}, [
              'Currently saving is disabled and data does not carry between visits!',
              h('br'),
              this.banner.nid ? h('a', {attrs: {href: 'https://page.onstove.com/epicseven/global/view/'+this.banner.nid}}, 'Stove Rate up notice') : null,
              h('br'),
              'Number of pulls: ',
              h('input', {staticClass: 'editable', ref: 'pulls', attrs: {value: this.userdata.pulls||0}})
            ]),
            h('div', {staticClass: 'two-columns'},[
              /*  HEROES  */
              h('div',[
                this.banner.c.map((hero,i)=>{
                  return h('div', [
                    h('img', {staticClass: 'game-item', attrs: {src: this.heroicon(hero.id)}}),
                    h('span', [
                      'Obtained: ',
                      h('input', {staticClass: 'editable', ref: hero.id+'_g', attrs: {value: this.charData(hero.id).g||0}})
                    ]),
                    h('span', {style: {display: this.hero(hero.id).rarity===5?'':'none'}}, [
                      'Pity: ',
                      h('input', {staticClass: 'editable', ref: hero.id+'_p', attrs: {value: this.charData(hero.id).p||0}})
                    ])
                  ])
                })
              ]),
              /*  ARTIFACTS  */
              h('div',[
                this.banner.a.map((arti,i) => {
                  return h('div',[
                    arti.id,
                    h('input', {staticClass: 'editable', ref: 'ainput', attrs: {value: ( (this.userdata.a||[])[i]||{}).g||0}})
                  ])
                })
              ])
            ])
          ]),
          /* FOOTER */
          h('div', [
            h('span', {staticClass: 'modal-text'}, this.banner.id),
            h('button', {staticClass: 'modal-button', on: {click: ()=> this.saveMethod()} }, 'Save'),
            h('button', {staticClass: 'modal-button', on: {click: ()=> this.close()} }, 'Close'),
          ])
        ])
      ])
    ]);
  }
});