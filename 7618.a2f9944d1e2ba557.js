"use strict";var se=Object.defineProperty,oe=Object.defineProperties,le=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,H=(f,o,e)=>o in f?se(f,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[o]=e,T=(f,o)=>{for(var e in o||(o={}))de.call(o,e)&&H(f,e,o[e]);if(B)for(var e of B(o))pe.call(o,e)&&H(f,e,o[e]);return f},Q=(f,o)=>oe(f,le(o));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[7618,9530],{13410:(f,o,e)=>{e.d(o,{FN:()=>E,QV:()=>p,ac:()=>i});var m=e(31283);function p(r,t,a){return t.flatten(({sublayers:n})=>n).length!==r.length||!!r.some(n=>n.originIdOf("minScale")>a||n.originIdOf("maxScale")>a||n.originIdOf("renderer")>a||n.originIdOf("labelingInfo")>a||n.originIdOf("opacity")>a||n.originIdOf("labelsVisible")>a||n.originIdOf("source")>a)||!g(r,t)}function E(r,t,a){return!!r.some(l=>{const n=l.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===l.id&&(!n.gdbVersion||n.gdbVersion===a.gdbVersion))||l.originIdOf("renderer")>m.s3.SERVICE||l.originIdOf("labelingInfo")>m.s3.SERVICE||l.originIdOf("opacity")>m.s3.SERVICE||l.originIdOf("labelsVisible")>m.s3.SERVICE})||!g(r,t)}function g(r,t){if(!r||!r.length)return!0;const a=t.slice().reverse().flatten(({sublayers:c})=>c&&c.toArray().reverse()).map(c=>c.id).toArray();if(r.length>a.length)return!1;let l=0;const n=a.length;for(const{id:c}of r){for(;l<n&&a[l]!==c;)l++;if(l>=n)return!1}return!0}function i(r){return!!r&&r.some(t=>null!=t.minScale||t.layerDefinition&&null!=t.layerDefinition.minScale)}},69772:(f,o,e)=>{e.r(o),e.d(o,{default:()=>re});var m=e(15861),p=e(17626),E=e(63290),g=e(10699),i=e(77712),l=(e(85931),e(8314),e(90912),e(76898)),n=e(51815),c=e(91757),S=e(37384),P=e(97291),U=e(13305),D=e(67802),y=e(45611),F=e(26584),C=e(62208),z=e(13812),J=e(14772),X=e(22264),Y=e(46679),A=e(10023),k=e(79530);const q=h=>{let d=class extends h{initialize(){this.exportImageParameters=new J.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var u;return null==(u=this.exportImageParameters)||u.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(u,v){var I=this;return(0,m.Z)(function*(){const{layer:w}=I;if(!u)return Promise.reject(new F.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:w}));const L=I.get("view.scale"),G=[],Z=function(){var O=(0,m.Z)(function*(s){if(s.visible&&(0===s.minScale||L<=s.minScale)&&(0===s.maxScale||L>=s.maxScale))if(s.sublayers)s.sublayers.forEach(Z);else if(s.popupEnabled){const M=(0,A.V)(s,Q(T({},v),{defaultPopupTemplateEnabled:!1}));(0,C.pC)(M)&&G.unshift({sublayer:s,popupTemplate:M})}});return function(V){return O.apply(this,arguments)}}(),ie=w.sublayers.toArray().reverse().map(Z);yield Promise.all(ie);const ae=G.map(function(){var O=(0,m.Z)(function*({sublayer:s,popupTemplate:V}){yield s.load().catch(()=>{});const x=s.createQuery(),M=(0,C.pC)(v)?v.event:null,j=(0,X.k)({renderer:s.renderer,event:M}),$=I.createFetchPopupFeaturesQueryGeometry(u,j);if(x.geometry=$,x.outFields=yield(0,A.e)(s,V),"map-image"===I.layer.type&&"floors"in I.view){var K,N;const ne=null==(K=I.view)||null==(N=K.floors)?void 0:N.clone(),R=(0,k.ff)(ne,s);(0,C.pC)(R)&&(x.where=x.where?`(${x.where}) AND (${R})`:R)}const W=yield I._loadArcadeModules(V);return W&&W.arcadeUtils.hasGeometryOperations(V)||(x.maxAllowableOffset=$.width/j),(yield s.queryFeatures(x)).features});return function(s){return O.apply(this,arguments)}}());return(yield(0,g.as)(ae)).reduce((O,s)=>s.value?[...O,...s.value]:O,[]).filter(O=>null!=O)})()}canResume(){var u;return!(!super.canResume()||null!=(u=this.timeExtent)&&u.isEmpty)}_loadArcadeModules(u){if(u.get("expressionInfos.length")||Array.isArray(u.content)&&u.content.some(v=>"expression"===v.type))return(0,Y.LC)()}};return(0,p._)([(0,i.Cb)()],d.prototype,"exportImageParameters",void 0),(0,p._)([(0,i.Cb)({readOnly:!0})],d.prototype,"exportImageVersion",null),(0,p._)([(0,i.Cb)()],d.prototype,"layer",void 0),(0,p._)([(0,i.Cb)()],d.prototype,"suspended",void 0),(0,p._)([(0,i.Cb)(z.qG)],d.prototype,"timeExtent",void 0),d=(0,p._)([(0,l.j)("esri.views.layers.MapImageLayerView")],d),d};var _=e(94421),ee=e(94672);const te=E.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let b=class extends(q((0,_.y)((0,S.y)(y.Z)))){constructor(){super(...arguments),this._highlightGraphics=new n.J}update(h){this.strategy.update(h).catch(d=>{(0,g.D_)(d)||te.error(d)})}attach(){const{imageMaxWidth:h,imageMaxHeight:d,version:u}=this.layer,v=u>=10.3,I=u>=10;this._bitmapContainer=new c.c,this.container.addChild(this._bitmapContainer);const w=new P.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U.Z(this.view.featuresTilingScheme)});this.container.addChild(w.container),this.strategy=new D.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:h,imageMaxHeight:d,imageRotationSupported:v,imageNormalizationSupported:I,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(h,d){return this._highlightGraphics.add(h),{remove:()=>{this._highlightGraphics.remove(h)}}}supportsSpatialReference(h){return this.layer.serviceSupportsSpatialReference(h)}createFetchPopupFeaturesQueryGeometry(h,d){return(0,ee.K)(h,d,this.view)}doRefresh(){var h=this;return(0,m.Z)(function*(){h.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(h,d,u,v){return this.layer.fetchImage(h,d,u,T({timeExtent:this.timeExtent,floors:this.view.floors},v))}};(0,p._)([(0,i.Cb)()],b.prototype,"strategy",void 0),(0,p._)([(0,i.Cb)()],b.prototype,"updating",void 0),b=(0,p._)([(0,l.j)("esri.views.2d.layers.MapImageLayerView2D")],b);const re=b},10023:(f,o,e)=>{e.d(o,{V:()=>r,e:()=>g});var m=e(15861),p=e(62208),E=e(36630);function g(t){return i.apply(this,arguments)}function i(){return(i=(0,m.Z)(function*(t,a=t.popupTemplate){if(!(0,p.pC)(a))return[];const l=yield a.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=a,{objectIdField:c,typeIdField:S,globalIdField:P,relationships:U}=t;if(l.includes("*"))return["*"];const D=n?yield(0,E.CH)(t):[],y=(0,E.Q0)(t.fieldsIndex,[...l,...D]);return S&&y.push(S),y&&c&&t.fieldsIndex.has(c)&&-1===y.indexOf(c)&&y.push(c),y&&P&&t.fieldsIndex.has(P)&&-1===y.indexOf(P)&&y.push(P),U&&U.forEach(F=>{const{keyField:C}=F;y&&C&&t.fieldsIndex.has(C)&&-1===y.indexOf(C)&&y.push(C)}),y})).apply(this,arguments)}function r(t,a){return t.popupTemplate?t.popupTemplate:(0,p.pC)(a)&&a.defaultPopupTemplateEnabled&&(0,p.pC)(t.defaultPopupTemplate)?t.defaultPopupTemplate:null}},79530:(f,o,e)=>{function m(i){var r;const t=i.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in i.view?g(i.view.floors,t.floorInfo.floorField):null}function p(i,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?g(i,r.floorInfo.floorField):null}function E(i,r){const{definitionExpression:t}=r;return i?t?`(${t}) AND (${i})`:i:t}function g(i,r){if(null==i||!i.length)return null;const t=i.filter(a=>""!==a).map(a=>`'${a}'`);return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}e.d(o,{Hp:()=>E,cx:()=>m,ff:()=>p})}}]);