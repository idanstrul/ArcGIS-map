"use strict";var St=Object.defineProperty,Et=Object.defineProperties,Dt=Object.getOwnPropertyDescriptors,Ft=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,vt=(w,E,T)=>E in w?St(w,E,{enumerable:!0,configurable:!0,writable:!0,value:T}):w[E]=T,Zt=(w,E)=>{for(var T in E||(E={}))Lt.call(E,T)&&vt(w,T,E[T]);if(Ft)for(var T of Ft(E))Bt.call(E,T)&&vt(w,T,E[T]);return w},Nt=(w,E)=>Et(w,Dt(E));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[6089],{7848:(w,E,T)=>{T.d(E,{G6:()=>Pt,Ie:()=>pt,J9:()=>mt,RF:()=>ct,U1:()=>Ct,vY:()=>dt,ym:()=>It});var W=T(62208),K=T(91179);const Y=(C,M,P)=>[M,P],B=(C,M,P)=>[M,P,C[2]],_=(C,M,P)=>[M,P,C[2],C[3]];function dt(C){return C?{originPosition:"upper-left"===C.originPosition?"upperLeft":"lower-left"===C.originPosition?"lowerLeft":C.originPosition,scale:C.tolerance?[C.tolerance,C.tolerance]:[1,1],translate:(0,W.pC)(C.extent)?[C.extent.xmin,C.extent.ymax]:[0,0]}:null}function V({scale:C,translate:M},P){return Math.round((P-M[0])/C[0])}function J({scale:C,translate:M},P){return Math.round((M[1]-P)/C[1])}function q(C,M,P){const v=[];let N,z,A,k;for(let L=0;L<P.length;L++){const S=P[L];L>0?(A=V(C,S[0]),k=J(C,S[1]),A===N&&k===z||(v.push(M(S,A-N,k-z)),N=A,z=k)):(N=V(C,S[0]),z=J(C,S[1]),v.push(M(S,N,z)))}return v.length>0?v:null}function j({scale:C,translate:M},P){return P*C[0]+M[0]}function O({scale:C,translate:M},P){return M[1]-P*C[1]}function nt(C,M,P){const v=new Array(P.length);if(!P.length)return v;const[N,z]=C.scale;let A=j(C,P[0][0]),k=O(C,P[0][1]);v[0]=M(P[0],A,k);for(let L=1;L<P.length;L++){const S=P[L];A+=S[0]*N,k-=S[1]*z,v[L]=M(S,A,k)}return v}function rt(C,M,P){const v=new Array(P.length);for(let N=0;N<P.length;N++)v[N]=nt(C,M,P[N]);return v}function ct(C,M,P,v,N){return M.x=V(C,P.x),M.y=J(C,P.y),M!==P&&(v&&(M.z=P.z),N&&(M.m=P.m)),M}function It(C,M){return C&&M?(0,K.wp)(M)?ct(C,{},M,!1,!1):(0,K.l9)(M)?function Mt(C,M,P,v,N){const z=function at(C,M,P,v){const N=[],z=P?v?_:B:v?B:Y;for(let A=0;A<M.length;A++){const k=q(C,z,M[A]);k&&k.length>=2&&N.push(k)}return N.length?N:null}(C,P.paths,v,N);return z?(M.paths=z,M):null}(C,{},M,!1,!1):(0,K.oU)(M)?function ft(C,M,P,v,N){const z=function et(C,M,P,v){const N=[],z=P?v?_:B:v?B:Y;for(let A=0;A<M.length;A++){const k=q(C,z,M[A]);k&&k.length>=3&&N.push(k)}return N.length?N:null}(C,P.rings,v,N);return z?(M.rings=z,M):null}(C,{},M,!1,!1):(0,K.aW)(M)?function ht(C,M,P,v,N){return M.points=function tt(C,M,P,v){return q(C,P?v?_:B:v?B:Y,M)}(C,P.points,v,N),M}(C,{},M,!1,!1):(0,K.YX)(M)?function lt(C,M,P,v,N){return M.xmin=V(C,P.xmin),M.ymin=J(C,P.ymin),M.xmax=V(C,P.xmax),M.ymax=J(C,P.ymax),M!==P&&(v&&(M.zmin=P.zmin,M.zmax=P.zmax),N&&(M.mmin=P.mmin,M.mmax=P.mmax)),M}(C,{},M,!1,!1):null:null}function mt(C,M,P,v,N){return(0,W.pC)(P)&&(M.points=function it(C,M,P,v){return nt(C,P?v?_:B:v?B:Y,M)}(C,P.points,v,N)),M}function Ct(C,M,P,v,N){return(0,W.Wi)(P)||(M.x=j(C,P.x),M.y=O(C,P.y),M!==P&&(v&&(M.z=P.z),N&&(M.m=P.m))),M}function pt(C,M,P,v,N){return(0,W.pC)(P)&&(M.rings=function xt(C,M,P,v){return rt(C,P?v?_:B:v?B:Y,M)}(C,P.rings,v,N)),M}function Pt(C,M,P,v,N){return(0,W.pC)(P)&&(M.paths=function ot(C,M,P,v){return rt(C,P?v?_:B:v?B:Y,M)}(C,P.paths,v,N)),M}},46089:(w,E,T)=>{T.r(E),T.d(E,{default:()=>Gt});var W=T(94573),K=T(62208),H=T(86236),Y=T(65234),B=T(33696),yt=(T(27306),T(8314),T(5548)),V=T(65401),gt=(T(7848),T(71774),T(36255));class st{constructor(a,I,F){this.uid=a,this.geometry=I,this.attributes=F,this.visible=!0,this.objectId=null,this.centroid=null}}class bt{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}(0,yt.Ue)(),(0,V.Ue)();var v=T(82054);function N(c,a){return a}function z(c,a,I,F){switch(I){case 0:return S(c,a+F,0);case 1:return"lowerLeft"===c.originPosition?S(c,a+F,1):function X({translate:c,scale:a},I,F){return c[F]-I*a[F]}(c,a+F,1)}}function A(c,a,I,F){return 2===I?S(c,a,2):z(c,a,I,F)}function k(c,a,I,F){return 2===I?S(c,a,3):z(c,a,I,F)}function L(c,a,I,F){return 3===I?S(c,a,3):A(c,a,I,F)}function S({translate:c,scale:a},I,F){return c[F]+I*a[F]}class ${constructor(a){this.options=a,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=N,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}createFeatureResult(){return new bt}finishFeatureResult(a){if(this.options.applyTransform&&(a.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!a.hasZ)return;const I=(0,B.k)(a.geometryType,this.options.sourceSpatialReference,a.spatialReference);if(!(0,K.Wi)(I))for(const F of a.features)I(F.geometry)}createSpatialReference(){return new Y.Z}addField(a,I){a.fields.push(gt.Z.fromJSON(I));const F=a.fields.map(R=>R.name);this._attributesConstructor=function(){for(const R of F)this[R]=null}}addFeature(a,I){const F=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(F>0)for(const R in I.attributes){const D=I.attributes[R];"string"==typeof D&&D.length>F&&(I.attributes[R]="")}a.features.push(I)}addQueryGeometry(a,I){const{queryGeometry:F,queryGeometryType:R}=I,D=(0,v.$g)(F.clone(),F,!1,!1,this.transform),U=(0,v.di)(D,R,!1,!1);let G=null;switch(R){case"esriGeometryPoint":G="point";break;case"esriGeometryPolygon":G="polygon";break;case"esriGeometryPolyline":G="polyline";break;case"esriGeometryMultipoint":G="multipoint"}U.type=G,a.queryGeometryType=R,a.queryGeometry=U}prepareFeatures(a){switch(this.transform=a.transform,this.options.applyTransform&&a.transform&&(this.applyTransform=this._deriveApplyTransform(a)),this.vertexDimension=2,a.hasZ&&this.vertexDimension++,a.hasM&&this.vertexDimension++,a.geometryType){case"point":this.addCoordinate=(I,F,R)=>this.addCoordinatePoint(I,F,R),this.createGeometry=I=>this.createPointGeometry(I);break;case"polygon":this.addCoordinate=(I,F,R)=>this._addCoordinatePolygon(I,F,R),this.createGeometry=I=>this._createPolygonGeometry(I);break;case"polyline":this.addCoordinate=(I,F,R)=>this._addCoordinatePolyline(I,F,R),this.createGeometry=I=>this._createPolylineGeometry(I);break;case"multipoint":this.addCoordinate=(I,F,R)=>this._addCoordinateMultipoint(I,F,R),this.createGeometry=I=>this._createMultipointGeometry(I);break;case"mesh":case"extent":break;default:(0,W.Bg)(a.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new st((0,H.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const a=this.lengths.reduce((I,F)=>I+F,0);this.coordinateBuffer=new Float64Array(a*this.vertexDimension),this.coordinateBufferPtr=0}addLength(a,I,F){0===this.lengths.length&&(this.toAddInCurrentPath=I),this.lengths.push(I)}createPointGeometry(a){const I={type:"point",x:0,y:0,spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM};return I.hasZ&&(I.z=0),I.hasM&&(I.m=0),I}addCoordinatePoint(a,I,F){switch(I=this.applyTransform(this.transform,I,F,0),F){case 0:a.x=I;break;case 1:a.y=I;break;case 2:a.hasZ?a.z=I:a.m=I;break;case 3:a.m=I}}_transformPathLikeValue(a,I){let F=0;return I<=1&&(F=this.previousCoordinate[I],this.previousCoordinate[I]+=a),this.applyTransform(this.transform,a,I,F)}_addCoordinatePolyline(a,I,F){this._dehydratedAddPointsCoordinate(a.paths,I,F)}_addCoordinatePolygon(a,I,F){this._dehydratedAddPointsCoordinate(a.rings,I,F)}_addCoordinateMultipoint(a,I,F){0===F&&a.points.push([]);const R=this._transformPathLikeValue(I,F);a.points[a.points.length-1].push(R)}_createPolygonGeometry(a){return{type:"polygon",rings:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_createPolylineGeometry(a){return{type:"polyline",paths:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_createMultipointGeometry(a){return{type:"multipoint",points:[],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_dehydratedAddPointsCoordinate(a,I,F){0===F&&0==this.toAddInCurrentPath--&&(a.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const R=this._transformPathLikeValue(I,F);0===F&&a[a.length-1].push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=R}_deriveApplyTransform(a){const{hasZ:I,hasM:F}=a;return I&&F?L:I?A:F?k:z}}var At=T(85262);class kt{_parseFeatureQuery(a){const I=(0,At.C)(a.buffer,new $(a.options)),F=Nt(Zt({},I),{spatialReference:I.spatialReference.toJSON(),fields:I.fields?I.fields.map(R=>R.toJSON()):void 0});return Promise.resolve(F)}}function Gt(){return new kt}}}]);