"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1873:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>d});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(4996),r(9960),["components"]),l={id:"mercury",title:"Mercury"},c=void 0,s={unversionedId:"develop/tools/mercury",id:"develop/tools/mercury",title:"Mercury",description:"Mercury is a tool that handles the development of applications on the CKB. Simply put, within the Nervos ecosystem, CKB is the Linux kernel and Mercury is Ubuntu.",source:"@site/docs/develop/tools/mercury.md",sourceDirName:"develop/tools",slug:"/develop/tools/mercury",permalink:"/develop/docs/develop/tools/mercury",tags:[],version:"current",frontMatter:{id:"mercury",title:"Mercury"},sidebar:"Develop",previous:{title:"Dynamic loading in Capsule",permalink:"/develop/docs/develop/tools/capsule/capsule-dynamic-loading-tutorial"},next:{title:"Introduction",permalink:"/develop/docs/develop/tools/tippy/intro"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mercury is a tool that handles the development of applications on the CKB. Simply put, within the Nervos ecosystem, CKB is the Linux kernel and Mercury is Ubuntu.\nMercury is the bridge between CKB and applications by providing useful RPC services for applications such as dApps built on Lumos as well as wallets and exchanges built on ",(0,a.kt)("inlineCode",{parentName:"p"},"ckb-sdk"),"."),(0,a.kt)("p",null,"Function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on developing wallet applications: Mercury has interfaces for obtaining the balance of an address and for assembling transactions for transferring CKBytes, sUDT or xUDT."),(0,a.kt)("li",{parentName:"ul"},"For exchanges: Mercury offers functions such as aggregating digital seets and fectching blocks.")))}d.isMDXComponent=!0}}]);