(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d301dd1"],{"107c":function(e,t,n){var a=n("d039"),r=n("da84"),s=r.RegExp;e.exports=a((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var a=n("d784"),r=n("44e7"),s=n("825a"),i=n("1d80"),o=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("577e"),d=n("14c3"),p=n("9263"),h=n("9f7f"),m=n("d039"),f=h.UNSUPPORTED_Y,g=[].push,_=Math.min,v=4294967295,w=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=u(i(this)),s=void 0===n?v:n>>>0;if(0===s)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,s);var o,c,l,d=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,f=new RegExp(e.source,h+"g");while(o=p.call(f,a)){if(c=f.lastIndex,c>m&&(d.push(a.slice(m,o.index)),o.length>1&&o.index<a.length&&g.apply(d,o.slice(1)),l=o[0].length,m=c,d.length>=s))break;f.lastIndex===o.index&&f.lastIndex++}return m===a.length?!l&&f.test("")||d.push(""):d.push(a.slice(m)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=i(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,r,n):a.call(u(r),t,n)},function(e,r){var i=s(this),p=u(e),h=n(a,i,p,r,a!==t);if(h.done)return h.value;var m=o(i,RegExp),g=i.unicode,w=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(f?"g":"y"),x=new m(f?"^(?:"+i.source+")":i,w),b=void 0===r?v:r>>>0;if(0===b)return[];if(0===p.length)return null===d(x,p)?[p]:[];var y=0,T=0,P=[];while(T<p.length){x.lastIndex=f?0:T;var k,E=d(x,f?p.slice(T):p);if(null===E||(k=_(l(x.lastIndex+(f?T:0)),p.length))===y)T=c(p,T,g);else{if(P.push(p.slice(y,T)),P.length===b)return P;for(var C=1;C<=E.length-1;C++)if(P.push(E[C]),P.length===b)return P;T=y=k}}return P.push(p.slice(y)),P}]}),!w,f)},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var s=n.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"27a8":function(e,t,n){"use strict";n("7d4f")},"4df4":function(e,t,n){"use strict";var a=n("0366"),r=n("7b0b"),s=n("9bdd"),i=n("e95a"),o=n("50c4"),c=n("8418"),l=n("9a1f"),u=n("35a1");e.exports=function(e){var t,n,d,p,h,m,f=r(e),g="function"==typeof this?this:Array,_=arguments.length,v=_>1?arguments[1]:void 0,w=void 0!==v,x=u(f),b=0;if(w&&(v=a(v,_>2?arguments[2]:void 0,2)),void 0==x||g==Array&&i(x))for(t=o(f.length),n=new g(t);t>b;b++)m=w?v(f[b],b):f[b],c(n,b,m);else for(p=l(f,x),h=p.next,n=new g;!(d=h.call(p)).done;b++)m=w?s(p,v,[d.value,b],!0):d.value,c(n,b,m);return n.length=b,n}},"7d4f":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("577e"),r=n("ad6d"),s=n("9f7f"),i=n("5692"),o=n("7c73"),c=n("69f3").get,l=n("fce3"),u=n("107c"),d=RegExp.prototype.exec,p=i("native-string-replace",String.prototype.replace),h=d,m=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=s.UNSUPPORTED_Y||s.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],_=m||g||f||l||u;_&&(h=function(e){var t,n,s,i,l,u,_,v=this,w=c(v),x=a(e),b=w.raw;if(b)return b.lastIndex=v.lastIndex,t=h.call(b,x),v.lastIndex=b.lastIndex,t;var y=w.groups,T=f&&v.sticky,P=r.call(v),k=v.source,E=0,C=x;if(T&&(P=P.replace("y",""),-1===P.indexOf("g")&&(P+="g"),C=x.slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==x.charAt(v.lastIndex-1))&&(k="(?: "+k+")",C=" "+C,E++),n=new RegExp("^(?:"+k+")",P)),g&&(n=new RegExp("^"+k+"$(?!\\s)",P)),m&&(s=v.lastIndex),i=d.call(T?n:v,C),T?i?(i.input=i.input.slice(E),i[0]=i[0].slice(E),i.index=v.lastIndex,v.lastIndex+=i[0].length):v.lastIndex=0:m&&i&&(v.lastIndex=v.global?i.index+i[0].length:s),g&&i&&i.length>1&&p.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&y)for(i.groups=u=o(null),l=0;l<y.length;l++)_=y[l],u[_[0]]=i[_[1]];return i}),e.exports=h},9787:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[n("div",{staticClass:"form__account"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form__account__input",attrs:{id:"account",name:"account",type:"text",pattern:"[a-zA-Z0-9_]+",required:""},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}}),n("div",{class:["form__account__border",{error:e.accountTip.length>0}]}),n("label",{staticClass:"form__account__label",attrs:{for:"form__account__input"}},[e._v(" 帳號 ")]),n("span",{staticClass:"form__account__tip"},[e._v(e._s(e.accountTip))]),n("span",{class:["form__account__length",{error:e.accountLength>e.accountMaxLength}]},[e._v(" "+e._s(e.accountLength)+" / "+e._s(e.accountMaxLength)+" ")])]),n("div",{staticClass:"form__name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form__name__input",attrs:{id:"name",name:"name",type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("div",{class:["form__name__border",{error:e.nameTip.length>0}]}),n("label",{staticClass:"form__name__label",attrs:{for:"form__name__input"}},[e._v(" 名稱 ")]),n("span",{staticClass:"form__name__tip"},[e._v(e._s(e.nameTip))]),n("span",{class:["form__name__length",{error:e.nameLength>e.nameMaxLength}]},[e._v(" "+e._s(e.nameLength)+" / "+e._s(e.nameMaxLength)+" ")])]),n("div",{staticClass:"form__email"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form__email__input",attrs:{id:"email",name:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("div",{class:["form__email__border",{error:e.emailTip.length>0}]}),n("label",{staticClass:"form__email__label",attrs:{for:"form__email__input"}},[e._v(" Email ")]),n("span",{staticClass:"form__email__tip"},[e._v(e._s(e.emailTip))])]),n("div",{staticClass:"form__password"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form__password__input",attrs:{id:"password",name:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("div",{class:["form__password__border",{error:e.passwordTip.length>0}]}),n("label",{staticClass:"form__password__label",attrs:{for:"form__password__input"}},[e._v(" 密碼 ")]),n("span",{staticClass:"form__password__tip"},[e._v(e._s(e.passwordTip))]),n("span",{class:["form__password__length",{error:e.passwordLength>e.passwordMaxLength}]},[e._v(" "+e._s(e.passwordLength)+" / "+e._s(e.passwordMaxLength)+" ")])]),n("div",{staticClass:"form__checkPassword"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],staticClass:"form__checkPassword__input",attrs:{id:"checkPassword",name:"checkPassword",type:"password",required:""},domProps:{value:e.checkPassword},on:{input:function(t){t.target.composing||(e.checkPassword=t.target.value)}}}),n("div",{class:["form__checkPassword__border",{error:e.checkPasswordTip.length>0}]}),n("label",{staticClass:"form__checkPassword__label",attrs:{for:"form__checkPassword__input"}},[e._v(" 密碼確認 ")]),n("span",{staticClass:"form__checkPassword__tip"},[e._v(e._s(e.checkPasswordTip))])]),"UserRegister"===e.$route.name?[n("button",{staticClass:"form__submit",attrs:{type:"submit"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}]},[e._v("註冊")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isProcessing,expression:"isProcessing"}],staticClass:"form__submit__spinner"})]),n("router-link",{staticClass:"form__cancel-link",attrs:{to:"/user/login"}},[e._v(" 取消 ")])]:n("div",{staticClass:"form__submit__wrapper"},[n("button",{staticClass:"form__submit form__submit--setting",attrs:{type:"submit"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}]},[e._v("儲存")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isProcessing,expression:"isProcessing"}],staticClass:"form__submit__spinner"})])])],2)},r=[],s=n("1da1");function i(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,s=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(s.push(a.value),t&&s.length===t)break}catch(c){o=!0,r=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(o)throw r}}return s}}n("fb6a"),n("b0c0"),n("a630");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return i(e)||o(e,t)||l(e,t)||u()}function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(o)throw s}}}}n("96cf"),n("ac1f"),n("1276"),n("159b"),n("caad"),n("2532");var h=n("4cce"),m=n("2fa3"),f={name:"AccountForm",props:{page:{type:String,default:"signUp"},initAccount:{type:String,default:""},initName:{type:String,default:""},initEmail:{type:String,default:""}},data:function(){return{account:this.initAccount,name:this.initName,email:this.initEmail,password:"",checkPassword:"",accountMaxLength:50,nameMaxLength:50,passwordMinLength:4,passwordMaxLength:50,isProcessing:!1,regex:/^[a-zA-Z0-9_-]+$/,accountTip:"",nameTip:"",emailTip:"",passwordTip:"",checkPasswordTip:""}},computed:{accountLength:function(){return this.account.length},nameLength:function(){return this.name.length},passwordLength:function(){return this.password.length}},watch:{account:function(){this.account?this.account.length>this.accountMaxLength?this.accountTip="帳號上限 ".concat(this.accountMaxLength," 字"):this.regex.test(this.account)?this.accountTip="":this.accountTip="帳號只能為英文、數字與_ ":this.accountTip="請填寫帳號"},name:function(){this.name?this.name.length>this.nameMaxLength?this.nameTip="名稱上限 ".concat(this.nameMaxLength," 字"):this.nameTip="":this.nameTip="請填寫名稱"},email:function(){this.email?this.emailTip="":this.emailTip="請填寫Email"},password:function(){this.password?this.password.length>this.passwordMaxLength?this.passwordTip="密碼上限 ".concat(this.passwordMaxLength," 字"):this.password.length<this.passwordMinLength?this.passwordTip="密碼至少 ".concat(this.passwordMinLength," 個字"):this.passwordTip="":this.passwordTip="請填寫密碼",this.checkPassword.length>0&&(this.checkPasswordTip=this.password!==this.checkPassword?"密碼輸入不一致":"")},checkPassword:function(){this.checkPassword?this.password!==this.checkPassword?this.checkPasswordTip="密碼輸入不一致":this.checkPasswordTip="":this.checkPasswordTip="請填寫密碼確認"}},methods:{formValidation:function(){return!(this.accountTip.length>0||this.nameTip.length>0||this.emailTip.length>0||this.passwordTip.length>0||this.checkPasswordTip.length>0)||(m["a"].fire({icon:"warning",title:"請正確填寫所有資料"}),!1)},handleSubmit:function(e){if(this.formValidation()){this.accountTip="",this.nameTip="",this.emailTip="",this.passwordTip="",this.checkPasswordTip="",this.isProcessing=!0;var t,n=new FormData(e.target),a={},r=p(n.entries());try{for(r.s();!(t=r.n()).done;){var s=d(t.value,2),i=s[0],o=s[1];a[i]=o}}catch(c){r.e(c)}finally{r.f()}"signUp"===this.page?this.handleSignUpSubmit(a):"setting"===this.page&&this.handleSettingSubmit(a)}},handleSignUpSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.isProcessing=!0,n.next=4,h["a"].signUp(e);case 4:if(a=n.sent,r=a.data,"success"===r.status){n.next=8;break}throw new Error(r.message);case 8:m["a"].fire({icon:"success",title:"帳號註冊成功！\n ".concat(r.message)}),t.$router.push({name:"UserLogin"}),n.next=18;break;case 12:n.prev=12,n.t0=n["catch"](0),t.isProcessing=!1,s="",n.t0.response?(t.handleError(n.t0.response.data),s=n.t0.response.data.message):(console.log(n.t0),s=n.t0.message),m["a"].fire({icon:"error",title:"帳號註冊失敗！\n ".concat(s)});case 18:case"end":return n.stop()}}),n,null,[[0,12]])})))()},handleSettingSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i,o,c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.isProcessing=!0,n.next=4,h["a"].setting({userId:t.$store.getters.getCurrentUser.id,requestData:e});case 4:if(a=n.sent,r=a.data,"success"===r.status){n.next=8;break}throw new Error(r.message);case 8:t.isProcessing=!1,s=r.user,i=s.account,o=s.name,c=s.email,t.$store.commit("setCurrentUser",{account:i,name:o,email:c}),m["a"].fire({icon:"success",title:"帳戶設定成功！\n ".concat(r.message)}),n.next=20;break;case 14:n.prev=14,n.t0=n["catch"](0),t.isProcessing=!1,l="",n.t0.response?(t.handleError(n.t0.response.data),l=n.t0.response.data.message):(console.log(n.t0),l=n.t0.message),m["a"].fire({icon:"error",title:"帳戶設定失敗！\n ".concat(l)});case 20:case"end":return n.stop()}}),n,null,[[0,14]])})))()},handleError:function(e){var t=this;if("UserSingnUpError"===e.errType||"PutUserFormatError"===e.errType){var n=e.message.split("|");n.forEach((function(e){e.includes("account cannot be blank")?t.accountTip+="請填寫帳號 ":e.includes("account should not exceed")?t.accountTip+="帳號上限 50 字 ":e.includes("account should only include")?t.accountTip+="帳號只能為英文、數字與_ ":e.includes("name cannot be blank")?t.nameTip+="請填寫名稱 ":e.includes("name should not exceed")?t.nameTip+="名稱上限 50 字 ":e.includes("email cannot be blank")?t.emailTip+="請填寫Email ":e.includes("Email must be a valid email")?t.emailTip+="請填寫正確的Email ":e.includes("password cannot be blank")?t.passwordTip+="請填寫密碼 ":e.includes("password should not exceed")?t.passwordTip+="密碼上限 50 字 ":e.includes("at least 4 characters")?t.passwordTip+="密碼至少 4 個字 ":e.includes("is not equal to checkPassword")&&(t.checkPasswordTip+="密碼輸入不一致 ")}))}else switch(e.errType){case"AccountExistsError":this.accountTip="帳號已被使用";break;case"NameExistsError":this.nameTip="名稱已被使用";break;case"EmailExistsError":this.emailTip="Email已被使用";break;default:break}}}},g=f,_=(n("27a8"),n("2877")),v=Object(_["a"])(g,a,r,!1,null,"04b88212",null);t["a"]=v.exports},"9bdd":function(e,t,n){var a=n("825a"),r=n("2a62");e.exports=function(e,t,n,s){try{return s?t(a(n)[0],n[1]):t(n)}catch(i){r(e,"throw",i)}}},"9f7f":function(e,t,n){var a=n("d039"),r=n("da84"),s=r.RegExp;t.UNSUPPORTED_Y=a((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a630:function(e,t,n){var a=n("23e7"),r=n("4df4"),s=n("1c7e"),i=!s((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:r})},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d28b:function(e,t,n){var a=n("746f");a("iterator")},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("9263"),s=n("d039"),i=n("b622"),o=n("9112"),c=i("species"),l=RegExp.prototype;e.exports=function(e,t,n,u){var d=i(e),p=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=p&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!h||n){var m=/./[d],f=t(d,""[e],(function(e,t,n,a,s){var i=t.exec;return i===r||i===l.exec?p&&!s?{done:!0,value:m.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}));a(String.prototype,e,f[0]),a(l,d,f[1])}u&&o(l[d],"sham",!0)}},fb6a:function(e,t,n){"use strict";var a=n("23e7"),r=n("861d"),s=n("e8b5"),i=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),p=d("slice"),h=u("species"),m=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,a,u,d=c(this),p=o(d.length),g=i(e,p),_=i(void 0===t?p:t,p);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?r(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,g,_);for(a=new(void 0===n?Array:n)(f(_-g,0)),u=0;g<_;g++,u++)g in d&&l(a,u,d[g]);return a.length=u,a}})},fce3:function(e,t,n){var a=n("d039"),r=n("da84"),s=r.RegExp;e.exports=a((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-1d301dd1.a56908ea.js.map