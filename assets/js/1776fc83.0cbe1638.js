"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[6326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={label:"JPEG-XL",sidebar_position:7},o="JPEG-XL",l={unversionedId:"images/JXL",id:"images/JXL",title:"JPEG-XL",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/images/JXL.md",sourceDirName:"images",slug:"/images/JXL",permalink:"/docs/images/JXL",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/images/JXL.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{label:"JPEG-XL",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"AVIF",permalink:"/docs/images/AVIF"},next:{title:"x264",permalink:"/docs/encoders/x264"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Decoding",id:"decoding",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Distance and quality",id:"distance-and-quality",level:4},{value:"Effort",id:"effort",level:4},{value:"Performance Checklist",id:"performance-checklist",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jpeg-xl"},"JPEG-XL"),(0,i.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,i.kt)("p",null,"JPEG-XL (JXL) is a compression format for images that was developed by the Joint Photographic Experts Group (JPEG) in 2020. It is designed to provide improved compression efficiency compared to the traditional ",(0,i.kt)("a",{parentName:"p",href:"/docs/images/JPEG"},"JPEG")," format, while still maintaining image quality. JPEG-XL uses a combination of techniques such as perceptual color encoding, advanced entropy coding, and a new image prediction method to achieve its improved compression performance. It also has a lossless JPEG recompression mode, where an existing JPEG file can be turned into a JXL that can be decoded for a bit-for-bit exact replica of the original JPEG."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"While it has support by many image viewers, editors, and other software, such as GIMP, Krita, Safari, ImageMagick, and many more, the most complete set of tools for encoding, manipulating, and decoding ",(0,i.kt)("inlineCode",{parentName:"p"},".jxl")," files is libjxl, the reference library for the format."),(0,i.kt)("h3",{id:"decoding"},"Decoding"),(0,i.kt)("p",null,"Decoding a ",(0,i.kt)("inlineCode",{parentName:"p"},".jxl")," image is straightforward with libjxl's decoder, ",(0,i.kt)("inlineCode",{parentName:"p"},"djxl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"djxl example.jxl example.png\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"djxl")," can decode to pixels via pipes, png, apng for animated jxl, jpg, ppm, and pfm."),(0,i.kt)("p",null,"By default, if the ",(0,i.kt)("inlineCode",{parentName:"p"},".jxl")," file was encoded with lossless jpeg recompression, ",(0,i.kt)("inlineCode",{parentName:"p"},"djxl")," will rebuild the exact jpeg file that was originally compressed. To avoid this, and create a new jpeg file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"djxl -j example.jxl example.jpg\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keep in mind this is now a lossy process as ",(0,i.kt)("inlineCode",{parentName:"strong"},"djxl")," will decode to pixels, then encode a new ",(0,i.kt)("inlineCode",{parentName:"strong"},".jpg")," with those pixels.")),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"libjxl's encoder ",(0,i.kt)("inlineCode",{parentName:"p"},"cjxl")," has more options to play around with. It takes a few primary arguments, distance (",(0,i.kt)("inlineCode",{parentName:"p"},"-d"),"), quality (",(0,i.kt)("inlineCode",{parentName:"p"},"-q"),"), and effort (",(0,i.kt)("inlineCode",{parentName:"p"},"-e"),")."),(0,i.kt)("h4",{id:"distance-and-quality"},"Distance and quality"),(0,i.kt)("p",null,"Distance and quality are two ways of specifying ",(0,i.kt)("em",{parentName:"p"},"how much loss")," you are willing to tolerate, and as such, they are mutually exclusive, as they pull the same levers under the hood."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distance is designed to map to how 'close' one must be to the source to notice any loss. It is represented as a scale between 0.0 & 25.0. 0.0 is ",(0,i.kt)("strong",{parentName:"li"},"mathematically lossless"),", every pixel will have the exact same value as the source. 1.0 is designed to be ",(0,i.kt)("strong",{parentName:"li"},"visually lossless"),", look the same at a normal viewing distance, and higher values have more loss."),(0,i.kt)("li",{parentName:"ul"},"Quality is designed to roughly map to ",(0,i.kt)("a",{parentName:"li",href:"/docs/images/JPEG"},"JPEG"),"'s quality argument. A range 0-100, where 100 is ",(0,i.kt)("strong",{parentName:"li"},"mathematically lossless"),", 90 is intended to be ",(0,i.kt)("strong",{parentName:"li"},"visually lossless"),", and 0 is almost unrecognizable as the original image.")),(0,i.kt)("h4",{id:"effort"},"Effort"),(0,i.kt)("p",null,"Effort is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-used")," in video encoding. It specifies the amount of effort the encoder will make in order to get the smallest file size it can. It takes the form of a range 1-9, where higher numbers will spend more resources to get diminishing returns in terms of smaller size, while lower values do the opposite, leaving file size on the table for faster encoding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cjxl -e 9 -d 0.3 example.png example.jxl\n")),(0,i.kt)("p",null,"Encoding with effort 9 and distance 0.3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cjxl example.jpg example.jxl\n")),(0,i.kt)("p",null,"This, by default uses lossless JPEG compression."),(0,i.kt)("h2",{id:"performance-checklist"},"Performance Checklist"),(0,i.kt)("p",null,"Lossless? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Lossy? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Supported Bit Depths:\n",(0,i.kt)("em",{parentName:"p"},"Up to 32 BPC")),(0,i.kt)("p",null,"HDR/Wide Gamut? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Animation? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Transparency? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Progressive Decode? ",(0,i.kt)("em",{parentName:"p"},"Yes")),(0,i.kt)("p",null,"Royalty Free? ",(0,i.kt)("em",{parentName:"p"},"Yes")))}m.isMDXComponent=!0}}]);