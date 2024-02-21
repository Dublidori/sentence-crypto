var $h=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var L=(t,e,n)=>($h(t,e,"read from private field"),n?n.call(t):e.get(t)),ke=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ge=(t,e,n,r)=>($h(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var Ru=(t,e,n,r)=>({set _(o){ge(t,e,o,n)},get _(){return L(t,e,r)}}),mt=(t,e,n)=>($h(t,e,"access private method"),n);function I4(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(t,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var l1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function su(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function B$(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var z2={exports:{}},Rf={},W2={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au=Symbol.for("react.element"),k4=Symbol.for("react.portal"),$4=Symbol.for("react.fragment"),T4=Symbol.for("react.strict_mode"),P4=Symbol.for("react.profiler"),O4=Symbol.for("react.provider"),N4=Symbol.for("react.context"),M4=Symbol.for("react.forward_ref"),L4=Symbol.for("react.suspense"),j4=Symbol.for("react.memo"),D4=Symbol.for("react.lazy"),Jm=Symbol.iterator;function U4(t){return t===null||typeof t!="object"?null:(t=Jm&&t[Jm]||t["@@iterator"],typeof t=="function"?t:null)}var F2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H2=Object.assign,V2={};function qa(t,e,n){this.props=t,this.context=e,this.refs=V2,this.updater=n||F2}qa.prototype.isReactComponent={};qa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z2(){}Z2.prototype=qa.prototype;function c1(t,e,n){this.props=t,this.context=e,this.refs=V2,this.updater=n||F2}var u1=c1.prototype=new Z2;u1.constructor=c1;H2(u1,qa.prototype);u1.isPureReactComponent=!0;var Xm=Array.isArray,G2=Object.prototype.hasOwnProperty,d1={current:null},q2={key:!0,ref:!0,__self:!0,__source:!0};function K2(t,e,n){var r,o={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)G2.call(e,r)&&!q2.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:au,type:t,key:i,ref:s,props:o,_owner:d1.current}}function B4(t,e){return{$$typeof:au,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function f1(t){return typeof t=="object"&&t!==null&&t.$$typeof===au}function z4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eg=/\/+/g;function Th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z4(""+t.key):e.toString(36)}function td(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case au:case k4:s=!0}}if(s)return s=t,o=o(s),t=r===""?"."+Th(s,0):r,Xm(o)?(n="",t!=null&&(n=t.replace(eg,"$&/")+"/"),td(o,e,n,"",function(c){return c})):o!=null&&(f1(o)&&(o=B4(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(eg,"$&/")+"/")+t)),e.push(o)),1;if(s=0,r=r===""?".":r+":",Xm(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Th(i,a);s+=td(i,e,n,l,o)}else if(l=U4(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Th(i,a++),s+=td(i,e,n,l,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Au(t,e,n){if(t==null)return t;var r=[],o=0;return td(t,r,"","",function(i){return e.call(n,i,o++)}),r}function W4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},nd={transition:null},F4={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:nd,ReactCurrentOwner:d1};Ie.Children={map:Au,forEach:function(t,e,n){Au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Au(t,function(){e++}),e},toArray:function(t){return Au(t,function(e){return e})||[]},only:function(t){if(!f1(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Component=qa;Ie.Fragment=$4;Ie.Profiler=P4;Ie.PureComponent=c1;Ie.StrictMode=T4;Ie.Suspense=L4;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F4;Ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H2({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=d1.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G2.call(e,l)&&!q2.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:au,type:t.type,key:o,ref:i,props:r,_owner:s}};Ie.createContext=function(t){return t={$$typeof:N4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O4,_context:t},t.Consumer=t};Ie.createElement=K2;Ie.createFactory=function(t){var e=K2.bind(null,t);return e.type=t,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:M4,render:t}};Ie.isValidElement=f1;Ie.lazy=function(t){return{$$typeof:D4,_payload:{_status:-1,_result:t},_init:W4}};Ie.memo=function(t,e){return{$$typeof:j4,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=nd.transition;nd.transition={};try{t()}finally{nd.transition=e}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ie.useContext=function(t){return Qt.current.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ie.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ie.useId=function(){return Qt.current.useId()};Ie.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ie.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ie.useRef=function(t){return Qt.current.useRef(t)};Ie.useState=function(t){return Qt.current.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return Qt.current.useTransition()};Ie.version="18.2.0";W2.exports=Ie;var Q=W2.exports;const Xr=su(Q),H4=I4({__proto__:null,default:Xr},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V4=Q,Z4=Symbol.for("react.element"),G4=Symbol.for("react.fragment"),q4=Object.prototype.hasOwnProperty,K4=V4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y4={key:!0,ref:!0,__self:!0,__source:!0};function Y2(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)q4.call(e,r)&&!Y4.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:Z4,type:t,key:i,ref:s,props:o,_owner:K4.current}}Rf.Fragment=G4;Rf.jsx=Y2;Rf.jsxs=Y2;z2.exports=Rf;var M=z2.exports,R0={},Q2={exports:{}},Sn={},J2={exports:{}},X2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,K){var Y=O.length;O.push(K);e:for(;0<Y;){var te=Y-1>>>1,ue=O[te];if(0<o(ue,K))O[te]=K,O[Y]=ue,Y=te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],Y=O.pop();if(Y!==K){O[0]=Y;e:for(var te=0,ue=O.length,ze=ue>>>1;te<ze;){var De=2*(te+1)-1,pt=O[De],Rt=De+1,Bt=O[Rt];if(0>o(pt,Y))Rt<ue&&0>o(Bt,pt)?(O[te]=Bt,O[Rt]=Y,te=Rt):(O[te]=pt,O[De]=Y,te=De);else if(Rt<ue&&0>o(Bt,Y))O[te]=Bt,O[Rt]=Y,te=Rt;else break e}}return K}function o(O,K){var Y=O.sortIndex-K.sortIndex;return Y!==0?Y:O.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,h=null,p=3,m=!1,x=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=O)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(O){if(C=!1,y(O),!x)if(n(l)!==null)x=!0,q(A);else{var K=n(c);K!==null&&ae(S,K.startTime-O)}}function A(O,K){x=!1,C&&(C=!1,g(N),N=-1),m=!0;var Y=p;try{for(y(K),h=n(l);h!==null&&(!(h.expirationTime>K)||O&&!W());){var te=h.callback;if(typeof te=="function"){h.callback=null,p=h.priorityLevel;var ue=te(h.expirationTime<=K);K=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&r(l),y(K)}else r(l);h=n(l)}if(h!==null)var ze=!0;else{var De=n(c);De!==null&&ae(S,De.startTime-K),ze=!1}return ze}finally{h=null,p=Y,m=!1}}var k=!1,P=null,N=-1,V=5,j=-1;function W(){return!(t.unstable_now()-j<V)}function ve(){if(P!==null){var O=t.unstable_now();j=O;var K=!0;try{K=P(!0,O)}finally{K?Te():(k=!1,P=null)}}else k=!1}var Te;if(typeof w=="function")Te=function(){w(ve)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,X=le.port2;le.port1.onmessage=ve,Te=function(){X.postMessage(null)}}else Te=function(){b(ve,0)};function q(O){P=O,k||(k=!0,Te())}function ae(O,K){N=b(function(){O(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,q(A))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Y=p;p=K;try{return O()}finally{p=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=p;p=O;try{return K()}finally{p=Y}},t.unstable_scheduleCallback=function(O,K,Y){var te=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,O){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Y+ue,O={id:u++,callback:K,priorityLevel:O,startTime:Y,expirationTime:ue,sortIndex:-1},Y>te?(O.sortIndex=Y,e(c,O),n(l)===null&&O===n(c)&&(C?(g(N),N=-1):C=!0,ae(S,Y-te))):(O.sortIndex=ue,e(l,O),x||m||(x=!0,q(A))),O},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(O){var K=p;return function(){var Y=p;p=K;try{return O.apply(this,arguments)}finally{p=Y}}}})(X2);J2.exports=X2;var Q4=J2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e3=Q,vn=Q4;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t3=new Set,Vl={};function ys(t,e){ga(t,e),ga(t+"Capture",e)}function ga(t,e){for(Vl[t]=e,t=0;t<e.length;t++)t3.add(e[t])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),A0=Object.prototype.hasOwnProperty,J4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function X4(t){return A0.call(ng,t)?!0:A0.call(tg,t)?!1:J4.test(t)?ng[t]=!0:(tg[t]=!0,!1)}function e6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t6(t,e,n,r){if(e===null||typeof e>"u"||e6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,o,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var h1=/[\-:]([a-z])/g;function p1(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(h1,p1);$t[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(h1,p1);$t[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(h1,p1);$t[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function m1(t,e,n,r){var o=$t.hasOwnProperty(e)?$t[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t6(e,n,o,r)&&(n=null),r||o===null?X4(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hi=e3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Iu=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),g1=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),n3=Symbol.for("react.provider"),r3=Symbol.for("react.context"),w1=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),$0=Symbol.for("react.suspense_list"),v1=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),i3=Symbol.for("react.offscreen"),rg=Symbol.iterator;function cl(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Ph;function _l(t){if(Ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ph=e&&e[1]||""}return`
`+Ph+t}var Oh=!1;function Nh(t,e){if(!t||Oh)return"";Oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_l(t):""}function n6(t){switch(t.tag){case 5:return _l(t.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 2:case 15:return t=Nh(t.type,!1),t;case 11:return t=Nh(t.type.render,!1),t;case 1:return t=Nh(t.type,!0),t;default:return""}}function T0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ms:return"Portal";case I0:return"Profiler";case g1:return"StrictMode";case k0:return"Suspense";case $0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r3:return(t.displayName||"Context")+".Consumer";case n3:return(t._context.displayName||"Context")+".Provider";case w1:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case v1:return e=t.displayName||null,e!==null?e:T0(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return T0(t(e))}catch{}}return null}function r6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return T0(e);case 8:return e===g1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o3(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i6(t){var e=o3(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ku(t){t._valueTracker||(t._valueTracker=i6(t))}function s3(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o3(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P0(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a3(t,e){e=e.checked,e!=null&&m1(t,"checked",e,!1)}function O0(t,e){a3(t,e);var n=Xi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?N0(t,e.type,n):e.hasOwnProperty("defaultValue")&&N0(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function N0(t,e,n){(e!=="number"||vd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sl=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function M0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Sl(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function l3(t,e){var n=Xi(e.value),r=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c3(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function L0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c3(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $u,u3=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($u=$u||document.createElement("div"),$u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$u.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $l={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o6=["Webkit","ms","Moz","O"];Object.keys($l).forEach(function(t){o6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$l[e]=$l[t]})});function d3(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$l.hasOwnProperty(t)&&$l[t]?(""+e).trim():e+"px"}function f3(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=d3(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var s6=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function j0(t,e){if(e){if(s6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function D0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U0=null;function y1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var B0=null,Ks=null,Ys=null;function lg(t){if(t=uu(t)){if(typeof B0!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Tf(e),B0(t.stateNode,t.type,e))}}function h3(t){Ks?Ys?Ys.push(t):Ys=[t]:Ks=t}function p3(){if(Ks){var t=Ks,e=Ys;if(Ys=Ks=null,lg(t),e)for(t=0;t<e.length;t++)lg(e[t])}}function m3(t,e){return t(e)}function g3(){}var Mh=!1;function w3(t,e,n){if(Mh)return t(e,n);Mh=!0;try{return m3(t,e,n)}finally{Mh=!1,(Ks!==null||Ys!==null)&&(g3(),p3())}}function Gl(t,e){var n=t.stateNode;if(n===null)return null;var r=Tf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var z0=!1;if(ri)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){z0=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{z0=!1}function a6(t,e,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Tl=!1,yd=null,bd=!1,W0=null,l6={onError:function(t){Tl=!0,yd=t}};function c6(t,e,n,r,o,i,s,a,l){Tl=!1,yd=null,a6.apply(l6,arguments)}function u6(t,e,n,r,o,i,s,a,l){if(c6.apply(this,arguments),Tl){if(Tl){var c=yd;Tl=!1,yd=null}else throw Error(F(198));bd||(bd=!0,W0=c)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v3(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cg(t){if(bs(t)!==t)throw Error(F(188))}function d6(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cg(o),t;if(i===r)return cg(o),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function y3(t){return t=d6(t),t!==null?b3(t):null}function b3(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b3(t);if(e!==null)return e;t=t.sibling}return null}var x3=vn.unstable_scheduleCallback,ug=vn.unstable_cancelCallback,f6=vn.unstable_shouldYield,h6=vn.unstable_requestPaint,st=vn.unstable_now,p6=vn.unstable_getCurrentPriorityLevel,b1=vn.unstable_ImmediatePriority,C3=vn.unstable_UserBlockingPriority,xd=vn.unstable_NormalPriority,m6=vn.unstable_LowPriority,E3=vn.unstable_IdlePriority,Af=null,Ir=null;function g6(t){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(Af,t,void 0,(t.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:y6,w6=Math.log,v6=Math.LN2;function y6(t){return t>>>=0,t===0?32:31-(w6(t)/v6|0)|0}var Tu=64,Pu=4194304;function Rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Rl(a):(i&=s,i!==0&&(r=Rl(i)))}else s=n&~o,s!==0?r=Rl(s):i!==0&&(r=Rl(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nr(e),o=1<<n,r|=t[n],e&=~o;return r}function b6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-nr(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=b6(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function F0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _3(){var t=Tu;return Tu<<=1,!(Tu&4194240)&&(Tu=64),t}function Lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nr(e),t[e]=n}function C6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-nr(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function x1(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nr(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var je=0;function S3(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R3,C1,A3,I3,k3,H0=!1,Ou=[],Di=null,Ui=null,Bi=null,ql=new Map,Kl=new Map,Ei=[],E6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":ql.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(e.pointerId)}}function dl(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=uu(e),e!==null&&C1(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function _6(t,e,n,r,o){switch(e){case"focusin":return Di=dl(Di,t,e,n,r,o),!0;case"dragenter":return Ui=dl(Ui,t,e,n,r,o),!0;case"mouseover":return Bi=dl(Bi,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return ql.set(i,dl(ql.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kl.set(i,dl(Kl.get(i)||null,t,e,n,r,o)),!0}return!1}function $3(t){var e=ko(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=v3(n),e!==null){t.blockedOn=e,k3(t.priority,function(){A3(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=V0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);U0=r,n.target.dispatchEvent(r),U0=null}else return e=uu(n),e!==null&&C1(e),t.blockedOn=n,!1;e.shift()}return!0}function fg(t,e,n){rd(t)&&n.delete(e)}function S6(){H0=!1,Di!==null&&rd(Di)&&(Di=null),Ui!==null&&rd(Ui)&&(Ui=null),Bi!==null&&rd(Bi)&&(Bi=null),ql.forEach(fg),Kl.forEach(fg)}function fl(t,e){t.blockedOn===e&&(t.blockedOn=null,H0||(H0=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,S6)))}function Yl(t){function e(o){return fl(o,t)}if(0<Ou.length){fl(Ou[0],t);for(var n=1;n<Ou.length;n++){var r=Ou[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Di!==null&&fl(Di,t),Ui!==null&&fl(Ui,t),Bi!==null&&fl(Bi,t),ql.forEach(e),Kl.forEach(e),n=0;n<Ei.length;n++)r=Ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)$3(n),n.blockedOn===null&&Ei.shift()}var Qs=hi.ReactCurrentBatchConfig,Ed=!0;function R6(t,e,n,r){var o=je,i=Qs.transition;Qs.transition=null;try{je=1,E1(t,e,n,r)}finally{je=o,Qs.transition=i}}function A6(t,e,n,r){var o=je,i=Qs.transition;Qs.transition=null;try{je=4,E1(t,e,n,r)}finally{je=o,Qs.transition=i}}function E1(t,e,n,r){if(Ed){var o=V0(t,e,n,r);if(o===null)Zh(t,e,r,_d,n),dg(t,r);else if(_6(o,t,e,n,r))r.stopPropagation();else if(dg(t,r),e&4&&-1<E6.indexOf(t)){for(;o!==null;){var i=uu(o);if(i!==null&&R3(i),i=V0(t,e,n,r),i===null&&Zh(t,e,r,_d,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zh(t,e,r,null,n)}}var _d=null;function V0(t,e,n,r){if(_d=null,t=y1(r),t=ko(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v3(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _d=t,null}function T3(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p6()){case b1:return 1;case C3:return 4;case xd:case m6:return 16;case E3:return 536870912;default:return 16}default:return 16}}var Oi=null,_1=null,id=null;function P3(){if(id)return id;var t,e=_1,n=e.length,r,o="value"in Oi?Oi.value:Oi.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===o[i-r];r++);return id=o.slice(t,1<r?1-r:void 0)}function od(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function hg(){return!1}function Rn(t){function e(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nu:hg,this.isPropagationStopped=hg,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},S1=Rn(Ka),cu=et({},Ka,{view:0,detail:0}),I6=Rn(cu),jh,Dh,hl,If=et({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:R1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(jh=t.screenX-hl.screenX,Dh=t.screenY-hl.screenY):Dh=jh=0,hl=t),jh)},movementY:function(t){return"movementY"in t?t.movementY:Dh}}),pg=Rn(If),k6=et({},If,{dataTransfer:0}),$6=Rn(k6),T6=et({},cu,{relatedTarget:0}),Uh=Rn(T6),P6=et({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),O6=Rn(P6),N6=et({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M6=Rn(N6),L6=et({},Ka,{data:0}),mg=Rn(L6),j6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U6[t])?!!e[t]:!1}function R1(){return B6}var z6=et({},cu,{key:function(t){if(t.key){var e=j6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=od(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:R1,charCode:function(t){return t.type==="keypress"?od(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?od(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W6=Rn(z6),F6=et({},If,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Rn(F6),H6=et({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:R1}),V6=Rn(H6),Z6=et({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),G6=Rn(Z6),q6=et({},If,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K6=Rn(q6),Y6=[9,13,27,32],A1=ri&&"CompositionEvent"in window,Pl=null;ri&&"documentMode"in document&&(Pl=document.documentMode);var Q6=ri&&"TextEvent"in window&&!Pl,O3=ri&&(!A1||Pl&&8<Pl&&11>=Pl),wg=" ",vg=!1;function N3(t,e){switch(t){case"keyup":return Y6.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M3(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function J6(t,e){switch(t){case"compositionend":return M3(e);case"keypress":return e.which!==32?null:(vg=!0,wg);case"textInput":return t=e.data,t===wg&&vg?null:t;default:return null}}function X6(t,e){if(js)return t==="compositionend"||!A1&&N3(t,e)?(t=P3(),id=_1=Oi=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O3&&e.locale!=="ko"?null:e.data;default:return null}}var eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eb[t.type]:e==="textarea"}function L3(t,e,n,r){h3(r),e=Sd(e,"onChange"),0<e.length&&(n=new S1("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ol=null,Ql=null;function tb(t){G3(t,0)}function kf(t){var e=Bs(t);if(s3(e))return t}function nb(t,e){if(t==="change")return e}var j3=!1;if(ri){var Bh;if(ri){var zh="oninput"in document;if(!zh){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),zh=typeof bg.oninput=="function"}Bh=zh}else Bh=!1;j3=Bh&&(!document.documentMode||9<document.documentMode)}function xg(){Ol&&(Ol.detachEvent("onpropertychange",D3),Ql=Ol=null)}function D3(t){if(t.propertyName==="value"&&kf(Ql)){var e=[];L3(e,Ql,t,y1(t)),w3(tb,e)}}function rb(t,e,n){t==="focusin"?(xg(),Ol=e,Ql=n,Ol.attachEvent("onpropertychange",D3)):t==="focusout"&&xg()}function ib(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kf(Ql)}function ob(t,e){if(t==="click")return kf(e)}function sb(t,e){if(t==="input"||t==="change")return kf(e)}function ab(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:ab;function Jl(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!A0.call(e,o)||!sr(t[o],e[o]))return!1}return!0}function Cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=Cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cg(n)}}function U3(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U3(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B3(){for(var t=window,e=vd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vd(t.document)}return e}function I1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lb(t){var e=B3(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U3(n.ownerDocument.documentElement,n)){if(r!==null&&I1(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=Eg(n,i);var s=Eg(n,r);o&&s&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cb=ri&&"documentMode"in document&&11>=document.documentMode,Ds=null,Z0=null,Nl=null,G0=!1;function _g(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;G0||Ds==null||Ds!==vd(r)||(r=Ds,"selectionStart"in r&&I1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&Jl(Nl,r)||(Nl=r,r=Sd(Z0,"onSelect"),0<r.length&&(e=new S1("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Mu("Animation","AnimationEnd"),animationiteration:Mu("Animation","AnimationIteration"),animationstart:Mu("Animation","AnimationStart"),transitionend:Mu("Transition","TransitionEnd")},Wh={},z3={};ri&&(z3=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function $f(t){if(Wh[t])return Wh[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z3)return Wh[t]=e[n];return t}var W3=$f("animationend"),F3=$f("animationiteration"),H3=$f("animationstart"),V3=$f("transitionend"),Z3=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function co(t,e){Z3.set(t,e),ys(e,[t])}for(var Fh=0;Fh<Sg.length;Fh++){var Hh=Sg[Fh],ub=Hh.toLowerCase(),db=Hh[0].toUpperCase()+Hh.slice(1);co(ub,"on"+db)}co(W3,"onAnimationEnd");co(F3,"onAnimationIteration");co(H3,"onAnimationStart");co("dblclick","onDoubleClick");co("focusin","onFocus");co("focusout","onBlur");co(V3,"onTransitionEnd");ga("onMouseEnter",["mouseout","mouseover"]);ga("onMouseLeave",["mouseout","mouseover"]);ga("onPointerEnter",["pointerout","pointerover"]);ga("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Al));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,u6(r,e,void 0,t),t.currentTarget=null}function G3(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Rg(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Rg(o,a,c),i=l}}}if(bd)throw t=W0,bd=!1,W0=null,t}function Ve(t,e){var n=e[J0];n===void 0&&(n=e[J0]=new Set);var r=t+"__bubble";n.has(r)||(q3(e,t,2,!1),n.add(r))}function Vh(t,e,n){var r=0;e&&(r|=4),q3(n,t,r,e)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Xl(t){if(!t[Lu]){t[Lu]=!0,t3.forEach(function(n){n!=="selectionchange"&&(fb.has(n)||Vh(n,!1,t),Vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lu]||(e[Lu]=!0,Vh("selectionchange",!1,e))}}function q3(t,e,n,r){switch(T3(e)){case 1:var o=R6;break;case 4:o=A6;break;default:o=E1}n=o.bind(null,e,n,t),o=void 0,!z0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function Zh(t,e,n,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ko(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}w3(function(){var c=i,u=y1(n),h=[];e:{var p=Z3.get(t);if(p!==void 0){var m=S1,x=t;switch(t){case"keypress":if(od(n)===0)break e;case"keydown":case"keyup":m=W6;break;case"focusin":x="focus",m=Uh;break;case"focusout":x="blur",m=Uh;break;case"beforeblur":case"afterblur":m=Uh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=V6;break;case W3:case F3:case H3:m=O6;break;case V3:m=G6;break;case"scroll":m=I6;break;case"wheel":m=K6;break;case"copy":case"cut":case"paste":m=M6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gg}var C=(e&4)!==0,b=!C&&t==="scroll",g=C?p!==null?p+"Capture":null:p;C=[];for(var w=c,y;w!==null;){y=w;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=Gl(w,g),S!=null&&C.push(ec(w,S,y)))),b)break;w=w.return}0<C.length&&(p=new m(p,x,null,n,u),h.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==U0&&(x=n.relatedTarget||n.fromElement)&&(ko(x)||x[ii]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?ko(x):null,x!==null&&(b=bs(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(C=pg,S="onMouseLeave",g="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=gg,S="onPointerLeave",g="onPointerEnter",w="pointer"),b=m==null?p:Bs(m),y=x==null?p:Bs(x),p=new C(S,w+"leave",m,n,u),p.target=b,p.relatedTarget=y,S=null,ko(u)===c&&(C=new C(g,w+"enter",x,n,u),C.target=y,C.relatedTarget=b,S=C),b=S,m&&x)t:{for(C=m,g=x,w=0,y=C;y;y=ks(y))w++;for(y=0,S=g;S;S=ks(S))y++;for(;0<w-y;)C=ks(C),w--;for(;0<y-w;)g=ks(g),y--;for(;w--;){if(C===g||g!==null&&C===g.alternate)break t;C=ks(C),g=ks(g)}C=null}else C=null;m!==null&&Ag(h,p,m,C,!1),x!==null&&b!==null&&Ag(h,b,x,C,!0)}}e:{if(p=c?Bs(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=nb;else if(yg(p))if(j3)A=sb;else{A=ib;var k=rb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=ob);if(A&&(A=A(t,c))){L3(h,A,n,u);break e}k&&k(t,p,c),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&N0(p,"number",p.value)}switch(k=c?Bs(c):window,t){case"focusin":(yg(k)||k.contentEditable==="true")&&(Ds=k,Z0=c,Nl=null);break;case"focusout":Nl=Z0=Ds=null;break;case"mousedown":G0=!0;break;case"contextmenu":case"mouseup":case"dragend":G0=!1,_g(h,n,u);break;case"selectionchange":if(cb)break;case"keydown":case"keyup":_g(h,n,u)}var P;if(A1)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else js?N3(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(O3&&n.locale!=="ko"&&(js||N!=="onCompositionStart"?N==="onCompositionEnd"&&js&&(P=P3()):(Oi=u,_1="value"in Oi?Oi.value:Oi.textContent,js=!0)),k=Sd(c,N),0<k.length&&(N=new mg(N,t,null,n,u),h.push({event:N,listeners:k}),P?N.data=P:(P=M3(n),P!==null&&(N.data=P)))),(P=Q6?J6(t,n):X6(t,n))&&(c=Sd(c,"onBeforeInput"),0<c.length&&(u=new mg("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=P))}G3(h,e)})}function ec(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sd(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gl(t,n),i!=null&&r.unshift(ec(t,i,o)),i=Gl(t,e),i!=null&&r.push(ec(t,i,o))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,o){for(var i=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=Gl(n,i),l!=null&&s.unshift(ec(n,l,a))):o||(l=Gl(n,i),l!=null&&s.push(ec(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var hb=/\r\n?/g,pb=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(pb,"")}function ju(t,e,n){if(e=Ig(e),Ig(t)!==e&&n)throw Error(F(425))}function Rd(){}var q0=null,K0=null;function Y0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Q0=typeof setTimeout=="function"?setTimeout:void 0,mb=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,gb=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(wb)}:Q0;function wb(t){setTimeout(function(){throw t})}function Gh(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),Yl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yl(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ya=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Ya,tc="__reactProps$"+Ya,ii="__reactContainer$"+Ya,J0="__reactEvents$"+Ya,vb="__reactListeners$"+Ya,yb="__reactHandles$"+Ya;function ko(t){var e=t[Rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ii]||n[Rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$g(t);t!==null;){if(n=t[Rr])return n;t=$g(t)}return e}t=n,n=t.parentNode}return null}function uu(t){return t=t[Rr]||t[ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Tf(t){return t[tc]||null}var X0=[],zs=-1;function uo(t){return{current:t}}function Ze(t){0>zs||(t.current=X0[zs],X0[zs]=null,zs--)}function We(t,e){zs++,X0[zs]=t.current,t.current=e}var eo={},Mt=uo(eo),rn=uo(!1),Fo=eo;function wa(t,e){var n=t.type.contextTypes;if(!n)return eo;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function on(t){return t=t.childContextTypes,t!=null}function Ad(){Ze(rn),Ze(Mt)}function Tg(t,e,n){if(Mt.current!==eo)throw Error(F(168));We(Mt,e),We(rn,n)}function K3(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(F(108,r6(t)||"Unknown",o));return et({},n,r)}function Id(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||eo,Fo=Mt.current,We(Mt,t),We(rn,rn.current),!0}function Pg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=K3(t,e,Fo),r.__reactInternalMemoizedMergedChildContext=t,Ze(rn),Ze(Mt),We(Mt,t)):Ze(rn),We(rn,n)}var Kr=null,Pf=!1,qh=!1;function Y3(t){Kr===null?Kr=[t]:Kr.push(t)}function bb(t){Pf=!0,Y3(t)}function fo(){if(!qh&&Kr!==null){qh=!0;var t=0,e=je;try{var n=Kr;for(je=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kr=null,Pf=!1}catch(o){throw Kr!==null&&(Kr=Kr.slice(t+1)),x3(b1,fo),o}finally{je=e,qh=!1}}return null}var Ws=[],Fs=0,kd=null,$d=0,Mn=[],Ln=0,Ho=null,Qr=1,Jr="";function So(t,e){Ws[Fs++]=$d,Ws[Fs++]=kd,kd=t,$d=e}function Q3(t,e,n){Mn[Ln++]=Qr,Mn[Ln++]=Jr,Mn[Ln++]=Ho,Ho=t;var r=Qr;t=Jr;var o=32-nr(r)-1;r&=~(1<<o),n+=1;var i=32-nr(e)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Qr=1<<32-nr(e)+o|n<<o|r,Jr=i+t}else Qr=1<<i|n<<o|r,Jr=t}function k1(t){t.return!==null&&(So(t,1),Q3(t,1,0))}function $1(t){for(;t===kd;)kd=Ws[--Fs],Ws[Fs]=null,$d=Ws[--Fs],Ws[Fs]=null;for(;t===Ho;)Ho=Mn[--Ln],Mn[Ln]=null,Jr=Mn[--Ln],Mn[Ln]=null,Qr=Mn[--Ln],Mn[Ln]=null}var wn=null,mn=null,Ke=!1,Xn=null;function J3(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,mn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ho!==null?{id:Qr,overflow:Jr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,mn=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(Ke){var e=mn;if(e){var n=e;if(!Og(t,e)){if(ep(t))throw Error(F(418));e=zi(n.nextSibling);var r=wn;e&&Og(t,e)?J3(r,n):(t.flags=t.flags&-4097|2,Ke=!1,wn=t)}}else{if(ep(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ke=!1,wn=t}}}function Ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Du(t){if(t!==wn)return!1;if(!Ke)return Ng(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Y0(t.type,t.memoizedProps)),e&&(e=mn)){if(ep(t))throw X3(),Error(F(418));for(;e;)J3(t,e),e=zi(e.nextSibling)}if(Ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=wn?zi(t.stateNode.nextSibling):null;return!0}function X3(){for(var t=mn;t;)t=zi(t.nextSibling)}function va(){mn=wn=null,Ke=!1}function T1(t){Xn===null?Xn=[t]:Xn.push(t)}var xb=hi.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Td=uo(null),Pd=null,Hs=null,P1=null;function O1(){P1=Hs=Pd=null}function N1(t){var e=Td.current;Ze(Td),t._currentValue=e}function np(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Pd=t,P1=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(P1!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Pd===null)throw Error(F(308));Hs=t,Pd.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var $o=null;function M1(t){$o===null?$o=[t]:$o.push(t)}function ev(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,M1(e)):(n.next=o.next,o.next=n),e.interleaved=n,oi(t,r)}function oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function L1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,oi(t,n)}return o=r.interleaved,o===null?(e.next=e,M1(r)):(e.next=o.next,o.next=e),r.interleaved=e,oi(t,n)}function sd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,x1(t,n)}}function Mg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Od(t,e,n,r){var o=t.updateQueue;xi=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var h=o.baseState;s=0,u=c=l=null,a=i;do{var p=a.lane,m=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,C=a;switch(p=e,m=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){h=x.call(m,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,p=typeof x=="function"?x.call(m,h,p):x,p==null)break e;h=et({},h,p);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(l=h),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,e=o.shared.interleaved,e!==null){o=e;do s|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Zo|=s,t.lanes=s,t.memoizedState=h}}function Lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var nv=new e3.Component().refs;function rp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Of={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),o=Hi(t),i=ei(r,o);i.payload=e,n!=null&&(i.callback=n),e=Wi(t,i,o),e!==null&&(rr(e,t,o,r),sd(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),o=Hi(t),i=ei(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Wi(t,i,o),e!==null&&(rr(e,t,o,r),sd(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=Hi(t),o=ei(n,r);o.tag=2,e!=null&&(o.callback=e),e=Wi(t,o,r),e!==null&&(rr(e,t,r,n),sd(e,t,r))}};function jg(t,e,n,r,o,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!Jl(n,r)||!Jl(o,i):!0}function rv(t,e,n){var r=!1,o=eo,i=e.contextType;return typeof i=="object"&&i!==null?i=Un(i):(o=on(e)?Fo:Mt.current,r=e.contextTypes,i=(r=r!=null)?wa(t,o):eo),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Of,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function Dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Of.enqueueReplaceState(e,e.state,null)}function ip(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs=nv,L1(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=Un(i):(i=on(e)?Fo:Mt.current,o.context=wa(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(rp(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Of.enqueueReplaceState(o,o.state,null),Od(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function pl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var a=o.refs;a===nv&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Uu(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ug(t){var e=t._init;return e(t._payload)}function iv(t){function e(g,w){if(t){var y=g.deletions;y===null?(g.deletions=[w],g.flags|=16):y.push(w)}}function n(g,w){if(!t)return null;for(;w!==null;)e(g,w),w=w.sibling;return null}function r(g,w){for(g=new Map;w!==null;)w.key!==null?g.set(w.key,w):g.set(w.index,w),w=w.sibling;return g}function o(g,w){return g=Vi(g,w),g.index=0,g.sibling=null,g}function i(g,w,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<w?(g.flags|=2,w):y):(g.flags|=2,w)):(g.flags|=1048576,w)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,w,y,S){return w===null||w.tag!==6?(w=t0(y,g.mode,S),w.return=g,w):(w=o(w,y),w.return=g,w)}function l(g,w,y,S){var A=y.type;return A===Ls?u(g,w,y.props.children,S,y.key):w!==null&&(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bi&&Ug(A)===w.type)?(S=o(w,y.props),S.ref=pl(g,w,y),S.return=g,S):(S=fd(y.type,y.key,y.props,null,g.mode,S),S.ref=pl(g,w,y),S.return=g,S)}function c(g,w,y,S){return w===null||w.tag!==4||w.stateNode.containerInfo!==y.containerInfo||w.stateNode.implementation!==y.implementation?(w=n0(y,g.mode,S),w.return=g,w):(w=o(w,y.children||[]),w.return=g,w)}function u(g,w,y,S,A){return w===null||w.tag!==7?(w=Do(y,g.mode,S,A),w.return=g,w):(w=o(w,y),w.return=g,w)}function h(g,w,y){if(typeof w=="string"&&w!==""||typeof w=="number")return w=t0(""+w,g.mode,y),w.return=g,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Iu:return y=fd(w.type,w.key,w.props,null,g.mode,y),y.ref=pl(g,null,w),y.return=g,y;case Ms:return w=n0(w,g.mode,y),w.return=g,w;case bi:var S=w._init;return h(g,S(w._payload),y)}if(Sl(w)||cl(w))return w=Do(w,g.mode,y,null),w.return=g,w;Uu(g,w)}return null}function p(g,w,y,S){var A=w!==null?w.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(g,w,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Iu:return y.key===A?l(g,w,y,S):null;case Ms:return y.key===A?c(g,w,y,S):null;case bi:return A=y._init,p(g,w,A(y._payload),S)}if(Sl(y)||cl(y))return A!==null?null:u(g,w,y,S,null);Uu(g,y)}return null}function m(g,w,y,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,a(w,g,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Iu:return g=g.get(S.key===null?y:S.key)||null,l(w,g,S,A);case Ms:return g=g.get(S.key===null?y:S.key)||null,c(w,g,S,A);case bi:var k=S._init;return m(g,w,y,k(S._payload),A)}if(Sl(S)||cl(S))return g=g.get(y)||null,u(w,g,S,A,null);Uu(w,S)}return null}function x(g,w,y,S){for(var A=null,k=null,P=w,N=w=0,V=null;P!==null&&N<y.length;N++){P.index>N?(V=P,P=null):V=P.sibling;var j=p(g,P,y[N],S);if(j===null){P===null&&(P=V);break}t&&P&&j.alternate===null&&e(g,P),w=i(j,w,N),k===null?A=j:k.sibling=j,k=j,P=V}if(N===y.length)return n(g,P),Ke&&So(g,N),A;if(P===null){for(;N<y.length;N++)P=h(g,y[N],S),P!==null&&(w=i(P,w,N),k===null?A=P:k.sibling=P,k=P);return Ke&&So(g,N),A}for(P=r(g,P);N<y.length;N++)V=m(P,g,N,y[N],S),V!==null&&(t&&V.alternate!==null&&P.delete(V.key===null?N:V.key),w=i(V,w,N),k===null?A=V:k.sibling=V,k=V);return t&&P.forEach(function(W){return e(g,W)}),Ke&&So(g,N),A}function C(g,w,y,S){var A=cl(y);if(typeof A!="function")throw Error(F(150));if(y=A.call(y),y==null)throw Error(F(151));for(var k=A=null,P=w,N=w=0,V=null,j=y.next();P!==null&&!j.done;N++,j=y.next()){P.index>N?(V=P,P=null):V=P.sibling;var W=p(g,P,j.value,S);if(W===null){P===null&&(P=V);break}t&&P&&W.alternate===null&&e(g,P),w=i(W,w,N),k===null?A=W:k.sibling=W,k=W,P=V}if(j.done)return n(g,P),Ke&&So(g,N),A;if(P===null){for(;!j.done;N++,j=y.next())j=h(g,j.value,S),j!==null&&(w=i(j,w,N),k===null?A=j:k.sibling=j,k=j);return Ke&&So(g,N),A}for(P=r(g,P);!j.done;N++,j=y.next())j=m(P,g,N,j.value,S),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?N:j.key),w=i(j,w,N),k===null?A=j:k.sibling=j,k=j);return t&&P.forEach(function(ve){return e(g,ve)}),Ke&&So(g,N),A}function b(g,w,y,S){if(typeof y=="object"&&y!==null&&y.type===Ls&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Iu:e:{for(var A=y.key,k=w;k!==null;){if(k.key===A){if(A=y.type,A===Ls){if(k.tag===7){n(g,k.sibling),w=o(k,y.props.children),w.return=g,g=w;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bi&&Ug(A)===k.type){n(g,k.sibling),w=o(k,y.props),w.ref=pl(g,k,y),w.return=g,g=w;break e}n(g,k);break}else e(g,k);k=k.sibling}y.type===Ls?(w=Do(y.props.children,g.mode,S,y.key),w.return=g,g=w):(S=fd(y.type,y.key,y.props,null,g.mode,S),S.ref=pl(g,w,y),S.return=g,g=S)}return s(g);case Ms:e:{for(k=y.key;w!==null;){if(w.key===k)if(w.tag===4&&w.stateNode.containerInfo===y.containerInfo&&w.stateNode.implementation===y.implementation){n(g,w.sibling),w=o(w,y.children||[]),w.return=g,g=w;break e}else{n(g,w);break}else e(g,w);w=w.sibling}w=n0(y,g.mode,S),w.return=g,g=w}return s(g);case bi:return k=y._init,b(g,w,k(y._payload),S)}if(Sl(y))return x(g,w,y,S);if(cl(y))return C(g,w,y,S);Uu(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,w!==null&&w.tag===6?(n(g,w.sibling),w=o(w,y),w.return=g,g=w):(n(g,w),w=t0(y,g.mode,S),w.return=g,g=w),s(g)):n(g,w)}return b}var ya=iv(!0),ov=iv(!1),du={},kr=uo(du),nc=uo(du),rc=uo(du);function To(t){if(t===du)throw Error(F(174));return t}function j1(t,e){switch(We(rc,e),We(nc,t),We(kr,du),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:L0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=L0(e,t)}Ze(kr),We(kr,e)}function ba(){Ze(kr),Ze(nc),Ze(rc)}function sv(t){To(rc.current);var e=To(kr.current),n=L0(e,t.type);e!==n&&(We(nc,t),We(kr,n))}function D1(t){nc.current===t&&(Ze(kr),Ze(nc))}var Je=uo(0);function Nd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kh=[];function U1(){for(var t=0;t<Kh.length;t++)Kh[t]._workInProgressVersionPrimary=null;Kh.length=0}var ad=hi.ReactCurrentDispatcher,Yh=hi.ReactCurrentBatchConfig,Vo=0,Xe=null,wt=null,Et=null,Md=!1,Ml=!1,ic=0,Cb=0;function Tt(){throw Error(F(321))}function B1(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function z1(t,e,n,r,o,i){if(Vo=i,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ad.current=t===null||t.memoizedState===null?Rb:Ab,t=n(r,o),Ml){i=0;do{if(Ml=!1,ic=0,25<=i)throw Error(F(301));i+=1,Et=wt=null,e.updateQueue=null,ad.current=Ib,t=n(r,o)}while(Ml)}if(ad.current=Ld,e=wt!==null&&wt.next!==null,Vo=0,Et=wt=Xe=null,Md=!1,e)throw Error(F(300));return t}function W1(){var t=ic!==0;return ic=0,t}function Cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Xe.memoizedState=Et=t:Et=Et.next=t,Et}function Bn(){if(wt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Et===null?Xe.memoizedState:Et.next;if(e!==null)Et=e,wt=t;else{if(t===null)throw Error(F(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Et===null?Xe.memoizedState=Et=t:Et=Et.next=t}return Et}function oc(t,e){return typeof e=="function"?e(t):e}function Qh(t){var e=Bn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=wt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((Vo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Xe.lanes|=u,Zo|=u}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,sr(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,Xe.lanes|=i,Zo|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jh(t){var e=Bn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=t(i,s.action),s=s.next;while(s!==o);sr(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function av(){}function lv(t,e){var n=Xe,r=Bn(),o=e(),i=!sr(r.memoizedState,o);if(i&&(r.memoizedState=o,nn=!0),r=r.queue,F1(dv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,sc(9,uv.bind(null,n,r,o,e),void 0,null),St===null)throw Error(F(349));Vo&30||cv(n,e,o)}return o}function cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uv(t,e,n,r){e.value=n,e.getSnapshot=r,fv(e)&&hv(t)}function dv(t,e,n){return n(function(){fv(e)&&hv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function hv(t){var e=oi(t,1);e!==null&&rr(e,t,1,-1)}function Bg(t){var e=Cr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oc,lastRenderedState:t},e.queue=t,t=t.dispatch=Sb.bind(null,Xe,t),[e.memoizedState,t]}function sc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pv(){return Bn().memoizedState}function ld(t,e,n,r){var o=Cr();Xe.flags|=t,o.memoizedState=sc(1|e,n,void 0,r===void 0?null:r)}function Nf(t,e,n,r){var o=Bn();r=r===void 0?null:r;var i=void 0;if(wt!==null){var s=wt.memoizedState;if(i=s.destroy,r!==null&&B1(r,s.deps)){o.memoizedState=sc(e,n,i,r);return}}Xe.flags|=t,o.memoizedState=sc(1|e,n,i,r)}function zg(t,e){return ld(8390656,8,t,e)}function F1(t,e){return Nf(2048,8,t,e)}function mv(t,e){return Nf(4,2,t,e)}function gv(t,e){return Nf(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vv(t,e,n){return n=n!=null?n.concat([t]):null,Nf(4,4,wv.bind(null,e,t),n)}function H1(){}function yv(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&B1(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&B1(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xv(t,e,n){return Vo&21?(sr(n,e)||(n=_3(),Xe.lanes|=n,Zo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Eb(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var r=Yh.transition;Yh.transition={};try{t(!1),e()}finally{je=n,Yh.transition=r}}function Cv(){return Bn().memoizedState}function _b(t,e,n){var r=Hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))_v(e,n);else if(n=ev(t,e,n,r),n!==null){var o=qt();rr(n,t,r,o),Sv(n,e,r)}}function Sb(t,e,n){var r=Hi(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))_v(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,sr(a,s)){var l=e.interleaved;l===null?(o.next=o,M1(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}n=ev(t,e,o,r),n!==null&&(o=qt(),rr(n,t,r,o),Sv(n,e,r))}}function Ev(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function _v(t,e){Ml=Md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,x1(t,n)}}var Ld={readContext:Un,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Rb={readContext:Un,useCallback:function(t,e){return Cr().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ld(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ld(4194308,4,t,e)},useInsertionEffect:function(t,e){return ld(4,2,t,e)},useMemo:function(t,e){var n=Cr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_b.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=Cr();return t={current:t},e.memoizedState=t},useState:Bg,useDebugValue:H1,useDeferredValue:function(t){return Cr().memoizedState=t},useTransition:function(){var t=Bg(!1),e=t[0];return t=Eb.bind(null,t[1]),Cr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,o=Cr();if(Ke){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),St===null)throw Error(F(349));Vo&30||cv(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,zg(dv.bind(null,r,i,t),[t]),r.flags|=2048,sc(9,uv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Cr(),e=St.identifierPrefix;if(Ke){var n=Jr,r=Qr;n=(r&~(1<<32-nr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ic++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ab={readContext:Un,useCallback:yv,useContext:Un,useEffect:F1,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:bv,useReducer:Qh,useRef:pv,useState:function(){return Qh(oc)},useDebugValue:H1,useDeferredValue:function(t){var e=Bn();return xv(e,wt.memoizedState,t)},useTransition:function(){var t=Qh(oc)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Cv,unstable_isNewReconciler:!1},Ib={readContext:Un,useCallback:yv,useContext:Un,useEffect:F1,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:bv,useReducer:Jh,useRef:pv,useState:function(){return Jh(oc)},useDebugValue:H1,useDeferredValue:function(t){var e=Bn();return wt===null?e.memoizedState=t:xv(e,wt.memoizedState,t)},useTransition:function(){var t=Jh(oc)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Cv,unstable_isNewReconciler:!1};function xa(t,e){try{var n="",r=e;do n+=n6(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function Xh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function Rv(t,e,n){n=ei(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dd||(Dd=!0,mp=r),op(t,e)},n}function Av(t,e,n){n=ei(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){op(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){op(t,e),typeof r!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kb;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=Fb.bind(null,t,e,n),e.then(t,t))}function Fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hg(t,e,n,r,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ei(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var $b=hi.ReactCurrentOwner,nn=!1;function Ht(t,e,n,r){e.child=t===null?ov(e,null,n,r):ya(e,t.child,n,r)}function Vg(t,e,n,r,o){n=n.render;var i=e.ref;return Js(e,o),r=z1(t,e,n,r,i,o),n=W1(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,si(t,e,o)):(Ke&&n&&k1(e),e.flags|=1,Ht(t,e,r,o),e.child)}function Zg(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!J1(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Iv(t,e,i,r,o)):(t=fd(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jl,n(s,r)&&t.ref===e.ref)return si(t,e,o)}return e.flags|=1,t=Vi(i,r),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(Jl(i,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=i,(t.lanes&o)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,si(t,e,o)}return sp(t,e,n,r,o)}function kv(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Zs,pn),pn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,We(Zs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,We(Zs,pn),pn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,We(Zs,pn),pn|=r;return Ht(t,e,o,n),e.child}function $v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sp(t,e,n,r,o){var i=on(n)?Fo:Mt.current;return i=wa(e,i),Js(e,o),n=z1(t,e,n,r,i,o),r=W1(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,si(t,e,o)):(Ke&&r&&k1(e),e.flags|=1,Ht(t,e,n,o),e.child)}function Gg(t,e,n,r,o){if(on(n)){var i=!0;Id(e)}else i=!1;if(Js(e,o),e.stateNode===null)cd(t,e),rv(e,n,r),ip(e,n,r,o),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=on(n)?Fo:Mt.current,c=wa(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Dg(e,s,r,c),xi=!1;var p=e.memoizedState;s.state=p,Od(e,r,s,o),l=e.memoizedState,a!==r||p!==l||rn.current||xi?(typeof u=="function"&&(rp(e,n,u,r),l=e.memoizedState),(a=xi||jg(e,n,a,r,p,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,tv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),s.props=c,h=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=on(n)?Fo:Mt.current,l=wa(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Dg(e,s,r,l),xi=!1,p=e.memoizedState,s.state=p,Od(e,r,s,o);var x=e.memoizedState;a!==h||p!==x||rn.current||xi?(typeof m=="function"&&(rp(e,n,m,r),x=e.memoizedState),(c=xi||jg(e,n,c,r,p,x,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),s.props=r,s.state=x,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ap(t,e,n,r,i,o)}function ap(t,e,n,r,o,i){$v(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return o&&Pg(e,n,!1),si(t,e,i);r=e.stateNode,$b.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ya(e,t.child,null,i),e.child=ya(e,null,a,i)):Ht(t,e,a,i),e.memoizedState=r.state,o&&Pg(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?Tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tg(t,e.context,!1),j1(t,e.containerInfo)}function qg(t,e,n,r,o){return va(),T1(o),e.flags|=256,Ht(t,e,n,r),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pv(t,e,n){var r=e.pendingProps,o=Je.current,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),We(Je,o&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=jf(s,r,0,null),t=Do(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=cp(n),e.memoizedState=lp,t):V1(e,s));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Tb(t,e,s,r,a,o,n);if(i){i=r.fallback,s=e.mode,o=t.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vi(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vi(a,i):(i=Do(i,s,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=t.child.memoizedState,s=s===null?cp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=lp,r}return i=t.child,t=i.sibling,r=Vi(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function V1(t,e){return e=jf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bu(t,e,n,r){return r!==null&&T1(r),ya(e,t.child,null,n),t=V1(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tb(t,e,n,r,o,i,s){if(n)return e.flags&256?(e.flags&=-257,r=Xh(Error(F(422))),Bu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=jf({mode:"visible",children:r.children},o,0,null),i=Do(i,o,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ya(e,t.child,null,s),e.child.memoizedState=cp(s),e.memoizedState=lp,i);if(!(e.mode&1))return Bu(t,e,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(F(419)),r=Xh(i,r,void 0),Bu(t,e,s,r)}if(a=(s&t.childLanes)!==0,nn||a){if(r=St,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,oi(t,o),rr(r,t,o,-1))}return Q1(),r=Xh(Error(F(421))),Bu(t,e,s,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=Hb.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,mn=zi(o.nextSibling),wn=e,Ke=!0,Xn=null,t!==null&&(Mn[Ln++]=Qr,Mn[Ln++]=Jr,Mn[Ln++]=Ho,Qr=t.id,Jr=t.overflow,Ho=e),e=V1(e,r.children),e.flags|=4096,e)}function Kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),np(t.return,e,n)}function e0(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ov(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(Ht(t,e,r.children,n),r=Je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kg(t,n,e);else if(t.tag===19)Kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(We(Je,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Nd(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),e0(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Nd(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}e0(e,!0,n,null,i);break;case"together":e0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pb(t,e,n){switch(e.tag){case 3:Tv(e),va();break;case 5:sv(e);break;case 1:on(e.type)&&Id(e);break;case 4:j1(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;We(Td,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(We(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?Pv(t,e,n):(We(Je,Je.current&1),t=si(t,e,n),t!==null?t.sibling:null);We(Je,Je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ov(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),We(Je,Je.current),r)break;return null;case 22:case 23:return e.lanes=0,kv(t,e,n)}return si(t,e,n)}var Nv,up,Mv,Lv;Nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};Mv=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,To(kr.current);var i=null;switch(n){case"input":o=P0(t,o),r=P0(t,r),i=[];break;case"select":o=et({},o,{value:void 0}),r=et({},r,{value:void 0}),i=[];break;case"textarea":o=M0(t,o),r=M0(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rd)}j0(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vl.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ve("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Lv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ml(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ob(t,e,n){var r=e.pendingProps;switch($1(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return on(e.type)&&Ad(),Pt(e),null;case 3:return r=e.stateNode,ba(),Ze(rn),Ze(Mt),U1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(vp(Xn),Xn=null))),up(t,e),Pt(e),null;case 5:D1(e);var o=To(rc.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Pt(e),null}if(t=To(kr.current),Du(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rr]=e,r[tc]=i,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(o=0;o<Al.length;o++)Ve(Al[o],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":ig(r,i),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ve("invalid",r);break;case"textarea":sg(r,i),Ve("invalid",r)}j0(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),o=["children",""+a]):Vl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ve("scroll",r)}switch(n){case"input":ku(r),og(r,i,!0);break;case"textarea":ku(r),ag(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Rd)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c3(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Rr]=e,t[tc]=r,Nv(t,e,!1,!1),e.stateNode=t;e:{switch(s=D0(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),o=r;break;case"iframe":case"object":case"embed":Ve("load",t),o=r;break;case"video":case"audio":for(o=0;o<Al.length;o++)Ve(Al[o],t);o=r;break;case"source":Ve("error",t),o=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),o=r;break;case"details":Ve("toggle",t),o=r;break;case"input":ig(t,r),o=P0(t,r),Ve("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=et({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":sg(t,r),o=M0(t,r),Ve("invalid",t);break;default:o=r}j0(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?f3(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u3(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zl(t,l):typeof l=="number"&&Zl(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vl.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ve("scroll",t):l!=null&&m1(t,i,l,s))}switch(n){case"input":ku(t),og(t,r,!1);break;case"textarea":ku(t),ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xi(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?qs(t,!!r.multiple,i,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Rd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=To(rc.current),To(kr.current),Du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rr]=e,(i=r.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:ju(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ju(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rr]=e,e.stateNode=r}return Pt(e),null;case 13:if(Ze(Je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&mn!==null&&e.mode&1&&!(e.flags&128))X3(),va(),e.flags|=98560,i=!1;else if(i=Du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Rr]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),i=!1}else Xn!==null&&(vp(Xn),Xn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?vt===0&&(vt=3):Q1())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return ba(),up(t,e),t===null&&Xl(e.stateNode.containerInfo),Pt(e),null;case 10:return N1(e.type._context),Pt(e),null;case 17:return on(e.type)&&Ad(),Pt(e),null;case 19:if(Ze(Je),i=e.memoizedState,i===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)ml(i,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Nd(t),s!==null){for(e.flags|=128,ml(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return We(Je,Je.current&1|2),e.child}t=t.sibling}i.tail!==null&&st()>Ca&&(e.flags|=128,r=!0,ml(i,!1),e.lanes=4194304)}else{if(!r)if(t=Nd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ml(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ke)return Pt(e),null}else 2*st()-i.renderingStartTime>Ca&&n!==1073741824&&(e.flags|=128,r=!0,ml(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=st(),e.sibling=null,n=Je.current,We(Je,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return Y1(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Nb(t,e){switch($1(e),e.tag){case 1:return on(e.type)&&Ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),Ze(rn),Ze(Mt),U1(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return D1(e),null;case 13:if(Ze(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ze(Je),null;case 4:return ba(),null;case 10:return N1(e.type._context),null;case 22:case 23:return Y1(),null;case 24:return null;default:return null}}var zu=!1,Ot=!1,Mb=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){it(t,e,r)}else n.current=null}function dp(t,e,n){try{n()}catch(r){it(t,e,r)}}var Yg=!1;function Lb(t,e){if(q0=Ed,t=B3(),I1(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,h=t,p=null;t:for(;;){for(var m;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===n&&++c===o&&(a=s),p===i&&++u===r&&(l=s),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(K0={focusedElem:t,selectionRange:n},Ed=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){e=ie;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,b=x.memoizedState,g=e.stateNode,w=g.getSnapshotBeforeUpdate(e.elementType===e.type?C:Kn(e.type,C),b);g.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){it(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}return x=Yg,Yg=!1,x}function Ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&dp(e,n,i)}o=o.next}while(o!==r)}}function Mf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jv(t){var e=t.alternate;e!==null&&(t.alternate=null,jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rr],delete e[tc],delete e[J0],delete e[vb],delete e[yb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function Qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rd));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var It=null,Jn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(Af,n)}catch{}switch(n.tag){case 5:Ot||Vs(n,e);case 6:var r=It,o=Jn;It=null,vi(t,e,n),It=r,Jn=o,It!==null&&(Jn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Jn?(t=It,n=n.stateNode,t.nodeType===8?Gh(t.parentNode,n):t.nodeType===1&&Gh(t,n),Yl(t)):Gh(It,n.stateNode));break;case 4:r=It,o=Jn,It=n.stateNode.containerInfo,Jn=!0,vi(t,e,n),It=r,Jn=o;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&dp(n,e,s),o=o.next}while(o!==r)}vi(t,e,n);break;case 1:if(!Ot&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){it(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,vi(t,e,n),Ot=r):vi(t,e,n);break;default:vi(t,e,n)}}function Jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mb),e.forEach(function(r){var o=Vb.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Jn=!1;break e;case 3:It=a.stateNode.containerInfo,Jn=!0;break e;case 4:It=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(It===null)throw Error(F(160));Uv(i,s,o),It=null,Jn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){it(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bv(e,t),e=e.sibling}function Bv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),br(t),r&4){try{Ll(3,t,t.return),Mf(3,t)}catch(C){it(t,t.return,C)}try{Ll(5,t,t.return)}catch(C){it(t,t.return,C)}}break;case 1:Gn(e,t),br(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Gn(e,t),br(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var o=t.stateNode;try{Zl(o,"")}catch(C){it(t,t.return,C)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&a3(o,i),D0(a,s);var c=D0(a,i);for(s=0;s<l.length;s+=2){var u=l[s],h=l[s+1];u==="style"?f3(o,h):u==="dangerouslySetInnerHTML"?u3(o,h):u==="children"?Zl(o,h):m1(o,u,h,c)}switch(a){case"input":O0(o,i);break;case"textarea":l3(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?qs(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?qs(o,!!i.multiple,i.defaultValue,!0):qs(o,!!i.multiple,i.multiple?[]:"",!1))}o[tc]=i}catch(C){it(t,t.return,C)}}break;case 6:if(Gn(e,t),br(t),r&4){if(t.stateNode===null)throw Error(F(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(C){it(t,t.return,C)}}break;case 3:if(Gn(e,t),br(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yl(e.containerInfo)}catch(C){it(t,t.return,C)}break;case 4:Gn(e,t),br(t);break;case 13:Gn(e,t),br(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(q1=st())),r&4&&Jg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||u,Gn(e,t),Ot=c):Gn(e,t),br(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ie=t,u=t.child;u!==null;){for(h=ie=u;ie!==null;){switch(p=ie,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ll(4,p,p.return);break;case 1:Vs(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){it(r,n,C)}}break;case 5:Vs(p,p.return);break;case 22:if(p.memoizedState!==null){ew(h);continue}}m!==null?(m.return=p,ie=m):ew(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d3("display",s))}catch(C){it(t,t.return,C)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(C){it(t,t.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gn(e,t),br(t),r&4&&Jg(t);break;case 21:break;default:Gn(e,t),br(t)}}function br(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zl(o,""),r.flags&=-33);var i=Qg(t);pp(t,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Qg(t);hp(t,a,s);break;default:throw Error(F(161))}}catch(l){it(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jb(t,e,n){ie=t,zv(t)}function zv(t,e,n){for(var r=(t.mode&1)!==0;ie!==null;){var o=ie,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||zu;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=zu;var c=Ot;if(zu=s,(Ot=l)&&!c)for(ie=o;ie!==null;)s=ie,l=s.child,s.tag===22&&s.memoizedState!==null?tw(o):l!==null?(l.return=s,ie=l):tw(o);for(;i!==null;)ie=i,zv(i),i=i.sibling;ie=o,zu=a,Ot=c}Xg(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ie=i):Xg(t)}}function Xg(t){for(;ie!==null;){var e=ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Mf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Lg(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lg(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Yl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ot||e.flags&512&&fp(e)}catch(p){it(e,e.return,p)}}if(e===t){ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,ie=n;break}ie=e.return}}function ew(t){for(;ie!==null;){var e=ie;if(e===t){ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ie=n;break}ie=e.return}}function tw(t){for(;ie!==null;){var e=ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mf(4,e)}catch(l){it(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(l){it(e,o,l)}}var i=e.return;try{fp(e)}catch(l){it(e,i,l)}break;case 5:var s=e.return;try{fp(e)}catch(l){it(e,s,l)}}}catch(l){it(e,e.return,l)}if(e===t){ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ie=a;break}ie=e.return}}var Db=Math.ceil,jd=hi.ReactCurrentDispatcher,Z1=hi.ReactCurrentOwner,Dn=hi.ReactCurrentBatchConfig,Pe=0,St=null,ft=null,kt=0,pn=0,Zs=uo(0),vt=0,ac=null,Zo=0,Lf=0,G1=0,jl=null,tn=null,q1=0,Ca=1/0,qr=null,Dd=!1,mp=null,Fi=null,Wu=!1,Ni=null,Ud=0,Dl=0,gp=null,ud=-1,dd=0;function qt(){return Pe&6?st():ud!==-1?ud:ud=st()}function Hi(t){return t.mode&1?Pe&2&&kt!==0?kt&-kt:xb.transition!==null?(dd===0&&(dd=_3()),dd):(t=je,t!==0||(t=window.event,t=t===void 0?16:T3(t.type)),t):1}function rr(t,e,n,r){if(50<Dl)throw Dl=0,gp=null,Error(F(185));lu(t,n,r),(!(Pe&2)||t!==St)&&(t===St&&(!(Pe&2)&&(Lf|=n),vt===4&&_i(t,kt)),sn(t,r),n===1&&Pe===0&&!(e.mode&1)&&(Ca=st()+500,Pf&&fo()))}function sn(t,e){var n=t.callbackNode;x6(t,e);var r=Cd(t,t===St?kt:0);if(r===0)n!==null&&ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ug(n),e===1)t.tag===0?bb(nw.bind(null,t)):Y3(nw.bind(null,t)),gb(function(){!(Pe&6)&&fo()}),n=null;else{switch(S3(r)){case 1:n=b1;break;case 4:n=C3;break;case 16:n=xd;break;case 536870912:n=E3;break;default:n=xd}n=Kv(n,Wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wv(t,e){if(ud=-1,dd=0,Pe&6)throw Error(F(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Cd(t,t===St?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bd(t,r);else{e=r;var o=Pe;Pe|=2;var i=Hv();(St!==t||kt!==e)&&(qr=null,Ca=st()+500,jo(t,e));do try{zb();break}catch(a){Fv(t,a)}while(!0);O1(),jd.current=i,Pe=o,ft!==null?e=0:(St=null,kt=0,e=vt)}if(e!==0){if(e===2&&(o=F0(t),o!==0&&(r=o,e=wp(t,o))),e===1)throw n=ac,jo(t,0),_i(t,r),sn(t,st()),n;if(e===6)_i(t,r);else{if(o=t.current.alternate,!(r&30)&&!Ub(o)&&(e=Bd(t,r),e===2&&(i=F0(t),i!==0&&(r=i,e=wp(t,i))),e===1))throw n=ac,jo(t,0),_i(t,r),sn(t,st()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ro(t,tn,qr);break;case 3:if(_i(t,r),(r&130023424)===r&&(e=q1+500-st(),10<e)){if(Cd(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=Q0(Ro.bind(null,t,tn,qr),e);break}Ro(t,tn,qr);break;case 4:if(_i(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var s=31-nr(r);i=1<<s,s=e[s],s>o&&(o=s),r&=~i}if(r=o,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Db(r/1960))-r,10<r){t.timeoutHandle=Q0(Ro.bind(null,t,tn,qr),r);break}Ro(t,tn,qr);break;case 5:Ro(t,tn,qr);break;default:throw Error(F(329))}}}return sn(t,st()),t.callbackNode===n?Wv.bind(null,t):null}function wp(t,e){var n=jl;return t.current.memoizedState.isDehydrated&&(jo(t,e).flags|=256),t=Bd(t,e),t!==2&&(e=tn,tn=n,e!==null&&vp(e)),t}function vp(t){tn===null?tn=t:tn.push.apply(tn,t)}function Ub(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _i(t,e){for(e&=~G1,e&=~Lf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nr(e),r=1<<n;t[n]=-1,e&=~r}}function nw(t){if(Pe&6)throw Error(F(327));Xs();var e=Cd(t,0);if(!(e&1))return sn(t,st()),null;var n=Bd(t,e);if(t.tag!==0&&n===2){var r=F0(t);r!==0&&(e=r,n=wp(t,r))}if(n===1)throw n=ac,jo(t,0),_i(t,e),sn(t,st()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ro(t,tn,qr),sn(t,st()),null}function K1(t,e){var n=Pe;Pe|=1;try{return t(e)}finally{Pe=n,Pe===0&&(Ca=st()+500,Pf&&fo())}}function Go(t){Ni!==null&&Ni.tag===0&&!(Pe&6)&&Xs();var e=Pe;Pe|=1;var n=Dn.transition,r=je;try{if(Dn.transition=null,je=1,t)return t()}finally{je=r,Dn.transition=n,Pe=e,!(Pe&6)&&fo()}}function Y1(){pn=Zs.current,Ze(Zs)}function jo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mb(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch($1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ad();break;case 3:ba(),Ze(rn),Ze(Mt),U1();break;case 5:D1(r);break;case 4:ba();break;case 13:Ze(Je);break;case 19:Ze(Je);break;case 10:N1(r.type._context);break;case 22:case 23:Y1()}n=n.return}if(St=t,ft=t=Vi(t.current,null),kt=pn=e,vt=0,ac=null,G1=Lf=Zo=0,tn=jl=null,$o!==null){for(e=0;e<$o.length;e++)if(n=$o[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}$o=null}return t}function Fv(t,e){do{var n=ft;try{if(O1(),ad.current=Ld,Md){for(var r=Xe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Md=!1}if(Vo=0,Et=wt=Xe=null,Ml=!1,ic=0,Z1.current=null,n===null||n.return===null){vt=1,ac=e,ft=null;break}e:{var i=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Fg(s);if(m!==null){m.flags&=-257,Hg(m,s,a,i,e),m.mode&1&&Wg(i,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var C=new Set;C.add(l),e.updateQueue=C}else x.add(l);break e}else{if(!(e&1)){Wg(i,c,e),Q1();break e}l=Error(F(426))}}else if(Ke&&a.mode&1){var b=Fg(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Hg(b,s,a,i,e),T1(xa(l,a));break e}}i=l=xa(l,a),vt!==4&&(vt=2),jl===null?jl=[i]:jl.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=Rv(i,l,e);Mg(i,g);break e;case 1:a=l;var w=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Fi===null||!Fi.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var S=Av(i,a,e);Mg(i,S);break e}}i=i.return}while(i!==null)}Zv(n)}catch(A){e=A,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function Hv(){var t=jd.current;return jd.current=Ld,t===null?Ld:t}function Q1(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||!(Zo&268435455)&&!(Lf&268435455)||_i(St,kt)}function Bd(t,e){var n=Pe;Pe|=2;var r=Hv();(St!==t||kt!==e)&&(qr=null,jo(t,e));do try{Bb();break}catch(o){Fv(t,o)}while(!0);if(O1(),Pe=n,jd.current=r,ft!==null)throw Error(F(261));return St=null,kt=0,vt}function Bb(){for(;ft!==null;)Vv(ft)}function zb(){for(;ft!==null&&!f6();)Vv(ft)}function Vv(t){var e=qv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Zv(t):ft=e,Z1.current=null}function Zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nb(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ft=null;return}}else if(n=Ob(n,e,pn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);vt===0&&(vt=5)}function Ro(t,e,n){var r=je,o=Dn.transition;try{Dn.transition=null,je=1,Wb(t,e,n,r)}finally{Dn.transition=o,je=r}return null}function Wb(t,e,n,r){do Xs();while(Ni!==null);if(Pe&6)throw Error(F(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(C6(t,i),t===St&&(ft=St=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wu||(Wu=!0,Kv(xd,function(){return Xs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Dn.transition,Dn.transition=null;var s=je;je=1;var a=Pe;Pe|=4,Z1.current=null,Lb(t,n),Bv(n,t),lb(K0),Ed=!!q0,K0=q0=null,t.current=n,jb(n),h6(),Pe=a,je=s,Dn.transition=i}else t.current=n;if(Wu&&(Wu=!1,Ni=t,Ud=o),i=t.pendingLanes,i===0&&(Fi=null),g6(n.stateNode),sn(t,st()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Dd)throw Dd=!1,t=mp,mp=null,t;return Ud&1&&t.tag!==0&&Xs(),i=t.pendingLanes,i&1?t===gp?Dl++:(Dl=0,gp=t):Dl=0,fo(),null}function Xs(){if(Ni!==null){var t=S3(Ud),e=Dn.transition,n=je;try{if(Dn.transition=null,je=16>t?16:t,Ni===null)var r=!1;else{if(t=Ni,Ni=null,Ud=0,Pe&6)throw Error(F(331));var o=Pe;for(Pe|=4,ie=t.current;ie!==null;){var i=ie,s=i.child;if(ie.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ie=c;ie!==null;){var u=ie;switch(u.tag){case 0:case 11:case 15:Ll(8,u,i)}var h=u.child;if(h!==null)h.return=u,ie=h;else for(;ie!==null;){u=ie;var p=u.sibling,m=u.return;if(jv(u),u===c){ie=null;break}if(p!==null){p.return=m,ie=p;break}ie=m}}}var x=i.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}ie=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,ie=s;else e:for(;ie!==null;){if(i=ie,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ll(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,ie=g;break e}ie=i.return}}var w=t.current;for(ie=w;ie!==null;){s=ie;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,ie=y;else e:for(s=w;ie!==null;){if(a=ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mf(9,a)}}catch(A){it(a,a.return,A)}if(a===s){ie=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ie=S;break e}ie=a.return}}if(Pe=o,fo(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(Af,t)}catch{}r=!0}return r}finally{je=n,Dn.transition=e}}return!1}function rw(t,e,n){e=xa(n,e),e=Rv(t,e,1),t=Wi(t,e,1),e=qt(),t!==null&&(lu(t,1,e),sn(t,e))}function it(t,e,n){if(t.tag===3)rw(t,t,n);else for(;e!==null;){if(e.tag===3){rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fi===null||!Fi.has(r))){t=xa(n,t),t=Av(e,t,1),e=Wi(e,t,1),t=qt(),e!==null&&(lu(e,1,t),sn(e,t));break}}e=e.return}}function Fb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(kt&n)===n&&(vt===4||vt===3&&(kt&130023424)===kt&&500>st()-q1?jo(t,0):G1|=n),sn(t,e)}function Gv(t,e){e===0&&(t.mode&1?(e=Pu,Pu<<=1,!(Pu&130023424)&&(Pu=4194304)):e=1);var n=qt();t=oi(t,e),t!==null&&(lu(t,e,n),sn(t,n))}function Hb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gv(t,n)}function Vb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Gv(t,n)}var qv;qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Pb(t,e,n);nn=!!(t.flags&131072)}else nn=!1,Ke&&e.flags&1048576&&Q3(e,$d,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cd(t,e),t=e.pendingProps;var o=wa(e,Mt.current);Js(e,n),o=z1(null,e,r,t,o,n);var i=W1();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(i=!0,Id(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,L1(e),o.updater=Of,e.stateNode=o,o._reactInternals=e,ip(e,r,t,n),e=ap(null,e,r,!0,i,n)):(e.tag=0,Ke&&i&&k1(e),Ht(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cd(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=Gb(r),t=Kn(r,t),o){case 0:e=sp(null,e,r,t,n);break e;case 1:e=Gg(null,e,r,t,n);break e;case 11:e=Vg(null,e,r,t,n);break e;case 14:e=Zg(null,e,r,Kn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Kn(r,o),sp(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Kn(r,o),Gg(t,e,r,o,n);case 3:e:{if(Tv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,o=i.element,tv(t,e),Od(e,r,null,n);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=xa(Error(F(423)),e),e=qg(t,e,r,n,o);break e}else if(r!==o){o=xa(Error(F(424)),e),e=qg(t,e,r,n,o);break e}else for(mn=zi(e.stateNode.containerInfo.firstChild),wn=e,Ke=!0,Xn=null,n=ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),r===o){e=si(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return sv(e),t===null&&tp(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,s=o.children,Y0(r,o)?s=null:i!==null&&Y0(r,i)&&(e.flags|=32),$v(t,e),Ht(t,e,s,n),e.child;case 6:return t===null&&tp(e),null;case 13:return Pv(t,e,n);case 4:return j1(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ya(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Kn(r,o),Vg(t,e,r,o,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,s=o.value,We(Td,r._currentValue),r._currentValue=s,i!==null)if(sr(i.value,s)){if(i.children===o.children&&!rn.current){e=si(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=ei(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),np(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(F(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),np(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ht(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,Js(e,n),o=Un(o),r=r(o),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,o=Kn(r,e.pendingProps),o=Kn(r.type,o),Zg(t,e,r,o,n);case 15:return Iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Kn(r,o),cd(t,e),e.tag=1,on(r)?(t=!0,Id(e)):t=!1,Js(e,n),rv(e,r,o),ip(e,r,o,n),ap(null,e,r,!0,t,n);case 19:return Ov(t,e,n);case 22:return kv(t,e,n)}throw Error(F(156,e.tag))};function Kv(t,e){return x3(t,e)}function Zb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,r){return new Zb(t,e,n,r)}function J1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gb(t){if(typeof t=="function")return J1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===w1)return 11;if(t===v1)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fd(t,e,n,r,o,i){var s=2;if(r=t,typeof t=="function")J1(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ls:return Do(n.children,o,i,e);case g1:s=8,o|=8;break;case I0:return t=jn(12,n,e,o|2),t.elementType=I0,t.lanes=i,t;case k0:return t=jn(13,n,e,o),t.elementType=k0,t.lanes=i,t;case $0:return t=jn(19,n,e,o),t.elementType=$0,t.lanes=i,t;case i3:return jf(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n3:s=10;break e;case r3:s=9;break e;case w1:s=11;break e;case v1:s=14;break e;case bi:s=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=jn(s,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function Do(t,e,n,r){return t=jn(7,t,r,e),t.lanes=n,t}function jf(t,e,n,r){return t=jn(22,t,r,e),t.elementType=i3,t.lanes=n,t.stateNode={isHidden:!1},t}function t0(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function n0(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qb(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lh(0),this.expirationTimes=Lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lh(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function X1(t,e,n,r,o,i,s,a,l){return t=new qb(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},L1(i),t}function Kb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Yv(t){if(!t)return eo;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(on(n))return K3(t,n,e)}return e}function Qv(t,e,n,r,o,i,s,a,l){return t=X1(n,r,!0,t,o,i,s,a,l),t.context=Yv(null),n=t.current,r=qt(),o=Hi(n),i=ei(r,o),i.callback=e??null,Wi(n,i,o),t.current.lanes=o,lu(t,o,r),sn(t,r),t}function Df(t,e,n,r){var o=e.current,i=qt(),s=Hi(o);return n=Yv(n),e.context===null?e.context=n:e.pendingContext=n,e=ei(i,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wi(o,e,s),t!==null&&(rr(t,o,s,i),sd(t,o,s)),s}function zd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function em(t,e){iw(t,e),(t=t.alternate)&&iw(t,e)}function Yb(){return null}var Jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function tm(t){this._internalRoot=t}Uf.prototype.render=tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Df(t,e,null,null)};Uf.prototype.unmount=tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Go(function(){Df(null,t,null,null)}),e[ii]=null}};function Uf(t){this._internalRoot=t}Uf.prototype.unstable_scheduleHydration=function(t){if(t){var e=I3();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&$3(t)}};function nm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ow(){}function Qb(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=zd(s);i.call(c)}}var s=Qv(e,r,t,0,null,!1,!1,"",ow);return t._reactRootContainer=s,t[ii]=s.current,Xl(t.nodeType===8?t.parentNode:t),Go(),s}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zd(l);a.call(c)}}var l=X1(t,0,!1,null,null,!1,!1,"",ow);return t._reactRootContainer=l,t[ii]=l.current,Xl(t.nodeType===8?t.parentNode:t),Go(function(){Df(e,l,n,r)}),l}function zf(t,e,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=zd(s);a.call(l)}}Df(e,s,t,o)}else s=Qb(n,e,t,o,r);return zd(s)}R3=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rl(e.pendingLanes);n!==0&&(x1(e,n|1),sn(e,st()),!(Pe&6)&&(Ca=st()+500,fo()))}break;case 13:Go(function(){var r=oi(t,1);if(r!==null){var o=qt();rr(r,t,1,o)}}),em(t,1)}};C1=function(t){if(t.tag===13){var e=oi(t,134217728);if(e!==null){var n=qt();rr(e,t,134217728,n)}em(t,134217728)}};A3=function(t){if(t.tag===13){var e=Hi(t),n=oi(t,e);if(n!==null){var r=qt();rr(n,t,e,r)}em(t,e)}};I3=function(){return je};k3=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};B0=function(t,e,n){switch(e){case"input":if(O0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=Tf(r);if(!o)throw Error(F(90));s3(r),O0(r,o)}}}break;case"textarea":l3(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};m3=K1;g3=Go;var Jb={usingClientEntryPoint:!1,Events:[uu,Bs,Tf,h3,p3,K1]},gl={findFiberByHostInstance:ko,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xb={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y3(t),t===null?null:t.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||Yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Af=Fu.inject(Xb),Ir=Fu}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jb;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(e))throw Error(F(200));return Kb(t,e,null,n)};Sn.createRoot=function(t,e){if(!nm(t))throw Error(F(299));var n=!1,r="",o=Jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=X1(t,1,!1,null,null,n,!1,r,o),t[ii]=e.current,Xl(t.nodeType===8?t.parentNode:t),new tm(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=y3(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Go(t)};Sn.hydrate=function(t,e,n){if(!Bf(e))throw Error(F(200));return zf(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!nm(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Jv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Qv(e,null,t,1,n??null,o,!1,i,s),t[ii]=e.current,Xl(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new Uf(e)};Sn.render=function(t,e,n){if(!Bf(e))throw Error(F(200));return zf(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Bf(t))throw Error(F(40));return t._reactRootContainer?(Go(function(){zf(null,null,t,!1,function(){t._reactRootContainer=null,t[ii]=null})}),!0):!1};Sn.unstable_batchedUpdates=K1;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bf(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return zf(t,e,n,!1,r)};Sn.version="18.2.0-next-9e3b772b8-20220608";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(t){console.error(t)}}Xv(),Q2.exports=Sn;var e8=Q2.exports,sw=e8;R0.createRoot=sw.createRoot,R0.hydrateRoot=sw.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lc.apply(this,arguments)}var Mi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mi||(Mi={}));const aw="popstate";function t8(t){t===void 0&&(t={});function e(r,o){let{pathname:i,search:s,hash:a}=r.location;return yp("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Wd(o)}return r8(e,n,null,t)}function ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function n8(){return Math.random().toString(36).substr(2,8)}function lw(t,e){return{usr:t.state,key:t.key,idx:e}}function yp(t,e,n,r){return n===void 0&&(n=null),lc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qa(e):e,{state:n,key:e&&e.key||r||n8()})}function Wd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function r8(t,e,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Mi.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(lc({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function h(){a=Mi.Pop;let b=u(),g=b==null?null:b-c;c=b,l&&l({action:a,location:C.location,delta:g})}function p(b,g){a=Mi.Push;let w=yp(C.location,b,g);n&&n(w,b),c=u()+1;let y=lw(w,c),S=C.createHref(w);try{s.pushState(y,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(S)}i&&l&&l({action:a,location:C.location,delta:1})}function m(b,g){a=Mi.Replace;let w=yp(C.location,b,g);n&&n(w,b),c=u();let y=lw(w,c),S=C.createHref(w);s.replaceState(y,"",S),i&&l&&l({action:a,location:C.location,delta:0})}function x(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,w=typeof b=="string"?b:Wd(b);return ht(g,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,g)}let C={get action(){return a},get location(){return t(o,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(aw,h),l=b,()=>{o.removeEventListener(aw,h),l=null}},createHref(b){return e(o,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(b){return s.go(b)}};return C}var cw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cw||(cw={}));function i8(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qa(e):e,o=im(r.pathname||"/",n);if(o==null)return null;let i=ey(t);o8(i);let s=null;for(let a=0;s==null&&a<i.length;++a)s=p8(i[a],w8(o));return s}function ey(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(ht(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Zi([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(ht(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ey(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:f8(c,i.index),routesMeta:u})};return t.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of ty(i.path))o(i,s,l)}),e}function ty(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=ty(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function o8(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:h8(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s8=/^:[\w-]+$/,a8=3,l8=2,c8=1,u8=10,d8=-2,uw=t=>t==="*";function f8(t,e){let n=t.split("/"),r=n.length;return n.some(uw)&&(r+=d8),e&&(r+=l8),n.filter(o=>!uw(o)).reduce((o,i)=>o+(s8.test(i)?a8:i===""?c8:u8),r)}function h8(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function p8(t,e){let{routesMeta:n}=t,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=o==="/"?e:e.slice(o.length)||"/",u=m8({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let h=a.route;i.push({params:r,pathname:Zi([o,u.pathname]),pathnameBase:C8(Zi([o,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(o=Zi([o,u.pathnameBase]))}return i}function m8(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=g8(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,u,h)=>{let{paramName:p,isOptional:m}=u;if(p==="*"){let C=a[h]||"";s=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const x=a[h];return m&&!x?c[p]=void 0:c[p]=v8(x||"",p),c},{}),pathname:i,pathnameBase:s,pattern:t}}function g8(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function w8(t){try{return decodeURI(t)}catch(e){return rm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function v8(t,e){try{return decodeURIComponent(t)}catch(n){return rm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function im(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function y8(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:o=""}=typeof t=="string"?Qa(t):t;return{pathname:n?n.startsWith("/")?n:b8(n,e):e,search:E8(r),hash:_8(o)}}function b8(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function r0(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x8(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ny(t,e){let n=x8(t);return e?n.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ry(t,e,n,r){r===void 0&&(r=!1);let o;typeof t=="string"?o=Qa(t):(o=lc({},t),ht(!o.pathname||!o.pathname.includes("?"),r0("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),r0("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),r0("#","search","hash",o)));let i=t===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=e.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;o.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=y8(o,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Zi=t=>t.join("/").replace(/\/\/+/g,"/"),C8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),E8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function S8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iy=["post","put","patch","delete"];new Set(iy);const R8=["get",...iy];new Set(R8);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cc(){return cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cc.apply(this,arguments)}const om=Q.createContext(null),A8=Q.createContext(null),xs=Q.createContext(null),Wf=Q.createContext(null),Cs=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),oy=Q.createContext(null);function I8(t,e){let{relative:n}=e===void 0?{}:e;fu()||ht(!1);let{basename:r,navigator:o}=Q.useContext(xs),{hash:i,pathname:s,search:a}=ay(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Zi([r,s])),o.createHref({pathname:l,search:a,hash:i})}function fu(){return Q.useContext(Wf)!=null}function Ff(){return fu()||ht(!1),Q.useContext(Wf).location}function sy(t){Q.useContext(xs).static||Q.useLayoutEffect(t)}function k8(){let{isDataRoute:t}=Q.useContext(Cs);return t?W8():$8()}function $8(){fu()||ht(!1);let t=Q.useContext(om),{basename:e,future:n,navigator:r}=Q.useContext(xs),{matches:o}=Q.useContext(Cs),{pathname:i}=Ff(),s=JSON.stringify(ny(o,n.v7_relativeSplatPath)),a=Q.useRef(!1);return sy(()=>{a.current=!0}),Q.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=ry(c,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Zi([e,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[e,r,s,i,t])}function ay(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=Q.useContext(xs),{matches:o}=Q.useContext(Cs),{pathname:i}=Ff(),s=JSON.stringify(ny(o,r.v7_relativeSplatPath));return Q.useMemo(()=>ry(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function T8(t,e){return P8(t,e)}function P8(t,e,n,r){fu()||ht(!1);let{navigator:o}=Q.useContext(xs),{matches:i}=Q.useContext(Cs),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ff(),u;if(e){var h;let b=typeof e=="string"?Qa(e):e;l==="/"||(h=b.pathname)!=null&&h.startsWith(l)||ht(!1),u=b}else u=c;let p=u.pathname||"/",m=l==="/"?p:p.slice(l.length)||"/",x=i8(t,{pathname:m}),C=j8(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Zi([l,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Zi([l,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return e&&C?Q.createElement(Wf.Provider,{value:{location:cc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mi.Pop}},C):C}function O8(){let t=z8(),e=S8(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),n?Q.createElement("pre",{style:o},n):null,null)}const N8=Q.createElement(O8,null);class M8 extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Q.createElement(Cs.Provider,{value:this.props.routeContext},Q.createElement(oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function L8(t){let{routeContext:e,match:n,children:r}=t,o=Q.useContext(om);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),Q.createElement(Cs.Provider,{value:e},r)}function j8(t,e,n,r){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,a=(o=n)==null?void 0:o.errors;if(a!=null){let u=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));u>=0||ht(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let h=s[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:p,errors:m}=n,x=h.route.loader&&p[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||x){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,h,p)=>{let m,x=!1,C=null,b=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,C=h.route.errorElement||N8,l&&(c<0&&p===0?(F8("route-fallback",!1),x=!0,b=null):c===p&&(x=!0,b=h.route.hydrateFallbackElement||null)));let g=e.concat(s.slice(0,p+1)),w=()=>{let y;return m?y=C:x?y=b:h.route.Component?y=Q.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=u,Q.createElement(L8,{match:h,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?Q.createElement(M8,{location:n.location,revalidation:n.revalidation,component:C,error:m,children:w(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):w()},null)}var ly=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ly||{}),Fd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fd||{});function D8(t){let e=Q.useContext(om);return e||ht(!1),e}function U8(t){let e=Q.useContext(A8);return e||ht(!1),e}function B8(t){let e=Q.useContext(Cs);return e||ht(!1),e}function cy(t){let e=B8(),n=e.matches[e.matches.length-1];return n.route.id||ht(!1),n.route.id}function z8(){var t;let e=Q.useContext(oy),n=U8(Fd.UseRouteError),r=cy(Fd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function W8(){let{router:t}=D8(ly.UseNavigateStable),e=cy(Fd.UseNavigateStable),n=Q.useRef(!1);return sy(()=>{n.current=!0}),Q.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,cc({fromRouteId:e},i)))},[t,e])}const dw={};function F8(t,e,n){!e&&!dw[t]&&(dw[t]=!0)}function Il(t){ht(!1)}function H8(t){let{basename:e="/",children:n=null,location:r,navigationType:o=Mi.Pop,navigator:i,static:s=!1,future:a}=t;fu()&&ht(!1);let l=e.replace(/^\/*/,"/"),c=Q.useMemo(()=>({basename:l,navigator:i,static:s,future:cc({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=Qa(r));let{pathname:u="/",search:h="",hash:p="",state:m=null,key:x="default"}=r,C=Q.useMemo(()=>{let b=im(u,l);return b==null?null:{location:{pathname:b,search:h,hash:p,state:m,key:x},navigationType:o}},[l,u,h,p,m,x,o]);return C==null?null:Q.createElement(xs.Provider,{value:c},Q.createElement(Wf.Provider,{children:n,value:C}))}function V8(t){let{children:e,location:n}=t;return T8(bp(e),n)}new Promise(()=>{});function bp(t,e){e===void 0&&(e=[]);let n=[];return Q.Children.forEach(t,(r,o)=>{if(!Q.isValidElement(r))return;let i=[...e,o];if(r.type===Q.Fragment){n.push.apply(n,bp(r.props.children,i));return}r.type!==Il&&ht(!1),!r.props.index||!r.props.children||ht(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bp(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xp(){return xp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xp.apply(this,arguments)}function Z8(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function G8(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function q8(t,e){return t.button===0&&(!e||e==="_self")&&!G8(t)}const K8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y8="6";try{window.__reactRouterVersion=Y8}catch{}const Q8="startTransition",fw=H4[Q8];function J8(t){let{basename:e,children:n,future:r,window:o}=t,i=Q.useRef();i.current==null&&(i.current=t8({window:o,v5Compat:!0}));let s=i.current,[a,l]=Q.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=Q.useCallback(h=>{c&&fw?fw(()=>l(h)):l(h)},[l,c]);return Q.useLayoutEffect(()=>s.listen(u),[s,u]),Q.createElement(H8,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const X8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ea=Q.forwardRef(function(e,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:h}=e,p=Z8(e,K8),{basename:m}=Q.useContext(xs),x,C=!1;if(typeof c=="string"&&ex.test(c)&&(x=c,X8))try{let y=new URL(window.location.href),S=c.startsWith("//")?new URL(y.protocol+c):new URL(c),A=im(S.pathname,m);S.origin===y.origin&&A!=null?c=A+S.search+S.hash:C=!0}catch{}let b=I8(c,{relative:o}),g=tx(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:o,unstable_viewTransition:h});function w(y){r&&r(y),y.defaultPrevented||g(y)}return Q.createElement("a",xp({},p,{href:x||b,onClick:C||i?r:w,ref:n,target:l}))});var hw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hw||(hw={}));var pw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pw||(pw={}));function tx(t,e){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=k8(),c=Ff(),u=ay(t,{relative:s});return Q.useCallback(h=>{if(q8(h,n)){h.preventDefault();let p=r!==void 0?r:Wd(c)===Wd(u);l(t,{replace:p,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[c,l,u,r,o,n,t,i,s,a])}var uy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mw=Xr.createContext&&Xr.createContext(uy),Gi=function(){return Gi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Gi.apply(this,arguments)},nx=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};function dy(t){return t&&t.map(function(e,n){return Xr.createElement(e.tag,Gi({key:n},e.attr),dy(e.child))})}function ho(t){return function(e){return Xr.createElement(rx,Gi({attr:Gi({},t.attr)},e),dy(t.child))}}function rx(t){var e=function(n){var r=t.attr,o=t.size,i=t.title,s=nx(t,["attr","size","title"]),a=o||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Xr.createElement("svg",Gi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Gi(Gi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Xr.createElement("title",null,i),t.children)};return mw!==void 0?Xr.createElement(mw.Consumer,null,function(n){return e(n)}):e(uy)}function ix(t){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(t)}function ox(t){return ho({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function sx(t){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function ax(t){return ho({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function lx(t){return ho({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"}}]})(t)}function cx(t){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function ux(t){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"}}]})(t)}function dx(t){return ho({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const fy=()=>M.jsx("div",{className:"footer",children:M.jsxs("div",{className:"footer-container",children:[M.jsxs("div",{className:"left",children:[M.jsxs("div",{className:"location",children:[M.jsx(ux,{size:20,style:{color:"#ffffff",marginRight:"2rem"}}),M.jsxs("div",{children:[M.jsx("p",{children:"123 Acme St."}),M.jsx("h4",{children:"Houston, Tx"})]})]}),M.jsx("div",{className:"phone",children:M.jsxs("h4",{children:[M.jsx(cx,{size:20,style:{color:"#ffffff",marginRight:"2rem"}})," 1-800-123-1234"]})}),M.jsx("div",{className:"email",children:M.jsxs("h4",{children:[M.jsx(lx,{size:20,style:{color:"#ffffff",marginRight:"2rem"}})," trips@galaxy.com"]})})]}),M.jsxs("div",{className:"right",children:[M.jsx("h4",{children:"About the company"}),M.jsx("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"'}),M.jsxs("div",{className:"social",children:[M.jsx(ix,{size:30,style:{color:"#ffffff",marginRight:"1rem"}}),M.jsx(sx,{size:30,style:{color:"#ffffff",marginRight:"1rem"}}),M.jsx(ox,{size:30,style:{color:"#ffffff",marginRight:"1rem"}})]})]})]})}),Hf=()=>{const[t,e]=Q.useState(!1),n=()=>e(!t),[r,o]=Q.useState(!1),i=()=>{window.scrollY>=100?o(!0):o(!1)};return window.addEventListener("scroll",i),M.jsxs("div",{className:r?"header header-bg":"header",children:[M.jsx(ea,{to:"/",children:M.jsx("h1",{children:"Bitphrase"})}),M.jsxs("ul",{className:t?"nav-menu active":"nav-menu",children:[M.jsx("li",{children:M.jsx("w3m-button",{})}),M.jsx("li",{style:{display:"flex",alignItems:"center"},children:M.jsx(ea,{to:"/about",children:"About"})})]}),M.jsx("div",{className:"hamburger",onClick:n,children:t?M.jsx(dx,{size:20,style:{color:"#fff"}}):M.jsx(ax,{size:20,style:{color:"#fff"}})})]})},fx=""+new URL("space-DWbqq1V_.mp4",import.meta.url).href,hx=()=>M.jsxs("div",{className:"hero",children:[M.jsx("video",{autoPlay:!0,loop:!0,muted:!0,id:"video",children:M.jsx("source",{src:fx,type:"video/mp4"})}),M.jsx("div",{className:"content",children:M.jsx("h1",{children:"Whosyourdaddy"})})]}),px=()=>M.jsxs("div",{children:[M.jsx(Hf,{}),M.jsx(hx,{})]}),mx=()=>M.jsx("div",{className:"pricing",children:M.jsxs("div",{className:"card-container",children:[M.jsxs("div",{className:"card",children:[M.jsx("h3",{children:"- Basic -"}),M.jsx("span",{className:"bar"}),M.jsx("p",{className:"btc",children:"1 BTC"}),M.jsx("p",{children:"- 3 Days -"}),M.jsx("p",{children:"- Views -"}),M.jsx("p",{children:"- Featured -"}),M.jsx("p",{children:"- Private Quarters -"}),M.jsx(ea,{to:"/contact",className:"btn",children:"Book"})]}),M.jsxs("div",{className:"card",children:[M.jsx("h3",{children:"- Suite -"}),M.jsx("span",{className:"bar"}),M.jsx("p",{className:"btc",children:"1 BTC"}),M.jsx("p",{children:"- 3 Days -"}),M.jsx("p",{children:"- Views -"}),M.jsx("p",{children:"- Featured -"}),M.jsx("p",{children:"- Private Quarters -"}),M.jsx(ea,{to:"/contact",className:"btn",children:"Book"})]}),M.jsxs("div",{className:"card",children:[M.jsx("h3",{children:"- Executive -"}),M.jsx("span",{className:"bar"}),M.jsx("p",{className:"btc",children:"1 BTC"}),M.jsx("p",{children:"- 3 Days -"}),M.jsx("p",{children:"- Views -"}),M.jsx("p",{children:"- Featured -"}),M.jsx("p",{children:"- Private Quarters -"}),M.jsx(ea,{to:"/contact",className:"btn",children:"Book"})]})]})});class hy extends Q.Component{render(){return M.jsx("div",{className:"hero-img",children:M.jsxs("div",{className:"heading",children:[M.jsx("h1",{children:this.props.heading}),M.jsx("p",{children:this.props.text})]})})}}const gx=()=>M.jsxs("div",{children:[M.jsx(Hf,{}),M.jsx(hy,{heading:"PRICING.",text:"Choose your trip."}),M.jsx(mx,{}),M.jsx(fy,{})]}),wx=""+new URL("pod-DmOTBYQ9.jpg",import.meta.url).href,vx=""+new URL("moon-D5xTpZA9.jpg",import.meta.url).href,yx=()=>M.jsxs("div",{className:"training",children:[M.jsxs("div",{className:"left",children:[M.jsx("h1",{children:"Training"}),M.jsx("p",{children:"Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios."}),M.jsx(ea,{to:"/contact",children:M.jsx("button",{className:"btn",children:"Contact"})})]}),M.jsx("div",{className:"right",children:M.jsxs("div",{className:"img-container",children:[M.jsx("div",{className:"image-stack top",children:M.jsx("img",{src:vx,className:"img",alt:""})}),M.jsx("div",{className:"image-stack bottom",children:M.jsx("img",{src:wx,className:"img",alt:""})})]})})]}),bx=()=>M.jsxs("div",{children:[M.jsx(Hf,{}),M.jsx(hy,{heading:"TRAINING.",text:"Pre-Flight & In-Flight Training."}),M.jsx(yx,{}),M.jsx(fy,{})]}),xx=()=>M.jsxs(M.Fragment,{children:[M.jsx(Hf,{}),M.jsxs("div",{className:"hero",children:[M.jsx("video",{autoPlay:!0,loop:!0,muted:!0,id:"video"}),M.jsxs("section",{className:"about-content",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",textAlign:"center",padding:"0 20px"},children:[M.jsx("h1",{children:"About Bitphrase"}),M.jsx("p",{children:"Welcome to Bitphrase, a groundbreaking web3 platform that revolutionizes how value and words intersect in the digital space. Here, your cryptocurrency isn't just a token of exchange—it's your voice."}),M.jsx("p",{children:"Our unique bidding system allows the highest bidder to immortalize their message, thought, or statement on our website, showcasing the power of blockchain to create a dynamic and ever-changing canvas of community expressions. Whether it's a declaration of love, a philosophical musing, or a shoutout, your words gain a place of honor, powered by your investment."}),M.jsx("p",{children:"This isn't just about displaying messages; it's about creating a new form of digital art where monetary value meets personal expression. Dive into Bitphrase, where every bid is a chance to make your mark on the blockchain in a way that's visible, impactful, and uniquely yours."}),M.jsx("p",{children:"Join us in this adventure as we explore the boundaries of expression in the web3 era. Your words, powered by crypto, have the stage. What will you say?"})]})]})]});var py={},Vf={};Vf.byteLength=_x;Vf.toByteArray=Rx;Vf.fromByteArray=kx;var Ar=[],Tn=[],Cx=typeof Uint8Array<"u"?Uint8Array:Array,i0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var $s=0,Ex=i0.length;$s<Ex;++$s)Ar[$s]=i0[$s],Tn[i0.charCodeAt($s)]=$s;Tn[45]=62;Tn[95]=63;function my(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function _x(t){var e=my(t),n=e[0],r=e[1];return(n+r)*3/4-r}function Sx(t,e,n){return(e+n)*3/4-n}function Rx(t){var e,n=my(t),r=n[0],o=n[1],i=new Cx(Sx(t,r,o)),s=0,a=o>0?r-4:r,l;for(l=0;l<a;l+=4)e=Tn[t.charCodeAt(l)]<<18|Tn[t.charCodeAt(l+1)]<<12|Tn[t.charCodeAt(l+2)]<<6|Tn[t.charCodeAt(l+3)],i[s++]=e>>16&255,i[s++]=e>>8&255,i[s++]=e&255;return o===2&&(e=Tn[t.charCodeAt(l)]<<2|Tn[t.charCodeAt(l+1)]>>4,i[s++]=e&255),o===1&&(e=Tn[t.charCodeAt(l)]<<10|Tn[t.charCodeAt(l+1)]<<4|Tn[t.charCodeAt(l+2)]>>2,i[s++]=e>>8&255,i[s++]=e&255),i}function Ax(t){return Ar[t>>18&63]+Ar[t>>12&63]+Ar[t>>6&63]+Ar[t&63]}function Ix(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(Ax(r));return o.join("")}function kx(t){for(var e,n=t.length,r=n%3,o=[],i=16383,s=0,a=n-r;s<a;s+=i)o.push(Ix(t,s,s+i>a?a:s+i));return r===1?(e=t[n-1],o.push(Ar[e>>2]+Ar[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],o.push(Ar[e>>10]+Ar[e>>4&63]+Ar[e<<2&63]+"=")),o.join("")}var sm={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */sm.read=function(t,e,n,r,o){var i,s,a=o*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?o-1:0,p=n?-1:1,m=t[e+h];for(h+=p,i=m&(1<<-u)-1,m>>=-u,u+=a;u>0;i=i*256+t[e+h],h+=p,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=r;u>0;s=s*256+t[e+h],h+=p,u-=8);if(i===0)i=1-c;else{if(i===l)return s?NaN:(m?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-c}return(m?-1:1)*s*Math.pow(2,i-r)};sm.write=function(t,e,n,r,o,i){var s,a,l,c=i*8-o-1,u=(1<<c)-1,h=u>>1,p=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=r?0:i-1,x=r?1:-1,C=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?e+=p/l:e+=p*Math.pow(2,1-h),e*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(e*l-1)*Math.pow(2,o),s=s+h):(a=e*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;t[n+m]=a&255,m+=x,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+m]=s&255,m+=x,s/=256,c-=8);t[n+m-x]|=C*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Vf,n=sm,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=w,t.INSPECT_MAX_BYTES=50;const o=2147483647;t.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const v=new Uint8Array(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,Uint8Array.prototype),Object.setPrototypeOf(v,d),v.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(v){if(v>o)throw new RangeError('The value "'+v+'" is invalid for option "size"');const d=new Uint8Array(v);return Object.setPrototypeOf(d,a.prototype),d}function a(v,d,f){if(typeof v=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(v)}return l(v,d,f)}a.poolSize=8192;function l(v,d,f){if(typeof v=="string")return p(v,d);if(ArrayBuffer.isView(v))return x(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(yr(v,ArrayBuffer)||v&&yr(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(yr(v,SharedArrayBuffer)||v&&yr(v.buffer,SharedArrayBuffer)))return C(v,d,f);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const _=v.valueOf&&v.valueOf();if(_!=null&&_!==v)return a.from(_,d,f);const I=b(v);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return a.from(v[Symbol.toPrimitive]("string"),d,f);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}a.from=function(v,d,f){return l(v,d,f)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function u(v,d,f){return c(v),v<=0?s(v):d!==void 0?typeof f=="string"?s(v).fill(d,f):s(v).fill(d):s(v)}a.alloc=function(v,d,f){return u(v,d,f)};function h(v){return c(v),s(v<0?0:g(v)|0)}a.allocUnsafe=function(v){return h(v)},a.allocUnsafeSlow=function(v){return h(v)};function p(v,d){if((typeof d!="string"||d==="")&&(d="utf8"),!a.isEncoding(d))throw new TypeError("Unknown encoding: "+d);const f=y(v,d)|0;let _=s(f);const I=_.write(v,d);return I!==f&&(_=_.slice(0,I)),_}function m(v){const d=v.length<0?0:g(v.length)|0,f=s(d);for(let _=0;_<d;_+=1)f[_]=v[_]&255;return f}function x(v){if(yr(v,Uint8Array)){const d=new Uint8Array(v);return C(d.buffer,d.byteOffset,d.byteLength)}return m(v)}function C(v,d,f){if(d<0||v.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<d+(f||0))throw new RangeError('"length" is outside of buffer bounds');let _;return d===void 0&&f===void 0?_=new Uint8Array(v):f===void 0?_=new Uint8Array(v,d):_=new Uint8Array(v,d,f),Object.setPrototypeOf(_,a.prototype),_}function b(v){if(a.isBuffer(v)){const d=g(v.length)|0,f=s(d);return f.length===0||v.copy(f,0,0,d),f}if(v.length!==void 0)return typeof v.length!="number"||kh(v.length)?s(0):m(v);if(v.type==="Buffer"&&Array.isArray(v.data))return m(v.data)}function g(v){if(v>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return v|0}function w(v){return+v!=v&&(v=0),a.alloc(+v)}a.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==a.prototype},a.compare=function(d,f){if(yr(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),yr(f,Uint8Array)&&(f=a.from(f,f.offset,f.byteLength)),!a.isBuffer(d)||!a.isBuffer(f))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===f)return 0;let _=d.length,I=f.length;for(let T=0,D=Math.min(_,I);T<D;++T)if(d[T]!==f[T]){_=d[T],I=f[T];break}return _<I?-1:I<_?1:0},a.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(d,f){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return a.alloc(0);let _;if(f===void 0)for(f=0,_=0;_<d.length;++_)f+=d[_].length;const I=a.allocUnsafe(f);let T=0;for(_=0;_<d.length;++_){let D=d[_];if(yr(D,Uint8Array))T+D.length>I.length?(a.isBuffer(D)||(D=a.from(D)),D.copy(I,T)):Uint8Array.prototype.set.call(I,D,T);else if(a.isBuffer(D))D.copy(I,T);else throw new TypeError('"list" argument must be an Array of Buffers');T+=D.length}return I};function y(v,d){if(a.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||yr(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const f=v.length,_=arguments.length>2&&arguments[2]===!0;if(!_&&f===0)return 0;let I=!1;for(;;)switch(d){case"ascii":case"latin1":case"binary":return f;case"utf8":case"utf-8":return Ih(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f*2;case"hex":return f>>>1;case"base64":return Qm(v).length;default:if(I)return _?-1:Ih(v).length;d=(""+d).toLowerCase(),I=!0}}a.byteLength=y;function S(v,d,f){let _=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((f===void 0||f>this.length)&&(f=this.length),f<=0)||(f>>>=0,d>>>=0,f<=d))return"";for(v||(v="utf8");;)switch(v){case"hex":return K(this,d,f);case"utf8":case"utf-8":return le(this,d,f);case"ascii":return ae(this,d,f);case"latin1":case"binary":return O(this,d,f);case"base64":return Te(this,d,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,d,f);default:if(_)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),_=!0}}a.prototype._isBuffer=!0;function A(v,d,f){const _=v[d];v[d]=v[f],v[f]=_}a.prototype.swap16=function(){const d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let f=0;f<d;f+=2)A(this,f,f+1);return this},a.prototype.swap32=function(){const d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let f=0;f<d;f+=4)A(this,f,f+3),A(this,f+1,f+2);return this},a.prototype.swap64=function(){const d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let f=0;f<d;f+=8)A(this,f,f+7),A(this,f+1,f+6),A(this,f+2,f+5),A(this,f+3,f+4);return this},a.prototype.toString=function(){const d=this.length;return d===0?"":arguments.length===0?le(this,0,d):S.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(d){if(!a.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:a.compare(this,d)===0},a.prototype.inspect=function(){let d="";const f=t.INSPECT_MAX_BYTES;return d=this.toString("hex",0,f).replace(/(.{2})/g,"$1 ").trim(),this.length>f&&(d+=" ... "),"<Buffer "+d+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(d,f,_,I,T){if(yr(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(f===void 0&&(f=0),_===void 0&&(_=d?d.length:0),I===void 0&&(I=0),T===void 0&&(T=this.length),f<0||_>d.length||I<0||T>this.length)throw new RangeError("out of range index");if(I>=T&&f>=_)return 0;if(I>=T)return-1;if(f>=_)return 1;if(f>>>=0,_>>>=0,I>>>=0,T>>>=0,this===d)return 0;let D=T-I,Re=_-f;const tt=Math.min(D,Re),Ge=this.slice(I,T),nt=d.slice(f,_);for(let Ue=0;Ue<tt;++Ue)if(Ge[Ue]!==nt[Ue]){D=Ge[Ue],Re=nt[Ue];break}return D<Re?-1:Re<D?1:0};function k(v,d,f,_,I){if(v.length===0)return-1;if(typeof f=="string"?(_=f,f=0):f>2147483647?f=2147483647:f<-2147483648&&(f=-2147483648),f=+f,kh(f)&&(f=I?0:v.length-1),f<0&&(f=v.length+f),f>=v.length){if(I)return-1;f=v.length-1}else if(f<0)if(I)f=0;else return-1;if(typeof d=="string"&&(d=a.from(d,_)),a.isBuffer(d))return d.length===0?-1:P(v,d,f,_,I);if(typeof d=="number")return d=d&255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(v,d,f):Uint8Array.prototype.lastIndexOf.call(v,d,f):P(v,[d],f,_,I);throw new TypeError("val must be string, number or Buffer")}function P(v,d,f,_,I){let T=1,D=v.length,Re=d.length;if(_!==void 0&&(_=String(_).toLowerCase(),_==="ucs2"||_==="ucs-2"||_==="utf16le"||_==="utf-16le")){if(v.length<2||d.length<2)return-1;T=2,D/=2,Re/=2,f/=2}function tt(nt,Ue){return T===1?nt[Ue]:nt.readUInt16BE(Ue*T)}let Ge;if(I){let nt=-1;for(Ge=f;Ge<D;Ge++)if(tt(v,Ge)===tt(d,nt===-1?0:Ge-nt)){if(nt===-1&&(nt=Ge),Ge-nt+1===Re)return nt*T}else nt!==-1&&(Ge-=Ge-nt),nt=-1}else for(f+Re>D&&(f=D-Re),Ge=f;Ge>=0;Ge--){let nt=!0;for(let Ue=0;Ue<Re;Ue++)if(tt(v,Ge+Ue)!==tt(d,Ue)){nt=!1;break}if(nt)return Ge}return-1}a.prototype.includes=function(d,f,_){return this.indexOf(d,f,_)!==-1},a.prototype.indexOf=function(d,f,_){return k(this,d,f,_,!0)},a.prototype.lastIndexOf=function(d,f,_){return k(this,d,f,_,!1)};function N(v,d,f,_){f=Number(f)||0;const I=v.length-f;_?(_=Number(_),_>I&&(_=I)):_=I;const T=d.length;_>T/2&&(_=T/2);let D;for(D=0;D<_;++D){const Re=parseInt(d.substr(D*2,2),16);if(kh(Re))return D;v[f+D]=Re}return D}function V(v,d,f,_){return Su(Ih(d,v.length-f),v,f,_)}function j(v,d,f,_){return Su(_4(d),v,f,_)}function W(v,d,f,_){return Su(Qm(d),v,f,_)}function ve(v,d,f,_){return Su(S4(d,v.length-f),v,f,_)}a.prototype.write=function(d,f,_,I){if(f===void 0)I="utf8",_=this.length,f=0;else if(_===void 0&&typeof f=="string")I=f,_=this.length,f=0;else if(isFinite(f))f=f>>>0,isFinite(_)?(_=_>>>0,I===void 0&&(I="utf8")):(I=_,_=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const T=this.length-f;if((_===void 0||_>T)&&(_=T),d.length>0&&(_<0||f<0)||f>this.length)throw new RangeError("Attempt to write outside buffer bounds");I||(I="utf8");let D=!1;for(;;)switch(I){case"hex":return N(this,d,f,_);case"utf8":case"utf-8":return V(this,d,f,_);case"ascii":case"latin1":case"binary":return j(this,d,f,_);case"base64":return W(this,d,f,_);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,d,f,_);default:if(D)throw new TypeError("Unknown encoding: "+I);I=(""+I).toLowerCase(),D=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Te(v,d,f){return d===0&&f===v.length?e.fromByteArray(v):e.fromByteArray(v.slice(d,f))}function le(v,d,f){f=Math.min(v.length,f);const _=[];let I=d;for(;I<f;){const T=v[I];let D=null,Re=T>239?4:T>223?3:T>191?2:1;if(I+Re<=f){let tt,Ge,nt,Ue;switch(Re){case 1:T<128&&(D=T);break;case 2:tt=v[I+1],(tt&192)===128&&(Ue=(T&31)<<6|tt&63,Ue>127&&(D=Ue));break;case 3:tt=v[I+1],Ge=v[I+2],(tt&192)===128&&(Ge&192)===128&&(Ue=(T&15)<<12|(tt&63)<<6|Ge&63,Ue>2047&&(Ue<55296||Ue>57343)&&(D=Ue));break;case 4:tt=v[I+1],Ge=v[I+2],nt=v[I+3],(tt&192)===128&&(Ge&192)===128&&(nt&192)===128&&(Ue=(T&15)<<18|(tt&63)<<12|(Ge&63)<<6|nt&63,Ue>65535&&Ue<1114112&&(D=Ue))}}D===null?(D=65533,Re=1):D>65535&&(D-=65536,_.push(D>>>10&1023|55296),D=56320|D&1023),_.push(D),I+=Re}return q(_)}const X=4096;function q(v){const d=v.length;if(d<=X)return String.fromCharCode.apply(String,v);let f="",_=0;for(;_<d;)f+=String.fromCharCode.apply(String,v.slice(_,_+=X));return f}function ae(v,d,f){let _="";f=Math.min(v.length,f);for(let I=d;I<f;++I)_+=String.fromCharCode(v[I]&127);return _}function O(v,d,f){let _="";f=Math.min(v.length,f);for(let I=d;I<f;++I)_+=String.fromCharCode(v[I]);return _}function K(v,d,f){const _=v.length;(!d||d<0)&&(d=0),(!f||f<0||f>_)&&(f=_);let I="";for(let T=d;T<f;++T)I+=R4[v[T]];return I}function Y(v,d,f){const _=v.slice(d,f);let I="";for(let T=0;T<_.length-1;T+=2)I+=String.fromCharCode(_[T]+_[T+1]*256);return I}a.prototype.slice=function(d,f){const _=this.length;d=~~d,f=f===void 0?_:~~f,d<0?(d+=_,d<0&&(d=0)):d>_&&(d=_),f<0?(f+=_,f<0&&(f=0)):f>_&&(f=_),f<d&&(f=d);const I=this.subarray(d,f);return Object.setPrototypeOf(I,a.prototype),I};function te(v,d,f){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+d>f)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(d,f,_){d=d>>>0,f=f>>>0,_||te(d,f,this.length);let I=this[d],T=1,D=0;for(;++D<f&&(T*=256);)I+=this[d+D]*T;return I},a.prototype.readUintBE=a.prototype.readUIntBE=function(d,f,_){d=d>>>0,f=f>>>0,_||te(d,f,this.length);let I=this[d+--f],T=1;for(;f>0&&(T*=256);)I+=this[d+--f]*T;return I},a.prototype.readUint8=a.prototype.readUInt8=function(d,f){return d=d>>>0,f||te(d,1,this.length),this[d]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(d,f){return d=d>>>0,f||te(d,2,this.length),this[d]|this[d+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(d,f){return d=d>>>0,f||te(d,2,this.length),this[d]<<8|this[d+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(d,f){return d=d>>>0,f||te(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(d,f){return d=d>>>0,f||te(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},a.prototype.readBigUInt64LE=wi(function(d){d=d>>>0,Zn(d,"offset");const f=this[d],_=this[d+7];(f===void 0||_===void 0)&&ll(d,this.length-8);const I=f+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,T=this[++d]+this[++d]*2**8+this[++d]*2**16+_*2**24;return BigInt(I)+(BigInt(T)<<BigInt(32))}),a.prototype.readBigUInt64BE=wi(function(d){d=d>>>0,Zn(d,"offset");const f=this[d],_=this[d+7];(f===void 0||_===void 0)&&ll(d,this.length-8);const I=f*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],T=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+_;return(BigInt(I)<<BigInt(32))+BigInt(T)}),a.prototype.readIntLE=function(d,f,_){d=d>>>0,f=f>>>0,_||te(d,f,this.length);let I=this[d],T=1,D=0;for(;++D<f&&(T*=256);)I+=this[d+D]*T;return T*=128,I>=T&&(I-=Math.pow(2,8*f)),I},a.prototype.readIntBE=function(d,f,_){d=d>>>0,f=f>>>0,_||te(d,f,this.length);let I=f,T=1,D=this[d+--I];for(;I>0&&(T*=256);)D+=this[d+--I]*T;return T*=128,D>=T&&(D-=Math.pow(2,8*f)),D},a.prototype.readInt8=function(d,f){return d=d>>>0,f||te(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},a.prototype.readInt16LE=function(d,f){d=d>>>0,f||te(d,2,this.length);const _=this[d]|this[d+1]<<8;return _&32768?_|4294901760:_},a.prototype.readInt16BE=function(d,f){d=d>>>0,f||te(d,2,this.length);const _=this[d+1]|this[d]<<8;return _&32768?_|4294901760:_},a.prototype.readInt32LE=function(d,f){return d=d>>>0,f||te(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},a.prototype.readInt32BE=function(d,f){return d=d>>>0,f||te(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},a.prototype.readBigInt64LE=wi(function(d){d=d>>>0,Zn(d,"offset");const f=this[d],_=this[d+7];(f===void 0||_===void 0)&&ll(d,this.length-8);const I=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+(_<<24);return(BigInt(I)<<BigInt(32))+BigInt(f+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),a.prototype.readBigInt64BE=wi(function(d){d=d>>>0,Zn(d,"offset");const f=this[d],_=this[d+7];(f===void 0||_===void 0)&&ll(d,this.length-8);const I=(f<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(I)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+_)}),a.prototype.readFloatLE=function(d,f){return d=d>>>0,f||te(d,4,this.length),n.read(this,d,!0,23,4)},a.prototype.readFloatBE=function(d,f){return d=d>>>0,f||te(d,4,this.length),n.read(this,d,!1,23,4)},a.prototype.readDoubleLE=function(d,f){return d=d>>>0,f||te(d,8,this.length),n.read(this,d,!0,52,8)},a.prototype.readDoubleBE=function(d,f){return d=d>>>0,f||te(d,8,this.length),n.read(this,d,!1,52,8)};function ue(v,d,f,_,I,T){if(!a.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>I||d<T)throw new RangeError('"value" argument is out of bounds');if(f+_>v.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(d,f,_,I){if(d=+d,f=f>>>0,_=_>>>0,!I){const Re=Math.pow(2,8*_)-1;ue(this,d,f,_,Re,0)}let T=1,D=0;for(this[f]=d&255;++D<_&&(T*=256);)this[f+D]=d/T&255;return f+_},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(d,f,_,I){if(d=+d,f=f>>>0,_=_>>>0,!I){const Re=Math.pow(2,8*_)-1;ue(this,d,f,_,Re,0)}let T=_-1,D=1;for(this[f+T]=d&255;--T>=0&&(D*=256);)this[f+T]=d/D&255;return f+_},a.prototype.writeUint8=a.prototype.writeUInt8=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,1,255,0),this[f]=d&255,f+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,2,65535,0),this[f]=d&255,this[f+1]=d>>>8,f+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,2,65535,0),this[f]=d>>>8,this[f+1]=d&255,f+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,4,4294967295,0),this[f+3]=d>>>24,this[f+2]=d>>>16,this[f+1]=d>>>8,this[f]=d&255,f+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,4,4294967295,0),this[f]=d>>>24,this[f+1]=d>>>16,this[f+2]=d>>>8,this[f+3]=d&255,f+4};function ze(v,d,f,_,I){gi(d,_,I,v,f,7);let T=Number(d&BigInt(4294967295));v[f++]=T,T=T>>8,v[f++]=T,T=T>>8,v[f++]=T,T=T>>8,v[f++]=T;let D=Number(d>>BigInt(32)&BigInt(4294967295));return v[f++]=D,D=D>>8,v[f++]=D,D=D>>8,v[f++]=D,D=D>>8,v[f++]=D,f}function De(v,d,f,_,I){gi(d,_,I,v,f,7);let T=Number(d&BigInt(4294967295));v[f+7]=T,T=T>>8,v[f+6]=T,T=T>>8,v[f+5]=T,T=T>>8,v[f+4]=T;let D=Number(d>>BigInt(32)&BigInt(4294967295));return v[f+3]=D,D=D>>8,v[f+2]=D,D=D>>8,v[f+1]=D,D=D>>8,v[f]=D,f+8}a.prototype.writeBigUInt64LE=wi(function(d,f=0){return ze(this,d,f,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=wi(function(d,f=0){return De(this,d,f,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(d,f,_,I){if(d=+d,f=f>>>0,!I){const tt=Math.pow(2,8*_-1);ue(this,d,f,_,tt-1,-tt)}let T=0,D=1,Re=0;for(this[f]=d&255;++T<_&&(D*=256);)d<0&&Re===0&&this[f+T-1]!==0&&(Re=1),this[f+T]=(d/D>>0)-Re&255;return f+_},a.prototype.writeIntBE=function(d,f,_,I){if(d=+d,f=f>>>0,!I){const tt=Math.pow(2,8*_-1);ue(this,d,f,_,tt-1,-tt)}let T=_-1,D=1,Re=0;for(this[f+T]=d&255;--T>=0&&(D*=256);)d<0&&Re===0&&this[f+T+1]!==0&&(Re=1),this[f+T]=(d/D>>0)-Re&255;return f+_},a.prototype.writeInt8=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,1,127,-128),d<0&&(d=255+d+1),this[f]=d&255,f+1},a.prototype.writeInt16LE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,2,32767,-32768),this[f]=d&255,this[f+1]=d>>>8,f+2},a.prototype.writeInt16BE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,2,32767,-32768),this[f]=d>>>8,this[f+1]=d&255,f+2},a.prototype.writeInt32LE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,4,2147483647,-2147483648),this[f]=d&255,this[f+1]=d>>>8,this[f+2]=d>>>16,this[f+3]=d>>>24,f+4},a.prototype.writeInt32BE=function(d,f,_){return d=+d,f=f>>>0,_||ue(this,d,f,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[f]=d>>>24,this[f+1]=d>>>16,this[f+2]=d>>>8,this[f+3]=d&255,f+4},a.prototype.writeBigInt64LE=wi(function(d,f=0){return ze(this,d,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=wi(function(d,f=0){return De(this,d,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function pt(v,d,f,_,I,T){if(f+_>v.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("Index out of range")}function Rt(v,d,f,_,I){return d=+d,f=f>>>0,I||pt(v,d,f,4),n.write(v,d,f,_,23,4),f+4}a.prototype.writeFloatLE=function(d,f,_){return Rt(this,d,f,!0,_)},a.prototype.writeFloatBE=function(d,f,_){return Rt(this,d,f,!1,_)};function Bt(v,d,f,_,I){return d=+d,f=f>>>0,I||pt(v,d,f,8),n.write(v,d,f,_,52,8),f+8}a.prototype.writeDoubleLE=function(d,f,_){return Bt(this,d,f,!0,_)},a.prototype.writeDoubleBE=function(d,f,_){return Bt(this,d,f,!1,_)},a.prototype.copy=function(d,f,_,I){if(!a.isBuffer(d))throw new TypeError("argument should be a Buffer");if(_||(_=0),!I&&I!==0&&(I=this.length),f>=d.length&&(f=d.length),f||(f=0),I>0&&I<_&&(I=_),I===_||d.length===0||this.length===0)return 0;if(f<0)throw new RangeError("targetStart out of bounds");if(_<0||_>=this.length)throw new RangeError("Index out of range");if(I<0)throw new RangeError("sourceEnd out of bounds");I>this.length&&(I=this.length),d.length-f<I-_&&(I=d.length-f+_);const T=I-_;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(f,_,I):Uint8Array.prototype.set.call(d,this.subarray(_,I),f),T},a.prototype.fill=function(d,f,_,I){if(typeof d=="string"){if(typeof f=="string"?(I=f,f=0,_=this.length):typeof _=="string"&&(I=_,_=this.length),I!==void 0&&typeof I!="string")throw new TypeError("encoding must be a string");if(typeof I=="string"&&!a.isEncoding(I))throw new TypeError("Unknown encoding: "+I);if(d.length===1){const D=d.charCodeAt(0);(I==="utf8"&&D<128||I==="latin1")&&(d=D)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(f<0||this.length<f||this.length<_)throw new RangeError("Out of range index");if(_<=f)return this;f=f>>>0,_=_===void 0?this.length:_>>>0,d||(d=0);let T;if(typeof d=="number")for(T=f;T<_;++T)this[T]=d;else{const D=a.isBuffer(d)?d:a.from(d,I),Re=D.length;if(Re===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(T=0;T<_-f;++T)this[T+f]=D[T%Re]}return this};const $n={};function Vn(v,d,f){$n[v]=class extends f{constructor(){super(),Object.defineProperty(this,"message",{value:d.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(I){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:I,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}Vn("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Vn("ERR_INVALID_ARG_TYPE",function(v,d){return`The "${v}" argument must be of type number. Received type ${typeof d}`},TypeError),Vn("ERR_OUT_OF_RANGE",function(v,d,f){let _=`The value of "${v}" is out of range.`,I=f;return Number.isInteger(f)&&Math.abs(f)>2**32?I=At(String(f)):typeof f=="bigint"&&(I=String(f),(f>BigInt(2)**BigInt(32)||f<-(BigInt(2)**BigInt(32)))&&(I=At(I)),I+="n"),_+=` It must be ${d}. Received ${I}`,_},RangeError);function At(v){let d="",f=v.length;const _=v[0]==="-"?1:0;for(;f>=_+4;f-=3)d=`_${v.slice(f-3,f)}${d}`;return`${v.slice(0,f)}${d}`}function vr(v,d,f){Zn(d,"offset"),(v[d]===void 0||v[d+f]===void 0)&&ll(d,v.length-(f+1))}function gi(v,d,f,_,I,T){if(v>f||v<d){const D=typeof d=="bigint"?"n":"";let Re;throw T>3?d===0||d===BigInt(0)?Re=`>= 0${D} and < 2${D} ** ${(T+1)*8}${D}`:Re=`>= -(2${D} ** ${(T+1)*8-1}${D}) and < 2 ** ${(T+1)*8-1}${D}`:Re=`>= ${d}${D} and <= ${f}${D}`,new $n.ERR_OUT_OF_RANGE("value",Re,v)}vr(_,I,T)}function Zn(v,d){if(typeof v!="number")throw new $n.ERR_INVALID_ARG_TYPE(d,"number",v)}function ll(v,d,f){throw Math.floor(v)!==v?(Zn(v,f),new $n.ERR_OUT_OF_RANGE(f||"offset","an integer",v)):d<0?new $n.ERR_BUFFER_OUT_OF_BOUNDS:new $n.ERR_OUT_OF_RANGE(f||"offset",`>= ${f?1:0} and <= ${d}`,v)}const C4=/[^+/0-9A-Za-z-_]/g;function E4(v){if(v=v.split("=")[0],v=v.trim().replace(C4,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function Ih(v,d){d=d||1/0;let f;const _=v.length;let I=null;const T=[];for(let D=0;D<_;++D){if(f=v.charCodeAt(D),f>55295&&f<57344){if(!I){if(f>56319){(d-=3)>-1&&T.push(239,191,189);continue}else if(D+1===_){(d-=3)>-1&&T.push(239,191,189);continue}I=f;continue}if(f<56320){(d-=3)>-1&&T.push(239,191,189),I=f;continue}f=(I-55296<<10|f-56320)+65536}else I&&(d-=3)>-1&&T.push(239,191,189);if(I=null,f<128){if((d-=1)<0)break;T.push(f)}else if(f<2048){if((d-=2)<0)break;T.push(f>>6|192,f&63|128)}else if(f<65536){if((d-=3)<0)break;T.push(f>>12|224,f>>6&63|128,f&63|128)}else if(f<1114112){if((d-=4)<0)break;T.push(f>>18|240,f>>12&63|128,f>>6&63|128,f&63|128)}else throw new Error("Invalid code point")}return T}function _4(v){const d=[];for(let f=0;f<v.length;++f)d.push(v.charCodeAt(f)&255);return d}function S4(v,d){let f,_,I;const T=[];for(let D=0;D<v.length&&!((d-=2)<0);++D)f=v.charCodeAt(D),_=f>>8,I=f%256,T.push(I),T.push(_);return T}function Qm(v){return e.toByteArray(E4(v))}function Su(v,d,f,_){let I;for(I=0;I<_&&!(I+f>=d.length||I>=v.length);++I)d[I+f]=v[I];return I}function yr(v,d){return v instanceof d||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===d.name}function kh(v){return v!==v}const R4=function(){const v="0123456789abcdef",d=new Array(256);for(let f=0;f<16;++f){const _=f*16;for(let I=0;I<16;++I)d[_+I]=v[f]+v[I]}return d}();function wi(v){return typeof BigInt>"u"?A4:v}function A4(){throw new Error("BigInt not supported")}})(py);var T2;typeof window<"u"&&(window.Buffer||(window.Buffer=py.Buffer),window.global||(window.global=window),window.process||(window.process={}),(T2=window.process)!=null&&T2.env||(window.process={env:{}}));const $x="2.5.0",Tx=t=>t,am=t=>t,Px=()=>`viem@${$x}`;let se=class Cp extends Error{constructor(e,n={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Px()});const r=n.cause instanceof Cp?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof Cp&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return gy(this,e)}};function gy(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?gy(t.cause,e):e?null:t}class Ox extends se{constructor({max:e,min:n,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Nx extends se{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class Mx extends se{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}class wy extends se{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class vy extends se{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Ja(t,{dir:e,size:n=32}={}){return typeof t=="string"?qi(t,{dir:e,size:n}):Lx(t,{dir:e,size:n})}function qi(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new vy({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function Lx(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new vy({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let o=0;o<n;o++){const i=e==="right";r[i?o:n-o-1]=t[i?o:t.length-o-1]}return r}function Xa(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function Nt(t){return Xa(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function hu(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let o=0;o<n.length-1&&n[e==="left"?o:n.length-o-1].toString()==="0";o++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}const jx=new TextEncoder;function lm(t,e={}){return typeof t=="number"||typeof t=="bigint"?Ux(t,e):typeof t=="boolean"?Dx(t,e):Xa(t)?Zf(t,e):Uo(t,e)}function Dx(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(pr(n,{size:e.size}),Ja(n,{size:e.size})):n}const Hr={zero:48,nine:57,A:65,F:70,a:97,f:102};function gw(t){if(t>=Hr.zero&&t<=Hr.nine)return t-Hr.zero;if(t>=Hr.A&&t<=Hr.F)return t-(Hr.A-10);if(t>=Hr.a&&t<=Hr.f)return t-(Hr.a-10)}function Zf(t,e={}){let n=t;e.size&&(pr(n,{size:e.size}),n=Ja(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,i=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const l=gw(r.charCodeAt(a++)),c=gw(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new se(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);i[s]=l*16+c}return i}function Ux(t,e){const n=at(t,e);return Zf(n)}function Uo(t,e={}){const n=jx.encode(t);return typeof e.size=="number"?(pr(n,{size:e.size}),Ja(n,{dir:"right",size:e.size})):n}function pr(t,{size:e}){if(Nt(t)>e)throw new Mx({givenSize:Nt(t),maxSize:e})}function yy(t,e={}){const{signed:n}=e;e.size&&pr(t,{size:e.size});const r=BigInt(t);if(!n)return r;const o=(t.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function Bx(t,e={}){return Number(yy(t,e))}function zx(t,e={}){let n=Zf(t);return e.size&&(pr(n,{size:e.size}),n=hu(n,{dir:"right"})),new TextDecoder().decode(n)}const Wx=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Gf(t,e={}){return typeof t=="number"||typeof t=="bigint"?at(t,e):typeof t=="string"?cm(t,e):typeof t=="boolean"?by(t,e):ar(t,e)}function by(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(pr(n,{size:e.size}),Ja(n,{size:e.size})):n}function ar(t,e={}){let n="";for(let o=0;o<t.length;o++)n+=Wx[t[o]];const r=`0x${n}`;return typeof e.size=="number"?(pr(r,{size:e.size}),Ja(r,{dir:"right",size:e.size})):r}function at(t,e={}){const{signed:n,size:r}=e,o=BigInt(t);let i;r?n?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&n?-i-1n:0;if(i&&o>i||o<s){const l=typeof t=="bigint"?"n":"";throw new Ox({max:i?`${i}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?Ja(a,{size:r}):a}const Fx=new TextEncoder;function cm(t,e={}){const n=Fx.encode(t);return ar(n,e)}function Ea(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new e7(t.type);return`${t.name}(${um(t.inputs,{includeName:e})})`}function um(t,{includeName:e=!1}={}){return t?t.map(n=>Hx(n,{includeName:e})).join(e?", ":","):""}function Hx(t,{includeName:e}){return t.type.startsWith("tuple")?`(${um(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class Vx extends se{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${um(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class qf extends se{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class Zx extends se{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Gx extends se{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${Nt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class qx extends se{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class xy extends se{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class Hd extends se{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Kx extends se{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Yx extends se{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${Ea(e.abiItem)}\`, and`,`\`${n.type}\` in \`${Ea(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class Qx extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Jx extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class Xx extends se{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class e7 extends se{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function qo(t){return typeof t[0]=="string"?Cy(t):t7(t)}function t7(t){let e=0;for(const o of t)e+=o.length;const n=new Uint8Array(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return n}function Cy(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}class Vd extends se{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const n7=/^0x[a-fA-F0-9]{40}$/;function Ko(t){return n7.test(t)}function Zd(t,e,n,{strict:r}={}){return Xa(t,{strict:!1})?r7(t,e,n,{strict:r}):Sy(t,e,n,{strict:r})}function Ey(t,e){if(typeof e=="number"&&e>0&&e>Nt(t)-1)throw new wy({offset:e,position:"start",size:Nt(t)})}function _y(t,e,n){if(typeof e=="number"&&typeof n=="number"&&Nt(t)!==n-e)throw new wy({offset:n,position:"end",size:Nt(t)})}function Sy(t,e,n,{strict:r}={}){Ey(t,e);const o=t.slice(e,n);return r&&_y(o,e,n),o}function r7(t,e,n,{strict:r}={}){Ey(t,e);const o=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&_y(o,e,n),o}function i7(t,e){if(t.length!==e.length)throw new qx({expectedLength:t.length,givenLength:e.length});const n=o7({params:t,values:e}),r=fm(n);return r.length===0?"0x":r}function o7({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(dm({param:t[r],value:e[r]}));return n}function dm({param:t,value:e}){const n=hm(t.type);if(n){const[r,o]=n;return a7(e,{length:r,param:{...t,type:o}})}if(t.type==="tuple")return f7(e,{param:t});if(t.type==="address")return s7(e);if(t.type==="bool")return c7(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return u7(e,{signed:r})}if(t.type.startsWith("bytes"))return l7(e,{param:t});if(t.type==="string")return d7(e);throw new Qx(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function fm(t){let e=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?e+=32:e+=Nt(a)}const n=[],r=[];let o=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?(n.push(at(e+o,{size:32})),r.push(a),o+=Nt(a)):n.push(a)}return qo([...n,...r])}function s7(t){if(!Ko(t))throw new Vd({address:t});return{dynamic:!1,encoded:qi(t.toLowerCase())}}function a7(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new Xx(t);if(!r&&t.length!==e)throw new Zx({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let o=!1;const i=[];for(let s=0;s<t.length;s++){const a=dm({param:n,value:t[s]});a.dynamic&&(o=!0),i.push(a)}if(r||o){const s=fm(i);if(r){const a=at(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?qo([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:qo(i.map(({encoded:s})=>s))}}function l7(t,{param:e}){const[,n]=e.type.split("bytes"),r=Nt(t);if(!n){let o=t;return r%32!==0&&(o=qi(o,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:qo([qi(at(r,{size:32})),o])}}if(r!==parseInt(n))throw new Gx({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:qi(t,{dir:"right"})}}function c7(t){return{dynamic:!1,encoded:qi(by(t))}}function u7(t,{signed:e}){return{dynamic:!1,encoded:at(t,{size:32,signed:e})}}function d7(t){const e=cm(t),n=Math.ceil(Nt(e)/32),r=[];for(let o=0;o<n;o++)r.push(qi(Zd(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:qo([qi(at(Nt(e),{size:32})),...r])}}function f7(t,{param:e}){let n=!1;const r=[];for(let o=0;o<e.components.length;o++){const i=e.components[o],s=Array.isArray(t)?o:i.name,a=dm({param:i,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?fm(r):qo(r.map(({encoded:o})=>o))}}function hm(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}function el(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}class h7 extends se{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class Ep extends se{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Ry extends se{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const p7={gwei:9,wei:18},m7={ether:-9,wei:9},g7={ether:-18,gwei:-9};function Kf(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[o,i]=[n.slice(0,n.length-e),n.slice(n.length-e)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function Bo(t,e="wei"){return Kf(t,m7[e])}class Gs extends se{constructor({cause:e,message:n}={}){var o;const r=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Gs,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Gs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Gd extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Bo(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Gd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class _p extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Bo(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(_p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Sp extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Sp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Rp extends se{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Rp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Ap extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Ap,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Ip extends se{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Ip,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class kp extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(kp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class $p extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty($p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Tp extends se{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Tp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class qd extends se{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Bo(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Bo(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(qd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Ay extends se{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function w7(t,e="wei"){return Kf(t,p7[e])}function Iy(t){const e=Object.entries(t).map(([r,o])=>o===void 0||o===!1?null:[r,o]).filter(Boolean),n=e.reduce((r,[o])=>Math.max(r,o.length),0);return e.map(([r,o])=>`  ${`${r}:`.padEnd(n+1)}  ${o}`).join(`
`)}class v7 extends se{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}const zo=(t,e,n)=>JSON.stringify(t,(r,o)=>{const i=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(r,i):i},n);class Ul extends se{constructor({body:e,details:n,headers:r,status:o,url:i}){super("HTTP request failed.",{details:n,metaMessages:[o&&`Status: ${o}`,`URL: ${am(i)}`,e&&`Request body: ${zo(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=o,this.url=i}}class ky extends se{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${am(r)}`,`Request body: ${zo(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class ww extends se{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${am(n)}`,`Request body: ${zo(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const y7=-1;class cn extends se{constructor(e,{code:n,docsPath:r,metaMessages:o,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof ky?e.code:n??y7}}class tl extends cn{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class uc extends cn{constructor(e){super(e,{code:uc.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(uc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class dc extends cn{constructor(e){super(e,{code:dc.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(dc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class fc extends cn{constructor(e){super(e,{code:fc.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(fc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class hc extends cn{constructor(e){super(e,{code:hc.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(hc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Yo extends cn{constructor(e){super(e,{code:Yo.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Yo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class pc extends cn{constructor(e){super(e,{code:pc.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(pc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class mc extends cn{constructor(e){super(e,{code:mc.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(mc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Ki extends cn{constructor(e){super(e,{code:Ki.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Ki,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class gc extends cn{constructor(e){super(e,{code:gc.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(gc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class wc extends cn{constructor(e){super(e,{code:wc.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(wc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class _a extends cn{constructor(e){super(e,{code:_a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(_a,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class vc extends cn{constructor(e){super(e,{code:vc.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(vc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class dt extends tl{constructor(e){super(e,{code:dt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(dt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class yc extends tl{constructor(e){super(e,{code:yc.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(yc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class bc extends tl{constructor(e){super(e,{code:bc.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(bc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class xc extends tl{constructor(e){super(e,{code:xc.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(xc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Cc extends tl{constructor(e){super(e,{code:Cc.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Cc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class yn extends tl{constructor(e){super(e,{code:yn.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class b7 extends cn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function x7(t,e){const n=(t.details||"").toLowerCase(),r=t instanceof se?t.walk(o=>o.code===Gs.code):t;return r instanceof se?new Gs({cause:t,message:r.details}):Gs.nodeMessage.test(n)?new Gs({cause:t,message:t.details}):Gd.nodeMessage.test(n)?new Gd({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):_p.nodeMessage.test(n)?new _p({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Sp.nodeMessage.test(n)?new Sp({cause:t,nonce:e==null?void 0:e.nonce}):Rp.nodeMessage.test(n)?new Rp({cause:t,nonce:e==null?void 0:e.nonce}):Ap.nodeMessage.test(n)?new Ap({cause:t,nonce:e==null?void 0:e.nonce}):Ip.nodeMessage.test(n)?new Ip({cause:t}):kp.nodeMessage.test(n)?new kp({cause:t,gas:e==null?void 0:e.gas}):$p.nodeMessage.test(n)?new $p({cause:t,gas:e==null?void 0:e.gas}):Tp.nodeMessage.test(n)?new Tp({cause:t}):qd.nodeMessage.test(n)?new qd({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new Ay({cause:t})}function C7(t,{format:e}){if(!e)return{};const n={};function r(i){const s=Object.keys(i);for(const a of s)a in t&&(n[a]=t[a]),i[a]&&typeof i[a]=="object"&&!Array.isArray(i[a])&&r(i[a])}const o=e(t||{});return r(o),n}const E7={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function _7(t){return{...t,gas:typeof t.gas<"u"?at(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?at(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?at(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?at(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?at(t.nonce):void 0,type:typeof t.type<"u"?E7[t.type]:void 0,value:typeof t.value<"u"?at(t.value):void 0}}function pu(t,e,n){return r=>{var o;return((o=t[e.name||n])==null?void 0:o.call(t,r))??e(t,r)}}function S7(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:o,to:i}=t,s=e?el(e):void 0;if(s&&!Ko(s.address))throw new Vd({address:s.address});if(i&&!Ko(i))throw new Vd({address:i});if(typeof n<"u"&&(typeof r<"u"||typeof o<"u"))throw new v7;if(r&&r>2n**256n-1n)throw new Gd({maxFeePerGas:r});if(o&&r&&o>r)throw new qd({maxFeePerGas:r,maxPriorityFeePerGas:o})}const Pp=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],$y=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],R7=[...$y,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],A7=[...$y,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],vw=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];function yw(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Ty(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function bw(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function I7(t,e){Ty(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Hu=BigInt(2**32-1),xw=BigInt(32);function k7(t,e=!1){return e?{h:Number(t&Hu),l:Number(t>>xw&Hu)}:{h:Number(t>>xw&Hu)|0,l:Number(t&Hu)|0}}function $7(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:i,l:s}=k7(t[o],e);[n[o],r[o]]=[i,s]}return[n,r]}const T7=(t,e,n)=>t<<n|e>>>32-n,P7=(t,e,n)=>e<<n|t>>>32-n,O7=(t,e,n)=>e<<n-32|t>>>64-n,N7=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const M7=t=>t instanceof Uint8Array,L7=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),j7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!j7)throw new Error("Non little-endian hardware is not supported");function D7(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Py(t){if(typeof t=="string"&&(t=D7(t)),!M7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class U7{clone(){return this._cloneInto()}}function B7(t){const e=r=>t().update(Py(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[Oy,Ny,My]=[[],[],[]],z7=BigInt(0),wl=BigInt(1),W7=BigInt(2),F7=BigInt(7),H7=BigInt(256),V7=BigInt(113);for(let t=0,e=wl,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Oy.push(2*(5*r+n)),Ny.push((t+1)*(t+2)/2%64);let o=z7;for(let i=0;i<7;i++)e=(e<<wl^(e>>F7)*V7)%H7,e&W7&&(o^=wl<<(wl<<BigInt(i))-wl);My.push(o)}const[Z7,G7]=$7(My,!0),Cw=(t,e,n)=>n>32?O7(t,e,n):T7(t,e,n),Ew=(t,e,n)=>n>32?N7(t,e,n):P7(t,e,n);function q7(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],h=Cw(c,u,1)^n[a],p=Ew(c,u,1)^n[a+1];for(let m=0;m<50;m+=10)t[s+m]^=h,t[s+m+1]^=p}let o=t[2],i=t[3];for(let s=0;s<24;s++){const a=Ny[s],l=Cw(o,i,a),c=Ew(o,i,a),u=Oy[s];o=t[u],i=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=Z7[r],t[1]^=G7[r]}n.fill(0)}class pm extends U7{constructor(e,n,r,o=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,yw(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=L7(this.state)}keccak(){q7(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){bw(this);const{blockLen:n,state:r}=this;e=Py(e);const o=e.length;for(let i=0;i<o;){const s=Math.min(n-this.pos,o-i);for(let a=0;a<s;a++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,n&128&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){bw(this,!1),Ty(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,i=e.length;o<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-o);e.set(n.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return yw(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(I7(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:i,enableXOF:s}=this;return e||(e=new pm(n,r,o,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const K7=(t,e,n)=>B7(()=>new pm(e,t,n)),Y7=K7(1,136,256/8);function Ec(t,e){const n=e||"hex",r=Y7(Xa(t,{strict:!1})?lm(t):t);return n==="bytes"?r:Gf(r)}function Ly(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Ec(Uo(n),"bytes"),o=(e?n.substring(`${e}0x`.length):n).split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&o[i]&&(o[i]=o[i].toUpperCase()),(r[i>>1]&15)>=8&&o[i+1]&&(o[i+1]=o[i+1].toUpperCase());return`0x${o.join("")}`}function er(t,e){if(!Ko(t))throw new Vd({address:t});return Ly(t,e)}class _w extends se{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class Q7 extends se{constructor({length:e,position:n}){super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class J7 extends se{constructor({count:e,limit:n}){super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const X7={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new J7({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new Q7({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new _w({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new _w({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const n=e??this.position;return this.assertPosition(n+t-1),this.bytes.subarray(n,n+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const n=this.inspectBytes(t);return this.position+=e??t,n},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===1/0)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function e9(t,{recursiveReadLimit:e=8192}={}){const n=Object.create(X7);return n.bytes=t,n.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=e,n}function t9(t,e={}){typeof e.size<"u"&&pr(t,{size:e.size});const n=ar(t,e);return yy(n,e)}function n9(t,e={}){let n=t;if(typeof e.size<"u"&&(pr(n,{size:e.size}),n=hu(n)),n.length>1||n[0]>1)throw new Nx(n);return!!n[0]}function ti(t,e={}){typeof e.size<"u"&&pr(t,{size:e.size});const n=ar(t,e);return Bx(n,e)}function r9(t,e={}){let n=t;return typeof e.size<"u"&&(pr(n,{size:e.size}),n=hu(n,{dir:"right"})),new TextDecoder().decode(n)}function jy(t,e){const n=typeof e=="string"?Zf(e):e,r=e9(n);if(Nt(n)===0&&t.length>0)throw new qf;if(Nt(e)&&Nt(e)<32)throw new Vx({data:typeof e=="string"?e:ar(e),params:t,size:Nt(e)});let o=0;const i=[];for(let s=0;s<t.length;++s){const a=t[s];r.setPosition(o);const[l,c]=ta(r,a,{staticPosition:0});o+=c,i.push(l)}return i}function ta(t,e,{staticPosition:n}){const r=hm(e.type);if(r){const[o,i]=r;return o9(t,{...e,type:i},{length:o,staticPosition:n})}if(e.type==="tuple")return c9(t,e,{staticPosition:n});if(e.type==="address")return i9(t);if(e.type==="bool")return s9(t);if(e.type.startsWith("bytes"))return a9(t,e,{staticPosition:n});if(e.type.startsWith("uint")||e.type.startsWith("int"))return l9(t,e);if(e.type==="string")return u9(t,{staticPosition:n});throw new Jx(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const Sw=32,Op=32;function i9(t){const e=t.readBytes(32);return[Ly(ar(Sy(e,-20))),32]}function o9(t,e,{length:n,staticPosition:r}){if(!n){const s=ti(t.readBytes(Op)),a=r+s,l=a+Sw;t.setPosition(a);const c=ti(t.readBytes(Sw)),u=_c(e);let h=0;const p=[];for(let m=0;m<c;++m){t.setPosition(l+(u?m*32:h));const[x,C]=ta(t,e,{staticPosition:l});h+=C,p.push(x)}return t.setPosition(r+32),[p,32]}if(_c(e)){const s=ti(t.readBytes(Op)),a=r+s,l=[];for(let c=0;c<n;++c){t.setPosition(a+c*32);const[u]=ta(t,e,{staticPosition:a});l.push(u)}return t.setPosition(r+32),[l,32]}let o=0;const i=[];for(let s=0;s<n;++s){const[a,l]=ta(t,e,{staticPosition:r+o});o+=l,i.push(a)}return[i,o]}function s9(t){return[n9(t.readBytes(32),{size:32}),32]}function a9(t,e,{staticPosition:n}){const[r,o]=e.type.split("bytes");if(!o){const s=ti(t.readBytes(32));t.setPosition(n+s);const a=ti(t.readBytes(32));if(a===0)return t.setPosition(n+32),["0x",32];const l=t.readBytes(a);return t.setPosition(n+32),[ar(l),32]}return[ar(t.readBytes(parseInt(o),32)),32]}function l9(t,e){const n=e.type.startsWith("int"),r=parseInt(e.type.split("int")[1]||"256"),o=t.readBytes(32);return[r>48?t9(o,{signed:n}):ti(o,{signed:n}),32]}function c9(t,e,{staticPosition:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),o=r?[]:{};let i=0;if(_c(e)){const s=ti(t.readBytes(Op)),a=n+s;for(let l=0;l<e.components.length;++l){const c=e.components[l];t.setPosition(a+i);const[u,h]=ta(t,c,{staticPosition:a});i+=h,o[r?l:c==null?void 0:c.name]=u}return t.setPosition(n+32),[o,32]}for(let s=0;s<e.components.length;++s){const a=e.components[s],[l,c]=ta(t,a,{staticPosition:n});o[r?s:a==null?void 0:a.name]=l,i+=c}return[o,i]}function u9(t,{staticPosition:e}){const n=ti(t.readBytes(32)),r=e+n;t.setPosition(r);const o=ti(t.readBytes(32));if(o===0)return t.setPosition(e+32),["",32];const i=t.readBytes(o,32),s=r9(hu(i));return t.setPosition(e+32),[s,32]}function _c(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(_c);const n=hm(t.type);return!!(n&&_c({...t,type:n[1]}))}function d9(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const Rw=/^tuple(?<array>(\[(\d*)\])*)$/;function Np(t){let e=t.type;if(Rw.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let o=0;o<n;o++){const i=t.components[o];e+=Np(i),o<n-1&&(e+=", ")}const r=d9(Rw,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,Np({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function vl(t){let e="";const n=t.length;for(let r=0;r<n;r++){const o=t[r];e+=Np(o),r!==n-1&&(e+=", ")}return e}function f9(t){return t.type==="function"?`function ${t.name}(${vl(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${vl(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${vl(t.inputs)})`:t.type==="error"?`error ${t.name}(${vl(t.inputs)})`:t.type==="constructor"?`constructor(${vl(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}const h9=t=>Ec(lm(t));function p9(t){return h9(t)}function m9(t){let e=!0,n="",r=0,o="",i=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(o))o="";else if(o+=a,a===")"){i=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}o+=a,n+=a}}if(!i)throw new se("Unable to normalize signature.");return o}const g9=t=>{const e=typeof t=="string"?t:f9(t);return m9(e)};function Dy(t){return p9(g9(t))}const w9=Dy,mm=t=>Zd(Dy(t),0,4);function gm(t){const{abi:e,args:n=[],name:r}=t,o=Xa(r,{strict:!1}),i=e.filter(a=>o?a.type==="function"?mm(a)===r:a.type==="event"?w9(a)===r:!1:"name"in a&&a.name===r);if(i.length===0)return;if(i.length===1)return i[0];let s;for(const a of i){if(!("inputs"in a))continue;if(!n||n.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==n.length)continue;if(n.every((c,u)=>{const h="inputs"in a&&a.inputs[u];return h?Mp(c,h):!1})){if(s&&"inputs"in s&&s.inputs){const c=Uy(a.inputs,s.inputs,n);if(c)throw new Yx({abiItem:a,type:c[0]},{abiItem:s,type:c[1]})}s=a}}return s||i[0]}function Mp(t,e){const n=typeof t,r=e.type;switch(r){case"address":return Ko(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((o,i)=>Mp(Object.values(t)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(o=>Mp(o,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Uy(t,e,n){for(const r in t){const o=t[r],i=e[r];if(o.type==="tuple"&&i.type==="tuple"&&"components"in o&&"components"in i)return Uy(o.components,i.components,n[r]);const s=[o.type,i.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes")?Ko(n[r]):!1)return s}}const o0="/docs/contract/decodeFunctionResult";function Yf(t){const{abi:e,args:n,functionName:r,data:o}=t;let i=e[0];if(r){const a=gm({abi:e,args:n,name:r});if(!a)throw new Hd(r,{docsPath:o0});i=a}if(i.type!=="function")throw new Hd(void 0,{docsPath:o0});if(!i.outputs)throw new Kx(i.name,{docsPath:o0});const s=jy(i.outputs,o);if(s&&s.length>1)return s;if(s&&s.length===1)return s[0]}const Aw="/docs/contract/encodeFunctionData";function Qf(t){const{abi:e,args:n,functionName:r}=t;let o=e[0];if(r){const l=gm({abi:e,args:n,name:r});if(!l)throw new Hd(r,{docsPath:Aw});o=l}if(o.type!=="function")throw new Hd(void 0,{docsPath:Aw});const i=Ea(o),s=mm(i),a="inputs"in o&&o.inputs?i7(o.inputs,n??[]):void 0;return Cy([s,a??"0x"])}function Jf({blockNumber:t,chain:e,contract:n}){var o;const r=(o=e==null?void 0:e.contracts)==null?void 0:o[n];if(!r)throw new Ep({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Ep({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}const By={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},v9={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},y9={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function b9(t){const{abi:e,data:n}=t,r=Zd(n,0,4);if(r==="0x")throw new qf;const i=[...e||[],v9,y9].find(s=>s.type==="error"&&r===mm(Ea(s)));if(!i)throw new xy(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?jy(i.inputs,Zd(n,4)):void 0,errorName:i.name}}function zy({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((o,i)=>`${r&&o.name?`${o.name}: `:""}${typeof e[i]=="object"?zo(e[i]):e[i]}`).join(", ")})`}class x9 extends se{constructor(e,{account:n,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:h,value:p}){var C;const m=n?el(n):void 0,x=Iy({from:m==null?void 0:m.address,to:h,value:typeof p<"u"&&`${w7(p)} ${((C=o==null?void 0:o.nativeCurrency)==null?void 0:C.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${Bo(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Bo(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Bo(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class wm extends se{constructor(e,{abi:n,args:r,contractAddress:o,docsPath:i,functionName:s,sender:a}){const l=gm({abi:n,args:r,name:s}),c=l?zy({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?Ea(l,{includeName:!0}):void 0,h=Iy({address:o&&Tx(o),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",h].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class Lp extends se{constructor({abi:e,data:n,functionName:r,message:o}){let i,s,a,l;if(n&&n!=="0x")try{s=b9({abi:e,data:n});const{abiItem:u,errorName:h,args:p}=s;if(h==="Error")l=p[0];else if(h==="Panic"){const[m]=p;l=By[m]}else{const m=u?Ea(u,{includeName:!0}):void 0,x=u&&p?zy({abiItem:u,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[m?`Error: ${m}`:"",x&&x!=="()"?`       ${[...Array((h==null?void 0:h.length)??0).keys()].map(()=>" ").join("")}${x}`:""]}}catch(u){i=u}else o&&(l=o);let c;i instanceof xy&&(c=i.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class C9 extends se{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class vm extends se{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function Wy(t,e){var r,o,i,s,a,l;if(!(t instanceof se))return!1;const n=t.walk(c=>c instanceof Lp);return n instanceof Lp?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((o=n.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||((i=n.data)==null?void 0:i.errorName)==="ResolverNotContract"||((s=n.data)==null?void 0:s.errorName)==="ResolverError"||((a=n.data)==null?void 0:a.errorName)==="HttpError"||(l=n.reason)!=null&&l.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===By[50]):!1}function Fy(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Xa(e)?e:null}function E9(t){let e=new Uint8Array(32).fill(0);if(!t)return ar(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const o=Fy(n[r]),i=o?lm(o):Ec(Uo(n[r]),"bytes");e=Ec(qo([e,i]),"bytes")}return ar(e)}function _9(t){return`[${t.slice(2)}]`}function S9(t){const e=new Uint8Array(32).fill(0);return t?Fy(t)||Ec(Uo(t)):ar(e)}function Hy(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(Uo(e).byteLength+2);let r=0;const o=e.split(".");for(let i=0;i<o.length;i++){let s=Uo(o[i]);s.byteLength>255&&(s=Uo(_9(S9(o[i])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}const R9=3;function jp(t,{abi:e,address:n,args:r,docsPath:o,functionName:i,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof vm?t:t instanceof se?t.walk(p=>"data"in p)||t.walk():{},h=t instanceof qf?new C9({functionName:i}):[R9,Yo.code].includes(a)&&(l||c||u)?new Lp({abi:e,data:typeof l=="object"?l.data:l,functionName:i,message:u??c}):t;return new wm(h,{abi:e,args:r,contractAddress:n,docsPath:o,functionName:i,sender:s})}const A9="modulepreload",I9=function(t,e){return new URL(t,e).href},Iw={},Sc=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");o=Promise.all(n.map(s=>{if(s=I9(s,r),s in Iw)return;Iw[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const p=i[h];if(p.href===s&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":A9,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>e()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},k9="0x82ad56cb";function $9(t,{docsPath:e,...n}){const r=(()=>{const o=x7(t,n);return o instanceof Ay?t:o})();return new x9(r,{docsPath:e,...n})}const s0=new Map;function Vy({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:o}){const i=async()=>{const u=l();s();const h=u.map(({args:p})=>p);h.length!==0&&t(h).then(p=>{var m;o&&Array.isArray(p)&&p.sort(o);for(let x=0;x<u.length;x++){const{pendingPromise:C}=u[x];(m=C.resolve)==null||m.call(C,[p[x],p])}}).catch(p=>{var m;for(let x=0;x<u.length;x++){const{pendingPromise:C}=u[x];(m=C.reject)==null||m.call(C,p)}})},s=()=>s0.delete(e),a=()=>l().map(({args:u})=>u),l=()=>s0.get(e)||[],c=u=>s0.set(e,[...l(),u]);return{flush:s,async schedule(u){const h={},p=new Promise((C,b)=>{h.resolve=C,h.reject=b});return(n==null?void 0:n([...a(),u]))&&i(),l().length>0?(c({args:u,pendingPromise:h}),p):(c({args:u,pendingPromise:h}),setTimeout(i,r),p)}}}async function T9(t,e){var g,w,y,S;const{account:n=t.account,batch:r=!!((g=t.batch)!=null&&g.multicall),blockNumber:o,blockTag:i="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:p,to:m,value:x,...C}=e,b=n?el(n):void 0;try{S7(e);const k=(o?at(o):void 0)||i,P=(S=(y=(w=t.chain)==null?void 0:w.formatters)==null?void 0:y.transactionRequest)==null?void 0:S.format,V=(P||_7)({...C7(C,{format:P}),from:b==null?void 0:b.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:p,to:m,value:x});if(r&&P9({request:V}))try{return await O9(t,{...V,blockNumber:o,blockTag:i})}catch(W){if(!(W instanceof Ry)&&!(W instanceof Ep))throw W}const j=await t.request({method:"eth_call",params:k?[V,k]:[V]});return j==="0x"?{data:void 0}:{data:j}}catch(A){const k=N9(A),{offchainLookup:P,offchainLookupSignature:N}=await Sc(()=>import("./ccip-DJT0RhPR.js"),__vite__mapDeps([]),import.meta.url);if((k==null?void 0:k.slice(0,10))===N&&m)return{data:await P(t,{data:k,to:m})};throw $9(A,{...e,account:b,chain:t.chain})}}function P9({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(k9)||!n||Object.values(r).filter(o=>typeof o<"u").length>0)}async function O9(t,e){var C;const{batchSize:n=1024,wait:r=0}=typeof((C=t.batch)==null?void 0:C.multicall)=="object"?t.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new Ry;c=Jf({blockNumber:o,chain:t.chain,contract:"multicall3"})}const h=(o?at(o):void 0)||i,{schedule:p}=Vy({id:`${t.uid}.${h}`,wait:r,shouldSplitBatch(b){return b.reduce((w,{data:y})=>w+(y.length-2),0)>n*2},fn:async b=>{const g=b.map(S=>({allowFailure:!0,callData:S.data,target:S.to})),w=Qf({abi:Pp,args:[g],functionName:"aggregate3"}),y=await t.request({method:"eth_call",params:[{data:w,to:c},h]});return Yf({abi:Pp,args:[g],functionName:"aggregate3",data:y||"0x"})}}),[{returnData:m,success:x}]=await p({data:s,to:l});if(!x)throw new vm({data:m});return m==="0x"?{data:void 0}:{data:m}}function N9(t){if(!(t instanceof se))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function Sa(t,e){const{abi:n,address:r,args:o,functionName:i,...s}=e,a=Qf({abi:n,args:o,functionName:i});try{const{data:l}=await pu(t,T9,"call")({...s,data:a,to:r});return Yf({abi:n,args:o,functionName:i,data:l||"0x"})}catch(l){throw jp(l,{abi:n,address:r,args:o,docsPath:"/docs/contract/readContract",functionName:i})}}class M9 extends se{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class yl extends se{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class ym extends se{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class L9 extends se{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const j9=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,D9=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,U9=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,B9=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function z9(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function kw(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function Zy({uri:t,gatewayUrls:e}){const n=U9.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=kw(e==null?void 0:e.ipfs,"https://ipfs.io"),o=kw(e==null?void 0:e.arweave,"https://arweave.net"),i=t.match(j9),{protocol:s,subpath:a,target:l,subtarget:c=""}=(i==null?void 0:i.groups)||{},u=s==="ipns:/"||a==="ipns/",h=s==="ipfs:/"||a==="ipfs/"||D9.test(t);if(t.startsWith("http")&&!u&&!h){let m=t;return e!=null&&e.arweave&&(m=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:m,isOnChain:!1,isEncoded:!1}}if((u||h)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${o}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(B9,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new ym({uri:t})}function Gy(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new M9({data:t});return t.image||t.image_url||t.image_data}async function W9({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(o=>o.json());return await bm({gatewayUrls:t,uri:Gy(n)})}catch{throw new ym({uri:e})}}async function bm({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=Zy({uri:e,gatewayUrls:t});if(r||await z9(n))return n;throw new ym({uri:e})}function F9(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,o]=e.split("/"),[i,s]=n.split(":"),[a,l]=r.split(":");if(!i||i.toLowerCase()!=="eip155")throw new yl({reason:"Only EIP-155 supported"});if(!s)throw new yl({reason:"Chain ID not found"});if(!l)throw new yl({reason:"Contract address not found"});if(!o)throw new yl({reason:"Token ID not found"});if(!a)throw new yl({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:o}}async function H9(t,{nft:e}){if(e.namespace==="erc721")return Sa(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Sa(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new L9({namespace:e.namespace})}async function V9(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?Z9(t,{gatewayUrls:e,record:n}):bm({uri:n,gatewayUrls:e})}async function Z9(t,{gatewayUrls:e,record:n}){const r=F9(n),o=await H9(t,{nft:r}),{uri:i,isOnChain:s,isEncoded:a}=Zy({uri:o,gatewayUrls:e});if(s&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const c=a?atob(i.replace("data:application/json;base64,","")):i,u=JSON.parse(c);return bm({uri:Gy(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),W9({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,l)})}async function G9(t,{blockNumber:e,blockTag:n,name:r,key:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){let l=a;if(!l){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=Jf({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const c={address:l,abi:R7,functionName:"resolve",args:[Gf(Hy(r)),Qf({abi:vw,functionName:"text",args:[E9(r),o]})],blockNumber:e,blockTag:n},u=pu(t,Sa,"readContract"),h=i?await u({...c,args:[...c.args,i]}):await u(c);if(h[0]==="0x")return null;const p=Yf({abi:vw,functionName:"text",data:h[0]});return p===""?null:p}catch(c){if(s)throw c;if(Wy(c,"resolve"))return null;throw c}}async function q9(t,{blockNumber:e,blockTag:n,assetGatewayUrls:r,name:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){const l=await pu(t,G9,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:o,universalResolverAddress:a,gatewayUrls:i,strict:s});if(!l)return null;try{return await V9(t,{record:l,gatewayUrls:r})}catch{return null}}async function K9(t,{address:e,blockNumber:n,blockTag:r,gatewayUrls:o,strict:i,universalResolverAddress:s}){let a=s;if(!a){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=Jf({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const l=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const c={address:a,abi:A7,functionName:"reverse",args:[Gf(Hy(l))],blockNumber:n,blockTag:r},u=pu(t,Sa,"readContract"),[h,p]=o?await u({...c,args:[...c.args,o]}):await u(c);return e.toLowerCase()!==p.toLowerCase()?null:h}catch(c){if(i)throw c;if(Wy(c,"reverse"))return null;throw c}}async function Y9(t,{address:e,blockNumber:n,blockTag:r="latest"}){const o=n?at(n):void 0,i=await t.request({method:"eth_getBalance",params:[e,o||r]});return BigInt(i)}async function Q9(t){return new Promise(e=>setTimeout(e,t))}const Dp=256;let Vu=Dp,Zu;function J9(t=11){if(!Zu||Vu+t>Dp*2){Zu="",Vu=0;for(let e=0;e<Dp;e++)Zu+=(256+Math.random()*256|0).toString(16).substring(1)}return Zu.substring(Vu,Vu+++t)}function qy(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:o="Base Client",pollingInterval:i=4e3,type:s="base"}=t,a=t.chain,l=t.account?el(t.account):void 0,{config:c,request:u,value:h}=t.transport({chain:a,pollingInterval:i}),p={...c,...h},m={account:l,batch:e,cacheTime:n,chain:a,key:r,name:o,pollingInterval:i,request:u,transport:p,type:s,uid:J9()};function x(C){return b=>{const g=b(C);for(const y in m)delete g[y];const w={...C,...g};return Object.assign(w,{extend:x(w)})}}return Object.assign(m,{extend:x(m)})}function Ky(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await Q9(u),s({count:a+1})};try{const c=await t();o(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});i(c)}};s()})}function X9(t,e={}){return async(n,r={})=>{const{retryDelay:o=150,retryCount:i=3}={...e,...r};return Ky(async()=>{try{return await t(n)}catch(s){const a=s;switch(a.code){case uc.code:throw new uc(a);case dc.code:throw new dc(a);case fc.code:throw new fc(a);case hc.code:throw new hc(a);case Yo.code:throw new Yo(a);case pc.code:throw new pc(a);case mc.code:throw new mc(a);case Ki.code:throw new Ki(a);case gc.code:throw new gc(a);case wc.code:throw new wc(a);case _a.code:throw new _a(a);case vc.code:throw new vc(a);case dt.code:throw new dt(a);case yc.code:throw new yc(a);case bc.code:throw new bc(a);case xc.code:throw new xc(a);case Cc.code:throw new Cc(a);case yn.code:throw new yn(a);case 5e3:throw new dt(a);default:throw s instanceof se?s:new b7(a)}}},{delay:({count:s,error:a})=>{var l;if(a&&a instanceof Ul){const c=(l=a==null?void 0:a.headers)==null?void 0:l.get("Retry-After");if(c!=null&&c.match(/\d/))return parseInt(c)*1e3}return~~(1<<s)*o},retryCount:i,shouldRetry:({error:s})=>eC(s)})}}function eC(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===_a.code||t.code===Yo.code:t instanceof Ul&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function Yy({key:t,name:e,request:n,retryCount:r=3,retryDelay:o=150,timeout:i,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:o,timeout:i,type:s},request:X9(n,{retryCount:r,retryDelay:o}),value:a}}function tC(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:o}=e;return({retryCount:i})=>Yy({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??i,retryDelay:o,type:"custom"})}class nC extends se{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function Qy(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():i(e)},n)),o(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&i(e),i(a)}finally{clearTimeout(s)}})()})}function rC(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const $w=rC();function iC(t,e={}){return{async request(n){var c;const{body:r,fetchOptions:o={},timeout:i=e.timeout??1e4}=n,{headers:s,method:a,signal:l}={...e.fetchOptions,...o};try{const u=await Qy(async({signal:p})=>await fetch(t,{...o,body:Array.isArray(r)?zo(r.map(x=>({jsonrpc:"2.0",id:x.id??$w.take(),...x}))):zo({jsonrpc:"2.0",id:r.id??$w.take(),...r}),headers:{...s,"Content-Type":"application/json"},method:a||"POST",signal:l||(i>0?p:void 0)}),{errorInstance:new ww({body:r,url:t}),timeout:i,signal:!0});let h;if((c=u.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?h=await u.json():h=await u.text(),!u.ok)throw new Ul({body:r,details:zo(h.error)||u.statusText,headers:u.headers,status:u.status,url:t});return h}catch(u){throw u instanceof Ul||u instanceof ww?u:new Ul({body:r,details:u.message,url:t})}}}}function Tw(t,e={}){const{batch:n,fetchOptions:r,key:o="http",name:i="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:h=0}=typeof n=="object"?n:{},p=e.retryCount??l,m=c??e.timeout??1e4,x=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!x)throw new nC;const C=iC(x,{fetchOptions:r,timeout:m});return Yy({key:o,name:i,async request({method:b,params:g}){const w={method:b,params:g},{schedule:y}=Vy({id:`${t}`,wait:h,shouldSplitBatch(P){return P.length>u},fn:P=>C.request({body:P}),sort:(P,N)=>P.id-N.id}),S=async P=>n?y(P):[await C.request({body:P})],[{error:A,result:k}]=await S(w);if(A)throw new ky({body:w,error:A,url:x});return k},retryCount:p,retryDelay:s,timeout:m,type:"http"},{fetchOptions:r,url:x})}}function Jy(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}async function oC(t,e){var C;const{allowFailure:n=!0,batchSize:r,blockNumber:o,blockTag:i,multicallAddress:s}=e,a=e.contracts,l=r??(typeof((C=t.batch)==null?void 0:C.multicall)=="object"&&t.batch.multicall.batchSize||1024);let c=s;if(!c){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");c=Jf({blockNumber:o,chain:t.chain,contract:"multicall3"})}const u=[[]];let h=0,p=0;for(let b=0;b<a.length;b++){const{abi:g,address:w,args:y,functionName:S}=a[b];try{const A=Qf({abi:g,args:y,functionName:S});p+=(A.length-2)/2,l>0&&p>l&&u[h].length>0&&(h++,p=(A.length-2)/2,u[h]=[]),u[h]=[...u[h],{allowFailure:!0,callData:A,target:w}]}catch(A){const k=jp(A,{abi:g,address:w,args:y,docsPath:"/docs/contract/multicall",functionName:S});if(!n)throw k;u[h]=[...u[h],{allowFailure:!0,callData:"0x",target:w}]}}const m=await Promise.allSettled(u.map(b=>pu(t,Sa,"readContract")({abi:Pp,address:c,args:[b],blockNumber:o,blockTag:i,functionName:"aggregate3"}))),x=[];for(let b=0;b<m.length;b++){const g=m[b];if(g.status==="rejected"){if(!n)throw g.reason;for(let y=0;y<u[b].length;y++)x.push({status:"failure",error:g.reason,result:void 0});continue}const w=g.value;for(let y=0;y<w.length;y++){const{returnData:S,success:A}=w[y],{callData:k}=u[b][y],{abi:P,address:N,functionName:V,args:j}=a[x.length];try{if(k==="0x")throw new qf;if(!A)throw new vm({data:S});const W=Yf({abi:P,args:j,data:S,functionName:V});x.push(n?{result:W,status:"success"}:W)}catch(W){const ve=jp(W,{abi:P,address:N,args:j,docsPath:"/docs/contract/multicall",functionName:V});if(!n)throw ve;x.push({error:ve,result:void 0,status:"failure"})}}}if(x.length!==a.length)throw new se("multicall results mismatch");return x}async function sC(t,{account:e=t.account,message:n}){if(!e)throw new h7({docsPath:"/docs/actions/wallet/signMessage"});const r=el(e);if(r.type==="local")return r.signMessage({message:n});const o=typeof n=="string"?cm(n):n.raw instanceof Uint8Array?Gf(n.raw):n.raw;return t.request({method:"personal_sign",params:[o,r.address]},{retryCount:0})}function aC(t){const e=n=>t(n.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function lC(){const t=new Set;let e=[];const n=()=>aC(o=>{e.some(({info:i})=>i.uuid===o.info.uuid)||(e=[...e,o],t.forEach(i=>i(e,{added:[o]})))});let r=n();return{_listeners(){return t},clear(){t.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),t.clear(),r()},findProvider({rdns:o}){return e.find(i=>i.info.rdns===o)},getProviders(){return e},reset(){this.clear(),r(),r=n()},subscribe(o,{emitImmediately:i}={}){return t.add(o),i&&o(e,{added:e}),()=>t.delete(o)}}}var cC={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const uC=t=>(e,n,r)=>{const o=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let h=s(r.getState());c=p=>{const m=s(p);if(!u(h,m)){const x=h;a(h=m,x)}},l!=null&&l.fireImmediately&&a(h,h)}return o(c)},t(e,n,r)},dC=uC;function fC(t,e){let n;try{n=t()}catch{return}return{getItem:o=>{var i;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(i=n.getItem(o))!=null?i:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,i)=>n.setItem(o,JSON.stringify(i,e==null?void 0:e.replacer)),removeItem:o=>n.removeItem(o)}}const Rc=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Rc(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Rc(r)(n)}}}},hC=(t,e)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:b=>b,version:0,merge:(b,g)=>({...g,...b}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=i.getStorage()}catch{}if(!c)return t((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...b)},r,o);const u=Rc(i.serialize),h=()=>{const b=i.partialize({...r()});let g;const w=u({state:b,version:i.version}).then(y=>c.setItem(i.name,y)).catch(y=>{g=y});if(g)throw g;return w},p=o.setState;o.setState=(b,g)=>{p(b,g),h()};const m=t((...b)=>{n(...b),h()},r,o);let x;const C=()=>{var b;if(!c)return;s=!1,a.forEach(w=>w(r()));const g=((b=i.onRehydrateStorage)==null?void 0:b.call(i,r()))||void 0;return Rc(c.getItem.bind(c))(i.name).then(w=>{if(w)return i.deserialize(w)}).then(w=>{if(w)if(typeof w.version=="number"&&w.version!==i.version){if(i.migrate)return i.migrate(w.state,w.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return w.state}).then(w=>{var y;return x=i.merge(w,(y=r())!=null?y:m),n(x,!0),h()}).then(()=>{g==null||g(x,void 0),s=!0,l.forEach(w=>w(x))}).catch(w=>{g==null||g(void 0,w)})};return o.persist={setOptions:b=>{i={...i,...b},b.getStorage&&(c=b.getStorage())},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>C(),hasHydrated:()=>s,onHydrate:b=>(a.add(b),()=>{a.delete(b)}),onFinishHydration:b=>(l.add(b),()=>{l.delete(b)})},C(),x||m},pC=(t,e)=>(n,r,o)=>{let i={storage:fC(()=>localStorage),partialize:C=>C,version:0,merge:(C,b)=>({...b,...C}),...e},s=!1;const a=new Set,l=new Set;let c=i.storage;if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...C)},r,o);const u=()=>{const C=i.partialize({...r()});return c.setItem(i.name,{state:C,version:i.version})},h=o.setState;o.setState=(C,b)=>{h(C,b),u()};const p=t((...C)=>{n(...C),u()},r,o);let m;const x=()=>{var C,b;if(!c)return;s=!1,a.forEach(w=>{var y;return w((y=r())!=null?y:p)});const g=((b=i.onRehydrateStorage)==null?void 0:b.call(i,(C=r())!=null?C:p))||void 0;return Rc(c.getItem.bind(c))(i.name).then(w=>{if(w)if(typeof w.version=="number"&&w.version!==i.version){if(i.migrate)return i.migrate(w.state,w.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return w.state}).then(w=>{var y;return m=i.merge(w,(y=r())!=null?y:p),n(m,!0),u()}).then(()=>{g==null||g(m,void 0),m=r(),s=!0,l.forEach(w=>w(m))}).catch(w=>{g==null||g(void 0,w)})};return o.persist={setOptions:C=>{i={...i,...C},C.storage&&(c=C.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>x(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},i.skipHydration||x(),m||p},mC=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((cC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),hC(t,e)):pC(t,e),gC=mC;var wC={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Pw=t=>{let e;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const h=e;e=c??typeof u!="object"?u:Object.assign({},e,u),n.forEach(p=>p(e,h))}},o=()=>e,a={setState:r,getState:o,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(wC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,o,a),a},Ow=t=>t?Pw(t):Pw;var Xy={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function i(l,c,u,h,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var m=new o(u,h||l,p),x=n?n+c:c;return l._events[x]?l._events[x].fn?l._events[x]=[l._events[x],m]:l._events[x].push(m):(l._events[x]=m,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)e.call(u,h)&&c.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var p=0,m=h.length,x=new Array(m);p<m;p++)x[p]=h[p].fn;return x},a.prototype.listenerCount=function(c){var u=n?n+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,p,m,x){var C=n?n+c:c;if(!this._events[C])return!1;var b=this._events[C],g=arguments.length,w,y;if(b.fn){switch(b.once&&this.removeListener(c,b.fn,void 0,!0),g){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,u),!0;case 3:return b.fn.call(b.context,u,h),!0;case 4:return b.fn.call(b.context,u,h,p),!0;case 5:return b.fn.call(b.context,u,h,p,m),!0;case 6:return b.fn.call(b.context,u,h,p,m,x),!0}for(y=1,w=new Array(g-1);y<g;y++)w[y-1]=arguments[y];b.fn.apply(b.context,w)}else{var S=b.length,A;for(y=0;y<S;y++)switch(b[y].once&&this.removeListener(c,b[y].fn,void 0,!0),g){case 1:b[y].fn.call(b[y].context);break;case 2:b[y].fn.call(b[y].context,u);break;case 3:b[y].fn.call(b[y].context,u,h);break;case 4:b[y].fn.call(b[y].context,u,h,p);break;default:if(!w)for(A=1,w=new Array(g-1);A<g;A++)w[A-1]=arguments[A];b[y].fn.apply(b[y].context,w)}}return!0},a.prototype.on=function(c,u,h){return i(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return i(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,p){var m=n?n+c:c;if(!this._events[m])return this;if(!u)return s(this,m),this;var x=this._events[m];if(x.fn)x.fn===u&&(!p||x.once)&&(!h||x.context===h)&&s(this,m);else{for(var C=0,b=[],g=x.length;C<g;C++)(x[C].fn!==u||p&&!x[C].once||h&&x[C].context!==h)&&b.push(x[C]);b.length?this._events[m]=b.length===1?b[0]:b:s(this,m)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(Xy);var vC=Xy.exports;const yC=su(vC);var bl=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Ao;class bC{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Ao.set(this,new yC)}on(e,n){bl(this,Ao,"f").on(e,n)}once(e,n){bl(this,Ao,"f").once(e,n)}off(e,n){bl(this,Ao,"f").off(e,n)}emit(e,...n){const r=n[0];bl(this,Ao,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return bl(this,Ao,"f").listenerCount(e)}}Ao=new WeakMap;function xC(t){return new bC(t)}function CC(t,e){return JSON.parse(t,(n,r)=>{let o=r;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(n,o))??o})}function Nw(t,e){return t.slice(0,e).join(".")||"."}function Mw(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function EC(t,e){const n=typeof t=="function",r=typeof e=="function",o=[],i=[];return function(a,l){if(typeof l=="object")if(o.length){const c=Mw(o,this);c===0?o[o.length]=this:(o.splice(c),i.splice(c)),i[i.length]=a;const u=Mw(o,l);if(u!==0)return r?e.call(this,a,l,Nw(i,u)):`[ref=${Nw(i,u)}]`}else o[0]=l,i[0]=a;return n?t.call(this,a,l):l}}function _C(t,e,n,r){return JSON.stringify(t,EC((o,i)=>{let s=i;return typeof s=="bigint"&&(s={__type:"bigint",value:i.toString()}),s instanceof Map&&(s={__type:"Map",value:Array.from(i.entries())}),(e==null?void 0:e(o,s))??s},r),n??void 0)}function SC(t){const{deserialize:e=CC,key:n="wagmi",serialize:r=_C,storage:o=e5}=t;function i(s){return s instanceof Promise?s.then(a=>a).catch(()=>null):s}return{...o,key:n,async getItem(s,a){const l=o.getItem(`${n}.${s}`),c=await i(l);return c?e(c)??null:a??null},async setItem(s,a){const l=`${n}.${s}`;a===null?await i(o.removeItem(l)):await i(o.setItem(l,r(a)))},async removeItem(s){await i(o.removeItem(`${n}.${s}`))}}}const e5={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const hd="2.6.4",RC=()=>`@wagmi/core@${hd}`;var t5=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Kd,n5;class ai extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return RC()}constructor(e,n={}){var i;super(),Kd.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=n.cause instanceof ai?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof ai&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return t5(this,Kd,"m",n5).call(this,this,e)}}Kd=new WeakSet,n5=function t(e,n){return n!=null&&n(e)?e:e.cause?t5(this,Kd,"m",t).call(this,e.cause,n):e};class Ra extends ai{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class AC extends ai{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class IC extends ai{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class kC extends ai{constructor({address:e,connector:n}){super(`Account "${e}" not found for connector "${n.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class Io extends ai{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class $C extends ai{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}function $r(t){if(typeof t=="string")return Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10);if(typeof t=="bigint")return Number(t);if(typeof t=="number")return t;throw new Error(`Cannot normalize chainId "${t}" of type "${typeof t}"`)}const TC={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(t){return t!=null&&t.coinbaseWalletExtension?t.coinbaseWalletExtension:pd(t,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(t){return pd(t,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const n=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of n)if(e[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(t){var e,n;return(e=t==null?void 0:t.phantom)!=null&&e.ethereum?(n=t.phantom)==null?void 0:n.ethereum:pd(t,"isPhantom")}}};Xf.type="injected";function Xf(t={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:n}=t;function r(){const o=t.target;if(typeof o=="function"){const i=o();if(i)return i}return typeof o=="object"?o:typeof o=="string"?{...TC[o]??{id:o,name:`${o[0].toUpperCase()}${o.slice(1)}`,provider:`is${o[0].toUpperCase()}${o.slice(1)}`}}:{id:"injected",name:"Injected",provider(i){return i==null?void 0:i.ethereum}}}return o=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},type:Xf.type,async setup(){const i=await this.getProvider();i&&t.target&&i.on("connect",this.onConnect.bind(this))},async connect({chainId:i,isReconnecting:s}={}){var c,u,h,p,m,x;const a=await this.getProvider();if(!a)throw new Io;let l=null;if(!s&&(l=await this.getAccounts().catch(()=>null),!!(l!=null&&l.length)))try{l=(p=(h=(u=(c=(await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:c.caveats)==null?void 0:u[0])==null?void 0:h.value)==null?void 0:p.map(g=>er(g))}catch(b){const g=b;if(g.code===dt.code)throw new dt(g);if(g.code===Ki.code)throw g}try{l!=null&&l.length||(l=(await a.request({method:"eth_requestAccounts"})).map(g=>er(g))),a.removeListener("connect",this.onConnect.bind(this)),a.on("accountsChanged",this.onAccountsChanged.bind(this)),a.on("chainChanged",this.onChainChanged),a.on("disconnect",this.onDisconnect.bind(this));let C=await this.getChainId();if(i&&C!==i){const b=await this.switchChain({chainId:i}).catch(g=>{if(g.code===dt.code)throw g;return{id:C}});C=(b==null?void 0:b.id)??C}return e&&(await((m=o.storage)==null?void 0:m.removeItem(`${this.id}.disconnected`)),t.target||await((x=o.storage)==null?void 0:x.setItem("injected.connected",!0))),{accounts:l,chainId:C}}catch(C){const b=C;throw b.code===dt.code?new dt(b):b.code===Ki.code?new Ki(b):b}},async disconnect(){var s,a;const i=await this.getProvider();if(!i)throw new Io;i.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),i.removeListener("chainChanged",this.onChainChanged),i.removeListener("disconnect",this.onDisconnect.bind(this)),i.on("connect",this.onConnect.bind(this)),e&&(await((s=o.storage)==null?void 0:s.setItem(`${this.id}.disconnected`,!0)),t.target||await((a=o.storage)==null?void 0:a.removeItem("injected.connected")))},async getAccounts(){const i=await this.getProvider();if(!i)throw new Io;return(await i.request({method:"eth_accounts"})).map(a=>er(a))},async getChainId(){const i=await this.getProvider();if(!i)throw new Io;const s=await i.request({method:"eth_chainId"});return $r(s)},async getProvider(){if(typeof window>"u")return;let i;const s=r();return typeof s.provider=="function"?i=s.provider(window):typeof s.provider=="string"?i=pd(window,s.provider):i=s.provider,i&&!i.removeListener&&("off"in i&&typeof i.off=="function"?i.removeListener=i.off:i.removeListener=()=>{}),i},async isAuthorized(){var i,s;try{if(e&&await((i=o.storage)==null?void 0:i.getItem(`${this.id}.disconnected`))||!t.target&&!await((s=o.storage)==null?void 0:s.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(n!==void 0&&n!==!1){const u=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",u),!!await this.getProvider()),h=typeof n=="number"?n:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(m=>window.addEventListener("ethereum#initialized",()=>m(u()),{once:!0}))]:[],new Promise(m=>setTimeout(()=>m(u()),h))]))return!0}throw new Io}return!!(await Ky(()=>Qy(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:i}){var l,c,u;const s=await this.getProvider();if(!s)throw new Io;const a=o.chains.find(h=>h.id===i);if(!a)throw new yn(new Ra);try{return await Promise.all([s.request({method:"wallet_switchEthereumChain",params:[{chainId:at(i)}]}),new Promise(h=>o.emitter.once("change",({chainId:p})=>{p===i&&h()}))]),a}catch(h){const p=h;if(p.code===4902||((c=(l=p==null?void 0:p.data)==null?void 0:l.originalError)==null?void 0:c.code)===4902)try{const{default:m,...x}=a.blockExplorers??{};let C=[];if(m&&(C=[m.url,...Object.values(x).map(g=>g.url)]),await s.request({method:"wallet_addEthereumChain",params:[{chainId:at(i),chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((u=a.rpcUrls.default)==null?void 0:u.http[0])??""],blockExplorerUrls:C}]}),await this.getChainId()!==i)throw new dt(new Error("User rejected switch after adding network."));return a}catch(m){throw new dt(m)}throw p.code===dt.code?new dt(p):new yn(p)}},async onAccountsChanged(i){var s;if(i.length===0)this.onDisconnect();else if(o.emitter.listenerCount("connect")){const a=(await this.getChainId()).toString();this.onConnect({chainId:a}),e&&await((s=o.storage)==null?void 0:s.removeItem(`${this.id}.disconnected`))}else o.emitter.emit("change",{accounts:i.map(a=>er(a))})},onChainChanged(i){const s=$r(i);o.emitter.emit("change",{chainId:s})},async onConnect(i){const s=await this.getAccounts();if(s.length===0)return;const a=$r(i.chainId);o.emitter.emit("connect",{accounts:s,chainId:a});const l=await this.getProvider();l&&(l.removeListener("connect",this.onConnect.bind(this)),l.on("accountsChanged",this.onAccountsChanged.bind(this)),l.on("chainChanged",this.onChainChanged),l.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(i){const s=await this.getProvider();i&&i.code===1013&&s&&(await this.getAccounts()).length||(o.emitter.emit("disconnect"),s&&(s.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),s.removeListener("chainChanged",this.onChainChanged),s.removeListener("disconnect",this.onDisconnect.bind(this)),s.on("connect",this.onConnect.bind(this))))}})}function pd(t,e){function n(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const r=t.ethereum;if(r!=null&&r.providers)return r.providers.find(o=>n(o));if(r&&n(r))return r}const Up=256;let Gu=Up,qu;function PC(t=11){if(!qu||Gu+t>Up*2){qu="",Gu=0;for(let e=0;e<Up;e++)qu+=(256+Math.random()*256|0).toString(16).substring(1)}return qu.substring(Gu,Gu+++t)}function OC(t){const{chains:e,multiInjectedProviderDiscovery:n=!0,storage:r=SC({storage:typeof window<"u"&&window.localStorage?window.localStorage:e5}),syncConnectedChain:o=!0,ssr:i,...s}=t,a=typeof window<"u"&&n?lC():void 0,l=Ow(()=>[...s.connectors??[],...i?[]:(a==null?void 0:a.getProviders().map(u))??[]].map(c));function c(S){var P;const A=xC(PC()),k={...S({emitter:A,chains:e,storage:r}),emitter:A,uid:A.uid};return A.on("connect",w),(P=k.setup)==null||P.call(k),k}function u(S){const{info:A}=S,k=S.provider;return Xf({target:{...A,id:A.rdns,provider:k}})}const h=new Map;function p(S={}){const A=S.chainId??b.getState().chainId,k=e.find(N=>N.id===A);if(S.chainId&&!k)throw new Ra;{const N=h.get(b.getState().chainId);if(N&&!k)return N;if(!k)throw new Ra}{const N=h.get(A);if(N)return N}let P;if(s.client)P=s.client({chain:k});else{const N=k.id,V=e.map(ve=>ve.id),j={},W=Object.entries(s);for(const[ve,Te]of W)if(!(ve==="client"||ve==="connectors"||ve==="transports"))if(typeof Te=="object")if(N in Te)j[ve]=Te[N];else{if(V.some(X=>X in Te))continue;j[ve]=Te}else j[ve]=Te;P=qy({...j,chain:k,batch:j.batch??{multicall:!0},transport:ve=>s.transports[N]({...ve,connectors:l})})}return h.set(A,P),P}const m={chainId:e[0].id,connections:new Map,current:void 0,status:"disconnected"};let x;const C="0.0.0-canary-";hd.startsWith(C)?x=parseInt(hd.replace(C,"")):x=parseInt(hd.split(".")[0]??"0");const b=Ow(dC(r?gC(()=>m,{migrate(S,A){if(A===x)return S;const k=S&&typeof S=="object"&&"chainId"in S&&typeof S.chainId=="number"?S.chainId:m.chainId;return{...m,chainId:k}},name:"store",partialize(S){return{connections:{__type:"Map",value:Array.from(S.connections.entries()).map(([A,k])=>{const{id:P,name:N,type:V,uid:j}=k.connector;return[A,{...k,connector:{id:P,name:N,type:V,uid:j}}]})},chainId:S.chainId,current:S.current}},skipHydration:i,storage:r,version:x}):()=>m));o&&b.subscribe(({connections:S,current:A})=>{var k;return A?(k=S.get(A))==null?void 0:k.chainId:void 0},S=>{if(e.some(k=>k.id===S))return b.setState(k=>({...k,chainId:S??k.chainId}))}),a==null||a.subscribe(S=>{const A=new Map;for(const P of l.getState())A.set(P.id,!0);const k=[];for(const P of S){const N=c(u(P));A.has(N.id)||k.push(N)}l.setState(P=>[...P,...k],!0)});function g(S){b.setState(A=>{const k=A.connections.get(S.uid);return{...A,connections:new Map(A.connections).set(S.uid,{accounts:S.accounts??k.accounts,chainId:S.chainId??k.chainId,connector:k.connector})}})}function w(S){b.getState().status==="connecting"||b.getState().status==="reconnecting"||b.setState(A=>{const k=l.getState().find(P=>P.uid===S.uid);return k?{...A,connections:new Map(A.connections).set(S.uid,{accounts:S.accounts,chainId:S.chainId,connector:k}),current:S.uid,status:"connected"}:A})}function y(S){b.setState(A=>{const k=A.connections.get(S.uid);if(k&&(k.connector.emitter.off("change",g),k.connector.emitter.off("disconnect",y),k.connector.emitter.on("connect",w)),A.connections.delete(S.uid),A.connections.size===0)return{...A,connections:new Map,current:void 0,status:"disconnected"};const P=A.connections.values().next().value;return{...A,connections:new Map(A.connections),current:P.connector.uid}})}return{chains:e,get connectors(){return l.getState()},storage:r,getClient:p,get state(){return b.getState()},setState(S){let A;typeof S=="function"?A=S(b.getState()):A=S,typeof A!="object"&&(A=m),Object.keys(m).some(P=>!(P in A))&&(A=m),b.setState(A,!0)},subscribe(S,A,k){return b.subscribe(S,A,k?{...k,fireImmediately:k.emitImmediately}:void 0)},_internal:{mipd:a,store:b,ssr:!!i,syncConnectedChain:o,transports:s.transports,connectors:{providerDetailToConnector:u,setup:c,setState:S=>l.setState(typeof S=="function"?S(l.getState()):S,!0),subscribe:S=>l.subscribe(S)},events:{change:g,connect:w,disconnect:y}}}}function nl(t,e,n){const r=t[e.name??n];return typeof r=="function"?r:o=>e(t,o)}async function Lw(t,e){var r;let n;if(typeof e.connector=="function"?n=t._internal.connectors.setup(e.connector):n=e.connector,n.uid===t.state.current)throw new AC;try{t.setState(s=>({...s,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});const o=await n.connect({chainId:e.chainId}),i=o.accounts;return n.emitter.off("connect",t._internal.events.connect),n.emitter.on("change",t._internal.events.change),n.emitter.on("disconnect",t._internal.events.disconnect),await((r=t.storage)==null?void 0:r.setItem("recentConnectorId",n.id)),t.setState(s=>({...s,connections:new Map(s.connections).set(n.uid,{accounts:i,chainId:o.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:i,chainId:o.chainId}}catch(o){throw t.setState(i=>({...i,status:i.current?"connected":"disconnected"})),o}}async function NC(t,e={}){var o,i;let n;if(e.connector)n=e.connector;else{const{connections:s,current:a}=t.state,l=s.get(a);n=l==null?void 0:l.connector}const r=t.state.connections;n&&(await n.disconnect(),n.emitter.off("change",t._internal.events.change),n.emitter.off("disconnect",t._internal.events.disconnect),n.emitter.on("connect",t._internal.events.connect),r.delete(n.uid)),t.setState(s=>{if(r.size===0)return{...s,connections:new Map,current:void 0,status:"disconnected"};const a=r.values().next().value;return{...s,connections:new Map(r),current:a.connector.uid}});{const s=t.state.current;if(!s)return;const a=(o=t.state.connections.get(s))==null?void 0:o.connector;if(!a)return;await((i=t.storage)==null?void 0:i.setItem("recentConnectorId",a.id))}}async function MC(t,e={}){let n;if(e.connector){const{connector:l}=e,[c,u]=await Promise.all([l.getAccounts(),l.getChainId()]);n={accounts:c,chainId:u,connector:l}}else n=t.state.connections.get(t.state.current);if(!n)throw new IC;const r=e.chainId??n.chainId,o=n.connector;if(o.getClient)return o.getClient({chainId:r});const i=el(e.account??n.accounts[0]),s=t.chains.find(l=>l.id===r),a=await n.connector.getProvider({chainId:r});if(e.account&&!n.accounts.includes(i.address))throw new kC({address:i.address,connector:o});return qy({account:i,chain:s,name:"Connector Client",transport:l=>tC(a)({...l,retryCount:0})})}function r5(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(g7[t])}function i5(t){const e=t.state.current,n=t.state.connections.get(e),r=n==null?void 0:n.accounts,o=r==null?void 0:r[0],i=t.chains.find(a=>a.id===(n==null?void 0:n.chainId)),s=t.state.status;switch(s){case"connected":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}async function LC(t,e){const{allowFailure:n=!0,chainId:r,contracts:o,...i}=e,s=t.getClient({chainId:r});return nl(s,oC,"multicall")({allowFailure:n,contracts:o,...i})}function jC(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return nl(o,Sa,"readContract")(r)}async function DC(t,e){const{allowFailure:n=!0,blockNumber:r,blockTag:o,...i}=e,s=e.contracts;try{const a=s.reduce((h,p,m)=>{const x=p.chainId??t.state.chainId;return{...h,[x]:[...h[x]||[],{contract:p,index:m}]}},{}),l=()=>Object.entries(a).map(([h,p])=>LC(t,{...i,allowFailure:n,blockNumber:r,blockTag:o,chainId:parseInt(h),contracts:p.map(({contract:m})=>m)})),c=(await Promise.all(l())).flat(),u=Object.values(a).flatMap(h=>h.map(({index:p})=>p));return c.reduce((h,p,m)=>(h&&(h[u[m]]=p),h),[])}catch(a){if(a instanceof wm)throw a;const l=()=>s.map(c=>jC(t,{...c,blockNumber:r,blockTag:o}));return n?(await Promise.allSettled(l())).map(c=>c.status==="fulfilled"?{result:c.value,status:"success"}:{error:c.reason,result:void 0,status:"failure"}):await Promise.all(l())}}async function UC(t,e){const{address:n,blockNumber:r,blockTag:o,chainId:i,token:s,unit:a="ether"}=e;if(s)try{return jw(t,{balanceAddress:n,chainId:i,symbolType:"string",tokenAddress:s})}catch(p){if(p instanceof wm){const m=await jw(t,{balanceAddress:n,chainId:i,symbolType:"bytes32",tokenAddress:s}),x=zx(hu(m.symbol,{dir:"right"}));return{...m,symbol:x}}throw p}const l=t.getClient({chainId:i}),u=await nl(l,Y9,"getBalance")(r?{address:n,blockNumber:r}:{address:n,blockTag:o}),h=t.chains.find(p=>p.id===i)??l.chain;return{decimals:h.nativeCurrency.decimals,formatted:Kf(u,r5(a)),symbol:h.nativeCurrency.symbol,value:u}}async function jw(t,e){const{balanceAddress:n,chainId:r,symbolType:o,tokenAddress:i,unit:s}=e,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:i},[l,c,u]=await DC(t,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[n],chainId:r},{...a,functionName:"decimals",chainId:r},{...a,functionName:"symbol",chainId:r}]}),h=Kf(l??"0",r5(s??c));return{decimals:c,formatted:h,symbol:u,value:l}}function Bp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(Array.isArray(t)&&Array.isArray(e)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Bp(t[r],e[r]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(i&&!Bp(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function BC(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return nl(o,q9,"getEnsAvatar")(r)}function zC(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return nl(o,K9,"getEnsName")(r)}let a0=!1;async function WC(t,e={}){var c,u;if(a0)return[];a0=!0,t.setState(h=>({...h,status:h.current?"reconnecting":"connecting"}));const n=[];if((c=e.connectors)!=null&&c.length)for(const h of e.connectors){let p;typeof h=="function"?p=t._internal.connectors.setup(h):p=h,n.push(p)}else n.push(...t.connectors);let r;try{r=await((u=t.storage)==null?void 0:u.getItem("recentConnectorId"))}catch{}const o={};for(const[,h]of t.state.connections)o[h.connector.id]=1;r&&(o[r]=0);const i=Object.keys(o).length>0?[...n].sort((h,p)=>(o[h.id]??10)-(o[p.id]??10)):n;let s=!1;const a=[],l=[];for(const h of i){const p=await h.getProvider();if(!p||l.some(C=>C===p)||!await h.isAuthorized())continue;const x=await h.connect({isReconnecting:!0}).catch(()=>null);x&&(h.emitter.off("connect",t._internal.events.connect),h.emitter.on("change",t._internal.events.change),h.emitter.on("disconnect",t._internal.events.disconnect),t.setState(C=>{const b=new Map(s?C.connections:new Map).set(h.uid,{accounts:x.accounts,chainId:x.chainId,connector:h});return{...C,current:s?C.current:h.uid,connections:b}}),a.push({accounts:x.accounts,chainId:x.chainId,connector:h}),l.push(p),s=!0)}return s?t.setState(h=>({...h,status:"connected"})):t.setState(h=>({...h,connections:new Map,current:void 0,status:"disconnected"})),a0=!1,a}async function FC(t,e){const{account:n,connector:r,...o}=e;let i;return typeof n=="object"&&n.type==="local"?i=t.getClient():i=await MC(t,{account:n,connector:r}),nl(i,sC,"signMessage")({...o,...n?{account:n}:{}})}async function HC(t,e){var i;const{chainId:n}=e,r=t.state.connections.get(((i=e.connector)==null?void 0:i.uid)??t.state.current);if(r){const s=r.connector;if(!s.switchChain)throw new $C({connector:s});return await s.switchChain({chainId:n})}const o=t.chains.find(s=>s.id===n);if(!o)throw new Ra;return t.setState(s=>({...s,chainId:n})),o}function VC(t,e){const{onChange:n}=e;return t.subscribe(()=>i5(t),n,{equalityFn(r,o){const{connector:i,...s}=r,{connector:a,...l}=o;return Bp(s,l)&&(i==null?void 0:i.id)===(a==null?void 0:a.id)&&(i==null?void 0:i.uid)===(a==null?void 0:a.uid)}})}function ZC(t,e){const{onChange:n}=e;return t._internal.connectors.subscribe((r,o)=>{n(Object.values(r),o)})}function GC(t,e){const{initialState:n,reconnectOnMount:r}=e;return n&&t.setState({...n,connections:r?n.connections:new Map,status:r?"reconnecting":"disconnected"}),{async onMount(){var o;if(t._internal.ssr){await t._internal.store.persist.rehydrate();const i=(o=t._internal.mipd)==null?void 0:o.getProviders().map(t._internal.connectors.providerDetailToConnector).map(t._internal.connectors.setup);t._internal.connectors.setState(s=>[...s,...i??[]])}r?WC(t):t.storage&&t.setState(i=>({...i,connections:new Map}))}}}function qC(t){const{children:e,config:n,initialState:r,reconnectOnMount:o=!0}=t,{onMount:i}=GC(n,{initialState:r,reconnectOnMount:o});n._internal.ssr||i();const s=Q.useRef(!0);return Q.useEffect(()=>{if(s.current&&n._internal.ssr)return i(),()=>{s.current=!1}},[]),e}const KC=Q.createContext(void 0);function YC(t){const{children:e,config:n}=t,r={value:n};return Q.createElement(qC,t,Q.createElement(KC.Provider,r,e))}var eh=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},th=typeof window>"u"||"Deno"in window;function Yn(){}function QC(t,e){return typeof t=="function"?t(e):t}function JC(t){return typeof t=="number"&&t>=0&&t!==1/0}function XC(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Dw(t,e){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:a}=t;if(s){if(r){if(e.queryHash!==xm(s,e.options))return!1}else if(!Ic(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof o<"u"&&o!==e.state.fetchStatus||i&&!i(e))}function Uw(t,e){const{exact:n,status:r,predicate:o,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(n){if(Ac(e.options.mutationKey)!==Ac(i))return!1}else if(!Ic(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||o&&!o(e))}function xm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ac)(t)}function Ac(t){return JSON.stringify(t,(e,n)=>zp(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Ic(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Ic(t[n],e[n])):!1}function o5(t,e){if(t===e)return t;const n=Bw(t)&&Bw(e);if(n||zp(t)&&zp(e)){const r=n?t:Object.keys(t),o=r.length,i=n?e:Object.keys(e),s=i.length,a=n?[]:{};let l=0;for(let c=0;c<s;c++){const u=n?c:i[c];!n&&t[u]===void 0&&e[u]===void 0&&r.includes(u)?(a[u]=void 0,l++):(a[u]=o5(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return o===s&&l===o?t:a}return e}function Bw(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function zp(t){if(!zw(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!zw(n)||!n.hasOwnProperty("isPrototypeOf"))}function zw(t){return Object.prototype.toString.call(t)==="[object Object]"}function eE(t){return new Promise(e=>{setTimeout(e,t)})}function tE(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?o5(t,e):e}function nE(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function rE(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Oo,Ai,oa,P2,iE=(P2=class extends eh{constructor(){super();ke(this,Oo,void 0);ke(this,Ai,void 0);ke(this,oa,void 0);ge(this,oa,e=>{if(!th&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,Ai)||this.setEventListener(L(this,oa))}onUnsubscribe(){var e;this.hasListeners()||((e=L(this,Ai))==null||e.call(this),ge(this,Ai,void 0))}setEventListener(e){var n;ge(this,oa,e),(n=L(this,Ai))==null||n.call(this),ge(this,Ai,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){L(this,Oo)!==e&&(ge(this,Oo,e),this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){var e;return typeof L(this,Oo)=="boolean"?L(this,Oo):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Oo=new WeakMap,Ai=new WeakMap,oa=new WeakMap,P2),Wp=new iE,sa,Ii,aa,O2,oE=(O2=class extends eh{constructor(){super();ke(this,sa,!0);ke(this,Ii,void 0);ke(this,aa,void 0);ge(this,aa,e=>{if(!th&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,Ii)||this.setEventListener(L(this,aa))}onUnsubscribe(){var e;this.hasListeners()||((e=L(this,Ii))==null||e.call(this),ge(this,Ii,void 0))}setEventListener(e){var n;ge(this,aa,e),(n=L(this,Ii))==null||n.call(this),ge(this,Ii,e(this.setOnline.bind(this)))}setOnline(e){L(this,sa)!==e&&(ge(this,sa,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return L(this,sa)}},sa=new WeakMap,Ii=new WeakMap,aa=new WeakMap,O2),Yd=new oE;function sE(t){return Math.min(1e3*2**t,3e4)}function Cm(t){return(t??"online")==="online"?Yd.isOnline():!0}var s5=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function l0(t){return t instanceof s5}function a5(t){let e=!1,n=0,r=!1,o,i,s;const a=new Promise((b,g)=>{i=b,s=g}),l=b=>{var g;r||(m(new s5(b)),(g=t.abort)==null||g.call(t))},c=()=>{e=!0},u=()=>{e=!1},h=()=>!Wp.isFocused()||t.networkMode!=="always"&&!Yd.isOnline(),p=b=>{var g;r||(r=!0,(g=t.onSuccess)==null||g.call(t,b),o==null||o(),i(b))},m=b=>{var g;r||(r=!0,(g=t.onError)==null||g.call(t,b),o==null||o(),s(b))},x=()=>new Promise(b=>{var g;o=w=>{const y=r||!h();return y&&b(w),y},(g=t.onPause)==null||g.call(t)}).then(()=>{var b;o=void 0,r||(b=t.onContinue)==null||b.call(t)}),C=()=>{if(r)return;let b;try{b=t.fn()}catch(g){b=Promise.reject(g)}Promise.resolve(b).then(p).catch(g=>{var k;if(r)return;const w=t.retry??(th?0:3),y=t.retryDelay??sE,S=typeof y=="function"?y(n,g):y,A=w===!0||typeof w=="number"&&n<w||typeof w=="function"&&w(n,g);if(e||!A){m(g);return}n++,(k=t.onFail)==null||k.call(t,n,g),eE(S).then(()=>{if(h())return x()}).then(()=>{e?m(g):C()})})};return Cm(t.networkMode)?C():x().then(C),{promise:a,cancel:l,continue:()=>(o==null?void 0:o())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}function aE(){let t=[],e=0,n=p=>{p()},r=p=>{p()},o=p=>setTimeout(p,0);const i=p=>{o=p},s=p=>{let m;e++;try{m=p()}finally{e--,e||c()}return m},a=p=>{e?t.push(p):o(()=>{n(p)})},l=p=>(...m)=>{a(()=>{p(...m)})},c=()=>{const p=t;t=[],p.length&&o(()=>{r(()=>{p.forEach(m=>{n(m)})})})};return{batch:s,batchCalls:l,schedule:a,setNotifyFunction:p=>{n=p},setBatchNotifyFunction:p=>{r=p},setScheduler:i}}var Vt=aE(),No,N2,l5=(N2=class{constructor(){ke(this,No,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),JC(this.gcTime)&&ge(this,No,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(th?1/0:5*60*1e3))}clearGcTimeout(){L(this,No)&&(clearTimeout(L(this,No)),ge(this,No,void 0))}},No=new WeakMap,N2),la,ca,Pn,ki,On,xt,ru,Mo,ua,md,Qn,Gr,M2,lE=(M2=class extends l5{constructor(e){super();ke(this,ua);ke(this,Qn);ke(this,la,void 0);ke(this,ca,void 0);ke(this,Pn,void 0);ke(this,ki,void 0);ke(this,On,void 0);ke(this,xt,void 0);ke(this,ru,void 0);ke(this,Mo,void 0);ge(this,Mo,!1),ge(this,ru,e.defaultOptions),mt(this,ua,md).call(this,e.options),ge(this,xt,[]),ge(this,Pn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ge(this,la,e.state||cE(this.options)),this.state=L(this,la),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!L(this,xt).length&&this.state.fetchStatus==="idle"&&L(this,Pn).remove(this)}setData(e,n){const r=tE(this.state.data,e,this.options);return mt(this,Qn,Gr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){mt(this,Qn,Gr).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r;const n=L(this,ki);return(r=L(this,On))==null||r.cancel(e),n?n.then(Yn).catch(Yn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,la))}isActive(){return L(this,xt).some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||L(this,xt).some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!XC(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=L(this,xt).find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=L(this,On))==null||n.continue()}onOnline(){var n;const e=L(this,xt).find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=L(this,On))==null||n.continue()}addObserver(e){L(this,xt).includes(e)||(L(this,xt).push(e),this.clearGcTimeout(),L(this,Pn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){L(this,xt).includes(e)&&(ge(this,xt,L(this,xt).filter(n=>n!==e)),L(this,xt).length||(L(this,On)&&(L(this,Mo)?L(this,On).cancel({revert:!0}):L(this,On).cancelRetry()),this.scheduleGc()),L(this,Pn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return L(this,xt).length}invalidate(){this.state.isInvalidated||mt(this,Qn,Gr).call(this,{type:"invalidate"})}fetch(e,n){var c,u,h,p;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,ki))return(c=L(this,On))==null||c.continueRetry(),L(this,ki)}if(e&&mt(this,ua,md).call(this,e),!this.options.queryFn){const m=L(this,xt).find(x=>x.options.queryFn);m&&mt(this,ua,md).call(this,m.options)}const r=new AbortController,o={queryKey:this.queryKey,meta:this.meta},i=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(ge(this,Mo,!0),r.signal)})};i(o);const s=()=>this.options.queryFn?(ge(this,Mo,!1),this.options.persister?this.options.persister(this.options.queryFn,o,this):this.options.queryFn(o)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};i(a),(u=this.options.behavior)==null||u.onFetch(a,this),ge(this,ca,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=a.fetchOptions)==null?void 0:h.meta))&&mt(this,Qn,Gr).call(this,{type:"fetch",meta:(p=a.fetchOptions)==null?void 0:p.meta});const l=m=>{var x,C,b,g;l0(m)&&m.silent||mt(this,Qn,Gr).call(this,{type:"error",error:m}),l0(m)||((C=(x=L(this,Pn).config).onError)==null||C.call(x,m,this),(g=(b=L(this,Pn).config).onSettled)==null||g.call(b,this.state.data,m,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return ge(this,On,a5({fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:m=>{var x,C,b,g;if(typeof m>"u"){l(new Error(`${this.queryHash} data is undefined`));return}this.setData(m),(C=(x=L(this,Pn).config).onSuccess)==null||C.call(x,m,this),(g=(b=L(this,Pn).config).onSettled)==null||g.call(b,m,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(m,x)=>{mt(this,Qn,Gr).call(this,{type:"failed",failureCount:m,error:x})},onPause:()=>{mt(this,Qn,Gr).call(this,{type:"pause"})},onContinue:()=>{mt(this,Qn,Gr).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode})),ge(this,ki,L(this,On).promise),L(this,ki)}},la=new WeakMap,ca=new WeakMap,Pn=new WeakMap,ki=new WeakMap,On=new WeakMap,xt=new WeakMap,ru=new WeakMap,Mo=new WeakMap,ua=new WeakSet,md=function(e){this.options={...L(this,ru),...e},this.updateGcTime(this.options.gcTime)},Qn=new WeakSet,Gr=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:e.meta??null,fetchStatus:Cm(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return l0(o)&&o.revert&&L(this,ca)?{...L(this,ca),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Vt.batch(()=>{L(this,xt).forEach(r=>{r.onQueryUpdate()}),L(this,Pn).notify({query:this,type:"updated",action:e})})},M2);function cE(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Er,L2,uE=(L2=class extends eh{constructor(e={}){super();ke(this,Er,void 0);this.config=e,ge(this,Er,new Map)}build(e,n,r){const o=n.queryKey,i=n.queryHash??xm(o,n);let s=this.get(i);return s||(s=new lE({cache:this,queryKey:o,queryHash:i,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(s)),s}add(e){L(this,Er).has(e.queryHash)||(L(this,Er).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=L(this,Er).get(e.queryHash);n&&(e.destroy(),n===e&&L(this,Er).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Vt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return L(this,Er).get(e)}getAll(){return[...L(this,Er).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Dw(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Dw(e,r)):n}notify(e){Vt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Vt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Vt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Er=new WeakMap,L2),_r,iu,hn,da,Sr,yi,j2,dE=(j2=class extends l5{constructor(e){super();ke(this,Sr);ke(this,_r,void 0);ke(this,iu,void 0);ke(this,hn,void 0);ke(this,da,void 0);this.mutationId=e.mutationId,ge(this,iu,e.defaultOptions),ge(this,hn,e.mutationCache),ge(this,_r,[]),this.state=e.state||fE(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...L(this,iu),...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){L(this,_r).includes(e)||(L(this,_r).push(e),this.clearGcTimeout(),L(this,hn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ge(this,_r,L(this,_r).filter(n=>n!==e)),this.scheduleGc(),L(this,hn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){L(this,_r).length||(this.state.status==="pending"?this.scheduleGc():L(this,hn).remove(this))}continue(){var e;return((e=L(this,da))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,i,s,a,l,c,u,h,p,m,x,C,b,g,w,y,S,A,k,P;const n=()=>(ge(this,da,a5({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(N,V)=>{mt(this,Sr,yi).call(this,{type:"failed",failureCount:N,error:V})},onPause:()=>{mt(this,Sr,yi).call(this,{type:"pause"})},onContinue:()=>{mt(this,Sr,yi).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),L(this,da).promise),r=this.state.status==="pending";try{if(!r){mt(this,Sr,yi).call(this,{type:"pending",variables:e}),await((i=(o=L(this,hn).config).onMutate)==null?void 0:i.call(o,e,this));const V=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,e));V!==this.state.context&&mt(this,Sr,yi).call(this,{type:"pending",context:V,variables:e})}const N=await n();return await((c=(l=L(this,hn).config).onSuccess)==null?void 0:c.call(l,N,e,this.state.context,this)),await((h=(u=this.options).onSuccess)==null?void 0:h.call(u,N,e,this.state.context)),await((m=(p=L(this,hn).config).onSettled)==null?void 0:m.call(p,N,null,this.state.variables,this.state.context,this)),await((C=(x=this.options).onSettled)==null?void 0:C.call(x,N,null,e,this.state.context)),mt(this,Sr,yi).call(this,{type:"success",data:N}),N}catch(N){try{throw await((g=(b=L(this,hn).config).onError)==null?void 0:g.call(b,N,e,this.state.context,this)),await((y=(w=this.options).onError)==null?void 0:y.call(w,N,e,this.state.context)),await((A=(S=L(this,hn).config).onSettled)==null?void 0:A.call(S,void 0,N,this.state.variables,this.state.context,this)),await((P=(k=this.options).onSettled)==null?void 0:P.call(k,void 0,N,e,this.state.context)),N}finally{mt(this,Sr,yi).call(this,{type:"error",error:N})}}}},_r=new WeakMap,iu=new WeakMap,hn=new WeakMap,da=new WeakMap,Sr=new WeakSet,yi=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Cm(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Vt.batch(()=>{L(this,_r).forEach(r=>{r.onMutationUpdate(e)}),L(this,hn).notify({mutation:this,type:"updated",action:e})})},j2);function fE(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Nn,ou,Lo,D2,hE=(D2=class extends eh{constructor(e={}){super();ke(this,Nn,void 0);ke(this,ou,void 0);ke(this,Lo,void 0);this.config=e,ge(this,Nn,[]),ge(this,ou,0)}build(e,n,r){const o=new dE({mutationCache:this,mutationId:++Ru(this,ou)._,options:e.defaultMutationOptions(n),state:r});return this.add(o),o}add(e){L(this,Nn).push(e),this.notify({type:"added",mutation:e})}remove(e){ge(this,Nn,L(this,Nn).filter(n=>n!==e)),this.notify({type:"removed",mutation:e})}clear(){Vt.batch(()=>{L(this,Nn).forEach(e=>{this.remove(e)})})}getAll(){return L(this,Nn)}find(e){const n={exact:!0,...e};return L(this,Nn).find(r=>Uw(n,r))}findAll(e={}){return L(this,Nn).filter(n=>Uw(e,n))}notify(e){Vt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){return ge(this,Lo,(L(this,Lo)??Promise.resolve()).then(()=>{const e=L(this,Nn).filter(n=>n.state.isPaused);return Vt.batch(()=>e.reduce((n,r)=>n.then(()=>r.continue().catch(Yn)),Promise.resolve()))}).then(()=>{ge(this,Lo,void 0)})),L(this,Lo)}},Nn=new WeakMap,ou=new WeakMap,Lo=new WeakMap,D2);function pE(t){return{onFetch:(e,n)=>{const r=async()=>{var x,C,b,g,w;const o=e.options,i=(b=(C=(x=e.fetchOptions)==null?void 0:x.meta)==null?void 0:C.fetchMore)==null?void 0:b.direction,s=((g=e.state.data)==null?void 0:g.pages)||[],a=((w=e.state.data)==null?void 0:w.pageParams)||[],l={pages:[],pageParams:[]};let c=!1;const u=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(e.signal.aborted?c=!0:e.signal.addEventListener("abort",()=>{c=!0}),e.signal)})},h=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),p=async(y,S,A)=>{if(c)return Promise.reject();if(S==null&&y.pages.length)return Promise.resolve(y);const k={queryKey:e.queryKey,pageParam:S,direction:A?"backward":"forward",meta:e.options.meta};u(k);const P=await h(k),{maxPages:N}=e.options,V=A?rE:nE;return{pages:V(y.pages,P,N),pageParams:V(y.pageParams,S,N)}};let m;if(i&&s.length){const y=i==="backward",S=y?mE:Ww,A={pages:s,pageParams:a},k=S(o,A);m=await p(A,k,y)}else{m=await p(l,a[0]??o.initialPageParam);const y=t??s.length;for(let S=1;S<y;S++){const A=Ww(o,m);m=await p(m,A)}}return m};e.options.persister?e.fetchFn=()=>{var o,i;return(i=(o=e.options).persister)==null?void 0:i.call(o,r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=r}}}function Ww(t,{pages:e,pageParams:n}){const r=e.length-1;return t.getNextPageParam(e[r],e,n[r],n)}function mE(t,{pages:e,pageParams:n}){var r;return(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n)}var gt,$i,Ti,fa,ha,Pi,pa,ma,U2,gE=(U2=class{constructor(t={}){ke(this,gt,void 0);ke(this,$i,void 0);ke(this,Ti,void 0);ke(this,fa,void 0);ke(this,ha,void 0);ke(this,Pi,void 0);ke(this,pa,void 0);ke(this,ma,void 0);ge(this,gt,t.queryCache||new uE),ge(this,$i,t.mutationCache||new hE),ge(this,Ti,t.defaultOptions||{}),ge(this,fa,new Map),ge(this,ha,new Map),ge(this,Pi,0)}mount(){Ru(this,Pi)._++,L(this,Pi)===1&&(ge(this,pa,Wp.subscribe(()=>{Wp.isFocused()&&(this.resumePausedMutations(),L(this,gt).onFocus())})),ge(this,ma,Yd.subscribe(()=>{Yd.isOnline()&&(this.resumePausedMutations(),L(this,gt).onOnline())})))}unmount(){var t,e;Ru(this,Pi)._--,L(this,Pi)===0&&((t=L(this,pa))==null||t.call(this),ge(this,pa,void 0),(e=L(this,ma))==null||e.call(this),ge(this,ma,void 0))}isFetching(t){return L(this,gt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return L(this,$i).findAll({...t,status:"pending"}).length}getQueryData(t){var e;return(e=L(this,gt).find({queryKey:t}))==null?void 0:e.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);return e!==void 0?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=L(this,gt).find({queryKey:t}),o=r==null?void 0:r.state.data,i=QC(e,o);if(typeof i>"u")return;const s=this.defaultQueryOptions({queryKey:t});return L(this,gt).build(this,s).setData(i,{...n,manual:!0})}setQueriesData(t,e,n){return Vt.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var e;return(e=L(this,gt).find({queryKey:t}))==null?void 0:e.state}removeQueries(t){const e=L(this,gt);Vt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=L(this,gt),r={type:"active",...t};return Vt.batch(()=>(n.findAll(t).forEach(o=>{o.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=Vt.batch(()=>L(this,gt).findAll(t).map(o=>o.cancel(n)));return Promise.all(r).then(Yn).catch(Yn)}invalidateQueries(t={},e={}){return Vt.batch(()=>{if(L(this,gt).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=Vt.batch(()=>L(this,gt).findAll(t).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(Yn)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Yn)}fetchQuery(t){const e=this.defaultQueryOptions(t);typeof e.retry>"u"&&(e.retry=!1);const n=L(this,gt).build(this,e);return n.isStaleByTime(e.staleTime)?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Yn).catch(Yn)}fetchInfiniteQuery(t){return t.behavior=pE(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Yn).catch(Yn)}resumePausedMutations(){return L(this,$i).resumePausedMutations()}getQueryCache(){return L(this,gt)}getMutationCache(){return L(this,$i)}getDefaultOptions(){return L(this,Ti)}setDefaultOptions(t){ge(this,Ti,t)}setQueryDefaults(t,e){L(this,fa).set(Ac(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...L(this,fa).values()];let n={};return e.forEach(r=>{Ic(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){L(this,ha).set(Ac(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...L(this,ha).values()];let n={};return e.forEach(r=>{Ic(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const e={...L(this,Ti).queries,...(t==null?void 0:t.queryKey)&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=xm(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.throwOnError>"u"&&(e.throwOnError=!!e.suspense),typeof e.networkMode>"u"&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...L(this,Ti).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){L(this,gt).clear(),L(this,$i).clear()}},gt=new WeakMap,$i=new WeakMap,Ti=new WeakMap,fa=new WeakMap,ha=new WeakMap,Pi=new WeakMap,pa=new WeakMap,ma=new WeakMap,U2),wE=Q.createContext(void 0),vE=({client:t,children:e})=>(Q.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),Q.createElement(wE.Provider,{value:t},e));Em.type="coinbaseWallet";function Em(t){let n,r;return o=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:Em.type,async connect({chainId:i}={}){try{const s=await this.getProvider(),a=(await s.request({method:"eth_requestAccounts"})).map(c=>er(c));s.on("accountsChanged",this.onAccountsChanged),s.on("chainChanged",this.onChainChanged),s.on("disconnect",this.onDisconnect.bind(this));let l=await this.getChainId();if(i&&l!==i){const c=await this.switchChain({chainId:i}).catch(u=>{if(u.code===dt.code)throw u;return{id:l}});l=(c==null?void 0:c.id)??l}return{accounts:a,chainId:l}}catch(s){throw/(user closed modal|accounts received is empty|user denied account)/i.test(s.message)?new dt(s):s}},async disconnect(){const i=await this.getProvider();i.removeListener("accountsChanged",this.onAccountsChanged),i.removeListener("chainChanged",this.onChainChanged),i.removeListener("disconnect",this.onDisconnect.bind(this)),i.disconnect(),i.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(s=>er(s))},async getChainId(){const s=await(await this.getProvider()).request({method:"eth_chainId"});return $r(s)},async getProvider(){var i;if(!r){const{CoinbaseWalletSDK:s}=await Sc(()=>import("./index-GeFYJw5R.js").then(h=>h.i),__vite__mapDeps([0,1]),import.meta.url);n=new s({reloadOnDisconnect:!1,...t});const a=(i=n.walletExtension)==null?void 0:i.getChainId(),l=o.chains.find(h=>t.chainId?h.id===t.chainId:h.id===a)||o.chains[0],c=t.chainId||(l==null?void 0:l.id),u=t.jsonRpcUrl||(l==null?void 0:l.rpcUrls.default.http[0]);r=n.makeWeb3Provider(u,c)}return r},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:i}){var c,u;const s=o.chains.find(h=>h.id===i);if(!s)throw new yn(new Ra);const a=await this.getProvider(),l=at(s.id);try{return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:l}]}),s}catch(h){if(h.code===4902)try{return await a.request({method:"wallet_addEthereumChain",params:[{chainId:l,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:[((c=s.rpcUrls.default)==null?void 0:c.http[0])??""],blockExplorerUrls:[(u=s.blockExplorers)==null?void 0:u.default.url]}]}),s}catch(p){throw new dt(p)}throw new yn(h)}},onAccountsChanged(i){i.length===0?o.emitter.emit("disconnect"):o.emitter.emit("change",{accounts:i.map(s=>er(s))})},onChainChanged(i){const s=$r(i);o.emitter.emit("change",{chainId:s})},async onDisconnect(i){o.emitter.emit("disconnect");const s=await this.getProvider();s.removeListener("accountsChanged",this.onAccountsChanged),s.removeListener("chainChanged",this.onChainChanged),s.removeListener("disconnect",this.onDisconnect.bind(this))}})}_m.type="walletConnect";function _m(t){const e=t.isNewChainsStale??!0;let n,r;const o="eip155";return i=>({id:"walletConnect",name:"WalletConnect",type:_m.type,async setup(){const s=await this.getProvider().catch(()=>null);s&&(s.on("connect",this.onConnect.bind(this)),s.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:s,...a}={}){var l,c;try{const u=await this.getProvider();if(!u)throw new Io;u.on("display_uri",this.onDisplayUri);let h=s;if(!h){const C=await((l=i.storage)==null?void 0:l.getItem("state"))??{};i.chains.some(g=>g.id===C.chainId)?h=C.chainId:h=(c=i.chains[0])==null?void 0:c.id}if(!h)throw new Error("No chains found on connector.");const p=await this.isChainsStale();if(u.session&&p&&await u.disconnect(),!u.session||p){const C=i.chains.filter(b=>b.id!==h).map(b=>b.id);await u.connect({optionalChains:[h,...C],..."pairingTopic"in a?{pairingTopic:a.pairingTopic}:{}}),this.setRequestedChainsIds(i.chains.map(b=>b.id))}const m=(await u.enable()).map(C=>er(C)),x=await this.getChainId();return u.removeListener("display_uri",this.onDisplayUri),u.removeListener("connect",this.onConnect.bind(this)),u.on("accountsChanged",this.onAccountsChanged.bind(this)),u.on("chainChanged",this.onChainChanged),u.on("disconnect",this.onDisconnect.bind(this)),u.on("session_delete",this.onSessionDelete.bind(this)),{accounts:m,chainId:x}}catch(u){throw/(user rejected|connection request reset)/i.test(u==null?void 0:u.message)?new dt(u):u}},async disconnect(){const s=await this.getProvider();try{await(s==null?void 0:s.disconnect())}catch(a){if(!/No matching key/i.test(a.message))throw a}finally{s==null||s.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),s==null||s.removeListener("chainChanged",this.onChainChanged),s==null||s.removeListener("disconnect",this.onDisconnect.bind(this)),s==null||s.removeListener("session_delete",this.onSessionDelete.bind(this)),s==null||s.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(a=>er(a))},async getProvider({chainId:s}={}){var l;async function a(){const c=i.chains.map(h=>h.id);if(!c.length)return;const{EthereumProvider:u}=await Sc(()=>import("./index.es-BuTLTe-7.js"),__vite__mapDeps([2,1]),import.meta.url);return await u.init({...t,disableProviderPing:!0,optionalChains:c,projectId:t.projectId,rpcMap:Object.fromEntries(i.chains.map(h=>[h.id,h.rpcUrls.default.http[0]])),showQrModal:t.showQrModal??!0})}return n||(r||(r=a()),n=await r,n==null||n.events.setMaxListeners(1/0)),s&&await((l=this.switchChain)==null?void 0:l.call(this,{chainId:s})),n},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[s,a]=await Promise.all([this.getAccounts(),this.getProvider()]);return s.length?await this.isChainsStale()&&a.session?(await a.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({chainId:s}){var l;const a=i.chains.find(c=>c.id===s);if(!a)throw new yn(new Ra);try{const c=await this.getProvider(),u=this.getNamespaceChainsIds(),h=this.getNamespaceMethods();if(!u.includes(s)&&h.includes("wallet_addEthereumChain")){await c.request({method:"wallet_addEthereumChain",params:[{chainId:at(a.id),blockExplorerUrls:[(l=a.blockExplorers)==null?void 0:l.default.url],chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[...a.rpcUrls.default.http]}]});const m=await this.getRequestedChainsIds();this.setRequestedChainsIds([...m,s])}return await c.request({method:"wallet_switchEthereumChain",params:[{chainId:at(s)}]}),a}catch(c){const u=typeof c=="string"?c:c==null?void 0:c.message;throw/user rejected request/i.test(u)?new dt(c):new yn(c)}},onAccountsChanged(s){s.length===0?this.onDisconnect():i.emitter.emit("change",{accounts:s.map(a=>er(a))})},onChainChanged(s){const a=$r(s);i.emitter.emit("change",{chainId:a})},async onConnect(s){const a=$r(s.chainId),l=await this.getAccounts();i.emitter.emit("connect",{accounts:l,chainId:a})},async onDisconnect(s){this.setRequestedChainsIds([]),i.emitter.emit("disconnect");const a=await this.getProvider();a.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),a.removeListener("chainChanged",this.onChainChanged),a.removeListener("disconnect",this.onDisconnect.bind(this)),a.removeListener("session_delete",this.onSessionDelete.bind(this)),a.on("connect",this.onConnect.bind(this))},onDisplayUri(s){i.emitter.emit("message",{type:"display_uri",data:s})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var a,l,c;return n?((c=(l=(a=n.session)==null?void 0:a.namespaces[o])==null?void 0:l.chains)==null?void 0:c.map(u=>parseInt(u.split(":")[1]||"")))??[]:[]},getNamespaceMethods(){var a,l;return n?((l=(a=n.session)==null?void 0:a.namespaces[o])==null?void 0:l.methods)??[]:[]},async getRequestedChainsIds(){var s;return await((s=i.storage)==null?void 0:s.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!e)return!1;const a=i.chains.map(u=>u.id),l=this.getNamespaceChainsIds();if(l.length&&!l.some(u=>a.includes(u)))return!1;const c=await this.getRequestedChainsIds();return!a.every(u=>c.includes(u))},async setRequestedChainsIds(s){var a;await((a=i.storage)==null?void 0:a.setItem(this.requestedChainsStorageKey,s))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}const re={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},c5={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"],GET_CHAIN_ID:"eth_chainId"};var Oe;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const i={};for(const s of o)i[s]=s;return i},t.getValidEnumValues=o=>{const i=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of i)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},t.find=(o,i)=>{for(const s of o)if(i(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Oe||(Oe={}));var Fp;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Fp||(Fp={}));const ee=Oe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Si=t=>{switch(typeof t){case"undefined":return ee.undefined;case"string":return ee.string;case"number":return isNaN(t)?ee.nan:ee.number;case"boolean":return ee.boolean;case"function":return ee.function;case"bigint":return ee.bigint;case"symbol":return ee.symbol;case"object":return Array.isArray(t)?ee.array:t===null?ee.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?ee.promise:typeof Map<"u"&&t instanceof Map?ee.map:typeof Set<"u"&&t instanceof Set?ee.set:typeof Date<"u"&&t instanceof Date?ee.date:ee.object;default:return ee.unknown}},Z=Oe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),yE=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class ir extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(const s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Oe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}ir.create=t=>new ir(t);const kc=(t,e)=>{let n;switch(t.code){case Z.invalid_type:t.received===ee.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case Z.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Oe.jsonStringifyReplacer)}`;break;case Z.unrecognized_keys:n=`Unrecognized key(s) in object: ${Oe.joinValues(t.keys,", ")}`;break;case Z.invalid_union:n="Invalid input";break;case Z.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Oe.joinValues(t.options)}`;break;case Z.invalid_enum_value:n=`Invalid enum value. Expected ${Oe.joinValues(t.options)}, received '${t.received}'`;break;case Z.invalid_arguments:n="Invalid function arguments";break;case Z.invalid_return_type:n="Invalid function return type";break;case Z.invalid_date:n="Invalid date";break;case Z.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Oe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case Z.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case Z.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case Z.custom:n="Invalid input";break;case Z.invalid_intersection_types:n="Intersection results could not be merged";break;case Z.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case Z.not_finite:n="Number must be finite";break;default:n=e.defaultError,Oe.assertNever(t)}return{message:n}};let u5=kc;function bE(t){u5=t}function Qd(){return u5}const Jd=t=>{const{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],s={...o,path:i};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(s,{data:e,defaultError:a}).message;return{...o,path:i,message:o.message||a}},xE=[];function ne(t,e){const n=Jd({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Qd(),kc].filter(r=>!!r)});t.common.issues.push(n)}class Lt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const o of n){if(o.status==="aborted")return ye;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return Lt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const o of n){const{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return ye;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}}const ye=Object.freeze({status:"aborted"}),d5=t=>({status:"dirty",value:t}),Kt=t=>({status:"valid",value:t}),Hp=t=>t.status==="aborted",Vp=t=>t.status==="dirty",$c=t=>t.status==="valid",Xd=t=>typeof Promise<"u"&&t instanceof Promise;var fe;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(fe||(fe={}));class Tr{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Fw=(t,e)=>{if($c(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new ir(t.common.issues);return this._error=n,this._error}}};function Ee(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:o}}class _e{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Si(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Si(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Lt,ctx:{common:e.parent.common,data:e.data,parsedType:Si(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Xd(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const o={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Si(e)},i=this._parseSync({data:e,path:o.path,parent:o});return Fw(o,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Si(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Xd(o)?o:Promise.resolve(o));return Fw(r,i)}refine(e,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{const s=e(o),a=()=>i.addIssue({code:Z.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new lr({schema:this,typeName:pe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ni.create(this,this._def)}nullable(){return Xo.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return or.create(this,this._def)}promise(){return Ia.create(this,this._def)}or(e){return Nc.create([this,e],this._def)}and(e){return Mc.create(this,e,this._def)}transform(e){return new lr({...Ee(this._def),schema:this,typeName:pe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Bc({...Ee(this._def),innerType:this,defaultValue:n,typeName:pe.ZodDefault})}brand(){return new h5({typeName:pe.ZodBranded,type:this,...Ee(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new rf({...Ee(this._def),innerType:this,catchValue:n,typeName:pe.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return mu.create(this,e)}readonly(){return sf.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const CE=/^c[^\s-]{8,}$/i,EE=/^[a-z][a-z0-9]*$/,_E=/^[0-9A-HJKMNP-TV-Z]{26}$/,SE=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,RE=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,AE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let c0;const IE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,kE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,$E=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function TE(t,e){return!!((e==="v4"||!e)&&IE.test(t)||(e==="v6"||!e)&&kE.test(t))}class tr extends _e{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ee.string){const i=this._getOrReturnCtx(e);return ne(i,{code:Z.invalid_type,expected:ee.string,received:i.parsedType}),ye}const r=new Lt;let o;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?ne(o,{code:Z.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&ne(o,{code:Z.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")RE.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"email",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")c0||(c0=new RegExp(AE,"u")),c0.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"emoji",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")SE.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"uuid",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")CE.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"cuid",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")EE.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"cuid2",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")_E.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"ulid",code:Z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ne(o,{validation:"url",code:Z.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"regex",code:Z.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?$E(i).test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?TE(e.data,i.version)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"ip",code:Z.invalid_string,message:i.message}),r.dirty()):Oe.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:Z.invalid_string,...fe.errToObj(r)})}_addCheck(e){return new tr({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...fe.errToObj(e)})}url(e){return this._addCheck({kind:"url",...fe.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...fe.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...fe.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...fe.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...fe.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...fe.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...fe.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...fe.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...fe.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...fe.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...fe.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...fe.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...fe.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...fe.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...fe.errToObj(n)})}nonempty(e){return this.min(1,fe.errToObj(e))}trim(){return new tr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new tr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new tr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}tr.create=t=>{var e;return new tr({checks:[],typeName:pe.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Ee(t)})};function PE(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=parseInt(t.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return i%s/Math.pow(10,o)}class to extends _e{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ee.number){const i=this._getOrReturnCtx(e);return ne(i,{code:Z.invalid_type,expected:ee.number,received:i.parsedType}),ye}let r;const o=new Lt;for(const i of this._def.checks)i.kind==="int"?Oe.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?PE(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.not_finite,message:i.message}),o.dirty()):Oe.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,fe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,fe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,fe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,fe.toString(n))}setLimit(e,n,r,o){return new to({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:fe.toString(o)}]})}_addCheck(e){return new to({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:fe.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:fe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:fe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:fe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:fe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:fe.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:fe.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:fe.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:fe.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Oe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}to.create=t=>new to({checks:[],typeName:pe.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Ee(t)});class no extends _e{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==ee.bigint){const i=this._getOrReturnCtx(e);return ne(i,{code:Z.invalid_type,expected:ee.bigint,received:i.parsedType}),ye}let r;const o=new Lt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),ne(r,{code:Z.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Oe.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,fe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,fe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,fe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,fe.toString(n))}setLimit(e,n,r,o){return new no({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:fe.toString(o)}]})}_addCheck(e){return new no({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:fe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:fe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:fe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:fe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:fe.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}no.create=t=>{var e;return new no({checks:[],typeName:pe.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Ee(t)})};class Tc extends _e{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ee.boolean){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.boolean,received:r.parsedType}),ye}return Kt(e.data)}}Tc.create=t=>new Tc({typeName:pe.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Ee(t)});class Qo extends _e{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ee.date){const i=this._getOrReturnCtx(e);return ne(i,{code:Z.invalid_type,expected:ee.date,received:i.parsedType}),ye}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return ne(i,{code:Z.invalid_date}),ye}const r=new Lt;let o;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:Z.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Oe.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Qo({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:fe.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:fe.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Qo.create=t=>new Qo({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:pe.ZodDate,...Ee(t)});class ef extends _e{_parse(e){if(this._getType(e)!==ee.symbol){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.symbol,received:r.parsedType}),ye}return Kt(e.data)}}ef.create=t=>new ef({typeName:pe.ZodSymbol,...Ee(t)});class Pc extends _e{_parse(e){if(this._getType(e)!==ee.undefined){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.undefined,received:r.parsedType}),ye}return Kt(e.data)}}Pc.create=t=>new Pc({typeName:pe.ZodUndefined,...Ee(t)});class Oc extends _e{_parse(e){if(this._getType(e)!==ee.null){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.null,received:r.parsedType}),ye}return Kt(e.data)}}Oc.create=t=>new Oc({typeName:pe.ZodNull,...Ee(t)});class Aa extends _e{constructor(){super(...arguments),this._any=!0}_parse(e){return Kt(e.data)}}Aa.create=t=>new Aa({typeName:pe.ZodAny,...Ee(t)});class Wo extends _e{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Kt(e.data)}}Wo.create=t=>new Wo({typeName:pe.ZodUnknown,...Ee(t)});class li extends _e{_parse(e){const n=this._getOrReturnCtx(e);return ne(n,{code:Z.invalid_type,expected:ee.never,received:n.parsedType}),ye}}li.create=t=>new li({typeName:pe.ZodNever,...Ee(t)});class tf extends _e{_parse(e){if(this._getType(e)!==ee.undefined){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.void,received:r.parsedType}),ye}return Kt(e.data)}}tf.create=t=>new tf({typeName:pe.ZodVoid,...Ee(t)});class or extends _e{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==ee.array)return ne(n,{code:Z.invalid_type,expected:ee.array,received:n.parsedType}),ye;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(ne(n,{code:s?Z.too_big:Z.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ne(n,{code:Z.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ne(n,{code:Z.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new Tr(n,s,n.path,a)))).then(s=>Lt.mergeArray(r,s));const i=[...n.data].map((s,a)=>o.type._parseSync(new Tr(n,s,n.path,a)));return Lt.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new or({...this._def,minLength:{value:e,message:fe.toString(n)}})}max(e,n){return new or({...this._def,maxLength:{value:e,message:fe.toString(n)}})}length(e,n){return new or({...this._def,exactLength:{value:e,message:fe.toString(n)}})}nonempty(e){return this.min(1,e)}}or.create=(t,e)=>new or({type:t,minLength:null,maxLength:null,exactLength:null,typeName:pe.ZodArray,...Ee(e)});function Os(t){if(t instanceof Qe){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=ni.create(Os(r))}return new Qe({...t._def,shape:()=>e})}else return t instanceof or?new or({...t._def,type:Os(t.element)}):t instanceof ni?ni.create(Os(t.unwrap())):t instanceof Xo?Xo.create(Os(t.unwrap())):t instanceof Pr?Pr.create(t.items.map(e=>Os(e))):t}class Qe extends _e{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Oe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==ee.object){const c=this._getOrReturnCtx(e);return ne(c,{code:Z.invalid_type,expected:ee.object,received:c.parsedType}),ye}const{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof li&&this._def.unknownKeys==="strip"))for(const c in o.data)s.includes(c)||a.push(c);const l=[];for(const c of s){const u=i[c],h=o.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Tr(o,h,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof li){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:o.data[u]}});else if(c==="strict")a.length>0&&(ne(o,{code:Z.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const h=o.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Tr(o,h,o.path,u)),alwaysSet:u in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const h=await u.key;c.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>Lt.mergeObjectSync(r,c)):Lt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return fe.errToObj,new Qe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var o,i,s,a;const l=(s=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=fe.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new Qe({...this._def,unknownKeys:"strip"})}passthrough(){return new Qe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Qe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Qe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:pe.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Qe({...this._def,catchall:e})}pick(e){const n={};return Oe.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Qe({...this._def,shape:()=>n})}omit(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new Qe({...this._def,shape:()=>n})}deepPartial(){return Os(this)}partial(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}),new Qe({...this._def,shape:()=>n})}required(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof ni;)i=i._def.innerType;n[r]=i}}),new Qe({...this._def,shape:()=>n})}keyof(){return f5(Oe.objectKeys(this.shape))}}Qe.create=(t,e)=>new Qe({shape:()=>t,unknownKeys:"strip",catchall:li.create(),typeName:pe.ZodObject,...Ee(e)});Qe.strictCreate=(t,e)=>new Qe({shape:()=>t,unknownKeys:"strict",catchall:li.create(),typeName:pe.ZodObject,...Ee(e)});Qe.lazycreate=(t,e)=>new Qe({shape:t,unknownKeys:"strip",catchall:li.create(),typeName:pe.ZodObject,...Ee(e)});class Nc extends _e{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=i.map(a=>new ir(a.ctx.common.issues));return ne(n,{code:Z.invalid_union,unionErrors:s}),ye}if(n.common.async)return Promise.all(r.map(async i=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i;const s=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=s.map(l=>new ir(l));return ne(n,{code:Z.invalid_union,unionErrors:a}),ye}}get options(){return this._def.options}}Nc.create=(t,e)=>new Nc({options:t,typeName:pe.ZodUnion,...Ee(e)});const gd=t=>t instanceof jc?gd(t.schema):t instanceof lr?gd(t.innerType()):t instanceof Dc?[t.value]:t instanceof ro?t.options:t instanceof Uc?Object.keys(t.enum):t instanceof Bc?gd(t._def.innerType):t instanceof Pc?[void 0]:t instanceof Oc?[null]:null;class nh extends _e{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ee.object)return ne(n,{code:Z.invalid_type,expected:ee.object,received:n.parsedType}),ye;const r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(ne(n,{code:Z.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),ye)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const o=new Map;for(const i of n){const s=gd(i.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new nh({typeName:pe.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Ee(r)})}}function Zp(t,e){const n=Si(t),r=Si(e);if(t===e)return{valid:!0,data:t};if(n===ee.object&&r===ee.object){const o=Oe.objectKeys(e),i=Oe.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(const a of i){const l=Zp(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===ee.array&&r===ee.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let i=0;i<t.length;i++){const s=t[i],a=e[i],l=Zp(s,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===ee.date&&r===ee.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Mc extends _e{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(Hp(i)||Hp(s))return ye;const a=Zp(i.value,s.value);return a.valid?((Vp(i)||Vp(s))&&n.dirty(),{status:n.value,value:a.data}):(ne(r,{code:Z.invalid_intersection_types}),ye)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Mc.create=(t,e,n)=>new Mc({left:t,right:e,typeName:pe.ZodIntersection,...Ee(n)});class Pr extends _e{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ee.array)return ne(r,{code:Z.invalid_type,expected:ee.array,received:r.parsedType}),ye;if(r.data.length<this._def.items.length)return ne(r,{code:Z.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ye;!this._def.rest&&r.data.length>this._def.items.length&&(ne(r,{code:Z.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Tr(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>Lt.mergeArray(n,s)):Lt.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Pr({...this._def,rest:e})}}Pr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Pr({items:t,typeName:pe.ZodTuple,rest:null,...Ee(e)})};class Lc extends _e{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ee.object)return ne(r,{code:Z.invalid_type,expected:ee.object,received:r.parsedType}),ye;const o=[],i=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:i._parse(new Tr(r,a,r.path,a)),value:s._parse(new Tr(r,r.data[a],r.path,a))});return r.common.async?Lt.mergeObjectAsync(n,o):Lt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof _e?new Lc({keyType:e,valueType:n,typeName:pe.ZodRecord,...Ee(r)}):new Lc({keyType:tr.create(),valueType:e,typeName:pe.ZodRecord,...Ee(n)})}}class nf extends _e{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ee.map)return ne(r,{code:Z.invalid_type,expected:ee.map,received:r.parsedType}),ye;const o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:o._parse(new Tr(r,a,r.path,[c,"key"])),value:i._parse(new Tr(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return ye;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return ye;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}nf.create=(t,e,n)=>new nf({valueType:e,keyType:t,typeName:pe.ZodMap,...Ee(n)});class Jo extends _e{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ee.set)return ne(r,{code:Z.invalid_type,expected:ee.set,received:r.parsedType}),ye;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(ne(r,{code:Z.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(ne(r,{code:Z.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const i=this._def.valueType;function s(l){const c=new Set;for(const u of l){if(u.status==="aborted")return ye;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>i._parse(new Tr(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new Jo({...this._def,minSize:{value:e,message:fe.toString(n)}})}max(e,n){return new Jo({...this._def,maxSize:{value:e,message:fe.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Jo.create=(t,e)=>new Jo({valueType:t,minSize:null,maxSize:null,typeName:pe.ZodSet,...Ee(e)});class na extends _e{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ee.function)return ne(n,{code:Z.invalid_type,expected:ee.function,received:n.parsedType}),ye;function r(a,l){return Jd({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Qd(),kc].filter(c=>!!c),issueData:{code:Z.invalid_arguments,argumentsError:l}})}function o(a,l){return Jd({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Qd(),kc].filter(c=>!!c),issueData:{code:Z.invalid_return_type,returnTypeError:l}})}const i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Ia){const a=this;return Kt(async function(...l){const c=new ir([]),u=await a._def.args.parseAsync(l,i).catch(m=>{throw c.addIssue(r(l,m)),c}),h=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(h,i).catch(m=>{throw c.addIssue(o(h,m)),c})})}else{const a=this;return Kt(function(...l){const c=a._def.args.safeParse(l,i);if(!c.success)throw new ir([r(l,c.error)]);const u=Reflect.apply(s,this,c.data),h=a._def.returns.safeParse(u,i);if(!h.success)throw new ir([o(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new na({...this._def,args:Pr.create(e).rest(Wo.create())})}returns(e){return new na({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new na({args:e||Pr.create([]).rest(Wo.create()),returns:n||Wo.create(),typeName:pe.ZodFunction,...Ee(r)})}}class jc extends _e{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}jc.create=(t,e)=>new jc({getter:t,typeName:pe.ZodLazy,...Ee(e)});class Dc extends _e{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return ne(n,{received:n.data,code:Z.invalid_literal,expected:this._def.value}),ye}return{status:"valid",value:e.data}}get value(){return this._def.value}}Dc.create=(t,e)=>new Dc({value:t,typeName:pe.ZodLiteral,...Ee(e)});function f5(t,e){return new ro({values:t,typeName:pe.ZodEnum,...Ee(e)})}class ro extends _e{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return ne(n,{expected:Oe.joinValues(r),received:n.parsedType,code:Z.invalid_type}),ye}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return ne(n,{received:n.data,code:Z.invalid_enum_value,options:r}),ye}return Kt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return ro.create(e)}exclude(e){return ro.create(this.options.filter(n=>!e.includes(n)))}}ro.create=f5;class Uc extends _e{_parse(e){const n=Oe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==ee.string&&r.parsedType!==ee.number){const o=Oe.objectValues(n);return ne(r,{expected:Oe.joinValues(o),received:r.parsedType,code:Z.invalid_type}),ye}if(n.indexOf(e.data)===-1){const o=Oe.objectValues(n);return ne(r,{received:r.data,code:Z.invalid_enum_value,options:o}),ye}return Kt(e.data)}get enum(){return this._def.values}}Uc.create=(t,e)=>new Uc({values:t,typeName:pe.ZodNativeEnum,...Ee(e)});class Ia extends _e{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ee.promise&&n.common.async===!1)return ne(n,{code:Z.invalid_type,expected:ee.promise,received:n.parsedType}),ye;const r=n.parsedType===ee.promise?n.data:Promise.resolve(n.data);return Kt(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Ia.create=(t,e)=>new Ia({type:t,typeName:pe.ZodPromise,...Ee(e)});class lr extends _e{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===pe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{ne(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const s=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const l=o.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?ye:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?ye:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!$c(s))return s;const a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>$c(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):s);Oe.assertNever(o)}}lr.create=(t,e,n)=>new lr({schema:t,typeName:pe.ZodEffects,effect:e,...Ee(n)});lr.createWithPreprocess=(t,e,n)=>new lr({schema:e,effect:{type:"preprocess",transform:t},typeName:pe.ZodEffects,...Ee(n)});class ni extends _e{_parse(e){return this._getType(e)===ee.undefined?Kt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ni.create=(t,e)=>new ni({innerType:t,typeName:pe.ZodOptional,...Ee(e)});class Xo extends _e{_parse(e){return this._getType(e)===ee.null?Kt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Xo.create=(t,e)=>new Xo({innerType:t,typeName:pe.ZodNullable,...Ee(e)});class Bc extends _e{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===ee.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Bc.create=(t,e)=>new Bc({innerType:t,typeName:pe.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Ee(e)});class rf extends _e{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Xd(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ir(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ir(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}rf.create=(t,e)=>new rf({innerType:t,typeName:pe.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Ee(e)});class of extends _e{_parse(e){if(this._getType(e)!==ee.nan){const r=this._getOrReturnCtx(e);return ne(r,{code:Z.invalid_type,expected:ee.nan,received:r.parsedType}),ye}return{status:"valid",value:e.data}}}of.create=t=>new of({typeName:pe.ZodNaN,...Ee(t)});const OE=Symbol("zod_brand");class h5 extends _e{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class mu extends _e{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?ye:i.status==="dirty"?(n.dirty(),d5(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?ye:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new mu({in:e,out:n,typeName:pe.ZodPipeline})}}class sf extends _e{_parse(e){const n=this._def.innerType._parse(e);return $c(n)&&(n.value=Object.freeze(n.value)),n}}sf.create=(t,e)=>new sf({innerType:t,typeName:pe.ZodReadonly,...Ee(e)});const p5=(t,e={},n)=>t?Aa.create().superRefine((r,o)=>{var i,s;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(s=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&s!==void 0?s:!0,c=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...c,fatal:l})}}):Aa.create(),NE={object:Qe.lazycreate};var pe;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(pe||(pe={}));const ME=(t,e={message:`Input not instance of ${t.name}`})=>p5(n=>n instanceof t,e),m5=tr.create,g5=to.create,LE=of.create,jE=no.create,w5=Tc.create,DE=Qo.create,UE=ef.create,BE=Pc.create,zE=Oc.create,WE=Aa.create,FE=Wo.create,HE=li.create,VE=tf.create,ZE=or.create,GE=Qe.create,qE=Qe.strictCreate,KE=Nc.create,YE=nh.create,QE=Mc.create,JE=Pr.create,XE=Lc.create,e_=nf.create,t_=Jo.create,n_=na.create,r_=jc.create,i_=Dc.create,o_=ro.create,s_=Uc.create,a_=Ia.create,Hw=lr.create,l_=ni.create,c_=Xo.create,u_=lr.createWithPreprocess,d_=mu.create,f_=()=>m5().optional(),h_=()=>g5().optional(),p_=()=>w5().optional(),m_={string:t=>tr.create({...t,coerce:!0}),number:t=>to.create({...t,coerce:!0}),boolean:t=>Tc.create({...t,coerce:!0}),bigint:t=>no.create({...t,coerce:!0}),date:t=>Qo.create({...t,coerce:!0})},g_=ye;var $=Object.freeze({__proto__:null,defaultErrorMap:kc,setErrorMap:bE,getErrorMap:Qd,makeIssue:Jd,EMPTY_PATH:xE,addIssueToContext:ne,ParseStatus:Lt,INVALID:ye,DIRTY:d5,OK:Kt,isAborted:Hp,isDirty:Vp,isValid:$c,isAsync:Xd,get util(){return Oe},get objectUtil(){return Fp},ZodParsedType:ee,getParsedType:Si,ZodType:_e,ZodString:tr,ZodNumber:to,ZodBigInt:no,ZodBoolean:Tc,ZodDate:Qo,ZodSymbol:ef,ZodUndefined:Pc,ZodNull:Oc,ZodAny:Aa,ZodUnknown:Wo,ZodNever:li,ZodVoid:tf,ZodArray:or,ZodObject:Qe,ZodUnion:Nc,ZodDiscriminatedUnion:nh,ZodIntersection:Mc,ZodTuple:Pr,ZodRecord:Lc,ZodMap:nf,ZodSet:Jo,ZodFunction:na,ZodLazy:jc,ZodLiteral:Dc,ZodEnum:ro,ZodNativeEnum:Uc,ZodPromise:Ia,ZodEffects:lr,ZodTransformer:lr,ZodOptional:ni,ZodNullable:Xo,ZodDefault:Bc,ZodCatch:rf,ZodNaN:of,BRAND:OE,ZodBranded:h5,ZodPipeline:mu,ZodReadonly:sf,custom:p5,Schema:_e,ZodSchema:_e,late:NE,get ZodFirstPartyTypeKind(){return pe},coerce:m_,any:WE,array:ZE,bigint:jE,boolean:w5,date:DE,discriminatedUnion:YE,effect:Hw,enum:o_,function:n_,instanceof:ME,intersection:QE,lazy:r_,literal:i_,map:e_,nan:LE,nativeEnum:s_,never:HE,null:zE,nullable:c_,number:g5,object:GE,oboolean:p_,onumber:h_,optional:l_,ostring:f_,pipeline:d_,preprocess:u_,promise:a_,record:XE,set:t_,strictObject:qE,string:m5,symbol:UE,transformer:Hw,tuple:JE,undefined:BE,union:KE,unknown:FE,void:VE,NEVER:g_,ZodIssueCode:Z,quotelessJson:yE,ZodError:ir});const Xt=$.object({message:$.string()});function be(t){return $.literal(re[t])}$.object({accessList:$.array($.string()),blockHash:$.string().nullable(),blockNumber:$.string().nullable(),chainId:$.string(),from:$.string(),gas:$.string(),hash:$.string(),input:$.string().nullable(),maxFeePerGas:$.string(),maxPriorityFeePerGas:$.string(),nonce:$.string(),r:$.string(),s:$.string(),to:$.string(),transactionIndex:$.string().nullable(),type:$.string(),v:$.string(),value:$.string()});const w_=$.object({chainId:$.number()}),v_=$.object({email:$.string().email()}),y_=$.object({otp:$.string()}),b_=$.object({chainId:$.optional($.number())}),x_=$.object({email:$.string().email()}),C_=$.object({otp:$.string()}),E_=$.object({otp:$.string()}),__=$.object({themeMode:$.optional($.enum(["light","dark"])),themeVariables:$.optional($.record($.string(),$.string().or($.number())))}),S_=$.object({metadata:$.object({name:$.string(),description:$.string(),url:$.string(),icons:$.array($.string())}).optional(),sdkVersion:$.string(),projectId:$.string()}),R_=$.object({action:$.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),A_=$.object({email:$.string().email(),address:$.string(),chainId:$.number()}),I_=$.object({isConnected:$.boolean()}),k_=$.object({chainId:$.number()}),$_=$.object({chainId:$.number()}),T_=$.object({newEmail:$.string().email()}),P_=$.any(),O_=$.object({method:$.literal("personal_sign"),params:$.array($.any())}),N_=$.object({method:$.literal("eth_sendTransaction"),params:$.array($.any())}),M_=$.object({method:$.literal("eth_accounts")}),L_=$.object({method:$.literal("eth_getBalance"),params:$.array($.any())}),j_=$.object({method:$.literal("eth_estimateGas"),params:$.array($.any())}),D_=$.object({method:$.literal("eth_gasPrice")}),U_=$.object({method:$.literal("eth_signTypedData_v4"),params:$.array($.any())}),B_=$.object({method:$.literal("eth_getTransactionByHash"),params:$.array($.any())}),z_=$.object({method:$.literal("eth_blockNumber")}),W_=$.object({method:$.literal("eth_chainId")}),Vw=$.object({token:$.string()}),Ku={appEvent:$.object({type:be("APP_SWITCH_NETWORK"),payload:w_}).or($.object({type:be("APP_CONNECT_EMAIL"),payload:v_})).or($.object({type:be("APP_CONNECT_DEVICE")})).or($.object({type:be("APP_CONNECT_OTP"),payload:y_})).or($.object({type:be("APP_GET_USER"),payload:$.optional(b_)})).or($.object({type:be("APP_SIGN_OUT")})).or($.object({type:be("APP_IS_CONNECTED"),payload:$.optional(Vw)})).or($.object({type:be("APP_GET_CHAIN_ID")})).or($.object({type:be("APP_RPC_REQUEST"),payload:O_.or(N_).or(M_).or(L_).or(j_).or(D_).or(U_).or(z_).or(W_).or(B_)})).or($.object({type:be("APP_UPDATE_EMAIL"),payload:x_})).or($.object({type:be("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:C_})).or($.object({type:be("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:E_})).or($.object({type:be("APP_SYNC_THEME"),payload:__})).or($.object({type:be("APP_SYNC_DAPP_DATA"),payload:S_})),frameEvent:$.object({type:be("FRAME_SWITCH_NETWORK_ERROR"),payload:Xt}).or($.object({type:be("FRAME_SWITCH_NETWORK_SUCCESS"),payload:$_})).or($.object({type:be("FRAME_CONNECT_EMAIL_ERROR"),payload:Xt})).or($.object({type:be("FRAME_CONNECT_EMAIL_SUCCESS"),payload:R_})).or($.object({type:be("FRAME_CONNECT_OTP_ERROR"),payload:Xt})).or($.object({type:be("FRAME_CONNECT_OTP_SUCCESS")})).or($.object({type:be("FRAME_CONNECT_DEVICE_ERROR"),payload:Xt})).or($.object({type:be("FRAME_CONNECT_DEVICE_SUCCESS")})).or($.object({type:be("FRAME_GET_USER_ERROR"),payload:Xt})).or($.object({type:be("FRAME_GET_USER_SUCCESS"),payload:A_})).or($.object({type:be("FRAME_SIGN_OUT_ERROR"),payload:Xt})).or($.object({type:be("FRAME_SIGN_OUT_SUCCESS")})).or($.object({type:be("FRAME_IS_CONNECTED_ERROR"),payload:Xt})).or($.object({type:be("FRAME_IS_CONNECTED_SUCCESS"),payload:I_})).or($.object({type:be("FRAME_GET_CHAIN_ID_ERROR"),payload:Xt})).or($.object({type:be("FRAME_GET_CHAIN_ID_SUCCESS"),payload:k_})).or($.object({type:be("FRAME_RPC_REQUEST_ERROR"),payload:Xt})).or($.object({type:be("FRAME_RPC_REQUEST_SUCCESS"),payload:P_})).or($.object({type:be("FRAME_SESSION_UPDATE"),payload:Vw})).or($.object({type:be("FRAME_UPDATE_EMAIL_ERROR"),payload:Xt})).or($.object({type:be("FRAME_UPDATE_EMAIL_SUCCESS")})).or($.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Xt})).or($.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or($.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Xt})).or($.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:T_})).or($.object({type:be("FRAME_SYNC_THEME_ERROR"),payload:Xt})).or($.object({type:be("FRAME_SYNC_THEME_SUCCESS")})).or($.object({type:be("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Xt})).or($.object({type:be("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},fn={set(t,e){Zt.isClient&&localStorage.setItem(`${re.STORAGE_KEY}${t}`,e)},get(t){return Zt.isClient?localStorage.getItem(`${re.STORAGE_KEY}${t}`):null},delete(t){Zt.isClient&&localStorage.removeItem(`${re.STORAGE_KEY}${t}`)}},F_=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Yu=30*1e3,Zt={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return F_.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=fn.get(re.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Yu){const n=Math.ceil((Yu-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=fn.get(re.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Yu)return Math.ceil((Yu-e)/1e3)}return 0},checkIfRequestIsAllowed(t){var n;const e=(n=t==null?void 0:t.payload)==null?void 0:n.method;return c5.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class H_{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=Zt.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{Zt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(re.FRAME_EVENT_KEY)))return;const i=Ku.frameEvent.parse(o);r(i)})},onAppEvent:r=>{Zt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(re.APP_EVENT_KEY)))return;const i=Ku.appEvent.parse(o);r(i)})},postAppEvent:r=>{var o;if(Zt.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");Ku.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")}},postFrameEvent:r=>{if(Zt.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Ku.frameEvent.parse(r),parent.postMessage(r,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),n&&(this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),Zt.isClient)){const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${re.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}class V_{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new H_(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case re.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case re.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case re.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case re.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case re.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case re.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case re.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case re.FRAME_GET_USER_ERROR:return this.onConnectError(n);case re.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case re.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case re.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case re.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case re.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case re.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case re.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(n);case re.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case re.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case re.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case re.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);case re.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case re.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(n);case re.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case re.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(n);case re.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(n);case re.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(n);case re.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case re.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(n);case re.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case re.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(n);default:return null}})}getLoginEmailUsed(){return!!fn.get(re.EMAIL_LOGIN_USED_KEY)}getEmail(){return fn.get(re.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Zt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:re.APP_CONNECT_EMAIL,payload:e}),new Promise((n,r)=>{this.connectEmailResolver={resolve:n,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_IS_CONNECTED,payload:void 0}),new Promise((e,n)=>{this.isConnectedResolver={resolve:e,reject:n}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Zt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:re.APP_UPDATE_EMAIL,payload:e}),new Promise((n,r)=>{this.updateEmailResolver={resolve:n,reject:r}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((n,r)=>{this.updateEmailPrimaryOtpResolver={resolve:n,reject:r}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((n,r)=>{this.updateEmailSecondaryOtpResolver={resolve:n,reject:r}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_SYNC_THEME,payload:e}),new Promise((n,r)=>{this.syncThemeResolver={resolve:n,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_SYNC_DAPP_DATA,payload:e}),new Promise((n,r)=>{this.syncDappDataResolver={resolve:n,reject:r}})}async connect(e){const n=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_GET_USER,payload:{chainId:n}}),new Promise((r,o)=>{this.connectResolver={resolve:r,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:re.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,c5.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:re.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(re.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(re.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===re.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;e.payload.isConnected||this.deleteEmailLoginCache(),(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.switchChainResolver)==null||n.resolve(e.payload)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var n;(n=this.updateEmailResolver)==null||n.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var n;(n=this.updateEmailPrimaryOtpResolver)==null||n.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var r;const{newEmail:n}=e.payload;this.setEmailLoginSuccess(n),(r=this.updateEmailSecondaryOtpResolver)==null||r.resolve({newEmail:n})}onUpdateEmailSecondaryOtpError(e){var n;(n=this.updateEmailSecondaryOtpResolver)==null||n.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var n;(n=this.syncThemeResolver)==null||n.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var n;(n=this.syncDappDataResolver)==null||n.reject(e.payload.message)}setNewLastEmailLoginTime(){fn.set(re.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){fn.set(re.EMAIL,e),fn.set(re.EMAIL_LOGIN_USED_KEY,"true"),fn.delete(re.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){fn.delete(re.EMAIL_LOGIN_USED_KEY),fn.delete(re.EMAIL),fn.delete(re.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){fn.set(re.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(fn.get(re.LAST_USED_CHAIN_KEY))}}const xe={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"4.0.5"},Yr={ConnectorExplorerIds:{[xe.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[xe.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[xe.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[xe.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[xe.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[xe.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[xe.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[xe.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[xe.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[xe.INJECTED_CONNECTOR_ID]:"Browser Wallet",[xe.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[xe.COINBASE_CONNECTOR_ID]:"Coinbase",[xe.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[xe.LEDGER_CONNECTOR_ID]:"Ledger",[xe.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[xe.INJECTED_CONNECTOR_ID]:"INJECTED",[xe.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[xe.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[xe.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Ts={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${xe.EIP155}:${n}`]=r}),e}};function Z_(t){return e=>({id:xe.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(n={}){const r=await this.getProvider(),{address:o,chainId:i}=await r.connect({chainId:n.chainId});return{accounts:[o],account:o,chainId:i,chain:{id:i,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},async getAccounts(){const n=await this.getProvider(),{address:r}=await n.connect();return[r]},async getProvider(){return this.provider||(this.provider=new V_(t.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const n=await this.getProvider(),{chainId:r}=await n.getChainId();return r},async isAuthorized(){const n=await this.getProvider(),{isConnected:r}=await n.isConnected();return r},async switchChain({chainId:n}){try{const r=e.chains.find(i=>i.id===n);if(!r)throw new yn(new Error("chain not found on connector."));return await(await this.getProvider()).switchNetwork(n),e.emitter.emit("change",{chainId:$r(n)}),r}catch(r){throw r instanceof Error?new yn(r):r}},onAccountsChanged(n){n.length===0?this.onDisconnect():e.emitter.emit("change",{accounts:n.map(er)})},onChainChanged(n){const r=$r(n);e.emitter.emit("change",{chainId:r})},async onConnect(n){const r=$r(n.chainId),o=await this.getAccounts();e.emitter.emit("connect",{accounts:o,chainId:r})},async onDisconnect(n){await(await this.getProvider()).disconnect()}})}const G_=Symbol(),Zw=Object.getPrototypeOf,Gp=new WeakMap,q_=t=>t&&(Gp.has(t)?Gp.get(t):Zw(t)===Object.prototype||Zw(t)===Array.prototype),K_=t=>q_(t)&&t[G_]||null,Gw=(t,e=!0)=>{Gp.set(t,e)};var af={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const u0=t=>typeof t=="object"&&t!==null,Ci=new WeakMap,kl=new WeakSet,Y_=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>u0(c)&&!kl.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},o=new WeakMap,i=(c,u,h=r)=>{const p=o.get(c);if((p==null?void 0:p[0])===u)return p[1];const m=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return Gw(m,!0),o.set(c,[u,m]),Reflect.ownKeys(c).forEach(x=>{if(Object.getOwnPropertyDescriptor(m,x))return;const C=Reflect.get(c,x),b={value:C,enumerable:!0,configurable:!0};if(kl.has(C))Gw(C,!1);else if(C instanceof Promise)delete b.value,b.get=()=>h(C);else if(Ci.has(C)){const[g,w]=Ci.get(C);b.value=i(g,w(),h)}Object.defineProperty(m,x,b)}),Object.preventExtensions(m)},s=new WeakMap,a=[1,1],l=c=>{if(!u0(c))throw new Error("object required");const u=s.get(c);if(u)return u;let h=a[0];const p=new Set,m=(V,j=++a[0])=>{h!==j&&(h=j,p.forEach(W=>W(V,j)))};let x=a[1];const C=(V=++a[1])=>(x!==V&&!p.size&&(x=V,g.forEach(([j])=>{const W=j[1](V);W>h&&(h=W)})),h),b=V=>(j,W)=>{const ve=[...j];ve[1]=[V,...ve[1]],m(ve,W)},g=new Map,w=(V,j)=>{if((af?"production":void 0)!=="production"&&g.has(V))throw new Error("prop listener already exists");if(p.size){const W=j[3](b(V));g.set(V,[j,W])}else g.set(V,[j])},y=V=>{var j;const W=g.get(V);W&&(g.delete(V),(j=W[1])==null||j.call(W))},S=V=>(p.add(V),p.size===1&&g.forEach(([W,ve],Te)=>{if((af?"production":void 0)!=="production"&&ve)throw new Error("remove already exists");const le=W[3](b(Te));g.set(Te,[W,le])}),()=>{p.delete(V),p.size===0&&g.forEach(([W,ve],Te)=>{ve&&(ve(),g.set(Te,[W]))})}),A=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),P=e(A,{deleteProperty(V,j){const W=Reflect.get(V,j);y(j);const ve=Reflect.deleteProperty(V,j);return ve&&m(["delete",[j],W]),ve},set(V,j,W,ve){const Te=Reflect.has(V,j),le=Reflect.get(V,j,ve);if(Te&&(t(le,W)||s.has(W)&&t(le,s.get(W))))return!0;y(j),u0(W)&&(W=K_(W)||W);let X=W;if(W instanceof Promise)W.then(q=>{W.status="fulfilled",W.value=q,m(["resolve",[j],q])}).catch(q=>{W.status="rejected",W.reason=q,m(["reject",[j],q])});else{!Ci.has(W)&&n(W)&&(X=l(W));const q=!kl.has(X)&&Ci.get(X);q&&w(j,q)}return Reflect.set(V,j,X,ve),m(["set",[j],W,le]),!0}});s.set(c,P);const N=[A,C,i,S];return Ci.set(P,N),Reflect.ownKeys(c).forEach(V=>{const j=Object.getOwnPropertyDescriptor(c,V);"value"in j&&(P[V]=c[V],delete j.value,delete j.writable),Object.defineProperty(A,V,j)}),P})=>[l,Ci,kl,t,e,n,r,o,i,s,a],[Q_]=Y_();function Ut(t={}){return Q_(t)}function cr(t,e,n){const r=Ci.get(t);(af?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],s=r[3];let a=!1;const c=s(u=>{if(i.push(u),n){e(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(i.splice(0))}))});return a=!0,()=>{a=!1,c()}}function v5(t,e){const n=Ci.get(t);(af?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,o,i]=n;return i(r,o(),e)}function zc(t){return kl.add(t),t}function Wn(t,e,n,r){let o=t[e];return cr(t,()=>{const i=t[e];Object.is(o,i)||n(o=i)},r)}const d0="https://secure.walletconnect.com",J_=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],gn={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:d0,SECURE_SITE_DASHBOARD:`${d0}/dashboard`,SECURE_SITE_FAVICON:`${d0}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},oe={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return oe.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return oe.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=gn.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=gn.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+gn.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function o(){t(...r)}n&&clearTimeout(n),n=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(oe.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!oe.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e,n){window.open(t,e,n||"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,oe.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const o=Number(t);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e??""}`:`0.000 ${e??""}`},formatBalance2(t,e){var r;let n;if(t==="0")n="0";else if(typeof t=="string"){const o=Number(t);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return{value:n??"0",rest:n==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return gn.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return oe.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return oe.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return oe.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const n={};return e&&t&&(t.forEach((r,o)=>{n[r]=o}),e.sort((r,o)=>{const i=n[r.id],s=n[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),e}},ut=Ut({isConnected:!1}),me={state:ut,subscribe(t){return cr(ut,()=>t(ut))},subscribeKey(t,e){return Wn(ut,t,e)},setIsConnected(t){ut.isConnected=t},setCaipAddress(t){ut.caipAddress=t,ut.address=t?oe.getPlainAddress(t):void 0},setBalance(t,e){ut.balance=t,ut.balanceSymbol=e},setProfileName(t){ut.profileName=t},setProfileImage(t){ut.profileImage=t},setAddressExplorerUrl(t){ut.addressExplorerUrl=t},resetAccount(){ut.isConnected=!1,ut.caipAddress=void 0,ut.address=void 0,ut.balance=void 0,ut.balanceSymbol=void 0,ut.profileName=void 0,ut.profileImage=void 0,ut.addressExplorerUrl=void 0}};class Sm{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:n,cache:"no-cache"})).json()}async getBlob({headers:e,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:n})).blob()}async post({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const f0="WALLETCONNECT_DEEPLINK_CHOICE",qw="@w3m/recent",Kw="@w3m/connected_wallet_image_url",Yw="@w3m/connected_connector",Gt={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(f0,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(f0);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(f0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=Gt.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(qw,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(qw);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Kw,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Kw)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(Yw,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Yw)}catch{console.info("Unable to get Connected Connector")}}},qn=Ut({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),_t={state:qn,subscribeNetworkImages(t){return cr(qn.networkImages,()=>t(qn.networkImages))},subscribeKey(t,e){return Wn(qn,t,e)},subscribe(t){return cr(qn,()=>t(qn))},setWalletImage(t,e){qn.walletImages[t]=e},setNetworkImage(t,e){qn.networkImages[t]=e},setConnectorImage(t,e){qn.connectorImages[t]=e},setTokenImage(t,e){qn.tokenImages[t]=e},setCurrencyImage(t,e){qn.currencyImages[t]=e}},zt=Ut({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Ce={state:zt,subscribeKey(t,e){return Wn(zt,t,e)},setProjectId(t){zt.projectId=t},setAllWallets(t){zt.allWallets=t},setIncludeWalletIds(t){zt.includeWalletIds=t},setExcludeWalletIds(t){zt.excludeWalletIds=t},setFeaturedWalletIds(t){zt.featuredWalletIds=t},setTokens(t){zt.tokens=t},setTermsConditionsUrl(t){zt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){zt.privacyPolicyUrl=t},setCustomWallets(t){zt.customWallets=t},setEnableAnalytics(t){zt.enableAnalytics=t},setSdkVersion(t){zt.sdkVersion=t},setMetadata(t){zt.metadata=t},setOnrampEnabled(t){zt.enableOnramp=t}},xo=Ut({themeMode:"dark",themeVariables:{}}),Ct={state:xo,subscribe(t){return cr(xo,()=>t(xo))},setThemeMode(t){xo.themeMode=t;try{const e=Fe.getEmailConnector();e&&e.provider.syncTheme({themeMode:Ct.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(t){xo.themeVariables={...xo.themeVariables,...t};try{const e=Fe.getEmailConnector();e&&e.provider.syncTheme({themeVariables:Ct.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return v5(xo)}},Co=Ut({connectors:[]}),Fe={state:Co,subscribeKey(t,e){return Wn(Co,t,e)},setConnectors(t){Co.connectors=t.map(e=>zc(e))},addConnector(t){var e,n;if(Co.connectors.push(zc(t)),t.id==="w3mEmail"){const r=t,o=v5(Ce.state);(n=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||n.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),r.provider.syncTheme({themeMode:Ct.getSnapshot().themeMode,themeVariables:Ct.getSnapshot().themeVariables})}},getEmailConnector(){return Co.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return Co.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return Co.connectors}},xl=Ut({open:!1,selectedNetworkId:void 0}),ka={state:xl,subscribe(t){return cr(xl,()=>t(xl))},set(t){Object.assign(xl,{...xl,...t})}},X_=oe.getAnalyticsUrl(),eS=new Sm({baseUrl:X_}),tS=["MODAL_CREATED"],Ps=Ut({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ce={state:Ps,subscribe(t){return cr(Ps,()=>t(Ps))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ce.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(tS.includes(t.data.event)||typeof window>"u")return;await eS.post({path:"/e",headers:ce._getApiHeaders(),body:{eventId:oe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){Ps.timestamp=Date.now(),Ps.data=t,Ce.state.enableAnalytics&&ce._sendAnalyticsEvent(Ps)}},ot=Ut({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),$e={state:ot,subscribeKey(t,e){return Wn(ot,t,e)},_getClient(){if(!ot._client)throw new Error("NetworkController client not set");return ot._client},setClient(t){ot._client=zc(t)},setCaipNetwork(t){ot.caipNetwork=t,ka.set({selectedNetworkId:t==null?void 0:t.id}),this.checkIfSupportedNetwork()},setDefaultCaipNetwork(t){ot.caipNetwork=t,ka.set({selectedNetworkId:t==null?void 0:t.id}),ot.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){ot.requestedCaipNetworks=t},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:e}=ot,n=t,r=e;return oe.sortRequestedNetworks(n,r)},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();ot.supportsAllNetworks=t.supportsAllNetworks,ot.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),ot.caipNetwork=t,t&&ce.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},checkIfSupportedNetwork(){var t;ot.isUnsupportedChain=!((t=ot.requestedCaipNetworks)!=null&&t.some(e=>{var n;return e.id===((n=ot.caipNetwork)==null?void 0:n.id)})),ot.isUnsupportedChain&&this.showUnsupportedChainUI()},resetNetwork(){ot.isDefaultCaipNetwork||(ot.caipNetwork=void 0),ot.approvedCaipNetworkIds=void 0,ot.supportsAllNetworks=!0},showUnsupportedChainUI(){setTimeout(()=>{Se.open({view:"UnsupportedChain"})},300)}},nS=oe.getApiUrl(),Wt=new Sm({baseUrl:nS}),rS="40",Qw="4",Ft=Ut({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),we={state:Ft,subscribeKey(t,e){return Wn(Ft,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ce.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Wt.baseUrl}/getWalletImage/${t}`,n=await Wt.getBlob({path:e,headers:we._getApiHeaders()});_t.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Wt.baseUrl}/public/getAssetImage/${t}`,n=await Wt.getBlob({path:e,headers:we._getApiHeaders()});_t.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Wt.baseUrl}/public/getAssetImage/${t}`,n=await Wt.getBlob({path:e,headers:we._getApiHeaders()});_t.setConnectorImage(t,URL.createObjectURL(n))},async _fetchCurrencyImage(t){const e=`${Wt.baseUrl}/public/getCurrencyImage/${t}`,n=await Wt.getBlob({path:e,headers:we._getApiHeaders()});_t.setCurrencyImage(t,URL.createObjectURL(n))},async _fetchTokenImage(t){const e=`${Wt.baseUrl}/public/getTokenImage/${t}`,n=await Wt.getBlob({path:e,headers:we._getApiHeaders()});_t.setTokenImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=$e.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>we._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=Fe.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>we._fetchConnectorImage(n)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>we._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>we._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Ce.state;if(t!=null&&t.length){const{data:e}=await Wt.get({path:"/getWallets",headers:we._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):Qw,include:t==null?void 0:t.join(",")}});e.sort((r,o)=>t.indexOf(r.id)-t.indexOf(o.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>we._fetchWalletImage(r))),Ft.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=Ce.state,r=[...e??[],...n??[]].filter(Boolean),{data:o,count:i}=await Wt.get({path:"/getWallets",headers:we._getApiHeaders(),params:{page:"1",entries:Qw,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=Gt.getRecentWallets(),a=o.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>we._fetchWalletImage(c))),Ft.recommended=o,Ft.count=i??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=Ce.state,o=[...Ft.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:i,count:s}=await Wt.get({path:"/getWallets",headers:we._getApiHeaders(),params:{page:String(t),entries:rS,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=i.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>we._fetchWalletImage(l)),oe.wait(300)]),Ft.wallets=[...Ft.wallets,...i],Ft.count=s>Ft.count?s:Ft.count,Ft.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=Ce.state;Ft.search=[];const{data:r}=await Wt.get({path:"/getWallets",headers:we._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>we._fetchWalletImage(i)),oe.wait(300)]),Ft.search=r},prefetch(){const t=[we.fetchFeaturedWallets(),we.fetchRecommendedWallets(),we.fetchNetworkImages(),we.fetchConnectorImages()];Ce.state.enableAnalytics===void 0&&t.push(we.fetchAnalyticsConfig()),Ft.prefetchPromise=Promise.race([Promise.allSettled(t),oe.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await Wt.get({path:"/getAnalyticsConfig",headers:we._getApiHeaders()});Ce.setEnableAnalytics(t)}},Ye=Ut({view:"Connect",history:["Connect"]}),J={state:Ye,subscribeKey(t,e){return Wn(Ye,t,e)},push(t,e){t!==Ye.view&&(Ye.view=t,Ye.history.push(t),Ye.data=e)},reset(t){Ye.view=t,Ye.history=[t]},replace(t,e){Ye.history.length>1&&Ye.history.at(-1)!==t&&(Ye.view=t,Ye.history[Ye.history.length-1]=t,Ye.data=e)},goBack(){if(Ye.history.length>1){Ye.history.pop();const[t]=Ye.history.slice(-1);t&&(Ye.view=t)}},goBackToIndex(t){if(Ye.history.length>1){Ye.history=Ye.history.slice(0,t+1);const[e]=Ye.history.slice(-1);e&&(Ye.view=e)}}},Eo=Ut({loading:!1,open:!1}),Se={state:Eo,subscribe(t){return cr(Eo,()=>t(Eo))},subscribeKey(t,e){return Wn(Eo,t,e)},async open(t){await we.state.prefetchPromise;const e=me.state.isConnected;t!=null&&t.view?J.reset(t.view):e?J.reset("Account"):J.reset("Connect"),Eo.open=!0,ka.set({open:!0}),ce.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=me.state.isConnected;Eo.open=!1,ka.set({open:!1}),ce.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){Eo.loading=t}},iS={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},oS=oe.getBlockchainApiUrl(),Cl=new Sm({baseUrl:oS}),$a={fetchIdentity({caipChainId:t,address:e}){return Cl.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:Ce.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n,onramp:r,signal:o}){const i=n?{cursor:n}:{};return Cl.get({path:`/v1/account/${t}/history?projectId=${e}${r?`&onramp=${r}`:""}`,params:i,signal:o})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:n,purchaseAmount:r,paymentAmount:o}){return(await Cl.post({path:`/v1/generators/onrampurl?projectId=${Ce.state.projectId}`,body:{destinationWallets:t,defaultNetwork:n,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await Cl.get({path:`/v1/onramp/options?projectId=${Ce.state.projectId}`})}catch{return iS}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:n,network:r}){try{return await Cl.post({path:`/v1/onramp/quote?projectId=${Ce.state.projectId}`,body:{purchaseCurrency:t,paymentCurrency:e,amount:n,network:r}})}catch{return{coinbaseFee:{amount:n,currency:e.id},networkFee:{amount:n,currency:e.id},paymentSubtotal:{amount:n,currency:e.id},paymentTotal:{amount:n,currency:e.id},purchaseAmount:{amount:n,currency:e.id},quoteId:"mocked-quote-id"}}}},qp={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},y5={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},yt=Ut({providers:J_,selectedProvider:null,error:null,purchaseCurrency:qp,paymentCurrency:y5,purchaseCurrencies:[qp],paymentCurrencies:[],quotesLoading:!1}),Ne={state:yt,subscribe(t){return cr(yt,()=>t(yt))},subscribeKey(t,e){return Wn(yt,t,e)},setSelectedProvider(t){yt.selectedProvider=t},setPurchaseCurrency(t){yt.purchaseCurrency=t},setPaymentCurrency(t){yt.paymentCurrency=t},setPurchaseAmount(t){this.state.purchaseAmount=t},setPaymentAmount(t){this.state.paymentAmount=t},async getAvailableCurrencies(){const t=await $a.getOnrampOptions();yt.purchaseCurrencies=t.purchaseCurrencies,yt.paymentCurrencies=t.paymentCurrencies,yt.paymentCurrency=t.paymentCurrencies[0]||y5,yt.purchaseCurrency=t.purchaseCurrencies[0]||qp,await we.fetchCurrencyImages(t.paymentCurrencies.map(e=>e.id)),await we.fetchTokenImages(t.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var e,n;yt.quotesLoading=!0;const t=await $a.getOnrampQuote({purchaseCurrency:yt.purchaseCurrency,paymentCurrency:yt.paymentCurrency,amount:((e=yt.paymentAmount)==null?void 0:e.toString())||"0",network:(n=yt.purchaseCurrency)==null?void 0:n.name});return yt.quotesLoading=!1,yt.purchaseAmount=Number(t.purchaseAmount.amount),t}},Vr=Ut({message:"",variant:"success",open:!1}),Be={state:Vr,subscribeKey(t,e){return Wn(Vr,t,e)},showSuccess(t){Vr.message=t,Vr.variant="success",Vr.open=!0},showError(t){const e=oe.parseError(t);Vr.message=e,Vr.variant="error",Vr.open=!0},hide(){Vr.open=!1}},rt=Ut({transactions:[],coinbaseTransactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),en={state:rt,subscribe(t){return cr(rt,()=>t(rt))},async fetchTransactions(t,e){const{projectId:n}=Ce.state;if(!n||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");rt.loading=!0;try{const r=await $a.fetchTransactions({account:t,projectId:n,cursor:rt.next,onramp:e}),o=this.filterSpamTransactions(r.data),i=[...rt.transactions,...o];rt.loading=!1,e==="coinbase"?rt.coinbaseTransactions=this.groupTransactionsByYearAndMonth(rt.coinbaseTransactions,r.data):(rt.transactions=i,rt.transactionsByYear=this.groupTransactionsByYearAndMonth(rt.transactionsByYear,o)),rt.empty=i.length===0,rt.next=r.next?r.next:void 0}catch{ce.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:n,cursor:rt.next}}),Be.showError("Failed to fetch transactions"),rt.loading=!1,rt.empty=!0}},groupTransactionsByYearAndMonth(t={},e=[]){const n=t;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),i=new Date(r.metadata.minedAt).getMonth(),s=n[o]??{},a=s[i]??[];a.find(l=>l.metadata.hash===r.metadata.hash&&l.metadata.status===r.metadata.status)||(n[o]={...s,[i]:[...a,r].sort((l,c)=>new Date(c.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())})}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){rt.transactions=[],rt.transactionsByYear={},rt.loading=!1,rt.empty=!1,rt.next=void 0}},bt=Ut({wcError:!1,buffering:!1}),Ae={state:bt,subscribeKey(t,e){return Wn(bt,t,e)},_getClient(){if(!bt._client)throw new Error("ConnectionController client not set");return bt._client},setClient(t){bt._client=zc(t)},connectWalletConnect(){bt.wcPromise=this._getClient().connectWalletConnect(t=>{bt.wcUri=t,bt.wcPairingExpiry=oe.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),Gt.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){bt.wcUri=void 0,bt.wcPairingExpiry=void 0,bt.wcPromise=void 0,bt.wcLinking=void 0,bt.recentWallet=void 0,en.resetTransactions(),Gt.deleteWalletConnectDeepLink()},setWcLinking(t){bt.wcLinking=t},setWcError(t){bt.wcError=t,bt.buffering=!1},setRecentWallet(t){bt.recentWallet=t},setBuffering(t){bt.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},dn=Ut({status:"uninitialized",isSiweEnabled:!1}),lt={state:dn,subscribeKey(t,e){return Wn(dn,t,e)},subscribe(t){return cr(dn,()=>t(dn))},_getClient(){if(!dn._client)throw new Error("SIWEController client not set");return dn._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){dn._client=zc(t),dn.status="ready",dn.isSiweEnabled=t.options.enabled},setNonce(t){dn.nonce=t},setStatus(t){dn.status=t},setMessage(t){dn.message=t},setSession(t){dn.session=t}},qe={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return _t.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return _t.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return _t.state.connectorImages[t.imageId]}},Rm={goBackOrCloseModal(){J.state.history.length>1?J.goBack():Se.close()},navigateAfterNetworkSwitch(){const{history:t}=J.state,e=t.findIndex(n=>n==="Networks");e>=1?J.goBackToIndex(e-1):Se.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wd=globalThis,Am=wd.ShadowRoot&&(wd.ShadyCSS===void 0||wd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Im=Symbol(),Jw=new WeakMap;let b5=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Im)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Am&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Jw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Jw.set(n,e))}return e}toString(){return this.cssText}};const xr=t=>new b5(typeof t=="string"?t:t+"",void 0,Im),H=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new b5(n,t,Im)},sS=(t,e)=>{if(Am)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),o=wd.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},Xw=Am?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return xr(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:aS,defineProperty:lS,getOwnPropertyDescriptor:cS,getOwnPropertyNames:uS,getOwnPropertySymbols:dS,getPrototypeOf:fS}=Object,Yi=globalThis,e2=Yi.trustedTypes,hS=e2?e2.emptyScript:"",h0=Yi.reactiveElementPolyfillSupport,Bl=(t,e)=>t,lf={toAttribute(t,e){switch(e){case Boolean:t=t?hS:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},km=(t,e)=>!aS(t,e),t2={attribute:!0,type:String,converter:lf,reflect:!1,hasChanged:km};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Yi.litPropertyMetadata??(Yi.litPropertyMetadata=new WeakMap);let Ns=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=t2){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&lS(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){const{get:o,set:i}=cS(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??t2}static _$Ei(){if(this.hasOwnProperty(Bl("elementProperties")))return;const e=fS(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bl("properties"))){const n=this.properties,r=[...uS(n),...dS(n)];for(const o of r)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(Xw(o))}else e!==void 0&&n.push(Xw(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sS(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:lf).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,n){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:lf;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??km)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};Ns.elementStyles=[],Ns.shadowRootOptions={mode:"open"},Ns[Bl("elementProperties")]=new Map,Ns[Bl("finalized")]=new Map,h0==null||h0({ReactiveElement:Ns}),(Yi.reactiveElementVersions??(Yi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zl=globalThis,cf=zl.trustedTypes,n2=cf?cf.createPolicy("lit-html",{createHTML:t=>t}):void 0,x5="$lit$",Ri=`lit$${(Math.random()+"").slice(9)}$`,C5="?"+Ri,pS=`<${C5}>`,es=document,Wc=()=>es.createComment(""),Fc=t=>t===null||typeof t!="object"&&typeof t!="function",E5=Array.isArray,mS=t=>E5(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",p0=`[ 	
\f\r]`,El=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,r2=/-->/g,i2=/>/g,_o=RegExp(`>|${p0}(?:([^\\s"'>=/]+)(${p0}*=${p0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),o2=/'/g,s2=/"/g,_5=/^(?:script|style|textarea|title)$/i,S5=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),E=S5(1),G=S5(2),ts=Symbol.for("lit-noChange"),ct=Symbol.for("lit-nothing"),a2=new WeakMap,Po=es.createTreeWalker(es,129);function R5(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return n2!==void 0?n2.createHTML(e):e}const gS=(t,e)=>{const n=t.length-1,r=[];let o,i=e===2?"<svg>":"",s=El;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===El?u[1]==="!--"?s=r2:u[1]!==void 0?s=i2:u[2]!==void 0?(_5.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=_o):u[3]!==void 0&&(s=_o):s===_o?u[0]===">"?(s=o??El,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?_o:u[3]==='"'?s2:o2):s===s2||s===o2?s=_o:s===r2||s===i2?s=El:(s=_o,o=void 0);const m=s===_o&&t[a+1].startsWith("/>")?" ":"";i+=s===El?l+pS:h>=0?(r.push(c),l.slice(0,h)+x5+l.slice(h)+Ri+m):l+Ri+(h===-2?a:m)}return[R5(t,i+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class Hc{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[c,u]=gS(e,n);if(this.el=Hc.createElement(c,r),Po.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Po.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(x5)){const p=u[s++],m=o.getAttribute(h).split(Ri),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:x[2],strings:m,ctor:x[1]==="."?vS:x[1]==="?"?yS:x[1]==="@"?bS:rh}),o.removeAttribute(h)}else h.startsWith(Ri)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(_5.test(o.tagName)){const h=o.textContent.split(Ri),p=h.length-1;if(p>0){o.textContent=cf?cf.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],Wc()),Po.nextNode(),l.push({type:2,index:++i});o.append(h[p],Wc())}}}else if(o.nodeType===8)if(o.data===C5)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(Ri,h+1))!==-1;)l.push({type:7,index:i}),h+=Ri.length-1}i++}}static createElement(e,n){const r=es.createElement("template");return r.innerHTML=e,r}}function Ta(t,e,n=t,r){var s,a;if(e===ts)return e;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=Fc(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(e=Ta(t,o._$AS(t,e.values),o,r)),e}class wS{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??es).importNode(n,!0);Po.currentNode=o;let i=Po.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new gu(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new xS(i,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(i=Po.nextNode(),s++)}return Po.currentNode=es,o}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class gu{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=ct,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ta(this,e,n),Fc(e)?e===ct||e==null||e===""?(this._$AH!==ct&&this._$AR(),this._$AH=ct):e!==this._$AH&&e!==ts&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mS(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ct&&Fc(this._$AH)?this._$AA.nextSibling.data=e:this.T(es.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Hc.createElement(R5(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new wS(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=a2.get(e.strings);return n===void 0&&a2.set(e.strings,n=new Hc(e)),n}k(e){E5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new gu(this.S(Wc()),this.S(Wc()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class rh{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=ct,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ct}_$AI(e,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=Ta(this,e,n,0),s=!Fc(e)||e!==this._$AH&&e!==ts,s&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ta(this,a[r+l],n,l),c===ts&&(c=this._$AH[l]),s||(s=!Fc(c)||c!==this._$AH[l]),c===ct?e=ct:e!==ct&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vS extends rh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ct?void 0:e}}class yS extends rh{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ct)}}class bS extends rh{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Ta(this,e,n,0)??ct)===ts)return;const r=this._$AH,o=e===ct&&r!==ct||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==ct&&(r===ct||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class xS{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ta(this,e)}}const m0=zl.litHtmlPolyfillSupport;m0==null||m0(Hc,gu),(zl.litHtmlVersions??(zl.litHtmlVersions=[])).push("3.1.2");const CS=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new gu(e.insertBefore(Wc(),i),i,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z=class extends Ns{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=CS(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ts}};var B2;z._$litElement$=!0,z.finalized=!0,(B2=globalThis.litElementHydrateSupport)==null||B2.call(globalThis,{LitElement:z});const g0=globalThis.litElementPolyfillSupport;g0==null||g0({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");let Wl,Qi,Ji;function A5(t,e){Wl=document.createElement("style"),Qi=document.createElement("style"),Ji=document.createElement("style"),Wl.textContent=ra(t).core.cssText,Qi.textContent=ra(t).dark.cssText,Ji.textContent=ra(t).light.cssText,document.head.appendChild(Wl),document.head.appendChild(Qi),document.head.appendChild(Ji),$m(e)}function $m(t){Qi&&Ji&&(t==="light"?(Qi.removeAttribute("media"),Ji.media="enabled"):(Ji.removeAttribute("media"),Qi.media="enabled"))}function I5(t){Wl&&Qi&&Ji&&(Wl.textContent=ra(t).core.cssText,Qi.textContent=ra(t).dark.cssText,Ji.textContent=ra(t).light.cssText)}function ra(t){return{core:H`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${xr(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${xr((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${xr((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${xr((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${xr((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:H`
      :root {
        --w3m-color-mix: ${xr((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${xr((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:H`
      :root {
        --w3m-color-mix: ${xr((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${xr((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const he=H`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,He=H`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Tm=H`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function ES(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function _S(t,e){return customElements.get(t)||customElements.define(t,e),e}function U(t){return function(n){return typeof n=="function"?_S(t,n):ES(t,n)}}const SS=H`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var RS=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let uf=class extends z{render(){return E`<slot></slot>`}};uf.styles=[he,SS];uf=RS([U("wui-card")],uf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const AS={attribute:!0,type:String,converter:lf,reflect:!1,hasChanged:km},IS=(t=AS,e,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function R(t){return(e,n)=>typeof n=="object"?IS(t,e,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(t){return R({...t,state:!0,attribute:!1})}const kS=H`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,$S=G`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,TS=G`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,PS=G`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,OS=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,NS=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,MS=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,LS=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,jS=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,DS=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,US=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,BS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,zS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,WS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,FS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,HS=G`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,VS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ZS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,GS=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,qS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,KS=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,YS=G`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,QS=G` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,JS=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,XS=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,nR=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,rR=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,iR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,oR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,aR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,lR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,cR=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,uR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,dR=G`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,fR=G`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,hR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,pR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,mR=G` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,gR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,wR=G`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,vR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,yR=G`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,bR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xR=G`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,CR=G`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,ER=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,_R=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,SR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,RR=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,AR=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,IR=G`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,kR=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,$R=G`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,TR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,PR=G`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,OR=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,NR=G`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,MR=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,LR=G`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,jR=G`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var ih=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const DR={add:YS,allWallets:$S,arrowBottomCircle:TS,appStore:PS,apple:OS,arrowBottom:NS,arrowLeft:MS,arrowRight:LS,arrowTop:jS,bank:MR,browser:DS,card:LR,checkmark:US,chevronBottom:BS,chevronLeft:zS,chevronRight:WS,chevronTop:FS,chromeStore:HS,clock:VS,close:ZS,compass:qS,coinPlaceholder:GS,copy:KS,cursor:QS,desktop:JS,disconnect:XS,discord:eR,etherscan:tR,extension:nR,externalLink:rR,facebook:iR,filters:oR,github:sR,google:aR,helpCircle:lR,infoCircle:cR,mail:uR,mobile:dR,networkPlaceholder:fR,nftPlaceholder:hR,off:pR,playStore:mR,plus:jR,qrCode:gR,recycleHorizontal:NR,refresh:wR,search:vR,send:yR,swapHorizontal:bR,swapHorizontalMedium:CR,swapHorizontalBold:xR,swapVertical:ER,telegram:_R,twitch:SR,twitter:RR,twitterIcon:AR,verify:IR,verifyFilled:kR,wallet:TR,walletConnect:PR,walletPlaceholder:$R,warningCircle:OR};let ns=class extends z{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,E`${DR[this.name]}`}};ns.styles=[he,Tm,kS];ih([R()],ns.prototype,"size",void 0);ih([R()],ns.prototype,"name",void 0);ih([R()],ns.prototype,"color",void 0);ns=ih([U("wui-icon")],ns);const UR=H`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Pm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Pa=class extends z{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return E`<img src=${this.src} alt=${this.alt} />`}};Pa.styles=[he,Tm,UR];Pm([R()],Pa.prototype,"src",void 0);Pm([R()],Pa.prototype,"alt",void 0);Pa=Pm([U("wui-image")],Pa);const BR=H`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var zR=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let df=class extends z{render(){return E`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};df.styles=[he,BR];df=zR([U("wui-loading-hexagon")],df);const WR=H`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Om=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Oa=class extends z{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,E`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Oa.styles=[he,WR];Om([R()],Oa.prototype,"color",void 0);Om([R()],Oa.prototype,"size",void 0);Oa=Om([U("wui-loading-spinner")],Oa);const FR=H`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var k5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Vc=class extends z{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,i=245+r,s=360+r*1.75;return E`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Vc.styles=[he,FR];k5([R({type:Number})],Vc.prototype,"radius",void 0);Vc=k5([U("wui-loading-thumbnail")],Vc);const HR=H`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var oh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let rs=class extends z{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,E`<slot></slot>`}};rs.styles=[HR];oh([R()],rs.prototype,"width",void 0);oh([R()],rs.prototype,"height",void 0);oh([R()],rs.prototype,"borderRadius",void 0);rs=oh([U("wui-shimmer")],rs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T5=t=>(...e)=>({_$litDirective$:t,values:e});class P5{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const VR=T5(class extends P5{constructor(t){var e;if(super(t),t.type!==$5.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return ts}}),ZR=H`
  :host {
    display: inline-flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var sh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let is=class extends z{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,E`<slot class=${VR(e)}></slot>`}};is.styles=[he,ZR];sh([R()],is.prototype,"variant",void 0);sh([R()],is.prototype,"color",void 0);sh([R()],is.prototype,"align",void 0);is=sh([U("wui-text")],is);const GR=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,qR=G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,KR=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,YR=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,QR=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,JR=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,XR=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eA=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tA=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,nA=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,rA=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,iA=G`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,oA=G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,sA=G`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,aA=G`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,lA=G`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,cA=G`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,uA=G`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,dA=H`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Nm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const fA={browser:GR,dao:qR,defi:KR,defiAlt:YR,eth:QR,layers:JR,lock:XR,login:eA,network:tA,nft:nA,noun:rA,profile:iA,system:oA,coinbase:sA,onrampCard:uA,moonpay:aA,stripe:lA,paypal:cA};let Na=class extends z{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,E`${fA[this.name]}`}};Na.styles=[he,dA];Nm([R()],Na.prototype,"name",void 0);Nm([R()],Na.prototype,"size",void 0);Na=Nm([U("wui-visual")],Na);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=t=>t??ct,Le={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,l=[];for(let c=0;c<5;c+=1){const u=this.tintColor(r,.15*c);l.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,o=e&255;return[n,r,o]},tintColor(t,e){const[n,r,o]=t,i=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e);return[i,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},hA=H`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var An=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let jt=class extends z{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Le.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Le.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Le.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Le.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Le.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Le.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Le.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Le.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};jt.styles=[he,hA];An([R()],jt.prototype,"flexDirection",void 0);An([R()],jt.prototype,"flexWrap",void 0);An([R()],jt.prototype,"flexBasis",void 0);An([R()],jt.prototype,"flexGrow",void 0);An([R()],jt.prototype,"flexShrink",void 0);An([R()],jt.prototype,"alignItems",void 0);An([R()],jt.prototype,"justifyContent",void 0);An([R()],jt.prototype,"columnGap",void 0);An([R()],jt.prototype,"rowGap",void 0);An([R()],jt.prototype,"gap",void 0);An([R()],jt.prototype,"padding",void 0);An([R()],jt.prototype,"margin",void 0);jt=An([U("wui-flex")],jt);const pA=H`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ah=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let os=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return E`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",E`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Le.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};os.styles=[he,pA];ah([R()],os.prototype,"imageSrc",void 0);ah([R()],os.prototype,"alt",void 0);ah([R()],os.prototype,"address",void 0);os=ah([U("wui-avatar")],os);const mA=H`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var pi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let zn=class extends z{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",o=n?"12%":"16%",i=n?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${l||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,E` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};zn.styles=[he,He,mA];pi([R()],zn.prototype,"size",void 0);pi([R()],zn.prototype,"backgroundColor",void 0);pi([R()],zn.prototype,"iconColor",void 0);pi([R()],zn.prototype,"iconSize",void 0);pi([R()],zn.prototype,"background",void 0);pi([R({type:Boolean})],zn.prototype,"border",void 0);pi([R()],zn.prototype,"borderColor",void 0);pi([R()],zn.prototype,"icon",void 0);zn=pi([U("wui-icon-box")],zn);const gA=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Br=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let bn=class extends z{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return E`
      <button
        ?disabled=${this.disabled}
        class=${de(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Le.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return E` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?E`<wui-image src=${this.networkSrc}></wui-image>`:E`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return E`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};bn.styles=[he,He,gA];Br([R()],bn.prototype,"networkSrc",void 0);Br([R()],bn.prototype,"avatarSrc",void 0);Br([R()],bn.prototype,"balance",void 0);Br([R({type:Boolean})],bn.prototype,"isUnsupportedChain",void 0);Br([R({type:Boolean})],bn.prototype,"disabled",void 0);Br([R({type:Boolean})],bn.prototype,"isProfileName",void 0);Br([R()],bn.prototype,"address",void 0);Br([R()],bn.prototype,"charsStart",void 0);Br([R()],bn.prototype,"charsEnd",void 0);bn=Br([U("wui-account-button")],bn);const wA=H`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Es=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Or=class extends z{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),E`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?E`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?E`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:E`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Or.styles=[he,wA];Es([R()],Or.prototype,"size",void 0);Es([R()],Or.prototype,"name",void 0);Es([R()],Or.prototype,"imageSrc",void 0);Es([R()],Or.prototype,"walletIcon",void 0);Es([R({type:Boolean})],Or.prototype,"installed",void 0);Es([R()],Or.prototype,"badgeSize",void 0);Or=Es([U("wui-wallet-image")],Or);const vA=H`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var O5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const w0=4;let Zc=class extends z{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<w0;return E`${this.walletImages.slice(0,w0).map(({src:n,walletName:r})=>E`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${de(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(w0-this.walletImages.length)].map(()=>E` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Zc.styles=[he,vA];O5([R({type:Array})],Zc.prototype,"walletImages",void 0);Zc=O5([U("wui-all-wallets-image")],Zc);const yA=H`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var zr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const bA={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let xn=class extends z{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??bA[this.size];return E`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?E`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:E``}};xn.styles=[he,He,yA];zr([R()],xn.prototype,"size",void 0);zr([R({type:Boolean})],xn.prototype,"disabled",void 0);zr([R({type:Boolean})],xn.prototype,"fullWidth",void 0);zr([R({type:Boolean})],xn.prototype,"loading",void 0);zr([R()],xn.prototype,"variant",void 0);zr([R({type:Boolean})],xn.prototype,"hasIconLeft",void 0);zr([R({type:Boolean})],xn.prototype,"hasIconRight",void 0);zr([R()],xn.prototype,"borderRadius",void 0);zr([R()],xn.prototype,"textVariant",void 0);xn=zr([U("wui-button")],xn);const N5=G`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,xA=H`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var M5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Gc=class extends z{constructor(){super(...arguments),this.type="wallet"}render(){return E`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?E` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${N5}`:E`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Gc.styles=[he,He,xA];M5([R()],Gc.prototype,"type",void 0);Gc=M5([U("wui-card-select-loader")],Gc);const CA=G`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,EA=G`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,_A=H`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var wu=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let io=class extends z{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:CA,md:N5,lg:EA};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,E`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?E`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:E`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};io.styles=[he,_A];wu([R()],io.prototype,"size",void 0);wu([R()],io.prototype,"name",void 0);wu([R()],io.prototype,"imageSrc",void 0);wu([R({type:Boolean})],io.prototype,"selected",void 0);io=wu([U("wui-network-image")],io);const SA=H`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var _s=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Nr=class extends z{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return E`
      <button data-selected=${de(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?E`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${de(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:E`
      <wui-wallet-image
        size="md"
        imageSrc=${de(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Nr.styles=[he,He,SA];_s([R()],Nr.prototype,"name",void 0);_s([R()],Nr.prototype,"type",void 0);_s([R()],Nr.prototype,"imageSrc",void 0);_s([R({type:Boolean})],Nr.prototype,"disabled",void 0);_s([R({type:Boolean})],Nr.prototype,"selected",void 0);_s([R({type:Boolean})],Nr.prototype,"installed",void 0);Nr=_s([U("wui-card-select")],Nr);const RA=H`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var Ss=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Mr=class extends z{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return E`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:Le.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?E`<wui-image src=${this.imageSrc}></wui-image>`:null}};Mr.styles=[he,He,RA];Ss([R()],Mr.prototype,"variant",void 0);Ss([R()],Mr.prototype,"imageSrc",void 0);Ss([R({type:Boolean})],Mr.prototype,"disabled",void 0);Ss([R()],Mr.prototype,"icon",void 0);Ss([R()],Mr.prototype,"href",void 0);Ss([R()],Mr.prototype,"text",void 0);Mr=Ss([U("wui-chip")],Mr);const AA=H`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Mm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ma=class extends z{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return E`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?E`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ma.styles=[he,He,AA];Mm([R()],Ma.prototype,"size",void 0);Mm([R({type:Boolean})],Ma.prototype,"loading",void 0);Ma=Mm([U("wui-connect-button")],Ma);const IA=H`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var lh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ss=class extends z{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return E`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ss.styles=[he,He,IA];lh([R({type:Boolean})],ss.prototype,"disabled",void 0);lh([R()],ss.prototype,"label",void 0);lh([R()],ss.prototype,"buttonLabel",void 0);ss=lh([U("wui-cta-button")],ss);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kA=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,e,!1),Fl(o,e);return!0},ff=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},L5=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),PA(e)}};function $A(t){this._$AN!==void 0?(ff(this),this._$AM=t,L5(this)):this._$AM=t}function TA(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)Fl(r[i],!1),ff(r[i]);else r!=null&&(Fl(r,!1),ff(r));else Fl(this,t)}const PA=t=>{t.type==$5.CHILD&&(t._$AP??(t._$AP=TA),t._$AQ??(t._$AQ=$A))};class OA extends P5{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),L5(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(Fl(this,e),ff(this))}setValue(e){if(kA(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ch=()=>new NA;class NA{}const v0=new WeakMap,uh=T5(class extends OA{render(t){return ct}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),ct}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=v0.get(e);n===void 0&&(n=new WeakMap,v0.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=v0.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),MA=H`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var po=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ur=class extends z{constructor(){super(...arguments),this.inputElementRef=ch(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return E` ${this.templateIcon()}
      <input
        ${uh(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${de(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${de(this.value)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?E`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};ur.styles=[he,He,MA];po([R()],ur.prototype,"size",void 0);po([R()],ur.prototype,"icon",void 0);po([R({type:Boolean})],ur.prototype,"disabled",void 0);po([R()],ur.prototype,"placeholder",void 0);po([R()],ur.prototype,"type",void 0);po([R()],ur.prototype,"keyHint",void 0);po([R()],ur.prototype,"value",void 0);ur=po([U("wui-input-text")],ur);const LA=H`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var dh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let as=class extends z{constructor(){super(...arguments),this.disabled=!1}render(){return E`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?E`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};as.styles=[he,LA];dh([R()],as.prototype,"errorMessage",void 0);dh([R({type:Boolean})],as.prototype,"disabled",void 0);dh([R()],as.prototype,"value",void 0);as=dh([U("wui-email-input")],as);const jA=H`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var vu=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let oo=class extends z{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",n=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${n});
`,E`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};oo.styles=[he,He,Tm,jA];vu([R()],oo.prototype,"size",void 0);vu([R({type:Boolean})],oo.prototype,"disabled",void 0);vu([R()],oo.prototype,"icon",void 0);vu([R()],oo.prototype,"iconColor",void 0);oo=vu([U("wui-icon-link")],oo);const DA=H`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var j5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let qc=class extends z{constructor(){super(...arguments),this.icon="copy"}render(){return E`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};qc.styles=[he,He,DA];j5([R()],qc.prototype,"icon",void 0);qc=j5([U("wui-input-element")],qc);const UA=H`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Lm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let La=class extends z{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return E`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};La.styles=[he,He,UA];Lm([R({type:Boolean})],La.prototype,"disabled",void 0);Lm([R({type:String})],La.prototype,"value",void 0);La=Lm([U("wui-input-numeric")],La);const BA=H`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var jm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ja=class extends z{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return E`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ja.styles=[he,He,BA];jm([R({type:Boolean})],ja.prototype,"disabled",void 0);jm([R()],ja.prototype,"color",void 0);ja=jm([U("wui-link")],ja);const zA=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Wr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Cn=class extends z{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return E`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${de(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return E`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return E`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return E`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?E`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:E``}chevronTemplate(){return this.chevron?E`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Cn.styles=[he,He,zA];Wr([R()],Cn.prototype,"icon",void 0);Wr([R()],Cn.prototype,"iconSize",void 0);Wr([R()],Cn.prototype,"variant",void 0);Wr([R()],Cn.prototype,"iconVariant",void 0);Wr([R({type:Boolean})],Cn.prototype,"disabled",void 0);Wr([R()],Cn.prototype,"imageSrc",void 0);Wr([R()],Cn.prototype,"alt",void 0);Wr([R({type:Boolean})],Cn.prototype,"chevron",void 0);Wr([R({type:Boolean})],Cn.prototype,"loading",void 0);Cn=Wr([U("wui-list-item")],Cn);var Kp;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(Kp||(Kp={}));const WA=H`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Rs=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Lr=class extends z{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,E`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?E`<div class="swap-images-container">
        ${e!=null&&e.url?E`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?E`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?E`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?E`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:E`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?E`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Lr.styles=[WA];Rs([R()],Lr.prototype,"type",void 0);Rs([R()],Lr.prototype,"status",void 0);Rs([R()],Lr.prototype,"direction",void 0);Rs([R({type:Boolean})],Lr.prototype,"onlyDirectionIcon",void 0);Rs([R({type:Array})],Lr.prototype,"images",void 0);Rs([R({type:Object})],Lr.prototype,"secondImage",void 0);Lr=Rs([U("wui-transaction-visual")],Lr);const FA=H`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var mr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let an=class extends z{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return E`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${de(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${de(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Kp[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?E`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?E`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};an.styles=[he,FA];mr([R()],an.prototype,"type",void 0);mr([R({type:Array})],an.prototype,"descriptions",void 0);mr([R()],an.prototype,"date",void 0);mr([R({type:Boolean})],an.prototype,"onlyDirectionIcon",void 0);mr([R()],an.prototype,"status",void 0);mr([R()],an.prototype,"direction",void 0);mr([R({type:Array})],an.prototype,"images",void 0);mr([R({type:Array})],an.prototype,"price",void 0);mr([R({type:Array})],an.prototype,"amount",void 0);mr([R({type:Array})],an.prototype,"symbol",void 0);an=mr([U("wui-transaction-list-item")],an);const HA=H`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var VA=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hf=class extends z{render(){return E`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};hf.styles=[he,HA];hf=VA([U("wui-transaction-list-item-loader")],hf);const ZA=H`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var D5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Kc=class extends z{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,E`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Kc.styles=[he,ZA];D5([R()],Kc.prototype,"variant",void 0);Kc=D5([U("wui-tag")],Kc);const GA=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var gr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ln=class extends z{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return E`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?E` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?E` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?E`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?E`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?E`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?E`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};ln.styles=[he,He,GA];gr([R({type:Array})],ln.prototype,"walletImages",void 0);gr([R()],ln.prototype,"imageSrc",void 0);gr([R()],ln.prototype,"name",void 0);gr([R()],ln.prototype,"tagLabel",void 0);gr([R()],ln.prototype,"tagVariant",void 0);gr([R()],ln.prototype,"icon",void 0);gr([R()],ln.prototype,"walletIcon",void 0);gr([R({type:Boolean})],ln.prototype,"installed",void 0);gr([R({type:Boolean})],ln.prototype,"disabled",void 0);gr([R({type:Boolean})],ln.prototype,"showAllWallets",void 0);ln=gr([U("wui-list-wallet")],ln);const qA=H`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var U5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Yc=class extends z{constructor(){super(...arguments),this.logo="google"}render(){return E`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Yc.styles=[he,qA];U5([R()],Yc.prototype,"logo",void 0);Yc=U5([U("wui-logo")],Yc);const KA=H`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Dm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Da=class extends z{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return E`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Da.styles=[he,He,KA];Dm([R()],Da.prototype,"logo",void 0);Dm([R({type:Boolean})],Da.prototype,"disabled",void 0);Da=Dm([U("wui-logo-select")],Da);const YA=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var fh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ls=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return E`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?E`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?E`<wui-image src=${this.imageSrc}></wui-image>`:E`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ls.styles=[he,He,YA];fh([R()],ls.prototype,"imageSrc",void 0);fh([R({type:Boolean})],ls.prototype,"isUnsupportedChain",void 0);fh([R({type:Boolean})],ls.prototype,"disabled",void 0);ls=fh([U("wui-network-button")],ls);const QA=H`
  :host {
    position: relative;
    display: block;
  }
`;var hh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let cs=class extends z{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,n)=>{const r=e.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break;case"Backspace":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:n],i=o?this.getInputElement(o):void 0;i&&(i.disabled=!1,i.focus())}if(e==="prev"){const r=n-1,o=this.numerics[r>-1?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var n,r;this.otp&&(this.values=this.otp.split(""));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return E`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>E`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
              .value=${this.values[n]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,r){const o=this.numerics[n],i=e||(o?this.getInputElement(o):void 0);i&&(i.value=r,this.values=this.values.map((s,a)=>a===n?r:s))}handleInput(e,n){const r=e.target,o=this.getInputElement(r);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,n):Le.isNumber(i)&&e.data?(this.updateInput(o,n,e.data),this.focusInputField("next",n)):this.updateInput(o,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const o=n[0];if(o&&Le.isNumber(o)){this.updateInput(e,r,o);const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};cs.styles=[he,QA];hh([R({type:Number})],cs.prototype,"length",void 0);hh([R({type:String})],cs.prototype,"otp",void 0);hh([B()],cs.prototype,"values",void 0);cs=hh([U("wui-otp")],cs);var yu={},JA=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},B5={},In={};let Um;const XA=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];In.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};In.getSymbolTotalCodewords=function(e){return XA[e]};In.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};In.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Um=e};In.isKanjiModeEnabled=function(){return typeof Um<"u"};In.toSJIS=function(e){return Um(e)};var ph={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(ph);function z5(){this.buffer=[],this.length=0}z5.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var eI=z5;function bu(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}bu.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)};bu.prototype.get=function(t,e){return this.data[t*this.size+e]};bu.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};bu.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var tI=bu,W5={};(function(t){const e=In.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([i[a],i[l]]);return o}})(W5);var F5={};const nI=In.getSymbolSize,l2=7;F5.getPositions=function(e){const n=nI(e);return[[0,0],[n-l2,0],[0,n-l2]]};var H5={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,l=0,c=null,u=null;for(let h=0;h<i;h++){a=l=0,c=u=null;for(let p=0;p<i;p++){let m=o.get(h,p);m===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=m,a=1),m=o.get(p,h),m===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=m,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const c=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,l=0;for(let c=0;c<i;c++){a=l=0;for(let u=0;u<i;u++)a=a<<1&2047|o.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let l=0;l<s;l++)i+=o.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,n(o,l,a))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){i(c),t.applyMask(c,o);const u=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(c,o),u<l&&(l=u,a=c)}return a}})(H5);var mh={};const Li=ph,Qu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ju=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];mh.getBlocksCount=function(e,n){switch(n){case Li.L:return Qu[(e-1)*4+0];case Li.M:return Qu[(e-1)*4+1];case Li.Q:return Qu[(e-1)*4+2];case Li.H:return Qu[(e-1)*4+3];default:return}};mh.getTotalCodewordsCount=function(e,n){switch(n){case Li.L:return Ju[(e-1)*4+0];case Li.M:return Ju[(e-1)*4+1];case Li.Q:return Ju[(e-1)*4+2];case Li.H:return Ju[(e-1)*4+3];default:return}};var V5={},gh={};const Hl=new Uint8Array(512),pf=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Hl[n]=e,pf[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Hl[n]=Hl[n-255]})();gh.log=function(e){if(e<1)throw new Error("log("+e+")");return pf[e]};gh.exp=function(e){return Hl[e]};gh.mul=function(e,n){return e===0||n===0?0:Hl[pf[e]+pf[n]]};(function(t){const e=gh;t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(r[s],o[a]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let l=0;l<o.length;l++)i[l]^=e.mul(o[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(V5);const Z5=V5;function Bm(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Bm.prototype.initialize=function(e){this.degree=e,this.genPoly=Z5.generateECPolynomial(this.degree)};Bm.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Z5.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var rI=Bm,G5={},mo={},zm={};zm.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Fr={};const q5="[0-9]+",iI="[A-Z $%*+\\-./:]+";let Qc="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Qc=Qc.replace(/u/g,"\\u");const oI="(?:(?![A-Z0-9 $%*+\\-./:]|"+Qc+`)(?:.|[\r
]))+`;Fr.KANJI=new RegExp(Qc,"g");Fr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Fr.BYTE=new RegExp(oI,"g");Fr.NUMERIC=new RegExp(q5,"g");Fr.ALPHANUMERIC=new RegExp(iI,"g");const sI=new RegExp("^"+Qc+"$"),aI=new RegExp("^"+q5+"$"),lI=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Fr.testKanji=function(e){return sI.test(e)};Fr.testNumeric=function(e){return aI.test(e)};Fr.testAlphanumeric=function(e){return lI.test(e)};(function(t){const e=zm,n=Fr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(mo);(function(t){const e=In,n=mh,r=ph,o=mo,i=zm,s=7973,a=e.getBCHDigit(s);function l(p,m,x){for(let C=1;C<=40;C++)if(m<=t.getCapacity(C,x,p))return C}function c(p,m){return o.getCharCountIndicator(p,m)+4}function u(p,m){let x=0;return p.forEach(function(C){const b=c(C.mode,m);x+=b+C.getBitsLength()}),x}function h(p,m){for(let x=1;x<=40;x++)if(u(p,x)<=t.getCapacity(x,m,o.MIXED))return x}t.from=function(m,x){return i.isValid(m)?parseInt(m,10):x},t.getCapacity=function(m,x,C){if(!i.isValid(m))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=o.BYTE);const b=e.getSymbolTotalCodewords(m),g=n.getTotalCodewordsCount(m,x),w=(b-g)*8;if(C===o.MIXED)return w;const y=w-c(C,m);switch(C){case o.NUMERIC:return Math.floor(y/10*3);case o.ALPHANUMERIC:return Math.floor(y/11*2);case o.KANJI:return Math.floor(y/13);case o.BYTE:default:return Math.floor(y/8)}},t.getBestVersionForData=function(m,x){let C;const b=r.from(x,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,b);if(m.length===0)return 1;C=m[0]}else C=m;return l(C.mode,C.getLength(),b)},t.getEncodedBits=function(m){if(!i.isValid(m)||m<7)throw new Error("Invalid QR Code version");let x=m<<12;for(;e.getBCHDigit(x)-a>=0;)x^=s<<e.getBCHDigit(x)-a;return m<<12|x}})(G5);var K5={};const Yp=In,Y5=1335,cI=21522,c2=Yp.getBCHDigit(Y5);K5.getEncodedBits=function(e,n){const r=e.bit<<3|n;let o=r<<10;for(;Yp.getBCHDigit(o)-c2>=0;)o^=Y5<<Yp.getBCHDigit(o)-c2;return(r<<10|o)^cI};var Q5={};const uI=mo;function Ua(t){this.mode=uI.NUMERIC,this.data=t.toString()}Ua.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ua.prototype.getLength=function(){return this.data.length};Ua.prototype.getBitsLength=function(){return Ua.getBitsLength(this.data.length)};Ua.prototype.write=function(e){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),e.put(o,i*3+1))};var dI=Ua;const fI=mo,y0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ba(t){this.mode=fI.ALPHANUMERIC,this.data=t}Ba.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Ba.prototype.getLength=function(){return this.data.length};Ba.prototype.getBitsLength=function(){return Ba.getBitsLength(this.data.length)};Ba.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=y0.indexOf(this.data[n])*45;r+=y0.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(y0.indexOf(this.data[n]),6)};var hI=Ba,pI=function(e){for(var n=[],r=e.length,o=0;o<r;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const mI=pI,gI=mo;function za(t){this.mode=gI.BYTE,typeof t=="string"&&(t=mI(t)),this.data=new Uint8Array(t)}za.getBitsLength=function(e){return e*8};za.prototype.getLength=function(){return this.data.length};za.prototype.getBitsLength=function(){return za.getBitsLength(this.data.length)};za.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var wI=za;const vI=mo,yI=In;function Wa(t){this.mode=vI.KANJI,this.data=t}Wa.getBitsLength=function(e){return e*13};Wa.prototype.getLength=function(){return this.data.length};Wa.prototype.getBitsLength=function(){return Wa.getBitsLength(this.data.length)};Wa.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=yI.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var bI=Wa,J5={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,h,p,m,x,C,b;!a.empty();){l=a.pop(),c=l.value,h=l.cost,p=n[c]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],x=h+m,C=s[u],b=typeof s[u]>"u",(b||C>x)&&(s[u]=x,a.push(u,x),i[u]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var g=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(g)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=e.single_source_shortest_paths(n,r,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(J5);var xI=J5.exports;(function(t){const e=mo,n=dI,r=hI,o=wI,i=bI,s=Fr,a=In,l=xI;function c(g){return unescape(encodeURIComponent(g)).length}function u(g,w,y){const S=[];let A;for(;(A=g.exec(y))!==null;)S.push({data:A[0],index:A.index,mode:w,length:A[0].length});return S}function h(g){const w=u(s.NUMERIC,e.NUMERIC,g),y=u(s.ALPHANUMERIC,e.ALPHANUMERIC,g);let S,A;return a.isKanjiModeEnabled()?(S=u(s.BYTE,e.BYTE,g),A=u(s.KANJI,e.KANJI,g)):(S=u(s.BYTE_KANJI,e.BYTE,g),A=[]),w.concat(y,S,A).sort(function(P,N){return P.index-N.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function p(g,w){switch(w){case e.NUMERIC:return n.getBitsLength(g);case e.ALPHANUMERIC:return r.getBitsLength(g);case e.KANJI:return i.getBitsLength(g);case e.BYTE:return o.getBitsLength(g)}}function m(g){return g.reduce(function(w,y){const S=w.length-1>=0?w[w.length-1]:null;return S&&S.mode===y.mode?(w[w.length-1].data+=y.data,w):(w.push(y),w)},[])}function x(g){const w=[];for(let y=0;y<g.length;y++){const S=g[y];switch(S.mode){case e.NUMERIC:w.push([S,{data:S.data,mode:e.ALPHANUMERIC,length:S.length},{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.ALPHANUMERIC:w.push([S,{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.KANJI:w.push([S,{data:S.data,mode:e.BYTE,length:c(S.data)}]);break;case e.BYTE:w.push([{data:S.data,mode:e.BYTE,length:c(S.data)}])}}return w}function C(g,w){const y={},S={start:{}};let A=["start"];for(let k=0;k<g.length;k++){const P=g[k],N=[];for(let V=0;V<P.length;V++){const j=P[V],W=""+k+V;N.push(W),y[W]={node:j,lastCount:0},S[W]={};for(let ve=0;ve<A.length;ve++){const Te=A[ve];y[Te]&&y[Te].node.mode===j.mode?(S[Te][W]=p(y[Te].lastCount+j.length,j.mode)-p(y[Te].lastCount,j.mode),y[Te].lastCount+=j.length):(y[Te]&&(y[Te].lastCount=j.length),S[Te][W]=p(j.length,j.mode)+4+e.getCharCountIndicator(j.mode,w))}}A=N}for(let k=0;k<A.length;k++)S[A[k]].end=0;return{map:S,table:y}}function b(g,w){let y;const S=e.getBestModeForData(g);if(y=e.from(w,S),y!==e.BYTE&&y.bit<S.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(S));switch(y===e.KANJI&&!a.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new n(g);case e.ALPHANUMERIC:return new r(g);case e.KANJI:return new i(g);case e.BYTE:return new o(g)}}t.fromArray=function(w){return w.reduce(function(y,S){return typeof S=="string"?y.push(b(S,null)):S.data&&y.push(b(S.data,S.mode)),y},[])},t.fromString=function(w,y){const S=h(w,a.isKanjiModeEnabled()),A=x(S),k=C(A,y),P=l.find_path(k.map,"start","end"),N=[];for(let V=1;V<P.length-1;V++)N.push(k.table[P[V]].node);return t.fromArray(m(N))},t.rawSplit=function(w){return t.fromArray(h(w,a.isKanjiModeEnabled()))}})(Q5);const wh=In,b0=ph,CI=eI,EI=tI,_I=W5,SI=F5,Qp=H5,Jp=mh,RI=rI,mf=G5,AI=K5,II=mo,x0=Q5;function kI(t,e){const n=t.size,r=SI.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(i+a,s+l,!0,!0):t.set(i+a,s+l,!1,!0))}}function $I(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function TI(t,e){const n=_I.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(o+s,i+a,!0,!0):t.set(o+s,i+a,!1,!0)}}function PI(t,e){const n=t.size,r=mf.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=(r>>a&1)===1,t.set(o,i,s,!0),t.set(i,o,s,!0)}function C0(t,e,n){const r=t.size,o=AI.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function OI(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(o,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>i&1)===1),t.set(o,a-l,c),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function NI(t,e,n){const r=new CI;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),II.getCharCountIndicator(l.mode,t)),l.write(r)});const o=wh.getSymbolTotalCodewords(t),i=Jp.getTotalCodewordsCount(t,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return MI(r,t,e)}function MI(t,e,n){const r=wh.getSymbolTotalCodewords(e),o=Jp.getTotalCodewordsCount(e,n),i=r-o,s=Jp.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(i/s),h=u+1,p=c-u,m=new RI(p);let x=0;const C=new Array(s),b=new Array(s);let g=0;const w=new Uint8Array(t.buffer);for(let P=0;P<s;P++){const N=P<l?u:h;C[P]=w.slice(x,x+N),b[P]=m.encode(C[P]),x+=N,g=Math.max(g,N)}const y=new Uint8Array(r);let S=0,A,k;for(A=0;A<g;A++)for(k=0;k<s;k++)A<C[k].length&&(y[S++]=C[k][A]);for(A=0;A<p;A++)for(k=0;k<s;k++)y[S++]=b[k][A];return y}function LI(t,e,n,r){let o;if(Array.isArray(t))o=x0.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=x0.rawSplit(t);c=mf.getBestVersionForData(u,n)}o=x0.fromString(t,c||40)}else throw new Error("Invalid data");const i=mf.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=NI(e,n,o),a=wh.getSymbolSize(e),l=new EI(a);return kI(l,e),$I(l),TI(l,e),C0(l,n,0),e>=7&&PI(l,e),OI(l,s),isNaN(r)&&(r=Qp.getBestMask(l,C0.bind(null,l,n))),Qp.applyMask(r,l),C0(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}B5.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=b0.M,o,i;return typeof n<"u"&&(r=b0.from(n.errorCorrectionLevel,b0.M),o=mf.from(n.version),i=Qp.from(n.maskPattern),n.toSJISFunc&&wh.setToSJISFunction(n.toSJISFunc)),LI(e,o,r,i)};var X5={},Wm={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,l=t.getScale(s,i),c=Math.floor((s+i.margin*2)*l),u=i.margin*l,h=[i.color.light,i.color.dark];for(let p=0;p<c;p++)for(let m=0;m<c;m++){let x=(p*c+m)*4,C=i.color.light;if(p>=u&&m>=u&&p<c-u&&m<c-u){const b=Math.floor((p-u)/l),g=Math.floor((m-u)/l);C=h[a[b*s+g]?1:0]}r[x++]=C.r,r[x++]=C.g,r[x++]=C.b,r[x]=C.a}}})(Wm);(function(t){const e=Wm;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(i.modules.size,l),h=c.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,i,l),n(h,c,u),h.putImageData(p,0,0),c},t.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(i,s,l),u=l.type||"image/png",h=l.rendererOpts||{};return c.toDataURL(u,h.quality)}})(X5);var e4={};const jI=Wm;function u2(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function E0(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function DI(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!i&&(i=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=i?E0("M",l+n,.5+c+n):E0("m",o,0),o=0,i=!1),l+1<e&&t[a+1]||(r+=E0("h",s),s=0)):o++}return r}e4.render=function(e,n,r){const o=jI.getOptions(n),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,l=o.color.light.a?"<path "+u2(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+u2(o.color.dark,"stroke")+' d="'+DI(s,i,o.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,p),p};const UI=JA,Xp=B5,t4=X5,BI=e4;function Fm(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!UI())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=Xp.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=Xp.create(n,r);o(null,t(l,e,r))}catch(l){o(l)}}yu.create=Xp.create;yu.toCanvas=Fm.bind(null,t4.render);yu.toDataURL=Fm.bind(null,t4.renderToDataURL);yu.toString=Fm.bind(null,function(t,e,n){return BI.render(t,n)});const zI=.1,d2=2.5,Zr=7;function _0(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+zI}function WI(t,e){const n=Array.prototype.slice.call(yu.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const FI={generate(t,e,n){const r="#141414",o="transparent",s=[],a=WI(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:C,y:b})=>{const g=(a.length-Zr)*l*C,w=(a.length-Zr)*l*b,y=.45;for(let S=0;S<c.length;S+=1){const A=l*(Zr-S*2);s.push(G`
            <rect
              fill=${S===2?r:o}
              width=${S===0?A-5:A}
              rx= ${S===0?(A-5)*y:A*y}
              ry= ${S===0?(A-5)*y:A*y}
              stroke=${r}
              stroke-width=${S===0?5:0}
              height=${S===0?A-5:A}
              x= ${S===0?w+l*S+5/2:w+l*S}
              y= ${S===0?g+l*S+5/2:g+l*S}
            />
          `)}});const u=Math.floor((n+25)/l),h=a.length/2-u/2,p=a.length/2+u/2-1,m=[];a.forEach((C,b)=>{C.forEach((g,w)=>{if(a[b][w]&&!(b<Zr&&w<Zr||b>a.length-(Zr+1)&&w<Zr||b<Zr&&w>a.length-(Zr+1))&&!(b>h&&b<p&&w>h&&w<p)){const y=b*l+l/2,S=w*l+l/2;m.push([y,S])}})});const x={};return m.forEach(([C,b])=>{var g;x[C]?(g=x[C])==null||g.push(b):x[C]=[b]}),Object.entries(x).map(([C,b])=>{const g=b.filter(w=>b.every(y=>!_0(w,y,l)));return[Number(C),g]}).forEach(([C,b])=>{b.forEach(g=>{s.push(G`<circle cx=${C} cy=${g} fill=${r} r=${l/d2} />`)})}),Object.entries(x).filter(([C,b])=>b.length>1).map(([C,b])=>{const g=b.filter(w=>b.some(y=>_0(w,y,l)));return[Number(C),g]}).map(([C,b])=>{b.sort((w,y)=>w<y?-1:1);const g=[];for(const w of b){const y=g.find(S=>S.some(A=>_0(w,A,l)));y?y.push(w):g.push([w])}return[C,g.map(w=>[w[0],w[w.length-1]])]}).forEach(([C,b])=>{b.forEach(([g,w])=>{s.push(G`
              <line
                x1=${C}
                x2=${C}
                y1=${g}
                y2=${w}
                stroke=${r}
                stroke-width=${l/(d2/2)}
                stroke-linecap="round"
              />
            `)})}),s}},HI=H`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var rl=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ci=class extends z{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,E`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return G`
      <svg height=${e} width=${e}>
        ${FI.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?E`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:E`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ci.styles=[he,HI];rl([R()],ci.prototype,"uri",void 0);rl([R({type:Number})],ci.prototype,"size",void 0);rl([R()],ci.prototype,"theme",void 0);rl([R()],ci.prototype,"imageSrc",void 0);rl([R()],ci.prototype,"alt",void 0);ci=rl([U("wui-qr-code")],ci);const VI=H`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var ZI=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let gf=class extends z{constructor(){super(...arguments),this.inputComponentRef=ch()}render(){return E`
      <wui-input-text
        ${uh(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};gf.styles=[he,VI];gf=ZI([U("wui-search-bar")],gf);const GI=H`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var xu=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let so=class extends z{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return E`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};so.styles=[he,GI];xu([R()],so.prototype,"backgroundColor",void 0);xu([R()],so.prototype,"iconColor",void 0);xu([R()],so.prototype,"icon",void 0);xu([R()],so.prototype,"message",void 0);so=xu([U("wui-snackbar")],so);const qI=H`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var go=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let dr=class extends z{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return E`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],o=this.buttons[e],i=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&i&&!n&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,o.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};dr.styles=[he,He,qI];go([R({type:Array})],dr.prototype,"tabs",void 0);go([R()],dr.prototype,"onTabChange",void 0);go([R({type:Array})],dr.prototype,"buttons",void 0);go([R({type:Boolean})],dr.prototype,"disabled",void 0);go([B()],dr.prototype,"activeTab",void 0);go([B()],dr.prototype,"localTabWidth",void 0);go([B()],dr.prototype,"isDense",void 0);dr=go([U("wui-tabs")],dr);const KI=H`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Hm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Fa=class extends z{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return E`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Fa.styles=[he,He,KI];Hm([R()],Fa.prototype,"placement",void 0);Hm([R()],Fa.prototype,"message",void 0);Fa=Hm([U("wui-tooltip")],Fa);const YI=H`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var vh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let us=class extends z{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,E`${this.templateVisual()}`}templateVisual(){return this.imageSrc?E`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:E`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};us.styles=[he,YI];vh([R()],us.prototype,"imageSrc",void 0);vh([R()],us.prototype,"alt",void 0);vh([R({type:Boolean})],us.prototype,"borderRadiusFull",void 0);us=vh([U("wui-visual-thumbnail")],us);const QI=H`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var yh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ds=class extends z{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return E`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ds.styles=[he,He,QI];yh([R()],ds.prototype,"label",void 0);yh([R()],ds.prototype,"description",void 0);yh([R()],ds.prototype,"icon",void 0);ds=yh([U("wui-notice-card")],ds);const JI=H`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Vm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const S0=100;let Ha=class extends z{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>S0&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return E`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${S0}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${S0}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?E` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Ha.styles=[he,He,JI];Vm([R()],Ha.prototype,"textTitle",void 0);Vm([R()],Ha.prototype,"overflowedContent",void 0);Ha=Vm([U("wui-list-accordion")],Ha);const XI=H`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var bh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fs=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return E`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?E`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?E` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:E`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};fs.styles=[he,He,XI];bh([R()],fs.prototype,"imageSrc",void 0);bh([R()],fs.prototype,"textTitle",void 0);bh([R()],fs.prototype,"textValue",void 0);fs=bh([U("wui-list-content")],fs);const ek=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var xh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hs=class extends z{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1}render(){return E`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?E`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:E`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};hs.styles=[he,He,ek];xh([R()],hs.prototype,"imageSrc",void 0);xh([R()],hs.prototype,"name",void 0);xh([R({type:Boolean})],hs.prototype,"disabled",void 0);hs=xh([U("wui-list-network")],hs);const tk=H`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var il=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ui=class extends z{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return E`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?E`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:E`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ui.styles=[he,He,tk];il([R()],ui.prototype,"amount",void 0);il([R()],ui.prototype,"networkCurreny",void 0);il([R()],ui.prototype,"networkImageUrl",void 0);il([R()],ui.prototype,"receiverAddress",void 0);il([R()],ui.prototype,"addressExplorerUrl",void 0);ui=il([U("wui-list-wallet-transaction")],ui);const nk=H`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var kn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Dt=class extends z{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return E`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?E`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:E`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await we._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return E`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return E`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return E`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Dt.styles=[he,He,nk];kn([R({type:Boolean})],Dt.prototype,"disabled",void 0);kn([R()],Dt.prototype,"color",void 0);kn([R()],Dt.prototype,"label",void 0);kn([R()],Dt.prototype,"purchaseValue",void 0);kn([R()],Dt.prototype,"purchaseCurrency",void 0);kn([R()],Dt.prototype,"date",void 0);kn([R({type:Boolean})],Dt.prototype,"completed",void 0);kn([R({type:Boolean})],Dt.prototype,"inProgress",void 0);kn([R({type:Boolean})],Dt.prototype,"failed",void 0);kn([R()],Dt.prototype,"onClick",void 0);kn([R()],Dt.prototype,"symbol",void 0);kn([R()],Dt.prototype,"icon",void 0);Dt=kn([U("wui-onramp-activity-item")],Dt);const rk=H`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color 0.2s linear;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow 0.2s linear;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var wo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fr=class extends z{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return E`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${de(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?E`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:E`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=$e.getRequestedCaipNetworks(),n=e==null?void 0:e.slice(0,5);return E`
      <wui-flex class="networks">
        ${n==null?void 0:n.map(r=>E`
            <wui-flex class="network-icon">
              <wui-image src=${de(qe.getNetworkImage(r))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};fr.styles=[he,He,rk];wo([R({type:Boolean})],fr.prototype,"disabled",void 0);wo([R()],fr.prototype,"color",void 0);wo([R()],fr.prototype,"name",void 0);wo([R()],fr.prototype,"label",void 0);wo([R()],fr.prototype,"feeRange",void 0);wo([R({type:Boolean})],fr.prototype,"loading",void 0);wo([R()],fr.prototype,"onClick",void 0);fr=wo([U("wui-onramp-provider-item")],fr);const ik=H`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Fn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Yt=class extends z{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Le.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Le.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Le.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Le.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Le.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Le.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Le.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Le.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};Yt.styles=[he,ik];Fn([R()],Yt.prototype,"gridTemplateRows",void 0);Fn([R()],Yt.prototype,"gridTemplateColumns",void 0);Fn([R()],Yt.prototype,"justifyItems",void 0);Fn([R()],Yt.prototype,"alignItems",void 0);Fn([R()],Yt.prototype,"justifyContent",void 0);Fn([R()],Yt.prototype,"alignContent",void 0);Fn([R()],Yt.prototype,"columnGap",void 0);Fn([R()],Yt.prototype,"rowGap",void 0);Fn([R()],Yt.prototype,"gap",void 0);Fn([R()],Yt.prototype,"padding",void 0);Fn([R()],Yt.prototype,"margin",void 0);Yt=Fn([U("wui-grid")],Yt);const ok=H`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var n4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Jc=class extends z{constructor(){super(...arguments),this.text=""}render(){return E`${this.template()}`}template(){return this.text?E`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Jc.styles=[he,ok];n4([R()],Jc.prototype,"text",void 0);Jc=n4([U("wui-separator")],Jc);var r4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(l1,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",a="minute",l="hour",c="day",u="week",h="month",p="quarter",m="year",x="date",C="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,w={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(le){var X=["th","st","nd","rd"],q=le%100;return"["+le+(X[(q-20)%10]||X[q]||X[0])+"]"}},y=function(le,X,q){var ae=String(le);return!ae||ae.length>=X?le:""+Array(X+1-ae.length).join(q)+le},S={s:y,z:function(le){var X=-le.utcOffset(),q=Math.abs(X),ae=Math.floor(q/60),O=q%60;return(X<=0?"+":"-")+y(ae,2,"0")+":"+y(O,2,"0")},m:function le(X,q){if(X.date()<q.date())return-le(q,X);var ae=12*(q.year()-X.year())+(q.month()-X.month()),O=X.clone().add(ae,h),K=q-O<0,Y=X.clone().add(ae+(K?-1:1),h);return+(-(ae+(q-O)/(K?O-Y:Y-O))||0)},a:function(le){return le<0?Math.ceil(le)||0:Math.floor(le)},p:function(le){return{M:h,y:m,w:u,d:c,D:x,h:l,m:a,s,ms:i,Q:p}[le]||String(le||"").toLowerCase().replace(/s$/,"")},u:function(le){return le===void 0}},A="en",k={};k[A]=w;var P="$isDayjsObject",N=function(le){return le instanceof ve||!(!le||!le[P])},V=function le(X,q,ae){var O;if(!X)return A;if(typeof X=="string"){var K=X.toLowerCase();k[K]&&(O=K),q&&(k[K]=q,O=K);var Y=X.split("-");if(!O&&Y.length>1)return le(Y[0])}else{var te=X.name;k[te]=X,O=te}return!ae&&O&&(A=O),O||!ae&&A},j=function(le,X){if(N(le))return le.clone();var q=typeof X=="object"?X:{};return q.date=le,q.args=arguments,new ve(q)},W=S;W.l=V,W.i=N,W.w=function(le,X){return j(le,{locale:X.$L,utc:X.$u,x:X.$x,$offset:X.$offset})};var ve=function(){function le(q){this.$L=V(q.locale,null,!0),this.parse(q),this.$x=this.$x||q.x||{},this[P]=!0}var X=le.prototype;return X.parse=function(q){this.$d=function(ae){var O=ae.date,K=ae.utc;if(O===null)return new Date(NaN);if(W.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var Y=O.match(b);if(Y){var te=Y[2]-1||0,ue=(Y[7]||"0").substring(0,3);return K?new Date(Date.UTC(Y[1],te,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ue)):new Date(Y[1],te,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ue)}}return new Date(O)}(q),this.init()},X.init=function(){var q=this.$d;this.$y=q.getFullYear(),this.$M=q.getMonth(),this.$D=q.getDate(),this.$W=q.getDay(),this.$H=q.getHours(),this.$m=q.getMinutes(),this.$s=q.getSeconds(),this.$ms=q.getMilliseconds()},X.$utils=function(){return W},X.isValid=function(){return this.$d.toString()!==C},X.isSame=function(q,ae){var O=j(q);return this.startOf(ae)<=O&&O<=this.endOf(ae)},X.isAfter=function(q,ae){return j(q)<this.startOf(ae)},X.isBefore=function(q,ae){return this.endOf(ae)<j(q)},X.$g=function(q,ae,O){return W.u(q)?this[ae]:this.set(O,q)},X.unix=function(){return Math.floor(this.valueOf()/1e3)},X.valueOf=function(){return this.$d.getTime()},X.startOf=function(q,ae){var O=this,K=!!W.u(ae)||ae,Y=W.p(q),te=function(Vn,At){var vr=W.w(O.$u?Date.UTC(O.$y,At,Vn):new Date(O.$y,At,Vn),O);return K?vr:vr.endOf(c)},ue=function(Vn,At){return W.w(O.toDate()[Vn].apply(O.toDate("s"),(K?[0,0,0,0]:[23,59,59,999]).slice(At)),O)},ze=this.$W,De=this.$M,pt=this.$D,Rt="set"+(this.$u?"UTC":"");switch(Y){case m:return K?te(1,0):te(31,11);case h:return K?te(1,De):te(0,De+1);case u:var Bt=this.$locale().weekStart||0,$n=(ze<Bt?ze+7:ze)-Bt;return te(K?pt-$n:pt+(6-$n),De);case c:case x:return ue(Rt+"Hours",0);case l:return ue(Rt+"Minutes",1);case a:return ue(Rt+"Seconds",2);case s:return ue(Rt+"Milliseconds",3);default:return this.clone()}},X.endOf=function(q){return this.startOf(q,!1)},X.$set=function(q,ae){var O,K=W.p(q),Y="set"+(this.$u?"UTC":""),te=(O={},O[c]=Y+"Date",O[x]=Y+"Date",O[h]=Y+"Month",O[m]=Y+"FullYear",O[l]=Y+"Hours",O[a]=Y+"Minutes",O[s]=Y+"Seconds",O[i]=Y+"Milliseconds",O)[K],ue=K===c?this.$D+(ae-this.$W):ae;if(K===h||K===m){var ze=this.clone().set(x,1);ze.$d[te](ue),ze.init(),this.$d=ze.set(x,Math.min(this.$D,ze.daysInMonth())).$d}else te&&this.$d[te](ue);return this.init(),this},X.set=function(q,ae){return this.clone().$set(q,ae)},X.get=function(q){return this[W.p(q)]()},X.add=function(q,ae){var O,K=this;q=Number(q);var Y=W.p(ae),te=function(De){var pt=j(K);return W.w(pt.date(pt.date()+Math.round(De*q)),K)};if(Y===h)return this.set(h,this.$M+q);if(Y===m)return this.set(m,this.$y+q);if(Y===c)return te(1);if(Y===u)return te(7);var ue=(O={},O[a]=r,O[l]=o,O[s]=n,O)[Y]||1,ze=this.$d.getTime()+q*ue;return W.w(ze,this)},X.subtract=function(q,ae){return this.add(-1*q,ae)},X.format=function(q){var ae=this,O=this.$locale();if(!this.isValid())return O.invalidDate||C;var K=q||"YYYY-MM-DDTHH:mm:ssZ",Y=W.z(this),te=this.$H,ue=this.$m,ze=this.$M,De=O.weekdays,pt=O.months,Rt=O.meridiem,Bt=function(At,vr,gi,Zn){return At&&(At[vr]||At(ae,K))||gi[vr].slice(0,Zn)},$n=function(At){return W.s(te%12||12,At,"0")},Vn=Rt||function(At,vr,gi){var Zn=At<12?"AM":"PM";return gi?Zn.toLowerCase():Zn};return K.replace(g,function(At,vr){return vr||function(gi){switch(gi){case"YY":return String(ae.$y).slice(-2);case"YYYY":return W.s(ae.$y,4,"0");case"M":return ze+1;case"MM":return W.s(ze+1,2,"0");case"MMM":return Bt(O.monthsShort,ze,pt,3);case"MMMM":return Bt(pt,ze);case"D":return ae.$D;case"DD":return W.s(ae.$D,2,"0");case"d":return String(ae.$W);case"dd":return Bt(O.weekdaysMin,ae.$W,De,2);case"ddd":return Bt(O.weekdaysShort,ae.$W,De,3);case"dddd":return De[ae.$W];case"H":return String(te);case"HH":return W.s(te,2,"0");case"h":return $n(1);case"hh":return $n(2);case"a":return Vn(te,ue,!0);case"A":return Vn(te,ue,!1);case"m":return String(ue);case"mm":return W.s(ue,2,"0");case"s":return String(ae.$s);case"ss":return W.s(ae.$s,2,"0");case"SSS":return W.s(ae.$ms,3,"0");case"Z":return Y}return null}(At)||Y.replace(":","")})},X.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},X.diff=function(q,ae,O){var K,Y=this,te=W.p(ae),ue=j(q),ze=(ue.utcOffset()-this.utcOffset())*r,De=this-ue,pt=function(){return W.m(Y,ue)};switch(te){case m:K=pt()/12;break;case h:K=pt();break;case p:K=pt()/3;break;case u:K=(De-ze)/6048e5;break;case c:K=(De-ze)/864e5;break;case l:K=De/o;break;case a:K=De/r;break;case s:K=De/n;break;default:K=De}return O?K:W.a(K)},X.daysInMonth=function(){return this.endOf(h).$D},X.$locale=function(){return k[this.$L]},X.locale=function(q,ae){if(!q)return this.$L;var O=this.clone(),K=V(q,ae,!0);return K&&(O.$L=K),O},X.clone=function(){return W.w(this.$d,this)},X.toDate=function(){return new Date(this.valueOf())},X.toJSON=function(){return this.isValid()?this.toISOString():null},X.toISOString=function(){return this.$d.toISOString()},X.toString=function(){return this.$d.toUTCString()},le}(),Te=ve.prototype;return j.prototype=Te,[["$ms",i],["$s",s],["$m",a],["$H",l],["$W",c],["$M",h],["$y",m],["$D",x]].forEach(function(le){Te[le[1]]=function(X){return this.$g(X,le[0],le[1])}}),j.extend=function(le,X){return le.$i||(le(X,ve,j),le.$i=!0),j},j.locale=V,j.isDayjs=N,j.unix=function(le){return j(1e3*le)},j.en=k[A],j.Ls=k,j.p={},j})})(r4);var sk=r4.exports;const ia=su(sk);var i4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(l1,function(){return function(n,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(i4);var ak=i4.exports;const lk=su(ak);var o4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(l1,function(){return function(n,r,o){n=n||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,h,p){return i.fromToBase(c,u,h,p)}o.en.relativeTime=s,i.fromToBase=function(c,u,h,p,m){for(var x,C,b,g=h.$locale().relativeTime||s,w=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],y=w.length,S=0;S<y;S+=1){var A=w[S];A.d&&(x=p?o(c).diff(h,A.d,!0):h.diff(c,A.d,!0));var k=(n.rounding||Math.round)(Math.abs(x));if(b=x>0,k<=A.r||!A.r){k<=1&&S>0&&(A=w[S-1]);var P=g[A.l];m&&(k=m(""+k)),C=typeof P=="string"?P.replace("%d",k):P(k,u,A.l,b);break}}if(u)return C;var N=b?g.future:g.past;return typeof N=="function"?N(C):N.replace("%s",C)},i.to=function(c,u){return a(c,u,this,!0)},i.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?o.utc():o()};i.toNow=function(c){return this.to(l(this),c)},i.fromNow=function(c){return this.from(l(this),c)}}})})(o4);var ck=o4.exports;const uk=su(ck);ia.extend(uk);ia.extend(lk);ia.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Zm={getYear(t=new Date().toISOString()){return ia(t).year()},getRelativeDateFromNow(t){return ia(t).fromNow(!0)},formatDate(t,e="DD MMM"){return ia(t).format(e)}},dk=3,fk=["receive","deposit","borrow","claim"],hk=["withdraw","repay","burn"],ji={getMonthName(t){const e=new Date;return e.setMonth(t),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(t,e){const n=Zm.getYear(),r=this.getMonthName(e);return t===n?r:`${r} ${t}`},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),o=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:o?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:ji.getTransactionTransferTokenType(t),url:ji.getTransactionImageURL(t)}},getTransactionImageURL(t){var o,i,s,a,l;let e;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(i=(o=t==null?void 0:t.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t){var h,p,m;const e=(h=t==null?void 0:t.metadata)==null?void 0:h.operationType,n=t==null?void 0:t.transfers,r=((p=t==null?void 0:t.transfers)==null?void 0:p.length)>0,o=((m=t==null?void 0:t.transfers)==null?void 0:m.length)>1,i=r&&(n==null?void 0:n.every(x=>!!(x!=null&&x.fungible_info))),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&i?(l=Le.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=Le.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(o)return n.map(x=>this.getTransferDescription(x));let u="";return fk.includes(e)?u="+":hk.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(dk):null}},pk=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:ji,UiHelperUtil:Le,get WuiAccountButton(){return bn},get WuiAllWalletsImage(){return Zc},get WuiAvatar(){return os},get WuiButton(){return xn},get WuiCard(){return uf},get WuiCardSelect(){return Nr},get WuiCardSelectLoader(){return Gc},get WuiChip(){return Mr},get WuiConnectButton(){return Ma},get WuiCtaButton(){return ss},get WuiEmailInput(){return as},get WuiFlex(){return jt},get WuiGrid(){return Yt},get WuiIcon(){return ns},get WuiIconBox(){return zn},get WuiIconLink(){return oo},get WuiImage(){return Pa},get WuiInputElement(){return qc},get WuiInputNumeric(){return La},get WuiInputText(){return ur},get WuiLink(){return ja},get WuiListAccordion(){return Ha},get WuiListContent(){return fs},get WuiListItem(){return Cn},get WuiListNetwork(){return hs},get WuiListWallet(){return ln},get WuiListWalletTransaction(){return ui},get WuiLoadingHexagon(){return df},get WuiLoadingSpinner(){return Oa},get WuiLoadingThumbnail(){return Vc},get WuiLogo(){return Yc},get WuiLogoSelect(){return Da},get WuiNetworkButton(){return ls},get WuiNetworkImage(){return io},get WuiNoticeCard(){return ds},get WuiOnRampActivityItem(){return Dt},get WuiOnRampProviderItem(){return fr},get WuiOtp(){return cs},get WuiQrCode(){return ci},get WuiSearchBar(){return gf},get WuiSeparator(){return Jc},get WuiShimmer(){return rs},get WuiSnackbar(){return so},get WuiTabs(){return dr},get WuiTag(){return Kc},get WuiText(){return is},get WuiTooltip(){return Fa},get WuiTransactionListItem(){return an},get WuiTransactionListItemLoader(){return hf},get WuiTransactionVisual(){return Lr},get WuiVisual(){return Na},get WuiVisualThumbnail(){return us},get WuiWalletImage(){return Or},customElement:U,initializeTheming:A5,setColorTheme:$m,setThemeVariables:I5},Symbol.toStringTag,{value:"Module"}));var Hn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let En=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=me.state.address,this.balanceVal=me.state.balance,this.balanceSymbol=me.state.balanceSymbol,this.profileName=me.state.profileName,this.profileImage=me.state.profileImage,this.network=$e.state.caipNetwork,this.isUnsupportedChain=$e.state.isUnsupportedChain,this.unsubscribe.push(me.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),$e.subscribeKey("caipNetwork",e=>this.network=e),$e.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=qe.getNetworkImage(this.network),n=this.balance==="show";return E`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${de(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${de(e)}
        avatarSrc=${de(this.profileImage)}
        balance=${n?oe.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Se.open({view:"UnsupportedChain"}):Se.open()}};Hn([R({type:Boolean})],En.prototype,"disabled",void 0);Hn([R()],En.prototype,"balance",void 0);Hn([R()],En.prototype,"charsStart",void 0);Hn([R()],En.prototype,"charsEnd",void 0);Hn([B()],En.prototype,"address",void 0);Hn([B()],En.prototype,"balanceVal",void 0);Hn([B()],En.prototype,"balanceSymbol",void 0);Hn([B()],En.prototype,"profileName",void 0);Hn([B()],En.prototype,"profileImage",void 0);Hn([B()],En.prototype,"network",void 0);Hn([B()],En.prototype,"isUnsupportedChain",void 0);En=Hn([U("w3m-account-button")],En);const mk=H`
  :host {
    display: block;
    width: max-content;
  }
`;var mi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hr=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=me.state.isConnected,this.unsubscribe.push(me.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?E`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${de(this.balance)}
            .charsStart=${de(this.charsStart)}
            .charsEnd=${de(this.charsEnd)}
          >
          </w3m-account-button>
        `:E`
          <w3m-connect-button
            size=${de(this.size)}
            label=${de(this.label)}
            loadingLabel=${de(this.loadingLabel)}
          ></w3m-connect-button>
        `}};hr.styles=mk;mi([R({type:Boolean})],hr.prototype,"disabled",void 0);mi([R()],hr.prototype,"balance",void 0);mi([R()],hr.prototype,"size",void 0);mi([R()],hr.prototype,"label",void 0);mi([R()],hr.prototype,"loadingLabel",void 0);mi([R()],hr.prototype,"charsStart",void 0);mi([R()],hr.prototype,"charsEnd",void 0);mi([B()],hr.prototype,"isAccount",void 0);hr=mi([U("w3m-button")],hr);var ol=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ps=class extends z{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Se.state.open,this.loading=Se.state.loading,this.unsubscribe.push(Se.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return E`
      <wui-connect-button
        size=${de(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Se.close():this.loading||Se.open()}};ol([R()],ps.prototype,"size",void 0);ol([R()],ps.prototype,"label",void 0);ol([R()],ps.prototype,"loadingLabel",void 0);ol([B()],ps.prototype,"open",void 0);ol([B()],ps.prototype,"loading",void 0);ps=ol([U("w3m-connect-button")],ps);const gk=H`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ch=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const f2="scroll-lock";let ms=class extends z{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Se.state.open,this.caipAddress=me.state.caipAddress,this.isSiweEnabled=lt.state.isSiweEnabled,this.initializeTheming(),we.prefetch(),this.unsubscribe.push(Se.subscribeKey("open",e=>e?this.onOpen():this.onClose()),lt.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),me.subscribe(e=>this.onNewAccountState(e))),ce.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?E`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&lt.state.status!=="success"&&await Ae.disconnect(),Se.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=Ct.state,r=Le.getColorTheme(n);A5(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Be.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=f2,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${f2}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await lt.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const o=await lt.getSession();o&&!n?await lt.signOut():n&&!o&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?J.push("ConnectingSiwe"):Se.open({view:"ConnectingSiwe"})}};ms.styles=gk;Ch([B()],ms.prototype,"open",void 0);Ch([B()],ms.prototype,"caipAddress",void 0);Ch([B()],ms.prototype,"isSiweEnabled",void 0);ms=Ch([U("w3m-modal")],ms);const wk=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ms}},Symbol.toStringTag,{value:"Module"})),vk=H`
  :host {
    display: block;
    width: max-content;
  }
`;var sl=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ao=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=$e.state.caipNetwork,this.connected=me.state.isConnected,this.loading=Se.state.loading,this.isUnsupportedChain=$e.state.isUnsupportedChain,this.unsubscribe.push($e.subscribeKey("caipNetwork",e=>this.network=e),me.subscribeKey("isConnected",e=>this.connected=e),Se.subscribeKey("loading",e=>this.loading=e),$e.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return E`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${de(qe.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(ce.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Se.open({view:"Networks"}))}};ao.styles=vk;sl([R({type:Boolean})],ao.prototype,"disabled",void 0);sl([B()],ao.prototype,"network",void 0);sl([B()],ao.prototype,"connected",void 0);sl([B()],ao.prototype,"loading",void 0);sl([B()],ao.prototype,"isUnsupportedChain",void 0);ao=sl([U("w3m-network-button")],ao);const yk=H`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var s4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let wf=class extends z{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=J.state.view,this.unsubscribe.push(J.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return E`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return E`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return E`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return E`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return E`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return E`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return E`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return E`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return E`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return E`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return E`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return E`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return E`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return E`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return E`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return E`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return E`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return E`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return E`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return E`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return E`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return E`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return E`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return E`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return E`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return E`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return E`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return E`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return E`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;default:return E`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=J.state;let r=-10,o=10;n.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};wf.styles=yk;s4([B()],wf.prototype,"view",void 0);wf=s4([U("w3m-router")],wf);const bk=H`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var vo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const xk={USD:"$",EUR:"€",GBP:"£"},Ck=[100,250,500,1e3];let jr=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=me.state.isConnected,this.loading=Se.state.loading,this.paymentCurrency=Ne.state.paymentCurrency,this.paymentAmount=Ne.state.paymentAmount,this.purchaseAmount=Ne.state.purchaseAmount,this.quoteLoading=Ne.state.quotesLoading,this.unsubscribe.push(me.subscribeKey("isConnected",e=>{this.connected=e}),Se.subscribeKey("loading",e=>{this.loading=e}),Ne.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Ck.map(e=>{var n;return E`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${xk[((n=this.paymentCurrency)==null?void 0:n.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?E`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:E`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Se.open({view:"OnRampProviders"})}openModal(){Se.open({view:"Connect"})}async onPaymentAmountChange(e){Ne.setPaymentAmount(Number(e.detail)),await Ne.getQuote()}async selectPresetAmount(e){Ne.setPaymentAmount(e),await Ne.getQuote()}};jr.styles=bk;vo([R({type:Boolean})],jr.prototype,"disabled",void 0);vo([B()],jr.prototype,"connected",void 0);vo([B()],jr.prototype,"loading",void 0);vo([B()],jr.prototype,"paymentCurrency",void 0);vo([B()],jr.prototype,"paymentAmount",void 0);vo([B()],jr.prototype,"purchaseAmount",void 0);vo([B()],jr.prototype,"quoteLoading",void 0);jr=vo([U("w3m-onramp-widget")],jr);const Ek=H`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var yo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Dr=class extends z{constructor(){super(),this.usubscribe=[],this.networkImages=_t.state.networkImages,this.address=me.state.address,this.profileImage=me.state.profileImage,this.profileName=me.state.profileName,this.balance=me.state.balance,this.balanceSymbol=me.state.balanceSymbol,this.network=$e.state.caipNetwork,this.disconnecting=!1,this.usubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Se.close()}),$e.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,r;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return E`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${de(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Le.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Le.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${oe.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>
            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","xl","xl"]}>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${de(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((r=this.network)==null?void 0:r.name)??"Unknown"}
            </wui-text>
          </wui-list-item>

          <wui-list-item
            iconVariant="blue"
            icon="swapHorizontalBold"
            iconSize="sm"
            ?chevron=${!0}
            @click=${this.onTransactions.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
          </wui-list-item>
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}onTransactions(){ce.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),J.push("Transactions")}explorerBtnTemplate(){const{addressExplorerUrl:e}=me.state;return e?E`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=$e.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),Be.showSuccess("Address copied"))}catch{Be.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&J.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Ae.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Se.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Be.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=me.state;e&&oe.openHref(e,"_blank")}};Dr.styles=Ek;yo([B()],Dr.prototype,"address",void 0);yo([B()],Dr.prototype,"profileImage",void 0);yo([B()],Dr.prototype,"profileName",void 0);yo([B()],Dr.prototype,"balance",void 0);yo([B()],Dr.prototype,"balanceSymbol",void 0);yo([B()],Dr.prototype,"network",void 0);yo([B()],Dr.prototype,"disconnecting",void 0);Dr=yo([U("w3m-account-settings-view")],Dr);const _k=H`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var bo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ur=class extends z{constructor(){super(),this.unsubscribe=[],this.address=me.state.address,this.profileImage=me.state.profileImage,this.profileName=me.state.profileName,this.network=$e.state.caipNetwork,this.disconnecting=!1,this.balance=me.state.balance,this.balanceSymbol=me.state.balanceSymbol,this.unsubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Se.close()}),$e.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=qe.getNetworkImage(this.network);return E`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${de(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?Le.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Le.getTruncateString({string:this.address,charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${oe.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${de(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}onrampTemplate(){const{enableOnramp:e}=Ce.state;return e?E`
      <wui-list-item
        iconVariant="blue"
        icon="add"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=Gt.getConnectedConnector(),n=Fe.getEmailConnector(),{origin:r}=location;return!n||e!=="EMAIL"||r.includes(gn.SECURE_SITE)?null:E`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}handleClickPay(){J.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=me.state;return e?E`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=Gt.getConnectedConnector(),n=Fe.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return E`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=$e.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),Be.showSuccess("Address copied"))}catch{Be.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(ce.sendEvent({type:"track",event:"CLICK_NETWORKS"}),J.push("Networks"))}onTransactions(){ce.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),J.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Ae.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Se.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Be.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=me.state;e&&oe.openHref(e,"_blank")}onGoToUpgradeView(){ce.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),J.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){J.push("UpdateEmailWallet",{email:e})}};Ur.styles=_k;bo([B()],Ur.prototype,"address",void 0);bo([B()],Ur.prototype,"profileImage",void 0);bo([B()],Ur.prototype,"profileName",void 0);bo([B()],Ur.prototype,"network",void 0);bo([B()],Ur.prototype,"disconnecting",void 0);bo([B()],Ur.prototype,"balance",void 0);bo([B()],Ur.prototype,"balanceSymbol",void 0);Ur=bo([U("w3m-account-view")],Ur);var a4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let e1=class extends z{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=oe.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return E`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?E`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:E`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return oe.isMobile()?E`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){J.push("ConnectingWalletConnect")}};a4([B()],e1.prototype,"search",void 0);e1=a4([U("w3m-all-wallets-view")],e1);const Sk=H`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var wr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let _n=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Ne.state.selectedProvider,this.uri=Ae.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.intervalId=null,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ne.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var r,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(r=this.selectedOnRampProvider)==null?void 0:r.label}`);const n=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return E`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${de((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),1e4)}async watchCoinbaseTransactions(){try{await this.fetchCoinbaseTransactions()}catch(e){Be.showError(e)}}async fetchCoinbaseTransactions(){const e=me.state.address,n=Ce.state.projectId;if(!e)throw new Error("No address found");const o=(await $a.fetchTransactions({account:e,onramp:"coinbase",projectId:n})).data.filter(i=>i.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");this.intervalId&&clearInterval(this.intervalId),o.length?J.replace("OnRampActivity"):this.startTime&&Date.now()-this.startTime>=18e4&&(this.error=!0)}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,oe.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?E`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Ct.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return E`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){Be.showError("No link found"),J.goBack();return}try{oe.copyToClopboard(this.selectedOnRampProvider.url),Be.showSuccess("Link copied")}catch{Be.showError("Failed to copy")}}};_n.styles=Sk;wr([B()],_n.prototype,"selectedOnRampProvider",void 0);wr([B()],_n.prototype,"uri",void 0);wr([B()],_n.prototype,"ready",void 0);wr([B()],_n.prototype,"showRetry",void 0);wr([B()],_n.prototype,"buffering",void 0);wr([B()],_n.prototype,"error",void 0);wr([B()],_n.prototype,"intervalId",void 0);wr([B()],_n.prototype,"startTime",void 0);wr([R({type:Boolean})],_n.prototype,"isMobile",void 0);wr([R()],_n.prototype,"onRetry",void 0);_n=wr([U("w3m-buy-in-progress-view")],_n);const Rk=H`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var l4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let vf=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=Fe.state.connectors,this.unsubscribe.push(Fe.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(oe.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?E`
      <wui-list-wallet
        imageSrc=${de(qe.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ce.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>E`
        <wui-list-wallet
          imageSrc=${de(qe.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:n}=we.state;return n.length?this.filterOutDuplicateWallets(n).map(o=>E`
        <wui-list-wallet
          imageSrc=${de(qe.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Gt.getRecentWallets().map(n=>E`
        <wui-list-wallet
          imageSrc=${de(qe.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:E`
        <wui-list-wallet
          imageSrc=${de(qe.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!Ae.checkInstalled()?null:E`
        <wui-list-wallet
          imageSrc=${de(qe.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=Fe.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(gn.CONNECTOR_RDNS_MAP[n.id])?null:E`
        <wui-list-wallet
          imageSrc=${de(qe.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(l=>l.type==="WALLET_CONNECT"),{allWallets:n}=Ce.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!oe.isMobile())return null;const r=we.state.count,o=we.state.featured.length,i=r+o,s=i<10?i:Math.floor(i/10)*10,a=s<i?`${s}+`:`${s}`;return E`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(p=>p.type==="WALLET_CONNECT"))return null;const{recommended:n}=we.state,{customWallets:r,featuredWalletIds:o}=Ce.state,{connectors:i}=Fe.state,s=Gt.getRecentWallets(),l=i.filter(p=>p.type==="INJECTED").filter(p=>p.name!=="Browser Wallet");if(o||r||!n.length)return null;const c=l.length+s.length,u=Math.max(0,2-c);return this.filterOutDuplicateWallets(n).slice(0,u).map(p=>E`
        <wui-list-wallet
          imageSrc=${de(qe.getWalletImage(p))}
          name=${(p==null?void 0:p.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?oe.isMobile()?J.push("AllWallets"):J.push("ConnectingWalletConnect"):J.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const r=Gt.getRecentWallets().map(i=>i.id);return e.filter(i=>!r.includes(i.id))}onAllWallets(){ce.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),J.push("AllWallets")}onConnectWallet(e){J.push("ConnectingWalletConnect",{wallet:e})}};vf.styles=Rk;l4([B()],vf.prototype,"connectors",void 0);vf=l4([U("w3m-connect-view")],vf);const Ak=H`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var As=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};class un extends z{constructor(){var e,n,r,o;super(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,this.connector=(n=J.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=qe.getWalletImage(this.wallet)??qe.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=Ae.state.wcUri,this.error=Ae.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ae.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Ae.subscribeKey("wcError",i=>this.error=i),Ae.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),E`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${de(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?E`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,n;this.buffering||(Ae.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=Ct.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return E`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(oe.copyToClopboard(this.uri),Be.showSuccess("Link copied"))}catch{Be.showError("Failed to copy")}}}un.styles=Ak;As([B()],un.prototype,"uri",void 0);As([B()],un.prototype,"error",void 0);As([B()],un.prototype,"ready",void 0);As([B()],un.prototype,"showRetry",void 0);As([B()],un.prototype,"buffering",void 0);As([R({type:Boolean})],un.prototype,"isMobile",void 0);As([R()],un.prototype,"onRetry",void 0);var Ik=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const kk={INJECTED:"browser",ANNOUNCED:"browser"};let h2=class extends un{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:kk[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Gt.setConnectedWalletImageUrl(this.connector.imageUrl),await Ae.connectExternal(this.connector),lt.state.isSiweEnabled?J.push("ConnectingSiwe"):Se.close(),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};h2=Ik([U("w3m-connecting-external-view")],h2);var c4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let t1=class extends z{constructor(){var e;super(...arguments),this.dappName=(e=Ce.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return E`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,ce.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{lt.setStatus("loading");const e=await lt.signIn();return lt.setStatus("success"),ce.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return Be.showError("Signature declined"),lt.setStatus("error"),ce.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=me.state;e?(await Ae.disconnect(),Se.close()):J.push("Connect"),ce.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};c4([B()],t1.prototype,"isSigning",void 0);t1=c4([U("w3m-connecting-siwe-view")],t1);var Gm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let yf=class extends z{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),gn.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),E`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):E`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Ae.state;if(e||oe.isPairingExpired(n)){if(Ae.connectWalletConnect(),this.wallet){const r=qe.getWalletImage(this.wallet);r&&Gt.setConnectedWalletImageUrl(r)}else{const o=Fe.state.connectors.find(s=>s.type==="WALLET_CONNECT"),i=qe.getConnectorImage(o);i&&Gt.setConnectedWalletImageUrl(i)}await Ae.state.wcPromise,this.finalizeConnection(),lt.state.isSiweEnabled?J.push("ConnectingSiwe"):Se.close()}}catch(n){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Ae.setWcError(!0),oe.isAllowedRetry(this.lastRetry)&&(Be.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Ae.state;e&&Gt.setWalletConnectDeepLink(e),n&&Gt.setWeb3ModalRecent(n),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:x})=>x).filter(Boolean),a=i?[i]:s??[],l=a.length,c=e,u=r,h=Ae.checkInstalled(a),p=l&&h,m=n&&!oe.isMobile();p&&this.platforms.push("browser"),c&&this.platforms.push(oe.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),m&&this.platforms.push("desktop"),!p&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return E`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return E`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return E`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return E`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return E`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return E`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?E`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Gm([B()],yf.prototype,"platform",void 0);Gm([B()],yf.prototype,"platforms",void 0);yf=Gm([U("w3m-connecting-wc-view")],yf);var $k=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let p2=class extends z{constructor(){var e;super(...arguments),this.wallet=(e=J.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return E`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?E`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?E`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?E`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?E`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&oe.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};p2=$k([U("w3m-downloads-view")],p2);var Tk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Pk="https://walletconnect.com/explorer";let m2=class extends z{render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{oe.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=we.state,{customWallets:r}=Ce.state;return[...n,...r??[],...e].slice(0,4).map(i=>E`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${de(qe.getWalletImage(i))}
          @click=${()=>{oe.openHref(i.homepage??Pk,"_blank")}}
        ></wui-list-wallet>
      `)}};m2=Tk([U("w3m-get-wallet-view")],m2);const Ok=H`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var qm=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Xc=class extends z{constructor(){var e;super(),this.network=(e=J.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return E`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${de(qe.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:E`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await $e.switchActiveNetwork(this.network),lt.state.isSiweEnabled||Rm.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Xc.styles=Ok;qm([B()],Xc.prototype,"showRetry",void 0);qm([B()],Xc.prototype,"error",void 0);Xc=qm([U("w3m-network-switch-view")],Xc);const Nk=H`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var u4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let bf=class extends z{constructor(){super(),this.unsubscribe=[],this.caipNetwork=$e.state.caipNetwork,this.unsubscribe.push($e.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){ce.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),J.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=$e.state,o=oe.sortRequestedNetworks(e,n);return o==null?void 0:o.map(i=>{var s;return E`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===i.id}
          imageSrc=${de(qe.getNetworkImage(i))}
          type="network"
          name=${i.name??i.id}
          @click=${()=>this.onSwitchNetwork(i)}
          .disabled=${!r&&!(e!=null&&e.includes(i.id))}
          data-testid=${`w3m-network-switch-${i.name??i.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=me.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=$e.state,{data:s}=J.state;n&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await $e.switchActiveNetwork(e),Rm.navigateAfterNetworkSwitch()):o&&J.push("SwitchNetwork",{...s,network:e}):n||($e.setCaipNetwork(e),J.push("Connect"))}};bf.styles=Nk;u4([B()],bf.prototype,"caipNetwork",void 0);bf=u4([U("w3m-networks-view")],bf);const Mk=H`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Cu=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Lk=7;let gs=class extends z{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Ne.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=en.state.coinbaseTransactions,this.tokenImages=_t.state.tokenImages,this.unsubscribe.push(Ne.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),_t.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},en.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),this.fetchTransactions()}render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(n=>{var a,l,c;const r=Zm.formatDate((a=n==null?void 0:n.metadata)==null?void 0:a.minedAt),o=n.transfers[0],i=o==null?void 0:o.fungible_info;if(!i)return null;const s=((l=i==null?void 0:i.icon)==null?void 0:l.url)||((c=this.tokenImages)==null?void 0:c[i.symbol||""]);return E`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${de(i.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${de(s)}
          symbol=${de(i.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(n=>{const r=parseInt(n,10);return new Array(12).fill(null).map((i,s)=>s).reverse().map(i=>{var l;const s=ji.getTransactionGroupTitle(r,i),a=(l=this.coinbaseTransactions[r])==null?void 0:l[i];return a?E`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=me.state.address,n=Ce.state.projectId;if(!e)throw new Error("No address found");if(!n)throw new Error("No projectId found");this.loading=!0,await en.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(i=>i.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const i=me.state.address;await en.fetchTransactions(i,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Lk).fill(E` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};gs.styles=Mk;Cu([B()],gs.prototype,"selectedOnRampProvider",void 0);Cu([B()],gs.prototype,"loading",void 0);Cu([B()],gs.prototype,"coinbaseTransactions",void 0);Cu([B()],gs.prototype,"tokenImages",void 0);gs=Cu([U("w3m-onramp-activity-view")],gs);const jk=H`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Eh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Va=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ne.state.paymentCurrency,this.currencies=Ne.state.paymentCurrencies,this.currencyImages=_t.state.currencyImages,this.unsubscribe.push(Ne.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),_t.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var n;return E`
        <wui-list-item
          imageSrc=${de((n=this.currencyImages)==null?void 0:n[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(Ne.setPaymentCurrency(e),Se.close())}};Va.styles=jk;Eh([B()],Va.prototype,"selectedCurrency",void 0);Eh([B()],Va.prototype,"currencies",void 0);Eh([B()],Va.prototype,"currencyImages",void 0);Va=Eh([U("w3m-onramp-fiat-select-view")],Va);var d4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let n1=class extends z{constructor(){super(),this.unsubscribe=[],this.providers=Ne.state.providers,this.unsubscribe.push(Ne.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async n=>n.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(n==null?void 0:n.url));Promise.all(e).then(n=>{this.providers=this.providers.map((r,o)=>({...r,url:n[o]||""}))})}render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>E`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){Ne.setSelectedProvider(e),J.push("BuyInProgress"),oe.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=me.state.address,n=$e.state.caipNetwork;if(!e)throw new Error("No address found");if(!(n!=null&&n.name))throw new Error("No network found");const r=gn.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[n.name]??gn.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=Ne.state.purchaseCurrency,i=o?[o.symbol]:Ne.state.purchaseCurrencies.map(s=>s.symbol);return await $a.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:gn.WC_COINBASE_PAY_SDK_CHAINS,assets:i}],partnerUserId:e,purchaseAmount:Ne.state.purchaseAmount})}};d4([B()],n1.prototype,"providers",void 0);n1=d4([U("w3m-onramp-providers-view")],n1);const Dk=H`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var _h=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Za=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ne.state.purchaseCurrencies,this.tokens=Ne.state.purchaseCurrencies,this.tokenImages=_t.state.tokenImages,this.unsubscribe.push(Ne.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),_t.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var n;return E`
        <wui-list-item
          imageSrc=${de((n=this.tokenImages)==null?void 0:n[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(Ne.setPurchaseCurrency(e),Se.close())}};Za.styles=Dk;_h([B()],Za.prototype,"selectedCurrency",void 0);_h([B()],Za.prototype,"tokens",void 0);_h([B()],Za.prototype,"tokenImages",void 0);Za=_h([U("w3m-onramp-token-select-view")],Za);const Uk=H`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var al=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Xu="last-transaction",Bk=7;let lo=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=me.state.address,this.transactionsByYear=en.state.transactionsByYear,this.loading=en.state.loading,this.empty=en.state.empty,this.next=en.state.next,this.unsubscribe.push(me.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,en.resetTransactions(),en.fetchTransactions(e.address))}),en.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){en.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex flexDirection="column" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const o=r===e.length-1,i=parseInt(n,10);return new Array(12).fill(null).map((a,l)=>l).reverse().map(a=>{var u;const l=ji.getTransactionGroupTitle(i,a),c=(u=this.transactionsByYear[i])==null?void 0:u[a];return c?E`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${l}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(c,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,n){const{date:r,descriptions:o,direction:i,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),h=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?E`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${n&&this.next?Xu:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:h?c.map((m,x)=>{const C=ji.getTransferDescription(m),b=n&&x===c.length-1;return E` <wui-transaction-list-item
          date=${r}
          direction=${m.direction}
          id=${b&&this.next?Xu:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a[x]]}
          .descriptions=${[C]}
        ></wui-transaction-list-item>`}):E`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${n&&this.next?Xu:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,o)=>{const i=n&&o===e.length-1;return E`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return E`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(Bk).fill(E` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=Ce.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(en.fetchTransactions(this.address),ce.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,o;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${Xu}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var l,c,u,h,p;const n=Zm.formatDate((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=ji.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,i=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!i&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(m=>!!m.nft_info)),a=ji.getTransactionImages(o);return{date:n,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:s,images:a,status:(h=e.metadata)==null?void 0:h.status,transfers:o,type:(p=e.metadata)==null?void 0:p.operationType}}};lo.styles=Uk;al([B()],lo.prototype,"address",void 0);al([B()],lo.prototype,"transactionsByYear",void 0);al([B()],lo.prototype,"loading",void 0);al([B()],lo.prototype,"empty",void 0);al([B()],lo.prototype,"next",void 0);lo=al([U("w3m-transactions-view")],lo);var zk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Wk=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let g2=class extends z{render(){return E`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Wk}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{oe.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};g2=zk([U("w3m-what-is-a-network-view")],g2);var Fk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Hk=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let w2=class extends z{render(){return E`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Hk}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ce.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),J.push("GetWallet")}};w2=Fk([U("w3m-what-is-a-wallet-view")],w2);var Vk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let v2=class extends z{render(){return E`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Buy assets to unlock your trade opportunities
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200"
            >With on-ram Buy, simply buy crypto with fiat via credit card or bank transfer and add
            funds in your wallet to trade</wui-text
          >
        </wui-flex>
        <wui-button @click=${J.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};v2=Vk([U("w3m-what-is-a-buy-view")],v2);const Zk=H`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var Sh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Gk=6;let di=class extends z{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Zt.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=J.state.data)==null?void 0:e.email,this.emailConnector=Fe.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,n=this.getFooterLabels(e);return E`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?E`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:E` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?E`
                    <wui-text variant="small-400" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${n.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${n.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Zt.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Zt.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var n;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===Gk&&(this.loading=!0,await((n=this.onOtpSubmit)==null?void 0:n.call(this,this.otp))))}catch(r){this.error=oe.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!Fe.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Be.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Be.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};di.styles=Zk;Sh([B()],di.prototype,"loading",void 0);Sh([B()],di.prototype,"timeoutTimeLeft",void 0);Sh([B()],di.prototype,"error",void 0);di=Sh([U("w3m-email-otp-widget")],di);var qk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let y2=class extends di{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Ae.connectExternal(this.emailConnector),Se.close(),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(n){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};y2=qk([U("w3m-email-verify-otp-view")],y2);const Kk=H`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var f4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let xf=class extends z{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.email,this.emailConnector=Fe.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return E`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 10 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),ce.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),J.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Be.showSuccess("Code email resent")}}catch(e){Be.showError(e)}finally{this.loading=!1}}};xf.styles=Kk;f4([B()],xf.prototype,"loading",void 0);xf=f4([U("w3m-email-verify-device-view")],xf);const Yk=H`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var h4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Cf=class extends z{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Se.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const n=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(n==null?void 0:n.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),E`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){const e=Fe.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:Ct.getSnapshot().themeVariables})}};Cf.styles=Yk;h4([B()],Cf.prototype,"ready",void 0);Cf=h4([U("w3m-approve-transaction-view")],Cf);var Qk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let b2=class extends z{render(){return E`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${gn.SECURE_SITE_DASHBOARD}
          imageSrc=${gn.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};b2=Qk([U("w3m-upgrade-wallet-view")],b2);const Jk=H`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Km=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let eu=class extends z{constructor(){var e;super(...arguments),this.formRef=ch(),this.initialEmail=((e=J.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return E`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${uh(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${J.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Fe.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");await n.provider.updateEmail({email:this.email}),ce.sendEvent({type:"track",event:"EMAIL_EDIT"}),J.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(n){Be.showError(n),this.loading=!1}}};eu.styles=Jk;Km([B()],eu.prototype,"email",void 0);Km([B()],eu.prototype,"loading",void 0);eu=Km([U("w3m-update-email-wallet-view")],eu);var Xk=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let x2=class extends di{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.email,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:n}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),J.replace("UpdateEmailSecondaryOtp",J.state.data))}catch(r){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{J.replace("UpdateEmailWallet",J.state.data)}}};x2=Xk([U("w3m-update-email-primary-otp-view")],x2);var e$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let C2=class extends di{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:n}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),J.replace("Account",{email:this.email}))}catch(r){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{J.replace("UpdateEmailWallet",J.state.data)}}};C2=e$([U("w3m-update-email-secondary-otp-view")],C2);const t$=H`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var p4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ef=class extends z{constructor(){super(...arguments),this.disconecting=!1}render(){return E`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n}=$e.state;return oe.sortRequestedNetworks(e,n).map(o=>E`
        <wui-list-network
          imageSrc=${de(qe.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await Ae.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Se.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Be.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:n}=me.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=$e.state,{data:s}=J.state;n&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await $e.switchActiveNetwork(e),Rm.navigateAfterNetworkSwitch()):o&&J.push("SwitchNetwork",{...s,network:e}):n||($e.setCaipNetwork(e),J.push("Connect"))}};Ef.styles=t$;p4([B()],Ef.prototype,"disconecting",void 0);Ef=p4([U("w3m-unsupported-chain-view")],Ef);const n$=H`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function m4(t){const{connectors:e}=Fe.state,n=e.filter(i=>i.type==="ANNOUNCED").reduce((i,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(i[s.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!n[i.rdns??""]})).sort((i,s)=>Number(s.installed)-Number(i.installed))}var Eu=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const E2="local-paginator";let ws=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!we.state.wallets.length,this.wallets=we.state.wallets,this.recommended=we.state.recommended,this.featured=we.state.featured,this.unsubscribe.push(we.subscribeKey("wallets",e=>this.wallets=e),we.subscribeKey("recommended",e=>this.recommended=e),we.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return E`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await we.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>E`
        <wui-card-select-loader type="wallet" id=${de(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return m4(e).map(r=>E`
        <wui-card-select
          imageSrc=${de(qe.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:o}=we.state,i=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/i)*i-s+i;return l-=e.length?r.length%i:0,o===0&&r.length>0?null:o===0||[...r,...e,...n].length<o?this.shimmerTemplate(l,E2):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${E2}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=we.state;s.length<i&&we.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=Fe.state,r=n.find(({explorerId:o})=>o===e.id);r?J.push("ConnectingExternal",{connector:r}):J.push("ConnectingWalletConnect",{wallet:e})}};ws.styles=n$;Eu([B()],ws.prototype,"initial",void 0);Eu([B()],ws.prototype,"wallets",void 0);Eu([B()],ws.prototype,"recommended",void 0);Eu([B()],ws.prototype,"featured",void 0);ws=Eu([U("w3m-all-wallets-list")],ws);const r$=H`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Ym=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let tu=class extends z{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?E`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await we.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=we.state,n=m4(e);return e.length?E`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>E`
            <wui-card-select
              imageSrc=${de(qe.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:E`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=Fe.state,r=n.find(({explorerId:o})=>o===e.id);r?J.push("ConnectingExternal",{connector:r}):J.push("ConnectingWalletConnect",{wallet:e})}};tu.styles=r$;Ym([B()],tu.prototype,"loading",void 0);Ym([R()],tu.prototype,"query",void 0);tu=Ym([U("w3m-all-wallets-search")],tu);var Rh=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let nu=class extends z{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ae.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return E`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Rh([R({type:Array})],nu.prototype,"platforms",void 0);Rh([R()],nu.prototype,"onSelectPlatfrom",void 0);Rh([B()],nu.prototype,"buffering",void 0);nu=Rh([U("w3m-connecting-header")],nu);var i$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let _2=class extends un{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Fe.state,n=e.find(o=>{var i,s;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(o=>o.type==="INJECTED");n?await Ae.connectExternal(n):r&&await Ae.connectExternal(r),Se.close(),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};_2=i$([U("w3m-connecting-wc-browser")],_2);var o$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let S2=class extends un{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=oe.formatNativeUrl(n,this.uri);Ae.setWcLinking({name:r,href:i}),Ae.setRecentWallet(this.wallet),oe.openHref(o,"_blank")}catch{this.error=!0}}};S2=o$([U("w3m-connecting-wc-desktop")],S2);var s$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let R2=class extends un{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:o,href:i}=oe.formatNativeUrl(n,this.uri);Ae.setWcLinking({name:r,href:i}),Ae.setRecentWallet(this.wallet),oe.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=oe.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Ae.setBuffering(!0),setTimeout(()=>{Ae.setBuffering(!1)},5e3))}};R2=s$([U("w3m-connecting-wc-mobile")],R2);const a$=H`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var l$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let r1=class extends un{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),E`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Ae.setWcLinking(void 0),Ae.setRecentWallet(this.wallet),E` <wui-qr-code
      size=${e}
      theme=${Ct.state.themeMode}
      uri=${this.uri}
      imageSrc=${de(qe.getWalletImage(this.wallet))}
      alt=${de(n)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return E`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};r1.styles=a$;r1=l$([U("w3m-connecting-wc-qrcode")],r1);const c$=H`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var u$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let i1=class extends z{constructor(){var e;super(...arguments),this.dappImageUrl=(e=Ce.state.metadata)==null?void 0:e.icons,this.walletImageUrl=Gt.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return E`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};i1.styles=c$;i1=u$([U("w3m-connecting-siwe")],i1);var d$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let A2=class extends z{constructor(){var e;if(super(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return E`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${de(qe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};A2=d$([U("w3m-connecting-wc-unsupported")],A2);var f$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let I2=class extends un{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=oe.formatUniversalUrl(n,this.uri);Ae.setWcLinking({name:r,href:i}),Ae.setRecentWallet(this.wallet),oe.openHref(o,"_blank")}catch{this.error=!0}}};I2=f$([U("w3m-connecting-wc-web")],I2);const h$=H`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ah=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};function k2(){var s,a,l,c,u,h,p;const t=(a=(s=J.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(c=(l=J.state.data)==null?void 0:l.wallet)==null?void 0:c.name,n=(h=(u=J.state.data)==null?void 0:u.network)==null?void 0:h.name,r=e??t,o=Fe.getConnectors();return{Connect:`Connect ${o.length===1&&((p=o[0])==null?void 0:p.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency"}}let Ga=class extends z{constructor(){super(),this.unsubscribe=[],this.heading=k2()[J.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(J.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Ae.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return E`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){ce.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),J.push("WhatIsAWallet")}async onClose(){lt.state.isSiweEnabled&&lt.state.status!=="success"&&await Ae.disconnect(),Se.close()}titleTemplate(){return E`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=J.state,n=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?E`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:E`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?E`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const o=k2()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=J.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){J.state.view==="ConnectingSiwe"?J.push("Connect"):J.goBack()}};Ga.styles=[h$];Ah([B()],Ga.prototype,"heading",void 0);Ah([B()],Ga.prototype,"buffering",void 0);Ah([B()],Ga.prototype,"showBack",void 0);Ga=Ah([U("w3m-header")],Ga);var g4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let o1=class extends z{constructor(){super(...arguments),this.data=[]}render(){return E`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>E`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>E`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};g4([R({type:Array})],o1.prototype,"data",void 0);o1=g4([U("w3m-help-widget")],o1);const p$=H`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Is=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fi=class extends z{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=_t.state.currencyImages,this.tokenImages=_t.state.tokenImages,this.unsubscribe.push(Ne.subscribeKey("purchaseCurrency",n=>{!n||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(n))}),Ne.subscribeKey("paymentCurrency",n=>{!n||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(n))}),Ne.subscribe(n=>{this.type==="Fiat"?this.currencies=n.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=n.paymentCurrencies.map(this.formatPaymentCurrency)}),_t.subscribe(n=>{this.currencyImages={...n.currencyImages},this.tokenImages={...n.tokenImages}}))}firstUpdated(){Ne.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=((r=this.selectedCurrency)==null?void 0:r.symbol)||"",n=this.currencyImages[e]||this.tokenImages[e];return E` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?E` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Se.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${de(n)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:E`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};fi.styles=p$;Is([R({type:String})],fi.prototype,"type",void 0);Is([R({type:Number})],fi.prototype,"value",void 0);Is([B()],fi.prototype,"currencies",void 0);Is([B()],fi.prototype,"selectedCurrency",void 0);Is([B()],fi.prototype,"currencyImages",void 0);Is([B()],fi.prototype,"tokenImages",void 0);fi=Is([U("w3m-swap-input")],fi);const m$=H`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var g$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let s1=class extends z{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return!e&&!n?null:E`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ce.state;return e?E`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ce.state;return e?E`<a href=${e}>Privacy Policy</a>`:null}};s1.styles=[m$];s1=g$([U("w3m-legal-footer")],s1);const w$=H`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let _f=class extends z{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=oe.isMobile(),a=oe.isIos(),l=oe.isAndroid(),c=[n,r,i,o].filter(Boolean).length>1,u=Le.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?E`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>J.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?E`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?E`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?E`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};_f.styles=[w$];w4([R({type:Object})],_f.prototype,"wallet",void 0);_f=w4([U("w3m-mobile-download-links")],_f);const v$=H`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var y$=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let a1=class extends z{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return!e&&!n?null:E`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to fit your buyer needs, region, and to get you the lowest
          fees
        </wui-text>

        ${this.whatIsBuyTemplate()}
      </wui-flex>
    `}whatIsBuyTemplate(){return E` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      What is Buy
    </wui-link>`}onWhatIsBuy(){J.push("WhatIsABuy")}};a1.styles=[v$];a1=y$([U("w3m-onramp-providers-footer")],a1);const b$=H`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var v4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const x$={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Sf=class extends z{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Be.state.open,this.unsubscribe.push(Be.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=Be.state,r=x$[n];return E`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Be.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Sf.styles=b$;v4([B()],Sf.prototype,"open",void 0);Sf=v4([U("w3m-snackbar")],Sf);const C$=H`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .betaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var _u=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let vs=class extends z{constructor(){super(),this.unsubscribe=[],this.formRef=ch(),this.connectors=Fe.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Fe.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?E`
      ${this.betaWarningTemplate()}
      <form ${uh(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?E`<wui-separator text="or"></wui-separator>`:null}
    `:null}betaWarningTemplate(){return E`
          <wui-flex class="betaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-text variant="small-400" color="accent-100">Email login is in beta</wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?E`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?E`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Fe.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});ce.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),J.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&J.push("EmailVerifyDevice",{email:this.email})}catch(n){const r=oe.parseError(n);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":Be.showError(n)}finally{this.loading=!1}}onFocusEvent(){ce.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};vs.styles=C$;_u([B()],vs.prototype,"connectors",void 0);_u([B()],vs.prototype,"email",void 0);_u([B()],vs.prototype,"loading",void 0);_u([B()],vs.prototype,"error",void 0);vs=_u([U("w3m-email-login-widget")],vs);let $2=!1;class E${constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{me.setIsConnected(n)},this.setCaipAddress=n=>{me.setCaipAddress(n)},this.setBalance=(n,r)=>{me.setBalance(n,r)},this.setProfileName=n=>{me.setProfileName(n)},this.setProfileImage=n=>{me.setProfileImage(n)},this.resetAccount=()=>{me.resetAccount()},this.setCaipNetwork=n=>{$e.setCaipNetwork(n)},this.getCaipNetwork=()=>$e.state.caipNetwork,this.setRequestedCaipNetworks=n=>{$e.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>$e.getApprovedCaipNetworksData(),this.resetNetwork=()=>{$e.resetNetwork()},this.setConnectors=n=>{Fe.setConnectors(n)},this.addConnector=n=>{Fe.addConnector(n)},this.getConnectors=()=>Fe.getConnectors(),this.resetWcConnection=()=>{Ae.resetWcConnection()},this.fetchIdentity=n=>$a.fetchIdentity(n),this.setAddressExplorerUrl=n=>{me.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{lt.setNonce(n)},this.setSIWESession=n=>{lt.setSession(n)},this.setSIWEStatus=n=>{lt.setStatus(n)},this.setSIWEMessage=n=>{lt.setMessage(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Se.open(e)}async close(){await this.initOrContinue(),Se.close()}setLoading(e){Se.setLoading(e)}getThemeMode(){return Ct.state.themeMode}getThemeVariables(){return Ct.state.themeVariables}setThemeMode(e){Ct.setThemeMode(e),$m(Ct.state.themeMode)}setThemeVariables(e){Ct.setThemeVariables(e),I5(Ct.state.themeVariables)}subscribeTheme(e){return Ct.subscribe(e)}getState(){return{...ka.state}}subscribeState(e){return ka.subscribe(e)}getEvent(){return{...ce.state}}subscribeEvents(e){return ce.subscribe(e)}subscribeSIWEState(e){return lt.subscribe(e)}initControllers(e){if($e.setClient(e.networkControllerClient),$e.setDefaultCaipNetwork(e.defaultChain),Ce.setProjectId(e.projectId),Ce.setAllWallets(e.allWallets),Ce.setIncludeWalletIds(e.includeWalletIds),Ce.setExcludeWalletIds(e.excludeWalletIds),Ce.setFeaturedWalletIds(e.featuredWalletIds),Ce.setTokens(e.tokens),Ce.setTermsConditionsUrl(e.termsConditionsUrl),Ce.setPrivacyPolicyUrl(e.privacyPolicyUrl),Ce.setCustomWallets(e.customWallets),Ce.setEnableAnalytics(e.enableAnalytics),Ce.setSdkVersion(e._sdkVersion),Ae.setClient(e.connectionControllerClient),e.siweControllerClient){const n=e.siweControllerClient;lt.setSIWEClient(n)}e.metadata&&Ce.setMetadata(e.metadata),e.themeMode&&Ct.setThemeMode(e.themeMode),e.themeVariables&&Ct.setThemeVariables(e.themeVariables),e.enableOnramp&&Ce.setOnrampEnabled(!!e.enableOnramp)}async initOrContinue(){return!this.initPromise&&!$2&&oe.isClient()&&($2=!0,this.initPromise=new Promise(async e=>{await Promise.all([Sc(()=>Promise.resolve().then(()=>pk),void 0,import.meta.url),Sc(()=>Promise.resolve().then(()=>wk),void 0,import.meta.url)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}function _$(t){if(t)return{id:`${xe.EIP155}:${t.id}`,name:t.name,imageId:Yr.EIP155NetworkImageIds[t.id]}}async function S$(t){var i,s,a,l;if(!t)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(t==null?void 0:t.getProvider()),n=(s=(i=e==null?void 0:e.signer)==null?void 0:i.session)==null?void 0:s.namespaces,r=(a=n==null?void 0:n[xe.EIP155])==null?void 0:a.methods,o=(l=n==null?void 0:n[xe.EIP155])==null?void 0:l.chains;return{supportsAllNetworks:!!(r!=null&&r.includes(xe.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function R$(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:Yr.WalletConnectRpcChainIds.map(t=>`${xe.EIP155}:${t}`)}}function A$({chainId:t,projectId:e}){const n=oe.getBlockchainApiUrl();return Yr.WalletConnectRpcChainIds.includes(t)?Tw(`${n}/v1/?chainId=${xe.EIP155}:${t}&projectId=${e}`):Tw()}function I$({projectId:t,chains:e,metadata:n,enableInjected:r,enableCoinbase:o,enableEmail:i,enableWalletConnect:s,enableEIP6963:a,...l}){const c=[],u=e.map(p=>[p.id,A$({chainId:p.id,projectId:t})]),h=Object.fromEntries(u);return s!==!1&&c.push(_m({projectId:t,metadata:n,showQrModal:!1})),r!==!1&&c.push(Xf({shimDisconnect:!0})),o!==!1&&c.push(Em({appName:(n==null?void 0:n.name)??"Unknown",appLogoUrl:(n==null?void 0:n.icons[0])??"Unknown",enableMobileWalletLink:!0})),i===!0&&c.push(Z_({chains:[...e],options:{projectId:t}})),OC({chains:e,multiInjectedProviderDiscovery:a!==!1,transports:h,...l,connectors:c})}let Me;function k$(t){t&&(Me=t)}function $$(){if(!Me)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');function t(s){Me==null||Me.setThemeMode(s)}function e(s){Me==null||Me.setThemeVariables(s)}const[n,r]=Q.useState(Me.getThemeMode()),[o,i]=Q.useState(Me.getThemeVariables());return Q.useEffect(()=>{const s=Me==null?void 0:Me.subscribeTheme(a=>{r(a.themeMode),i(a.themeVariables)});return()=>{s==null||s()}},[]),{themeMode:n,themeVariables:o,setThemeMode:t,setThemeVariables:e}}function T$(){if(!Me)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(n){await(Me==null?void 0:Me.open(n))}async function e(){await(Me==null?void 0:Me.close())}return{open:t,close:e}}function P$(){if(!Me)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');const[t,e]=Q.useState(Me.getState());return Q.useEffect(()=>{const n=Me==null?void 0:Me.subscribeState(r=>{e({...r})});return()=>{n==null||n()}},[]),t}function O$(){if(!Me)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');const[t,e]=Q.useState(Me.getEvent());return Q.useEffect(()=>{const n=Me==null?void 0:Me.subscribeEvents(r=>{e({...r})});return()=>{n==null||n()}},[]),t}const N$=Jy({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),y4=Jy({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x8cab227b1162f03b8338331adaad7aadc83b895e",blockCreated:18958930},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});class M$ extends E${constructor(e){const{wagmiConfig:n,siweConfig:r,defaultChain:o,tokens:i,_sdkVersion:s,...a}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async u=>{const h=Ts.caipNetworkIdToNumber(u==null?void 0:u.id);h&&await HC(this.wagmiConfig,{chainId:h})},getApprovedCaipNetworksData:async()=>new Promise(u=>{var m,x;const p=new Map(n.state.connections).get(n.state.current||"");if(((m=p==null?void 0:p.connector)==null?void 0:m.id)===xe.EMAIL_CONNECTOR_ID)u(R$());else if(((x=p==null?void 0:p.connector)==null?void 0:x.id)===xe.WALLET_CONNECT_CONNECTOR_ID){const C=n.connectors.find(b=>b.id===xe.WALLET_CONNECT_CONNECTOR_ID);u(S$(C))}u({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},c={connectWalletConnect:async u=>{var x;const h=n.connectors.find(C=>C.id===xe.WALLET_CONNECT_CONNECTOR_ID);if(!h)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await h.getProvider()).on("display_uri",C=>{u(C)});const m=Ts.caipNetworkIdToNumber((x=this.getCaipNetwork())==null?void 0:x.id);await Lw(this.wagmiConfig,{connector:h,chainId:m})},connectExternal:async({id:u,provider:h,info:p})=>{var C,b;const m=n.connectors.find(g=>g.id===u);if(!m)throw new Error("connectionControllerClient:connectExternal - connector is undefined");h&&p&&m.id===xe.EIP6963_CONNECTOR_ID&&((C=m.setEip6963Wallet)==null||C.call(m,{provider:h,info:p}));const x=Ts.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await Lw(this.wagmiConfig,{connector:m,chainId:x})},checkInstalled:u=>{const h=this.getConnectors().find(p=>p.type==="INJECTED");return u?h&&window!=null&&window.ethereum?u.some(p=>{var m;return!!((m=window.ethereum)!=null&&m[String(p)])}):!1:!!window.ethereum},disconnect:async()=>{var u;await NC(this.wagmiConfig),(u=r==null?void 0:r.options)!=null&&u.signOutOnDisconnect&&await r.signOut()},signMessage:async u=>FC(this.wagmiConfig,{message:u})};super({networkControllerClient:l,connectionControllerClient:c,siweControllerClient:r,defaultChain:_$(o),tokens:Ts.getCaipTokens(i),_sdkVersion:s??`html-wagmi-${xe.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=n,this.syncRequestedNetworks([...n.chains]),this.syncConnectors([...n.connectors]),ZC(this.wagmiConfig,{onChange:u=>this.syncConnectors(u)}),VC(this.wagmiConfig,{onChange:u=>this.syncAccount({...u})})}getState(){const e=super.getState();return{...e,selectedNetworkId:Ts.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:Ts.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var o,i;return{id:`${xe.EIP155}:${r.id}`,name:r.name,imageId:Yr.EIP155NetworkImageIds[r.id],imageUrl:(i=(o=this.options)==null?void 0:o.chainImages)==null?void 0:i[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount({address:e,isConnected:n,chainId:r}){if(this.resetAccount(),this.syncNetwork(),n&&e&&r){const o=`${xe.EIP155}:${r}:${e}`;this.setIsConnected(n),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,s,a,l;const{address:e,isConnected:n,chainId:r}=i5(this.wagmiConfig),o=this.wagmiConfig.chains.find(c=>c.id===r);if(o||r){const c=(o==null?void 0:o.name)??(r==null?void 0:r.toString()),u=Number((o==null?void 0:o.id)??r),h=`${xe.EIP155}:${u}`;if(this.setCaipNetwork({id:h,name:c,imageId:Yr.EIP155NetworkImageIds[u],imageUrl:(s=(i=this.options)==null?void 0:i.chainImages)==null?void 0:s[u]}),n&&e&&r){const p=`${xe.EIP155}:${u}:${e}`;if(this.setCaipAddress(p),(l=(a=o==null?void 0:o.blockExplorers)==null?void 0:a.default)!=null&&l.url){const m=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(m)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n!==y4.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:o}=await this.fetchIdentity({caipChainId:`${xe.EIP155}:${n}`,address:e});this.setProfileName(r),this.setProfileImage(o)}catch{const r=await zC(this.wagmiConfig,{address:e,chainId:n});if(r){this.setProfileName(r);const o=await BC(this.wagmiConfig,{name:r,chainId:n});o&&this.setProfileImage(o)}}}async syncBalance(e,n){var o,i,s;const r=this.wagmiConfig.chains.find(a=>a.id===n);if(r){const a=await UC(this.wagmiConfig,{address:e,chainId:r.id,token:(s=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[r.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}syncConnectors(e){const n=new Set,r=e.filter(a=>!n.has(a.id)&&n.add(a.id)),o=[],i=xe.COINBASE_SDK_CONNECTOR_ID,s=r.find(a=>a.id===gn.CONNECTOR_RDNS_MAP[i]);r.forEach(({id:a,name:l,type:c,icon:u})=>{var p,m;s&&a===i||xe.EMAIL_CONNECTOR_ID===a||o.push({id:a,explorerId:Yr.ConnectorExplorerIds[a],imageUrl:((m=(p=this.options)==null?void 0:p.connectorImages)==null?void 0:m[a])??u,name:Yr.ConnectorNamesMap[a]??l,imageId:Yr.ConnectorImageIds[a],type:Yr.ConnectorTypesMap[c]??"EXTERNAL"})}),this.setConnectors(o),this.syncEmailConnector(r)}async syncEmailConnector(e){const n=e.find(({id:r})=>r===xe.EMAIL_CONNECTOR_ID);if(n){const r=await n.getProvider();this.addConnector({id:xe.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r}),this.listenEmailConnector(n)}}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const n=await e.getProvider(),r=n.getLoginEmailUsed();super.setLoading(r),r&&this.setIsConnected(!1),n.onRpcRequest(o=>{Zt.checkIfRequestIsAllowed(o)||super.open({view:"ApproveTransaction"})}),n.onRpcResponse(()=>{super.close()}),n.onIsConnected(()=>{this.setIsConnected(!0),super.setLoading(!1)})}}}let ed;function L$(t){return ed||(ed=new M$({...t,_sdkVersion:`react-wagmi-${xe.VERSION}`}),k$(ed)),ed}const j$=new gE,b4="36cac5156311413d288cbb0faaa4f367",x4=I$({chains:[y4,N$],projectId:b4,metadata:{name:"Web3Modal React Example",description:"Web3Modal React Example",url:"",icons:[]}});L$({wagmiConfig:x4,projectId:b4,themeMode:"dark",themeVariables:{"--w3m-color-mix":"#392467","--w3m-color-mix-strength":30}});function D$(){return T$(),P$(),$$(),O$(),M.jsx(YC,{config:x4,children:M.jsx(vE,{client:j$,children:M.jsxs(V8,{children:[M.jsx(Il,{path:"/",element:M.jsx(px,{})}),M.jsx(Il,{path:"/pricing",element:M.jsx(gx,{})}),M.jsx(Il,{path:"/training",element:M.jsx(bx,{})}),M.jsx(Il,{path:"/about",element:M.jsx(xx,{})})]})})})}R0.createRoot(document.getElementById("root")).render(M.jsxs(Xr.StrictMode,{children:[M.jsx(J8,{children:M.jsx(D$,{})}),","]}));export{se as B,yC as E,Ul as H,Vd as I,Sc as _,v5 as a,zo as b,T9 as c,b9 as d,qo as e,i7 as f,am as g,Xa as h,Ko as i,B$ as j,su as k,yu as l,l1 as m,py as n,Ut as p,cr as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-GeFYJw5R.js","./events-Bsn36z7e.js","./index.es-BuTLTe-7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
