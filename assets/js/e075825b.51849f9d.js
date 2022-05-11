"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1912:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>d});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(4996),r(9960),["components"]),c={id:"intro",title:"Introduction"},l=void 0,s={unversionedId:"develop/tools/sdk/intro",id:"develop/tools/sdk/intro",title:"Introduction",description:"Overview",source:"@site/docs/develop/tools/sdk/intro.md",sourceDirName:"develop/tools/sdk",slug:"/develop/tools/sdk/intro",permalink:"/docs-new_toolchain/docs/develop/tools/sdk/intro",tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction"},sidebar:"Develop",previous:{title:"Manage Accounts",permalink:"/docs-new_toolchain/docs/develop/tools/lumos/guides/manageaccounts"},next:{title:"ckb-sdk-go",permalink:"/docs-new_toolchain/docs/develop/tools/sdk/overview_go"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Features",id:"features",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"CKB SDK encapsulates cryptographic algorithms and RPC services to support the development of applications on CKB. The knowledge of CKB Data Model (see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/introduction"},"Nervos CKB Reference")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md"},"CKB RFC: CKB Data Structures"),") and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/tree/develop/rpc"},"JSON-RPC")," are crucial in developing applications by using this SDK."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wallet management"),(0,a.kt)("li",{parentName:"ul"},"Account management"),(0,a.kt)("li",{parentName:"ul"},"Cryptocurrency management"),(0,a.kt)("li",{parentName:"ul"},"Communication with CKB networks"),(0,a.kt)("li",{parentName:"ul"},"Token management.")))}d.isMDXComponent=!0}}]);