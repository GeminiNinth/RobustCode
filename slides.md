---
theme: seriph
background: https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title: AI/ロボット開発のためのロバストコード入門
css: style.css
info: |
  早稲田大学 創造理工 総合機械 菅野研究室でのエンプラにおけるB3用の授業資料
author: 山田泰
class: text-left
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'BIZ UDGothic'
level: 1
---


# AI/ロボット開発のための<br>ロバストコード入門

菅野研究室 ハンド班 山田泰

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/GeminiNinth/RobustCode" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


---

<Toc columns="1" maxDepth="1"/>

---
src: ./pages/introduction.md
---

---
src: ./pages/robustness.md
---

---
src: ./pages/how_to_robust.md
---

---
src: ./pages/debug.md
---

---
src: ./pages/test.md
---

---
src: ./pages/conclusion.md
---

