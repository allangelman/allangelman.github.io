(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{4184:function(e,t){var n; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===u){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9071:function(e,t,n){"use strict";let r,o;n.d(t,{x8:function(){return tt},VY:function(){return te},aV:function(){return e5},h_:function(){return e8},fC:function(){return e9},xz:function(){return e6}});var u,a,i,l,c,s,d=n(7462),f=n(7294),p=n.t(f,2);function v(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function m(...e){return t=>e.forEach(e=>{var n;"function"==typeof(n=e)?n(t):null!=n&&(n.current=t)})}function h(...e){return(0,f.useCallback)(m(...e),e)}let g=Boolean(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},E=p["useId".toString()]||(()=>void 0),y=0;function b(e){let[t,n]=f.useState(E());return g(()=>{e||n(e=>null!=e?e:String(y++))},[e]),e||(t?`radix-${t}`:"")}function w(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var C=n(3935);let O=(0,f.forwardRef)((e,t)=>{let{children:n,...r}=e,o=f.Children.toArray(n),u=o.find(T);if(u){let a=u.props.children,i=o.map(e=>e!==u?e:f.Children.count(a)>1?f.Children.only(null):(0,f.isValidElement)(a)?a.props.children:null);return(0,f.createElement)(N,(0,d.Z)({},r,{ref:t}),(0,f.isValidElement)(a)?(0,f.cloneElement)(a,void 0,i):null)}return(0,f.createElement)(N,(0,d.Z)({},r,{ref:t}),n)});O.displayName="Slot";let N=(0,f.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,f.isValidElement)(n)?(0,f.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],u=t[r],a=/^on[A-Z]/.test(r);a?o&&u?n[r]=(...e)=>{u(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...u}:"className"===r&&(n[r]=[o,u].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?m(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});N.displayName="SlotClone";let S=({children:e})=>(0,f.createElement)(f.Fragment,null,e);function T(e){return(0,f.isValidElement)(e)&&e.type===S}let R=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,f.forwardRef)((e,n)=>{let{asChild:r,...o}=e,u=r?O:t;return(0,f.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,f.createElement)(u,(0,d.Z)({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function P(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}let D="dismissableLayer.update",A=(0,f.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),L=(0,f.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:u,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...s}=e,p=(0,f.useContext)(A),[m,g]=(0,f.useState)(null),E=null!==(n=null==m?void 0:m.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,y]=(0,f.useState)({}),b=h(t,e=>g(e)),w=Array.from(p.layers),[C]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),O=w.indexOf(C),N=m?w.indexOf(m):-1,S=p.layersWithOutsidePointerEventsDisabled.size>0,T=N>=O,L=function(e,t=null==globalThis?void 0:globalThis.document){let n=P(e),r=(0,f.useRef)(!1),o=(0,f.useRef)(()=>{});return(0,f.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let u={originalEvent:e};function a(){k("dismissableLayer.pointerDownOutside",n,u,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=a,t.addEventListener("click",o.current,{once:!0})):a()}r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));!T||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},E),_=function(e,t=null==globalThis?void 0:globalThis.document){let n=P(e),r=(0,f.useRef)(!1);return(0,f.useEffect)(()=>{let e=e=>{e.target&&!r.current&&k("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));n||(null==i||i(e),null==l||l(e),e.defaultPrevented||null==c||c())},E);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=P(e);(0,f.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=N===p.layers.size-1;t&&(null==u||u(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},E),(0,f.useEffect)(()=>{if(m)return o&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(m)),p.layers.add(m),M(),()=>{o&&1===p.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[m,E,o,p]),(0,f.useEffect)(()=>()=>{m&&(p.layers.delete(m),p.layersWithOutsidePointerEventsDisabled.delete(m),M())},[m,p]),(0,f.useEffect)(()=>{let e=()=>y({});return document.addEventListener(D,e),()=>document.removeEventListener(D,e)},[]),(0,f.createElement)(R.div,(0,d.Z)({},s,{ref:b,style:{pointerEvents:S?T?"auto":"none":void 0,...e.style},onFocusCapture:v(e.onFocusCapture,_.onFocusCapture),onBlurCapture:v(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:v(e.onPointerDownCapture,L.onPointerDownCapture)}))});function M(){let e=new CustomEvent(D);document.dispatchEvent(e)}function k(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,C.flushSync)(()=>o.dispatchEvent(u)):o.dispatchEvent(u)}function _(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}let x="focusScope.autoFocusOnMount",I="focusScope.autoFocusOnUnmount",F={bubbles:!1,cancelable:!0},W=(0,f.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[i,l]=(0,f.useState)(null),c=_(o),s=_(u),p=(0,f.useRef)(null),v=h(t,e=>l(e)),m=(0,f.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,f.useEffect)(()=>{if(r){function e(e){if(m.paused||!i)return;let t=e.target;i.contains(t)?p.current=t:B(p.current,{select:!0})}function t(e){if(m.paused||!i)return;let t=e.relatedTarget;null===t||i.contains(t)||B(p.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=i&&i.contains(t))&&B(i)});return i&&n.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,i,m.paused]),(0,f.useEffect)(()=>{if(i){U.add(m);let e=document.activeElement,t=i.contains(e);if(!t){let n=new CustomEvent(x,F);i.addEventListener(x,c),i.dispatchEvent(n),n.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(B(r,{select:t}),document.activeElement!==n)return}(Z(i).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&B(i))}return()=>{i.removeEventListener(x,c),setTimeout(()=>{let t=new CustomEvent(I,F);i.addEventListener(I,s),i.dispatchEvent(t),t.defaultPrevented||B(null!=e?e:document.body,{select:!0}),i.removeEventListener(I,s),U.remove(m)},0)}}},[i,c,s,m]);let g=(0,f.useCallback)(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let u=e.currentTarget,[a,i]=function(e){let t=Z(e),n=j(t,e),r=j(t.reverse(),e);return[n,r]}(u);a&&i?e.shiftKey||o!==i?e.shiftKey&&o===a&&(e.preventDefault(),n&&B(i,{select:!0})):(e.preventDefault(),n&&B(a,{select:!0})):o===u&&e.preventDefault()}},[n,r,m.paused]);return(0,f.createElement)(R.div,(0,d.Z)({tabIndex:-1},a,{ref:v,onKeyDown:g}))});function Z(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function j(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function B(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let U=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=K(o,e)).unshift(e)},remove(e){var t;null===(t=(o=K(o,e))[0])||void 0===t||t.resume()}});function K(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let $=(0,f.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?C.createPortal((0,f.createElement)(R.div,(0,d.Z)({},o,{ref:t})),r):null}),Y=Boolean(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},z=e=>{let{present:t,children:n}=e,r=function(e){var t;let[n,r]=(0,f.useState)(),o=(0,f.useRef)({}),u=(0,f.useRef)(e),a=(0,f.useRef)("none"),[i,l]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,f.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},e?"mounted":"unmounted"));return(0,f.useEffect)(()=>{let e=X(o.current);a.current="mounted"===i?e:"none"},[i]),Y(()=>{let t=o.current,n=u.current;if(n!==e){let r=a.current,i=X(t);e?l("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?l("UNMOUNT"):n&&r!==i?l("ANIMATION_OUT"):l("UNMOUNT"),u.current=e}},[e,l]),Y(()=>{if(n){let e=e=>{let t=X(o.current),r=t.includes(e.animationName);e.target===n&&r&&(0,C.flushSync)(()=>l("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=X(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:(0,f.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):f.Children.only(n),u=h(r.ref,o.ref);return"function"==typeof n||r.isPresent?(0,f.cloneElement)(o,{ref:u}):null};function X(e){return(null==e?void 0:e.animationName)||"none"}z.displayName="Presence";let V=0;function H(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var q=function(){return(q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var J="right-scroll-bar-position",Q="width-before-scroll-bar",ee=(void 0===u&&(u={}),(void 0===a&&(a=function(e){return e}),i=[],l=!1,c={read:function(){if(l)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,l);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(l=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){l=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=q({async:!0,ssr:!1},u),c),et=function(){},en=f.forwardRef(function(e,t){var n,r,o,u=f.useRef(null),a=f.useState({onScrollCapture:et,onWheelCapture:et,onTouchMoveCapture:et}),i=a[0],l=a[1],c=e.forwardProps,s=e.children,d=e.className,p=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,g=e.noIsolation,E=e.inert,y=e.allowPinchZoom,b=e.as,w=G(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=(n=[u,t],r=function(e){return n.forEach(function(t){var n;return"function"==typeof(n=t)?n(e):n&&(n.current=e),n})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),O=q(q({},w),i);return f.createElement(f.Fragment,null,v&&f.createElement(h,{sideCar:ee,removeScrollBar:p,shards:m,noIsolation:g,inert:E,setCallbacks:l,allowPinchZoom:!!y,lockRef:u}),c?f.cloneElement(f.Children.only(s),q(q({},O),{ref:C})):f.createElement(void 0===b?"div":b,q({},O,{className:d,ref:C}),s))});en.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},en.classNames={fullWidth:Q,zeroRight:J};var er=function(e){var t=e.sideCar,n=G(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,q({},n))};er.isSideCarExport=!0;var eo=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eu=function(){var e=eo();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ea=function(){var e=eu();return function(t){return e(t.styles,t.dynamic),null}},ei={left:0,top:0,right:0,gap:0},el=function(e){return parseInt(e||"",10)||0},ec=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[el(n),el(r),el(o)]},es=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ei;var t=ec(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ed=ea(),ef=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(J," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(Q," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(J," .").concat(J," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(Q," .").concat(Q," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},ep=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,u=f.useMemo(function(){return es(o)},[o]);return f.createElement(ed,{styles:ef(u,!t,o,n?"":"!important")})},ev=!1;if("undefined"!=typeof window)try{var em=Object.defineProperty({},"passive",{get:function(){return ev=!0,!0}});window.addEventListener("test",em,em),window.removeEventListener("test",em,em)}catch(eh){ev=!1}var eg=!!ev&&{passive:!1},eE=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ey=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),eb(e,n)){var r=ew(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},eb=function(e,t){return"v"===e?eE(t,"overflowY"):eE(t,"overflowX")},ew=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eC=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,l=n.target,c=t.contains(l),s=!1,d=i>0,f=0,p=0;do{var v=ew(e,l),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&eb(e,l)&&(f+=h,p+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&i>f)?s=!0:!d&&(o&&0===p||!o&&-i>p)&&(s=!0),s},eO=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eN=function(e){return[e.deltaX,e.deltaY]},eS=function(e){return e&&"current"in e?e.current:e},eT=0,eR=[],eP=(ee.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(eT++)[0],u=f.useState(function(){return ea()})[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eS),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,u=eO(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-u[0],c="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ey(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ey(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return eC(p,t,e,"h"===p?l:c,!0)},[]),l=f.useCallback(function(e){if(eR.length&&eR[eR.length-1]===u){var n="deltaY"in e?eN(e):eO(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eS).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=eO(e),r.current=void 0},[]),d=f.useCallback(function(t){c(t.type,eN(t),t.target,i(t,e.lockRef.current))},[]),p=f.useCallback(function(t){c(t.type,eO(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return eR.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,eg),document.addEventListener("touchmove",l,eg),document.addEventListener("touchstart",s,eg),function(){eR=eR.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,eg),document.removeEventListener("touchmove",l,eg),document.removeEventListener("touchstart",s,eg)}},[]);var v=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(ep,{gapMode:"margin"}):null)}),er),eD=f.forwardRef(function(e,t){return f.createElement(en,q({},e,{ref:t,sideCar:eP}))});eD.classNames=en.classNames;var eA=new WeakMap,eL=new WeakMap,eM={},ek=0,e_=function(e){return e&&(e.host||e_(e.parentNode))},ex=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=e_(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return Boolean(e)});eM[n]||(eM[n]=new WeakMap);var u=eM[n],a=[],i=new Set,l=new Set(o),c=function(e){!e||i.has(e)||(i.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(i.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eA.get(e)||0)+1,c=(u.get(e)||0)+1;eA.set(e,l),u.set(e,c),a.push(e),1===l&&o&&eL.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return s(t),i.clear(),ek++,function(){a.forEach(function(e){var t=eA.get(e)-1,o=u.get(e)-1;eA.set(e,t),u.set(e,o),t||(eL.has(e)||e.removeAttribute(r),eL.delete(e)),o||e.removeAttribute(n)}),--ek||(eA=new WeakMap,eA=new WeakMap,eL=new WeakMap,eM={})}},eI=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),ex(r,o,n,"aria-hidden")):function(){return null}};let eF="Dialog",[eW,eZ]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,f.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,f.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,f.createContext)(r),u=n.length;function a(t){let{scope:n,children:r,...a}=t,i=(null==n?void 0:n[e][u])||o,l=(0,f.useMemo)(()=>a,Object.values(a));return(0,f.createElement)(i.Provider,{value:l},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let i=(null==a?void 0:a[e][u])||o,l=(0,f.useContext)(i);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,f.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eF),[ej,eB]=eW(eF),eU=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:a=!0}=e,i=(0,f.useRef)(null),l=(0,f.useRef)(null),[c=!1,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,f.useState)(e),[r]=n,o=(0,f.useRef)(r),u=w(t);return(0,f.useEffect)(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=w(n),i=(0,f.useCallback)(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else o(t)},[u,e,o,a]);return[u?e:r,i]}({prop:r,defaultProp:o,onChange:u});return(0,f.createElement)(ej,{scope:t,triggerRef:i,contentRef:l,contentId:b(),titleId:b(),descriptionId:b(),open:c,onOpenChange:s,onOpenToggle:(0,f.useCallback)(()=>s(e=>!e),[s]),modal:a},n)},eK=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB("DialogTrigger",n),u=h(t,o.triggerRef);return(0,f.createElement)(R.button,(0,d.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e4(o.open)},r,{ref:u,onClick:v(e.onClick,o.onOpenToggle)}))}),e$="DialogPortal",[eY,ez]=eW(e$,{forceMount:void 0}),eX=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=eB(e$,t);return(0,f.createElement)(eY,{scope:t,forceMount:n},f.Children.map(r,e=>(0,f.createElement)(z,{present:n||u.open},(0,f.createElement)($,{asChild:!0,container:o},e))))},eV="DialogOverlay",eH=(0,f.forwardRef)((e,t)=>{let n=ez(eV,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eB(eV,e.__scopeDialog);return u.modal?(0,f.createElement)(z,{present:r||u.open},(0,f.createElement)(eq,(0,d.Z)({},o,{ref:t}))):null}),eq=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(eV,n);return(0,f.createElement)(eD,{as:O,allowPinchZoom:!0,shards:[o.contentRef]},(0,f.createElement)(R.div,(0,d.Z)({"data-state":e4(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eG="DialogContent",eJ=(0,f.forwardRef)((e,t)=>{let n=ez(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eB(eG,e.__scopeDialog);return(0,f.createElement)(z,{present:r||u.open},u.modal?(0,f.createElement)(eQ,(0,d.Z)({},o,{ref:t})):(0,f.createElement)(e0,(0,d.Z)({},o,{ref:t})))}),eQ=(0,f.forwardRef)((e,t)=>{let n=eB(eG,e.__scopeDialog),r=(0,f.useRef)(null),o=h(t,n.contentRef,r);return(0,f.useEffect)(()=>{let e=r.current;if(e)return eI(e)},[]),(0,f.createElement)(e1,(0,d.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:v(e.onFocusOutside,e=>e.preventDefault())}))}),e0=(0,f.forwardRef)((e,t)=>{let n=eB(eG,e.__scopeDialog),r=(0,f.useRef)(!1),o=(0,f.useRef)(!1);return(0,f.createElement)(e1,(0,d.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus(t){var u,a;null===(u=e.onCloseAutoFocus)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside(t){var u,a;null===(u=e.onInteractOutside)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target,l=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(i);l&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),e1=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,i=eB(eG,n),l=(0,f.useRef)(null),c=h(t,l);return(0,f.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:H()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:H()),V++,()=>{1===V&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),V--}},[]),(0,f.createElement)(f.Fragment,null,(0,f.createElement)(W,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,f.createElement)(L,(0,d.Z)({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":e4(i.open)},a,{ref:c,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),e2=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB("DialogClose",n);return(0,f.createElement)(R.button,(0,d.Z)({type:"button"},r,{ref:t,onClick:v(e.onClick,()=>o.onOpenChange(!1))}))});function e4(e){return e?"open":"closed"}let[e7,e3]=function(e,t){let n=(0,f.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,f.useMemo)(()=>r,Object.values(r));return(0,f.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,f.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:eG,titleName:"DialogTitle",docsSlug:"dialog"}),e9=eU,e6=eK,e8=eX,e5=eH,te=eJ,tt=e2}}]);