(this.webpackJsonptypescript=this.webpackJsonptypescript||[]).push([[0],{30:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),o=n(12),u=n(2),i=n(9),m=Object(a.createContext)(void 0),E=Object(a.createContext)(void 0);function d(e,t){switch(t.type){case"CREATE":return t.info;case"UPDATE":return Object(i.a)({},e,{},t.info);case"REMOVE":return{};default:throw new Error("Unhandled action")}}function f(e){var t=e.children,n=Object(a.useReducer)(d,{auth:".../../"}),l=Object(u.a)(n,2),c=l[0],o=l[1];return r.a.createElement(E.Provider,{value:o},r.a.createElement(m.Provider,{value:c},t))}function s(){var e=Object(a.useContext)(m);if(!e)throw new Error("useGlobalState not found");return e}var b=Object(a.createContext)(void 0),p=Object(a.createContext)(void 0);function v(e,t){switch(t.type){case"UPDATE":return Object(i.a)({},e,{},t.info);case"REMOVE":return e;default:throw new Error("Unhandled action")}}function h(e){var t=e.children,n=Object(a.useReducer)(v,{title:"title"}),l=Object(u.a)(n,2),c=l[0],o=l[1];return r.a.createElement(p.Provider,{value:o},r.a.createElement(b.Provider,{value:c},t))}var O=n(6),k=n(10),x=n(11);function j(){var e=Object(k.a)(["\n  padding: 2rem;\n  box-sizing: border-box;\n  dl {\n    display: block;\n    margin-bottom: 1rem;\n    dt {\n      display: block;\n      a {\n        display: block;\n        padding: 0.5rem 1rem;\n      }\n    }\n  }\n"]);return j=function(){return e},e}var y=function(){var e=Object(a.useState)([{title:"Main",link:"/"},{title:"Todo",link:"/todo"},{title:"Button",link:"/button"},{title:"Form",link:"/form"},{title:"markdown",link:"/markdown"}]),t=Object(u.a)(e,1)[0];return r.a.createElement(g,null,t.map((function(e,t){var n=e.title,a=e.link;return r.a.createElement("dl",{key:t},r.a.createElement("dt",null,r.a.createElement(o.c,{to:a},n)))})))},g=x.a.nav(j()),w=function(){return r.a.createElement("header",null,r.a.createElement(y,null))},C=function(e){var t=e.children;return r.a.createElement("main",null,r.a.createElement(w,null),r.a.createElement("article",null,t))};function P(e){var t=e.name,n=e.mark;return r.a.createElement("div",null,"Hello, ",t," ",n)}P.defaultProps={mark:"!"};var T=P;function A(){var e=Object(k.a)(["\n  p {\n    margin-bottom: 10px;\n  }\n  button {\n    display: inline-block;\n    padding: 10px;\n    font-size: 16px;\n    color: #ff0000;\n    background: #111;\n  }\n"]);return A=function(){return e},e}var R=function(){var e;e={title:"111",name:"\uc190\uc9c0\uc548"},console.log("%c ".concat(JSON.stringify(e,null,1)),"font-size:14px;color:blue");var t=s(),n=function(){var e=Object(a.useContext)(E);if(!e)throw new Error("useGlobalDispatch not found");return e}();return r.a.createElement(C,null,r.a.createElement(T,{name:"wanhwi",mark:"$"}),r.a.createElement(S,null,r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){n({type:"REMOVE",info:{title:"name"}})}},"'REMOVE'")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){n({type:"CREATE",info:{title:"hey ",name:111}})}},"'CREATE'")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){n({type:"UPDATE",info:{title:"UPDATE ",name:"react"}})}},"'UPDATE1'")),r.a.createElement("button",{onClick:function(){console.log(t)}},"\ud655\uc778"),r.a.createElement("h1",null,"Todo \ucef4\ud3ec\ub10c\ud2b8 \uc81c\uc791\uc911"),r.a.createElement("div",null,"test")))},S=x.a.section(A()),U=n(27);function M(){var e=Object(k.a)(["\n  form {\n    > div {\n      display: block;\n      margin-bottom: 1rem;\n    }\n    label,\n    input,\n    button {\n      display: inline-block;\n      padding: 1rem 2rem;\n      color: #111;\n      font-size: 16px;\n    }\n    button {\n      color: #fff;\n      background: #111;\n    }\n    input {\n      background: #e1e1e1;\n    }\n  }\n"]);return M=function(){return e},e}var V=function(e){var t=s(),n=Object(a.useState)((function(){return console.log(e),0})),l=Object(u.a)(n,2),c=(l[0],l[1],Object(U.a)()),o=c.register,i=c.setValue,m=c.handleSubmit,E=(c.errors,m((function(e){console.log(typeof e.age)})));return Object(a.useEffect)((function(){console.log(t)}),[]),r.a.createElement(C,null,r.a.createElement(N,null,r.a.createElement("form",{onSubmit:E},r.a.createElement("div",null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"firstName",ref:o,defaultValue:"first"})),r.a.createElement("div",null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"lastName",ref:o})),r.a.createElement("div",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{name:"age",type:"number",ref:o({required:!0})})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){i("age",222),i("lastName","luo")}},"SetValue"),r.a.createElement("button",{type:"submit"},"submit")))))},N=x.a.div(M()),D=function(){return r.a.createElement(C,null,r.a.createElement("h1",null,"\ud0c0\uc774\ud2c0"),r.a.createElement("h1",null,"\ud0c0\uc774\ud2c0"),r.a.createElement("p",null,"2212121"))},z=n(7),G=Object(a.createContext)(void 0),J=Object(a.createContext)(void 0);function L(e,t){switch(t.type){case"CREATE":var n=Math.max.apply(Math,Object(z.a)(e.map((function(e){return e.id}))))+1;return e.concat({id:n,text:t.text,done:!1});case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(i.a)({},e,{done:!e.done}):e}));case"REMOVE":return e.filter((function(e){return e.id!==t.id}));default:throw new Error("Unhandled action")}}function F(e){var t=e.children,n=Object(a.useReducer)(L,[{id:1,text:"Learn Context API",done:!0},{id:2,text:"Learn TypeScript",done:!0},{id:3,text:"Use Context API with TypeScript",done:!1}]),l=Object(u.a)(n,2),c=l[0],o=l[1];return r.a.createElement(J.Provider,{value:o},r.a.createElement(G.Provider,{value:c},t))}var I=function(e){var t=e.name,n=e.title,l=function(){var e=Object(a.useContext)(G);if(!e)throw new Error("TodosProvider not found");return e}();return console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"name: ",t),r.a.createElement("div",null,"title: ",n),r.a.createElement("div",null,JSON.stringify(l,null,1)))};var B=function(){return r.a.createElement(F,null,r.a.createElement(C,null,r.a.createElement("h1",null,"TodoS"),r.a.createElement(I,{name:"my_name",title:"my_title"})))};function H(e){var t=e.name,n=e.mark,a=e.optional;return r.a.createElement("div",null,"Hello, ",t," ",n,a&&r.a.createElement("p",null,a))}H.defaultProps={mark:"!"};var _=H,q=function(e){return Object(a.useEffect)((function(){console.log("1")})),a.createElement(C,null,a.createElement("h1",null,"\ud0ed"),a.createElement(_,{name:"wanhwi.son",mark:"A"}))};var $=function(){return r.a.createElement(o.b,{basename:"/"},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:R}),r.a.createElement(O.a,{exact:!0,path:"/todo",component:B}),r.a.createElement(O.a,{exact:!0,path:"/form",component:V}),r.a.createElement(O.a,{exact:!0,path:"/markdown",component:D}),r.a.createElement(O.a,{exact:!0,path:"/tab",component:q})))};var K=function(){return r.a.createElement($,null)};n(42),n(43);c.a.render(r.a.createElement(o.a,{basename:"/typescript"},r.a.createElement(f,null,r.a.createElement(h,null,r.a.createElement(K,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.255dd2c6.chunk.js.map