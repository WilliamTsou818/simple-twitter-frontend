(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-853c911c"],{"05ba":function(e,t,s){"use strict";s("a59c")},"242f":function(e,t,s){},"4c92":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container container--user"},[s("Head",{attrs:{title:e.title}}),s("section",{staticClass:"section-post"},[s("div",{staticClass:"section-post__avatar",style:{backgroundImage:"url("+e.currentUser.avatar+")"}}),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.description,expression:"description",modifiers:{trim:!0}}],staticClass:"section-post__description",attrs:{id:"section-post__description",name:"description",rows:"2",minlength:"1",maxlength:e.descriptionMaxLength,placeholder:"有什麼新鮮事？",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),s("button",{staticClass:"section-post__btn-tweet",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleNewPost.apply(null,arguments)}}},[e._v(" 推文 ")])]),s("div",{staticClass:"divider"}),e.isLoading?s("Spinner"):e._e(),s("section",{ref:"sectionTweets",staticClass:"section-tweets"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&0===e.tweets.length,expression:"!isLoading && tweets.length === 0"}],staticClass:"section-tweets__tip"},[e._v(" 目前沒有推文 ")]),e._l(e.tweets,(function(t){return s("UserTweet",{key:t.TweetId,attrs:{"init-tweet":t},on:{"action-reply":e.handleActionReply}})}))],2)],1)},i=[],a=s("1da1"),r=s("5530"),c=(s("a4d3"),s("e01a"),s("96cf"),s("4cce")),o=s("2fa3"),d=s("2f62"),l=s("2708"),u=s("2375"),p=s("7a0f"),h=s("2e00"),f={components:{Head:p["a"],Spinner:u["a"],UserTweet:h["a"]},data:function(){return{title:"首頁",isLoading:!0,isProcessing:!1,tweets:[],description:"",descriptionMaxLength:140}},computed:Object(r["a"])({},Object(d["b"])(["currentUser"])),mixins:[l["c"],l["d"]],created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var e=arguments,t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var n,i,a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=!(e.length>0&&void 0!==e[0])||e[0],s.prev=1,t.isLoading=!0,s.next=5,c["a"].tweets.get();case 5:i=s.sent,a=i.data,t.tweets=a,n&&t.$refs.sectionTweets&&(t.$refs.sectionTweets.scrollTop=0),t.isLoading=!1,s.next=17;break;case 12:s.prev=12,s.t0=s["catch"](1),r="",s.t0.response?(console.log(s.t0.response.data),r=s.t0.response.data.message):(console.log(s.t0),r=s.t0.message),o["a"].fire({icon:"error",title:"獲取推文失敗！\n ".concat(r)});case 17:case"end":return s.stop()}}),s,null,[[1,12]])})))()},validation:function(){var e="";return this.description&&0!==this.description.length?this.description.length>this.descriptionMaxLength&&(e="內容上限 ".concat(this.descriptionMaxLength," 字")):e="內容不可空白",0===e.length||(o["a"].fire({icon:"warning",title:e}),!1)},handleNewPost:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.validation()){t.next=3;break}return t.abrupt("return");case 3:return e.isProcessing=!0,t.next=6,c["a"].tweets.newPost({description:e.description});case 6:if(s=t.sent,n=s.data,"success"===n.status){t.next=10;break}throw new Error(n.message);case 10:e.description="",e.isProcessing=!1,o["a"].fire({icon:"success",title:"推文成功！\n ".concat(n.message)}),e.fetchTweets(),t.next=23;break;case 16:t.prev=16,t.t0=t["catch"](0),e.description="",e.isProcessing=!1,i="",t.t0.response?(console.log(t.t0.response.data),i=t.t0.response.data.message):(console.log(t.t0),i=t.t0.message),o["a"].fire({icon:"error",title:"推文失敗！\n ".concat(i)});case 23:case"end":return t.stop()}}),t,null,[[0,16]])})))()}},watch:{isNewPostRefresh:function(e){e&&(this.$store.dispatch("isNewPostRefresh",!1),this.fetchTweets())},isReplyRefresh:function(e){e&&(this.$store.dispatch("isReplyRefresh",!1),this.fetchTweets(!1))}}},w=f,g=(s("05ba"),s("2877")),v=Object(g["a"])(w,n,i,!1,null,"06e441ba",null);t["default"]=v.exports},"7a0f":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.backArrow,expression:"backArrow"}],staticClass:"head__back",on:{click:e.handleBack}},[n("img",{staticClass:"head__back__icon",attrs:{src:s("ddf8"),alt:"back"}})]),n("div",{staticClass:"head__info"},[n("div",{staticClass:"head__info__title"},[e._v(e._s(e.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.count,expression:"count"}],staticClass:"head__info__count"},[e._v(e._s(e.count)+" 推文")])])])},i=[],a=(s("a9e3"),{name:"Head",props:{backArrow:{type:Boolean,default:!1},title:{type:String,default:"loading",required:!0},count:{type:[String,Number],default:""}},methods:{handleBack:function(){this.$router.back()}}}),r=a,c=(s("ae0f"),s("2877")),o=Object(c["a"])(r,n,i,!1,null,"11f0e421",null);t["a"]=o.exports},a59c:function(e,t,s){},ae0f:function(e,t,s){"use strict";s("242f")},ddf8:function(e,t,s){e.exports=s.p+"img/back.eb89e502.svg"}}]);
//# sourceMappingURL=chunk-853c911c.e6b3c1a6.js.map