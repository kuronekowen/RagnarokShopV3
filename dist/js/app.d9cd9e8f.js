(function(e){function t(t){for(var c,s,u=t[0],r=t[1],i=t[2],d=0,p=[];d<u.length;d++)s=u[d],n[s]&&p.push(n[s][0]),n[s]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);m&&m(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,s=1;s<a.length;s++){var u=a[s];0!==n[u]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var c={},s={app:0},n={app:0},o=[];function u(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-0a0239de":"3798b235","chunk-0fbabfb8":"a7d7bd77","chunk-22fdafac":"8ca9a94f","chunk-2e31fb6e":"ed4f4209","chunk-3200f72d":"4354481c","chunk-371ed67e":"d946d83d","chunk-4257866a":"0e18b82d","chunk-46819d9e":"bb853964","chunk-642e6bcd":"fb46663a","chunk-674e829c":"15d801a0","chunk-6d40c532":"fc5dcca9","chunk-763a390e":"c76bc786","chunk-7644c5ce":"3ddba6d2","chunk-7abef9b5":"49a878fe","chunk-c950ed4a":"2b59ef40","chunk-081f1fec":"b352762c","chunk-580c6bca":"b1914e80"}[e]+".js"}function r(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a={"chunk-0a0239de":1,"chunk-0fbabfb8":1,"chunk-22fdafac":1,"chunk-2e31fb6e":1,"chunk-3200f72d":1,"chunk-371ed67e":1,"chunk-4257866a":1,"chunk-46819d9e":1,"chunk-674e829c":1,"chunk-763a390e":1,"chunk-7644c5ce":1,"chunk-081f1fec":1,"chunk-580c6bca":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise(function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-0a0239de":"876d990b","chunk-0fbabfb8":"876d990b","chunk-22fdafac":"95e4ce02","chunk-2e31fb6e":"876d990b","chunk-3200f72d":"704df48f","chunk-371ed67e":"cbef0073","chunk-4257866a":"b07a54d6","chunk-46819d9e":"7a61917c","chunk-642e6bcd":"31d6cfe0","chunk-674e829c":"3d5eeee3","chunk-6d40c532":"31d6cfe0","chunk-763a390e":"876d990b","chunk-7644c5ce":"02b92a1d","chunk-7abef9b5":"31d6cfe0","chunk-c950ed4a":"31d6cfe0","chunk-081f1fec":"c2cbe4fd","chunk-580c6bca":"cad9ec36"}[e]+".css",n=r.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===n))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],d=i.getAttribute("data-href");if(d===c||d===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var c=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.request=c,delete s[e],m.parentNode.removeChild(m),a(o)},m.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(m)}).then(function(){s[e]=0}));var c=n[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise(function(t,a){c=n[e]=[t,a]});t.push(c[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=u(e),i=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=n[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+c+": "+s+")");o.type=c,o.request=s,a[1](o)}n[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},r.m=e,r.c=c,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(a,c,function(t){return e[t]}.bind(null,c));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var m=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var c=a("2b0e"),s=a("9062"),n=a.n(s),o=(a("e40d"),a("bc3a")),u=a.n(o),r=a("a7fe"),i=a.n(r),d=(a("4989"),a("1157")),p=a.n(d),m=a("ecee"),h=a("c074"),l=a("f2d1"),g=a("b702"),f=a("ad3d"),v=a("8cb8"),O=a("7bb1"),b=a("427f"),A=a.n(b),I=a("0576"),D=a.n(I),k=a("2819"),M=a.n(k),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},P=[],C=(a("5c0b"),a("2877")),G={},y=Object(C["a"])(G,E,P,!1,null,null,null),L=y.exports,S=a("8c4f");c["a"].use(S["a"]);var N=new S["a"]({mode:"hash",base:"",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"*",redirect:"/"},{path:"/",name:"",component:function(){return a.e("chunk-7644c5ce").then(a.bind(null,"88e9"))},children:[{path:"",name:"Index",component:function(){return Promise.all([a.e("chunk-c950ed4a"),a.e("chunk-081f1fec")]).then(a.bind(null,"86d6"))}},{path:"/aboutro",name:"AboutRo",component:function(){return a.e("chunk-3200f72d").then(a.bind(null,"dad7"))}},{path:"/products",name:"Products",component:function(){return a.e("chunk-371ed67e").then(a.bind(null,"7079"))}},{path:"/detailed/:productsId",name:"Detailed",component:function(){return Promise.all([a.e("chunk-c950ed4a"),a.e("chunk-580c6bca")]).then(a.bind(null,"30e2"))}},{path:"/customer",name:"Customer",component:function(){return a.e("chunk-46819d9e").then(a.bind(null,"af6b"))}},{path:"/check_order/:orderId",name:"CheckOrder",component:function(){return a.e("chunk-4257866a").then(a.bind(null,"4480"))}}]},{path:"/login",name:"Login",component:function(){return a.e("chunk-22fdafac").then(a.bind(null,"a55b"))}},{path:"/admin",name:"",component:function(){return a.e("chunk-674e829c").then(a.bind(null,"0a6e"))},children:[{path:"",name:"Console",component:function(){return a.e("chunk-6d40c532").then(a.bind(null,"a29f"))},meta:{requiresAuth:!0}},{path:"/products_list",name:"ProductsList",component:function(){return a.e("chunk-0fbabfb8").then(a.bind(null,"a407"))},meta:{requiresAuth:!0}},{path:"/productscard",name:"ProductsCard",component:function(){return a.e("chunk-763a390e").then(a.bind(null,"abbe"))},meta:{requiresAuth:!0}},{path:"/coupons",name:"Coupons",component:function(){return a.e("chunk-7abef9b5").then(a.bind(null,"151c"))},meta:{requiresAuth:!0}},{path:"/orders",name:"Orders",component:function(){return a.e("chunk-642e6bcd").then(a.bind(null,"447e"))},meta:{requiresAuth:!0}},{path:"/customer_orders",name:"CustomerOrders",component:function(){return a.e("chunk-2e31fb6e").then(a.bind(null,"b6ca"))},meta:{requiresAuth:!0}},{path:"/customer_crders/:orderId",name:"CustomerCheck",component:function(){return a.e("chunk-0a0239de").then(a.bind(null,"b869"))},meta:{requiresAuth:!0}}]}]}),T=a("2f62"),U=a("f499"),x=a.n(U),R={strict:!0,namespace:!0,state:{url:{products:function(e,t){switch(e){case"page":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/product/").concat(t);case"one":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/product/").concat(t);default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/products/all")}}},products:[],oneProducts:{},shopOff:[],shopItem:[],localFilter:"快搶購"},mutations:{GETPRODUCTS:function(e,t){e.products=t},GETONEPRODUCTS:function(e,t){e.oneProducts=t},SHOPOFF:function(e){var t=e.products;e.shopOff=t.filter(function(e){return"組合優惠"===e.category})},SHOPITEM:function(e){var t=e.products;e.localFilter=JSON.parse(localStorage.getItem("likecategory"))||"快搶購",e.shopItem=t.filter(function(t){return"快搶購"===e.localFilter?"MVP卡片"===t.category:t.category===e.localFilter})}},actions:{getProducts:function(e,t){var a=e.state.url.products();e.commit("LOADING",!0),u.a.get(a).then(function(a){if(a.data.success)switch(e.commit("GETPRODUCTS",a.data.products),t){case"shop":e.dispatch("shopOff"),e.dispatch("shopItem");break;case"like":e.dispatch("shopItem");break;default:break}else e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(a.data.message),status:"danger"});e.commit("LOADING",!1)})},shopOff:function(e){e.commit("SHOPOFF")},shopItem:function(e){e.commit("SHOPITEM")},getOneProduct:function(e,t){var a=e.state.url.products("one",t);e.commit("LOADING",!0),u.a.get(a).then(function(t){t.data.success?(e.commit("GETONEPRODUCTS",t.data.product),localStorage.setItem("likecategory",x()(t.data.product.category))):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)}),e.dispatch("getProducts")}},getters:{products:function(e){return e.products},oneProducts:function(e){return e.oneProducts},shopOff:function(e){return e.shopOff},shopItem:function(e){return e.shopItem},localFilter:function(e){return e.localFilter}}},w={strict:!0,namespace:!0,state:{url:{cart:function(e,t){switch(e){case"post":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/cart");case"get":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/cart");case"delete":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/cart/").concat(t);case"coupon":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/coupon");default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/cart")}},order:function(e,t){switch(e){case"post":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/order");case"get":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/order/").concat(t);case"pay":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/pay/").concat(t);default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/order")}}},cart:{carts:[]},order:{user:{},products:[]}},mutations:{GETCARTS:function(e,t){e.cart=t},GETORDER:function(e,t){e.order=t}},actions:{addCart:function(e,t){var a=t.id,c=t.qty,s=e.state.url.cart("post"),n={product_id:a,qty:c};e.commit("LOADINGID",a),u.a.post(s,{data:n}).then(function(t){"已加入購物車"===t.data.message?(e.dispatch("updateMessage",{message:"產品加入購物車成功(*ゝ∀･)v",status:"success"}),e.dispatch("getCarts")):(t.data.message,e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"})),e.commit("LOADINGID","")})},getCarts:function(e){var t=e.state.url.cart("get");e.commit("LOADING",!0),u.a.get(t).then(function(t){t.data.success?e.commit("GETCARTS",t.data.data):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},userCoupon:function(e,t){var a=e.state.url.cart("coupon"),c={code:t};u.a.post(a,{data:c}).then(function(t){t.data.success?(e.dispatch("updateMessage",{message:"優惠碼套用成功(*ゝ∀･)v",status:"success"}),e.dispatch("getCarts")):"找不到優惠券!"===t.data.message?e.dispatch("updateMessage",{message:";沒有這張優惠卷唷，好糗Σ( ° △ °|||)︴",status:"danger"}):"優惠券無法無法使用或已過期"===t.data.message&&e.dispatch("updateMessage",{message:"優惠券無法無法使用或已過期惹，好糗Σ( ° △ °|||)︴",status:"danger"})})},createOrder:function(e,t){var a=e.state.url.order("post");u.a.post(a,{data:t}).then(function(t){"已建立訂單"===t.data.message?(e.dispatch("updateMessage",{message:"產品已成功建立訂單啦(*ゝ∀･)v",status:"success"}),e.dispatch("getCarts"),N.push("/check_order/".concat(t.data.orderId))):"說明欄位為必填"===t.data.message?e.dispatch("updateMessage",{message:"說明欄位為必填，好糗Σ( ° △ °|||)︴\n            ".concat(t.data.message),status:"danger"}):"尚無用戶資料"===t.data.message?e.dispatch("updateMessage",{message:"尚無用戶資料，好糗Σ( ° △ °|||)︴\n            ".concat(t.data.message),status:"danger"}):"購物車內無資料"===t.data.message?e.dispatch("updateMessage",{message:"你購物車內沒東西要我怎麼送資料，好糗Σ( ° △ °|||)︴\n            ".concat(t.data.message),status:"danger"}):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴\n            ".concat(t.data.message),status:"danger"})})},removeCart:function(e,t){var a=e.state.url.cart("delete",t);e.commit("LOADINGID",t),u.a.delete(a).then(function(t){t.data.success?(e.dispatch("updateMessage",{message:"產品刪除成功(*ゝ∀･)v",status:"success"}),e.commit("LOADINGID",""),e.dispatch("getCarts")):(e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADINGID",""))})},getOrder:function(e,t){var a=e.state.url.order("get",t);e.commit("LOADING",!0),u.a.get(a).then(function(t){t.data.success?e.commit("GETORDER",t.data.order):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},payOrder:function(e,t){var a=e.state.url.order("pay",t);e.commit("LOADING",!0),u.a.post(a).then(function(a){a.data.success?(e.dispatch("updateMessage",{message:"感謝你的購買(*ゝ∀･)v",status:"success"}),e.dispatch("getOrder",t)):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(a.data.message),status:"danger"}),e.commit("LOADING",!0)})}},getters:{cart:function(e){return e.cart},order:function(e){return e.order}}},_=a("75fc"),F={namespace:!0,state:{url:{account:function(e){switch(e){case"signin":return"".concat("https://vue-course-api.hexschool.io","/admin/signin");case"signOut":return"".concat("https://vue-course-api.hexschool.io","/logout");default:return"".concat("https://vue-course-api.hexschool.io","/admin/signin")}},products:function(e,t){switch(e){case"post":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/product/");case"put":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/product/").concat(t);case"delete":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/product/").concat(t);case"img":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/upload");case"page":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/products?page=").concat(t);default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/products/all")}},coupons:function(e,t){switch(e){case"post":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/coupon");case"put":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/coupon/").concat(t);case"delete":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/coupon/").concat(t);case"page":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/coupons?page=").concat(t);default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/coupons")}},order:function(e,t){switch(e){case"put":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/order/").concat(t);case"page":return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/orders?page=").concat(t);default:return"".concat("https://vue-course-api.hexschool.io","/api/").concat("rayvue","/admin/orders")}}},adminProducts:[],adminCoupons:[],adminOrders:[],pagination:{},fileUploading:!1,cacheProducts:{},cacheCoupons:{},productsImageUrl:"",consoleProducts:[],consoleCoupons:[],consoleOrders:[],chartData:{columns:["category","length"],rows:[]}},mutations:{GETADMINPRODUCTS:function(e,t){e.adminProducts=t},GETADMINCOUPONS:function(e,t){e.adminCoupons=t},GETADMINORDER:function(e,t){e.adminOrders=t},GETPAGE:function(e,t){e.pagination=t},FILEUPLOADSTATE:function(e,t){e.fileUploading=t},PRODUCTSIMGURL:function(e,t){e.productsImageUrl=t},CACHEPRODUCTS:function(e,t){e.cacheProducts=t},CACHECOUPONS:function(e,t){e.cacheCoupons=t},GETCONSOLEPRODUCTS:function(e,t){e.consoleProducts=t},GETCONSOLECOUPONS:function(e,t){e.consoleCoupons=t},GETCONSOLEORDER:function(e,t){e.consoleOrders=t},PUSHCHAR:function(e,t){e.chartData.rows=t},CLEARIMGURL:function(e){e.productsImageUrl=""}},actions:{signin:function(e,t){var a=e.state.url.account("signin");e.commit("LOADING",!0),u.a.post(a,t).then(function(t){t.data.success?(e.commit("LOADING",!1),N.push("/admin")):e.dispatch("updateMessage",{message:"登入失敗惹Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},signOut:function(e){var t=e.state.url.account("signOut");e.commit("LOADING",!0),u.a.post(t).then(function(t){t.data.success&&(e.commit("LOADING",!1),e.dispatch("updateMessage",{message:"登出成功(*ゝ∀･)v",status:"success"}),N.push("/login"))})},getAdminProducts:function(e,t){var a=e.state.url.products("page",t);e.commit("LOADING",!0),u.a.get(a).then(function(t){t.data.success?(e.commit("GETADMINPRODUCTS",t.data.products),e.commit("GETPAGE",t.data.pagination)):"驗證錯誤, 請重新登入"===t.data.message?(e.commit("LOADING",!1),N.push("/login")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},updataCacheProducts:function(e,t){var a=t.tempProducts,c=t.productsImageUrl,s={title:a.title,category:a.category,origin_price:a.origin_price,price:a.price,unit:a.unit,image:a.image,description:a.description,content:a.content,is_enabled:a.is_enabled,imageUrl:c};e.commit("CACHEPRODUCTS",s)},updataProducts:function(e,t){var a=t.productsStatus,c=t.productsID,s=e.state.url.products(a,c);e.commit("LOADING",!0),u.a[a](s,{data:e.state.cacheProducts}).then(function(t){if(t.data.success){switch($("#productsModal").modal("hide"),a){case"post":e.dispatch("updateMessage",{message:"資料新增成功(*ゝ∀･)v",status:"success"});break;case"put":e.dispatch("updateMessage",{message:"資料更新成功(*ゝ∀･)v",status:"success"});break;default:e.dispatch("updateMessage",{message:"資料新增成功(*ゝ∀･)v",status:"success"});break}e.dispatch("getAdminProducts")}else e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"})})},updataProductsImg:function(e,t){var a=new FormData;a.append("file-to-upload",t);var c=e.state.url.products("img");e.commit("FILEUPLOADSTATE",!0),e.commit("LOADING",!0),u.a.post(c,a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){t.data.success?(e.commit("PRODUCTSIMGURL",t.data.imageUrl),e.dispatch("updateMessage",{message:"圖片上傳成功(*ゝ∀･)v",status:"success"})):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("FILEUPLOADSTATE",!1),e.commit("LOADING",!1)})},deleProducts:function(e,t){var a=e.state.url.products("delete",t);e.commit("FILEUPLOADSTATE",!0),u.a.delete(a).then(function(t){t.data.success?($("#deleteProductsModal").modal("hide"),e.dispatch("updateMessage",{message:"資料刪除成功(*ゝ∀･)v",status:"success"}),e.dispatch("getAdminProducts")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"}),e.commit("FILEUPLOADSTATE",!1)})},getAdminCoupons:function(e,t){var a=e.state.url.coupons("page",t);e.commit("LOADING",!0),u.a.get(a).then(function(t){t.data.success?(e.commit("PRODUCTSIMGURL",t.data.pagination),e.commit("GETADMINCOUPONS",t.data.coupons)):"驗證錯誤, 請重新登入"===t.data.message?(e.commit("LOADING",!1),N.push("/login")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"}),e.commit("LOADING",!1)})},updataCacheCoupons:function(e,t){var a={title:t.title,is_enabled:t.is_enabled,percent:t.percent,due_date:t.due_date,code:t.code};e.commit("CACHECOUPONS",a)},updataCoupons:function(e,t){var a=t.couponsStatus,c=t.cacheCouponsID,s=e.state.url.coupons(a,c);e.commit("LOADING",!0),u.a[a](s,{data:e.state.cacheCoupons}).then(function(t){if(t.data.success){switch($("#couponsModal").modal("hide"),a){case"post":e.dispatch("updateMessage",{message:"資料新增成功(*ゝ∀･)v",status:"success"});break;case"put":e.dispatch("updateMessage",{message:"資料更新成功(*ゝ∀･)v",status:"success"});break;default:e.dispatch("updateMessage",{message:"資料新增成功(*ゝ∀･)v",status:"success"});break}e.commit("LOADING",!1),e.dispatch("getAdminCoupons")}else e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"});e.commit("LOADING",!1)})},deleteCoupons:function(e,t){var a=e.state.url.coupons("delete",t);e.commit("LOADING",!0),u.a.delete(a).then(function(t){t.data.success?($("#deleteCouponsModal").modal("hide"),e.dispatch("updateMessage",{message:"資料刪除成功(*ゝ∀･)v",status:"success"}),e.commit("LOADING",!0),e.dispatch("getAdminCoupons")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"}),e.commit("LOADING",!1)})},getAdminOrders:function(e,t){var a=e.state.url.order("page",t);e.commit("LOADING",!0),u.a.get(a).then(function(t){t.data.success?(e.commit("PRODUCTSIMGURL",t.data.pagination),e.commit("GETADMINORDER",t.data.orders)):"驗證錯誤, 請重新登入"===t.data.message?(e.commit("LOADING",!0),e.dispatch("updateMessage",{message:"請重新登入Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),N.push("/login")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},updataOrders:function(e,t){var a=t.tempOrders,c=t.id,s=e.state.url.order("put",c);e.commit("LOADING",!0),u.a.put(s,{data:a}).then(function(t){t.data.success?($("#ordersModal").modal("hide"),e.dispatch("updateMessage",{message:"資料更新成功(*ゝ∀･)v",status:"success"}),e.commit("LOADING",!1),e.dispatch("getAdminOrders")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"success"}),e.commit("LOADING",!1)})},consoleAdmin:function(e){var t=e.state.url.products(),a=e.state.url.coupons(),c=e.state.url.order();e.commit("LOADING",!0),u.a.get(t).then(function(t){t.data.success?(e.commit("GETCONSOLEPRODUCTS",t.data.products),u.a.get(a).then(function(t){t.data.success&&(e.commit("GETCONSOLECOUPONS",t.data.coupons),u.a.get(c).then(function(t){t.data.success&&(e.commit("GETCONSOLEORDER",t.data.orders),e.dispatch("getChartProducts"))}))})):"驗證錯誤, 請重新登入"===t.data.message?(e.commit("LOADING",!1),N.push("/login")):e.dispatch("updateMessage",{message:"出現錯誤惹，好糗Σ( ° △ °|||)︴".concat(t.data.message),status:"danger"}),e.commit("LOADING",!1)})},getChartProducts:function(e){var t=Object(_["a"])(e.state.consoleProducts),a=[],c=[],s=[],n=[],o=[],u=[];t.forEach(function(e){switch(e.category){case"MVP卡片":a.push(e);break;case"MVP防具":c.push(e);break;case"MVP武器":s.push(e);break;case"熱門商品":n.push(e);break;case"組合優惠":o.push(e);break;default:u.push(e);break}});var r=a.length,i=c.length,d=s.length,p=n.length,m=o.length,h=u.length,l={category:"MVP卡片",length:r},g={category:"MVP防具",length:i},f={category:"MVP武器",length:d},v={category:"熱門商品",length:p},O={category:"組合優惠",length:m},b={category:"組合優惠",length:h},A=[l,g,f,v,O,b];e.commit("PUSHCHAR",A)}},getters:{adminProducts:function(e){return e.adminProducts},pagination:function(e){return e.pagination},productsImageUrl:function(e){return e.productsImageUrl},fileUploading:function(e){return e.fileUploading},adminCoupons:function(e){return e.adminCoupons},adminOrders:function(e){return e.adminOrders},consoleProducts:function(e){return e.consoleProducts},consoleCoupons:function(e){return e.consoleCoupons},consoleOrders:function(e){return e.consoleOrders},chartData:function(e){return e.chartData}}},H={strict:!0,namespace:!0,state:{messages:[]},mutations:{UPDATAMESSAGES:function(e,t){e.messages.push({message:t.message,status:t.status,timestamp:t.timestamp})},REMOVEMESSAGES:function(e,t){e.messages.splice(t,1)},REMOVEMESSAGESWITEHTIMING:function(e,t){e.messages.forEach(function(a,c){a.timestamp===t&&e.messages.splice(c,1)})}},actions:{updateMessage:function(e,t){var a=t.message,c=t.status,s=Math.floor(new Date/1e3);e.commit("UPDATAMESSAGES",{timestamp:s,message:a,status:c}),e.dispatch("removeMessageWithTiming",s)},removeMessages:function(e,t){e.commit("REMOVEMESSAGES",t)},removeMessageWithTiming:function(e,t){setTimeout(function(){e.commit("REMOVEMESSAGESWITEHTIMING",t)},5e3)}},getters:{messages:function(e){return e.messages}}};c["a"].use(T["a"]);var j=new T["a"].Store({strict:!0,state:{loadingStatus:{isLoading:!1,loadingID:""}},mutations:{LOADING:function(e,t){e.loadingStatus.isLoading=t},LOADINGID:function(e,t){e.loadingStatus.loadingID=t}},actions:{},getters:{isLoading:function(e){return e.loadingStatus.isLoading},loadingID:function(e){return e.loadingStatus.loadingID}},modules:{productsModuls:R,orderModuls:w,adminModuls:F,alertModuls:H}}),q=(a("a481"),a("c5f6"),function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,function(e,t,a){var c=t&&"."!==e&&(a.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return c}))}),V=function(e){var t=new Date(e),a=t.getFullYear(),c=t.getMonth()+1,s=t.getDate(),n="".concat(a,"/").concat(c,"/").concat(s);return n};c["a"].config.productionTip=!1,u.a.defaults.withCredentials=!0,m["c"].add(l["a"],g["a"],h["a"]),c["a"].component("font-awesome-icon",f["a"]),c["a"].use(v["default"]),c["a"].use(i.a,u.a),O["a"].localize("zh_TW",A.a),c["a"].use(O["b"],{locale:"zh_TW",events:"input|blur"}),c["a"].component("Loading",n.a),c["a"].use(D.a),c["a"].use(M.a),c["a"].filter("currency",q),c["a"].filter("timestamp",V),window.$=p.a,new c["a"]({router:N,store:j,render:function(e){return e(L)}}).$mount("#app"),N.beforeEach(function(e,t,a){if(e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");u.a.post(c).then(function(e){e.data.success?a():(j.dispatch("updateMessage",{message:"登入失敗惹Σ( ° △ °|||)︴".concat(e.data.message),status:"danger"}),a({path:"/login"}))})}else a()})},"5c0b":function(e,t,a){"use strict";var c=a("5e27"),s=a.n(c);s.a},"5e27":function(e,t,a){}});
//# sourceMappingURL=app.d9cd9e8f.js.map