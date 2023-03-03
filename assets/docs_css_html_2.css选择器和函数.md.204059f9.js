import{_ as s,c as n,o as a,a as l}from"./app.6cebd806.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"函数","slug":"函数","link":"#函数","children":[]}],"relativePath":"docs/css&html/2.css选择器和函数.md","lastUpdated":1677180519000}'),p={name:"docs/css&html/2.css选择器和函数.md"},c=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1 {} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 同时具有 class1和class2</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1.class2 {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择class1后代的class2</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1 .class2 {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择所有的class1和class2</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1, class2 {} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 父标签是.class的所有.class标签</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1 &gt; .class2 {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 紧跟.class1的首个.class2</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1 + .class2 {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 前面有.class1的每个.class2</span></span>
<span class="line"><span style="color:#A6ACCD;">.class1 ~ .class2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择有attr1属性的所有元素</span></span>
<span class="line"><span style="color:#A6ACCD;">[attr1] {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择 attr1属性且值为value1的所有元素</span></span>
<span class="line"><span style="color:#A6ACCD;">[attr1=value1] {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择活动链接</span></span>
<span class="line"><span style="color:#A6ACCD;">a:active {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择没访问过的链接</span></span>
<span class="line"><span style="color:#A6ACCD;">a:link {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择已访问过的链接</span></span>
<span class="line"><span style="color:#A6ACCD;">a:visited {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 在每个.div1的内容后插入</span></span>
<span class="line"><span style="color:#A6ACCD;">.div1::after {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 在每个.div1的内容后插入</span></span>
<span class="line"><span style="color:#A6ACCD;">.div1::before {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 鼠标指针位于其上时</span></span>
<span class="line"><span style="color:#A6ACCD;">.div1:hover {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 获得焦点时</span></span>
<span class="line"><span style="color:#A6ACCD;">.div1:focus {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">attr() </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">calc() 计算css值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),e=[c];function o(t,C,A,i,r,y){return a(),n("div",null,e)}const _=s(p,[["render",o]]);export{d as __pageData,_ as default};
