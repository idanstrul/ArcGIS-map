"use strict";var B=Object.defineProperty,Q=Object.defineProperties,R=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,E=(h,a,t)=>a in h?B(h,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[a]=t,y=(h,a)=>{for(var t in a||(a={}))W.call(a,t)&&E(h,t,a[t]);if(x)for(var t of x(a))Y.call(a,t)&&E(h,t,a[t]);return h},S=(h,a)=>Q(h,R(a));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[5227],{25227:(h,a,t)=>{t.r(a),t.d(a,{default:()=>K});var g=t(15861),n=t(17626),C=t(84792),D=t(26584),T=t(63290),p=t(62208),M=t(99959),m=t(10699),O=t(21726),l=t(77712),V=t(85931),b=(t(8314),t(90912),t(68653)),j=t(76898),U=t(79334),Z=t(63602),$=t(5143),w=t(65088),A=t(49286),P=t(6647),N=t(13812),H=t(54024),J=t(59289);const G=T.Z.getLogger("esri.core.workers.WorkerHandle");class L extends class z{constructor(e,r,s,d={}){this._mainMethod=r,this._listeners=[],this._promise=(0,J.bA)(e,S(y({},d),{schedule:s})).then(v=>{if(void 0===this._thread){this._thread=v,this._promise=null,d.hasInitialize&&this.broadcast({},"initialize");for(const f of this._listeners)this._connectListener(f)}else v.close()}),this._promise.catch(v=>G.error(`Failed to initialize ${e} worker: ${v}`))}on(e,r){const s={removed:!1,eventName:e,callback:r,threadHandle:null};return this._listeners.push(s),this._connectListener(s),(0,H.kB)(()=>{s.removed=!0,(0,V.Od)(this._listeners,s),this._thread&&(0,p.pC)(s.threadHandle)&&s.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,r){return this.invokeMethod(this._mainMethod,e,r)}invokeMethod(e,r,s){if(this._thread){const d=this.getTransferList(r,e);return this._thread.invoke(e,r,{transferList:d,signal:s})}return this._promise?this._promise.then(()=>((0,m.k_)(s),this.invokeMethod(e,r,s))):Promise.reject(null)}broadcast(e,r){return this._thread?Promise.all(this._thread.broadcast(r,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,r)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(r=>{e.removed||(e.threadHandle=r)})}}{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,s){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},s):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(u.forEach((e,r)=>{e===this&&u.delete(r)}),this.destroy())}}const u=new Map,I=T.Z.getLogger("esri.layers.ElevationLayer");let o=class extends((0,$.Z)((0,w.Y)((0,A.q)((0,P.I)((0,M.R)(Z.Z)))))){constructor(...i){super(...i),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function F(i=null){let e=u.get((0,p.Wg)(i));return e||((0,p.pC)(i)?(e=new L(r=>i.schedule(r)),u.set(i,e)):(e=new L,u.set(null,e))),++e.ref,e}()}normalizeCtorArgs(i,e){return"string"==typeof i?y({url:i},e):i}destroy(){this._lercDecoder=(0,p.RY)(this._lercDecoder)}set minScale(i){this.constructed&&I.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(i){this.constructed&&I.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(i,e){let r=e.currentVersion;return r||(r=9.3),r}load(i){const e=(0,p.pC)(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:r=>{for(let s=0;s<r.typeKeywords.length;s++)if("elevation 3d layer"===r.typeKeywords[s].toLowerCase())return!0;throw new D.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},i).catch(m.r9).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(i,e,r,s){const d=(0,p.pC)((s=s||{signal:null}).signal)?s.signal:s.signal=(new AbortController).signal,v={responseType:"array-buffer",signal:d},f={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(i,e,r,s)).then(()=>(0,C.default)(this.getTileUrl(i,e,r),v)).then(c=>this._lercDecoder.decode(c.data,f,d)).then(c=>({values:c.pixelData,width:c.width,height:c.height,maxZError:c.fileInfo.maxZError,noDataValue:c.noDataValue,minValue:c.minValue,maxValue:c.maxValue}))}getTileUrl(i,e,r){const s=!this.tilemapCache&&this.supportsBlankTile,d=(0,O.B7)(S(y({},this.parsedUrl.query),{blankTile:!s&&null}));return`${this.parsedUrl.path}/tile/${i}/${e}/${r}${d?"?"+d:""}`}queryElevation(i,e){var r=this;return(0,g.Z)(function*(){const{ElevationQuery:s}=yield t.e(1991).then(t.bind(t,1991));return(0,m.k_)(e),(new s).query(r,i,e)})()}createElevationSampler(i,e){var r=this;return(0,g.Z)(function*(){const{ElevationQuery:s}=yield t.e(1991).then(t.bind(t,1991));return(0,m.k_)(e),(new s).createSampler(r,i,e)})()}_fetchTileAvailability(i,e,r,s){return this.tilemapCache?this.tilemapCache.fetchAvailability(i,e,r,s):Promise.resolve("unknown")}_fetchImageService(i){var e=this;return(0,g.Z)(function*(){if(e.sourceJSON)return e.sourceJSON;const r={query:y({f:"json"},e.parsedUrl.query),responseType:"json",signal:i},s=yield(0,C.default)(e.parsedUrl.path,r);s.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.sourceJSON=s.data,e.read(s.data,{origin:"service",url:e.parsedUrl})})()}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,n._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),(0,n._)([(0,l.Cb)({readOnly:!0,type:U.Z})],o.prototype,"heightModelInfo",void 0),(0,n._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),(0,n._)([(0,l.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,n._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"minScale",null),(0,n._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"maxScale",null),(0,n._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),(0,n._)([(0,l.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],o.prototype,"operationalLayerType",void 0),(0,n._)([(0,l.Cb)()],o.prototype,"sourceJSON",void 0),(0,n._)([(0,l.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],o.prototype,"type",void 0),(0,n._)([(0,l.Cb)(N.HQ)],o.prototype,"url",void 0),(0,n._)([(0,l.Cb)()],o.prototype,"version",void 0),(0,n._)([(0,b.r)("version",["currentVersion"])],o.prototype,"readVersion",null),o=(0,n._)([(0,j.j)("esri.layers.ElevationLayer")],o),o.prototype.fetchTile.__isDefault__=!0;const K=o}}]);