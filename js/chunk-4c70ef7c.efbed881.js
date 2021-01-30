(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c70ef7c"],{"75b5":function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=function(){function t(){o(this,t)}return c(t,[{key:"getAll",value:function(){return a["a"].get("Stock")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Stock",{params:t})}},{key:"get",value:function(t){return a["a"].get("Stock?Id=".concat(t))}},{key:"search",value:function(t){return a["a"].get("Stock/Search",{params:t})}},{key:"create",value:function(t){return a["a"].post("Stock",t)}},{key:"update",value:function(t,e){return a["a"].put("Stock?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Stock?Id=".concat(t))}}]),t}();e["a"]=new s},"89ea":function(t,e,n){},"966e":function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=function(){function t(){o(this,t)}return c(t,[{key:"getAll",value:function(){return a["a"].get("Tr_Stock")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Tr_Stock",{params:t})}},{key:"get",value:function(t){return a["a"].get("Tr_Stock/getById?Id=".concat(t))}},{key:"create",value:function(t){return a["a"].post("Tr_Stock",t)}},{key:"search",value:function(t){return a["a"].get("Tr_Stock/Search",{params:t})}},{key:"update",value:function(t,e){return a["a"].put("Tr_Stock?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Tr_Stock?Id=".concat(t))}}]),t}();e["a"]=new s},"9d1d":function(t,e,n){"use strict";var a=n("89ea"),o=n.n(a);o.a},b3a6:function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=function(){function t(){o(this,t)}return c(t,[{key:"getAll",value:function(){return a["a"].get("Units")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Units",{params:t})}},{key:"get",value:function(t){return a["a"].get("Units/getById?Id=".concat(t))}},{key:"search",value:function(t){return a["a"].get("Units/Search",{params:t})}},{key:"create",value:function(t){return a["a"].post("Units",t)}},{key:"update",value:function(t,e){return a["a"].put("Units?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Units?Id=".concat(t))}}]),t}();e["a"]=new s},c427:function(t,e,n){"use strict";var a=n("bc3a"),o=n.n(a);e["a"]=o.a.create({baseURL:"https://cors-anywhere.herokuapp.com/mahmmoudahmed-001-site7.ftempurl.com/api/v1/",headers:{"Content-type":"application/json"}})},d855:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contanier"},[n("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[n("va-card",{staticClass:"flex md8 sm12 xs12",attrs:{title:t.$t("tables.labelOutOrder")}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.create()}}},[n("div",{staticClass:"row flex-center"},[n("div",{staticClass:"flex md6 sm12 xs12 px-1"},[n("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.StockName"))+" ")]),n("va-select",{attrs:{label:t.$t("placeholder.StockName"),required:"",searchable:"",textBy:"name",keyBy:"id",options:t.fKStock.options},model:{value:t.fKStock.value,callback:function(e){t.$set(t.fKStock,"value",e)},expression:"fKStock.value"}})],1),n("div",{staticClass:"flex md6 sm12 xs12 px-1"},[n("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.productName"))+" ")]),n("va-select",{attrs:{label:t.$t("placeholder.productName"),required:"",searchable:"",textBy:"name",keyBy:"id",options:t.fKProduct.options},model:{value:t.fKProduct.value,callback:function(e){t.$set(t.fKProduct,"value",e)},expression:"fKProduct.value"}})],1),n("div",{staticClass:"flex md4 sm12 xs12 px-1"},[n("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.uintName"))+" ")]),n("va-select",{attrs:{label:t.$t("placeholder.uintName"),required:"",searchable:"",textBy:"name",keyBy:"id",options:t.fKUint.options},model:{value:t.fKUint.value,callback:function(e){t.$set(t.fKUint,"value",e)},expression:"fKUint.value"}})],1),n("div",{staticClass:"flex md4 sm12 xs12 px-1"},[n("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.quantity"))+" ")]),n("va-input",{attrs:{type:"number",step:"1",min:"0",placeholder:t.$t("placeholder.quantity"),required:""},model:{value:t.subs.quantity,callback:function(e){t.$set(t.subs,"quantity",e)},expression:"subs.quantity"}})],1),n("div",{staticClass:"d-flex justify--center mt-3"},[n("va-button",{attrs:{type:"submit",disabled:t.stopBtn,color:"success"}},[t._v(" "+t._s(t.$t("modal.add"))+" ")])],1)]),n("div",{staticClass:"row"},[n("va-data-table",{staticStyle:{width:"100%"},attrs:{fields:t.Sub_fields,data:t.currentobject.tr_Stock_Subs,"api-mode":"","no-pagination":""},scopedSlots:t._u([{key:"marker",fn:function(e){return[t._v(" "+t._s(e.rowIndex+1)+" ")]}},{key:"actions",fn:function(e){return[n("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(n){return t.deletafromsubs(e.rowIndex)}}},[t._v(" "+t._s(t.$t("tables.delete"))+" ")])]}}])})],1),n("div",{staticClass:"d-flex justify--center mt-3"},[n("va-button",{staticClass:"my-0",attrs:{type:"button",flat:"",disabled:t.stopBtn},on:{click:function(e){return t.addToSubsfun()}}},[t._v(t._s(t.$t("modal.ok"))+" ")])],1)])])],1)])},o=[],r=n("75b5"),c=n("966e"),s=n("e7c7"),i=n("b3a6"),u={name:"OutOrder",data:function(){return{fKProduct:{value:"",options:[]},fKStock:{value:"",options:[]},fKUint:{value:"",options:[]},currentobject:{tr_Stock_Subs:[]},subs:{},stopBtn:!1}},computed:{Sub_fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"products",title:this.$t("tables.headings.products")},{name:"stock",title:this.$t("tables.headings.stock")},{name:"units",title:this.$t("tables.headings.units")},{name:"__slot:actions",dataClass:"text-right"}]}},created:function(){this.getproduct(),this.getUints(),this.getStock()},methods:{getproduct:function(){var t=this,e={Fk_Company_Activity:1};s["a"].getAllPagnation(e).then((function(e){t.fKProduct.options=e.data}),(function(e){console.error(e),t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getStock:function(){var t=this;r["a"].getAll().then((function(e){t.fKStock.options=e.data}),(function(e){console.error(e),t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getUints:function(){var t=this;i["a"].getAll().then((function(e){t.fKUint.options=e.data}),(function(e){console.error(e),t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},create:function(){var t=this;this.stopBtn=!0,this.currentobject.fK_Employees=1,this.currentobject.fK_Delivery=1,this.currentobject.fK_Tr_Stock_Type=4,c["a"].create(this.currentobject).then((function(e){"true"===e.headers["x-status"]?(t.currentobject={tr_Stock_Subs:[]},t.fKProduct.value="",t.fKStock.value="",t.fKUint.value="",t.subs.quantity=0,t.stopBtn=!1,t.showToast(t.$t("generic.done"),{icon:"fa-check",position:"bottom-center",duration:2500,type:"success"})):(t.stopBtn=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))}),(function(e){console.error(e),t.stopBtn=!1,t.showToast(t.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},addToSubsfun:function(){this.stopBtn=!0,null!==this.fKProduct.value&&""!==this.fKProduct.value&&null!==this.fKStock.value&&""!==this.fKStock.value&&null!==this.fKUint.value&&""!==this.fKUint.value?(this.subs.fK_Units=this.fKUint.value.id,this.subs.fK_Stock=this.fKStock.value.id,this.subs.fK_Products=this.fKProduct.value.id,this.subs.units=this.fKUint.value.name,this.subs.stock=this.fKStock.value.name,this.subs.products=this.fKProduct.value.name,this.currentobject.tr_Stock_Subs.push(this.subs),this.fKProduct.value="",this.fKStock.value="",this.fKUint.value="",this.subs.quantity=0,this.stopBtn=!1):(this.stopBtn=!1,this.showToast(this.$t("generic.filldata"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}))},deletafromsubs:function(t){this.currentobject.tr_Stock_Subs.splice(t,1)}}},l=u,f=(n("9d1d"),n("2877")),d=Object(f["a"])(l,a,o,!1,null,null,null);e["default"]=d.exports},e7c7:function(t,e,n){"use strict";var a=n("c427");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=function(){function t(){o(this,t)}return c(t,[{key:"getAll",value:function(){return a["a"].get("Products")}},{key:"getAllPagnation",value:function(t){return a["a"].get("Products?Fk_Company_Activity=1",{params:t})}},{key:"get",value:function(t){return a["a"].get("Products/getById?Id=".concat(t))}},{key:"search",value:function(t){return a["a"].get("Products/Search",{params:t})}},{key:"create",value:function(t){return a["a"].post("Products",t)}},{key:"update",value:function(t,e){return a["a"].put("Products?Id=".concat(t),e)}},{key:"delete",value:function(t){return a["a"].delete("Products?Id=".concat(t))}}]),t}();e["a"]=new s}}]);
//# sourceMappingURL=chunk-4c70ef7c.efbed881.js.map