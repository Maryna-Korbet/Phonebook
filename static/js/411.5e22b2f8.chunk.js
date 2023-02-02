"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[411],{411:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(791),r=n(434),s=n(634),o="ContactsList_list__mmE3Y",c="ContactsList_info__o8XVf",i=function(e){return e.filter},u=function(e){return e.contacts.contacts},l=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},m=n(184);function h(){var e=(0,r.v9)(u),t=(0,r.v9)(i),n=(0,r.I0)(),a=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,m.jsx)("ul",{className:o,type:"1",children:a.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,m.jsxs)("li",{className:c,children:[(0,m.jsxs)("p",{children:[a,": ",r]}),(0,m.jsx)("button",{type:"button",onClick:function(){return function(e){return n((0,s.GK)(e))}(t)},children:"Delete"})]},t)}))})}var f=n(808),p="Filter_title__pSkfx",b=function(){var e=(0,r.v9)(i),t=(0,r.I0)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:p,children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){t((0,f.T)(e.currentTarget.value))}})]})},_=n(439),x="ContactsForm_form__1Y65-",v="ContactsForm_label__Z7jht",j="ContactsForm_title__cd5Wh",C="ContactsForm_button__zuUB3";function N(){var e=(0,a.useState)(""),t=(0,_.Z)(e,2),n=t[0],o=t[1],c=(0,a.useState)(""),i=(0,_.Z)(c,2),l=i[0],d=i[1],h=(0,r.v9)(u),f=(0,r.I0)(),p=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},b=function(){o(""),d("")};return(0,m.jsxs)("form",{action:"submit",onSubmit:function(e){e.preventDefault(),h.some((function(e){return e.name.toLowerCase()===n.toLowerCase()||e.number===l}))?alert("Such a name or number was added to the phone book earlier."):f((0,s.sY)({name:n,number:l})),b()},className:x,children:[(0,m.jsxs)("label",{htmlFor:"name",className:v,children:[(0,m.jsx)("p",{className:j,children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",value:n,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{htmlFor:"tel",className:v,children:[(0,m.jsx)("p",{className:j,children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",value:l,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})}function g(){var e=(0,r.I0)(),t=(0,r.v9)(l),n=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,m.jsxs)("div",{children:[(0,m.jsx)("title",{children:"Your contacts"}),(0,m.jsx)(N,{}),(0,m.jsx)(b,{}),(0,m.jsx)("div",{children:t&&!n&&(0,m.jsx)("b",{children:"Request in progress..."})}),(0,m.jsx)(h,{})]})}}}]);
//# sourceMappingURL=411.5e22b2f8.chunk.js.map