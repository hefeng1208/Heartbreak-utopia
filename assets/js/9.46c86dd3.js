(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(t,e,a){},187:function(t,e,a){"use strict";var s=a(161);a.n(s).a},194:function(t,e,a){"use strict";a.r(e);var s=a(162),r={name:"TitleContent",props:{pages:{type:Object,default:()=>{}}},computed:{editDate(){let t=this.pages.frontmatter;return t&&t.date?t.date.replace("T"," ").replace(/\..+/,""):s.DateTime.fromJSDate(new Date).toFormat("yyyy-MM-dd HH:mm:ss")}},methods:{gotoReferPerson(){window.open(this.pages.frontmatter.refer)}}},n=(a(187),a(9)),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1==t.pages.frontmatter.post?a("div",{staticClass:"title-content"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h2",[t._v(t._s(t.pages.frontmatter.title))]),t._v(" "),a("div",{staticClass:"page-info"},[a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:4}},[a("el-tag",{attrs:{type:"success"}},[a("i",{staticClass:"el-icon-edit"}),t._v("Author:IT民工")])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tags"},t._l(t.pages.frontmatter.tags,(function(e){return a("el-tag",[t._v("#"+t._s(e))])})),1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-tag",{attrs:{color:"#fff"}},[a("i",{staticClass:"el-icon-date"}),t._v(t._s(t.editDate))])],1),t._v(" "),a("el-col",{attrs:{span:4}},[t.pages.frontmatter.copyright?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s("原创"))]):a("div",{staticClass:"is-pointer"},[a("el-tag",{attrs:{type:"danger"},on:{click:t.gotoReferPerson}},[t._v(t._s("转载"))])],1)],1)],1)],1)])],1):t._e()}),[],!1,null,null,null);e.default=o.exports}}]);