import{_ as s,c as n,o as a,a as p}from"./app.6cebd806.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Composition Api","slug":"composition-api","link":"#composition-api","children":[]},{"level":2,"title":"重新设计storeGood组件","slug":"重新设计storegood组件","link":"#重新设计storegood组件","children":[]}],"relativePath":"docs/设计模式相关/领域驱动设计_DDD/小试牛刀.md","lastUpdated":1677180519000}'),l={name:"docs/设计模式相关/领域驱动设计_DDD/小试牛刀.md"},o=p(`<h3 id="composition-api" tabindex="-1">Composition Api <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h3><p>组合式api作为Function-based API提案的产物，解决了<strong>逻辑关注点</strong>过于分散的问题。</p><p>这是一个大型组件的示例，其中逻辑关注点按颜色进行分组。</p><p><img src="https://v3.cn.vuejs.org/images/options-api.png" alt=""></p><p>这个示例展示了大型组件的逻辑是很容易碎片化的，这种碎片化使理解和维护变得困难。而Composition Api将同一个逻辑关注点的相关代码进行收集。</p><blockquote><p>引申：解决方案是通过一系列api去淘汰this和让响应式处理更加灵活，关于api部分并不是本文讨论的范围。</p></blockquote><h4 id="组合式的示例" tabindex="-1">组合式的示例 <a class="header-anchor" href="#组合式的示例" aria-hidden="true">#</a></h4><p>这里引用小商店的商品部分的<code>storeGoods</code>组件的部分内容来说明碎片化带来的问题。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 省略components和props</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 选择模式</span></span>
<span class="line"><span style="color:#F07178;">      goodsTab</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DEFAULT_GOODS_TAB</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      goodsType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DEFAULT_GOODS_TYPE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      selectGoodsList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 选择的商品列表</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">computed</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getGoodsMode</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// &#39;request&#39; or &#39;static&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">updateStoreGoods</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 更新商品 调用了this.getIllegalRecord</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">batchBanGoods</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">show</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 自营商品下架</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">batchBanGoodsSubmit</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">close</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">form</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 自营商品批量下架</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 这里的逻辑是通过 this.selectGoodsList 一个个封禁商品，然后判断this.getGoodsMode的模式去判断处理方法</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">BanGoodsAmsSubmit</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">close</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// ams商品下架请求</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">batchBanAmsGoodsSubmit</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// ams商品批量下架</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">reBangoodsSubmit</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 自营商品解封</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">onReBanComGood</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 组件商品解封</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getIllegalRecord</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bizuin</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">goodsId</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 获取违规原因，</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">toComGoodInfo</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 查看组件商品详情</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">banGoodsSuccess</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fromData</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 处罚商品成功 修改对应商品的状态，updateStoreGoods</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>在小商店profile页，由于不断迭代的过程中，逻辑关注点越来越多，要梳理一个逻辑需要必须不断地“跳转”相关代码块，这就是碎片化逻辑在实际开发中带来的危害。</p><p>我们应该怎么去使用组合化API去将其优化呢？因为这个例子的逻辑过于复杂，需要甚至有多个弹窗，有部分方法例如<code>updateStoreGoods,banGoodsSuccess,getIllegalRecord</code>会在多个逻辑中被调用，整个vue组件就是一个超级大的胶水层，各种逻辑缠绵在一起，只靠组合式api难以对胶水进行拆解。（实际上，组合式api的文档里就没有教我们这些。）</p><p>我们可以尝试去用DDD去进行优化。</p><h2 id="重新设计storegood组件" tabindex="-1">重新设计storeGood组件 <a class="header-anchor" href="#重新设计storegood组件" aria-hidden="true">#</a></h2>`,13),e=[o];function c(t,r,F,y,D,i){return a(),n("div",null,e)}const _=s(l,[["render",c]]);export{A as __pageData,_ as default};
