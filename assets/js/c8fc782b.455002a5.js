"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5335],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(o),f=n,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||r;return o?i.createElement(m,a(a({ref:t},d),{},{components:o})):i.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<r;s++)a[s]=o[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},505:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=o(7462),n=(o(7294),o(3905));const r={label:"UT Video",sidebar_position:1},a="UT Video Codec Suite",c={unversionedId:"video/utvideo",id:"video/utvideo",title:"UT Video Codec Suite",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/video/utvideo.md",sourceDirName:"video",slug:"/video/utvideo",permalink:"/docs/video/utvideo",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/video/utvideo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{label:"UT Video",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FFV1",permalink:"/docs/video/FFV1"},next:{title:"H.265",permalink:"/docs/video/HEVC"}},u={},s=[],d={toc:s},l="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(l,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ut-video-codec-suite"},"UT Video Codec Suite"),(0,n.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,n.kt)("p",null,"UT Video Codec Suite is a fast, lossless video codec, developed by Takeshi Umezawa (\u6885\u6fa4 \u5a01\u5fd7, Umezawa Takeshi) and released under the free GNU General Public License. The algorithm of UT video is based on the Huffman code."),(0,n.kt)("p",null,"UT video was developed as an alternative to HuffYUV, in order to achieve better compression. It can handle color spaces such as YUV422 (ULY2), RGB (ULRG), RGBA (ULRA) and, most recently, YUV420 (ULY0)."),(0,n.kt)("p",null,"It has both x86 and x64 builds. Due to its multithreading support, this codec is also capable of encoding HDTV material in real time. The codec requires support for the SSE2 instruction set because it is heavily used for speed optimizations."),(0,n.kt)("p",null,"There are various predction modes, which can be used via ",(0,n.kt)("a",{parentName:"p",href:"/docs/utilities/ffmpeg"},"FFmpeg"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"no prediction employed"),(0,n.kt)("li",{parentName:"ul"},"left neighbour prediction (continuous for the whole slice)"),(0,n.kt)("li",{parentName:"ul"},"gradient prediction"),(0,n.kt)("li",{parentName:"ul"},"median prediction")),(0,n.kt)("p",null,"You can use FFmpeg to encode utvideo as follows:\n",(0,n.kt)("inlineCode",{parentName:"p"},"ffmpeg -i [input] -c:v utvideo -pred [0,1,2,3] [output]")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"References: ",(0,n.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Ut_Video_Codec_Suite"},"Wikipedia"))))}p.isMDXComponent=!0}}]);