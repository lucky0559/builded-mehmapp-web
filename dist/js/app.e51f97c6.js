(function(e){function t(t){for(var a,i,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3b47":function(e,t,s){"use strict";s("5d9a")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"52a2":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:"",id:"app"}},[s("router-view")],1)},n=[],i={},o=i,c=(s("9e6d"),s("2877")),d=Object(c["a"])(o,r,n,!1,null,"88eb3c72",null),l=d.exports,u=s("5f5b"),f=s("b1e0"),m=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("b-row",{staticClass:"vh-100 row-reverse"},[s("b-col",{attrs:{id:"sidePart",sm:"12",lg:"7",md:"12"}},[s("div",{attrs:{id:"divImg"}},[s("b-img",{attrs:{center:"",id:"img",src:"https://res.cloudinary.com/intro-pl/image/upload/v1629696116/mehmapp-vue/AppLogo720x720_rwxfk8.png"}})],1)]),s("b-col",{attrs:{id:"cont",lg:"5",md:"12",sm:"12"}},[s("b-form",{attrs:{id:"form"}},[s("b-form-group",[s("b-input-group",{staticClass:"mb-4"},[s("b-form-input",{attrs:{type:"email",placeholder:"Email",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("b-input-group",{staticClass:"mb-3"},[s("b-form-input",{attrs:{type:"password",placeholder:"Password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("div",{staticStyle:{"margin-bottom":"25px"}},[e._v(" "+e._s(e.error)+" ")])],1),s("b-container",[s("b-row",{attrs:{"align-h":"center"}},[s("b-button",{staticStyle:{width:"100px"},attrs:{variant:"primary"},on:{click:e.login}},[e._v("Sign In")])],1)],1)],1)],1)],1)],1)},b=[],_=s("1da1"),h=(s("96cf"),s("bc3a")),v=s.n(h),g=v.a.create({baseURL:"https://mehmapp.herokuapp.com/"}),j=g,k={data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.post("auth/signin",{email:e.email,password:e.password}).then((function(t){201===t.status&&(console.log(t.data.token),localStorage.setItem("token",t.data.token),console.log("LoggedIn!!!!"),e.error="",e.$router.push({path:"/schedule"}))}));case 3:t.next=10;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.response.data.error,console.log("Invalid email or password"),e.password="";case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},created:function(){null!=localStorage.getItem("token")&&this.$router.push("/schedule")}},y=k,x=(s("3b47"),Object(c["a"])(y,p,b,!1,null,"2978fa66",null)),w=x.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"vh-100"},[s("app-header"),s("h1",[e._v("Reports")]),s("app-forms")],1)},S=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"p-4",attrs:{fluid:""}},[s("b-navbar",{attrs:{toggleable:"md"}},[s("b-navbar-brand",[s("b-img",{staticStyle:{width:"70px",height:"70px"},attrs:{src:"https://res.cloudinary.com/intro-pl/image/upload/v1629696116/mehmapp-vue/AppLogo720x720_rwxfk8.png",fluid:""}})],1),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/schedule","active-class":"active"}},[e._v(" Schedule ")]),s("b-nav-item",{attrs:{to:"/reports","active-class":"active"}},[e._v(" Assessment Form Reports ")]),s("b-nav-item",{attrs:{"exact-active-class":"active"},on:{click:e.logout}},[e._v(" Logout ")])],1)],1)],1)],1)},D=[],I={methods:{logout:function(){localStorage.clear(),this.$router.push("/")}}},O=I,z=(s("7100"),Object(c["a"])(O,C,D,!1,null,"24c8cd71",null)),M=z.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("div",[s("b-col",[s("app-date-picker",{attrs:{range:"",valueType:"format"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1),s("b-col",[s("b-button",{staticClass:"mt-2 mb-2",attrs:{variant:"primary"},on:{click:e.ranger}},[e._v("Print")])],1)],1),s("b-table",{staticClass:"text-center",attrs:{items:this.$store.state.all_forms,fields:e.fields}}),e.loading?s("div",{staticClass:"text-center"},[s("b-spinner",{staticClass:"m-5",attrs:{variant:"secondary"}})],1):e._e()],1)},E=[],R=(s("ac1f"),s("1276"),s("ec45")),A=(s("411c"),s("c1df")),N=s.n(A),Y={data:function(){return{fields:[{key:"formId",label:"Form ID"},{key:"userId",label:"User ID"},{key:"studentNumber",label:"Student Number"},{key:"phoneNumber",label:"Contact Number"},{key:"userdescribe",label:"Describe"},{key:"userPresentIssues",label:"Present Issues"},{key:"userProblemIssue",label:"Problem Issue"},{key:"userReceivedCounseling",label:"Received Counseling"},{key:"userIfYes",label:"If Yes"},{key:"userDuration",label:"Duration"},{key:"userPreviousCounseling",label:"Previous Counseling"}],forms:[],loading:!0,range:"",start:"",end:"",allRange:[]}},beforeCreate:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.get("/form/allForms");case 2:s=t.sent,e.$store.state.all_forms=s.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},methods:{setter:function(e){this.$store.dispatch("printInfo",e),this.$router.push({path:"/print"})},ranger:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var s,a,r,n,i,o,c,d,l,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.range.length>0)){t.next=28;break}return e.$store.state.multiple_print=[],t.next=4,j.get("/schedule/getDate/".concat(e.range[0]));case 4:if(s=t.sent,""==!s.data[0]&&s.data.length>0)for(a=0;a<s.data.length;a++)e.$store.state.multiple_print.push(s.data[a]);r=e.range[0],n=N()(e.range[0],"YYYY-MM-DD"),i=N()(e.range[1],"YYYY-MM-DD"),o=N.a.duration(i.diff(n)).asDays(),console.log(e.allRange),c=0;case 12:if(!(c<o)){t.next=23;break}return d=r.split("-"),l=new Date(parseInt(d[0]),parseInt(d[1])-1,parseInt(d[2])+1),r=e.formatDate(l),t.next=18,j.get("/schedule/getDate/".concat(r));case 18:if(u=t.sent,""==!u.data[0])if(u.data.length>1)for(f=0;f<u.data.length;f++)e.$store.state.multiple_print.push(u.data[f]);else e.$store.state.multiple_print.push(u.data[0]);case 20:c++,t.next=12;break;case 23:console.log(e.$store.state.multiple_print),e.$store.state.print_range=e.range,e.$router.push({path:"/print"}),t.next=29;break;case 28:console.log("empty");case 29:case"end":return t.stop()}}),t)})))()},formatDate:function(e){var t=N()(e);return t.format("YYYY-MM-DD")}},components:{appDatePicker:R["a"]}},T=Y,U=Object(c["a"])(T,P,E,!1,null,"4a40019e",null),F=U.exports,L={components:{appHeader:M,appForms:F},created:function(){null===localStorage.getItem("token")&&this.$router.push("/")}},J=L,q=Object(c["a"])(J,$,S,!1,null,null,null),V=q.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"vh-100"},[s("app-header"),s("h1",[e._v("Schedule")]),s("app-calendar")],1)},G=[],H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("b-row",[s("b-col",{attrs:{xl:"5",lg:"4",md:"*"}},[s("b-calendar",{staticClass:"mb-2",attrs:{locale:"en","date-info-fn":e.dateClass,"selected-variant":"success"},model:{value:e.selected_date,callback:function(t){e.selected_date=t},expression:"selected_date"}}),s("b-row",[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.add",modifiers:{add:!0}}],staticStyle:{width:"80px"},attrs:{variant:"primary"}},[e._v("Add")])],1)],1),s("b-col",{attrs:{xl:"7",lg:"8",md:"*"}},[e.sched_day?s("div",[s("b-table",{staticClass:"text-center",attrs:{items:e.sched_day[0],fields:e.fields},scopedSlots:e._u([e.selected_date?{key:"cell(buttons)",fn:function(t){return[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.edit",modifiers:{edit:!0}}],staticClass:"m-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(s){return e.setter(t.item)}}},[e._v(" Edit ")]),s("b-button",{staticClass:"m-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(s){return e.del(t.item)}}},[e._v(" Delete ")]),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.set_status",modifiers:{set_status:!0}}],staticClass:"m-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(s){return e.setter(t.item)}}},[e._v(" Modify Status ")])]}}:null],null,!0)}),s("b-modal",{attrs:{id:"edit",title:"Edit","ok-title":"Save"},on:{ok:e.edit}},[s("b-form",[s("b-form-group",{staticClass:"mb-3",attrs:{id:"group_uid"}},[s("label",{attrs:{for:"user_id"}},[e._v("User ID")]),s("b-form-input",{attrs:{id:"user_id",type:"number",required:"",state:e.id_checker},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1)],1)],1),e.loading?s("div",{staticClass:"text-center"},[s("b-spinner",{staticClass:"m-5",attrs:{variant:"secondary"}})],1):e._e()],1):e._e()])],1),s("b-modal",{attrs:{id:"add",title:"Add","ok-title":"Add"},on:{ok:e.confirm}},[s("b-form",[s("b-form-group",{staticClass:"mb-3",attrs:{id:"group_uid"}},[s("b-form-input",{attrs:{id:"user_id",type:"number",placeholder:"User ID",required:"",state:e.id_checker},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),s("b-form-group",{staticClass:"mb-3",attrs:{id:"group_date"}},[s("b-form-datepicker",{attrs:{state:e.date_checker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),s("b-form-group",{attrs:{id:"group_time",label:"Time"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-radio",{staticClass:"mb-2",attrs:{"aria-describedby":a,value:"9:00AM - 12:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("9:00AM - 12:00PM")]),s("b-form-radio",{staticClass:"mb-4",attrs:{"aria-describedby":a,value:"1:00PM - 4:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("1:00PM - 4:00PM")])]}}])})],1)],1),s("b-modal",{attrs:{id:"set_status",title:"Status","ok-title":"Save"},on:{ok:e.setStatus}},[s("b-form",[s("b-form-group",{staticClass:"mb-3",attrs:{id:"group_status"}},[s("label",{attrs:{for:"status"}},[e._v("Status")]),s("b-form-input",{attrs:{id:"status",state:e.status_checker},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1)],1),s("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:e.empty,callback:function(t){e.empty=t},expression:"empty"}},[e._v(" "+e._s(this.$store.state.edit_empty)+" ")]),s("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"warning",dismissible:""},model:{value:e.existing,callback:function(t){e.existing=t},expression:"existing"}},[e._v(" "+e._s(this.$store.state.add_error)+" ")]),s("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"success",dismissible:""},model:{value:e.added,callback:function(t){e.added=t},expression:"added"}},[e._v(" Schedule Added! ")]),s("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"success",dismissible:""},model:{value:e.editted,callback:function(t){e.editted=t},expression:"editted"}},[e._v(" Editted Saved! ")]),s("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"warning",dismissible:""},model:{value:e.deleted,callback:function(t){e.deleted=t},expression:"deleted"}},[e._v(" Schedule Deleted! ")])],1)},W=[],K=(s("a15b"),s("4d90"),{data:function(){return{selected_date:"",sched_day:[],fields:[{key:"appointment_id",label:"Appointment ID"},{key:"user_id",label:"User ID"},{key:"date",label:"Date"},{key:"time",label:"Time"},{key:"contact_number",label:"Contact Number"},{key:"status",label:"Status"},{key:"buttons",label:""}],loading:!1,empty:!1,invalid:!1,existing:!1,added:!1,editted:!1,deleted:!1,invalid_userid:!1}},methods:{dateClass:function(e,t){var s=t.getDate();return s>=10&&s<=20?"table-info":""},confirm:function(){var e=this;if(!this.$store.state.form.user_id||!this.$store.state.form.set_date||!this.$store.state.form.selected_time)return this.$store.state.form.user_id="",this.$store.state.form.set_date="",this.$store.state.form.selected_time="",this.$store.state.edit_empty="Empty Field",this.empty=!0,console.log("empty field");this.$bvModal.msgBoxConfirm("Want to add schedule in this student with User ID of ".concat(this.$store.state.form.user_id,"? "),{title:"Please Confirm",centered:!0}).then(function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s){t.next=17;break}return t.prev=1,t.next=4,j.post("/schedule/add",{user_id:e.$store.state.form.user_id,date:e.$store.state.form.set_date,time:e.$store.state.form.selected_time});case 4:e.added=!0,e.$store.state.form.appointment_id="",e.$store.state.form.user_id="",e.$store.state.form.set_date="",e.$store.state.form.selected_time="",e.selectSched(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),t.t0.response&&(e.$store.state.add_error=t.t0.response.data.msg,e.existing=!0);case 15:t.next=17;break;case 17:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Not Available",e)}))},selectSched:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.sched_day=[],s=e.selected_date.split("/").join("-"),t.next=5,j.get("/schedule/getDate/".concat(s));case 5:a=t.sent,e.loading=!1,e.sched_day.push(a.data);case 8:case"end":return t.stop()}}),t)})))()},edit:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.put("/schedule/edit/".concat(e.$store.state.form.appointment_id),{user_id:e.$store.state.form.user_id});case 3:e.selectSched(),console.log("Edited"+e.$store.state.form.appointment_id),e.$store.state.form.appointment_id="",e.$store.state.form.user_id="",e.editted=!0,t.next=15;break;case 10:if(t.prev=10,t.t0=t["catch"](0),!t.t0.response||!t.t0.response.data){t.next=15;break}return e.$store.state.edit_empty=t.t0.response.data.msg,t.abrupt("return",e.empty=!0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},del:function(e){var t=this;this.$bvModal.msgBoxConfirm("Want to delete this schedule with User ID of ".concat(e.user_id,"? "),{title:"Please Confirm to delete",centered:!0}).then(function(){var s=Object(_["a"])(regeneratorRuntime.mark((function s(a){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!a){s.next=13;break}return s.prev=1,s.next=4,j.delete("/schedule/delete/".concat(e.appointment_id));case 4:t.selectSched(),t.deleted=!0,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](1),console.log(s.t0);case 11:s.next=14;break;case 13:console.log("Delete Cancelled!");case 14:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e){return s.apply(this,arguments)}}())},setter:function(e){this.$store.state.form.appointment_id=e.appointment_id,this.$store.state.form.user_id=e.user_id,this.$store.state.form.set_date=e.date,this.$store.state.form.selected_time=e.time,this.$store.state.form.status=e.status},setStatus:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.put("/schedule/editStatus/".concat(e.$store.state.form.appointment_id),{status:e.$store.state.form.status});case 3:e.selectSched(),console.log("Edited"+e.$store.state.form.appointment_id),e.$store.state.form.appointment_id="",e.$store.state.form.user_id="",e.$store.state.form.set_date="",e.$store.state.form.selected_time="",e.$store.state.form.contact_number="",e.$store.state.form.status="",e.editted=!0,t.next=18;break;case 14:if(t.prev=14,t.t0=t["catch"](0),!t.t0.response||!t.t0.response.data){t.next=18;break}return t.abrupt("return",e.existing=!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()}},watch:{selected_date:function(){this.selectSched()}},computed:{id_checker:function(){return!(!this.$store.state.form.user_id.length>0)},date_checker:function(){return!(!this.$store.state.form.set_date.length>0)},status_checker:function(){return!(this.$store.state.form.status.length<=0)},user_id:{get:function(){return this.$store.getters.user_id},set:function(e){this.$store.dispatch("updateUserId",e)}},date:{get:function(){return this.$store.getters.set_date},set:function(e){this.$store.dispatch("updateDate",e)}},time:{get:function(){return this.$store.getters.selected_time},set:function(e){this.$store.dispatch("updateTime",e)}},status:{get:function(){return this.$store.getters.status},set:function(e){this.$store.dispatch("updateStatus",e)}}},created:function(){var e=new Date,t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");this.selected_date=t+"/"+s+"/"+a,this.selectSched()}}),Q=K,X=Object(c["a"])(Q,H,W,!1,null,"85435a7a",null),Z=X.exports,ee={components:{appHeader:M,appCalendar:Z},created:function(){null===localStorage.getItem("token")&&this.$router.push("/")}},te=ee,se=Object(c["a"])(te,B,G,!1,null,"f1c49b78",null),ae=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"vh-100"},[a("div",{staticClass:"text-center pt-4"},[a("b-col",[a("div",{attrs:{id:"logo"}},[a("b-row",[a("img",{staticStyle:{width:"100px",height:"60px",position:"relative",left:"50px",top:"75px"},attrs:{src:s("efd4")}})])],1),a("b-row",[a("p",[a("strong",[e._v("CAVITE STATE UNIVERSITY")])]),a("p",[a("strong",[e._v("Office of Student Affairs and Services - Guidance Office")])]),a("p",[a("strong",[e._v("COUNSELING SERVICES - MASTERLIST")])]),a("p",[a("strong",[e._v("As of "+e._s(e.from_date)+" - "+e._s(e.to_date)+" ")])])])],1)],1),a("div",[a("p",[e._v("School Year - "),a("strong",[e._v("SY "+e._s(e.year)+" ")])])]),a("br"),a("br"),a("br"),a("div",[a("b-table",{attrs:{items:this.$store.state.multiple_print,fields:e.fields}})],1),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",[a("p",[e._v("____________________________________________")]),a("p",[a("strong",[e._v("Prepared by: Lucky ")])])]),a("div",{attrs:{id:"print_button"}},[a("b-button",{staticClass:"mb-4",attrs:{variant:"primary"},on:{click:e.print}},[e._v(" Print ")])],1)])},ne=[],ie={data:function(){return{year:"",fields:[{key:"appointment_id",label:"Appointment ID"},{key:"user_id",label:"User ID"},{key:"contact_number",label:"Contact Number"},{key:"date",label:"Date"}],from_date:"",to_date:""}},beforeCreate:function(){null===localStorage.getItem("token")&&this.$router.push({path:"/"})},methods:{print:function(){window.print()}},created:function(){var e=new Date,t=e.getFullYear();this.year=t;var s=new Date(this.$store.state.print_range[0]),a=new Date(this.$store.state.print_range[1]),r=["January","February","March","April","May","June","July","August","September","October","November","December"][s.getMonth()],n=["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()],i=r+" "+s.getDate()+","+s.getFullYear(),o=n+" "+a.getDate()+","+a.getFullYear();this.from_date=i,this.to_date=o}},oe=ie,ce=(s("f11b"),Object(c["a"])(oe,re,ne,!1,null,"62a8f7d2",null)),de=ce.exports,le=[{path:"/",component:w},{path:"/reports",component:V},{path:"/schedule",component:ae},{path:"/print",component:de}],ue=s("2f62");a["default"].use(ue["a"]);var fe=new ue["a"].Store({state:{form:{appointment_id:"",user_id:"",set_date:"",selected_time:"",contact_number:"",status:""},print_info:[],all_forms:[],multiple_print:[],print_range:[],add_error:"",edit_empty:""},getters:{appointment_id:function(e){return e.form.appointment_id},user_id:function(e){return e.form.user_id},set_date:function(e){return e.form.set_date},selected_time:function(e){return e.form.selected_time},contact_number:function(e){return e.form.contact_number},status:function(e){return e.form.status}},mutations:{update_user_id:function(e,t){e.form.user_id=t},update_date:function(e,t){e.form.set_date=t},update_time:function(e,t){e.form.selected_time=t},update_contact:function(e,t){e.form.contact_number=t},update_status:function(e,t){e.form.status=t},print_info:function(e,t){e.print_info=[],e.print_info.push({formId:t.formId,userId:t.userId,fullname:t.fullname,studentNumber:t.studentNumber,phoneNumber:t.phoneNumber})}},actions:{updateUserId:function(e,t){var s=e.commit;s("update_user_id",t)},updateDate:function(e,t){var s=e.commit;s("update_date",t)},updateTime:function(e,t){var s=e.commit;s("update_time",t)},updateContact:function(e,t){var s=e.commit;s("update_contact",t)},updateStatus:function(e,t){var s=e.commit;s("update_status",t)},printInfo:function(e,t){var s=e.commit;s("print_info",t)}}});s("f9e3"),s("2dd8");a["default"].config.productionTip=!1,a["default"].use(u["a"]),a["default"].use(f["a"]),a["default"].use(m["a"]);var me=new m["a"]({mode:"history",routes:le});new a["default"]({render:function(e){return e(l)},router:me,store:fe}).$mount("#app")},"5d9a":function(e,t,s){},7100:function(e,t,s){"use strict";s("b2fc")},"9e6d":function(e,t,s){"use strict";s("52a2")},b2fc:function(e,t,s){},c74b:function(e,t,s){},efd4:function(e,t,s){e.exports=s.p+"img/cvsu_logo.c53373ad.png"},f11b:function(e,t,s){"use strict";s("c74b")}});
//# sourceMappingURL=app.e51f97c6.js.map