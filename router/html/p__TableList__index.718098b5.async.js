"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[325],{19515:function(de,Z,r){r.r(Z),r.d(Z,{default:function(){return te}});var U=r(97548),O=r.n(U),J=r(12741),x=r.n(J),k=r(97983),o=r.n(k),G=r(11281),w=r.n(G),W=r(40794),M=r.n(W),C=r(94601),Q=r(24969),u=r(42905),t=r(30028),p=r(12461),z=r(69677),P=r(71577),Y=r(63463),F=r(67294),H=r(85402),e=r(85893),K=function(i){var s=(0,t.useIntl)();return(0,e.jsxs)(u.L05,{stepsProps:{size:"small"},stepsFormRender:function(h,a){return(0,e.jsx)(H.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:s.formatMessage({id:"pages.searchTable.updateForm.ruleConfig",defaultMessage:"\u89C4\u5219\u914D\u7F6E"}),visible:i.updateModalVisible,footer:a,onCancel:function(){i.onCancel()},children:h})},onFinish:i.onSubmit,children:[(0,e.jsxs)(u.L05.StepForm,{initialValues:{name:i.values.name,desc:i.values.desc},title:s.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),children:[(0,e.jsx)(u.VaQ,{name:"name",label:s.formatMessage({id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"\u89C4\u5219\u540D\u79F0"}),width:"md",rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameRules",defaultMessage:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"})}]}),(0,e.jsx)(u.$JJ,{name:"desc",width:"md",label:s.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descLabel",defaultMessage:"\u89C4\u5219\u63CF\u8FF0"}),placeholder:s.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.updateForm.ruleDesc.descRules",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01"}),min:5}]})]}),(0,e.jsxs)(u.L05.StepForm,{initialValues:{target:"0",template:"0"},title:s.formatMessage({id:"pages.searchTable.updateForm.ruleProps.title",defaultMessage:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027"}),children:[(0,e.jsx)(u._IT,{name:"target",width:"md",label:s.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,e.jsx)(u._IT,{name:"template",width:"md",label:s.formatMessage({id:"pages.searchTable.updateForm.ruleProps.templateLabel",defaultMessage:"\u89C4\u5219\u6A21\u677F"}),valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,e.jsx)(u.$Oj.Group,{name:"type",label:s.formatMessage({id:"pages.searchTable.updateForm.ruleProps.typeLabel",defaultMessage:"\u89C4\u5219\u7C7B\u578B"}),options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,e.jsxs)(u.L05.StepForm,{initialValues:{type:"1",frequency:"month"},title:s.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.title",defaultMessage:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F"}),children:[(0,e.jsx)(u.Gal,{name:"time",width:"md",label:s.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.timeLabel",defaultMessage:"\u5F00\u59CB\u65F6\u95F4"}),rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.updateForm.schedulingPeriod.timeRules",defaultMessage:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"})}]}),(0,e.jsx)(u._IT,{name:"frequency",label:s.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},X=K,q=["defaultRender"],_=function(){var b=M()(o()().mark(function i(s){var c;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=p.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),a.prev=1,a.next=4,(0,C.HP)(w()({},s));case 4:return c(),p.ZP.success("Added successfully"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),c(),p.ZP.error("Adding failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},i,null,[[1,9]])}));return function(s){return b.apply(this,arguments)}}(),ee=function(){var b=M()(o()().mark(function i(s){var c;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=p.ZP.loading("Configuring"),a.prev=1,a.next=4,(0,C.D7)({name:s.name,desc:s.desc,key:s.key});case 4:return c(),p.ZP.success("Configuration is successful"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),c(),p.ZP.error("Configuration failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},i,null,[[1,9]])}));return function(s){return b.apply(this,arguments)}}(),ae=function(){var b=M()(o()().mark(function i(s){var c;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=p.ZP.loading("\u6B63\u5728\u5220\u9664"),s){a.next=3;break}return a.abrupt("return",!0);case 3:return a.prev=3,a.next=6,(0,C.DV)({key:s.map(function(y){return y.key})});case 6:return c(),p.ZP.success("Deleted successfully and will refresh soon"),a.abrupt("return",!0);case 11:return a.prev=11,a.t0=a.catch(3),c(),p.ZP.error("Delete failed, please try again"),a.abrupt("return",!1);case 16:case"end":return a.stop()}},i,null,[[3,11]])}));return function(s){return b.apply(this,arguments)}}(),se=function(){var i=(0,F.useState)(!1),s=x()(i,2),c=s[0],h=s[1],a=(0,F.useState)(!1),y=x()(a,2),re=y[0],A=y[1],le=(0,F.useState)(!1),I=x()(le,2),V=I[0],D=I[1],j=(0,F.useRef)(),ne=(0,F.useState)(),L=x()(ne,2),g=L[0],S=L[1],ue=(0,F.useState)([]),$=x()(ue,2),T=$[0],B=$[1],R=(0,t.useIntl)(),E=[{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"Rule name"}),dataIndex:"name",tip:"The rule name is the unique key",render:function(l,n){return(0,e.jsx)("a",{onClick:function(){S(n),D(!0)},children:l})}},{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleDesc",defaultMessage:"Description"}),dataIndex:"desc",valueType:"textarea"},{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleCallNo",defaultMessage:"Number of service calls"}),dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:function(l){return"".concat(l).concat(R.formatMessage({id:"pages.searchTable.tenThousand",defaultMessage:" \u4E07 "}))}},{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleStatus",defaultMessage:"Status"}),dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.nameStatus.default",defaultMessage:"Shut down"}),status:"Default"},1:{text:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.nameStatus.running",defaultMessage:"Running"}),status:"Processing"},2:{text:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.nameStatus.online",defaultMessage:"Online"}),status:"Success"},3:{text:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.nameStatus.abnormal",defaultMessage:"Abnormal"}),status:"Error"}}},{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleUpdatedAt",defaultMessage:"Last scheduled time"}),sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:function(l,n,f){var v=n.defaultRender,m=O()(n,q),N=f.getFieldValue("status");return"".concat(N)==="0"?!1:"".concat(N)==="3"?(0,e.jsx)(z.Z,w()(w()({},m),{},{placeholder:R.formatMessage({id:"pages.searchTable.exception",defaultMessage:"Please enter the reason for the exception!"})})):v(l)}},{title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(l,n){return[(0,e.jsx)("a",{onClick:function(){A(!0),S(n)},children:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.config",defaultMessage:"Configuration"})},"config"),(0,e.jsx)("a",{href:"https://procomponents.ant.design/",children:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.subscribeAlert",defaultMessage:"Subscribe to alerts"})},"subscribeAlert")]}}];return(0,e.jsxs)(u._zJ,{children:[(0,e.jsx)(u.QVr,{headerTitle:R.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:j,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsxs)(P.Z,{type:"primary",onClick:function(){h(!0)},children:[(0,e.jsx)(Q.Z,{})," ",(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")]},request:C.jR,columns:E,rowSelection:{onChange:function(l,n){B(n)}}}),(T==null?void 0:T.length)>0&&(0,e.jsxs)(u.Scc,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:T.length})," ",(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"}),"\xA0\xA0",(0,e.jsxs)("span",{children:[(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.totalServiceCalls",defaultMessage:"Total number of service calls"})," ",T.reduce(function(d,l){return d+l.callNo},0)," ",(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.tenThousand",defaultMessage:"\u4E07"})]})]}),children:[(0,e.jsx)(P.Z,{onClick:M()(o()().mark(function d(){var l,n;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,ae(T);case 2:B([]),(l=j.current)===null||l===void 0||(n=l.reloadAndRest)===null||n===void 0||n.call(l);case 4:case"end":return v.stop()}},d)})),children:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}),(0,e.jsx)(P.Z,{type:"primary",children:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.batchApproval",defaultMessage:"Batch approval"})})]}),(0,e.jsxs)(u.Yr8,{title:R.formatMessage({id:"pages.searchTable.createForm.newRule",defaultMessage:"New rule"}),width:"400px",visible:c,onVisibleChange:h,onFinish:function(){var d=M()(o()().mark(function l(n){var f;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,_(n);case 2:f=m.sent,f&&(h(!1),j.current&&j.current.reload());case 4:case"end":return m.stop()}},l)}));return function(l){return d.apply(this,arguments)}}(),children:[(0,e.jsx)(u.VaQ,{rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.ruleName",defaultMessage:"Rule name is required"})}],width:"md",name:"name"}),(0,e.jsx)(u.$JJ,{width:"md",name:"desc"})]}),(0,e.jsx)(X,{onSubmit:function(){var d=M()(o()().mark(function l(n){var f;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,ee(n);case 2:f=m.sent,f&&(A(!1),S(void 0),j.current&&j.current.reload());case 4:case"end":return m.stop()}},l)}));return function(l){return d.apply(this,arguments)}}(),onCancel:function(){A(!1),V||S(void 0)},updateModalVisible:re,values:g||{}}),(0,e.jsx)(Y.Z,{width:600,visible:V,onClose:function(){S(void 0),D(!1)},closable:!1,children:(g==null?void 0:g.name)&&(0,e.jsx)(u.vYc,{column:2,title:g==null?void 0:g.name,request:M()(o()().mark(function d(){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{data:g||{}});case 1:case"end":return n.stop()}},d)})),params:{id:g==null?void 0:g.name},columns:E})})]})},te=se}}]);
