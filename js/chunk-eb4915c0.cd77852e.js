(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb4915c0"],{"1f30":function(t,e,a){},"40e1":function(t,e,a){"use strict";var n=a("8705"),o=a.n(n);o.a},8705:function(t,e,a){},b3a6:function(t,e,a){"use strict";var n=a("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}var c=function(){function t(){o(this,t)}return r(t,[{key:"getAll",value:function(){return n["a"].get("Units")}},{key:"getAllPagnation",value:function(t){return n["a"].get("Units",{params:t})}},{key:"get",value:function(t){return n["a"].get("Units?Id=".concat(t))}},{key:"create",value:function(t){return n["a"].post("Units",t)}},{key:"update",value:function(t,e){return n["a"].put("Units?Id=".concat(t),e)}},{key:"delete",value:function(t){return n["a"].delete("Units?Id=".concat(t))}}]),t}();e["a"]=new c},c427:function(t,e,a){"use strict";var n=a("bc3a"),o=a.n(n);e["a"]=o.a.create({baseURL:"https://localhost:44347/api/v1/",headers:{"Content-type":"application/json"}})},dc17:function(t,e,a){"use strict";var n=a("1f30"),o=a.n(n);o.a},e983:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("Units-Table",{staticClass:"flex md6 sm12 xs12"})],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("va-card",{staticClass:"w-100",attrs:{title:t.$t("tables.labelUnits")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",flat:""},on:{click:t.showCreateModal},slot:"actions"}),a("va-data-table",{attrs:{fields:t.fields,data:t.dataTable,loading:t.loading,totalPages:t.totalPages,"api-mode":"",hoverable:""},on:{"page-selected":t.readItems},scopedSlots:t._u([{key:"marker",fn:function(t){return[a("va-icon",{attrs:{name:"fa fa-circle",color:t.rowData.color,size:"8px"}})]}},{key:"actions",fn:function(e){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return t.showEditModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.edit"))+" ")]),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(a){return t.showDeleteModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.delete"))+" ")])]}}])}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.deleteItemTitle"),okText:t.$t("modal.delete"),cancelText:t.$t("modal.cancel"),message:t.$t("generic.deleteItemMsg")},on:{ok:function(e){return t.okDeletefun()},cancel:function(e){return t.cancleDeletefun()}},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.editItemTitle"),okText:t.$t("modal.edit"),cancelText:t.$t("modal.cancel")},on:{ok:function(e){return t.okEditfun()},cancel:function(e){return t.cancleEditfun()}},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"flex md12 sm12 xs12"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.name"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.name")},model:{value:t.currentobject.name,callback:function(e){t.$set(t.currentobject,"name",e)},expression:"currentobject.name"}})],1)])]),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.creatItemTitle"),okText:t.$t("modal.create"),cancelText:t.$t("modal.cancel")},on:{ok:function(e){return t.okCreatefun()},cancel:function(e){return t.cancleCreatefun()}},model:{value:t.createModal,callback:function(e){t.createModal=e},expression:"createModal"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"flex md12 sm12 xs12"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.name"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.name")},model:{value:t.currentobject.name,callback:function(e){t.$set(t.currentobject,"name",e)},expression:"currentobject.name"}})],1)])])],1)},r=[],c=a("b3a6"),s={data:function(){return{perPage:10,totalPages:0,dataTable:[],deleteModal:!1,editModal:!1,createModal:!1,loading:!0,opjectBeforeEdit:{},currentobject:{}}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center"},{name:"name",title:this.$t("tables.headings.name")},{name:"__slot:actions",dataClass:"text-right"}]}},created:function(){this.readItems()},methods:{readItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0;var a={PageSize:this.perPage,PageNumber:e};c["a"].getAllPagnation(a).then((function(e){t.dataTable=e.data;var a=JSON.parse(e.headers["x-pagination"]);t.totalPages=a.TotalPages,t.loading=!1}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},create:function(){var t=this;c["a"].create(this.currentobject).then((function(e){t.dataTable.push(e.data),"true"===e.headers["x-status"]?(t.loading=!1,t.currentobject={},t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})):(t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"}))}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},edit:function(t){var e=this;c["a"].update(this.currentobject.id,this.currentobject).then((function(t){if("true"===t.headers["x-status"]){var a=e.dataTable.findIndex((function(t){return t.id===e.currentobject.id}));e.dataTable[a].name=e.currentobject.name,e.currentobject={},e.loading=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})}else e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},remove:function(t){var e=this;c["a"].delete(t).then((function(a){if("true"===a.headers["x-status"]){var n=e.dataTable.findIndex((function(e){return e.id===t}));e.dataTable.splice(n,1),e.loading=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})}else e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},showDeleteModal:function(t){this.deleteModal=!0,this.currentobject=t,this.loading=!0},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.loading=!1},showEditModal:function(t){this.editModal=!0,this.opjectBeforeEdit=Object.assign({},t),this.currentobject=t,this.loading=!0},okEditfun:function(){this.edit(this.currentobject)},cancleEditfun:function(){this.loading=!1,console.log("ddd"),Object.assign(this.currentobject,this.opjectBeforeEdit),this.currentobject={}},showCreateModal:function(){this.createModal=!0,this.loading=!0},okCreatefun:function(){this.create()},cancleCreatefun:function(){this.loading=!1,this.currentobject={}}}},l=s,u=(a("dc17"),a("2877")),d=Object(u["a"])(l,i,r,!1,null,null,null),f=d.exports,h={name:"Units",components:{UnitsTable:f},data:function(){return{}}},m=h,b=(a("40e1"),Object(u["a"])(m,n,o,!1,null,null,null));e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-eb4915c0.cd77852e.js.map