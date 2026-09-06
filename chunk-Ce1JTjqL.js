import{Ar as qD,Bn as em,C as Dh,Dt as QE,E as ED,Et as Q1,F as G1,G as ID,Gn as gI,H as H1,I as GE,In as de,Kt as V1,M as Fw,Nn as ch,O as Fg,Or as pr,Ot as Qc,P as G,Pn as cy,Pr as qp,Pt as Re,Qt as W,S as DD,Sn as _i,Sr as oE,T as Dw,Tn as ah,Tr as ph,Wn as fw,Wr as tw,Wt as UD,X as Jp,Xr as vD,Yn as hh,Yr as uu,Yt as Vi$1,Z as KE,_ as CD,ar as ju,br as no,cn as Xp,dn as Yc,dr as le,ei as wD,en as We$1,er as j,f as Aw,ft as ND,gn as Zc,gr as nE,gt as Nw,h as BD,ht as Nr,it as Lf,j as Fu,jt as Qo,kr as q1,l as A,m as B1,mn as Yu,n as $D,nr as jD,nt as Kp,oi as z,on as Xc,ot as Lh,pn as Yp,qr as uh,qt as VD,r as $e$1,s as $p,si as z1,un as Ya,wn as _o,wr as oh,xt as PD,y as Cr,yr as nn$1,zt as T}from"./chunk-DoCXw7pv.js";import{r as U}from"./chunk-JnLRtYd3.js";import{a as On}from"./chunk-C9CFYGkc.js";import{$ as k,Q as ja,a as Be,c as Da,dt as tt,et as kn$1,k as Rr,l as E,p as In$1,pt as v,q as fn$1,r as Ar,u as Gn,x as Ma}from"./chunk-5MOH3T1v.js";import"./chunk-D6P95sG5.js";import{$ as _,B as n,H as Z,It as me,K as C,Nt as ge,Pt as hn$1,Q as U$1,S as Tt,V as J,Y as G$1,Z as R,b as xn$1,c as An$1,d as Kn,et as f,f as Se,h as W$1,l as Dn$1,m as Un,nt as s,o as wt,p as Sn$1,rt as x,s as yt,tt as r,u as Dt,v as kn$2,w as jt,xt as L}from"./main-DQY2MMSR.js";import{r as p}from"./chunk-Dtb_iUpg.js";import{a as In$2,c as Rt,d as Y,f as Yt,g as nn$2,l as Sn$2,n as En$1,r as Fn,s as Nn$1,u as We$2,v as sn$1,y as ue$1}from"./chunk-B9TYi4gO.js";import{n as we,t as te}from"./chunk-LUAxsRH-.js";import{i as Pe,r as Kt,t as $}from"./chunk-BPaoGQCb.js";import{n as Nt,t as Lt}from"./chunk-iNmYyBqz.js";import{n as Pe$1,t as Be$1}from"./chunk-DqzB3mUt.js";import{n as dn$1,r as ke,t as cn}from"./chunk-DfKuJcj2.js";import{n as pe,t as ce}from"./chunk-CA4AH_J6.js";var vi=new A(`CdkAccordion`);var bi=(()=>{class a{accordion=T(vi,{optional:!0,skipSelf:!0});_changeDetectorRef=T(q1);_expansionDispatcher=T(p);_openCloseAllSubscription=j.EMPTY;closed=new We$1;opened=new We$1;destroyed=new We$1;expandedChange=new We$1;id=T(tt).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Qo(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(t){return new(t||a)};static ɵdir=KE({type:a,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,G1],disabled:[2,`disabled`,`disabled`,G1]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[Dw([{provide:vi,useValue:void 0}])]})}return a})();var xi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=QE({type:a});static ɵinj=uu({})}return a})();var zi=[`body`];var Wi=[`bodyWrapper`];var Xi=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var $i=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function ji(a,i){}var Gi=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var Qi=[`mat-panel-title`,`mat-panel-description`,`*`];function qi(a,i){a&1&&(Zc(0,`span`,1),Yu(),Zc(1,`svg`,2),Xp(2,`path`,3),Yc()())}var yi=new A(`MAT_ACCORDION`);var Si=new A(`MAT_EXPANSION_PANEL`);var Ki=(()=>{class a{_template=T(Cr);_expansionPanel=T(Si,{optional:!0});static ɵfac=function(t){return new(t||a)};static ɵdir=KE({type:a,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return a})();var Ci=new A(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var We=(()=>{class a extends bi{_viewContainerRef=T(Vi$1);_animationsDisabled=fn$1();_document=T(pr);_ngZone=T(Re);_elementRef=T(Nr);_renderer=T(Ya);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new We$1;afterCollapse=new We$1;_inputChanges=new z;accordion=T(yi,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=T(tt).getId(`mat-expansion-panel-header-`);constructor(){super();let e=T(Ci,{optional:!0});this._expansionDispatcher=T(p),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(em(null),nn$1(()=>this.expanded&&!this._portal),no(1)).subscribe(()=>{this._portal=new L(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=GE({type:a,selectors:[[`mat-expansion-panel`]],contentQueries:function(t,n,r){if(t&1&&ah(r,Ki,5),t&2){let p;BD(p=$D())&&(n._lazyContent=p.first)}},viewQuery:function(t,n){if(t&1&&ch(zi,5)(Wi,5),t&2){let r;BD(r=$D())&&(n._body=r.first),BD(r=$D())&&(n._bodyWrapper=r.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(t,n){t&2&&hh(`mat-expanded`,n.expanded)(`mat-expansion-panel-spacing`,n._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,G1],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[Dw([{provide:yi,useValue:void 0},{provide:Si,useExisting:a}]),$p,cy],ngContentSelectors:$i,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(t,n){t&1&&(jD(Xi),VD(0),_i(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),VD(6,1),qp(7,ji,0,0,`ng-template`,5),Qc(),VD(8,2),Qc()()),t&2&&(gI(),Yp(`inert`,n.expanded?null:``),gI(2),Kp(`id`,n.id),Yp(`aria-labelledby`,n._headerId),gI(4),Kp(`cdkPortalOutlet`,n._portal))},dependencies:[hn$1],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return a})();var ki=(()=>{class a{panel=T(We,{host:!0});_element=T(Nr);_focusMonitor=T(In$1);_changeDetectorRef=T(q1);_parentChangeSubscription=j.EMPTY;constructor(){T(k).load(Da);let e=this.panel,t=T(Ci,{optional:!0}),n=T(new Lh(`tabindex`),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(nn$1(p=>!!(p.hideToggle||p.togglePosition))):$e$1;this.tabIndex=parseInt(n||``)||0,this._parentChangeSubscription=Fg(e.opened,e.closed,r,e._inputChanges.pipe(nn$1(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(nn$1(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:kn$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(t){return new(t||a)};static ɵcmp=GE({type:a,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(t,n){t&1&&oh(`click`,function(){return n._toggle()})(`keydown`,function(p){return n._keydown(p)}),t&2&&(Yp(`id`,n.panel._headerId)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n._getPanelId())(`aria-expanded`,n._isExpanded())(`aria-disabled`,n.panel.disabled),ph(`height`,n._getHeaderHeight()),hh(`mat-expanded`,n._isExpanded())(`mat-expansion-toggle-indicator-after`,n._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,n._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:z1(e)]},ngContentSelectors:Qi,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(t,n){t&1&&(jD(Gi),Zc(0,`span`,0),VD(1),VD(2,1),VD(3,2),Yc(),vD(4,qi,3,0,`span`,1)),t&2&&(hh(`mat-content-hide-toggle`,!n._showToggle()),gI(4),ID(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return a})();var wi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=KE({type:a,selectors:[[`mat-panel-description`]],hostAttrs:[1,`mat-expansion-panel-header-description`]})}return a})();var Ei=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=KE({type:a,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return a})();var Ti=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=QE({type:a});static ɵinj=uu({imports:[xi,me,Gn]})}return a})();var Yi=[`knob`];var Ji=[`valueIndicatorContainer`];function en(a,i){if(a&1&&(_i(0,`div`,2,1)(2,`div`,5)(3,`span`,6),fw(4),Qc()()()),a&2){let e=PD();gI(4),Dh(e.valueIndicatorText)}}var tn=[`trackActive`];var nn=[`*`];function an(a,i){if(a&1&&Jp(0,`div`),a&2){let e=i.$implicit,t=i.$index,n=PD(3);tw(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),ph(`transform`,n._calcTickMarkTransform(t))}}function rn(a,i){if(a&1&&wD(0,an,1,4,`div`,8,ED),a&2)CD(PD(2)._tickMarks)}function on(a,i){if(a&1&&(_i(0,`div`,6,1),vD(2,rn,2,0),Qc()),a&2){let e=PD();gI(2),ID(e._cachedWidth?2:-1)}}function sn(a,i){if(a&1&&Jp(0,`mat-slider-visual-thumb`,7),a&2){let e=PD();Kp(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var c=(function(a){return a[a.START=1]=`START`,a[a.END=2]=`END`,a})(c||{});var ne=(function(a){return a[a.ACTIVE=0]=`ACTIVE`,a[a.INACTIVE=1]=`INACTIVE`,a})(ne||{});var Xe=new A(`_MatSlider`);var Mi=new A(`_MatSliderThumb`);var ln=new A(`_MatSliderRangeThumb`);var Ni=new A(`_MatSliderVisualThumb`);var dn=(()=>{class a{_cdr=T(q1);_ngZone=T(Re);_slider=T(Xe);_renderer=T(Ya);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=T(Nr).nativeElement;_platform=T(v);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,n=this._renderer;this._listenerCleanups=[n.listen(t,`pointermove`,this._onPointerMove),n.listen(t,`pointerdown`,this._onDragStart),n.listen(t,`pointerup`,this._onDragEnd),n.listen(t,`pointerleave`,this._onMouseLeave),n.listen(t,`focus`,this._onFocus),n.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),n=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=n,n?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===E.FADING_IN||e?.state===E.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===c.START?c.END:c.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===c.START?c.END:c.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||a)};static ɵcmp=GE({type:a,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,n){if(t&1&&ch(Ma,5)(Yi,5)(Ji,5),t&2){let r;BD(r=$D())&&(n._ripple=r.first),BD(r=$D())&&(n._knob=r.first),BD(r=$D())&&(n._valueIndicatorContainer=r.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[Dw([{provide:Ni,useExisting:a}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,n){t&1&&(vD(0,en,5,1,`div`,2),Jp(1,`div`,3,0)(3,`div`,4)),t&2&&(ID(n.discrete?0:-1),gI(3),Kp(`matRippleDisabled`,!0))},dependencies:[Ma],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return a})();var Ii=(()=>{class a{_ngZone=T(Re);_cdr=T(q1);_elementRef=T(Nr);_dir=T(Rr,{optional:!0});_globalRippleOptions=T(Ar,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(c.END),n=this._getInput(c.START);t&&(t.disabled=this._disabled),n&&(n.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(c.END),n=this._getInput(c.START),r=t.value,p=n.value;n.min=e.new,t.min=Math.max(e.new,n.value),n.max=Math.min(t.max,t.value),n._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,n):this._onTranslateXChangeBySideEffect(n,t),r!==t.value&&this._onValueChange(t),p!==n.value&&this._onValueChange(n)}_updateMinNonRange(e){let t=this._getInput(c.END);if(t){let n=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),n!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(c.END),n=this._getInput(c.START),r=t.value,p=n.value;t.max=e.new,n.max=Math.min(e.new,t.value),t.min=n.value,t._updateWidthInactive(),n._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(n,t):this._onTranslateXChangeBySideEffect(t,n),r!==t.value&&this._onValueChange(t),p!==n.value&&this._onValueChange(n)}_updateMaxNonRange(e){let t=this._getInput(c.END);if(t){let n=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),n!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(c.END),t=this._getInput(c.START),n=e.value,r=t.value,p=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<p?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),n!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(c.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=fn$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Fw(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=T(v);constructor(){T(k).load(Da);let e=this._isRtl();Q1(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(c.END),t=this._getInput(c.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let n=this._getThumb(c.END);this._rippleRadius=n._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(c.END),t=this._getInput(c.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(c.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(c.START)._isActive||this._getThumb(c.END)._isActive}_getValue(e=c.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(c.START)?._skipUIUpdate||this._getInput(c.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(c.END),t=this._getInput(c.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(c.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(c.START),t=this._getInput(c.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),n=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),n._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===c.END?c.END:c.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===c.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let n=this._getThumb(e.thumbPosition);t.length<3?n._hostElement.classList.add(`mdc-slider__thumb--short-value`):n._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(c.END),t=this._getInput(c.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,n=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*n}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let n=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${n})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${n})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),n=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?n++:r++,this._tickMarks=Array(n).fill(ne.ACTIVE).concat(Array(r).fill(ne.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),n=this._getValue(c.START),r=Math.max(Math.round((n-this.min)/e),0),p=Math.max(Math.round((t-n)/e)+1,0),G=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(ne.INACTIVE).concat(Array(p).fill(ne.ACTIVE),Array(G).fill(ne.INACTIVE))}_getInput(e){if(e===c.END&&this._input)return this._input;if(this._inputs?.length)return e===c.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===c.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let n=t.width/2,r=t.x+n,p=t.y+n,G=e.clientX-r,ce=e.clientY-p;return Math.pow(G,2)+Math.pow(ce,2)<Math.pow(n,2)}static ɵfac=function(t){return new(t||a)};static ɵcmp=GE({type:a,selectors:[[`mat-slider`]],contentQueries:function(t,n,r){if(t&1&&ah(r,Mi,5)(r,ln,4),t&2){let p;BD(p=$D())&&(n._input=p.first),BD(p=$D())&&(n._inputs=p)}},viewQuery:function(t,n){if(t&1&&ch(tn,5)(Ni,5),t&2){let r;BD(r=$D())&&(n._trackActive=r.first),BD(r=$D())&&(n._thumbs=r)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,n){t&2&&(tw(`mat-`+(n.color||`primary`)),hh(`mdc-slider--range`,n._isRange)(`mdc-slider--disabled`,n.disabled)(`mdc-slider--discrete`,n.discrete)(`mdc-slider--tick-marks`,n.showTickMarks)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,G1],discrete:[2,`discrete`,`discrete`,G1],showTickMarks:[2,`showTickMarks`,`showTickMarks`,G1],min:[2,`min`,`min`,z1],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,G1],max:[2,`max`,`max`,z1],step:[2,`step`,`step`,z1],displayWith:`displayWith`},exportAs:[`matSlider`],features:[Dw([{provide:Xe,useExisting:a}])],ngContentSelectors:nn,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,n){t&1&&(jD(),VD(0),_i(1,`div`,2),Jp(2,`div`,3),_i(3,`div`,4),Jp(4,`div`,5,0),Qc(),vD(6,on,3,1,`div`,6),Qc(),vD(7,sn,1,3,`mat-slider-visual-thumb`,7),Jp(8,`mat-slider-visual-thumb`,7)),t&2&&(gI(6),ID(n.showTickMarks?6:-1),gI(),ID(n._isRange?7:-1),gI(),Kp(`discrete`,n.discrete)(`thumbPosition`,2)(`valueIndicatorText`,n.endValueIndicatorText))},dependencies:[dn],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return a})();var un={provide:Y,useExisting:_o(()=>$e),multi:!0};var $e=(()=>{class a{_ngZone=T(Re);_elementRef=T(Nr);_cdr=T(q1);_slider=T(Xe);_platform=T(v);_listenerCleanups;get value(){return z1(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new We$1;dragStart=new We$1;dragEnd=new We$1;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=c.END;get min(){return z1(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return z1(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return z1(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return G1(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Qo(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new z;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=T(Ya);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,n=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,p=Math.floor((this._slider.max-this._slider.min)/r),G=this._slider._isRtl()?1-t/n:t/n,Re=Math.round(G*p)/p*(this._slider.max-this._slider.min)+this._slider.min,Q=Math.round(Re/r)*r;if(Q===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=Q,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,n=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,n),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||a)};static ɵdir=KE({type:a,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,n){t&1&&oh(`change`,function(){return n._onChange()})(`input`,function(){return n._onInput()})(`blur`,function(){return n._onBlur()})(`focus`,function(){return n._onFocus()}),t&2&&Yp(`aria-valuetext`,n._valuetext())},inputs:{value:[2,`value`,`value`,z1]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[Dw([un,{provide:Mi,useExisting:a}])]})}return a})();var Di=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=QE({type:a});static ɵinj=uu({imports:[ja,Gn]})}return a})();var pn=[`photo`];function mn(a,i){if(a&1){let e=ND();_i(0,`img`,13,1),oh(`load`,function(n){Fu(e);return ju(PD().onImageLoad(n))}),Qc()}if(a&2){let e=PD();ph(`transform`,e.transform()),Kp(`src`,e.objectUrl(),Lf),Yp(`crossorigin`,e.imageCrossOrigin())}}var ue=220;var Ne=512;var hn=.92;var _n=4;var Ie=class a{data=T(Dt);ref=T(W$1);destroyRef=T(de);photoRef=B1(`photo`);objectUrl=Qo(null);imageCrossOrigin=Qo(null);ready=Qo(!1);saving=Qo(!1);scale=Qo(1);minScale=Qo(1);maxScale=Qo(4);tx=Qo(0);ty=Qo(0);transform=Fw(()=>`translate(-50%, -50%) translate(${this.tx()}px, ${this.ty()}px) scale(${this.scale()})`);scaleStep=Fw(()=>{let i=this.maxScale()-this.minScale();return i>0?Math.max(i/200,.001):.01});formatZoom=i=>`${Math.round(i*100)}%`;imageNaturalW=0;imageNaturalH=0;ownsObjectUrl=!1;dragging=!1;dragPointerId=null;dragStartX=0;dragStartY=0;dragOriginTx=0;dragOriginTy=0;constructor(){let i=this.data;if(typeof i==`string`)this.imageCrossOrigin.set(`anonymous`),this.objectUrl.set(i),this.ownsObjectUrl=!1;else{let e=URL.createObjectURL(i);this.objectUrl.set(e),this.ownsObjectUrl=!0}this.ref.afterClosed().pipe(U(this.destroyRef)).subscribe(()=>this.revokeOwnedUrl()),this.ref.disableClose=!1}ngOnDestroy(){this.revokeOwnedUrl()}onImageLoad(i){let e=i.target;if(this.imageNaturalW=e.naturalWidth,this.imageNaturalH=e.naturalHeight,!this.imageNaturalW||!this.imageNaturalH)return;let t=ue/Math.min(this.imageNaturalW,this.imageNaturalH);this.minScale.set(t),this.maxScale.set(t*_n),this.scale.set(t),this.tx.set(0),this.ty.set(0),this.clampPan(),this.ready.set(!0)}onScaleInput(i){let e=Number(i.target.value);Number.isFinite(e)&&this.setScale(e)}setScale(i){if(!this.ready())return;let e=this.clamp(i,this.minScale(),this.maxScale());this.scale.set(e),this.clampPan()}onWheel(i){if(!this.ready())return;i.preventDefault();let e=i.deltaY>0?-1:1,t=(this.maxScale()-this.minScale())*.04;this.setScale(this.scale()+e*t)}onPointerDown(i){if(!this.ready()||i.button!==0)return;i.currentTarget.setPointerCapture(i.pointerId),this.dragging=!0,this.dragPointerId=i.pointerId,this.dragStartX=i.clientX,this.dragStartY=i.clientY,this.dragOriginTx=this.tx(),this.dragOriginTy=this.ty()}onPointerMove(i){if(!this.dragging||i.pointerId!==this.dragPointerId)return;let e=i.clientX-this.dragStartX,t=i.clientY-this.dragStartY;this.tx.set(this.dragOriginTx+e),this.ty.set(this.dragOriginTy+t),this.clampPan()}onPointerUp(i){if(i.pointerId===this.dragPointerId){this.dragging=!1,this.dragPointerId=null;try{i.currentTarget.releasePointerCapture(i.pointerId)}catch{}}}async save(){if(!this.ready()||this.saving())return;let i=this.photoRef()?.nativeElement;if(!(!i||!this.imageNaturalW||!this.imageNaturalH)){this.saving.set(!0);try{let e=await this.exportCroppedFile(i);this.ref.close(e)}catch{this.saving.set(!1)}}}exportCroppedFile(i){let e=this.scale(),t=this.tx(),n=this.ty(),r=ue/2,p=this.imageNaturalW/2+(-r-t)/e,G=this.imageNaturalH/2+(-r-n)/e,ce=ue/e,Re=ue/e,Q=document.createElement(`canvas`);Q.width=Ne,Q.height=Ne;let Z=Q.getContext(`2d`);return Z?(Z.imageSmoothingEnabled=!0,Z.imageSmoothingQuality=`high`,Z.drawImage(i,p,G,ce,Re,0,0,Ne,Ne),new Promise((Ui,Bi)=>{Q.toBlob(Ge=>{if(!Ge){Bi(new Error(`toBlob failed`));return}Ui(new File([Ge],`avatar.jpg`,{type:`image/jpeg`}))},`image/jpeg`,hn)})):Promise.reject(new Error(`Canvas unavailable`))}clampPan(){let i=this.scale(),e=this.imageNaturalW*i/2,t=this.imageNaturalH*i/2,n=ue/2,r=Math.max(0,e-n),p=Math.max(0,t-n);this.tx.set(this.clamp(this.tx(),-r,r)),this.ty.set(this.clamp(this.ty(),-p,p))}clamp(i,e,t){return Math.min(t,Math.max(e,i))}revokeOwnedUrl(){let i=this.objectUrl();this.ownsObjectUrl&&i&&(URL.revokeObjectURL(i),this.ownsObjectUrl=!1,this.objectUrl.set(null))}static ɵfac=function(e){return new(e||a)};static ɵcmp=GE({type:a,selectors:[[`app-avatar-crop-dialog`]],viewQuery:function(e,t){e&1&&uh(t.photoRef,pn,5),e&2&&UD()},decls:17,vars:10,consts:[[`stage`,``],[`photo`,``],[`mat-dialog-title`,``],[`role`,`img`,1,`stage`,3,`pointerdown`,`pointermove`,`pointerup`,`pointercancel`,`wheel`],[`alt`,``,`draggable`,`false`,1,`photo`,3,`src`,`transform`],[`aria-hidden`,`true`,1,`mask`],[1,`zoom`],[`id`,`avatar-crop-zoom-label`,`for`,`avatar-crop-zoom`,1,`zoom-label`],[1,`zoom-slider`,3,`min`,`max`,`step`,`disabled`,`displayWith`],[`id`,`avatar-crop-zoom`,`matSliderThumb`,``,3,`input`,`valueChange`,`value`],[`align`,`end`],[`mat-stroked-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`btn-cancel`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`alt`,``,`draggable`,`false`,1,`photo`,3,`load`,`src`]],template:function(e,t){e&1&&(_i(0,`h2`,2),fw(1,`Кадрирование аватара`),Qc(),_i(2,`mat-dialog-content`)(3,`div`,3,0),oh(`pointerdown`,function(r){return t.onPointerDown(r)})(`pointermove`,function(r){return t.onPointerMove(r)})(`pointerup`,function(r){return t.onPointerUp(r)})(`pointercancel`,function(r){return t.onPointerUp(r)})(`wheel`,function(r){return t.onWheel(r)}),vD(5,mn,2,4,`img`,4),Jp(6,`div`,5),Qc(),_i(7,`div`,6)(8,`label`,7),fw(9,`Масштаб`),Qc(),_i(10,`mat-slider`,8)(11,`input`,9),oh(`input`,function(r){return t.onScaleInput(r)})(`valueChange`,function(r){return t.setScale(r)}),Qc()()()(),_i(12,`mat-dialog-actions`,10)(13,`button`,11),fw(14,`Отмена`),Qc(),_i(15,`button`,12),oh(`click`,function(){return t.save()}),fw(16,` Сохранить `),Qc()()),e&2&&(gI(3),Yp(`aria-label`,`Область кадрирования. Перетащите фото, колесо — масштаб`),gI(2),ID(t.objectUrl()?5:-1),gI(5),Kp(`min`,t.minScale())(`max`,t.maxScale())(`step`,t.scaleStep())(`disabled`,!t.ready())(`displayWith`,t.formatZoom),gI(),Kp(`value`,t.scale()),Yp(`aria-labelledby`,`avatar-crop-zoom-label`),gI(4),Kp(`disabled`,!t.ready()||t.saving()))},dependencies:[xn$1,Dn$1,kn$2,Sn$1,An$1,Tt,jt,Di,Ii,$e],styles:[`[_nghost-%COMP%]{display:block;color:var(--%NS%n12-cocoa);width:100%;max-width:100%;box-sizing:border-box}h2[mat-dialog-title][_ngcontent-%COMP%]{margin:0}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;width:100%;max-width:100%;min-width:0;box-sizing:border-box;overflow-x:hidden}.stage[_ngcontent-%COMP%]{position:relative;width:280px;height:280px;max-width:100%;margin:0 auto;overflow:hidden;touch-action:none;cursor:grab;-webkit-user-select:none;user-select:none;background:color-mix(in srgb,var(--%NS%n12-cocoa) 12%,var(--%NS%n12-parchment));border:1px solid color-mix(in srgb,var(--%NS%n12-cocoa) 35%,transparent)}.stage[_ngcontent-%COMP%]:active{cursor:grabbing}.photo[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;max-width:none;width:auto;height:auto;object-fit:none;transform-origin:center center;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.mask[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none}.mask[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;top:50%;width:220px;height:220px;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 9999px color-mix(in srgb,var(--%NS%n12-cocoa) 55%,transparent);border:1px solid color-mix(in srgb,var(--%NS%n12-parchment) 70%,transparent)}.zoom[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:0 4px}.zoom-label[_ngcontent-%COMP%]{font-size:.9rem;color:var(--%NS%n12-cocoa)}.zoom-slider[_ngcontent-%COMP%]{width:100%;--%NS%mat-slider-active-track-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-inactive-track-color: color-mix(in srgb, var(--%NS%n12-cocoa) 22%, transparent);--%NS%mat-slider-thumb-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-focus-state-layer-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-hover-state-layer-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-with-tick-marks-active-container-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-with-tick-marks-inactive-container-color: color-mix( in srgb, var(--%NS%n12-cocoa) 28%, transparent );--%NS%mat-slider-value-indicator-background-color: var(--%NS%n12-royal-blue);--%NS%mat-slider-value-indicator-text-color: var(--%NS%n12-parchment)}`]})};function gn(a,i){a&1&&Jp(0,`img`,4),a&2&&Kp(`src`,i,Lf)}function fn(a,i){a&1&&(_i(0,`span`,5),fw(1),Qc()),a&2&&(gI(),Dh(i))}function vn(a,i){if(a&1&&(_i(0,`mat-icon`,6),fw(1),Qc()),a&2){let e=PD();gI(),Dh(e.icon())}}function bn(a,i){a&1&&(_i(0,`span`,7),Jp(1,`mat-spinner`,16),Qc())}function xn(a,i){a&1&&(_i(0,`span`,8)(1,`mat-icon`),fw(2,`photo_camera`),Qc()())}function yn(a,i){if(a&1){let e=ND();_i(0,`button`,11),oh(`click`,function(){Fu(e);return ju(PD().googlePick.emit())}),_i(1,`mat-icon`),fw(2,`account_circle`),Qc(),fw(3),Qc()}if(a&2){let e=PD();Kp(`disabled`,e.inactive()),gI(3),Xc(` `,e.googleActionLabel(),` `)}}function Sn(a,i){if(a&1){let e=ND();_i(0,`button`,17),oh(`click`,function(){Fu(e);return ju(PD().clear())}),fw(1),Qc()}if(a&2){let e=PD();Kp(`disabled`,e.inactive()),gI(),Xc(` `,e.clearLabel(),` `)}}function Cn(a,i){if(a&1&&(_i(0,`p`,14),fw(1),Qc()),a&2){let e=PD();Kp(`id`,e.hintId),gI(),Dh(e.hint())}}var kn=0;var De=class a{previewUrl=H1(null);fallbackUrl=H1(null);initials=H1(``);accept=H1(`image/*`);label=H1(`Выбрать файл`);previewLabel=H1(`Превью`);hint=H1(``);icon=H1(`photo_camera`);clearLabel=H1(`Очистить`);accent=H1(``);border=H1(``);disabled=H1(!1,{transform:G1});loading=H1(!1,{transform:G1});clearable=H1(!1,{transform:G1});cameraBadge=H1(!1,{transform:G1});googleEnabled=H1(!1,{transform:G1});googleActionLabel=H1(``);fileChange=V1();cleared=V1();googlePick=V1();hintId=`file-field-hint-${kn++}`;displayUrl=Fw(()=>this.previewUrl()||this.fallbackUrl()||null);initialsText=Fw(()=>this.displayUrl()?``:this.initials().trim());inactive=Fw(()=>this.disabled()||this.loading());canClear=Fw(()=>!!this.previewUrl());previewAriaLabel=Fw(()=>`${this.previewLabel()}. ${this.label()}`);openPicker(i){this.inactive()||i.click()}onInputChange(i){let e=i.target,t=e.files?.[0];e.value=``,t&&this.fileChange.emit(t)}clear(){this.inactive()||!this.canClear()||this.cleared.emit()}static ɵfac=function(e){return new(e||a)};static ɵcmp=GE({type:a,selectors:[[`app-file-field`]],hostVars:5,hostBindings:function(e,t){e&2&&(Yp(`aria-busy`,t.loading()?`true`:null),ph(`--%NS%file-field-accent`,t.accent()||null)(`--%NS%file-field-border`,t.border()||null))},inputs:{previewUrl:[1,`previewUrl`],fallbackUrl:[1,`fallbackUrl`],initials:[1,`initials`],accept:[1,`accept`],label:[1,`label`],previewLabel:[1,`previewLabel`],hint:[1,`hint`],icon:[1,`icon`],clearLabel:[1,`clearLabel`],accent:[1,`accent`],border:[1,`border`],disabled:[1,`disabled`],loading:[1,`loading`],clearable:[1,`clearable`],cameraBadge:[1,`cameraBadge`],googleEnabled:[1,`googleEnabled`],googleActionLabel:[1,`googleActionLabel`]},outputs:{fileChange:`fileChange`,cleared:`cleared`,googlePick:`googlePick`},decls:19,vars:15,consts:[[`fileInput`,``],[`role`,`group`,1,`file-field`],[`type`,`button`,1,`preview`,3,`click`,`disabled`],[1,`preview-face`],[`alt`,``,3,`src`],[`aria-hidden`,`true`,1,`initials`],[`aria-hidden`,`true`,1,`placeholder`],[1,`overlay`],[`aria-hidden`,`true`,1,`camera-badge`],[1,`meta`],[1,`actions`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-stroked-button`,``,`type`,`button`,3,`disabled`],[`mat-button`,``,`type`,`button`,3,`disabled`],[1,`hint`,3,`id`],[`type`,`file`,`tabindex`,`-1`,`aria-hidden`,`true`,1,`visually-hidden`,3,`change`,`accept`,`disabled`],[`diameter`,`24`],[`mat-button`,``,`type`,`button`,3,`click`,`disabled`]],template:function(e,t){if(e&1){let n=ND();_i(0,`div`,1)(1,`button`,2),oh(`click`,function(){Fu(n);let p=qD(18);return ju(t.openPicker(p))}),_i(2,`span`,3),vD(3,gn,1,1,`img`,4)(4,fn,2,1,`span`,5)(5,vn,2,1,`mat-icon`,6),vD(6,bn,2,0,`span`,7),Qc(),vD(7,xn,3,0,`span`,8),Qc(),_i(8,`div`,9)(9,`div`,10)(10,`button`,11),oh(`click`,function(){Fu(n);let p=qD(18);return ju(t.openPicker(p))}),_i(11,`mat-icon`),fw(12),Qc(),fw(13),Qc(),vD(14,yn,4,2,`button`,12),vD(15,Sn,2,2,`button`,13),Qc(),vD(16,Cn,2,2,`p`,14),Qc(),_i(17,`input`,15,0),oh(`change`,function(p){return t.onInputChange(p)}),Qc()()}if(e&2){let n;Yp(`aria-label`,t.label())(`aria-describedby`,t.hint()?t.hintId:null),gI(),Kp(`disabled`,t.inactive()),Yp(`aria-label`,t.previewAriaLabel()),gI(2),ID((n=t.displayUrl())?3:(n=t.initialsText())?4:5,n),gI(3),ID(t.loading()?6:-1),gI(),ID(t.cameraBadge()?7:-1),gI(3),Kp(`disabled`,t.inactive()),gI(2),Dh(t.icon()),gI(),Xc(` `,t.label(),` `),gI(),ID(t.googleActionLabel()&&t.googleEnabled()?14:-1),gI(),ID(t.clearable()&&t.canClear()?15:-1),gI(),ID(t.hint()?16:-1),gI(),Kp(`accept`,t.accept())(`disabled`,t.inactive())}},dependencies:[Tt,jt,yt,wt,J,Z],styles:[`[_nghost-%COMP%]{display:block;--%NS%_accent: var(--%NS%file-field-accent, var(--%NS%n12-cocoa, var(--%NS%mat-sys-primary)));--%NS%_border: var(--%NS%file-field-border, var(--%NS%n12-cocoa, var(--%NS%mat-sys-outline)));--%NS%_surface: var(--%NS%file-field-surface, var(--%NS%n12-parchment, var(--%NS%mat-sys-surface-container)));--%NS%_text: var(--%NS%file-field-text, var(--%NS%n12-cocoa, var(--%NS%mat-sys-on-surface-variant)));--%NS%mat-button-outlined-label-text-color: var(--%NS%_accent);--%NS%mat-button-outlined-state-layer-color: var(--%NS%_accent);--%NS%mat-button-outlined-outline-color: var(--%NS%_border)}.file-field[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:16px}.preview[_ngcontent-%COMP%]{appearance:none;position:relative;box-sizing:content-box;width:var(--%NS%file-field-size, 64px);height:var(--%NS%file-field-size, 64px);flex:0 0 var(--%NS%file-field-size, 64px);padding:0;border:0;border-radius:50%;background:transparent;color:var(--%NS%_accent);cursor:pointer;display:grid;place-items:center}.preview-face[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;width:100%;height:100%;border:1px solid var(--%NS%_border);border-radius:50%;overflow:hidden;background:var(--%NS%_surface);display:grid;place-items:center}.preview[_ngcontent-%COMP%]:hover:not(:disabled)   .preview-face[_ngcontent-%COMP%]{border-color:var(--%NS%_accent)}.preview[_ngcontent-%COMP%]:focus-visible   .preview-face[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]:focus   .preview-face[_ngcontent-%COMP%]{border-color:var(--%NS%_accent)}.preview[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.64}.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.initials[_ngcontent-%COMP%]{font-size:calc(var(--%NS%file-field-size, 64px) * .34);font-weight:600;line-height:1;letter-spacing:.02em;color:var(--%NS%n12-cocoa, var(--%NS%_text));text-transform:uppercase;-webkit-user-select:none;user-select:none}.camera-badge[_ngcontent-%COMP%]{position:absolute;right:-2px;bottom:-2px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:var(--%NS%n12-royal-blue, var(--%NS%_accent));color:var(--%NS%n12-parchment, #fff);border:2px solid var(--%NS%n12-parchment, #fff);pointer-events:none}.camera-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--%NS%_accent);outline-offset:2px}.placeholder[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px;opacity:.85}.overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;background:color-mix(in srgb,var(--%NS%_surface) 72%,transparent)}.meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:0}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.hint[_ngcontent-%COMP%]{margin:0;color:var(--%NS%_text);font-size:.9rem;opacity:.85}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`]})};var je=(a,i)=>i.value;function wn(a,i){if(a&1){let e=ND();_i(0,`app-file-field`,33),Nw(1,`async`),oh(`fileChange`,function(n){Fu(e);return ju(PD().onAvatarSelected(n))})(`googlePick`,function(){Fu(e);return ju(PD().onGoogleAvatarPick())}),Qc()}if(a&2){let e=i,t=PD();Kp(`previewUrl`,e.avatar_url??null)(`initials`,t.initialsFromName(e.name))(`loading`,t.avatarUploading())(`googleEnabled`,!!Aw(1,4,t.googleAvatarUrl$))}}function En(a,i){if(a&1){let e=ND();_i(0,`mat-checkbox`,34),oh(`change`,function(n){let r=Fu(e).$implicit;return ju(PD().toggleDuration(r,n.checked))}),fw(1),Qc()}if(a&2){let e=i.$implicit;Kp(`checked`,PD().selectedDurations().includes(e)),gI(),Xc(` `,e,` мин `)}}function Tn(a,i){if(a&1&&(_i(0,`mat-option`,16),fw(1),Qc()),a&2){let e=i.$implicit;Kp(`value`,e),gI(),Xc(``,e,` мин`)}}function Mn(a,i){if(a&1){let e=ND();_i(0,`mat-checkbox`,34),oh(`change`,function(n){let r=Fu(e).$implicit;return ju(PD().toggleCurrency(r,n.checked))}),fw(1),Qc()}if(a&2){let e=i.$implicit;Kp(`checked`,PD().selectedCurrencies().includes(e)),gI(),Xc(` `,e,` `)}}function Nn(a,i){if(a&1&&(_i(0,`mat-option`,16),fw(1),Qc()),a&2){let e=i.$implicit;Kp(`value`,e),gI(),Dh(e)}}function In(a,i){if(a&1){let e=ND();_i(0,`button`,35),oh(`click`,function(){let n=Fu(e).$implicit;return ju(PD().setDefaultColor(`default_lesson_color`,n.value))}),Jp(1,`span`,36),_i(2,`span`,37),fw(3),Qc()()}if(a&2){let e=i.$implicit,t=PD();hh(`selected`,t.colorsEqual(t.form.controls.default_lesson_color.value,e.value)),Yp(`title`,e.nameRu),gI(),ph(`background`,e.value),gI(2),Dh(e.nameRu)}}function Dn(a,i){if(a&1){let e=ND();_i(0,`button`,35),oh(`click`,function(){let n=Fu(e).$implicit;return ju(PD().setDefaultColor(`default_other_color`,n.value))}),Jp(1,`span`,36),_i(2,`span`,37),fw(3),Qc()()}if(a&2){let e=i.$implicit,t=PD();hh(`selected`,t.colorsEqual(t.form.controls.default_other_color.value,e.value)),Yp(`title`,e.nameRu),gI(),ph(`background`,e.value),gI(2),Dh(e.nameRu)}}function An(a,i){if(a&1){let e=ND();_i(0,`button`,35),oh(`click`,function(){let n=Fu(e).$implicit;return ju(PD().setDefaultColor(`default_work_color`,n.value))}),Jp(1,`span`,36),_i(2,`span`,37),fw(3),Qc()()}if(a&2){let e=i.$implicit,t=PD();hh(`selected`,t.colorsEqual(t.form.controls.default_work_color.value,e.value)),Yp(`title`,e.nameRu),gI(),ph(`background`,e.value),gI(2),Dh(e.nameRu)}}function Rn(a,i){if(a&1){let e=ND();_i(0,`p`,18),fw(1),Qc(),_i(2,`form`,38),oh(`ngSubmit`,function(){Fu(e);return ju(PD().saveAccount())}),_i(3,`mat-form-field`,9)(4,`mat-label`),fw(5,`Новый email`),Qc(),Jp(6,`input`,39),nE(),Qc(),_i(7,`mat-form-field`,9)(8,`mat-label`),fw(9,`Новый пароль`),Qc(),Jp(10,`input`,40),nE(),Qc(),_i(11,`mat-form-field`,9)(12,`mat-label`),fw(13,`Повторите пароль`),Qc(),Jp(14,`input`,41),nE(),Qc(),_i(15,`div`,42)(16,`button`,43),fw(17,`Сохранить доступ`),Qc(),_i(18,`button`,44),oh(`click`,function(){Fu(e);return ju(PD().linkGoogle())}),fw(19,` Привязать Google `),Qc()(),_i(20,`p`,18),fw(21,` После привязки Google и пароля один аккаунт открывается и через Google, и через email/пароль. `),Qc()()}if(a&2){let e=PD();gI(),Xc(`Текущий email: `,i.email),gI(),Kp(`formGroup`,e.accountForm),gI(4),oE(),gI(4),oE(),gI(4),oE()}}function Pn(a){let i=(a??``).trim().split(/\s+/).filter(Boolean);return i.length?i.length===1?i[0].slice(0,2).toLocaleUpperCase(`ru-RU`):(i[0][0]+i[i.length-1][0]).toLocaleUpperCase(`ru-RU`):`?`}function Vn(a){return a?a.app_metadata?.provider===`google`?!0:(a.identities??[]).some(i=>i.provider===`google`):!1}function Pi(a){if(!a||!Vn(a))return null;let i=a.user_metadata;return i?.avatar_url||i?.picture||null}function Ae(a){return a?a.slice(0,5):`08:00`}function Vi(a,i){if(a.length!==i.length)return!1;let e=[...a].sort((n,r)=>n-r),t=[...i].sort((n,r)=>n-r);return e.every((n,r)=>n===t[r])}function Oi(a,i){if(a.length!==i.length)return!1;let e=[...a].sort(),t=[...i].sort();return e.every((n,r)=>n===t[r])}var Fi=class a{store=T(Be);fb=T(Sn$2);snackBar=T(Un);auth=T(C);dialog=T(Se);settings$=this.store.select(s);teacher$=this.store.select(R);user$=this.store.select(r);googleAvatarUrl$=this.user$.pipe(le(i=>Pi(i)));avatarUploading=Qo(!1);initialsFromName=Pn;colorsEqual=Kn;studentColors=G$1;otherColors=U$1;workColors=f;allDurations=x;allCurrencies=[..._];selectedDurations=Qo([...x].filter(i=>[40,45,60,120].includes(i)));selectedCurrencies=Qo([..._]);baselineDurations=[];baselineCurrencies=[];listsDirty=Qo(!1);form=this.fb.nonNullable.group({preferred_theme:`light`,work_start:[`08:00`,ue$1.required],work_end:[`22:00`,ue$1.required],is_scrolled:!1,default_duration:[45,ue$1.required],default_currency:[`BYN`,ue$1.required],show_travel_tails_lessons:!0,show_travel_tails_other:!0,show_travel_tails_work:!0,default_lesson_color:this.fb.control(null),default_other_color:this.fb.control(null),default_work_color:this.fb.control(null),default_work_travel_minutes:[30,[ue$1.required,ue$1.min(0)]]});accountForm=this.fb.nonNullable.group({email:[``,ue$1.email],password:[``,ue$1.minLength(6)],passwordConfirm:[``]});constructor(){this.settings$.pipe(no(1)).subscribe(i=>{i&&(this.selectedDurations.set(i.duration_options),this.selectedCurrencies.set(i.enabled_currencies),this.baselineDurations=[...i.duration_options],this.baselineCurrencies=[...i.enabled_currencies],this.form.patchValue({preferred_theme:i.preferred_theme,work_start:Ae(i.work_start),work_end:Ae(i.work_end),is_scrolled:i.is_scrolled,default_duration:i.default_duration,default_currency:i.default_currency,show_travel_tails_lessons:i.show_travel_tails_lessons,show_travel_tails_other:i.show_travel_tails_other,show_travel_tails_work:i.show_travel_tails_work,default_lesson_color:i.default_lesson_color,default_other_color:i.default_other_color,default_work_color:i.default_work_color,default_work_travel_minutes:i.default_work_travel_minutes}),this.form.markAsPristine(),this.listsDirty.set(!1))}),this.user$.pipe(no(1)).subscribe(i=>{i?.email&&this.accountForm.patchValue({email:i.email}),this.accountForm.markAsPristine()})}isDirty(){return this.form.dirty||this.accountForm.dirty||this.listsDirty()}discardChanges(){this.settings$.pipe(no(1)).subscribe(i=>{i&&(this.selectedDurations.set(i.duration_options),this.selectedCurrencies.set(i.enabled_currencies),this.baselineDurations=[...i.duration_options],this.baselineCurrencies=[...i.enabled_currencies],this.form.patchValue({preferred_theme:i.preferred_theme,work_start:Ae(i.work_start),work_end:Ae(i.work_end),is_scrolled:i.is_scrolled,default_duration:i.default_duration,default_currency:i.default_currency,show_travel_tails_lessons:i.show_travel_tails_lessons,show_travel_tails_other:i.show_travel_tails_other,show_travel_tails_work:i.show_travel_tails_work,default_lesson_color:i.default_lesson_color,default_other_color:i.default_other_color,default_work_color:i.default_work_color,default_work_travel_minutes:i.default_work_travel_minutes}),this.form.markAsPristine(),this.listsDirty.set(!1))}),this.user$.pipe(no(1)).subscribe(i=>{this.accountForm.reset({email:i?.email??``,password:``,passwordConfirm:``}),this.accountForm.markAsPristine()})}setDefaultColor(i,e){this.form.controls[i].setValue(e),this.form.controls[i].markAsDirty()}clearDefaultColor(i){this.form.controls[i].setValue(null),this.form.controls[i].markAsDirty()}toggleDuration(i,e){let t=e?[...this.selectedDurations(),i].sort((n,r)=>n-r):this.selectedDurations().filter(n=>n!==i);if(!t.length){this.snackBar.open(`Выберите хотя бы одну длительность`,`OK`,{duration:2500});return}this.selectedDurations.set(t),t.includes(this.form.controls.default_duration.value)||(this.form.controls.default_duration.setValue(t.includes(45)?45:t[0]),this.form.controls.default_duration.markAsDirty()),this.listsDirty.set(!Vi(t,this.baselineDurations)||!Oi(this.selectedCurrencies(),this.baselineCurrencies))}toggleCurrency(i,e){let t=e?[...this.selectedCurrencies(),i]:this.selectedCurrencies().filter(n=>n!==i);if(!t.length){this.snackBar.open(`Выберите хотя бы одну валюту`,`OK`,{duration:2500});return}this.selectedCurrencies.set(t),t.includes(this.form.controls.default_currency.value)||(this.form.controls.default_currency.setValue(t.includes(`BYN`)?`BYN`:t[0]),this.form.controls.default_currency.markAsDirty()),this.listsDirty.set(!Vi(this.selectedDurations(),this.baselineDurations)||!Oi(t,this.baselineCurrencies))}saveSettings(){if(this.form.invalid)return!1;let i=this.form.getRawValue();return this.store.dispatch(n.updateTeacherSettings({update:{preferred_theme:i.preferred_theme,work_start:`${i.work_start}:00+00`,work_end:`${i.work_end}:00+00`,is_scrolled:i.is_scrolled,duration_options:this.selectedDurations(),default_duration:i.default_duration,enabled_currencies:this.selectedCurrencies(),default_currency:i.default_currency,show_travel_tails_lessons:i.show_travel_tails_lessons,show_travel_tails_other:i.show_travel_tails_other,show_travel_tails_work:i.show_travel_tails_work,default_lesson_color:i.default_lesson_color,default_other_color:i.default_other_color,default_work_color:i.default_work_color,default_work_travel_minutes:i.default_work_travel_minutes}})),this.baselineDurations=[...this.selectedDurations()],this.baselineCurrencies=[...this.selectedCurrencies()],this.form.markAsPristine(),this.listsDirty.set(!1),this.accountForm.dirty&&this.saveAccount(),this.snackBar.open(`Настройки сохранены`,`OK`,{duration:2500}),!0}onAvatarSelected(i){this.openAvatarCrop(i)}onGoogleAvatarPick(){this.avatarUploading()||this.user$.pipe(no(1)).subscribe(i=>{let e=Pi(i);if(!i||!e){this.snackBar.open(`Аватар Google недоступен`,`OK`,{duration:3e3});return}this.avatarUploading.set(!0),this.auth.updateTeacher(i.id,{avatar_url:e}).subscribe({next:t=>{this.store.dispatch(n.updateTeacherSuccess({teacher:G(W({},t),{avatar_url:e})})),this.snackBar.open(`Аватар обновлён`,`OK`,{duration:2500}),this.avatarUploading.set(!1)},error:t=>{this.snackBar.open(t?.message??`Не удалось установить аватар Google`,`OK`,{duration:4e3}),this.avatarUploading.set(!1)}})})}openAvatarCrop(i){!i||this.avatarUploading()||this.dialog.open(Ie,{data:i,autoFocus:`dialog`,width:`min(100vw - 32px, 520px)`,maxWidth:`calc(100vw - 24px)`}).afterClosed().pipe(no(1),nn$1(e=>e instanceof File)).subscribe(e=>this.uploadCroppedAvatar(e))}uploadCroppedAvatar(i){this.avatarUploading()||(this.avatarUploading.set(!0),this.auth.uploadAvatar(i).subscribe({next:e=>{this.store.dispatch(n.updateTeacherSuccess({teacher:e})),this.snackBar.open(`Аватар обновлён`,`OK`,{duration:2500}),this.avatarUploading.set(!1)},error:e=>{this.snackBar.open(e?.message??`Не удалось загрузить аватар`,`OK`,{duration:4e3}),this.avatarUploading.set(!1)}}))}saveAccount(){let{email:i,password:e,passwordConfirm:t}=this.accountForm.getRawValue();if(e&&e!==t){this.snackBar.open(`Пароли не совпадают`,`OK`,{duration:3e3});return}this.auth.updateAccount({email:i||void 0,password:e||void 0}).subscribe({next:()=>{this.snackBar.open(`Данные доступа обновлены. Проверьте почту при смене email.`,`OK`,{duration:4e3}),this.accountForm.patchValue({password:``,passwordConfirm:``}),this.accountForm.markAsPristine()},error:n=>this.snackBar.open(n?.message??`Не удалось обновить доступ`,`OK`,{duration:4e3})})}linkGoogle(){this.auth.linkGoogleIdentity().subscribe({next:()=>this.snackBar.open(`Перенаправление на Google…`,`OK`,{duration:2500}),error:i=>this.snackBar.open(i?.message??`Не удалось привязать Google`,`OK`,{duration:4e3})})}static ɵfac=function(e){return new(e||a)};static ɵcmp=GE({type:a,selectors:[[`app-settings`]],decls:107,vars:10,consts:[[1,`settings`,`page`],[1,`toolbar`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`animationDuration`,`0`,1,`tabs`,3,`dynamicHeight`],[`label`,`Аккаунт`],[1,`tab-panel`],[1,`block`],[`accept`,`image/*`,`label`,`Выбрать фото`,`previewLabel`,`Аватар`,`hint`,`JPEG/PNG до ~2 МБ. После выбора — кадрирование. Хранится в Supabase Storage.`,`icon`,`photo_camera`,`cameraBadge`,``,`googleActionLabel`,`Аватар Google`,3,`previewUrl`,`initials`,`loading`,`googleEnabled`],[1,`form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`type`,`time`,`formControlName`,`work_start`],[`matInput`,``,`type`,`time`,`formControlName`,`work_end`],[1,`panel`],[1,`checks`],[3,`checked`],[`formControlName`,`default_duration`],[3,`value`],[`formControlName`,`default_currency`],[1,`hint`],[`formControlName`,`show_travel_tails_lessons`],[`formControlName`,`show_travel_tails_other`],[`formControlName`,`show_travel_tails_work`],[`matInput`,``,`type`,`number`,`min`,`0`,`step`,`5`,`formControlName`,`default_work_travel_minutes`],[1,`color-grid`],[`type`,`button`,1,`swatch-row`,3,`selected`],[`mat-stroked-button`,``,`type`,`button`,1,`clear-color`,3,`click`],[`label`,`Конфиденциальность`],[`label`,`Приложение`],[`formControlName`,`preferred_theme`],[`value`,`light`],[`value`,`dark`],[`value`,`system`],[`formControlName`,`is_scrolled`],[`accept`,`image/*`,`label`,`Выбрать фото`,`previewLabel`,`Аватар`,`hint`,`JPEG/PNG до ~2 МБ. После выбора — кадрирование. Хранится в Supabase Storage.`,`icon`,`photo_camera`,`cameraBadge`,``,`googleActionLabel`,`Аватар Google`,3,`fileChange`,`googlePick`,`previewUrl`,`initials`,`loading`,`googleEnabled`],[3,`change`,`checked`],[`type`,`button`,1,`swatch-row`,3,`click`],[1,`swatch`],[1,`swatch-name`],[1,`form`,3,`ngSubmit`,`formGroup`],[`matInput`,``,`type`,`email`,`formControlName`,`email`],[`matInput`,``,`type`,`password`,`formControlName`,`password`,`autocomplete`,`new-password`],[`matInput`,``,`type`,`password`,`formControlName`,`passwordConfirm`,`autocomplete`,`new-password`],[1,`row`],[`mat-stroked-button`,``,`type`,`submit`],[`mat-stroked-button`,``,`type`,`button`,3,`click`]],template:function(e,t){if(e&1&&(_i(0,`section`,0)(1,`div`,1)(2,`button`,2),oh(`click`,function(){return t.saveSettings()}),fw(3,` Сохранить `),Qc()(),_i(4,`mat-tab-group`,3)(5,`mat-tab`,4)(6,`div`,5)(7,`section`,6)(8,`h2`),fw(9,`Аватар`),Qc(),vD(10,wn,2,6,`app-file-field`,7),Nw(11,`async`),Qc(),_i(12,`form`,8)(13,`mat-form-field`,9)(14,`mat-label`),fw(15,`Начало рабочего дня`),Qc(),Jp(16,`input`,10),nE(),Qc(),_i(17,`mat-form-field`,9)(18,`mat-label`),fw(19,`Конец рабочего дня`),Qc(),Jp(20,`input`,11),nE(),Qc(),_i(21,`mat-expansion-panel`,12)(22,`mat-expansion-panel-header`)(23,`mat-panel-title`),fw(24,`Длительности занятий`),Qc(),_i(25,`mat-panel-description`),fw(26,`Шаг 5 мин · 20–140`),Qc()(),_i(27,`div`,13),wD(28,En,2,2,`mat-checkbox`,14,DD),Qc(),_i(30,`mat-form-field`,9)(31,`mat-label`),fw(32,`По умолчанию`),Qc(),_i(33,`mat-select`,15),wD(34,Tn,2,2,`mat-option`,16,DD),Qc(),nE(),Qc()(),_i(36,`mat-expansion-panel`,12)(37,`mat-expansion-panel-header`)(38,`mat-panel-title`),fw(39,`Валюты`),Qc()(),_i(40,`div`,13),wD(41,Mn,2,2,`mat-checkbox`,14,DD),Qc(),_i(43,`mat-form-field`,9)(44,`mat-label`),fw(45,`Валюта по умолчанию`),Qc(),_i(46,`mat-select`,17),wD(47,Nn,2,2,`mat-option`,16,DD),Qc(),nE(),Qc()(),_i(49,`mat-expansion-panel`,12)(50,`mat-expansion-panel-header`)(51,`mat-panel-title`),fw(52,`Расписание`),Qc(),_i(53,`mat-panel-description`),fw(54,`Travel, цвета, дорога`),Qc()(),_i(55,`p`,18),fw(56,`Рисовать travel-хвосты (только отрисовка, геометрия без изменений)`),Qc(),_i(57,`mat-slide-toggle`,19),fw(58,`Занятия`),Qc(),nE(),_i(59,`mat-slide-toggle`,20),fw(60,`Другое`),Qc(),nE(),_i(61,`mat-slide-toggle`,21),fw(62,`Основная работа`),Qc(),nE(),_i(63,`mat-form-field`,9)(64,`mat-label`),fw(65,`Время до работы по умолчанию, мин`),Qc(),Jp(66,`input`,22),nE(),Qc(),_i(67,`p`,18),fw(68,`Цвет по умолчанию — занятия (студенты)`),Qc(),_i(69,`div`,23),wD(70,In,4,6,`button`,24,je),Qc(),_i(72,`button`,25),oh(`click`,function(){return t.clearDefaultColor(`default_lesson_color`)}),fw(73,` Сбросить цвет занятий `),Qc(),_i(74,`p`,18),fw(75,`Цвет по умолчанию — другое`),Qc(),_i(76,`div`,23),wD(77,Dn,4,6,`button`,24,je),Qc(),_i(79,`button`,25),oh(`click`,function(){return t.clearDefaultColor(`default_other_color`)}),fw(80,` Сбросить цвет «другое» `),Qc(),_i(81,`p`,18),fw(82,`Цвет по умолчанию — основная работа`),Qc(),_i(83,`div`,23),wD(84,An,4,6,`button`,24,je),Qc(),_i(86,`button`,25),oh(`click`,function(){return t.clearDefaultColor(`default_work_color`)}),fw(87,` Сбросить цвет работы `),Qc()()()()(),_i(88,`mat-tab`,26)(89,`div`,5),vD(90,Rn,22,2),Nw(91,`async`),Qc()(),_i(92,`mat-tab`,27)(93,`div`,5)(94,`form`,8)(95,`mat-form-field`,9)(96,`mat-label`),fw(97,`Тема`),Qc(),_i(98,`mat-select`,28)(99,`mat-option`,29),fw(100,`Светлая`),Qc(),_i(101,`mat-option`,30),fw(102,`Тёмная`),Qc(),_i(103,`mat-option`,31),fw(104,`Системная`),Qc()(),nE(),Qc(),_i(105,`mat-slide-toggle`,32),fw(106,` Прокручивать к текущему времени `),Qc(),nE(),Qc()()()()()),e&2){let n,r;gI(2),Kp(`disabled`,!t.isDirty()||t.form.invalid),gI(2),Kp(`dynamicHeight`,!0),gI(6),ID((n=Aw(11,6,t.teacher$))?10:-1,n),gI(2),Kp(`formGroup`,t.form),gI(4),oE(),gI(4),oE(),gI(8),CD(t.allDurations),gI(5),oE(),gI(),CD(t.selectedDurations()),gI(7),CD(t.allCurrencies),gI(5),oE(),gI(),CD(t.selectedCurrencies()),gI(10),oE(),gI(2),oE(),gI(2),oE(),gI(5),oE(),gI(4),CD(t.studentColors),gI(7),CD(t.otherColors),gI(7),CD(t.workColors),gI(6),ID((r=Aw(91,8,t.user$))?90:-1,r),gI(4),Kp(`formGroup`,t.form),gI(4),oE(),gI(7),oE()}},dependencies:[In$2,Nn$1,We$2,Yt,En$1,Fn,Rt,sn$1,nn$2,Kt,Pe,$,Lt,Nt,ge,Tt,jt,Be$1,Pe$1,we,te,pe,ce,Ti,We,ki,Ei,wi,cn,ke,dn$1,De,On],styles:[`.settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;max-width:640px}.toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.tab-panel[_ngcontent-%COMP%]{padding-top:16px;display:flex;flex-direction:column;gap:16px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.panel[_ngcontent-%COMP%]{margin:4px 0;background:var(--%NS%n12-parchment)}.checks[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:4px 8px;margin-bottom:12px;max-height:220px;overflow:auto}.block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;font-size:14px;color:var(--%NS%n12-cocoa)}.hint[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--%NS%n12-cocoa);font-size:14px;opacity:.85}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.color-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;max-height:220px;overflow:auto;margin:0 0 8px}.swatch-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;border:1px solid var(--%NS%ht-glass-border);border-radius:var(--%NS%ht-glass-radius);background:color-mix(in srgb,var(--%NS%ht-apple-secondary-bg) 15%,transparent);box-shadow:var(--%NS%ht-glass-inset);padding:6px 10px;cursor:pointer;font:inherit;font-size:14px;color:var(--%NS%ht-apple-label);text-align:left}.swatch-row.selected[_ngcontent-%COMP%]{outline:2px solid var(--%NS%n12-royal-blue);outline-offset:1px}.swatch[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;flex:none;border:1px solid color-mix(in srgb,#000 12%,transparent)}.swatch-name[_ngcontent-%COMP%]{flex:1;min-width:0}.clear-color[_ngcontent-%COMP%]{margin:0 0 16px;align-self:flex-start}mat-slide-toggle[_ngcontent-%COMP%]{display:block;margin:0 0 8px}`]})};export{Fi as SettingsComponent};