(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-900a0146"],{"3bf7":function(e,t,a){},"646b":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}var i=function(){function e(){n(this,e)}return o(e,[{key:"riquierdvalidation",value:function(e){return null==e||""===e}},{key:"numircvalidation",value:function(e){return!!isNaN(e)||(isNaN(e),!1)}},{key:"numircriquierdvalidation",value:function(e){return!!isNaN(e)||!(!isNaN(e)&&null!=e&&""!==e)}},{key:"validateEmail",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!t.test(e)}},{key:"validatePhone",value:function(e){var t=/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{5,6}$/im;return!t.test(e)}},{key:"todayDate",value:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return t}},{key:"formatDate",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(e).toLocaleDateString("en-GB",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(e).toLocaleDateString("en-GB",n)}}]),e}();t["a"]=new i},"74b2":function(e,t,a){"use strict";var n=a("9bb0"),r=a.n(n);r.a},8405:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("TaxGroup-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("va-card",{staticClass:"w-100",attrs:{title:e.$t("tables.labelTaxGroup")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",flat:""},on:{click:e.showCreateModal},slot:"actions"}),a("va-data-table",{attrs:{fields:e.fields,data:e.dataTable,loading:e.loading,totalPages:e.totalPages,"api-mode":"",hoverable:""},on:{"page-selected":e.readItems},scopedSlots:e._u([{key:"marker",fn:function(e){return[a("va-icon",{attrs:{name:"fa fa-circle",color:e.rowData.color,size:"8px"}})]}},{key:"valueHaveTax",fn:function(t){return[e._v(" "+e._s(t.rowData.valueHaveTax?"✔":"✘")+" ")]}},{key:"actions",fn:function(t){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return e.showEditModal(t.rowData)}}},[e._v(" "+e._s(e.$t("tables.edit"))+" ")]),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(a){return e.showDeleteModal(t.rowData)}}},[e._v(" "+e._s(e.$t("tables.delete"))+" ")])]}}])}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:e.$t("generic.deleteItemTitle"),okText:e.$t("modal.delete"),cancelText:e.$t("modal.cancel"),message:e.$t("generic.deleteItemMsg")},on:{ok:function(t){return e.okDeletefun()},cancel:function(t){return e.cancleDeletefun()}},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:e.$t("generic.editItemTitle"),"hide-default-actions":""},model:{value:e.editModal,callback:function(t){e.editModal=t},expression:"editModal"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.okEditfun()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"flex md4 sm12 xs12"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.name"))+" ")]),a("va-input",{attrs:{error:e.riquierdvalidation(e.currentobject.name),"error-messages":e.$t("errorMessage.required"),placeholder:e.$t("placeholder.name"),required:""},model:{value:e.currentobject.name,callback:function(t){e.$set(e.currentobject,"name",t)},expression:"currentobject.name"}})],1),a("div",{staticClass:"flex md4 sm12 xs12"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.value"))+" ")]),a("va-input",{attrs:{type:"number",step:"0.1",error:e.numircriquierdvalidation(e.currentobject.value),"error-messages":e.$t("errorMessage.Number"),placeholder:e.$t("placeholder.value"),required:""},model:{value:e.currentobject.value,callback:function(t){e.$set(e.currentobject,"value",t)},expression:"currentobject.value"}})],1),a("div",{staticClass:"flex md4 sm12 xs12"},[a("va-checkbox",{attrs:{label:e.$t("placeholder.valueHaveTax")},model:{value:e.currentobject.valueHaveTax,callback:function(t){e.$set(e.currentobject,"valueHaveTax",t)},expression:"currentobject.valueHaveTax"}})],1)]),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{color:"gray",flat:""},on:{click:function(t){return e.cancleEditfun()}}},[e._v(" "+e._s(e.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:e.stopBtn}},[e._v(e._s(e.$t("modal.edit")))])],1)])]),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:e.$t("generic.creatItemTitle"),"hide-default-actions":""},model:{value:e.createModal,callback:function(t){e.createModal=t},expression:"createModal"}},[a("div",{staticClass:"row"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.okCreatefun()}}},[a("div",{staticClass:"flex md12 sm12 xs12"},[a("va-input",{attrs:{error:e.riquierdvalidation(e.currentobject.name),"error-messages":e.$t("errorMessage.required"),placeholder:e.$t("placeholder.name"),required:""},model:{value:e.currentobject.name,callback:function(t){e.$set(e.currentobject,"name",t)},expression:"currentobject.name"}}),a("va-input",{attrs:{type:"number",step:"0.1",error:e.numircriquierdvalidation(e.currentobject.value),"error-messages":e.$t("errorMessage.Number"),placeholder:e.$t("placeholder.value"),required:""},model:{value:e.currentobject.value,callback:function(t){e.$set(e.currentobject,"value",t)},expression:"currentobject.value"}}),a("va-checkbox",{attrs:{label:e.$t("placeholder.valueHaveTax")},model:{value:e.currentobject.valueHaveTax,callback:function(t){e.$set(e.currentobject,"valueHaveTax",t)},expression:"currentobject.valueHaveTax"}})],1),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{color:"gray",flat:""},on:{click:function(t){return e.cancleCreatefun()}}},[e._v(" "+e._s(e.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:e.stopBtn}},[e._v(e._s(e.$t("modal.create")))])],1)])])])],1)},i=[],c=a("ea6d"),l=a("646b"),s={data:function(){return{perPage:10,totalPages:0,dataTable:[],stopBtn:!1,deleteModal:!1,editModal:!1,createModal:!1,loading:!0,opjectBeforeEdit:{},currentobject:{}}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center"},{name:"name",title:this.$t("tables.headings.name")},{name:"value",title:this.$t("tables.headings.value")},{name:"__slot:valueHaveTax",title:this.$t("tables.headings.valueHaveTax")},{name:"__slot:actions",dataClass:"text-right"}]}},created:function(){this.readItems()},methods:{riquierdvalidation:function(e){return l["a"].riquierdvalidation(e)},numircvalidation:function(e){return l["a"].numircvalidation(e)},numircriquierdvalidation:function(e){return l["a"].numircriquierdvalidation(e)},readItems:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,console.log("fkghg");var a={PageSize:this.perPage,PageNumber:t};c["a"].getAllPagnation(a).then((function(t){e.dataTable=t.data;var a=JSON.parse(t.headers["x-pagination"]);e.totalPages=a.TotalPages,e.loading=!1}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},create:function(){var e=this;this.currentobject.value=parseFloat(this.currentobject.value),c["a"].create(this.currentobject).then((function(t){e.dataTable.push(t.data),"true"===t.headers["x-status"]?(e.loading=!1,e.currentobject={},e.createModal=!1,e.stopBtn=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})):(e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},edit:function(e){var t=this;this.currentobject.value=parseFloat(this.currentobject.value),c["a"].update(this.currentobject.id,this.currentobject).then((function(e){if("true"===e.headers["x-status"]){var a=t.dataTable.findIndex((function(e){return e.id===t.currentobject.id}));t.dataTable[a].name=t.currentobject.name,t.currentobject={},t.loading=!1,t.editModal=!1,t.stopBtn=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})}else t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},remove:function(e){var t=this;c["a"].delete(e).then((function(a){if("true"===a.headers["x-status"]){var n=t.dataTable.findIndex((function(t){return t.id===e}));t.dataTable.splice(n,1),t.loading=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})}else t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},showDeleteModal:function(e){this.deleteModal=!0,this.currentobject=e,this.loading=!0},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.loading=!1},showEditModal:function(e){this.editModal=!0,this.opjectBeforeEdit=Object.assign({},e),this.currentobject=e,this.loading=!0},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){this.editModal=!1,this.loading=!1,console.log("ddd"),Object.assign(this.currentobject,this.opjectBeforeEdit),this.currentobject={}},showCreateModal:function(){this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={}}}},u=s,d=(a("74b2"),a("2877")),f=Object(d["a"])(u,o,i,!1,null,null,null),v=f.exports,m={name:"TaxGroup",components:{TaxGroupTable:v},data:function(){return{}}},b=m,h=(a("dce3"),Object(d["a"])(b,n,r,!1,null,null,null));t["default"]=h.exports},"9bb0":function(e,t,a){},c427:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n);t["a"]=r.a.create({baseURL:"http://mahmmoudahmed-001-site7.ftempurl.com/api/v1/",headers:{"Content-type":"application/json"}})},dce3:function(e,t,a){"use strict";var n=a("3bf7"),r=a.n(n);r.a},ea6d:function(e,t,a){"use strict";var n=a("c427");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}var c=function(){function e(){r(this,e)}return i(e,[{key:"getAll",value:function(){return n["a"].get("TaxGroup")}},{key:"getAllPagnation",value:function(e){return n["a"].get("TaxGroup",{params:e})}},{key:"get",value:function(e){return n["a"].get("TaxGroup/getById?Id=".concat(e))}},{key:"create",value:function(e){return n["a"].post("TaxGroup",e)}},{key:"update",value:function(e,t){return n["a"].put("TaxGroup?Id=".concat(e),t)}},{key:"delete",value:function(e){return n["a"].delete("TaxGroup?Id=".concat(e))}}]),e}();t["a"]=new c}}]);
//# sourceMappingURL=chunk-900a0146.b486acf3.js.map