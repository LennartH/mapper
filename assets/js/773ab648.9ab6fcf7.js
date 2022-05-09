"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[3024],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9127:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"Converter",title:"Interface: Converter<TSource, TConvertDestination>",sidebar_label:"Converter",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/core/interfaces/Converter",id:"api/core/interfaces/Converter",title:"Interface: Converter<TSource, TConvertDestination>",description:"Type parameters",source:"@site/docs/api/core/interfaces/Converter.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/Converter",permalink:"/docs/api/core/interfaces/Converter",editUrl:null,tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1652068043,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:0,frontMatter:{id:"Converter",title:"Interface: Converter<TSource, TConvertDestination>",sidebar_label:"Converter",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"ConditionPredicate",permalink:"/docs/api/core/interfaces/ConditionPredicate"},next:{title:"CreateMapperOptions",permalink:"/docs/api/core/interfaces/CreateMapperOptions"}},d={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"convert",id:"convert",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TSource")),(0,o.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core/modules#dictionary"},(0,o.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,o.kt)("inlineCode",{parentName:"td"},"TSource"),">"," = ",(0,o.kt)("inlineCode",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TConvertDestination")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"convert"},"convert"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"convert"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"source"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"TConvertDestination")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"source")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TSource"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TConvertDestination")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L103"},"lib/types.ts:103")))}m.isMDXComponent=!0}}]);