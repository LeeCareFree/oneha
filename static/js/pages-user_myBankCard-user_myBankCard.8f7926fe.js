(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_myBankCard-user_myBankCard"],{"33dd":function(t,a,e){"use strict";var i=e("df7e"),c=e.n(i);c.a},"7eca":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{mainData:[],Router:this.$Router,choosedIndex:-1}},onLoad:function(t){var a=this;a.$Utils.loadAll(["getMainData"],a)},onReachBottom:function(){console.log("onReachBottom");var t=this;!t.isLoadAll&&uni.getStorageSync("loadAllArray")&&(t.paginate.currentPage++,t.getMainData())},methods:{choose:function(t){var a=this;a.choosedIndex=t,uni.setStorageSync("choosedAddressData",a.mainData[t]),console.log("choosedIndex",a.choosedIndex),uni.navigateBack({delta:1})},getMainData:function(){var t=this,a={};a.paginate=t.$Utils.cloneForm(t.$AssetsConfig.paginate),a.tokenFuncName="getProjectToken",a.getAfter={label:{tableName:"Label",middleKey:"bank",key:"id",condition:"=",searchItem:{status:1}}};var e=function(a){if(a.info.data.length>0){t.mainData.push.apply(t.mainData,a.info.data);for(var e=0;e<t.mainData.length;e++)t.mainData[e].number=t.mainData[e].number.substr(t.mainData[e].number.length-4)}else t.$Utils.showToast("没有更多了","none");t.$Utils.finishFunc("getMainData")};t.$apis.cardGet(a,e)},deleteCard:function(t){var a=this;uni.showModal({title:"提示",content:"确认是否删除这张银行卡",success:function(e){if(e.confirm){var i={searchItem:{}};i.searchItem.id=t,i.tokenFuncName="getProjectToken";var c=function(t){t&&(a.mainData=[],a.getMainData())};a.$apis.cardDelete(i,c)}else e.cancel&&console.log("用户点击取消")}})},updateCard:function(t){var a=this,e={tokenFuncName:"getProjectToken",searchItem:{}};e.searchItem.id=t,e.data={isdefault:1};var i=function(t){1e5==t.solely_code?(a.mainData=[],a.getMainData()):a.$Utils.showToast(t.msg,"none")};a.$apis.cardUpdate(e,i)}}};a.default=i},bb43:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYFJREFUeNrslL1KBDEUhZPdVRd/xspKEMEHELXVRkXQ0heYbsAXsBJFxMLGUpiBRRsrQbDRUkRbFxQEG0GtFBtxF2HcdfAEzkAIyZjF1gsfmeTenNzcZCLjOBYOGwMbYASkhq8HPIPNKIoebJMrwm0JmBXFNgzmbI6SY0I/RffBoIOaikmSJLAJSJTiEO0S+2/gi9sfABl4dCw+ysQaLEs3GKLvVJXiDkyATzBFxw0FA2KzJ/DBBcY5dg16laY0Du8STHP1lvCzLu7yCgc546px3g+EvwU2LVNYsk153UJmpGyB5FmGjEmNuYW3osmJB7wByo6I4Jjyhdh+s9N7nGeSsW1ovsyI6Uj42+i3PGJ+LcWf7V/Y6/Ck0S97xHgJV41d9Vl2WvUVLmvjJ3wD3jm2qsWpsTVwhmezYtMqORZqgzrY5rfg+1vT/MpXx5/XtpXFzPgCTIIVcOxzSMh4mZ/nRcI7YB7sEV+7BbtFwq9gEWwZL1fRAd+DdZTkRXf8CDAAwKBVhWBGG8wAAAAASUVORK5CYII="},c808:function(t,a,e){"use strict";e.r(a);var i=e("7eca"),c=e.n(i);for(var f in i)"default"!==f&&function(t){e.d(a,t,(function(){return i[t]}))}(f);a["default"]=c.a},c8fb:function(t,a,e){"use strict";e.r(a);var i=e("d7bc"),c=e("c808");for(var f in c)"default"!==f&&function(t){e.d(a,t,(function(){return c[t]}))}(f);e("33dd");var n,o=e("f0c5"),d=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,"cf9c88f0",null,!1,i["a"],n);a["default"]=d.exports},d7bc:function(t,a,e){"use strict";var i,c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"pdlr4"},[t._l(t.mainData,(function(a,c){return i("div",{staticClass:"myaddress-lis boxShaow radius10"},[i("div",{staticClass:"flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.choose(c)}}},[i("img",{staticClass:"bankIcon",attrs:{src:a.label&&a.label[0]&&a.label[0].mainImg&&a.label[0].mainImg[0]?a.label[0].mainImg[0].url:""}}),i("div",{staticClass:"cont"},[i("div",{staticClass:"adrs"},[t._v(t._s(a.label&&a.label[0]?a.label[0].title:""))]),i("div",{staticClass:"name"},[t._v("**** **** **** "+t._s(a.number))])])]),i("div",{staticClass:"seltBox"},[i("div",{staticClass:"L",attrs:{"data-id":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.updateCard(a.currentTarget.dataset.id)}}},[i("img",{staticClass:"icon",attrs:{src:1==a.isdefault?"../../static/images/coupons-icon.png":"../../static/images/coupons-icon1.png"}}),t._v("默认银行卡")]),i("div",{staticClass:"R fs12"},[i("a",{staticClass:"child",attrs:{"data-id":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Router.navigateTo({route:{path:"/pages/user_myBankCard_add/user_myBankCard_add?id="+a.currentTarget.dataset.id}})}}},[i("img",{attrs:{src:e("f357"),mode:""}}),t._v("编辑")]),i("div",{staticClass:"child",attrs:{"data-id":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deleteCard(a.currentTarget.dataset.id)}}},[i("img",{attrs:{src:e("bb43"),mode:""}}),t._v("删除")])])])])})),i("div",{staticClass:"submitbtn",staticStyle:{"margin-top":"80px"}},[i("a",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Router.navigateTo({route:{path:"/pages/user_myBankCard_add/user_myBankCard_add"}})}}},[t._v("添加银行卡")])])],2)])},f=[];e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return f})),e.d(a,"a",(function(){return i}))},df7e:function(t,a,e){var i=e("f3bb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=e("4f06").default;c("b0132fe8",i,!0,{sourceMap:!1,shadowMode:!1})},f357:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAalJREFUeNqk1EsoBVEcx/GZ2y3lkUfkuWMrCxslr5WikK1IFqNQCMlKNsqGLC7dsZDIQiKFneeGlcceUbKzUvLm+9dfXdOde2c49elM/1u/+58z5xwzHA4bjCaMIA0fRuwxihV9roeFAcuyLqQQQC3WkY9XBGNIgKlhldhEA85t286SokmHt8w3KDe8jwocYhLj2Ec2SuVfE7HtI6xMwwx9VZmL6fBT6vLKj0jyGCaveYR5nOFOioQV6u9bAX0wPYRV4wCL6NDwZ8IkWD7ILN32BHx0tocltGntAf0owQJhXYZ+OS+dSdgC2h112R0zhHXTaR7PuQEfnbVHq0uY1gaxEyuwStdMOmuNspbOuhyIN7fATN1bU26dOeqGHoont8BhnY8iajUunf0a0T5KAVowrWe2GdfYdeksbmAIx+jDCda0bqMz3pYIOjZ2EdJ1rRr1JrnSMxvysmF/At91loN+jwnUYRVjPs75d6Cpu15GKV508Us83I2R40muQwnMUDIKjb8PWapUCdzAEE5xqZdoitcUjpxMOejFXFAPezKWjf+NRY6h9SXAAAEwbbbofWV7AAAAAElFTkSuQmCC"},f3bb:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";html[data-v-cf9c88f0]{color:#222;-webkit-text-size-adjust:none}body[data-v-cf9c88f0]{max-width:640px;margin:0 auto;font-size:14px;line-height:20px;font-family:微软雅黑,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,WenQuanYi Zen Hei,WenQuanYi Micro Hei}*[data-v-cf9c88f0]{margin:0;padding:0}img[data-v-cf9c88f0]{border:none;display:block}ul[data-v-cf9c88f0],li[data-v-cf9c88f0]{list-style:none}uni-button[data-v-cf9c88f0], uni-input[data-v-cf9c88f0], optgroup[data-v-cf9c88f0], option[data-v-cf9c88f0], select[data-v-cf9c88f0], uni-textarea[data-v-cf9c88f0]{font-weight:inherit;outline:0;font-family:微软雅黑}a[data-v-cf9c88f0]{text-decoration:none;outline:none ;color:#333;cursor:pointer;-webkit-tap-highlight-color:transparent}em[data-v-cf9c88f0],i[data-v-cf9c88f0]{font-style:normal}uni-button[data-v-cf9c88f0],uni-input[data-v-cf9c88f0]{border:none}uni-input[data-v-cf9c88f0], uni-button[data-v-cf9c88f0], uni-textarea[data-v-cf9c88f0]{cursor:pointer;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:transparent}uni-input[type="checkbox"][data-v-cf9c88f0]{-webkit-appearance:checkbox;-moz-appearance:checkbox;appearance:checkbox}uni-input[data-v-cf9c88f0]::-webkit-input-placeholder{color:#999}table[data-v-cf9c88f0]{display:table;border-collapse:initial;border-spacing:2px;border-color:grey;border-collapse:collapse;border-spacing:0;background-color:initial}thead[data-v-cf9c88f0]{display:table-header-group;vertical-align:middle;border-color:inherit}tbody[data-v-cf9c88f0]{display:table-row-group;vertical-align:middle;border-color:inherit}h1[data-v-cf9c88f0],h2[data-v-cf9c88f0],h3[data-v-cf9c88f0],h4[data-v-cf9c88f0],h5[data-v-cf9c88f0],h6[data-v-cf9c88f0]{font-size:100%}\r\n/* 背景色 */.bggrey[data-v-cf9c88f0]{background:#eee}.bgwhite[data-v-cf9c88f0]{background:#fff}.bj-Tblue[data-v-cf9c88f0]{background-color:#dff4ff}.bj-gray[data-v-cf9c88f0]{background:#f5f5f5}.boxShaow[data-v-cf9c88f0]{box-shadow:0 0 8px rgba(0,0,0,.1)}.radius10[data-v-cf9c88f0]{border-radius:10px}\r\n/*头部标题*/.T-head[data-v-cf9c88f0]{background:#2fa0ed;color:#fff}.T-head .back-next[data-v-cf9c88f0]{display:block;left:4%;top:50%;font-size:14px;line-height:22px;color:#666;font-weight:400;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.T-head .back-next .icon[data-v-cf9c88f0]{width:10px;height:18px;display:block}.Tfix-head[data-v-cf9c88f0]{position:fixed;top:0;width:100%;left:0;z-index:10}\r\n/* 颜色 */.white[data-v-cf9c88f0]{color:#fff}.pucolor[data-v-cf9c88f0]{color:#2fa0ed}.red[data-v-cf9c88f0]{color:red}.orange[data-v-cf9c88f0]{color:#f90}.color3[data-v-cf9c88f0]{color:#333}.color6[data-v-cf9c88f0]{color:#666}.color9[data-v-cf9c88f0]{color:#999}.f5H5[data-v-cf9c88f0]{height:5px;background:#f5f5f5}.f5H10[data-v-cf9c88f0]{height:10px;background:#f5f5f5}\r\n/* 提交按钮 */.submitbtn .btn[data-v-cf9c88f0]{width:80%;height:40px;line-height:40px;text-align:center;color:#fff;background:#2fa0ed;font-size:14px;margin:0 auto 30px auto;display:block;border-radius:5px}.bordB1[data-v-cf9c88f0]{border-bottom:1px solid #eee}.bordBno[data-v-cf9c88f0]{border-bottom:none}.price[data-v-cf9c88f0]{color:#ff3b3b;font-size:15px}.price[data-v-cf9c88f0]::before{content:"￥";font-size:12px;font-weight:400}.arrowR[data-v-cf9c88f0]{width:6px;height:11px;display:block;margin-left:5px}a[data-v-cf9c88f0]:link, a[data-v-cf9c88f0]:visited{text-decoration:none;outline:none}.clearfix[data-v-cf9c88f0]:after{clear:both;display:block;content:"";height:0;line-height:0;visibility:hidden}.clearfix[data-v-cf9c88f0]{zoom:1}.w[data-v-cf9c88f0]{width:100%}.oh[data-v-cf9c88f0]{overflow:hidden}.fl[data-v-cf9c88f0]{float:left}.fr[data-v-cf9c88f0]{float:right}.cl[data-v-cf9c88f0]{clear:both}.center[data-v-cf9c88f0]{text-align:center}.pubBtn[data-v-cf9c88f0]{width:100%;height:40px;line-height:40px;background:#2fa0ed;color:#fff;text-align:center;border-radius:30px;display:block;margin:0 auto}.black-bj[data-v-cf9c88f0]{background:#000;opacity:.5;position:fixed;left:0;top:0;right:0;bottom:0;z-index:88}.closebtn[data-v-cf9c88f0]{position:absolute;left:50%;top:-40px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:24px;height:24px;background:#fff;text-align:center;line-height:22px;cursor:pointer;border-radius:50%;box-shadow:0 0 3px #333;z-index:99;font-size:18px;color:#999}\r\n/* .closebtn i{ font-size: 18px; line-height: 28px; color: #999;} */.q-close[data-v-cf9c88f0]{position:absolute;top:0;right:0;color:#888;padding:10px;cursor:pointer}.q-close i[data-v-cf9c88f0]{font-size:20px}\r\n/* 关闭按钮 */.colseBtn[data-v-cf9c88f0]{position:absolute;top:-40px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:26px;height:26px;border-radius:50%;font-size:23px;color:#999;border:1px solid #999;line-height:24px;text-align:center;background:#fff}.h44[data-v-cf9c88f0]{height:44px}.h50[data-v-cf9c88f0]{height:50px}.h100[data-v-cf9c88f0]{height:100px}\r\n/*position*/.pr[data-v-cf9c88f0]{position:relative}.pa[data-v-cf9c88f0]{position:absolute}.fiexd[data-v-cf9c88f0]{position:fixed}.disblok[data-v-cf9c88f0]{display:block}\r\n/* Font */.ftw[data-v-cf9c88f0]{font-weight:700}.ftn[data-v-cf9c88f0]{font-weight:400}.fs10[data-v-cf9c88f0]{font-size:10px}.fs12[data-v-cf9c88f0]{font-size:12px}.fs13[data-v-cf9c88f0]{font-size:13px}.fs14[data-v-cf9c88f0]{font-size:14px}.fs15[data-v-cf9c88f0]{font-size:15px}.fs16[data-v-cf9c88f0]{font-size:16px}.fs18[data-v-cf9c88f0]{font-size:18px}.fs20[data-v-cf9c88f0]{font-size:20px}.fs22[data-v-cf9c88f0]{font-size:22px}.fs24[data-v-cf9c88f0]{font-size:24px}.fs30[data-v-cf9c88f0]{font-size:30px}.fs36[data-v-cf9c88f0]{font-size:36px}\r\n/* Spacing */.line20[data-v-cf9c88f0]{line-height:20px}.line22[data-v-cf9c88f0]{line-height:22px}.line24[data-v-cf9c88f0]{line-height:24px}.line26[data-v-cf9c88f0]{line-height:26px}.line30[data-v-cf9c88f0]{line-height:30px}.line36[data-v-cf9c88f0]{line-height:36px}.line40[data-v-cf9c88f0]{line-height:40px}.line44[data-v-cf9c88f0]{line-height:44px}.line50[data-v-cf9c88f0]{line-height:50px}\r\n/* Margin */.mg0[data-v-cf9c88f0]{margin:0 auto}.mg5[data-v-cf9c88f0]{margin:5px}.mg10[data-v-cf9c88f0]{margin:10px}.mg15[data-v-cf9c88f0]{margin:15px}.mg20[data-v-cf9c88f0]{margin:20px}.mg30[data-v-cf9c88f0]{margin:30px}.mg40[data-v-cf9c88f0]{margin:40px}.mg50[data-v-cf9c88f0]{margin:50px}.mgt5[data-v-cf9c88f0]{margin-top:5px}.mgt10[data-v-cf9c88f0]{margin-top:10px}.mgt20[data-v-cf9c88f0]{margin-top:20px}.mgt30[data-v-cf9c88f0]{margin-top:30px}.mgt40[data-v-cf9c88f0]{margin-top:40px}.mgt50[data-v-cf9c88f0]{margin-top:50px}.mgr5[data-v-cf9c88f0]{margin-right:5px}.mgr10[data-v-cf9c88f0]{margin-right:10px}.mgr15[data-v-cf9c88f0]{margin-right:15px}.mgr20[data-v-cf9c88f0]{margin-right:20px}.mgr30[data-v-cf9c88f0]{margin-right:30px}.mgr40[data-v-cf9c88f0]{margin-right:40px}.mgr50[data-v-cf9c88f0]{margin-right:50px}.mgl5[data-v-cf9c88f0]{margin-left:5px}.mgl10[data-v-cf9c88f0]{margin-left:10px}.mgl15[data-v-cf9c88f0]{margin-left:15px}.mgl20[data-v-cf9c88f0]{margin-left:20px}.mgl30[data-v-cf9c88f0]{margin-left:30px}.mgl40[data-v-cf9c88f0]{margin-left:40px}.mgl50[data-v-cf9c88f0]{margin-left:50px}.mgtb5[data-v-cf9c88f0]{margin:5px 0}.mgtb10[data-v-cf9c88f0]{margin:10px 0}.mgtb15[data-v-cf9c88f0]{margin:15px 0}.mgtb20[data-v-cf9c88f0]{margin:20px 0}.mgtb30[data-v-cf9c88f0]{margin:30px 0}.mgtb40[data-v-cf9c88f0]{margin:40px 0}.mgtb50[data-v-cf9c88f0]{margin:50px 0}.mglr5[data-v-cf9c88f0]{margin:0 5px}.mglr10[data-v-cf9c88f0]{margin:0 10px}.mglr15[data-v-cf9c88f0]{margin:0 15px}.mglr20[data-v-cf9c88f0]{margin:0 20px}.mglr30[data-v-cf9c88f0]{margin:0 30px}.mglr40[data-v-cf9c88f0]{margin:0 40px}.mglr50[data-v-cf9c88f0]{margin:0 50px}.mgb5[data-v-cf9c88f0]{margin-bottom:5px}.mgb10[data-v-cf9c88f0]{margin-bottom:10px}.mgb15[data-v-cf9c88f0]{margin-bottom:15px}.mgb20[data-v-cf9c88f0]{margin-bottom:20px}.mgb30[data-v-cf9c88f0]{margin-bottom:30px}.mgb40[data-v-cf9c88f0]{margin-bottom:40px}.mgb50[data-v-cf9c88f0]{margin-bottom:50px}\r\n/* Padding */.pd10[data-v-cf9c88f0]{padding:10px}.pd20[data-v-cf9c88f0]{padding:20px}.pd25[data-v-cf9c88f0]{padding:25px}.pd30[data-v-cf9c88f0]{padding:30px}.pd40[data-v-cf9c88f0]{padding:40px}.pdlr10[data-v-cf9c88f0]{padding:0 10px}.pdlr20[data-v-cf9c88f0]{padding:0 20px}.pdlr40[data-v-cf9c88f0]{padding:0 40px}.pdl8[data-v-cf9c88f0]{padding-left:8px}.pdlr4[data-v-cf9c88f0]{padding:0 4%}.mglr4[data-v-cf9c88f0]{margin:0 4%}.pdt5[data-v-cf9c88f0]{padding-top:5px}.pdt10[data-v-cf9c88f0]{padding-top:10px}.pdt15[data-v-cf9c88f0]{padding-top:15px}.pdt20[data-v-cf9c88f0]{padding-top:20px}.pdt30[data-v-cf9c88f0]{padding-top:30px}.pdt40[data-v-cf9c88f0]{padding-top:40px}.pdt50[data-v-cf9c88f0]{padding-top:50px}.pdb5[data-v-cf9c88f0]{padding-bottom:5px}.pdb10[data-v-cf9c88f0]{padding-bottom:10px}.pdb20[data-v-cf9c88f0]{padding-bottom:20px}.pdb30[data-v-cf9c88f0]{padding-bottom:30px}.pdb40[data-v-cf9c88f0]{padding-bottom:40px}.pdb50[data-v-cf9c88f0]{padding-bottom:50px}.pdl5[data-v-cf9c88f0]{padding-left:5px}.pdl10[data-v-cf9c88f0]{padding-left:10px}.pdl20[data-v-cf9c88f0]{padding-left:20px}.pdl30[data-v-cf9c88f0]{padding-left:30px}.pdl40[data-v-cf9c88f0]{padding-left:40px}.pdl50[data-v-cf9c88f0]{padding-left:50px}.pdr5[data-v-cf9c88f0]{padding-right:5px}.pdr10[data-v-cf9c88f0]{padding-right:10px}.pdr20[data-v-cf9c88f0]{padding-right:20px}.pdr30[data-v-cf9c88f0]{padding-right:30px}.pdr40[data-v-cf9c88f0]{padding-right:40px}.pdr50[data-v-cf9c88f0]{padding-right:50px}.pdtb10[data-v-cf9c88f0]{padding:10px 0}.pdtb15[data-v-cf9c88f0]{padding:15px 0}.pdtb20[data-v-cf9c88f0]{padding:20px 0}.pdtb30[data-v-cf9c88f0]{padding:30px 0}\r\n/* 行数显示省略号 */.avoidOverflow[data-v-cf9c88f0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.avoidOverflow2[data-v-cf9c88f0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:2}.avoidOverflow3[data-v-cf9c88f0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:3}.avoidOverflow4[data-v-cf9c88f0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:4}.arrowBtn[data-v-cf9c88f0]{position:absolute;width:100%;top:40%;z-index:3;left:0}.arrowBtn .btn[data-v-cf9c88f0]{width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;background:#b5b5b6;color:#fff;font-size:30px;cursor:pointer}\r\n/* 弹性盒子 */.flex1[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex}.flex[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexCenter[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexRowAround[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexRowBetween[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\r\n/* 文本详情 */.xqTex_infor p[data-v-cf9c88f0]{color:#666;font-size:13px;line-height:20px;padding-bottom:10px}.xqTex_infor img[data-v-cf9c88f0]{max-width:100%;display:block;margin:0 auto}\r\n/**\r\n * \\(^o^)/~\r\n * @authors Your Name (you@example.org)\r\n * @date    2019-10-9 11:19:16\r\n * @version $Id$\r\n */.agentMsg[data-v-cf9c88f0]{margin:15px 0;position:relative}.agentMsg uni-textarea[data-v-cf9c88f0]{display:block;padding:10px;background:#f5f5f5;width:100%;height:80px;font-size:12px;border:none;box-sizing:border-box}.agentMsg .btn[data-v-cf9c88f0]{position:absolute;top:20px;right:26px;width:38px;height:38px;line-height:38px;text-align:center;color:#fff;background:#2fa0ed;border-radius:50%;font-size:12px}.agentMsg .proNav[data-v-cf9c88f0]{overflow-x:scroll;margin-top:15px;width:100%}.agentMsg .proNav ul[data-v-cf9c88f0]{width:200%}.agentMsg .proNav li[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:12px;text-align:center;float:left;margin-right:35px;width:50px;margin-right:10px}.agentMsg .proNav li .icon[data-v-cf9c88f0]{width:20px;height:20px;margin:0 auto 3px auto;-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:gray(100%);filter:gray(100%)}.agentMsg .proNav li.on .icon[data-v-cf9c88f0]{-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0);filter:grayscale(0);-webkit-filter:gray(0);filter:gray(0)}\r\n/* 取送件信息详情 */.lineMsg[data-v-cf9c88f0]{padding:15px 4%}.qsCotMsg .left[data-v-cf9c88f0]{width:15%}.qsCotMsg .note[data-v-cf9c88f0]{width:30px;height:30px;border:1px solid #e1e1e1;font-size:12px;text-align:center;line-height:30px;border-radius:50%;margin:0 auto;display:block}.qsCotMsg .note.qu[data-v-cf9c88f0]{color:#094;border-color:#094}.qsCotMsg .note.shou[data-v-cf9c88f0]{color:#f01a1c;border-color:#f01a1c}.qsCotMsg .cont[data-v-cf9c88f0]{width:85%;padding:20px 0;padding-right:4%;box-sizing:border-box}.qsCotMsg .cont .infor[data-v-cf9c88f0]{width:60%;padding-right:10px;box-sizing:border-box}.qsCotMsg .cont .phone[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.qsCotMsg .cont .phone p[data-v-cf9c88f0]{margin-right:10px}.dian3[data-v-cf9c88f0]{width:4px;height:20px;position:absolute;top:50%;left:7%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:block}.qsLineinfor li[data-v-cf9c88f0]{padding:15px 4%;border-bottom:1px solid #eee}.qsLineinfor li .left[data-v-cf9c88f0]{width:35%;font-size:13px}.qsLineinfor .right[data-v-cf9c88f0]{width:65%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center ;-webkit-align-items:center ;align-items:center ;color:#999;font-size:12px}.qsLineinfor .right uni-input[data-v-cf9c88f0]{display:block;width:80%;text-align:right}.qsLineinfor .right uni-input[data-v-cf9c88f0]::-webkit-input-placeholder{color:#999}.qusUnderFix[data-v-cf9c88f0]{position:fixed;bottom:0;left:0;width:100%;box-sizing:border-box;background:#fff;box-shadow:0 -2px 5px hsla(0,0%,57.3%,.1)}.qusUnderFix .left[data-v-cf9c88f0]{width:60%;padding:0 4%;box-sizing:border-box}.qusUnderFix .left .price[data-v-cf9c88f0]{font-size:16px}.qusUnderFix .right[data-v-cf9c88f0]{width:40%;line-height:45px;height:45px;background:#2fa0ed;text-align:center;font-size:15px;color:#fff}\r\n/* 弹框固定内容 */.qjAlertCont[data-v-cf9c88f0]{position:fixed;bottom:0;left:0;width:100%;background:#fff;z-index:90}\r\n/* 选择优惠券弹框 */.couponShow .infor[data-v-cf9c88f0]{height:160px;overflow-y:auto}.couponShow li[data-v-cf9c88f0]{padding:15px 4% 0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.couponShow li .setIcon[data-v-cf9c88f0]{width:10%;width:20px;height:20px;display:block}\r\n/* 物品保价弹框 */.baojiaShow .edit[data-v-cf9c88f0]{padding-bottom:5px}.baojiaShow .edit[data-v-cf9c88f0]::before{content:"￥";font-size:12px;margin-right:5px}.baojiaShow .edit uni-input[data-v-cf9c88f0]{font-size:16px;width:60%;display:inline-block}.baojiaShow .edit uni-input[data-v-cf9c88f0]::-webkit-input-placeholder{font-size:14px}.baojiaShow .setIcon[data-v-cf9c88f0]{width:16px;height:16px;display:block;margin-right:5px}\r\n/* 小费弹框 */.tippingShow .wpMsgBox[data-v-cf9c88f0]{padding-bottom:30px}.tippingShow .wpMsgBox .item[data-v-cf9c88f0]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.tippingShow .wpMsgBox .item span[data-v-cf9c88f0]{width:30%;display:block;line-height:28px;border:1px solid #eee;text-align:center;margin-bottom:10px}.tippingShow .wpMsgBox .item span[data-v-cf9c88f0]:last-child{width:100%;margin-right:0}.tippingShow .wpMsgBox .item span.on[data-v-cf9c88f0]{border-color:#2fa0ed;color:#2fa0ed}\r\n/* 取件时间 */.accessShow .setData[data-v-cf9c88f0]{max-height:150px;overflow-y:auto}.accessShow .setData li[data-v-cf9c88f0]{padding:10px 10%;border-bottom:1px solid #eee}.accessShow .setData li span[data-v-cf9c88f0]{width:33.3%}.accessShow .setData li .seltBtn[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.accessShow .setData li .seltBtn img[data-v-cf9c88f0]{width:20px;height:20px;display:block}\r\n/* 费用明细 */.moneyMxShow .list li[data-v-cf9c88f0]{padding:10px 0;font-size:13px}.moneyMxShow .list li em[data-v-cf9c88f0]{margin-left:5px}\r\n/* 代买 */.qsLineinfor .liContbox2[data-v-cf9c88f0]{border-bottom:none;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding-bottom:0}.qsLineinfor .liContbox2 .left[data-v-cf9c88f0]{width:15%}.qsLineinfor .liContbox2 .right[data-v-cf9c88f0]{width:85%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:15px}.qsLineinfor .liContbox2 .right uni-input[data-v-cf9c88f0]{text-align:left}.liContbox2 .smallnav[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;width:100%;color:#333}.liContbox2 .smallnav span[data-v-cf9c88f0]{line-height:30px;padding:0 10px;border:1px solid #e1e1e1;text-align:center}.liContbox2 .smallnav span.on[data-v-cf9c88f0]{background:#e3f1ff;border-color:#2fa0ed}\r\n/* 点击弹框 */.agreeSel[data-v-cf9c88f0]{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:12px}.agreeSel .selt[data-v-cf9c88f0]{width:16px;height:16px}.agreeSel .selt uni-image[data-v-cf9c88f0]{width:100%;height:100%;display:block}.xieyiAlert[data-v-cf9c88f0]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0;z-index:999}.xieyiAlert .infor[data-v-cf9c88f0]{width:90%;height:80%;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;box-sizing:border-box;padding:15px 15px 70px 15px;z-index:1000;font-size:14px;color:#555}.xieyiAlert .infor .cont[data-v-cf9c88f0]{line-height:22px;height:100%;width:100%;overflow-y:auto}.xieyiAlert .infor .cont uni-view[data-v-cf9c88f0]{padding-bottom:10px}.myaddress-lis[data-v-cf9c88f0]{padding:15px;margin-bottom:10px;background:#fff;margin-bottom:15px;border-radius:5px;margin-top:15px}.myaddress-lis .name[data-v-cf9c88f0]{color:#222;padding:5px 0}.myaddress-lis .adrs[data-v-cf9c88f0]{font-size:13px;color:#999;line-height:20px}.seltBox[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:5px}.seltBox .L[data-v-cf9c88f0]{width:30%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:12px;color:#999}.seltBox .L .icon[data-v-cf9c88f0]{width:15px;height:15px;display:inline-block;margin-right:5px}.seltBox .R[data-v-cf9c88f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:70%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.seltBox .R .child[data-v-cf9c88f0]{margin-left:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:12px;color:#999;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.seltBox .R img[data-v-cf9c88f0]{width:15px;height:15px;display:block;margin-right:4px}.bankIcon[data-v-cf9c88f0]{width:35px;height:35px;display:block;margin-right:10px}.btnB[data-v-cf9c88f0]{width:60%;margin:0 auto}.btnB div[data-v-cf9c88f0]{width:50px;line-height:25px;height:25px;border-radius:15px;border:1px solid #626262}.btnB div.on[data-v-cf9c88f0]{background:#2fa0ed;color:#fff;border-color:#2fa0ed}',""]),t.exports=a}}]);