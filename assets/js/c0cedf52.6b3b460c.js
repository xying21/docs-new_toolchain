"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(r),d=a,m=k["".concat(l,".").concat(d)]||k[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},126:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>k});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"sdk",title:"Nervos CKB SDK"},l=void 0,c={unversionedId:"integrate/sdk",id:"integrate/sdk",title:"Nervos CKB SDK",description:"ckb-sdk is a collection of libraries which allow you to interact with a local or remote CKB node by using JSON-RPC. You should get familiar with ckb transaction structure and JSON-RPC before using it. Now ckb-sdk is implemented by the following programming languages: JavaScript/TypeScript,Ruby,Swift,Java and Go.",source:"@site/docs/integrate/sdk.md",sourceDirName:"integrate",slug:"/integrate/sdk",permalink:"/develop/docs/integrate/sdk",tags:[],version:"current",frontMatter:{id:"sdk",title:"Nervos CKB SDK"},sidebar:"Integrate",previous:{title:"Q&A | For Wallets/Exchanges/Mining Pools",permalink:"/develop/docs/integrate/qa"}},p=[],u={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ckb-sdk is a collection of libraries which allow you to interact with a local or remote CKB node by using JSON-RPC. You should get familiar with ",(0,o.kt)("a",{parentName:"p",href:"/develop/docs/reference/transaction"},"ckb transaction structure")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/tree/develop/rpc"},"JSON-RPC")," before using it. Now ckb-sdk is implemented by the following programming languages: JavaScript/TypeScript,Ruby,Swift,Java and Go."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-js"},"ckb-sdk-js"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ckb-sdk-js is an SDK implemented in JavaScript, and published in ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@nervosnetwork/ckb-sdk-core/"},"NPM Registry"),", and provides APIs for developers to send requests to the CKB blockchain. Neuron Wallet utilizes ckb-sdk-js ."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-ruby"},"ckb-sdk-ruby"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ckb-sdk-ruby is an SDK implemented in Ruby and provides APIs for developers to send requests to the CKB blockchain. CKB-Explorer utilizes ckb-sdk-ruby."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java"},"ckb-sdk-java"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ckb-sdk-java is an SDK implemented in Java and provides APIs for developers to send requests to the CKB blockchain."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ashchan/ckb-swift-kit"},"ckb-sdk-swift"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ckb-sdk-swift is an SDK implemented in Swift and provides APIs for developers to send requests to the CKB blockchain. Testnet Faucet utilizes ckb-sdk-swift ."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ququzone/ckb-sdk-go"},"ckb-sdk-go"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ckb-sdk-go is an SDK implemented in Golang.")))))}k.isMDXComponent=!0}}]);