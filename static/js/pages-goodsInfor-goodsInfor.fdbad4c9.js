(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodsInfor-goodsInfor"],{"0d19":function(a,t,e){"use strict";e("c975"),e("a15b"),e("a9e3"),e("b680"),e("d3b7"),e("acd8"),e("e25e"),e("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=uni.getSystemInfoSync().windowWidth,d={data:function(){return{MAX_LENGTH:294,maxBlockLeft:300,minBlockLeft:0,progressBarLeft:0,progressBarWidth:350}},components:{},props:{width:{type:Number,default:750},height:{type:Number,default:100},blockSize:{type:Number,default:50},barHeight:{type:Number,default:5},backgroundColor:{type:String,default:"#e9e9e9"},activeColor:{type:String,default:"#1aad19"},min:{type:Number,default:0},max:{type:Number,default:100},values:{type:Array,default:function(){return[0,100]}},step:{type:Number,default:1},liveMode:{type:Boolean,default:!0}},created:function(){this._refresh()},onLoad:function(a){this._refresh()},onUnload:function(){},watch:{width:function(a,t,e){var i=this;a!=i.width&&this._refresh()},blockSize:function(a,t,e){var i=this;a!=i.blockSize&&this._refresh()},min:function(a,t,e){var i=this;a!=i.min&&i._refresh()},max:function(a,t,e){var i=this;a!=i.max&&i._refresh()},values:function(a,t,e){var i=this,d=i.values;i._isValuesValid(a)&&i._isValuesValid(d)&&(d[0]==t[0]&&d[1]==t[1]||i._refresh())}},methods:{_pad:function(a,t){return Array(t-(""+a).length+1).join(0)+a},_pxToRpx:function(a){return 750*a/i},_onBlockTouchStart:function(a){var t=a.target.dataset.tag;"minBlock"!=t&&"maxBlock"!=t||(a.hasOwnProperty("changedTouches")?this._blockDownX=a.changedTouches[0].pageX:this._blockDownX=a.pageX,this._blockLeft=parseFloat(a.target.dataset.left),this._curBlock=a.target.dataset.tag)},_onBlockTouchMove:function(a){var t=a.target.dataset.tag;if("minBlock"==t||"maxBlock"==t){var e=this,i=e._calculateValues(a);e._refreshProgressBar(i[2],i[3]),e._refreshBlock(i[2],i[3]);var d={minValue:this.formatNumber(i[0],this.step),maxValue:this.formatNumber(i[1],this.step),fromUser:!0,originalValue:{minValue:i[0],maxValue:i[1]}},o={};this.liveMode&&e.$emit("rangechange",d,o)}},_onBlockTouchEnd:function(a){var t=a.target.dataset.tag;if("minBlock"==t||"maxBlock"==t){var e=this,i=e._calculateValues(a.mp.changedTouches[0]);e._refreshProgressBar(i[2],i[3]),e._refreshBlock(i[2],i[3]);var d={minValue:this.formatNumber(i[0],this.step),maxValue:this.formatNumber(i[1],this.step),fromUser:!0,originalValue:{minValue:i[0],maxValue:i[1]}},o={};e.$emit("rangechange",d,o)}},_isValuesValid:function(a){return null!=a&&void 0!=a&&2==a.length},_calculateValues:function(a){var t=a.pageX;a.hasOwnProperty("changedTouches")&&(t=a.changedTouches[0].pageX);var e=this,i=t-e._blockDownX;console.log(t,e._blockDownX,e.minBlockLeft);var d=e._blockLeft+e._pxToRpx(i);d=Math.max(0,d),d=Math.min(d,e.MAX_LENGTH);var o=e.minBlockLeft,n=e.maxBlockLeft;"minBlock"==e._curBlock?o=d:n=d;var r=e.max-e.min,l=Math.min(o,n),f=Math.max(o,n),s=l/e.MAX_LENGTH*r+e.min,p=f/e.MAX_LENGTH*r+e.min;return[s,p,l,f]},_calculateBlockLeft:function(a,t){var e=this,i=(e.blockSize,e.max-e.min),d=((a-e.min)/i-e.min)*e.MAX_LENGTH;d=Math.max(d,0);var o=(t-e.min)/i*e.MAX_LENGTH;return[d,o]},_refreshProgressBar:function(a,t){var e=this;e.blockSize;e.progressBarLeft=0,e.progressBarWidth=Math.abs(t-a)},_refreshBlock:function(a,t){var e=this;e.minBlockLeft=a,e.maxBlockLeft=t},_refresh:function(){console.log("refresh");var a=this,t=a.width-a.blockSize;a.MAX_LENGTH=t,a.maxBlockLeft=t,a.progressBarWidth=t;var e=a.values;if(a._isValuesValid(e)){e[0]=Math.max(a.min,e[0]),e[0]=Math.min(e[0],a.max),e[1]=Math.max(a.min,e[1]),e[1]=Math.min(e[1],a.max);var i=a._calculateBlockLeft(e[0],e[1]);a._refreshProgressBar(i[0],i[1]),a._refreshBlock(i[0],i[1])}},formatNumber:function(a,t){var e=""+t,i=e.indexOf("."),d=i>-1?e.length-i-1:0,o=.1*parseInt(1+Array((""+d).length+1).join(0)),n=a*o;return(parseInt(n/t+.5*t)*t/o).toFixed(d)}}};t.default=d},"10f3":function(a,t,e){"use strict";var i=e("ee27");e("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=i(e("3b5b")),o={data:function(){return{minValue:0,maxValue:24,rangeValues:[0,0],slideWidth:500,slideHeight:80,slideBlockSize:56,slideMin:0,slideMax:20,rangeValues2:[0,10],serTime:"00:00:00-10:00:00",time:"13.5小时",step:.1,isLiveMode:!0,Router:this.$Router,is_show:!1,info:{},mainData:[{title:"粮食"},{title:"蔬菜"},{title:"水果"},{title:"花卉"},{title:"茶叶"},{title:"药用"},{title:"肉类"},{title:"蛋类"},{title:"其他"}],moneyDate:["50元以下","50-150元","150-300元","300-1000元","1000-1500元","1500以上"],seltCurr:0,seltCurrTwo:0,name:"",getBefore:{caseData:{tableName:"Label",searchItem:{title:["=",["取件"]]},middleKey:"category_id",key:"id",condition:"in"}},type:1}},components:{RangeSlider:d.default},onLoad:function(a){var t=this;t.name=a.name,console.log(t.name),"sdGoodsInfo"==t.name&&(t.getBefore={caseData:{tableName:"Label",searchItem:{title:["=",["当日达"]]},middleKey:"category_id",key:"id",condition:"in"}},t.type=4)},onShow:function(){var a=this;console.log(a.info)},methods:{onRangeChange:function(a){var t=this;this.rangeValues=[a.minValue,a.maxValue],t.info.weight=parseFloat(a.maxValue)+5,console.log(this.rangeValues)},getMainData:function(){var a=this,t={};t.searchItem={thirdapp_id:2,city_id:uni.getStorageSync("city_id")},t.getBefore=a.$Utils.cloneForm(a.getBefore),t.getAfter={param2:{tableName:"Param",middleKey:"status",key:"status",searchItem:{city_id:uni.getStorageSync("city_id"),fee_type:2,type:a.type},condition:"=",order:{weight:"asc"}}};var e=function(t){t.info.data.length>0?(a.mainData.push.apply(a.mainData,t.info.data),a.info=a.mainData[0],a.info.value=a.moneyDate[0],a.info.weight=5):a.$Utils.showToast("没有更多了","none"),console.log("self.mainData",a.mainData),a.$Utils.finishFunc("getMainData")};a.$apis.productGet(t,e)},seltSpecs:function(a){var t=this;t.seltCurr=a,t.info=t.mainData[t.seltCurr],t.info.value=t.moneyDate[0],t.rangeValues=[0,0],t.info.weight=5},seltSpecsTwo:function(a){var t=this;t.seltCurrTwo=a,t.info.value=t.moneyDate[t.seltCurrTwo]},submit:function(){var a=this;console.log(213),"{}"!=JSON.stringify(a.info)?a.info.weight?(uni.setStorageSync(a.name,a.info),"goodsInfo"==a.name?a.Router.navigateTo({route:{path:"/pages/order_qusong/order_qusong"}}):"sdGoodsInfo"==a.name&&a.Router.navigateTo({route:{path:"/pages/order_sameDay/order_sameDay"}})):a.$Utils.showToast("请选择重量","none"):a.$Utils.showToast("无物品类型","none")}}};t.default=o},1457:function(a,t,e){var i=e("8b91");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var d=e("4f06").default;d("5a9e1534",i,!0,{sourceMap:!1,shadowMode:!1})},"3b5b":function(a,t,e){"use strict";e.r(t);var i=e("6c6d"),d=e("929a");for(var o in d)"default"!==o&&function(a){e.d(t,a,(function(){return d[a]}))}(o);e("8281");var n,r=e("f0c5"),l=Object(r["a"])(d["default"],i["b"],i["c"],!1,null,"4b8179b2",null,!1,i["a"],n);t["default"]=l.exports},"6c6d":function(a,t,e){"use strict";var i,d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"range-slider",style:"width:"+a.width+"rpx;height:"+a.height+"rpx"},[e("v-uni-view",{staticClass:"range-bar",style:"width:100%;height:"+a.barHeight+"rpx"},[e("v-uni-view",{staticClass:"range-bar-bg",style:"background-color:"+a.backgroundColor}),e("v-uni-view",{staticClass:"range-bar-progress",style:"margin-left:"+a.progressBarLeft+"rpx;width:"+a.progressBarWidth+"rpx;background-color:"+a.activeColor})],1),e("v-uni-view",{staticClass:"block",style:"width:"+a.blockSize+"rpx;height:"+a.blockSize+"rpx;margin-left:"+a.maxBlockLeft+"rpx;",attrs:{"data-left":a.maxBlockLeft,"data-tag":"maxBlock"},on:{touchstart:function(t){arguments[0]=t=a.$handleEvent(t),a._onBlockTouchStart.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a._onBlockTouchMove.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=a.$handleEvent(t),a._onBlockTouchEnd.apply(void 0,arguments)}}},[a._t("maxBlock")],2)],1)},o=[];e.d(t,"b",(function(){return d})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},"6ca0":function(a,t,e){"use strict";e.r(t);var i=e("10f3"),d=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);t["default"]=d.a},"79f9":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,".range-slider[data-v-4b8179b2]{position:relative}.range-bar[data-v-4b8179b2]{position:absolute}.range-bar[data-v-4b8179b2]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:%?10000?%}.range-bar-bg[data-v-4b8179b2]{position:absolute;width:100%;height:100%;border-radius:%?10000?%}.range-bar-progress[data-v-4b8179b2]{position:absolute;width:100%;height:100%;background-color:#8a2be2}.block[data-v-4b8179b2]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:#fff;border-radius:50%;box-shadow:%?0?% %?0?% %?6?% #ccc}",""]),a.exports=t},8281:function(a,t,e){"use strict";var i=e("8617"),d=e.n(i);d.a},8617:function(a,t,e){var i=e("79f9");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var d=e("4f06").default;d("027311dd",i,!0,{sourceMap:!1,shadowMode:!1})},"89c5":function(a,t,e){"use strict";var i=e("1457"),d=e.n(i);d.a},"8b91":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";html[data-v-7a8f09d2]{color:#222;-webkit-text-size-adjust:none}body[data-v-7a8f09d2]{max-width:640px;margin:0 auto;font-size:14px;line-height:20px;font-family:微软雅黑,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,WenQuanYi Zen Hei,WenQuanYi Micro Hei}*[data-v-7a8f09d2]{margin:0;padding:0}img[data-v-7a8f09d2]{border:none;display:block}ul[data-v-7a8f09d2],li[data-v-7a8f09d2]{list-style:none}uni-button[data-v-7a8f09d2], uni-input[data-v-7a8f09d2], optgroup[data-v-7a8f09d2], option[data-v-7a8f09d2], select[data-v-7a8f09d2], uni-textarea[data-v-7a8f09d2]{font-weight:inherit;outline:0;font-family:微软雅黑}a[data-v-7a8f09d2]{text-decoration:none;outline:none ;color:#333;cursor:pointer;-webkit-tap-highlight-color:transparent}em[data-v-7a8f09d2],i[data-v-7a8f09d2]{font-style:normal}uni-button[data-v-7a8f09d2],uni-input[data-v-7a8f09d2]{border:none}uni-input[data-v-7a8f09d2], uni-button[data-v-7a8f09d2], uni-textarea[data-v-7a8f09d2]{cursor:pointer;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:transparent}uni-input[type="checkbox"][data-v-7a8f09d2]{-webkit-appearance:checkbox;-moz-appearance:checkbox;appearance:checkbox}uni-input[data-v-7a8f09d2]::-webkit-input-placeholder{color:#999}table[data-v-7a8f09d2]{display:table;border-collapse:initial;border-spacing:2px;border-color:grey;border-collapse:collapse;border-spacing:0;background-color:initial}thead[data-v-7a8f09d2]{display:table-header-group;vertical-align:middle;border-color:inherit}tbody[data-v-7a8f09d2]{display:table-row-group;vertical-align:middle;border-color:inherit}h1[data-v-7a8f09d2],h2[data-v-7a8f09d2],h3[data-v-7a8f09d2],h4[data-v-7a8f09d2],h5[data-v-7a8f09d2],h6[data-v-7a8f09d2]{font-size:100%}\r\n/* 背景色 */.bggrey[data-v-7a8f09d2]{background:#eee}.bgwhite[data-v-7a8f09d2]{background:#fff}.bj-Tblue[data-v-7a8f09d2]{background-color:#dff4ff}.bj-gray[data-v-7a8f09d2]{background:#f5f5f5}.boxShaow[data-v-7a8f09d2]{box-shadow:0 0 8px rgba(0,0,0,.1)}.radius10[data-v-7a8f09d2]{border-radius:10px}\r\n/*头部标题*/.T-head[data-v-7a8f09d2]{background:#2fa0ed;color:#fff}.T-head .back-next[data-v-7a8f09d2]{display:block;left:4%;top:50%;font-size:14px;line-height:22px;color:#666;font-weight:400;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.T-head .back-next .icon[data-v-7a8f09d2]{width:10px;height:18px;display:block}.Tfix-head[data-v-7a8f09d2]{position:fixed;top:0;width:100%;left:0;z-index:10}\r\n/* 颜色 */.white[data-v-7a8f09d2]{color:#fff}.pucolor[data-v-7a8f09d2]{color:#2fa0ed}.red[data-v-7a8f09d2]{color:red}.orange[data-v-7a8f09d2]{color:#f90}.color3[data-v-7a8f09d2]{color:#333}.color6[data-v-7a8f09d2]{color:#666}.color9[data-v-7a8f09d2]{color:#999}.f5H5[data-v-7a8f09d2]{height:5px;background:#f5f5f5}.f5H10[data-v-7a8f09d2]{height:10px;background:#f5f5f5}\r\n/* 提交按钮 */.submitbtn .btn[data-v-7a8f09d2]{width:80%;height:40px;line-height:40px;text-align:center;color:#fff;background:#2fa0ed;font-size:14px;margin:0 auto 30px auto;display:block;border-radius:5px}.bordB1[data-v-7a8f09d2]{border-bottom:1px solid #eee}.bordBno[data-v-7a8f09d2]{border-bottom:none}.price[data-v-7a8f09d2]{color:#ff3b3b;font-size:15px}.price[data-v-7a8f09d2]::before{content:"￥";font-size:12px;font-weight:400}.arrowR[data-v-7a8f09d2]{width:6px;height:11px;display:block;margin-left:5px}a[data-v-7a8f09d2]:link, a[data-v-7a8f09d2]:visited{text-decoration:none;outline:none}.clearfix[data-v-7a8f09d2]:after{clear:both;display:block;content:"";height:0;line-height:0;visibility:hidden}.clearfix[data-v-7a8f09d2]{zoom:1}.w[data-v-7a8f09d2]{width:100%}.oh[data-v-7a8f09d2]{overflow:hidden}.fl[data-v-7a8f09d2]{float:left}.fr[data-v-7a8f09d2]{float:right}.cl[data-v-7a8f09d2]{clear:both}.center[data-v-7a8f09d2]{text-align:center}.pubBtn[data-v-7a8f09d2]{width:100%;height:40px;line-height:40px;background:#2fa0ed;color:#fff;text-align:center;border-radius:30px;display:block;margin:0 auto}.black-bj[data-v-7a8f09d2]{background:#000;opacity:.5;position:fixed;left:0;top:0;right:0;bottom:0;z-index:88}.closebtn[data-v-7a8f09d2]{position:absolute;left:50%;top:-40px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:24px;height:24px;background:#fff;text-align:center;line-height:22px;cursor:pointer;border-radius:50%;box-shadow:0 0 3px #333;z-index:99;font-size:18px;color:#999}\r\n/* .closebtn i{ font-size: 18px; line-height: 28px; color: #999;} */.q-close[data-v-7a8f09d2]{position:absolute;top:0;right:0;color:#888;padding:10px;cursor:pointer}.q-close i[data-v-7a8f09d2]{font-size:20px}\r\n/* 关闭按钮 */.colseBtn[data-v-7a8f09d2]{position:absolute;top:-40px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:26px;height:26px;border-radius:50%;font-size:23px;color:#999;border:1px solid #999;line-height:24px;text-align:center;background:#fff}.h44[data-v-7a8f09d2]{height:44px}.h50[data-v-7a8f09d2]{height:50px}.h100[data-v-7a8f09d2]{height:100px}\r\n/*position*/.pr[data-v-7a8f09d2]{position:relative}.pa[data-v-7a8f09d2]{position:absolute}.fiexd[data-v-7a8f09d2]{position:fixed}.disblok[data-v-7a8f09d2]{display:block}\r\n/* Font */.ftw[data-v-7a8f09d2]{font-weight:700}.ftn[data-v-7a8f09d2]{font-weight:400}.fs10[data-v-7a8f09d2]{font-size:10px}.fs12[data-v-7a8f09d2]{font-size:12px}.fs13[data-v-7a8f09d2]{font-size:13px}.fs14[data-v-7a8f09d2]{font-size:14px}.fs15[data-v-7a8f09d2]{font-size:15px}.fs16[data-v-7a8f09d2]{font-size:16px}.fs18[data-v-7a8f09d2]{font-size:18px}.fs20[data-v-7a8f09d2]{font-size:20px}.fs22[data-v-7a8f09d2]{font-size:22px}.fs24[data-v-7a8f09d2]{font-size:24px}.fs30[data-v-7a8f09d2]{font-size:30px}.fs36[data-v-7a8f09d2]{font-size:36px}\r\n/* Spacing */.line20[data-v-7a8f09d2]{line-height:20px}.line22[data-v-7a8f09d2]{line-height:22px}.line24[data-v-7a8f09d2]{line-height:24px}.line26[data-v-7a8f09d2]{line-height:26px}.line30[data-v-7a8f09d2]{line-height:30px}.line36[data-v-7a8f09d2]{line-height:36px}.line40[data-v-7a8f09d2]{line-height:40px}.line44[data-v-7a8f09d2]{line-height:44px}.line50[data-v-7a8f09d2]{line-height:50px}\r\n/* Margin */.mg0[data-v-7a8f09d2]{margin:0 auto}.mg5[data-v-7a8f09d2]{margin:5px}.mg10[data-v-7a8f09d2]{margin:10px}.mg15[data-v-7a8f09d2]{margin:15px}.mg20[data-v-7a8f09d2]{margin:20px}.mg30[data-v-7a8f09d2]{margin:30px}.mg40[data-v-7a8f09d2]{margin:40px}.mg50[data-v-7a8f09d2]{margin:50px}.mgt5[data-v-7a8f09d2]{margin-top:5px}.mgt10[data-v-7a8f09d2]{margin-top:10px}.mgt20[data-v-7a8f09d2]{margin-top:20px}.mgt30[data-v-7a8f09d2]{margin-top:30px}.mgt40[data-v-7a8f09d2]{margin-top:40px}.mgt50[data-v-7a8f09d2]{margin-top:50px}.mgr5[data-v-7a8f09d2]{margin-right:5px}.mgr10[data-v-7a8f09d2]{margin-right:10px}.mgr15[data-v-7a8f09d2]{margin-right:15px}.mgr20[data-v-7a8f09d2]{margin-right:20px}.mgr30[data-v-7a8f09d2]{margin-right:30px}.mgr40[data-v-7a8f09d2]{margin-right:40px}.mgr50[data-v-7a8f09d2]{margin-right:50px}.mgl5[data-v-7a8f09d2]{margin-left:5px}.mgl10[data-v-7a8f09d2]{margin-left:10px}.mgl15[data-v-7a8f09d2]{margin-left:15px}.mgl20[data-v-7a8f09d2]{margin-left:20px}.mgl30[data-v-7a8f09d2]{margin-left:30px}.mgl40[data-v-7a8f09d2]{margin-left:40px}.mgl50[data-v-7a8f09d2]{margin-left:50px}.mgtb5[data-v-7a8f09d2]{margin:5px 0}.mgtb10[data-v-7a8f09d2]{margin:10px 0}.mgtb15[data-v-7a8f09d2]{margin:15px 0}.mgtb20[data-v-7a8f09d2]{margin:20px 0}.mgtb30[data-v-7a8f09d2]{margin:30px 0}.mgtb40[data-v-7a8f09d2]{margin:40px 0}.mgtb50[data-v-7a8f09d2]{margin:50px 0}.mglr5[data-v-7a8f09d2]{margin:0 5px}.mglr10[data-v-7a8f09d2]{margin:0 10px}.mglr15[data-v-7a8f09d2]{margin:0 15px}.mglr20[data-v-7a8f09d2]{margin:0 20px}.mglr30[data-v-7a8f09d2]{margin:0 30px}.mglr40[data-v-7a8f09d2]{margin:0 40px}.mglr50[data-v-7a8f09d2]{margin:0 50px}.mgb5[data-v-7a8f09d2]{margin-bottom:5px}.mgb10[data-v-7a8f09d2]{margin-bottom:10px}.mgb15[data-v-7a8f09d2]{margin-bottom:15px}.mgb20[data-v-7a8f09d2]{margin-bottom:20px}.mgb30[data-v-7a8f09d2]{margin-bottom:30px}.mgb40[data-v-7a8f09d2]{margin-bottom:40px}.mgb50[data-v-7a8f09d2]{margin-bottom:50px}\r\n/* Padding */.pd10[data-v-7a8f09d2]{padding:10px}.pd20[data-v-7a8f09d2]{padding:20px}.pd25[data-v-7a8f09d2]{padding:25px}.pd30[data-v-7a8f09d2]{padding:30px}.pd40[data-v-7a8f09d2]{padding:40px}.pdlr10[data-v-7a8f09d2]{padding:0 10px}.pdlr20[data-v-7a8f09d2]{padding:0 20px}.pdlr40[data-v-7a8f09d2]{padding:0 40px}.pdl8[data-v-7a8f09d2]{padding-left:8px}.pdlr4[data-v-7a8f09d2]{padding:0 4%}.mglr4[data-v-7a8f09d2]{margin:0 4%}.pdt5[data-v-7a8f09d2]{padding-top:5px}.pdt10[data-v-7a8f09d2]{padding-top:10px}.pdt15[data-v-7a8f09d2]{padding-top:15px}.pdt20[data-v-7a8f09d2]{padding-top:20px}.pdt30[data-v-7a8f09d2]{padding-top:30px}.pdt40[data-v-7a8f09d2]{padding-top:40px}.pdt50[data-v-7a8f09d2]{padding-top:50px}.pdb5[data-v-7a8f09d2]{padding-bottom:5px}.pdb10[data-v-7a8f09d2]{padding-bottom:10px}.pdb20[data-v-7a8f09d2]{padding-bottom:20px}.pdb30[data-v-7a8f09d2]{padding-bottom:30px}.pdb40[data-v-7a8f09d2]{padding-bottom:40px}.pdb50[data-v-7a8f09d2]{padding-bottom:50px}.pdl5[data-v-7a8f09d2]{padding-left:5px}.pdl10[data-v-7a8f09d2]{padding-left:10px}.pdl20[data-v-7a8f09d2]{padding-left:20px}.pdl30[data-v-7a8f09d2]{padding-left:30px}.pdl40[data-v-7a8f09d2]{padding-left:40px}.pdl50[data-v-7a8f09d2]{padding-left:50px}.pdr5[data-v-7a8f09d2]{padding-right:5px}.pdr10[data-v-7a8f09d2]{padding-right:10px}.pdr20[data-v-7a8f09d2]{padding-right:20px}.pdr30[data-v-7a8f09d2]{padding-right:30px}.pdr40[data-v-7a8f09d2]{padding-right:40px}.pdr50[data-v-7a8f09d2]{padding-right:50px}.pdtb10[data-v-7a8f09d2]{padding:10px 0}.pdtb15[data-v-7a8f09d2]{padding:15px 0}.pdtb20[data-v-7a8f09d2]{padding:20px 0}.pdtb30[data-v-7a8f09d2]{padding:30px 0}\r\n/* 行数显示省略号 */.avoidOverflow[data-v-7a8f09d2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.avoidOverflow2[data-v-7a8f09d2]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:2}.avoidOverflow3[data-v-7a8f09d2]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:3}.avoidOverflow4[data-v-7a8f09d2]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:4}.arrowBtn[data-v-7a8f09d2]{position:absolute;width:100%;top:40%;z-index:3;left:0}.arrowBtn .btn[data-v-7a8f09d2]{width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;background:#b5b5b6;color:#fff;font-size:30px;cursor:pointer}\r\n/* 弹性盒子 */.flex1[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex}.flex[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexCenter[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexRowAround[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexRowBetween[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\r\n/* 文本详情 */.xqTex_infor p[data-v-7a8f09d2]{color:#666;font-size:13px;line-height:20px;padding-bottom:10px}.xqTex_infor img[data-v-7a8f09d2]{max-width:100%;display:block;margin:0 auto}\r\n/**\r\n * \\(^o^)/~\r\n * @authors Your Name (you@example.org)\r\n * @date    2019-10-9 11:19:16\r\n * @version $Id$\r\n */.agentMsg[data-v-7a8f09d2]{margin:15px 0;position:relative}.agentMsg uni-textarea[data-v-7a8f09d2]{display:block;padding:10px;background:#f5f5f5;width:100%;height:80px;font-size:12px;border:none;box-sizing:border-box}.agentMsg .btn[data-v-7a8f09d2]{position:absolute;top:20px;right:26px;width:38px;height:38px;line-height:38px;text-align:center;color:#fff;background:#2fa0ed;border-radius:50%;font-size:12px}.agentMsg .proNav[data-v-7a8f09d2]{overflow-x:scroll;margin-top:15px;width:100%}.agentMsg .proNav ul[data-v-7a8f09d2]{width:200%}.agentMsg .proNav li[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:12px;text-align:center;float:left;margin-right:35px;width:50px;margin-right:10px}.agentMsg .proNav li .icon[data-v-7a8f09d2]{width:20px;height:20px;margin:0 auto 3px auto;-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:gray(100%);filter:gray(100%)}.agentMsg .proNav li.on .icon[data-v-7a8f09d2]{-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0);filter:grayscale(0);-webkit-filter:gray(0);filter:gray(0)}\r\n/* 取送件信息详情 */.lineMsg[data-v-7a8f09d2]{padding:15px 4%}.qsCotMsg .left[data-v-7a8f09d2]{width:15%}.qsCotMsg .note[data-v-7a8f09d2]{width:30px;height:30px;border:1px solid #e1e1e1;font-size:12px;text-align:center;line-height:30px;border-radius:50%;margin:0 auto;display:block}.qsCotMsg .note.qu[data-v-7a8f09d2]{color:#094;border-color:#094}.qsCotMsg .note.shou[data-v-7a8f09d2]{color:#f01a1c;border-color:#f01a1c}.qsCotMsg .cont[data-v-7a8f09d2]{width:85%;padding:20px 0;padding-right:4%;box-sizing:border-box}.qsCotMsg .cont .infor[data-v-7a8f09d2]{width:60%;padding-right:10px;box-sizing:border-box}.qsCotMsg .cont .phone[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.qsCotMsg .cont .phone p[data-v-7a8f09d2]{margin-right:10px}.dian3[data-v-7a8f09d2]{width:4px;height:20px;position:absolute;top:50%;left:7%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:block}.qsLineinfor li[data-v-7a8f09d2]{padding:15px 4%;border-bottom:1px solid #eee}.qsLineinfor li .left[data-v-7a8f09d2]{width:35%;font-size:13px}.qsLineinfor .right[data-v-7a8f09d2]{width:65%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center ;-webkit-align-items:center ;align-items:center ;color:#999;font-size:12px}.qsLineinfor .right uni-input[data-v-7a8f09d2]{display:block;width:80%;text-align:right}.qsLineinfor .right uni-input[data-v-7a8f09d2]::-webkit-input-placeholder{color:#999}.qusUnderFix[data-v-7a8f09d2]{position:fixed;bottom:0;left:0;width:100%;box-sizing:border-box;background:#fff;box-shadow:0 -2px 5px hsla(0,0%,57.3%,.1)}.qusUnderFix .left[data-v-7a8f09d2]{width:60%;padding:0 4%;box-sizing:border-box}.qusUnderFix .left .price[data-v-7a8f09d2]{font-size:16px}.qusUnderFix .right[data-v-7a8f09d2]{width:40%;line-height:45px;height:45px;background:#2fa0ed;text-align:center;font-size:15px;color:#fff}\r\n/* 弹框固定内容 */.qjAlertCont[data-v-7a8f09d2]{position:fixed;bottom:0;left:0;width:100%;background:#fff;z-index:90}\r\n/* 选择优惠券弹框 */.couponShow .infor[data-v-7a8f09d2]{height:160px;overflow-y:auto}.couponShow li[data-v-7a8f09d2]{padding:15px 4% 0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.couponShow li .setIcon[data-v-7a8f09d2]{width:10%;width:20px;height:20px;display:block}\r\n/* 物品保价弹框 */.baojiaShow .edit[data-v-7a8f09d2]{padding-bottom:5px}.baojiaShow .edit[data-v-7a8f09d2]::before{content:"￥";font-size:12px;margin-right:5px}.baojiaShow .edit uni-input[data-v-7a8f09d2]{font-size:16px;width:60%;display:inline-block}.baojiaShow .edit uni-input[data-v-7a8f09d2]::-webkit-input-placeholder{font-size:14px}.baojiaShow .setIcon[data-v-7a8f09d2]{width:16px;height:16px;display:block;margin-right:5px}\r\n/* 小费弹框 */.tippingShow .wpMsgBox[data-v-7a8f09d2]{padding-bottom:30px}.tippingShow .wpMsgBox .item[data-v-7a8f09d2]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.tippingShow .wpMsgBox .item span[data-v-7a8f09d2]{width:30%;display:block;line-height:28px;border:1px solid #eee;text-align:center;margin-bottom:10px}.tippingShow .wpMsgBox .item span[data-v-7a8f09d2]:last-child{width:100%;margin-right:0}.tippingShow .wpMsgBox .item span.on[data-v-7a8f09d2]{border-color:#2fa0ed;color:#2fa0ed}\r\n/* 取件时间 */.accessShow .setData[data-v-7a8f09d2]{max-height:150px;overflow-y:auto}.accessShow .setData li[data-v-7a8f09d2]{padding:10px 10%;border-bottom:1px solid #eee}.accessShow .setData li span[data-v-7a8f09d2]{width:33.3%}.accessShow .setData li .seltBtn[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.accessShow .setData li .seltBtn img[data-v-7a8f09d2]{width:20px;height:20px;display:block}\r\n/* 费用明细 */.moneyMxShow .list li[data-v-7a8f09d2]{padding:10px 0;font-size:13px}.moneyMxShow .list li em[data-v-7a8f09d2]{margin-left:5px}\r\n/* 代买 */.qsLineinfor .liContbox2[data-v-7a8f09d2]{border-bottom:none;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding-bottom:0}.qsLineinfor .liContbox2 .left[data-v-7a8f09d2]{width:15%}.qsLineinfor .liContbox2 .right[data-v-7a8f09d2]{width:85%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:15px}.qsLineinfor .liContbox2 .right uni-input[data-v-7a8f09d2]{text-align:left}.liContbox2 .smallnav[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;width:100%;color:#333}.liContbox2 .smallnav span[data-v-7a8f09d2]{line-height:30px;padding:0 10px;border:1px solid #e1e1e1;text-align:center}.liContbox2 .smallnav span.on[data-v-7a8f09d2]{background:#e3f1ff;border-color:#2fa0ed}\r\n/* 点击弹框 */.agreeSel[data-v-7a8f09d2]{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:12px}.agreeSel .selt[data-v-7a8f09d2]{width:16px;height:16px}.agreeSel .selt uni-image[data-v-7a8f09d2]{width:100%;height:100%;display:block}.xieyiAlert[data-v-7a8f09d2]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0;z-index:999}.xieyiAlert .infor[data-v-7a8f09d2]{width:90%;height:80%;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;box-sizing:border-box;padding:15px 15px 70px 15px;z-index:1000;font-size:14px;color:#555}.xieyiAlert .infor .cont[data-v-7a8f09d2]{line-height:22px;height:100%;width:100%;overflow-y:auto}.xieyiAlert .infor .cont uni-view[data-v-7a8f09d2]{padding-bottom:10px}.wpMsgBox .title[data-v-7a8f09d2]{padding:20px 0 10px 0;color:#666}.wpMsgBox .item[data-v-7a8f09d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.wpMsgBox .item span[data-v-7a8f09d2]{width:31.3%;margin-right:3%;text-align:center;border:1px solid #e1e1e1;line-height:28px;height:30px;box-sizing:border-box;margin-bottom:15px;font-size:12px}.wpMsgBox .item span[data-v-7a8f09d2]:nth-of-type(3n){margin-right:0}.wpMsgBox .item span.on[data-v-7a8f09d2]{border-color:#2fa0ed;color:#2fa0ed}.weightRange[data-v-7a8f09d2]{width:70%;height:1px;margin:30px auto;position:relative}.weightRange .item[data-v-7a8f09d2]{position:absolute;top:-12px;left:-26px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;font-size:12px;color:#999}.weightRange .yuan[data-v-7a8f09d2]{width:24px;height:24px;border:1px solid #e1e1e1;border-radius:50%;display:block;margin:0 auto 5px auto;background:#fff}',""]),a.exports=t},"929a":function(a,t,e){"use strict";e.r(t);var i=e("0d19"),d=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);t["default"]=d.a},a6301:function(a,t,e){"use strict";e.r(t);var i=e("b7cc"),d=e("6ca0");for(var o in d)"default"!==o&&function(a){e.d(t,a,(function(){return d[a]}))}(o);e("89c5");var n,r=e("f0c5"),l=Object(r["a"])(d["default"],i["b"],i["c"],!1,null,"7a8f09d2",null,!1,i["a"],n);t["default"]=l.exports},b7cc:function(a,t,e){"use strict";var i,d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"pdlr4"},[e("div",{staticClass:"wpMsgBox"},[e("div",{staticClass:"title"},[a._v("商品类型")]),e("div",{staticClass:"item"},a._l(a.mainData,(function(t,i){return e("span",{key:i,class:[a.seltCurr==i?"on":""],on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.seltSpecs(i)}}},[a._v(a._s(t.title))])})),0),e("div",{staticClass:"title"},[a._v("商品价值")]),e("div",{staticClass:"item"},a._l(a.moneyDate,(function(t,i){return e("span",{key:i,class:[a.seltCurrTwo==i?"on":""],on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.seltSpecsTwo(i)}}},[a._v(a._s(t))])})),0),e("div",{staticStyle:{color:"#9999","font-size":"12px"}},[a._v("温馨提示：请勿配送违禁品及3000元以上物品")]),e("div",{staticClass:"title"},[a._v("商品重量")]),e("div",{staticClass:"center fs18 pucolor"},[a._v(a._s(0==a.rangeValues[1]?"5公斤以下":parseFloat(a.rangeValues[1])+5+"公斤"))]),e("div",{staticClass:"weightRange"},[e("RangeSlider",{attrs:{width:a.slideWidth,height:a.slideHeight,blockSize:a.slideBlockSize,min:a.slideMin,max:a.slideMax,values:a.rangeValues,step:a.step,liveMode:a.isLiveMode},on:{rangechange:function(t){arguments[0]=t=a.$handleEvent(t),a.onRangeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"range-slider-block",attrs:{slot:"minBlock"},slot:"minBlock"}),e("v-uni-view",{staticClass:"range-slider-block",attrs:{slot:"maxBlock"},slot:"maxBlock"})],1)],1)])]),"goodsInfo"==a.name?e("div",{staticClass:"submitbtn",staticStyle:{"margin-top":"100px"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submit()}}},[e("div",{staticClass:"btn"},[a._v("确定(取送件)")])]):a._e(),"sdGoodsInfo"==a.name?e("div",{staticClass:"submitbtn",staticStyle:{"margin-top":"100px"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submit()}}},[e("div",{staticClass:"btn"},[a._v("确定(当日达)")])]):a._e()])},o=[];e.d(t,"b",(function(){return d})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))}}]);