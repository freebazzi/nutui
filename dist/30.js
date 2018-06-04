/*! NutUI v1.2.7 Mon Jun 04 2018 18:01:37 GMT+0800 (CST) */
webpackJsonpnutui([30],{1074:function(t,e,n){(t.exports=n(2)()).push([t.i,"",""])},1175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"商品数量加减组件。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("h6",[t._v("默认用法")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/numoperate1.png"}}),t._v(" "),n("h6",[t._v("初始状态减号按钮置灰")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2,imgUrl:"../asset/img/demo/numoperate2.png"}}),t._v(" "),n("h6",[t._v("设置初始值为3")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo4,imgUrl:"../asset/img/demo/numoperate3.png"}}),t._v(" "),n("h6",[t._v("点击增加和减少时获取当前数量")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo6}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo7}}),t._v(" "),n("h6",[t._v("设置最大值为4")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo8,imgUrl:"../asset/img/demo/numoperate4.png"}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("gery")]),t._v(" "),n("td",[t._v("初始状态下减号是否置灰")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("init")]),t._v(" "),n("td",[t._v("设置初始值")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td",[t._v("设置最大值")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("add")]),t._v(" "),n("td",[t._v("点击加号时触发")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("reduce")]),t._v(" "),n("td",[t._v("点击减号时触发")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1270:function(t,e,n){var r=n(1074);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("c29ec9ec",r,!0,{})},866:function(t,e,n){var r=n(1)(n(961),n(1175),function(t){n(1270)},null,null);t.exports=r.exports},961:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:"<num-operate></num-operate>",demo2:'<num-operate :gery="true"></num-operate>',demo4:'<num-operate :init="3"></num-operate>',demo6:'<num-operate @add="changeNum" @reduce="changeNum"></num-operate>',demo7:"export default {\n  data(){\n    return{\n      resNum:0\n    }\n  },\n  methods:{\n    changeNum(num){\n      this.resNum = num;\n      alert(this.resNum);\n    }\n  }\n}",demo8:'<num-operate :max="4"></num-operate>',resNum:0,maxNum:4,isGrey:!0,initNum:3}},methods:{changeNum:function(t){this.resNum=t,alert(this.resNum)}}}}});