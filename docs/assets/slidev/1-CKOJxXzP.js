import{A as _}from"../modules/unplugin-icons-BLfe2XiV.js";import{d as f,z as b,o as u,b as v,e as n,f as h,h as x,c as g,k as $,B as a,l as k,g as C,q as y,s as B,a7 as c}from"../modules/vue-5f8YWAHd.js";import{u as p,p as w,f as N}from"./context-GBBOVTOM.js";import{ab as l}from"../index-B5G1tGyL.js";import"../modules/shiki-Bzt_bDtX.js";function d(e){return e.startsWith("/")?"/RobustCode"+e.slice(1):e}function z(e,s=!1){const t=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const P={class:"my-auto w-full"},R=f({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){p();const s=e,t=b(()=>z(s.background,!0));return(o,r)=>(u(),v("div",{class:"slidev-layout cover text-center",style:x(t.value)},[n("div",P,[h(o.$slots,"default")])],4))}}),S=n("h1",null,[c("AI/ロボット開発のための"),n("br"),c("ロバストコード入門")],-1),V=n("p",null,"菅野研究室 ハンド班 山田泰",-1),A={class:"abs-br m-6 flex gap-2"},j={__name:"1",setup(e){w(l);const{$slidev:s,$nav:t,$clicksContext:o,$clicks:r,$page:E,$renderContext:G,$frontmatter:I}=p();return(O,i)=>{const m=_;return u(),g(R,y(B(a(N)(a(l),0))),{default:$(()=>[S,V,n("div",A,[n("button",{onClick:i[0]||(i[0]=H=>a(s).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[k(m)]),C(` <a href="https://github.com/GeminiNinth/enpra_RobustCode" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a> `)])]),_:1},16)}}};export{j as default};
