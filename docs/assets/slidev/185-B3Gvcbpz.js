import{_ as t}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-MKX1qXw4.js";import{o as h,c as k,k as a,l as p,m as r,q as c,s as d,B as l,e as s,a7 as i}from"../modules/vue-5f8YWAHd.js";import{I as o}from"./default-BtheRtPX.js";import{de as n}from"../index-Bz6hXiy0.js";import{p as m,u as A,f}from"./context-DLMsinnS.js";import"../modules/unplugin-icons-CldMInu4.js";import"../modules/shiki-Bzt_bDtX.js";const D=s("p",null,"ここに、以下の要件を追加することを考えよう。",-1),g=s("ul",null,[s("li",null,"カエルという動物を追加"),s("li",null,"カエルは「鳴く」「ジャンプ」という行動を持つ"),s("li",null,"カエルとイヌに「泳ぐ」という行動を加える")],-1),E=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-diff"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ class Swimmable:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+   # 省略")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ class Frog(Animal, Cryable, Jumpable, Swimmable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    # 省略")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+   def jump(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},'+     print("カエルぴょこぴょこ")')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+   def cry(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},'+     print("ケロケロ")')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+   def swim(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},'+     print("カエルさん、すいすい～")')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"- class Dog(Animal, Cryable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ class Dog(Animal, Cryable, Swimmable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    # 省略")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    def cry(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},'      print("ワン")')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+   def swim(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},'+     print("イヌかき、じゃばじゃば～")')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  class AnimalAction:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    # 省略")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    def action(self):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"      if isinstance(self.animal, Cryable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        self.animal.cry()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"      if isinstance(self.animal, Jumpable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        self.animal.jump()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+     if isinstance(self.animal, Swimmable):")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+       self.animal.swim()")])])],-1),y=s("p",null,"変更を加える箇所は明確で簡単。",-1),j={__name:"185",setup(u){return m(n),A(),(_,B)=>{const e=t;return h(),k(o,c(d(l(f)(l(n),184))),{default:a(()=>[D,g,p(e,r({lines:!0,maxHeight:"275px"},{ranges:["*"]}),{default:a(()=>[E]),_:1},16),y]),_:1},16)}}};export{j as default};
