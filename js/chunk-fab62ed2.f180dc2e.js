(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fab62ed2"],{1577:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contanier"},[n("div",{staticClass:"row"},[n("StockTransaction-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("va-card",{staticClass:"w-100",attrs:{title:t.$t("tables.labelStocktransction")}},[n("div",{staticClass:"row"},[n("div",{staticClass:"flex md12 sm12"},[n("va-data-table",{attrs:{fields:t.fields,data:t.dataTable,loading:t.loading,totalPages:t.totalPages,"api-mode":"",hoverable:""},on:{"page-selected":t.readItems},scopedSlots:t._u([{key:"marker",fn:function(e){return[t._v(" "+t._s(e.rowIndex+1)+" ")]}},{key:"status",fn:function(e){return[e.rowData.is_Finish&&e.rowData.is_Seen&&null!==e.rowData.delivery?n("va-badge",{attrs:{color:"secondary"}},[t._v(" "+t._s(t.$t("tables.is_Shiped"))+" ")]):e.rowData.is_Finish&&e.rowData.is_Seen?n("va-badge",{attrs:{color:"success"}},[t._v(" "+t._s(t.$t("tables.is_finshed"))+" ")]):e.rowData.is_Seen&&e.rowData.is_Pending?n("va-badge",{attrs:{color:"info"}},[t._v(" "+t._s(t.$t("tables.is_Pending"))+" ")]):e.rowData.is_Seen?n("va-badge",{attrs:{color:"warning"}},[t._v(" "+t._s(t.$t("tables.is_SeenONly"))+" ")]):e.rowData.is_Finish||e.rowData.is_Seen?t._e():n("va-badge",{attrs:{color:"danger"}},[t._v(" "+t._s(t.$t("tables.is_SeenAndIsfinish"))+" ")])]}},{key:"quantity",fn:function(e){return[t._v(" "+t._s(e.rowData.tr_Stock_Subs.length)+" ")]}},{key:"actions",fn:function(e){return[n("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"dark",disabled:e.rowData.is_Finish&&e.rowData.is_Seen&&null!==e.rowData.delivery},on:{click:function(n){return t.showEditModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.loadingShipment"))+" ")])]}}])}),n("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:t.$t(t.modelTitle),"hide-default-actions":""},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[n("va-data-table",{attrs:{fields:t.checkFildes,data:t.tr_Stock_Subs,hoverable:""},scopedSlots:t._u([{key:"select",fn:function(e){return[n("va-checkbox",{attrs:{value:e.rowData.is_checked},on:{input:function(n){return t.selectProduct(e.rowIndex)}}})]}},{key:"product",fn:function(e){return[t._v(" "+t._s(e.rowData.products.name)+" ")]}},{key:"units",fn:function(e){return[t._v(" "+t._s(e.rowData.units.name)+" ")]}},{key:"stock",fn:function(e){return[t._v(" "+t._s(e.rowData.stock.name)+" ")]}}])}),n("div",{staticClass:"row pt-3",staticStyle:{"justify-content":"center"}},[n("va-button",{attrs:{color:"success"},on:{click:function(e){return t.okEditfun()}}},[t._v(" "+t._s(t.$t("tables.finished")))]),n("va-button",{attrs:{color:"info"},on:{click:function(e){return t.showEditModal(t.props.rowData)}}},[t._v(" "+t._s(t.$t("tables.pending")))]),n("va-button",{attrs:{color:"danger"},on:{click:function(e){return t.cancleEditfun()}}},[t._v(" "+t._s(t.$t("tables.cancel")))])],1)],1),n("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:t.$t(t.modelTitle),"hide-default-actions":""},model:{value:t.deliveryModal,callback:function(e){t.deliveryModal=e},expression:"deliveryModal"}},[n("div",{staticClass:"row"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.okdeliveryfun()}}},[n("div",{staticClass:"flex md12 sm12 xs12"},[n("va-select",{attrs:{label:t.$t("placeholder.delivery"),searchable:"",textBy:"name",keyBy:"id",options:t.delivery.options},model:{value:t.delivery.value,callback:function(e){t.$set(t.delivery,"value",e)},expression:"delivery.value"}})],1),n("div",{staticClass:"d-flex justify--center mt-3"},[n("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(e){return t.cancledeliveryfun()}}},[t._v(" "+t._s(t.$t("modal.cancel"))+" ")]),n("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:t.stopBtn}},[t._v(t._s(t.$t("modal.ship")))])],1)])])])],1)])])},s=[],r=n("966e"),c=n("9c0c"),l={data:function(){return{modelTitle:"",modelOktext:"",stopBtn:!1,is_view:!1,perPage:10,totalPages:0,dataTable:[],tr_Stock_Subs:[],editModal:!1,deliveryModal:!1,loading:!0,is_seen:!1,opjectBeforeEdit:{},delivery:{value:"",options:[]}}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"__slot:status",title:this.$t("tables.headings.status")},{name:"__slot:quantity",title:this.$t("tables.headings.quantity")},{name:"__slot:actions",dataClass:"text-right"}]},checkFildes:function(){return[{name:"__slot:select",width:"30px",dataClass:"text-center",title:"#"},{name:"__slot:product",title:this.$t("tables.headings.product")},{name:"quantity",title:this.$t("tables.headings.quantity")},{name:"__slot:units",title:this.$t("tables.headings.units")},{name:"__slot:stock",title:this.$t("tables.headings.stock")}]}},created:function(){this.readItems()},methods:{selectProduct:function(t){this.currentobject.tr_Stock_Subs[t].is_checked=!this.currentobject.tr_Stock_Subs[t].is_checked},readItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,console.log("fkghg");var n={PageSize:this.perPage,PageNumber:e,type:1};r["a"].getAllPagnation(n).then((function(e){console.log(e),t.dataTable=e.data;var n=JSON.parse(e.headers["x-pagination"]);t.totalPages=n.TotalPages,t.loading=!1}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getdelivery:function(){var t=this;c["a"].getAll().then((function(e){t.delivery.options=e.data}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},edit:function(t){var e=this;r["a"].update(this.currentobject.id,this.currentobject).then((function(t){"true"===t.headers["x-status"]?(e.readItems(),e.currentobject={},e.loading=!1,e.stopBtn=!1,e.is_seen||(e.editModal=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"}))):(e.loading=!1,e.stopBtn=!1,e.editModal=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},showEditModal:function(t){this.tr_Stock_Subs=t.tr_Stock_Subs,this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.opjectBeforeEdit=Object.assign({},t),this.currentobject=t,this.currentobject.is_Seen||(this.is_seen=!0,this.currentobject.is_Seen=!0)},okEditfun:function(){this.stopBtn=!0,this.getdelivery(),this.editModal=!1,this.currentobject.is_Finish=!0,this.edit(this.currentobject),this.deliveryModal=!0},pendingEditfun:function(){this.currentobject.is_Pending=!0,this.edit(this.currentobject),this.editModal=!1},cancleEditfun:function(){this.editModal=!1,this.loading=!1,this.stopBtn=!1,Object.assign(this.currentobject,this.opjectBeforeEdit)},okdeliveryfun:function(){this.stopBtn=!0,""!==this.delivery.value?this.currentobject.fK_Delivery=this.delivery.value.id:this.showToast(this.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),this.edit(this.currentobject)},cancledeliveryfun:function(){this.deliveryModal=!1}}},u=l,d=(n("7186"),n("2877")),f=Object(d["a"])(u,i,s,!1,null,null,null),h=f.exports,v={name:"StockTransaction",components:{StockTransactionTable:h},data:function(){return{}}},_=v,p=(n("d0a7"),Object(d["a"])(_,a,o,!1,null,null,null));e["default"]=p.exports},"68c5":function(t,e,n){},7186:function(t,e,n){"use strict";var a=n("68c5"),o=n.n(a);o.a},"966e":function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r=function(){function t(){o(this,t)}return s(t,[{key:"getAll",value:function(){return a["a"].get("Tr_Stock")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Tr_Stock",{params:t})}},{key:"get",value:function(t){return a["a"].get("Tr_Stock/getById?Id=".concat(t))}},{key:"create",value:function(t){return a["a"].post("Tr_Stock",t)}},{key:"search",value:function(t){return a["a"].get("Tr_Stock/Search",{params:t})}},{key:"update",value:function(t,e){return a["a"].put("Tr_Stock?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Tr_Stock?Id=".concat(t))}}]),t}();e["a"]=new r},"9c0c":function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r=function(){function t(){o(this,t)}return s(t,[{key:"getAll",value:function(){return a["a"].get("Employees")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Employees",{params:t})}},{key:"get",value:function(t){return a["a"].get("Employees/getById?Id=".concat(t))}},{key:"search",value:function(t){return a["a"].get("Employees/Search",{params:t})}},{key:"create",value:function(t){return a["a"].post("Employees",t)}},{key:"update",value:function(t,e){return a["a"].put("Employees?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Employees?Id=".concat(t))}}]),t}();e["a"]=new r},c427:function(t,e,n){"use strict";var a=n("bc3a"),o=n.n(a);e["a"]=o.a.create({baseURL:"https://cors-anywhere.herokuapp.com/mahmmoudahmed-001-site7.ftempurl.com/api/v1/",headers:{"Content-type":"application/json"}})},d0a7:function(t,e,n){"use strict";var a=n("e7e0"),o=n.n(a);o.a},e7e0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-fab62ed2.f180dc2e.js.map