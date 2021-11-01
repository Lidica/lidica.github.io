console.log('calendar downloaded');
/* global Vue */
var shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var defMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var dateFunc = {
  getDuration: function getDuration(date) {
    // how many days of this month
    var dt = new Date(date);
    var month = dt.getMonth();
    dt.setMonth(dt.getMonth() + 1);
    dt.setDate(0);
    return dt.getDate();
  },
  changeDay: function changeDay(date, num) {
    var dt = new Date(date);
    return new Date(dt.setDate(dt.getDate() + num));
  },
  getStartDate: function getStartDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },
  getEndDate: function getEndDate(date) {
    var dt = new Date(date.getFullYear(), date.getMonth() + 1, 1); // 1st day of next month
    return new Date(dt.setDate(dt.getDate() - 1)); // last day of this month
  },
  pad: function (d) {return (d < 10) ? '0' + d.toString() : d.toString()},
  getUtcString: function (date) {
    return date.getUTCFullYear() + '-' + this.pad(date.getUTCMonth()+1) + '-' + this.pad(date.getUTCDate())
  },
  getString: function (date) {
    return date.getFullYear() + '-' + this.pad(date.getMonth()+1) + '-' + this.pad(date.getDate())
  },
  format: function format(date, _format, monthNames) {
    monthNames = monthNames || defMonthNames;
    if (typeof date === 'string') {
        date = new Date(date.replace(/-/g, '/'));
    } else {
        date = new Date(date);
    }

    var map = {
        'M': date.getMonth() + 1,
        'd': date.getDate(),
        'h': date.getHours(),
        'm': date.getMinutes(),
        's': date.getSeconds(),
        'q': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    };

    _format = _format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all === 'MMMM') {
                return monthNames[v - 1];
            }
            if (all === 'MMM') {
                return shortMonth[v - 1];
            }
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return String(date.getFullYear()).substr(4 - all.length);
        }
        return all;
    });
    return _format;
  }
};




