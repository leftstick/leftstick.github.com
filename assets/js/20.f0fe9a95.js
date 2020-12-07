(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{381:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("因为最近自己的产品要在微信公众号中推广，需要提供一些"),s("code",[t._v("有意义")]),t._v("的功能，于是被迫走上了支持微信这条不归路。")]),t._v(" "),s("p",[t._v("众所周知，腾讯是那样一个神奇的公司，他们的产品在商业上获得巨大成功，但技术上真的很难令人恭维，没有精益求精，只有能用就成，诺大一个公众号开发平台，我竟然找不到"),s("code",[t._v("真正的，关于web开发的")]),t._v("官方文档，有的就是个别示例，剩下的...呵呵，有一个叫"),s("code",[t._v("开发者交流互助")]),t._v("的东东了。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/wechat_doc.png"),alt:"demo"}}),t._v(" "),s("p",[t._v("看完上面这个图后，有没有这样的感觉：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 你知道老王家有几口人么？\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 不知道，我就在大门口见过他老婆，估计就俩人吧？\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 不会吧，那天看见还有个小孩儿进他们家，会不会是老王家孩子？\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 唉！谁他妈都没去过老王家，也不认识老王，老王也不自我坦白，鬼才知道他们家几口人！\n")])])]),s("p",[t._v("例子或许不那么恰当，但就是这么个道理，一群开发者在死去活来的摸索，还互相慰藉，就是永远得不到正确答案！o(∩_∩)o 哈哈")]),t._v(" "),s("p",[t._v("说了这么多，赶紧入正题，本期要讲的就是我痛苦中挣扎徘徊后写的"),s("a",{attrs:{href:"http://leftstick.github.io/jquery-wechat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery.wechat"),s("OutboundLink")],1),t._v("，一个提供了统一API的、基于"),s("a",{attrs:{href:"http://api.jquery.com/Types/#Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery.promise"),s("OutboundLink")],1),t._v("的jQuery.plugin。希望能多少帮助到大家。")]),t._v(" "),s("h4",{attrs:{id:"首先，安装那是相当的简单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先，安装那是相当的简单"}},[t._v("#")]),t._v(" 首先，安装那是相当的简单")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("bower "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save jquery-wechat\n")])])]),s("blockquote",[s("p",[t._v("如果不用bower的，自己从"),s("a",{attrs:{href:"https://github.com/leftstick/jquery-wechat/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("上下载、解压，那也是一样一样滴！")])]),t._v(" "),s("h5",{attrs:{id:"加载，那也是水一样的自然"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载，那也是水一样的自然"}},[t._v("#")]),t._v(" 加载，那也是水一样的自然")]),t._v(" "),s("div",{staticClass:"language-markup extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bower_components/jquery/dist/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bower_components/jquery-wechat/dist/jquery-wechat.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("你如果用了"),s("code",[t._v("amd")]),t._v("，"),s("code",[t._v("cmd")]),t._v("之类的延迟加载技术，想必你也是个行家，不用我再教你怎么配置了吧？")])]),t._v(" "),s("h5",{attrs:{id:"使用-简单、轻松、统一、爽！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-简单、轻松、统一、爽！"}},[t._v("#")]),t._v(" 使用——简单、轻松、统一、爽！")]),t._v(" "),s("h6",{attrs:{id:"启用jquery-wechat功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用jquery-wechat功能"}},[t._v("#")]),t._v(" 启用"),s("code",[t._v("jQuery.wechat")]),t._v("功能")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//So easy!")]),t._v("\n")])])]),s("p",[t._v("因为整个插件是基于"),s("a",{attrs:{href:"http://api.jquery.com/Types/#Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery.promise"),s("OutboundLink")],1),t._v("的，所以你也可以给它一个链：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'已经启用成功'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'启用失败'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("考虑到目前单页技术("),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPA"),s("OutboundLink")],1),t._v(")的广泛应用，工具类的设计必须考虑"),s("code",[t._v("启用/停用")]),t._v("机制，否则可能引起未知错误。")])]),t._v(" "),s("h6",{attrs:{id:"隐藏-显示菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏-显示菜单"}},[t._v("#")]),t._v(" 隐藏/显示菜单")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideMenu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐藏菜单")]),t._v("\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMenu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示菜单")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("启用"),s("code",[t._v("jQuery.wechat")]),t._v("之后，就可以随意调用如"),s("code",[t._v("hideMenu")]),t._v("之类的方法了，无需将其他方法写入"),s("code",[t._v("enable")]),t._v("的"),s("code",[t._v("done")]),t._v("回调之中。"),s("code",[t._v("jQuery.wechat")]),t._v("的实现原理是，如果"),s("code",[t._v("jQuery.wechat")]),t._v("还没有启用成功，所有操作会进入排队，一旦启用成功后，则顺序执行；如果启用失败，则永远不会执行。")])]),t._v(" "),s("h6",{attrs:{id:"隐藏-显示底部工具栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏-显示底部工具栏"}},[t._v("#")]),t._v(" 隐藏/显示底部工具栏")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideToolbar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐藏底部工具栏")]),t._v("\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToolbar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示底部工具栏")]),t._v("\n")])])]),s("h6",{attrs:{id:"打开扫描二维码界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开扫描二维码界面"}},[t._v("#")]),t._v(" 打开扫描二维码界面")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanQRcode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h6",{attrs:{id:"打开图片预览工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开图片预览工具"}},[t._v("#")]),t._v(" 打开图片预览工具")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preview")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic001.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进入预览模式后，直接显示这张图片")]),t._v("\n    urls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic001.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic002.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic003.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic004.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic005.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx/img/pic006.jpg'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所有要在预览模式下显示的图片")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h6",{attrs:{id:"获取网络状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取网络状态"}},[t._v("#")]),t._v(" 获取网络状态")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNetworkType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#network'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("response")]),t._v("格式如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("network_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("wifi    wifi网络\nnetwork_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("edge    非wifi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("包含3G/2G\nnetwork_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fail    网络断开连接\nnetwork_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("wwan    (2g或者3g)\n")])])]),s("h6",{attrs:{id:"修改分享格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改分享格式"}},[t._v("#")]),t._v(" 修改分享格式")]),t._v(" "),s("p",[t._v("每次看到别人的app分享出来的消息都带着精美的缩略图、适当的标题和描述，更有甚者消息下面还跟了一行小字指出该消息是由"),s("code",[t._v("谁")]),t._v("发送出来的；再看看你自己分享出去的消息，一个蓝色的默认空白图片，配着不搭调的标题，会不会奇怪是什么逻辑把他们塞进去的？")]),t._v(" "),s("p",[t._v("还好，咱们现在就来解决这个问题:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setShareOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    appid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//小标appid")]),t._v("\n    img_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    img_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    img_url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/demo.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缩略图")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DEMO'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标题")]),t._v("\n    desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The description is set from $.wechat.setShareOption'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//描述")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息分享出去后，用户点击消息打开的链接地址")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分享后的回调函数，常见的有成功和取消")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("具体参考如下截图：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/share.png"),alt:"share"}}),t._v(" "),s("blockquote",[s("p",[t._v("该分享格式变更会影响"),s("code",[t._v("发送给朋友")]),t._v("、"),s("code",[t._v("分享到朋友圈")]),t._v("、"),s("code",[t._v("分享到微博")]),t._v("、"),s("code",[t._v("发送邮件")]),t._v("四项功能。当设置后，再点击右上角菜单键打开菜单后，选择前述四项中的任意一项，就能看到更改后的效果")])]),t._v(" "),s("h6",{attrs:{id:"关闭当前页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭当前页"}},[t._v("#")]),t._v(" 关闭当前页")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h6",{attrs:{id:"停用jquery-wechat机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停用jquery-wechat机制"}},[t._v("#")]),t._v(" 停用"),s("code",[t._v("jQuery.wechat")]),t._v("机制")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wechat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("停用后，所有功能自动重置回初始状态")])]),t._v(" "),s("p",[t._v("更多详情，参考"),s("a",{attrs:{href:"https://github.com/leftstick/jquery-wechat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github-Source"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("若要试用，请微信中打开"),s("a",{attrs:{href:"http://leftstick.github.io/jquery-wechat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery.wechat-DEMO"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);