(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-04b951e0":"2d20b596","chunk-04ed1b38":"0c477e5f","chunk-53e817ba":"fa16df52","chunk-6390e972":"19ed01c7","chunk-1743ef11":"b093b362","chunk-330f7be3":"448ad6a6","chunk-42f9e834":"dc869852","chunk-2deafb1e":"779b4e22","chunk-4b17da42":"43df9231","chunk-f8ad5faa":"c4a19864","chunk-65e7c753":"7089dab1","chunk-6aa24088":"3fc8687b","chunk-7ea930ce":"ed5e0598","chunk-8a216976":"1f073a86","chunk-36d7acff":"7c485a5a","chunk-5e16d7a0":"772bd91d","chunk-58030820":"1d44111b","chunk-ffb65e12":"9c30f174","chunk-7c42ecc8":"4c900bf3","chunk-a3eb2822":"ea5b6e60"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-04b951e0":1,"chunk-04ed1b38":1,"chunk-53e817ba":1,"chunk-6390e972":1,"chunk-1743ef11":1,"chunk-330f7be3":1,"chunk-42f9e834":1,"chunk-2deafb1e":1,"chunk-4b17da42":1,"chunk-f8ad5faa":1,"chunk-65e7c753":1,"chunk-7ea930ce":1,"chunk-8a216976":1,"chunk-36d7acff":1,"chunk-5e16d7a0":1,"chunk-58030820":1,"chunk-ffb65e12":1,"chunk-7c42ecc8":1,"chunk-a3eb2822":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04b951e0":"e507b7b5","chunk-04ed1b38":"788a6d99","chunk-53e817ba":"c2b9972f","chunk-6390e972":"712eb3a1","chunk-1743ef11":"1b68e2dc","chunk-330f7be3":"40aad6ab","chunk-42f9e834":"170890c8","chunk-2deafb1e":"8b45ebd7","chunk-4b17da42":"31ce5193","chunk-f8ad5faa":"7973f011","chunk-65e7c753":"f16e8b9c","chunk-6aa24088":"31d6cfe0","chunk-7ea930ce":"a2fb0944","chunk-8a216976":"ec744d14","chunk-36d7acff":"edbbd238","chunk-5e16d7a0":"ccf29ce8","chunk-58030820":"a0870624","chunk-ffb65e12":"0b3c9fb9","chunk-7c42ecc8":"500c695c","chunk-a3eb2822":"be01419d"}[e]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/simple-twitter-frontend/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20d5":function(e,t,n){},"2fa3":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7"),n("caad"),n("2532");var r=n("bc3a"),o=n.n(r),a="https://wahp-simeple-twitter-api.herokuapp.com/api",s=o.a.create({baseURL:a,timeout:3e4});s.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return e.message.includes("timeout")?(console.log("網路超時",e),alert("網路超時，請稍後在試"),Promise.reject(e)):Promise.reject(e)}));var c=s},"2fb4":function(e,t,n){},"3c44":function(e,t,n){e.exports=n.p+"img/toast_success.000d4c5c.svg"},"4cce":function(e,t,n){"use strict";n("b0c0"),n("a4d3"),n("e01a");var r=n("2fa3");t["a"]={getCurrentUser:function(){return r["a"].get("/users/current_user")},signUp:function(e){var t=e.account,n=e.name,o=e.email,a=e.password,s=e.checkPassword;return r["a"].post("/users",{account:t,name:n,email:o,password:a,checkPassword:s})},getUser:function(e){var t=e.userId;return r["a"].get("/users/".concat(t))},setting:function(e){var t=e.userId,n=e.requestData;return r["a"].put("/users/".concat(t),n)},getPopularUsers:function(){return r["a"].get("/users/top")},getUserFollowing:function(e){var t=e.userId;return r["a"].get("/users/".concat(t,"/followings"))},getUserFollower:function(e){var t=e.userId;return r["a"].get("/users/".concat(t,"/followers"))},getUserTweets:function(e){var t=e.userId;return r["a"].get("/users/".concat(t,"/tweets"))},getUserReplies:function(e){var t=e.userId;return r["a"].get("/users/".concat(t,"/replied_tweets"))},getUserLikes:function(e){var t=e.userId;return r["a"].get("/users/".concat(t,"/likes"))},editUserProfile:function(e){var t=e.userId,n=e.formData;return r["a"].put("/users/".concat(t),n)},addFollowShip:function(e){var t=e.id;return r["a"].post("/followships",{id:t})},removeFollowShip:function(e){var t=e.userId;return r["a"].delete("/followships/".concat(t))},tweets:{get:function(){return r["a"].get("/tweets")},like:function(e){var t=e.tweetId;return r["a"].post("/tweets/".concat(t,"/like"))},unlike:function(e){var t=e.tweetId;return r["a"].post("/tweets/".concat(t,"/unlike"))},newPost:function(e){var t=e.description;return r["a"].post("/tweets",{description:t})},newReply:function(e){var t=e.tweetId,n=e.comment;return r["a"].post("/tweets/".concat(t,"/replies"),{comment:n})},getDetail:function(e){var t=e.tweetId;return r["a"].get("/tweets/".concat(t))}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),c={},i=Object(s["a"])(c,o,a,!1,null,null,null),u=i.exports,l=n("1da1"),d=(n("96cf"),n("d3b7"),n("b0c0"),n("caad"),n("2532"),n("3ca3"),n("ddb0"),n("8c4f")),f=n("2f62"),p={token:"",currentUser:{id:-1,account:"",name:"",email:"",avatar:"",cover:"",introduction:"",role:"",followings:[],followers:[]},viewUser:{data:{id:-1,TweetsCount:0,FollowersCount:0,FollowingsCount:0,isFollowed:!1},isLoading:!1,isViewCurrentUser:!1,followings:[],followers:[]},followingUsers:[],popular:[],isAuthenticated:!1,isNewPostModalOpen:!1,isNewPostRefresh:!1,replyDetail:{},isReplyModalOpen:!1,isReplyRefresh:!1},h=n("4cce"),m={fetchCurrentUser:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,s,c,i,u,l,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,h["a"].getCurrentUser();case 4:return r=t.sent,o=r.data,a=o.id,s=o.account,c=o.name,i=o.email,u=o.avatar,l=o.cover,d=o.introduction,f=o.role,n("setCurrentUser",{id:a,account:s,name:c,email:i,avatar:u,cover:l,introduction:d,role:f}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.log("error",t.t0),console.log("error",t.t0.message),console.log("取得當前使用者失敗"),n("revokeAuthentication"),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[1,11]])})))()},fetchViewUserFollowings:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.state.viewUser.isLoading=!0,n=C.currentRoute.params.user_id,r=n,t.next=6,h["a"].getUserFollowing({userId:r});case 6:o=t.sent,a=o.data,e.commit("setViewUserFollowings",a),e.state.viewUser.isLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},fetchViewUserFollowers:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.state.viewUser.isLoading=!0,n=C.currentRoute.params.user_id,r=n,t.next=6,h["a"].getUserFollower({userId:r});case 6:o=t.sent,a=o.data,e.commit("setViewUserFollowers",a),e.state.viewUser.isLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},handleInitViewUser:function(e,t){e.commit("setInitViewUser",t)},isViewCurrentUser:function(e,t){e.commit("setIsViewCurrentUser",t)},handleSetFollowed:function(e,t){e.commit("setFollowed",t)},handleSetPopular:function(e,t){e.commit("setPopular",t)},handleSetViewUserFollowings:function(e,t){e.commit("setViewUserFollowings",t)},handleSetViewUserFollowers:function(e,t){e.commit("setViewUserFollowers",t)},isNewPostModalOpen:function(e,t){e.commit("setIsNewPostModalOpen",t)},isNewPostRefresh:function(e,t){e.commit("setIsNewPostRefresh",t)},handleSetReplyDetail:function(e,t){e.commit("setReplyDetail",t)},isReplyModalOpen:function(e,t){e.commit("setIsReplyModalOpen",t),t||e.commit("setReplyDetail",{})},isReplyRefresh:function(e,t){e.commit("setIsReplyRefresh",t)}},w=n("5530"),b=(n("a9e3"),n("159b"),{setCurrentUser:function(e,t){e.currentUser=Object(w["a"])(Object(w["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")},setInitViewUser:function(e,t){e.viewUser.data=Object(w["a"])(Object(w["a"])({},e.viewUser.data),t)},setIsViewCurrentUser:function(e,t){e.currentUser.id===Number(t)?e.viewUser.isViewCurrentUser=!0:e.viewUser.isViewCurrentUser=!1},setFollowed:function(e,t){e.viewUser.data.id===t&&(e.viewUser.data.isFollowed=!e.viewUser.data.isFollowed,e.viewUser.data.isFollowed?e.viewUser.data.FollowersCount++:e.viewUser.data.FollowersCount--),e.popular.forEach((function(n){n.id===Number(t)&&(n.isFollowed=!n.isFollowed,e.viewUser.isViewCurrentUser&&(n.isFollowed?e.viewUser.data.FollowingsCount++:e.viewUser.data.FollowingsCount--))})),e.viewUser.followings.forEach((function(e){e.followingId===Number(t)&&(e.isFollowed=!e.isFollowed)})),e.viewUser.followers.forEach((function(e){e.followerId===Number(t)&&(e.isFollowed=!e.isFollowed)}))},setPopular:function(e,t){e.popular=t},setViewUserFollowings:function(e,t){e.viewUser.followings=t},setViewUserFollowers:function(e,t){e.viewUser.followers=t},setIsNewPostModalOpen:function(e,t){e.isNewPostModalOpen=t},setIsNewPostRefresh:function(e,t){e.isNewPostRefresh=t},setReplyDetail:function(e,t){e.replyDetail=t},setIsReplyModalOpen:function(e,t){e.isReplyModalOpen=t},setIsReplyRefresh:function(e,t){e.isReplyRefresh=t}}),g={getCurrentUser:function(e){return e.currentUser},getViewUser:function(e){return e.viewUser},getPopular:function(e){return e.popular}};r["a"].use(f["a"]);var k=new f["a"].Store({state:p,actions:m,mutations:b,getters:g,modules:{}}),v=n("d9cb");r["a"].use(d["a"]);var U=d["a"].prototype.push;d["a"].prototype.push=function(e){var t=this;return new Promise((function(n,r){U.call(t,e,(function(){n(t.currentRoute)}),(function(e){"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")?n(t.currentRoute):r(e)}))}))};var _=function(e,t,n,o){var a=k.state.currentUser;if(a&&a.role!==o)return r["a"].$toast({component:v["a"],props:{icon:"error",title:"權限不足，無法訪問！",description:""}}),void n(t);n()},y=function(e,t,n){_(e,t,n,"user")},P=function(e,t,n){_(e,t,n,"admin")},R=[{path:"/",beforeEnter:function(e,t,n){var r=k.state.currentUser;r&&"admin"===r.role?n("/admin/login"):n("/user/login")}},{path:"/admin/login",name:"AdminLogin",component:function(){return Promise.all([n.e("chunk-6aa24088"),n.e("chunk-ffb65e12")]).then(n.bind(null,"5b4f"))}},{path:"/admin",name:"Admin",redirect:"/admin/tweets",component:function(){return Promise.all([n.e("chunk-04ed1b38"),n.e("chunk-6390e972")]).then(n.bind(null,"3530"))},children:[{path:"tweets",name:"AdminAllTweets",component:function(){return n.e("chunk-a3eb2822").then(n.bind(null,"83b6"))},beforeEnter:P},{path:"users",name:"AdminAllUsers",component:function(){return n.e("chunk-330f7be3").then(n.bind(null,"b138"))},beforeEnter:P}]},{path:"/user/login",name:"UserLogin",component:function(){return Promise.all([n.e("chunk-6aa24088"),n.e("chunk-5e16d7a0")]).then(n.bind(null,"2818"))}},{path:"/user/register",name:"UserRegister",component:function(){return Promise.all([n.e("chunk-6aa24088"),n.e("chunk-8a216976"),n.e("chunk-58030820")]).then(n.bind(null,"381a"))}},{path:"/user/setting",name:"UserSetting",component:function(){return Promise.all([n.e("chunk-6aa24088"),n.e("chunk-04ed1b38"),n.e("chunk-8a216976"),n.e("chunk-36d7acff")]).then(n.bind(null,"0b7d"))},beforeEnter:y},{path:"/user",name:"User",redirect:"/user/home",component:function(){return Promise.all([n.e("chunk-04ed1b38"),n.e("chunk-53e817ba")]).then(n.bind(null,"1511"))},children:[{path:"/user/home",name:"UserHome",component:function(){return Promise.all([n.e("chunk-42f9e834"),n.e("chunk-f8ad5faa")]).then(n.bind(null,"4c92"))},beforeEnter:y},{path:"/user/:user_id",name:"UserInfo",redirect:"/user/:user_id/tweets",component:function(){return Promise.all([n.e("chunk-6aa24088"),n.e("chunk-04ed1b38"),n.e("chunk-7ea930ce")]).then(n.bind(null,"2861"))},beforeEnter:y,children:[{path:"tweets",name:"UserAllTweets",component:function(){return Promise.all([n.e("chunk-42f9e834"),n.e("chunk-4b17da42")]).then(n.bind(null,"898a"))},beforeEnter:y},{path:"replies",name:"UserAllReplies",component:function(){return n.e("chunk-04b951e0").then(n.bind(null,"52ab"))},beforeEnter:y},{path:"like",name:"UserAllLike",component:function(){return Promise.all([n.e("chunk-42f9e834"),n.e("chunk-2deafb1e")]).then(n.bind(null,"3bd1"))},beforeEnter:y}]},{path:"/user/:user_id",name:"UserAllFollow",component:function(){return n.e("chunk-65e7c753").then(n.bind(null,"4edb"))},beforeEnter:y,children:[{path:"followings",name:"UserFollowings",component:function(){return n.e("chunk-7c42ecc8").then(n.bind(null,"d5dd"))},beforeEnter:y},{path:"followers",name:"UserFollowers",component:function(){return n.e("chunk-7c42ecc8").then(n.bind(null,"d5dd"))},beforeEnter:y}]},{path:"/user/tweets/:tweet_id",name:"UserTweetDetail",component:function(){return n.e("chunk-1743ef11").then(n.bind(null,"d9e9"))},beforeEnter:y}]}],F=new d["a"]({routes:R});F.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=localStorage.getItem("token"),a=k.state.token,s=k.state.isAuthenticated,!o||o===a){e.next=7;break}return e.next=6,k.dispatch("fetchCurrentUser");case 6:s=e.sent;case 7:if(c=["UserLogin","UserRegister","AdminLogin"],s||c.includes(t.name)){e.next=16;break}e.t0=t.name,e.next="AdminAllTweets"===e.t0||"AdminAllUsers"===e.t0?12:14;break;case 12:return r("/admin/login"),e.abrupt("break",15);case 14:r("/user/login");case 15:return e.abrupt("return");case 16:if(!s||!c.includes(t.name)){e.next=24;break}e.t1=t.name,e.next="AdminLogin"===e.t1?20:22;break;case 20:return r("/admin"),e.abrupt("break",23);case 22:r("/user");case 23:return e.abrupt("return");case 24:r();case 25:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var C=F,O=n("6c42"),I=(n("da96"),n("2fb4"),{position:"top-right",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!1,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,closeButton:!1,icon:!1,transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!1,toastClassName:"custom-toast",bodyClassName:["custom-class-body"]});r["a"].use(O["a"],I),r["a"].config.productionTip=!1,new r["a"]({router:C,store:k,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},"9e26":function(e,t,n){"use strict";n("20d5")},b993:function(e,t,n){e.exports=n.p+"img/toast_error.398fd1bb.svg"},d9cb:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"toast__wrapper"},[r("div",{staticClass:"toast__wrapper__content"},[r("div",{staticClass:"toast__wrapper__title"},[e._v(e._s(e.title))]),"success"===e.icon?r("div",{staticClass:"toast__wrapper__description--success"},[e._v(" "+e._s(e.description)+" ")]):e._e(),"error"===e.icon?r("div",{staticClass:"toast__wrapper__description--error"},[e._v(" "+e._s(e.description)+" ")]):e._e()]),r("div",{staticClass:"toast__wrapper__icon"},["success"===e.icon?r("img",{attrs:{src:n("3c44"),alt:"success_icon"}}):e._e(),"error"===e.icon?r("img",{attrs:{src:n("b993"),alt:"error_icon"}}):e._e()])])},o=[],a={name:"CustomToast",props:{icon:{type:String,require:!0},title:{type:String,default:""},description:{type:String,default:""}}},s=a,c=(n("9e26"),n("2877")),i=Object(c["a"])(s,r,o,!1,null,"aa6d2e28",null);t["a"]=i.exports}});
//# sourceMappingURL=app.08a3be16.js.map