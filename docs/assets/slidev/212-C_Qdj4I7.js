import{o as a,c as s,k as r,q as n,s as c,B as t,e,a7 as o}from"../modules/vue-5f8YWAHd.js";import{I as u}from"./default-B_XGSeiy.js";import{dG as l}from"../index-B5G1tGyL.js";import{p as i,u as d,f as _}from"./context-GBBOVTOM.js";import"../modules/shiki-Bzt_bDtX.js";const p=e("p",null,[o("まだ各クラスがシンプルなので良いが"),e("b",{class:"warn"},"機能追加や仕様変更で巨大化していく"),o("と、"),e("code",null,"serialize()"),o("や"),e("code",null,"deserialize()"),o("が見つけづらくなる。")],-1),m=e("p",null,"仮に以下のニーズによりロジック変更が必要になった際",-1),f=e("p",null,[e("code",null,"DataLogger"),o("と"),e("code",null,"DataLoader"),o("の両方から"),e("b",{class:"warn"},"該当箇所を探し出す必要"),o("がある")],-1),h=e("ul",null,[e("li",null,"区切りはカンマでなくスペース"),e("li",null,[e("code",null,"整数値 → 文字列"),o("でなく"),e("code",null,"整数値 → 16進数"),o("変換に変更したい")])],-1),g=e("p",null,"ロジックの散逸を解決する手段は主に2通り",-1),x=e("ol",null,[e("li",null,"DataLoggerもDataLoaderも共通のクラスとしてまとめる"),e("li",null,"シリアライズに関わるロジックを1つのクラスとして独立させる")],-1),v={__name:"212",setup(L){return i(l),d(),(B,D)=>(a(),s(u,n(c(t(_)(t(l),211))),{default:r(()=>[p,m,f,h,g,x]),_:1},16))}};export{v as default};