export default {
  name: 'e7-calendar',
  props: {
    daysOfWeek: {
      type: Array,
      required: false,
      default: () => { return ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'] }
    },
    events: {
      type: Array,
      required: false,
      default: () => {return [{type:'buff-goldino',start:'2021-09-10', title: 'Gold Buff'}]}
    },
    toIcon: {
      type: Array,
      require: false,
      default: () => {return ['buff-goldino','event']}
    }
  },
  data: function (){
    return {
      showMore: false,
      firstDay: 1, // first day of the week 1 = monday, 0 = Sunday
      current: [null,null], /* year, month*/
      year: null,
      month: null,
      searchBar: false,
      currentDates: []
    }
  },
  beforeCreate: function () {
    this.$store.commit('loading', true);
  },
  created: function () {
    document.addEventListener('keydown', this.showSearchBar,false);
    this.getCalendar();
  },
  beforeDestroy: function(){
    document.removeEventListener('keydown', this.showSearchBar);
  },
  mounted: function () {
  },
  computed: {
    mobile: function () {
      return this.$store.state.isMobile;
    },
    weekMask: function () {
      var w=[0,1,2,3,4,5,6];
      var i=w.indexOf(this.firstDay)||0;
      var w2=w.splice(0,i);
      return w.concat(w2);
    }
  },
  watch: {
    firstDay: function () {
      this.getCalendar();
    },
    current: function () {
      this.getCalendar();
    }
  },
  updated: function (e) {
  },
  methods: {
    home: function () {
      this.$store.commit('toggleMainMenu');
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
    changeMonth: function (n) {
      this.current.splice(1, 1, parseInt(this.current[1])+n)
      if (this.current[1]>11) this.current.splice(1, 1, 0), this.changeYear(1);
      else if (this.current[1]<0) this.current.splice(1, 1, 11), this.changeYear(-1);
    },
    changeYear: function (n) {
      this.current.splice(0, 1, parseInt(this.current[0])+n)
    },
    isEvStart: function isBegin(event, date, index) {
      var st = new Date(event.start);

      if (index == 0 || st.toDateString() == date.toDateString()) {
        return true;
      }
      return false;
    },
    isEvEnd: function (ev,date) {
      if (ev=== dateFunc.getString(date)) return true;
      return false;
    },
    showSearchBar: function (e) {
      if (e && (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70))) {
        if (!this.searchBar) this.searchBar=true;
        else this.$refs.searchBar.$emit('focus'); //this.$refs.searchBar.focusInput(), this.$refs.searchBar.selectInputContent();
        e.preventDefault();
      } else if (!e) this.searchBar=!this.searchBar;
    },
    goToEvent: function (e) {
      let d=new Date(e.start);
      this.$set(this.current, 0, d.getUTCFullYear());
      this.$set(this.current, 1, d.getUTCMonth());
    },
    getCalendar: function getCalendar() {
      this.loading().then(()=>{
        var now = new Date(); // today
        if (this.current[0]===null) this.current.splice(0, 1, now.getUTCFullYear().toString());
        if (this.current[1]===null) this.current.splice(1, 1, now.getUTCMonth().toString());
        var current = new Date(this.current[0],this.current[1]);
        var startDate = dateFunc.getStartDate(current); // 1st day of month

        var curWeekDay = startDate.getDay();

        // begin date of this table may be some day of last month
        var diff = parseInt(this.firstDay) - curWeekDay;
        diff = diff > 0 ? diff - 7 : diff;

        startDate.setDate(startDate.getDate() + diff);
        var calendar = [], canContinue=true;
        for (var w = 0; w < 6; w++) {
          var week = [];
          for (var d = 0; d < 7; d++) {
            if (w>3&&d===0&&startDate.getMonth() != current.getMonth()) canContinue=false;
            let ev = this.getDailyEvents(startDate);
            week.push({
              monthDay: startDate.getDate(),
              isToday: dateFunc.getUtcString(now) == dateFunc.getString(startDate),
              isCurrMonth: startDate.getMonth() == current.getMonth(),
              weekDay: d,
              date: new Date(startDate),
              events: ev[0],
              icons: ev[1]
            });
            startDate.setDate(startDate.getDate() + 1);
          }
          if (!canContinue) break;
          calendar.push(week);
          //if (!calendar[calendar.length-1][calendar[calendar.length-1].length-1].isCurrMonth) break;
        }
        console.log('render');
        this.currentDates=calendar;
      });
    },
    getDailyEvents: function (ds) {
      let maxEvents=100;
      // find all events start from this date
      var cellIndexArr = [];
      var thisDayEvents = this.events.filter(function (day) {
        var dt = new Date(day.start);
        var st = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
        var ed = day.end ? new Date(day.end) : st;
        return ds >= st && ds <= ed;
      });

      thisDayEvents.sort(function (a, b) {
        if (!a.cellIndex) return 1;
        if (!b.cellIndex) return -1;
        return a.cellIndex - b.cellIndex;
      });
      var icons=[];
      var cellIndex=[];//Free to grab
      thisDayEvents.forEach(x=>{if(x.cellIndex) cellIndex.push(x.cellIndex)});
      var res=[];
      // mark cellIndex and place holder
      for (var i = 0; i < thisDayEvents.length; i++) {
        thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || null; 
        if (thisDayEvents[i].cellIndex===null) {let j=-1; while(thisDayEvents[i].cellIndex===null){ j++; if (!cellIndex.includes(j))thisDayEvents[i].cellIndex=j;} }
        if (!cellIndex.includes(thisDayEvents[i].cellIndex)) cellIndex.push(thisDayEvents[i].cellIndex);
        thisDayEvents[i].show = true;
        thisDayEvents[i].render = true;
        if ( this.toIcon.includes(thisDayEvents[i].type) ) thisDayEvents[i].show = false, icons.push(thisDayEvents[i].type);
        res[thisDayEvents[i].cellIndex]=thisDayEvents[i];
        /*if (thisDayEvents[i].cellIndex != i + 1 || i > maxEvents) continue;
        if (this.isEvStart(thisDayEvents[i],ds,1)) continue;
        thisDayEvents.splice(i, 0, {
          title: 'dummy',
          cellIndex: thisDayEvents[i].cellIndex,
          start: dateFunc.format(ds, 'yyyy-MM-dd'),
          end: dateFunc.format(ds, 'yyyy-MM-dd'),
          show: false,
          render: true
        });*/
      }
      //console.log(res);
      for (var i=0;i<res.length;i++){
        if (!res[i]) res[i] = {
          title: 'dummy',
          cellIndex: i,
          start: dateFunc.format(ds, 'yyyy-MM-dd'),
          end: dateFunc.format(ds, 'yyyy-MM-dd'),
          show: false,
          render: true
        }
      }
      return [res,icons];
    },
    dayClicked: function (day) {
      if (!day.events.length) return;
      var c = this.calcClickPos(event.target);
      c.top -= 100;
      c.events = day.events;
      console.log(day.events)
      this.showMore=c;
    },
    calcClickPos: function (t) {
      var event = t.getBoundingClientRect();
      var calendar = this.$refs['content'].getBoundingClientRect();
      return {
        left: event.left - calendar.left,
        top: event.bottom
      };
    },
  },
  render: function (h) {
    return h('div', {staticClass: "e7-calendar"}, [
      h('div', {staticClass: "e7-calendar-header"}, [ //paper-holes"}, [
          h('div', [h('floating-menu',{props: {mobile: this.mobile, options: [{title: 'Search', class: 'fa fa-search', click: 'search'},{title: 'Home', class: 'fa fa-home', click: 'home'}]}, on: {search: ()=>this.showSearchBar(), home: ()=>this.home() } }),
          this.searchBar?h('search-bar', {ref: 'searchBar', props: {moobile: this.mobile, events: this.events}, on: {eventClick: (e) => this.goToEvent(e), close: () => this.showSearchBar()} }):null,
          h('div', {staticClass: "year"}, [
            h('span', {on: {click: ()=>this.changeYear(-1)}, style: 'text-align: start;', staticClass: 'arrow'}, [h('i',{class:'fas fa-angle-left'})]),
            h('span', {staticClass: "title"}, this.current[0]),
            h('span', {on: {click: ()=>this.changeYear(1)}, style: 'text-align: end;', staticClass: 'arrow'}, [h('i',{class:'fas fa-angle-right'})]),
          ]),
          h('div', {staticClass: "month"}, [
            h('span', {on: {click: ()=>this.changeMonth(-1)}, style: 'text-align: start;', staticClass: "arrow"}, [h('i',{class:'fas fa-angle-left'})]),
            h('span', {staticClass: "title"}, defMonthNames[this.current[1]]),
            h('span', {on: {click: ()=>this.changeMonth(1)}, style: 'text-align: end;', staticClass: "arrow"}, [h('i',{class:'fas fa-angle-right'})]),
          ])
        ])
      ]),
      h('div', {staticClass: "e7-calendar-body"}, [
        h('div', {staticClass: "weeks"}, this.weekMask.map(g=> {return h('span', {staticClass: "week"}, this.daysOfWeek[g])}) ),
        h('div', {staticClass: "dates", ref: 'content'}, [
          h('div',{staticClass: 'vertical-lines'}, [0,1,2,3,4,5,6].map(n => {return h('div')})),
          this.currentDates.map((week)=>{
            return h('div',{staticClass: "week-row"}, 
              week.map((day,i)=> {
                return h('div', {staticClass: "day-cell",class: {'today': day.isToday, 'not-curr-month': !day.isCurrMonth}, on: {click: () => this.dayClicked(day)} }, [
                  h('div', {staticClass: 'header'}, [
                    h('span', {}, day.monthDay),
                    day.icons.map(icon => {return h('img',{staticClass: 'small-icon', attrs:{src: `https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2F${icon}.png`}})})
                  ]),
                  h('div', {staticClass: 'body'}, 
                    day.events.map(ev=>{
                      if (ev.render) 
                        return h('p',{staticClass: 'item', style: {opacity: ev.show?1:0}, class: {'is-start': this.isEvStart(ev,day.date,i), 'is-over': this.isEvEnd(ev.end,day.date)}}, this.isEvStart(ev,day.date,i)? ev.title:'')
                    })
                  )
                ])
              })
            )
          })
        ]),
        /* Details */
        this.showMore?h('div', {staticClass: "more-events", style: {left: this.showMore.left, top: this.showMore.top} }, [
          h('div', {staticClass: "more-header"}, [
            h('span', {staticClass: "title"}, "Title"),
            h('span', {staticClass: "close", style: {padding: '0 5px'}, on: {click: ()=> this.showMore=false}}, "x")
          ]),
          h('div', {staticClass: "more-body"}, [
            h('div', {staticClass: "more-list"}, [
              this.showMore.events.map(e=>{ if(e.show) return h('p', {staticClass: "item"}, e.title); else null})
            ])
          ])
        ]):null
      ])
    ])
  }
};
/*
Vue.component('calendar', {
    name: 'calendar',
	  props: {
	    currentDate: {},
	    events: {},
	    weekNames: {
	      type: Array,
	      default: []
	    },
	    monthNames: {},
	    firstDay: {}
	  },
	  created: function created() {
	    this.events.forEach(function (item, index) {
	      item._id = item.id || index;
	      item.end = item.end || item.start;
	    });
	    // this.events = events
	  },
	  data: function data() {
	    return {
	      // weekNames : DAY_NAMES,
	      weekMask: [1, 2, 3, 4, 5, 6, 7],
	      // events : [],
	      isLismit: true,
	      eventLimit: 3,
	      showMore: false,
	      morePos: {
	        top: 0,
	        left: 0
	      },
	      selectDay: {}
	    };
	  },

	  watch: {
	    weekNames: function weekNames(val) {
	      console.log('watch weekNames', val);
	    }
	  },
	  computed: {
	    currentDates: function currentDates() {
	      return this.getCalendar();
	    }
	  },
	  methods: {
	    isBegin: function isBegin(event, date, index) {
	      var st = new Date(event.start);

	      if (index == 0 || st.toDateString() == date.toDateString()) {
	        return event.title;
	      }
	      return '　';
	    },
	    moreTitle: function moreTitle(date) {
	      var dt = new Date(date);
	      return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate();
	    },
	    classNames: function classNames(cssClass) {
	      if (!cssClass) return '';
	      // string  
	      if (typeof cssClass == 'string') return cssClass;

	      // Array
	      if (Array.isArray(cssClass)) return cssClass.join(' ');

	      // else
	      return '';
	    },
	    getCalendar: function getCalendar() {
	      // calculate 2d-array of each month
	      // first day of this month
	      var now = new Date(); // today
	      var current = new Date(this.currentDate);

	      var startDate = dateFunc.getStartDate(current); // 1st day of this month

	      var curWeekDay = startDate.getDay();

	      // begin date of this table may be some day of last month
	      var diff = parseInt(this.firstDay) - curWeekDay;
	      diff = diff > 0 ? diff - 7 : diff;

	      startDate.setDate(startDate.getDate() + diff);
	      var calendar = [];

	      for (var perWeek = 0; perWeek < 6; perWeek++) {

	        var week = [];

	        for (var perDay = 0; perDay < 7; perDay++) {
	          week.push({
	            monthDay: startDate.getDate(),
	            isToday: now.toDateString() == startDate.toDateString(),
	            isCurMonth: startDate.getMonth() == current.getMonth(),
	            weekDay: perDay,
	            date: new Date(startDate),
	            events: this.slotEvents(startDate)
	          });

	          startDate.setDate(startDate.getDate() + 1);
	          // if (startDate.toDateString() == endDate.toDateString()) {
	          //   isFinal = true
	          //   break
	          // }
	        }
	        calendar.push(week);
	        // if (isFinal) break
	      }
	      return calendar;
	    },
	    slotEvents: function slotEvents(date) {

	      // find all events start from this date
	      var cellIndexArr = [];
	      var thisDayEvents = this.events.filter(function (day) {
	        var dt = new Date(day.start);
	        var st = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
	        var ed = day.end ? new Date(day.end) : st;
	        // console.log('slotEvt', st, ed, date)
	        return date >= st && date <= ed;
	      });

	      // sort by duration
	      thisDayEvents.sort(function (a, b) {
	        if (!a.cellIndex) return 1;
	        if (!b.cellIndex) return -1;
	        return a.cellIndex - b.cellIndex;
	      });

	      // mark cellIndex and place holder
	      for (var i = 0; i < thisDayEvents.length; i++) {
	        thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || i + 1;
	        thisDayEvents[i].isShow = true;
	        if (thisDayEvents[i].cellIndex == i + 1 || i > 2) continue;
	        thisDayEvents.splice(i, 0, {
	          title: 'holder',
	          cellIndex: i + 1,
	          start: dateFunc.format(date, 'yyyy-MM-dd'),
	          end: dateFunc.format(date, 'yyyy-MM-dd'),
	          isShow: false
	        });
	      }

	      return thisDayEvents;
	    },
	    isStart: function isStart(eventDate, date) {
	      var st = new Date(eventDate);
	      return st.toDateString() == date.toDateString();
	    },
	    isEnd: function isEnd(eventDate, date) {
	      var ed = new Date(eventDate);
	      return ed.toDateString() == date.toDateString();
	    },
	    selectThisDay: function selectThisDay(day, js) {
	      this.selectDay = day;
	      this.showMore = true;
	      this.morePos = this.computePos(event.target);
	      this.morePos.top -= 100;
	      var events = day.events.filter(function (item) {
	        return item.isShow == true;
	      });
	      this.$emit('moreclick', day.date, events, js);
	    },
	    computePos: function computePos(target) {
	      var eventRect = target.getBoundingClientRect();
	      var pageRect = this.$refs.dates.getBoundingClientRect();
	      return {
	        left: eventRect.left - pageRect.left,
	        top: eventRect.top + eventRect.height - pageRect.top
	      };
	    },
	    dayClick: function dayClick(day, jsEvent) {
	      this.$emit('dayclick', day, jsEvent);
	    },
	    eventClick: function eventClick(event, jsEvent) {
	      if (!event.isShow) {
	        return;
	      }
	      jsEvent.stopPropagation();
	      var pos = this.computePos(jsEvent.target);
	      this.$emit('eventclick', event, jsEvent, pos);
	    }
	  }
});*/