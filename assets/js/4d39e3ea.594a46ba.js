"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4175:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"ckb-vm",title:"CKB-VM"},l=void 0,c={unversionedId:"basics/concepts/ckb-vm",id:"basics/concepts/ckb-vm",title:"CKB-VM",description:"What is the CKB-VM?",source:"@site/docs/basics/concepts/ckb-vm.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/ckb-vm",permalink:"/develop/docs/basics/concepts/ckb-vm",tags:[],version:"current",frontMatter:{id:"ckb-vm",title:"CKB-VM"},sidebar:"Basics",previous:{title:"Economics",permalink:"/develop/docs/basics/concepts/economics"},next:{title:"Crypto Wallet",permalink:"/develop/docs/basics/concepts/cryptowallet"}},p=[{value:"What is the CKB-VM?",id:"what-is-the-ckb-vm",children:[],level:2},{value:"RISC-V",id:"risc-v",children:[],level:2},{value:"Flexibility",id:"flexibility",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-ckb-vm"},"What is the CKB-VM?"),(0,o.kt)("p",null,"Ethereum\u2019s virtual machine-based programmability opened the door for Turing complete development on the blockchain. Nervos takes this one step further by utilizing the RISC-V instruction set to create the CKB-VM."),(0,o.kt)("p",null,"The CKB-VM is a virtual machine that executes smart contracts on Nervos. It is a full computer being emulated through software. It provides developers with the maximum amount of power and flexibility while maintaining a secure high-performance environment."),(0,o.kt)("h2",{id:"risc-v"},"RISC-V"),(0,o.kt)("p",null,"RISC-V is a computer instruction set similar to the one that powers your computer and the smartphone in your pocket. It is the lowest level of the software stack that provides raw instructions directly to the CPU."),(0,o.kt)("p",null,"RISC-V is an award-winning open standard developed and backed by some of the largest and most recognized tech industry leaders. Support and adoption are already prevalent and several large hardware manufacturers have announced plans to implement RISC-V in their mainstream consumer products."),(0,o.kt)("p",null,"The standard is mature, established, and built for modern hardware development. This guarantees a simple, modular design that will always be backward-compatible. It is an ideal fit for blockchain development."),(0,o.kt)("h2",{id:"flexibility"},"Flexibility"),(0,o.kt)("p",null,"With CKB-VM, operations that have traditionally been problematic in blockchains, like rolling out new cryptographic primitives such as Schnorr, BLS, zk-SNARKs, and zk-STARKs, no longer require a hard fork. The process is as simple as adding a new library to your codebase. "),(0,o.kt)("p",null,"Developers have complete flexibility to rely on existing open-source libraries rather than being forced to retool everything from scratch. This allows for a less restrictive developer experience and quicker adoption of next-generation technological advancements, such as cross-blockchain interaction, scaling innovations, and direct integration with secure hardware enclaves."),(0,o.kt)("p",null,"Any programming language that can target RISC-V can be used natively for Nervos development. Use your existing tooling, favorite IDEs, and debug tools. There is no need to rely on immature and untested tools; use whatever is best for the job."),(0,o.kt)("p",null,"Nervos CKB offers native SDKs in a growing number of well-known general-purpose programming languages, such as JavaScript, Rust, and C. Direct support for emerging smart contract languages, such as Solidity, Vyper, and Plutus is also planned."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For more technical information on CKB-VM, please see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0003-ckb-vm/0003-ckb-vm.md"},"CKB-VM RFC"),".")))}d.isMDXComponent=!0}}]);