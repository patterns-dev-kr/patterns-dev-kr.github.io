let h=[],v=0;const S=4;let oe=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(o){return n.lc=t.push(o),()=>{for(let i=v+S;i<h.length;)h[i]===o?h.splice(i,S):i+=S;let r=t.indexOf(o);~r&&(t.splice(r,1),--n.lc)}},notify(o,r){let i=!h.length;for(let l of t)h.push(l,n.value,o,r);if(i){for(v=0;v<h.length;v+=S)h[v](h[v+1],h[v+2],h[v+3]);h.length=0}},off(){},set(o){let r=n.value;r!==o&&(n.value=o,n.notify(r))},subscribe(o){let r=n.listen(o);return o(n.value),r},value:e};return n};const re=oe(!1);function W(){const e=document.querySelector("header[data-header]");if(e){let n="";window.addEventListener("scroll",()=>{if(window.scrollY>0){n!=="scroll"&&(n="scroll",e.classList.add("scroll"));return}n!==""&&(n="",e.classList.remove("scroll"))},{passive:!0})}const t=document.querySelector("button[data-menu-button]");t&&t.addEventListener("click",()=>{re.set(!0)})}W();document.addEventListener("astro:after-swap",W);const T="data-astro-transition-persist";function ie(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function se(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function ae(e){for(const t of Array.from(document.head.children)){const n=ue(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ce(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${T}]`)){const o=n.getAttribute(T),r=e.querySelector(`[${T}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&de(n)&&!fe(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const le=()=>{const e=document.activeElement;if(e?.closest(`[${T}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>I({activeElement:e,start:t,end:n})}return()=>I({activeElement:e})}else return()=>I({activeElement:null})},I=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ue=(e,t)=>{const n=e.getAttribute(T),o=n&&t.head.querySelector(`[${T}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},de=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},fe=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),me=e=>{ie(e),se(e),ae(e);const t=le();ce(e.body,document.body),t()},he="astro:before-preparation",pe="astro:after-preparation",ge="astro:before-swap",we="astro:after-swap",ve=e=>document.dispatchEvent(new Event(e));class j extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,i,l,a,u,d,c){super(t,n),this.from=o,this.to=r,this.direction=i,this.navigationType=l,this.sourceElement=a,this.info=u,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class be extends j{formData;loader;constructor(t,n,o,r,i,l,a,u,d,c){super(he,{cancelable:!0},t,n,o,r,i,l,a,u),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ye extends j{direction;viewTransition;swap;constructor(t,n){super(ge,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>me(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Te(e,t,n,o,r,i,l,a,u){const d=new be(e,t,n,o,r,i,window.document,l,a,u);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(ve(pe),d.navigationType!=="traverse"&&N({scrollX,scrollY}))),d}function Ee(e,t){const n=new ye(e,t);return document.dispatchEvent(n),n.swap(),n}const Ae=history.pushState.bind(history),L=history.replaceState.bind(history),N=e=>{history.state&&(history.scrollRestoration="manual",L({...history.state,...e},""))},_=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),K=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,b,R;const Q=e=>document.dispatchEvent(new Event(e)),G=()=>Q("astro:page-load"),Se=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},q="data-astro-transition-persist",F="data-astro-transition",C="data-astro-transition-fallback";let $,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(L({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function Le(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function z(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ke(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const J=(e,t,n,o,r)=>{const i=K(t,e),l=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const u=history.state;L({...n.state,index:u.index,scrollX:u.scrollX,scrollY:u.scrollY},"",e.href)}else Ae({...n.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(document.title=l,R=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const u=history.state;location.href=e.href,history.state||(L(u,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Re(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${q}="${n.getAttribute(q)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function Y(e,t,n,o,r){async function i(u){function d(p){const m=p.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(C,u);const w=document.getAnimations().filter(p=>!c.includes(p)&&!d(p));return Promise.allSettled(w.map(p=>p.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const l=document.title,a=Ee(e,n.viewTransition);J(a.to,a.from,t,l,o),Q(we),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function xe(){return f?.controller.abort(),f={controller:new AbortController}}async function Z(e,t,n,o,r){const i=xe();if(!O()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const l=r?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&N({scrollX,scrollY}),K(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){J(n,t,o,document.title,r),i===f&&(f=void 0);return}const a=await Te(t,n,e,l,o.sourceElement,o.info,i.controller.signal,o.formData,u);if(a.defaultPrevented||a.signal.aborted){i===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function u(s){const w=s.to.href,p={signal:s.signal};if(s.formData){p.method="POST";const y=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");p.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await Le(w,p);if(m===null){s.preventDefault();return}if(m.redirected){const y=new URL(m.redirected);if(y.origin!==s.to.origin){s.preventDefault();return}s.to=y}if($??=new DOMParser,s.newDocument=$.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const P=Re(s.newDocument);P.length&&!s.signal.aborted&&await Promise.all(P)}async function d(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(F,a.direction),_)c.viewTransition=document.startViewTransition(async()=>await Y(a,o,c,r));else{const s=(async()=>{await Promise.resolve(),await Y(a,o,c,r,z())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(C)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await ke(),G(),Se()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===b&&(b=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(F),document.documentElement.removeAttribute(C)});try{await c.viewTransition?.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function X(e,t){await Z("forward",R,new URL(e,location.href),t??{})}function Pe(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>E?"forward":"back";E=n,Z(o,R,new URL(location.href),{},t)}const U=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&N({scrollX,scrollY})};{if(_||z()!=="none")if(R=new URL(location.href),addEventListener("popstate",Pe),addEventListener("load",G),"onscrollend"in window)addEventListener("scrollend",U);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,U();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const ee=new Set,k=new WeakSet;let M,te,B=!1;function Ie(e){B||(B=!0,M??=e?.prefetchAll,te??=e?.defaultStrategy??"hover",De(),Ce(),Me(),_e())}function De(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&x(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Ce(){let e;document.body.addEventListener("focusin",o=>{A(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H(()=>{for(const o of document.getElementsByTagName("a"))k.has(o)||A(o,"hover")&&(k.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Me(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))k.has(t)||A(t,"viewport")&&(k.add(t),e??=Ne(),e.observe(t))})}function Ne(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,i=e.get(r);o.isIntersecting?(i&&clearTimeout(i),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),x(r.href)},300))):i&&(clearTimeout(i),e.delete(r))}})}function _e(){H(()=>{for(const e of document.getElementsByTagName("a"))A(e,"load")&&x(e.href)})}function x(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Oe(e,n))if(ee.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Oe(e,t){if(!navigator.onLine||!t&&ne())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!ee.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||M)&&ne()?!0:n==null&&M||n===""?t===te:n===t}function ne(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function He(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function V(e){return e.dataset.astroReload!==void 0}(_||He()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;V(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),X(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||V(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),l=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const u=o?.getAttribute("formmethod")??l??"get";if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(u==="get"){const c=new URLSearchParams(r),s=new URL(a);s.search=c.toString(),a=s.toString()}else d.formData=r;e.preventDefault(),X(a,d)}),Ie({prefetchAll:!0}));const D=()=>{if(typeof localStorage>"u")return{preferred:"light",theme:"auto"};const e=localStorage.getItem("theme");return{preferred:matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",theme:e==="dark"||e==="light"?e:"auto"}},{documentElement:{classList:g}}=document;class qe extends HTMLElement{_initClass=()=>{const{preferred:t,theme:n}=D();n==="auto"?(localStorage.removeItem("theme"),g.add("auto")):(localStorage.setItem("theme",n),g.remove("auto")),(n==="auto"?t:n)==="dark"?g.add("dark"):g.remove("dark")};_onClick=()=>{const{preferred:t,theme:n}=D(),o=this.nextMap[n];o==="auto"?(localStorage.removeItem("theme"),g.add("auto")):(localStorage.setItem("theme",o),g.remove("auto"));const r=o==="auto"?t:o;r==="dark"?g.add("dark"):g.remove("dark"),window.dispatchEvent(new CustomEvent("theme",{detail:{actual:r}}))};_onPrefersColorSchemeChange=()=>{const{preferred:t,theme:n}=D();n==="auto"&&(t==="dark"?g.add("dark"):g.remove("dark"),window.dispatchEvent(new CustomEvent("theme",{detail:{actual:t}})))};mql=window.matchMedia("(prefers-color-scheme: light)");nextMap={auto:"light",dark:"auto",light:"dark"};connectedCallback(){this._initClass(),this.querySelector("button")?.addEventListener("click",this._onClick),this.mql.addEventListener("change",this._onPrefersColorSchemeChange)}disconnectedCallback(){this.mql.removeEventListener("change",this._onPrefersColorSchemeChange)}}customElements.define("custom-theme-switcher",qe);export{re as $};