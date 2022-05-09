"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[8354],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"fake-async",title:"Fake Async",sidebar_label:"Fake Async",sidebar_position:3},c=void 0,p={unversionedId:"misc/fake-async",id:"misc/fake-async",title:"Fake Async",description:'"Fake" Async',source:"@site/docs/misc/fake-async.mdx",sourceDirName:"misc",slug:"/misc/fake-async",permalink:"/docs/misc/fake-async",editUrl:"https://github.com/nartc/mapper/tree/main/packages/documentations/docs/misc/fake-async.mdx",tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1648523886,formattedLastUpdatedAt:"3/29/2022",sidebarPosition:3,frontMatter:{id:"fake-async",title:"Fake Async",sidebar_label:"Fake Async",sidebar_position:3},sidebar:"docs",previous:{title:"Mapped Types",permalink:"/docs/misc/mapped-types"},next:{title:"Usage with NestJS",permalink:"/docs/nestjs"}},u={},l=[{value:"&quot;Fake&quot; Async",id:"fake-async",level:2},{value:"Help wanted",id:"help-wanted",level:2}],f={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fake-async"},'"Fake" Async'),(0,o.kt)("p",null,"Currently, AutoMapper is manipulating the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"},"Event Loop"),' to provide a "fake" async support for the ',(0,o.kt)("inlineCode",{parentName:"p"},"mapAsync()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mutateAsync()")," variants."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"//                  \ud83d\udc47 simplified for brevity\nfunction mapAsync(...args) {\n    const result = map(...args);\n    return new Promise((res) => {\n        setTimeout(res, 0, result);\n    });\n}\n\n//                      \ud83d\udc47 simplified for brevity\nfunction mutateAsync(...args) {\n    return new Promise((res) => {\n        mutate(...args);\n        setTimeout(res);\n    });\n}\n")),(0,o.kt)("h2",{id:"help-wanted"},"Help wanted"),(0,o.kt)("p",null,"Real async support can be achieved by some Isomorphic Worker that would execute the map operations on the Worker thread. However, AutoMapper implementation is full of ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," which cannot be serialized (easily) to transfer to the Worker thread. If anyone wants to contribute Asynchronous support, I'm happy to walk you through the repository."))}m.isMDXComponent=!0}}]);