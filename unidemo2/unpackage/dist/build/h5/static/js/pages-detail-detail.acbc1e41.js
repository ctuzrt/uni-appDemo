(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{1293:function(t,e,n){"use strict";n.r(e);var i=n("275c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"275c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="<p>获取信息失败</p>",a={data:function(){return{banner:{},content:""}},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/detail/detail?query="+JSON.stringify(this.banner)}},onLoad:function(t){try{this.banner=JSON.parse(decodeURIComponent(t.query))}catch(e){this.banner=JSON.parse(t.query)}this.getDetail(),uni.setNavigationBarTitle({title:this.banner.title})},methods:{getDetail:function(){var t=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(e){200==e.statusCode?t.content=e.data.content:t.content=i}})}}};e.default=a},"5a7b":function(t,e,n){var i=n("eb60");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("03c25e53",i,!0,{sourceMap:!1,shadowMode:!1})},6259:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{staticClass:"banner-img",attrs:{src:t.banner.image_url}}),n("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[t._v(t._s(t.banner.source))]),n("v-uni-text",{staticClass:"article-text"},[t._v("发表于")]),n("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t.banner.datetime))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1),n("v-uni-view",{staticClass:"comment-wrap"})],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"718e":function(t,e,n){"use strict";n.r(e);var i=n("6259"),a=n("1293");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("a516");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"59695c72",null);e["default"]=s.exports},a516:function(t,e,n){"use strict";var i=n("5a7b"),a=n.n(i);a.a},eb60:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".banner[data-v-59695c72]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-59695c72]{width:100%}.banner-title[data-v-59695c72]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-59695c72]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:grey}.article-text[data-v-59695c72]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-59695c72],.article-time[data-v-59695c72]{font-size:%?30?%}.article-content[data-v-59695c72]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])}}]);