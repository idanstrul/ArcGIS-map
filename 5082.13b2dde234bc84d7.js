"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[5082],{35082:(P,c,e)=>{e.r(c),e.d(c,{getGeometryServiceURL:()=>g,projectGeometry:()=>v});var m=e(15861),E=e(59318),i=e(26584),p=e(84687),y=e(39636),f=e(77294);function g(){return a.apply(this,arguments)}function a(){return(a=(0,m.Z)(function*(r=null,o){var l,n;if(E.Z.geometryServiceUrl)return E.Z.geometryServiceUrl;if(!r)throw new i.Z("internal:geometry-service-url-not-configured");let _;_="portal"in r?r.portal||p.Z.getDefault():r,yield _.load({signal:o});const t=null==(l=_.helperServices)||null==(n=l.geometry)?void 0:n.url;if(!t)throw new i.Z("internal:geometry-service-url-not-configured");return t})).apply(this,arguments)}function v(r,o){return u.apply(this,arguments)}function u(){return(u=(0,m.Z)(function*(r,o,l=null,n){const _=yield g(l,n),t=new f.Z;t.geometries=[r],t.outSpatialReference=o;const s=yield(0,y.i)(_,t,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new i.Z("internal:geometry-service-projection-failed")})).apply(this,arguments)}}}]);