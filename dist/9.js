/*! NutUI v1.2.7 Mon Jun 04 2018 18:01:37 GMT+0800 (CST) */
webpackJsonpnutui([9],{1018:function(e,t,n){(e.exports=n(2)()).push([e.i,"",""])},1119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-docheader",{attrs:{name:e.$route.name,chName:e.$route.params.chnName,type:"Filter",desc:"在支持webp格式的浏览器里给图片url加上“.webp”扩展名。",showQrCode:!0}}),e._v(" "),n("h5",[e._v("示例")]),e._v(" "),n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("img",{attrs:{src:e._f("webp")(e.imgUrl),alt:""}})]),e._v(" "),n("nut-codebox",{attrs:{code:e.demo1}}),e._v(" "),n("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n            imgUrl:'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/\n            1456804243/302655/1e93032/5951e7ecNafb50399.jpg'\n        }\n    }\n}"}})],1)},staticRenderFns:[]}},1214:function(e,t,n){var r=n(1018);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("35d8997a",r,!0,{})},888:function(e,t,n){var r=n(1)(n(984),n(1119),function(e){n(1214)},null,null);e.exports=r.exports},984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imgUrl:"//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg",demo1:'<img :src="imgUrl | webp" alt=""/>'}}}}});