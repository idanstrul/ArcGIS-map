"use strict";var y=Object.defineProperty,C=Object.defineProperties,g=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,D=(i,o,s)=>o in i?y(i,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[o]=s,v=(i,o)=>{for(var s in o||(o={}))J.call(o,s)&&D(i,s,o[s]);if(P)for(var s of P(o))N.call(o,s)&&D(i,s,o[s]);return i},S=(i,o)=>C(i,g(o));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[5976],{15976:(i,o,s)=>{s.r(o),s.d(o,{default:()=>T});var _=s(15861),m=(s(29132),s(62208)),p=s(98346),l=s(60295),M=s(8614),c=s(77692),d=s(28594),u=s(80355),h=s(46572),B=s(54805),x=s(37084),O=s(2004);class T{convertVectorFieldData(t){const e=l.Z.fromJSON(t.pixelBlock),r=(0,u.KC)(e,t.type);return Promise.resolve((0,m.pC)(r)&&r.toJSON())}decode(t){return(0,_.Z)(function*(){const e=yield(0,M.J)(t.data,t.options);return e&&e.toJSON()})()}symbolize(t){t.pixelBlock=l.Z.fromJSON(t.pixelBlock),t.extent=t.extent?O.Z.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}updateSymbolizer(t){var e=this;return(0,_.Z)(function*(){var r;e.symbolizer=B.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(r=e.symbolizer)?void 0:r.rendererJSON.type)&&(e.symbolizer.rendererJSON.histograms=t.histograms)})()}stretch(t){const e=this.symbolizer.simpleStretch(l.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=(0,c.Hv)(l.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=(0,c.Vl)(l.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((r,n)=>{e.set(n,null==r?void 0:r.toJSON())}),Promise.resolve(e)}mosaicAndTransform(t){return(0,_.Z)(function*(){var e;const r=t.srcPixelBlocks.map(E=>E?new l.Z(E):null),n=(0,c.us)(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let a,f=n;return t.coefs&&(f=(0,c.Uk)(n,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(a=(0,c.Qh)(t.destDimension,t.gcsGrid),f=(0,m.Wg)((0,u.xQ)(f,t.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(e=f)?void 0:e.toJSON(),localNorthDirections:a}})()}createStreamlinesMesh(t,e){return(0,_.Z)(function*(){const r={data:new Float32Array(t.flowData.buffer),width:t.flowData.width,height:t.flowData.height},{vertexData:n,indexData:a}=yield(0,x.z_)(t.rendererSettings,r,e.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:a.buffer},transferList:[n.buffer,a.buffer]}})()}getProjectionOffsetGrid(t){return(0,_.Z)(function*(){const e=O.Z.fromJSON(t.projectedExtent),r=O.Z.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationSteps&&(n=new p.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,d.Mk)(e.spatialReference,r.spatialReference,n))&&(yield(0,d.zD)());const a=t.rasterTransform?(0,h.c)(t.rasterTransform):null;return(0,d.Qp)(S(v({},t),{projectedExtent:e,srcBufferExtent:r,datumTransformation:n,rasterTransform:a}))})()}}}}]);