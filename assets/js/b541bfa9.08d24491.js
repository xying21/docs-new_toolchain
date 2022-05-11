"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=s,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4647:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>h,toc:()=>d,default:()=>m});var o=n(7462),s=n(3366),a=(n(7294),n(3905)),r=n(4996),i=n(9960),c=["components"],l={id:"economics",title:"Economics"},u=void 0,h={unversionedId:"basics/concepts/economics",id:"basics/concepts/economics",title:"Economics",description:"The Economics of the CKByte",source:"@site/docs/basics/concepts/economics.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/economics",permalink:"/docs-new_toolchain/docs/basics/concepts/economics",tags:[],version:"current",frontMatter:{id:"economics",title:"Economics"},sidebar:"Basics",previous:{title:"Consensus",permalink:"/docs-new_toolchain/docs/basics/concepts/consensus"},next:{title:"CKB-VM",permalink:"/docs-new_toolchain/docs/basics/concepts/ckb-vm"}},d=[{value:"The Economics of the CKByte",id:"the-economics-of-the-ckbyte",children:[],level:2},{value:"Value Alignment",id:"value-alignment",children:[],level:2},{value:"State Rent",id:"state-rent",children:[],level:2},{value:"Base Issuance",id:"base-issuance",children:[],level:2},{value:"Secondary Issuance",id:"secondary-issuance",children:[],level:2},{value:"Nervos DAO",id:"nervos-dao",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-economics-of-the-ckbyte"},"The Economics of the CKByte"),(0,a.kt)("p",null,"The CKByte is the native token of Nervos, and it is used to pay for the three types of fees that exist: Cycles (computation), Transaction Fees (security), and State Rent (storage)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cycles are fees paid to miners based on the amount of computer resources that are used to verify a transaction. These are measured by CKB-VM during the execution of any smart contracts in a transaction."),(0,a.kt)("li",{parentName:"ul"},"Transaction Fees are paid to miners for providing the computing power that provides security to the network. "),(0,a.kt)("li",{parentName:"ul"},"State Rent compensates miners for providing storage space to persist the data in a transaction. ")),(0,a.kt)("p",null,"Cycles and Transaction Fees are paid once to process and insert the transaction into the blockchain. State Rent is paid continuously to persist the data until it is removed."),(0,a.kt)("p",null,"Owning one CKByte entitles the holder to one byte of data storage on Nervos. To create a new ",(0,a.kt)(i.Z,{to:(0,r.Z)("/docs/basics/concepts/cell-model#what-is-a-cell"),mdxType:"Link"},"cell"),", the user must own an amount of CKBytes equal to the space the cell will occupy. These CKBytes will remain locked the entire time the cell exists. When the cell is consumed, the lock is released, and the CKBytes can be used again. State Rent is automatically paid while the CKBytes are locked."),(0,a.kt)("p",null,"All assets on Nervos require data storage, which means they are subject to State Rent. This creates direct value alignment because CKBytes are required to maintain an asset on Nervos. The following sections provide more information about Value Alignment and State Rent."),(0,a.kt)("h2",{id:"value-alignment"},"Value Alignment"),(0,a.kt)("p",null,"The security of a platform must grow along with the value that the platform stores. Otherwise, the value stored will have too little security. It would be like adding more and more gold to a bank vault without adding any additional guards. This makes it vulnerable to attack. "),(0,a.kt)("p",null,"The native tokens, CKBytes, are used to pay miners for their contributions. As the value of the CKBytes increases, so do the rewards for protecting the network. This prevents a scenario where the value of the CKBytes being stored on the network is very high, but the reward for securing the network is very low."),(0,a.kt)("p",null,"However, a problem can develop on multi-asset platforms if the total value of the assets gains value but the native token providing security does not. This is known as the \u201cheavy asset problem\u201d, and it is common among multi-asset platforms."),(0,a.kt)("p",null,"The heavy asset problem exists when there isn\u2019t a strong enough value correlation between the assets and the native token used to secure the underlying platform. Usage of CKBytes for the payment of Cycle and Transaction fees creates some demand similar to Bitcoin and Ethereum. However, history has demonstrated that this model does not rectify the problem."),(0,a.kt)("p",null,"Nervos addresses this by aligning the CKByte with data storage and mandating State Rent. This directly creates long-term demand because assets require data storage. Every asset requires CKBytes and is subject to State Rent for the entire duration of its existence."),(0,a.kt)("h2",{id:"state-rent"},"State Rent"),(0,a.kt)("p",null,"Miners are responsible for ensuring that the data on the network is valid and preserved. Cycles and transaction fees are paid to ensure proper validation. However, once the fees have been paid, there is no further incentive for the miner to preserve the data. As a solution, State Rent continuously pays miners to participate in preserving the data on the network."),(0,a.kt)("p",null,"When a user puts data on Nervos they must pay a small amount of State Rent for the space their data occupies. An upfront recurring fee is inconvenient for users since it requires constant attention and time. Nervos solves this issue by using targeted inflation on users who are occupying space on the Nervos network."),(0,a.kt)("p",null,"A certain amount of CKBytes must be locked when data is stored on Nervos. These CKBytes are ineligible for interest payments. Even though the number of CKBytes does not change while locked, the value is slowly decreasing because of inflation that only affects users who are storing data on Nervos. This small decrease in value is how State Rent is paid."),(0,a.kt)("p",null,"The inflation that pays the State Rent is created through a process called Secondary Issuance. Nervos users who do not occupy space on the network may gain interest from Secondary Issuance by locking their CKBytes in Nervos DAO. The following sections will cover these topics in more detail."),(0,a.kt)("h2",{id:"base-issuance"},"Base Issuance"),(0,a.kt)("p",null,"During the initial launch of the network, CKBytes had a low value, which indicates the network had a low level of security. To make Nervos a safe and attractive place to store assets, the security must be temporarily subsidized through a process called Base Issuance."),(0,a.kt)("p",null,"Base Issuance is very similar to Bitcoin's mining process. Miners are paid a fixed amount of CKBytes for providing the computer resources to process transactions and secure the network. The assets stored on the network will gain value over time, and fewer subsidies will be required."),(0,a.kt)("p",null,"Base Issuance is paid for with a fixed inflationary schedule. Approximately every four years, the subsidy amount is halved, and it eventually stops, when the cap of 33.6 billion CKBytes is issued. This provides a monetary policy that is transparent and predictable."),(0,a.kt)("h2",{id:"secondary-issuance"},"Secondary Issuance"),(0,a.kt)("p",null,"It has been suggested that after the Base Issuance ends, the incentive to miners will not provide sufficient security if it is only paid with fees from cycles and transactions. Additionally, miners require long-term incentives to ensure that Nervos data persists. Both of these concerns are addressed through a process called Secondary Issuance."),(0,a.kt)("p",null,"Secondary Issuance follows a fixed inflation schedule of 1.344 billion CKBytes per year. This amount does not change. Unlike Base Issuance, Secondary Issuance does not affect everyone on the network. The inflation is small and targeted at users who occupy space on Nervos or hold their CKBytes outside of Nervos DAO."),(0,a.kt)("p",null,"The CKBytes from Secondary Issuance are distributed to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Miners who maintain the network (State Rent)."),(0,a.kt)("li",{parentName:"ul"},"Nervos DAO users."),(0,a.kt)("li",{parentName:"ul"},"The Nervos Treasury for continued development.")),(0,a.kt)("h2",{id:"nervos-dao"},"Nervos DAO"),(0,a.kt)("p",null,"CKBytes holders can lock their tokens in Nervos DAO to gain interest in a similar manner to staking on other platforms. When this is done, the holder will accrue CKByte interest at a rate directly proportional to that of Secondary Issuance. This offsets the long-term inflationary effects of Secondary Issuance exactly, resulting in no loss of value over time."),(0,a.kt)("p",null,"Users who occupy space on Nervos have their CKBytes locked, which makes them ineligible to be placed in Nervos DAO. Once the cells occupying the space are consumed, the CKBytes are released, and they can then be placed in Nervos DAO. This provides an incentive to remove unnecessary data from Nervos, in order to keep the blockchain manageable in the long term."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For more information about Nervos economics, see the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md"},"Crypto-Economics RFC"),".")))}m.isMDXComponent=!0}}]);