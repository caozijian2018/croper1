exports.ids=[1],exports.modules={50:function(t,e,r){"use strict";var n=r(4),o=r.n(n);console.log("http://mygameparty.com");const c=o.a.create({timeout:1e4,baseURL:"http://mygameparty.com"});c.interceptors.request.use(t=>t,t=>{Promise.reject(t)}),c.interceptors.response.use(t=>t.data,t=>(console.log(JSON.stringify(t)),console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),Promise.reject({orgin_error:JSON.stringify(t)}))),e.a=c},51:function(t,e,r){"use strict";var n=r(0),o=new(r.n(n).a);e.a=o},52:function(t,e,r){var content=r(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("6c05f834",content,!1,t)}},56:function(t,e,r){"use strict";var n=r(50);var o={album:"album/",site:"site/",tag:"tag/",user:"user/",login:"login/"};e.a=(t,e="get",r={})=>{var c=!t.match(/[\?\/]/),f="v1";for(var l of["album"])if(t.match(l)){f=(t.match(/album\/\d+/),"v1");break}var m={url:`/backend/api/${f}/`+(c?o[t]:t),method:e};return"get"==e?m.params=r:m.data=r,Object(n.a)(m)}},59:function(t,e){String.prototype.repeat||(String.prototype.repeat=function(t){for(var e="",i=0;i<t;i++)e+=this;return e}),String.prototype.padStart||(String.prototype.padStart=function(t,e){if(this.length<t){var r=String(e).repeat(t);return r.slice(0,r.length-this.length)+this}return this})},60:function(t,e,r){"use strict";r.r(e);var n=r(52),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},61:function(t,e,r){var n=r(2),o=r(24),c=r(62),f=r(63),l=r(64);e=t.exports=n(!1);var m=o(c),h=o(f),v=o(l);e.push([t.i,"@font-face{font-family:方正兰亭;src:url("+m+");font-weight:400;font-style:bold}@font-face{font-family:方正兰亭粗黑;src:url("+h+");font-weight:400;font-style:bold}@font-face{font-family:impact111;src:url("+v+");font-weight:400;font-style:normal}.container{height:100vh;width:100vw}",""])},62:function(t,e,r){t.exports=r.p+"fonts/c17e4d1.ttf"},63:function(t,e,r){t.exports=r.p+"fonts/0191f25.ttf"},64:function(t,e,r){t.exports=r.p+"fonts/9f55a26.ttf"},81:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),c=r(56);o.a.filter("first10",t=>t.length>25?t.substring(0,25)+"...":t),o.a.filter("last10",t=>{0});var f=r(18);o.a.prototype.$msg=(t="success",e="success")=>{Object(f.Message)({message:t,type:e,duration:3e3,customClass:"msg"})};r(59);var l=r(48),m=r.n(l);r(50),r(51);o.a.prototype.$http=c.a,o.a.prototype.$jquery=m.a;var h={mounted(){},methods:{}},v=r(1);var component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nuxt")],1)}),[],!1,(function(t){var e=r(60);e.__inject__&&e.__inject__(t)}),null,"7706a8be");e.default=component.exports}};