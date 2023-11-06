"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[4704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return a?o.createElement(h,n(n({ref:t},d),{},{components:a})):o.createElement(h,n({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),i=(a(7294),a(3905));const r={title:"Terminology",sidebar_position:2},n="Terminology",s={unversionedId:"introduction/terminology",id:"introduction/terminology",title:"Terminology",description:"When learning about encoding technology, it is important to understand the vast terminology that is often used to describe concepts that are often not very complex to understand.",source:"@site/docs/introduction/terminology.md",sourceDirName:"introduction",slug:"/introduction/terminology",permalink:"/docs/introduction/terminology",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/introduction/terminology.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Terminology",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prologue",permalink:"/docs/introduction/prologue"},next:{title:"Spotting Video Artifacts",permalink:"/docs/introduction/video-artifacts"}},l={},c=[{value:"Bitstream",id:"bitstream",level:2},{value:"Lossy / Lossless",id:"lossy--lossless",level:2},{value:"Elementary stream",id:"elementary-stream",level:2},{value:"Muxing",id:"muxing",level:2},{value:"Codec",id:"codec",level:2},{value:"Filter",id:"filter",level:2},{value:"Muxer/Demuxer",id:"muxerdemuxer",level:2},{value:"Bitstream filter",id:"bitstream-filter",level:2},{value:"Container",id:"container",level:2},{value:"MP4 / M4V",id:"mp4--m4v",level:4},{value:"MOV",id:"mov",level:4},{value:"MKV / MKA / MKS / MK3D",id:"mkv--mka--mks--mk3d",level:4},{value:"WebM",id:"webm",level:4},{value:"Transcoding",id:"transcoding",level:2},{value:"RDO",id:"rdo",level:2},{value:"Perceputal / Psychovisual / Psychoacoustic",id:"perceputal--psychovisual--psychoacoustic",level:2},{value:"Discrete Cosine Transform (DCT)",id:"discrete-cosine-transform-dct",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"When learning about encoding technology, it is important to understand the vast terminology that is often used to describe concepts that are often not very complex to understand."),(0,i.kt)("h2",{id:"bitstream"},"Bitstream"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"bitstream")," or ",(0,i.kt)("em",{parentName:"p"},"bit stream")," is a media file, the kind that is played in a media player. It consists of a ",(0,i.kt)("a",{parentName:"p",href:"#container"},"container")," wrapping multiple ",(0,i.kt)("a",{parentName:"p",href:"#elementary-stream"},"elementary streams")),(0,i.kt)("h2",{id:"lossy--lossless"},"Lossy / Lossless"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lossy")," encoding throws out some of the detail to achieve a smaller size. Often, this is an acceptable trade-off, but if you need a perfect recreation of the data, you need ",(0,i.kt)("em",{parentName:"p"},"lossless")," encoding."),(0,i.kt)("h2",{id:"elementary-stream"},"Elementary stream"),(0,i.kt)("p",null,"An elementary stream is an audio, video, or subtitle track. Basically, it's the compressed data you want to ",(0,i.kt)("a",{parentName:"p",href:"#muxing"},"mux")," into the container."),(0,i.kt)("h2",{id:"muxing"},"Muxing"),(0,i.kt)("p",null,"Putting elementary streams into a container, which preserves them without making any changes to the data."),(0,i.kt)("h2",{id:"codec"},"Codec"),(0,i.kt)("p",null,"A codec (",(0,i.kt)("strong",{parentName:"p"},"co"),"der/",(0,i.kt)("strong",{parentName:"p"},"dec"),"oder) is the piece of code that actually encodes the data you put in. It takes as input and produces as output an elementary stream. More information is provided ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/prologue/#what-is-a-codec"},"in the prologue"),"."),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("p",null,"A filter is a piece of code you can apply to the data to make something about it different, for instance sharpening, removing artifacts, shakiness, denoising, scaling, overlay, etc."),(0,i.kt)("h2",{id:"muxerdemuxer"},"Muxer/Demuxer"),(0,i.kt)("p",null,"The pieces of code that ",(0,i.kt)("a",{parentName:"p",href:"#muxing"},"mux")," or do the reverse, getting elementary streams from the container."),(0,i.kt)("h2",{id:"bitstream-filter"},"Bitstream filter"),(0,i.kt)("p",null,"A bitstream filter is a filter that is directly applied to the ",(0,i.kt)("a",{parentName:"p",href:"#bitstream"},"bitstream")," in order to change something about the container, for instance, convert frame types, or corrupt some packets."),(0,i.kt)("h2",{id:"container"},"Container"),(0,i.kt)("p",null,"A container is a format for putting one or more elementary streams into one file, which is then called a ",(0,i.kt)("a",{parentName:"p",href:"#bitstream"},"bitstream"),"."),(0,i.kt)("p",null,'A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.'),(0,i.kt)("p",null,"Some kinds of containers:"),(0,i.kt)("h4",{id:"mp4--m4v"},"MP4 / M4V"),(0,i.kt)("p",null,"This is likely the most common container you've encountered, & has near universal compatibility. Has a limited maximum amount of streams. The supported video codecs are ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/AVC"},"H.264"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/HEVC"},"H.265"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/VVC"},"H.266"),", DivX, Xvid, ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/VP9"},"VP9")," (Unofficial, hacky), and ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/AV1"},"AV1")," (Unofficial, hacky). For audio codecs it's many of the various flavors of ",(0,i.kt)("a",{parentName:"p",href:"/docs/audio/AAC"},"AAC"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/audio/MP3"},"MP3"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/audio/FLAC"},"FLAC")," (Unofficial), ",(0,i.kt)("a",{parentName:"p",href:"/docs/audio/Opus"},"Opus")," (Unofficial, hacky). For subtitles only MPEG-4 Timed Text (TTXT) is supported."),(0,i.kt)("p",null,"The best tool to work with this container is MP4Box, but FFmpeg also works."),(0,i.kt)("h4",{id:"mov"},"MOV"),(0,i.kt)("p",null,"Similar to MP4, but less supported. Made with Apple Quicktime in mind, supports ProRes."),(0,i.kt)("h4",{id:"mkv--mka--mks--mk3d"},"MKV / MKA / MKS / MK3D"),(0,i.kt)("p",null,"Also known as Matroska, allows an unlimited amount of video/audio/subtitle streams and any codec that probably still exists in Area 51, you can put literally anything in there and it won't even care, MPEG-2/DivX/H.266/Theora/Thor/RealVideo/MJPEG/AVS3/AMR-WB, you name it. All around best container for working with if you have the choice."),(0,i.kt)("h4",{id:"webm"},"WebM"),(0,i.kt)("p",null,"A container made with web streaming in mind. WebM is stripped-down MKV that only allows free & open source codecs such as VP8, VP9 & AV1 for video, Vorbis & Opus for audio, and ",(0,i.kt)("a",{parentName:"p",href:"/docs/subtitles/webvtt"},"WebVTT")," for subtitles."),(0,i.kt)("h2",{id:"transcoding"},"Transcoding"),(0,i.kt)("p",null,"Taking an elementary stream & converting it to another format, lossless or lossy, using an encoder of some kind. For example, if I convert a lossless ",(0,i.kt)("a",{parentName:"p",href:"/docs/video/FFV1"},"FFV1")," video to lossy AV1 using an encoder, let's say ",(0,i.kt)("a",{parentName:"p",href:"/docs/encoders/rav1e"},"rav1e"),", I have ",(0,i.kt)("em",{parentName:"p"},"transcoded")," this lossless video to AV1. Transcoding doesn't have anything to do with the container."),(0,i.kt)("h2",{id:"rdo"},"RDO"),(0,i.kt)("p",null,"RDO, or Rate-Distortion Optimization, is a technique used to find the best trade-off between the bit rate & the quality of lossily encoded content. RDO can be metric-based, optimizing to score well on metrics like ",(0,i.kt)("a",{parentName:"p",href:"/docs/metrics/PSNR"},"PSNR")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/metrics/SSIM"},"SSIM"),"."),(0,i.kt)("h2",{id:"perceputal--psychovisual--psychoacoustic"},"Perceputal / Psychovisual / Psychoacoustic"),(0,i.kt)("p",null,'"Psychovisual quality" (for videos), "Psychoacoustic quality" (for audio), or "perceptual quality" is a term used to describe the perception of quality of a distorted video by the human visual system. The goal of any multimedia codec is to minimize data while maintaining perceived quality, and optimizing around human perception theoretically yields the best performance even within a limited set of coding techniques (like when using an older codec). Our model of human perception continues to evolve, and there is currently no such thing as a perfect model of the human visual system available. The current best available options in the form of metrics appear to be ',(0,i.kt)("a",{parentName:"p",href:"/docs/metrics/SSIMULACRA2"},"SSIMULACRA2")," & ",(0,i.kt)("a",{parentName:"p",href:"/docs/metrics/butteraugli"},"Butteraugli"),"."),(0,i.kt)("h2",{id:"discrete-cosine-transform-dct"},"Discrete Cosine Transform (DCT)"),(0,i.kt)("p",null,"The Discrete Cosine Transform is a mathematical transformation that can transform discrete data into the frequency domain. This discrete data could be pixels in an image/video compression block or data points recorded temporally representing an audio recording. This algorithm is a particularly good choice for image, video, music, & speech compression because it has high energy compaction relative to our understanding of images & their perceptual quality. High energy compaction means the DCT is able to represent a signal with a small number of significant coefficients, in this case mainly in the lower frequencies."))}u.isMDXComponent=!0}}]);