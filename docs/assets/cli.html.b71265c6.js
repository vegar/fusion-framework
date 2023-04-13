import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as o,b as a,e as p,r as c}from"./app.7053ee29.js";const r="/fusion-framework/assets/cli.8244c8c8.png",l={},i=a("p",null,[a("img",{src:r,alt:"CLI"})],-1),u=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> <span class="token string">&#39;@equinor/fusion-framework-cli&#39;</span>
</code></pre></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** override name from package.json */</span>
  <span class="token string-property property">&quot;appKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-key&quot;</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/** custom properties */</span>
  <span class="token string-property property">&quot;environment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;foo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/** custom endpoints */</span>
  <span class="token string-property property">&quot;endpoints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://foo.barz&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// dev-server.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** feature coming soon */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> Dev</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>fusion-framework-cli app dev
</code></pre></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>fusion-framework-cli app build
</code></pre></div>`,8);function d(k,m){const n=c("ModuleBadge");return t(),e("div",null,[i,o(n,{module:"cli"}),u])}const f=s(l,[["render",d],["__file","cli.html.vue"]]);export{f as default};
