import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as o}from"./app.4e9a9ad1.js";const t={},p=o(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// config.ts</span>
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
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>`,1),e=[p];function c(u,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","add-modules.html.vue"]]);export{k as default};
