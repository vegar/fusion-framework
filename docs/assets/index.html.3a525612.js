import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,e as s,r as t}from"./app.e251ecf5.js";const i={},l=s('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><p>Since module instances are loosely coupled, the message module allows modules to communicate together internally.</p><div class="custom-container tip"><p class="custom-container-title">Event Bubbling</p><p>when initializing modules with reference to instance of modules, the event module will by default subscribe to reference event provider.</p><p>For example when the Provider (Portal) initializes a consumer (App), the app will dispatch events that <code>canBubble</code> to its parent event module instance.</p></div><div class="custom-container warning"><p class="custom-container-title">Async listeners</p><p>event handlers are allowed to execute async, so when <code>event.cancelable = false</code> the dispatcher will not await resolution, which means the cancellation might not happen in the order which handlers where added</p></div><h3 id="dispatch-event" tabindex="-1"><a class="header-anchor" href="#dispatch-event" aria-hidden="true">#</a> Dispatch event</h3>',5),u=s(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>modules<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
  <span class="token string">&#39;myEvent&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> detail<span class="token operator">:</span> myObj<span class="token punctuation">,</span> source<span class="token operator">:</span> mySource <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// alternative</span>
modules<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">FrameworkEvent</span><span class="token punctuation">(</span>
    <span class="token string">&#39;myEvent&#39;</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> detail<span class="token operator">:</span> myObj<span class="token punctuation">,</span> source<span class="token operator">:</span> mySource <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cancelable-events" tabindex="-1"><a class="header-anchor" href="#cancelable-events" aria-hidden="true">#</a> Cancelable events</h3>`,2),r=s(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">await</span> module<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
  <span class="token string">&#39;myEvent&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> detail<span class="token operator">:</span> myObj<span class="token punctuation">,</span> source<span class="token operator">:</span> mySource<span class="token punctuation">,</span> cancelable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event was canceled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event was dispatched successfully&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><h3 id="declare-event-type" tabindex="-1"><a class="header-anchor" href="#declare-event-type" aria-hidden="true">#</a> Declare event type</h3><p>declaring a module will not add any functionality, <strong>but</strong> provide type hinting/completion</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">FrameworkEventMap</span> <span class="token punctuation">{</span>
    myOwnType<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
      FrameworkEventInit<span class="token operator">&lt;</span>
        MyDetailType<span class="token punctuation">,</span>
        MySourceType
      <span class="token operator">&gt;</span>
    <span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom-event" tabindex="-1"><a class="header-anchor" href="#custom-event" aria-hidden="true">#</a> Custom event</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// define a custom event class</span>
<span class="token keyword">class</span> <span class="token class-name">MyEvent</span> <span class="token keyword">extends</span> <span class="token class-name">FrameworkEvent<span class="token operator">&lt;</span>MyDetailType<span class="token punctuation">,</span> MySourceType<span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">readonly</span> obj<span class="token operator">:</span> MyObj<span class="token punctuation">,</span>
    init<span class="token operator">:</span> FrameworkEventInit<span class="token operator">&lt;</span>MyDetailType<span class="token punctuation">,</span>MySourceType<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;onMyEvent&#39;</span><span class="token punctuation">,</span> init<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// add type hinting</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">FrameworkEventMap</span> <span class="token punctuation">{</span>
    onMyEvent<span class="token operator">:</span> MyEvent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyEvent</span><span class="token punctuation">(</span>someObj<span class="token punctuation">,</span> <span class="token punctuation">{</span>detail<span class="token punctuation">,</span> source<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;onMyEvent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;is my custom object:&#39;</span><span class="token punctuation">,</span> e <span class="token keyword">instanceof</span> <span class="token class-name">MyEvent</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;my custom obj&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><h3 id="handling-events-before-dispatch" tabindex="-1"><a class="header-anchor" href="#handling-events-before-dispatch" aria-hidden="true">#</a> Handling events before dispatch</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> doNotHandleEvents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;onMyEvent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> doNotPropagateEvents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;myOtherEvent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

config<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function-variable function">onDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>doNotHandleEvents<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>doNotPropagateEvents<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handling-bubbling" tabindex="-1"><a class="header-anchor" href="#handling-bubbling" aria-hidden="true">#</a> Handling bubbling</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// prevent default bubbling to ref modules</span>
config<span class="token punctuation">.</span>event<span class="token punctuation">.</span>onBubble <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token comment">// custom handling</span>
config<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function-variable function">onBubble</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">event [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] is bubbling</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ref<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2>`,13),d=s(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 
 * default included in the app module,
 * alternative directly from @equinor/fusion-framework-react-module-event
 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@equinor/fusion-framework-react-app/event&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyHook</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEventHandler</span><span class="token punctuation">(</span>
    <span class="token string">&#39;onContextChange&#39;</span><span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/** note that callback must be memorized */</span>
    <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>deps<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(v,m){const a=t("ModuleBadge"),e=t("Mermaid");return o(),c("div",null,[n(a,{module:"module-event"}),l,n(e,{id:"mermaid-382ee168",code:"sequenceDiagram%0A%20%20autonumber%0A%20%20Event-%3E%3E%2BProvider%3A%20dispatch%20event%0A%20%20Provider-%3E%3E%2BListeners%3A%20notify%20listeners%0A%20%20opt%0A%20%20%20%20Listeners-%3E%3EEvent%3A%20prevent%20default%0A%20%20end%0A%20%20opt%0A%20%20%20%20Listeners-%3E%3EEvent%3A%20stop%20propagation%0A%20%20end%0A%20%20opt%20event.canBubble%0A%20%20%20%20Provider-%3E%3EParent%20Provider%3A%20dispatch%20event%0A%20%20end%0A"}),u,n(e,{id:"mermaid-382ee16d",code:"sequenceDiagram%0A%20%20autonumber%0A%20%20Event-%3E%3E%2BProvider%3A%20dispatch%20event%0A%20%20Provider--%3E%3EListeners%3A%20await%20listeners%0A%20%20opt%0A%20%20%20%20Listeners-%3E%3EEvent%3A%20prevent%20default%0A%20%20end%0A%20%20opt%0A%20%20%20%20Listeners-%3E%3EEvent%3A%20stop%20propagation%0A%20%20end%0A%20%20opt%20event%20can%20bubble%0A%20%20%20%20note%20over%20Provider%2CParent%20Provider%3Awhen%20preventDefault%20is%20called%2C%20canBubble%20will%20return%20false%0A%20%20%20%20Provider-%3E%3EParent%20Provider%3A%20dispatch%20event%0A%20%20end%0A%20%20Provider--%3E%3E-Event%3A%20resolve%20dispatch%0A"}),r,n(a,{module:"react-module-event"}),d])}const g=p(i,[["render",k],["__file","index.html.vue"]]);export{g as default};
