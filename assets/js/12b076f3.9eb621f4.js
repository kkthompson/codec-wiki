"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7222],{9905:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});var i=t(4848),a=t(8453);const o={title:"zstd",sidebar_position:7},r="Zstandard",n={id:"data/zstd",title:"zstd",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/data/zstd.mdx",sourceDirName:"data",slug:"/data/zstd",permalink:"/docs/data/zstd",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/data/zstd.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"zstd",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"zpaq",permalink:"/docs/data/zpaq"},next:{title:"tar",permalink:"/docs/data/tar"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Compress a file",id:"compress-a-file",level:2},{value:"Decompress a file",id:"decompress-a-file",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"zstandard",children:"Zstandard"})}),"\n",(0,i.jsx)(s.admonition,{title:"Help Wanted",type:"danger",children:(0,i.jsxs)(s.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,i.jsx)(s.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,i.jsxs)(s.p,{children:["Zstandard is a compression algorithm developed by Facebook known for its extremely fast decompression speeds. It was released in early 2015 and is used in a variety of different contexts. It was designed to perform similarly to older Deflate-based compression algorithms like ",(0,i.jsx)(s.a,{href:"/docs/data/zip",children:"ZIP"})," or ",(0,i.jsx)(s.a,{href:"/docs/data/gzip",children:"gzip"})," while being faster overall. In practice, it is said to compress similarly to pure LZMA (part of ",(0,i.jsx)(s.a,{href:"/docs/data/xz",children:"XZ"})," & ",(0,i.jsx)(s.a,{href:"/docs/data/7z",children:"7-zip"}),") while being much faster."]}),"\n",(0,i.jsxs)(s.p,{children:["While ",(0,i.jsx)(s.code,{children:".tar.zstd"})," archives aren't as popular as ",(0,i.jsx)(s.code,{children:".tar.xz"})," or ",(0,i.jsx)(s.code,{children:".tar.gz"}),", Zstandard is already a very popular tool for compression in the world of open-source software. It has been integrated into both the FreeBSD kernel & the Linux kernel and is available as a filesystem compression method for the btrfs, squashfs, bcachefs, & OpenZFS filesystems. Filesystem compression refers to a compression scheme that transparently compresses files stored on a filesystem at all times, leading to an overall reduction in storage used across the filesystem."]}),"\n",(0,i.jsxs)(s.p,{children:["The command line ",(0,i.jsx)(s.code,{children:"zstd"})," utility can compress to Zstandard at compression levels 1 through 19 by default. The upper bound is raised to 22 when passing the ",(0,i.jsx)(s.code,{children:"--ultra"})," flag. All Arch Linux packages are compressed at zstd level 20, allowing Arch packages to be decompressed 14 times faster compared to XZ at the cost of an average 0.8% filesize increase across all packages. It is popular in the game emulation scene as well, as many game file formats for emulating console games support zstd compression. The ZIP file format standard actually supports Zstandard in compression level 93 since version 6.3.8, published in 2020. Content encoding using zstd is supported in chromium since Chromium 118 behind an experimental flag, meaning it might compete with ",(0,i.jsx)(s.a,{href:"/docs/data/brotli",children:"Brotli"})," on the web in the future. Apple's LZFSE algorithm is purportedly similar to Zstandard compression level 6."]}),"\n",(0,i.jsxs)(s.p,{children:["Zstandard has the potential to effectively compete with nearly every modern compression method available across most modern use cases. In certain scenarios, if it takes off as a content delivery format, it could replace Brotli if the benefits of super-fast & super-light decode improve the responsiveness of web pages & are worth sacrificing a bit of compression ratio. When using the much higher effort settings, it often outcompetes Brotli for the archive size as well. In the future, ",(0,i.jsx)(s.code,{children:".tar.zst"})," could replace 7-zip, ZIP, or other archiving formats, making speedy decode a reality on systems featuring varying levels of compute horsepower."]}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["This guide has been written for the ",(0,i.jsx)(s.code,{children:"zstd"})," command-line utility, however GUI archivers such as peazip and 7zip have growing support for zstd."]})}),"\n",(0,i.jsx)(s.h2,{id:"compress-a-file",children:"Compress a file"}),"\n",(0,i.jsxs)(s.p,{children:["Like many other compressing utilities, in order to compress mutliple files, one should probably archive them with ",(0,i.jsx)(s.a,{href:"/docs/data/tar",children:"tar"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"zstd -# {file} -o {file}.zstd\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"-#"})," is actually a number that represents the desired compression level, for example ",(0,i.jsx)(s.code,{children:"-3"}),", ",(0,i.jsx)(s.code,{children:"-6"}),". By default you can specify 1-19. By also passing ",(0,i.jsx)(s.code,{children:"-ultra"}),", you can go up to compression level 22."]}),"\n",(0,i.jsx)(s.h2,{id:"decompress-a-file",children:"Decompress a file"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"zstd -d {file}.zstd -o file\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>n});var i=t(6540);const a={},o=i.createContext(a);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);