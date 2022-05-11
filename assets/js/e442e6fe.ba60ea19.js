"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2725:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>m,toc:()=>c,default:()=>d});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=r(4996),p=(r(9960),["components"]),i={id:"tooling",title:"Developer Tooling",sidebar_label:"Developer Tooling"},s=void 0,m={unversionedId:"develop/tooling",id:"develop/tooling",title:"Developer Tooling",description:"Tools and frameworks with many of the needed features are provided for developing CKB applications.",source:"@site/docs/develop/tooling.md",sourceDirName:"develop",slug:"/develop/tooling",permalink:"/develop/docs/develop/tooling",tags:[],version:"current",frontMatter:{id:"tooling",title:"Developer Tooling",sidebar_label:"Developer Tooling"},sidebar:"Develop",previous:{title:"Developer Materials Guide",permalink:"/develop/docs/develop/developer-materials-guide"},next:{title:"CKB-CLI Introduction",permalink:"/develop/docs/develop/tools/ckb-cli/intro"}},c=[{value:"Recommended Setup",id:"recommended-setup",children:[{value:"Recommended Development Environment Setup",id:"recommended-development-environment-setup",children:[],level:3},{value:"Recommended Development Stack",id:"recommended-development-stack",children:[],level:3}],level:2},{value:"Sample Projects",id:"sample-projects",children:[{value:"Example Scripts",id:"example-scripts",children:[],level:3},{value:"Example DApps",id:"example-dapps",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tools and frameworks with many of the needed features are provided for developing CKB applications. "),(0,o.kt)("p",null,"The following is a mind map to show the usage of CKB developer tools."),(0,o.kt)("img",{src:(0,l.Z)("img/mindmap.png"),width:"50%"}),(0,o.kt)("h2",{id:"recommended-setup"},"Recommended Setup"),(0,o.kt)("p",null,"Recommendations for setting up your development environment and which technologies to build your application with."),(0,o.kt)("h3",{id:"recommended-development-environment-setup"},"Recommended Development Environment Setup"),(0,o.kt)("p",null,"These are the minimum software recommendations for any developer building on Nervos CKB."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS: MacOS, Ubuntu Linux, or Windows 10 + WSL2 (Ubuntu)"),(0,o.kt)("li",{parentName:"ul"},"IDE: ",(0,o.kt)("a",{parentName:"li",href:"https://www.obsidians.io/"},"CKB Studio")," or your favorite IDE! \ud83d\ude01",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/nervos-ckb-israel/collection-of-ckb-studio-tutorials-9ffd573894"},"Tutorials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=lOxXrVIfT2Y"},"Video Tutorial: How to Use CKB Studio")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/devchain"},"CKB Development Blockchain")," - For testing smart contracts and DApps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," - For smart contract development using Capsule."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"NPM")," or ",(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn")," - For DApp development using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Lumos")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron/releases"},"Neuron Wallet")," or ",(0,o.kt)("a",{parentName:"li",href:"https://ckb.pw/"},"Portal Wallet")," - For managing Mainnet funds.")),(0,o.kt)("h3",{id:"recommended-development-stack"},"Recommended Development Stack"),(0,o.kt)("p",null,"Usually several tools can be used in combination for an application development. The following are recommended software stacks for application development on Nervos CKB."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DApp Server Side: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Lumos"),"+ ckb-cli/CKB SDK + Tippy"),(0,o.kt)("li",{parentName:"ul"},"DApp Front-end: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React.js")," + ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")),(0,o.kt)("li",{parentName:"ul"},"Smart Contracts Development: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/capsule"},"Capsule")),(0,o.kt)("li",{parentName:"ul"},"Ethereum DApps Porting to CKB: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client side DApp wallet support: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-Core"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.lay2.dev/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/simplestdapp"},"Demo Project: Simplest DApp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=E2AYuRaeP9Q"},"Video Tutorial: PW-Core Programming Walkthrough (English)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NmMRM4PoE08"},"Video Tutorial: PW-Core Programming Walkthrough (Chinese)")))),(0,o.kt)("li",{parentName:"ul"},"DApp Wallet: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," + ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Aggron Faucet"),": When building on the Aggron Testnet, free testnet CKB can be obtained from this faucet.")),(0,o.kt)("h2",{id:"sample-projects"},"Sample Projects"),(0,o.kt)("p",null,"View functioning example smart contract scripts and DApps."),(0,o.kt)("h3",{id:"example-scripts"},"Example Scripts"),(0,o.kt)("p",null,"These are smart contract scripts written in C and Rust. For most developers we recommend building scripts in Rust."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jjyr/my-sudt"},"Simple UDT Type Script (Rust + Capsule)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/develop/tools/capsule/sudtbycapsule"},"Write an SUDT in Capsule")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/simple_udt.c"},"Simple UDT Type Script (C)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/token-sale"},"Token Sale Lock Script (Rust + Capsule)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/token-sale/blob/master/README.md"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/ysUbx4FAKlE"},"Video Tutorial: Understanding the Token Sale Lock Script (English)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-anyone-can-pay/blob/master/c/anyone_can_pay.c"},"Anyone Can Pay Lock Script (C)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/open_transaction.c"},"Open Transaction Lock Script (C)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://talk.nervos.org/t/open-tx-protocol-brainstorm-1-otx-in-general/4010"},"Nervos Talk - Open Transaction Four Part Brainstorm")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/nervos-ckb-nft"},"Multi-Token Extensible NFT Type Script (Rust + Capsule)"))),(0,o.kt)("h3",{id:"example-dapps"},"Example DApps"),(0,o.kt)("p",null,"These are fully functioning DApps which were built using our recommended tooling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tspoff/hello-lumos"},"Hello Lumos DApp Template")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tspoff/token-playground"},"Token Playground (Lumos + PW-SDK)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/simplestdapp"},"Simplest DApp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/simplestdapp"},"Simplest DApp + Synapse"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/synapse-extension"},"Synapse Source")," - A DApp wallet with support for multiple lock types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/synapse-extension/tree/master/docs"},"Synapse Documentation"))))))}d.isMDXComponent=!0}}]);