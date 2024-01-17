"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9918],{433:(e,n,i)=>{i.d(n,{Z:()=>o});i(7294);var s=i(6905);const t={tabItem:"tabItem_Ymn6"};var a=i(5893);function o(e){let{children:n,hidden:i,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,o),hidden:i,children:n})}},2808:(e,n,i)=>{i.d(n,{Z:()=>w});var s=i(7294),t=i(6905),a=i(3735),o=i(6550),l=i(613),r=i(4423),c=i(636),d=i(9200);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const t=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,r._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,a=u(e),[o,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:i,groupId:t}),[f,b]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Nk)(i);return[t,(0,s.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:t}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&r(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=i(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(5893);function v(e){let{className:n,block:i,selectedValue:s,selectValue:o,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,i=r.indexOf(n),t=l[i].value;t!==s&&(c(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=r.indexOf(e.currentTarget)+1;n=r[i]??r[0];break}case"ArrowLeft":{const i=r.indexOf(e.currentTarget)-1;n=r[i]??r[r.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...a,className:(0,t.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function j(e){let{lazy:n,children:i,selectedValue:t}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},3022:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=i(5893),t=i(1151),a=i(2808),o=i(433);const l={title:"aomenc",sidebar_position:3},r="aomenc",c={id:"encoders/aomenc",title:"aomenc",description:"aomenc or libaom is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1.",source:"@site/docs/encoders/aomenc.mdx",sourceDirName:"encoders",slug:"/encoders/aomenc",permalink:"/docs/encoders/aomenc",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/aomenc.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"aomenc",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"x265",permalink:"/docs/encoders/x265"},next:{title:"vpxenc",permalink:"/docs/encoders/vpxenc"}},d={},h=[{value:"Choosing forks",id:"choosing-forks",level:2},{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Installation &amp; Building",id:"installation--building",level:2},{value:"Usage",id:"usage",level:2},{value:"AV1 Encoding",id:"av1-encoding",level:3},{value:"AVIF Encoding",id:"avif-encoding",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"Tips &amp; Tricks",id:"tips--tricks",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aomenc",children:"aomenc"}),"\n",(0,s.jsxs)(n.p,{children:["aomenc or ",(0,s.jsx)(n.strong,{children:"libaom"})," is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1."]}),"\n",(0,s.jsx)(n.h2,{id:"choosing-forks",children:"Choosing forks"}),"\n",(0,s.jsxs)(n.p,{children:["Mainline aomenc is unfortunately not perfect. It suffers from bad defaults, heavy focus on ",(0,s.jsx)(n.a,{href:"/docs/metrics/PSNR",children:"PSNR"})," which reduces its psycho-visual capabilities, settings that does X instead of Y, among others. Fortunately there are a couple forks that were created to combat these issues."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/BlueSwordM/aom-av1-psy",children:"aom-av1-psy"})," ",(0,s.jsx)(n.em,{children:"No longer maintained as of 13th January 2023"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Clybius/aom-av1-lavish",children:"aom-av1-lavish"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://gitlab.com/damian101/aom-psy101",children:"aom-psy101"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/porcino/aom-av1ador",children:"aom-av1ador"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These forks fix up the poor decisions made by the original AOM devs and most importantly introduce new parameters and tunes to help fine-tune the encoder even more."}),"\n",(0,s.jsxs)(n.p,{children:["Our recommendadion is to use either ",(0,s.jsx)(n.a,{href:"https://github.com/Clybius/aom-av1-lavish",children:"aom-av1-lavish"})," or ",(0,s.jsx)(n.a,{href:"https://gitlab.com/damian101/aom-psy101",children:"aom-psy101"}),", as both are actively maintained with good defaults and have been extensively tested by the encoding community."]}),"\n",(0,s.jsx)(n.h2,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,s.jsxs)(n.p,{children:["aomenc is available in FFmpeg via ",(0,s.jsx)(n.code,{children:"libaom-av1"}),", check if you have it by running ",(0,s.jsx)(n.code,{children:"ffmpeg -h encoder=libaom-av1"}),". You can input non-FFmpeg standard aomenc parameters via ",(0,s.jsx)(n.code,{children:"-aom-params"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Mainline aomenc",type:"caution",children:(0,s.jsx)(n.p,{children:"Since FFmpeg encoder libraries come as the most default, barebones as possible (Therefore mainline aomenc), it is not recommended to use it. Unless you build it yourself."})}),"\n",(0,s.jsx)(n.h2,{id:"installation--building",children:"Installation & Building"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(o.Z,{value:"linux",label:"Linux",default:!0,children:[(0,s.jsx)(n.p,{children:"Linux has no prebuilt binaries so you'll have to compile yourself. CMake, Perl, GNU Make, and nasm (assuming x64, if x86 use yasm) will be needed for compilation."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish && mkdir -p aom_build && cd aom_build\ncmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\nmake -j$(nproc)\nsudo make install\n'})}),(0,s.jsxs)(n.p,{children:["Alternatively, a precompiled AVX2-optimized binary can be installed for Linux via ",(0,s.jsx)(n.a,{href:"/docs/utilities/rav1ator-cli",children:"rAV1ator CLI"}),"."]})]}),(0,s.jsxs)(o.Z,{value:"mac",label:"macOS",children:[(0,s.jsxs)(n.p,{children:["macOS is very similar to Linux. Note that some commands may have to be run with ",(0,s.jsx)(n.code,{children:"sudo"}),", which I won't explicitly include for security reasons."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Homebrew"})}),(0,s.jsx)(n.p,{children:"Installing the Homebrew package manager is a well documented process at this point:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,s.jsx)(n.p,{children:"Installing mainline libaom is as simple as running the following:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew update && brew upgrade\nbrew install aom\n"})}),(0,s.jsx)(n.p,{children:"FFmpeg can also be installed via brew."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Building From Source"})}),(0,s.jsx)(n.p,{children:"If you want aom-av1-lavish instead of mainline, you'll have to compile from source. Things are very similar to Linux, with a few oddities:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["macOS sometimes doesn't have a ",(0,s.jsx)(n.code,{children:"/usr/local/bin"})," by default. You can fix this by doing ",(0,s.jsx)(n.code,{children:"mkdir /usr/local/bin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Homebrew installs ",(0,s.jsx)(n.em,{children:"everything"})," in its own directory structure. If you're building things from source that rely on libraries from libvmaf, libjxl, etc, make sure to copy them from ",(0,s.jsx)(n.code,{children:"/opt/homebrew/lib"})," to ",(0,s.jsx)(n.code,{children:"/usr/local/lib"}),". Finding them is a matter of ",(0,s.jsx)(n.code,{children:'ls | grep "keyword"'})," & copying what looks reasonable to be associated with the tool you're using."]}),"\n",(0,s.jsx)(n.li,{children:"Building most things from source will have instructions for *nix which work for both macOS & Linux. Even if it says Linux, there's a good chance it'll work on macOS as well, & it is always worth trying Linux build instructions on Mac. aom-av1-lavish requires some additional steps, though."}),"\n"]}),(0,s.jsx)(n.p,{children:"If you want to make the most out of your hardware & eke out every last drop of quality, it may be worth building aom-av1-lavish from source. The first step is to clone it from the Endless Merging branch, which contains all of the latest lavish improvements:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish\n"})}),(0,s.jsxs)(n.p,{children:["Now, you need to make some manual changes to the source code until ",(0,s.jsx)(n.a,{href:"https://github.com/Clybius/aom-av1-lavish/pull/1/files",children:"this commit"})," is merged to fix build errors."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the line ",(0,s.jsx)(n.code,{children:'#include "aq_variance.h"'})," at line 19 in ",(0,s.jsx)(n.code,{children:"av1/encoder/encodeframe_utils.c"})]}),"\n",(0,s.jsxs)(n.li,{children:["Comment out line 2546 in ",(0,s.jsx)(n.code,{children:"av1/encoder/speed_features.c"}),". This line is ",(0,s.jsx)(n.code,{children:"const int qindex_thresh_cdef_sf_s1_s3_l2[2] = { 92, 48 };"})," & becomes ",(0,s.jsx)(n.code,{children:"// const int qindex_thresh_cdef_sf_s1_s3_l2[2] = { 92, 48 };"}),"."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Now you can continue to build according to the Linux instructions below. Obviously you'll need cmake, which you can install with homebrew along with any other tools. While still in the ",(0,s.jsx)(n.code,{children:"aom-av1-lavish"})," directory:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mkdir -p aom_build && cd aom_build\ncmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\nmake -j$(nproc)\n# This may need to be run as root. If it doesn\'t work properly, you can always copy the binary into /usr/local/bin manually:\nmake install\n'})}),(0,s.jsxs)(n.p,{children:["Now you can run ",(0,s.jsx)(n.code,{children:'aomenc --help | grep "AOMedia" -C 3'})," to see if lavish installed. If you're getting the same output as above, you may need to copy the ",(0,s.jsx)(n.code,{children:"aomenc"})," executable to ",(0,s.jsx)(n.code,{children:"/opt/local/bin"}),", ",(0,s.jsx)(n.code,{children:"/usr/local/bin"}),", & ",(0,s.jsx)(n.code,{children:"/opt/homebrew/bin"})," if you already installed mainline aomenc. Running the version info command again, the correct output should look something like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% aomenc --help | grep AOMedia -C 3\n\nIncluded encoders:\n\n    av1    - AOMedia Project AV1 Encoder Psy v3.6.0 (default)\n\n        Use --codec to switch to a non-default encoder.\n"})}),(0,s.jsxs)(n.p,{children:["Notice how it says ",(0,s.jsx)(n.code,{children:"AOMedia Project AV1 Encoder Psy"})," instead of ",(0,s.jsx)(n.code,{children:"AOMedia Project AV1 Encoder"}),". You should be all set after this to start using aom-av1-lavish."]})]}),(0,s.jsxs)(o.Z,{value:"wind",label:"Windows",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The Easy Way:"})," Download the pre-built versions, which can be found below (Current as of Sept 6, 2023):"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://autumn.revolt.chat/attachments/download/-2EiZW1edcT9anApFZ1PJBEber-pJ6z02NiQBjbr28",children:"https://autumn.revolt.chat/attachments/download/-2EiZW1edcT9anApFZ1PJBEber-pJ6z02NiQBjbr28"})}),(0,s.jsxs)(n.p,{children:["Join the ",(0,s.jsx)(n.a,{href:"https://discord.gg/vpREHAvYvh",children:"AV1 Discord server"})," and head to #community-builds for updated versions, you can opt to compile it yourself with the instructions below."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The Compiling Route:"})}),(0,s.jsxs)(n.p,{children:["Full credits to u/Turbulent-Bend-7416 on Reddit for ",(0,s.jsx)(n.a,{href:"https://www.reddit.com/r/AV1/comments/s6eh5f/how_to_compile_av1_in_windows_without_crying",children:"this post"})," on how to compile aomenc."]}),(0,s.jsxs)(n.p,{children:["This guide requires ",(0,s.jsx)(n.strong,{children:"MSYS2"}),", specifically ",(0,s.jsx)(n.strong,{children:"MinGW-W64"}),". Install it if you haven't yet."]}),(0,s.jsx)(n.p,{children:"First, install the required dependencies:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -S cmake git perl yasm nasm python3 doxygen mingw-w64-x86_64-gcc mingw-w64-x86_64-cmake base-devel\n"})}),(0,s.jsx)(n.p,{children:"Now, clone the aom-av1-lavish repo in the Endless_Merging branch and create the folders:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish && mkdir -p aom_build && cd aom_build\n"})}),(0,s.jsx)(n.p,{children:"Then we can start compiling with some build optimizations for your CPU:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\nmake -j$(nproc)\n'})}),(0,s.jsxs)(n.p,{children:["The resulting binary will be available within your home folder of the location where you installed MSYS2 (usually ",(0,s.jsx)(n.code,{children:"C:"}),"), navigate there and the to the aom-av1-lavish folder and it should be there."]}),(0,s.jsx)(n.p,{children:'Built files should be in the "Debug" folder'}),(0,s.jsx)(n.p,{children:"Don't share binaries compiled with native CPU optimizations unless the person you're sharing to has the same CPU architecture, as this will lead to missing instructions being used and slowing down encode speeds."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"av1-encoding",children:"AV1 Encoding"}),"\n",(0,s.jsxs)(n.p,{children:["Simple Y4M input with CQ 22, 1 pass, and raw ",(0,s.jsx)(n.code,{children:".ivf"})," bitstream output:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aomenc --end-usage=q --cq-level=32 --bit-depth=10 --passes=1 --ivf -o output.ivf input.y4m\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pipe from FFmpeg:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=1 --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pipe from FFmpeg, 2-pass:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=2 --pass=1 --fpf-log=aom-pass.log  --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=2 --pass=2 --fpf-log=aom-pass.log  --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The way aomenc was developed requires 2-pass to take full advantage of its efficiency which include better rate controls and encoding features. So always use 2 passes when encoding."})}),"\n",(0,s.jsx)(n.h3,{id:"avif-encoding",children:"AVIF Encoding"}),"\n",(0,s.jsx)(n.p,{children:"Using aomenc through avifenc is widely considered to be the best way to encode AVIF images, as SVT-AV1 only supports 4:2:0 chroma subsampling, rav1e isn't fast enough for still images, & the libaom team have put more effort into intra coding than the teams responsible for producing the other prominent open source AV1 encoders. A sample command for encoding AVIF looks like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"avifenc -c aom -s 4 -j 8 -d 10 -y 444 --min 1 --max 63 -a end-usage=q -a cq-level=16 -a tune=ssim [input] output.avif"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-c aom"})," is the encoder"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-s 4"})," is the speed. Speeds 4 & below offer the best compression quality at the expense of longer encode times."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-j 8"})," is the number of threads the encoder is allowed to use. Increasing this past 12 will sometimes hurt encode times, as AVIF encoding via aomenc doesn't parallelize perfectly. Test using a speed benchmark to verify which value works best for you."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d 10"})," is the bit depth. Specifying a value below 10 isn't recommended, as it will hurt coding efficiency even with an 8-bit source image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-y 444"})," is the chroma subsampling mode. 4:4:4 chroma subsampling tends to provide better compression than 4:2:0 with AVIF, though on some images 4:2:0 chroma subsampling might be the better choice."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cq-level=16"})," is how you specify quality. Lower values correspond to higher quality & filesize, while higher values mean a smaller, lower-quality output is desired. This is preceded by ",(0,s.jsx)(n.code,{children:"-a"})," because it is an aomenc option, not an avifenc one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tune=ssim"})," is how the encoder handles RDO (rate-distortion optimization). This may be redundant with the default aomenc parameters, but specifying doesn't hurt to avoid an unintended change if a default is modified sometime in the future."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,s.jsxs)(n.p,{children:["aomenc unfortunately lacks the ability to take advantage of multiple threads, so therefore a tool like ",(0,s.jsx)(n.a,{href:"/docs/utilities/Av1an",children:"Av1an"})," will be needed for parallelization. The parameters shown will be biased towards Av1an usage, so if you plan on using standalone aomenc then adjust as needed."]}),"\n",(0,s.jsx)(n.p,{children:"Here are some recommended parameters:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--bit-depth=10 --cpu-used=4 --end-usage=q --cq-level=24 --threads=2 --tile-columns=0 --tile-rows=0 --lag-in-frames=64 --tune-content=psy --tune=ssim --enable-keyframe-filtering=1 --disable-kf --kf-max-dist=9999 --enable-qm=1 --deltaq-mode=0 --aq-mode=0 --quant-b-adapt=1 --enable-fwd-kf=0 --arnr-strength=1 --sb-size=dynamic --enable-dnl-denoising=0 --denoise-noise-level=8"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's break it down shall we."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--bit-depth=10"})," We're using 10bit because it makes the video smaller and reduces banding."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--cpu-used=4"})," This is the preset which ranges from 0-9, you can go to 3 if you want more efficiency, 2 if you have a lot of time, 4 is the sweet spot, and 6 if you want speed. Don't go above 6 (Worst efficiency) or even 0 (It would take WEEKS to finish)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--end-usage=q --cq-level=24"})," This specifies that we are going to use a knockoff version of CRF level similar to x264/x265 encoders, in this case CRF 24."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--tile-columns=0 --tile-rows=0"})," This is the tiles options, where the encoder splits the videos into tiles to encode faster. See the image below (Yellow lines):"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/tiling_av1.avif?token=GHSAT0AAAAAACEZPDXIZARY5MGSTJW4SI22ZHY636A",type:"image/avif"}),(0,s.jsx)("img",{src:"https://autumn.revolt.chat/attachments/HwhZjoDsdzLZsJM2mjzX7lEDmJn1xcYNdrQqmOxPYW/tiling_av1.jpeg",alt:"Tiling",loading:"lazy"})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Tile usage",type:"note",children:[(0,s.jsxs)(n.p,{children:["Do NOT use tiles for 1080p and below, use 1 ",(0,s.jsx)(n.code,{children:"tile-columns"})," at 1440p (2K), 2 ",(0,s.jsx)(n.code,{children:"tile-columns"})," and 1 ",(0,s.jsx)(n.code,{children:"tile-rows"})," for 2160p (4K)."]}),(0,s.jsxs)(n.p,{children:["If you would like an easy way to calculate the necessary number of tiles for your video, you can use ",(0,s.jsx)(n.a,{href:"https://autocompressor.net/tools/av1-calculator",children:"the AV1 Encoding Calculator"})," online or run ",(0,s.jsx)(n.a,{href:"https://github.com/gianni-rosato/av1-tile-calc",children:"this local tile calculator"}),"."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--lag-in-frames=64"})," Similar to x264/x265 ",(0,s.jsx)(n.code,{children:"rc-lookahead"}),". Sets a number of frames to look ahead for frametype and ratecontrol, allowing for better compression decision making. Setting to a value greater than 64 is generally not considered useful."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--aq-mode=0"})," adaptive quantization mode, a mostly debatable area nowadays. 0 is better most of the time but some say 1 is also good."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--tune-content=psy --tune=ssim"})," As the name suggests they are tunes that affect the video output, for the better, and for the worst."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Do not use ",(0,s.jsx)(n.code,{children:"tune-content=psy"})," if you encode live action above ",(0,s.jsx)(n.code,{children:"cq-level=30"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you use any of the VMAF tunes, you need to specify ",(0,s.jsx)(n.code,{children:"--vmaf-model-path="})," to where you put VMAF models in."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-keyframe-filtering=1"})," We're setting it to 1 because of compatibility reasons, 2 is more efficient but there are seeking issues and FFmpeg can't input it."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--sb-size=dynamic"})," Allows the encoder to use 128x128 block partitioning besides 64x64 which gives an efficiency boost."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--deltaq-mode=0"})," set to 0 b its better"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--arnr-strength=1"})," Controls how strong the filtering (smoothing) will be, always been a hot topic. Most agree on the default of 4. Others think 1 is good for 3D Pixar CGI-like and 2D animation and 4 for live action content, and a higher value for lower bitrate encodes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-kf --enable-fwd-kf=0"})," We're disabling keyframes cause Av1an already did scene detection, so we wont have to. Plus it speeds things up."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--kf-max-dist=9999"})," Maximum keyframe interval, we're setting it at the highest possible value since Av1an's scene detection keyframe interval is already 240 by default"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-chroma-deltaq=1 --enable-qm=1 --quant-b-adapt=1"})," Parameters that give you free efficiency boost, ignore it."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-dnl-denoising=0"})," Disables the encoder's built-in denoising technique when grain synthesis is enabled, you can optionally set it to 1 when you have a pretty noisy video since it works quite well (NLMeans is the denoiser used)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--denoise-noise-level=8"})," AV1 grain synthesis, which is a technique where the encoder puts fake grain in so it looks more natural and potentially hiding video artifacts (cause grain is hard to encode and explodes bitrate usage because of their randomness). Don't attempt to use it at high values (>12) since it creates noticeable grain patterns."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Alternative",type:"info",children:(0,s.jsxs)(n.p,{children:["You can use photon noise tables as an alternative, which is also conveniently available in Av1an as ",(0,s.jsx)(n.code,{children:"--photon-noise=X"})]})}),"\n",(0,s.jsx)(n.h2,{id:"tips--tricks",children:"Tips & Tricks"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"--butteraugli-resize-factor=2"})," if you use any of the butteraugli-based tunes to speed it up without much losses (lavish, butteraugli) and ",(0,s.jsx)(n.code,{children:"--butteraugli-intensity-target=250"})," to match the content light level."]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"--arnr-maxframes"})," to set max reference frames that will be used to filter the encode, higher values would make the video blurrier at high fidelity but look better at lower bitrates."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);