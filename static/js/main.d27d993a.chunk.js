(this.webpackJsonptypescript=this.webpackJsonptypescript||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/typescript.3de182d2.svg"},29:function(e,t,n){e.exports=n(43)},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),o=n(11),i=n(1),u=n(4),m=Object(a.createContext)(void 0),d=Object(a.createContext)(void 0);function E(e,t){switch(t.type){case"CREATE":return t;case"UPDATE":return Object(u.a)({},e,{},t);case"REMOVE":return{};default:throw new Error("Unhandled action")}}function p(e){var t=e.children,n=Object(a.useReducer)(E,{auth:"sfdkjsdlfj43w43232423"}),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement(d.Provider,{value:o},r.a.createElement(m.Provider,{value:c},t))}function s(){var e=Object(a.useContext)(m);if(!e)throw new Error("useGlobalState not found");return e}var f=Object(a.createContext)(void 0),b=Object(a.createContext)(void 0);function h(e,t){switch(t.type){case"UPDATE":return Object(u.a)({},e,{},t.info);case"REMOVE":return e;default:throw new Error("Unhandled action")}}function v(e){var t=e.children,n=Object(a.useReducer)(h,{title:"title"}),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement(b.Provider,{value:o},r.a.createElement(f.Provider,{value:c},t))}var g=n(9),y=n(6),k=n(7);var x=function(){var e=Object(a.useState)([{title:"Main",link:"/"},{title:"Login",link:"/login"},{title:"Guide",link:"/guide"},{title:"Hooks",link:"/hooks"},{title:"Todo",link:"/todo"},{title:"Button",link:"/button"},{title:"Form",link:"/form"},{title:"markdown",link:"/markdown"}]),t=Object(i.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){var n=e.title,a=e.link;return r.a.createElement("dl",{key:t},r.a.createElement("dt",null,r.a.createElement(o.c,{to:a},n)))})))},O=n(24),w=n.n(O),j=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:w.a}),r.a.createElement("span",null,"Typescript")),r.a.createElement(x,null),r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:yeshtml5@gmail.com"},"mail: yeshtml5@gmail.com"),r.a.createElement("a",{href:"https://github.com/yeshtml5/typescript"},"github: github.com/yeshtml5/typescript"),r.a.createElement("p",null,"\xa9 2020 Yeshtml5, ",r.a.createElement("br",null),"ALL RIGHTS RESERVED.")))},C=function(e){var t=e.children;return r.a.createElement("main",null,r.a.createElement(j,null),r.a.createElement("article",null,t))};function T(e){var t=e.name,n=e.mark;return r.a.createElement("div",null,"Hello, ",t," ",n)}T.defaultProps={mark:"!"};var P=T;function A(){var e=Object(y.a)(["\n  p {\n    margin-bottom: 10px;\n  }\n  button {\n    display: inline-block;\n    padding: 10px;\n    font-size: 16px;\n    color: #ff0000;\n    background: #111;\n  }\n"]);return A=function(){return e},e}var R=function(){var e=s(),t=function(){var e=Object(a.useContext)(d);if(!e)throw new Error("useGlobalDispatch not found");return e}();return r.a.createElement(C,null,r.a.createElement(P,{name:"wanhwi",mark:"$"}),r.a.createElement(U,null,r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){t({type:"REMOVE",title:"name"})}},"'REMOVE'")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){t({type:"CREATE",title:"hey ",name:1111})}},"'CREATE'")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){t({type:"UPDATE",title:"UPDATE ",name:"react"})}},"'UPDATE1'")),r.a.createElement("button",{onClick:function(){console.log(e)}},"\ud655\uc778"),r.a.createElement("h1",null,"Todo \ucef4\ud3ec\ub10c\ud2b8 \uc81c\uc791\uc911"),r.a.createElement("div",null,"test"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=window.navigator;e.share?e.share({title:"\uacf5\uc720\ud558\uae30 \uc608\uc81c",text:"\uace0\ubcc4 \uc9c0\ub8e8\ud558\uae30 \uc9dd\uc774\uc5c6\ub294 \uba85\uc81c\ub4e4 \uadf8\ub798\ub3c4 \uadf8\uac83\uc740 \uc9c4\uc2e4",url:"https://naver.com"}).then((function(){return alert("\uacf5\uc720\ud558\uae30")})):alert("share not supported")}},"webShare"))))},U=k.a.section(A()),S=n(28);function D(){var e=Object(y.a)(["\n  form {\n    > div {\n      display: block;\n      margin-bottom: 1rem;\n    }\n    label,\n    input,\n    button {\n      display: inline-block;\n      padding: 1rem 2rem;\n      color: #111;\n      font-size: 16px;\n    }\n    button {\n      color: #fff;\n      background: #111;\n    }\n    input {\n      background: #e1e1e1;\n    }\n  }\n"]);return D=function(){return e},e}var V=function(e){var t=s(),n=Object(S.a)(),l=n.register,c=n.setValue,o=(0,n.handleSubmit)((function(e){console.log(typeof e.age)}));return Object(a.useEffect)((function(){console.log(t)}),[]),r.a.createElement(C,null,r.a.createElement(L,null,r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"firstName",ref:l,defaultValue:"first"})),r.a.createElement("div",null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"lastName",ref:l})),r.a.createElement("div",null,r.a.createElement("label",null,"Age"),r.a.createElement("input",{name:"age",type:"number",ref:l({required:!0})})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){c("age",222),c("lastName","luo")}},"SetValue"),r.a.createElement("button",{type:"submit"},"submit")))))},L=k.a.section(D()),M=function(){return r.a.createElement(C,null,r.a.createElement("h1",null,"\ud0c0\uc774\ud2c0"),r.a.createElement("h1",null,"\ud0c0\uc774\ud2c0"),r.a.createElement("p",null,"2212121"))},N=n(10),F=Object(a.createContext)(void 0),G=Object(a.createContext)(void 0);function H(e,t){switch(t.type){case"CREATE":var n=Math.max.apply(Math,Object(N.a)(e.map((function(e){return e.id}))))+1;return e.concat({id:n,text:t.text,done:!1});case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(u.a)({},e,{done:!e.done}):e}));case"REMOVE":return e.filter((function(e){return e.id!==t.id}));default:throw new Error("Unhandled action")}}function I(e){var t=e.children,n=Object(a.useReducer)(H,[{id:1,text:"Learn Context API",done:!0},{id:2,text:"Learn TypeScript",done:!0},{id:3,text:"Use Context API with TypeScript",done:!1}]),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement(G.Provider,{value:o},r.a.createElement(F.Provider,{value:c},t))}function _(){var e=Object(a.useContext)(F);if(!e)throw new Error("TodosProvider not found");return e}var J=function(e){var t=e.title;return r.a.createElement("h1",null,t)};function z(){var e=Object(y.a)([""]);return z=function(){return e},e}var B=function(){_();var e=function(){var e=Object(a.useContext)(G);if(!e)throw new Error("TodosProvider not found");return e}(),t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],c=n[1];return r.a.createElement(q,null,r.a.createElement("input",{type:"text",name:"title",placeholder:"\uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(t){e({type:"CREATE",text:l})}},"\ud074\ub9ad"))},q=k.a.div(z()),Y=function(e){var t=e.name;e.title;console.log(t);var n=_();console.log(n),fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(e){return console.log(e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),n.map((function(e,t){return r.a.createElement("dl",{key:t},r.a.createElement("dt",null,e.text))})),r.a.createElement(J,{title:"d"}))};function $(){var e=Object(y.a)([""]);return $=function(){return e},e}var K=function(){return r.a.createElement(I,null,r.a.createElement(C,null,r.a.createElement(Q,null,r.a.createElement("h1",null,"Todo example"),r.a.createElement(Y,{name:"my_name",title:"my_title"}))))},Q=k.a.section($()),W=n(3);function X(){var e=Object(y.a)(["\n  h1 {\n    position: relative;\n    display: block;\n    padding-bottom: 10px;\n    &:after {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1px;\n      background: #ccc;\n      content: '';\n    }\n  }\n  .in_wrap {\n    display: block;\n    width: 80%;\n    padding: 50px 0;\n    label {\n      display: block;\n      margin-bottom: 10px;\n      span {\n        display: inline-block;\n        width: 80px;\n      }\n    }\n    button {\n      display: block;\n      width: 100%;\n      padding: 10px;\n      color: #fff;\n      background: #111;\n    }\n  }\n  input {\n    display: inline-block;\n    min-width: 200px;\n    padding: 10px 10px;\n    border: 1px solid #111;\n  }\n  min-height: 100px;\n"]);return X=function(){return e},e}var Z=function(){var e=function(e,t){var n=Object(a.useReducer)((function(t,n){switch(n.type){case"UPDATE":var a=Object(u.a)({},t,{},n.info);return void 0!==e&&"function"===typeof e&&e(a),Object(u.a)({},t,{},n.info);default:throw new Error("Unhandled action")}}),t||{}),r=Object(i.a)(n,2),l=r[0],c=r[1];return{onChange:function(e){e.persist();var t="checkbox"===e.target.type&&"on"===e.target.value?e.target.checked:e.target.value;try{if(""===e.target.name)throw"target.name.null"}catch(a){switch(a){case"target.name.null":alert("name\uac12\uc774 \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.")}}var n=Object(u.a)({},l,Object(W.a)({},e.target.name,t));c({type:"UPDATE",info:Object(u.a)({},n)})},changes:l}}((function(e){})),t=e.changes,n=e.onChange;return r.a.createElement(C,null,r.a.createElement(ee,null,r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"in_wrap"},r.a.createElement("label",{htmlFor:"id"},r.a.createElement("span",null,"\uc544\uc774\ub514"),r.a.createElement("input",{id:"id",type:"text",name:"id",onChange:n})),r.a.createElement("label",{htmlFor:"password"},r.a.createElement("span",null,"\ud328\uc2a4\uc6cc\ub4dc"),r.a.createElement("input",{id:"password",type:"password",name:"password",onChange:n})),r.a.createElement("button",{onClick:function(e){var n=t.id,a=t.password;n?a?alert(JSON.stringify(t,null,1)):alert("password \uc5c6\uc2b5\ub2c8\ub2e4."):alert("id\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")}},"\uc804\uc1a1"))))},ee=k.a.section(X());function te(){var e=Object(y.a)([""]);return te=function(){return e},e}var ne=function(e){e.type;return r.a.createElement(C,null,r.a.createElement(ae,null,"111"))},ae=k.a.section(te()),re=function(e){var t=e.type,n=e.mode,l=(e.method,e.clickHandler),c=function(e,t){var n=Object(a.useReducer)((function(t,n){switch(n.type){case"UPDATE":var a=Object(u.a)({},t,{},n.info);return void 0!==e&&"function"===typeof e&&e(a),Object(u.a)({},t,{},n.info);default:throw new Error("Unhandled action")}}),t),r=Object(i.a)(n,2),l=r[0],c=r[1];return{onChange:function(e){e.persist();var t="checkbox"===e.target.type&&"on"===e.target.value?e.target.checked:e.target.value,n=Object(u.a)({},l,Object(W.a)({},e.target.name,t));c({type:"UPDATE",info:Object(u.a)({},n)})},state:l}}((function(e){console.log(e)}),{onChange:"-1"}),o=c.state,m=c.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("h1",null,"type: ",t),r.a.createElement("h1",null,"mode: ",n),r.a.createElement("button",{onClick:l},"\ubc84\ud2bc"),r.a.createElement("input",{type:"text",name:"title",defaultValue:"\uac12\uc744\uc785\ub825",onChange:m}),r.a.createElement("input",{type:"checkbox",name:"box",onChange:m})),r.a.createElement("button",{onClick:function(){console.log(o)}},"\ubc84\ud2bc\ud074\ub9ad")))},le=function(e){return Object(a.useEffect)((function(){console.log("1")})),r.a.createElement(C,null,r.a.createElement("h1",null,"\ud0ed"),r.a.createElement(P,{name:"wanhwi.son",mark:"A"}))};var ce=function(){return r.a.createElement(o.b,{basename:"/"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:R}),r.a.createElement(g.a,{exact:!0,path:"/todo",component:K}),r.a.createElement(g.a,{exact:!0,path:"/form",component:V}),r.a.createElement(g.a,{exact:!0,path:"/markdown",component:M}),r.a.createElement(g.a,{exact:!0,path:"/tab",component:le}),r.a.createElement(g.a,{exact:!0,path:"/login",component:Z}),r.a.createElement(g.a,{exact:!0,path:"/guide",component:ne}),r.a.createElement(g.a,{exact:!0,path:"/hooks",component:re})))};var oe=function(){return r.a.createElement(ce,null)};n(41),n(42);c.a.render(r.a.createElement(o.a,{basename:"/typescript"},r.a.createElement(p,null,r.a.createElement(v,null,r.a.createElement(oe,null)))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d27d993a.chunk.js.map