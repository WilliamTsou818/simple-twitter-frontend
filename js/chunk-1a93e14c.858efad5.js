(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a93e14c"],{1148:function(t,e,r){"use strict";var n=r("a691"),i=r("577e"),s=r("1d80");t.exports=function(t){var e=i(s(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"257f":function(t,e,r){},2708:function(t,e,r){"use strict";r.d(e,"c",(function(){return d})),r.d(e,"g",(function(){return f})),r.d(e,"f",(function(){return l})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return p})),r.d(e,"a",(function(){return v}));var n=r("5530"),i=(r("a9e3"),r("b680"),r("a4d3"),r("e01a"),r("2f62")),s=r("5a0c"),a=r.n(s),o=r("4208"),u=r.n(o),c=(r("5087"),r("d9cb"));a.a.extend(u.a).locale("zh-tw");var d={filters:{fromNowFilter:function(t){if(!t)return"-";var e=a()(),r=e.diff(t,"hour");return r>24?a()(t).format("M月DD日"):a()(t).fromNow(!0)}}},f={filters:{timeFormatFilter:function(t){if(!t)return"-";var e=a()(t).hour()>12?"下午":"上午";return e+a()(t).format(" hh:mm・YYYY年M月DD日")}}},l={filters:{thousandFilter:function(t){return t?Number(t)>1e3&&(t=(t/1e3).toFixed(1),t=String(t)+"K"):t=0,t}}},h={filters:{altFilter:function(t){return t?"@"+t:"@"}}},m={computed:Object(n["a"])({},Object(i["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},p={computed:Object(n["a"])({},Object(i["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(t){this.$store.dispatch("handleSetReplyDetail",t),this.$store.dispatch("isReplyModalOpen",!0)}}},v={methods:{ToastSuccess:function(t){var e=t.title,r=void 0===e?"":e,n=t.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"success",title:r,description:i}})},ToastError:function(t){var e=t.title,r=void 0===e?"":e,n=t.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"error",title:r,description:i}})}}}},"408a":function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},4208:function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";return function(t,e,r){t=t||{};var n=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,r,i){return n.fromToBase(t,e,r,i)}r.en.relativeTime=i,n.fromToBase=function(e,n,s,a,o){for(var u,c,d,f=s.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,m=0;m<h;m+=1){var p=l[m];p.d&&(u=a?r(e).diff(s,p.d,!0):s.diff(e,p.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(d=u>0,v<=p.r||!p.r){v<=1&&m>0&&(p=l[m-1]);var _=f[p.l];o&&(v=o(""+v)),c="string"==typeof _?_.replace("%d",v):_(v,n,p.l,d);break}}if(n)return c;var $=d?f.future:f.past;return"function"==typeof $?$(c):$.replace("%s",c)},n.to=function(t,e){return s(t,e,this,!0)},n.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(a(this),t)},n.fromNow=function(t){return this.from(a(this),t)}}}))},"4edb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container container--user"},[r("Head",{attrs:{title:t.currentViewUser.data.name,count:t.currentViewUser.data.TweetsCount,backArrow:""}}),r("section",{staticClass:"tab-router"},[r("router-link",{staticClass:"tab-router__link",class:{"router-link-active":"UserFollowers"===t.tab},attrs:{to:{name:"UserFollowers",params:{user_id:t.userId}}}},[r("span",{staticClass:"tab-router__text"},[t._v("跟隨者")])]),r("router-link",{staticClass:"tab-router__link",class:{"router-link-active":"UserFollowings"===t.tab},attrs:{to:{name:"UserFollowings",params:{user_id:t.userId}}}},[r("span",{staticClass:"tab-router__text"},[t._v("正在跟隨")])])],1),r("router-view",{attrs:{isLoadingPage:t.isLoading}})],1)},i=[],s=r("1da1"),a=r("5530"),o=(r("96cf"),r("b0c0"),r("2f62")),u=r("4cce"),c=r("2708"),d=r("7a0f"),f={name:"UserAllFollow",mixins:[c["a"]],components:{Head:d["a"]},data:function(){return{isLoading:!0,userId:"",show:""}},computed:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["currentUser"])),{},{currentViewUser:function(){return this.$store.getters.getViewUser},tab:function(){return this.$route.name}}),created:function(){var t=this.$route.params.user_id;this.userId=t,this.fetchUser(t),this.$store.dispatch("isViewCurrentUser",t),this.$store.dispatch("fetchViewUserFollowings"),this.$store.dispatch("fetchViewUserFollowers")},beforeRouteUpdate:function(t,e,r){var n=this.$route.params.user_id;this.userId=n,this.fetchUser(n),this.$store.dispatch("isViewCurrentUser",n),this.$store.dispatch("fetchViewUserFollowings"),this.$store.dispatch("fetchViewUserFollowers"),r()},methods:{fetchUser:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,u["a"].getUser({userId:t});case 4:n=r.sent,i=n.data,e.userInfo=i,e.$store.dispatch("handleInitViewUser",i),e.isLoading=!1,r.next=18;break;case 11:r.prev=11,r.t0=r["catch"](0),e.isLoading=!1,s="",s=r.t0.response?r.t0.response.data.message:r.t0.message,e.ToastError({title:"取得使用者資訊失敗！",description:s}),e.$router.back();case 18:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},l=f,h=(r("96f3"),r("2877")),m=Object(h["a"])(l,n,i,!1,null,"70ec832a",null);e["default"]=m.exports},5087:function(t,e,r){!function(e,n){t.exports=n(r("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return r.default.locale(n,null,!0),n}))},"555b":function(t,e,r){},"5a0c":function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",d="quarter",f="year",l="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},$={s:_,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+_(n,2,"0")+":"+_(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,a=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:l,h:a,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",g={};g[w]=v;var y=function(t){return t instanceof Y},M=function(t,e,r){var n;if(!t)return w;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var i=t.name;g[i]=t,n=i}return!r&&n&&(w=n),n||!r&&w},b=function(t,e){if(y(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new Y(r)},D=$;D.l=M,D.i=y,D.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function v(t){this.$L=M(t.locale,null,!0),this.parse(t)}var _=v.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},_.isAfter=function(t,e){return b(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<b(t)},_.$g=function(t,e,r){return D.u(t)?this[e]:this.set(r,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var r=this,n=!!D.u(e)||e,d=D.p(t),h=function(t,e){var i=D.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},m=function(t,e){return D.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,v=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case f:return n?h(1,0):h(31,11);case c:return n?h(1,v):h(0,v+1);case u:var w=this.$locale().weekStart||0,g=(p<w?p+7:p)-w;return h(n?_-g:_+(6-g),v);case o:case l:return m($+"Hours",0);case a:return m($+"Minutes",1);case s:return m($+"Seconds",2);case i:return m($+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var r,u=D.p(t),d="set"+(this.$u?"UTC":""),h=(r={},r[o]=d+"Date",r[l]=d+"Date",r[c]=d+"Month",r[f]=d+"FullYear",r[a]=d+"Hours",r[s]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===f){var p=this.clone().set(l,1);p.$d[h](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[D.p(t)]()},_.add=function(n,d){var l,h=this;n=Number(n);var m=D.p(d),p=function(t){var e=b(h);return D.w(e.date(e.date()+Math.round(t*n)),h)};if(m===c)return this.set(c,this.$M+n);if(m===f)return this.set(f,this.$y+n);if(m===o)return p(1);if(m===u)return p(7);var v=(l={},l[s]=e,l[a]=r,l[i]=t,l)[m]||1,_=this.$d.getTime()+n*v;return D.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return D.s(s%12||12,t,"0")},l=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(r.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,u,2),ddd:d(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:D.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,l,h){var m,p=D.p(l),v=b(n),_=(v.utcOffset()-this.utcOffset())*e,$=this-v,w=D.m(this,v);return w=(m={},m[f]=w/12,m[c]=w,m[d]=w/3,m[u]=($-_)/6048e5,m[o]=($-_)/864e5,m[a]=$/r,m[s]=$/e,m[i]=$/t,m)[p]||$,h?w:D.a(w)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return g[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=M(t,e,!0);return n&&(r.$L=n),r},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),C=Y.prototype;return b.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",f],["$D",l]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,Y,b),t.$i=!0),b},b.locale=M,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=g[w],b.Ls=g,b.p={},b}))},"78e6":function(t,e,r){"use strict";r("555b")},"7a0f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.backArrow,expression:"backArrow"}],staticClass:"head__back",on:{click:t.handleBack}},[n("img",{staticClass:"head__back__icon",attrs:{src:r("ddf8"),alt:"back"}})]),n("div",{staticClass:"head__info"},[n("div",{staticClass:"head__info__title"},[t._v(" "+t._s(t.title)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.account,expression:"account"}],staticClass:"head__info__account"},[t._v("@"+t._s(t.account))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}],staticClass:"head__info__count"},[t._v(t._s(t.count)+" 推文")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],staticClass:"head__message"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M23.2499 3.25001H20.8249V0.825012C20.8249 0.411012 20.4889 0.0750122 20.0749 0.0750122C19.6609 0.0750122 19.3249 0.411012 19.3249 0.825012V3.25001H16.8999C16.4859 3.25001 16.1499 3.58601 16.1499 4.00001C16.1499 4.41401 16.4859 4.75001 16.8999 4.75001H19.3249V7.17501C19.3249 7.58901 19.6609 7.92501 20.0749 7.92501C20.4889 7.92501 20.8249 7.58901 20.8249 7.17501V4.75001H23.2499C23.6639 4.75001 23.9999 4.41401 23.9999 4.00001C23.9999 3.58601 23.6639 3.25001 23.2499 3.25001ZM20.0749 10.126C19.6609 10.126 19.3249 10.462 19.3249 10.876V18.954C19.3249 19.368 18.9879 19.704 18.5749 19.704H4.09495C3.68295 19.704 3.34495 19.368 3.34495 18.954V8.29801L10.1229 12.816C10.4909 13.062 10.9129 13.186 11.3359 13.186C11.7579 13.186 12.1799 13.062 12.5479 12.816L17.0779 9.80301C17.4139 9.58001 17.5059 9.12701 17.2819 8.79101C17.0589 8.45901 16.6069 8.36601 16.2699 8.59101L11.7399 11.605C11.4939 11.767 11.1769 11.768 10.9319 11.605L3.34595 6.54501V5.50001C3.34595 5.08601 3.68295 4.75001 4.09595 4.75001H13.1899C13.6039 4.75001 13.9399 4.41401 13.9399 4.00001C13.9399 3.58601 13.6039 3.25001 13.1899 3.25001H4.09595C2.85595 3.25001 1.84595 4.26001 1.84595 5.50001V18.955C1.84595 20.195 2.85595 21.205 4.09595 21.205H18.5759C19.8159 21.205 20.8259 20.195 20.8259 18.955V10.877C20.8259 10.462 20.4889 10.127 20.0759 10.127L20.0749 10.126Z",fill:"black"}})])])])},i=[],s=(r("a9e3"),{name:"Head",props:{backArrow:{type:Boolean,default:!1},message:{type:Boolean,default:!1},title:{type:String,default:"loading",required:!0},count:{type:[String,Number],default:""},account:{type:String}},methods:{handleBack:function(){this.$router.back()}}}),a=s,o=(r("78e6"),r("2877")),u=Object(o["a"])(a,n,i,!1,null,"1b90c462",null);e["a"]=u.exports},"96f3":function(t,e,r){"use strict";r("257f")},b680:function(t,e,r){"use strict";var n=r("23e7"),i=r("a691"),s=r("408a"),a=r("1148"),o=r("d039"),u=1..toFixed,c=Math.floor,d=function(t,e,r){return 0===e?r:e%2===1?d(t,e-1,r*t):d(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},l=function(t,e,r){var n=-1,i=r;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=c(i/1e7)},h=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=c(n/e),n=n%e*1e7},m=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+a.call("0",7-n.length)+n}return r},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,r,n,o,u=s(this),c=i(t),p=[0,0,0,0,0,0],v="",_="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(e=f(u*d(2,69,1))-69,r=e<0?u*d(2,-e,1):u/d(2,e,1),r*=4503599627370496,e=52-e,e>0){l(p,0,r),n=c;while(n>=7)l(p,1e7,0),n-=7;l(p,d(10,n,1),0),n=e-1;while(n>=23)h(p,1<<23),n-=23;h(p,1<<n),l(p,1,1),h(p,2),_=m(p)}else l(p,0,r),l(p,1<<-e,0),_=m(p)+a.call("0",c);return c>0?(o=_.length,_=v+(o<=c?"0."+a.call("0",c-o)+_:_.slice(0,o-c)+"."+_.slice(o-c))):_=v+_,_}})},ddf8:function(t,e,r){t.exports=r.p+"img/back.eb89e502.svg"}}]);
//# sourceMappingURL=chunk-1a93e14c.858efad5.js.map