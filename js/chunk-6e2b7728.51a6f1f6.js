(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2b7728"],{"1afb":function(t,e,a){"use strict";var n=a("bbeb"),i=a.n(n);i.a},3526:function(t,e,a){"use strict";var n=a("4888"),i=a.n(n);i.a},4888:function(t,e,a){},b2d2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("invoices-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("va-card",{staticClass:"w-100",attrs:{title:t.$t("tables.labelinvoices")}},[a("div",{staticClass:"row ml-0"},[a("div",{staticClass:"flex xs12 sm4"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("forms.search"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("forms.search")},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-search",flat:"",color:"success"},on:{click:t.search},slot:"actions"}),a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-trash",flat:"",color:"danger"},on:{click:t.deletesearch},slot:"actions"}),a("div",{staticClass:"flex xs12 md3"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.invType"))+" ")]),a("va-select",{attrs:{label:t.$t("placeholder.invType"),options:t.invOptions,noClear:""},model:{value:t.invtypeString,callback:function(e){t.invtypeString=e},expression:"invtypeString"}})],1)],1),a("va-data-table",{attrs:{fields:t.fields,data:t.dataTable,loading:t.loading,totalPages:t.totalPages,"no-pagination":t.searchBool,"api-mode":"",hoverable:""},on:{"page-selected":t.readItems},scopedSlots:t._u([{key:"marker",fn:function(e){return[t._v(" "+t._s(e.rowIndex+1)+" ")]}},{key:"date",fn:function(e){return[t._v(" "+t._s(t.formatDate(e.rowData.date))+" ")]}},{key:"is_Cash",fn:function(e){return[t._v(" "+t._s(e.rowData.is_Cash?"✔":"✘")+" ")]}},{key:"iS_Paid",fn:function(e){return[t._v(" "+t._s(e.rowData.iS_Paid?"✔":"✘")+" ")]}},{key:"inv_dueDate",fn:function(e){return[t._v(" "+t._s(t.formatDate(e.rowData.inv_dueDate))+" ")]}},{key:"customers",fn:function(e){return[t._v(" "+t._s(null===e.rowData.customers?"-----":e.rowData.customers.name)+" ")]}},{key:"employees",fn:function(e){return[t._v(" "+t._s(null===e.rowData.employees?"-----":e.rowData.employees.name)+" ")]}},{key:"actions",fn:function(e){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return t.showEditModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.edit"))+" ")])]}}])}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.deleteItemTitle"),okText:t.$t("modal.delete"),cancelText:t.$t("modal.cancel"),message:t.$t("generic.deleteItemMsg")},on:{ok:function(e){return t.okDeletefun()},cancel:function(e){return t.cancleDeletefun()}},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:t.$t(t.modelTitle),"hide-default-actions":""},model:{value:t.createModal,callback:function(e){t.createModal=e},expression:"createModal"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.editModal?t.okEditfun():t.okCreatefun()}}},[a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(e){t.editModal?t.cancleEditfun():t.cancleCreatefun()}}},[t._v(" "+t._s(t.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:t.stopBtn}},[t._v(t._s(t.$t(t.modelOktext)))])],1)])])],1)},r=[],s=a("fe5e"),c={data:function(){return{modelTitle:"",modelOktext:"",stopBtn:!1,perPage:10,totalPages:0,inv_type:1,invtypeString:"sell",invOptions:["sell","buy","RSaleInv","RbuyInv","PreviewInv"],OrderBy:null,dataTable:[],deleteModal:!1,editModal:!1,createModal:!1,loading:!0,opjectBeforeEdit:{},currentobject:{},fKCity:{value:"",options:[]},searchText:"",searchBool:!1}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"__slot:date",title:this.$t("tables.headings.date")},{name:"total_Price",title:this.$t("tables.headings.total_Price")},{name:"__slot:is_Cash",title:this.$t("tables.headings.is_Cash")},{name:"__slot:iS_Paid",title:this.$t("tables.headings.iS_Paid")},{name:"paid",title:this.$t("tables.headings.paid")},{name:"tax",title:this.$t("tables.headings.tax")},{name:"__slot:inv_dueDate",title:this.$t("tables.headings.inv_dueDate")},{name:"__slot:customers",title:this.$t("tables.headings.customers")},{name:"__slot:employees",title:this.$t("tables.headings.employees")},{name:"__slot:actions",dataClass:"text-right"}]}},watch:{invtypeString:function(){switch(this.invtypeString){case"sell":this.inv_type=1;break;case"buy":this.inv_type=2;break;case"RSaleInv":this.inv_type=3;break;case"RbuyInv":this.inv_type=4;break;case"PreviewInv":this.inv_type=5;break;default:this.inv_type=1;break}this.readItems()}},created:function(){this.readItems()},methods:{readItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0;var a={PageSize:this.perPage,PageNumber:e,OrderBy:this.OrderBy,inv_type:this.inv_type,Fk_CompanyActivity:1};s["a"].getAllPagnation(a).then((function(e){t.loading=!1,t.dataTable=e.data;var a=JSON.parse(e.headers["x-pagination"]);t.totalPages=a.TotalPages}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},formatDate:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("en-GB",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(t).toLocaleDateString("en-GB",n)},search:function(){var t=this;this.loading=!0;var e={Text:this.searchText};this.dataTable=[],s["a"].search(e).then((function(e){t.dataTable=e.data,t.totalPages=Math.ceil(t.dataTable.length/10),t.loading=!1}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},deletesearch:function(){this.searchText="",this.searchBool=!1,this.readItems()},create:function(){var t=this;""!==this.fKCity.value&&(this.currentobject.fK_City=this.fKCity.value.id),this.currentobject.Customer_Type?this.currentobject.fK_Customer_Type=2:this.currentobject.fK_Customer_Type=1,s["a"].create(this.currentobject).then((function(e){"true"===e.headers["x-status"]?(t.readItems(),t.loading=!1,t.currentobject={},t.fKCity="",t.createModal=!1,t.stopBtn=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})):(t.loading=!1,t.stopBtn=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(e){console.error(e),t.loading=!1,t.stopBtn=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},edit:function(t){var e=this;""!==this.fKCity.value&&(this.currentobject.fK_City=this.fKCity.value.id),this.currentobject.Customer_Type?this.currentobject.fK_Customer_Type=2:this.currentobject.fK_Customer_Type=1,s["a"].update(this.currentobject.id,this.currentobject).then((function(t){"true"===t.headers["x-status"]?(e.readItems(),e.currentobject={},e.fKCity.value="",e.loading=!1,e.editModal=!1,e.createModal=!1,e.stopBtn=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})):(e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},remove:function(t){var e=this;s["a"].delete(t).then((function(a){if("true"===a.headers["x-status"]){var n=e.dataTable.findIndex((function(e){return e.id===t}));e.dataTable.splice(n,1),e.loading=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})}else e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},showDeleteModal:function(t){this.deleteModal=!0,this.currentobject=t,this.Productpriceloading=!0},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.loading=!1,this.stopBtn=!1},showEditModal:function(t){this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.createModal=!0,this.fKCity.value=t.city,this.opjectBeforeEdit=Object.assign({},t),this.currentobject=t,this.currentobject.Customer_Type=2===this.currentobject.fK_Customer_Type,this.loading=!0},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){Object.assign(this.currentobject,this.opjectBeforeEdit),this.createModal=!1,this.loading=!1,this.currentobject={},this.fKCity.value="",this.editModal=!1,this.stopBtn=!1},showCreateModal:function(){this.modelTitle="generic.creatItemTitle",this.modelOktext="modal.create",this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={},this.fKCity.value="",this.stopBtn=!1}}},l=c,u=(a("1afb"),a("2877")),d=Object(u["a"])(l,o,r,!1,null,null,null),h=d.exports,f={name:"invoices",components:{invoicesTable:h},data:function(){return{}}},m=f,p=(a("3526"),Object(u["a"])(m,n,i,!1,null,null,null));e["default"]=p.exports},bbeb:function(t,e,a){},c427:function(t,e,a){"use strict";var n=a("bc3a"),i=a.n(n);e["a"]=i.a.create({baseURL:"https://cors-anywhere.herokuapp.com/mahmmoudahmed-001-site7.ftempurl.com/api/v1/",headers:{"Content-type":"application/json"}})},fe5e:function(t,e,a){"use strict";var n=a("c427");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var s=function(){function t(){i(this,t)}return r(t,[{key:"getNewBill",value:function(t,e){return n["a"].get("Bill/GetProductsByCustomer?id=".concat(t,"&Company_Activity=").concat(e))}},{key:"getUintAndPriceByCUstomer",value:function(t,e){return n["a"].get("Bill/GetProductUintAndPrice?productId=".concat(t,"&customerId=").concat(e))}},{key:"getSearchBill",value:function(t){return n["a"].get("GetByInv_billOrDate",{params:t})}},{key:"search",value:function(t){return n["a"].get("Bill/Search",{params:t})}},{key:"getAll",value:function(){return n["a"].get("Bill")}},{key:"getAllPagnation",value:function(t){return n["a"].get("Bill/GetAllPaging",{params:t})}},{key:"get",value:function(t){return n["a"].get("Bill/getById?Id=".concat(t))}},{key:"create",value:function(t){return n["a"].post("Bill",t)}},{key:"update",value:function(t,e){return n["a"].put("Bill?Id=".concat(t),e)}},{key:"delete",value:function(t){return n["a"].delete("Bill?Id=".concat(t))}}]),t}();e["a"]=new s}}]);
//# sourceMappingURL=chunk-6e2b7728.51a6f1f6.js.map