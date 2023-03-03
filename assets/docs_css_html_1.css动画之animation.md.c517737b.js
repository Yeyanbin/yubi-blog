import{_ as n,c as a,o as s,a as l}from"./app.6cebd806.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"animation","slug":"animation","link":"#animation","children":[]}],"relativePath":"docs/css&html/1.css动画之animation.md","lastUpdated":1677180519000}'),i={name:"docs/css&html/1.css动画之animation.md"},p=l(`<h3 id="animation" tabindex="-1">animation <a class="header-anchor" href="#animation" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">div:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation: 1s 1s rainbow linear 3 forwards normal;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这是一个简写形式，可以分解成各个单独的属性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">div:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-name: rainbow; // keyframes name</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-duration: 1s; // 动画时间</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-timing-function: linear; // </span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-delay: 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-fill-mode:forwards; // animation-fill-mode动画结束后的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-direction: normal; </span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-iteration-count: 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@keyframes rainbow {</span></span>
<span class="line"><span style="color:#A6ACCD;">  0% { background: #c00; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  50% { background: orange; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  100% { background: yellowgreen; }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>animation-direction</p><ul><li>动画循环播放时，每次都是从结束状态跳回到起始状态，再开始播放。animation-direction属性，可以改变这种行为。</li></ul></li><li><p>animation-timing-function 属性可接受以下值：</p><ul><li>ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）</li><li>linear - 规定从开始到结束的速度相同的动画</li><li>ease-in - 规定慢速开始的动画</li><li>ease-out - 规定慢速结束的动画</li><li>ease-in-out - 指定开始和结束较慢的动画</li><li>cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值</li></ul></li><li><p>animation-fill-mode 属性可接受以下值：</p><ul><li>none - 默认值。动画在执行之前或之后不会对元素应用任何样式。</li><li>forwards - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count）。</li><li>backwards - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。</li><li>both - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。</li></ul></li></ul><h5 id="animation-play-state" tabindex="-1">animation-play-state <a class="header-anchor" href="#animation-play-state" aria-hidden="true">#</a></h5><p>有时，动画播放过程中，会突然停止。这时，默认行为是跳回到动画的开始状态。</p><p>如果想让动画保持突然终止时的状态，就要使用animation-play-state属性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">div {</span></span>
<span class="line"><span style="color:#A6ACCD;">    animation: spin 1s linear infinite;</span></span>
<span class="line"><span style="color:#A6ACCD;">    animation-play-state: paused;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">div:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-play-state: running;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 上面的代码指定，没有鼠标没有悬停时，动画状态是暂停；一旦悬停，动画状态改为继续播放。效果如下。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),e=[p];function o(t,c,r,C,A,d){return s(),a("div",null,e)}const D=n(i,[["render",o]]);export{y as __pageData,D as default};
