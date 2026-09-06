import{$n as ih,An as bh,Ar as qD,Bn as em,Br as th,Bt as Th,C as Dh,Dt as QE,E as ED,Er as pi$1,F as G1,Fr as qv,G as ID,Gn as gI,Gr as uE,H as H1,Hn as es$1,Hr as tm,I as GE,Kt as V1,Lr as sd,M as Fw,Nn as ch,O as Fg,Or as pr$1,Ot as Qc,P as G,Pn as cy,Pr as qp,Pt as Re,Qr as ve,Qt as W,Rr as se,Rt as Sr$1,S as DD,Sn as _i$1,Sr as oE,T as Dw,Tn as ah,Tr as ph,Ut as Tw,Wn as fw,Wr as tw,X as Jp,Xr as vD,Yn as hh,Yr as uu,Yt as Vi$1,Z as KE,_ as CD,_r as nh,ai as yw,ar as ju,br as no$1,cn as Xp,dn as Yc,dr as le,dt as My,ei as wD,en as We,er as j$1,ft as ND,gn as Zc,gr as nE,h as BD,ht as Nr$1,j as Fu,jt as Qo$1,kr as q1,l as A,mn as Yu,mr as mw,n as $D,nr as jD,nt as Kp,oi as z,on as Xc,ot as Lh,pn as Yp,qt as VD,rn as Wp,rt as Ku,s as $p,si as z1,ti as wh,u as Ae,ui as zh,un as Ya$1,ur as kw,vt as Ol$1,wn as _o$1,wr as oh,x as Cw,xt as PD,y as Cr$1,yr as nn,zt as T}from"./chunk-DoCXw7pv.js";import{t as F}from"./chunk-JnLRtYd3.js";import{r as Mn}from"./chunk-C9CFYGkc.js";import{$ as k,B as _r$1,F as Xi$1,H as be,I as Ye$1,J as fr$1,K as et,N as Wo$1,Q as ja$1,R as Ze,S as Mi$1,Y as ha$1,a as Be$1,c as Da,dt as tt,et as kn,k as Rr$1,nt as la,p as In,pt as v,q as fn,rt as me,u as Gn,x as Ma,y as Lr$1}from"./chunk-5MOH3T1v.js";import{C as st,E as yt,d as _t$1,f as at,h as ct,l as X,m as bt,n as C,s as R}from"./chunk-D8IUJI16.js";import{Bt as yt$1,C as bt$1,Ct as Ne,Dt as Xt,Et as Ut,F as C$1,I as _,It as me$1,L as p,M as Ke,Nt as ge,Ot as Z,Pt as hn,R as v$1,Rt as ri,S as Tt,St as Lt,Tt as Re$1,Ut as q,Y as G$1,b as xn,c as An,d as Kn,g as Xn,gt as $t,h as W$1,l as Dn,mt as $,nt as s,o as wt,p as Sn,s as yt$2,u as Dt,v as kn$1,w as jt,x as Lt$1,xt as L,y as me$2,yt as It$1}from"./main-DQY2MMSR.js";import{_ as pt$1,a as In$1,b as y,d as Y,f as Yt,g as nn$1,h as gt,i as G$2,l as Sn$1,m as c,n as En,o as Jt,r as Fn,s as Nn,u as We$1,v as sn,y as ue}from"./chunk-B9TYi4gO.js";import{n as bt$2,r as nt,t as Dt$1}from"./chunk-CR9ZYuFV.js";import{n as we,t as te}from"./chunk-LUAxsRH-.js";import{i as Pe,o as gt$1,r as Kt,s as ht$1,t as $$1}from"./chunk-BPaoGQCb.js";import{n as Nt$1,t as Lt$2}from"./chunk-iNmYyBqz.js";import{n as Pe$1,r as Y$1,t as Be$2}from"./chunk-DqzB3mUt.js";var sr=[`tooltip`];var lr=20;var dr=new A(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(ve);return()=>Xt(n,{scrollThrottle:lr})}});var cr=new A(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ci=`tooltip-panel`;var ur={passive:!0};var pr=8;var mr=8;var hr=24;var _r=200;var ui=(()=>{class n{_elementRef=T(Nr$1);_ngZone=T(Re);_platform=T(v);_ariaDescriber=T(Wo$1);_focusMonitor=T(In);_dir=T(Rr$1);_injector=T(ve);_viewContainerRef=T(Vi$1);_mediaMatcher=T(me);_document=T(pr$1);_renderer=T(Ya$1);_animationsDisabled=fn();_defaultOptions=T(cr,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=fr;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=la(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=la(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ye$1(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ye$1(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new z;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=pr}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(tm(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new Lt(this._tooltipComponent,this._viewContainerRef);let i=this._tooltipInstance=a.attach(this._portal).instance;i._triggerElement=this._elementRef.nativeElement,i._mouseLeaveHideDelay=this._hideDelay,i.afterHidden().pipe(tm(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),i.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof Nr$1)return this._overlayRef;this._detach()}let t=this._injector.get(Z).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${ci}`,i=Ut(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return i.positionChanges.pipe(tm(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=$t(this._injector,{direction:this._dir,positionStrategy:i,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(dr)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(tm(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(tm(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(tm(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(tm(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([this._addOffset(W(W({},a.main),i.main)),this._addOffset(W(W({},a.fallback),i.fallback))])}_addOffset(e){let t=mr,a=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=a?-t:t:e.originX===`end`&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,a;t==`above`||t==`below`?a={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?a={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(a={originX:`end`,originY:`center`});let{x:i,y:o}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:i,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,a;t==`above`?a={overlayX:`center`,overlayY:`bottom`}:t==`below`?a={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?a={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(a={overlayX:`start`,overlayY:`center`});let{x:i,y:o}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:i,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),qv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:i}=e,o;if(t===`center`?this._dir&&this._dir.value===`rtl`?o=a===`end`?`left`:`right`:o=a===`start`?`left`:`right`:o=t===`bottom`&&i===`top`?`above`:`below`,o!==this._currentPosition){let u=this._overlayRef;if(u){let g=`${this._cssClassPrefix}-${ci}-`;u.removePanelClass(g+this._currentPosition),u.addPanelClass(g+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let i=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??i)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,ur))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,a=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(a.webkitUserDrag=`none`),a.touchAction=`none`,a.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||qv({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!kn(e):!0;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,a){t&2&&hh(`mat-mdc-tooltip-disabled`,a.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var fr=(()=>{class n{_changeDetectorRef=T(q1);_elementRef=T(Nr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=fn();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new z;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>hr&&e.width>=_r}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,i=this._hideAnimation;if(t.classList.remove(e?i:a),t.classList.add(e?a:i),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let o=getComputedStyle(t);(o.getPropertyValue(`animation-duration`)===`0s`||o.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,a){if(t&1&&ch(sr,7),t&2){let i;BD(i=$D())&&(a._tooltip=i.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,a){t&1&&oh(`mouseleave`,function(o){return a._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,a){t&1&&(Zc(0,`div`,1,0),ih(`animationend`,function(o){return a._handleAnimationEnd(o)}),Zc(2,`div`,2),fw(3),Yc()()),t&2&&(tw(a.tooltipClass),hh(`mdc-tooltip--multiline`,a._isMultiline),gI(3),Dh(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();function Ms(n){return{width:n?`480px`:`70vw`,maxWidth:`96vw`,maxHeight:`90vh`}}function ws(n,r={}){let a=r,{scrollStrategy:e}=a;return G(W({restoreFocus:!0,enterAnimationDuration:`250ms`,exitAnimationDuration:`200ms`},zh(a,[`scrollStrategy`])),{disableClose:!1})}function gr(n,r){return this._trackRow(r)}var vi=(n,r)=>r.id;function vr(n,r){if(n&1&&(Zc(0,`tr`,0)(1,`td`,3),fw(2),Yc()()),n&2){let e=PD();gI(),ph(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Yp(`colspan`,e.numCols),gI(),Xc(` `,e.label,` `)}}function br(n,r){if(n&1&&(Zc(0,`td`,3),fw(1),Yc()),n&2){let e=PD(2);ph(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Yp(`colspan`,e._firstRowOffset),gI(),Xc(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function yr(n,r){if(n&1){let e=ND();Zc(0,`td`,6)(1,`button`,7),ih(`click`,function(a){let i=Fu(e).$implicit;return ju(PD(2)._cellClicked(i,a))})(`focus`,function(a){let i=Fu(e).$implicit;return ju(PD(2)._emitActiveDateChange(i,a))}),Zc(2,`span`,8),fw(3),Yc(),Xp(4,`span`,9),Yc()()}if(n&2){let e=r.$implicit,t=r.$index,a=PD().$index,i=PD();ph(`width`,i._cellWidth)(`padding-top`,i._cellPadding)(`padding-bottom`,i._cellPadding),Yp(`data-mat-row`,a)(`data-mat-col`,t),gI(),tw(e.cssClasses),hh(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,i._isActiveCell(a,t))(`mat-calendar-body-range-start`,i._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,i._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,i._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,i._isComparisonBridgeStart(e.compareValue,a,t))(`mat-calendar-body-comparison-bridge-end`,i._isComparisonBridgeEnd(e.compareValue,a,t))(`mat-calendar-body-comparison-start`,i._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,i._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,i._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,i._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,i._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,i._isInPreview(e.compareValue)),nh(`tabIndex`,i._isActiveCell(a,t)?0:-1),Yp(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,i._isSelected(e.compareValue))(`aria-current`,i.todayValue===e.compareValue?`date`:null)(`aria-describedby`,i._getDescribedby(e.compareValue)),gI(),hh(`mat-calendar-body-selected`,i._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,i._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,i.todayValue===e.compareValue),gI(),Xc(` `,e.displayValue,` `)}}function Dr(n,r){if(n&1&&(Zc(0,`tr`,1),vD(1,br,2,6,`td`,4),wD(2,yr,5,49,`td`,5,vi),Yc()),n&2){let e=r.$implicit,t=r.$index,a=PD();gI(),ID(t===0&&a._firstRowOffset?1:-1),gI(),CD(e)}}function Cr(n,r){if(n&1&&(_i$1(0,`th`,2)(1,`span`,6),fw(2),Qc(),_i$1(3,`span`,3),fw(4),Qc()()),n&2){let e=r.$implicit;gI(2),Dh(e.long),gI(2),Dh(e.narrow)}}var Sr=[`*`];function Mr(n,r){}function wr(n,r){if(n&1){let e=ND();_i$1(0,`mat-month-view`,4),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`_userSelection`,function(a){Fu(e);return ju(PD()._dateSelected(a))})(`dragStarted`,function(a){Fu(e);return ju(PD()._dragStarted(a))})(`dragEnded`,function(a){Fu(e);return ju(PD()._dragEnded(a))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function kr(n,r){if(n&1){let e=ND();_i$1(0,`mat-year-view`,5),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`monthSelected`,function(a){Fu(e);return ju(PD()._monthSelectedInYearView(a))})(`selectedChange`,function(a){Fu(e);return ju(PD()._goToDateInView(a,`month`))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function xr(n,r){if(n&1){let e=ND();_i$1(0,`mat-multi-year-view`,6),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`yearSelected`,function(a){Fu(e);return ju(PD()._yearSelectedInMultiYearView(a))})(`selectedChange`,function(a){Fu(e);return ju(PD()._goToDateInView(a,`year`))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function Ar(n,r){}var Er=[`button`];var Ir=[[[``,`matDatepickerToggleIcon`,``]]];var Tr=[`[matDatepickerToggleIcon]`];function Nr(n,r){n&1&&(Yu(),_i$1(0,`svg`,2),Jp(1,`path`,3),Qc())}var mt=(()=>{class n{changes=new z;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Sr$1({token:n,factory:n.ɵfac})}return n})();var Vr=0;var Et=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Vr++;cssClasses;constructor(r,e,t,a,i,o=r,u){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=u,this.cssClasses=i instanceof Set?Array.from(i):i}};var Or={passive:!1,capture:!0};var oa={passive:!0,capture:!0};var pi={passive:!0};var pt=(()=>{class n{_elementRef=T(Nr$1);_ngZone=T(Re);_platform=T(v);_intl=T(mt);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new We;previewChange=new We;activeDateChange=new We;dragStarted=new We;dragEnded=new We;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=T(ve);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=T(Ya$1),t=T(tt);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),T(k).load(Da),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,`touchmove`,this._touchmoveHandler,Or),e.listen(a,`mouseenter`,this._enterHandler,oa),e.listen(a,`focus`,this._enterHandler,oa),e.listen(a,`mouseleave`,this._leaveHandler,oa),e.listen(a,`blur`,this._leaveHandler,oa),e.listen(a,`mousedown`,this._mousedownHandler,pi),e.listen(a,`touchstart`,this._mousedownHandler,pi)];this._platform.isBrowser&&i.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){qv(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Ra(e,this.startValue,this.endValue)}_isRangeEnd(e){return Pa(e,this.startValue,this.endValue)}_isInRange(e){return La(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Ra(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let o=this.rows[t-1];i=o&&o[o.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let o=this.rows[t+1];i=o&&o[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return Pa(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return La(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Ra(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Pa(e,this.previewStart,this.previewEnd)}_isInPreview(e){return La(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=mi(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Fa(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Fa(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=mi(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Fa(e);if(t){let a=t.getAttribute(`data-mat-row`),i=t.getAttribute(`data-mat-col`);if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[cy],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(t,a){t&1&&(vD(0,vr,3,6,`tr`,0),wD(1,Dr,4,1,`tr`,1,gr,!0),Zc(3,`span`,2),fw(4),Yc(),Zc(5,`span`,2),fw(6),Yc(),Zc(7,`span`,2),fw(8),Yc(),Zc(9,`span`,2),fw(10),Yc()),t&2&&(ID(a._firstRowOffset<a.labelMinRequiredCells?0:-1),gI(),CD(a.rows),gI(2),nh(`id`,a._startDateLabelId),gI(),Xc(` `,a.startDateAccessibleName,`
`),gI(),nh(`id`,a._endDateLabelId),gI(),Xc(` `,a.endDateAccessibleName,`
`),gI(),nh(`id`,a._comparisonStartDateLabelId),gI(),wh(` `,a.comparisonDateAccessibleName,` `,a.startDateAccessibleName,`
`),gI(),nh(`id`,a._comparisonEndDateLabelId),gI(),wh(` `,a.comparisonDateAccessibleName,` `,a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return n})();function Oa(n){return n?.nodeName===`TD`}function Fa(n){let r;return Oa(n)?r=n:Oa(n.parentNode)?r=n.parentNode:Oa(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute(`data-mat-row`)!=null?r:null}function Ra(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Pa(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function La(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function mi(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var ne=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}};var It=(()=>{class n{selection;_adapter;_selectionChanged=new z;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){uE()};static ɵprov=se({token:n,factory:n.ɵfac})}return n})();var Fr=(()=>{class n extends It{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||n)(Ae(p))};static ɵprov=se({token:n,factory:n.ɵfac})}return n})();var bi={provide:It,useFactory:()=>T(It,{optional:!0,skipSelf:!0})||new Fr(T(p))};var yi=new A(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var Ba=7;var Rr=0;var hi=(()=>{class n{_changeDetectorRef=T(q1);_dateFormats=T(_,{optional:!0});_dateAdapter=T(p,{optional:!0});_dir=T(Rr$1,{optional:!0});_rangeStrategy=T(yi,{optional:!0});_rerenderSubscription=j$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ne?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new We;_userSelection=new We;dragStarted=new We;dragEnded=new We;activeDateChange=new We;_matCalendarBody;_monthLabel=Qo$1(``);_weeks=Qo$1([]);_firstWeekOffset=Qo$1(0);_rangeStart=Qo$1(null);_rangeEnd=Qo$1(null);_comparisonRangeStart=Qo$1(null);_comparisonRangeEnd=Qo$1(null);_previewStart=Qo$1(null);_previewEnd=Qo$1(null);_isRange=Qo$1(!1);_todayDate=Qo$1(null);_weekdays=Qo$1([]);constructor(){T(k).load(be),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,o;this._selected instanceof ne?(i=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):i=o=this._getDateInCurrentMonth(this._selected),(i!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!kn(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ba+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ba),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),i=this._dateAdapter.getDayOfWeekNames(`long`).map((o,u)=>({long:o,narrow:t[u],id:Rr++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,o=this._firstWeekOffset();i<e;i++,o++){o==Ba&&(a.push([]),o=0);let u=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),g=this._shouldEnableDate(u),v=this._dateAdapter.format(u,this._dateFormats.display.dateA11yLabel),m=this.dateClass?this.dateClass(u,`month`):void 0;a[a.length-1].push(new Et(i+1,t[i],v,g,m,this._getCellCompareValue(u),u))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof ne?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-month-view`]],viewQuery:function(t,a){if(t&1&&ch(pt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[cy],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),wD(3,Cr,5,2,`th`,2,vi),Qc(),_i$1(5,`tr`,3),Jp(6,`th`,4),Qc()(),_i$1(7,`tbody`,5),oh(`selectedValueChange`,function(o){return a._dateSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`previewChange`,function(o){return a._previewChanged(o)})(`dragStarted`,function(o){return a.dragStarted.emit(o)})(`dragEnded`,function(o){return a._dragEnded(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(3),CD(a._weekdays()),gI(4),Kp(`label`,a._monthLabel())(`rows`,a._weeks())(`todayValue`,a._todayDate())(`startValue`,a._rangeStart())(`endValue`,a._rangeEnd())(`comparisonStart`,a._comparisonRangeStart())(`comparisonEnd`,a._comparisonRangeEnd())(`previewStart`,a._previewStart())(`previewEnd`,a._previewEnd())(`isRange`,a._isRange())(`labelMinRequiredCells`,3)(`activeCell`,a._dateAdapter.getDate(a.activeDate)-1)(`startDateAccessibleName`,a.startDateAccessibleName)(`endDateAccessibleName`,a.endDateAccessibleName))},dependencies:[pt],encapsulation:2})}return n})();var J=24;var Ya=4;var _i=(()=>{class n{_changeDetectorRef=T(q1);_dateAdapter=T(p,{optional:!0});_dir=T(Rr$1,{optional:!0});_rerenderSubscription=j$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Di(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ne?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new We;yearSelected=new We;activeDateChange=new We;_matCalendarBody;_years=Qo$1([]);_todayYear=Qo$1(0);_selectedYear=Qo$1(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-xt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,o=[];i<J;i++)o.push(t+i),o.length==Ya&&(a.push(o.map(u=>this._createCellForYear(u))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ya);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ya);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-xt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,J-xt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-J*10:-J);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?J*10:J);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return xt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new Et(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof ne){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,a){if(t&1&&ch(pt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Jp(3,`th`,2),Qc()(),_i$1(4,`tbody`,3),oh(`selectedValueChange`,function(o){return a._yearSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(4),Kp(`rows`,a._years())(`todayValue`,a._todayYear())(`startValue`,a._selectedYear())(`endValue`,a._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._getActiveCell()))},dependencies:[pt],encapsulation:2})}return n})();function Di(n,r,e,t,a){let i=n.getYear(r),o=n.getYear(e),u=Ci(n,t,a);return Math.floor((i-u)/J)===Math.floor((o-u)/J)}function xt(n,r,e,t){return Pr(n.getYear(r)-Ci(n,e,t),J)}function Ci(n,r,e){let t=0;return e?t=n.getYear(e)-J+1:r&&(t=n.getYear(r)),t}function Pr(n,r){return(n%r+r)%r}var fi=(()=>{class n{_changeDetectorRef=T(q1);_dateFormats=T(_,{optional:!0});_dateAdapter=T(p,{optional:!0});_dir=T(Rr$1,{optional:!0});_rerenderSubscription=j$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ne?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new We;monthSelected=new We;activeDateChange=new We;_matCalendarBody;_months=Qo$1([]);_yearLabel=Qo$1(``);_todayMonth=Qo$1(null);_selectedMonth=Qo$1(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,`year`):void 0;return new Et(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof ne?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-year-view`]],viewQuery:function(t,a){if(t&1&&ch(pt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Jp(3,`th`,2),Qc()(),_i$1(4,`tbody`,3),oh(`selectedValueChange`,function(o){return a._monthSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(4),Kp(`label`,a._yearLabel())(`rows`,a._months())(`todayValue`,a._todayMonth())(`startValue`,a._selectedMonth())(`endValue`,a._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._dateAdapter.getMonth(a.activeDate)))},dependencies:[pt],encapsulation:2})}return n})();var Si=(()=>{class n{_intl=T(mt);calendar=T(Ha);_dateAdapter=T(p,{optional:!0});_dateFormats=T(_,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){T(k).load(be);let e=T(q1);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-J))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:J))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Di(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-xt(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+J-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1))]}_periodButtonLabelId=T(tt).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:Sr,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(t,a){t&1&&(jD(),_i$1(0,`div`,0)(1,`div`,1)(2,`span`,2),fw(3),Qc(),_i$1(4,`button`,3),oh(`click`,function(){return a.currentPeriodClicked()}),_i$1(5,`span`,4),fw(6),Qc(),Yu(),_i$1(7,`svg`,5),Jp(8,`polygon`,6),Qc()(),Ku(),Jp(9,`div`,7),VD(10),_i$1(11,`button`,8),oh(`click`,function(){return a.previousClicked()}),Yu(),_i$1(12,`svg`,9),Jp(13,`path`,10),Qc()(),Ku(),_i$1(14,`button`,11),oh(`click`,function(){return a.nextClicked()}),Yu(),_i$1(15,`svg`,9),Jp(16,`path`,12),Qc()()()()),t&2&&(gI(2),Kp(`id`,a._periodButtonLabelId),gI(),Dh(a.periodButtonDescription),gI(),Yp(`aria-label`,a.periodButtonLabel)(`aria-describedby`,a._periodButtonLabelId),gI(2),Dh(a.periodButtonText),gI(),hh(`mat-calendar-invert`,a.calendar.currentView!==`month`),gI(4),Kp(`disabled`,!a.previousEnabled())(`matTooltip`,a.prevButtonLabel),Yp(`aria-label`,a.prevButtonLabel),gI(3),Kp(`disabled`,!a.nextEnabled())(`matTooltip`,a.nextButtonLabel),Yp(`aria-label`,a.nextButtonLabel))},dependencies:[jt,bt$1,ui],encapsulation:2})}return n})();var Ha=(()=>{class n{_dateAdapter=T(p,{optional:!0});_dateFormats=T(_,{optional:!0});_changeDetectorRef=T(q1);_elementRef=T(Nr$1);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof ne?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new We;yearSelected=new We;monthSelected=new We;viewChanged=new We(!0);_userSelection=new We;_userDragDrop=new We;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new z;constructor(){this._intlChanges=T(mt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Lt(this.headerComponent||Si),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Ze())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof ne||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-calendar`]],viewQuery:function(t,a){if(t&1&&ch(hi,5)(fi,5)(_i,5),t&2){let i;BD(i=$D())&&(a.monthView=i.first),BD(i=$D())&&(a.yearView=i.first),BD(i=$D())&&(a.multiYearView=i.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[Dw([bi]),cy],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(t,a){if(t&1&&(qp(0,Mr,0,0,`ng-template`,0),_i$1(1,`div`,1),vD(2,wr,1,11,`mat-month-view`,2)(3,kr,1,6,`mat-year-view`,3)(4,xr,1,6,`mat-multi-year-view`,3),Qc()),t&2){let i;Kp(`cdkPortalOutlet`,a._calendarHeaderPortal),gI(2),ID((i=a.currentView)===`month`?2:i===`year`?3:i===`multi-year`?4:-1)}},dependencies:[hn,Xi$1,hi,fi,_i],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Lr=new A(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(ve);return()=>Xt(n)}});var Mi=(()=>{class n{_elementRef=T(Nr$1);_animationsDisabled=fn();_changeDetectorRef=T(q1);_globalModel=T(It);_dateAdapter=T(p);_ngZone=T(Re);_rangeSelectionStrategy=T(yi,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new z;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(T(k).load(be),this._closeButtonText=T(mt).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=T(Ya$1);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof ne;if(i&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-datepicker-content`]],viewQuery:function(t,a){if(t&1&&ch(Ha,5),t&2){let i;BD(i=$D())&&(a._calendar=i.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(t,a){t&2&&(tw(a.color?`mat-`+a.color:``),hh(`mat-datepicker-content-touch`,a.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!a._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(t,a){t&1&&(_i$1(0,`div`,0)(1,`mat-calendar`,1),oh(`yearSelected`,function(o){return a.datepicker._selectYear(o)})(`monthSelected`,function(o){return a.datepicker._selectMonth(o)})(`viewChanged`,function(o){return a.datepicker._viewChanged(o)})(`_userSelection`,function(o){return a._handleUserSelection(o)})(`_userDragDrop`,function(o){return a._handleUserDragDrop(o)}),Qc(),qp(2,Ar,0,0,`ng-template`,2),_i$1(3,`button`,3),oh(`focus`,function(){return a._closeButtonFocused=!0})(`blur`,function(){return a._closeButtonFocused=!1})(`click`,function(){return a.datepicker.close()}),fw(4),Qc()()),t&2&&(hh(`mat-datepicker-content-container-with-custom-header`,a.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,a._actionsPortal),Yp(`aria-modal`,!0)(`aria-labelledby`,a._dialogLabelId??void 0),gI(),tw(a.datepicker.panelClass),Kp(`id`,a.datepicker.id)(`startAt`,a.datepicker.startAt)(`startView`,a.datepicker.startView)(`minDate`,a.datepicker._getMinDate())(`maxDate`,a.datepicker._getMaxDate())(`dateFilter`,a.datepicker._getDateFilter())(`headerComponent`,a.datepicker.calendarHeaderComponent)(`selected`,a._getSelected())(`dateClass`,a.datepicker.dateClass)(`comparisonStart`,a.comparisonStart)(`comparisonEnd`,a.comparisonEnd)(`startDateAccessibleName`,a.startDateAccessibleName)(`endDateAccessibleName`,a.endDateAccessibleName),gI(),Kp(`cdkPortalOutlet`,a._actionsPortal),gI(),hh(`cdk-visually-hidden`,!a._closeButtonFocused),Kp(`color`,a.color||`primary`),gI(),Dh(a._closeButtonText))},dependencies:[fr$1,Ha,hn,jt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return n})();var gi=(()=>{class n{_injector=T(ve);_viewContainerRef=T(Vi$1);_dateAdapter=T(p,{optional:!0});_dir=T(Rr$1,{optional:!0});_model=T(It);_animationsDisabled=fn();_scrollStrategy=T(Lr);_inputStateChanges=j$1.EMPTY;_document=T(pr$1);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new We;monthSelected=new We;viewChanged=new We(!0);dateClass;openedStream=new We;closedStream=new We;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ha$1(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=T(tt).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new z;_changeDetectorRef=T(q1);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof yt$1&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Ze(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe(no$1(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||i.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Lt(Mi,this._viewContainerRef),a=this._overlayRef=$t(this._injector,new $({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?Re$1(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close()}),a.keydownEvents().subscribe(i=>{let o=i.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&i.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||qv(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ne(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ut(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,a=t===`start`?`end`:`start`,i=this.yPosition===`above`?`bottom`:`top`,o=i===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=[`ctrlKey`,`shiftKey`,`metaKey`];return Fg(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(nn(a=>a.keyCode===27&&!kn(a)||this.datepickerInput&&kn(a,`altKey`)&&a.keyCode===38&&t.every(i=>!kn(a,i)))))}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,G1],disabled:[2,`disabled`,`disabled`,G1],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,G1],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,G1]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[cy]})}return n})();var wi=(()=>{class n extends gi{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵcmp=GE({type:n,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[Dw([bi,{provide:gi,useExisting:n}]),$p],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return n})();var ut=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}};var Br=(()=>{class n{_elementRef=T(Nr$1);_dateAdapter=T(p,{optional:!0});_dateFormats=T(_,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new We;dateInput=new We;stateChanges=new z;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=j$1.EMPTY;_localeSubscription=j$1.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new ut(this,this._elementRef.nativeElement)),this.dateChange.emit(new ut(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Yr(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){kn(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(i=>!kn(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let o=!this._dateAdapter.sameDate(i,this.value);!i||o?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(i),this.dateInput.emit(new ut(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new ut(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):``}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,G1]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[cy]})}return n})();function Yr(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(r.isDateInstance(a)&&r.isDateInstance(i)){if(!r.sameDate(a,i))return!0}else return!0}return!1}var Hr={provide:Y,useExisting:_o$1(()=>ua),multi:!0};var zr={provide:y,useExisting:_o$1(()=>ua),multi:!0};var ua=(()=>{class n extends Br{_formField=T(gt$1,{optional:!0});_closedSubscription=j$1.EMPTY;_openedSubscription=j$1.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=Qo$1(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=ue.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function(t,a){t&1&&oh(`input`,function(o){return a._onInput(o)})(`change`,function(){return a._onChange()})(`blur`,function(){return a._onBlur()})(`keydown`,function(o){return a._onKeydown(o)}),t&2&&(nh(`disabled`,a.disabled),Yp(`aria-haspopup`,a._datepicker?`dialog`:null)(`aria-owns`,a._ariaOwns())(`min`,a.min?a._dateAdapter.toIso8601(a.min):null)(`max`,a.max?a._dateAdapter.toIso8601(a.max):null)(`data-mat-calendar`,a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[Dw([Hr,zr,{provide:Y$1,useExisting:n}]),$p]})}return n})();var Gr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return n})();var Ka=(()=>{class n{_intl=T(mt);_changeDetectorRef=T(q1);_stateChanges=j$1.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=T(new Lh(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:es$1(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:es$1(),a=this.datepicker?Fg(this.datepicker.openedStream,this.datepicker.closedStream):es$1();this._stateChanges.unsubscribe(),this._stateChanges=Fg(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(t,a,i){if(t&1&&ah(i,Gr,5),t&2){let o;BD(o=$D())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&ch(Er,5),t&2){let i;BD(i=$D())&&(a._button=i.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(t,a){t&1&&oh(`click`,function(o){return a._open(o)}),t&2&&(Yp(`tabindex`,null)(`data-mat-calendar`,a.datepicker?a.datepicker.id:null),hh(`mat-datepicker-toggle-active`,a.datepicker&&a.datepicker.opened)(`mat-accent`,a.datepicker&&a.datepicker.color===`accent`)(`mat-warn`,a.datepicker&&a.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,G1],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[cy],ngContentSelectors:Tr,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(t,a){t&1&&(jD(Ir),_i$1(0,`button`,1,0),vD(2,Nr,2,0,`:svg:svg`,2),VD(3),Qc()),t&2&&(Kp(`tabIndex`,a.disabled?-1:a.tabIndex)(`disabled`,a.disabled)(`disableRipple`,a.disableRipple),Yp(`aria-haspopup`,a.datepicker?`dialog`:null)(`aria-label`,a.ariaLabel||a._intl.openCalendarLabel)(`aria-expanded`,a.datepicker?a.datepicker.opened:null),gI(2),ID(a._customIcon?-1:2))},dependencies:[bt$1],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return n})();var pa=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({providers:[mt],imports:[Tt,ri,_r$1,me$1,Mi,Ka,Si,Gn,It$1]})}return n})();function ht(n,r){let e=n.getTime();return{startMs:e,endMs:e+r*6e4}}function Be(n,r){return n===`away`?Math.max(0,r):0}function $r(n,r){let e=n.kind===r.kind,t=n.location===r.location;if(e&&t)return 0;if(!t){let a=Be(n.location,n.travelMinutes),i=Be(r.location,r.travelMinutes);return Math.max(a,i)*6e4}return n.location===`home`&&r.location===`home`?0:5*6e4}function ki(n,r){let e=n.kind===r.kind,t=n.location===r.location,a=Be(n.location,n.travelMinutes),i=Be(r.location,r.travelMinutes);if(e&&t||!t)return Math.max(a,i);if(n.location===`home`&&r.location===`home`)return 0;let o=a+i;return Math.min(Math.max(5,o),o||5)}function Wr(n,r){return n.startMs<r.endMs&&n.endMs>r.startMs}function xi(n,r){for(let e of r){if(e.id===n.id)continue;if(Wr(n,e))return!0;let t=n.endMs<=e.startMs?n:e.endMs<=n.startMs?e:null,a=t===n?e:t===e?n:null;if(!t||!a){if(n.startMs<e.endMs&&n.endMs>e.startMs)return!0;continue}if(a.startMs-t.endMs<$r(t,a))return!0}return!1}function Ai(n){let r=n.filter(i=>i.kind===`work`).slice().sort((i,o)=>i.startMs-o.startMs),e=n.filter(i=>i.kind!==`work`);if(r.length===0)return n;let t=[],a=W({},r[0]);for(let i=1;i<r.length;i++){let o=r[i];o.location===a.location&&o.startMs===a.endMs?a=G(W({},a),{endMs:o.endMs,travelMinutes:Math.max(a.travelMinutes,o.travelMinutes),id:`${a.id}+${o.id}`}):(t.push(a),a=W({},o))}return t.push(a),[...e,...t]}function ma(n,r,e,t,a,i,o){return G(W({},ht(e,t)),{id:n,kind:r,location:a,travelMinutes:i,label:o})}function Ur(n){return n.id==null||n.kind==null||n.location==null?null:{id:n.id,kind:n.kind,startMs:n.startMs,endMs:n.endMs,location:n.location,travelMinutes:n.travelMinutes??0}}function _l(n,r,e,t,a=[]){let i=new Date(n);i.setHours(0,0,0,0);let o=new Date(i);o.setDate(o.getDate()+1);let u=i.getTime(),g=o.getTime(),v=[];for(let m of r){if(m.type===`cancelled`||m.type===`missed`||m.id===t)continue;let C=ht(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=g||v.push(G(W({},C),{id:m.id,kind:`lesson`,location:m.location,travelMinutes:m.travel_minutes,label:m.student_name}))}for(let m of e){if(m.id===t)continue;let C=ht(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=g||v.push(G(W({},C),{id:m.id,kind:`event`,location:m.location,travelMinutes:m.travel_minutes,label:m.title}))}for(let m of a){if(m.id===t)continue;let C=ht(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=g||v.push(G(W({},C),{id:m.id,kind:`work`,location:m.location,travelMinutes:m.travel_minutes,label:m.title}))}return v}function Ei(n){return n.getHours()*60+n.getMinutes()}function $a(n){let{startMs:r,endMs:e}=ht(n.start,n.durationMinutes);if(n.workStartMin!=null&&n.workEndMin!=null){let o=Ei(new Date(r)),u=Ei(new Date(e));if(new Date(e).getDate()!==new Date(r).getDate()||o<n.workStartMin||u>n.workEndMin)return!1}return!xi({id:n.excludeId??`__candidate__`,kind:n.kind??`lesson`,startMs:r,endMs:e,location:n.location,travelMinutes:n.travelMinutes},Ai(n.ranges.filter(o=>o.id!==n.excludeId).map(Ur).filter(o=>o!=null)))}function Nt(n,r,e,t,a,i=0,o=i>0?`away`:`home`,u,g,v=`lesson`,m){let f=new Date(r);return f.setHours(Number(e),Number(t),0,0),!$a({start:f,durationMinutes:a,location:o,travelMinutes:i,ranges:n,workStartMin:u,workEndMin:g,kind:v,excludeId:m})}function jr(n,r,e,t,a,i,o,u,g,v=`lesson`,m){return!Nt(o,n,r,e,t,i,a,u,g,v,m)}function Ii(n,r,e,t,a,i,o,u,g=bt,v=`lesson`,m){return g.every(f=>Nt(i,n,r,f,e,a,t,o,u,v,m))}function Ti(n,r,e,t,a,i,o,u,g=bt,v=`lesson`,m){return g.find(f=>!Nt(i,n,r,f,e,a,t,o,u,v,m))??null}function fl(n,r,e,t,a,i,o,u,g=`lesson`,v){let[m=`00`,f=`00`]=r.split(`:`),C=m.padStart(2,`0`),D=Number(f)||0;return bt.filter(ke=>{let xe=Number(ke);return xe>=D&&xe<D+30}).some(ke=>jr(n,C,ke,e,t,a,i,o,u,g,v))}function Ni(n){return new Date(n.scheduled_at).getTime()+n.duration_minutes*6e4}function ha(n){return new Date(n.scheduled_at).getTime()}function Vi(n){let r=[...n].sort((t,a)=>ha(t)-ha(a)),e=[];for(let t=0;t<r.length-1;t++){let a=r[t],i=r[t+1];if(a.location!==i.location)continue;let o=ha(i)-Ni(a);if(o<0)continue;o/6e4>Be(a.location,a.travel_minutes)+Be(i.location,i.travel_minutes)||e.push({earlier:a,later:i})}return e}function Oi(n){let r=Vi(n),e=new Set(r.map(a=>a.earlier.id)),t=new Set(r.map(a=>a.later.id));return new Map(n.map(a=>{let o=a.location===`away`?a.travel_minutes:0;return[a.id,{beforeMinutes:t.has(a.id)?0:o,afterMinutes:e.has(a.id)?0:o}]}))}function Fi(n){return Vi(n).map(({earlier:r,later:e})=>{let t=new Date(r.scheduled_at);t.setMinutes(t.getMinutes()+r.duration_minutes);let a=Math.max(0,(ha(e)-Ni(r))/6e4);return{id:`stitch-${r.id}-${e.id}`,junctionMinutes:t.getHours()*60+t.getMinutes(),gapMinutes:a,color:r.color,fromColor:r.color,toColor:e.color,fromId:r.id,toId:e.id}})}var ie=32;var fe=30;var Qr=32/2;var Ri=1.4;var Pi=.2;function Wa(n){return Math.round(n*1e3)/1e3}function wl(n,r){if(n<=0)return 1;let e=Math.max(1,r),t=n-2*16;return t<=0?1:t/(32*e)}function qr(n){return Math.min(1,n)}function Xr(n){let r=qr(n),e=new Set;e.add(Wa(r));for(let t=Pi;t<=Ri+1e-9;t+=Pi){let a=Wa(t);a>r+1e-9&&a<=1.4+1e-9&&e.add(a)}return[...e].sort((t,a)=>t-a)}function kl(n,r,e){let t=Xr(e),a=Wa(n);if(r<0){let o=t.filter(u=>u<a-1e-9);return o.length?o[o.length-1]:t[0]}let i=t.filter(o=>o>a+1e-9);return i.length?i[0]:t[t.length-1]}var Zr=14;function xl(n,r){return Zr}function Jr(n){return/:00$/.test(n)}function Al(n){return Jr(n)?n:``}function El(n){return n%60!==0?null:`${String(Math.floor(n/60)).padStart(2,`0`)}:00`}function Il(n){let r=[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],e=j(new Date);return r.map((t,a)=>{let i=new Date(n);return i.setDate(i.getDate()+a),i.setHours(0,0,0,0),{date:i,label:`${t} ${i.getDate()}.${String(i.getMonth()+1).padStart(2,`0`)}`,isToday:j(i)===e}})}function eo(n,r){let e=[];for(let t=n;t<r;t+=fe)e.push(`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`);return e}function Yi(n,r){let e=Ot(n??void 0,480),t=Ot(r??void 0,1320),a=new Set;for(let i of eo(e,t))a.add(i.slice(0,2));return[...a].sort()}function Ot(n,r){let e=n?.match(/^(\d{1,2}):(\d{2})/);return e?Number(e[1])*60+Number(e[2]):r}function Tl(n,r,e,t,a){let i=j(r),o=Hi(a);return n.filter(u=>j(new Date(u.scheduled_at))===i).map(u=>{let g=new Date(u.scheduled_at),v=(g.getHours()*60+g.getMinutes()-e)/fe*32*t,m=o.get(u.id)??{beforeMinutes:0,afterMinutes:0},f=32*t/fe;return{item:u,top:v,height:Math.max(u.duration_minutes/fe*32*t,32*t),travelBefore:m.beforeMinutes*f,travelAfter:m.afterMinutes*f}}).filter(u=>u.top+u.height>0)}function Vt(n){let r=new Date(n.scheduled_at).getTime();return{start:r,end:r+n.duration_minutes*6e4}}function to(n){if(`student_id`in n&&n.student_id)return`lesson`;let r=n.source;return r===`work`||r===`work_schedule`?`work`:`event`}function Li(n){let{start:r,end:e}=Vt(n);return{id:n.id,kind:to(n),startMs:r,endMs:e,location:n.location,travelMinutes:n.travel_minutes}}function Hi(n){let r=[...n].sort((t,a)=>Vt(t).start-Vt(a).start),e=new Map(r.map(t=>[t.id,{beforeMinutes:0,afterMinutes:0}]));for(let t=0;t<r.length;t++){let a=r[t],i=a.location===`away`?Math.max(0,a.travel_minutes):0,o=e.get(a.id);!r[t-1]&&i&&(o.beforeMinutes=i),!r[t+1]&&i&&(o.afterMinutes=i)}for(let t=0;t<r.length-1;t++){let a=r[t],i=r[t+1],o=Math.max(0,(Vt(i).start-Vt(a).end)/6e4),u=Math.min(o,ki(Li(a),Li(i)));if(u<=0)continue;let g=a.location===`away`,v=i.location===`away`;g&&!v?e.get(a.id).afterMinutes=u:!g&&v?e.get(i.id).beforeMinutes=u:g&&v&&(e.get(a.id).afterMinutes=u)}return e}function Nl(n,r,e,t,a=n){let i=j(r),o=n.filter(f=>j(new Date(f.scheduled_at))===i),g=Hi(a.filter(f=>j(new Date(f.scheduled_at))===i)),v=Oi(o);for(let[f,C]of v){let D=g.get(f);D&&g.set(f,{beforeMinutes:C.beforeMinutes===0?0:D.beforeMinutes,afterMinutes:C.afterMinutes===0?0:D.afterMinutes})}let m=32*t/fe;return o.map(f=>{let C=new Date(f.scheduled_at),D=(C.getHours()*60+C.getMinutes()-e)/fe*32*t,z=g.get(f.id)??{beforeMinutes:0,afterMinutes:0};return{item:f,top:D,height:Math.max(f.duration_minutes/fe*32*t,32*t),travelBefore:z.beforeMinutes*m,travelAfter:z.afterMinutes*m}}).filter(f=>f.top+f.height>0)}function Vl(n,r,e,t,a){let i=j(r),o=n.filter(v=>j(new Date(v.scheduled_at))===i),u=32*t/fe,g=Math.max(6,u*2);return Fi(o).map(v=>{let m=v.gapMinutes,f=m>0?m*u:g,C=(v.junctionMinutes-e)/fe*32*t+a,D=m>0?C:C-f/2,z=Bi(v.fromColor),ke=Bi(v.toColor),xe=v.fromColor.toLowerCase()===v.toColor.toLowerCase()?z:`linear-gradient(to bottom, ${z}, ${ke})`;return{id:v.id,top:D,height:f,color:v.fromColor,fill:xe}})}function Bi(n){return`color-mix(in srgb, ${n} 75%, transparent)`}function Ol(n,r,e,t=[]){let a=new Date(n.getFullYear(),n.getMonth(),1),i=(a.getDay()+6)%7,o=new Date(a);o.setDate(o.getDate()-i);let u=new Date(n.getFullYear(),n.getMonth()+1,0),g=new Date(u);g.setDate(g.getDate()+(6-(g.getDay()+6)%7));let v=[];for(let m=new Date(o);m<=g;m.setDate(m.getDate()+1)){let f=new Date(m);f.setHours(0,0,0,0);let C=j(f);v.push({date:f,isCurrentMonth:f.getMonth()===n.getMonth(),isToday:C===j(new Date),lessons:r.filter(D=>j(new Date(D.scheduled_at))===C),events:e.filter(D=>j(new Date(D.scheduled_at))===C),workLessons:t.filter(D=>j(new Date(D.scheduled_at))===C)})}return v}function j(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`}var zi=Lr$1(`personalEvents`);var Gi=Mi$1(zi,n=>n.weekEvents);var Pl=Mi$1(zi,n=>n.monthEvents);var ao=[`*`];function no(n,r){n&1&&VD(0)}var Ua=(()=>{class n{_elementRef=T(Nr$1);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return n})();var ja=(()=>{class n{template=T(Cr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepLabel`,``]]})}return n})();var Ye={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var io=new A(`STEPPER_GLOBAL_OPTIONS`);var _a=(()=>{class n{_stepperOptions;_stepper=T(_t);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Qo$1(!1);interactedStream=new We;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Qo$1(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Qo$1(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||ro(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Qo$1(null);index=Qo$1(-1);isSelected=Fw(()=>this._stepper.selectedIndex===this.index());indicatorType=Fw(()=>{let e=this.isSelected(),t=this.completed,a=this._state()??Ye.NUMBER,i=this._editable();return this._showError()&&this.hasError&&!e?Ye.ERROR:this._displayDefaultIndicatorType?!t||e?Ye.NUMBER:i?Ye.EDIT:Ye.DONE:t&&!e?Ye.DONE:t&&e?a:i&&e?Ye.EDIT:a});isNavigable=Fw(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Qo$1(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Ki(this.stepControl)}constructor(){let e=T(io,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),so(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`cdk-step`]],contentQueries:function(t,a,i){if(t&1&&ah(i,ja,5)(i,c,5),t&2){let o;BD(o=$D())&&(a.stepLabel=o.first),BD(o=$D())&&(a._childForms=o)}},viewQuery:function(t,a){if(t&1&&ch(Cr$1,7),t&2){let i;BD(i=$D())&&(a.content=i.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,G1],optional:[2,`optional`,`optional`,G1],completed:[2,`completed`,`completed`,G1],hasError:[2,`hasError`,`hasError`,G1]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[cy],ngContentSelectors:ao,decls:1,vars:0,template:function(t,a){t&1&&(jD(),Wp(0,no,1,0,`ng-template`))},encapsulation:2})}return n})();var _t=(()=>{class n{_dir=T(Rr$1,{optional:!0});_changeDetectorRef=T(q1);_elementRef=T(Nr$1);_destroyed=new z;_keyManager;_steps;steps=new pi$1;_stepHeader;_sortedHeaders=new pi$1;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Qo$1(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Qo$1(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new We;selectedIndexChange=new We;_groupId=T(tt).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(em(this._steps),tm(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,a)=>t.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(em(this._stepHeader),tm(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,a)=>t._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new et(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:es$1()).pipe(em(this._layoutDirection()),tm(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()===`rtl`?`next`:`previous`:t>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:t[e],previouslySelectedStep:t[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=kn(e),a=e.keyCode,i=this._keyManager;i?.activeItemIndex!=null&&!t&&(a===32||a===13)?(this.selectedIndex=i.activeItemIndex,e.preventDefault()):i?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let a=t.stepControl;return(a?Ki(a)||oo(a)||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,t=Ze();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepper`,``]],contentQueries:function(t,a,i){if(t&1&&ah(i,_a,5)(i,Ua,5),t&2){let o;BD(o=$D())&&(a._steps=o),BD(o=$D())&&(a._stepHeader=o)}},inputs:{linear:[2,`linear`,`linear`,G1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,z1],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return n})();function fa(n){return typeof n==`function`}function ro(n){return fa(n)?n().valid():n.valid}function Ki(n){return fa(n)?n().invalid():n.invalid}function oo(n){return fa(n)?n().pending():n.pending}function so(n){fa(n)?n().reset():n.reset()}var $i=(()=>{class n{_stepper=T(_t);type=`submit`;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(t,a){t&1&&oh(`click`,function(){return a._stepper.next()}),t&2&&nh(`type`,a.type)},inputs:{type:`type`}})}return n})();var Wi=(()=>{class n{_stepper=T(_t);type=`button`;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`button`,`cdkStepperPrevious`,``]],hostVars:1,hostBindings:function(t,a){t&1&&oh(`click`,function(){return a._stepper.previous()}),t&2&&nh(`type`,a.type)},inputs:{type:`type`}})}return n})();var Ui=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({imports:[Gn]})}return n})();var lo=(n,r,e)=>({index:n,active:r,optional:e});function co(n,r){if(n&1&&th(0,2),n&2){let e=PD();Kp(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,Tw(2,lo,e.index,e.active,e.optional))}}function uo(n,r){if(n&1&&(_i$1(0,`span`,7),fw(1),Qc()),n&2){let e=PD(2);gI(),Dh(e._getDefaultTextForState(e.state))}}function po(n,r){if(n&1&&(_i$1(0,`span`,8),fw(1),Qc()),n&2){let e=PD(3);gI(),Dh(e._intl.completedLabel)}}function mo(n,r){if(n&1&&(_i$1(0,`span`,8),fw(1),Qc()),n&2){let e=PD(3);gI(),Dh(e._intl.editableLabel)}}function ho(n,r){if(n&1&&(vD(0,po,2,1,`span`,8)(1,mo,2,1,`span`,8),_i$1(2,`mat-icon`,7),fw(3),Qc()),n&2){let e=PD(2);ID(e.state===`done`?0:e.state===`edit`?1:-1),gI(3),Dh(e._getDefaultTextForState(e.state))}}function _o(n,r){if(n&1&&vD(0,uo,2,1,`span`,7)(1,ho,4,2),n&2)ID(PD().state===`number`?0:1)}function fo(n,r){n&1&&(_i$1(0,`div`,4),th(1,9),Qc()),n&2&&(gI(),Kp(`ngTemplateOutlet`,r.template))}function go(n,r){if(n&1&&(_i$1(0,`div`,4),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e.label)}}function vo(n,r){if(n&1&&(_i$1(0,`div`,5),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e._intl.optionalLabel)}}function bo(n,r){if(n&1&&(_i$1(0,`div`,6),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e.errorMessage)}}var ji=[`*`];function yo(n,r){}function Do(n,r){if(n&1&&(VD(0),qp(1,yo,0,0,`ng-template`,0)),n&2){let e=PD();gI(),Kp(`cdkPortalOutlet`,e._portal)}}var Co=[`animatedContainer`];var Qi=n=>({steps:n});var qi=n=>({step:n});function So(n,r){n&1&&VD(0)}function Mo(n,r){if(n&1&&(_i$1(0,`div`,5),th(1,9)(2,6),Qc()),n&2){let e=PD(2),t=qD(6);gI(),Kp(`ngTemplateOutlet`,e.headerPrefix()),gI(),Kp(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,Cw(3,Qi,e.steps))}}function wo(n,r){if(n&1&&th(0,6),n&2){let e=PD(2);Kp(`ngTemplateOutlet`,qD(6))(`ngTemplateOutletContext`,Cw(2,Qi,e.steps))}}function ko(n,r){if(n&1&&(_i$1(0,`div`,10,2),th(2,9),Qc()),n&2){let e=r.$implicit,t=r.$index,a=PD(2);tw(`mat-horizontal-stepper-content-`+a._getAnimationDirection(t)),Kp(`id`,a._getStepContentId(t)),Yp(`aria-labelledby`,a._getStepLabelId(t))(`inert`,a.selectedIndex===t?null:``),gI(2),Kp(`ngTemplateOutlet`,e.content)}}function xo(n,r){if(n&1&&(_i$1(0,`div`,3),vD(1,Mo,3,5,`div`,5)(2,wo,1,4,`ng-container`,6),_i$1(3,`div`,7),wD(4,ko,3,6,`div`,8,DD),Qc()()),n&2){let e=PD();gI(),ID(e.headerPrefix()?1:2),gI(3),CD(e.steps)}}function Ao(n,r){if(n&1&&th(0,9),n&2)Kp(`ngTemplateOutlet`,PD(2).headerPrefix())}function Eo(n,r){if(n&1&&(_i$1(0,`div`,11),th(1,6),_i$1(2,`div`,12,2)(4,`div`,13)(5,`div`,14),th(6,9),Qc()()()()),n&2){let e=r.$implicit,t=r.$index,a=r.$index,i=r.$count,o=PD(2),u=qD(4);gI(),Kp(`ngTemplateOutlet`,u)(`ngTemplateOutletContext`,Cw(11,qi,e)),gI(),hh(`mat-stepper-vertical-line`,a!==i-1)(`mat-vertical-content-container-active`,o.selectedIndex===t),Yp(`inert`,o.selectedIndex===t?null:``)(`aria-label`,o.ariaLabel),gI(2),Kp(`id`,o._getStepContentId(t)),Yp(`aria-labelledby`,o._getStepLabelId(t)),gI(2),Kp(`ngTemplateOutlet`,e.content)}}function Io(n,r){if(n&1&&(_i$1(0,`div`,4),vD(1,Ao,1,1,`ng-container`,9),wD(2,Eo,7,13,`div`,11,DD),Qc()),n&2){let e=PD();gI(),ID(e.headerPrefix()?1:-1),gI(),CD(e.steps)}}function To(n,r){if(n&1){let e=ND();_i$1(0,`mat-step-header`,15),oh(`click`,function(){let a=Fu(e).step;return ju(a.select())})(`keydown`,function(a){Fu(e);return ju(PD()._onKeydown(a))}),Qc()}if(n&2){let e=r.step,t=PD();hh(`mat-horizontal-stepper-header`,t.orientation===`horizontal`)(`mat-vertical-stepper-header`,t.orientation===`vertical`),Kp(`tabIndex`,t._getFocusIndex()===e.index()?0:-1)(`id`,t._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,t._iconOverrides)(`disableRipple`,t.disableRipple||!e.isNavigable())(`color`,e.color||t.color),Yp(`role`,t.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,t.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,t.orientation===`horizontal`?t.steps.length:null)(`aria-selected`,t.orientation===`horizontal`?e.isSelected():null)(`aria-current`,t.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,t.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,t.orientation===`vertical`?e.isSelected():null)(`aria-controls`,t._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function No(n,r){n&1&&Jp(0,`div`,17)}function Vo(n,r){if(n&1&&(th(0,6),vD(1,No,1,0,`div`,17)),n&2){let e=r.$implicit,t=r.$index,a=r.$count;PD(2);Kp(`ngTemplateOutlet`,qD(4))(`ngTemplateOutletContext`,Cw(3,qi,e)),gI(),ID(t!==a-1?1:-1)}}function Oo(n,r){if(n&1&&(_i$1(0,`div`,16),wD(1,Vo,2,5,null,null,DD),Qc()),n&2){let e=r.steps;Yp(`aria-label`,PD().ariaLabel),gI(),CD(e)}}var Qa=(()=>{class n extends ja{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[``,`matStepLabel`,``]],features:[$p]})}return n})();var Fo=(()=>{class n{changes=new z;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(t){return new(t||n)};static ɵprov=Sr$1({token:n,factory:n.ɵfac})}return n})();var qa=(()=>{class n extends Ua{_intl=T(Fo);_focusMonitor=T(In);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=T(k);e.load(Da),e.load(be);let t=T(q1);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Qa?null:this.label}_templateLabel(){return this.label instanceof Qa?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(t,a){t&2&&(tw(`mat-`+(a.color||`primary`)),hh(`mat-step-header-empty-label`,a._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[$p],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(t,a){if(t&1&&(Jp(0,`div`,0),_i$1(1,`div`)(2,`div`,1),vD(3,co,1,6,`ng-container`,2)(4,_o,2,1),Qc()(),_i$1(5,`div`,3),vD(6,fo,2,1,`div`,4)(7,go,2,1,`div`,4),vD(8,vo,2,1,`div`,5),vD(9,bo,2,1,`div`,6),Qc()),t&2){let i;Kp(`matRippleTrigger`,a._getHostElement())(`matRippleDisabled`,a.disableRipple),gI(),tw(yw(`mat-step-icon-state-`,a.state,` mat-step-icon`)),hh(`mat-step-icon-selected`,a.selected),gI(2),ID(a.iconOverrides&&a.iconOverrides[a.state]?3:4),gI(2),hh(`mat-step-label-active`,a.active)(`mat-step-label-selected`,a.selected)(`mat-step-label-error`,a.state==`error`),gI(),ID((i=a._templateLabel())?6:a._stringLabel()?7:-1,i),gI(2),ID(a._hasOptionalLabel()?8:-1),gI(),ID(a._hasErrorLabel()?9:-1)}},dependencies:[Ma,Mn,wt],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return n})();var Ro=(()=>{class n{templateRef=T(Cr$1);name;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return n})();var Po=(()=>{class n{_template=T(Cr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`ng-template`,`matStepContent`,``]]})}return n})();var Xa=(()=>{class n extends _a{_errorStateMatcher=T(Lt$1,{skipSelf:!0});_viewContainerRef=T(Vi$1);_isSelected=j$1.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ol$1(()=>this._stepper.selectionChange.pipe(le(e=>e.selectedStep===this),em(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new L(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let a=this._errorStateMatcher.isErrorState(e,t),i=!!(e&&e.invalid&&this.interacted);return a||i}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??!1,a=!!(e&&e().invalid()&&this.interacted);return t||a}static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵcmp=GE({type:n,selectors:[[`mat-step`]],contentQueries:function(t,a,i){if(t&1&&ah(i,Qa,5)(i,Po,5),t&2){let o;BD(o=$D())&&(a.stepLabel=o.first),BD(o=$D())&&(a._lazyContent=o.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[Dw([{provide:Lt$1,useExisting:n},{provide:_a,useExisting:n}]),$p],ngContentSelectors:ji,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(t,a){t&1&&(jD(),qp(0,Do,2,1,`ng-template`))},dependencies:[hn],encapsulation:2})}return n})();var Za=(()=>{class n extends _t{_ngZone=T(Re);_renderer=T(Ya$1);_animationsDisabled=fn();_cleanupTransition;_isAnimating=Qo$1(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new pi$1;_icons;animationDone=new We;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=H1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!T(v).isBrowser;constructor(){super();let t=T(Nr$1).nativeElement.nodeName.toLowerCase();this.orientation=t===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(tm(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(tm(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(em(null),tm(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let t=e.target;if(!t)return;let a=this.orientation===`horizontal`&&e.propertyName===`transform`&&t.classList.contains(`mat-horizontal-stepper-content-current`),i=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&t.classList.contains(`mat-vertical-content-container-active`);(a||i)&&this._animatedContainers.find(u=>u.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(t,a,i){if(t&1&&ah(i,Xa,5)(i,Ro,5),t&2){let o;BD(o=$D())&&(a._steps=o),BD(o=$D())&&(a._icons=o)}},viewQuery:function(t,a){if(t&1&&ch(qa,5)(Co,5),t&2){let i;BD(i=$D())&&(a._stepHeader=i),BD(i=$D())&&(a._animatedContainers=i)}},hostVars:14,hostBindings:function(t,a){t&2&&(ph(`--%NS%mat-stepper-animation-duration`,a._getAnimationDuration()),hh(`mat-stepper-horizontal`,a.orientation===`horizontal`)(`mat-stepper-vertical`,a.orientation===`vertical`)(`mat-stepper-label-position-end`,a.orientation===`horizontal`&&a.labelPosition==`end`)(`mat-stepper-label-position-bottom`,a.orientation===`horizontal`&&a.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,a.headerPosition===`bottom`)(`mat-stepper-animating`,a._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[Dw([{provide:_t,useExisting:n}]),$p],ngContentSelectors:ji,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(t,a){if(t&1&&(jD(),vD(0,So,1,0),vD(1,xo,6,1,`div`,3)(2,Io,4,1,`div`,4),qp(3,To,1,27,`ng-template`,null,0,kw)(5,Oo,3,1,`ng-template`,null,1,kw)),t&2){let i;ID(a._isServer?0:-1),gI(),ID((i=a.orientation)===`horizontal`?1:i===`vertical`?2:-1)}},dependencies:[Mn,qa],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return n})();var Xi=(()=>{class n extends $i{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(t,a){t&2&&nh(`type`,a.type)},features:[$p]})}return n})();var Zi=(()=>{class n extends Wi{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[`button`,`matStepperPrevious`,``]],hostAttrs:[1,`mat-stepper-previous`],hostVars:1,hostBindings:function(t,a){t&2&&nh(`type`,a.type)},features:[$p]})}return n})();var Ji=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({providers:[Lt$1],imports:[me$1,Ui,yt$2,ja$1,Za,qa,Gn]})}return n})();function Bo(n,r){if(n&1&&(_i$1(0,`mat-option`,3),fw(1),Qc()),n&2){let e=r.$implicit,t=PD();Kp(`value`,e)(`disabled`,t.hourDisabled(e)),gI(),Dh(e)}}function Yo(n,r){if(n&1&&(_i$1(0,`mat-option`,3),fw(1),Qc()),n&2){let e=r.$implicit,t=PD();Kp(`value`,e)(`disabled`,t.minuteDisabled(e)),gI(),wh(` `,e,``,t.minuteDisabled(e)?` · занято`:``,` `)}}var ga=class n{value=H1(`12:00`);hourOptions=H1(null);occupiedRanges=H1([]);durationMinutes=H1(60);location=H1(`home`);travelMinutes=H1(0);workStartMin=H1(void 0);workEndMin=H1(void 0);blockKind=H1(`lesson`);referenceDate=H1(null);valueChange=V1();minutes=bt;hourCtrl=new G$2(`12`,{nonNullable:!0});minuteCtrl=new G$2(`00`,{nonNullable:!0});gateTick=Qo$1(0);displayHours=Fw(()=>{let r=this.hourOptions(),e=r?.length?[...r]:[...yt],t=this.hourCtrl.value;return t&&!e.includes(t)&&e.unshift(t),e});syncing=!1;constructor(){sd(()=>{let{hour:r,minute:e}=_t$1(this.value());this.syncing=!0,this.hourCtrl.setValue(r,{emitEvent:!1}),this.minuteCtrl.setValue(st(Number(e)||0),{emitEvent:!1}),this.syncing=!1,this.clearIfIllegal()}),sd(()=>{this.occupiedRanges(),this.durationMinutes(),this.location(),this.travelMinutes(),this.gateTick.update(r=>r+1),this.clearIfIllegal()}),this.hourCtrl.valueChanges.subscribe(r=>{this.syncing||(this.snapMinutesForHour(r),this.emit())}),this.minuteCtrl.valueChanges.subscribe(()=>this.emit())}hourDisabled(r){return this.gateTick(),Ii(this.refDate(),r,this.durationMinutes(),this.location(),this.travelMinutes(),this.occupiedRanges(),this.workStartMin(),this.workEndMin(),bt,this.blockKind())}minuteDisabled(r){return this.gateTick(),Nt(this.occupiedRanges(),this.refDate(),this.hourCtrl.value,r,this.durationMinutes(),this.travelMinutes(),this.location(),this.workStartMin(),this.workEndMin(),this.blockKind())}refDate(){return this.referenceDate()??new Date}snapMinutesForHour(r){if(!this.minuteDisabled(this.minuteCtrl.value))return;let e=this.earliestMinute(r);e==null||e===this.minuteCtrl.value||(this.syncing=!0,this.minuteCtrl.setValue(e,{emitEvent:!1}),this.syncing=!1)}earliestMinute(r){return Ti(this.refDate(),r,this.durationMinutes(),this.location(),this.travelMinutes(),this.occupiedRanges(),this.workStartMin(),this.workEndMin(),bt,this.blockKind())}clearIfIllegal(){if(this.syncing)return;let r=!this.hourDisabled(this.hourCtrl.value),e=!this.minuteDisabled(this.minuteCtrl.value);if(r&&e)return;let t=r?this.hourCtrl.value:this.displayHours().find(i=>!this.hourDisabled(i))??this.hourCtrl.value,a=this.earliestMinute(t)??this.minuteCtrl.value;this.syncing=!0,this.hourCtrl.setValue(t,{emitEvent:!1}),this.minuteCtrl.setValue(a,{emitEvent:!1}),this.syncing=!1,this.emit()}emit(){this.syncing||this.valueChange.emit(`${this.hourCtrl.value}:${this.minuteCtrl.value}`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-time-fields`]],inputs:{value:[1,`value`],hourOptions:[1,`hourOptions`],occupiedRanges:[1,`occupiedRanges`],durationMinutes:[1,`durationMinutes`],location:[1,`location`],travelMinutes:[1,`travelMinutes`],workStartMin:[1,`workStartMin`],workEndMin:[1,`workEndMin`],blockKind:[1,`blockKind`],referenceDate:[1,`referenceDate`]},outputs:{valueChange:`valueChange`},decls:13,vars:2,consts:[[1,`fields`],[`appearance`,`outline`],[3,`formControl`],[3,`value`,`disabled`]],template:function(e,t){e&1&&(_i$1(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-label`),fw(3,`Часы`),Qc(),_i$1(4,`mat-select`,2),wD(5,Bo,2,3,`mat-option`,3,DD),Qc(),nE(),Qc(),_i$1(7,`mat-form-field`,1)(8,`mat-label`),fw(9,`Минуты`),Qc(),_i$1(10,`mat-select`,2),wD(11,Yo,2,4,`mat-option`,3,DD),Qc(),nE(),Qc()()),e&2&&(gI(4),Kp(`formControl`,t.hourCtrl),oE(),gI(),CD(t.displayHours()),gI(5),Kp(`formControl`,t.minuteCtrl),oE(),gI(),CD(t.minutes))},dependencies:[In$1,En,Jt,Kt,Pe,$$1,Lt$2,Nt$1,ge],styles:[`.fields[_ngcontent-%COMP%]{display:flex;gap:8px}mat-form-field[_ngcontent-%COMP%]{flex:1 1 96px;min-width:96px}`]})};var Ko=(n,r)=>r.value;function $o(n,r){if(n&1&&(_i$1(0,`mat-option`,9),fw(1),Qc()),n&2){let e=r.$implicit;Kp(`value`,e.value),gI(),Dh(e.label)}}function Wo(n,r){n&1&&(_i$1(0,`mat-form-field`,17)(1,`mat-label`),fw(2,`Дорога, мин`),Qc(),Jp(3,`input`,18),nE(),Qc()),n&2&&(gI(3),oE())}function Uo(n,r){if(n&1&&(_i$1(0,`mat-form-field`,13)(1,`mat-label`),fw(2,`Место`),Qc(),_i$1(3,`mat-select`,14)(4,`mat-option`,15),fw(5,`Дома`),Qc(),_i$1(6,`mat-option`,16),fw(7,`Вне дома`),Qc()(),nE(),Qc(),vD(8,Wo,4,0,`mat-form-field`,17)),n&2){let e=PD().$implicit;gI(3),oE(),gI(5),ID(e.get(`location`)?.value===`away`?8:-1)}}function jo(n,r){if(n&1&&(_i$1(0,`mat-form-field`,24)(1,`mat-label`),fw(2,`Дата начала`),Qc(),Jp(3,`input`,27),nE(),Jp(4,`mat-datepicker-toggle`,28)(5,`mat-datepicker`,null,0),Qc()),n&2){let e=qD(6);gI(3),Kp(`matDatepicker`,e),oE(),gI(),Kp(`for`,e)}}function Qo(n,r){if(n&1&&(_i$1(0,`mat-form-field`,24)(1,`mat-label`),fw(2,`Дата окончания`),Qc(),Jp(3,`input`,29),nE(),Jp(4,`mat-datepicker-toggle`,28)(5,`mat-datepicker`,null,1),Qc()),n&2){let e=qD(6);gI(3),Kp(`matDatepicker`,e),oE(),gI(),Kp(`for`,e)}}function qo(n,r){if(n&1&&(_i$1(0,`div`,12)(1,`div`,19)(2,`span`,20),fw(3,`Начало действия`),Qc(),_i$1(4,`mat-button-toggle-group`,21)(5,`mat-button-toggle`,22),fw(6,`С сегодня`),Qc(),_i$1(7,`mat-button-toggle`,23),fw(8,`Выбрать дату`),Qc()(),nE(),vD(9,jo,7,2,`mat-form-field`,24),Qc(),_i$1(10,`div`,19)(11,`span`,20),fw(12,`Окончание действия`),Qc(),_i$1(13,`mat-button-toggle-group`,25)(14,`mat-button-toggle`,26),fw(15,`Бессрочно`),Qc(),_i$1(16,`mat-button-toggle`,23),fw(17,`Выбрать дату`),Qc()(),nE(),vD(18,Qo,7,2,`mat-form-field`,24),Qc()()),n&2){let e=PD().$implicit;gI(4),oE(),gI(5),ID(e.get(`activeFromMode`)?.value===`date`?9:-1),gI(4),oE(),gI(5),ID(e.get(`activeUntilMode`)?.value===`date`?18:-1)}}function Xo(n,r){if(n&1){let e=ND();_i$1(0,`div`,4)(1,`div`,6)(2,`mat-form-field`,7)(3,`mat-label`),fw(4,`День`),Qc(),_i$1(5,`mat-select`,8),wD(6,$o,2,2,`mat-option`,9,Ko),Qc(),nE(),Qc(),_i$1(8,`app-time-fields`,10),oh(`valueChange`,function(a){let i=Fu(e).$implicit;return ju(i.get(`start_time`)?.setValue(a))}),Qc(),vD(9,Uo,9,1),_i$1(10,`button`,11),oh(`click`,function(){let a=Fu(e).$index;return ju(PD().removeSlot.emit(a))}),_i$1(11,`mat-icon`),fw(12,`delete`),Qc()()(),vD(13,qo,19,2,`div`,12),Qc()}if(n&2){let e=r.$implicit,t=r.$index,a=PD();Kp(`formGroupName`,t),gI(5),oE(),gI(),CD(a.weekdays),gI(2),Kp(`value`,e.get(`start_time`)?.value)(`hourOptions`,a.hourOptions())(`occupiedRanges`,a.rangesForSlot(t))(`durationMinutes`,a.durationMinutes())(`location`,a.slotLocation(t))(`travelMinutes`,a.slotTravel(t))(`workStartMin`,a.workStartMin())(`workEndMin`,a.workEndMin())(`blockKind`,a.blockKind())(`referenceDate`,a.referenceDateForSlot(t)),gI(),ID(a.withLocation()?9:-1),gI(),Kp(`disabled`,a.slotsArray.length<=1),gI(3),ID(a.withActiveDates()?13:-1)}}var va=class n{parent=H1.required();withLocation=H1(!1);withActiveDates=H1(!1);hourOptions=H1(null);durationMinutes=H1(60);location=H1(`home`);travelMinutes=H1(0);occupiedBySlot=H1([]);workStartMin=H1(void 0);workEndMin=H1(void 0);blockKind=H1(`lesson`);addSlot=V1();removeSlot=V1();weekdays=at;get slotsArray(){return this.parent().get(`slots`)}rangesForSlot(r){return this.occupiedBySlot()[r]??[]}referenceDateForSlot(r){let e=this.slotsArray.at(r)?.get(`day`)?.value,t=C(new Date),a=ct(e??`monday`)??0,i=new Date(t);return i.setDate(i.getDate()+a),i}slotLocation(r){return this.withLocation()?this.slotsArray.at(r)?.get(`location`)?.value===`away`?`away`:`home`:this.location()}slotTravel(r){return this.slotLocation(r)!==`away`?0:this.withLocation()?Number(this.slotsArray.at(r)?.get(`travel_minutes`)?.value)||0:this.travelMinutes()}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-schedule-slots`]],inputs:{parent:[1,`parent`],withLocation:[1,`withLocation`],withActiveDates:[1,`withActiveDates`],hourOptions:[1,`hourOptions`],durationMinutes:[1,`durationMinutes`],location:[1,`location`],travelMinutes:[1,`travelMinutes`],occupiedBySlot:[1,`occupiedBySlot`],workStartMin:[1,`workStartMin`],workEndMin:[1,`workEndMin`],blockKind:[1,`blockKind`]},outputs:{addSlot:`addSlot`,removeSlot:`removeSlot`},decls:8,vars:1,consts:[[`fromPicker`,``],[`untilPicker`,``],[1,`slots`,3,`formGroup`],[`formArrayName`,`slots`,1,`list`],[1,`slot`,3,`formGroupName`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`slot-row`],[`appearance`,`outline`,1,`day`],[`formControlName`,`day`],[3,`value`],[3,`valueChange`,`value`,`hourOptions`,`occupiedRanges`,`durationMinutes`,`location`,`travelMinutes`,`workStartMin`,`workEndMin`,`blockKind`,`referenceDate`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`Удалить слот`,3,`click`,`disabled`],[1,`active-dates`],[`appearance`,`outline`,1,`location`],[`formControlName`,`location`],[`value`,`home`],[`value`,`away`],[`appearance`,`outline`,1,`travel`],[`matInput`,``,`type`,`number`,`formControlName`,`travel_minutes`],[1,`active-block`],[1,`active-label`],[`formControlName`,`activeFromMode`,`hideSingleSelectionIndicator`,``],[`value`,`today`],[`value`,`date`],[`appearance`,`outline`],[`formControlName`,`activeUntilMode`,`hideSingleSelectionIndicator`,``],[`value`,`indefinite`],[`matInput`,``,`formControlName`,`activeFromDate`,3,`matDatepicker`],[`matIconSuffix`,``,3,`for`],[`matInput`,``,`formControlName`,`activeUntilDate`,3,`matDatepicker`]],template:function(e,t){e&1&&(_i$1(0,`div`,2)(1,`div`,3),wD(2,Xo,14,14,`div`,4,ED),Qc(),_i$1(4,`button`,5),oh(`click`,function(){return t.addSlot.emit()}),_i$1(5,`mat-icon`),fw(6,`add`),Qc(),fw(7,` Добавить занятие `),Qc()()),e&2&&(Kp(`formGroup`,t.parent()),gI(2),CD(t.slotsArray.controls))},dependencies:[In$1,We$1,Yt,En,Fn,sn,nn$1,gt,pt$1,Kt,Pe,$$1,ht$1,Lt$2,Nt$1,ge,Be$2,Pe$1,Tt,jt,bt$1,Dt$1,bt$2,nt,pa,wi,ua,Ka,yt$2,wt,ga],styles:[`.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.slot[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:8px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:8px}.slot-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start}.day[_ngcontent-%COMP%]{flex:1 1 160px;min-width:min(100%,140px)}.location[_ngcontent-%COMP%], .travel[_ngcontent-%COMP%]{flex:1 1 120px;min-width:min(100%,120px)}.active-dates[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.active-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.active-label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%n12-cocoa)}`]})};var Zo=(n,r)=>r.value;function Jo(n,r){if(n&1&&(_i$1(0,`mat-option`,13),fw(1),Qc()),n&2){let e=r.$implicit;Kp(`value`,e),gI(),Dh(e)}}function es(n,r){if(n&1&&(_i$1(0,`mat-option`,13),fw(1),Qc()),n&2){let e=r.$implicit;Kp(`value`,e),gI(),Dh(e)}}function ts(n,r){n&1&&(_i$1(0,`span`,31),fw(1,`используется`),Qc())}function as(n,r){if(n&1){let e=ND();_i$1(0,`button`,28),oh(`click`,function(){let a=Fu(e).$implicit;return ju(PD().selectColor(a.value))}),Jp(1,`span`,29),_i$1(2,`span`,30),fw(3),Qc(),vD(4,ts,2,0,`span`,31),Qc()}if(n&2){let e=r.$implicit,t=PD();hh(`selected`,t.colorsEqual(t.appearanceGroup.controls.color.value,e.value))(`used`,t.isColorUsed(e.value)),Yp(`title`,e.nameRu),gI(),ph(`background`,e.value),gI(2),Dh(e.nameRu),gI(),ID(t.isColorUsed(e.value)?4:-1)}}function ns(n,r){if(n&1){let e=ND();_i$1(0,`app-schedule-slots`,32),oh(`addSlot`,function(){Fu(e);return ju(PD().addSlot())})(`removeSlot`,function(a){Fu(e);return ju(PD().removeSlot(a))}),Qc()}if(n&2){let e=PD();Kp(`parent`,e.form)(`withLocation`,!0)(`withActiveDates`,!0)(`durationMinutes`,e.form.controls.lesson_duration.value)(`hourOptions`,e.hourOptions())(`occupiedBySlot`,e.occupiedBySlot())(`workStartMin`,e.workBounds().start)(`workEndMin`,e.workBounds().end)(`blockKind`,`lesson`)}}function ir(n){if(n.mode!==`create`||!n.openWithSchedule&&n.prefillStartTime==null)return null;let r=n.prefillStartTime?.trim()??``,e=/^(\d{1,2}):(\d{2})$/.exec(r);if(e){let t=Number(e[1]),a=Number(e[2]);if(t>=0&&t<=23&&a>=0&&a<=59)return{start_time:`${String(t).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}}return{start_time:`10:00`}}var rr=class n{data=T(Dt);dialogRef=T(W$1);fb=T(Sn$1);schedules=T(q);store=T(Be$1);settings=F(this.store.select(s),{initialValue:null});colors=G$1;colorsEqual=Kn;form=this.fb.nonNullable.group({name:[this.data.student?.name??``,ue.required],price:[this.data.student?.price??0,[ue.required,ue.min(0)]],currency:[this.data.student?.currency??this.settings()?.default_currency??`BYN`,ue.required],lesson_duration:[this.data.student?.lesson_duration??this.settings()?.default_duration??45,ue.required],color:[this.data.student?.color?me$2(this.data.student.color):me$2(this.settings()?.default_lesson_color?.trim()||Xn(this.data.usedColors)),ue.required],is_deposit:[this.data.student?.is_deposit??!1],amount:[this.data.student?.amount??0],has_schedule:[!!ir(this.data)],slots:this.fb.array([this.createSlotGroup(ir(this.data)??void 0)])});profileGroup=this.fb.nonNullable.group({name:this.form.controls.name});paymentGroup=this.fb.nonNullable.group({price:this.form.controls.price,currency:this.form.controls.currency,lesson_duration:this.form.controls.lesson_duration,is_deposit:this.form.controls.is_deposit,amount:this.form.controls.amount});appearanceGroup=this.fb.nonNullable.group({color:this.form.controls.color});durations=Qo$1([...is]);currencies=Qo$1([`BYN`,`USD`,`EUR`]);weekLessons=F(this.store.select(v$1),{initialValue:[]});weekEvents=F(this.store.select(Gi),{initialValue:[]});formTick=Qo$1(0);hourOptions=Fw(()=>{let r=this.settings();return Yi(r?.work_start,r?.work_end)});workBounds=Fw(()=>{let r=this.settings();return{start:Ot(r?.work_start,480),end:Ot(r?.work_end,1320)}});occupiedBySlot=Fw(()=>(this.formTick(),this.buildOccupiedBySlot()));get slots(){return this.form.get(`slots`)}ngOnInit(){let r=C(new Date).toISOString();this.store.dispatch(Ke.loadWeek({weekStart:r})),this.store.dispatch(C$1.loadWeek({weekStart:r})),this.form.valueChanges.subscribe(()=>this.formTick.update(t=>t+1));let e=this.settings();e&&(this.durations.set(e.duration_options),this.currencies.set(e.enabled_currencies),this.data.student||this.form.patchValue(W({currency:e.default_currency,lesson_duration:e.default_duration},e.default_lesson_color?.trim()?{color:me$2(e.default_lesson_color)}:{}))),this.data.student&&this.schedules.getByStudent(this.data.student.id).subscribe(t=>{if(this.slots.clear(),!t.length){this.form.controls.has_schedule.setValue(!1),this.slots.push(this.createSlotGroup());return}this.form.controls.has_schedule.setValue(!0);for(let a of t)this.slots.push(this.createSlotGroup({day:a.day,start_time:a.start_time,location:a.location,travel_minutes:a.travel_minutes,active_from:a.active_from,active_until:a.active_until}));this.formTick.update(a=>a+1)})}isColorUsed(r){return this.data.mode===`edit`&&this.data.student&&Kn(this.data.student.color,r)?!1:this.data.usedColors.some(e=>Kn(e,r))}selectColor(r){this.appearanceGroup.controls.color.setValue(me$2(r))}addSlot(){this.slots.push(this.createSlotGroup())}removeSlot(r){this.slots.length<=1||this.slots.removeAt(r)}save(){if(this.form.invalid)return;let r=this.form.getRawValue(),e=r.has_schedule?r.slots.map(t=>{let a=t.activeFromMode===`date`&&t.activeFromDate?R(t.activeFromDate):R(new Date),i=t.activeUntilMode===`date`&&t.activeUntilDate?R(t.activeUntilDate):null;return{day:t.day,start_time:t.start_time,location:t.location,travel_minutes:t.location===`away`?t.travel_minutes:0,active_from:a,active_until:i}}):[];for(let t of e)if(t.active_from&&t.active_until&&t.active_until<t.active_from)return;if(e.length){let t=this.buildOccupiedBySlot(),a=C(new Date),i=this.workBounds(),o=r.lesson_duration;for(let u=0;u<e.length;u++){let g=e[u],v=ct(g.day)??0,m=new Date(a);m.setDate(m.getDate()+v);if(!$a({start:X(m,g.start_time),durationMinutes:o,location:g.location,travelMinutes:g.travel_minutes,ranges:t[u]??[],workStartMin:i.start,workEndMin:i.end,kind:`lesson`}))return}}this.dialogRef.close({name:r.name,price:r.price,currency:r.currency,lesson_duration:r.lesson_duration,color:me$2(r.color),is_deposit:r.is_deposit,amount:r.amount,schedule_slots:e})}createSlotGroup(r){let e=r?.active_from?`date`:`today`,t=r?.active_until?`date`:`indefinite`;return this.fb.nonNullable.group({day:[r?.day??`monday`,ue.required],start_time:[r?.start_time??`10:00`,ue.required],location:[r?.location??`home`,ue.required],travel_minutes:[r?.travel_minutes??0,[ue.required,ue.min(0)]],activeFromMode:[e],activeFromDate:[r?.active_from?new Date(`${r.active_from}T00:00:00`):new Date],activeUntilMode:[t],activeUntilDate:[r?.active_until?new Date(`${r.active_until}T00:00:00`):null]})}buildOccupiedBySlot(){let r=C(new Date),e=this.weekLessons().filter(o=>o.type!==`cancelled`&&(!this.data.student||o.student_id!==this.data.student.id)),t=this.weekEvents(),a=this.form.controls.lesson_duration.value,i=this.form.getRawValue().slots??[];return i.map((o,u)=>{let g=ct(o.day)??0,v=new Date(r);v.setDate(v.getDate()+g);let m=new Date(v);m.setHours(0,0,0,0);let f=new Date(m);f.setDate(f.getDate()+1);let C=[];for(let D of e){let z=new Date(D.scheduled_at);z<m||z>=f||C.push(ma(D.id,`lesson`,z,D.duration_minutes,D.location,D.travel_minutes,D.student_name))}for(let D of t){let z=new Date(D.scheduled_at);z<m||z>=f||C.push(ma(D.id,`event`,z,D.duration_minutes,D.location,D.travel_minutes,D.title))}return i.forEach((D,z)=>{if(z===u||D.day!==o.day)return;let ke=X(v,D.start_time),xe=D.location===`away`?`away`:`home`,or=xe===`away`?D.travel_minutes:0;C.push(ma(`slot-${z}`,`lesson`,ke,a,xe,or))}),C})}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-student-dialog`]],decls:69,vars:15,consts:[[`stepper`,``],[`mat-dialog-title`,``],[1,`dialog-body`],[3,`linear`],[`label`,`Основное`,3,`stepControl`],[1,`step-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`name`],[1,`step-actions`],[`mat-stroked-button`,``,`type`,`button`,`matStepperNext`,``],[`label`,`Оплата`,3,`stepControl`],[`matInput`,``,`type`,`number`,`formControlName`,`price`],[`formControlName`,`currency`],[3,`value`],[`formControlName`,`lesson_duration`],[1,`deposit-row`],[`formControlName`,`is_deposit`],[`matInput`,``,`type`,`number`,`formControlName`,`amount`],[`mat-stroked-button`,``,`type`,`button`,`matStepperPrevious`,``],[`label`,`Цвет`,3,`stepControl`],[1,`color-grid`],[`type`,`button`,1,`swatch-row`,3,`selected`,`used`],[`label`,`Расписание`],[`formControlName`,`has_schedule`],[3,`parent`,`withLocation`,`withActiveDates`,`durationMinutes`,`hourOptions`,`occupiedBySlot`,`workStartMin`,`workEndMin`,`blockKind`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`align`,`end`],[`mat-stroked-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`btn-cancel`],[`type`,`button`,1,`swatch-row`,3,`click`],[1,`swatch`],[1,`swatch-name`],[1,`used-label`],[3,`addSlot`,`removeSlot`,`parent`,`withLocation`,`withActiveDates`,`durationMinutes`,`hourOptions`,`occupiedBySlot`,`workStartMin`,`workEndMin`,`blockKind`]],template:function(e,t){e&1&&(_i$1(0,`h2`,1),fw(1),Qc(),_i$1(2,`mat-dialog-content`,2)(3,`mat-horizontal-stepper`,3,0)(5,`mat-step`,4)(6,`form`,5)(7,`mat-form-field`,6)(8,`mat-label`),fw(9,`Имя`),Qc(),Jp(10,`input`,7),nE(),Qc()(),_i$1(11,`div`,8)(12,`button`,9),fw(13,`Далее`),Qc()()(),_i$1(14,`mat-step`,10)(15,`form`,5)(16,`mat-form-field`,6)(17,`mat-label`),fw(18,`Ставка`),Qc(),Jp(19,`input`,11),nE(),Qc(),_i$1(20,`mat-form-field`,6)(21,`mat-label`),fw(22,`Валюта`),Qc(),_i$1(23,`mat-select`,12),wD(24,Jo,2,2,`mat-option`,13,DD),Qc(),nE(),Qc(),_i$1(26,`mat-form-field`,6)(27,`mat-label`),fw(28,`Длительность (мин)`),Qc(),_i$1(29,`mat-select`,14),wD(30,es,2,2,`mat-option`,13,DD),Qc(),nE(),Qc(),_i$1(32,`div`,15)(33,`mat-slide-toggle`,16),fw(34),Qc(),nE(),_i$1(35,`mat-icon`),fw(36),Qc()(),_i$1(37,`mat-form-field`,6)(38,`mat-label`),fw(39,`Баланс`),Qc(),Jp(40,`input`,17),nE(),Qc()(),_i$1(41,`div`,8)(42,`button`,18),fw(43,`Назад`),Qc(),_i$1(44,`button`,9),fw(45,`Далее`),Qc()()(),_i$1(46,`mat-step`,19)(47,`form`,5)(48,`div`,20),wD(49,as,5,9,`button`,21,Zo),Qc()(),_i$1(51,`div`,8)(52,`button`,18),fw(53,`Назад`),Qc(),_i$1(54,`button`,9),fw(55,`Далее`),Qc()()(),_i$1(56,`mat-step`,22)(57,`form`,5)(58,`mat-slide-toggle`,23),fw(59,`Регулярное расписание`),Qc(),nE(),vD(60,ns,1,9,`app-schedule-slots`,24),Qc(),_i$1(61,`div`,8)(62,`button`,18),fw(63,`Назад`),Qc(),_i$1(64,`button`,25),oh(`click`,function(){return t.save()}),fw(65,` Сохранить `),Qc()()()()(),_i$1(66,`mat-dialog-actions`,26)(67,`button`,27),fw(68,`Отмена`),Qc()()),e&2&&(gI(),Dh(t.data.mode===`create`?`Новый студент`:`Редактирование`),gI(2),Kp(`linear`,!1),gI(2),Kp(`stepControl`,t.profileGroup),gI(),Kp(`formGroup`,t.profileGroup),gI(4),oE(),gI(4),Kp(`stepControl`,t.paymentGroup),gI(),Kp(`formGroup`,t.paymentGroup),gI(4),oE(),gI(4),oE(),gI(),CD(t.currencies()),gI(5),oE(),gI(),CD(t.durations()),gI(2),hh(`debt`,!t.paymentGroup.controls.is_deposit.value),gI(),oE(),gI(),Xc(` `,t.paymentGroup.controls.is_deposit.value?`Аванс`:`Задолженность`,` `),gI(2),Dh(t.paymentGroup.controls.is_deposit.value?`add`:`remove`),gI(4),oE(),gI(6),Kp(`stepControl`,t.appearanceGroup),gI(),Kp(`formGroup`,t.appearanceGroup),gI(2),CD(t.colors),gI(8),Kp(`formGroup`,t.form),gI(),oE(),gI(2),ID(t.form.controls.has_schedule.value?60:-1),gI(4),Kp(`disabled`,t.form.invalid))},dependencies:[In$1,Nn,We$1,Yt,En,Fn,sn,nn$1,xn,Dn,kn$1,Sn,An,Kt,Pe,$$1,Be$2,Pe$1,Tt,jt,Dt$1,pa,Lt$2,Nt$1,ge,we,te,Ji,Xa,Za,Xi,Zi,yt$2,wt,va],styles:[`.dialog-body[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;max-height:min(420px,90vh - 8rem);overflow:auto}.step-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:8px 0 0;min-height:260px}.step-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.deposit-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:var(--%NS%mat-sys-primary)}.deposit-row.debt[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.color-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px;max-height:220px;overflow:auto;padding:4px 2px 8px}.swatch-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-height:32px;padding:4px 8px;border:1px solid transparent;border-radius:6px;background:transparent;cursor:pointer;text-align:left;font:inherit;color:inherit}.swatch[_ngcontent-%COMP%]{width:22px;height:22px;border-radius:50%;flex:none;border:2px solid transparent}.swatch-name[_ngcontent-%COMP%]{font-size:14px;line-height:1.2}.used-label[_ngcontent-%COMP%]{margin-left:auto;font-size:14px;color:var(--%NS%ht-apple-secondary-label);white-space:nowrap}.swatch-row.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-on-surface);outline:2px solid var(--%NS%mat-sys-primary)}.swatch-row.used[_ngcontent-%COMP%]:not(.selected){opacity:.92}.active-from[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:4px}.active-from-label[_ngcontent-%COMP%]{font-size:14px;color:var(--%NS%n12-cocoa)}`]})};var is=[40,45,60,120];export{rr as A,fl as C,ma as D,kl as E,wl as F,ws as I,xi as L,ui as M,va as N,pa as O,wi as P,xl as R,eo as S,j as T,Ti as _,Gi as a,Yi as b,Jr as c,Nl as d,Nt as f,Ri as g,Pl as h,El as i,ua as j,qr as k,Ka as l,Ot as m,Ai as n,Ii as o,Ol as p,Al as r,Il as s,$a as t,Ms as u,Tl as v,ht as w,_l as x,Vl as y};