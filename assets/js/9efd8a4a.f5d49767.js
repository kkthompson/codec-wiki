"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[638],{9792:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(5893),t=s(1151);const o={label:"WebP",sidebar_position:4},r="WebP",d={id:"images/WebP",title:"WebP",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/images/WebP.mdx",sourceDirName:"images",slug:"/images/WebP",permalink:"/docs/images/WebP",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/images/WebP.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{label:"WebP",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HEIC",permalink:"/docs/images/HEIC"},next:{title:"JPEG 2000",permalink:"/docs/images/JPEG2000"}},c={},l=[{value:"Encoding",id:"encoding",level:2},{value:"Using libwebp",id:"using-libwebp",level:3},{value:"Performance Checklist",id:"performance-checklist",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webp",children:"WebP"}),"\n",(0,i.jsx)(n.admonition,{title:"Help Wanted",type:"danger",children:(0,i.jsxs)(n.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,i.jsx)(n.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,i.jsxs)(n.p,{children:['WebP is a free image file format first released by Google in 2010. It consists of 2 primary "modes" of operation. A lossy mode derived from the ',(0,i.jsx)(n.a,{href:"/docs/video/VP8",children:"VP8"})," video codec, and a novel lossless mode added in 2011."]}),"\n",(0,i.jsx)(n.h2,{id:"encoding",children:"Encoding"}),"\n",(0,i.jsx)(n.h3,{id:"using-libwebp",children:"Using libwebp"}),"\n",(0,i.jsxs)(n.p,{children:["libwebp supports WebP, JPEG, PNG, PNM (PGM, PPM, PAM), TIFF as input formats, and a quality (",(0,i.jsx)(n.code,{children:"-q"}),") value between 0 (lowest quality, smallest file) and 100 (highest quality, largest file). Should you need the lossless mode, you need to instead use a ",(0,i.jsx)(n.code,{children:"-z"})," argument, with values representing the effort used between 0 (fastest encode, largest file) and 9 (slowest encode, smallest file)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cwebp example.png -q 75 -o example.webp\n"})}),"\n",(0,i.jsx)(n.h2,{id:"performance-checklist",children:"Performance Checklist"}),"\n",(0,i.jsxs)(n.p,{children:["Lossless? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Lossy? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Supported Bit Depth:\r\n",(0,i.jsx)(n.em,{children:"8 BPC"})]}),"\n",(0,i.jsxs)(n.p,{children:["HDR/Wide Gamut? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Animation? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Transparency? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Progressive Decode? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Royalty Free? ",(0,i.jsx)(n.em,{children:"Yes"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);