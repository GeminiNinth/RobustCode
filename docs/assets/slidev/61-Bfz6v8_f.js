import{_ as o}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C3h9LjwT.js";import{o as k,c as n,k as e,l as t,m as l,a7 as i,q as d,s as c,B as h,e as s}from"../modules/vue-5f8YWAHd.js";import{I as p}from"./default-B_XGSeiy.js";import{bf as r}from"../index-B5G1tGyL.js";import{p as _,u as f,f as g}from"./context-GBBOVTOM.js";import"../modules/unplugin-icons-BLfe2XiV.js";import"../modules/shiki-Bzt_bDtX.js";const u=s("p",null,[i("変数名が具体的であることで、万が一ロジックが間違っていたとしても"),s("b",{class:"safe"},"変数名からバグを見つけ出しやす くなる")],-1),m=s("p",null,[i("たとえば"),s("code",null,"calculate_bad"),i("関数のfor文内の二乗和を計算する処理を以下のように間違えたとする。")],-1),y=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-python"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"retval "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"+="),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," x"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"i"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")])])],-1),A=s("b",{class:"warn"},"変数名が空虚",-1),D=s("p",null,[i("これが、"),s("code",null,"calculate_good"),i("関数の変数名を利用していたらどうだろうか")],-1),E=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-python"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"squared_sum "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"+="),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," numbers"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"i"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")])])],-1),b=s("p",null,[s("code",null,"squared_sum"),i("なのに、二乗和を計算していないことが明らかになる。")],-1),T={__name:"61",setup(B){return _(r),f(),(v,C)=>{const a=o;return k(),n(p,d(c(h(g)(h(r),60))),{default:e(()=>[u,m,t(a,l({lines:!1},{ranges:["*"]}),{default:e(()=>[y]),_:1},16),A,i("すぎて、いま正しい計算を行っているのか、誤った計算を行っているのかが分からない。 "),D,t(a,l({lines:!1},{ranges:["*"]}),{default:e(()=>[E]),_:1},16),b]),_:1},16)}}};export{T as default};
