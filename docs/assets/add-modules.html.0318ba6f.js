import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.e251ecf5.js";const o={},t=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> configureModules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enableAgGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-ag-grid&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> myModule <span class="token keyword">from</span> <span class="token string">&#39;./myModule&#39;</span><span class="token punctuation">;</span>

<span class="token function">configureModules</span><span class="token punctuation">(</span>config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** add a config for a module with helper */</span>
  <span class="token function">enableAgGrid</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** add a module without helper */</span>
  config<span class="token punctuation">.</span><span class="token function">addConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    module<span class="token operator">:</span> myModule<span class="token punctuation">,</span>
    <span class="token function-variable function">configure</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>myConfig <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[t];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","add-modules.html.vue"]]);export{r as default};
