(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,u=r(n(7294)),l=n(1003),a=n(7795),i=n(4465),c=n(2692),s=n(8245),d=n(9246),f=n(227),p=n(3468);let v=new Set;function m(e,t,n,r){if(l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(v.has(u))return;v.add(u)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function h(e){return"string"==typeof e?e:a.formatUrl(e)}let g=u.default.forwardRef(function(e,t){let n,r;let{href:a,as:v,children:g,prefetch:y,passHref:E,replace:b,shallow:w,scroll:C,locale:O,onClick:P,onMouseEnter:T,onTouchStart:N,legacyBehavior:R=!1}=e,S=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,R&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));let M=!1!==y,_=u.default.useContext(c.RouterContext),D=u.default.useContext(s.AppRouterContext),L=null!=_?_:D,k=!_,{href:A,as:x}=u.default.useMemo(()=>{if(!_){let e=h(a);return{href:e,as:v?h(v):e}}let[t,n]=l.resolveHref(_,a,!0);return{href:t,as:v?l.resolveHref(_,v):n||t}},[_,a,v]),I=u.default.useRef(A),F=u.default.useRef(x);R&&(r=u.default.Children.only(n));let j=R?r&&"object"==typeof r&&r.ref:t,[Z,W,B]=d.useIntersection({rootMargin:"200px"}),U=u.default.useCallback(e=>{(F.current!==x||I.current!==A)&&(B(),F.current=x,I.current=A),Z(e),j&&("function"==typeof j?j(e):"object"==typeof j&&(j.current=e))},[x,j,A,B,Z]);u.default.useEffect(()=>{L&&W&&M&&m(L,A,x,{locale:O})},[x,A,W,O,M,null==_?void 0:_.locale,L]);let K={ref:U,onClick(e){R||"function"!=typeof P||P(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,a,i,c,s,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};s?u.default.startTransition(v):v()}(e,L,A,x,b,w,C,O,k,M)},onMouseEnter(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(M||!k)&&m(L,A,x,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){R||"function"!=typeof N||N(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(M||!k)&&m(L,A,x,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if(!R||E||"a"===r.type&&!("href"in r.props)){let $=void 0!==O?O:null==_?void 0:_.locale,z=(null==_?void 0:_.isLocaleDomain)&&f.getDomainLocale(x,$,null==_?void 0:_.locales,null==_?void 0:_.domainLocales);K.href=z||p.addBasePath(i.addLocale(x,$,null==_?void 0:_.defaultLocale))}return R?u.default.cloneElement(r,K):u.default.createElement("a",Object.assign({},S,K),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[s,d]=r.useState(!1),[f,p]=r.useState(null);r.useEffect(()=>{if(u){if(!c&&!s&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},a.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let r=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(r)}},[f,c,n,t,s]);let v=r.useCallback(()=>{d(!1)},[]);return[p,s,v]};var r=n(7294),o=n(4686);let u="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(1551)},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9071:function(e,t,n){"use strict";let r,o;n.d(t,{x8:function(){return tt},VY:function(){return te},aV:function(){return e8},h_:function(){return e3},fC:function(){return e9},xz:function(){return e5}});var u,l,a,i,c,s,d=n(7462),f=n(7294),p=n.t(f,2);function v(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function m(...e){return t=>e.forEach(e=>{var n;"function"==typeof(n=e)?n(t):null!=n&&(n.current=t)})}function h(...e){return(0,f.useCallback)(m(...e),e)}let g=Boolean(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},y=p["useId".toString()]||(()=>void 0),E=0;function b(e){let[t,n]=f.useState(y());return g(()=>{e||n(e=>null!=e?e:String(E++))},[e]),e||(t?`radix-${t}`:"")}function w(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var C=n(3935);let O=(0,f.forwardRef)((e,t)=>{let{children:n,...r}=e,o=f.Children.toArray(n),u=o.find(N);if(u){let l=u.props.children,a=o.map(e=>e!==u?e:f.Children.count(l)>1?f.Children.only(null):(0,f.isValidElement)(l)?l.props.children:null);return(0,f.createElement)(P,(0,d.Z)({},r,{ref:t}),(0,f.isValidElement)(l)?(0,f.cloneElement)(l,void 0,a):null)}return(0,f.createElement)(P,(0,d.Z)({},r,{ref:t}),n)});O.displayName="Slot";let P=(0,f.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,f.isValidElement)(n)?(0,f.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],u=t[r],l=/^on[A-Z]/.test(r);l?o&&u?n[r]=(...e)=>{u(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...u}:"className"===r&&(n[r]=[o,u].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?m(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});P.displayName="SlotClone";let T=({children:e})=>(0,f.createElement)(f.Fragment,null,e);function N(e){return(0,f.isValidElement)(e)&&e.type===T}let R=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,f.forwardRef)((e,n)=>{let{asChild:r,...o}=e,u=r?O:t;return(0,f.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,f.createElement)(u,(0,d.Z)({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function S(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}let M="dismissableLayer.update",_=(0,f.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),D=(0,f.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:u,onPointerDownOutside:l,onFocusOutside:a,onInteractOutside:i,onDismiss:c,...s}=e,p=(0,f.useContext)(_),[m,g]=(0,f.useState)(null),y=null!==(n=null==m?void 0:m.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,E]=(0,f.useState)({}),b=h(t,e=>g(e)),w=Array.from(p.layers),[C]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),O=w.indexOf(C),P=m?w.indexOf(m):-1,T=p.layersWithOutsidePointerEventsDisabled.size>0,N=P>=O,D=function(e,t=null==globalThis?void 0:globalThis.document){let n=S(e),r=(0,f.useRef)(!1),o=(0,f.useRef)(()=>{});return(0,f.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let u={originalEvent:e};function l(){k("dismissableLayer.pointerDownOutside",n,u,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));!N||n||(null==l||l(e),null==i||i(e),e.defaultPrevented||null==c||c())},y),A=function(e,t=null==globalThis?void 0:globalThis.document){let n=S(e),r=(0,f.useRef)(!1);return(0,f.useEffect)(()=>{let e=e=>{e.target&&!r.current&&k("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));n||(null==a||a(e),null==i||i(e),e.defaultPrevented||null==c||c())},y);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=S(e);(0,f.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=P===p.layers.size-1;t&&(null==u||u(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},y),(0,f.useEffect)(()=>{if(m)return o&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(r=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(m)),p.layers.add(m),L(),()=>{o&&1===p.layersWithOutsidePointerEventsDisabled.size&&(y.body.style.pointerEvents=r)}},[m,y,o,p]),(0,f.useEffect)(()=>()=>{m&&(p.layers.delete(m),p.layersWithOutsidePointerEventsDisabled.delete(m),L())},[m,p]),(0,f.useEffect)(()=>{let e=()=>E({});return document.addEventListener(M,e),()=>document.removeEventListener(M,e)},[]),(0,f.createElement)(R.div,(0,d.Z)({},s,{ref:b,style:{pointerEvents:T?N?"auto":"none":void 0,...e.style},onFocusCapture:v(e.onFocusCapture,A.onFocusCapture),onBlurCapture:v(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:v(e.onPointerDownCapture,D.onPointerDownCapture)}))});function L(){let e=new CustomEvent(M);document.dispatchEvent(e)}function k(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,C.flushSync)(()=>o.dispatchEvent(u)):o.dispatchEvent(u)}function A(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}let x="focusScope.autoFocusOnMount",I="focusScope.autoFocusOnUnmount",F={bubbles:!1,cancelable:!0},j=(0,f.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...l}=e,[a,i]=(0,f.useState)(null),c=A(o),s=A(u),p=(0,f.useRef)(null),v=h(t,e=>i(e)),m=(0,f.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,f.useEffect)(()=>{if(r){function e(e){if(m.paused||!a)return;let t=e.target;a.contains(t)?p.current=t:B(p.current,{select:!0})}function t(e){if(m.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||B(p.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=a&&a.contains(t))&&B(a)});return a&&n.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,a,m.paused]),(0,f.useEffect)(()=>{if(a){U.add(m);let e=document.activeElement,t=a.contains(e);if(!t){let n=new CustomEvent(x,F);a.addEventListener(x,c),a.dispatchEvent(n),n.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(B(r,{select:t}),document.activeElement!==n)return}(Z(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&B(a))}return()=>{a.removeEventListener(x,c),setTimeout(()=>{let t=new CustomEvent(I,F);a.addEventListener(I,s),a.dispatchEvent(t),t.defaultPrevented||B(null!=e?e:document.body,{select:!0}),a.removeEventListener(I,s),U.remove(m)},0)}}},[a,c,s,m]);let g=(0,f.useCallback)(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let u=e.currentTarget,[l,a]=function(e){let t=Z(e),n=W(t,e),r=W(t.reverse(),e);return[n,r]}(u);l&&a?e.shiftKey||o!==a?e.shiftKey&&o===l&&(e.preventDefault(),n&&B(a,{select:!0})):(e.preventDefault(),n&&B(l,{select:!0})):o===u&&e.preventDefault()}},[n,r,m.paused]);return(0,f.createElement)(R.div,(0,d.Z)({tabIndex:-1},l,{ref:v,onKeyDown:g}))});function Z(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function W(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function B(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let U=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=K(o,e)).unshift(e)},remove(e){var t;null===(t=(o=K(o,e))[0])||void 0===t||t.resume()}});function K(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let $=(0,f.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?C.createPortal((0,f.createElement)(R.div,(0,d.Z)({},o,{ref:t})),r):null}),z=Boolean(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},Y=e=>{let{present:t,children:n}=e,r=function(e){var t;let[n,r]=(0,f.useState)(),o=(0,f.useRef)({}),u=(0,f.useRef)(e),l=(0,f.useRef)("none"),[a,i]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,f.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},e?"mounted":"unmounted"));return(0,f.useEffect)(()=>{let e=H(o.current);l.current="mounted"===a?e:"none"},[a]),z(()=>{let t=o.current,n=u.current;if(n!==e){let r=l.current,a=H(t);e?i("MOUNT"):"none"===a||(null==t?void 0:t.display)==="none"?i("UNMOUNT"):n&&r!==a?i("ANIMATION_OUT"):i("UNMOUNT"),u.current=e}},[e,i]),z(()=>{if(n){let e=e=>{let t=H(o.current),r=t.includes(e.animationName);e.target===n&&r&&(0,C.flushSync)(()=>i("ANIMATION_END"))},t=e=>{e.target===n&&(l.current=H(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}i("ANIMATION_END")},[n,i]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:(0,f.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):f.Children.only(n),u=h(r.ref,o.ref);return"function"==typeof n||r.isPresent?(0,f.cloneElement)(o,{ref:u}):null};function H(e){return(null==e?void 0:e.animationName)||"none"}Y.displayName="Presence";let X=0;function V(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var q=function(){return(q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var J="right-scroll-bar-position",Q="width-before-scroll-bar",ee=(void 0===u&&(u={}),(void 0===l&&(l=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=l(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=q({async:!0,ssr:!1},u),c),et=function(){},en=f.forwardRef(function(e,t){var n,r,o,u=f.useRef(null),l=f.useState({onScrollCapture:et,onWheelCapture:et,onTouchMoveCapture:et}),a=l[0],i=l[1],c=e.forwardProps,s=e.children,d=e.className,p=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,g=e.noIsolation,y=e.inert,E=e.allowPinchZoom,b=e.as,w=G(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=(n=[u,t],r=function(e){return n.forEach(function(t){var n;return"function"==typeof(n=t)?n(e):n&&(n.current=e),n})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),O=q(q({},w),a);return f.createElement(f.Fragment,null,v&&f.createElement(h,{sideCar:ee,removeScrollBar:p,shards:m,noIsolation:g,inert:y,setCallbacks:i,allowPinchZoom:!!E,lockRef:u}),c?f.cloneElement(f.Children.only(s),q(q({},O),{ref:C})):f.createElement(void 0===b?"div":b,q({},O,{className:d,ref:C}),s))});en.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},en.classNames={fullWidth:Q,zeroRight:J};var er=function(e){var t=e.sideCar,n=G(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,q({},n))};er.isSideCarExport=!0;var eo=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eu=function(){var e=eo();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},el=function(){var e=eu();return function(t){return e(t.styles,t.dynamic),null}},ea={left:0,top:0,right:0,gap:0},ei=function(e){return parseInt(e||"",10)||0},ec=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[ei(n),ei(r),ei(o)]},es=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ea;var t=ec(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ed=el(),ef=function(e,t,n,r){var o=e.left,u=e.top,l=e.right,a=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(l,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(J," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(Q," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(J," .").concat(J," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(Q," .").concat(Q," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},ep=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,u=f.useMemo(function(){return es(o)},[o]);return f.createElement(ed,{styles:ef(u,!t,o,n?"":"!important")})},ev=!1;if("undefined"!=typeof window)try{var em=Object.defineProperty({},"passive",{get:function(){return ev=!0,!0}});window.addEventListener("test",em,em),window.removeEventListener("test",em,em)}catch(eh){ev=!1}var eg=!!ev&&{passive:!1},ey=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},eE=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),eb(e,n)){var r=ew(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},eb=function(e,t){return"v"===e?ey(t,"overflowY"):ey(t,"overflowX")},ew=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eC=function(e,t,n,r,o){var u,l=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),a=l*r,i=n.target,c=t.contains(i),s=!1,d=a>0,f=0,p=0;do{var v=ew(e,i),m=v[0],h=v[1]-v[2]-l*m;(m||h)&&eb(e,i)&&(f+=h,p+=m),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return d&&(o&&0===f||!o&&a>f)?s=!0:!d&&(o&&0===p||!o&&-a>p)&&(s=!0),s},eO=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eP=function(e){return[e.deltaX,e.deltaY]},eT=function(e){return e&&"current"in e?e.current:e},eN=0,eR=[],eS=(ee.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(eN++)[0],u=f.useState(function(){return el()})[0],l=f.useRef(e);f.useEffect(function(){l.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eT),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!l.current.allowPinchZoom;var o,u=eO(e),a=n.current,i="deltaX"in e?e.deltaX:a[0]-u[0],c="deltaY"in e?e.deltaY:a[1]-u[1],s=e.target,d=Math.abs(i)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eE(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=eE(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||c)&&(r.current=o),!o)return!0;var p=r.current||o;return eC(p,t,e,"h"===p?i:c,!0)},[]),i=f.useCallback(function(e){if(eR.length&&eR[eR.length-1]===u){var n="deltaY"in e?eP(e):eO(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(eT).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=eO(e),r.current=void 0},[]),d=f.useCallback(function(t){c(t.type,eP(t),t.target,a(t,e.lockRef.current))},[]),p=f.useCallback(function(t){c(t.type,eO(t),t.target,a(t,e.lockRef.current))},[]);f.useEffect(function(){return eR.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",i,eg),document.addEventListener("touchmove",i,eg),document.addEventListener("touchstart",s,eg),function(){eR=eR.filter(function(e){return e!==u}),document.removeEventListener("wheel",i,eg),document.removeEventListener("touchmove",i,eg),document.removeEventListener("touchstart",s,eg)}},[]);var v=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(ep,{gapMode:"margin"}):null)}),er),eM=f.forwardRef(function(e,t){return f.createElement(en,q({},e,{ref:t,sideCar:eS}))});eM.classNames=en.classNames;var e_=new WeakMap,eD=new WeakMap,eL={},ek=0,eA=function(e){return e&&(e.host||eA(e.parentNode))},ex=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eA(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return Boolean(e)});eL[n]||(eL[n]=new WeakMap);var u=eL[n],l=[],a=new Set,i=new Set(o),c=function(e){!e||a.has(e)||(a.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||i.has(e)||Array.prototype.forEach.call(e.children,function(e){if(a.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,i=(e_.get(e)||0)+1,c=(u.get(e)||0)+1;e_.set(e,i),u.set(e,c),l.push(e),1===i&&o&&eD.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return s(t),a.clear(),ek++,function(){l.forEach(function(e){var t=e_.get(e)-1,o=u.get(e)-1;e_.set(e,t),u.set(e,o),t||(eD.has(e)||e.removeAttribute(r),eD.delete(e)),o||e.removeAttribute(n)}),--ek||(e_=new WeakMap,e_=new WeakMap,eD=new WeakMap,eL={})}},eI=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),ex(r,o,n,"aria-hidden")):function(){return null}};let eF="Dialog",[ej,eZ]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,f.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,f.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,f.createContext)(r),u=n.length;function l(t){let{scope:n,children:r,...l}=t,a=(null==n?void 0:n[e][u])||o,i=(0,f.useMemo)(()=>l,Object.values(l));return(0,f.createElement)(a.Provider,{value:i},r)}return n=[...n,r],l.displayName=t+"Provider",[l,function(n,l){let a=(null==l?void 0:l[e][u])||o,i=(0,f.useContext)(a);if(i)return i;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,f.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eF),[eW,eB]=ej(eF),eU=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:l=!0}=e,a=(0,f.useRef)(null),i=(0,f.useRef)(null),[c=!1,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,f.useState)(e),[r]=n,o=(0,f.useRef)(r),u=w(t);return(0,f.useEffect)(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=w(n),a=(0,f.useCallback)(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[u,e,o,l]);return[u?e:r,a]}({prop:r,defaultProp:o,onChange:u});return(0,f.createElement)(eW,{scope:t,triggerRef:a,contentRef:i,contentId:b(),titleId:b(),descriptionId:b(),open:c,onOpenChange:s,onOpenToggle:(0,f.useCallback)(()=>s(e=>!e),[s]),modal:l},n)},eK=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB("DialogTrigger",n),u=h(t,o.triggerRef);return(0,f.createElement)(R.button,(0,d.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e7(o.open)},r,{ref:u,onClick:v(e.onClick,o.onOpenToggle)}))}),e$="DialogPortal",[ez,eY]=ej(e$,{forceMount:void 0}),eH=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=eB(e$,t);return(0,f.createElement)(ez,{scope:t,forceMount:n},f.Children.map(r,e=>(0,f.createElement)(Y,{present:n||u.open},(0,f.createElement)($,{asChild:!0,container:o},e))))},eX="DialogOverlay",eV=(0,f.forwardRef)((e,t)=>{let n=eY(eX,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eB(eX,e.__scopeDialog);return u.modal?(0,f.createElement)(Y,{present:r||u.open},(0,f.createElement)(eq,(0,d.Z)({},o,{ref:t}))):null}),eq=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(eX,n);return(0,f.createElement)(eM,{as:O,allowPinchZoom:!0,shards:[o.contentRef]},(0,f.createElement)(R.div,(0,d.Z)({"data-state":e7(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eG="DialogContent",eJ=(0,f.forwardRef)((e,t)=>{let n=eY(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eB(eG,e.__scopeDialog);return(0,f.createElement)(Y,{present:r||u.open},u.modal?(0,f.createElement)(eQ,(0,d.Z)({},o,{ref:t})):(0,f.createElement)(e0,(0,d.Z)({},o,{ref:t})))}),eQ=(0,f.forwardRef)((e,t)=>{let n=eB(eG,e.__scopeDialog),r=(0,f.useRef)(null),o=h(t,n.contentRef,r);return(0,f.useEffect)(()=>{let e=r.current;if(e)return eI(e)},[]),(0,f.createElement)(e1,(0,d.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:v(e.onFocusOutside,e=>e.preventDefault())}))}),e0=(0,f.forwardRef)((e,t)=>{let n=eB(eG,e.__scopeDialog),r=(0,f.useRef)(!1),o=(0,f.useRef)(!1);return(0,f.createElement)(e1,(0,d.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus(t){var u,l;null===(u=e.onCloseAutoFocus)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside(t){var u,l;null===(u=e.onInteractOutside)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target,i=null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(a);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),e1=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...l}=e,a=eB(eG,n),i=(0,f.useRef)(null),c=h(t,i);return(0,f.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:V()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:V()),X++,()=>{1===X&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),X--}},[]),(0,f.createElement)(f.Fragment,null,(0,f.createElement)(j,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,f.createElement)(D,(0,d.Z)({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":e7(a.open)},l,{ref:c,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),e2=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB("DialogClose",n);return(0,f.createElement)(R.button,(0,d.Z)({type:"button"},r,{ref:t,onClick:v(e.onClick,()=>o.onOpenChange(!1))}))});function e7(e){return e?"open":"closed"}let[e4,e6]=function(e,t){let n=(0,f.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,f.useMemo)(()=>r,Object.values(r));return(0,f.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,f.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:eG,titleName:"DialogTitle",docsSlug:"dialog"}),e9=eU,e5=eK,e3=eH,e8=eV,te=eJ,tt=e2}}]);