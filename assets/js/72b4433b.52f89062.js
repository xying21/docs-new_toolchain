"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(7462),a=n(7294),o=n(2389),i=n(9443);const r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(3616),p=n(6010);const u="tabItem_vU9c";function c(e){var t,n,l,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=r(),g=v.tabGroupChoices,w=v.setTabGroupChoices,T=(0,a.useState)(y),_=T[0],C=T[1],D=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=g[h];null!=x&&x!==_&&f.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=D.indexOf(t),l=f[n].value;l!==_&&(N(t),C(l),null!=h&&w(h,l))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=D.indexOf(e.currentTarget)+1;n=D[l]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":_===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:B,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,o.Z)();return a.createElement(c,(0,l.Z)({key:String(t)},e))}},4431:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>h,toc:()=>m,default:()=>f});var l=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),r=n(9960),s=n(6396),p=n(8215),u=["components"],c={id:"installnode",title:"Set Up and Manage CKB Nodes"},d=void 0,h={unversionedId:"develop/tools/tippy/installnode",id:"develop/tools/tippy/installnode",title:"Set Up and Manage CKB Nodes",description:"The CKB nodes used in the DApp development are full nodes that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees.",source:"@site/docs/develop/tools/tippy/installnode.md",sourceDirName:"develop/tools/tippy",slug:"/develop/tools/tippy/installnode",permalink:"/docs-new_toolchain/docs/develop/tools/tippy/installnode",tags:[],version:"current",frontMatter:{id:"installnode",title:"Set Up and Manage CKB Nodes"},sidebar:"Develop",previous:{title:"Introduction",permalink:"/docs-new_toolchain/docs/develop/tools/tippy/intro"},next:{title:"CKB Studio",permalink:"/docs-new_toolchain/docs/develop/tools/ckb-studio"}},m=[{value:"Install a CKB Node by Using Tippy",id:"install-a-ckb-node-by-using-tippy",children:[],level:2}],k={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The CKB nodes used in the DApp development are ",(0,o.kt)("strong",{parentName:"p"},"full nodes")," that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees."),(0,o.kt)("h2",{id:"install-a-ckb-node-by-using-tippy"},"Install a CKB Node by Using Tippy"),(0,o.kt)("p",null,"Tippy supports to install and manage CKB nodes on all major platforms including Linux, macOS, and Windows."),(0,o.kt)(s.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,"Download the ",(0,o.kt)("b",null,"tippy-linux-x64.tar.gz")," file and unzip it. By default, the files are unzipped into the tippy-linux-x64 folder. All versions of Tippy can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Make Tippy executable and run Tippy.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1-3}","{1-3}":!0},"$ chmod +x ./tippy-linux-x64/Tippy\n$ cd tippy-linux-x64\n$ ./Tippy\n")),(0,o.kt)("p",null,"If a desktop GUI is installed, double click the Tippy file under the tippy-linux-x64 folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB chain.")),(0,o.kt)("p",null,(0,o.kt)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",(0,o.kt)(r.Z,{to:(0,i.Z)("/docs/basics/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"To create a CKB node on the ",(0,o.kt)("b",null,"other")," networks, click ",(0,o.kt)("b",null,"Create a customized chain")," to choose the network in the ",(0,o.kt)("b",null,"Chain Type")," dropdown list of the ",(0,o.kt)("b",null,"Create Chain")," form."),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Tippy ",(0,o.kt)("b",null,"Dashboard"),". Details of blocks and transactions of the chain can be checked on the ",(0,o.kt)("b",null,"Blocks")," and ",(0,o.kt)("b",null,"Transactions")," pages that are visible when the node is started."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",(0,o.kt)("code",null,"genesis_epoch_length")," and the ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",(0,o.kt)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),(0,o.kt)("p",null,"The default value for the ",(0,o.kt)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),(0,o.kt)("p",null,"When ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," is set to ",(0,o.kt)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",(0,o.kt)("code",null,"genesis_epoch_length"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The chain specific configuration files like dev.toml and data files are located in Home/.config/Tippy/chain-",(0,o.kt)("var",null,"number"),"."))),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"$HOME/.config/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"$HOME/.config/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/specs/dev.toml"',title:'"$HOME/.config/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/ckb-miner.toml" {4}',title:'"$HOME/.config/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),(0,o.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"Download the ",(0,o.kt)("b",null,"Tippy.dmg")," file. All versions of Tippy can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("li",null,"Open the Tippy.dmg file and drag ",(0,o.kt)("b",null,"Tippy.app")," to the Applications folder."))),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Run Tippy.")),(0,o.kt)("p",null,"Click Tippy.app in the Applications folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB chain.")),(0,o.kt)("p",null,(0,o.kt)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",(0,o.kt)(r.Z,{to:(0,i.Z)("/docs/basics/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"To create a CKB node on the ",(0,o.kt)("b",null,"other")," networks, click ",(0,o.kt)("b",null,"Create a customized chain")," to choose the network in the ",(0,o.kt)("b",null,"Chain Type")," dropdown list of the ",(0,o.kt)("b",null,"Create Chain")," form."),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",(0,o.kt)("code",null,"genesis_epoch_length")," and the ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",(0,o.kt)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),(0,o.kt)("p",null,"The default value for the ",(0,o.kt)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),(0,o.kt)("p",null,"When ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," is set to ",(0,o.kt)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",(0,o.kt)("code",null,"genesis_epoch_length"),"."),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"~/Libary/Application Support/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"~/Libary/Application Support/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/specs/dev.toml"',title:'"~/Libary/Application','Support/Tippy/chain-number/specs/dev.toml"':!0},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/ckb-miner.toml" {4}',title:'"~/Libary/Application','Support/Tippy/chain-number/ckb-miner.toml"':!0,"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),(0,o.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,"Download the ",(0,o.kt)("b",null,"tippy-win-x64.zip")," file and unzip the file. By default, the files are unzipped into the tippy-win-x64 folder. All versions can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Run Tippy.")),(0,o.kt)("p",null,"Double click the Tippy.exe file under the tippy-win-x64 folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB chain.")),(0,o.kt)("p",null,(0,o.kt)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",(0,o.kt)(r.Z,{to:(0,i.Z)("/docs/basics/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"To create a CKB node on the ",(0,o.kt)("b",null,"other")," networks, click ",(0,o.kt)("b",null,"Create a customized chain")," to choose the network in the ",(0,o.kt)("b",null,"Chain Type")," dropdown list of the ",(0,o.kt)("b",null,"Create Chain")," form."),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",(0,o.kt)("code",null,"genesis_epoch_length")," and the ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",(0,o.kt)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),(0,o.kt)("p",null,"The default value for the ",(0,o.kt)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),(0,o.kt)("p",null,"When ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," is set to ",(0,o.kt)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",(0,o.kt)("code",null,"genesis_epoch_length"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The chain specific configuration files and data files are located in C:/Users/",(0,o.kt)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",(0,o.kt)("var",null,"number"),". "))),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"C:/Users/",(0,o.kt)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"C:/Users/",(0,o.kt)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml" {4}',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard."))))))}f.isMDXComponent=!0}}]);