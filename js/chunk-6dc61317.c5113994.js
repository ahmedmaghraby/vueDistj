(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dc61317"],{"2f25":function(e,t,a){"use strict";var n=a("c427");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}var s=function(){function e(){r(this,e)}return i(e,[{key:"getAll",value:function(){return n["a"].get("Branchs")}},{key:"getAllPagnation",value:function(e){return n["a"].get("BranchsPaging",{params:e})}},{key:"get",value:function(e){return n["a"].get("Branchs/getById?Id=".concat(e))}},{key:"create",value:function(e){return n["a"].post("Branchs",e)}},{key:"search",value:function(e){return n["a"].get("Branchs/Search",{params:e})}},{key:"update",value:function(e,t){return n["a"].put("Branchs?Id=".concat(e),t)}},{key:"delete",value:function(e){return n["a"].delete("Branchs?Id=".concat(e))}}]),e}();t["a"]=new s},"407d":function(e,t,a){},"646b":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}var i=function(){function e(){n(this,e)}return o(e,[{key:"riquierdvalidation",value:function(e){return null==e||""===e}},{key:"numircvalidation",value:function(e){return!!isNaN(e)||(isNaN(e),!1)}},{key:"numircriquierdvalidation",value:function(e){return!!isNaN(e)||!(!isNaN(e)&&null!=e&&""!==e)}},{key:"validateEmail",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!t.test(e)}},{key:"validatePhone",value:function(e){var t=/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{5,6}$/im;return!t.test(e)}},{key:"todayDate",value:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return t}},{key:"currentDateTime",value:function(){var e=new Date,t=[e.getFullYear(),"-",e.getMonth()+1,"-",e.getDate(),"T",e.getHours(),":",e.getMinutes(),":",e.getSeconds()].join("");return t}},{key:"formatDate",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(e).toLocaleDateString("en-GB",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(e).toLocaleDateString("en-GB",n)}}]),e}();t["a"]=new i},"84f6":function(e,t,a){"use strict";var n=a("de08"),r=a.n(n);r.a},9416:function(e,t,a){"use strict";var n=a("407d"),r=a.n(n);r.a},"9c0c":function(e,t,a){"use strict";var n=a("c427");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}var s=function(){function e(){r(this,e)}return i(e,[{key:"getAll",value:function(){return n["a"].get("Employees")}},{key:"getAllPagnation",value:function(e){return n["a"].get("Employees",{params:e})}},{key:"get",value:function(e){return n["a"].get("Employees/getById?Id=".concat(e))}},{key:"search",value:function(e){return n["a"].get("Employees/Search",{params:e})}},{key:"create",value:function(e){return n["a"].post("Employees",e)}},{key:"update",value:function(e,t){return n["a"].put("Employees?Id=".concat(e),t)}},{key:"delete",value:function(e){return n["a"].delete("Employees?Id=".concat(e))}}]),e}();t["a"]=new s},c427:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n);t["a"]=r.a.create({baseURL:"https://yellow-sun.net/api/v1/",headers:{"Content-type":"application/json"}})},de08:function(e,t,a){},fb43:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("Employees-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("va-card",{staticClass:"w-100",attrs:{title:e.$t("tables.labelEmployees")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",flat:""},on:{click:e.showCreateModal},slot:"actions"}),a("div",{staticClass:"row mr-0"},[a("div",{staticClass:"flex xs12 sm4"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("forms.search"))+" ")]),a("va-input",{attrs:{removable:"",placeholder:e.$t("forms.search")},on:{input:e.searchDelay,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)]),a("va-data-table",{attrs:{fields:e.fields,data:e.dataTable,loading:e.loading,totalPages:e.totalPages,"no-pagination":e.searchBool,"api-mode":"",hoverable:""},on:{"page-selected":e.readItems},scopedSlots:e._u([{key:"marker",fn:function(t){return[e._v(" "+e._s(t.rowIndex+1+10*(e.pageNumber-1))+" ")]}},{key:"is_Delivery",fn:function(t){return[e._v(" "+e._s(t.rowData.is_Delivery?"✔":"✘")+" ")]}},{key:"work_Date",fn:function(t){return[e._v(" "+e._s(e.formatDate(t.rowData.work_Date))+" ")]}},{key:"branchs",fn:function(t){return[e._v(" "+e._s(null===t.rowData.branchs?"-----":t.rowData.branchs.name)+" ")]}},{key:"actions",fn:function(t){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return e.showEditModal(t.rowData)}}},[e._v(" "+e._s(e.$t("tables.edit"))+" ")]),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(a){return e.showDeleteModal(t.rowData)}}},[e._v(" "+e._s(e.$t("tables.delete"))+" ")])]}}])}),a("va-modal",{attrs:{"no-outside-dismiss":"",title:e.$t("generic.deleteItemTitle"),okText:e.$t("modal.delete"),cancelText:e.$t("modal.cancel"),message:e.$t("generic.deleteItemMsg")},on:{ok:function(t){return e.okDeletefun()},cancel:function(t){return e.cancleDeletefun()}},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:e.$t(e.modelTitle),"hide-default-actions":""},model:{value:e.createModal,callback:function(t){e.createModal=t},expression:"createModal"}},[a("form",{on:{submit:function(t){t.preventDefault(),e.editModal?e.okEditfun():e.okCreatefun()}}},[a("div",{staticClass:"row flex-center"},[a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.name")+" *")+" ")]),a("va-input",{attrs:{error:e.riquierdvalidation(e.currentobject.name),"error-messages":e.$t("errorMessage.required"),placeholder:e.$t("placeholder.name"),required:""},model:{value:e.currentobject.name,callback:function(t){e.$set(e.currentobject,"name",t)},expression:"currentobject.name"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.email"))+" ")]),a("va-input",{attrs:{error:e.validateEmail(e.currentobject.email),"error-messages":e.$t("errorMessage.email"),placeholder:e.$t("placeholder.email")},model:{value:e.currentobject.email,callback:function(t){e.$set(e.currentobject,"email",t)},expression:"currentobject.email"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.phone")+" *")+" ")]),a("va-input",{attrs:{error:e.validatePhone(e.currentobject.mobile),"error-messages":e.$t("errorMessage.phone"),placeholder:e.$t("placeholder.phone"),required:""},model:{value:e.currentobject.mobile,callback:function(t){e.$set(e.currentobject,"mobile",t)},expression:"currentobject.mobile"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.ssn"))+" ")]),a("va-input",{attrs:{placeholder:e.$t("placeholder.ssn")},model:{value:e.currentobject.ssn,callback:function(t){e.$set(e.currentobject,"ssn",t)},expression:"currentobject.ssn"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.salary_basic"))+" ")]),a("va-input",{attrs:{type:"number",min:"0",placeholder:e.$t("placeholder.salary_basic")},model:{value:e.currentobject.salary_basic,callback:function(t){e.$set(e.currentobject,"salary_basic",t)},expression:"currentobject.salary_basic"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.nationality"))+" ")]),a("va-input",{attrs:{placeholder:e.$t("placeholder.nationality")},model:{value:e.currentobject.nationality,callback:function(t){e.$set(e.currentobject,"nationality",t)},expression:"currentobject.nationality"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.address"))+" ")]),a("va-input",{attrs:{placeholder:e.$t("placeholder.address")},model:{value:e.currentobject.address,callback:function(t){e.$set(e.currentobject,"address",t)},expression:"currentobject.address"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.branchs")+" *")+" ")]),a("va-select",{attrs:{label:e.$t("placeholder.branchs"),required:"",searchable:"",textBy:"name",keyBy:"id",options:e.fK_Branchs.options},model:{value:e.fK_Branchs.value,callback:function(t){e.$set(e.fK_Branchs,"value",t)},expression:"fK_Branchs.value"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("va-checkbox",{attrs:{label:e.$t("placeholder.is_Delivery")},model:{value:e.currentobject.is_Delivery,callback:function(t){e.$set(e.currentobject,"is_Delivery",t)},expression:"currentobject.is_Delivery"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("va-checkbox",{attrs:{label:e.$t("placeholder.iS_Male")},model:{value:e.currentobject.iS_Male,callback:function(t){e.$set(e.currentobject,"iS_Male",t)},expression:"currentobject.iS_Male"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.birth_Date")+" *")+" ")]),a("va-date-picker",{attrs:{label:e.$t("placeholder.birth_Date"),required:""},model:{value:e.currentobject.birth_Date,callback:function(t){e.$set(e.currentobject,"birth_Date",t)},expression:"currentobject.birth_Date"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.work_Date")+" *")+" ")]),a("va-date-picker",{attrs:{label:e.$t("placeholder.work_Date"),required:""},model:{value:e.currentobject.work_Date,callback:function(t){e.$set(e.currentobject,"work_Date",t)},expression:"currentobject.work_Date"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.max_DisscountPercntage")+" *")+" ")]),a("va-input",{attrs:{type:"number",min:"0",max:"100",placeholder:e.$t("placeholder.max_DisscountPercntage"),required:""},model:{value:e.currentobject.max_DisscountPercntage,callback:function(t){e.$set(e.currentobject,"max_DisscountPercntage",t)},expression:"currentobject.max_DisscountPercntage"}})],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.notes"))+" ")]),a("va-input",{attrs:{placeholder:e.$t("placeholder.notes")},model:{value:e.currentobject.notes,callback:function(t){e.$set(e.currentobject,"notes",t)},expression:"currentobject.notes"}})],1)]),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(t){e.editModal?e.cancleEditfun():e.cancleCreatefun()}}},[e._v(" "+e._s(e.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:e.stopBtn}},[e._v(e._s(e.$t(e.modelOktext)))])],1)])])],1)},i=[],s=a("9c0c"),l=a("2f25"),c=a("2ef0"),u=a("646b"),d={data:function(){return{modelTitle:"",modelOktext:"",stopBtn:!1,perPage:10,totalPages:0,dataTable:[],deleteModal:!1,editModal:!1,createModal:!1,loading:!0,opjectBeforeEdit:{},currentobject:{nationality:"",birth_Date:"",work_Date:""},fK_Branchs:{value:"",options:[]},searchText:"",searchBool:!1,pageNumber:1}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"name",title:this.$t("tables.headings.name"),sortField:"name",sortCallBack:"sortCallBack|name"},{name:"mobile",title:this.$t("tables.headings.phone"),sortField:"name",sortCallBack:"sortCallBack|mobile"},{name:"ssn",title:this.$t("tables.headings.ssn"),sortField:"name",sortCallBack:"sortCallBack|ssn"},{name:"salary_basic",title:this.$t("tables.headings.salary_basic"),sortField:"name",sortCallBack:"sortCallBack|salary_basic"},{name:"__slot:work_Date",title:this.$t("tables.headings.work_Date"),sortField:"name",sortCallBack:"sortCallBack|work_Date"},{name:"notes",title:this.$t("tables.headings.notes")},{name:"__slot:branchs",title:this.$t("tables.headings.branchs"),sortField:"name",sortCallBack:"sortCallBack|branchs"},{name:"__slot:is_Delivery",title:this.$t("tables.headings.is_Delivery")},{name:"__slot:actions",dataClass:"text-right"}]}},created:function(){this.readItems(),this.getBranchs()},methods:{riquierdvalidation:function(e){return u["a"].riquierdvalidation(e)},numircvalidation:function(e){return u["a"].numircvalidation(e)},numircriquierdvalidation:function(e){return u["a"].numircriquierdvalidation(e)},validateEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null!==e&&void 0!==e&&""!==e&&(e.length>=1&&u["a"].validateEmail(e))},validatePhone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null!==e&&void 0!==e&&""!==e&&(e.length>=1&&u["a"].validatePhone(e))},formatDate:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(e).toLocaleDateString("en-GB",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(e).toLocaleDateString("en-GB",n)},sortCallBack:function(e){this.readItems(1,e[0].toString().charAt(0).toUpperCase()+e[0].toString().slice(1))},readItems:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.pageNumber=t,this.loading=!0;var n={PageSize:this.perPage,PageNumber:t,OrderBy:a};s["a"].getAllPagnation(n).then((function(t){e.loading=!1,e.dataTable=t.data;var a=JSON.parse(t.headers["x-pagination"]);e.totalPages=a.TotalPages}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getBranchs:function(){var e=this;l["a"].getAll().then((function(t){e.fK_Branchs.options=t.data}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},searchDelay:Object(c["debounce"])((function(e){this.search()}),800),search:function(){var e=this;if(this.loading=!0,""===this.searchText)return this.readItems();var t={Text:this.searchText};this.dataTable=[],s["a"].search(t).then((function(t){e.dataTable=t.data,e.totalPages=Math.ceil(e.dataTable.length/10),e.loading=!1}),(function(t){console.error(t),e.loading=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},deletesearch:function(){this.searchText="",this.searchBool=!1,this.readItems()},create:function(){var e=this;""!==this.fK_Branchs.value&&(this.currentobject.fK_Branchs=this.fK_Branchs.value.id),s["a"].create(this.currentobject).then((function(t){"true"===t.headers["x-status"]?(e.readItems(),e.loading=!1,e.currentobject={nationality:"",birth_Date:"",work_Date:""},e.fK_Branchs.value="",e.createModal=!1,e.stopBtn=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})):(e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},edit:function(){var e=this;""!==this.fK_Branchs.value&&(this.currentobject.fK_Branchs=this.fK_Branchs.value.id),s["a"].update(this.currentobject.id,this.currentobject).then((function(t){"true"===t.headers["x-status"]?(e.readItems(),e.currentobject={nationality:"",birth_Date:"",work_Date:""},e.fK_Branchs.value="",e.loading=!1,e.editModal=!1,e.createModal=!1,e.stopBtn=!1,e.showToast(e.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})):(e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(t){console.error(t),e.loading=!1,e.stopBtn=!1,e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},remove:function(e){var t=this;s["a"].delete(e).then((function(a){if("true"===a.headers["x-status"]){var n=t.dataTable.findIndex((function(t){return t.id===e}));t.dataTable.splice(n,1),t.loading=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})}else t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}),(function(e){console.error(e),t.loading=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},showDeleteModal:function(e){this.deleteModal=!0,this.currentobject=e},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.loading=!1,this.stopBtn=!1},showEditModal:function(e){this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.createModal=!0,this.fK_Branchs.value=e.branchs,this.opjectBeforeEdit=Object.assign({},e),this.currentobject=e,this.loading=!0},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){Object.assign(this.currentobject,this.opjectBeforeEdit),this.createModal=!1,this.loading=!1,this.currentobject={nationality:"",birth_Date:"",work_Date:""},this.fK_Branchs.value="",this.editModal=!1,this.stopBtn=!1},showCreateModal:function(){this.currentobject.nationality="مصري",this.currentobject.work_Date=u["a"].todayDate(),this.currentobject.birth_Date=u["a"].todayDate(),this.modelTitle="generic.creatItemTitle",this.modelOktext="modal.create",this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={nationality:"",birth_Date:"",work_Date:""},this.fK_Branchs.value="",this.stopBtn=!1}}},h=d,m=(a("9416"),a("2877")),f=Object(m["a"])(h,o,i,!1,null,null,null),b=f.exports,p={name:"Employees",components:{EmployeesTable:b},data:function(){return{}}},v=p,g=(a("84f6"),Object(m["a"])(v,n,r,!1,null,null,null));t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-6dc61317.c5113994.js.map