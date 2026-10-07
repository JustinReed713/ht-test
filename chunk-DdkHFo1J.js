import{$n as em,$r as ue$1,$t as Wp,An as ar$1,Bn as cj,Br as pu,C as Fn$1,Cr as nh,Ct as Qm,Dn as ad,Dr as nn,Dt as Re,Er as nm,Fr as ow,Gn as dy,Gr as rm,H as Jo$1,Hr as qg,J as Kc,K as KE,Kn as eD,Kt as W,Lt as Tr,Mr as oj,Mt as Sr$1,Nr as om,Or as no$1,P as Hw,Pt as T,Qr as ts,Rr as po$1,Rt as Tu,S as Fh,T as G,Yt as We,_ as DD,_n as Zm,br as ld,c as Ag,ct as Nr$1,d as Bi$1,di as z,fr as ij,ft as Oy,gt as Pn$1,hi as zv,ht as Pl,ii as wD,jn as b,kn as aj,l as BD,li as yg,ln as Yl,mr as j,ni as ve$1,nn as Xg,o as A,on as Yc$1,pi as zm,pn as ZE,q as Ka,qr as se$1,rn as Xp,s as Ae$1,si as xy,sr as hi$1,t as $D,ti as vI,ui as yh,ut as Ol,vn as Zo$1,vt as Q$1,xr as le$1,z as J1,zr as pr}from"./chunk-BiDaZkpz.js";import{t as F$1}from"./chunk-XQARthRt.js";import{c as _r,f as go$1}from"./chunk-Hzk8cEQr.js";var Xt={};function xo(t,o){if(Xt[t]=(Xt[t]||0)+1,typeof o==`function`)return qt(t,(...n)=>G(W({},o(...n)),{type:t}));switch(o?o._as:`empty`){case`empty`:return qt(t,()=>({type:t}));case`props`:return qt(t,n=>G(W({},n),{type:t}));default:throw new Error(`Unexpected config.`)}}function Eo(){return{_as:`props`,_p:void 0}}function qt(t,o){return Object.defineProperty(o,"type",{value:t,writable:!1})}function wo(t){return t.charAt(0).toUpperCase()+t.substring(1)}function Io(t){return t.charAt(0).toLowerCase()+t.substring(1)}function Ao(t,o){if(t==null)throw new Error(`${o} must be defined.`)}function yr(t){let{source:o,events:e}=t;return Object.keys(e).reduce((n,i)=>G(W({},n),{[To(i)]:xo(Mo(o,i),e[i])}),{})}function Sr(){return Eo()}function To(t){return t.trim().split(` `).map((o,e)=>e===0?Io(o):wo(o)).join(``)}function Mo(t,o){return`[${t}] ${o}`}var wn=`@ngrx/store/init`;var Y=(()=>{class t extends Fn$1{constructor(){super({type:wn})}next(e){if(typeof e==`function`)throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>`u`)throw new TypeError(`Actions must be objects`);if(typeof e.type>`u`)throw new TypeError(`Actions must have a type property`);super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=se$1({token:t,factory:t.ɵfac})}}return t})();var Ro=[Y];var In=new A(`@ngrx/store Internal Root Guard`);var un=new A(`@ngrx/store Internal Initial State`);var oe=new A(`@ngrx/store Initial State`);var An=new A(`@ngrx/store Reducer Factory`);var pn=new A(`@ngrx/store Internal Reducer Factory Provider`);var Tn=new A(`@ngrx/store Initial Reducers`);var Qt=new A(`@ngrx/store Internal Initial Reducers`);var bn=new A(`@ngrx/store Internal Store Reducers`);new A(`@ngrx/store Internal Store Features`);new A(`@ngrx/store Feature Reducers`);var fn=new A(`@ngrx/store User Provided Meta Reducers`);var At=new A(`@ngrx/store Meta Reducers`);var hn=new A(`@ngrx/store Internal Resolved Meta Reducers`);var vn=new A(`@ngrx/store User Runtime Checks Config`);var gn=new A(`@ngrx/store Internal User Runtime Checks Config`);var rt=new A(`@ngrx/store Internal Runtime Checks`);var ie=new A(`@ngrx/store Check if Action types are unique`);var Jt=new A(`@ngrx/store Root Store Provider`);var _n=new A(`@ngrx/store Feature State Provider`);function Co(t,o={}){let e=Object.keys(t),n={};for(let r=0;r<e.length;r++){let s=e[r];typeof t[s]==`function`&&(n[s]=t[s])}let i=Object.keys(n);return function(s,c){s=s===void 0?o:s;let m=!1,b={};for(let d=0;d<i.length;d++){let N=i[d],Ht=n[N],et=s[N],z=Ht(et,c);b[N]=z,m=m||z!==et}return m?b:s}}function Fo(t,o){return Object.keys(t).filter(e=>e!==o).reduce((e,n)=>Object.assign(e,{[n]:t[n]}),{})}function Mn(...t){return function(o){if(t.length===0)return o;let e=t[t.length-1];return t.slice(0,-1).reduceRight((i,r)=>r(i),e(o))}}function Rn(t,o){return Array.isArray(o)&&o.length>0&&(t=Mn.apply(null,[...o,t])),(e,n)=>{let i=t(e);return(r,s)=>(r=r===void 0?n:r,i(r,s))}}function Oo(t){let o=Array.isArray(t)&&t.length>0?Mn(...t):e=>e;return(e,n)=>(e=o(e),(i,r)=>(i=i===void 0?n:i,e(i,r)))}var at=class extends b{};var Tt=class extends Y{};var Lo=`@ngrx/store/update-reducers`;var Mt=(()=>{class t extends Fn$1{get currentReducers(){return this.reducers}constructor(e,n,i,r){super(r(i,n)),this.dispatcher=e,this.initialState=n,this.reducers=i,this.reducerFactory=r}addFeature(e){this.addFeatures([e])}addFeatures(e){let n=e.reduce((i,{reducers:r,reducerFactory:s,metaReducers:c,initialState:m,key:b})=>{return i[b]=typeof r==`function`?Oo(c)(r,m):Rn(s,c)(r,m),i},{});this.addReducers(n)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(n=>n.key))}addReducer(e,n){this.addReducers({[e]:n})}addReducers(e){this.reducers=W(W({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(n=>{this.reducers=Fo(this.reducers,n)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Lo,features:e})}ngOnDestroy(){this.complete()}static{this.ɵfac=function(n){return new(n||t)(Ae$1(Tt),Ae$1(oe),Ae$1(Tn),Ae$1(An))}}static{this.ɵprov=se$1({token:t,factory:t.ɵfac})}}return t})();var Po=[Mt,{provide:at,useExisting:Mt},{provide:Tt,useExisting:Y}];var re=(()=>{class t extends z{ngOnDestroy(){this.complete()}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=xy(t)))(i||t)}})()}static{this.ɵprov=se$1({token:t,factory:t.ɵfac})}}return t})();var jo=[re];var Rt=class extends b{};var yn=(()=>{class t extends Fn$1{static{this.INIT=wn}constructor(e,n,i,r){super(r);let c=e.pipe(Pn$1(Ag)).pipe(Pl(n)),m={state:r},b=c.pipe(em(Uo,m));this.stateSubscription=b.subscribe(({state:d,action:N})=>{this.next(d),i.next(N)}),this.state=F$1(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.ɵfac=function(n){return new(n||t)(Ae$1(Y),Ae$1(at),Ae$1(re),Ae$1(oe))}}static{this.ɵprov=se$1({token:t,factory:t.ɵfac})}}return t})();function Uo(t={state:void 0},[o,e]){let{state:n}=t;return{state:e(n,o),action:o}}var Bo=[yn,{provide:Rt,useExisting:yn}];var ae=(()=>{class t extends b{constructor(e,n,i,r){super(),this.actionsObserver=n,this.reducerManager=i,this.injector=r,this.source=e,this.state=e.state}select(e,...n){return Vo.call(null,e,...n)(this)}selectSignal(e,n){return Hw(()=>e(this.state()),n)}lift(e){let n=new t(this,this.actionsObserver,this.reducerManager);return n.operator=e,n}dispatch(e,n){if(typeof e==`function`)return this.processDispatchFn(e,n);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,n){this.reducerManager.addReducer(e,n)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,n){Ao(this.injector,`Store Injector`);return ld(()=>{let r=e();Fh(()=>this.dispatch(r))},{injector:n?.injector??Ho()??this.injector})}static{this.ɵfac=function(n){return new(n||t)(Ae$1(Rt),Ae$1(Y),Ae$1(Mt),Ae$1(ve$1))}}static{this.ɵprov=se$1({token:t,factory:t.ɵfac})}}return t})();var zo=[ae];function Vo(t,o,...e){return function(i){let r;if(typeof t==`string`){let s=[o,...e].filter(Boolean);r=i.pipe(Xg(t,...s))}else if(typeof t==`function`)r=i.pipe(le$1(s=>t(s,o)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return r.pipe(Ol())}}function Ho(){try{return T(ve$1)}catch{return}}var se=`https://ngrx.io/guide/store/configuration/runtime-checks`;function Sn(t){return t===void 0}function Nn(t){return t===null}function Dn(t){return Array.isArray(t)}function Ko(t){return typeof t==`string`}function $o(t){return typeof t==`boolean`}function Wo(t){return typeof t==`number`}function kn(t){return typeof t==`object`&&t!==null}function Zo(t){return kn(t)&&!Dn(t)}function Go(t){if(!Zo(t))return!1;let o=Object.getPrototypeOf(t);return o===Object.prototype||o===null}function te(t){return typeof t==`function`}function Yo(t){return te(t)&&t.hasOwnProperty(`ɵcmp`)}function qo(t,o){return Object.prototype.hasOwnProperty.call(t,o)}var Qo=!1;function Xo(){return Qo}function xn(t,o){return t===o}function Jo(t,o,e){for(let n=0;n<t.length;n++)if(!e(t[n],o[n]))return!0;return!1}function Cn(t,o=xn,e=xn){let n=null,i=null,r;function s(){n=null,i=null}function c(d=void 0){r={result:d}}function m(){r=void 0}function b(){if(r!==void 0)return r.result;if(!n)return i=t.apply(null,arguments),n=arguments,i;if(!Jo(arguments,n,o))return i;let d=t.apply(null,arguments);return n=arguments,e(i,d)?i:(i=d,d)}return{memoized:b,reset:s,setResult:c,clearResult:m}}function D(...t){return ei(Cn)(...t)}function ti(t,o,e,n){if(e===void 0){let r=o.map(s=>s(t));return n.memoized.apply(null,r)}let i=o.map(r=>r(t,e));return n.memoized.apply(null,[...i,e])}function ei(t,o={stateFn:ti}){return function(...e){let n=e;if(Array.isArray(n[0])){let[d,...N]=n;n=[...d,...N]}else n.length===1&&ni(n[0])&&(n=oi(n[0]));let i=n.slice(0,n.length-1),r=n[n.length-1],s=i.filter(d=>d.release&&typeof d.release==`function`),c=t(function(...d){return r.apply(null,d)}),m=Cn(function(d,N){return o.stateFn.apply(null,[d,i,N,c])});function b(){m.reset(),c.reset(),s.forEach(d=>d.release())}return Object.assign(m.memoized,{release:b,projector:c.memoized,setResult:m.setResult,clearResult:m.clearResult})}}function Fn(t){return D(o=>{let e=o[t];return!Xo()&&cj()&&!(t in o)&&console.warn(`@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},o=>o)}function ni(t){return!!t&&typeof t==`object`&&Object.values(t).every(o=>typeof o==`function`)}function oi(t){let o=Object.values(t),e=Object.keys(t),n=(...i)=>e.reduce((r,s,c)=>G(W({},r),{[s]:i[c]}),{});return[...o,n]}function ii(t){return t instanceof A?T(t):t}function On(t){return typeof t==`function`?t():t}function ri(t,o){return t.concat(o)}function ai(){if(T(ae,{optional:!0,skipSelf:!0}))throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);return`guarded`}function si(t,o){return function(e,n){let r=t(e,o.action(n)?ee(n):n);return o.state()?ee(r):r}}function ee(t){Object.freeze(t);let o=te(t);return Object.getOwnPropertyNames(t).forEach(e=>{if(!e.startsWith(`ɵ`)&&qo(t,e)&&(!o||e!==`caller`&&e!==`callee`&&e!==`arguments`)){let n=t[e];(kn(n)||te(n))&&!Object.isFrozen(n)&&ee(n)}}),t}function ci(t,o){return function(e,n){if(o.action(n))En(ne(n),`action`);let i=t(e,n);if(o.state())En(ne(i),`state`);return i}}function ne(t,o=[]){return(Sn(t)||Nn(t))&&o.length===0?{path:[`root`],value:t}:Object.keys(t).reduce((n,i)=>{if(n)return n;let r=t[i];return Yo(r)?n:Sn(r)||Nn(r)||Wo(r)||$o(r)||Ko(r)||Dn(r)?!1:Go(r)?ne(r,[...o,i]):{path:[...o,i],value:r}},!1)}function En(t,o){if(t===!1)return;let e=t.path.join(`.`),n=new Error(`Detected unserializable ${o} at "${e}". ${se}#strict${o}serializability`);throw n.value=t.value,n.unserializablePath=e,n}function di(t,o){return function(e,n){if(o.action(n)&&!Re.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${se}#strictactionwithinngzone`);return t(e,n)}}function li(t){return cj()?W({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function mi({strictActionSerializability:t,strictStateSerializability:o}){return e=>t||o?ci(e,{action:n=>t&&!ce(n),state:()=>o}):e}function ui({strictActionImmutability:t,strictStateImmutability:o}){return e=>t||o?si(e,{action:n=>t&&!ce(n),state:()=>o}):e}function ce(t){return t.type.startsWith(`@ngrx`)}function pi({strictActionWithinNgZone:t}){return o=>t?di(o,{action:e=>t&&!ce(e)}):o}function bi(t){return[{provide:gn,useValue:t},{provide:vn,useFactory:hi,deps:[gn]},{provide:rt,deps:[vn],useFactory:li},{provide:At,multi:!0,deps:[rt],useFactory:ui},{provide:At,multi:!0,deps:[rt],useFactory:mi},{provide:At,multi:!0,deps:[rt],useFactory:pi}]}function fi(){return[{provide:ie,multi:!0,deps:[rt],useFactory:vi}]}function hi(t){return t}function vi(t){if(!t.strictActionTypeUniqueness)return;let o=Object.entries(Xt).filter(([,e])=>e>1).map(([e])=>e);if(o.length)throw new Error(`Action types are registered more than once, ${o.map(e=>`"${e}"`).join(`, `)}. ${se}#strictactiontypeuniqueness`)}function gi(t={},o={}){return[{provide:In,useFactory:ai},{provide:un,useValue:o.initialState},{provide:oe,useFactory:On,deps:[un]},{provide:Qt,useValue:t},{provide:bn,useExisting:t instanceof A?t:Qt},{provide:Tn,deps:[Qt,[new Oy(bn)]],useFactory:ii},{provide:fn,useValue:o.metaReducers?o.metaReducers:[]},{provide:hn,deps:[At,fn],useFactory:ri},{provide:pn,useValue:o.reducerFactory?o.reducerFactory:Co},{provide:An,deps:[pn,hn],useFactory:Rn},Ro,Po,jo,Bo,zo,bi(o.runtimeChecks),fi()]}function _i(){T(Y),T(at),T(re),T(ae),T(In,{optional:!0}),T(ie,{optional:!0})}var yi=[{provide:Jt,useFactory:_i},Tu(()=>T(Jt))];function Nr(t,o){return ar$1([...gi(t,o),yi])}Tu(()=>T(_n));function Er(...t){return{reducer:t.pop(),types:t.map(n=>n.type)}}function wr(t,...o){let e=new Map;for(let n of o)for(let i of n.types){let r=e.get(i);if(r){let s=(c,m)=>n.reducer(r(c,m),m);e.set(i,s)}else e.set(i,n.reducer)}return function(n=t,i){let r=e.get(i.type);return r?r(n,i):n}}var q=Fn(`auth`);var Ni=D(q,t=>t.user);var xi=D(q,t=>t.teacher);var Mr=D(q,t=>t.settings);var Rr=D(q,t=>t.loading);var Dr=D(q,t=>t.initialized);var kr=D(q,t=>t.error);var Cr=D(Ni,t=>!!t);var Fr=D(xi,t=>t?.name||`Репетитор`);function st(t){return t.buttons===0||t.detail===0}function ct(t){let o=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var de;function Ln(){if(de==null){let t=typeof document<`u`?document.head:null;de=!!(t&&(t.createShadowRoot||t.attachShadow))}return de}function le(t){if(Ln()){let o=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function me(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let o=t.shadowRoot.activeElement;if(o===t)break;t=o}return t}function M(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var ue;try{ue=typeof Intl<`u`&&Intl.v8BreakIterator}catch{ue=!1}var v=(()=>{class t{_platformId=T(zm);isBrowser=this._platformId?go$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ue)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var dt;function Pn(){if(dt==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>dt=!0}))}finally{dt=dt||!1}return dt}function Q(t){return Pn()?t:!!t.capture}function pe(t,o=0){return jn(t)?Number(t):arguments.length===2?o:0}function jn(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function k(t){return t instanceof Nr$1?t.nativeElement:t}var Un=new A(`cdk-input-modality-detector-options`);var Bn={ignoreKeys:[18,17,224,91,16]};var zn=650;var be={passive:!0,capture:!0};var Vn=(()=>{class t{_platform=T(v);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Fn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=M(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<zn||(this._modality.next(st(e)?`keyboard`:`mouse`),this._mostRecentTarget=M(e))};_onTouchstart=e=>{if(ct(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=M(e)};constructor(){let e=T(Re),n=T(pr),i=T(Un,{optional:!0});if(this._options=W(W({},Bn),i),this.modalityDetected=this._modality.pipe(nm(1)),this.modalityChanged=this.modalityDetected.pipe(Ol()),this._platform.isBrowser){let r=T(Tr).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(n,`keydown`,this._onKeydown,be),r.listen(n,`mousedown`,this._onMousedown,be),r.listen(n,`touchstart`,this._onTouchstart,be)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var lt=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(lt||{});var Hn=new A(`cdk-focus-monitor-default-options`);var Dt=Q({passive:!0,capture:!0});var kt=(()=>{class t{_ngZone=T(Re);_platform=T(v);_inputModalityDetector=T(Vn);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T(pr);_stopInputModalityDetector=new z;constructor(){let e=T(Hn,{optional:!0});this._detectionMode=e?.detectionMode||lt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=M(e);for(let i=n;i;i=i.parentElement)e.type===`focus`?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=k(e);if(!this._platform.isBrowser||i.nodeType!==1)return ts();let r=le(i)||this._document,s=this._elementInfo.get(i);if(s)return n&&(s.checkChildren=!0),s.subject;let c={checkChildren:n,subject:new z,rootNode:r};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let n=k(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let r=k(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([c,m])=>this._originChanged(c,n,m)):(this._setOrigin(n),typeof r.focus==`function`&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===lt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===lt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?zn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),r=M(e);!i||!i.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Dt),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Dt)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(om(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Dt),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Dt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,r)=>{(r===e||i.checkChildren&&r.contains(e))&&n.push([r,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Ei=(()=>{class t{_elementRef=T(Nr$1);_focusMonitor=T(kt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new We;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=eD({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Ct=new WeakMap;var F=(()=>{class t{_appRef;_injector=T(ve$1);_environmentInjector=T(ue$1);load(e){let n=this._appRef=this._appRef||this._injector.get(Bi$1),i=Ct.get(n);i||(i={loaders:new Set,refs:[]},Ct.set(n,i),n.onDestroy(()=>{Ct.get(n)?.refs.forEach(r=>r.destroy()),Ct.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(aj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Ot=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=ZE({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})();var Ft;function wi(){if(Ft===void 0&&(Ft=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{Ft=t.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return Ft}function Ii(t){return wi()?.createHTML(t)||t}function Kn(t,o,e){t.innerHTML=Ii(e.sanitize(Q$1.HTML,o)||``)}function fe(t){return Array.isArray(t)?t:[t]}var $n=new Set;var U;var Lt=(()=>{class t{_platform=T(v);_nonce=T(Zm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ti}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ai(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();function Ai(t,o){if(!$n.has(t))try{U||(U=document.createElement(`style`),o&&U.setAttribute(`nonce`,o),U.setAttribute(`type`,`text/css`),document.head.appendChild(U)),U.sheet&&(U.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),$n.add(t))}catch(e){console.error(e)}}function Ti(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var he=(()=>{class t{_mediaMatcher=T(Lt);_zone=T(Re);_queries=new Map;_destroySubject=new z;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Wn(fe(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let r=yg(Wn(fe(e)).map(s=>this._registerQuery(s).observable));return r=po$1(r.pipe(no$1(1)),r.pipe(nm(1),qg(0))),r.pipe(le$1(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:m,query:b})=>{c.matches=c.matches||m,c.breakpoints[b]=m}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),r={observable:new b(s=>{let c=m=>this._zone.run(()=>s.next(m));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(rm(n),le$1(({matches:s})=>({query:e,matches:s})),om(this._destroySubject)),mql:n};return this._queries.set(e,r),r}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();function Wn(t){return t.map(o=>o.split(`,`)).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}function Mi(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let o=0;o<t.addedNodes.length;o++)if(!(t.addedNodes[o]instanceof Comment))return!1;for(let o=0;o<t.removedNodes.length;o++)if(!(t.removedNodes[o]instanceof Comment))return!1;return!0}return!1}var Zn=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Gn=(()=>{class t{_mutationObserverFactory=T(Zn);_observedElements=new Map;_ngZone=T(Re);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=k(e);return new b(i=>{let s=this._observeElement(n).pipe(le$1(c=>c.filter(m=>!Mi(m))),nn(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{i.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new z,i=this._mutationObserverFactory.create(r=>n.next(r));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Fa=(()=>{class t{_contentObserver=T(Gn);_elementRef=T(Nr$1);event=new We;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=pe(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(qg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=eD({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,oj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var Yn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=KE({type:t});static ɵinj=pu({providers:[Zn]})}return t})();var Ri=(()=>{class t{_platform=T(v);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return ki(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Di(Bi(e));if(n&&(qn(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),r=qn(e);return e.hasAttribute(`contenteditable`)?r!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!ji(e)?!1:i===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:i===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return Ui(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();function Di(t){try{return t.frameElement}catch{return null}}function ki(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function Ci(t){let o=t.nodeName.toLowerCase();return o===`input`||o===`select`||o===`button`||o===`textarea`}function Fi(t){return Li(t)&&t.type==`hidden`}function Oi(t){return Pi(t)&&t.hasAttribute(`href`)}function Li(t){return t.nodeName.toLowerCase()==`input`}function Pi(t){return t.nodeName.toLowerCase()==`a`}function Jn(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let o=t.getAttribute(`tabindex`);return!!(o&&!isNaN(parseInt(o,10)))}function qn(t){if(!Jn(t))return null;let o=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(o)?-1:o}function ji(t){let o=t.nodeName.toLowerCase(),e=o===`input`&&t.type;return e===`text`||e===`password`||o===`select`||o===`textarea`}function Ui(t){return Fi(t)?!1:Ci(t)||Oi(t)||t.hasAttribute(`contenteditable`)||Jn(t)}function Bi(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ge=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_enabled=!0;constructor(o,e,n,i,r=!1,s){this._element=o,this._checker=e,this._ngZone=n,this._document=i,this._injector=s,r||this.attachAnchors()}destroy(){let o=this._startAnchor,e=this._endAnchor;o&&(o.removeEventListener(`focus`,this.startAnchorListener),o.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){let e=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return o==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(o),!!n}return e.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){let e=this._getRegionBoundary(`start`);return e&&e.focus(o),!!e}focusLastTabbableElement(o){let e=this._getRegionBoundary(`end`);return e&&e.focus(o),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let e=o.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let e=o.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let o=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add(`cdk-visually-hidden`),o.classList.add(`cdk-focus-trap-anchor`),o.setAttribute(`aria-hidden`,`true`),o}_toggleAnchorTabIndex(o,e){o?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){zv(o,{injector:this._injector})}};var to=(()=>{class t{_checker=T(Ri);_ngZone=T(Re);_document=T(pr);_injector=T(ve$1);constructor(){T(F).load(Ot)}create(e,n=!1){return new ge(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var zi=(()=>{class t{_elementRef=T(Nr$1);_focusTrapFactory=T(to);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T(v).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=me(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(n){return new(n||t)};static ɵdir=eD({type:t,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,oj],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,oj]},exportAs:[`cdkTrapFocus`],features:[dy]})}return t})();var eo=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var no=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Vi=0;var Hi=(()=>{class t{_ngZone=T(Re);_defaultOptions=T(no,{optional:!0});_liveElement;_document=T(pr);_sanitizer=T(_r);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T(eo,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,r,s;return n.length===1&&typeof n[0]==`number`?s=n[0]:[r,s]=n,this.clear(),clearTimeout(this._previousTimeout),r||(r=i&&i.politeness?i.politeness:`polite`),s==null&&i&&(s=i.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Kn(this._liveElement,e,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),i=this._document.createElement(`div`);for(let r=0;r<n.length;r++)n[r].remove();return i.classList.add(e),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${Vi++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<n.length;i++){let r=n[i],s=r.getAttribute(`aria-owns`);s?s.indexOf(e)===-1&&r.setAttribute(`aria-owns`,s+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var P=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(P||{});var Qn=`cdk-high-contrast-black-on-white`;var Xn=`cdk-high-contrast-white-on-black`;var ve=`cdk-high-contrast-active`;var oo=(()=>{class t{_platform=T(v);_hasCheckedHighContrastMode=!1;_document=T(pr);_breakpointSubscription;constructor(){this._breakpointSubscription=T(he).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return P.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,r=(i&&i.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return P.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return P.BLACK_ON_WHITE}return P.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ve,Qn,Xn),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===P.BLACK_ON_WHITE?e.add(ve,Qn):n===P.WHITE_ON_BLACK&&e.add(ve,Xn)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Ki=(()=>{class t{constructor(){T(oo)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||t)};static ɵmod=KE({type:t});static ɵinj=pu({imports:[Yn]})}return t})();var $i=200;var Pt=class{_letterKeyStream=new z;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new z;selectedItem=this._selectedItem;constructor(o,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:$i;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(o),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let e=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(Yl(e=>this._pressedLetters.push(e)),qg(o),nn(()=>this._pressedLetters.length>0),le$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,r=this._items[i];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function io(t,...o){return o.length?o.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var X=class{_items;_activeItemIndex=Zo$1(-1);_activeItem=Zo$1(null);_wrap=!1;_typeaheadSubscription=j.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,e){this._items=o,o instanceof hi$1?this._itemChangesSubscription=o.changes.subscribe(n=>this._itemsChanged(n.toArray())):Jo$1(o)&&(this._effectRef=ld(()=>this._itemsChanged(o()),{injector:e}))}tabOut=new z;change=new z;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pt(e,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,e=10){return this._pageUpAndDown={enabled:o,delta:e},this}setActiveItem(o){let e=this._activeItem();this.updateActiveItem(o),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(o){let e=o.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!o[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(r<s?r:s-1,-1);break}else return;default:(i||io(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let e=this._getItemsArray(),n=typeof o==`number`?o:e.indexOf(o),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+o*n+e.length)%e.length,r=e[i];if(!this._skipPredicateFn(r)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,e){let n=this._getItemsArray();if(n[o]){for(;this._skipPredicateFn(n[o]);)if(o+=e,!n[o])return;this.setActiveItem(o)}}_getItemsArray(){return Jo$1(this._items)?this._items():this._items instanceof hi$1?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let e=this._activeItem();if(e){let n=o.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var _e=class extends X{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var ye=class extends X{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var ro=new Map;var Se=class t{_appId=T(ad);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){this._appId!==`ng`&&(o+=this._appId);let n=ro.get(o);return n===void 0?n=0:n++,ro.set(o,n),`${o}${e?t._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})};var so=` `;function Wi(t,o,e){let n=Ut(t,o);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),t.setAttribute(o,n.join(so)))}function Zi(t,o,e){let n=Ut(t,o);e=e.trim();let i=n.filter(r=>r!==e);i.length?t.setAttribute(o,i.join(so)):t.removeAttribute(o)}function Ut(t,o){return t.getAttribute(o)?.match(/\S+/g)??[]}var co=`cdk-describedby-message`;var jt=`cdk-describedby-host`;var xe=0;var Ds=(()=>{class t{_platform=T(v);_document=T(pr);_messageRegistry=new Map;_messagesContainer=null;_id=`${xe++}`;constructor(){T(F).load(Ot),this._id=T(ad)+`-`+xe++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let r=Ne(n,i);typeof n!=`string`?(ao(n,this._id),this._messageRegistry.set(r,{messageElement:n,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let r=Ne(n,i);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof n==`string`){let s=this._messageRegistry.get(r);s&&s.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${jt}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(jt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement(`div`);ao(i,this._id),i.textContent=e,n&&i.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Ne(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<n.length;r++)n[r].remove();let i=this._document.createElement(`div`);i.style.visibility=`hidden`,i.classList.add(e),i.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=Ut(e,`aria-describedby`).filter(i=>i.indexOf(co)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);Wi(e,`aria-describedby`,i.messageElement.id),e.setAttribute(jt,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,Zi(e,`aria-describedby`,i.messageElement.id),e.removeAttribute(jt)}_isElementDescribedByMessage(e,n){let i=Ut(e,`aria-describedby`),r=this._messageRegistry.get(n),s=r&&r.messageElement.id;return!!s&&i.indexOf(s)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let i=n==null?``:`${n}`.trim(),r=e.getAttribute(`aria-label`);return i?!r||r.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();function Ne(t,o){return typeof t==`string`?`${o||``}/${t}`:t}function ao(t,o){t.id||(t.id=`${co}-${o}-${xe++}`)}var mt=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(mt||{});var Bt;var B;function Us(){if(B==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return B=!1,B;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)B=!0;else{let t=Element.prototype.scrollTo;t?B=!/\{\s*\[native code\]\s*\}/.test(t.toString()):B=!1}}return B}function Bs(){if(typeof document!=`object`||!document)return mt.NORMAL;if(Bt==null){let t=document.createElement(`div`),o=t.style;t.dir=`rtl`,o.width=`1px`,o.overflow=`auto`,o.visibility=`hidden`,o.pointerEvents=`none`,o.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,t.appendChild(e),document.body.appendChild(t),Bt=mt.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Bt=t.scrollLeft===0?mt.NEGATED:mt.INVERTED),t.remove()}return Bt}function Vs(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var J;var lo=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ks(){if(J)return J;if(typeof document!=`object`||!document)return J=new Set(lo),J;let t=document.createElement(`input`);return J=new Set(lo.filter(o=>(t.setAttribute(`type`,o),t.type===o))),J}var Ys={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Gi=new A(`MATERIAL_ANIMATIONS`);var mo=null;function Yi(){return T(Gi,{optional:!0})?.animationsDisabled||T(Qm,{optional:!0})===`NoopAnimations`?`di-disabled`:(mo??=T(Lt).matchMedia(`(prefers-reduced-motion)`).matches,mo?`reduced-motion`:`enabled`)}function tt(){return Yi()!==`enabled`}function ec(t){return t==null?``:typeof t==`string`?t:`${t}px`}function oc(t){return t!=null&&`${t}`!=`false`}function ic(t,o=/\s+/){let e=[];if(t!=null){let n=Array.isArray(t)?t:`${t}`.split(o);for(let i of n){let r=`${i}`.trim();r&&e.push(r)}}return e}var E=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(E||{});var Ee=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=E.HIDDEN;constructor(o,e,n,i=!1){this._renderer=o,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var uo=Q({passive:!0,capture:!0});var we=class{_events=new Map;addHandler(o,e,n,i){let r=this._events.get(e);if(r){let s=r.get(n);s?s.add(i):r.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,uo)})}removeHandler(o,e,n){let i=this._events.get(o);if(!i)return;let r=i.get(e);r&&(r.delete(n),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,uo)))}_delegateEventHandler=o=>{let e=M(o);e&&this._events.get(o.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(r=>r.handleEvent(o))})}};var ut={enterDuration:225,exitDuration:150};var qi=800;var po=Q({passive:!0,capture:!0});var bo=[`mousedown`,`touchstart`];var fo=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Qi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=ZE({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})();var pt=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new we;constructor(o,e,n,i,r){this._target=o,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=k(n)),r&&r.get(F).load(Qi)}fadeInRipple(o,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=W(W({},ut),n.animation);n.centered&&(o=i.left+i.width/2,e=i.top+i.height/2);let s=n.radius||Xi(o,e,i),c=o-i.left,m=e-i.top,b=r.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${c-s}px`,d.style.top=`${m-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(d);let N=window.getComputedStyle(d),Ht=N.transitionProperty,et=N.transitionDuration,z=Ht===`none`||et===`0s`||et===`0s, 0s`||i.width===0&&i.height===0,j=new Ee(this,d,n,z);d.style.transform=`scale3d(1, 1, 1)`,j.state=E.FADING_IN,n.persistent||(this._mostRecentTransientRipple=j);let bt=null;return!z&&(b||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Re=()=>{bt&&(bt.fallbackTimer=null),clearTimeout(De),this._finishRippleTransition(j)},Kt=()=>this._destroyRipple(j),De=setTimeout(Kt,b+100);d.addEventListener(`transitionend`,Re),d.addEventListener(`transitioncancel`,Kt),bt={onTransitionEnd:Re,onTransitionCancel:Kt,fallbackTimer:De}}),this._activeRipples.set(j,bt),(z||!b)&&this._finishRippleTransition(j),j}fadeOutRipple(o){if(o.state===E.FADING_OUT||o.state===E.HIDDEN)return;let e=o.element,n=W(W({},ut),o.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,o.state=E.FADING_OUT,(o._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=k(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,bo.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{fo.forEach(e=>{this._triggerElement.addEventListener(e,this,po)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===E.FADING_IN?this._startFadeOutTransition(o):o.state===E.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:n}=o.config;o.state=E.VISIBLE,!n&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=E.HIDDEN,e!==null&&(o.element.removeEventListener(`transitionend`,e.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=st(o),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+qi;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!ct(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===E.VISIBLE||o.config.terminateOnPointerUp&&o.state===E.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(bo.forEach(e=>t._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(fo.forEach(e=>o.removeEventListener(e,this,po)),this._pointerUpEventsRegistered=!1))}};function Xi(t,o,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(n*n+i*i)}var Ie=new A(`mat-ripple-global-options`);var vc=(()=>{class t{_elementRef=T(Nr$1);_animationsDisabled=tt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T(Re),n=T(v),i=T(Ie,{optional:!0}),r=T(ve$1);this._globalOptions=i||{},this._rippleRenderer=new pt(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:W(W(W({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,W(W({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,W(W({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||t)};static ɵdir=eD({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&yh(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var Ji={capture:!0};var tr=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ae=`mat-ripple-loader-uninitialized`;var Te=`mat-ripple-loader-class-name`;var ho=`mat-ripple-loader-centered`;var zt=`mat-ripple-loader-disabled`;var vo=(()=>{class t{_document=T(pr);_animationsDisabled=tt();_globalRippleOptions=T(Ie,{optional:!0});_platform=T(v);_ngZone=T(Re);_injector=T(ve$1);_eventCleanups;_hosts=new Map;constructor(){let e=T(Tr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>tr.map(n=>e.listen(this._document,n,this._onInteraction,Ji)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Ae,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(Te))&&e.setAttribute(Te,n.className||``),n.centered&&e.setAttribute(ho,``),n.disabled&&e.setAttribute(zt,``)}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(zt,``):e.removeAttribute(zt)}_onInteraction=e=>{let n=M(e);if(n instanceof HTMLElement){let i=n.closest(`[${Ae}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(Te)),e.append(n);let i=this._globalRippleOptions,r=this._animationsDisabled?0:i?.animation?.enterDuration??ut.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??ut.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(zt),rippleConfig:{centered:e.hasAttribute(ho),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},m=new pt(c,this._ngZone,n,this._platform,this._injector),b=!c.rippleDisabled;b&&m.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:m,hasSetUpEvents:b}),e.removeAttribute(Ae)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var go=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=ZE({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var er=[`*`,[[``,`progressIndicator`,``]]];var nr=[`*`,`[progressIndicator]`];function or(t,o){t&1&&(Yc$1(0,`div`,1),$D(1,1),Kc())}var ir=new A(`MAT_BUTTON_CONFIG`);function _o(t){return t==null?void 0:ij(t)}var Me=(()=>{class t{_elementRef=T(Nr$1);_ngZone=T(Re);_animationsDisabled=tt();_config=T(ir,{optional:!0});_focusMonitor=T(kt);_cleanupClick;_renderer=T(Ka);_rippleLoader=T(vo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=J1(!1,{transform:oj});constructor(){T(F).load(go);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||t)};static ɵdir=eD({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,i){n&2&&(Xp(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),ow(i.color?`mat-`+i.color:``),yh(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,oj],disabled:[2,`disabled`,`disabled`,oj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,oj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,oj],tabIndex:[2,`tabIndex`,`tabIndex`,_o],_tabindex:[2,`tabindex`,`_tabindex`,_o],showProgress:[1,`showProgress`]}})}return t})();var rr=(()=>{class t extends Me{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||t)};static ɵcmp=ZE({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Wp],ngContentSelectors:nr,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(BD(er),nh(0,`span`,0),$D(1),DD(2,or,2,0,`div`,1),nh(3,`span`,2)(4,`span`,3)),n&2&&(vI(2),wD(i.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var ar=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T(pr)});var sr=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function yo(t){let o=t?.toLowerCase()||``;return o===`auto`&&typeof navigator<`u`&&navigator?.language?sr.test(navigator.language)?`rtl`:`ltr`:o===`rtl`?`rtl`:`ltr`}var cr=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Zo$1(`ltr`);change=new We;constructor(){let e=T(ar,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(yo(n||i||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||t)};static ɵprov=Sr$1({token:t,factory:t.ɵfac})}return t})();var Vt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=KE({type:t});static ɵinj=pu({})}return t})();var So=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=KE({type:t});static ɵinj=pu({imports:[Vt]})}return t})();var dr=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var lr=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function mr(t,o){t&1&&(Yc$1(0,`div`,2),$D(1,3),Kc())}var No=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Yc=(()=>{class t extends Me{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=ur(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?No.get(this._appearance):null,r=No.get(e);i&&n.remove(...i),n.add(...r),this._appearance=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=ZE({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Wp],ngContentSelectors:lr,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(BD(dr),nh(0,`span`,0),$D(1),Yc$1(2,`span`,1),$D(3,1),Kc(),$D(4,2),DD(5,mr,2,0,`div`,2),nh(6,`span`,3)(7,`span`,4)),n&2&&(yh(`mdc-button__ripple`,!i._isFab)(`mdc-fab__ripple`,i._isFab),vI(5),wD(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function ur(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var qc=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=KE({type:t});static ɵinj=pu({imports:[So,Vt]})}return t})();var Xc={production:!1,supabaseUrl:`https://myukzhwbihgnvxshiloe.supabase.co`,supabaseAnonKey:`sb_publishable_RuyZ-JEr5MNYF_W2RcDwBg_lvQOzgRT`};export{ic as $,Se as A,Yi as B,Mr as C,zi as Ct,Ri as D,Ot as E,Vs as F,ae as G,Ys as H,Vt as I,ct as J,at as K,Xc as L,Sr as M,Tt as N,Rr as O,Us as P,he as Q,Y as R,M as S,yr as St,Nr as T,_e as U,Yn as V,_n as W,fe as X,ec as Y,go as Z,Jt as _,wn as _t,Ds as a,mt as at,Lo as b,xo as bt,Eo as c,pe as ct,Fa as d,rr as dt,io as et,Fn as f,st as ft,Ii as g,vc as gt,Ie as h,v as ht,Dr as i,me as it,So as j,Rt as k,Er as l,qc as lt,Hi as m,tt as mt,Cr as n,kr as nt,E as o,oc as ot,Fr as p,to as pt,cr as q,D as r,kt as rt,Ei as s,oe as st,Bs as t,k as tt,F as u,re as ut,Ki as v,wr as vt,Ni as w,Lt as x,ye as xt,Ks as y,xi as yt,Yc as z};