"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6463:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"script",title:"Script"},c=void 0,s={unversionedId:"reference/script",id:"reference/script",title:"Script",description:"If you are used to blockchains like Ethereum, you will recognize that CKB leverages a drastically different verification model: instead of creating a transaction that alters blockchain state when executing, a transaction in CKB contains state transitions directly in the form of cells. To alter the state of an existing cell, one just destroys the original cell, then create a new one in a single, atomic transaction. CKB scripts, running on CKB VM, actually perform series of validation rules on the input cells and output cells of the transaction.",source:"@site/docs/reference/script.md",sourceDirName:"reference",slug:"/reference/script",permalink:"/develop/docs/reference/script",tags:[],version:"current",frontMatter:{id:"script",title:"Script"},sidebar:"Reference",previous:{title:"Cell",permalink:"/develop/docs/reference/cell"},next:{title:"Transaction",permalink:"/develop/docs/reference/transaction"}},p=[{value:"Data Structure",id:"data-structure",children:[],level:2},{value:"Execution",id:"execution",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[{value:"Lock Script",id:"lock-script",children:[],level:3},{value:"Type Script",id:"type-script",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are used to blockchains like Ethereum, you will recognize that CKB leverages a drastically different verification model: instead of creating a transaction that alters blockchain state when executing, a transaction in CKB contains state transitions directly in the form of cells. To alter the state of an existing cell, one just destroys the original cell, then create a new one in a single, atomic transaction. CKB scripts, running on CKB VM, actually perform series of validation rules on the input cells and output cells of the transaction."),(0,i.kt)("p",null,"In this section we will look closer at the data structure of scripts, and explain how lock scripts and type script work together to ensure the validation rules of CKB."),(0,i.kt)("p",null,"Notes: we will distinguish between ",(0,i.kt)("strong",{parentName:"p"},"script code")," and ",(0,i.kt)("strong",{parentName:"p"},"script"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"script code")," refers to the compiled program you write and deploy to CKB. It is the actual binary CKB VM will run to perform validation rules."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"script")," refers to the script data structure use by ",(0,i.kt)("inlineCode",{parentName:"li"},"lock script")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"type script")," in ",(0,i.kt)("a",{parentName:"li",href:"/develop/docs/reference/cell"},"Cell")," data structure.")),(0,i.kt)("h2",{id:"data-structure"},"Data Structure"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"lock script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type script")," use the same data structure\uff1a",(0,i.kt)("strong",{parentName:"p"},"Script")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "hash_type": "type",\n  "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n  "args": "0xc285e812f6a35c2479d6f5b9bbaa357dd4e60da1"\n}\n\n{\n  "hash_type": "data",\n  "code_hash": "0xe7f93d7120de3ca8548b34d2ab9c40fe662eec35023f07e143797789895b4869",\n  "args": "0x42b5561f13c2a8f7c710843bea7d179656dc6133a98b7d763cebc6e74c8ba72a"\n}\n')),(0,i.kt)("p",null,"A script has three fields\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"code_hash"),": A hash denoting which script in the transaction to execute. For space consideration, the actual script code is kept in the cell data part of a ",(0,i.kt)("a",{parentName:"p",href:"cell#live-cell"},"live cell")," on CKB. The current transaction should reference the live cell using a ",(0,i.kt)("a",{parentName:"p",href:"transaction"},"cell dep")," so as to locate and execute the script.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hash_type"),": The interpretation of ",(0,i.kt)("inlineCode",{parentName:"p"},"code_hash")," when looking for script code to run from cell deps."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_type")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"code_hash")," should match the blake2b hash of data(which is also the actual script code) in a dep cell;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"if ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_type")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"code_hash")," should instead match the blake2b hash of type script contained by a a dep cell. Note CKB will throw a validation error when a) we are locating a script code using ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_type"),"; and b) more than one cell referenced by cell deps contains the specified hash of type script."),(0,i.kt)("p",{parentName:"li"},"The combination of a ",(0,i.kt)("inlineCode",{parentName:"p"},"code_hash")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_type"),", will uniquely identify a script code in CKB.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"args"),": Auxiliary arguments for a script. This is why we need to distinguish between ",(0,i.kt)("inlineCode",{parentName:"p"},"script code")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," above: through ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," actually represents an ",(0,i.kt)("strong",{parentName:"p"},"instance")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"script code"),". Typical examples include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"While a single ",(0,i.kt)("inlineCode",{parentName:"li"},"script code")," will be used for secp256k1 implementation, different people might include different public keys into ",(0,i.kt)("inlineCode",{parentName:"li"},"args")," to create different ",(0,i.kt)("inlineCode",{parentName:"li"},"script"),"s, which lead to different wallets."),(0,i.kt)("li",{parentName:"ul"},"While a single ",(0,i.kt)("inlineCode",{parentName:"li"},"script code")," might provide implementation for the ",(0,i.kt)("a",{parentName:"li",href:"https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333"},"UDT")," specification, different people might inject different ",(0,i.kt)("inlineCode",{parentName:"li"},"args")," for different types of tokens.")))),(0,i.kt)("p",null,"We will talk about how to execute a script to validate transaction structure in sections below."),(0,i.kt)("p",null,"Depending on the different types, scripts will be executed at different times:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All lock scripts from all input cells in a transaction will be executed."),(0,i.kt)("li",{parentName:"ol"},"All type scripts(if exist) from all input cells and output cells in a transaction will be executed.")),(0,i.kt)("p",null,"We will consider the transaction valid only when all the required scripts complete with a success status. Failure in any script will mark the transaction as invalid."),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("p",null,"Here we are providing a basic introduction for script execution flow, for the more precise definition, please refer to the following RFCs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0003-ckb-vm/0003-ckb-vm.md"},"CKB VM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md"},"VM Syscalls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md"},"VM Cycle Limits"))),(0,i.kt)("p",null,"Each script that needs to be executed from a CKB transaction, will be run in a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-vm"},"CKB VM")," instance. At its core, CKB VM is just an implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://riscv.org/"},"RISC-V")," Instruction Set Architecture(ISA). It means any RISC-V standard compliant program(RV64IMC to be more precise, see the RFCs for more details) will be accepted by CKB VM. The common ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},"ELF")," format is used to package a binary."),(0,i.kt)("p",null,"To use a RISC-V program as a script on CKB, one simply needs to create a new ",(0,i.kt)("a",{parentName:"p",href:"cell"},"cell")," with the full program binary in the cell's data part. One the transaction generating the new cell is committed on CKB, scripts can then be assembled to use the program as script code. As mentioned above, a cell dep entry must be also create to reference the newly created cell containing script code."),(0,i.kt)("p",null,"There are cases that RISC-V ISA is not be enough, for example, a script might want to read information from the enclosing transaction to enforce validation rules, CKB provides a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"syscalls")," that will handle this task. Notice ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," is a concept also designed and included by the RISC-V standard ISA, we are confronting to RISC-V standard specification as much as we can."),(0,i.kt)("p",null,"To prevent infinite loops, ",(0,i.kt)("inlineCode",{parentName:"p"},"cycles")," are introduced to CKB VM. Each executed RISC-V instruction and each syscall made will consume certain amount of cycles. At consensus layer, CKB has a hard limit on the maximum cycles that is allowed in a single block. The total cycles consumed by all executed scripts, from all transactions included in a blocks, must not exceed this number. Otherwise the block will be rejected."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Lock script and type script share the identical running environment, they can all access all the information contained in its enclosing transaction. But due to the fact they are executed in different times, they have formed into different use cases."),(0,i.kt)("h3",{id:"lock-script"},"Lock Script"),(0,i.kt)("p",null,"Lock scripts are more for representing ownerships. Typical use cases for lock scripts include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signature verification"),(0,i.kt)("li",{parentName:"ul"},"Lock period ensurance")),(0,i.kt)("p",null,"You might notice that type script can actually replace all functionalities of a lock script, meaning a cell can use a dummy lock script that does nothing, and rely on type script for all behaviors. But that is an anti-pattern of CKB now. By making lock script mandatory, we want to ensure each cell at least uses a secure lock script."),(0,i.kt)("p",null,"Lock script can be viewed as the last defense to ensure that your tokens stay safe. So we do recommend to keep your lock as simple as possible, to avoid the potential of vulnerabilities."),(0,i.kt)("h3",{id:"type-script"},"Type Script"),(0,i.kt)("p",null,"Type script, on the other hand, is where innovations would more likely to happen on CKB. Some use cases of type scripts include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Defined Token(UDT) implementation"),(0,i.kt)("li",{parentName:"ul"},"Ensuring cell data confronts to a certain format")))}u.isMDXComponent=!0}}]);