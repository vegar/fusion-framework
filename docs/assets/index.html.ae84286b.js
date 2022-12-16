import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as m,a as s,w as o,e as p,r as t,b as n,d as a}from"./app.cdf0d1c2.js";const f={},g=p('<p>This module purpose is:</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> load application manifest.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> load application configuration.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> load application javascript bundle.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> keep track of current selected application</label></li></ul><blockquote><p>This module is mainly developed for helping portal for keeping track of selected application and loading of application.</p></blockquote><h2 id="application-instance" tabindex="-1"><a class="header-anchor" href="#application-instance" aria-hidden="true">#</a> Application instance</h2>',4),h=p(`<div class="custom-container warning"><p class="custom-container-title">Initialize</p><p>when calling <code>initialize</code>, it might emit multiple time, since manifest and config has cache.</p><p><strong>How to only use settle values</strong></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Observable</span>
app<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Async</span>
<span class="token keyword">await</span> <span class="token function">lastValueFrom</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> Manifest</h3><p>Meta data description of application, loaded from the Fusion Application Store</p><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3><p>Configuration for the application</p><h3 id="script-modules" tabindex="-1"><a class="header-anchor" href="#script-modules" aria-hidden="true">#</a> Script Modules</h3><p>imported javascript script modules</p><h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> Instance</h3><p>Collection of initialized modules of the application</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>`,10),w=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"configure"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("configurator"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"enableAppModule"),n("span",{class:"token punctuation"},"("),a("configurator"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),y=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[a(`
`),n("span",{class:"token keyword"},"const"),a(" manifestMapper "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(" AppManifest "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" appKey"),n("span",{class:"token punctuation"},","),a(" name"),n("span",{class:"token punctuation"},","),a(" entry"),n("span",{class:"token punctuation"},","),a(" version "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" value"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" appKey"),n("span",{class:"token punctuation"},","),a(" name"),n("span",{class:"token punctuation"},","),a(" entry"),n("span",{class:"token punctuation"},","),a(" version "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(` 

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"configure"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("configurator"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"enableAppModule"),n("span",{class:"token punctuation"},"("),a("configurator"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"async"),n("span",{class:"token punctuation"},"("),a("builder"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" httpProvider "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requireInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'http'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" appClient "),n("span",{class:"token operator"},"="),a(" httpProvider"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'app-api-client'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    builder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAppClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token doc-comment comment"},"/** callback for fetching an applications */"),a(`
      `),n("span",{class:"token function-variable function"},"getAppManifest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" appKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" appClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json$"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/api/app/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("appKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(` 
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token function-variable function"},"selector"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),n("span",{class:"token punctuation"},"("),a("x"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"manifestMapper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),a(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token doc-comment comment"},"/** callback for fetching all applications */"),a(`
      `),n("span",{class:"token function-variable function"},"getAppManifests"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" appClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json$"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/api/apps"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(` 
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token function-variable function"},"selector"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),n("span",{class:"token punctuation"},"("),a("x"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),a(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("manifestMapper"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token doc-comment comment"},"/** callback for fetching application config */"),a(`
      `),n("span",{class:"token function-variable function"},"getAppConfig"),n("span",{class:"token operator"},":"),a("  "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" appKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" appClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json$"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/api/app/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("appKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/config"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),v=p(`<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FrameworkEvent<span class="token punctuation">,</span> FrameworkEventInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app/App&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./app/events&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">FrameworkEventMap</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** fired when the current selected application changes */</span>
        onCurrentAppChanged<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            FrameworkEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                <span class="token doc-comment comment">/** current application  */</span>
                next<span class="token operator">?</span><span class="token operator">:</span> App<span class="token punctuation">;</span>
                <span class="token doc-comment comment">/** previous application */</span>
                previous<span class="token operator">?</span><span class="token operator">:</span> App<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> App</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> FrameworkEvent<span class="token punctuation">,</span> FrameworkEventInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppConfig<span class="token punctuation">,</span> AppManifest<span class="token punctuation">,</span> AppModulesInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** base event type for applications */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AppEventEventInit<span class="token operator">&lt;</span>TDetail <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span>
    FrameworkEventInit<span class="token operator">&lt;</span>
        <span class="token doc-comment comment">/** additional event details and key of target event */</span>
        TDetail <span class="token operator">&amp;</span> <span class="token punctuation">{</span> appKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/** source of the event */</span>
        App
    <span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">FrameworkEventMap</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** fired when the application has initiated its modules */</span>
        onAppModulesLoaded<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            AppEventEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                <span class="token doc-comment comment">/** initiated modules for application */</span>
                modules<span class="token operator">:</span> AppModulesInstance<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired when the application has loaded corresponding manifest */</span>
        onAppManifestLoaded<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            AppEventEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                manifest<span class="token operator">:</span> AppManifest<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired when the application has loaded corresponding config */</span>
        onAppConfigLoaded<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            AppEventEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                config<span class="token operator">:</span> AppConfig<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired when the application has loaded corresponding javascript module */</span>
        onAppScriptLoaded<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            AppEventEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                manifest<span class="token operator">:</span> AppManifest<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired before application loads manifest, config and script */</span>
        onAppInitialize<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>AppEventEventInit<span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * fired after application has loaded manifest, config and script
         *
         * __note:__ not fired until all loaders has settled (last emit)
         */</span>
        onAppInitialized<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>AppEventEventInit<span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired when application fails to load either manifest, config and script */</span>
        onAppInitializeFailed<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
            AppEventEventInit<span class="token operator">&lt;</span><span class="token punctuation">{</span>
                error<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&gt;</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** fired when the application is disposed (unmounts) */</span>
        onAppDispose<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>AppEventEventInit<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="apploader" tabindex="-1"><a class="header-anchor" href="#apploader" aria-hidden="true">#</a> Apploader</h3><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Subscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useFramework <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StarProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-react-progress-indicator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useObservableState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-observable/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppManifestError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-app/errors.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorViewer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ErrorViewer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-module-app&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * React Functional Component for handling current application
 *
 * this component will set the current app by provided appKey.
 * when the appKey changes, this component will try to initialize the referred application
 * and render it.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AppLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token punctuation">{</span> appKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> appKey <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> fusion <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFramework</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">[</span>AppModule<span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/** reference of application section/container */</span>
    <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * reference of element which application rendered to
     *
     * the current value will be created when application tries to render.
     * since we cant make sure that application render does ensure teardown,
     * each render instance will have its own element, which then will be added to the application container.
     */</span>
    <span class="token keyword">const</span> appRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Error <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/** observe and use the current selected application from framework */</span>
    <span class="token keyword">const</span> currentApp <span class="token operator">=</span> <span class="token function">useObservableState</span><span class="token punctuation">(</span>fusion<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>app<span class="token punctuation">.</span>current$<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">/** when appKey property change, assign it to current */</span>
        fusion<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">setCurrentApp</span><span class="token punctuation">(</span>appKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>appKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">/** flag that application is loading */</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/** clear previous errors */</span>
        <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/** create a teardown of load */</span>
        <span class="token keyword">const</span> subscription <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/** make sure that initialize is canceled and disposed if current app changes  */</span>
        subscription<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
            currentApp<span class="token operator">?.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> manifest<span class="token punctuation">,</span> script<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">/** generate basename for application */</span>
                    <span class="token keyword">const</span> <span class="token punctuation">[</span>basename<span class="token punctuation">]</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>
                        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/?apps\\/[a-z|-]+(\\/)?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
                    <span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                    <span class="token comment">/** create a &#39;private&#39; element for the application */</span>
                    appRef<span class="token punctuation">.</span>current <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token comment">/** extract render callback function from javascript module */</span>
                    <span class="token keyword">const</span> render <span class="token operator">=</span> script<span class="token punctuation">.</span>renderApp <span class="token operator">??</span> script<span class="token punctuation">.</span>default<span class="token punctuation">;</span>

                    <span class="token comment">/** add application teardown to current render effect teardown */</span>
                    subscription<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
                        <span class="token function">render</span><span class="token punctuation">(</span>appRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token punctuation">{</span> fusion<span class="token punctuation">,</span> env<span class="token operator">:</span> <span class="token punctuation">{</span> basename<span class="token punctuation">,</span> config<span class="token punctuation">,</span> manifest <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">/** flag that application is no longer loading */</span>
                    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">/** set error if initialization of application fails */</span>
                    <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/** teardown application when hook unmounts */</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> subscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>currentApp<span class="token punctuation">,</span> appRef<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> refEl <span class="token operator">=</span> ref<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
        <span class="token keyword">const</span> appEl <span class="token operator">=</span> appRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>appEl <span class="token operator">&amp;&amp;</span> refEl<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/** when application has rendered on referenced element, add element to application sections */</span>
        refEl<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>appEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">/** remove application element on unmount */</span>
                refEl<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>appEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">,</span> appRef<span class="token punctuation">.</span>current<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>cause <span class="token keyword">instanceof</span> <span class="token class-name">AppManifestError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">🔥 Failed to load application manifest 🤬</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>cause<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorViewer</span></span> <span class="token attr-name">error</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">;
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">🔥 Failed to load application 🤬</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorViewer</span></span> <span class="token attr-name">error</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">;
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StarProgress</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Loading Application<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AppLoader<span class="token punctuation">;</span>
</code></pre></div>`,7);function b(x,E){const e=t("ModuleBadge"),c=t("Mermaid"),l=t("CodeTabs");return d(),m("div",null,[s(e,{module:"module-app"}),g,s(c,{id:"mermaid-35",code:"eNqFk0FO80AMhfc9hZf59bccoAukqrBAJKhST2BN3GKUzAwzbiU4PZ5hkiYtiE0r+Xvxe3YcgEjvJ7KGHhiPAfsFgMcgbNijFagBI2y8h9phS+GK7ga6C+7Mt3wz8K2zgmxvBPtBsKdwZkNXuClYy/Xq/v7/bq1xZXsKgaxovULvn+njn/Jd4ps1mEAoNGcbZSt9VqsdGxR2FthGQR17ofzFCYE7U4B6qS2cvThsX9EeU6zsr5AtC2PHn1Sl1po2G5R0R5IGLR8oynW2/RoOJOYV+iJQsE/PpWSTWhKv1EgHBfOdY4rRtvo7t9TtHvg4MfwTzxOZLMhgTDSp/ZRoxJTzXDaouk5PJcIbnjGawF7SS4xOd67/Bw7xMk+WUmowzatrb1x76qgadHdqGWar5N67IFWue8dWEhzDT7z73OmXvd7qrmd57FnidIAh0rKsIL0QKD3m06zq+cXpYbYfySCfUqMpY3+nMfSzqahb3nROEzXaSJWXoys5Y2HpIkkjVs6OW4v5U23L4ZeRR/pU7r4qjQaXlLZ1lhZfIstKLg=="}),h,s(l,{id:"72",data:[{title:"simple"},{title:"custom"}]},{tab0:o(({title:i,value:u,isActive:k})=>[w]),tab1:o(({title:i,value:u,isActive:k})=>[y]),_:1}),v])}const F=r(f,[["render",b],["__file","index.html.vue"]]);export{F as default};
