webpackJsonp([17],{"1npW":function(e,t){},kTNm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Dd8w"),r=o.n(n),s=o("woOf"),a=o.n(s),i=o("NYxO"),c=o("VSB1"),l={name:"buyram",data:function(){return{bytesForm:{account:"",bytes:1024},bytesRules:{account:{required:!0,validator:function(e,t,o){""===t?o(new Error("请输入账户名")):/^[1-5a-z]+$/g.test(t)?o():o(new Error("名字只能包含 1-5 a-z ！"))},trigger:"blur"},bytes:{required:!0,message:"请输入",trigger:"blur"}},eosmonitorTransaction:"https://eosmonitor.io/txn",eosmonitorAccounts:"https://eosmonitor.io/accounts",eosmonitorAccount:"https://eosmonitor.io/account"}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.warning("填写有误"),console.log("error submit!!"),!1;t.openFullScreenLoading(),t.sellram()})},network:function(){var e=a()({keyProvider:this.privateKey},this.eosConfig);return this.$eosjs(e)},sellram:function(){var e=this;this.network().sellram(this.bytesForm).then(function(t){var o=t.transaction_id;e.loading.close(),e.$notify({title:"发送交易",message:'\n            <p>接下来可以</p>\n            <a href="'+e.eosmonitorTransaction+"/"+o+'" target="_blank">前往查看浏览器操作详情<a>\n            ',duration:4e3,type:"success",dangerouslyUseHTMLString:!0})}).catch(function(t){e.loading.close(),e.$message.error(Object(c.a)(t)),e.$notify({title:"出售失败",message:'\n            <p>可能的原因</p>\n            <ol>\n              <li>账户ram不足</li>\n            </ol>\n            <br>\n            前往查看账户详情： <a href="'+e.eosmonitorAccount+"/"+e.bytesForm.account+'" target="_blank">'+e.bytesForm.account+"<a>\n            <br>\n            ",duration:4e3,type:"error",dangerouslyUseHTMLString:!0})})},openFullScreenLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}},computed:r()({},Object(i.c)({privateKey:function(e){return e.key.priKeys},accountNames:function(e){return e.accountNames},eosConfig:function(e){return e.eosConfig}}))},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",{staticClass:"container"},[o("el-col",{attrs:{xs:24,sm:22,lg:14}},[o("el-card",[o("h3",[e._v("出售ram，单位为字节(Bytes)")]),e._v(" "),o("el-form",{ref:"bytesForm",attrs:{model:e.bytesForm,rules:e.bytesRules}},[o("el-form-item",{attrs:{label:"选择账户",prop:"account"}},[o("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},model:{value:e.bytesForm.account,callback:function(t){e.$set(e.bytesForm,"account",t)},expression:"bytesForm.account"}},e._l(e.accountNames,function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"出售大小 例:1024",prop:"bytes"}},[o("el-input",{attrs:{type:"number",placeholder:"出售ram，单位为：bytes且必须为整数"},model:{value:e.bytesForm.bytes,callback:function(t){e.$set(e.bytesForm,"bytes",e._n(t))},expression:"bytesForm.bytes"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("bytesForm")}}},[e._v("确定出售")])],1)],1)],1)],1),e._v(" "),o("el-col",{staticClass:"aside-spaceing",attrs:{xs:24,sm:22,lg:8}},[o("el-card",{staticStyle:{color:"#909399"}},[o("h3",{staticStyle:{color:"#2c3e50"}},[e._v("提示：")]),e._v(" "),o("ol",[o("li",[e._v("账号格式 1-5 a-z")]),e._v(" "),o("li",[e._v("单位为 bytes")]),e._v(" "),o("li",[e._v("bytes必须大于 0")])])])],1)],1)},staticRenderFns:[]};var m=o("VU/8")(l,u,!1,function(e){o("1npW")},"data-v-4414fdca",null);t.default=m.exports}});
//# sourceMappingURL=17.83153707c66c5b5913e1.js.map