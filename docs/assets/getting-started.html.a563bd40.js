import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as g,c as f,b as n,d as s,a,w as t,e as o,r as i}from"./app.22f00ef5.js";const m={},h=n("h2",{id:"requirement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requirement","aria-hidden":"true"},"#"),s(" Requirement")],-1),y={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},w=o('<div class="custom-container warning"><p class="custom-container-title">Dependencies</p><p>The Fusion Portal only supports React@17</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>',3),v=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> <span class="token string">&#39;@equinor/fusion-framework-cli&#39;</span>
</code></pre></div><h3 id="frameowork" tabindex="-1"><a class="header-anchor" href="#frameowork" aria-hidden="true">#</a> Frameowork</h3>`,2),b=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span>
</code></pre></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h3>`,2),x=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"rootDir"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"jsx"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"react-jsx"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"module"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES2022"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES6"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"moduleResolution"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"node"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"allowSyntheticDefaultImports"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"esModuleInterop"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"lib"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"esnext"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"dom"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"dom.iterable"'),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=n("h3",{id:"eslint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),s(" EsLint")],-1),A=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"@equinor/eslint-config-fusion/react"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` @equinor/eslint-config-fusion eslint prettier
`)])])],-1),q=n("h2",{id:"configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),s(" Configuration")],-1),j=o(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** config.ts */</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppModuleInitiator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> configure<span class="token operator">:</span> <span class="token function-variable function">AppModuleInitiator</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">{</span> fusion<span class="token punctuation">,</span> env <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="application-config" tabindex="-1"><a class="header-anchor" href="#application-config" aria-hidden="true">#</a> Application Config</h3><p>When the application renders, the portal will load configuration from <code>app service</code></p>`,3),E=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"configure"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("configurator"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" env "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" environment"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" endpoints "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" env"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" endpoint"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"in"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),s("endpoints"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" baseUri"),n("span",{class:"token punctuation"},","),s(" defaultScopes "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" endpoint"),n("span",{class:"token punctuation"},";"),s(`
    configurator`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"configureHttpClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" baseUri"),n("span",{class:"token punctuation"},","),s(" defaultScopes "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),M=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"environment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"endpoints"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"api"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"baseUri"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://foo.barz"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},'"defaultScopes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"foobar/.default"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),S=o(`<h2 id="creating-application" tabindex="-1"><a class="header-anchor" href="#creating-application" aria-hidden="true">#</a> Creating Application</h2><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> Main</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentRenderArgs<span class="token punctuation">,</span> makeComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> configure <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span>args<span class="token operator">:</span> ComponentRenderArgs<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">makeComponent</span><span class="token punctuation">(</span>App<span class="token punctuation">,</span> args<span class="token punctuation">,</span> configure<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** Render function */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">renderApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> args<span class="token operator">:</span> ComponentRenderArgs<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** make render element */</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** create render root from provided element */</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** render Application */</span>
    root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token function">createElement</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Teardown */</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> root<span class="token punctuation">.</span><span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> renderApp<span class="token punctuation">;</span>
</code></pre></div><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppModuleInitiator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> configure<span class="token operator">:</span> <span class="token function-variable function">AppModuleInitiator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** print render environment arguments */</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;configuring application&#39;</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** callback when configurations is created */</span>
    configurator<span class="token punctuation">.</span><span class="token function">onConfigured</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;application config created&#39;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** callback when the application modules has initialized */</span>
    configurator<span class="token punctuation">.</span><span class="token function">onInitialized</span><span class="token punctuation">(</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;application config initialized&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> configure<span class="token punctuation">;</span>
</code></pre></div><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h3><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">🚀 Hello Fusion😎</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><div class="custom-container info"><p class="custom-container-title">legacy</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerApp</span><span class="token punctuation">(</span>
  <span class="token string">&#39;my-app&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> 
    renderApp<span class="token punctuation">,</span>
    AppComponent<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="basic-features" tabindex="-1"><a class="header-anchor" href="#basic-features" aria-hidden="true">#</a> Basic features</h2><h3 id="use-http-client" tabindex="-1"><a class="header-anchor" href="#use-http-client" aria-hidden="true">#</a> Use http client</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">{</span> env <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** custom client */</span>
  configurator<span class="token punctuation">.</span><span class="token function">configureHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&quot;my-api&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    baseUri<span class="token operator">:</span> <span class="token string">&#39;https://foo.bar&#39;</span><span class="token punctuation">,</span> 
    defaultScopes<span class="token operator">:</span> <span class="token string">&#39;foobar/.default&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// useFooClient.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app/http&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IHttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useFooClient <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IHttpClient <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> httpProvider <span class="token operator">=</span> <span class="token function">useModule</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">useHttpClient</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="use-service-discovery" tabindex="-1"><a class="header-anchor" href="#use-service-discovery" aria-hidden="true">#</a> Use service discovery</h3><p>enable usage of service clients from service discovery</p>`,13),R=o(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** enable usage of fusion portal api service  */</span>
  <span class="token keyword">await</span> configurator<span class="token punctuation">.</span><span class="token function">useFrameworkServiceClient</span><span class="token punctuation">(</span><span class="token string">&#39;portal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="enable-routing" tabindex="-1"><a class="header-anchor" href="#enable-routing" aria-hidden="true">#</a> Enable routing</h3><p>Enable routing in application</p>`,3),I=o(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> enableNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-navigation&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">{</span> env<span class="token operator">:</span> <span class="token punctuation">{</span> basename <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableNavigation</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> basename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="enable-context" tabindex="-1"><a class="header-anchor" href="#enable-context" aria-hidden="true">#</a> Enable context</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> enableNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-context&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** optional filter for query types */</span>
    contextType<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;project&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** optional filter of query result */</span>
    <span class="token function-variable function">contextFilter</span><span class="token operator">:</span> <span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="enable-ag-grid" tabindex="-1"><a class="header-anchor" href="#enable-ag-grid" aria-hidden="true">#</a> Enable Ag Grid</h3><p>Enable license key when deployed to portal</p>`,5),H=o(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> enableAgGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-navigation&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableAgGrid</span><span class="token punctuation">(</span>configurator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function T(F,L){const k=i("ExternalLinkIcon"),r=i("ModuleBadge"),u=i("CodeTabs"),p=i("RouterLink");return g(),f("div",null,[h,n("ul",null,[n("li",null,[n("a",y,[s("React 17+"),a(k)])])]),w,a(r,{module:"cli"}),v,a(r,{module:"react-app"}),b,a(u,{id:"33",data:[{title:"tsconfig.json"}]},{tab0:t(({title:e,value:c,isActive:l})=>[x]),_:1},8,["data"]),_,a(u,{id:"41",data:[{title:".eslintrc"},{title:"required packages"}]},{tab0:t(({title:e,value:c,isActive:l})=>[A]),tab1:t(({title:e,value:c,isActive:l})=>[C]),_:1},8,["data"]),q,n("p",null,[a(p,{to:"/modules/"},{default:t(()=>[s("📚 Read more about configuration of modules")]),_:1})]),j,a(u,{id:"62",data:[{title:"src/config.ts"},{title:"app.config.js"}]},{tab0:t(({title:e,value:c,isActive:l})=>[E]),tab1:t(({title:e,value:c,isActive:l})=>[M]),_:1},8,["data"]),S,n("p",null,[a(p,{to:"/modules/service-discovery/"},{default:t(()=>[s("see available services")]),_:1})]),n("p",null,[a(p,{to:"/modules/http/"},{default:t(()=>[s("see http module")]),_:1})]),R,n("p",null,[a(p,{to:"/modules/navigation/"},{default:t(()=>[s("read more about navigation")]),_:1})]),I,n("p",null,[a(p,{to:"/modules/ag-grid/"},{default:t(()=>[s("read more about Ag Grid")]),_:1})]),H])}const U=d(m,[["render",T],["__file","getting-started.html.vue"]]);export{U as default};
