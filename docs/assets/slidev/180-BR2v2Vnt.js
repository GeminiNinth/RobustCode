import{_ as t}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C3h9LjwT.js";import{o as n,c as e,k as a,l as r,m as p,q as d,s as g,B as l,e as i,a7 as s}from"../modules/vue-5f8YWAHd.js";import{I as y}from"./default-B_XGSeiy.js";import{d9 as h}from"../index-B5G1tGyL.js";import{p as A,u as c,f as o}from"./context-GBBOVTOM.js";import"../modules/unplugin-icons-BLfe2XiV.js";import"../modules/shiki-Bzt_bDtX.js";const D=i("p",null,[i("code",null,"Car"),s("クラスの問題は、"),i("code",null,"GasolineEngine"),s("インスタンスや"),i("code",null,"ElectricMotor"),s("インスタンスを"),i("code",null,"Car"),s("クラス内で生成している点。")],-1),E=i("p",null,[s("発動機関連のクラスを"),i("b",{class:"warn"},"内部で生成する"),s("のではなく"),i("b",{class:"safe"},"外部から受け取る"),s("ことを検討しよう。")],-1),B=i("p",null,[s("これを達成するために、継承を用いて"),i("b",{class:"safe"},"「エンジン」の抽象化"),s("を行う。")],-1),C=i("p",null,[s("全ての発動機の親クラスとして"),i("code",null,"PowerUnit"),s("クラスを作成し"),i("code",null,"GasolineEngine"),s("クラスと"),i("code",null,"ElectricMotor"),s("クラスを"),i("code",null,"PowerUnit"),s("クラスの子クラスとする。")],-1),_=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"class"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," PowerUnit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  # 省略")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"class"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," GasolineEngine"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"PowerUnit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  # 省略")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  def"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," start"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"エンジンを始動します"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"class"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," ElectricMotor"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"PowerUnit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  # 省略")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  def"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," start"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"モーターを始動します"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"class"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Car"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  def"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," __init__"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," engine"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," PowerUnit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"engine "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," engine")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  def"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," run"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    self"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"engine"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"start"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"車を走らせます"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# 使用例")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"gasoline_engine "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," GasolineEngine"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"gasoline_car "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," Car"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"gasoline_engine"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"gasoline_car"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"run"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"electric_motor "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ElectricMotor"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"electric_car "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," Car"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"electric_motor"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"electric_car"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"run"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")])])],-1),G={__name:"180",setup(f){return A(h),c(),(u,m)=>{const k=t;return n(),e(y,d(g(l(o)(l(h),179))),{default:a(()=>[D,E,B,C,r(k,p({lines:!0,maxHeight:"200px"},{ranges:["*","1-2","3-6,8-11","14"]}),{default:a(()=>[_]),_:1},16)]),_:1},16)}}};export{G as default};
