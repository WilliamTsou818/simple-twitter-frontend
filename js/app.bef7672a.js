(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0242786a":"2a51712e","chunk-3acc50c6":"5f8156b2","chunk-9cdad4c6":"5c2b57c0","chunk-d6fa2eb0":"457f067c","chunk-0d7fbe2a":"42ce74a8","chunk-2cbd09fb":"6f2e54f9","chunk-e1c58e66":"d05c21e5","chunk-41f95257":"863772e4","chunk-7b3c722a":"60b0e37e","chunk-853c911c":"e6b3c1a6","chunk-f10bfbda":"72248f60","chunk-4a394b28":"82949bd6","chunk-4e0686ee":"89f247c0","chunk-57ee7889":"c7c040d4","chunk-6571d83a":"cd8f950b","chunk-6698accc":"27a53af0","chunk-78e61fdb":"1e6d8c7b","chunk-a21879ca":"e6e076da","chunk-e6919598":"2958aeb7"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0242786a":1,"chunk-3acc50c6":1,"chunk-9cdad4c6":1,"chunk-d6fa2eb0":1,"chunk-0d7fbe2a":1,"chunk-2cbd09fb":1,"chunk-e1c58e66":1,"chunk-41f95257":1,"chunk-7b3c722a":1,"chunk-853c911c":1,"chunk-f10bfbda":1,"chunk-4a394b28":1,"chunk-4e0686ee":1,"chunk-57ee7889":1,"chunk-6571d83a":1,"chunk-6698accc":1,"chunk-78e61fdb":1,"chunk-a21879ca":1,"chunk-e6919598":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0242786a":"89f0ae1e","chunk-3acc50c6":"18b05668","chunk-9cdad4c6":"a5380d1c","chunk-d6fa2eb0":"a24306ed","chunk-0d7fbe2a":"c3a83195","chunk-2cbd09fb":"be7cc25d","chunk-e1c58e66":"935d5bfa","chunk-41f95257":"28ca7da2","chunk-7b3c722a":"78438a3d","chunk-853c911c":"931e3aa7","chunk-f10bfbda":"1ba337a7","chunk-4a394b28":"d71723e2","chunk-4e0686ee":"49ccf623","chunk-57ee7889":"fe358372","chunk-6571d83a":"7b96797a","chunk-6698accc":"24c8e142","chunk-78e61fdb":"b06afbae","chunk-a21879ca":"15bd0187","chunk-e6919598":"84d35cef"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),t(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/simple-twitter-frontend/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"277d":function(e,n,t){"use strict";t("8280")},"2fa3":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return l}));t("d3b7");var r=t("bc3a"),o=t.n(r),c=t("3d20"),a=t.n(c),u="https://wahp-simeple-twitter-api.herokuapp.com/api",i=o.a.create({baseURL:u});i.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers["Authorization"]="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)}));var s=i,l=a.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),d="https://private-anon-b4043a34c1-whapsimpletwitter.apiary-mock.com/api",f=o.a.create({baseURL:d});f.interceptors.request.use((function(e){var n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjMxNTMxMjczfQ.Iyzc7dWxp8U9IhCwelXGjIbMfh-4tqr8uJU0K4JIbYM";return n&&(e.headers["Authorization"]="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)}))},"2fb4":function(e,n,t){},"4cce":function(e,n,t){"use strict";t("b0c0"),t("a4d3"),t("e01a");var r=t("2fa3");n["a"]={getCurrentUser:function(){return r["b"].get("/users/current_user")},signUp:function(e){var n=e.account,t=e.name,o=e.email,c=e.password,a=e.checkPassword;return r["b"].post("/users",{account:n,name:t,email:o,password:c,checkPassword:a})},getUser:function(e){var n=e.userId;return r["b"].get("/users/".concat(n))},setting:function(e){var n=e.userId,t=e.requestData;return r["b"].put("/users/".concat(n),t)},getPopularUsers:function(){return r["b"].get("/users/top")},getUserFollowing:function(e){var n=e.userId;return r["b"].get("/users/".concat(n,"/followings"))},getUserFollower:function(e){var n=e.userId;return r["b"].get("/users/".concat(n,"/followers"))},getUserTweets:function(e){var n=e.userId;return r["b"].get("/users/".concat(n,"/tweets"))},getUserReplies:function(e){var n=e.userId;return r["b"].get("/users/".concat(n,"/replied_tweets"))},getUserLikes:function(e){var n=e.userId;return r["b"].get("/users/".concat(n,"/likes"))},editUserProfile:function(e){var n=e.userId,t=e.formData;return r["b"].put("/users/".concat(n),t)},addFollowShip:function(e){var n=e.id;return r["b"].post("/followships",{id:n})},removeFollowShip:function(e){var n=e.userId;return r["b"].delete("/followships/".concat(n))},tweets:{get:function(){return r["b"].get("/tweets")},like:function(e){var n=e.tweetId;return r["b"].post("/tweets/".concat(n,"/like"))},unlike:function(e){var n=e.tweetId;return r["b"].post("/tweets/".concat(n,"/unlike"))},newPost:function(e){var n=e.description;return r["b"].post("/tweets",{description:n})},newReply:function(e){var n=e.tweetId,t=e.comment;return r["b"].post("/tweets/".concat(n,"/replies"),{comment:t})},getDetail:function(e){var n=e.tweetId;return r["b"].get("/tweets/".concat(n))}}}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=(t("5c0b"),t("2877")),u={},i=Object(a["a"])(u,o,c,!1,null,null,null),s=i.exports,l=t("1da1"),d=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),t("caad"),t("b0c0"),t("2532"),t("8c4f")),f=t("5530"),h=(t("7db0"),t("159b"),t("a9e3"),t("2f62")),p=t("4cce");r["a"].use(h["a"]);var m=new h["a"].Store({state:{token:"",currentUser:{id:-1,account:"",name:"",email:"",avatar:"",cover:"",introduction:"",role:""},viewUser:{data:{id:-1,TweetsCount:0,FollowersCount:0,FollowingsCount:0},isLoading:!1,isViewCurrentUser:!1,isFollowed:!1,followings:[],followers:[]},followingUsers:[],popular:[],isAuthenticated:!1,isNewPostModalOpen:!1,isNewPostRefresh:!1,replyDetail:{},isReplyModalOpen:!1,isReplyRefresh:!1},actions:{fetchCurrentUser:function(e){return Object(l["a"])(regeneratorRuntime.mark((function n(){var t,r,o,c,a,u,i,s,l,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.prev=1,n.next=4,p["a"].getCurrentUser();case 4:return r=n.sent,o=r.data,console.log("fechCurrentUser"),c=o.id,a=o.account,u=o.name,i=o.email,s=o.avatar,l=o.cover,d=o.introduction,f=o.role,t("setCurrentUser",{id:c,account:a,name:u,email:i,avatar:s,cover:l,introduction:d,role:f}),n.abrupt("return",!0);case 12:return n.prev=12,n.t0=n["catch"](1),console.log("error",n.t0),console.log("error",n.t0.message),console.log("取得當前使用者失敗"),t("revokeAuthentication"),n.abrupt("return",!1);case 19:case"end":return n.stop()}}),n,null,[[1,12]])})))()},handleInitFollowing:function(e){return Object(l["a"])(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t=e.state.currentUser.id,n.next=4,p["a"].getUserFollowing({userId:t});case 4:r=n.sent,o=r.data,e.commit("setInitFollowing",o),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log("error",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},handleInitViewUser:function(e,n){e.commit("setInitViewUser",n)},isViewCurrentUser:function(e,n){e.commit("setIsViewCurrentUser",n)},handleSetFollowed:function(e,n){e.commit("setFollowed",n)},handleSetPopular:function(e,n){e.commit("setPopular",n)},handleSetViewUserFollowings:function(e,n){e.commit("setViewUserFollowings",n)},handleSetViewUserFollowers:function(e,n){e.commit("setViewUserFollowers",n)},isNewPostModalOpen:function(e,n){e.commit("setIsNewPostModalOpen",n)},isNewPostRefresh:function(e,n){e.commit("setIsNewPostRefresh",n)},handleSetReplyDetail:function(e,n){e.commit("setReplyDetail",n)},isReplyModalOpen:function(e,n){e.commit("setIsReplyModalOpen",n),n||e.commit("setReplyDetail",{})},isReplyRefresh:function(e,n){e.commit("setIsReplyRefresh",n)}},mutations:{setCurrentUser:function(e,n){e.currentUser=Object(f["a"])(Object(f["a"])({},e.currentUser),n),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")},setInitFollowing:function(e,n){e.followingUsers=n},setInitViewUser:function(e,n){e.viewUser.data=n,e.followingUsers.find((function(n){return n.followingId===e.viewUser.data.id}))?e.viewUser.isFollowed=!0:e.viewUser.isFollowed=!1},setIsViewCurrentUser:function(e,n){e.currentUser.id===n-0?e.viewUser.isViewCurrentUser=!0:e.viewUser.isViewCurrentUser=!1},setFollowed:function(e,n){e.viewUser.data.id===n&&(e.viewUser.isFollowed=!e.viewUser.isFollowed,e.viewUser.isFollowed?e.viewUser.data.FollowersCount++:e.viewUser.data.FollowersCount--),e.popular.forEach((function(t){t.id===Number(n)&&(t.isFollowed=!t.isFollowed,e.viewUser.isViewCurrentUser&&(t.isFollowed?e.viewUser.data.FollowingsCount++:e.viewUser.data.FollowingsCount--))})),e.viewUser.followings.forEach((function(e){e.followingId===Number(n)&&(e.isFollowed=!e.isFollowed)})),e.viewUser.followers.forEach((function(e){e.followerId===Number(n)&&(e.isFollowed=!e.isFollowed)}))},setPopular:function(e,n){e.popular=n},setViewUserFollowings:function(e,n){e.viewUser.followings=n},setViewUserFollowers:function(e,n){e.viewUser.followers=n},setIsNewPostModalOpen:function(e,n){e.isNewPostModalOpen=n},setIsNewPostRefresh:function(e,n){e.isNewPostRefresh=n},setReplyDetail:function(e,n){e.replyDetail=n},setIsReplyModalOpen:function(e,n){e.isReplyModalOpen=n},setIsReplyRefresh:function(e,n){e.isReplyRefresh=n}},getters:{getCurrentUser:function(e){return e.currentUser},getViewUser:function(e){return e.viewUser},getPopular:function(e){return e.popular}},modules:{}}),b=t("2fa3"),w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("div",{staticClass:"development-link"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),t("router-link",{attrs:{to:"/user/login"}},[e._v("前台登入")]),t("router-link",{attrs:{to:"/user/register"}},[e._v("使用者註冊")]),t("router-link",{attrs:{to:"/user/setting"}},[e._v("使用者帳號設定")]),t("router-link",{attrs:{to:"/user/home"}},[e._v("使用者首頁")]),t("router-link",{attrs:{to:{name:"UserInfo",params:{user_id:75}}}},[e._v("使用者個人資訊")]),t("hr"),t("router-link",{attrs:{to:"/admin/login"}},[e._v("後台登入")]),t("router-link",{attrs:{to:"/admin/tweets"}},[e._v("推文清單")]),t("router-link",{attrs:{to:"/admin/users"}},[e._v("使用者列表")]),t("button",{on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.handleLogout.apply(null,arguments)}}},[e._v("登出(測試用)")])],1)])},k=[],g={name:"Home",methods:{handleLogout:function(){console.log("登出(測試用)"),this.$store.commit("revokeAuthentication")}}},v=g,U=(t("277d"),Object(a["a"])(v,w,k,!1,null,"7ba1f59c",null)),I=U.exports;r["a"].use(d["a"]);var y=function(e,n,t,r){var o=m.state.currentUser;if(o&&o.role!==r)return console.log("checkAuthorize ".concat(r," fail")),void b["a"].fire({icon:"error",title:"權限不足，無法訪問！"});console.log("checkAuthorize ".concat(r," success")),t()},F=function(e,n,t){y(e,n,t,"user")},P=function(e,n,t){y(e,n,t,"admin")},R=[{path:"/",name:"Home",component:I},{path:"/admin/login",name:"AdminLogin",component:function(){return t.e("chunk-4e0686ee").then(t.bind(null,"5b4f"))}},{path:"/admin",name:"Admin",redirect:"/admin/tweets",component:function(){return Promise.all([t.e("chunk-3acc50c6"),t.e("chunk-9cdad4c6")]).then(t.bind(null,"3530"))},children:[{path:"tweets",name:"AdminAllTweets",component:function(){return t.e("chunk-57ee7889").then(t.bind(null,"83b6"))},beforeEnter:P},{path:"users",name:"AdminAllUsers",component:function(){return t.e("chunk-78e61fdb").then(t.bind(null,"b138"))},beforeEnter:P}]},{path:"/user/login",name:"UserLogin",component:function(){return t.e("chunk-4a394b28").then(t.bind(null,"2818"))}},{path:"/user/register",name:"UserRegister",component:function(){return t.e("chunk-6571d83a").then(t.bind(null,"381a"))}},{path:"/user/setting",name:"UserSetting",component:function(){return Promise.all([t.e("chunk-3acc50c6"),t.e("chunk-e1c58e66")]).then(t.bind(null,"0b7d"))}},{path:"/user",name:"User",redirect:"/user/home",component:function(){return Promise.all([t.e("chunk-3acc50c6"),t.e("chunk-d6fa2eb0"),t.e("chunk-2cbd09fb")]).then(t.bind(null,"1511"))},children:[{path:"/user/home",name:"UserHome",component:function(){return Promise.all([t.e("chunk-41f95257"),t.e("chunk-853c911c")]).then(t.bind(null,"4c92"))},beforeEnter:F},{path:"/user/:user_id",name:"UserInfo",redirect:"/user/:user_id/tweets",component:function(){return Promise.all([t.e("chunk-3acc50c6"),t.e("chunk-d6fa2eb0"),t.e("chunk-0d7fbe2a")]).then(t.bind(null,"2861"))},beforeEnter:F,children:[{path:"tweets",name:"UserAllTweets",component:function(){return Promise.all([t.e("chunk-41f95257"),t.e("chunk-7b3c722a")]).then(t.bind(null,"898a"))},beforeEnter:F},{path:"replies",name:"UserAllReplies",component:function(){return t.e("chunk-e6919598").then(t.bind(null,"52ab"))},beforeEnter:F},{path:"like",name:"UserAllLike",component:function(){return Promise.all([t.e("chunk-41f95257"),t.e("chunk-f10bfbda")]).then(t.bind(null,"3bd1"))},beforeEnter:F}]},{path:"/user/:user_id",name:"UserAllFollow",component:function(){return t.e("chunk-a21879ca").then(t.bind(null,"4edb"))},beforeEnter:F,children:[{path:"followings",name:"UserFollowings",component:function(){return t.e("chunk-6698accc").then(t.bind(null,"d5dd"))},beforeEnter:F},{path:"followers",name:"UserFollowers",component:function(){return t.e("chunk-6698accc").then(t.bind(null,"d5dd"))},beforeEnter:F}]},{path:"/user/tweets/:tweet_id",name:"UserTweetDetail",component:function(){return t.e("chunk-0242786a").then(t.bind(null,"d9e9"))},beforeEnter:F}]}],C=new d["a"]({routes:R});C.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n,t,r){var o,c,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=localStorage.getItem("token"),c=m.state.token,a=m.state.isAuthenticated,!o||o===c){e.next=8;break}return e.next=6,m.dispatch("fetchCurrentUser");case 6:a=e.sent,console.log("isAuthenticated",a);case 8:if(u=["UserLogin","UserRegister","AdminLogin"],a||u.includes(n.name)||"Home"===n.name){e.next=19;break}console.log("to.name",n.name),console.log("token 無效，轉址到指定登入頁"),e.t0=n.name,e.next="AdminAllTweets"===e.t0||"AdminAllUsers"===e.t0?15:17;break;case 15:return r("/admin/login"),e.abrupt("break",18);case 17:r("/user/login");case 18:return e.abrupt("return");case 19:if(!a||!u.includes(n.name)){e.next=29;break}console.log("to.name",n.name),console.log("token 有效，轉址到指定開始頁面"),e.t1=n.name,e.next="AdminLogin"===e.t1?25:27;break;case 25:return r("/admin"),e.abrupt("break",28);case 27:r("/user");case 28:return e.abrupt("return");case 29:r();case 30:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var A=C;t("2fb4");r["a"].config.productionTip=!1,new r["a"]({router:A,store:m,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},8280:function(e,n,t){},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.bef7672a.js.map