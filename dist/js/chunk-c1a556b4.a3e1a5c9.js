(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1a556b4"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),i=n("07e3"),o=n("8e60"),c=n("63b6"),a=n("9138"),s=n("ebfd").KEY,f=n("294c"),u=n("dbdb"),l=n("45f2"),d=n("62a0"),b=n("5168"),p=n("ccb9"),v=n("6718"),h=n("47ee"),y=n("9003"),m=n("e4ae"),g=n("f772"),O=n("36c3"),_=n("1bc3"),w=n("aebd"),j=n("a159"),S=n("0395"),x=n("bf0b"),C=n("d9f6"),E=n("c3a1"),P=x.f,k=C.f,N=S.f,F=r.Symbol,I=r.JSON,D=I&&I.stringify,J="prototype",$=b("_hidden"),K=b("toPrimitive"),L={}.propertyIsEnumerable,T=u("symbol-registry"),W=u("symbols"),M=u("op-symbols"),Y=Object[J],q="function"==typeof F,z=r.QObject,A=!z||!z[J]||!z[J].findChild,G=o&&f(function(){return 7!=j(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(Y,e);r&&delete Y[e],k(t,e,n),r&&t!==Y&&k(Y,e,r)}:k,Q=function(t){var e=W[t]=j(F[J]);return e._k=t,e},B=q&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},H=function(t,e,n){return t===Y&&H(M,e,n),m(t),e=_(e,!0),m(n),i(W,e)?(n.enumerable?(i(t,$)&&t[$][e]&&(t[$][e]=!1),n=j(n,{enumerable:w(0,!1)})):(i(t,$)||k(t,$,w(1,{})),t[$][e]=!0),G(t,e,n)):k(t,e,n)},R=function(t,e){m(t);var n,r=h(e=O(e)),i=0,o=r.length;while(o>i)H(t,n=r[i++],e[n]);return t},U=function(t,e){return void 0===e?j(t):R(j(t),e)},V=function(t){var e=L.call(this,t=_(t,!0));return!(this===Y&&i(W,t)&&!i(M,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,$)&&this[$][t])||e)},X=function(t,e){if(t=O(t),e=_(e,!0),t!==Y||!i(W,e)||i(M,e)){var n=P(t,e);return!n||!i(W,e)||i(t,$)&&t[$][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=N(O(t)),r=[],o=0;while(n.length>o)i(W,e=n[o++])||e==$||e==s||r.push(e);return r},tt=function(t){var e,n=t===Y,r=N(n?M:O(t)),o=[],c=0;while(r.length>c)!i(W,e=r[c++])||n&&!i(Y,e)||o.push(W[e]);return o};q||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===Y&&e.call(M,n),i(this,$)&&i(this[$],t)&&(this[$][t]=!1),G(this,t,w(1,n))};return o&&A&&G(Y,t,{configurable:!0,set:e}),Q(t)},a(F[J],"toString",function(){return this._k}),x.f=X,C.f=H,n("6abf").f=S.f=Z,n("355d").f=V,n("9aa9").f=tt,o&&!n("b8e3")&&a(Y,"propertyIsEnumerable",V,!0),p.f=function(t){return Q(b(t))}),c(c.G+c.W+c.F*!q,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var rt=E(b.store),it=0;rt.length>it;)v(rt[it++]);c(c.S+c.F*!q,"Symbol",{for:function(t){return i(T,t+="")?T[t]:T[t]=F(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in T)if(T[e]===t)return e},useSetter:function(){A=!0},useSimple:function(){A=!1}}),c(c.S+c.F*!q,"Object",{create:U,defineProperty:H,defineProperties:R,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&c(c.S+c.F*(!q||f(function(){var t=F();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(g(e)||void 0!==t)&&!B(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,D.apply(I,r)}}),F[J][K]||n("35e8")(F[J],K,F[J].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),i=n("6abf").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"1f37":function(t,e,n){},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},4480:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading,opacity:.85},on:{"update:active":function(e){t.isLoading=e}}},[r("img",{attrs:{src:n("cf1c"),alt:"",srcset:""}}),r("vue-typed-js",{staticClass:"justify-content-center align-items-center",attrs:{strings:["波利加載中…"]}},[r("small",{staticClass:"font-weight-normal typing"})])],1),r("div",{staticClass:"container p-top"},[r("h3",{staticClass:"text-center my-2"},[t._v("結帳確認")]),r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder()}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("品名")]),n("th",[t._v("數量")]),n("th",[t._v("單價")])])])}],o=n("cebc"),c=n("2f62"),a={data:function(){return{orderId:""}},methods:{getOrder:function(){this.$store.dispatch("getOrder",this.orderId)},payOrder:function(){this.$store.dispatch("payOrder",this.orderId)}},computed:Object(o["a"])({},Object(c["c"])(["isLoading","order"])),created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},s=a,f=(n("da8e"),n("2877")),u=Object(f["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),i=n("9aa9"),o=n("355d");t.exports=function(t){var e=r(t),n=i.f;if(n){var c,a=n(t),s=o.f,f=0;while(a.length>f)s.call(t,c=a[f++])&&e.push(c)}return e}},6718:function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("b8e3"),c=n("ccb9"),a=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},bf0b:function(t,e,n){var r=n("355d"),i=n("aebd"),o=n("36c3"),c=n("1bc3"),a=n("07e3"),s=n("794b"),f=Object.getOwnPropertyDescriptor;e.f=n("8e60")?f:function(t,e){if(t=o(t),e=c(e,!0),s)try{return f(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),o=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",c)}},cebc:function(t,e,n){"use strict";var r=n("268f"),i=n.n(r),o=n("e265"),c=n.n(o),a=n("a4bb"),s=n.n(a),f=n("85f2"),u=n.n(f);function l(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=s()(n);"function"===typeof c.a&&(r=r.concat(c()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},cf1c:function(t,e,n){t.exports=n.p+"img/loading.0c0dd86f.gif"},da8e:function(t,e,n){"use strict";var r=n("1f37"),i=n.n(r);i.a},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),i=n("f772"),o=n("07e3"),c=n("d9f6").f,a=0,s=Object.isExtensible||function(){return!0},f=!n("294c")(function(){return s(Object.preventExtensions({}))}),u=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";u(t)}return t[r].i},d=function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;u(t)}return t[r].w},b=function(t){return f&&p.NEED&&s(t)&&!o(t,r)&&u(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:b}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-c1a556b4.a3e1a5c9.js.map