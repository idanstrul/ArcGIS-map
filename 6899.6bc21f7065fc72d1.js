"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[6899],{37384:(B,O,t)=>{t.d(O,{y:()=>G});var e=t(17626),D=t(48701),R=t(89726),w=t(26584),h=t(32917),a=t(77712),M=(t(85931),t(8314),t(90912),t(76898)),L=t(1011),b=t(86810);t(63290),t(82255);let E=class extends b.wq{};E=(0,e._)([(0,M.j)("esri.views.layers.support.ClipArea")],E);const r=E;var u;let d=u=class extends r{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],d.prototype,"version",null),d=u=(0,e._)([(0,M.j)("esri.views.layers.support.ClipRect")],d);const V=d;t(29132);var c,K=t(21674),s=t(91179),i=t(2004),n=t(37118);const f={base:K.Z,key:"type",typeMap:{extent:i.Z,polygon:n.Z}};let l=c=class extends r{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new c({geometry:this.geometry.clone()})}};(0,e._)([(0,a.Cb)({types:f,json:{read:s.im,write:!0}})],l.prototype,"geometry",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],l.prototype,"version",null),l=c=(0,e._)([(0,M.j)("esri.views.layers.support.Geometry")],l);const C=l;let m=class extends r{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,e._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],m.prototype,"version",null),m=(0,e._)([(0,M.j)("esri.views.layers.support.Path")],m);const W=D.Z.ofType({key:"type",base:r,typeMap:{rect:V,path:m,geometry:C}}),G=H=>{let y=class extends H{constructor(){super(...arguments),this.attached=!1,this.clips=new W,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var o,_,P,U;const x=null==(o=null==(_=this.view)?void 0:_.spatialReferenceLocked)||o;(null==(P=this.view)?void 0:P.spatialReference)&&x&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new w.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new L.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.YP)(()=>this.suspended,v=>{this.container&&(this.container.visible=!v),this.view&&!v&&this.updateRequested&&this.view.requestUpdate()},h.tX),(0,h.YP)(()=>{var v,Z;return null!=(v=null==(Z=this.layer)?void 0:Z.opacity)?v:1},v=>{this.container&&(this.container.opacity=v)},h.tX),(0,h.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",v=>{this.container&&(this.container.blendMode=v)},h.tX),(0,h.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,v=>{this.container&&(this.container.effect=v)},h.tX),(0,h.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(U=this.view)&&U.whenLayerView?this.view.whenLayerView(this.layer).then(v=>{v===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var o;const _=null==(o=this.view)?void 0:o.spatialReference;return null==_||this.supportsSpatialReference(_)}get updating(){var o;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(o=this.updatingHandles)||!o.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(o){const _=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!_)return!0;const{minScale:P,maxScale:U}=_;return(0===P||o<=P)&&(0===U||o>=U)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(o){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",o),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(o))):this.updateRequested=!1}hitTest(o,_){return Promise.resolve(null)}supportsSpatialReference(o){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const o=super.getSuspendInfo(),_=!this.spatialReferenceSupported,P=this.visibleAtCurrentScale;return _&&(o.spatialReferenceNotSupported=_),P&&(o.outsideScaleRange=P),o}};return(0,e._)([(0,a.Cb)()],y.prototype,"attached",void 0),(0,e._)([(0,a.Cb)({type:W,set(o){const _=(0,R.Z)(o,this._get("clips"),W);this._set("clips",_)}})],y.prototype,"clips",void 0),(0,e._)([(0,a.Cb)()],y.prototype,"container",void 0),(0,e._)([(0,a.Cb)()],y.prototype,"moving",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],y.prototype,"spatialReferenceSupported",null),(0,e._)([(0,a.Cb)({readOnly:!0})],y.prototype,"updateParameters",void 0),(0,e._)([(0,a.Cb)()],y.prototype,"updateRequested",void 0),(0,e._)([(0,a.Cb)()],y.prototype,"updating",null),(0,e._)([(0,a.Cb)()],y.prototype,"view",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),y=(0,e._)([(0,M.j)("esri.views.2d.layers.LayerView2D")],y),y}},36899:(B,O,t)=>{t.r(O),t.d(O,{default:()=>K});var e=t(15861),D=t(17626),R=t(88879),w=t(48701),h=t(62208),a=t(27e3),b=(t(63290),t(90912),t(85931),t(8314),t(82255),t(76898)),T=t(37384),p=t(36275),E=t(97291),r=t(45611);const u="sublayers",d="layerView",V=Object.freeze({remove(){},pause(){},resume(){}});let A=class extends((0,T.y)(r.Z)){constructor(){super(...arguments),this._highlightIds=new Map}fetchPopupFeatures(s){var i=this;return(0,e.Z)(function*(){return Array.from(i.graphicsViews(),n=>n.hitTest(s).filter(c=>!!c.popupTemplate)).flat()})()}*graphicsViews(){(0,h.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,h.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}hitTest(s,i){var n=this;return(0,e.Z)(function*(){const c=Array.from(n.graphicsViews(),function(){var f=(0,e.Z)(function*(l){const C=yield l.hitTest(s);if((0,h.pC)(n._graphicsViewsFeatureCollectionMap)){const m=n._graphicsViewsFeatureCollectionMap.get(l);for(const j of C)!j.popupTemplate&&m.popupTemplate&&(j.popupTemplate=m.popupTemplate)}return C});return function(l){return f.apply(this,arguments)}}());return(yield Promise.all(c)).flat()})()}highlight(s){let i;return"number"==typeof s?i=[s]:s instanceof R.Z?i=[s.uid]:Array.isArray(s)&&s.length>0?i="number"==typeof s[0]?s:s.map(n=>n&&n.uid):w.Z.isCollection(s)&&(i=s.map(n=>n&&n.uid).toArray()),i=i.filter(n=>null!=n),i.length?(this._addHighlight(i),{remove:()=>{this._removeHighlight(i)}}):V}update(s){for(const i of this.graphicsViews())i.processUpdate(s)}attach(){const s=this.view,i=()=>this.requestUpdate(),n=this.layer.featureCollections;if((0,h.pC)(n)&&n.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const c of n){const f=new p.Z(this.view.featuresTilingScheme);f.fadeTransitionEnabled=!0;const l=new E.Z({view:s,graphics:c.source,renderer:c.renderer,requestUpdateCallback:i,container:f});this._graphicsViewsFeatureCollectionMap.set(l,c),this.container.addChild(l.container),this.handles.add([(0,a.S1)(c,"visible",C=>l.container.visible=C),(0,a.S1)(l,"updating",()=>this.notifyChange("updating"))],d)}this._updateHighlight()}else(0,h.pC)(this.layer.sublayers)&&this.handles.add((0,a.on)(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const s of this.graphicsViews())s.viewChange()}isUpdating(){for(const s of this.graphicsViews())if(s.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const s of this.graphicsViews())s.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,h.Wi)(this.layer.sublayers))return;const s=[],i=this.view,n=()=>this.requestUpdate();for(const c of this.layer.sublayers){const f=new p.Z(this.view.featuresTilingScheme);f.fadeTransitionEnabled=!0;const l=new E.Z({view:i,graphics:c.graphics,requestUpdateCallback:n,container:f});this.handles.add([c.on("graphic-update",l.graphicUpdateHandler),(0,a.S1)(c,"visible",C=>l.container.visible=C),(0,a.S1)(l,"updating",()=>this.notifyChange("updating"))],d),this.container.addChild(l.container),s.push(l)}this._graphicsViews=s,this._updateHighlight()}_addHighlight(s){for(const i of s)if(this._highlightIds.has(i)){const n=this._highlightIds.get(i);this._highlightIds.set(i,n+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_removeHighlight(s){for(const i of s)if(this._highlightIds.has(i)){const n=this._highlightIds.get(i)-1;0===n?this._highlightIds.delete(i):this._highlightIds.set(i,n)}this._updateHighlight()}_updateHighlight(){const s=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(s)}};A=(0,D._)([(0,b.j)("esri.views.2d.layers.MapNotesLayerView2D")],A);const K=A},45611:(B,O,t)=>{t.d(O,{Z:()=>E});var e=t(17626),D=t(14517),R=t(61885),w=t(80542),h=t(61996),a=t(63290),I=t(62208),S=t(60330),g=t(77712),T=(t(85931),t(8314),t(90912),t(76898));let p=class extends((0,w.p)((0,h.I)((0,S.v)(R.Z.EventedMixin(D.Z))))){constructor(r){super(r),this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const u=this.layer&&this.layer.id||"no id",d=this.layer&&this.layer.title||"no title";throw a.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${d}', id: '${u}')`,r),r}})}get fullOpacity(){return(0,I.Pt)(this.get("layer.opacity"),1)*(0,I.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var r;return!!(null!=(r=this.updatingHandles)&&r.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var r;return!0===(null==(r=this.layer)?void 0:r.visible)}set visible(r){void 0!==r?this._override("visible",r):this._clearOverride("visible")}canResume(){var r,u,d;return this.visible&&(null==(r=this.layer)?void 0:r.loaded)&&!(null!=(u=this.parent)&&u.suspended)&&(null==(d=this.view)?void 0:d.ready)||!1}getSuspendInfo(){const r=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,e._)([(0,g.Cb)()],p.prototype,"fullOpacity",null),(0,e._)([(0,g.Cb)()],p.prototype,"layer",void 0),(0,e._)([(0,g.Cb)()],p.prototype,"parent",void 0),(0,e._)([(0,g.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,e._)([(0,g.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,e._)([(0,g.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,e._)([(0,g.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,e._)([(0,g.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,e._)([(0,g.Cb)()],p.prototype,"visible",null),(0,e._)([(0,g.Cb)()],p.prototype,"view",void 0),p=(0,e._)([(0,T.j)("esri.views.layers.LayerView")],p);const E=p}}]);