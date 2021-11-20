(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(75),l=n.n(c),i=(n(165),n(154)),r=n(15),o=(n(166),n(2)),u=function(e){var t="card ".concat(e.className);return Object(o.jsx)("div",{className:t,children:e.children})},d=(n(168),function(e){var t=e.date,n=t.toLocaleString("en-US",{day:"2-digit"}),a=t.toLocaleString("en-US",{month:"short"}),s=t.getFullYear();return Object(o.jsxs)(u,{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date_date lead b",children:n}),Object(o.jsx)("div",{className:"expense-date_month small",children:a}),Object(o.jsx)("div",{className:"expense-date_year b small",children:s})]})}),j=(n(169),function(e){var t=e.title,n=e.amount,a=e.date;return Object(o.jsxs)(u,{className:"expense-item my-1",children:[Object(o.jsxs)("div",{className:"expense-item_left",children:[Object(o.jsx)(d,{date:a}),Object(o.jsx)("div",{className:"expense-item_title mx-4 b",children:t})]}),Object(o.jsxs)(u,{className:"expense-item_amount px-1",children:["\u20b9 ",n]})]})}),m=(n(170),function(e){var t=e.years,n=e.selectedYear,a=e.onSelectYear;return Object(o.jsxs)("div",{className:"expense-filter",children:[Object(o.jsx)("p",{className:"b",children:"Filter by year"}),Object(o.jsxs)("select",{name:"year",onChange:function(e){return a(e.target.value)},value:n,children:[Object(o.jsx)("option",{value:n,disabled:!0,hidden:!0,children:n},Math.random()),t.sort().map((function(e){return Object(o.jsx)("option",{placeholder:"Year",value:e,children:e},e)}))]})]})}),b=n(312),x=n(316),v=n(151),h=n(152),p=n(66),f=n(156),O=function(e){var t=[{month:"Jan",amount:0},{month:"Feb",amount:0},{month:"Mar",amount:0},{month:"Apr",amount:0},{month:"May",amount:0},{month:"Jun",amount:0},{month:"Jul",amount:0},{month:"Aug",amount:0},{month:"Sep",amount:0},{month:"Oct",amount:0},{month:"Nov",amount:0},{month:"Dec",amount:0}];return e.filteredExpenses.map((function(e){var n=e.date.getMonth();t[n].amount+=+e.amount})),Object(o.jsxs)(b.a,{className:"my-2",width:1200,height:250,data:t,children:[Object(o.jsx)(x.a,{strokeDasharray:".05 .05"}),Object(o.jsx)(v.a,{dataKey:"month"}),Object(o.jsx)(h.a,{}),Object(o.jsx)(p.a,{height:5}),Object(o.jsx)(f.a,{type:"monotone",dataKey:"amount",stroke:"#8884d8",fill:"#07ffb5"})]})},N=(n(306),function(e){var t=Object(a.useState)((new Date).getFullYear().toString()),n=Object(r.a)(t,2),s=n[0],c=n[1],l=e.expenses.filter((function(e){return new Date(e.date).getFullYear().toString()===s})),i=Array.from(new Set(e.expenses.map((function(e){return new Date(e.date).getFullYear()}))));return Object(o.jsxs)(u,{className:"bg-dark p-2 text-center",children:[Object(o.jsx)(m,{years:i,selectedYear:s,onSelectYear:function(e){c(e)}}),Object(o.jsx)(O,{filteredExpenses:l}),Object(o.jsx)("div",{className:"expenses",children:l.length&&l.map((function(e){var t=e.id,n=e.title,a=e.amount,s=e.date;return Object(o.jsx)(j,{title:n,amount:a,date:s},t)}))||Object(o.jsx)("p",{className:"text-center py-2",children:"No Expenses Found"})})]})}),y=n(155),g=(n(307),function(e,t){return"ADD_NEW"===t.type?{value:t.value,isValid:t.value.trim().length>0}:"ON_BLUR"===t.type?{value:e.value,isValid:t.value.trim().length>0}:{value:"",isValid:!1}}),V=function(e,t){return"ADD_NEW"===t.type?{value:t.value,isValid:+t.value.trim()>0}:"ON_BLUR"===t.type?{value:e.value,isValid:+t.value.trim()>1}:{value:"",isValid:!1}},D=function(e,t){return"ADD_NEW"===t.type?{value:t.value,isValid:""!==t.value}:"ON_BLUR"===t.type?{value:e.value,isValid:""!==t.value}:{value:"",isValid:!1}},E=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1],l=Object(a.useReducer)(g,{value:"",isValid:null}),i=Object(r.a)(l,2),d=i[0],j=i[1],m=Object(a.useReducer)(V,{value:"",isValid:null}),b=Object(r.a)(m,2),x=b[0],v=b[1],h=Object(a.useReducer)(D,{value:"",isValid:null}),p=Object(r.a)(h,2),f=p[0],O=p[1],N=d.isValid,y=x.isValid,E=f.isValid;Object(a.useEffect)((function(){console.log("Checking for validity..."),c(N&&y&&E)}),[N,y,E]);return Object(o.jsx)(u,{className:"expense-form",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:d.value,amount:x.value,date:new Date(f.value)};e.onSubmitExpenseForm(n)},children:[Object(o.jsxs)("div",{className:"form-input",children:[Object(o.jsxs)("div",{className:"form-controller",children:[Object(o.jsxs)("label",{className:"b",style:{color:"".concat(!1===d.isValid?"#fa593d":"#fff")},htmlFor:"title",children:["Title ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"text",name:"title",value:d.value,onChange:function(e){j({type:"ADD_NEW",value:e.target.value}),c(e.target.value.trim().length&&x.isValid&&f.isValid)},onBlur:function(e){j({type:"ON_BLUR",value:e.target.value})},style:{borderColor:"".concat(!1===d.isValid?"#fa593d":"#03c88d")}})]}),Object(o.jsxs)("div",{className:"form-controller",children:[Object(o.jsxs)("label",{className:"b",htmlFor:"amount",style:{color:"".concat(!1===x.isValid?"#fa593d":"#fff")},children:["Amount ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"number",name:"amount",min:"0.1",step:"0.1",value:x.value,onChange:function(e){v({type:"ADD_NEW",value:e.target.value}),c(d.isValid&&+e.target.value.trim()>0&&f.isValid)},onBlur:function(e){v({type:"ON_BLUR",value:e.target.value})},style:{borderColor:"".concat(!1===x.isValid?"#fa593d":"#03c88d")}})]}),Object(o.jsxs)("div",{className:"form-controller",children:[Object(o.jsxs)("label",{className:"b",htmlFor:"date",style:{color:"".concat(!1===f.isValid?"#fa593d":"#fff")},children:["Date ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"date",name:"date",value:f.value,onChange:function(e){O({type:"ADD_NEW",value:e.target.value}),c(d.isValid&&x.isValid&&""!==e.target.value)},onBlur:function(e){O({type:"ON_BLUR",value:e.target.value})},style:{borderColor:"".concat(!1===f.isValid?"#fa593d":"#03c88d")}})]})]}),Object(o.jsxs)("div",{className:"new-expense-buttons",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.onCancelEventListener(!0)},children:"Cancel"}),Object(o.jsx)("button",{type:"submit",disabled:!s,className:"btn btn-secondary",children:"Add Expense"})]})]})})},S=(n(308),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(o.jsx)(u,{className:"new-expense bg-dark p-2 my-2",children:!s&&Object(o.jsx)("button",{className:"btn btn-secondary add-expense-toggle",onClick:function(){c((function(e){return!e}))},children:"Add New Expense"})||Object(o.jsx)(E,{onSubmitExpenseForm:function(t){e.onAddNewExpense(Object(y.a)({id:Math.random()},t)),c(!1)},onCancelEventListener:function(e){c(!e)}})})});n(309);var _=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)("div",{className:"app my-1",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"text-center uppercase py-1",children:"Expense Tracker"}),Object(o.jsx)("div",{className:"underline"})]}),Object(o.jsx)(S,{onAddNewExpense:function(e){console.log("onAddNewExpense : ",e),s((function(t){return[e].concat(Object(i.a)(t))})),console.log("new expenses list : ",n)}}),Object(o.jsx)(N,{expenses:n})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),s(e),c(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),C()}},[[310,1,2]]]);
//# sourceMappingURL=main.abded1fe.chunk.js.map