(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70af6f59"],{1148:function(t,e,s){"use strict";var n=s("a691"),o=s("577e"),i=s("1d80");t.exports=function(t){var e=o(i(this)),s="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(s+=e);return s}},"14e9":function(t,e,s){"use strict";s("6ac6")},1961:function(t,e,s){},"211f":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{staticClass:"modal",attrs:{name:"modal"}},[n("div",{staticClass:"modal__mask",on:{click:t.handleClose}},[n("div",{staticClass:"modal__container",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal__header"},[n("button",{staticClass:"modal__header__close",on:{click:t.handleClose}},[n("img",{staticClass:"modal__header__close-icon",attrs:{src:s("4b58"),alt:"close"}})])]),n("div",{staticClass:"modal__body"},[n("section",{staticClass:"section-post"},[n("div",{staticClass:"section-post__avatar",style:{backgroundImage:"url("+t.currentUser.avatar+")"}}),n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.description,expression:"description",modifiers:{trim:!0}}],staticClass:"section-post__description",attrs:{id:"section-post__description",name:"description",rows:"6",placeholder:"有什麼新鮮事？",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"section-post__tip"},[t._v(t._s(t.postTip))]),n("button",{staticClass:"section-post__btn-tweet",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleNewPost.apply(null,arguments)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProcessing,expression:"!isProcessing"}]},[t._v("推文")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isProcessing,expression:"isProcessing"}],staticClass:"section-post__btn-tweet__spinner"})])])])])])])},o=[],i=s("1da1"),r=s("5530"),a=(s("96cf"),s("a4d3"),s("e01a"),s("4cce")),c=s("2708"),l=s("2f62"),d={name:"UserNewPostModal",mixins:[c["a"]],data:function(){return{isProcessing:!1,description:"",descriptionMaxLength:140,postTip:""}},computed:Object(r["a"])({},Object(l["b"])(["currentUser"])),methods:{handleClose:function(){this.description="",this.$emit("close")},validation:function(){return this.description&&0!==this.description.length||(this.postTip="內容不可空白"),!(this.postTip.length>0)||(this.ToastError({title:"請填寫正確推文內容"}),!1)},handleNewPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.validation()){e.next=3;break}return e.abrupt("return");case 3:return t.isProcessing=!0,e.next=6,a["a"].tweets.newPost({description:t.description});case 6:if(s=e.sent,n=s.data,"success"===n.status){e.next=10;break}throw new Error(n.message);case 10:t.description="",t.isProcessing=!1,t.handleClose(),t.$emit("post-success"),t.ToastSuccess({title:"推文成功！",description:n.message}),e.next=24;break;case 17:e.prev=17,e.t0=e["catch"](0),t.description="",t.isProcessing=!1,o="",e.t0.response?(console.log(e.t0.response.data),o=e.t0.response.data.message):(console.log(e.t0),o=e.t0.message),t.ToastError({title:"推文失敗！",description:o});case 24:case"end":return e.stop()}}),e,null,[[0,17]])})))()}},watch:{description:function(){this.description.length>this.descriptionMaxLength?this.postTip="字數不可超過 ".concat(this.descriptionMaxLength," 字"):this.postTip=""}}},u=d,f=(s("14e9"),s("2877")),p=Object(f["a"])(u,n,o,!1,null,"60b1af28",null);e["a"]=p.exports},2708:function(t,e,s){"use strict";s.d(e,"c",(function(){return d})),s.d(e,"g",(function(){return u})),s.d(e,"f",(function(){return f})),s.d(e,"b",(function(){return p})),s.d(e,"d",(function(){return h})),s.d(e,"e",(function(){return m})),s.d(e,"a",(function(){return _}));var n=s("5530"),o=(s("a9e3"),s("b680"),s("a4d3"),s("e01a"),s("2f62")),i=s("5a0c"),r=s.n(i),a=s("4208"),c=s.n(a),l=(s("5087"),s("d9cb"));r.a.extend(c.a).locale("zh-tw");var d={filters:{fromNowFilter:function(t){if(!t)return"-";var e=r()(),s=e.diff(t,"hour");return s>24?r()(t).format("M月DD日"):r()(t).fromNow(!0)}}},u={filters:{timeFormatFilter:function(t){if(!t)return"-";var e=r()(t).hour()>12?"下午":"上午";return e+r()(t).format(" hh:mm・YYYY年M月DD日")}}},f={filters:{thousandFilter:function(t){return t?Number(t)>1e3&&(t=(t/1e3).toFixed(1),t=String(t)+"K"):t=0,t}}},p={filters:{altFilter:function(t){return t?"@"+t:"@"}}},h={computed:Object(n["a"])({},Object(o["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},m={computed:Object(n["a"])({},Object(o["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(t){this.$store.dispatch("handleSetReplyDetail",t),this.$store.dispatch("isReplyModalOpen",!0)}}},_={methods:{ToastSuccess:function(t){var e=t.title,s=void 0===e?"":e,n=t.description,o=void 0===n?"":n;this.$toast({component:l["a"],props:{icon:"success",title:s,description:o}})},ToastError:function(t){var e=t.title,s=void 0===e?"":e,n=t.description,o=void 0===n?"":n;this.$toast({component:l["a"],props:{icon:"error",title:s,description:o}})}}}},"408a":function(t,e){var s=1..valueOf;t.exports=function(t){return s.call(t)}},4208:function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";return function(t,e,s){t=t||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,s,o){return n.fromToBase(t,e,s,o)}s.en.relativeTime=o,n.fromToBase=function(e,n,i,r,a){for(var c,l,d,u=i.$locale().relativeTime||o,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,h=0;h<p;h+=1){var m=f[h];m.d&&(c=r?s(e).diff(i,m.d,!0):i.diff(e,m.d,!0));var _=(t.rounding||Math.round)(Math.abs(c));if(d=c>0,_<=m.r||!m.r){_<=1&&h>0&&(m=f[h-1]);var v=u[m.l];a&&(_=a(""+_)),l="string"==typeof v?v.replace("%d",_):v(_,n,m.l,d);break}}if(n)return l;var w=d?u.future:u.past;return"function"==typeof w?w(l):w.replace("%s",l)},n.to=function(t,e){return i(t,e,this,!0)},n.from=function(t,e){return i(t,e,this)};var r=function(t){return t.$u?s.utc():s()};n.toNow=function(t){return this.to(r(this),t)},n.fromNow=function(t){return this.from(r(this),t)}}}))},"4b58":function(t,e,s){t.exports=s.p+"img/close_theme.b1a8a695.svg"},5087:function(t,e,s){!function(e,n){t.exports=n(s("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=e(t),n={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return s.default.locale(n,null,!0),n}))},"6ac6":function(t,e,s){},a091:function(t,e,s){"use strict";s("1961")},b680:function(t,e,s){"use strict";var n=s("23e7"),o=s("a691"),i=s("408a"),r=s("1148"),a=s("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,s){return 0===e?s:e%2===1?d(t,e-1,s*t):d(t*t,e/2,s)},u=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},f=function(t,e,s){var n=-1,o=s;while(++n<6)o+=e*t[n],t[n]=o%1e7,o=l(o/1e7)},p=function(t,e){var s=6,n=0;while(--s>=0)n+=t[s],t[s]=l(n/e),n=n%e*1e7},h=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var n=String(t[e]);s=""===s?n:s+r.call("0",7-n.length)+n}return s},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));n({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,s,n,a,c=i(this),l=o(t),m=[0,0,0,0,0,0],_="",v="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(_="-",c=-c),c>1e-21)if(e=u(c*d(2,69,1))-69,s=e<0?c*d(2,-e,1):c/d(2,e,1),s*=4503599627370496,e=52-e,e>0){f(m,0,s),n=l;while(n>=7)f(m,1e7,0),n-=7;f(m,d(10,n,1),0),n=e-1;while(n>=23)p(m,1<<23),n-=23;p(m,1<<n),f(m,1,1),p(m,2),v=h(m)}else f(m,0,s),f(m,1<<-e,0),v=h(m)+r.call("0",l);return l>0?(a=v.length,v=_+(a<=l?"0."+r.call("0",l-a)+v:v.slice(0,a-l)+"."+v.slice(a-l))):v=_+v,v}})},ca5d:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("NavBar",{staticClass:"sm-d-none",on:{"new-post":t.handleActionNewPost}}),s("TabBar",{staticClass:"lg-d-none",on:{"new-post":t.handleActionNewPost}}),s("main",[s("router-view")],1),s("UserNewPostModal",{directives:[{name:"show",rawName:"v-show",value:t.isNewPostModalOpen,expression:"isNewPostModalOpen"}],on:{close:t.handleNewPostModalClose,"post-success":t.handleNewPostSuccess}})],1)},o=[],i=s("5530"),r=s("2f62"),a=s("d000"),c=s("0311"),l=s("211f"),d=s("2708"),u={name:"Chat",components:{NavBar:a["a"],TabBar:c["a"],UserNewPostModal:l["a"]},computed:Object(i["a"])({},Object(r["b"])(["isNewPostModalOpen"])),mixins:[d["d"]],beforeRouteUpdate:function(t,e,s){this.isNewPostModalOpen&&this.handleNewPostModalClose(),s()},beforeDestroy:function(){this.isNewPostModalOpen&&this.handleNewPostModalClose()},methods:{handleNewPostModalClose:function(){this.$store.dispatch("isNewPostModalOpen",!1)},handleNewPostSuccess:function(){this.$store.dispatch("isNewPostRefresh",!0)}}},f=u,p=(s("a091"),s("2877")),h=Object(p["a"])(f,n,o,!1,null,"6ad608b4",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-70af6f59.4a807da4.js.map