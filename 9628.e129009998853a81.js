"use strict";var Ce=Object.defineProperty,Se=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,Ee=(w,h,a)=>h in w?Ce(w,h,{enumerable:!0,configurable:!0,writable:!0,value:a}):w[h]=a,D=(w,h)=>{for(var a in h||(h={}))We.call(h,a)&&Ee(w,a,h[a]);if(he)for(var a of he(h))Re.call(h,a)&&Ee(w,a,h[a]);return w},L=(w,h)=>Se(w,ve(h));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[9628],{58775:(w,h,a)=>{a.d(h,{O3:()=>te,lG:()=>fe,my:()=>de,q9:()=>y});var O=a(26584),ne=a(66385),F=a(88071),M=a(36630);const X={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function y(e){return X[e]}function*N(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*$(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const n of t)yield*n}}function Y(e){for(const t of e)if(t.length>2)return!0;return!1}function Z(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],f=e[(n+1)%e.length];t+=s[0]*f[1]-f[0]*s[1]}return t<=0}function J(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function T(e,t,n){switch(t.type){case"LineString":return function z(e,t,n){return W(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function q(e,t,n){for(const s of t.coordinates)W(e,s,n);return e}(e,t,n);case"MultiPoint":return function le(e,t,n){return W(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function ue(e,t,n){for(const s of t.coordinates){V(e,s[0],n);for(let f=1;f<s.length;f++)re(e,s[f],n)}return e}(e,t,n);case"Point":return function ee(e,t,n){return U(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function ce(e,t,n){const s=t.coordinates;V(e,s[0],n);for(let f=1;f<s.length;f++)re(e,s[f],n);return e}(e,t,n)}}function V(e,t,n){const s=J(t);!function E(e){return!Z(e)}(s)?W(e,s,n):oe(e,s,n)}function re(e,t,n){const s=J(t);!function j(e){return Z(e)}(s)?W(e,s,n):oe(e,s,n)}function W(e,t,n){for(const s of t)U(e,s,n);e.lengths.push(t.length)}function oe(e,t,n){for(let s=t.length-1;s>=0;s--)U(e,t[s],n);e.lengths.push(t.length)}function U(e,t,n){const[s,f,C]=t;e.coords.push(s,f),n.hasZ&&e.coords.push(C||0)}function pe(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function te(e){if(!e)throw new O.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new O.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new O.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function de(e,t={}){const n=[],s=new Set,f=new Set;let C,S=!1,P=null,R=!1,{geometryType:_=null}=t,r=!1;for(const i of N(e)){const{geometry:l,properties:p,id:d}=i;if((!l||(_||(_=y(l.type)),y(l.type)===_))&&(S||(S=Y($(l))),R||(R=null!=d,R&&(C=typeof d,P=Object.keys(p).filter(g=>p[g]===d))),R&&null!=d&&(P.length>1?P=P.filter(g=>p[g]===d):1===P.length&&(P=p[P[0]]===d?P:[])),!r&&p)){let g=!0;for(const c in p){if(s.has(c))continue;const b=p[c];if(null==b){g=!1,f.add(c);continue}const G=pe(b);"unknown"!==G?(f.delete(c),s.add(c),n.push({name:c,alias:c,type:G})):f.add(c)}r=g}}const o=P&&1===P.length&&P[0]||null;if(o)for(const i of n)if(i.name===o&&(0,M.H7)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:_,hasZ:S,objectIdFieldName:o,objectIdFieldType:C,unknownFields:Array.from(f)}}function fe(e,t){return Array.from(function*x(e,t={}){const{geometryType:n,objectIdField:s}=t;for(const C of e){var f;const{geometry:S,properties:P,id:R}=C;if(S&&y(S.type)!==n)continue;const _=P||{};let r=null!=(f=_[s])?f:null;s&&null!=R&&!_[s]&&(_[s]=r=R),yield new ne.u_(S?T(new F.Z,S,t):null,_,null,r)}}(N(e),t))}},56554:(w,h,a)=>{a.d(h,{Dm:()=>$,Hq:()=>x,MS:()=>Y,bU:()=>X});var O=a(8314),ne=a(58817),F=a(87757),M=a(24837);function X(E){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===E||"esriGeometryMultipoint"===E?M.I4:"esriGeometryPolyline"===E?M.ET:M.lF}}}const y=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let N=1;function $(E,j){if((0,O.Z)("esri-csp-restrictions"))return()=>D({[j]:null},E);try{let Z=`this.${j} = null;`;for(const T in E)Z+=`this${y.test(T)?`.${T}`:`["${T}"]`} = ${JSON.stringify(E[T])};`;const J=new Function(`\n      return class AttributesClass$${N++} {\n        constructor() {\n          ${Z};\n        }\n      }\n    `)();return()=>new J}catch(Z){return()=>D({[j]:null},E)}}function x(E={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,ne.d9)(E)}}]}function Y(E,j){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:E},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:j,supportsDelete:j,supportsEditing:j,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:j,supportsExceedsLimitStatistics:!0},query:F.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:j,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},89628:(w,h,a)=>{a.d(h,{$9:()=>le,G4:()=>re,Lu:()=>q,WW:()=>t,d:()=>de,eS:()=>pe,gp:()=>oe,j:()=>ce,w9:()=>ue,yN:()=>fe});var O=a(15861),F=(a(29132),a(84792)),M=a(26584),X=a(63290),y=a(62208),N=a(37053),$=a(46367),x=a(82054),Y=a(95786),E=a(58775),j=a(56554),Z=a(60466),J=a(85),T=a(65234);const z=X.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),q="http://www.opengis.net/def/crs/",le=`${q}OGC/1.3/CRS84`;function ue(r,o){return ee.apply(this,arguments)}function ee(){return(ee=(0,O.Z)(function*(r,o,i={},l=5){const{links:p}=r,d=_(p,"items","application/geo+json")||_(p,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,y.Wi)(d))throw new M.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:g}=yield(0,F.default)(d.href,{signal:i.signal,query:L(D({limit:l},i.customParameters),{token:i.apiKey}),headers:{accept:"application/geo+json"}});yield(0,E.O3)(g);const c=(0,E.my)(g,{geometryType:o.geometryType}),b=o.fields||c.fields||[],G=null!=o.hasZ?o.hasZ:c.hasZ,H=c.geometryType,A=o.objectIdField||c.objectIdFieldName||"OBJECTID";let m=o.timeInfo;const K=b.find(u=>u.name===A);if(K)K.type="esriFieldTypeOID",K.editable=!1,K.nullable=!1;else{if(!c.objectIdFieldType)throw new M.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");b.unshift({name:A,alias:A,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(A!==c.objectIdFieldName){const u=b.find(I=>I.name===c.objectIdFieldName);u&&(u.type="esriFieldTypeInteger")}b===c.fields&&c.unknownFields.length>0&&z.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:c.unknownFields}});for(const u of b){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),"esriFieldTypeOID"!==u.type&&"esriFieldTypeGlobalID"!==u.type&&(u.editable=null==u.editable||!!u.editable,u.nullable=null==u.nullable||!!u.nullable),!u.name)throw new M.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:u});if(-1===J.v.jsonValues.indexOf(u.type))throw new M.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}if(m){const u=new Z.Z(b);if(m.startTimeField){const I=u.get(m.startTimeField);I?(m.startTimeField=I.name,I.type="esriFieldTypeDate"):m.startTimeField=null}if(m.endTimeField){const I=u.get(m.endTimeField);I?(m.endTimeField=I.name,I.type="esriFieldTypeDate"):m.endTimeField=null}if(m.trackIdField){const I=u.get(m.trackIdField);I?m.trackIdField=I.name:(m.trackIdField=null,z.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:m}}))}m.startTimeField||m.endTimeField||(z.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:m}}),m=null)}return{drawingInfo:H?(0,j.bU)(H):null,geometryType:H,fields:b,hasZ:!!G,objectIdField:A,timeInfo:m}})).apply(this,arguments)}function ce(r){return V.apply(this,arguments)}function V(){return(V=(0,O.Z)(function*(r,o={}){const{links:i}=r,l=_(i,"data","application/json")||_(i,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,y.Wi)(l))throw new M.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:p,customParameters:d,signal:g}=o,{data:c}=yield(0,F.default)(l.href,{signal:g,headers:{accept:"application/json"},query:L(D({},d),{token:p})});return c})).apply(this,arguments)}function re(r){return W.apply(this,arguments)}function W(){return(W=(0,O.Z)(function*(r,o={}){const{links:i}=r,l=_(i,"conformance","application/json")||_(i,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,y.Wi)(l))throw new M.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:p,customParameters:d,signal:g}=o,{data:c}=yield(0,F.default)(l.href,{signal:g,headers:{accept:"application/json"},query:L(D({},d),{token:p})});return c})).apply(this,arguments)}function oe(r){return U.apply(this,arguments)}function U(){return(U=(0,O.Z)(function*(r,o={}){const{apiKey:i,customParameters:l,signal:p}=o,{data:d}=yield(0,F.default)(r,{signal:p,headers:{accept:"application/json"},query:L(D({},l),{token:i})});return d})).apply(this,arguments)}function pe(r){return te.apply(this,arguments)}function te(){return(te=(0,O.Z)(function*(r,o={}){const i="application/vnd.oai.openapi+json;version=3.0",l=_(r.links,"service-desc",i);if((0,y.Wi)(l))return z.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:p,customParameters:d,signal:g}=o,{data:c}=yield(0,F.default)(l.href,{signal:g,headers:{accept:i},query:L(D({},d),{token:p})});return c})).apply(this,arguments)}function de(r){const o=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(r),i=null==o?void 0:o.groups;if(!i)return null;const{authority:l,code:p}=i;switch(l.toLowerCase()){case"ogc":switch(p.toLowerCase()){case"crs27":return T.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return T.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const d=Number.parseInt(p,10);return Number.isNaN(d)?null:d}default:return null}}function fe(r,o,i){return e.apply(this,arguments)}function e(){return(e=(0,O.Z)(function*(r,o,i){const l=yield t(r,o,i);return(0,x.cn)(l)})).apply(this,arguments)}function t(r,o,i){return n.apply(this,arguments)}function n(){return(n=(0,O.Z)(function*(r,o,i){const{capabilities:{query:{maxRecordCount:l}},collection:p,layerDefinition:d,queryParameters:{apiKey:g,customParameters:c},spatialReference:b,supportedCrs:G}=r,{links:H}=p,A=_(H,"items","application/geo+json")||_(H,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,y.Wi)(A))throw new M.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:m,num:K,start:u,timeExtent:I,where:Pe}=o;if(o.objectIds)throw new M.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Me=T.Z.fromJSON(b),Q=(0,y.Pt)(o.outSpatialReference,Me),ie=Q.isWGS84?null:f(Q,G),Ie=R(m,G),Oe=S(I),je=P(Pe),we=null!=K?K:null!=u&&void 0!==u?10:l,{data:B}=yield(0,F.default)(A.href,L(D({},i),{query:L(D(D({},c),Ie),{crs:ie,datetime:Oe,query:je,limit:we,startindex:u,token:g}),headers:{accept:"application/geo+json"}}));let se=!1;B.links&&(se=!!B.links.find(ae=>"next"===ae.rel)),!se&&Number.isInteger(B.numberMatched)&&Number.isInteger(B.numberReturned)&&(se=B.numberReturned<B.numberMatched);const{fields:Te,globalIdField:be,hasM:De,hasZ:ye,objectIdField:me}=d,_e=d.geometryType,ge=(0,E.lG)(B,{geometryType:_e,hasZ:ye,objectIdField:me});if(!ie&&Q.isWebMercator)for(const k of ge)if((0,y.pC)(k.geometry)){const ae=(0,x.di)(k.geometry,_e,ye,!1);ae.spatialReference=T.Z.WGS84,k.geometry=(0,x.GH)((0,$.iV)(ae,Q))}for(const k of ge)k.objectId=k.attributes[me];const Fe=ie||!ie&&Q.isWebMercator?Q.toJSON():N.Zn,v=new Y.Z;return v.exceededTransferLimit=se,v.features=ge,v.fields=Te,v.geometryType=_e,v.globalIdFieldName=be,v.hasM=De,v.hasZ=ye,v.objectIdFieldName=me,v.spatialReference=Fe,v})).apply(this,arguments)}function f(r,o){var i,l,p;const{isWebMercator:d,wkid:g}=r;if(!g)return null;const c=d?null!=(i=null!=(l=null!=(p=o[3857])?p:o[102100])?l:o[102113])?i:o[900913]:o[r.wkid];return c?`${q}${c}`:null}function C(r){if((0,y.Wi)(r))return"";const{xmin:o,ymin:i,xmax:l,ymax:p}=r;return`${o},${i},${l},${p}`}function S(r){if((0,y.Wi)(r))return null;const{start:o,end:i}=r;return`${(0,y.pC)(o)?o.toISOString():".."}/${(0,y.pC)(i)?i.toISOString():".."}`}function P(r){return(0,y.Wi)(r)||!r||"1=1"===r?null:r}function R(r,o){if(!function s(r){return(0,y.pC)(r)&&"extent"===r.type}(r))return null;const{spatialReference:i}=r;if(!i||i.isWGS84)return{bbox:C(r)};const l=f(i,o);return(0,y.pC)(l)?{bbox:C(r),"bbox-crs":l}:i.isWebMercator?{bbox:C((0,$.iV)(r,T.Z.WGS84))}:null}function _(r,o,i){return r.find(l=>l.rel===o&&l.type===i)||r.find(l=>l.rel===o&&!l.type)}}}]);