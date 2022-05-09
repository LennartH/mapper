"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[5829],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=o(a),c=r,u=k["".concat(d,".").concat(c)]||k[c]||s[c]||i;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7018:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),p=["components"],l={id:"MappingStrategy",title:"Interface: MappingStrategy<TIdentifier>",sidebar_label:"MappingStrategy",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"api/core/interfaces/MappingStrategy",id:"api/core/interfaces/MappingStrategy",title:"Interface: MappingStrategy<TIdentifier>",description:"Type parameters",source:"@site/docs/api/core/interfaces/MappingStrategy.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/MappingStrategy",permalink:"/docs/api/core/interfaces/MappingStrategy",editUrl:null,tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1652068043,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:0,frontMatter:{id:"MappingStrategy",title:"Interface: MappingStrategy<TIdentifier>",sidebar_label:"MappingStrategy",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Mapper",permalink:"/docs/api/core/interfaces/Mapper"},next:{title:"MappingStrategyInitializerOptions",permalink:"/docs/api/core/interfaces/MappingStrategyInitializerOptions"}},m={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"destinationConstructor",id:"destinationconstructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"mapper",id:"mapper",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"applyMetadata",id:"applymetadata",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"postMap",id:"postmap",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"preMap",id:"premap",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"retrieveMetadata",id:"retrievemetadata",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],k={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TIdentifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#metadataidentifier"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataIdentifier")))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"destinationconstructor"},"destinationConstructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"destinationConstructor"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules#destinationconstructor"},(0,i.kt)("inlineCode",{parentName:"a"},"DestinationConstructor")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L560"},"lib/types.ts:560")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mapper"},"mapper"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mapper"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/Mapper"},(0,i.kt)("inlineCode",{parentName:"a"},"Mapper"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L561"},"lib/types.ts:561")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"applymetadata"},"applyMetadata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"applyMetadata"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules#applymetadatafn"},(0,i.kt)("inlineCode",{parentName:"a"},"ApplyMetadataFn"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules#applymetadatafn"},(0,i.kt)("inlineCode",{parentName:"a"},"ApplyMetadataFn"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L562"},"lib/types.ts:562")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"postmap"},"postMap"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"postMap"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TSource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TDestination"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapping"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TDestination")),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TSource")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TSource"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TDestination")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TDestination"),">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TSource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"destination")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TDestination"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mapping")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#mapping"},(0,i.kt)("inlineCode",{parentName:"a"},"Mapping")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TSource"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TDestination"),">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TDestination")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L573"},"lib/types.ts:573")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"premap"},"preMap"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"preMap"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TSource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TDestination"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapping"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"TSource")),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TSource")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TSource"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TDestination")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TDestination"),">")))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TSource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mapping")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/modules#mapping"},(0,i.kt)("inlineCode",{parentName:"a"},"Mapping")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TSource"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TDestination"),">")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TSource")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L566"},"lib/types.ts:566")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"retrievemetadata"},"retrieveMetadata"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"retrieveMetadata"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TIdentifier"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules#metadatalist"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataList")),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...identifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TIdentifier"),"[]")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TIdentifier"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules#metadatalist"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataList")),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nartc/mapper/blob/00d25ce/packages/core/src/lib/types.ts#L563"},"lib/types.ts:563")))}c.isMDXComponent=!0}}]);