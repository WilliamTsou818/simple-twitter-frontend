(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8f061c6"],{1148:function(t,e,r){"use strict";var n=r("a691"),i=r("577e"),s=r("1d80");t.exports=function(t){var e=i(s(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},2375:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner"})},i=[],s={},a=s,o=(r("e85f"),r("2877")),u=Object(o["a"])(a,n,i,!1,null,"6422aaba",null);e["a"]=u.exports},2708:function(t,e,r){"use strict";r.d(e,"c",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"f",(function(){return d})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return p})),r.d(e,"e",(function(){return _})),r.d(e,"a",(function(){return m}));var n=r("5530"),i=(r("a9e3"),r("b680"),r("a4d3"),r("e01a"),r("2f62")),s=r("5a0c"),a=r.n(s),o=r("4208"),u=r.n(o),c=(r("5087"),r("d9cb"));a.a.extend(u.a).locale("zh-tw");var l={filters:{fromNowFilter:function(t){if(!t)return"-";var e=a()(),r=e.diff(t,"hour");return r>24?a()(t).format("M月DD日"):a()(t).fromNow(!0)}}},f={filters:{timeFormatFilter:function(t){if(!t)return"-";var e=a()(t).hour()>12?"下午":"上午";return e+a()(t).format(" hh:mm・YYYY年M月DD日")}}},d={filters:{thousandFilter:function(t){return t?Number(t)>1e3&&(t=(t/1e3).toFixed(1),t=String(t)+"K"):t=0,t}}},h={filters:{altFilter:function(t){return t?"@"+t:"@"}}},p={computed:Object(n["a"])({},Object(i["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},_={computed:Object(n["a"])({},Object(i["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(t){this.$store.dispatch("handleSetReplyDetail",t),this.$store.dispatch("isReplyModalOpen",!0)}}},m={methods:{ToastSuccess:function(t){var e=t.title,r=void 0===e?"":e,n=t.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"success",title:r,description:i}})},ToastError:function(t){var e=t.title,r=void 0===e?"":e,n=t.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"error",title:r,description:i}})}}}},2988:function(t,e,r){},"408a":function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},4208:function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";return function(t,e,r){t=t||{};var n=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,r,i){return n.fromToBase(t,e,r,i)}r.en.relativeTime=i,n.fromToBase=function(e,n,s,a,o){for(var u,c,l,f=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,p=0;p<h;p+=1){var _=d[p];_.d&&(u=a?r(e).diff(s,_.d,!0):s.diff(e,_.d,!0));var m=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,m<=_.r||!_.r){m<=1&&p>0&&(_=d[p-1]);var y=f[_.l];o&&(m=o(""+m)),c="string"==typeof y?y.replace("%d",m):y(m,n,_.l,l);break}}if(n)return c;var v=l?f.future:f.past;return"function"==typeof v?v(c):v.replace("%s",c)},n.to=function(t,e){return s(t,e,this,!0)},n.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(a(this),t)},n.fromNow=function(t){return this.from(a(this),t)}}}))},5087:function(t,e,r){!function(e,n){t.exports=n(r("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return r.default.locale(n,null,!0),n}))},"52ab":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section-replies"},[t.isLoading?r("Spinner"):t._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&0===t.replies.length,expression:"!isLoading && replies.length === 0"}],staticClass:"section-replies__tip"},[t._v(" 目前沒有回覆 ")]),t.isLoading?t._e():r("div",t._l(t.replies,(function(t){return r("UserTweetReply",{key:t.id,attrs:{"init-reply":t}})})),1)],1)},i=[],s=r("1da1"),a=(r("96cf"),r("4cce")),o=r("2708"),u=r("2375"),c=r("53f0"),l={name:"UserAllReplies",mixins:[o["a"]],components:{Spinner:u["a"],UserTweetReply:c["a"]},data:function(){return{isLoading:!0,replies:[]}},created:function(){var t=this.$route.params.user_id;this.fetchUserReplies(t)},beforeRouteUpdate:function(t,e,r){var n=t.params.user_id;this.fetchUserReplies(n),r()},methods:{fetchUserReplies:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,a["a"].getUserReplies({userId:t});case 4:n=r.sent,i=n.data,e.replies=i,e.isLoading=!1,r.next=16;break;case 10:r.prev=10,r.t0=r["catch"](0),e.isLoading=!1,s="",r.t0.response?(console.log(r.t0.response.data),s=r.t0.response.data.message):(console.log(r.t0),s=r.t0.message),e.ToastError({title:"獲取回覆列表失敗！",description:s});case 16:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},f=l,d=(r("67a4"),r("2877")),h=Object(d["a"])(f,n,i,!1,null,"1a6d2000",null);e["default"]=h.exports},"53f0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reply"},[r("div",{staticClass:"reply__detail"},[r("button",{staticClass:"reply__detail__avatar",style:{backgroundImage:"url("+t.reply.User.avatar+")"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickUser(t.reply.User.id)}}}),r("div",{staticClass:"reply__detail__right"},[r("div",{staticClass:"reply__detail__user"},[r("span",{staticClass:"reply__detail__name",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickUser(t.reply.User.id)}}},[t._v(t._s(t.reply.User.name))]),r("span",{staticClass:"reply__detail__account",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickUser(t.reply.User.id)}}},[t._v(t._s(t._f("altFilter")(t.reply.User.account)))]),r("span",{staticClass:"reply__detail__date"},[t._v("・"+t._s(t._f("fromNowFilter")(t.reply.createdAt)))])]),r("div",{staticClass:"reply__detail__reply",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickUser(t.replyToUserId)}}},[r("span",{staticClass:"reply__detail__reply--text"},[t._v("回覆")]),t._v(" "+t._s(t._f("altFilter")(t.replyToAccount))+" ")]),r("div",{staticClass:"reply__detail__content"},[t._v(" "+t._s(t.reply.comment)+" ")])])])])},i=[],s=(r("a9e3"),r("2708")),a={name:"UserTweetReply",props:{initReply:{type:Object,required:!0},replyTo:{type:String,default:""},replyToId:{type:Number,default:-1}},data:function(){return{reply:this.initReply,isProcessing:!1}},computed:{replyToAccount:function(){return this.reply.Tweet?this.reply.Tweet.User.account:this.replyTo},replyToUserId:function(){return this.reply.Tweet?this.reply.Tweet.User.id:this.replyToId}},mixins:[s["c"],s["b"]],methods:{handleClickUser:function(t){this.$router.push({name:"UserInfo",params:{user_id:t}})}}},o=a,u=(r("6ddb"),r("2877")),c=Object(u["a"])(o,n,i,!1,null,"35c4065a",null);e["a"]=c.exports},"5a0c":function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,a=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:d,h:a,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=m;var M=function(t){return t instanceof Y},w=function(t,e,r){var n;if(!t)return $;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var i=t.name;g[i]=t,n=i}return!r&&n&&($=n),n||!r&&$},D=function(t,e){if(M(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new Y(r)},b=v;b.l=w,b.i=M,b.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var r=D(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!b.u(e)||e,l=b.p(t),h=function(t,e){var i=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},p=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},_=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case u:var $=this.$locale().weekStart||0,g=(_<$?_+7:_)-$;return h(n?y-g:y+(6-g),m);case o:case d:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case s:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,u=b.p(t),l="set"+(this.$u?"UTC":""),h=(r={},r[o]=l+"Date",r[d]=l+"Date",r[c]=l+"Month",r[f]=l+"FullYear",r[a]=l+"Hours",r[s]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===f){var _=this.clone().set(d,1);_.$d[h](p),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(n,l){var d,h=this;n=Number(n);var p=b.p(l),_=function(t){var e=D(h);return b.w(e.date(e.date()+Math.round(t*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===o)return _(1);if(p===u)return _(7);var m=(d={},d[s]=e,d[a]=r,d[i]=t,d)[p]||1,y=this.$d.getTime()+n*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return b.s(s%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return n.replace(_,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,d,h){var p,_=b.p(d),m=D(n),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=b.m(this,m);return $=(p={},p[f]=$/12,p[c]=$,p[l]=$/3,p[u]=(v-y)/6048e5,p[o]=(v-y)/864e5,p[a]=v/r,p[s]=v/e,p[i]=v/t,p)[_]||v,h?$:b.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return g[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),S=Y.prototype;return D.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",f],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,Y,D),t.$i=!0),D},D.locale=w,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=g[$],D.Ls=g,D.p={},D}))},"67a4":function(t,e,r){"use strict";r("f1b4")},"6ddb":function(t,e,r){"use strict";r("2988")},"9be1":function(t,e,r){},b680:function(t,e,r){"use strict";var n=r("23e7"),i=r("a691"),s=r("408a"),a=r("1148"),o=r("d039"),u=1..toFixed,c=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=function(t,e,r){var n=-1,i=r;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=c(i/1e7)},h=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=c(n/e),n=n%e*1e7},p=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+a.call("0",7-n.length)+n}return r},_=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}));n({target:"Number",proto:!0,forced:_},{toFixed:function(t){var e,r,n,o,u=s(this),c=i(t),_=[0,0,0,0,0,0],m="",y="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(m="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,r=e<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,e=52-e,e>0){d(_,0,r),n=c;while(n>=7)d(_,1e7,0),n-=7;d(_,l(10,n,1),0),n=e-1;while(n>=23)h(_,1<<23),n-=23;h(_,1<<n),d(_,1,1),h(_,2),y=p(_)}else d(_,0,r),d(_,1<<-e,0),y=p(_)+a.call("0",c);return c>0?(o=y.length,y=m+(o<=c?"0."+a.call("0",c-o)+y:y.slice(0,o-c)+"."+y.slice(o-c))):y=m+y,y}})},e85f:function(t,e,r){"use strict";r("9be1")},f1b4:function(t,e,r){}}]);
//# sourceMappingURL=chunk-a8f061c6.a0eb0bed.js.map