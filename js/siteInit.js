import{a as g,b,c as P,e as z,f as Re,g as Ne,h as Pe,i as Be,j as De,k as Ue,m as Q}from"./chunk-HI54FJM2.js";import{$ as Oe,A as m,B as pe,C as E,D as M,E as R,F as ge,G as N,I as K,J as ve,K as we,N as ye,O as Ee,P as be,Q as Le,R as Ce,S as Se,T as Te,U as Ae,V as xe,W as He,X as ke,Y as _e,Z as Ie,_ as qe,a as p,aa as Me,c as D,e as x,f as de,k as I,l as ue,m as h,n as Z,o as q,p as O,q as me,r as he,s as V,t as U,u as fe,v as S,w,x as j,y as T,z as J}from"./chunk-VGHRTKYG.js";import"./chunk-GH2BBEV4.js";import{a as u}from"./chunk-I4M27FP3.js";import"./chunk-WIQECBEN.js";u();u();u();ue();var H=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),T.removeClass("close"),t?m.style="":g(m,"slideRightOut")):t?m.style="":g(m,"slideRightIn",()=>{m.addClass("on"),T.addClass("close")})},je=()=>{let e=m.querySelector(".inner");m.querySelector(".tab")&&e.removeChild(m.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=m.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&I(N,"none");return}s==="contents"&&I(N,"");let i=document.createElement("li"),a=document.createElement("span"),r=document.createTextNode(n.getAttribute("data-title"));a.appendChild(r),i.appendChild(a),i.addClass(s+" item"),o?(n.addClass(o),i.addClass(o)):n.removeClass("active"),i.addEventListener("click",c=>{let l=c.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(d=>{d.removeClass("active")}),m.find(".panel").forEach(d=>{d.removeClass("active")}),m.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.querySelector(".panels").style.paddingTop=""):m.querySelector(".panels").style.paddingTop=".625rem"},ze=()=>{let e=r=>{let c=t[r];if(!c||c.hasClass("current"))return;p.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),c.addClass("active current"),o[r]&&o[r].addClass("active");let l=c.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&n.hasClass("active")&&b(n,c.offsetTop-n.offsetHeight/4)},t=p.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((r,c)=>{let l=r.querySelector("a.toc-link"),d=document.getElementById(decodeURI(l.getAttribute("href").replace("#","")));if(!d)return null;let B=d.querySelector("a.anchor"),_=C=>{C.preventDefault();let ut=document.getElementById(decodeURI(C.currentTarget.getAttribute("href").replace("#","")));s=c,b(ut,null,()=>{e(c),s=null})};return l.addEventListener("click",_),B&&B.addEventListener("click",C=>{_(C),Ne(h.hostname+"/"+LOCAL.path+C.currentTarget.getAttribute("href"))}),d});let n=m.querySelector(".contents.panel"),i=r=>{let c=0,l=r[c];if(l.boundingClientRect.top>0)return c=o.indexOf(l.target),c===0?0:c-1;for(;c<r.length;c++)if(r[c].boundingClientRect.top<=0)l=r[c];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let r=new IntersectionObserver(c=>{let l=i(c)+(O<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(c=>{c&&r.observe(c)})})()},ee=()=>{b(0)},Ge=()=>{b(parseInt(String(x(fe))))},Fe=()=>{b(document.getElementById("comments"))},Ye=()=>{p.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};u();var v={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),v.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){v.lock||(h.loader.start&&g(S,0),document.body.addClass("loaded"),v.lock=!0)}};function te(){p.each(".overview .menu > .item",t=>{w.querySelector(".menu").appendChild(t.cloneNode(!0))}),S.addEventListener("click",v.vanish),T.addEventListener("click",H),document.querySelector(".dimmer").addEventListener("click",H),J.querySelector(".down").addEventListener("click",Ge),J.querySelector(".up").addEventListener("click",ee),E||Me(D(j,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),_e(E.querySelector(".player")),Ie(E.querySelector(".back-to-top")),qe(E.querySelector(".chat")),Oe(E.querySelector(".contents")),R.addEventListener("click",ee),ge.addEventListener("click",Fe),N.addEventListener("click",H),Be(M),document.querySelector("main").addEventListener("click",()=>{M.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}u();u();var $e=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});p.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),p.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};u();u();var y=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(U.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(U.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},We=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?y("dark"):y())},oe=e=>{U.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Xe=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?y("dark"):y()});let e=P.get("theme");e?y(e):h.darkmode&&y("dark")};var mt=document.getElementById("waves"),G=()=>{ye(x(w)),Ee(x(j)),be(K+x(mt)),we!==window.innerWidth&&H(null,1),Le(window.innerHeight),Ce(window.innerWidth)},Ze=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>K,n=window.scrollY>0;s?oe("#FFF"):oe("#222"),w.toggleClass("show",s),E.toggleClass("affix",n),pe.toggleClass("affix",n),m.toggleClass("affix",window.scrollY>ve&&document.body.offsetWidth>=991),typeof q.y>"u"&&(q.y=window.scrollY),Se(q.y-window.scrollY),O<0?(w.removeClass("up"),w.toggleClass("down",s)):O>0&&(w.removeClass("down"),w.toggleClass("up",s)),q.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";R.querySelector("span").innerText!==i&&(R.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&de(document.querySelector(".percent"),i)},Ve=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",Z+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&v.show(),clearTimeout(he);break;case"visible":e.setAttribute("href",Z+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&v.hide(1e3),Te(setTimeout(()=>{document.title=me},2e3));break}},{passive:!0})};u();u();u();var Je=32,Ke="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Qe=typeof window>"u",se=!Qe&&"loading"in HTMLImageElement.prototype,ne=!Qe&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function et(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function tt(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var ht=Math.PI,io=ht*2;function ae(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Je,updateSizesOnResize:n=!1,onImageLoad:i}={}){let a=new Set;for(let r of et(e)){let c=ie(r,{updateOnResize:n});if(n&&c&&a.add(c),!r.dataset.src&&!r.dataset.srcset)continue;if(ne||!se){ot(r),$(r),Y(r);continue}if(r.src||(r.src=Ke),r.complete&&r.naturalWidth>0){re(r,i);continue}let l=()=>re(r,i);r.addEventListener("load",l,{once:!0}),a.add(()=>r.removeEventListener("load",l))}return()=>{for(let r of a)r();a.clear()}}function re(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){ot(e),$(e),Y(e),t?.(e);return}let s=new Image,{srcset:n,src:i,sizes:a}=e.dataset;if(a==="auto"){let r=st(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);n&&(s.srcset=n),i&&(s.src=i),s.addEventListener("load",()=>{$(e),Y(e),t?.(e)},{once:!0})}var F=new WeakMap;function ie(e,t){if(e.dataset.sizes!=="auto")return;let o=st(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>ie(s,{skipChildren:!0})),t?.updateOnResize){if(!F.has(e)){let s=tt(()=>ie(e),500),n=new ResizeObserver(s);F.set(e,n),n.observe(e)}return()=>{let s=F.get(e);s&&(s.disconnect(),F.delete(e))}}}function Y(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function $(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ot(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach($),[...t.querySelectorAll("source[data-src]")].forEach(Y))}function st(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var nt=()=>{z(),m.hasClass("on")&&g(m,0,()=>{m.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),b(0)},ce=async e=>{Ae(0),xe(window.location.href),Q("katex"),await import("./copy-tex-S3XCJ3HC.js"),Q("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(i=>{if(i.isIntersecting){let a=i.target;a.style.backgroundImage=`url("${a.getAttribute("data-background-image")}")`,a.removeAttribute("data-background-image"),n.unobserve(a)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&p.each("script[data-pjax]",Ue),ke(document.title),G(),Ye(),je(),ze(),import("./post-XXBDAFBI.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(import("./comments-PU2N27CJ.js").then(({walinePageview:a,walineComment:r})=>{a(),r()}),s.disconnect())})},{root:null,threshold:.2});s.observe(o)}ae(),import("./comments-PU2N27CJ.js").then(async({walineRecentComments:s})=>{await s()}),Pe(),M.player.load(LOCAL.audio||h.audio||{}),v.hide(100),setTimeout(()=>{Re()},500),$e()};u();function A(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var ct=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function le(e,t,o,s){ct(t,n=>{A(e,i=>{i.addEventListener(n,o,s)})})}function k(e,t,o={}){ct(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});A(e,i=>{i.dispatchEvent(n)})})}function rt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function ft(e){e.tagName.toLowerCase()==="script"&&rt(e),A(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),rt(o))})}function pt(e,t,o,s=document){e.forEach(n=>{A(s.querySelectorAll(n),t,o)})}var W=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function lt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function gt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function it(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function vt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:i=0,scrollRestoration:a=!0,cacheBust:r=!0,timeout:c=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:i,scrollRestoration:a,cacheBust:r,timeout:c,currentUrlFullReload:l};return d.switches.head||(d.switches.head=it),d.switches.body||(d.switches.body=it),d}var X="data-pjax-state";function at(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=wt(e,t);if(s){e.setAttribute(X,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(X,"reload"),this.reload();return}e.setAttribute(X,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function wt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function yt(e){e.setAttribute(X,""),le(e,"click",t=>at.call(this,e,t)),le(e,"keyup",t=>{let o=t;o.keyCode===13&&at.call(this,e,o)})}function Et(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){k(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||W(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let a=document.createElement("a");a.href=i;let r=a.hash;a.href=o,r&&!a.hash&&(a.hash=r,o=a.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(c){return k(document,"pjax:error",s),console.error("Pjax switch fail: ",c),this.latestChance(o)}}function bt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Lt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function Ct(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,a=null,r=new XMLHttpRequest,c=t.timeout;if(r.onreadystatechange=()=>{r.readyState===4&&(r.status===200?o(r.responseText,r,e,t):r.status!==0&&o(null,r,e,t))},r.onerror=l=>{console.error(l),o(null,r,e,t)},r.ontimeout=()=>{o(null,r,e,t)},i&&i.length){let l=i.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":a=l;break}}return t.cacheBust&&(e=Lt(e,"t",Date.now())),r.open(n,e,!0),r.timeout=c,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-PJAX","true"),r.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),r.send(a),r}function St(e,t,o,s,n,i){let a=[];o.forEach(r=>{let c=s.querySelectorAll(r),l=n.querySelectorAll(r);if(c.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${r}' - new ${c.length}, old ${l.length}`);A(c,(d,B)=>{let _=l[B],C=e[r]?e[r].bind(this,_,d,i,t[r]):lt.bind(this,_,d,i);a.push(C)},this)},this),this.state.numPendingSwitches=a.length,a.forEach(r=>{r()})}function Tt(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let i=0;i<n.length;i++)if(n[i].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=vt(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=W(),this.parseDOM(document),le(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){A(this.getElements(t),bt,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return pt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return St.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){k(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){k(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,a=t.match(n);if(a&&a.length&&(a=a[0].match(i),a.length&&(a.shift(),a.forEach(r=>{let c=r.trim().split("=");c.length===1?s.documentElement.setAttribute(c[0],"true"):s.documentElement.setAttribute(c[0],c[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&Tt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),k(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{A(document.querySelectorAll(i),a=>{ft(a)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=W(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=W(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),k(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let a=i.hash.slice(1);a=decodeURIComponent(a);let r=0,c=document.getElementById(a)||document.getElementsByName(a)[0];if(c&&c.offsetParent)do r+=c.offsetTop,c=c.offsetParent;while(c);window.scrollTo(0,r)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=yt;L.prototype.doRequest=Ct;L.prototype.handleResponse=Et;L.switches={innerHTML:gt,outerHTML:lt};u();function dt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=D(V,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{g(s,{delay:2500,opacity:0},()=>{V.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),y("dark"),P.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),y(),P.set("theme","light"),n()}),g(s,1,()=>{setTimeout(t,210)},()=>{I(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var At=async()=>{dt(),te(),He(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-N3XXJNM4.js").then(({listen:e})=>{e(h.quicklink)}),We(),Ve(),Xe(),import("./index.esm-VYYOTZ2G.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Ze,{passive:!0}),window.addEventListener("resize",G,{passive:!0}),window.addEventListener("pjax:send",nt,{passive:!0}),window.addEventListener("pjax:success",ce,{passive:!0}),window.addEventListener("beforeunload",()=>{z()}),await ce(1)};De();window.addEventListener("DOMContentLoaded",At,{passive:!0});console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
