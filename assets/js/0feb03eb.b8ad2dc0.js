"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1698:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>m,default:()=>d});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(4996),p=["components"],l={id:"bitpie",title:"Bitpie"},s=void 0,c={unversionedId:"basics/guides/crypto wallets/bitpie",id:"basics/guides/crypto wallets/bitpie",title:"Bitpie",description:"Set Up a CKB Wallet",source:"@site/docs/basics/guides/crypto wallets/bitpie.md",sourceDirName:"basics/guides/crypto wallets",slug:"/basics/guides/crypto wallets/bitpie",permalink:"/docs-new_toolchain/docs/basics/guides/crypto wallets/bitpie",tags:[],version:"current",frontMatter:{id:"bitpie",title:"Bitpie"},sidebar:"Basics",previous:{title:"Portal Wallet",permalink:"/docs-new_toolchain/docs/basics/guides/crypto wallets/portalwallet"},next:{title:"Glossary",permalink:"/docs-new_toolchain/docs/basics/glossary"}},m=[{value:"Set Up a CKB Wallet",id:"set-up-a-ckb-wallet",children:[],level:2}],u={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-up-a-ckb-wallet"},"Set Up a CKB Wallet"),(0,i.kt)("p",null,"To set up a CKB wallet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download ",(0,i.kt)("a",{parentName:"p",href:"https://bitpie.com/"},"Bitpie")," from iOS or Android App Store.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Bitpie, and click ",(0,i.kt)("strong",{parentName:"p"},"Create Wallet"),"."),(0,i.kt)("img",{src:(0,o.Z)("img/wallet/bitpie_01.png"),width:"30%"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Noticed, start to backup")," to back up the seed phrase."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Do ",(0,i.kt)("strong",{parentName:"p"},"not")," reveal the seed phrase or take a picture of it. Keep the seed phrase offline."),(0,i.kt)("img",{src:(0,o.Z)("img/wallet/bitpie_02.png"),width:"30%"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"I know it")," on the pop-up window to confirm NOT to reveal the seed phrase to anyone. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write down the phrase. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Backup Finished and go to verify"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the 12 words seed phrase.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a pin code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the PIN code and click ",(0,i.kt)("strong",{parentName:"p"},"OK"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"CKB")," from the selection list to add CKB asset. "),(0,i.kt)("img",{src:(0,o.Z)("img/wallet/bitpie_03.png"),width:"30%"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose CKB on the ",(0,i.kt)("strong",{parentName:"p"},"Choose Wallet System")," page."),(0,i.kt)("img",{src:(0,o.Z)("img/wallet/bitpie_04.png"),width:"30%"}))))}d.isMDXComponent=!0}}]);