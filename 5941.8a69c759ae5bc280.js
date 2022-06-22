"use strict";var Ie=Object.defineProperty,be=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,D=(c,p,s)=>p in c?Ie(c,p,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[p]=s,L=(c,p)=>{for(var s in p||(p={}))Ce.call(p,s)&&D(c,s,p[s]);if(R)for(var s of R(p))Se.call(p,s)&&D(c,s,p[s]);return c},S=(c,p)=>be(c,Le(p));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[5941],{55941:(c,p,s)=>{s.r(p),s.d(p,{default:()=>ye});var v=s(15861),o=s(17626),Z=s(73281),U=(s(4832),s(49067),s(26284),s(54928),s(69357),s(40342),s(14726),s(33474),s(32088)),N=s(84792),F=s(48701),u=s(26584),Q=s(63290),y=s(62208),V=s(99959),O=s(10699),G=s(32917),M=s(21726),n=s(77712),K=(s(85931),s(8314),s(52323)),m=(s(90912),s(68653)),j=s(76898),E=s(31283),W=s(63602),Y=s(50085),$=s(65088),J=s(49286),z=s(6647),H=s(99555),C=s(10157),B=s(59787),I=s(13812),X=s(83989),q=s(47058),k=s(74711),_=s(55911),ee=s(60466),T=s(36630),b=s(35031),te=s(170),x=s(62667),re=s(2430),se=s(86810);let f=class extends se.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,o._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],f.prototype,"name",void 0),(0,o._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],f.prototype,"field",void 0),(0,o._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],f.prototype,"currentRangeExtent",void 0),(0,o._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],f.prototype,"fullRangeExtent",void 0),(0,o._)([(0,n.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=(0,o._)([(0,j.j)("esri.layers.support.RangeInfo")],f);const oe=f;var ie=s(39683),ne=s(84952),ae=s(49430),le=s(92236);const de=["3DObject","Point"],g=Q.Z.getLogger("esri.layers.SceneLayer"),P=(0,_.v)();let i=class extends((0,C.Vt)((0,$.Y)((0,J.q)((0,z.I)((0,H.M)((0,V.R)((0,Y.V)(W.Z)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new F.Z,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?L({url:e},t):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,a,l,d;const h=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(a=r.domains)?void 0:a[e];return h&&"inherited"!==h.type?h:null!=(l=null==(d=this.getField(e))?void 0:d.domain)?l:null}getFeatureType(e){return e&&(0,y.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new ee.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:b.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return pe[this.profile]||"mesh"}set renderer(e){(0,T.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,y.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:B.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:l,supportsReturnServiceEditsInSourceSpatialReference:d},data:{supportsZ:h,supportsM:ue,isVersioned:ce,supportsAttachment:he},operations:{supportsEditing:fe,supportsUpdate:ve,supportsQuery:ge,supportsQueryAttachments:me}}=e,w=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:d,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:l},data:{supportsAttachment:he,supportsZ:h,supportsM:ue,isVersioned:ce},operations:{supportsQuery:ge,supportsQueryAttachments:me,supportsEditing:fe&&w,supportsAdd:!1,supportsDelete:!1,supportsUpdate:ve&&w}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,y.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>("esriFieldTypeOID"===r.type&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>("esriFieldTypeGlobalID"===r.type&&(e=r.name),!!e)),e||void 0}get displayField(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&A[r]?A[r]:(g.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,y.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(O.r9).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>(0,ie.y)(this,{origin:"service"},t)).then(()=>(0,T.YN)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new ne.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(null!=r&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(g.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,ae.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,y.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,v.Z)(function*(){if(yield e.load(),(0,y.Wi)(e.associatedLayer))throw new u.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(t){throw new u.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:t})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(t=>t.name===e)}queryCachedStatistics(e,t){var r=this;return(0,v.Z)(function*(){if(yield r.load(t),!r.statisticsInfo)throw new u.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const a=r.fieldsIndex.get(e);if(!a)throw new u.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const l of r.statisticsInfo)if(l.name===a.name){const d=(0,M.v_)(r.parsedUrl.path,l.href);return(0,N.default)(d,{query:{f:"json",token:r.apiKey},responseType:"json",signal:t?t.signal:null}).then(h=>h.data)}throw new u.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,t){var r=this;return(0,v.Z)(function*(){return r._debouncedSaveOperations(C.xp.SAVE_AS,S(L({},t),{getTypeKeywords:()=>r._getTypeKeywords(),portalItemLayerType:"scene"}),e)})()}save(){var e=this;return(0,v.Z)(function*(){const t={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(C.xp.SAVE,t)})()}applyEdits(e,t){var r=this;return(0,v.Z)(function*(){const a=yield s.e(1913).then(s.bind(s,81913));if(yield r.load(),(0,y.Wi)(r.associatedLayer))throw new u.Z(`${r.type}-layer:not-editable`,"Service is not editable");return yield r.associatedLayer.load(),a.applyEdits(r,r.associatedLayer.source,e,t)})()}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===de.indexOf(e.layerType))throw new u.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new u.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function t(r,a){let l=!1,d=!1;if(null==r)l=!0,d=!0;else{const h=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":l=!0,d=h;break;case"vertex-reference-frame":l=!0,d=!h;break;default:l=!1}}if(!l)throw new u.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!d)throw new u.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new u.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(l=>l.name===e.name)),r=!!((0,y.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(l=>l&&e.name===l.name));this._fieldUsageInfo[e.name]={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,y.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,y.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,K.vw)(this);for(let r=0;r<e.length;r++){const a=e[r],l=this.originIdOf(a),d=this.associatedLayer.originIdOf(a);l<d&&(d===E.s3.SERVICE||d===E.s3.PORTAL_ITEM)&&t.setAtOrigin(a,this.associatedLayer[a],d)}}_setAssociatedFeatureLayer(e){var t=this;return(0,v.Z)(function*(){if(-1===["mesh-pyramids","points"].indexOf(t.profile))return;const r=new k.W(t.parsedUrl,t.portalItem,t.apiKey,e);try{t.associatedLayer=yield r.fetch()}catch(a){(0,O.D_)(a)||t._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){var e=this;return(0,v.Z)(function*(){yield(0,G.N1)(()=>e.popupEnabled&&null!=e.popupTemplate);const t=`this SceneLayer: ${e.title}`;null==e.attributeStorageInfo?g.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${t}`):g.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${t}`)})()}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&g.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&g.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,o._)([(0,n.Cb)({types:{key:"type",base:X.Z,typeMap:{selection:q.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),(0,o._)([(0,n.Cb)({type:[oe],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),(0,o._)([(0,n.Cb)({json:{read:!1}})],i.prototype,"associatedLayer",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),(0,o._)([(0,n.Cb)(S(L({},P.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],i.prototype,"fields",void 0),(0,o._)([(0,n.Cb)()],i.prototype,"types",null),(0,o._)([(0,n.Cb)()],i.prototype,"typeIdField",null),(0,o._)([(0,n.Cb)()],i.prototype,"formTemplate",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"fieldsIndex",null),(0,o._)([(0,n.Cb)({type:re.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),(0,o._)([(0,n.Cb)(P.outFields)],i.prototype,"outFields",void 0),(0,o._)([(0,n.Cb)({type:b.U4,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),(0,o._)([(0,m.r)("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),(0,o._)([(0,n.Cb)({type:[b.QI],readOnly:!0})],i.prototype,"materialDefinitions",void 0),(0,o._)([(0,n.Cb)({type:[b.Yh],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,n.Cb)({type:[b.H3],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"statisticsInfo",void 0),(0,o._)([(0,n.Cb)({type:F.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),(0,o._)([(0,n.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),(0,o._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),(0,o._)([(0,n.Cb)(I.PV)],i.prototype,"elevationInfo",null),(0,o._)([(0,n.Cb)({type:String})],i.prototype,"geometryType",null),(0,o._)([(0,n.Cb)(I.iR)],i.prototype,"labelsVisible",void 0),(0,o._)([(0,n.Cb)({type:[te.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:x.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:x.r},write:!0}})],i.prototype,"labelingInfo",void 0),(0,o._)([(0,n.Cb)(I.rn)],i.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,a;if("number"==typeof e&&e>=0&&e<=1)return e;const l=null==(r=t.layerDefinition)||null==(a=r.drawingInfo)?void 0:a.transparency;return void 0!==l?(0,le.b)(l):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),(0,o._)([(0,n.Cb)({types:U.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),(0,o._)([(0,n.Cb)({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),(0,o._)([(0,m.r)("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),(0,o._)([(0,n.Cb)({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),(0,o._)([(0,n.Cb)(I.C_)],i.prototype,"popupEnabled",void 0),(0,o._)([(0,n.Cb)({type:Z.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),(0,o._)([(0,n.Cb)({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),(0,o._)([(0,m.r)("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),(0,o._)([(0,n.Cb)({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),(0,o._)([(0,m.r)("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),(0,o._)([(0,n.Cb)({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),(0,o._)([(0,n.Cb)({type:String,json:{read:!1}})],i.prototype,"profile",void 0),(0,o._)([(0,m.r)("service","profile",["store.profile"])],i.prototype,"readProfile",null),(0,o._)([(0,n.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),(0,o._)([(0,n.Cb)(I.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=(0,o._)([(0,j.j)("esri.layers.SceneLayer")],i);const A={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},pe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ye=i}}]);