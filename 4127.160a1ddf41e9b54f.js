"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[4127],{3727:(j,b,i)=>{i.d(b,{Z:()=>de});var E=i(15861),l=i(17626),v=i(88879),F=i(80542),_=i(32917),u=i(77712),S=(i(85931),i(8314),i(90912),i(76898)),R=i(37084),T=i(18717),A=i(39406),r=i(44589);class o extends r.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[T.Z],target:()=>this.children,drawPhase:A.jx.MAP});return[...super.prepareRenderPasses(e),t]}}i(29132);var y=i(14517),f=i(63290),x=i(21286),g=i(62208),z=i(10699),Z=i(49672);const G=f.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class Y{constructor(e,t,n,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=n,this.pixelRatio=a}load(){var e=this;return(0,E.Z)(function*(){const t=new AbortController;e.state={name:"loading",abortController:t};const n=yield e.flowStyle.loadResources({extent:e.extent,size:e.size,pixelRatio:e.pixelRatio},t.signal);e.state={name:"loaded",resources:n}})()}prepareForRendering(e){if("loaded"!==this.state.name)return void G.error("Only loaded resources can be attached.");const t=this.state.resources;t.prepareForRendering(e),this.state={name:"attached",resources:t}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return!!this.flowStyle.areResourcesCompatible(e.flowStyle)&&!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio||(this.flowStyle=e.flowStyle,0))}}var L=i(30217),J=i(49966),N=i(57477);class H extends N.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){(0,g.pC)(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if((0,g.Wi)(t))return;const c=[0,0];e.toScreen(c,[t.extent.xmin,t.extent.ymax]);const p=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,O=(0,x.Vl)(e.rotation),{dvs:h}=this.transforms;(0,L.l)(h,[-1,1,0]),(0,L.d)(h,h,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),(0,L.c)(h,h,[c[0],c[1],0]),(0,L.r)(h,h,O),(0,L.d)(h,h,[p*e.pixelRatio,p*e.pixelRatio,1])}_createTransforms(){return{dvs:(0,J.c)()}}}var Q=i(2004);const $=f.Z.getLogger("esri.views.2d.engine.flow.FlowStrategy");let V=class extends y.Z{constructor(s){super(s),this._flowDisplayObject=new H,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(s){const{flowStyle:e}=this.flowContainer;if((0,g.Wi)(e))return void this._clear();const{extent:t,rotation:n,resolution:a,pixelRatio:c}=s.state,p=function q(s,e){const t=new Z.Z({x:(s.xmax+s.xmin)/2,y:(s.ymax+s.ymin)/2,spatialReference:s.spatialReference}),n=s.xmax-s.xmin,a=s.ymax-s.ymin,c=Math.abs(Math.cos((0,x.Vl)(e))),p=Math.abs(Math.sin((0,x.Vl)(e))),O=c*n+p*a,h=p*n+c*a,w=new Q.Z({xmin:t.x-O/2,ymin:t.y-h/2,xmax:t.x+O/2,ymax:t.y+h/2,spatialReference:s.spatialReference});return w.centerAt(t),w}(t,n);p.expand(1.15);const O=[Math.round((p.xmax-p.xmin)/a),Math.round((p.ymax-p.ymin)/a)],h=new Y(e,p,O,c);if((0,g.pC)(this._loading)){if(this._loading.update(h))return;this._loading.destroy(),this._loading=null}!(0,g.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(h)||(h.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},w=>{(0,z.D_)(w)||($.error("A resource failed to load.",w),this._loading=null)}),this._loading=h)}_clear(){this._flowDisplayObject.clear(),(0,g.pC)(this._loading)&&(this._loading.destroy(),this._loading=null)}};(0,l._)([(0,u.Cb)()],V.prototype,"_loading",void 0),(0,l._)([(0,u.Cb)()],V.prototype,"flowContainer",void 0),(0,l._)([(0,u.Cb)()],V.prototype,"updating",null),V=(0,l._)([(0,S.j)("esri.views.2d.engine.flow.FlowStrategy")],V);const k=V;var B=i(83994),M=i(67969),ee=i(49353),W=i(40852);const I=new Map;I.set("a_positionAndSide",0),I.set("a_timeInfo",1),I.set("a_extrude",2),I.set("a_speed",3);const te={geometry:[new W.G("a_positionAndSide",3,M.g.FLOAT,0,36),new W.G("a_timeInfo",3,M.g.FLOAT,12,36),new W.G("a_extrude",2,M.g.FLOAT,24,36),new W.G("a_speed",1,M.g.FLOAT,32,36)]};class se{constructor(e,t,n){this.values=n,this._vertexData=e,this._indexData=t}prepareForRendering(e){const t=B.f.createVertex(e,M.l1.STATIC_DRAW,this._vertexData),n=B.f.createIndex(e,M.l1.STATIC_DRAW,this._indexData),a=new ee.U(e,I,te,{geometry:t},n);this.vertexBuffer=t,this.indexBuffer=n,this.vertexArray=a,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}get locations(){return I}}var U=i(23841);function K(s){const e=s.toRgba();return[e[0]/255,e[1]/255,e[2]/255,e[3]]}class le{constructor(e,t,n,a){this._loadImagery=e,this._createStreamlinesMesh=t,this._timeExtent=a,this._rendererSettings=function ie(s){const e=function ae(s){if(!s.hasVisualVariables("size"))return{kind:"constant",value:[(0,U.F2)(s.trailWidth)]};const e=s.getVisualVariablesForType("size")[0],t=[],n=[];let a;if(e.stops){for(const c of e.stops)t.push(c.value),n.push(c.size);a=e.stops.length}else t.push(e.minDataValue,e.maxDataValue),n.push(e.minSize,e.maxSize),a=2;return{kind:"ramp",stops:t,values:n,count:a}}(s),t=function ne(s){return"constant"===s.kind?s.value[0]:s.values[s.values.length-1]}(e),n=2*t,a=Math.round((0,U.F2)(s.maxPathLength)/n)+1,c=t,O=function re(s){if(!s.hasVisualVariables("color"))return{kind:"constant",value:K(s.color)};const e=s.getVisualVariablesForType("color")[0],t=[],n=[];for(const a of e.stops)t.push(a.value),Array.prototype.push.apply(n,K(a.color));return{kind:"ramp",stops:t,values:n,count:e.stops.length}}(s),h=function oe(s){if(!s.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const e=s.getVisualVariablesForType("opacity")[0],t=[],n=[];for(const a of e.stops)t.push(a.value),n.push(a.opacity);return{kind:"ramp",stops:t,values:n,count:e.stops.length}}(s),{flowSpeed:w,trailLength:he,density:ce}=s;return{lineRenderWidth:e,segmentLength:n,verticesPerLine:a,lineCollisionWidth:c,lineSpacing:10,lineColor:O,lineOpacity:h,lineSpeed:w,fadeDuration:he,density:ce,smoothing:(0,U.F2)(s.smoothing),velocityScale:"flow-from"===s.flowRepresentation?1:-1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}(n)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let t=!0;return t=t&&e._loadImagery===this._loadImagery,t=t&&e._createStreamlinesMesh===this._createStreamlinesMesh,t=t&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,t=t&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,t=t&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,t=t&&e._rendererSettings.density===this._rendererSettings.density,t=t&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,t=t&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,t=t&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,t=t&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,t=t&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,t=t&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,t=t&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,t=t&&e._rendererSettings.lineColor.kind===this._rendererSettings.lineColor.kind,t=t&&e._rendererSettings.lineOpacity.kind===this._rendererSettings.lineOpacity.kind,t=t&&e._rendererSettings.lineRenderWidth.kind===this._rendererSettings.lineRenderWidth.kind,t&&this._rendererSettings.mergeLines&&(t=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),t&&e._timeExtent!==this._timeExtent&&(t=!(!(0,g.pC)(e._timeExtent)||!(0,g.pC)(this._timeExtent))&&e._timeExtent.equals(this._timeExtent)),t}loadResources(e,t){var n=this;return(0,E.Z)(function*(){const{extent:a,size:c}=e;(0,z.k_)(t);const p=yield n._loadImagery(a,c[0],c[1],n._timeExtent,t),{vertexData:O,indexData:h}=yield n._createStreamlinesMesh(n._rendererSettings,p,t);return new se(O,h,{lineColor:n._rendererSettings.lineColor,lineOpacity:n._rendererSettings.lineOpacity,lineRenderWidth:n._rendererSettings.lineRenderWidth})})()}}let D=class extends F.r{constructor(){var s;super(...arguments),s=this,this._loadImagery=(e,t,n,a,c)=>(0,R.KK)(this.layer,e,t,n,a,c),this._createStreamlinesMesh=(e,t,n)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:n}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=(0,E.Z)(function*(){s._updateVisualization()})}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:s}=this,e=()=>{this._loadImagery=(t,n,a,c,p)=>(0,R.KK)(s,t,n,a,c,p),this._updateVisualization()};this.handles.add("multidimensionalDefinition"in s?(0,_.YP)(()=>s.multidimensionalDefinition,e):[(0,_.YP)(()=>s.mosaicRule,e),(0,_.YP)(()=>s.renderingRule,e),(0,_.YP)(()=>s.definitionExpression,e)]),this.container=new o,this._strategy=new k({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(s){s.stationary?this._strategy.update(s):this.layerView.requestUpdate()}hitTest(s){return new v.Z({attributes:{},geometry:s.clone(),layer:this.layer})}moveEnd(){}doRefresh(){return(0,E.Z)(function*(){})()}_updateVisualization(){if("flow"!==this.layer.renderer.type)return;const s=new le(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer,this.timeExtent);this.container.flowStyle=s,this.layerView.requestUpdate()}};(0,l._)([(0,u.Cb)()],D.prototype,"_strategy",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"attached",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"container",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"layer",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"layerView",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"type",void 0),(0,l._)([(0,u.Cb)()],D.prototype,"updating",null),(0,l._)([(0,u.Cb)()],D.prototype,"timeExtent",void 0),D=(0,l._)([(0,S.j)("esri.views.2d.engine.flow.FlowView2D")],D);const de=D},4102:(j,b,i)=>{i.d(b,{F:()=>T}),i(8314);var l=i(62208),v=i(30217),F=i(49966),_=i(9545),u=i(80355),m=i(57477),C=i(64288),P=i(83994),S=i(67969),R=i(49353);class T extends m.s{constructor(r=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=r}destroy(){var r,o;(0,l.pC)(this.vaoData)&&(null==(r=this.vaoData.magdir)||r.vao.dispose(),null==(o=this.vaoData.scalar)||o.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(r){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(r)&&(this._symbolizerParameters=r,this.invalidateVAO())}get source(){return this._source}set source(r){this._source=r,this.invalidateVAO()}invalidateVAO(){var r,o;!this._vaoInvalidated&&(0,l.pC)(this.vaoData)&&(null==(r=this.vaoData.magdir)||r.vao.dispose(),null==(o=this.vaoData.scalar)||o.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(r){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,(0,l.pC)(this.source)&&!(0,l.pC)(this.vaoData)){const{style:o}=this.symbolizerParameters;switch(o){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const d=(0,u.wF)(this.source,this.symbolizerParameters),y=this._createVectorFieldVAO(r.context,d);this.vaoData={magdir:y}}break;case"simple_scalar":{const d=(0,u.K)(this.source,this.symbolizerParameters),y=this._createVectorFieldVAO(r.context,d);this.vaoData={scalar:y}}break;case"wind_speed":{const d=(0,u.wF)(this.source,this.symbolizerParameters),y=this._createVectorFieldVAO(r.context,d),f=(0,u.K)(this.source,this.symbolizerParameters),x=this._createVectorFieldVAO(r.context,f);this.vaoData={magdir:y,scalar:x}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:(0,F.c)()}}setTransform(r){const o=(0,v.b)(this.transforms.dvs),[d,y]=r.toScreenNoRotation([0,0],[this.x,this.y]),f=this.resolution/this.pixelRatio/r.resolution,x=f*this.width,g=f*this.height,z=Math.PI*this.rotation/180;(0,v.c)(o,o,(0,_.f)(d,y)),(0,v.c)(o,o,(0,_.f)(x/2,g/2)),(0,v.r)(o,o,-z),(0,v.c)(o,o,(0,_.f)(-x/2,-g/2)),(0,v.j)(o,o,(0,_.f)(x,g)),(0,v.m)(this.transforms.dvs,r.displayViewMat3,o)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(r,o){const{vertexData:d,indexData:y}=o,f=P.f.createVertex(r,S.l1.STATIC_DRAW,new Float32Array(d)),x=P.f.createIndex(r,S.l1.STATIC_DRAW,new Uint32Array(y)),g=(0,C.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:S.g.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:S.g.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:S.g.FLOAT,normalized:!1}]});return{vao:new R.U(r,g.attributes,g.bufferLayouts,{geometry:f},x),elementCount:y.length}}}},10023:(j,b,i)=>{i.d(b,{V:()=>u,e:()=>F});var E=i(15861),l=i(62208),v=i(36630);function F(m){return _.apply(this,arguments)}function _(){return(_=(0,E.Z)(function*(m,C=m.popupTemplate){if(!(0,l.pC)(C))return[];const P=yield C.getRequiredFields(m.fieldsIndex),{lastEditInfoEnabled:S}=C,{objectIdField:R,typeIdField:T,globalIdField:A,relationships:r}=m;if(P.includes("*"))return["*"];const o=S?yield(0,v.CH)(m):[],d=(0,v.Q0)(m.fieldsIndex,[...P,...o]);return T&&d.push(T),d&&R&&m.fieldsIndex.has(R)&&-1===d.indexOf(R)&&d.push(R),d&&A&&m.fieldsIndex.has(A)&&-1===d.indexOf(A)&&d.push(A),r&&r.forEach(y=>{const{keyField:f}=y;d&&f&&m.fieldsIndex.has(f)&&-1===d.indexOf(f)&&d.push(f)}),d})).apply(this,arguments)}function u(m,C){return m.popupTemplate?m.popupTemplate:(0,l.pC)(C)&&C.defaultPopupTemplateEnabled&&(0,l.pC)(m.defaultPopupTemplate)?m.defaultPopupTemplate:null}}}]);