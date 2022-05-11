"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?l.createElement(h,i(i({ref:t},p),{},{components:n})):l.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7462),a=n(7294),o=n(2389),i=n(9443);const r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(3616),u=n(6010);const p="tabItem_vU9c";function d(e){var t,n,l,o=e.lazy,i=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=r(),g=v.tabGroupChoices,w=v.setTabGroupChoices,T=(0,a.useState)(y),D=T[0],C=T[1],x=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==D&&f.some((function(e){return e.value===E}))&&C(E)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),l=f[n].value;l!==D&&(N(t),C(l),null!=m&&w(m,l))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=x.indexOf(e.currentTarget)+1;n=x[l]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":D===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function c(e){var t=(0,o.Z)();return a.createElement(d,(0,l.Z)({key:String(t)},e))}},3814:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>m,toc:()=>h,default:()=>f});var l=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),r=n(9960),s=n(6396),u=n(8215),p=["components"],d={id:"setupsystem",title:"Set Up the Development Environment"},c=void 0,m={unversionedId:"develop/tools/lumos/preparation/setupsystem",id:"develop/tools/lumos/preparation/setupsystem",title:"Set Up the Development Environment",description:"This guide will help you set up your system for building DApps with Lumos. If you already have everything installed, feel free to read the other guides, and walk through the examples to learn the usage of Lumos.",source:"@site/docs/develop/tools/lumos/preparation/setupsystem.md",sourceDirName:"develop/tools/lumos/preparation",slug:"/develop/tools/lumos/preparation/setupsystem",permalink:"/docs-new_toolchain/docs/develop/tools/lumos/preparation/setupsystem",tags:[],version:"current",frontMatter:{id:"setupsystem",title:"Set Up the Development Environment"}},h=[{value:"System Requirements",id:"system-requirements",children:[],level:2},{value:"Install Node.js",id:"install-nodejs",children:[],level:2},{value:"Install Yarn",id:"install-yarn",children:[],level:2},{value:"Install Dependencies for node-gyp",id:"install-dependencies-for-node-gyp",children:[],level:2},{value:"Install a CKB Node on DEV Chain by Using Tippy",id:"install-a-ckb-node-on-dev-chain-by-using-tippy",children:[],level:2}],k={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will help you set up your system for building DApps with Lumos. If you already have everything installed, feel free to read the other guides, and walk through the examples to learn the usage of Lumos."),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operating System:  CKB DApps can be developed upon Lumos on all major platforms, including Linux, Windows, and macOS."),(0,o.kt)("li",{parentName:"ul"},"JavaScript runtime environment: ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," LTS Version (>=12)"),(0,o.kt)("li",{parentName:"ul"},"Development tools to build native addons: GCC and make"),(0,o.kt)("li",{parentName:"ul"},"JavaScript package manager: Yarn or npm")),(0,o.kt)("h2",{id:"install-nodejs"},"Install Node.js"),(0,o.kt)("p",null,"Node.js is the runtime environment that must be installed on the system before using Lumos. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Node.js on Ubuntu Linux 20.04, macOS, and Windows 10."),(0,o.kt)(s.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS and Windows 10",value:"macoswin"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Install Node.js with Apt by Using a NodeSource PPA:"),(0,o.kt)("p",null,"The following commands installs Node.js 14.x."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh\n$ sudo apt install nodejs\n"))),(0,o.kt)(u.Z,{value:"macoswin",mdxType:"TabItem"},"Download and install ",(0,o.kt)("a",{href:"https://nodejs.org/en/"},"the LTS version")," that is Recommended For Most Users.")),(0,o.kt)("h2",{id:"install-yarn"},"Install Yarn"),(0,o.kt)("p",null,"It is recommended to install Yarn through the NPM package manager, which comes bundled with ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," when it is installed on the system."),(0,o.kt)("p",null,"To install Yarn through NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global yarn\n")),(0,o.kt)("h2",{id:"install-dependencies-for-node-gyp"},"Install Dependencies for node-gyp"),(0,o.kt)("p",null,"Lumos relies on ",(0,o.kt)("strong",{parentName:"p"},"node-gyp"),", a cross-platform command-line tool for compiling native addon modules for ",(0,o.kt)("em",{parentName:"p"},"Node"),".js. "),(0,o.kt)("p",null,"node-gyp has a few additional system requirements and dependencies that have different installation steps on different operating systems."),(0,o.kt)(s.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ubuntu",mdxType:"TabItem"},"The development dependencies for Ubuntu 20.04 LTS are as follows:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Python v3.6, v3.7, v3.8, or v3.9 (Ubuntu 20.04 and other versions of Debian Linux ship with Python 3 pre-installed)"),(0,o.kt)("li",null,"make"),(0,o.kt)("li",null,"A proper C/C++ compiler toolchain, like ",(0,o.kt)("a",{href:"https://gcc.gnu.org/"},"GCC"))),(0,o.kt)("p",null,"To install ",(0,o.kt)("code",null,"GCC")," and ",(0,o.kt)("code",null,"make")," on Ubuntu 20.04, run the following command as root or user with sudo privileges:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo apt update\n$ sudo apt install build-essential\n"))),(0,o.kt)(u.Z,{value:"macos",mdxType:"TabItem"},"The development dependencies for macOS are as follows:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Python v3.6, v3.7, v3.8, or v3.9"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://developer.apple.com/xcode/download/"},"Xcode")," and Xcode command line tools"))),(0,o.kt)(u.Z,{value:"windows",mdxType:"TabItem"},"The development dependencies for Windows are as follows:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"The current version of Python."),(0,o.kt)("li",null,"Visual C++ Build Environment")),(0,o.kt)("b",null,"Installation Options"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools by running ",(0,o.kt)("code",null,"npm install -g windows-build-tools -vs2019")," from an elevated PowerShell (run as Administrator).",(0,o.kt)("p",null,(0,o.kt)("b",null,"Note"),": This command installs all the system dependencies without conflicting with any software already installed on the system. Depending on the build tools' version, the installation requires 3 to 8 gigabytes space to get all dependencies installed. It can take at least 30 minutes depending on the network connection.")),(0,o.kt)("li",null,"Option 2: Install dependencies and configure the tools manually.",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install Visual C++ Build Environment: Tools for Visual Studio 2019 -> ",(0,o.kt)("a",{href:"https://visualstudio.microsoft.com/downloads/"},(0,o.kt)("i",{class:"feather icon-download"}),"Visual Studio 2019 Build Tools"),' (using "Visual C++ build tools" workload) and run ',(0,o.kt)("code",null,"npm config set msvs_version 2019")," in a cmd terminal."),(0,o.kt)("li",null,"Install the current version of Python from the ",(0,o.kt)("a",{href:"https://docs.python.org/3/using/windows.html#the-microsoft-store-package"},"Microsoft Store package"),", and run ",(0,o.kt)("code",null,"npm config set python /path/to/python"),".")))))),"For more information, see the instructions of ",(0,o.kt)("a",{href:"https://github.com/nodejs/node-gyp"},"node-gyp"),".",(0,o.kt)("h2",{id:"install-a-ckb-node-on-dev-chain-by-using-tippy"},"Install a CKB Node on DEV Chain by Using Tippy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tippy")," is a tool to help set up and manage CKB nodes. It can install and start running a CKB node by one simple click. ",(0,o.kt)("strong",{parentName:"p"},"DEV chain")," is the recommended network for the later examples and CKB starters. "),(0,o.kt)("p",null,"For more information about the concepts of CKB nodes and CKB networks, see ",(0,o.kt)(r.Z,{to:(0,i.Z)("/docs/basics/ckbnode"),mdxType:"Link"},"CKB Nodes and Networks"),"."),(0,o.kt)(s.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,"Download the ",(0,o.kt)("b",null,"tippy-linux-x64.tar.gz")," file and unzip it. By default, the files are unzipped into the tippy-linux-x64 folder. All versions of Tippy can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Make Tippy executable and run Tippy.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1-3}","{1-3}":!0},"$ chmod +x ./tippy-linux-x64/Tippy\n$ cd tippy-linux-x64\n$ ./Tippy\n")),(0,o.kt)("p",null,"If a desktop GUI is installed, double click the Tippy file under the tippy-linux-x64 folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB node on DEV chain.")),(0,o.kt)("p",null,(0,o.kt)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",(0,o.kt)(r.Z,{to:(0,i.Z)("/docs/basics/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Tippy ",(0,o.kt)("b",null,"Dashboard"),". Details of blocks and transactions of the chain can be checked on the ",(0,o.kt)("b",null,"Blocks")," and ",(0,o.kt)("b",null,"Transactions")," pages that are visible when the node is started."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"$HOME/.config/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"$HOME/.config/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/specs/dev.toml"',title:'"$HOME/.config/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/ckb-miner.toml" {4}',title:'"$HOME/.config/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),(0,o.kt)(u.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"Download the ",(0,o.kt)("b",null,"Tippy.dmg")," file. All versions of Tippy can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("li",null,"Open the Tippy.dmg file and drag ",(0,o.kt)("b",null,"Tippy.app")," to the Applications folder."))),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Run Tippy.")),(0,o.kt)("p",null,"Click Tippy.app in the Applications folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB node on DEV chain.")),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"~/Libary/Application Support/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"~/Libary/Application Support/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/specs/dev.toml"',title:'"~/Libary/Application','Support/Tippy/chain-number/specs/dev.toml"':!0},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/ckb-miner.toml" {4}',title:'"~/Libary/Application','Support/Tippy/chain-number/ckb-miner.toml"':!0,"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),(0,o.kt)(u.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 1. Download Tippy.")),(0,o.kt)("p",null,"Download the ",(0,o.kt)("b",null,"tippy-win-x64.zip")," file and unzip the file. By default, the files are unzipped into the tippy-win-x64 folder. All versions can be found on the ",(0,o.kt)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},(0,o.kt)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 2. Run Tippy.")),(0,o.kt)("p",null,"Double click the Tippy.exe file under the tippy-win-x64 folder to run Tippy."),(0,o.kt)("p",null,"A web page on ",(0,o.kt)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the double click. If the page is not opened, open the browser and type ",(0,o.kt)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Step 3. Create a CKB chain.")),(0,o.kt)("p",null,"To create a CKB node on ",(0,o.kt)("b",null,"DEV chain"),", click the ",(0,o.kt)("b",null,"Launch a CKB devnet instantly")," button on the home page."),(0,o.kt)("img",{src:(0,i.Z)("img/tippycreate.png")}),(0,o.kt)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),(0,o.kt)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),(0,o.kt)("p",null,"To shorten DEV chain epoch and block interval:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("p",null,"Stop the DEV chain and delete the data files of the chain."),(0,o.kt)("p",null,"C:/Users/",(0,o.kt)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",(0,o.kt)("var",null,"number"),"/data"),(0,o.kt)("p",null,"C:/Users/",(0,o.kt)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",(0,o.kt)("var",null,"number"),"/indexer-data")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"genesis_epoch_length")," and ",(0,o.kt)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Modify the value for ",(0,o.kt)("code",null,"value")," under the ",(0,o.kt)("code",null,"miner.workers")," section  in the ",(0,o.kt)("b",null,"ckb-miner.toml")," file."),(0,o.kt)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml" {4}',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),(0,o.kt)("li",null,(0,o.kt)("p",null,"Restart the DEV chain on Tippy Dashboard."))))))}f.isMDXComponent=!0}}]);