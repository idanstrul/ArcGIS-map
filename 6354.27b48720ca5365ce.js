"use strict";var Fe=Object.defineProperty,Ee=Object.defineProperties,me=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,W=(m,y,o)=>y in m?Fe(m,y,{enumerable:!0,configurable:!0,writable:!0,value:o}):m[y]=o,w=(m,y)=>{for(var o in y||(y={}))Te.call(y,o)&&W(m,o,y[o]);if(B)for(var o of B(y))Se.call(y,o)&&W(m,o,y[o]);return m},N=(m,y)=>Ee(m,me(y));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[6354],{86354:(m,y,o)=>{o.r(y),o.d(y,{FeatureServiceSnappingSourceWorker:()=>_,default:()=>ve});var d=o(15861),c=o(17626),J=o(61885),L=o(72392),a=o(62208),F=o(10699),Q=o(27e3),h=o(77712),V=o(85931),I=(o(8314),o(90912),o(76898)),U=o(65234),G=o(82708),k=o(38330),b=o(2584),$=o(62708),O=o(84952),Z=o(14517);let A=class extends Z.Z{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this._process()}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this._process()})}};(0,c._)([(0,h.Cb)()],A.prototype,"updating",void 0),A=(0,c._)([(0,I.j)("esri.core.AsyncSequence")],A);var l,e,K=o(80542),X=o(54024),Y=o(63290),q=o(32917),ee=o(2004),E=o(65401),H=o(82054),te=o(98558),x=o(20477),M=o(59213);class ie{constructor(t,i){this.data=t,this.resolution=i,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,i){var s=this;return{type:l.FETCH_COUNT,previous:t,task:(0,F.vr)(function(){var r=(0,d.Z)(function*(n){const u=yield(0,M.mt)(i.fetchCount(s,n));s.state.type===l.FETCH_COUNT&&(s.state=s._gotoFetchedCount(s.state,u.ok?u.value:1/0))});return function(n){return r.apply(this,arguments)}}())}}_gotoFetchedCount(t,i){return{type:l.FETCHED_COUNT,featureCount:i,previous:t}}_gotoFetchFeatures(t,i){var s=this;return{type:l.FETCH_FEATURES,previous:t,task:(0,F.vr)(function(){var r=(0,d.Z)(function*(n){const u=yield(0,M.mt)(i.fetchFeatures(s,t.featureCount,n));s.state.type===l.FETCH_FEATURES&&(s.state=s._gotoFetchedFeatures(s.state,u.ok?u.value:[]))});return function(n){return r.apply(this,arguments)}}())}}_gotoFetchedFeatures(t,i){return{type:l.FETCHED_FEATURES,previous:t,features:i}}_goToDone(t,i){return i.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!(0,a.Wi)(t)&&this.data.extent)||((0,E.oJ)(t,z),(0,E.kK)(this.data.extent,z))}}(e=l||(l={}))[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE";const z=(0,E.Ue)(),se=Y.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let f=class extends K.r{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new A,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&((0,a.pC)(e)&&(0,a.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this.configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{(0,V.fS)(e,t,({id:i},{id:s})=>i===s)||this._process()},q.Z_)}destroy(){this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){var t=this;this.pendingEdits.push(e,function(){var i=(0,d.Z)(function*(s){if(0===s.addedFeatures.length&&0===s.updatedFeatures.length&&0===s.deletedFeatures.length)return;for(const[,n]of t.pendingTiles)n.reset();const r=N(w({},s),{deletedFeatures:s.deletedFeatures.map(({objectId:n,globalId:u})=>n&&-1!==n?n:t._lookupObjectIdByGlobalId(u))});yield t.updatingHandles.addPromise(t.store.processEdits(r,(n,u)=>t._queryFeaturesById(n,u),t.pendingEditsAbortController.signal)),t._processPendingTiles()});return function(s){return i.apply(this,arguments)}}())}_initializeFetchExtent(){var e=this;if(!this.capabilities.query.supportsExtent)return;const t=(0,F.vr)(function(){var i=(0,d.Z)(function*(s){try{var r;const n=yield(0,x.executeQueryForExtent)(e.url,new O.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:s});e.store.extent=ee.Z.fromJSON(null==(r=n.data)?void 0:r.extent)}catch(n){(0,F.r9)(n),se.warn("Failed to fetch data extent",n)}});return function(s){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add((0,X.kB)(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,a.Wi)(e))for(const{data:t,resolution:i}of e.missingTiles){const s=this.pendingTiles.get(t.id);s?(s.resolution=i,s.alive=!0):this._createPendingTile(t,i)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.store.process(this.tilesOfInterest[t],(r,n)=>this._verifyTileComplexity(r,n));(0,a.Wi)(e)?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,i)=>this._fetchCount(t,i),fetchFeatures:(t,i,s)=>this._fetchFeatures(t,i,s),finish:(t,i)=>this._finishPendingTile(t,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<ne}_verifyFeatureDensity(e,t){if((0,a.Wi)(this.tileInfo))return!1;const i=this.tileSize*t;return e*(oe/(i*i))<ae}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=l.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const i=new ie(e,t);return this.pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}_fetchCount(e,t){var i=this;return(0,d.Z)(function*(){return i.store.fetchCount(e.data,i.url,i._createCountQuery(e),{query:i.customParameters,timeout:D,signal:t})})()}_fetchFeatures(e,t,i){var s=this;return(0,d.Z)(function*(){let r,n=0,u=0,v=t;for(;;){const p=s._createFeaturesQuery(e),g=s._setPagingParameters(p,n,v),{features:C,exceededTransferLimit:Ce}=yield s._queryFeatures(p,i);if(g&&(n+=(0,a.Wg)(p.num)),u+=C.length,r=r?r.concat(C):C,v=t-u,!g||!Ce||v<=0)return r}})()}_filterProperties(e){return(0,a.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if((0,a.Wi)(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(s=null!=(n=r.objectId)?n:r.attributes[i])}),(0,a.Wi)(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery(null);return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}_queryFeaturesPBF(e,t){var i=this;return(0,d.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,x.executeQueryPBF)(i.url,e,new te.J({sourceSpatialReference:s}),{query:i.configuration.customParameters,timeout:D,signal:t});return(0,H.lM)(r)})()}_queryFeaturesJSON(e,t){var i=this;return(0,d.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,x.executeQuery)(i.url,e,s,{query:i.configuration.customParameters,timeout:D,signal:t});return(0,H.h_)(r,i.objectIdField)})()}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,a.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new O.Z({returnZ:!1,returnM:!1,geometry:(0,a.pC)(this.tileInfo)&&(0,a.pC)(e)?(0,E.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return(0,a.pC)(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:u,supportsResultType:v}=this.capabilities.query,p=s?O.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,g=p*((v||r)&&n?n:u||re);return e.start=t,s?(e.maxRecordCountFactor=Math.min(p,Math.ceil(i/g)),e.num=Math.min(i,e.maxRecordCountFactor*g)):e.num=Math.min(i,g),!0}};(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"url",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"objectIdField",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"globalIdField",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"capabilities",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"sourceSpatialReference",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"spatialReference",void 0),(0,c._)([(0,h.Cb)({constructOnly:!0})],f.prototype,"store",void 0),(0,c._)([(0,h.Cb)({readOnly:!0})],f.prototype,"minimumVerticesPerFeature",null),(0,c._)([(0,h.Cb)()],f.prototype,"filter",null),(0,c._)([(0,h.Cb)()],f.prototype,"customParameters",null),(0,c._)([(0,h.Cb)({readOnly:!0})],f.prototype,"configuration",null),(0,c._)([(0,h.Cb)()],f.prototype,"tileInfo",null),(0,c._)([(0,h.Cb)()],f.prototype,"tileSize",null),(0,c._)([(0,h.Cb)()],f.prototype,"tilesOfInterest",void 0),(0,c._)([(0,h.Cb)({readOnly:!0})],f.prototype,"updating",null),(0,c._)([(0,h.Cb)({readOnly:!0})],f.prototype,"availability",void 0),f=(0,c._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],f);const re=2e3,D=6e5,ne=1e6,oe=25,ae=1;var R=o(27306),le=o(61256);class ue{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=i.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let S=class extends Z.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*R.Y8.MEGABYTES,this.tileBounds=new le.H,this.tiles=new ue,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=(0,E.Ue)()}add(e,t){const i=[];for(const s of t)this._referenceFeature(s.objectId)===T.ADDED&&i.push(s);this._addTileStorage(e,new Set(t.map(({objectId:s})=>s)),function ce(e){return e.reduce((t,i)=>t+function he(e){return 32+function de(e){if((0,a.Wi)(e))return 0;const t=(0,R.do)(e.lengths,4);return 32+(0,R.do)(e.coords,8)+t}(e.geometry)+(0,R.f2)(e.attributes)}(i),0)}(t)),this.featureStore.addMany(i),this.tiles.applyByteSizeLimit(this.maximumByteSize,s=>this._removeTileStorage(s))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i){this.tiles.set(e.id,new fe(e,t,i)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}_remove({id:e}){const t=this.tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===T.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this.tiles.delete(i),this.tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const i of e)t.objectIds.delete(i);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}_processEditsRefetch(e,t,i){var s=this;return(0,d.Z)(function*(){const r=(yield t(e,i)).features,{hasZ:n,hasM:u}=s.featureStore;for(const v of r){const p=(0,H.$)(s.tmpBoundingRect,v.geometry,n,u);(0,a.Wi)(p)||s.tileBounds.forEachInBounds(p,g=>{const C=s.tiles.get(g);s.featureStore.add(v),C.objectIds.has(v.objectId)||(C.objectIds.add(v.objectId),s._referenceFeature(v.objectId),s.tileFeatureCounts.set(C.data.id,C.objectIds.size))})}})()}process(e,t=(()=>!0)){if((0,a.Wi)(this.tileInfo)||!e.extent||(0,a.pC)(this.extent)&&!(0,E.kK)((0,E.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new P(e);if(this.tiles.has(e.id))return new P(e);const i=this._createTileTree(e,this.tileInfo);return this._simplify(i,t,null,0,1),this._collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}fetchCount(e,t,i,s){var r=this;return(0,d.Z)(function*(){const n=r.tileFeatureCounts.get(e.id);if(null!=n)return n;const u=yield(0,x.executeQueryForCount)(t,i,s);return r.tileFeatureCounts.set(e.id,u.data.count),u.data.count})()}_createTileTree(e,t){const i=new j(e.level,e.row,e.col);return t.updateTileInfo(i,b.Z.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,s=>{const r=this.tiles.get(s).data;this._tilesAreRelated(e,r)&&this._populateChildren(i,r,t,this.tileFeatureCounts.get(r.id)||0)}),i}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}_populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,u=t.col>>r,p=u-(e.col<<1)+(n-(e.row<<1)<<1),g=e.children[p];if((0,a.pC)(g))this._populateChildren(g,t,i,s);else{const C=new j(e.level+1,n,u);i.updateTileInfo(C,b.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[p]=C,this._populateChildren(C,t,i,s)}}_simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),(0,a.pC)(i)&&(i.children[s]=null),n);const u=r/2,v=u*u;let p=0;for(let g=0;g<e.children.length;g++){const C=e.children[g];p+=(0,a.pC)(C)?this._simplify(C,t,e,g,u):v}return 0===p?this._mergeChildren(e):1-p/n<ge&&(this._purge(e),(0,a.pC)(i)&&(i.children[s]=null),p=n),p}_mergeChildren(e){const t=new Set;let i=0;this._forEachLeaf(e,s=>{const r=this.tiles.get(s.id);if(r){i+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(s)}}),this._addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)(0,a.Wi)(i)||(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(!(0,a.Wi)(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++)this._purge(e.children[t]),e.children[t]=null}_collectMissingTiles(e,t,i){const s=new pe(i,e,this.extent);return this._collectMissingTilesRecurse(t,s,1),s.info}_collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];(0,a.Wi)(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),s):this._collectMissingTilesRecurse(n,t,s)}}_referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?T.ADDED:T.UNCHANGED}_unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),T.REMOVED):(t>0&&this.refCounts.set(e,t),T.UNCHANGED)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};(0,c._)([(0,h.Cb)({constructOnly:!0})],S.prototype,"featureStore",void 0),(0,c._)([(0,h.Cb)()],S.prototype,"tileInfo",void 0),(0,c._)([(0,h.Cb)()],S.prototype,"extent",void 0),(0,c._)([(0,h.Cb)()],S.prototype,"maximumByteSize",void 0),S=(0,c._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],S);class fe{constructor(t,i,s){this.data=t,this.objectIds=i,this.byteSize=s}}class j{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&((0,a.pC)(this.children[0])||(0,a.pC)(this.children[1])||(0,a.pC)(this.children[2])||(0,a.pC)(this.children[3]))}}class P{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,E.SO)(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class pe{constructor(t,i,s){this.tileInfo=t,this.extent=null,this.info=new P(i),(0,a.pC)(s)&&(this.extent=(0,E.oJ)(s))}addMissing(t,i,s,r){const n={id:null,level:t,row:i,col:s};this.tileInfo.updateTileInfo(n,b.Z.ExtrapolateOptions.POWER_OF_TWO),!(0,a.pC)(n.extent)||(0,a.pC)(this.extent)&&!(0,E.kK)(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=(0,E.SO)(n.extent))}}const ge=.18751;var T;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"}(T||(T={}));var ye=o(70257);let _=class extends J.Z.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=(0,F.dD)(),this.handles=new L.Z,this.updatingHandles=new ye.t,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}setup(e){var t=this;return(0,d.Z)(function*(){const{geometryType:i,objectIdField:s,timeInfo:r,fields:n}=e.serviceInfo;return t.featureStore=new G.Z(N(w({},e.serviceInfo),{hasZ:!1,hasM:!1})),t.queryEngine=new k.Z({spatialReference:e.spatialReference,featureStore:t.featureStore,geometryType:i,fields:n,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:r?$.Z.fromJSON(r):null}),t.featureFetcher=new f({store:new S({featureStore:t.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:U.Z.fromJSON(e.spatialReference),sourceSpatialReference:U.Z.fromJSON(e.serviceInfo.spatialReference)}),t.handles.add([t.featureFetcher.watch("availability",u=>t.emit("notify-availability",{availability:u}),!0),t.watch("updating",()=>t._notifyUpdating())]),t.whenSetup.resolve(),t.isInitializing=!1,t.configure(e.configuration)})()}configure(e){var t=this;return(0,d.Z)(function*(){return yield t.updatingHandles.addPromise(t.whenSetup.promise),t._updateFeatureFetcherConfiguration(e),{result:{}}})()}fetchCandidates(e,t){var i=this;return(0,d.Z)(function*(){return yield i.whenSetup.promise,(0,F.k_)(t),{result:yield i.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:(0,a.pC)(e.filter)?e.filter:{where:"1=1"}},(0,a.pC)(t)?t.signal:null)}})()}updateTiles(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),i.featureFetcher.tileSize=e.tileSize,i.featureFetcher.tilesOfInterest=e.tiles,i.featureFetcher.tileInfo=(0,a.pC)(e.tileInfo)?b.Z.fromJSON(e.tileInfo):null,{result:{}}})()}refresh(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),i.featureFetcher.refresh(),{result:{}}})()}whenNotUpdating(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),yield(0,F.Hl)((0,Q.cm)(i,"updating"),t),{result:{}}})()}getDebugInfo(e,t){var i=this;return(0,d.Z)(function*(){return(0,F.k_)(t),{result:i.featureFetcher.debugInfo}})()}beginApplyEdits(e,t){var i=this;return(0,d.Z)(function*(){i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t);const s=(0,F.dD)();return i.pendingApplyEdits.set(e.id,s),i.featureFetcher.applyEdits(s.promise),i.updatingHandles.addPromise(s.promise),{result:{}}})()}endApplyEdits(e,t){var i=this;return(0,d.Z)(function*(){const s=i.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),(0,F.k_)(t),{result:{}}})()}_updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=(0,a.pC)(e.filter)?O.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function ve(){return new _}(0,c._)([(0,h.Cb)({readOnly:!0})],_.prototype,"updating",null),(0,c._)([(0,h.Cb)()],_.prototype,"isInitializing",void 0),_=(0,c._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],_)}}]);