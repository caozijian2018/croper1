(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{327:function(t,e,n){"use strict";n(16);var r=n(52),o=n.n(r);console.log("http://mygameparty.com");var c=o.a.create({timeout:1e4,baseURL:"http://mygameparty.com"});c.interceptors.request.use((function(t){return t}),(function(t){Promise.reject(t)})),c.interceptors.response.use((function(t){return t.data}),(function(t){return console.log(JSON.stringify(t)),console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),Promise.reject({orgin_error:JSON.stringify(t)})})),e.a=c},328:function(t,e,n){"use strict";var r=new(n(0).default);e.a=r},329:function(t,e,n){var content=n(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6c05f834",content,!1,{sourceMap:!1})},333:function(t,e,n){"use strict";n(184);var r=n(327),o={album:"album/",site:"site/",tag:"tag/",user:"user/",login:"login/"};e.a=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=!t.match(/[\?\/]/),f=["album"],l="v1",h=0,d=f;h<d.length;h++){var m=d[h];if(t.match(m)){l=(t.match(/album\/\d+/),"v1");break}}var v=c?o[t]:t,y={url:"/backend/api/".concat(l,"/")+v,method:e};return"get"==e?y.params=n:y.data=n,Object(r.a)(y)}},340:function(t,e,n){"use strict";var r=n(329);n.n(r).a},341:function(t,e,n){var r=n(20),o=n(189),c=n(342),f=n(343),l=n(344);e=t.exports=r(!1);var h=o(c),d=o(f),m=o(l);e.push([t.i,"@font-face{font-family:方正兰亭;src:url("+h+");font-weight:400;font-style:bold}@font-face{font-family:方正兰亭粗黑;src:url("+d+");font-weight:400;font-style:bold}@font-face{font-family:impact111;src:url("+m+");font-weight:400;font-style:normal}.container{height:100vh;width:100vw}",""])},342:function(t,e,n){t.exports=n.p+"fonts/c17e4d1.ttf"},343:function(t,e,n){t.exports=n.p+"fonts/0191f25.ttf"},344:function(t,e,n){t.exports=n.p+"fonts/9f55a26.ttf"},364:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(333);r.default.filter("first10",(function(t){return t.length>25?t.substring(0,25)+"...":t})),r.default.filter("last10",(function(t){return innerWidth>400?t:t.substring(0,7)+"..."}));var c=n(160);r.default.prototype.$msg=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";Object(c.Message)({message:t,type:e,duration:3e3,customClass:"msg"})};n(336),n(187);String.prototype.repeat||(String.prototype.repeat=function(t){for(var e="",i=0;i<t;i++)e+=this;return e}),String.prototype.padStart||(String.prototype.padStart=function(t,e){if(this.length<t){var n=String(e).repeat(t);return n.slice(0,n.length-this.length)+this}return this});var f=n(338),l=n.n(f),h=n(327),d=n(328);r.default.prototype.$http=o.a,r.default.prototype.$jquery=l.a;var m=n(339);r.default.use(m.default),function(){d.a.$emit("login");var t=localStorage.video_token;h.a.defaults.headers.common.Authorization=t?"Bearer "+t:null}();var v={mounted:function(){},methods:{}},y=(n(340),n(13)),component=Object(y.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nuxt")],1)}),[],!1,null,null,null);e.default=component.exports}}]);