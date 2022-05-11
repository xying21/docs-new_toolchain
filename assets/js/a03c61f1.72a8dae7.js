"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,k=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6700:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"integrity-check",title:"Integrity Check for CKB Release"},p=void 0,s={unversionedId:"develop/integrity-check",id:"develop/integrity-check",title:"Integrity Check for CKB Release",description:"All the binaries in CKB releases are signed via following PGP keys.",source:"@site/docs/develop/integrity-check.md",sourceDirName:"develop",slug:"/develop/integrity-check",permalink:"/docs-new_toolchain/docs/develop/integrity-check",tags:[],version:"current",frontMatter:{id:"integrity-check",title:"Integrity Check for CKB Release"},sidebar:"Develop",previous:{title:"Tips for CKB Development",permalink:"/docs-new_toolchain/docs/develop/ckb-core-dev"},next:{title:"Mint SUDT via Contract",permalink:"/docs-new_toolchain/docs/develop/mint-sudt-via-contract"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All the binaries in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"CKB releases")," are signed via following PGP keys."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Package"),(0,o.kt)("th",{parentName:"tr",align:null},"Unique ID"),(0,o.kt)("th",{parentName:"tr",align:null},"OpenPGP Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Fingerprint"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},">= 0.13.0"),(0,o.kt)("td",{parentName:"tr",align:null},"macOS, Linux, CentOS"),(0,o.kt)("td",{parentName:"tr",align:null},"Nervos Travis Builder ",(0,o.kt)("a",{parentName:"td",href:"mailto:bot@nervos.org"},"bot@nervos.org")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x4F37F694F4631C0A"},"F4631C0A")),(0,o.kt)("td",{parentName:"tr",align:null},"64B7 05B5 6078 1FC5 4047  7B82 4F37 F694 F463 1C0A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},">= 0.14.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},"Nervos Azure Builder ",(0,o.kt)("a",{parentName:"td",href:"mailto:bot@nervos.org"},"bot@nervos.org")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x5EBA64ECAD748F26"},"AD748F26")),(0,o.kt)("td",{parentName:"tr",align:null},"0849 A2D2 4CA7 CFFC FA80  BCD4 5EBA 64EC AD74 8F26")))),(0,o.kt)("p",null,"You can import the public keys from the keyserver network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gpg --recv-keys 4F37F694F4631C0A 5EBA64ECAD748F26\n")),(0,o.kt)("p",null,"Once you have already imported the public keys, please download both the archive and\nthe corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},".asc")," file to verify the signature. For example, to check\nthe signature of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb_v0.13.0_x86_64-apple-darwin.zip")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gpg --verify ckb_v0.13.0_x86_64-apple-darwin.zip.asc ckb_v0.13.0_x86_64-apple-darwin.zip\n")),(0,o.kt)("p",null,"Note: Please never use a GnuPG version just downloaded to check the integrity of the source \u2014 use an existing, trusted GnuPG installation, e.g., the one provided by your distribution."),(0,o.kt)("p",null,"If the output of the above command is similar to the following, it means that you do not have our public key or the signature was generated by someone else, so you should handle the file suspiciously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gpg: Signature made Wed 05 Jun 2019 10:12:22 PM UTC using RSA key ID F4631C0A\ngpg: Can't check signature: No public key\n")),(0,o.kt)("p",null,"If you get this result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gpg: Signature made Wed 05 Jun 2019 10:12:22 PM UTC using RSA key ID F4631C0A\ngpg: Good signature from "Nervos Travis Builder <bot@nervos.org>"\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 64B7 05B5 6078 1FC5 4047  7B82 4F37 F694 F463 1C0A\n')),(0,o.kt)("p",null,"then you have a copy of our keys and the signatures are valid, but you have not marked the keys as trusted or the keys are a forgery. In this case, at the very least, you should compare the fingerprints that are shown above."),(0,o.kt)("p",null,"Ideally, you'll get result like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gpg: Signature made Wed 05 Jun 2019 10:12:22 PM UTC using RSA key ID F4631C0A\ngpg: checking the trustdb\ngpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model\ngpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u\ngpg: next trustdb check due at 2023-06-05\ngpg: Good signature from "Nervos Travis Builder <bot@nervos.org>"\n')))}d.isMDXComponent=!0}}]);