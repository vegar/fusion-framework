import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as g,c as f,a,w as t,b as n,d as s,e as u,r as o}from"./app.0c2fbc1c.js";const y={},m=n("h2",{id:"configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),s(" Configuration")],-1),h=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" enableContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@equinor/fusion-framework-module-context'"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),x=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" enableContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@equinor/fusion-framework-react-module-context'"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),b=u(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><h4 id="setcontexttype" tabindex="-1"><a class="header-anchor" href="#setcontexttype" aria-hidden="true">#</a> setContextType</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** optional filter for query types, array of string */</span>
    builder<span class="token punctuation">.</span><span class="token function">setContextType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;project&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>array of context types which queries are filtered by</p><h4 id="setcontextfilter" tabindex="-1"><a class="header-anchor" href="#setcontextfilter" aria-hidden="true">#</a> setContextFilter</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** optional filter of query result */</span>
    builder<span class="token punctuation">.</span><span class="token function">setContextFilter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="setcontextparameterfn" tabindex="-1"><a class="header-anchor" href="#setcontextparameterfn" aria-hidden="true">#</a> setContextParameterFn</h4>`,8),w=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"configure"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("configurator"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"enableContext"),n("span",{class:"token punctuation"},"("),s("configurator"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("builder"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    builder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setContextParameterFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" search"),n("span",{class:"token punctuation"},","),s(" type "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" args"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// Modify search and type ??"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
          search`),n("span",{class:"token punctuation"},","),s(`
          filter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              type`),n("span",{class:"token punctuation"},","),s(`
              externalId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'foobar36-8890-4b16-b973-9e13b9a72c26'"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(` 
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),v=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** helper method for generating odata */"),s(`
`),n("span",{class:"token keyword"},"import"),s(" buildQuery "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'odata-query'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"configure"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("configurator"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"enableContext"),n("span",{class:"token punctuation"},"("),s("configurator"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("builder"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    builder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setContextParameterFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" search"),n("span",{class:"token punctuation"},","),s(" type "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" args"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"buildQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          search`),n("span",{class:"token punctuation"},","),s(`
          filter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token keyword"},"in"),n("span",{class:"token operator"},":"),s(" type"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(` 
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=u(`<div class="custom-container info"><p class="custom-container-title">QueryClient</p><p>currently <code>setContextParameterFn</code> requires an return type of <code>string | QueryContextParameters</code>, but this method is creating the parameters to the query function.</p><p>If using a custom client with custom parameters, use this method to generate the custom parameters.</p><p>If there is a demand for generic query parameters we will in the future make the return type more generic.</p></div><h4 id="setcontextclient" tabindex="-1"><a class="header-anchor" href="#setcontextclient" aria-hidden="true">#</a> setContextClient</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configure</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** request another module that is enabled */</span>
    <span class="token keyword">const</span> httpProvider <span class="token operator">=</span> <span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">requireInstance</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> client <span class="token operator">=</span> httpProvider<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token string">&#39;my-api&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 
     * By default the Framework will resolve the context service
     * <span class="token keyword">@see</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> QueryCtorOptions<span class="token punctuation">}</span> for advance configuration of query client
     * <span class="token keyword">@see</span> [ObservableInput - RxJS](https://rxjs.dev/api/index/type-alias/ObservableInput) 
     * <span class="token keyword">@return</span> object for getting and querying context
     */</span>
    <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">setContextClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> client<span class="token punctuation">.</span><span class="token function">json$</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/context/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function-variable function">query</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            client<span class="token punctuation">.</span><span class="token function">json$</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/context/search/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
                body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>query post request processor, called after query is executed</p><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2>`,5),C=n("h3",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),s(" Example")],-1),q={href:"https://github.com/equinor/fusion-framework/tree/main/cookbooks/app-react-context/src",target:"_blank",rel:"noopener noreferrer"},I=u(`<h4 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppModuleInitiator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enableContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-module-context&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> buildQuery <span class="token keyword">from</span> <span class="token string">&#39;odata-query&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> configure<span class="token operator">:</span> <span class="token function-variable function">AppModuleInitiator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>configurator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">enableContext</span><span class="token punctuation">(</span>configurator<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">setContextType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;orgchart&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set contextType to match against</span>
        builder<span class="token punctuation">.</span><span class="token function">setContextParameterFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> search<span class="token punctuation">,</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">buildQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                search<span class="token punctuation">,</span>
                filter<span class="token operator">:</span> <span class="token punctuation">{</span>
                    type<span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token keyword">in</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> configure<span class="token punctuation">;</span>
</code></pre></div><h4 id="app-tsx" tabindex="-1"><a class="header-anchor" href="#app-tsx" aria-hidden="true">#</a> App.tsx</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useModuleCurrentContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-module-context&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentContext <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useModuleCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>currentContext<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div>`,4);function M(A,S){const l=o("ModuleBadge"),i=o("CodeTabs"),r=o("RouterLink"),k=o("ExternalLinkIcon");return g(),f("div",null,[a(l,{module:"module-context"}),m,a(i,{id:"5",data:[{title:"poj"},{title:"react"}]},{tab0:t(({title:p,value:e,isActive:c})=>[h]),tab1:t(({title:p,value:e,isActive:c})=>[x]),_:1}),b,n("p",null,[s("Set method which generates the parameters for the query function. see "),a(r,{to:"/modules/services/context/#query-context"},{default:t(()=>[s("Query Context")]),_:1}),s(".")]),a(i,{id:"34",data:[{title:"Standard"},{title:"OData"}]},{tab0:t(({title:p,value:e,isActive:c})=>[w]),tab1:t(({title:p,value:e,isActive:c})=>[v]),_:1}),_,a(l,{module:"react-module-context"}),C,n("blockquote",null,[n("p",null,[n("a",q,[s("cookbook -see example"),a(k)])])]),I])}const Q=d(y,[["render",M],["__file","index.html.vue"]]);export{Q as default};
