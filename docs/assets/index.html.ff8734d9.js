import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,e as a,r as p}from"./app.0c2fbc1c.js";const u={},l=a('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><p>Since module instances are loosely coupled, the message module allows modules to communicate together internally.</p><div class="custom-container tip"><p class="custom-container-title">Event Bubbling</p><p>when initializing modules with reference to instance of modules, the event module will by default subscribe to reference event provider.</p><p>For example when the Provider (Portal) initializes a consumer (App), the app will dispatch events that <code>canBubble</code> to its parent event module instance.</p></div><div class="custom-container warning"><p class="custom-container-title">Async listeners</p><p>event handlers are allowed to execute async, so when <code>event.cancelable = false</code> the dispatcher will not await resolution, which means the cancellation might not happen in the order which handlers where added</p></div><h3 id="dispatch-event" tabindex="-1"><a class="header-anchor" href="#dispatch-event" aria-hidden="true">#</a> Dispatch event</h3>',5),i=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>modules<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
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

</code></pre></div><h3 id="cancelable-events" tabindex="-1"><a class="header-anchor" href="#cancelable-events" aria-hidden="true">#</a> Cancelable events</h3>`,2),k=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">await</span> module<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
  <span class="token string">&#39;myEvent&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> detail<span class="token operator">:</span> myObj<span class="token punctuation">,</span> source<span class="token operator">:</span> mySource<span class="token punctuation">,</span> cancelable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event was canceled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event was dispatched successfully&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><h3 id="declare-event-type" tabindex="-1"><a class="header-anchor" href="#declare-event-type" aria-hidden="true">#</a> Declare event type</h3><p>declaring a module will not add any functionality, <strong>but</strong> provide type hinting/completion</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@equinor/fusion-framework-module-event&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">FrameworkEventMap</span> <span class="token punctuation">{</span>
    myOwnType<span class="token operator">:</span> FrameworkEvent<span class="token operator">&lt;</span>
      FrameworkEventInit<span class="token operator">&lt;</span>
        MyDetailType<span class="token punctuation">,</span>
        MySourceType
      <span class="token operator">&gt;</span>
    <span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="custom-event" tabindex="-1"><a class="header-anchor" href="#custom-event" aria-hidden="true">#</a> Custom event</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// define a custom event class</span>
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
</code></pre></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><h3 id="handling-events-before-dispatch" tabindex="-1"><a class="header-anchor" href="#handling-events-before-dispatch" aria-hidden="true">#</a> Handling events before dispatch</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> doNotHandleEvents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;onMyEvent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> doNotPropagateEvents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;myOtherEvent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

config<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function-variable function">onDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>doNotHandleEvents<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>doNotPropagateEvents<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="handling-bubbling" tabindex="-1"><a class="header-anchor" href="#handling-bubbling" aria-hidden="true">#</a> Handling bubbling</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// prevent default bubbling to ref modules</span>
config<span class="token punctuation">.</span>event<span class="token punctuation">.</span>onBubble <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token comment">// custom handling</span>
config<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function-variable function">onBubble</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">event [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] is bubbling</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ref<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2>`,13),r=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 
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
</code></pre></div>`,1);function d(m,h){const s=p("ModuleBadge"),t=p("Mermaid");return o(),c("div",null,[n(s,{module:"module-event"}),l,n(t,{id:"mermaid-24",code:"eNp9jzsOwjAMhndO4R3BATp0QLAx9Apu45ZIrR0cpxK3Jwkq6tTR9vc/HOmdiAe6e5wUlxMAJhNOS0+ah8dKbJe2PXcqq3ekDTgfA9rwAiq3zGyngj19NGLS2ACL+fED87bJpITCA/ypLKkJDQStduBoxDQXjNgdS6JJyDoJOKF54b3mV+46IN9S389UPXZFO9SSdvBVsfoCpHJgtA=="}),i,n(t,{id:"mermaid-29",code:"eNp9kLFuwzAMRPd8BffGP+DBQ5FuHfILtHVJBCiUSkn271eyYyFIgIwS3x2PF/GXIRNOlq/K9wMR5+Ql30doefzMkNQNw9dZ/WwNtCdjY+A03Qh1Vph91BXu18YEgcaeeGGbyO0fBfSh4kQNKoJ1QU9BVzcyuHB2FYOYz5KYfCg6H/jKyXp51mzZaGKhMY+jw2oiPoH8DG2Rj2fWCrbrlhtkD3PaspCNxcg5mGM1/F79aLHOkSJlFbqwi9uGVsUwvDq/97alfW6ve5ymiN7NaJLDP8kgkTQ="}),k,n(s,{module:"react-module-event"}),r])}const y=e(u,[["render",d],["__file","index.html.vue"]]);export{y as default};
