/*! NutUI v1.2.7 Mon Jun 04 2018 18:01:37 GMT+0800 (CST) */
webpackJsonpnutui([14],{1037:function(t,e,n){(t.exports=n(2)()).push([t.i,".input-telnum .nut-telinput-box ::-webkit-input-placeholder{color:green}.input-telnum .nut-telinput-box :-ms-input-placeholder,.input-telnum .nut-telinput-box ::-ms-input-placeholder{color:green}.input-telnum .nut-telinput-box ::placeholder{color:green}",""])},1138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"电话号码输入框，支持自定义间隔位数，支持基本电话号码校验。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("h6",[t._v("默认用法")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-telinput></nut-telinput>",imgUrl:["../asset/img/demo/telinput1.png"]}}),t._v(" "),n("h6",[t._v("自定义输入框宽高、带有清除按钮")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/telinput2.png"]}}),t._v(" "),n("h6",[t._v("增加回调函数，且提示信息位置在输入框下面")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/telinput3.png"]}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo5}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("gapone")]),t._v(" "),n("td",[t._v("第1个空格的位置")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("3")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("gapsec")]),t._v(" "),n("td",[t._v("第2个空格的位置")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("7")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("telWidth")]),t._v(" "),n("td",[t._v("输入框的宽度，支持数字和百分比")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("4(单位rem)")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("telHeight")]),t._v(" "),n("td",[t._v("输入框的高度，支持数字和百分比")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("1(单位rem)")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("clearPic")]),t._v(" "),n("td",[t._v("是否显示清除按钮")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("tipsInfo")]),t._v(" "),n("td",[t._v("错误提示信息")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("请输入正确的电话号码")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("placeText")]),t._v(" "),n("td",[t._v("输入框默认提示文案")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("请输入电话号码")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("tipsPosition")]),t._v(" "),n("td",[t._v("错误提示信息位置")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'left'提示信息在输入框左侧")]),t._v(" "),n("td",[t._v("'left'/'bottom'")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("pass-test")]),t._v(" "),n("td",[t._v("输入的是正确的电话号码时触发事件")]),t._v(" "),n("td",[t._v("返回带有间隔的电话号码")])]),t._v(" "),n("tr",[n("td",[t._v("error-tel")]),t._v(" "),n("td",[t._v("输入的是错误的电话号码时触发事件")]),t._v(" "),n("td",[t._v("返回带有间隔的电话号码")])]),t._v(" "),n("tr",[n("td",[t._v("clear")]),t._v(" "),n("td",[t._v("点击清除按钮时的触发事件")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1233:function(t,e,n){var v=n(1037);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);n(3)("e58ca682",v,!0,{})},883:function(t,e,n){var v=n(1)(n(979),n(1138),function(t){n(1233)},null,null);t.exports=v.exports},979:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v,_=n(20);(v=_)&&v.__esModule;e.default={data:function(){return{demo1:"<nut-telinput></nut-telinput>",demo2:'<nut-telinput \n  telWidth="50%" \n  telHeight="1" \n  :clearPic="true"\n></nut-telinput>',demo3:'<nut-telinput \n:gapone="3" \n:gapsec="7" \ntelWidth="4"\ntelHeight="1" \n:clearPic="true"\ntipsInfo="请输入正确的电话号码"\nplaceText="请输入自定义文案"\ntipsPosition="bottom"\nclass="input-telnum"\n@pass-test="passTest"\n@clear="clear"\n@error-tel="errorTel"\n></nut-telinput>',demo4:"clear:function(){\n  console.log('点击了清除按钮');\n},\npassTest:function(value){\n  console.log(value);\n},\nerrorTel:function(value){\n  console.log('error'+value)\n}",demo5:".input-telnum .nut-telinput-box ::placeholder{\n    color:green;\n};"}},methods:{clear:function(){console.log("点击了清除按钮")},passTest:function(t){console.log(t)},errorTel:function(t){console.log("error"+t)}}}}});