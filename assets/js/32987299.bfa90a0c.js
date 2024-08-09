"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7754],{5029:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const r={title:"Vapoursynth",sidebar_position:2},o="Vapoursynth",a={id:"filtering/vapoursynth",title:"Vapoursynth",description:"VapourSynth is an application for video manipulation. Or a plugin. Or a library. It\u2019s hard to tell because it has a core library written in C++ and a Python module to allow video scripts to be created.",source:"@site/docs/filtering/vapoursynth.mdx",sourceDirName:"filtering",slug:"/filtering/vapoursynth",permalink:"/docs/filtering/vapoursynth",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/filtering/vapoursynth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Vapoursynth",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WebVTT",permalink:"/docs/subtitles/webvtt"},next:{title:"Basics of Filtering",permalink:"/docs/filtering/basics"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Microsoft Windows",id:"microsoft-windows",level:3},{value:"Arch Linux",id:"arch-linux",level:3},{value:"Other Linux",id:"other-linux",level:3},{value:"Previewing",id:"previewing",level:2},{value:"Output",id:"output",level:2},{value:"Source Filters",id:"source-filters",level:2},{value:"LSmashSource",id:"lsmashsource",level:3},{value:"ffms2",id:"ffms2",level:3},{value:"BestSource",id:"bestsource",level:3}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"vapoursynth",children:"Vapoursynth"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"VapourSynth is an application for video manipulation. Or a plugin. Or a library. It\u2019s hard to tell because it has a core library written in C++ and a Python module to allow video scripts to be created."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Fredrik Mellbin, creator of VapourSynth"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/vs_edit_script.avif?token=GHSAT0AAAAAACEZPDXJ6SHSUQIMUOGQXQTEZHY7K4A",type:"image/avif"}),(0,t.jsx)("img",{src:"https://autumn.revolt.chat/attachments/g7DucEq3aRGWVH0MHQe-A21GkyDVln9IHzRlfjEYEh/vs_edit_script.png",alt:"Vapoursynth script",width:"520",height:"632"})]}),"\n"," ","\n",(0,t.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"In the realm of video processing, one will frequently encounter media with various quality issues. These can range from minor imperfections to significant degradation, including:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Excessive film grain or noise that significantly increases bitrate due to its unpredictable nature"}),"\n",(0,t.jsx)(i.li,{children:"Visible banding artifacts"}),"\n",(0,t.jsx)(i.li,{children:"Unwanted halos around objects"}),"\n",(0,t.jsx)(i.li,{children:"Interlacing issues in older, unrestored footage"}),"\n",(0,t.jsx)(i.li,{children:"Telecine artifacts from improper film-to-video conversion"}),"\n",(0,t.jsxs)(i.li,{children:["And more, on our ",(0,t.jsx)(i.a,{href:"/docs/introduction/video-artifacts",children:"video artifacts"})," page."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"To address these challenges, video filtering techniques are employed. Currently, there are three primary software frameworks used for video filtering:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://vapoursynth.com",children:"VapourSynth"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"http://avisynth.nl/index.php/Main_Page",children:"AviSynth"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"VapourSynth is designed as a 21st-century upgrade and rewrite of AviSynth, which was originally created by Ben Rudiak-Gould, Edwin van Eggelen, Klaus Post, Richard Berg, and Ian Brabham in May 2000. One of the most attractive features of this complete rewrite is its improved multithreading capability, an area where AviSynth struggled due to its aging infrastructure."}),"\n",(0,t.jsxs)(i.p,{children:["Some longtime AviSynth users are reluctant to switch to VapourSynth, preferring to stick with a familiar workflow. There is nothing wrong with this preference, as both tools have their merits in video processing; that being said, the Codec Wiki's ",(0,t.jsx)(i.em,{children:"Filtering"})," section focuses primarily on VapourSynth (and occaisonally FFmpeg). It is important to note that working with VapourSynth requires a basic understanding of Python, as the filtering process involves scripting."]}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i.h3,{id:"microsoft-windows",children:"Microsoft Windows"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["At the time of writing, Python 3.12 is required. This will change in the future so consult from ",(0,t.jsx)(i.a,{href:"http://www.vapoursynth.com/doc/installation.html",children:"their website"})]}),"\n",(0,t.jsxs)(i.li,{children:["Download the installer (",(0,t.jsx)(i.code,{children:".exe"}),") unless you require portability"]}),"\n",(0,t.jsx)(i.li,{children:"Install it"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,t.jsxs)(i.p,{children:["Currently, Arch is the best Linux distribution for working with Vapoursynth due to the fact that\nthe vast majority of filters and plugins are available in the AUR. This makes installing and updating filters easy.\nIf you are not already, we recommend using an AUR helper such as\n",(0,t.jsx)(i.a,{href:"https://github.com/Morganamilo/paru",children:"paru"})," or ",(0,t.jsx)(i.a,{href:"https://github.com/Jguer/yay",children:"yay"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["To install vapoursynth, simply install the ",(0,t.jsx)(i.code,{children:"vapoursynth"})," package from the official repositories using pacman or your preferred AUR helper."]}),"\n",(0,t.jsxs)(i.p,{children:["Plugins are all prefixed with ",(0,t.jsx)(i.code,{children:"vapoursynth-plugin-"}),", such as ",(0,t.jsx)(i.code,{children:"vapoursynth-plugin-lsmashsource-git"}),", and as such can be discovered easily."]}),"\n",(0,t.jsx)(i.h3,{id:"other-linux",children:"Other Linux"}),"\n",(0,t.jsx)(i.p,{children:"Vapoursynth is supported on all Linux distributions. Installation methods may vary by distribution."}),"\n",(0,t.jsx)(i.p,{children:"Contributions would be helpful to provide instructions for more distributions."}),"\n",(0,t.jsx)(i.h2,{id:"previewing",children:"Previewing"}),"\n",(0,t.jsx)(i.p,{children:"There are currently two leading previewers for Vapoursynth. If you want to preview your scripts with capabilities such as seeking,\nyou will need to use one of these applications."}),"\n",(0,t.jsxs)(i.p,{children:["The first is YomkioR's ",(0,t.jsx)(i.a,{href:"https://github.com/YomikoR/VapourSynth-Editor/",children:"Vapoursynth Editor"}),", which includes a built-in code editor alongside a video previewer.\nThis makes it extremely easy to set up for users who are new to Vapoursynth."]}),"\n",(0,t.jsxs)(i.p,{children:["The second is JET's fork of ",(0,t.jsx)(i.a,{href:"https://github.com/Jaded-Encoding-Thaumaturgy/vs-preview",children:"vs-preview"}),", which is a standalone previewer with utilities for\ntasks such as cropping, screenshotting, and uploading comparisons. This tool is more advanced than Vapoursynth Editor, but does not include an editor,\nso you will need to pair it with an editor such as Visual Studio Code. The Github for vs-preview includes instructions for setting this up."]}),"\n",(0,t.jsx)(i.h2,{id:"output",children:"Output"}),"\n",(0,t.jsxs)(i.p,{children:["Vapoursynth provides a command-line utility called ",(0,t.jsx)(i.code,{children:"vspipe"})," for outputting filtered video. Using this utility to pipe y4m video\nis the most common way to use Vapoursynth with an encoder."]}),"\n",(0,t.jsx)(i.p,{children:"For example, the following command would pipe the output from a Vapoursynth script into x264:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"vspipe -c y4m input.vpy - | x264 --demuxer y4m -o output.mkv -"})}),"\n",(0,t.jsx)(i.h2,{id:"source-filters",children:"Source Filters"}),"\n",(0,t.jsx)(i.p,{children:"For Vapoursynth to produce output, it has to load a video in some way. This way is with source filters."}),"\n",(0,t.jsxs)(i.p,{children:["The most basic method is using ",(0,t.jsx)(i.code,{children:"BlankClip"})," to create a clip of a certain resolution and frame rate. For example, the following\nscript would give us a blank clip at 640x480:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.std.BlankClip(width=640, height=480)\n\nclip.set_output(0)\n"})}),"\n",(0,t.jsx)(i.p,{children:"But a plain black video isn't very useful, is it? We want to load real videos so we can do filtering on them.\nFor this, there are a few different source filters we can look at."}),"\n",(0,t.jsx)(i.h3,{id:"lsmashsource",children:"LSmashSource"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/HomeOfAviSynthPlusEvolution/L-SMASH-Works",children:"LSmashSource"})," is a source filter using lsmash as the underlying source library.\nIt is the most commonly used source filter, and is generally reliable for most source formats, though may have frame accuracy issues\nwhen seeking with certain input formats, such as VC-1. If this is a concern, it can be recommended to encode to lossless first before\nusing any encoding methods that require seeking, such as av1an."]}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of loading a video file using LSmashSource:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.lsmas.LWLibavSource(source="input.mkv")\n\nclip.set_output(0)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"ffms2",children:"ffms2"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/FFMS/ffms2",children:"ffms2"})," is a source filter based on ffmpeg. It generally should give the same results as LSmashSource,\nespecially when using the git version which has fixed support for newer formats such as AV1. If having issues with a source file with LSmashSource,\nffms2 can be a good fallback to try."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.ffms2.Source(source="input.mkv")\n\nclip.set_output(0)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"bestsource",children:"BestSource"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/vapoursynth/bestsource/",children:"BestSource"})," is also based on ffmpeg, but uses additional techniques\nto ensure frame accuracy in all scenarios with all input formats. The downside is that it must decode the entire video\nduring indexing, which means the first load of a given video will take longer. Subsequent loads will be quick, because\nBestSource caches the index in a file."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.bs.VideoSource(\n    source="input.mkv",\n    cachepath="/"\n)\n\nclip.set_output(0)\n'})}),"\n",(0,t.jsxs)(i.p,{children:["We add the ",(0,t.jsx)(i.code,{children:'cachepath="/"'})," setting to emulate the behavior of the other source filters, which is to place the index file next to the source video.\nThis helps with portability and cleaning up after ourselves. The default behavior is to place the index file in a temporary directory local to the machine."]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);