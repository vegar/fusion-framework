import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as k,a as s,b as e,d as t,w as o,e as a,r as c}from"./app.e7d1b686.js";const r="/fusion-framework/assets/roadmap.c7bc9961.png",b={},m=e("div",{style:{"text-align":"center"}},[e("p",null,[e("img",{src:r,alt:"Road map",height:"500"})])],-1),h=e("blockquote",null,[e("p",null,[t("Some task for planned feature are skipped to meet the dead-line of "),e("strong",null,"Project Portal")])],-1),p={id:"authentication",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#authentication","aria-hidden":"true"},"#",-1),f=a('<p>Core of the <strong>Fusion Framework</strong> is to provide tooling for executing authenticated service requests.</p><p>Developers of the <strong>Fusion platform</strong> should with minimal effort consume <strong>Fusion Services</strong> and provide their own.</p><p>Developers should be able to configure named clients for services. When using the client it should acquire scoped user identity token for the requested endpoint.</p><p>The client should also internally expose requests and responses, which can be managed from the portal (example telemetry, custom headers)</p><blockquote><p>initial modules for moving from ADAL to MSAL</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> configure and create http clients</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> MSAL authentication</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"><a href="../modules/http">documentation</a></label></li></ul>',6),g={id:"foundation",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#foundation","aria-hidden":"true"},"#",-1),_=a("<p><strong>Fusion Framework</strong> is buildt on a modular design.</p><blockquote><p>Functionality for apps and portals composed together by small building block called modules</p><p>The framework provides essential modules, but developers can pick or create additional modules needed.</p></blockquote><p><strong>Fusion Framework</strong> provides scoped functionality.</p><blockquote><p>Each collection module instances has their own <em>sandbox</em> to not pollute other applications.</p><p>When a applications is ejected, all facilitated functionality is disposed.</p></blockquote><p><strong>Fusion Framework Modules</strong> are independent and should be interchangeable.</p><blockquote><p><strong>Example:</strong> if the technology for authentication changes, only the authentication module should be replaced.</p></blockquote><p><strong>Fusion Framework</strong> is ecosystem independent.</p><blockquote><p>Written in plain TypeScript for future upgrade of libraries or platforms</p><p>Tooling for easy development on React</p></blockquote><p><strong>Fusion Framework</strong> is the foundation of applications</p><blockquote><p><code>build once, run anywhere</code>, <strong>Fusion Apps</strong> should run on any host(portal).</p><p>developers can focus more on UI, framework handles complexity</p></blockquote>",10),y={class:"task-list-container"},v=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> create functionality for adding, configuring and initializing modules.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> create interface with collection of essential modules (app and portal)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> add type-hinting for working with framework in IDE</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> tooling for <code>React</code></label></li>',4),w={class:"task-list-item"},F=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-7",checked:"checked",disabled:"disabled"},null,-1),q={class:"task-list-item-label",for:"task-item-7"},C=e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-8",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-8"}," guide")],-1),A={id:"service-discovery",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#service-discovery","aria-hidden":"true"},"#",-1),R=e("p",null,[t("Applications consumes data from "),e("strong",null,"Fusion"),t(" services. The "),e("strong",null,"Framework"),t(" should dynamically resolve services from the host portal.")],-1),T=e("p",null,"Developers should easily configure which services the application needs and maintainers see which one are used.",-1),L=e("blockquote",null,[e("p",null,"developers should only name the service, then the framework resolves the endpoint and authentication requirements")],-1),D={class:"task-list-container"},S=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> create a module which resolves <code>http</code> clients</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> tooling for <code>React</code></label></li>',2),G={class:"task-list-item"},I=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-11",checked:"checked",disabled:"disabled"},null,-1),B={class:"task-list-item-label",for:"task-item-11"},E=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> cookbook</label></li>',2),M={id:"ag-grid",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#ag-grid","aria-hidden":"true"},"#",-1),P=e("p",null,[t("Allow application to register "),e("code",null,"AgGrid"),t(" license for removing watermark.")],-1),W={class:"task-list-container"},V={class:"task-list-item"},H=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-14",checked:"checked",disabled:"disabled"},null,-1),j={class:"task-list-item-label",for:"task-item-14"},z=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> cookbook</label></li>',2),O={id:"events",tabindex:"-1"},U=e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#",-1),J=e("p",null,[t("Since modules are decoupled, the "),e("strong",null,"Framework"),t(" needs a bus to communicate on.")],-1),K=e("blockquote",null,[e("p",null,"Application can interact with events and prevent default behaviors")],-1),X={class:"task-list-container"},Y=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> create a module for consuming context</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> tooling for <code>React</code></label></li>',2),Z={class:"task-list-item"},$=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-19",checked:"checked",disabled:"disabled"},null,-1),ee={class:"task-list-item-label",for:"task-item-19"},te=a('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> cookbook</label></li>',2),se={id:"context",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#context","aria-hidden":"true"},"#",-1),ae=a('<p><strong>Fusion</strong> context is scoped data with user-friendly name and follows users throughout session.</p><p>Applications present the user with a interface related the to selected context.</p><p>The framework needs to facilitate query, filtering and selecting scoped data.</p><blockquote><p>The framework maintains the cache of context, aborts dangling request and throttles queries</p></blockquote><p><img src="https://img.shields.io/github/milestones/progress-percent/equinor/fusion-framework/1" alt="GitHub milestone"></p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> create a module for consuming context</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> update context handling in <strong>Fusion Portal</strong></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-24"><a href="../modules/services/context">documentation</a></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-25"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-26"> guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-27" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-27"> cookbook</label></li></ul>',6),le={id:"application-loading",tabindex:"-1"},oe=e("a",{class:"header-anchor",href:"#application-loading","aria-hidden":"true"},"#",-1),ce=a('<p><strong>Fusion</strong> provides metadata about registered applications and configuration for runtime environment. When loading an application the <strong>Framework</strong> resolves and provides this information, which the application uses to dynamically configure before rending.</p><p>The framework also keeps track of selected application and notifies when when current application changes.</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-28" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-28"> load application and keep track of selected</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-29" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-29"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-30" disabled="disabled"><label class="task-list-item-label" for="task-item-30"> developer documentation</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-31" disabled="disabled"><label class="task-list-item-label" for="task-item-31"> developer guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-32" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-32"> cookbook for loading applications</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-33" disabled="disabled"><label class="task-list-item-label" for="task-item-33"><em>track usage (awaiting new service)</em></label></li></ul>',3),de={id:"bookmarks",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#bookmarks","aria-hidden":"true"},"#",-1),ke=a('<p>Bookmarks are snapshots of application states which users can navigate to and share with other Fusion users. The framework should facilitate functionality for storing and restoring bookmark.</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-34" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-34"> configurable interface for storing and restoring bookmarks</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-35" disabled="disabled"><label class="task-list-item-label" for="task-item-35"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-36" disabled="disabled"><label class="task-list-item-label" for="task-item-36"> Cookbook for developing bookmarks</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-37" disabled="disabled"><label class="task-list-item-label" for="task-item-37"> Developer documentation</label></li></ul>',2),re={id:"widgets",tabindex:"-1"},be=e("a",{class:"header-anchor",href:"#widgets","aria-hidden":"true"},"#",-1),me=a('<p>Widgets are small applications which are uploaded to an global storage and consumed by portals and applications. The framework should manage loading metadata and configuration for the widget.</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-38" disabled="disabled"><label class="task-list-item-label" for="task-item-38"> Load widget manifest and configuration</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-39" disabled="disabled"><label class="task-list-item-label" for="task-item-39"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-40" disabled="disabled"><label class="task-list-item-label" for="task-item-40"> Documentation</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-41" disabled="disabled"><label class="task-list-item-label" for="task-item-41"> Guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-42" disabled="disabled"><label class="task-list-item-label" for="task-item-42"> Cookbook</label></li></ul>',2),he={id:"application-migration",tabindex:"-1"},pe=e("a",{class:"header-anchor",href:"#application-migration","aria-hidden":"true"},"#",-1),ue=a('<p><strong>Q4 2022</strong></p><p>Convert existing application to be compatible with dynamic loading and configuration of framework</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-43" disabled="disabled"><label class="task-list-item-label" for="task-item-43"> create build template for building application</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-44" disabled="disabled"><label class="task-list-item-label" for="task-item-44"> create a wrapper for emulating portal in development</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-45" disabled="disabled"><label class="task-list-item-label" for="task-item-45"> create guide for making application compliant with <code>Fusion Framework</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-46" disabled="disabled"><label class="task-list-item-label" for="task-item-46"> make Fusion Portal compliant with <code>React 18</code></label></li></ul>',3),fe={id:"navigation",tabindex:"-1"},ge=e("a",{class:"header-anchor",href:"#navigation","aria-hidden":"true"},"#",-1),xe=a('<p><strong>Q4 2022</strong></p><p>The <strong>Framework</strong> should provide functionality for applications and portals for navigating.</p><p><img src="https://img.shields.io/github/milestones/progress-percent/equinor/fusion-framework/7" alt="GitHub milestone"></p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-47" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-47"> create functionality for building scoped urls</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-48" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-48"> create module for creating router</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-49" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-49"> create documentation</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-50" disabled="disabled"><label class="task-list-item-label" for="task-item-50"> observe changes to routing</label></li></ul>',4),_e={id:"application-cli",tabindex:"-1"},ye=e("a",{class:"header-anchor",href:"#application-cli","aria-hidden":"true"},"#",-1),ve=a('<p><strong>Q4 2022</strong></p><p>Create a CLI for building and developing application</p><p><img src="https://img.shields.io/github/milestones/progress-percent/equinor/fusion-framework/4" alt="GitHub milestone"></p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-51" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-51"> create a CLI for developing application</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-52" disabled="disabled"><label class="task-list-item-label" for="task-item-52"> create application builder</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-53" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-53"> create proxy-server for emulating portal (manifest, config)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-54" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-54"> add routing to CLI portal</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-55" disabled="disabled"><label class="task-list-item-label" for="task-item-55"> add <strong>context</strong> selector and provider to CLI portal</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-56" disabled="disabled"><label class="task-list-item-label" for="task-item-56"> add <strong>person</strong> provider to CLI portal</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-57" disabled="disabled"><label class="task-list-item-label" for="task-item-57"> support configuration of portal framework (auth and service discovery)</label></li></ul><h1 id="not-planned-yet" tabindex="-1"><a class="header-anchor" href="#not-planned-yet" aria-hidden="true">#</a> Not planned yet</h1>',5),we={id:"tasks",tabindex:"-1"},Fe=e("a",{class:"header-anchor",href:"#tasks","aria-hidden":"true"},"#",-1),qe=e("p",null,"Exposes users Fusion tasks/actions",-1),Ce={id:"notification",tabindex:"-1"},Ae=e("a",{class:"header-anchor",href:"#notification","aria-hidden":"true"},"#",-1),Qe=a('<p>Exposes users Fusion notifications</p><h2 id="telemetry" tabindex="-1"><a class="header-anchor" href="#telemetry" aria-hidden="true">#</a> Telemetry</h2><p>Observer events happening in the framework an log back to application insight</p><blockquote><p>This module exists but missing wiring and final touches</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-58" disabled="disabled"><label class="task-list-item-label" for="task-item-58"> subscribe to framework events</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-59" disabled="disabled"><label class="task-list-item-label" for="task-item-59"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-60" disabled="disabled"><label class="task-list-item-label" for="task-item-60"> Documentation</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-61" disabled="disabled"><label class="task-list-item-label" for="task-item-61"> Guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-62" disabled="disabled"><label class="task-list-item-label" for="task-item-62"> Cookbook</label></li></ul>',5),Re={id:"service-messages",tabindex:"-1"},Te=e("a",{class:"header-anchor",href:"#service-messages","aria-hidden":"true"},"#",-1),Le=a('<p>Module for subscribing to <strong>Fusion</strong> service messages (SignalR)</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-63" disabled="disabled"><label class="task-list-item-label" for="task-item-63"> tooling for <code>React</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-64" disabled="disabled"><label class="task-list-item-label" for="task-item-64"> Documentation</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-65" disabled="disabled"><label class="task-list-item-label" for="task-item-65"> Guide</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-66" disabled="disabled"><label class="task-list-item-label" for="task-item-66"> Cookbook</label></li></ul>',2),De={id:"person",tabindex:"-1"},Se=e("a",{class:"header-anchor",href:"#person","aria-hidden":"true"},"#",-1),Ge=e("p",null,"Module for resolving persons (person-card, person-picker, person-avatar, person-availability)",-1),Ie={id:"dynatrace",tabindex:"-1"},Be=e("a",{class:"header-anchor",href:"#dynatrace","aria-hidden":"true"},"#",-1);function Ee(Me,Ne){const i=c("Badge"),l=c("RouterLink");return n(),k("div",null,[m,h,s(i,{type:"tip",text:"Complete"}),s(i,{type:"warning",text:"Minimum viable product"}),s(i,{type:"info",text:"Active - Currently working on"}),s(i,{type:"note",text:"Planned - not started on"}),e("h2",p,[u,t(" Authentication "),s(i,{type:"tip",text:"Q1 2022"})]),f,e("h2",g,[x,t(" Foundation "),s(i,{type:"tip",text:"Q2 2022"})]),_,e("ul",y,[v,e("li",w,[F,e("label",q,[s(l,{to:"/modules/"},{default:o(()=>[t("documentation")]),_:1})])]),C]),e("h2",A,[Q,t(" Service Discovery "),s(i,{type:"warning",text:"Q2/Q3 2022"})]),R,T,L,e("ul",D,[S,e("li",G,[I,e("label",B,[s(l,{to:"/modules/service-discovery/"},{default:o(()=>[t("documentation")]),_:1})])]),E]),e("h2",M,[N,t(" Ag Grid "),s(i,{type:"tip",text:"Q3 2022"})]),P,e("ul",W,[e("li",V,[H,e("label",j,[s(l,{to:"/modules/ag-grid/"},{default:o(()=>[t("documentation")]),_:1})])]),z]),e("h2",O,[U,t(" Events "),s(i,{type:"warning",text:"Q3 2022"})]),J,K,e("ul",X,[Y,e("li",Z,[$,e("label",ee,[s(l,{to:"/modules/event/"},{default:o(()=>[t("documentation")]),_:1})])]),te]),e("h2",se,[ie,t(" Context "),s(i,{type:"warning",text:"Q3 2022"})]),ae,e("h2",le,[oe,t(" Application Loading "),s(i,{type:"info",text:"Q4 2022"})]),ce,e("h2",de,[ne,t(" Bookmarks "),s(i,{type:"info",text:"Q4 2022"})]),ke,e("h2",re,[be,t(" Widgets "),s(i,{type:"note",text:"Q4 2022"})]),me,e("h2",he,[pe,t(" Application migration "),s(i,{type:"note",text:"Q4 2022"})]),ue,e("h2",fe,[ge,t(" Navigation "),s(i,{type:"info",text:"Q4 2022"})]),xe,e("h2",_e,[ye,t(" Application CLI "),s(i,{type:"info",text:"Q4 2022"})]),ve,e("h2",we,[Fe,t(" Tasks "),s(i,{type:"warning",text:"need grooming"})]),qe,e("h2",Ce,[Ae,t(" Notification "),s(i,{type:"warning",text:"need grooming"})]),Qe,e("h2",Re,[Te,t(" Service Messages "),s(i,{type:"warning",text:"need grooming"})]),Le,e("h2",De,[Se,t(" Person "),s(i,{type:"warning",text:"need grooming"})]),Ge,e("h2",Ie,[Be,t(" Dynatrace "),s(i,{type:"warning",text:"need grooming"})])])}const Ve=d(b,[["render",Ee],["__file","index.html.vue"]]);export{Ve as default};
