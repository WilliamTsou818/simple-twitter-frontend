(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0342d609"],{1148:function(e,t,r){"use strict";var n=r("a691"),i=r("577e"),s=r("1d80");e.exports=function(e){var t=i(s(this)),r="",a=n(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t);return r}},2375:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"})},i=[],s={},a=s,o=(r("e85f"),r("2877")),l=Object(o["a"])(a,n,i,!1,null,"6422aaba",null);t["a"]=l.exports},2708:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return _})),r.d(t,"e",(function(){return h})),r.d(t,"a",(function(){return m}));var n=r("5530"),i=(r("a9e3"),r("b680"),r("a4d3"),r("e01a"),r("2f62")),s=r("5a0c"),a=r.n(s),o=r("4208"),l=r.n(o),c=(r("5087"),r("d9cb"));a.a.extend(l.a).locale("zh-tw");var u={filters:{fromNowFilter:function(e){if(!e)return"-";var t=a()(),r=t.diff(e,"hour");return r>24?a()(e).format("M月DD日"):a()(e).fromNow(!0)}}},d={filters:{timeFormatFilter:function(e){if(!e)return"-";var t=a()(e).hour()>12?"下午":"上午";return t+a()(e).format(" hh:mm・YYYY年M月DD日")}}},f={filters:{thousandFilter:function(e){return e?Number(e)>1e3&&(e=(e/1e3).toFixed(1),e=String(e)+"K"):e=0,e}}},p={filters:{altFilter:function(e){return e?"@"+e:"@"}}},_={computed:Object(n["a"])({},Object(i["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},h={computed:Object(n["a"])({},Object(i["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(e){this.$store.dispatch("handleSetReplyDetail",e),this.$store.dispatch("isReplyModalOpen",!0)}}},m={methods:{ToastSuccess:function(e){var t=e.title,r=void 0===t?"":t,n=e.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"success",title:r,description:i}})},ToastError:function(e){var t=e.title,r=void 0===t?"":t,n=e.description,i=void 0===n?"":n;this.$toast({component:c["a"],props:{icon:"error",title:r,description:i}})}}}},2988:function(e,t,r){},"408a":function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}},4208:function(e,t,r){!function(t,r){e.exports=r()}(0,(function(){"use strict";return function(e,t,r){e=e||{};var n=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(e,t,r,i){return n.fromToBase(e,t,r,i)}r.en.relativeTime=i,n.fromToBase=function(t,n,s,a,o){for(var l,c,u,d=s.$locale().relativeTime||i,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,_=0;_<p;_+=1){var h=f[_];h.d&&(l=a?r(t).diff(s,h.d,!0):s.diff(t,h.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=h.r||!h.r){m<=1&&_>0&&(h=f[_-1]);var y=d[h.l];o&&(m=o(""+m)),c="string"==typeof y?y.replace("%d",m):y(m,n,h.l,u);break}}if(n)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},n.to=function(e,t){return s(e,t,this,!0)},n.from=function(e,t){return s(e,t,this)};var a=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(a(this),e)},n.fromNow=function(e){return this.from(a(this),e)}}}))},5087:function(e,t,r){!function(t,n){e.exports=n(r("5a0c"))}(0,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),n={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return r.default.locale(n,null,!0),n}))},"52ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section-replies"},[e.isLoading?r("Spinner"):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&0===e.replies.length,expression:"!isLoading && replies.length === 0"}],staticClass:"section-replies__tip"},[e._v(" 目前沒有回覆 ")]),e.isLoading?e._e():r("div",e._l(e.replies,(function(e){return r("UserTweetReply",{key:e.id,attrs:{"init-reply":e}})})),1)],1)},i=[],s=r("1da1"),a=(r("96cf"),r("4cce")),o=r("2708"),l=r("2375"),c=r("53f0"),u={name:"UserAllReplies",mixins:[o["a"]],components:{Spinner:l["a"],UserTweetReply:c["a"]},data:function(){return{isLoading:!0,replies:[]}},created:function(){var e=this.$route.params.user_id;this.fetchUserReplies(e)},beforeRouteUpdate:function(e,t,r){var n=e.params.user_id;this.fetchUserReplies(n),r()},methods:{fetchUserReplies:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,a["a"].getUserReplies({userId:e});case 4:n=r.sent,i=n.data,t.replies=i,t.isLoading=!1,r.next=16;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isLoading=!1,s="",r.t0.response?(console.log(r.t0.response.data),s=r.t0.response.data.message):(console.log(r.t0),s=r.t0.message),t.ToastError({title:"獲取回覆列表失敗！",description:s});case 16:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},d=u,f=(r("67a4"),r("2877")),p=Object(f["a"])(d,n,i,!1,null,"1a6d2000",null);t["default"]=p.exports},"53f0":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reply"},[r("div",{staticClass:"reply__detail"},[r("button",{staticClass:"reply__detail__avatar",style:{backgroundImage:"url("+e.reply.User.avatar+")"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickUser(e.reply.User.id)}}}),r("div",{staticClass:"reply__detail__right"},[r("div",{staticClass:"reply__detail__user"},[r("span",{staticClass:"reply__detail__name",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickUser(e.reply.User.id)}}},[e._v(e._s(e.reply.User.name))]),r("span",{staticClass:"reply__detail__account",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickUser(e.reply.User.id)}}},[e._v(e._s(e._f("altFilter")(e.reply.User.account)))]),r("span",{staticClass:"reply__detail__date"},[e._v("・"+e._s(e._f("fromNowFilter")(e.reply.createdAt)))])]),r("div",{staticClass:"reply__detail__reply",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickUser(e.replyToUserId)}}},[r("span",{staticClass:"reply__detail__reply--text"},[e._v("回覆")]),e._v(" "+e._s(e._f("altFilter")(e.replyToAccount))+" ")]),r("div",{staticClass:"reply__detail__content"},[e._v(" "+e._s(e.reply.comment)+" ")])])])])},i=[],s=(r("a9e3"),r("2708")),a={name:"UserTweetReply",props:{initReply:{type:Object,required:!0},replyTo:{type:String,default:""},replyToId:{type:Number,default:-1}},data:function(){return{reply:this.initReply,isProcessing:!1}},computed:{replyToAccount:function(){return this.reply.Tweet?this.reply.Tweet.User.account:this.replyTo},replyToUserId:function(){return this.reply.Tweet?this.reply.Tweet.User.id:this.replyToId}},mixins:[s["c"],s["b"]],methods:{handleClickUser:function(e){this.$router.push({name:"UserInfo",params:{user_id:e}})}}},o=a,l=(r("6ddb"),r("2877")),c=Object(l["a"])(o,n,i,!1,null,"35c4065a",null);t["a"]=c.exports},"67a4":function(e,t,r){"use strict";r("f1b4")},"6ddb":function(e,t,r){"use strict";r("2988")},"9be1":function(e,t,r){},b680:function(e,t,r){"use strict";var n=r("23e7"),i=r("a691"),s=r("408a"),a=r("1148"),o=r("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},d=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=function(e,t,r){var n=-1,i=r;while(++n<6)i+=t*e[n],e[n]=i%1e7,i=c(i/1e7)},p=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=c(n/t),n=n%t*1e7},_=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=String(e[t]);r=""===r?n:r+a.call("0",7-n.length)+n}return r},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,n,o,l=s(this),c=i(e),h=[0,0,0,0,0,0],m="",y="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=d(l*u(2,69,1))-69,r=t<0?l*u(2,-t,1):l/u(2,t,1),r*=4503599627370496,t=52-t,t>0){f(h,0,r),n=c;while(n>=7)f(h,1e7,0),n-=7;f(h,u(10,n,1),0),n=t-1;while(n>=23)p(h,1<<23),n-=23;p(h,1<<n),f(h,1,1),p(h,2),y=_(h)}else f(h,0,r),f(h,1<<-t,0),y=_(h)+a.call("0",c);return c>0?(o=y.length,y=m+(o<=c?"0."+a.call("0",c-o)+y:y.slice(0,o-c)+"."+y.slice(o-c))):y=m+y,y}})},e85f:function(e,t,r){"use strict";r("9be1")},f1b4:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0342d609.b8e6e825.js.map