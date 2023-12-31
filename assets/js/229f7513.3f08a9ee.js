"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8168],{5235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(5893),s=n(1151);const r={title:"WebVTT"},o="WebVTT",l={id:"subtitles/webvtt",title:"WebVTT",description:"WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the HTML \\ element, or embedded into a webm container.",source:"@site/docs/subtitles/webvtt.mdx",sourceDirName:"subtitles",slug:"/subtitles/webvtt",permalink:"/docs/subtitles/webvtt",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/subtitles/webvtt.mdx",tags:[],version:"current",frontMatter:{title:"WebVTT"},sidebar:"tutorialSidebar",previous:{title:"SRT",permalink:"/docs/subtitles/SRT"},next:{title:"Intro",permalink:"/docs/filtering/intro"}},c={},a=[{value:"Structure",id:"structure",level:2},{value:"Cue",id:"cue",level:3},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"webvtt",children:"WebVTT"}),"\n",(0,i.jsxs)(t.p,{children:["WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track",children:"HTML <track> element"}),", or embedded into a webm container."]}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.p,{children:["WebVTT is a simple, text-based format, based on SRT. All files start with the string\r\n",(0,i.jsx)(t.code,{children:"WEBVTT"}),", optionally, some text, then two new lines. That's where the\r\ndata we're interested in starts."]}),"\n",(0,i.jsx)(t.h3,{id:"cue",children:"Cue"}),"\n",(0,i.jsxs)(t.p,{children:["A WebVTT file is basically a bunch of cues. They can have a line with\r\nan ID, then they have to have a line specifying from where to where\r\nthe cue should be displayed like this: ",(0,i.jsx)(t.code,{children:"STARTTIME -> ENDTIME [optional settings go here]"}),", then all the text to be displayed goes after\r\nit. That text can have some HTML-like formatting in it. To learn about\r\nthem, see ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_cues",children:"the documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"WEBVTT"}),"\n",(0,i.jsx)(t.p,{children:"00:01.000 --\x3e 00:04.000"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Never drink liquid nitrogen."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"00:05.000 --\x3e 00:09.000"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It will perforate your stomach."}),"\n",(0,i.jsx)(t.li,{children:"You could die."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);