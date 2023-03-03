import{_ as s,c as n,o as a,a as e}from"./app.6cebd806.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"Vuex是什么","slug":"vuex是什么","link":"#vuex是什么","children":[]},{"level":2,"title":"Vuex的使用","slug":"vuex的使用","link":"#vuex的使用","children":[]},{"level":2,"title":"Vuex的规范","slug":"vuex的规范","link":"#vuex的规范","children":[]},{"level":2,"title":"目前Vuex带来的问题","slug":"目前vuex带来的问题","link":"#目前vuex带来的问题","children":[]}],"relativePath":"docs/Vue相关/状态管理/vuex/vuex概述.md","lastUpdated":1677434543000}'),l={name:"docs/Vue相关/状态管理/vuex/vuex概述.md"},p=e(`<h3 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h3><ul><li><a href="#Vuex%E6%98%AF%E4%BB%80%E4%B9%88">Vuex是什么</a></li><li><a href="#Vuex%E7%9A%84%E4%BD%BF%E7%94%A8">Vuex的使用</a></li><li><a href="#Vuex%E7%9A%84%E8%A7%84%E8%8C%83">Vuex的规范</a></li><li><a href="#%E7%9B%AE%E5%89%8DVuex%E5%B8%A6%E6%9D%A5%E7%9A%84%E9%97%AE%E9%A2%98">目前Vuex带来的问题</a></li></ul><h2 id="vuex是什么" tabindex="-1">Vuex是什么 <a class="header-anchor" href="#vuex是什么" aria-hidden="true">#</a></h2><p>Vuex是一个状态管理模式，他提供了一些规则让状态以一种可预测的方式发生变化。</p><p>它是一个全局单例模式管理，在这种模式下，我们的组件树的任何位置都可以获取状态，其通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，使代码变得更结构化且易维护的。</p><ul><li>有以下几个概念 <ul><li>state —— 被管理的状态</li><li>getters —— 我们需要暴露一些状态出去给views层</li><li>mutations —— 变更状态的唯一方法，通过在actions中commit，他必须是同步的。</li><li>actions —— views层或者说组件层提交 (dispatch)，而不是直接变更state</li><li>modules —— 细分store</li></ul></li></ul><blockquote><p>加一些文档上没有的</p><ul><li>store —— 状态管理工具本身</li><li>dispatch —— 组件使用actions的方法</li><li>commit —— 提交mutaions去修改state</li></ul></blockquote><h4 id="vuex要解决什么问题" tabindex="-1">Vuex要解决什么问题 <a class="header-anchor" href="#vuex要解决什么问题" aria-hidden="true">#</a></h4><p>Vuex要解决的核心问题是：<strong>多个组件共享状态</strong>时，<strong>单向数据流</strong>的简洁性会被破坏。 下图就是一个简单的单向数据流示意图。 <img src="https://vuex.vuejs.org/flow.png" alt=""></p><blockquote><p>多个组件共享状态的例子：</p><ol><li>多个组件依赖于用户是否登录的状态，从而渲染不同的内容。</li><li>当用户登录的时候，从而改变不同组件所依赖的状态。</li></ol></blockquote><p>多个组件共享状态使用其他的组件通讯方法也是可以的，例如eventBus, props, inject/provide之类的。但是相对于以上方法，使用状态管理工具（例如vuex, redux等）把状态统一进行管理会更加简洁和方便，实际上这也是为什么解决了 <strong>“单向数据流的简洁性被破坏”</strong>。</p><h4 id="但是-为什么我们要选择vuex呢" tabindex="-1">但是，为什么我们要选择vuex呢？ <a class="header-anchor" href="#但是-为什么我们要选择vuex呢" aria-hidden="true">#</a></h4><blockquote><p>在大多数时候，我们只需要一种简易的状态管理工具即可。这里在Vue文档中有提到过简单的<a href="https://cn.vuejs.org/v2/guide/state-management.html#%E7%B1%BB-Flux-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E7%9A%84%E5%AE%98%E6%96%B9%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">状态管理</a></p></blockquote><p>Vuex借鉴了Flux、Redux和 The Elm Architecture的思想（别的状态管理工具），是专门为了Vue设计的，以利用Vue的细粒度数据响应机制来进行高效的状态更新。</p><p><code>PS: 这里所说的“细粒度”是原文，我也不太能解释什么，这可能就是所谓的懂得都懂。（我猜大概是在自夸Vue的数据响应机制可以进行较为精细的数据响应</code></p><p>个人观点，Vuex给我们带来了很多冗余的开发体验，对于Vue开发者来说，某种程度上，这便是徒增学习成本而已。所以，我们需要谨慎的选择Vuex，在非大型单页应用中，可以仅仅选择一个简单的状态管理模式。但是我们也必须了解Vuex的目的，从而在需要它的时候，去选择它。</p><h4 id="vuex的目的" tabindex="-1">Vuex的目的 <a class="header-anchor" href="#vuex的目的" aria-hidden="true">#</a></h4><p>把所有组件的状态集中存储并管理起来，使状态以一种<strong>可预测的方式</strong>发生变化，以便于在组件共享状态时，维护单向数据流的简洁性。</p><blockquote><p>个人对这种 “可预测的方式” 的一些理解与总结</p><ol><li>状态state通过getters进行获取，并拒绝直接在组件修改state</li><li>组件层需要通过分发Actions（dispatch），再分发Mutations（commit），达到修改state的目的。</li><li>在dispatch Actions的时候考虑组件交互是并不被推荐的行为，actions和mutations里应该只为该module的state所服务。</li></ol></blockquote><h2 id="vuex的使用" tabindex="-1">Vuex的使用 <a class="header-anchor" href="#vuex的使用" aria-hidden="true">#</a></h2><h5 id="组件获取state" tabindex="-1">组件获取state <a class="header-anchor" href="#组件获取state" aria-hidden="true">#</a></h5><p>Vuex希望我们在store中定义 <code>getter</code>，像计算属性的方式，将getter的返回值根据它的依赖缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const store = new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    todos: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, text: &#39;...&#39;, done: true },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, text: &#39;...&#39;, done: false },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    doneTodos: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.todos.filter(todo =&gt; todo.done)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 上面的stote会将getters暴露为 store.getters 对象，可以以访问属性的形式访问这些值</span></span>
<span class="line"><span style="color:#A6ACCD;">store.getters.doneTodos // [ { id: 1, text: &#39;...&#39;, done: true } ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在别的组件使用 <code>挂载到$store上</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodosCount () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.$store.getters.doneTodosCount</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>几种getter的使用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 通过属性访问</span></span>
<span class="line"><span style="color:#A6ACCD;">getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodos: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return state.todos.filter(todo =&gt; todo.done)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 第二个参数可以是 getters</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodosCount: (state, getters) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return getters.doneTodos.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 通过方法访问</span></span>
<span class="line"><span style="color:#A6ACCD;">  getTodoById: (state) =&gt; (id) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return state.todos.find(todo =&gt; todo.id === id)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 组件中</span></span>
<span class="line"><span style="color:#A6ACCD;">store.getters.doneTodos; // -&gt; [{ id: 1, text: &#39;...&#39;, done: true }]</span></span>
<span class="line"><span style="color:#A6ACCD;">store.getters.doneTodosCount; // -&gt; 1</span></span>
<span class="line"><span style="color:#A6ACCD;">store.getters.getTodoById(2); // -&gt; { id: 2, text: &#39;...&#39;, done: false }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="vue3-setup中使用store" tabindex="-1">Vue3 setup中使用store <a class="header-anchor" href="#vue3-setup中使用store" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const store = useStore();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="组件修改store的状态" tabindex="-1">组件修改store的状态 <a class="header-anchor" href="#组件修改store的状态" aria-hidden="true">#</a></h5><p>组件修改store需要通过<strong>Actions和Mutations</strong>。</p><h6 id="在组件中通过-dispatch方法触发actions-而actions中通过-commit-来调用mutations。" tabindex="-1">在组件中通过 <code>dispatch</code>方法触发Actions，而Actions中通过 <code>commit</code> 来调用Mutations。 <a class="header-anchor" href="#在组件中通过-dispatch方法触发actions-而actions中通过-commit-来调用mutations。" aria-hidden="true">#</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 在组件中</span></span>
<span class="line"><span style="color:#A6ACCD;">store.dispatch(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文档给出必须使用Actions的理由是：<code>因为限制mutations必须同步执行，而Actions可以是异步</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 这个actions分发了Mutation “increment”</span></span>
<span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  incrementAsync ({ commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文档提供了一个处理异步Action的例子：<strong>组合Action</strong></p><blockquote><p><code>store.dispatch知识点</code> 可以处理被触发的action处理函数返回的promise，并且store.dispatch仍旧返回promise</p></blockquote><p>所以我们可以通过组合多个Action来处理异步</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 我觉得官方的例子不够准确，所以自己写了一个</span></span>
<span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  updateUsers({ commit, getters }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      get(&#39;/api/get/users&#39;, getters.userInfo)</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          commit(&#39;setUsers&#39;, res.users);</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject()</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateState({ dispatch }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    commit(&#39;setLoading&#39;, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatch(&#39;updateUsers&#39;).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&#39;setLoading&#39;, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).catch(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      // error Mutations.</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>组合Action的官方用法介绍带来了很多很有趣的问题，例如以下的用法。</p><h6 id="常见的actions错误用法" tabindex="-1">常见的Actions错误用法 <a class="header-anchor" href="#常见的actions错误用法" aria-hidden="true">#</a></h6><p>在组件调用actions时，获取数据进行处理，这个错误在我使用Vuex时候也屡屡犯下，实际上这里与其说是调用了Actions，还不如说是封装了getUsers更为准确。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 在组件中</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  store.dispatch(&#39;user/getUsers&#39;).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.userList = res.userList;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// module/user.js中</span></span>
<span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  getUsers({commit, getters}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 假设get封装了axios</span></span>
<span class="line"><span style="color:#A6ACCD;">    return get(&#39;/api/get/users&#39;, getters.userInfo);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这也引申了下面规范的 <code>Actions不应该返回状态</code></p></blockquote><h2 id="vuex的规范" tabindex="-1">Vuex的规范 <a class="header-anchor" href="#vuex的规范" aria-hidden="true">#</a></h2><blockquote><p>仅为个人对Vuex的文档的理解。</p></blockquote><h4 id="actions不应该返回状态" tabindex="-1">Actions不应该返回状态 <a class="header-anchor" href="#actions不应该返回状态" aria-hidden="true">#</a></h4><p>因为Vuex要保证状态以可预测的方式的发生变化，当Actions返回状态给组件的时候，则打破了单向数据传输。在官方给出的图中，就很好的体现了这一点。</p><p><img src="https://vuex.vuejs.org/vuex.png" alt=""></p><h4 id="通过getter或者计算属性来获取state" tabindex="-1">通过getter或者计算属性来获取state <a class="header-anchor" href="#通过getter或者计算属性来获取state" aria-hidden="true">#</a></h4><p>这种用法可以让我们从state中派生一些新状态，并且getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算（如计算属性一样）。</p><blockquote><p>这是为了利用Vue的细粒度数据响应机制。</p></blockquote><h4 id="mutations是只改变state的纯函数" tabindex="-1">Mutations是只改变state的纯函数 <a class="header-anchor" href="#mutations是只改变state的纯函数" aria-hidden="true">#</a></h4><p>没有副作用的函数叫<strong>纯函数</strong>。说人话，纯函数就是 <strong>在相同的输入的情况下，都会得到相同的结果</strong> 的函数。（即不依赖外部环境）</p><p>更简单的来说，就是不要在Mutations里引用任何外部变量，并且仅仅改变state。</p><blockquote><p>在Vuex文档中，目录进阶 - <a href="https://vuex.vuejs.org/zh/guide/testing.html" target="_blank" rel="noreferrer">测试</a> 中提到过一句 <code>Mutation 很容易被测试，因为它们仅仅是一些完全依赖参数的函数。</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 例如 F是纯函数, 1到n求和。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function F(n: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if ( n === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return n;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return n + F(n-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>PS：所以副作用就是指函数执行中因外部状态带来的结果变化</code></p><h2 id="目前vuex带来的问题" tabindex="-1">目前Vuex带来的问题 <a class="header-anchor" href="#目前vuex带来的问题" aria-hidden="true">#</a></h2><blockquote><p>仅仅代表本人在使用vuex中所感觉到的不适，因为本人水平较低，如果您觉得这个问题并不需要重视，那可能就是您水平比我高。</p></blockquote><h5 id="typescript不友好。" tabindex="-1">TypeScript不友好。 <a class="header-anchor" href="#typescript不友好。" aria-hidden="true">#</a></h5><p>这问题实际上是通过<code>dispatch</code>来调用Actions所带来的，以至于我在实际使用中，必须查看一下具体module里的Actions，某些情况下也可能导致拼写错误，我觉得具有语法提示和Actions函数提示的功能将更为友好。</p><p>包括<code>mapState, mapActions</code> 都会带来此问题。</p><p><code>commit同理，但使用commit时候一般都在module文件中，所以带来的困扰比较小</code></p><p>下面是一种Typescript适配探究，仅抛砖引玉，欢迎讨论。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type UserAction = &#39;login&#39; | &#39;logout&#39; | &#39;updateInfo&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const userAction = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  login: () =&gt; {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  logout: () =&gt; {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateInfo: () =&gt; {},</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class MyStore&lt;Action extends string, A = {[key in Action]: () =&gt; void;} &gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  action: A;</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(action: A ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.action = action;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  dispatch(actionFuncName: Action, ...args: any[] ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let store = new MyStore&lt;UserAction&gt;(userAction);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">store.dispatch(&#39;login&#39;, { user: &#39;123&#39;, pwd: &#39;234&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>这种方法利用了type来给dispatch提供了一定的Actions提示，但必须具体操作到某个modules。</li></ul><h5 id="jsdoc不友好" tabindex="-1">jsDoc不友好 <a class="header-anchor" href="#jsdoc不友好" aria-hidden="true">#</a></h5><p>我还是希望在调用Actions或者Mutations时候，看到 <code>jsDoc</code> 注释。</p><h5 id="双向绑定数据略微繁琐" tabindex="-1">双向绑定数据略微繁琐 <a class="header-anchor" href="#双向绑定数据略微繁琐" aria-hidden="true">#</a></h5><p>还是取官方的例子，这个例子也说明了，我们应当去探究非严格模式下的合理使用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;input v-model=&quot;message&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.$store.state.obj.message</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.commit(&#39;updateMessage&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果是严格模式下，那就是如下的光景了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;input v-model=&quot;message&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.$store.state.obj.message</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.dispatch(&#39;updateMessage&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateMessage({ commit }, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    commit(&#39;updateMessage&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateMessage(state, msg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.message = msg;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,74),t=[p];function o(c,i,r,A,C,d){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
