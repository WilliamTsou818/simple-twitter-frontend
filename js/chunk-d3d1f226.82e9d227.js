(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3d1f226"],{"1bd0":function(e,t,s){"use strict";s("e20a")},2375:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"spinner"})},a=[],i={},c=i,r=(s("e85f"),s("2877")),o=Object(r["a"])(c,n,a,!1,null,"6422aaba",null);t["a"]=o.exports},"8ed0":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container container--chat"},[s("div",{staticClass:"chat"},[s("div",{staticClass:"chat__lists md-d-none"},[s("Head",{attrs:{title:e.onlineUsers}}),e._l(e.publicUsers,(function(e){return s("ChatList",{key:e.id,attrs:{user:e}})})),s("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]})],2),s("div",{staticClass:"chat__room"},[s("div",{staticClass:"md-d-none"},[s("Head",{staticClass:"md-d-none",attrs:{title:"公開聊天室"}})],1),s("div",{staticClass:"lg-d-none"},[s("Head",{attrs:{title:e.chatUsers}})],1),s("div",{staticClass:"chat__head lg-d-none"},[s("div",{staticClass:"chat__head__lists"},e._l(e.publicUsers,(function(e){return s("div",{key:e.id,staticClass:"chat__head__avatar",style:{backgroundImage:"url("+e.avatar+")"}})})),0)]),s("ChatRoom",{attrs:{chats:e.publicAllMessages},on:{"new-chat":e.handleNewChatSend}})],1)])])},a=[],i=s("1da1"),c=s("5530"),r=(s("96cf"),s("4cce")),o=s("2708"),l=s("2f62"),u=s("7a0f"),d=s("5527"),h=s("0b0f"),b=s("2375"),p={name:"PublicRoom",mixins:[o["a"]],components:{Head:u["a"],ChatList:d["a"],ChatRoom:h["a"],Spinner:b["a"]},data:function(){return{isLoading:!0,isJoin:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["publicUsers","publicAllMessages"])),{},{onlineUsers:function(){return"上線使用者(".concat(this.publicUsers.length,")")},chatUsers:function(){return"公開聊天室(".concat(this.publicUsers.length,")")}}),created:function(){this.$socket.connected&&this.openPublicRoom()},beforeDestroy:function(){this.isJoin&&(this.$socket.emit("leavePublicRoom"),this.$store.commit("setPublicUsers",[]))},sockets:{connect:function(){this.openPublicRoom()},error:function(e){console.log("publicRoon socket error",e);var t="";switch(e.errType){default:t="PublicRoon Error!";break}this.ToastError({title:t,description:e.message})}},methods:{openPublicRoom:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAllMessages();case 2:e.$socket.emit("joinPublicRoom"),e.isJoin=!0;case 4:case"end":return t.stop()}}),t)})))()},fetchAllMessages:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,r["a"].messages.getPublicAll();case 4:s=t.sent,n=s.data,e.$store.dispatch("setPublicAllMessages",n),e.isLoading=!1,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),a="",t.t0.response?(console.log(t.t0.response.data),a=t.t0.response.data.message):(console.log(t.t0),a=t.t0.message),e.ToastError({title:"獲取訊息失敗！",description:a});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},handleNewChatSend:function(e){this.$socket.emit("publicMessage",{UserId:this.$store.getters.getCurrentUser.id,RoomId:5,content:e})}}},f=p,m=(s("1bd0"),s("2877")),g=Object(m["a"])(f,n,a,!1,null,"8d5ab9a0",null);t["default"]=g.exports},"9be1":function(e,t,s){},e20a:function(e,t,s){},e85f:function(e,t,s){"use strict";s("9be1")}}]);
//# sourceMappingURL=chunk-d3d1f226.82e9d227.js.map