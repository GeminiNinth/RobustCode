import{_ as h}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C3h9LjwT.js";import{o as n,c as k,k as e,l as r,m as o,q as d,s as c,B as t,e as i,a7 as s}from"../modules/vue-5f8YWAHd.js";import{I as p}from"./default-B_XGSeiy.js";import{cu as a}from"../index-B5G1tGyL.js";import{p as g,u as A,f as m}from"./context-GBBOVTOM.js";import"../modules/unplugin-icons-BLfe2XiV.js";import"../modules/shiki-Bzt_bDtX.js";const u=i("p",null,[i("code",null,"HealthCheck"),s("クラスにとって"),i("code",null,"bmi"),s("計算は外部での演算結果なので"),i("b",{class:"warn"},[s("入力された"),i("code",null,"bmi"),s("が正否が不明")])],-1),B=i("p",null,[s("変数が"),i("code",null,"private"),s("で宣言されていると"),i("b",{class:"warn"},"外部から勝手に書き換えられる可能性"),s("がある")],-1),_=i("p",null,[i("code",null,"bmi"),s("は"),i("code",null,"weight"),s("と"),i("code",null,"height"),s("により変化する従属変数。"),i("code",null,"weight"),s("や"),i("code",null,"height"),s("の変更で"),i("code",null,"bmi"),s("も変更されるべき")],-1),y=i("p",null,[s("現状のコードは"),i("code",null,"bmi"),s("、"),i("code",null,"height"),s("、"),i("code",null,"weight"),s("が全て独立している状態")],-1),D=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-bash"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," weight = 60")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," height = 170")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," bmi = calc_bmi("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"weight,"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," height"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," health_check = HealthCheck("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},'"Taro"'),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},","),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," 20,"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," height,"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," weight,"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," bmi"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # 体重を変更")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," health_check.weight = 70 "),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# <- 体重が変更されたが、bmiは変更されず矛盾")])])],-1),V={__name:"140",setup(C){return g(a),A(),(f,b)=>{const l=h;return n(),k(p,d(c(t(m)(t(a),139))),{default:e(()=>[u,B,_,y,r(l,o({lines:!0},{ranges:["*","6,7"]}),{default:e(()=>[D]),_:1},16)]),_:1},16)}}};export{V as default};
