(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ab2756"],{"0c25":function(t,e,a){"use strict";var n=a("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}var s=function(){function t(){o(this,t)}return i(t,[{key:"getAll",value:function(){return n["a"].get("City")}},{key:"getAllPagnation",value:function(t){return n["a"].get("City",{params:t})}},{key:"get",value:function(t){return n["a"].get("City/getById?Id=".concat(t))}},{key:"create",value:function(t){return n["a"].post("City",t)}},{key:"update",value:function(t,e){return n["a"].put("City?Id=".concat(t),e)}},{key:"delete",value:function(t){return n["a"].delete("City?Id=".concat(t))}}]),t}();e["a"]=new s},"390d":function(t,e,a){"use strict";var n=a("84ab"),o=a.n(n);o.a},"646b":function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var i=function(){function t(){n(this,t)}return r(t,[{key:"riquierdvalidation",value:function(t){return null==t||""===t}},{key:"numircvalidation",value:function(t){return!!isNaN(t)||(isNaN(t),!1)}},{key:"numircriquierdvalidation",value:function(t){return!!isNaN(t)||!(!isNaN(t)&&null!=t&&""!==t)}},{key:"validateEmail",value:function(t){var e=/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!e.test(t)}},{key:"validatePhone",value:function(t){var e=/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{5,6}$/im;return!e.test(t)}},{key:"todayDate",value:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return e}},{key:"formatDate",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("en-GB",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(t).toLocaleDateString("en-GB",n)}}]),t}();e["a"]=new i},"84ab":function(t,e,a){},c427:function(t,e,a){"use strict";var n=a("bc3a"),o=a.n(n);e["a"]=o.a.create({baseURL:"http://mahmmoudahmed-001-site7.ftempurl.com/api/v1/",headers:{"Content-type":"application/json"}})},dc15:function(t,e,a){"use strict";var n=a("dfc2"),o=a.n(n);o.a},dfc2:function(t,e,a){},eb8e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("customerslist-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("va-card",{staticClass:"w-100",attrs:{title:t.$t("tables.labelcustomerslist")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",flat:""},on:{click:t.showCreateModal},slot:"actions"}),a("va-data-table",{attrs:{fields:t.fields,data:t.dataTable,loading:t.loading,totalPages:t.totalPages,"api-mode":"",hoverable:""},on:{"page-selected":t.readItems},scopedSlots:t._u([{key:"marker",fn:function(e){return[t._v(" "+t._s(e.rowIndex+1)+" ")]}},{key:"is_vip",fn:function(e){return[t._v(" "+t._s(e.rowData.is_vip?"✔":"✘")+" ")]}},{key:"accounts",fn:function(e){return[t._v(" "+t._s(null===e.rowData.accounts?"-----":e.rowData.accounts.name)+" ")]}},{key:"actions",fn:function(e){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return t.showEditModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.edit"))+" ")]),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(a){return t.showDeleteModal(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.delete"))+" ")])]}}])}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.deleteItemTitle"),okText:t.$t("modal.delete"),cancelText:t.$t("modal.cancel"),message:t.$t("generic.deleteItemMsg")},on:{ok:function(e){return t.okDeletefun()},cancel:function(e){return t.cancleDeletefun()}},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:t.$t(t.modelTitle),"hide-default-actions":""},model:{value:t.createModal,callback:function(e){t.createModal=e},expression:"createModal"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.editModal?t.okEditfun():t.okCreatefun()}}},[a("div",{staticClass:"row flex-center"},[a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.name"))+" ")]),a("va-input",{attrs:{error:t.riquierdvalidation(t.currentobject.name),"error-messages":t.$t("errorMessage.required"),placeholder:t.$t("placeholder.name"),required:""},model:{value:t.currentobject.name,callback:function(e){t.$set(t.currentobject,"name",e)},expression:"currentobject.name"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.email"))+" ")]),a("va-input",{attrs:{error:t.validateEmail(t.currentobject.email),"error-messages":t.$t("errorMessage.email"),placeholder:t.$t("placeholder.email")},model:{value:t.currentobject.email,callback:function(e){t.$set(t.currentobject,"email",e)},expression:"currentobject.email"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("va-input",{attrs:{error:t.validatePhone(t.currentobject.phone),"error-messages":t.$t("errorMessage.phone"),placeholder:t.$t("placeholder.phone"),required:""},model:{value:t.currentobject.phone,callback:function(e){t.$set(t.currentobject,"phone",e)},expression:"currentobject.phone"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.ssn"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.ssn")},model:{value:t.currentobject.ssn,callback:function(e){t.$set(t.currentobject,"ssn",e)},expression:"currentobject.ssn"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.location_Long"))+" ")]),a("va-input",{attrs:{type:"number",placeholder:t.$t("placeholder.location_Long")},model:{value:t.currentobject.location_Long,callback:function(e){t.$set(t.currentobject,"location_Long",e)},expression:"currentobject.location_Long"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.location_Lat"))+" ")]),a("va-input",{attrs:{type:"number",placeholder:t.$t("placeholder.locaation_Lat")},model:{value:t.currentobject.locaation_Lat,callback:function(e){t.$set(t.currentobject,"locaation_Lat",e)},expression:"currentobject.locaation_Lat"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.address"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.address")},model:{value:t.currentobject.address,callback:function(e){t.$set(t.currentobject,"address",e)},expression:"currentobject.address"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.city"))+" ")]),a("va-select",{attrs:{label:t.$t("placeholder.city"),required:"",searchable:"",textBy:"name",keyBy:"id",options:t.fKCity.options},model:{value:t.fKCity.value,callback:function(e){t.$set(t.fKCity,"value",e)},expression:"fKCity.value"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("va-checkbox",{attrs:{label:t.$t("placeholder.is_vip")},model:{value:t.currentobject.is_vip,callback:function(e){t.$set(t.currentobject,"is_vip",e)},expression:"currentobject.is_vip"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("va-checkbox",{attrs:{label:t.$t("placeholder.Customer_Type")},model:{value:t.currentobject.Customer_Type,callback:function(e){t.$set(t.currentobject,"Customer_Type",e)},expression:"currentobject.Customer_Type"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.notes"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.notes")},model:{value:t.currentobject.notes,callback:function(e){t.$set(t.currentobject,"notes",e)},expression:"currentobject.notes"}})],1)]),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(e){t.editModal?t.cancleEditfun():t.cancleCreatefun()}}},[t._v(" "+t._s(t.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:t.stopBtn}},[t._v(t._s(t.$t(t.modelOktext)))])],1)])])],1)},i=[],s=a("fadf"),c=a("0c25"),l=a("646b"),u={data:function(){return{modelTitle:"",modelOktext:"",stopBtn:!1,perPage:10,totalPages:0,dataTable:[],deleteModal:!1,editModal:!1,createModal:!1,loading:!0,opjectBeforeEdit:{},currentobject:{},fKCity:{value:"",options:[]}}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"name",title:this.$t("tables.headings.name")},{name:"phone",title:this.$t("tables.headings.phone")},{name:"__slot:is_vip",title:this.$t("tables.headings.is_vip")},{name:"address",title:this.$t("tables.headings.address")},{name:"maxDepit",title:this.$t("tables.headings.maxDepit")},{name:"notes",title:this.$t("tables.headings.notes")},{name:"__slot:accounts",title:this.$t("tables.headings.name_Accounts")},{name:"__slot:actions",dataClass:"text-right"}]}},created:function(){this.readItems(),this.getcites()},methods:{riquierdvalidation:function(t){return l["a"].riquierdvalidation(t)},numircvalidation:function(t){return l["a"].numircvalidation(t)},numircriquierdvalidation:function(t){return l["a"].numircriquierdvalidation(t)},validateEmail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null!==t&&void 0!==t&&""!==t&&(t.length>=1&&l["a"].validateEmail(t))},validatePhone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null!==t&&void 0!==t&&""!==t&&(t.length>=1&&l["a"].validatePhone(t))},readItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0;var a={PageSize:this.perPage,PageNumber:e,Customer_type:1};s["a"].getAllPagnation(a).then((function(e){t.loading=!1,t.dataTable=e.data;var a=JSON.parse(e.headers["x-pagination"]);t.totalPages=a.TotalPages}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},getcites:function(){var t=this;c["a"].getAll().then((function(e){t.fKCity.options=e.data}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},create:function(){var t=this;""!==this.fKCity.value&&(this.currentobject.fK_City=this.fKCity.value.id),this.currentobject.Customer_Type?this.currentobject.fK_Customer_Type=2:this.currentobject.fK_Customer_Type=1,s["a"].create(this.currentobject).then((function(e){"true"===e.headers["x-status"]?(t.readItems(),t.loading=!1,t.currentobject={},t.fKCity.value="",t.createModal=!1,t.stopBtn=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})):(t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"}))}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},edit:function(t){var e=this;""!==this.fKCity.value&&(this.currentobject.fK_City=this.fKCity.value.id),this.currentobject.Customer_Type?this.currentobject.fK_Customer_Type=2:this.currentobject.fK_Customer_Type=1,s["a"].update(this.currentobject.id,this.currentobject).then((function(t){"true"===t.headers["x-status"]?(e.readItems(),e.currentobject={},e.fKCity.value="",e.loading=!1,e.editModal=!1,e.createModal=!1,e.stopBtn=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})):(e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},remove:function(t){var e=this;s["a"].delete(t).then((function(a){if("true"===a.headers["x-status"]){var n=e.dataTable.findIndex((function(e){return e.id===t}));e.dataTable.splice(n,1),e.loading=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-right",duration:1500,type:"success"})}else e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-right",duration:1500,type:"error"})}))},showDeleteModal:function(t){this.deleteModal=!0,this.currentobject=t},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.loading=!1},showEditModal:function(t){this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.createModal=!0,this.fKCity.value=t.city,this.opjectBeforeEdit=Object.assign({},t),this.currentobject=t,this.currentobject.Customer_Type=2===this.currentobject.fK_Customer_Type,this.loading=!0},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){Object.assign(this.currentobject,this.opjectBeforeEdit),this.createModal=!1,this.loading=!1,this.currentobject={},this.fKCity.value="",this.editModal=!1,this.stopBtn=!1},showCreateModal:function(){this.modelTitle="generic.creatItemTitle",this.modelOktext="modal.create",this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={},this.fKCity.value="",this.stopBtn=!1}}},d=u,f=(a("390d"),a("2877")),m=Object(f["a"])(d,r,i,!1,null,null,null),h=m.exports,p={name:"customerslist",components:{customerslistTable:h},data:function(){return{}}},v=p,b=(a("dc15"),Object(f["a"])(v,n,o,!1,null,null,null));e["default"]=b.exports},fadf:function(t,e,a){"use strict";var n=a("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}var s=function(){function t(){o(this,t)}return i(t,[{key:"getAll",value:function(t){return n["a"].get("Customers",{params:t})}},{key:"getAllPagnation",value:function(t){return n["a"].get("CustomersPaging",{params:t})}},{key:"get",value:function(t){return n["a"].get("Customers/getById?Id=".concat(t))}},{key:"create",value:function(t){return n["a"].post("Customers",t)}},{key:"update",value:function(t,e){return n["a"].put("Customers?Id=".concat(t),e)}},{key:"delete",value:function(t){return n["a"].delete("Customers?Id=".concat(t))}}]),t}();e["a"]=new s}}]);
//# sourceMappingURL=chunk-65ab2756.90584e1f.js.map