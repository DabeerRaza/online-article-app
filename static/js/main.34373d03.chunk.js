(window["webpackJsonponline-article-app"]=window["webpackJsonponline-article-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(14),o=n.n(l),r=n(4),m=n(6),u=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Home"))},p=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"About"))},i=function(e){var t=e.match;return console.log(t.path),console.log(t.params.topicId),console.log(t.url),c.a.createElement("div",null,c.a.createElement("h3",null,t.params.topicId))},E=function(e){var t=e.match;return c.a.createElement(r.a,null,c.a.createElement("div",null,c.a.createElement("h2",null,"Topics"),c.a.createElement(r.b,{to:"".concat(t.url,"/rendering")},"Rendering with React"),c.a.createElement(r.b,{to:"".concat(t.url,"/components")},"Components"),c.a.createElement(r.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"),c.a.createElement(m.a,{path:"".concat(t.path,"/:topicId"),component:i})))};function s(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(r.b,{to:"/"},"Home"),c.a.createElement(r.b,{to:"/about"},"About"),c.a.createElement(r.b,{to:"/topics"},"Topics"),c.a.createElement(m.a,{exact:!0,path:"/",component:u}),c.a.createElement(m.a,{path:"/about",component:p}),c.a.createElement(m.a,{path:"/topics",component:E})))}var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,null))};o.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.34373d03.chunk.js.map