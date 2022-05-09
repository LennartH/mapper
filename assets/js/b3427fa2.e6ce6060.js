"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[1519],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(n),s=o,d=f["".concat(u,".").concat(s)]||f[s]||m[s]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"from-value",title:"FromValue",sidebar_label:"FromValue",sidebar_position:5},u=void 0,c={unversionedId:"mapping-configuration/for-member/from-value",id:"mapping-configuration/for-member/from-value",title:"FromValue",description:"Call fromValue() and pass in a raw value to map to the configured property. If we pass in an object, the object will be mapped as-is without any consideration for nested Mapping.",source:"@site/docs/mapping-configuration/for-member/from-value.mdx",sourceDirName:"mapping-configuration/for-member",slug:"/mapping-configuration/for-member/from-value",permalink:"/docs/mapping-configuration/for-member/from-value",editUrl:"https://github.com/nartc/mapper/tree/main/packages/documentations/docs/mapping-configuration/for-member/from-value.mdx",tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1648359081,formattedLastUpdatedAt:"3/27/2022",sidebarPosition:5,frontMatter:{id:"from-value",title:"FromValue",sidebar_label:"FromValue",sidebar_position:5},sidebar:"docs",previous:{title:"Condition",permalink:"/docs/mapping-configuration/for-member/condition"},next:{title:"MapWith",permalink:"/docs/mapping-configuration/for-member/map-with"}},l={},m=[],f={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"fromValue()")," and pass in a raw value to map to the configured property. If we pass in an object, the object will be mapped as-is without any consideration for nested Mapping."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"createMap(\n    mapper,\n    User,\n    UserDto,\n    forMember((destination) => destination.fullName, fromValue('John Doe'))\n);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fromValue()")," sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"TransformationType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"TransformationType.FromValue")))}s.isMDXComponent=!0}}]);