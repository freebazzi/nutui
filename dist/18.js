/*! NutUI v1.2.7 Mon Jun 04 2018 18:01:37 GMT+0800 (CST) */
webpackJsonpnutui([18],{1008:function(t,e,n){(t.exports=n(2)()).push([t.i,"",""])},1109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"步骤条。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("h6",[t._v("默认用法")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo1,imgUrl:["../asset/img/demo/step1.png"]}}),t._v(" "),n("h6",[t._v("可配置活动数值，显示进度数字以及title具体每个进度条的高度")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/step2.png"]}}),t._v(" "),n("h6",[t._v("可以设置进度条为图片")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/step3.png"]}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("stepsId")]),t._v(" "),n("td",[t._v("当同一页面有多个进度条时，需设置每个进度条组件单独的stepsId，如只有一个进度条组件，则无需设置该属性")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("''")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("stepTitle")]),t._v(" "),n("td",[t._v("每个进度条的标题")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("active")]),t._v(" "),n("td",[t._v("每个进度条组件激活的个数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("showNum")]),t._v(" "),n("td",[t._v("是否显示进度条左侧的数字")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("titleTop")]),t._v(" "),n("td",[t._v("进度条标题距离顶部的距离，单位为rem")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0.3")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("左侧进度条的图片地址")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1204:function(t,e,n){var s=n(1008);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("ba654e34",s,!0,{})},879:function(t,e,n){var s=n(1)(n(975),n(1109),function(t){n(1204)},"data-v-3984aa78",null);t.exports=s.exports},975:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,v=n(20);(s=v)&&s.__esModule;e.default={data:function(){return{demo1:'<nut-steps \nstepsId="step1"\n>\n  <nut-step \n   stepTitle="您的订单已经发往北京"\n  ><p>2017-12-12</p></nut-step>\n  <nut-step \n  stepTitle="您的订单已经到达上海"\n  ><p>2017-12-11</p></nut-step>\n  <nut-step \n  stepTitle="快递公司已揽件"\n  ><p>2017-12-10</p></nut-step>\n</nut-steps>',demo2:'<nut-steps \nstepsId="step2" \n:active="2" \n:showNum="true"\n:titleTop="0.4"\n>\n  <nut-step \n  stepTitle="您的订单已经发往北京"\n  ><p>2017-12-12</p></nut-step>\n  <nut-step \n  stepTitle="您的订单已经到达上海"\n  ><p>2017-12-11</p></nut-step>\n  <nut-step \n  stepTitle="快递公司已揽件"\n  ><p>2017-12-10</p></nut-step>\n</nut-steps>',demo3:'<nut-steps \nstepsId="step3" \n:active="1"\n>\n  <nut-step \n  stepTitle="您的订单已经发往北京" \n  icon="图片地址1"\n  ><p>2017-12-12</p></nut-step>\n  <nut-step \n  stepTitle="您的订单已经到达上海" \n  icon="图片地址2"\n  ><p>2017-12-11</p></nut-step>\n  <nut-step \n  stepTitle="快递公司已揽件" \n  icon="图片地址2"\n  ><p>2017-12-10</p></nut-step>\n</nut-steps>'}},methods:{}}}});