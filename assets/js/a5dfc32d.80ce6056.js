"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[8260],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"modules",title:"@automapper/pojos",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},l=void 0,s={unversionedId:"api/pojos/modules",id:"api/pojos/modules",title:"@automapper/pojos",description:"Classes",source:"@site/docs/api/pojos/modules.md",sourceDirName:"api/pojos",slug:"/api/pojos/modules",permalink:"/docs/api/pojos/modules",editUrl:null,tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1652068043,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:.5,frontMatter:{id:"modules",title:"@automapper/pojos",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},sidebar:"api",previous:{title:"README",permalink:"/docs/api/pojos/"},next:{title:"PojosMetadataMap",permalink:"/docs/api/pojos/classes/PojosMetadataMap"}},d={},u=[{value:"Classes",id:"classes",level:2},{value:"Type aliases",id:"type-aliases",level:2},{value:"PojoMetadata",id:"pojometadata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"pojos",id:"pojos",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/pojos/classes/PojosMetadataMap"},"PojosMetadataMap"))),(0,o.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,o.kt)("h3",{id:"pojometadata"},"PojoMetadata"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"PojoMetadata"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclude"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"ModelIdentifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Constructor"),">"," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"AnyConstructor")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/pojos/src/lib/metadata-map.ts#L8"},"lib/metadata-map.ts:8")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"pojos"},"pojos"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"pojos"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"MappingStrategyInitializer"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"MappingStrategyInitializerOptions"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MappingStrategyInitializer"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/pojos/src/lib/pojos.ts#L10"},"lib/pojos.ts:10")))}m.isMDXComponent=!0}}]);