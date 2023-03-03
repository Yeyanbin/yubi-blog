import{_ as s,c as n,o as a,a as l}from"./app.6cebd806.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Transition","slug":"transition","link":"#transition","children":[]}],"relativePath":"docs/css&html/0.css动画之transition.md","lastUpdated":1677180519000}'),t={name:"docs/css&html/0.css动画之transition.md"},i=l(`<h3 id="transition" tabindex="-1">Transition <a class="header-anchor" href="#transition" aria-hidden="true">#</a></h3><blockquote><p>在 css3引入Transtion（过渡）这个概念之前，css是没有时间轴的。也就是说，所有状态的变化都是即时完成。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 例如</span></span>
<span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 15px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 15px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">img:hover{</span></span>
<span class="line"><span style="color:#A6ACCD;">    height:450px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width:450px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="transition-1" tabindex="-1">transition <a class="header-anchor" href="#transition-1" aria-hidden="true">#</a></h5><p>transition的作用在于，指定状态变化所需要的时间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 也可以这样, height变化需要1s，width瞬间完成</span></span>
<span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: 1s height;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="transition-delay" tabindex="-1">transition-delay <a class="header-anchor" href="#transition-delay" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// width和height一起变化</span></span>
<span class="line"><span style="color:#A6ACCD;">img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    transtion: 1s height, 1s 1s width;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    transtion: 1s height, 1s 1s width;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="transition-timing-function" tabindex="-1">transition-timing-function <a class="header-anchor" href="#transition-timing-function" aria-hidden="true">#</a></h5><p>transition的状态变化速度</p><table><thead><tr><th>状态</th><th>作用</th></tr></thead><tbody><tr><td>linear</td><td>匀速</td></tr><tr><td>ease-in</td><td>加速</td></tr><tr><td>ease-out</td><td>减速</td></tr><tr><td>cubic-bezier函数</td><td>自定义速度模式，贝塞尔曲线</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: 1s ease;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="属性拆分" tabindex="-1">属性拆分 <a class="header-anchor" href="#属性拆分" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: 1s 1s height ease;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 等价于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition-property: height;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition-duration: 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition-delay: 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition-timing-function: ease;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="transition的注意事项和局限性" tabindex="-1">transition的注意事项和局限性 <a class="header-anchor" href="#transition的注意事项和局限性" aria-hidden="true">#</a></h4><ul><li>注意事项</li></ul><ol><li>目前，各大浏览器（包括IE 10）都已经支持无前缀的transition，所以transition已经可以很安全地不加浏览器前缀。</li><li>不是所有的CSS属性都支持transition，完整的列表查看这里，以及具体的效果。</li><li>transition需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height从0px变化到100px，transition可以算出中间状态。但是，transition没法算出0px到auto的中间状态，也就是说，如果开始或结束的设置是height: auto，那么就不会产生动画效果。类似的情况还有，display: none到block，background: url(foo.jpg)到url(bar.jpg)等等</li></ol><ul><li>局限性，其优点在于简单易用 <ol><li>transition需要事件触发，没办法在网页加载时自动发生</li><li>transition是一次性的，不能重复发生，除非一再触发。</li><li>transition只能定义开始状态和结束状态，不能定义中间状态。</li><li>一条transition规则，只能定义一个属性的变化，不能涉及多个属性。</li></ol></li></ul>`,18),p=[i];function e(o,c,r,d,C,A){return a(),n("div",null,p)}const D=s(t,[["render",e]]);export{y as __pageData,D as default};
