(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b3188e"],{1148:function(t,e,n){"use strict";var r=n("a691"),i=n("577e"),s=n("1d80");t.exports=function(t){var e=i(s(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},2375:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"})},i=[],s={},o=s,a=(n("e85f"),n("2877")),u=Object(a["a"])(o,r,i,!1,null,"6422aaba",null);e["a"]=u.exports},2708:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return m}));var r=n("5530"),i=(n("a9e3"),n("b680"),n("2f62")),s=n("5a0c"),o=n.n(s),a=n("4208"),u=n.n(a);n("5087");o.a.extend(u.a).locale("zh-tw");var c={filters:{fromNowFilter:function(t){if(!t)return"-";var e=o()(),n=e.diff(t,"hour");return n>24?o()(t).format("M月DD日"):o()(t).fromNow(!0)}}},l={filters:{timeFormatFilter:function(t){if(!t)return"-";var e=o()(t).hour()>12?"下午":"上午";return e+o()(t).format(" hh:mm・YYYY年M月DD日")}}},f={filters:{thousandFilter:function(t){return t?Number(t)>1e3&&(t=(t/1e3).toFixed(1),t=String(t)+"K"):t=0,t}}},d={filters:{altFilter:function(t){return t?"@"+t:"@"}}},h={filters:{introFilter:function(t){return t||"Hello World"}}},p={computed:Object(r["a"])({},Object(i["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},m={computed:Object(r["a"])({},Object(i["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(t){this.$store.dispatch("handleSetReplyDetail",t),this.$store.dispatch("isReplyModalOpen",!0)}}}},"408a":function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,o,a){for(var u,c,l,f=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,p=0;p<h;p+=1){var m=d[p];m.d&&(u=o?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,v<=m.r||!m.r){v<=1&&p>0&&(m=d[p-1]);var _=f[m.l];a&&(v=a(""+v)),c="string"==typeof _?_.replace("%d",v):_(v,r,m.l,l);break}}if(r)return c;var w=l?f.future:f.past;return"function"==typeof w?w(c):w.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}))},"4abe":function(t,e,n){"use strict";n("5341")},"4b58":function(t,e,n){t.exports=n.p+"img/close_theme.b1a8a695.svg"},5087:function(t,e,n){!function(e,r){t.exports=r(n("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return n.default.locale(r,null,!0),r}))},5341:function(t,e,n){},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+_(r,2,"0")+":"+_(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:a,D:d,h:o,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=v;var y=function(t){return t instanceof Y},M=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)g[t]&&(r=t),e&&(g[t]=e,r=t);else{var i=t.name;g[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},b=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new Y(n)},D=w;D.l=M,D.i=y,D.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function v(t){this.$L=M(t.locale,null,!0),this.parse(t)}var _=v.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return b(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<b(t)},_.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,r=!!D.u(e)||e,l=D.p(t),h=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,v):h(0,v+1);case u:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(r?_-g:_+(6-g),v);case a:case d:return p(w+"Hours",0);case o:return p(w+"Minutes",1);case s:return p(w+"Seconds",2);case i:return p(w+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var n,u=D.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[a]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],p=u===a?this.$D+(e-this.$W):e;if(u===c||u===f){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[D.p(t)]()},_.add=function(r,l){var d,h=this;r=Number(r);var p=D.p(l),m=function(t){var e=b(h);return D.w(e.date(e.date()+Math.round(t*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===a)return m(1);if(p===u)return m(7);var v=(d={},d[s]=e,d[o]=n,d[i]=t,d)[p]||1,_=this.$d.getTime()+r*v;return D.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return D.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:D.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,d,h){var p,m=D.p(d),v=b(r),_=(v.utcOffset()-this.utcOffset())*e,w=this-v,$=D.m(this,v);return $=(p={},p[f]=$/12,p[c]=$,p[l]=$/3,p[u]=(w-_)/6048e5,p[a]=(w-_)/864e5,p[o]=w/n,p[s]=w/e,p[i]=w/t,p)[m]||w,h?$:D.a($)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return g[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),S=Y.prototype;return b.prototype=S,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",c],["$y",f],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,Y,b),t.$i=!0),b},b.locale=M,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=g[$],b.Ls=g,b.p={},b}))},"8e5a":function(t,e,n){"use strict";n("f8f4")},"907e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button-follow",class:{"button-follow-small":t.small,"button-follow-wait":t.isProcessing},attrs:{disabled:t.isProcessing}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.user.isFollowed,expression:"!user.isFollowed"}],staticClass:"button-follow__follow",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickFollow(t.userId)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProcessing,expression:"!isProcessing"}]},[t._v("跟隨")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isProcessing,expression:"isProcessing"}],staticClass:"button-follow__follow__spinner"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.user.isFollowed,expression:"user.isFollowed"}],staticClass:"button-follow__following",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickFollow(t.userId)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProcessing,expression:"!isProcessing"}]},[t._v("正在跟隨")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isProcessing,expression:"isProcessing"}],staticClass:"button-follow__following__spinner"})])])},i=[],s=n("1da1"),o=(n("96cf"),n("a9e3"),n("4cce")),a=n("2fa3"),u={name:"ButtonFollow",props:{user:{type:Object},userId:{type:Number},small:{type:Boolean,defaut:!1}},data:function(){return{isProcessing:!1}},methods:{handleClickFollow:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e.isProcessing=!0,!e.user.isFollowed){n.next=8;break}return n.next=5,o["a"].removeFollowShip({userId:t});case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,o["a"].addFollowShip({id:t});case 10:n.t0=n.sent;case 11:if(r=n.t0,i=r.data,"success"===i.status){n.next=15;break}throw new Error(i.message);case 15:if(e.$store.dispatch("handleSetFollowed",t),e.isProcessing=!1,a["a"].fire({icon:"success",title:"".concat(i.message)}),"success"===i.status){n.next=20;break}throw new Error(i.message);case 20:n.next=26;break;case 22:n.prev=22,n.t1=n["catch"](0),console.log(n.t1),a["a"].fire({icon:"error",title:"更新失敗"});case 26:case"end":return n.stop()}}),n,null,[[0,22]])})))()}}},c=u,l=(n("4abe"),n("2877")),f=Object(l["a"])(c,r,i,!1,null,"42434c50",null);e["a"]=f.exports},"9be1":function(t,e,n){},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("a691"),s=n("408a"),o=n("1148"),a=n("d039"),u=1..toFixed,c=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=c(i/1e7)},h=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=c(r/e),r=r%e*1e7},p=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},m=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){u.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,n,r,a,u=s(this),c=i(t),m=[0,0,0,0,0,0],v="",_="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,n=e<0?u*l(2,-e,1):u/l(2,e,1),n*=4503599627370496,e=52-e,e>0){d(m,0,n),r=c;while(r>=7)d(m,1e7,0),r-=7;d(m,l(10,r,1),0),r=e-1;while(r>=23)h(m,1<<23),r-=23;h(m,1<<r),d(m,1,1),h(m,2),_=p(m)}else d(m,0,n),d(m,1<<-e,0),_=p(m)+o.call("0",c);return c>0?(a=_.length,_=v+(a<=c?"0."+o.call("0",c-a)+_:_.slice(0,a-c)+"."+_.slice(a-c))):_=v+_,_}})},e83a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popular"},[n("div",{staticClass:"popular__container"},[n("div",{staticClass:"popular__title"},[t._v(" Popular ")]),t.isLoading?n("Spinner"):t._e(),n("div",{staticClass:"popular__user-list"},t._l(t.popular,(function(e){return n("router-link",{key:e.id,staticClass:"popular__user-list__list",attrs:{to:{name:"UserAllTweets",params:{user_id:e.id}}}},[n("div",{staticClass:"popular__user-list__avatar",style:{backgroundImage:"url("+e.avatar+")"}}),n("div",{staticClass:"popular__user-list__info"},[n("div",{staticClass:"popular__user-list__name"},[t._v(t._s(e.name))]),n("div",{staticClass:"popular__user-list__account"},[t._v(" "+t._s(t._f("altFilter")(e.account))+" ")])]),n("ButtonFollow",{attrs:{user:e,userId:e.id}})],1)})),1)],1),n("p",{staticClass:"more"},[t._v("© 2021 WAHP")])])},i=[],s=n("1da1"),o=(n("96cf"),n("4cce")),a=n("2fa3"),u=n("2708"),c=n("2375"),l=n("907e"),f={name:"UserPopularTop.vue",components:{Spinner:c["a"],ButtonFollow:l["a"]},mixins:[u["a"]],data:function(){return{isLoading:!0,userIsFollowing:!1}},computed:{popular:function(){return this.$store.getters.getPopular}},created:function(){this.fetchPopularUsers()},methods:{fetchPopularUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].getPopularUsers();case 3:n=e.sent,r=n.data,t.$store.dispatch("handleSetPopular",r),t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),a["a"].fire({icon:"error",title:"PopularTop讀取失敗"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},d=f,h=(n("8e5a"),n("2877")),p=Object(h["a"])(d,r,i,!1,null,"bbfa0774",null);e["a"]=p.exports},e85f:function(t,e,n){"use strict";n("9be1")},f8f4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-61b3188e.9ac97207.js.map