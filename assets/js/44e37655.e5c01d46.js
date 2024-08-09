"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5958],{6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(4848),i=n(8453),s=n(1470),a=n(9365);const l={title:"SSIMULACRA2",sidebar_position:1},o="SSIMULACRA2",c={id:"metrics/SSIMULACRA2",title:"SSIMULACRA2",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/metrics/SSIMULACRA2.mdx",sourceDirName:"metrics",slug:"/metrics/SSIMULACRA2",permalink:"/docs/metrics/SSIMULACRA2",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/metrics/SSIMULACRA2.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SSIMULACRA2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SSIM",permalink:"/docs/metrics/SSIM"},next:{title:"VMAF",permalink:"/docs/metrics/VMAF"}},u={},d=[{value:"Installing",id:"installing",level:2},{value:"Running",id:"running",level:2},{value:"On Images",id:"on-images",level:3},{value:"On Videos",id:"on-videos",level:3},{value:"Multithreading",id:"multithreading",level:4},{value:"Scoring",id:"scoring",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ssimulacra2",children:"SSIMULACRA2"})}),"\n",(0,r.jsx)(t.admonition,{title:"Under Maintenance",type:"info",children:(0,r.jsx)(t.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,r.jsxs)(t.p,{children:["SSIMULACRA 2 is a visual fidelity metric based on the concept of the multi-scale structural similarity index measure (MS-SSIM), computed in a perceptually relevant color space, adding two other (asymmetric) error maps, and aggregating using two different norms. It is currently the most reputable visual quality metric according to its correlation with subjective results, and is considered a very robust means of comparing encoders. It is debatable whether ",(0,r.jsx)(t.a,{href:"/docs/metrics/butteraugli",children:"Butteraugli"})," is better for very high fidelity, but SSIMULACRA 2 is considered the best for medium/low fidelity comparisons. Although it does not feature any inter-frame temporal awareness, it is still considered a very strong metric for video fidelity comparison nonetheless."]}),"\n",(0,r.jsxs)(t.p,{children:["While a ",(0,r.jsx)(t.a,{href:"https://github.com/cloudinary/ssimulacra2",children:"reference implementation by Cloudinary"})," exists,\nmost people will want to use ",(0,r.jsxs)(t.a,{href:"https://github.com/rust-av/ssimulacra2",children:["the rust implementation ",(0,r.jsx)(t.code,{children:"ssimulacra2_rs"})]}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installing",children:"Installing"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(a.A,{value:"cargo",label:"Cargo",default:!0,children:[(0,r.jsx)(t.p,{children:"To install ssimulacra2_rs using cargo, run this:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo install ssimulacra2_rs\n"})})]}),(0,r.jsxs)(a.A,{value:"archlinux",label:"Archlinux AUR",children:[(0,r.jsxs)(t.p,{children:["On archlinux, you may use the ",(0,r.jsx)(t.a,{href:"https://wiki.archlinux.org/title/Arch_User_Repository",children:"AUR"})," to install.\nSimply use your favorite AUR helper to install ",(0,r.jsx)(t.code,{children:"ssimulacra2_bin-git"})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"paru -S ssimulacra2_bin-git\n"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"running",children:"Running"}),"\n",(0,r.jsx)(t.h3,{id:"on-images",children:"On Images"}),"\n",(0,r.jsx)(t.p,{children:"Comparing images is simple, run this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ssimulacra2_rs image source.png distorted.png\n"})}),"\n",(0,r.jsx)(t.h3,{id:"on-videos",children:"On Videos"}),"\n",(0,r.jsx)(t.p,{children:"If you want to compare videos, run this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ssimulacra2_rs video source.mkv distorted.mkv\n"})}),"\n",(0,r.jsxs)(t.admonition,{title:"Graphical visualization",type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can optionally output a graph using the ",(0,r.jsx)(t.code,{children:"-g"})," parameter:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ssimulacra2_rs video source.mkv distorted.mkv -g\n"})})]}),"\n",(0,r.jsx)(t.h4,{id:"multithreading",children:"Multithreading"}),"\n",(0,r.jsxs)(t.p,{children:["Multithreading with ssimulacra2_rs works, but it scales badly.\nThis is likely due to memory bandwidth limitations.",(0,r.jsx)(t.br,{}),"\n","However, the speedup is worth it."]}),"\n",(0,r.jsxs)(t.p,{children:["To run multithreaded, use the ",(0,r.jsx)(t.code,{children:"--frame-threads"})," or ",(0,r.jsx)(t.code,{children:"-f"})," parameters.\nFor example, to run with 16 threads:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ssimulacra2_rs video source.mkv distorted.mkv -f 16\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Thread amount",type:"info",children:(0,r.jsx)(t.p,{children:"You should set the amount of threads to half of your actual thread count, as going any higher won't make a difference."})}),"\n",(0,r.jsx)(t.admonition,{title:"Memory limitation",type:"warning",children:(0,r.jsx)(t.p,{children:"If you have a small amount of system memory, you may encounter out of memory errors while running with multi-threading.\nIf that's the case, you need to lower the amount of threads."})}),"\n",(0,r.jsx)(t.h2,{id:"scoring",children:"Scoring"}),"\n",(0,r.jsx)(t.p,{children:"The score that ssimulacra2 outputs is simple:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Very high quality: ",(0,r.jsx)(t.code,{children:"90"})," and above"]}),"\n",(0,r.jsxs)(t.li,{children:["High quality: ",(0,r.jsx)(t.code,{children:"70"})," to ",(0,r.jsx)(t.code,{children:"90"})]}),"\n",(0,r.jsxs)(t.li,{children:["Medium quality: ",(0,r.jsx)(t.code,{children:"50"})," to ",(0,r.jsx)(t.code,{children:"70"})]}),"\n",(0,r.jsxs)(t.li,{children:["Low quality: Below ",(0,r.jsx)(t.code,{children:"50"})]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),i=n(4164),s=n(3104),a=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function A(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);