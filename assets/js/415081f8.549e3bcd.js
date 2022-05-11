"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,k=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4372:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>d,default:()=>p});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],l={id:"neuron",title:"Neuron Wallet Guide"},i=void 0,c={unversionedId:"basics/guides/neuron",id:"basics/guides/neuron",title:"Neuron Wallet Guide",description:"Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast transactions on your behalf. Now Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation, as you open the Neuron Wallet, the bundled Mainnet node will run.",source:"@site/docs/basics/guides/neuron.mdx",sourceDirName:"basics/guides",slug:"/basics/guides/neuron",permalink:"/develop/docs/basics/guides/neuron",tags:[],version:"current",frontMatter:{id:"neuron",title:"Neuron Wallet Guide"},sidebar:"Basics",previous:{title:"Run a CKB Testnet Node",permalink:"/develop/docs/basics/guides/testnet"},next:{title:"Run a CKB Mainnet Node and Testnet Node with Docker",permalink:"/develop/docs/basics/guides/run-ckb-with-docker"}},d=[{value:"1. Download and install the Neuron Wallet",id:"1-download-and-install-the-neuron-wallet",children:[],level:2},{value:"2. Wait for the synchronization to end",id:"2-wait-for-the-synchronization-to-end",children:[],level:2},{value:"3. Create a new wallet or import existing keystore file or seed phrase to the Neuron Wallet",id:"3-create-a-new-wallet-or-import-existing-keystore-file-or-seed-phrase-to-the-neuron-wallet",children:[],level:2},{value:"4. Claim vesting/locked tokens",id:"4-claim-vestinglocked-tokens",children:[],level:2},{value:"5. Deposit your Nervos CKByte tokens into Nervos DAO",id:"5-deposit-your-nervos-ckbyte-tokens-into-nervos-dao",children:[],level:2},{value:"6. Withdraw your Nervos CKByte tokens from the Nervos DAO",id:"6-withdraw-your-nervos-ckbyte-tokens-from-the-nervos-dao",children:[],level:2},{value:"7. Transfer CKBytes from the Neuron Wallet to other wallets and exchanges",id:"7-transfer-ckbytes-from-the-neuron-wallet-to-other-wallets-and-exchanges",children:[],level:2},{value:"8. Manage the <code>Asset Account</code>",id:"8-manage-the-asset-account",children:[{value:"Manage the SUDT account",id:"manage-the-sudt-account",children:[{value:"Preparation",id:"preparation",children:[],level:4},{value:"Add the SUDT account to the <code>Asset Accounts</code> in Neuron Wallet",id:"add-the-sudt-account-to-the-asset-accounts-in-neuron-wallet",children:[],level:4}],level:3},{value:"Manage the CKB account",id:"manage-the-ckb-account",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Sync failed, please check network. /Sync is slow.",id:"sync-failed-please-check-network-sync-is-slow",children:[],level:3}],level:2},{value:"Important",id:"important",children:[],level:2},{value:"Disclaimer",id:"disclaimer",children:[],level:2}],u={toc:d};function p(e){var t=e.components,l=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast transactions on your behalf. Now Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation, as you open the Neuron Wallet, the bundled Mainnet node will run."),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"/develop/docs/basics/guides/mainnet"},"run a CKB mainnet node")," yourself and launch Neuron wallet, then Neuron will NOT start the bundled node, but connects to your node instead. "),(0,r.kt)("p",null,"Please follow these instructions which are explained in detail below\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and install Neuron Wallet"),(0,r.kt)("li",{parentName:"ul"},"Wait for the synchronization to end"),(0,r.kt)("li",{parentName:"ul"},"Create a new wallet or import your keystore file or seed phrase to the Neuron Wallet"),(0,r.kt)("li",{parentName:"ul"},"Claim vesting/locked token"),(0,r.kt)("li",{parentName:"ul"},"Deposit into Nervos DAO"),(0,r.kt)("li",{parentName:"ul"},"Withdraw from Nervos DAO"),(0,r.kt)("li",{parentName:"ul"},"Transfer CKBytes from the Neuron Wallet to other wallets and exchanges")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Note\uff1a The ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset Account")," feature is experimental and currently only can be used on the Testnet Aggron."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manage the ",(0,r.kt)("inlineCode",{parentName:"li"},"Asset Account"))),(0,r.kt)("p",null,"If you run into issues when following this guide, please join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/n6tx7uC"},"Support")," channel for support."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT: The Nervos Team will NEVER ask for your private key, keystore file, mnemonic seed phase or wallet password. You should NEVER share this information with anyone, doing so may result in loss of all your tokens.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-download-and-install-the-neuron-wallet"},"1. Download and install the Neuron Wallet"),(0,r.kt)("p",null,"Download the latest release version of the Neuron Wallet from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron/releases"},"Neuron Wallet releases page on Github")," and install it. ",(0,r.kt)("strong",{parentName:"p"},"Please make sure that the version is latest version.")," Import your keystore file or seed phrase that was previously generated by Neuron Wallet (full guide below), wait for the synchronization to end, and then you should see that the wallet\u2019s balance has changed."),(0,r.kt)("h2",{id:"2-wait-for-the-synchronization-to-end"},"2. Wait for the synchronization to end"),(0,r.kt)("p",null,"You can cross-check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Block Number")," with CKB-Explorer's ",(0,r.kt)("inlineCode",{parentName:"p"},"Latest Block")," to make sure the synchronization to end."),(0,r.kt)("img",{src:n(9451).Z,width:"600"}),(0,r.kt)("h2",{id:"3-create-a-new-wallet-or-import-existing-keystore-file-or-seed-phrase-to-the-neuron-wallet"},"3. Create a new wallet or import existing keystore file or seed phrase to the Neuron Wallet"),(0,r.kt)("p",null,"If you are using a new wallet, you can simply follow the steps within the Neuron Wallet."),(0,r.kt)("p",null,"If you have already backup the wallet and have the keystore file (use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup Current Wallet")," ) or write down the seed , you need import the existing keystore file or seed, please follow the steps below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup Current Wallet: ")),(0,r.kt)("img",{src:n(761).Z,width:"600"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To import the mnemonic seed phrase, choose \u201cImport Wallet Seed\u201d, fill in your password and wait for synchronization to end. ",(0,r.kt)("strong",{parentName:"li"},"The password does not need to match the original password from the Neuron Wallet."))),(0,r.kt)("img",{src:n(7451).Z,width:"600"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To import the keystore file, choose \u201cImport from Keystore\u201d and input your password - Wait for synchronization to end. ",(0,r.kt)("strong",{parentName:"li"},"The password must match the original password from the Neuron Wallet."))),(0,r.kt)("img",{src:n(8559).Z,width:"600"}),(0,r.kt)("img",{src:n(4581).Z,width:"600"}),(0,r.kt)("p",null,"Congratulations, once the Neuron wallet is synced, you will have full access to your tokens! You can send  and receive CKBytes and deposit into the Nervos DAO."),(0,r.kt)("h2",{id:"4-claim-vestinglocked-tokens"},"4. Claim vesting/locked tokens"),(0,r.kt)("p",null,'You may claim your vesting or locked tokens by the latest version\uff08v0.30.0-rc1 or later\uff09. Please patiently wait until Neuron is fully synced, the assets will automatically appear on the "Customized Assets" page. You have to manually claim it before you can transfer it or deposit it to Nervos DAO.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'View the details on "Customized Assets"')),(0,r.kt)("img",{src:n(3301).Z,width:"600"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Claim the vesting/locked tokens")),(0,r.kt)("p",null,"When the lock time has been reached\uff0cclick ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim")," and input the wallet's password."),(0,r.kt)("img",{src:n(1213).Z,width:"600"}),(0,r.kt)("img",{src:n(866).Z,width:"600"}),(0,r.kt)("h2",{id:"5-deposit-your-nervos-ckbyte-tokens-into-nervos-dao"},"5. Deposit your Nervos CKByte tokens into Nervos DAO"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md"},"economic model")," of Nervos CKB is designed to allow token holders to lock tokens in the Nervos DAO to mitigate the inflationary effect of the secondary issuance. In this case, the inflationary effect of secondary issuance is expected to be nominal, equivalent to holding tokens with a hard cap. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c"},"Nervos DAO Explained")," for more details). "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please make sure your balance is greater than 102 CKB.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Neuron Wallet (the latest version), select \u201cNervos DAO\u201d and \u201cDeposit\u201d.")),(0,r.kt)("img",{src:n(8060).Z,width:"600"}),(0,r.kt)("img",{src:n(3328).Z,width:"600"}),(0,r.kt)("h2",{id:"6-withdraw-your-nervos-ckbyte-tokens-from-the-nervos-dao"},"6. Withdraw your Nervos CKByte tokens from the Nervos DAO"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/references/neuron-wallet-guide#disclaimer"},"disclaimer")," below before transacting on mainnet")),(0,r.kt)("p",null,"You can click ",(0,r.kt)("inlineCode",{parentName:"p"},"Request withdraw")," to withdraw your CKB."),(0,r.kt)("img",{src:n(6410).Z,width:"600"}),(0,r.kt)("img",{src:n(3002).Z,width:"600"}),(0,r.kt)("h2",{id:"7-transfer-ckbytes-from-the-neuron-wallet-to-other-wallets-and-exchanges"},"7. Transfer CKBytes from the Neuron Wallet to other wallets and exchanges"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/references/neuron-wallet-guide#disclaimer"},"disclaimer")," below before transacting on mainnet")),(0,r.kt)("p",null,"You should have the third party wallet/exchange destination address. ",(0,r.kt)("strong",{parentName:"p"},"Please make sure your balance is greater than 62 CKB.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Under the \u201cSend\u201d tab, fill in the address details in the "Send to" field. Turn on the "Advanced fee settings" and fill in the "Transaction fee" \u2014 click  the "Send" button to complete your transfer.')),(0,r.kt)("img",{src:n(2105).Z,width:"600"}),(0,r.kt)("h2",{id:"8-manage-the-asset-account"},"8. Manage the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Asset Account")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Asset Account")," is used for managing the accounts which include anyone-can-pay( ",(0,r.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/rfc-anyone-can-pay-lock/4438"},"RFC: anyone-can-pay lock"),") cells and SUDTs ( ",(0,r.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333"},"RFC: Simple UDT Draft Spec"),"). It's recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb-udt-cli"),"to issue or transfer UDTs, you may refer the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ququzone/ckb-udt-cli"},"github repository")," for more details. Please note that the feature is experimental and only can be used on the Testnet Aggron now.  "),(0,r.kt)("h3",{id:"manage-the-sudt-account"},"Manage the SUDT account"),(0,r.kt)("h4",{id:"preparation"},"Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run a CKB Testnet Node\nYou may refer to ",(0,r.kt)("a",{parentName:"p",href:"/develop/docs/basics/guides/testnet"},"Run a CKB Testnet Node"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb-cli")," to create a new account with ",(0,r.kt)("inlineCode",{parentName:"p"},"lock_arg")," and export the privkey by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"lock_arg"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ckb-cli account new\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqwuea9tpxr2equ75rskyn30r3wjans7fnq477mmm\n  testnet: ckt1qyqwuea9tpxr2equ75rskyn30r3wjans7fnqgmqyh8\nlock_arg: 0xee67a5584c35641cf5070b127178e2e97670f266\nlock_hash: 0x8b2595bb1c4720951a5363fbf0adb0ab1e2ff5acd7391f123837242712fc8490\n\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ckb-cli account export --extended-privkey-path wallet --lock-arg `Your lock_arg`\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./ckb-cli account export --extended-privkey-path wallet --lock-arg 0xee67a5584c35641cf5070b127178e2e97670f266\nPassword: \nSuccess exported account as extended privkey to: "wallet", please use this file carefully\n\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat wallet \n")),(0,r.kt)("p",null,"The first line of the result is exported private key."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"0a348a7cd1449ece26f1cede3916266793ce18beb280b75dda690057ebfcda3c  // It is the privkey\nc152037977043a11e7e6ef220ba050da12da16455a0ef303907865a15fa9c484% \n\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"ckb-udt-cli")," to issue UDTs")),(0,r.kt)("p",null,"Please clone and build it firstly,then use ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Nervos Aggron Faucet")," to claim testnet CKB for issuing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/ququzone/ckb-udt-cli.git\n\ncd ckb-udt-cli\n\nexport GOPROXY=https://goproxy.io\ngo mod download\ngo build .\n")),(0,r.kt)("p",null,"Issue the UDTs\uff0cplease backup the ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ckb-udt-cli issue -c config.yaml -k YOUR_PRIVATE_KEY -a AMOUNT // AMOUNT means the number of issued tokens\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ckb-udt-cli issue -c config.yaml -k 0a348a7cd1449ece26f1cede3916266793ce18beb280b75dda690057ebfcda3c -a 1000000\nIssued sUDT transaction hash: 0x6b4458143b25e8aa37d36c1035f15e63e5051144685a4da20cf92fd7af59e56e, uuid: 0x8b2595bb1c4720951a5363fbf0adb0ab1e2ff5acd7391f123837242712fc8490\n\n"))),(0,r.kt)("h4",{id:"add-the-sudt-account-to-the-asset-accounts-in-neuron-wallet"},"Add the SUDT account to the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Asset Accounts")," in Neuron Wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Asset Account")," in Neuron Wallet, create a SUDT account.")),(0,r.kt)("img",{src:n(7906).Z,width:"600"}),(0,r.kt)("p",null,"You may fill ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Token id"),"."),(0,r.kt)("img",{src:n(8195).Z,width:"600"}),(0,r.kt)("p",null,"Please wait untill the transaction is successful. "),(0,r.kt)("h3",{id:"manage-the-ckb-account"},"Manage the CKB account"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CKB account")," can be used for anyone-can-pay cells and accepted by any amount of payment. It is accepted by any amount of payment between ",(0,r.kt)("inlineCode",{parentName:"p"},"CKB account"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create two ",(0,r.kt)("inlineCode",{parentName:"p"},"CKB account"),' "Anyone-can-pay1" and "Anyone-can-pay2"'),(0,r.kt)("p",{parentName:"li"},' The following screenshots are examples for creating "Anyone-can-pay1"'))),(0,r.kt)("img",{src:n(5873).Z,width:"600"}),(0,r.kt)("img",{src:n(3398).Z,width:"600"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Claim Testnet CKB for "Anyone-can-pay1" by ',(0,r.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Aggron Testnet"),'  Get the address of "Anyone-can-pay1" and fill in ',(0,r.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Aggron Testnet"),".")),(0,r.kt)("img",{src:n(6433).Z,width:"600"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Transfer 1 CKB from "Anyone-can-pay1" to "Anyone-can-pay2"')),(0,r.kt)("img",{src:n(341).Z,width:"600"}),(0,r.kt)("p",null,'   Fill the address of "Anyone-can-pay2" in ',(0,r.kt)("inlineCode",{parentName:"p"},"Address")),(0,r.kt)("img",{src:n(5557).Z,width:"600"}),"The transfer is successful!",(0,r.kt)("img",{src:n(2818).Z,width:"600"}),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"sync-failed-please-check-network-sync-is-slow"},"Sync failed, please check network. /Sync is slow."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Quit and restart app several times.")),(0,r.kt)("p",null,"Note: The Neuron bundled CKB node requires ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads"},"VC++ redistributable")," on Windows to work properly. "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If step1 can't resolve, please ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/run-node"},"run a CKB mainnet node")," and make sure the version is v0.32.0 or later instead of running the Neuron bundled node. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"if it still doesn't work out, please join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/n6tx7uC"},"Support")," channel, export debug information and send it."))),(0,r.kt)("img",{src:n(5347).Z,width:"600"}),(0,r.kt)("h2",{id:"important"},"Important"),(0,r.kt)("p",null,"The bootstrapping of a proof-of-work (PoW) chain is difficult. A new PoW chain is in many ways like a newborn baby \u2014 weak in the beginning, but with unlimited potential when mature."),(0,r.kt)("p",null,"For a new PoW chain, risks may come from:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Unstable Hashrate\uff1a"),"as the mining rewards will change drastically upon mainnet launch, an increase of hashrate is anticipated. It will create forks and uncle blocks in the first few weeks and the block time may be longer than expected due to NC-MAX's self adjustment. ",(0,r.kt)("strong",{parentName:"li"},"For security, using a sufficiently large confirmation number is recommended before transferring CKBytes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Immature Toolchain\uff1a"),"Early adopters of CKB technology should have a good understanding of NC-MAX, Cell model and CKB-VM to begin, otherwise mistakes or bugs may be created unintentionally. ",(0,r.kt)("strong",{parentName:"li"},"The SDKs provided by Nervos Foundation are convenient tools to simplify RPC invocation and transaction building/signing/sending but have not been tested in a production environment yet, Please use them cautiously."))),(0,r.kt)("p",null,"We recommend CKB users exercise strong diligence in making any transactions during the first 2 to 4 weeks of mainnet as the chance of a re-org (reorganization of the current valid chain) is possible and may reverse transactions that had previous been sent. ",(0,r.kt)("strong",{parentName:"p"},"If you need to send transaction in the early weeks, choose a sufficiently large confirmation number before transferring CKBytes.")),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"AS A DECENTRALIZED BLOCKCHAIN, NERVOS FOUNDATION DOES NOT CONTROL NERVOS CKB OR CKBYTES AND DOES NOT HAVE THE ABILITY TO STOP, BLOCK OR REVERSE ANY TRANSACTIONS. NERVOS FOUNDATION DOES NOT MAKE ANY WARRANTIES WHATSOEVER WITH RESPECT TO THE NERVOS CKB OR CKBYTES, INCLUDING ANY (i) WARRANTY OF MERCHANTABILITY; (ii) WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE; (iii) WARRANTY OF TITLE; OR (iv) WARRANTY AGAINST INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS OF A THIRD PARTY; WHETHER ARISING BY LAW, COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE OF TRADE, OR OTHERWISE. YOU ACKNOWLEDGE THAT YOU HAVE NOT RELIED UPON ANY REPRESENTATION OR WARRANTY MADE BY THE FOUNDATION OR ANY OTHER PERSON ON ITS BEHALF. YOU ASSUME ALL RISKS AND LIABILITIES FOR THE RESULTS OBTAINED BY THE USE OF ANY CKBYTES AND REGARDLESS OF ANY ORAL OR WRITTEN STATEMENTS MADE BY THE FOUNDATION, BY WAY OF TECHNICAL ADVICE OR OTHERWISE."))}p.isMDXComponent=!0},761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/backupwallet-fd7d681858fdfff3b3d185808203933c.png"},3398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ckbtokeninfo-0b456434c1381ebc3f9bfc34fdbabe83.png"},1213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/claim-33a53f35a8fda874d811c67e7c81316f.png"},5873:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/createckb1-3994587d3fe6c3d6002c8a2c64c8a71c.png"},7906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/createsudt-fcdaf8a5e27bcbb3906871baaf1db762.png"},8060:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deposit-7042e09acb31b60259440a7fef462fb8.png"},3328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deposit2-3b12478d6b20d44ca2b5c4d42182a145.png"},5347:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/export-454eef2067cbd40a0441486d59ee5e9b.png"},8559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/importkeystore-c36b2ce12954974bd9e1274ed00ca129.png"},7451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/importseed1-f4e5f227f3742df9c142351ff63cd830.png"},4581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keystorefile-b41b5651ca7338902a40df6085b22d3c.png"},866:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/password-d91ad252f8e2a086cdef40b3ae9f3298.png"},6433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/receiveckb-8a66d06d5a5acf9649bb7202af20cde2.png"},2105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/send-347dd8d03c67ecf4fd01aaae4f3ca8f6.png"},341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sendckb-e9d9e0ebeb1e59f7d6ad9222f16ba787.png"},5557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sendckb2-f048b49bc72ea2821aeb5910ec436e23.png"},2818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/successckb-bf47e2ab00286f04aba80c7c064801a5.png"},9451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synchronize-9f81143274b1f53684b72e59aa4fc014.png"},8195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokeninfo-7d9fa6edfcb90c0f9504bdb47f237e12.png"},3301:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/viewlockedtoken-2babb0eeff33df1672653915db989c40.png"},6410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withdraw1-47bc7a67eaa9284cc945a611d744113b.png"},3002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withdraw2-df621f39890d2165523b635ee3f9b644.png"}}]);