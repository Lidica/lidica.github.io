/*global Vue*/
Vue.component('banner-modal', {
  name: 'banner-modal',
  props: {
  },
  created: function () {
  },
  data: function () {
    return {}
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    },
    banner: function () {
      return this.$store.state.currentOpenBanner;
    },
    videoId: function () {
      return 'ng-13LRpUfw';
    },
    videoLink: function () {
      return 'https://www.youtube.com/embed/' + this.videoId + '?modestbranding=1&amp;ref=0&amp;iv_load_policy=3&amp;fs=1&amp;controls=1&amp;wmode=transparent&amp;autohide=1&amp;player_version=html5&amp;modestbranding=1&amp;ref=0&amp;iv_load_policy=3&amp;fs=1&amp;controls=1&amp;wmode=transparent&amp;autohide=1&amp;player_version=html5'
    }
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
    close: function () {
      this.$store.commit('toggleBannerModal', null);
    }
  },
  render: function (h) {
    return h('div', {staticClass: 'event-modal'}, [
      h('div', {staticClass: 'event-modal-content', attrs: {id: 'banner-modal' }, on: {wheel: (e) => console.log(e)}}, [
        h('div', {style: {position: 'sticky', top: 0}}, [
          h('img', {style: {width: '100%', position: 'absolute', top: 0}, attrs: {id: 'banner-thumbnail', src: 'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/4d5bc31a93f44cf08194237b63f8ecb2/ea9344529cd34e19a1b899751accd52c_1634100783.jpg'}}),
        ]),
        h('div', {staticClass: 'em-body', style: {height: '1000px;'}}, [
          h('div', {staticClass: 'em-header'}, [
            h('span', {staticClass: 'close-em', on: {click: (e) => this.close()}}, 'X'),
            h('h2', this.banner.title+' ('+this.banner.subtitle+')')
          ]),
          h('div', {staticClass: 'em-content'}, [
            h('iframe', {style: {float: 'right', width: '40vw', height: '22.6vw'/*width: '695px', height: '356px'*/}, attrs: {src: this.videoLink, allowfullscreen: "allowfullscreen"} })
          ])
        ])
      ])
    ]);
  }
});







(function () {
  const styles = `
    .event-modal * {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .event-modal *::-webkit-scrollbar {
      display: none;
    }
    .event-modal {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      z-index: 50;
    }
    .event-modal-content {
      position: relative;
      background-color: var(--background-color);
      height: 80%;
      width: 90%;
      //max-width: 600px;
      margin: auto;
      overflow: auto;
      border-radius: 10px;
    }
    .event-modal-content .em-body {
      position: relative;
      margin-top: 19.5%;
      background-color: inherit;
      height: 100%;
    }
    .em-header {
      padding: 20px 20px 0;
      font-size: 3vh;
      border-bottom: solid thin;
      position: sticky;
      top: 0;
      background-color: inherit;
    }
    .em-header > h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .em-body > .em-content {
      margin: 10px;
    }
    .close-em {
      float: right;
      cursor: pointer;
    }
    .close-em:hover {
      color: red;
    }
  `;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
})();



