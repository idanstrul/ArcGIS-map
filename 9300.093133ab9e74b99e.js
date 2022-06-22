"use strict";var Q=Object.defineProperty,Z=Object.defineProperties,b=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,m=(r,l,i)=>l in r?Q(r,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[l]=i,g=(r,l)=>{for(var i in l||(l={}))z.call(l,i)&&m(r,i,l[i]);if(D)for(var i of D(l))F.call(l,i)&&m(r,i,l[i]);return r},P=(r,l)=>Z(r,b(l));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[9300],{49300:(r,l,i)=>{i.r(l),i.d(l,{default:()=>j});var n=i(15861),h=i(17626),O=i(63290),o=i(10699),d=i(77712),R=(i(85931),i(8314),i(90912),i(76898)),y=i(37053),L=i(91082),S=i(37384),E=i(88893),C=i(9598),p=i(58098),U=i(8480),w=i(79527),V=i(45611),B=i(94421);const K=[102113,102100,3857,3785,900913],W=[0,0],A=O.Z.getLogger("esri.views.2d.layers.WMTSLayerView2D");let _=class extends((0,B.y)((0,L.Y)((0,S.y)(V.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new C.Z(e),this._fetchQueue=new U.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(t,s)=>this.fetchTile(t,s)}),this._tileStrategy=new w.Z({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(W,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}doRefresh(){var e=this;return(0,n.Z)(function*(){e.updateRequested||e.suspended||e._refresh()})()}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}fetchTile(e,t={}){var s=this;return(0,n.Z)(function*(){const a="tilemapCache"in s.layer?s.layer.tilemapCache:null,{signal:u,resamplingLevel:M=0}=t;if(!a)return s._fetchImage(e,u);const c=new p.Z(0,0,0,0);let I;try{yield a.fetchAvailabilityUpsample(e.level,e.row,e.col,c,{signal:u}),I=yield s._fetchImage(c,u)}catch(f){if((0,o.D_)(f))throw f;if(M<3){const v=s._tileInfoView.getTileParentId(e.id);if(v){const T=new p.Z(v),x=yield s.fetchTile(T,P(g({},t),{resamplingLevel:M+1}));return(0,E.i)(s._tileInfoView,x,T,e)}}throw f}return(0,E.i)(s._tileInfoView,I,c,e)})()}canResume(){return super.canResume()&&null!==this.tileMatrixSet}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some(t=>(0,y.fS)(t.tileInfo.spatialReference,e))}_enqueueTileFetch(e){var t=this;return(0,n.Z)(function*(){if(!t._fetchQueue.has(e.key.id)){try{const s=yield t._fetchQueue.push(e.key);e.bitmap.source=s,e.bitmap.width=t._tileInfoView.tileInfo.size[0],e.bitmap.height=t._tileInfoView.tileInfo.size[1],e.once("attach",()=>t.requestUpdate())}catch(s){(0,o.D_)(s)||A.error(s)}t.requestUpdate()}})()}_fetchImage(e,t){var s=this;return(0,n.Z)(function*(){return s.layer.fetchTile(e.level,e.row,e.col,{signal:t})})()}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(s=>{e.bitmap.source=s}).catch(s=>{(0,o.D_)(s)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let s=e.tileMatrixSets.find(a=>(0,y.fS)(a.tileInfo.spatialReference,t));return!s&&t.isWebMercator&&(s=e.tileMatrixSets.find(a=>K.includes(a.tileInfo.spatialReference.wkid))),s}};(0,h._)([(0,d.Cb)()],_.prototype,"_fetchQueue",void 0),(0,h._)([(0,d.Cb)({readOnly:!0})],_.prototype,"tileMatrixSet",null),_=(0,h._)([(0,R.j)("esri.views.2d.layers.WMTSLayerView2D")],_);const j=_}}]);