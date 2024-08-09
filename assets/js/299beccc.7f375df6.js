"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5479],{1531:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=i(4848),o=i(8453);const n={title:"7z",sidebar_position:4},r="7-zip (7z)",a={id:"data/7z",title:"7z",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/data/7z.mdx",sourceDirName:"data",slug:"/data/7z",permalink:"/docs/data/7z",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/data/7z.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"7z",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"bzip2",permalink:"/docs/data/bzip2"},next:{title:"xz",permalink:"/docs/data/xz"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"7-zip-7z",children:"7-zip (7z)"})}),"\n",(0,s.jsx)(t.admonition,{title:"Help Wanted",type:"danger",children:(0,s.jsxs)(t.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,s.jsx)(t.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,s.jsxs)(t.p,{children:["7-zip (7z) is a file format that supports several different data compression, encryption, & pre-processing algorithms. It was created by the 7-Zip archiver, which is free and open-source software for dealing with various data compression formats including formats similar to 7z like ",(0,s.jsx)(t.a,{href:"/docs/data/xz",children:"XZ"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The 7-zip format has some noteworthy advantages over the popular ",(0,s.jsx)(t.a,{href:"/docs/data/zip",children:"ZIP"})," format."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'The 7-zip utility can compress files to the 7z format "30-70% better" than to ZIP format despite having a highly efficient ZIP encoder. It mainly uses the LZMA & LZMA2 algorithms, which are more modern than DEFLATE and usually compress better.'}),"\n",(0,s.jsx)(t.li,{children:"7-zip can encrypt files with AES-256 using a user provided password. AES-256 is more secure than the ZipCrypto encryption often used by ZIP."}),"\n",(0,s.jsx)(t.li,{children:"7-zip can support files up to 16 exabytes in size, while traditional ZIP has a 4 GB limit (ZIP64, which is commonly used, does not suffer from this 4 GB limitation so this is less relevant now). 7-zip also supports various pre-processing filters, which can improve compression for certain types of data like executables and binaries."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"However, 7-zip also has some drawbacks and limitations."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"7-zip is not as widely supported as ZIP by other software and platforms. Some users may need to install additional programs or plugins to open or extract 7z files45."}),"\n",(0,s.jsx)(t.li,{children:"Slower speed: 7-zip archives may take longer to compress or decompress compared to ZIP. This is somewhat mitigated by the 7-zip utility's effective parallelization when decoding, but this only affects real time as opposed to user time meaning it is still likely going to be more expensive to decompress than ZIP."}),"\n",(0,s.jsx)(t.li,{children:"7-zip does not have any built-in mechanism to repair corrupted or damaged archives. Users may need to use third-party tools or backup copies to recover their data1"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"7z archives are supported natively by macOS & many Linux distributions."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(6540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);