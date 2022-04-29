import{_ as k,r as d,o as l,c as _,a as o,w as t,F as u,d as a,g as v,n as i,i as f,f as p,bu as j,aT as z,k as g,b as y}from"../app.cf0934eb.js";const C={},P=a("Tag 1"),V=a("Tag 2"),M=a("Tag 3"),B=a("Tag 4"),D=a("Tag 5");function I(b,n){const s=d("el-tag");return l(),_(u,null,[o(s,null,{default:t(()=>[P]),_:1}),o(s,{class:"ml-2",type:"success"},{default:t(()=>[V]),_:1}),o(s,{class:"ml-2",type:"info"},{default:t(()=>[M]),_:1}),o(s,{class:"ml-2",type:"warning"},{default:t(()=>[B]),_:1}),o(s,{class:"ml-2",type:"danger"},{default:t(()=>[D]),_:1})],64)}var N=k(C,[["render",I]]),re=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const K=a("Checked"),L=a("Toggle me"),F=v({setup(b){const n=i(!1),s=r=>{n.value=r};return(r,c)=>{const e=d("el-check-tag");return l(),_("div",null,[o(e,{checked:"",style:{"margin-right":"8px"}},{default:t(()=>[K]),_:1}),o(e,{checked:n.value,onChange:s},{default:t(()=>[L]),_:1},8,["checked"])])}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const R=a(" + New Tag "),E=v({setup(b){const n=i(""),s=i(["Tag 1","Tag 2","Tag 3"]),r=i(!1),c=i(),e=x=>{s.value.splice(s.value.indexOf(x),1)},$=()=>{r.value=!0,z(()=>{c.value.input.focus()})},h=()=>{n.value&&s.value.push(n.value),r.value=!1,n.value=""};return(x,T)=>{const w=d("el-tag"),S=d("el-input"),O=d("el-button");return l(),_(u,null,[(l(!0),_(u,null,f(s.value,m=>(l(),p(w,{key:m,class:"mx-1",closable:"","disable-transitions":!1,onClose:ce=>e(m)},{default:t(()=>[a(g(m),1)]),_:2},1032,["onClose"]))),128)),r.value?(l(),p(S,{key:0,ref_key:"InputRef",ref:c,modelValue:n.value,"onUpdate:modelValue":T[0]||(T[0]=m=>n.value=m),class:"ml-1 w-20",size:"small",onKeyup:j(h,["enter"]),onBlur:h},null,8,["modelValue","onKeyup"])):(l(),p(O,{key:1,class:"button-new-tag ml-1",size:"small",onClick:$},{default:t(()=>[R]),_:1}))],64)}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const U=v({setup(b){const n=i([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]);return(s,r)=>{const c=d("el-tag");return l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.name,class:"mx-1",closable:"",type:e.type},{default:t(()=>[a(g(e.name),1)]),_:2},1032,["type"]))),128)}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const q={class:"flex flex-wrap gap-2 my-2"},A={class:"flex flex-wrap gap-2"},G={class:"flex flex-wrap gap-2 my-2"},H=v({setup(b){const n=i([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(s,r)=>{const c=d("el-tag");return l(),_(u,null,[y("div",q,[(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,type:e.type,class:"mx-1",effect:"dark",round:""},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128))]),y("div",A,[(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,type:e.type,class:"mx-1",effect:"light",round:""},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128))]),y("div",G,[(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,type:e.type,class:"mx-1",effect:"plain",round:""},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var ge=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const J={},Q=a("Large"),W=a("Default"),X=a("Small"),Y=a("Large"),Z=a("Default"),ee=a("Small");function le(b,n){const s=d("el-tag"),r=d("el-row");return l(),_(u,null,[o(r,null,{default:t(()=>[o(s,{class:"mx-1",size:"large"},{default:t(()=>[Q]),_:1}),o(s,{class:"mx-1"},{default:t(()=>[W]),_:1}),o(s,{class:"mx-1",size:"small"},{default:t(()=>[X]),_:1})]),_:1}),o(r,{class:"mt-4"},{default:t(()=>[o(s,{class:"mx-1",size:"large",closable:""},{default:t(()=>[Y]),_:1}),o(s,{class:"mx-1",closable:""},{default:t(()=>[Z]),_:1}),o(s,{class:"mx-1",size:"small",closable:""},{default:t(()=>[ee]),_:1})]),_:1})],64)}var te=k(J,[["render",le]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));const ae={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},se=y("span",{class:"tag-group__title m-1 line-height-2"},"Dark",-1),ne={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},oe=y("span",{class:"tag-group__title m-1"},"Plain",-1),_e=v({setup(b){const n=i([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(s,r)=>{const c=d("el-tag");return l(),_(u,null,[y("div",ae,[se,(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,type:e.type,class:"mx-1",effect:"dark"},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128)),(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,type:e.type,class:"mx-1",effect:"dark",closable:""},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128))]),y("div",ne,[oe,(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,class:"mx-1",type:e.type,effect:"plain"},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128)),(l(!0),_(u,null,f(n.value,e=>(l(),p(c,{key:e.label,class:"mx-1",type:e.type,effect:"plain",closable:""},{default:t(()=>[a(g(e.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));export{re as _,pe as a,de as b,fe as c,ge as d,ie as e,ye as f};