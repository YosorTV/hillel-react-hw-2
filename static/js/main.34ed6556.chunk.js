(this["webpackJsonplesson-2"]=this["webpackJsonplesson-2"]||[]).push([[0],{11:function(e,t,n){e.exports={TodoItem:"TodoItem_TodoItem__1fMtz",Done:"TodoItem_Done__1y-Fu"}},12:function(e,t,n){e.exports={Wrapper:"App_Wrapper__3u72b",TodoWrapper:"App_TodoWrapper__1dDMT"}},25:function(e,t,n){e.exports={TodoForm:"TodoForm_TodoForm__V59w2"}},30:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),u=n(3),l=n(11),i=n.n(l);var s=function(e){var t=e.item,n=e.onItemToggle,a=e.onItemDelete;return o.a.createElement("div",{className:i.a.TodoItem},o.a.createElement("button",{onClick:function(){return n(t.id)}},o.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),o.a.createElement("span",{className:t.isDone?i.a.Done:""},t.title),o.a.createElement("button",{onClick:function(e){e.stopPropagation(),a(t.id)}},o.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))},d=n(2),m=n(24),p=n.n(m).a.create({baseURL:"http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos",headers:{"Content-Type":"application/json"}}),T=function(e){return function(t){return{type:e,payload:t}}},f=T("ACTION_CREATE_TODO"),E=T("ACTION_DELETE_TODO"),O=T("ACTION_STATUS_TODO");var _={onItemDelete:function(e){return function(t){t(E(e)),p.delete(e)}},onItemToggle:function(e){return function(t,n){var a=Object(d.a)({},n().todos.find((function(t){return t.id===e})));a.isDone=!a.isDone,p.put(a.id,a).then((function(e){var n=e.data;return t(O(n))}))}}},b=Object(u.b)((function(e){return{todos:e.todos}}),_)((function(e){var t=e.todos,n=e.onItemToggle,a=e.onItemDelete;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(s,{key:e.id,item:e,onItemToggle:n,onItemDelete:a})})))})),D=n(28),v=n(25),I=n.n(v);var h={createTodo:function(e){return function(t){return p.post("",function(e){return{title:e,isDone:!1}}(e)).then((function(e){var n=e.data;return t(f(n))}))}}},N=Object(u.b)(null,h)((function(e){var t=e.createTodo,n=Object(a.useState)(""),r=Object(D.a)(n,2),c=r[0],u=r[1];return o.a.createElement(a.Fragment,null,o.a.createElement("form",{className:I.a.TodoForm,onSubmit:function(e){e.preventDefault(),t(c),u("")}},o.a.createElement("input",{type:"text",placeholder:"New Task",onChange:function(e){var t=e.target;return u(t.value)},value:c}),o.a.createElement("button",null,o.a.createElement("i",{className:"fas fa-plus"}))))})),g=n(12),A=n.n(g);function C(){return o.a.createElement("header",null,o.a.createElement("div",{className:A.a.Wrapper},o.a.createElement("h1",null,"Hillel"),o.a.createElement("span",null,"Todo-App")),o.a.createElement("div",{className:A.a.TodoWrapper},o.a.createElement("h2",null,"Todo List"),o.a.createElement(N,null),o.a.createElement(b,null)))}var j=n(4),S=n(29),y={todos:[]},k=function(e,t){return e.map((function(e){return e.id===t.id?t:e}))},F=function(e,t){return[].concat(Object(S.a)(e),[t])},W=n(26),w=n.n(W),x=n(27),L=Object(j.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ACTION_SET_TODOS":return Object(d.a)({},e,{todos:a});case"ACTION_DELETE_TODO":return Object(d.a)({},e,{todos:e.todos.filter((function(e){return e.id!==a}))});case"ACTION_STATUS_TODO":return Object(d.a)({},e,{todos:k(e.todos,a)});case"ACTION_CREATE_TODO":return Object(d.a)({},e,{todos:F(e.todos,a)});default:return e}}),Object(j.a)(x.a,w.a));L.dispatch((function(e){return p.get().then((function(t){return t.data,e(T("ACTION_SET_TODOS"))}))})),c.a.render(o.a.createElement(u.a,{store:L},o.a.createElement(C,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.34ed6556.chunk.js.map