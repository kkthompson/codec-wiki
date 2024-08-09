"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9993],{1793:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(4848),t=s(8453);const r={title:"QOI",sidebar_position:8},a="QOI",o={id:"images/QOI",title:"QOI",description:"QOI (Quite OK Image Format) is an image compression format that aims to provide a simple, fast, and efficient way to compress and decompress images losslessly. It was designed to be easy to implement while offering better compression ratios than the widely used but more complex PNG format while achieving much faster encoding & decoding speeds.",source:"@site/docs/images/QOI.mdx",sourceDirName:"images",slug:"/images/QOI",permalink:"/docs/images/QOI",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/images/QOI.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"QOI",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"JPEG-XL",permalink:"/docs/images/JXL"},next:{title:"x264",permalink:"/docs/encoders/x264"}},l={},d=[{value:"Performance Checklist",id:"performance-checklist",level:2},{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"Benchmarks",id:"benchmarks",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"qoi",children:"QOI"})}),"\n",(0,i.jsxs)(n.p,{children:["QOI (Quite OK Image Format) is an image compression format that aims to provide a simple, fast, and efficient way to compress and decompress images losslessly. It was designed to be easy to implement while offering better compression ratios than the widely used but more complex ",(0,i.jsx)(n.a,{href:"/docs/images/PNG",children:"PNG"})," format while achieving much faster encoding & decoding speeds."]}),"\n",(0,i.jsx)(n.h2,{id:"performance-checklist",children:"Performance Checklist"}),"\n",(0,i.jsxs)(n.p,{children:["Lossless? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Lossy? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Supported Bit Depths:\n",(0,i.jsx)(n.em,{children:"8 BPC"})]}),"\n",(0,i.jsxs)(n.p,{children:["HDR/Wide Gamut? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Animation? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Transparency? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsxs)(n.p,{children:["Progressive Decode? ",(0,i.jsx)(n.em,{children:"No"})]}),"\n",(0,i.jsxs)(n.p,{children:["Royalty Free? ",(0,i.jsx)(n.em,{children:"Yes"})]}),"\n",(0,i.jsx)(n.h2,{id:"format-breakdown",children:"Format Breakdown"}),"\n",(0,i.jsx)(n.p,{children:"QOI compression is based on a simple and fast algorithm that exploits spatial redundancy in images. The algorithm uses a combination of run-length encoding (RLE), a small lookup table, delta encoding, and full-color pixel storage to achieve efficient compression. Depending on the algorithm's decision, a chunk (pixel) can take up one to five bytes."}),"\n",(0,i.jsx)(n.p,{children:"The QOI format supports images with 3 or 4 channels (RGB or RGBA) and 8 bits per channel. The format supports two colorspaces: Linear RGB & sRGB with linear alpha. These do not affect the way pixels are encoded."}),"\n",(0,i.jsx)(n.p,{children:"Here is a breakdown of the various chunk types in QOI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_RGB"})}),": Full RGB pixel value using 8 bits (1 byte) for each of the red, green, and blue channels. The alpha channel is 255 in RGB images, and always remains unchanged."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_RGBA"})}),": Full RGBA pixel value using 8 bits for each of the red, green, blue, & alpha channels."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_DIFF"})}),": The difference between the current pixel and the previous pixel for the red, green, and blue channels are stored using 2 bits for each channel. The differences are stored with a bias of 2 and wrap (so 1 minus 2 would be 255). The alpha channel remains unchanged."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_LUMA"})}),": These pixels encode the green channel difference from the previous pixel using 6 bits, and then encode the red and blue channel differences relative to the green channel difference using 4 bits each. This allows for more efficient encoding of small color changes. The alpha channel remains unchanged."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_RUN"})}),": These are the simplest, encoding a run-length of pixels that are identical to the previous pixel. The run length is stored using 6 bits with a bias of -1, allowing for runs of 1 to 62 pixels."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QOI_OP_INDEX"})}),": These are stored by referencing a previously seen pixel value from a rolling array of 64 recent pixel values by using a simple hash on each pixel as it is identified. If another pixel matches a previously seen hash value in the array, the index of the referenced pixel is stored."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The QOI format also includes a simple 14-byte header that stores the image dimensions, color space, and channel depth information. The end of file is signaled by an 8-byte end marker."}),"\n",(0,i.jsx)(n.h3,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,i.jsxs)(n.p,{children:["The creator of QOI benchmarked the format against libpng & ",(0,i.jsx)(n.code,{children:"stbi_image_write"})," using the C implementation in QOI via ",(0,i.jsx)(n.a,{href:"https://github.com/phoboslab/qoi/blob/master/qoibench.c",children:(0,i.jsx)(n.code,{children:"qoibench.c"})})," on a collection of 2,879 screenshots, icons, photos, & textures (",(0,i.jsx)(n.a,{href:"https://qoiformat.org/benchmark/qoi_benchmark_suite.tar",children:"source"}),"). The results are as follows:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Library"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Decode (ms)"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Encode (ms)"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Decode MP/s"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Encode MP/s"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Size (kb)"})}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"Compression Rate"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"libpng"})}),(0,i.jsx)(n.td,{children:"7.0"}),(0,i.jsx)(n.td,{children:"83.8"}),(0,i.jsx)(n.td,{children:"66.56"}),(0,i.jsx)(n.td,{children:"5.54"}),(0,i.jsx)(n.td,{children:"398"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"24.2%"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"stbi"})}),(0,i.jsx)(n.td,{children:"7.0"}),(0,i.jsx)(n.td,{children:"60.5"}),(0,i.jsx)(n.td,{children:"66.63"}),(0,i.jsx)(n.td,{children:"7.67"}),(0,i.jsx)(n.td,{children:"561"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"34.2%"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"qoi"})}),(0,i.jsx)(n.td,{children:"2.1"}),(0,i.jsx)(n.td,{children:"2.9"}),(0,i.jsx)(n.td,{children:"226.03"}),(0,i.jsx)(n.td,{children:"161.99"}),(0,i.jsx)(n.td,{children:"463"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"28.2%"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The results show that QOI is significantly faster than libpng and ",(0,i.jsx)(n.code,{children:"stb_image_write"}),", and it also achieves better compression ratios than libpng on average."]}),"\n",(0,i.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsx)(n.p,{children:"Some of the key advantages of QOI include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Super simple: ",(0,i.jsx)(n.a,{href:"https://qoiformat.org/qoi-specification.pdf",children:"the spec"})," is only one page"]}),"\n",(0,i.jsx)(n.li,{children:"Extremely fast encoding & decoding speeds"}),"\n",(0,i.jsx)(n.li,{children:"Data chunks are byte-aligned, so data can be streamed to a decoder one byte at a time"}),"\n",(0,i.jsx)(n.li,{children:"Better compression ratios compared to PNG for many types of images"}),"\n",(0,i.jsx)(n.li,{children:"Supports transparency"}),"\n",(0,i.jsx)(n.li,{children:"Royalty-free, open-source (CC0), & easy to integrate into any application"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Limited to 8 bits per channel (no support for higher bit depths)"}),"\n",(0,i.jsx)(n.li,{children:"Not suitable for images with high-frequency noise or very little spatial redundancy"}),"\n",(0,i.jsx)(n.li,{children:"Lacks advanced features like progressive loading, interlacing, or custom metadata"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Despite its limitations, QOI provides a compelling alternative to PNG for many use cases where simplicity, speed, and good compression ratios are desired. QOI is not especially well supported at present, but adoption is rapidly growing as developers can easily integrate support into their applications due to the format's simplicity."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);