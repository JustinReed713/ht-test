import{$n as ih,An as bh,Ar as qD,Bn as em,Br as th,Bt as Th,C as Dh,Dt as QE,E as ED,Er as pi,F as G1,Fr as qv,G as ID,Gn as gI,Gr as uE,H as H1,Hn as es,Hr as tm,I as GE,Kt as V1,Lr as sd,M as Fw,Nn as ch,O as Fg,Or as pr$1,Ot as Qc,P as G$1,Pn as cy,Pr as qp,Pt as Re,Qr as ve,Qt as W,Rr as se,Rt as Sr$1,S as DD,Sn as _i$1,Sr as oE,T as Dw,Tn as ah,Tr as ph,Ut as Tw,Wn as fw,Wr as tw,X as Jp,Xr as vD,Yn as hh,Yr as uu,Yt as Vi$1,Z as KE,_ as CD,_r as nh,ai as yw,ar as ju,br as no$1,cn as Xp,dn as Yc,dr as le,dt as My,ei as wD,en as We,er as j,ft as ND,gn as Zc,gr as nE,h as BD,ht as Nr$1,j as Fu,jt as Qo,kr as q1,l as A,mn as Yu,mr as mw,n as $D,nr as jD,nt as Kp,oi as z,on as Xc,ot as Lh,pn as Yp,qt as VD,rn as Wp,rt as Ku,s as $p,si as z1,ti as wh,u as Ae,ui as zh,un as Ya$1,ur as kw,vt as Ol,wn as _o$1,wr as oh,x as Cw,xt as PD,y as Cr$1,yr as nn,zt as T}from"./chunk-DoCXw7pv.js";import{t as F}from"./chunk-JnLRtYd3.js";import{r as Mn}from"./chunk-C9CFYGkc.js";import{I as _n,K as it$1,W as gr$1,Z as ln,_ as Or$1,at as qe,bt as yr$1,c as Gr$1,d as Ke,g as Mn$1,gt as v,h as M,j as Ya$2,m as La$1,nt as nt$1,o as Ee,p as L,q as jn,st as qn,t as Aa$1,tt as nr$1,w as Ua}from"./chunk-C0ZjEuHg.js";import{A as st,O as ot$1,S as ct,d as Mt$1,g as X$1,l as K,p as U,x as bt,y as _t}from"./chunk-CQ5xnXRW.js";import{A as Yt,C as bt$1,D as Pe,Dt as me$1,M as jt$1,N as st$1,P as xt$1,Pt as q,S as Tt,Tt as hn,W as A$1,_t as Re$1,b as xn,c as An,ct as $t,d as Kn,dt as It,g as Xn,h as W$1,ht as Ne,j as Zt,jt as yt,kt as ri,l as Dn,mt as Lt,o as wt,ot as $,p as Sn,pt as L$1,s as yt$1,u as Dt$1,v as kn,vt as Ut,w as jt,wt as ge,x as Lt$1,y as me$2,yt as Xt$1}from"./main-G4VUGM5X.js";import{i as Pe$1,o as gt,r as Kt,s as ht,t as $$1}from"./chunk-LbXVbZQ-.js";import{_ as pt,a as In,b as y,d as Y,f as Yt$1,g as nn$1,h as gt$1,i as G$2,l as Sn$1,m as c,n as En,o as Jt,r as Fn,s as Nn,u as We$1,v as sn,y as ue}from"./chunk-B9TYi4gO.js";import{n as Pe$2,r as Y$1,t as Be}from"./chunk-CIEysTKn.js";import{t as I}from"./chunk-Blreb5id.js";import{n as bt$2,r as nt$2,t as Dt$2}from"./chunk-CCIG2_6y.js";import{n as we,t as te}from"./chunk-MBMvXK72.js";import{n as Nt,t as Lt$2}from"./chunk-B4KbjSxV.js";function Ko(n){return{width:n?`480px`:`70vw`,maxWidth:`96vw`,maxHeight:`90vh`}}function $o(n,r={}){let a=r,{scrollStrategy:e}=a;return G$1(W({restoreFocus:!0,enterAnimationDuration:`250ms`,exitAnimationDuration:`200ms`},zh(a,[`scrollStrategy`])),{disableClose:!1})}function ar(n,r){return this._trackRow(r)}var mi=(n,r)=>r.id;function nr(n,r){if(n&1&&(Zc(0,`tr`,0)(1,`td`,3),fw(2),Yc()()),n&2){let e=PD();gI(),ph(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Yp(`colspan`,e.numCols),gI(),Xc(` `,e.label,` `)}}function ir(n,r){if(n&1&&(Zc(0,`td`,3),fw(1),Yc()),n&2){let e=PD(2);ph(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Yp(`colspan`,e._firstRowOffset),gI(),Xc(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function rr(n,r){if(n&1){let e=ND();Zc(0,`td`,6)(1,`button`,7),ih(`click`,function(a){let i=Fu(e).$implicit;return ju(PD(2)._cellClicked(i,a))})(`focus`,function(a){let i=Fu(e).$implicit;return ju(PD(2)._emitActiveDateChange(i,a))}),Zc(2,`span`,8),fw(3),Yc(),Xp(4,`span`,9),Yc()()}if(n&2){let e=r.$implicit,t=r.$index,a=PD().$index,i=PD();ph(`width`,i._cellWidth)(`padding-top`,i._cellPadding)(`padding-bottom`,i._cellPadding),Yp(`data-mat-row`,a)(`data-mat-col`,t),gI(),tw(e.cssClasses),hh(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,i._isActiveCell(a,t))(`mat-calendar-body-range-start`,i._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,i._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,i._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,i._isComparisonBridgeStart(e.compareValue,a,t))(`mat-calendar-body-comparison-bridge-end`,i._isComparisonBridgeEnd(e.compareValue,a,t))(`mat-calendar-body-comparison-start`,i._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,i._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,i._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,i._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,i._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,i._isInPreview(e.compareValue)),nh(`tabIndex`,i._isActiveCell(a,t)?0:-1),Yp(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,i._isSelected(e.compareValue))(`aria-current`,i.todayValue===e.compareValue?`date`:null)(`aria-describedby`,i._getDescribedby(e.compareValue)),gI(),hh(`mat-calendar-body-selected`,i._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,i._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,i.todayValue===e.compareValue),gI(),Xc(` `,e.displayValue,` `)}}function or(n,r){if(n&1&&(Zc(0,`tr`,1),vD(1,ir,2,6,`td`,4),wD(2,rr,5,49,`td`,5,mi),Yc()),n&2){let e=r.$implicit,t=r.$index,a=PD();gI(),ID(t===0&&a._firstRowOffset?1:-1),gI(),CD(e)}}function sr(n,r){if(n&1&&(_i$1(0,`th`,2)(1,`span`,6),fw(2),Qc(),_i$1(3,`span`,3),fw(4),Qc()()),n&2){let e=r.$implicit;gI(2),Dh(e.long),gI(2),Dh(e.narrow)}}var lr=[`*`];function dr(n,r){}function cr(n,r){if(n&1){let e=ND();_i$1(0,`mat-month-view`,4),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`_userSelection`,function(a){Fu(e);return ju(PD()._dateSelected(a))})(`dragStarted`,function(a){Fu(e);return ju(PD()._dragStarted(a))})(`dragEnded`,function(a){Fu(e);return ju(PD()._dragEnded(a))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function ur(n,r){if(n&1){let e=ND();_i$1(0,`mat-year-view`,5),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`monthSelected`,function(a){Fu(e);return ju(PD()._monthSelectedInYearView(a))})(`selectedChange`,function(a){Fu(e);return ju(PD()._goToDateInView(a,`month`))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function pr(n,r){if(n&1){let e=ND();_i$1(0,`mat-multi-year-view`,6),bh(`activeDateChange`,function(a){Fu(e);let i=PD();return mw(i.activeDate,a)||(i.activeDate=a),ju(a)}),oh(`yearSelected`,function(a){Fu(e);return ju(PD()._yearSelectedInMultiYearView(a))})(`selectedChange`,function(a){Fu(e);return ju(PD()._goToDateInView(a,`year`))}),Qc()}if(n&2){let e=PD();Th(`activeDate`,e.activeDate),Kp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function mr(n,r){}var hr=[`button`];var _r=[[[``,`matDatepickerToggleIcon`,``]]];var gr=[`[matDatepickerToggleIcon]`];function fr(n,r){n&1&&(Yu(),_i$1(0,`svg`,2),Jp(1,`path`,3),Qc())}var it=(()=>{class n{changes=new z;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Sr$1({token:n,factory:n.ɵfac})}return n})();var br=0;var St=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=br++;cssClasses;constructor(r,e,t,a,i,o=r,u){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=u,this.cssClasses=i instanceof Set?Array.from(i):i}};var vr={passive:!1,capture:!0};var Xt={passive:!0,capture:!0};var oi={passive:!0};var nt=(()=>{class n{_elementRef=T(Nr$1);_ngZone=T(Re);_platform=T(v);_intl=T(it);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new We;previewChange=new We;activeDateChange=new We;dragStarted=new We;dragEnded=new We;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=T(ve);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=T(Ya$1),t=T(it$1);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),T(L).load(Ua),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,`touchmove`,this._touchmoveHandler,vr),e.listen(a,`mouseenter`,this._enterHandler,Xt),e.listen(a,`focus`,this._enterHandler,Xt),e.listen(a,`mouseleave`,this._leaveHandler,Xt),e.listen(a,`blur`,this._leaveHandler,Xt),e.listen(a,`mousedown`,this._mousedownHandler,oi),e.listen(a,`touchstart`,this._mousedownHandler,oi)];this._platform.isBrowser&&i.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){qv(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return xa(e,this.startValue,this.endValue)}_isRangeEnd(e){return Aa(e,this.startValue,this.endValue)}_isInRange(e){return Ea(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return xa(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let o=this.rows[t-1];i=o&&o[o.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let o=this.rows[t+1];i=o&&o[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return Aa(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ea(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return xa(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Aa(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ea(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=si(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),ka(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=ka(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=si(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=ka(e);if(t){let a=t.getAttribute(`data-mat-row`),i=t.getAttribute(`data-mat-col`);if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[cy],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(t,a){t&1&&(vD(0,nr,3,6,`tr`,0),wD(1,or,4,1,`tr`,1,ar,!0),Zc(3,`span`,2),fw(4),Yc(),Zc(5,`span`,2),fw(6),Yc(),Zc(7,`span`,2),fw(8),Yc(),Zc(9,`span`,2),fw(10),Yc()),t&2&&(ID(a._firstRowOffset<a.labelMinRequiredCells?0:-1),gI(),CD(a.rows),gI(2),nh(`id`,a._startDateLabelId),gI(),Xc(` `,a.startDateAccessibleName,`
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
`],encapsulation:2})}return n})();function wa(n){return n?.nodeName===`TD`}function ka(n){let r;return wa(n)?r=n:wa(n.parentNode)?r=n.parentNode:wa(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute(`data-mat-row`)!=null?r:null}function xa(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Aa(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Ea(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function si(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var X=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}};var Mt=(()=>{class n{selection;_adapter;_selectionChanged=new z;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){uE()};static ɵprov=se({token:n,factory:n.ɵfac})}return n})();var yr=(()=>{class n extends Mt{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||n)(Ae(st$1))};static ɵprov=se({token:n,factory:n.ɵfac})}return n})();var hi={provide:Mt,useFactory:()=>T(Mt,{optional:!0,skipSelf:!0})||new yr(T(st$1))};var _i=new A(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var Ia=7;var Dr=0;var li=(()=>{class n{_changeDetectorRef=T(q1);_dateFormats=T(Zt,{optional:!0});_dateAdapter=T(st$1,{optional:!0});_dir=T(Or$1,{optional:!0});_rangeStrategy=T(_i,{optional:!0});_rerenderSubscription=j.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new We;_userSelection=new We;dragStarted=new We;dragEnded=new We;activeDateChange=new We;_matCalendarBody;_monthLabel=Qo(``);_weeks=Qo([]);_firstWeekOffset=Qo(0);_rangeStart=Qo(null);_rangeEnd=Qo(null);_comparisonRangeStart=Qo(null);_comparisonRangeEnd=Qo(null);_previewStart=Qo(null);_previewEnd=Qo(null);_isRange=Qo(!1);_todayDate=Qo(null);_weekdays=Qo([]);constructor(){T(L).load(Ee),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,o;this._selected instanceof X?(i=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):i=o=this._getDateInCurrentMonth(this._selected),(i!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!jn(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ia+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ia),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),i=this._dateAdapter.getDayOfWeekNames(`long`).map((o,u)=>({long:o,narrow:t[u],id:Dr++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,o=this._firstWeekOffset();i<e;i++,o++){o==Ia&&(a.push([]),o=0);let u=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),b=this._shouldEnableDate(u),f=this._dateAdapter.format(u,this._dateFormats.display.dateA11yLabel),m=this.dateClass?this.dateClass(u,`month`):void 0;a[a.length-1].push(new St(i+1,t[i],f,b,m,this._getCellCompareValue(u),u))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof X?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-month-view`]],viewQuery:function(t,a){if(t&1&&ch(nt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[cy],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),wD(3,sr,5,2,`th`,2,mi),Qc(),_i$1(5,`tr`,3),Jp(6,`th`,4),Qc()(),_i$1(7,`tbody`,5),oh(`selectedValueChange`,function(o){return a._dateSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`previewChange`,function(o){return a._previewChanged(o)})(`dragStarted`,function(o){return a.dragStarted.emit(o)})(`dragEnded`,function(o){return a._dragEnded(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(3),CD(a._weekdays()),gI(4),Kp(`label`,a._monthLabel())(`rows`,a._weeks())(`todayValue`,a._todayDate())(`startValue`,a._rangeStart())(`endValue`,a._rangeEnd())(`comparisonStart`,a._comparisonRangeStart())(`comparisonEnd`,a._comparisonRangeEnd())(`previewStart`,a._previewStart())(`previewEnd`,a._previewEnd())(`isRange`,a._isRange())(`labelMinRequiredCells`,3)(`activeCell`,a._dateAdapter.getDate(a.activeDate)-1)(`startDateAccessibleName`,a.startDateAccessibleName)(`endDateAccessibleName`,a.endDateAccessibleName))},dependencies:[nt],encapsulation:2})}return n})();var Q=24;var Na=4;var di=(()=>{class n{_changeDetectorRef=T(q1);_dateAdapter=T(st$1,{optional:!0});_dir=T(Or$1,{optional:!0});_rerenderSubscription=j.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),gi(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new We;yearSelected=new We;activeDateChange=new We;_matCalendarBody;_years=Qo([]);_todayYear=Qo(0);_selectedYear=Qo(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Dt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,o=[];i<Q;i++)o.push(t+i),o.length==Na&&(a.push(o.map(u=>this._createCellForYear(u))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Na);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Na);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Dt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Q-Dt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Q*10:-Q);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Q*10:Q);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Dt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new St(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof X){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,a){if(t&1&&ch(nt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Jp(3,`th`,2),Qc()(),_i$1(4,`tbody`,3),oh(`selectedValueChange`,function(o){return a._yearSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(4),Kp(`rows`,a._years())(`todayValue`,a._todayYear())(`startValue`,a._selectedYear())(`endValue`,a._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._getActiveCell()))},dependencies:[nt],encapsulation:2})}return n})();function gi(n,r,e,t,a){let i=n.getYear(r),o=n.getYear(e),u=fi(n,t,a);return Math.floor((i-u)/Q)===Math.floor((o-u)/Q)}function Dt(n,r,e,t){return Cr(n.getYear(r)-fi(n,e,t),Q)}function fi(n,r,e){let t=0;return e?t=n.getYear(e)-Q+1:r&&(t=n.getYear(r)),t}function Cr(n,r){return(n%r+r)%r}var ci=(()=>{class n{_changeDetectorRef=T(q1);_dateFormats=T(Zt,{optional:!0});_dateAdapter=T(st$1,{optional:!0});_dir=T(Or$1,{optional:!0});_rerenderSubscription=j.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new We;monthSelected=new We;activeDateChange=new We;_matCalendarBody;_months=Qo([]);_yearLabel=Qo(``);_todayMonth=Qo(null);_selectedMonth=Qo(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(em(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,`year`):void 0;return new St(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof X?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-year-view`]],viewQuery:function(t,a){if(t&1&&ch(nt,5),t&2){let i;BD(i=$D())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(_i$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Jp(3,`th`,2),Qc()(),_i$1(4,`tbody`,3),oh(`selectedValueChange`,function(o){return a._monthSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),Qc()()),t&2&&(gI(4),Kp(`label`,a._yearLabel())(`rows`,a._months())(`todayValue`,a._todayMonth())(`startValue`,a._selectedMonth())(`endValue`,a._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._dateAdapter.getMonth(a.activeDate)))},dependencies:[nt],encapsulation:2})}return n})();var bi=(()=>{class n{_intl=T(it);calendar=T(Va);_dateAdapter=T(st$1,{optional:!0});_dateFormats=T(Zt,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){T(L).load(Ee);let e=T(q1);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-Q))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:Q))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):gi(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Dt(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+Q-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1))]}_periodButtonLabelId=T(it$1).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:lr,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(t,a){t&1&&(jD(),_i$1(0,`div`,0)(1,`div`,1)(2,`span`,2),fw(3),Qc(),_i$1(4,`button`,3),oh(`click`,function(){return a.currentPeriodClicked()}),_i$1(5,`span`,4),fw(6),Qc(),Yu(),_i$1(7,`svg`,5),Jp(8,`polygon`,6),Qc()(),Ku(),Jp(9,`div`,7),VD(10),_i$1(11,`button`,8),oh(`click`,function(){return a.previousClicked()}),Yu(),_i$1(12,`svg`,9),Jp(13,`path`,10),Qc()(),Ku(),_i$1(14,`button`,11),oh(`click`,function(){return a.nextClicked()}),Yu(),_i$1(15,`svg`,9),Jp(16,`path`,12),Qc()()()()),t&2&&(gI(2),Kp(`id`,a._periodButtonLabelId),gI(),Dh(a.periodButtonDescription),gI(),Yp(`aria-label`,a.periodButtonLabel)(`aria-describedby`,a._periodButtonLabelId),gI(2),Dh(a.periodButtonText),gI(),hh(`mat-calendar-invert`,a.calendar.currentView!==`month`),gI(4),Kp(`disabled`,!a.previousEnabled())(`matTooltip`,a.prevButtonLabel),Yp(`aria-label`,a.prevButtonLabel),gI(3),Kp(`disabled`,!a.nextEnabled())(`matTooltip`,a.nextButtonLabel),Yp(`aria-label`,a.nextButtonLabel))},dependencies:[jt,bt$1,xt$1],encapsulation:2})}return n})();var Va=(()=>{class n{_dateAdapter=T(st$1,{optional:!0});_dateFormats=T(Zt,{optional:!0});_changeDetectorRef=T(q1);_elementRef=T(Nr$1);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new We;yearSelected=new We;monthSelected=new We;viewChanged=new We(!0);_userSelection=new We;_userDragDrop=new We;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new z;constructor(){this._intlChanges=T(it).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Lt(this.headerComponent||bi),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(qe())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof X||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-calendar`]],viewQuery:function(t,a){if(t&1&&ch(li,5)(ci,5)(di,5),t&2){let i;BD(i=$D())&&(a.monthView=i.first),BD(i=$D())&&(a.yearView=i.first),BD(i=$D())&&(a.multiYearView=i.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[Dw([hi]),cy],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(t,a){if(t&1&&(qp(0,dr,0,0,`ng-template`,0),_i$1(1,`div`,1),vD(2,cr,1,11,`mat-month-view`,2)(3,ur,1,6,`mat-year-view`,3)(4,pr,1,6,`mat-multi-year-view`,3),Qc()),t&2){let i;Kp(`cdkPortalOutlet`,a._calendarHeaderPortal),gI(2),ID((i=a.currentView)===`month`?2:i===`year`?3:i===`multi-year`?4:-1)}},dependencies:[hn,nr$1,li,ci,di],styles:[`.mat-calendar {
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
`],encapsulation:2})}return n})();var Sr=new A(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(ve);return()=>Xt$1(n)}});var vi=(()=>{class n{_elementRef=T(Nr$1);_animationsDisabled=_n();_changeDetectorRef=T(q1);_globalModel=T(Mt);_dateAdapter=T(st$1);_ngZone=T(Re);_rangeSelectionStrategy=T(_i,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new z;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(T(L).load(Ee),this._closeButtonText=T(it).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=T(Ya$1);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof X;if(i&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-datepicker-content`]],viewQuery:function(t,a){if(t&1&&ch(Va,5),t&2){let i;BD(i=$D())&&(a._calendar=i.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(t,a){t&2&&(tw(a.color?`mat-`+a.color:``),hh(`mat-datepicker-content-touch`,a.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!a._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(t,a){t&1&&(_i$1(0,`div`,0)(1,`mat-calendar`,1),oh(`yearSelected`,function(o){return a.datepicker._selectYear(o)})(`monthSelected`,function(o){return a.datepicker._selectMonth(o)})(`viewChanged`,function(o){return a.datepicker._viewChanged(o)})(`_userSelection`,function(o){return a._handleUserSelection(o)})(`_userDragDrop`,function(o){return a._handleUserDragDrop(o)}),Qc(),qp(2,mr,0,0,`ng-template`,2),_i$1(3,`button`,3),oh(`focus`,function(){return a._closeButtonFocused=!0})(`blur`,function(){return a._closeButtonFocused=!1})(`click`,function(){return a.datepicker.close()}),fw(4),Qc()()),t&2&&(hh(`mat-datepicker-content-container-with-custom-header`,a.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,a._actionsPortal),Yp(`aria-modal`,!0)(`aria-labelledby`,a._dialogLabelId??void 0),gI(),tw(a.datepicker.panelClass),Kp(`id`,a.datepicker.id)(`startAt`,a.datepicker.startAt)(`startView`,a.datepicker.startView)(`minDate`,a.datepicker._getMinDate())(`maxDate`,a.datepicker._getMaxDate())(`dateFilter`,a.datepicker._getDateFilter())(`headerComponent`,a.datepicker.calendarHeaderComponent)(`selected`,a._getSelected())(`dateClass`,a.datepicker.dateClass)(`comparisonStart`,a.comparisonStart)(`comparisonEnd`,a.comparisonEnd)(`startDateAccessibleName`,a.startDateAccessibleName)(`endDateAccessibleName`,a.endDateAccessibleName),gI(),Kp(`cdkPortalOutlet`,a._actionsPortal),gI(),hh(`cdk-visually-hidden`,!a._closeButtonFocused),Kp(`color`,a.color||`primary`),gI(),Dh(a._closeButtonText))},dependencies:[gr$1,Va,hn,jt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return n})();var ui=(()=>{class n{_injector=T(ve);_viewContainerRef=T(Vi$1);_dateAdapter=T(st$1,{optional:!0});_dir=T(Or$1,{optional:!0});_model=T(Mt);_animationsDisabled=_n();_scrollStrategy=T(Sr);_inputStateChanges=j.EMPTY;_document=T(pr$1);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new We;monthSelected=new We;viewChanged=new We(!0);dateClass;openedStream=new We;closedStream=new We;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Aa$1(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=T(it$1).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new z;_changeDetectorRef=T(q1);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof yt&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=qe(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe(no$1(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||i.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Lt(vi,this._viewContainerRef),a=this._overlayRef=$t(this._injector,new $({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?Re$1(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close()}),a.keydownEvents().subscribe(i=>{let o=i.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&i.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||qv(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ne(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ut(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,a=t===`start`?`end`:`start`,i=this.yPosition===`above`?`bottom`:`top`,o=i===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=[`ctrlKey`,`shiftKey`,`metaKey`];return Fg(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(nn(a=>a.keyCode===27&&!jn(a)||this.datepickerInput&&jn(a,`altKey`)&&a.keyCode===38&&t.every(i=>!jn(a,i)))))}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,G1],disabled:[2,`disabled`,`disabled`,G1],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,G1],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,G1]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[cy]})}return n})();var yi=(()=>{class n extends ui{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵcmp=GE({type:n,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[Dw([hi,{provide:ui,useExisting:n}]),$p],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return n})();var at=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}};var Mr=(()=>{class n{_elementRef=T(Nr$1);_dateAdapter=T(st$1,{optional:!0});_dateFormats=T(Zt,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new We;dateInput=new We;stateChanges=new z;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=j.EMPTY;_localeSubscription=j.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new at(this,this._elementRef.nativeElement)),this.dateChange.emit(new at(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){wr(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){jn(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(i=>!jn(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let o=!this._dateAdapter.sameDate(i,this.value);!i||o?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(i),this.dateInput.emit(new at(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new at(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):``}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,G1]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[cy]})}return n})();function wr(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(r.isDateInstance(a)&&r.isDateInstance(i)){if(!r.sameDate(a,i))return!0}else return!0}return!1}var kr={provide:Y,useExisting:_o$1(()=>aa),multi:!0};var xr={provide:y,useExisting:_o$1(()=>aa),multi:!0};var aa=(()=>{class n extends Mr{_formField=T(gt,{optional:!0});_closedSubscription=j.EMPTY;_openedSubscription=j.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=Qo(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=ue.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function(t,a){t&1&&oh(`input`,function(o){return a._onInput(o)})(`change`,function(){return a._onChange()})(`blur`,function(){return a._onBlur()})(`keydown`,function(o){return a._onKeydown(o)}),t&2&&(nh(`disabled`,a.disabled),Yp(`aria-haspopup`,a._datepicker?`dialog`:null)(`aria-owns`,a._ariaOwns())(`min`,a.min?a._dateAdapter.toIso8601(a.min):null)(`max`,a.max?a._dateAdapter.toIso8601(a.max):null)(`data-mat-calendar`,a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[Dw([kr,xr,{provide:Y$1,useExisting:n}]),$p]})}return n})();var Ar=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return n})();var Oa=(()=>{class n{_intl=T(it);_changeDetectorRef=T(q1);_stateChanges=j.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=T(new Lh(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:es(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:es(),a=this.datepicker?Fg(this.datepicker.openedStream,this.datepicker.closedStream):es();this._stateChanges.unsubscribe(),this._stateChanges=Fg(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(t,a,i){if(t&1&&ah(i,Ar,5),t&2){let o;BD(o=$D())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&ch(hr,5),t&2){let i;BD(i=$D())&&(a._button=i.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(t,a){t&1&&oh(`click`,function(o){return a._open(o)}),t&2&&(Yp(`tabindex`,null)(`data-mat-calendar`,a.datepicker?a.datepicker.id:null),hh(`mat-datepicker-toggle-active`,a.datepicker&&a.datepicker.opened)(`mat-accent`,a.datepicker&&a.datepicker.color===`accent`)(`mat-warn`,a.datepicker&&a.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,G1],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[cy],ngContentSelectors:gr,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(t,a){t&1&&(jD(_r),_i$1(0,`button`,1,0),vD(2,fr,2,0,`:svg:svg`,2),VD(3),Qc()),t&2&&(Kp(`tabIndex`,a.disabled?-1:a.tabIndex)(`disabled`,a.disabled)(`disableRipple`,a.disableRipple),Yp(`aria-haspopup`,a.datepicker?`dialog`:null)(`aria-label`,a.ariaLabel||a._intl.openCalendarLabel)(`aria-expanded`,a.datepicker?a.datepicker.opened:null),gI(2),ID(a._customIcon?-1:2))},dependencies:[bt$1],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return n})();var na=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({providers:[it],imports:[Tt,ri,yr$1,me$1,vi,Oa,bi,qn,It]})}return n})();function rt(n,r){let e=n.getTime();return{startMs:e,endMs:e+r*6e4}}function Fe(n,r){return n===`away`?Math.max(0,r):0}function Ir(n,r){let e=n.kind===r.kind,t=n.location===r.location;if(e&&t)return 0;if(!t){let a=Fe(n.location,n.travelMinutes),i=Fe(r.location,r.travelMinutes);return Math.max(a,i)*6e4}return n.location===`home`&&r.location===`home`?0:5*6e4}function Di(n,r){let e=n.kind===r.kind,t=n.location===r.location,a=Fe(n.location,n.travelMinutes),i=Fe(r.location,r.travelMinutes);if(e&&t||!t)return Math.max(a,i);if(n.location===`home`&&r.location===`home`)return 0;let o=a+i;return Math.min(Math.max(5,o),o||5)}function Nr(n,r){return n.startMs<r.endMs&&n.endMs>r.startMs}function Ci(n,r){for(let e of r){if(e.id===n.id)continue;if(Nr(n,e))return!0;let t=n.endMs<=e.startMs?n:e.endMs<=n.startMs?e:null,a=t===n?e:t===e?n:null;if(!t||!a){if(n.startMs<e.endMs&&n.endMs>e.startMs)return!0;continue}if(a.startMs-t.endMs<Ir(t,a))return!0}return!1}function Si(n){let r=n.filter(i=>i.kind===`work`).slice().sort((i,o)=>i.startMs-o.startMs),e=n.filter(i=>i.kind!==`work`);if(r.length===0)return n;let t=[],a=W({},r[0]);for(let i=1;i<r.length;i++){let o=r[i];o.location===a.location&&o.startMs===a.endMs?a=G$1(W({},a),{endMs:o.endMs,travelMinutes:Math.max(a.travelMinutes,o.travelMinutes),id:`${a.id}+${o.id}`}):(t.push(a),a=W({},o))}return t.push(a),[...e,...t]}function ia(n,r,e,t,a,i,o){return G$1(W({},rt(e,t)),{id:n,kind:r,location:a,travelMinutes:i,label:o})}function Vr(n){return n.id==null||n.kind==null||n.location==null?null:{id:n.id,kind:n.kind,startMs:n.startMs,endMs:n.endMs,location:n.location,travelMinutes:n.travelMinutes??0}}function Os(n,r,e,t,a=[]){let i=new Date(n);i.setHours(0,0,0,0);let o=new Date(i);o.setDate(o.getDate()+1);let u=i.getTime(),b=o.getTime(),f=[];for(let m of r){if(m.type===`cancelled`||m.type===`missed`||m.id===t)continue;let C=rt(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=b||f.push(G$1(W({},C),{id:m.id,kind:`lesson`,location:m.location,travelMinutes:m.travel_minutes,label:m.student_name}))}for(let m of e){if(m.id===t)continue;let C=rt(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=b||f.push(G$1(W({},C),{id:m.id,kind:`event`,location:m.location,travelMinutes:m.travel_minutes,label:m.title}))}for(let m of a){if(m.id===t)continue;let C=rt(new Date(m.scheduled_at),m.duration_minutes);C.endMs<=u||C.startMs>=b||f.push(G$1(W({},C),{id:m.id,kind:`work`,location:m.location,travelMinutes:m.travel_minutes,label:m.title}))}return f}function Mi(n){return n.getHours()*60+n.getMinutes()}function Ra(n){let{startMs:r,endMs:e}=rt(n.start,n.durationMinutes);if(n.workStartMin!=null&&n.workEndMin!=null){let o=Mi(new Date(r)),u=Mi(new Date(e));if(new Date(e).getDate()!==new Date(r).getDate()||o<n.workStartMin||u>n.workEndMin)return!1}return!Ci({id:n.excludeId??`__candidate__`,kind:n.kind??`lesson`,startMs:r,endMs:e,location:n.location,travelMinutes:n.travelMinutes},Si(n.ranges.filter(o=>o.id!==n.excludeId).map(Vr).filter(o=>o!=null)))}function xt(n,r,e,t,a,i=0,o=i>0?`away`:`home`,u,b,f=`lesson`,m){let g=new Date(r);return g.setHours(Number(e),Number(t),0,0),!Ra({start:g,durationMinutes:a,location:o,travelMinutes:i,ranges:n,workStartMin:u,workEndMin:b,kind:f,excludeId:m})}function Tr(n,r,e,t,a,i,o,u,b,f=`lesson`,m){return!xt(o,n,r,e,t,i,a,u,b,f,m)}function wi(n,r,e,t,a,i,o,u,b=_t,f=`lesson`,m){return b.every(g=>xt(i,n,r,g,e,a,t,o,u,f,m))}function ki(n,r,e,t,a,i,o,u,b=_t,f=`lesson`,m){return b.find(g=>!xt(i,n,r,g,e,a,t,o,u,f,m))??null}function Rs(n,r,e,t,a,i,o,u,b=`lesson`,f){let[m=`00`,g=`00`]=r.split(`:`),C=m.padStart(2,`0`),D=Number(g)||0;return _t.filter(Se=>{let Me=Number(Se);return Me>=D&&Me<D+30}).some(Se=>Tr(n,C,Se,e,t,a,i,o,u,b,f))}function xi(n){return new Date(n.scheduled_at).getTime()+n.duration_minutes*6e4}function ra(n){return new Date(n.scheduled_at).getTime()}function Ai(n){let r=[...n].sort((t,a)=>ra(t)-ra(a)),e=[];for(let t=0;t<r.length-1;t++){let a=r[t],i=r[t+1];if(a.location!==i.location)continue;let o=ra(i)-xi(a);if(o<0)continue;o/6e4>Fe(a.location,a.travel_minutes)+Fe(i.location,i.travel_minutes)||e.push({earlier:a,later:i})}return e}function Ei(n){let r=Ai(n),e=new Set(r.map(a=>a.earlier.id)),t=new Set(r.map(a=>a.later.id));return new Map(n.map(a=>{let o=a.location===`away`?a.travel_minutes:0;return[a.id,{beforeMinutes:t.has(a.id)?0:o,afterMinutes:e.has(a.id)?0:o}]}))}function Ii(n){return Ai(n).map(({earlier:r,later:e})=>{let t=new Date(r.scheduled_at);t.setMinutes(t.getMinutes()+r.duration_minutes);let a=Math.max(0,(ra(e)-xi(r))/6e4);return{id:`stitch-${r.id}-${e.id}`,junctionMinutes:t.getHours()*60+t.getMinutes(),gapMinutes:a,color:r.color,fromColor:r.color,toColor:e.color,fromId:r.id,toId:e.id}})}var Z=32;var me=30;var Fr=32/2;var Ni=1.4;var Vi=.2;function La(n){return Math.round(n*1e3)/1e3}function $s(n,r){if(n<=0)return 1;let e=Math.max(1,r),t=n-2*16;return t<=0?1:t/(32*e)}function Or(n){return Math.min(1,n)}function Rr(n){let r=Or(n),e=new Set;e.add(La(r));for(let t=Vi;t<=Ni+1e-9;t+=Vi){let a=La(t);a>r+1e-9&&a<=1.4+1e-9&&e.add(a)}return[...e].sort((t,a)=>t-a)}function Ws(n,r,e){let t=Rr(e),a=La(n);if(r<0){let o=t.filter(u=>u<a-1e-9);return o.length?o[o.length-1]:t[0]}let i=t.filter(o=>o>a+1e-9);return i.length?i[0]:t[t.length-1]}var Lr=14;function qs(n,r){return Lr}function Pr(n){return/:00$/.test(n)}function Qs(n){return Pr(n)?n:``}function Us(n){return n%60!==0?null:`${String(Math.floor(n/60)).padStart(2,`0`)}:00`}function js(n,r=new Date){let e=[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],t=G(r);return e.map((a,i)=>{let o=new Date(n);return o.setDate(o.getDate()+i),o.setHours(0,0,0,0),{date:o,label:`${a} ${o.getDate()}.${String(o.getMonth()+1).padStart(2,`0`)}`,isToday:G(o)===t}})}function Br(n,r){let e=[];for(let t=n;t<r;t+=me)e.push(`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`);return e}function Oi(n,r){let e=Et(n??void 0,480),t=Et(r??void 0,1320),a=new Set;for(let i of Br(e,t))a.add(i.slice(0,2));return[...a].sort()}function Et(n,r){let e=n?.match(/^(\d{1,2}):(\d{2})/);return e?Number(e[1])*60+Number(e[2]):r}function Xs(n,r,e,t,a){let i=G(r),o=Ri(a);return n.filter(u=>G(new Date(u.scheduled_at))===i).map(u=>{let b=new Date(u.scheduled_at),f=(b.getHours()*60+b.getMinutes()-e)/me*32*t,m=o.get(u.id)??{beforeMinutes:0,afterMinutes:0},g=32*t/me;return{item:u,top:f,height:Math.max(u.duration_minutes/me*32*t,32*t),travelBefore:m.beforeMinutes*g,travelAfter:m.afterMinutes*g}}).filter(u=>u.top+u.height>0)}function At(n){let r=new Date(n.scheduled_at).getTime();return{start:r,end:r+n.duration_minutes*6e4}}function Yr(n){if(`student_id`in n&&n.student_id)return`lesson`;let r=n.source;return r===`work`||r===`work_schedule`?`work`:`event`}function Ti(n){let{start:r,end:e}=At(n);return{id:n.id,kind:Yr(n),startMs:r,endMs:e,location:n.location,travelMinutes:n.travel_minutes}}function Ri(n){let r=[...n].sort((t,a)=>At(t).start-At(a).start),e=new Map(r.map(t=>[t.id,{beforeMinutes:0,afterMinutes:0}]));for(let t=0;t<r.length;t++){let a=r[t],i=a.location===`away`?Math.max(0,a.travel_minutes):0,o=e.get(a.id);!r[t-1]&&i&&(o.beforeMinutes=i),!r[t+1]&&i&&(o.afterMinutes=i)}for(let t=0;t<r.length-1;t++){let a=r[t],i=r[t+1],o=Math.max(0,(At(i).start-At(a).end)/6e4),u=Math.min(o,Di(Ti(a),Ti(i)));if(u<=0)continue;let b=a.location===`away`,f=i.location===`away`;b&&!f?e.get(a.id).afterMinutes=u:!b&&f?e.get(i.id).beforeMinutes=u:b&&f&&(e.get(a.id).afterMinutes=u)}return e}function Zs(n,r,e,t,a=n){let i=G(r),o=n.filter(g=>G(new Date(g.scheduled_at))===i),b=Ri(a.filter(g=>G(new Date(g.scheduled_at))===i)),f=Ei(o);for(let[g,C]of f){let D=b.get(g);D&&b.set(g,{beforeMinutes:C.beforeMinutes===0?0:D.beforeMinutes,afterMinutes:C.afterMinutes===0?0:D.afterMinutes})}let m=32*t/me;return o.map(g=>{let C=new Date(g.scheduled_at),D=(C.getHours()*60+C.getMinutes()-e)/me*32*t,Y=b.get(g.id)??{beforeMinutes:0,afterMinutes:0};return{item:g,top:D,height:Math.max(g.duration_minutes/me*32*t,32*t),travelBefore:Y.beforeMinutes*m,travelAfter:Y.afterMinutes*m}}).filter(g=>g.top+g.height>0)}function Js(n,r,e,t,a){let i=G(r),o=n.filter(f=>G(new Date(f.scheduled_at))===i),u=32*t/me,b=Math.max(6,u*2);return Ii(o).map(f=>{let m=f.gapMinutes,g=m>0?m*u:b,C=(f.junctionMinutes-e)/me*32*t+a,D=m>0?C:C-g/2,Y=Fi(f.fromColor),Se=Fi(f.toColor),Me=f.fromColor.toLowerCase()===f.toColor.toLowerCase()?Y:`linear-gradient(to bottom, ${Y}, ${Se})`;return{id:f.id,top:D,height:g,color:f.fromColor,fill:Me}})}function Fi(n){return`color-mix(in srgb, ${n} 75%, transparent)`}function el(n,r,e,t=[]){let a=new Date(n.getFullYear(),n.getMonth(),1),i=(a.getDay()+6)%7,o=new Date(a);o.setDate(o.getDate()-i);let u=new Date(n.getFullYear(),n.getMonth()+1,0),b=new Date(u);b.setDate(b.getDate()+(6-(b.getDay()+6)%7));let f=[];for(let m=new Date(o);m<=b;m.setDate(m.getDate()+1)){let g=new Date(m);g.setHours(0,0,0,0);let C=G(g);f.push({date:g,isCurrentMonth:g.getMonth()===n.getMonth(),isToday:C===G(new Date),lessons:r.filter(D=>G(new Date(D.scheduled_at))===C),events:e.filter(D=>G(new Date(D.scheduled_at))===C),workLessons:t.filter(D=>G(new Date(D.scheduled_at))===C)})}return f}function G(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`}var Li=ln(`personalEvents`);var Pi=M(Li,n=>n.weekEvents);var nl=M(Li,n=>n.monthEvents);var zr=[`*`];function Hr(n,r){n&1&&VD(0)}var Pa=(()=>{class n{_elementRef=T(Nr$1);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return n})();var Ba=(()=>{class n{template=T(Cr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepLabel`,``]]})}return n})();var Oe={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var Gr=new A(`STEPPER_GLOBAL_OPTIONS`);var oa=(()=>{class n{_stepperOptions;_stepper=T(ot);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Qo(!1);interactedStream=new We;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Qo(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Qo(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||Kr(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Qo(null);index=Qo(-1);isSelected=Fw(()=>this._stepper.selectedIndex===this.index());indicatorType=Fw(()=>{let e=this.isSelected(),t=this.completed,a=this._state()??Oe.NUMBER,i=this._editable();return this._showError()&&this.hasError&&!e?Oe.ERROR:this._displayDefaultIndicatorType?!t||e?Oe.NUMBER:i?Oe.EDIT:Oe.DONE:t&&!e?Oe.DONE:t&&e?a:i&&e?Oe.EDIT:a});isNavigable=Fw(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Qo(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Bi(this.stepControl)}constructor(){let e=T(Gr,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),Wr(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`cdk-step`]],contentQueries:function(t,a,i){if(t&1&&ah(i,Ba,5)(i,c,5),t&2){let o;BD(o=$D())&&(a.stepLabel=o.first),BD(o=$D())&&(a._childForms=o)}},viewQuery:function(t,a){if(t&1&&ch(Cr$1,7),t&2){let i;BD(i=$D())&&(a.content=i.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,G1],optional:[2,`optional`,`optional`,G1],completed:[2,`completed`,`completed`,G1],hasError:[2,`hasError`,`hasError`,G1]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[cy],ngContentSelectors:zr,decls:1,vars:0,template:function(t,a){t&1&&(jD(),Wp(0,Hr,1,0,`ng-template`))},encapsulation:2})}return n})();var ot=(()=>{class n{_dir=T(Or$1,{optional:!0});_changeDetectorRef=T(q1);_elementRef=T(Nr$1);_destroyed=new z;_keyManager;_steps;steps=new pi;_stepHeader;_sortedHeaders=new pi;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Qo(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Qo(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new We;selectedIndexChange=new We;_groupId=T(it$1).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(em(this._steps),tm(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,a)=>t.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(em(this._stepHeader),tm(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,a)=>t._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new nt$1(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:es()).pipe(em(this._layoutDirection()),tm(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()===`rtl`?`next`:`previous`:t>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:t[e],previouslySelectedStep:t[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=jn(e),a=e.keyCode,i=this._keyManager;i?.activeItemIndex!=null&&!t&&(a===32||a===13)?(this.selectedIndex=i.activeItemIndex,e.preventDefault()):i?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let a=t.stepControl;return(a?Bi(a)||$r(a)||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,t=qe();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[``,`cdkStepper`,``]],contentQueries:function(t,a,i){if(t&1&&ah(i,oa,5)(i,Pa,5),t&2){let o;BD(o=$D())&&(a._steps=o),BD(o=$D())&&(a._stepHeader=o)}},inputs:{linear:[2,`linear`,`linear`,G1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,z1],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return n})();function sa(n){return typeof n==`function`}function Kr(n){return sa(n)?n().valid():n.valid}function Bi(n){return sa(n)?n().invalid():n.invalid}function $r(n){return sa(n)?n().pending():n.pending}function Wr(n){sa(n)?n().reset():n.reset()}var Yi=(()=>{class n{_stepper=T(ot);type=`submit`;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(t,a){t&1&&oh(`click`,function(){return a._stepper.next()}),t&2&&nh(`type`,a.type)},inputs:{type:`type`}})}return n})();var zi=(()=>{class n{_stepper=T(ot);type=`button`;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`button`,`cdkStepperPrevious`,``]],hostVars:1,hostBindings:function(t,a){t&1&&oh(`click`,function(){return a._stepper.previous()}),t&2&&nh(`type`,a.type)},inputs:{type:`type`}})}return n})();var Hi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({imports:[qn]})}return n})();var qr=(n,r,e)=>({index:n,active:r,optional:e});function Qr(n,r){if(n&1&&th(0,2),n&2){let e=PD();Kp(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,Tw(2,qr,e.index,e.active,e.optional))}}function Ur(n,r){if(n&1&&(_i$1(0,`span`,7),fw(1),Qc()),n&2){let e=PD(2);gI(),Dh(e._getDefaultTextForState(e.state))}}function jr(n,r){if(n&1&&(_i$1(0,`span`,8),fw(1),Qc()),n&2){let e=PD(3);gI(),Dh(e._intl.completedLabel)}}function Xr(n,r){if(n&1&&(_i$1(0,`span`,8),fw(1),Qc()),n&2){let e=PD(3);gI(),Dh(e._intl.editableLabel)}}function Zr(n,r){if(n&1&&(vD(0,jr,2,1,`span`,8)(1,Xr,2,1,`span`,8),_i$1(2,`mat-icon`,7),fw(3),Qc()),n&2){let e=PD(2);ID(e.state===`done`?0:e.state===`edit`?1:-1),gI(3),Dh(e._getDefaultTextForState(e.state))}}function Jr(n,r){if(n&1&&vD(0,Ur,2,1,`span`,7)(1,Zr,4,2),n&2)ID(PD().state===`number`?0:1)}function eo(n,r){n&1&&(_i$1(0,`div`,4),th(1,9),Qc()),n&2&&(gI(),Kp(`ngTemplateOutlet`,r.template))}function to(n,r){if(n&1&&(_i$1(0,`div`,4),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e.label)}}function ao(n,r){if(n&1&&(_i$1(0,`div`,5),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e._intl.optionalLabel)}}function no(n,r){if(n&1&&(_i$1(0,`div`,6),fw(1),Qc()),n&2){let e=PD();gI(),Dh(e.errorMessage)}}var Gi=[`*`];function io(n,r){}function ro(n,r){if(n&1&&(VD(0),qp(1,io,0,0,`ng-template`,0)),n&2){let e=PD();gI(),Kp(`cdkPortalOutlet`,e._portal)}}var oo=[`animatedContainer`];var Ki=n=>({steps:n});var $i=n=>({step:n});function so(n,r){n&1&&VD(0)}function lo(n,r){if(n&1&&(_i$1(0,`div`,5),th(1,9)(2,6),Qc()),n&2){let e=PD(2),t=qD(6);gI(),Kp(`ngTemplateOutlet`,e.headerPrefix()),gI(),Kp(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,Cw(3,Ki,e.steps))}}function co(n,r){if(n&1&&th(0,6),n&2){let e=PD(2);Kp(`ngTemplateOutlet`,qD(6))(`ngTemplateOutletContext`,Cw(2,Ki,e.steps))}}function uo(n,r){if(n&1&&(_i$1(0,`div`,10,2),th(2,9),Qc()),n&2){let e=r.$implicit,t=r.$index,a=PD(2);tw(`mat-horizontal-stepper-content-`+a._getAnimationDirection(t)),Kp(`id`,a._getStepContentId(t)),Yp(`aria-labelledby`,a._getStepLabelId(t))(`inert`,a.selectedIndex===t?null:``),gI(2),Kp(`ngTemplateOutlet`,e.content)}}function po(n,r){if(n&1&&(_i$1(0,`div`,3),vD(1,lo,3,5,`div`,5)(2,co,1,4,`ng-container`,6),_i$1(3,`div`,7),wD(4,uo,3,6,`div`,8,DD),Qc()()),n&2){let e=PD();gI(),ID(e.headerPrefix()?1:2),gI(3),CD(e.steps)}}function mo(n,r){if(n&1&&th(0,9),n&2)Kp(`ngTemplateOutlet`,PD(2).headerPrefix())}function ho(n,r){if(n&1&&(_i$1(0,`div`,11),th(1,6),_i$1(2,`div`,12,2)(4,`div`,13)(5,`div`,14),th(6,9),Qc()()()()),n&2){let e=r.$implicit,t=r.$index,a=r.$index,i=r.$count,o=PD(2),u=qD(4);gI(),Kp(`ngTemplateOutlet`,u)(`ngTemplateOutletContext`,Cw(11,$i,e)),gI(),hh(`mat-stepper-vertical-line`,a!==i-1)(`mat-vertical-content-container-active`,o.selectedIndex===t),Yp(`inert`,o.selectedIndex===t?null:``)(`aria-label`,o.ariaLabel),gI(2),Kp(`id`,o._getStepContentId(t)),Yp(`aria-labelledby`,o._getStepLabelId(t)),gI(2),Kp(`ngTemplateOutlet`,e.content)}}function _o(n,r){if(n&1&&(_i$1(0,`div`,4),vD(1,mo,1,1,`ng-container`,9),wD(2,ho,7,13,`div`,11,DD),Qc()),n&2){let e=PD();gI(),ID(e.headerPrefix()?1:-1),gI(),CD(e.steps)}}function go(n,r){if(n&1){let e=ND();_i$1(0,`mat-step-header`,15),oh(`click`,function(){let a=Fu(e).step;return ju(a.select())})(`keydown`,function(a){Fu(e);return ju(PD()._onKeydown(a))}),Qc()}if(n&2){let e=r.step,t=PD();hh(`mat-horizontal-stepper-header`,t.orientation===`horizontal`)(`mat-vertical-stepper-header`,t.orientation===`vertical`),Kp(`tabIndex`,t._getFocusIndex()===e.index()?0:-1)(`id`,t._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,t._iconOverrides)(`disableRipple`,t.disableRipple||!e.isNavigable())(`color`,e.color||t.color),Yp(`role`,t.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,t.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,t.orientation===`horizontal`?t.steps.length:null)(`aria-selected`,t.orientation===`horizontal`?e.isSelected():null)(`aria-current`,t.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,t.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,t.orientation===`vertical`?e.isSelected():null)(`aria-controls`,t._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function fo(n,r){n&1&&Jp(0,`div`,17)}function bo(n,r){if(n&1&&(th(0,6),vD(1,fo,1,0,`div`,17)),n&2){let e=r.$implicit,t=r.$index,a=r.$count;PD(2);Kp(`ngTemplateOutlet`,qD(4))(`ngTemplateOutletContext`,Cw(3,$i,e)),gI(),ID(t!==a-1?1:-1)}}function vo(n,r){if(n&1&&(_i$1(0,`div`,16),wD(1,bo,2,5,null,null,DD),Qc()),n&2){let e=r.steps;Yp(`aria-label`,PD().ariaLabel),gI(),CD(e)}}var Ya=(()=>{class n extends Ba{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[``,`matStepLabel`,``]],features:[$p]})}return n})();var yo=(()=>{class n{changes=new z;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(t){return new(t||n)};static ɵprov=Sr$1({token:n,factory:n.ɵfac})}return n})();var za=(()=>{class n extends Pa{_intl=T(yo);_focusMonitor=T(Mn$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=T(L);e.load(Ua),e.load(Ee);let t=T(q1);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Ya?null:this.label}_templateLabel(){return this.label instanceof Ya?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(t,a){t&2&&(tw(`mat-`+(a.color||`primary`)),hh(`mat-step-header-empty-label`,a._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[$p],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(t,a){if(t&1&&(Jp(0,`div`,0),_i$1(1,`div`)(2,`div`,1),vD(3,Qr,1,6,`ng-container`,2)(4,Jr,2,1),Qc()(),_i$1(5,`div`,3),vD(6,eo,2,1,`div`,4)(7,to,2,1,`div`,4),vD(8,ao,2,1,`div`,5),vD(9,no,2,1,`div`,6),Qc()),t&2){let i;Kp(`matRippleTrigger`,a._getHostElement())(`matRippleDisabled`,a.disableRipple),gI(),tw(yw(`mat-step-icon-state-`,a.state,` mat-step-icon`)),hh(`mat-step-icon-selected`,a.selected),gI(2),ID(a.iconOverrides&&a.iconOverrides[a.state]?3:4),gI(2),hh(`mat-step-label-active`,a.active)(`mat-step-label-selected`,a.selected)(`mat-step-label-error`,a.state==`error`),gI(),ID((i=a._templateLabel())?6:a._stringLabel()?7:-1,i),gI(2),ID(a._hasOptionalLabel()?8:-1),gI(),ID(a._hasErrorLabel()?9:-1)}},dependencies:[La$1,Mn,wt],styles:[`.mat-step-header {
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
`],encapsulation:2})}return n})();var Do=(()=>{class n{templateRef=T(Cr$1);name;static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return n})();var Co=(()=>{class n{_template=T(Cr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=KE({type:n,selectors:[[`ng-template`,`matStepContent`,``]]})}return n})();var Ha=(()=>{class n extends oa{_errorStateMatcher=T(Lt$1,{skipSelf:!0});_viewContainerRef=T(Vi$1);_isSelected=j.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ol(()=>this._stepper.selectionChange.pipe(le(e=>e.selectedStep===this),em(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new L$1(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let a=this._errorStateMatcher.isErrorState(e,t),i=!!(e&&e.invalid&&this.interacted);return a||i}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??!1,a=!!(e&&e().invalid()&&this.interacted);return t||a}static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵcmp=GE({type:n,selectors:[[`mat-step`]],contentQueries:function(t,a,i){if(t&1&&ah(i,Ya,5)(i,Co,5),t&2){let o;BD(o=$D())&&(a.stepLabel=o.first),BD(o=$D())&&(a._lazyContent=o.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[Dw([{provide:Lt$1,useExisting:n},{provide:oa,useExisting:n}]),$p],ngContentSelectors:Gi,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(t,a){t&1&&(jD(),qp(0,ro,2,1,`ng-template`))},dependencies:[hn],encapsulation:2})}return n})();var Ga=(()=>{class n extends ot{_ngZone=T(Re);_renderer=T(Ya$1);_animationsDisabled=_n();_cleanupTransition;_isAnimating=Qo(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new pi;_icons;animationDone=new We;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=H1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!T(v).isBrowser;constructor(){super();let t=T(Nr$1).nativeElement.nodeName.toLowerCase();this.orientation=t===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(tm(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(tm(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(em(null),tm(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let t=e.target;if(!t)return;let a=this.orientation===`horizontal`&&e.propertyName===`transform`&&t.classList.contains(`mat-horizontal-stepper-content-current`),i=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&t.classList.contains(`mat-vertical-content-container-active`);(a||i)&&this._animatedContainers.find(u=>u.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(t){return new(t||n)};static ɵcmp=GE({type:n,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(t,a,i){if(t&1&&ah(i,Ha,5)(i,Do,5),t&2){let o;BD(o=$D())&&(a._steps=o),BD(o=$D())&&(a._icons=o)}},viewQuery:function(t,a){if(t&1&&ch(za,5)(oo,5),t&2){let i;BD(i=$D())&&(a._stepHeader=i),BD(i=$D())&&(a._animatedContainers=i)}},hostVars:14,hostBindings:function(t,a){t&2&&(ph(`--%NS%mat-stepper-animation-duration`,a._getAnimationDuration()),hh(`mat-stepper-horizontal`,a.orientation===`horizontal`)(`mat-stepper-vertical`,a.orientation===`vertical`)(`mat-stepper-label-position-end`,a.orientation===`horizontal`&&a.labelPosition==`end`)(`mat-stepper-label-position-bottom`,a.orientation===`horizontal`&&a.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,a.headerPosition===`bottom`)(`mat-stepper-animating`,a._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[Dw([{provide:ot,useExisting:n}]),$p],ngContentSelectors:Gi,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(t,a){if(t&1&&(jD(),vD(0,so,1,0),vD(1,po,6,1,`div`,3)(2,_o,4,1,`div`,4),qp(3,go,1,27,`ng-template`,null,0,kw)(5,vo,3,1,`ng-template`,null,1,kw)),t&2){let i;ID(a._isServer?0:-1),gI(),ID((i=a.orientation)===`horizontal`?1:i===`vertical`?2:-1)}},dependencies:[Mn,za],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return n})();var Wi=(()=>{class n extends Yi{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(t,a){t&2&&nh(`type`,a.type)},features:[$p]})}return n})();var qi=(()=>{class n extends zi{static ɵfac=(()=>{let e;return function(a){return(e||(e=My(n)))(a||n)}})();static ɵdir=KE({type:n,selectors:[[`button`,`matStepperPrevious`,``]],hostAttrs:[1,`mat-stepper-previous`],hostVars:1,hostBindings:function(t,a){t&2&&nh(`type`,a.type)},features:[$p]})}return n})();var Qi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=QE({type:n});static ɵinj=uu({providers:[Lt$1],imports:[me$1,Hi,yt$1,Ya$2,Ga,za,qn]})}return n})();function Mo(n,r){if(n&1&&(_i$1(0,`mat-option`,3),fw(1),Qc()),n&2){let e=r.$implicit,t=PD();Kp(`value`,e)(`disabled`,t.hourDisabled(e)),gI(),Dh(e)}}function wo(n,r){if(n&1&&(_i$1(0,`mat-option`,3),fw(1),Qc()),n&2){let e=r.$implicit,t=PD();Kp(`value`,e)(`disabled`,t.minuteDisabled(e)),gI(),wh(` `,e,``,t.minuteDisabled(e)?` · занято`:``,` `)}}var la=class n{value=H1(`12:00`);hourOptions=H1(null);occupiedRanges=H1([]);durationMinutes=H1(60);location=H1(`home`);travelMinutes=H1(0);workStartMin=H1(void 0);workEndMin=H1(void 0);blockKind=H1(`lesson`);referenceDate=H1(null);valueChange=V1();minutes=_t;hourCtrl=new G$2(`12`,{nonNullable:!0});minuteCtrl=new G$2(`00`,{nonNullable:!0});gateTick=Qo(0);displayHours=Fw(()=>{let r=this.hourOptions(),e=r?.length?[...r]:[...bt],t=this.hourCtrl.value;return t&&!e.includes(t)&&e.unshift(t),e});syncing=!1;constructor(){sd(()=>{let{hour:r,minute:e}=Mt$1(this.value());this.syncing=!0,this.hourCtrl.setValue(r,{emitEvent:!1}),this.minuteCtrl.setValue(st(Number(e)||0),{emitEvent:!1}),this.syncing=!1,this.clearIfIllegal()}),sd(()=>{this.occupiedRanges(),this.durationMinutes(),this.location(),this.travelMinutes(),this.gateTick.update(r=>r+1),this.clearIfIllegal()}),this.hourCtrl.valueChanges.subscribe(r=>{this.syncing||(this.snapMinutesForHour(r),this.emit())}),this.minuteCtrl.valueChanges.subscribe(()=>this.emit())}hourDisabled(r){return this.gateTick(),wi(this.refDate(),r,this.durationMinutes(),this.location(),this.travelMinutes(),this.occupiedRanges(),this.workStartMin(),this.workEndMin(),_t,this.blockKind())}minuteDisabled(r){return this.gateTick(),xt(this.occupiedRanges(),this.refDate(),this.hourCtrl.value,r,this.durationMinutes(),this.travelMinutes(),this.location(),this.workStartMin(),this.workEndMin(),this.blockKind())}refDate(){return this.referenceDate()??new Date}snapMinutesForHour(r){if(!this.minuteDisabled(this.minuteCtrl.value))return;let e=this.earliestMinute(r);e==null||e===this.minuteCtrl.value||(this.syncing=!0,this.minuteCtrl.setValue(e,{emitEvent:!1}),this.syncing=!1)}earliestMinute(r){return ki(this.refDate(),r,this.durationMinutes(),this.location(),this.travelMinutes(),this.occupiedRanges(),this.workStartMin(),this.workEndMin(),_t,this.blockKind())}clearIfIllegal(){if(this.syncing)return;let r=!this.hourDisabled(this.hourCtrl.value),e=!this.minuteDisabled(this.minuteCtrl.value);if(r&&e)return;let t=r?this.hourCtrl.value:this.displayHours().find(i=>!this.hourDisabled(i))??this.hourCtrl.value,a=this.earliestMinute(t)??this.minuteCtrl.value;this.syncing=!0,this.hourCtrl.setValue(t,{emitEvent:!1}),this.minuteCtrl.setValue(a,{emitEvent:!1}),this.syncing=!1,this.emit()}emit(){this.syncing||this.valueChange.emit(`${this.hourCtrl.value}:${this.minuteCtrl.value}`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-time-fields`]],inputs:{value:[1,`value`],hourOptions:[1,`hourOptions`],occupiedRanges:[1,`occupiedRanges`],durationMinutes:[1,`durationMinutes`],location:[1,`location`],travelMinutes:[1,`travelMinutes`],workStartMin:[1,`workStartMin`],workEndMin:[1,`workEndMin`],blockKind:[1,`blockKind`],referenceDate:[1,`referenceDate`]},outputs:{valueChange:`valueChange`},decls:13,vars:2,consts:[[1,`fields`],[`appearance`,`outline`],[3,`formControl`],[3,`value`,`disabled`]],template:function(e,t){e&1&&(_i$1(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-label`),fw(3,`Часы`),Qc(),_i$1(4,`mat-select`,2),wD(5,Mo,2,3,`mat-option`,3,DD),Qc(),nE(),Qc(),_i$1(7,`mat-form-field`,1)(8,`mat-label`),fw(9,`Минуты`),Qc(),_i$1(10,`mat-select`,2),wD(11,wo,2,4,`mat-option`,3,DD),Qc(),nE(),Qc()()),e&2&&(gI(4),Kp(`formControl`,t.hourCtrl),oE(),gI(),CD(t.displayHours()),gI(5),Kp(`formControl`,t.minuteCtrl),oE(),gI(),CD(t.minutes))},dependencies:[In,En,Jt,Kt,Pe$1,$$1,Lt$2,Nt,ge],styles:[`.fields[_ngcontent-%COMP%]{display:flex;gap:8px}mat-form-field[_ngcontent-%COMP%]{flex:1 1 96px;min-width:96px}`]})};var Eo=(n,r)=>r.value;function Io(n,r){if(n&1&&(_i$1(0,`mat-option`,9),fw(1),Qc()),n&2){let e=r.$implicit;Kp(`value`,e.value),gI(),Dh(e.label)}}function No(n,r){n&1&&(_i$1(0,`mat-form-field`,17)(1,`mat-label`),fw(2,`Дорога, мин`),Qc(),Jp(3,`input`,18),nE(),Qc()),n&2&&(gI(3),oE())}function Vo(n,r){if(n&1&&(_i$1(0,`mat-form-field`,13)(1,`mat-label`),fw(2,`Место`),Qc(),_i$1(3,`mat-select`,14)(4,`mat-option`,15),fw(5,`Дома`),Qc(),_i$1(6,`mat-option`,16),fw(7,`Вне дома`),Qc()(),nE(),Qc(),vD(8,No,4,0,`mat-form-field`,17)),n&2){let e=PD().$implicit;gI(3),oE(),gI(5),ID(e.get(`location`)?.value===`away`?8:-1)}}function To(n,r){if(n&1&&(_i$1(0,`mat-form-field`,24)(1,`mat-label`),fw(2,`Дата начала`),Qc(),Jp(3,`input`,27),nE(),Jp(4,`mat-datepicker-toggle`,28)(5,`mat-datepicker`,null,0),Qc()),n&2){let e=qD(6);gI(3),Kp(`matDatepicker`,e),oE(),gI(),Kp(`for`,e)}}function Fo(n,r){if(n&1&&(_i$1(0,`mat-form-field`,24)(1,`mat-label`),fw(2,`Дата окончания`),Qc(),Jp(3,`input`,29),nE(),Jp(4,`mat-datepicker-toggle`,28)(5,`mat-datepicker`,null,1),Qc()),n&2){let e=qD(6);gI(3),Kp(`matDatepicker`,e),oE(),gI(),Kp(`for`,e)}}function Oo(n,r){if(n&1&&(_i$1(0,`div`,12)(1,`div`,19)(2,`span`,20),fw(3,`Начало действия`),Qc(),_i$1(4,`mat-button-toggle-group`,21)(5,`mat-button-toggle`,22),fw(6,`С сегодня`),Qc(),_i$1(7,`mat-button-toggle`,23),fw(8,`Выбрать дату`),Qc()(),nE(),vD(9,To,7,2,`mat-form-field`,24),Qc(),_i$1(10,`div`,19)(11,`span`,20),fw(12,`Окончание действия`),Qc(),_i$1(13,`mat-button-toggle-group`,25)(14,`mat-button-toggle`,26),fw(15,`Бессрочно`),Qc(),_i$1(16,`mat-button-toggle`,23),fw(17,`Выбрать дату`),Qc()(),nE(),vD(18,Fo,7,2,`mat-form-field`,24),Qc()()),n&2){let e=PD().$implicit;gI(4),oE(),gI(5),ID(e.get(`activeFromMode`)?.value===`date`?9:-1),gI(4),oE(),gI(5),ID(e.get(`activeUntilMode`)?.value===`date`?18:-1)}}function Ro(n,r){if(n&1){let e=ND();_i$1(0,`div`,4)(1,`div`,6)(2,`mat-form-field`,7)(3,`mat-label`),fw(4,`День`),Qc(),_i$1(5,`mat-select`,8),wD(6,Io,2,2,`mat-option`,9,Eo),Qc(),nE(),Qc(),_i$1(8,`app-time-fields`,10),oh(`valueChange`,function(a){let i=Fu(e).$implicit;return ju(i.get(`start_time`)?.setValue(a))}),Qc(),vD(9,Vo,9,1),_i$1(10,`button`,11),oh(`click`,function(){let a=Fu(e).$index;return ju(PD().removeSlot.emit(a))}),_i$1(11,`mat-icon`),fw(12,`delete`),Qc()()(),vD(13,Oo,19,2,`div`,12),Qc()}if(n&2){let e=r.$implicit,t=r.$index,a=PD();Kp(`formGroupName`,t),gI(5),oE(),gI(),CD(a.weekdays),gI(2),Kp(`value`,e.get(`start_time`)?.value)(`hourOptions`,a.hourOptions())(`occupiedRanges`,a.rangesForSlot(t))(`durationMinutes`,a.durationMinutes())(`location`,a.slotLocation(t))(`travelMinutes`,a.slotTravel(t))(`workStartMin`,a.workStartMin())(`workEndMin`,a.workEndMin())(`blockKind`,a.blockKind())(`referenceDate`,a.referenceDateForSlot(t)),gI(),ID(a.withLocation()?9:-1),gI(),Kp(`disabled`,a.slotsArray.length<=1),gI(3),ID(a.withActiveDates()?13:-1)}}var da=class n{parent=H1.required();withLocation=H1(!1);withActiveDates=H1(!1);hourOptions=H1(null);durationMinutes=H1(60);location=H1(`home`);travelMinutes=H1(0);occupiedBySlot=H1([]);workStartMin=H1(void 0);workEndMin=H1(void 0);blockKind=H1(`lesson`);addSlot=V1();removeSlot=V1();weekdays=ot$1;get slotsArray(){return this.parent().get(`slots`)}rangesForSlot(r){return this.occupiedBySlot()[r]??[]}referenceDateForSlot(r){let e=this.slotsArray.at(r)?.get(`day`)?.value,t=U(new Date),a=ct(e??`monday`)??0,i=new Date(t);return i.setDate(i.getDate()+a),i}slotLocation(r){return this.withLocation()?this.slotsArray.at(r)?.get(`location`)?.value===`away`?`away`:`home`:this.location()}slotTravel(r){return this.slotLocation(r)!==`away`?0:this.withLocation()?Number(this.slotsArray.at(r)?.get(`travel_minutes`)?.value)||0:this.travelMinutes()}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-schedule-slots`]],inputs:{parent:[1,`parent`],withLocation:[1,`withLocation`],withActiveDates:[1,`withActiveDates`],hourOptions:[1,`hourOptions`],durationMinutes:[1,`durationMinutes`],location:[1,`location`],travelMinutes:[1,`travelMinutes`],occupiedBySlot:[1,`occupiedBySlot`],workStartMin:[1,`workStartMin`],workEndMin:[1,`workEndMin`],blockKind:[1,`blockKind`]},outputs:{addSlot:`addSlot`,removeSlot:`removeSlot`},decls:8,vars:1,consts:[[`fromPicker`,``],[`untilPicker`,``],[1,`slots`,3,`formGroup`],[`formArrayName`,`slots`,1,`list`],[1,`slot`,3,`formGroupName`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`slot-row`],[`appearance`,`outline`,1,`day`],[`formControlName`,`day`],[3,`value`],[3,`valueChange`,`value`,`hourOptions`,`occupiedRanges`,`durationMinutes`,`location`,`travelMinutes`,`workStartMin`,`workEndMin`,`blockKind`,`referenceDate`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`Удалить слот`,3,`click`,`disabled`],[1,`active-dates`],[`appearance`,`outline`,1,`location`],[`formControlName`,`location`],[`value`,`home`],[`value`,`away`],[`appearance`,`outline`,1,`travel`],[`matInput`,``,`type`,`number`,`formControlName`,`travel_minutes`],[1,`active-block`],[1,`active-label`],[`formControlName`,`activeFromMode`,`hideSingleSelectionIndicator`,``],[`value`,`today`],[`value`,`date`],[`appearance`,`outline`],[`formControlName`,`activeUntilMode`,`hideSingleSelectionIndicator`,``],[`value`,`indefinite`],[`matInput`,``,`formControlName`,`activeFromDate`,3,`matDatepicker`],[`matIconSuffix`,``,3,`for`],[`matInput`,``,`formControlName`,`activeUntilDate`,3,`matDatepicker`]],template:function(e,t){e&1&&(_i$1(0,`div`,2)(1,`div`,3),wD(2,Ro,14,14,`div`,4,ED),Qc(),_i$1(4,`button`,5),oh(`click`,function(){return t.addSlot.emit()}),_i$1(5,`mat-icon`),fw(6,`add`),Qc(),fw(7,` Добавить занятие `),Qc()()),e&2&&(Kp(`formGroup`,t.parent()),gI(2),CD(t.slotsArray.controls))},dependencies:[In,We$1,Yt$1,En,Fn,sn,nn$1,gt$1,pt,Kt,Pe$1,$$1,ht,Lt$2,Nt,ge,Be,Pe$2,Tt,jt,bt$1,Dt$2,bt$2,nt$2,na,yi,aa,Oa,yt$1,wt,la],styles:[`.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.slot[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:8px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:8px}.slot-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start}.day[_ngcontent-%COMP%]{flex:1 1 160px;min-width:min(100%,140px)}.location[_ngcontent-%COMP%], .travel[_ngcontent-%COMP%]{flex:1 1 120px;min-width:min(100%,120px)}.active-dates[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.active-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.active-label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%n12-cocoa)}`]})};var Lo=(n,r)=>r.value;function Po(n,r){if(n&1&&(_i$1(0,`mat-option`,13),Jp(1,`app-currency-mark`,28),Qc()),n&2){let e=r.$implicit;Kp(`value`,e),gI(),Kp(`currency`,e)}}function Bo(n,r){if(n&1&&(_i$1(0,`mat-option`,13),fw(1),Qc()),n&2){let e=r.$implicit;Kp(`value`,e),gI(),Dh(e)}}function Yo(n,r){n&1&&(_i$1(0,`span`,32),fw(1,`используется`),Qc())}function zo(n,r){if(n&1){let e=ND();_i$1(0,`button`,29),oh(`click`,function(){let a=Fu(e).$implicit;return ju(PD().selectColor(a.value))}),Jp(1,`span`,30),_i$1(2,`span`,31),fw(3),Qc(),vD(4,Yo,2,0,`span`,32),Qc()}if(n&2){let e=r.$implicit,t=PD();hh(`selected`,t.colorsEqual(t.appearanceGroup.controls.color.value,e.value))(`used`,t.isColorUsed(e.value)),Yp(`title`,e.nameRu),gI(),ph(`background`,e.value),gI(2),Dh(e.nameRu),gI(),ID(t.isColorUsed(e.value)?4:-1)}}function Ho(n,r){if(n&1){let e=ND();_i$1(0,`app-schedule-slots`,33),oh(`addSlot`,function(){Fu(e);return ju(PD().addSlot())})(`removeSlot`,function(a){Fu(e);return ju(PD().removeSlot(a))}),Qc()}if(n&2){let e=PD();Kp(`parent`,e.form)(`withLocation`,!0)(`withActiveDates`,!0)(`durationMinutes`,e.form.controls.lesson_duration.value)(`hourOptions`,e.hourOptions())(`occupiedBySlot`,e.occupiedBySlot())(`workStartMin`,e.workBounds().start)(`workEndMin`,e.workBounds().end)(`blockKind`,`lesson`)}}function Ji(n){if(n.mode!==`create`||!n.openWithSchedule&&n.prefillStartTime==null)return null;let r=n.prefillStartTime?.trim()??``,e=/^(\d{1,2}):(\d{2})$/.exec(r);if(e){let t=Number(e[1]),a=Number(e[2]);if(t>=0&&t<=23&&a>=0&&a<=59)return{start_time:`${String(t).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}}return{start_time:`10:00`}}var er=class n{data=T(Dt$1);dialogRef=T(W$1);fb=T(Sn$1);schedules=T(q);store=T(Ke);settings=F(this.store.select(Gr$1),{initialValue:null});colors=A$1;colorsEqual=Kn;form=this.fb.nonNullable.group({name:[this.data.student?.name??``,ue.required],price:[this.data.student?.price??0,[ue.required,ue.min(0)]],currency:[this.data.student?.currency??this.settings()?.default_currency??`BYN`,ue.required],lesson_duration:[this.data.student?.lesson_duration??this.settings()?.default_duration??45,ue.required],color:[this.data.student?.color?me$2(this.data.student.color):me$2(this.settings()?.default_lesson_color?.trim()||Xn(this.data.usedColors)),ue.required],is_deposit:[this.data.student?.is_deposit??!1],amount:[this.data.student?.amount??0],has_schedule:[!!Ji(this.data)],slots:this.fb.array([this.createSlotGroup(Ji(this.data)??void 0)])});profileGroup=this.fb.nonNullable.group({name:this.form.controls.name});paymentGroup=this.fb.nonNullable.group({price:this.form.controls.price,currency:this.form.controls.currency,lesson_duration:this.form.controls.lesson_duration,is_deposit:this.form.controls.is_deposit,amount:this.form.controls.amount});appearanceGroup=this.fb.nonNullable.group({color:this.form.controls.color});durations=Qo([...Go]);currencies=Qo([`BYN`,`USD`,`EUR`]);weekLessons=F(this.store.select(Yt),{initialValue:[]});weekEvents=F(this.store.select(Pi),{initialValue:[]});formTick=Qo(0);hourOptions=Fw(()=>{let r=this.settings();return Oi(r?.work_start,r?.work_end)});workBounds=Fw(()=>{let r=this.settings();return{start:Et(r?.work_start,480),end:Et(r?.work_end,1320)}});occupiedBySlot=Fw(()=>(this.formTick(),this.buildOccupiedBySlot()));get slots(){return this.form.get(`slots`)}ngOnInit(){let r=U(new Date).toISOString();this.store.dispatch(Pe.loadWeek({weekStart:r})),this.store.dispatch(jt$1.loadWeek({weekStart:r})),this.form.valueChanges.subscribe(()=>this.formTick.update(t=>t+1));let e=this.settings();e&&(this.durations.set(e.duration_options),this.currencies.set(e.enabled_currencies),this.data.student||this.form.patchValue(W({currency:e.default_currency,lesson_duration:e.default_duration},e.default_lesson_color?.trim()?{color:me$2(e.default_lesson_color)}:{}))),this.data.student&&this.schedules.getByStudent(this.data.student.id).subscribe(t=>{if(this.slots.clear(),!t.length){this.form.controls.has_schedule.setValue(!1),this.slots.push(this.createSlotGroup());return}this.form.controls.has_schedule.setValue(!0);for(let a of t)this.slots.push(this.createSlotGroup({day:a.day,start_time:a.start_time,location:a.location,travel_minutes:a.travel_minutes,active_from:a.active_from,active_until:a.active_until}));this.formTick.update(a=>a+1)})}isColorUsed(r){return this.data.mode===`edit`&&this.data.student&&Kn(this.data.student.color,r)?!1:this.data.usedColors.some(e=>Kn(e,r))}selectColor(r){this.appearanceGroup.controls.color.setValue(me$2(r))}addSlot(){this.slots.push(this.createSlotGroup())}removeSlot(r){this.slots.length<=1||this.slots.removeAt(r)}save(){if(this.form.invalid)return;let r=this.form.getRawValue(),e=r.has_schedule?r.slots.map(t=>{let a=t.activeFromMode===`date`&&t.activeFromDate?K(t.activeFromDate):K(new Date),i=t.activeUntilMode===`date`&&t.activeUntilDate?K(t.activeUntilDate):null;return{day:t.day,start_time:t.start_time,location:t.location,travel_minutes:t.location===`away`?t.travel_minutes:0,active_from:a,active_until:i}}):[];for(let t of e)if(t.active_from&&t.active_until&&t.active_until<t.active_from)return;if(e.length){let t=this.buildOccupiedBySlot(),a=U(new Date),i=this.workBounds(),o=r.lesson_duration;for(let u=0;u<e.length;u++){let b=e[u],f=ct(b.day)??0,m=new Date(a);m.setDate(m.getDate()+f);if(!Ra({start:X$1(m,b.start_time),durationMinutes:o,location:b.location,travelMinutes:b.travel_minutes,ranges:t[u]??[],workStartMin:i.start,workEndMin:i.end,kind:`lesson`}))return}}this.dialogRef.close({name:r.name,price:r.price,currency:r.currency,lesson_duration:r.lesson_duration,color:me$2(r.color),is_deposit:r.is_deposit,amount:r.amount,schedule_slots:e})}createSlotGroup(r){let e=r?.active_from?`date`:`today`,t=r?.active_until?`date`:`indefinite`;return this.fb.nonNullable.group({day:[r?.day??`monday`,ue.required],start_time:[r?.start_time??`10:00`,ue.required],location:[r?.location??`home`,ue.required],travel_minutes:[r?.travel_minutes??0,[ue.required,ue.min(0)]],activeFromMode:[e],activeFromDate:[r?.active_from?new Date(`${r.active_from}T00:00:00`):new Date],activeUntilMode:[t],activeUntilDate:[r?.active_until?new Date(`${r.active_until}T00:00:00`):null]})}buildOccupiedBySlot(){let r=U(new Date),e=this.weekLessons().filter(o=>o.type!==`cancelled`&&(!this.data.student||o.student_id!==this.data.student.id)),t=this.weekEvents(),a=this.form.controls.lesson_duration.value,i=this.form.getRawValue().slots??[];return i.map((o,u)=>{let b=ct(o.day)??0,f=new Date(r);f.setDate(f.getDate()+b);let m=new Date(f);m.setHours(0,0,0,0);let g=new Date(m);g.setDate(g.getDate()+1);let C=[];for(let D of e){let Y=new Date(D.scheduled_at);Y<m||Y>=g||C.push(ia(D.id,`lesson`,Y,D.duration_minutes,D.location,D.travel_minutes,D.student_name))}for(let D of t){let Y=new Date(D.scheduled_at);Y<m||Y>=g||C.push(ia(D.id,`event`,Y,D.duration_minutes,D.location,D.travel_minutes,D.title))}return i.forEach((D,Y)=>{if(Y===u||D.day!==o.day)return;let Se=X$1(f,D.start_time),Me=D.location===`away`?`away`:`home`,tr=Me===`away`?D.travel_minutes:0;C.push(ia(`slot-${Y}`,`lesson`,Se,a,Me,tr))}),C})}static ɵfac=function(e){return new(e||n)};static ɵcmp=GE({type:n,selectors:[[`app-student-dialog`]],decls:69,vars:15,consts:[[`stepper`,``],[`mat-dialog-title`,``],[1,`dialog-body`],[3,`linear`],[`label`,`Основное`,3,`stepControl`],[1,`step-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`name`],[1,`step-actions`],[`mat-stroked-button`,``,`type`,`button`,`matStepperNext`,``],[`label`,`Оплата`,3,`stepControl`],[`matInput`,``,`type`,`number`,`formControlName`,`price`],[`formControlName`,`currency`],[3,`value`],[`formControlName`,`lesson_duration`],[1,`deposit-row`],[`formControlName`,`is_deposit`],[`matInput`,``,`type`,`number`,`formControlName`,`amount`],[`mat-stroked-button`,``,`type`,`button`,`matStepperPrevious`,``],[`label`,`Цвет`,3,`stepControl`],[1,`color-grid`],[`type`,`button`,1,`swatch-row`,3,`selected`,`used`],[`label`,`Расписание`],[`formControlName`,`has_schedule`],[3,`parent`,`withLocation`,`withActiveDates`,`durationMinutes`,`hourOptions`,`occupiedBySlot`,`workStartMin`,`workEndMin`,`blockKind`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`align`,`end`],[`mat-stroked-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`btn-cancel`],[3,`currency`],[`type`,`button`,1,`swatch-row`,3,`click`],[1,`swatch`],[1,`swatch-name`],[1,`used-label`],[3,`addSlot`,`removeSlot`,`parent`,`withLocation`,`withActiveDates`,`durationMinutes`,`hourOptions`,`occupiedBySlot`,`workStartMin`,`workEndMin`,`blockKind`]],template:function(e,t){e&1&&(_i$1(0,`h2`,1),fw(1),Qc(),_i$1(2,`mat-dialog-content`,2)(3,`mat-horizontal-stepper`,3,0)(5,`mat-step`,4)(6,`form`,5)(7,`mat-form-field`,6)(8,`mat-label`),fw(9,`Имя`),Qc(),Jp(10,`input`,7),nE(),Qc()(),_i$1(11,`div`,8)(12,`button`,9),fw(13,`Далее`),Qc()()(),_i$1(14,`mat-step`,10)(15,`form`,5)(16,`mat-form-field`,6)(17,`mat-label`),fw(18,`Ставка`),Qc(),Jp(19,`input`,11),nE(),Qc(),_i$1(20,`mat-form-field`,6)(21,`mat-label`),fw(22,`Валюта`),Qc(),_i$1(23,`mat-select`,12),wD(24,Po,2,2,`mat-option`,13,DD),Qc(),nE(),Qc(),_i$1(26,`mat-form-field`,6)(27,`mat-label`),fw(28,`Длительность (мин)`),Qc(),_i$1(29,`mat-select`,14),wD(30,Bo,2,2,`mat-option`,13,DD),Qc(),nE(),Qc(),_i$1(32,`div`,15)(33,`mat-slide-toggle`,16),fw(34),Qc(),nE(),_i$1(35,`mat-icon`),fw(36),Qc()(),_i$1(37,`mat-form-field`,6)(38,`mat-label`),fw(39,`Баланс`),Qc(),Jp(40,`input`,17),nE(),Qc()(),_i$1(41,`div`,8)(42,`button`,18),fw(43,`Назад`),Qc(),_i$1(44,`button`,9),fw(45,`Далее`),Qc()()(),_i$1(46,`mat-step`,19)(47,`form`,5)(48,`div`,20),wD(49,zo,5,9,`button`,21,Lo),Qc()(),_i$1(51,`div`,8)(52,`button`,18),fw(53,`Назад`),Qc(),_i$1(54,`button`,9),fw(55,`Далее`),Qc()()(),_i$1(56,`mat-step`,22)(57,`form`,5)(58,`mat-slide-toggle`,23),fw(59,`Регулярное расписание`),Qc(),nE(),vD(60,Ho,1,9,`app-schedule-slots`,24),Qc(),_i$1(61,`div`,8)(62,`button`,18),fw(63,`Назад`),Qc(),_i$1(64,`button`,25),oh(`click`,function(){return t.save()}),fw(65,` Сохранить `),Qc()()()()(),_i$1(66,`mat-dialog-actions`,26)(67,`button`,27),fw(68,`Отмена`),Qc()()),e&2&&(gI(),Dh(t.data.mode===`create`?`Новый студент`:`Редактирование`),gI(2),Kp(`linear`,!1),gI(2),Kp(`stepControl`,t.profileGroup),gI(),Kp(`formGroup`,t.profileGroup),gI(4),oE(),gI(4),Kp(`stepControl`,t.paymentGroup),gI(),Kp(`formGroup`,t.paymentGroup),gI(4),oE(),gI(4),oE(),gI(),CD(t.currencies()),gI(5),oE(),gI(),CD(t.durations()),gI(2),hh(`debt`,!t.paymentGroup.controls.is_deposit.value),gI(),oE(),gI(),Xc(` `,t.paymentGroup.controls.is_deposit.value?`Аванс`:`Задолженность`,` `),gI(2),Dh(t.paymentGroup.controls.is_deposit.value?`add`:`remove`),gI(4),oE(),gI(6),Kp(`stepControl`,t.appearanceGroup),gI(),Kp(`formGroup`,t.appearanceGroup),gI(2),CD(t.colors),gI(8),Kp(`formGroup`,t.form),gI(),oE(),gI(2),ID(t.form.controls.has_schedule.value?60:-1),gI(4),Kp(`disabled`,t.form.invalid))},dependencies:[In,Nn,We$1,Yt$1,En,Fn,sn,nn$1,xn,Dn,kn,Sn,An,Kt,Pe$1,$$1,Be,Pe$2,Tt,jt,Dt$2,na,Lt$2,Nt,ge,we,te,Qi,Ha,Ga,Wi,qi,yt$1,wt,da,I],styles:[`.dialog-body[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;max-height:min(420px,90vh - 8rem);overflow:auto}.step-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:8px 0 0;min-height:260px}.step-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.deposit-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:var(--%NS%mat-sys-primary)}.deposit-row.debt[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.color-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px;max-height:220px;overflow:auto;padding:4px 2px 8px}.swatch-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-height:32px;padding:4px 8px;border:1px solid transparent;border-radius:6px;background:transparent;cursor:pointer;text-align:left;font:inherit;color:inherit}.swatch[_ngcontent-%COMP%]{width:22px;height:22px;border-radius:50%;flex:none;border:2px solid transparent}.swatch-name[_ngcontent-%COMP%]{font-size:14px;line-height:1.2}.used-label[_ngcontent-%COMP%]{margin-left:auto;font-size:14px;color:var(--%NS%ht-apple-secondary-label);white-space:nowrap}.swatch-row.selected[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-on-surface);outline:2px solid var(--%NS%mat-sys-primary)}.swatch-row.used[_ngcontent-%COMP%]:not(.selected){opacity:.92}.active-from[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:4px}.active-from-label[_ngcontent-%COMP%]{font-size:14px;color:var(--%NS%n12-cocoa)}`]})};var Go=[40,45,60,120];export{ki as A,Zs as C,er as D,el as E,wi as F,xt as I,yi as L,nl as M,qs as N,ia as O,rt as P,Xs as S,da as T,Ra as _,Et as a,Us as b,Ko as c,Oi as d,Or as f,Qs as g,Pr as h,Ci as i,na as j,js as k,Ni as l,Pi as m,$s as n,G as o,Os as p,Br as r,Js as s,$o as t,Oa as u,Rs as v,aa as w,Ws as x,Si as y};