"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[5978],{55978:(y,E,i)=>{i.r(E),i.d(E,{registerFunctions:()=>S});var D=i(27187),s=i(47562),R=i(3482),_=i(62074),o=i(10699),f=i(21674),c=i(87215);function d(t){return t instanceof f.Z}function l(t,a,r,p,m){return m(t,a,function(e,h,n){if(n.length<2)return p(new Error("Missing Parameters"));if(null===(n=(0,s.H)(n))[0]&&null===n[1])return(0,o.DB)(!1);if((0,s.q)(n[0]))return n[1]instanceof f.Z?(0,o.DB)(new R.Z({parentfeatureset:n[0],relation:r,relationGeom:n[1]})):null===n[1]?(0,o.DB)(new _.Z({parentfeatureset:n[0]})):p("Spatial Relation cannot accept this parameter type");if(d(n[0])){if(d(n[1])){let u=null;switch(r){case"esriSpatialRelEnvelopeIntersects":u=(0,c.kK)((0,D.SV)(n[0]),(0,D.SV)(n[1]));break;case"esriSpatialRelIntersects":u=(0,c.kK)(n[0],n[1]);break;case"esriSpatialRelContains":u=(0,c.r3)(n[0],n[1]);break;case"esriSpatialRelOverlaps":u=(0,c.Nm)(n[0],n[1]);break;case"esriSpatialRelWithin":u=(0,c.uh)(n[0],n[1]);break;case"esriSpatialRelTouches":u=(0,c.W4)(n[0],n[1]);break;case"esriSpatialRelCrosses":u=(0,c.jU)(n[0],n[1])}return null!==u?u:(0,o.d1)(new Error("Unrecognised Relationship"))}return(0,s.q)(n[1])?(0,o.DB)(new R.Z({parentfeatureset:n[1],relation:r,relationGeom:n[0]})):null===n[1]?(0,o.DB)(!1):p("Spatial Relation cannot accept this parameter type")}return null!==n[0]?p("Spatial Relation cannot accept this parameter type"):(0,s.q)(n[1])?(0,o.DB)(new _.Z({parentfeatureset:n[1]})):n[1]instanceof f.Z||null===n[1]?(0,o.DB)(!1):void 0})}function S(t){"async"===t.mode&&(t.functions.intersects=function(a,r){return l(a,r,"esriSpatialRelIntersects",t.failDefferred,t.standardFunctionAsync)},t.functions.envelopeintersects=function(a,r){return l(a,r,"esriSpatialRelEnvelopeIntersects",t.failDefferred,t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),t.functions.contains=function(a,r){return l(a,r,"esriSpatialRelContains",t.failDefferred,t.standardFunctionAsync)},t.functions.overlaps=function(a,r){return l(a,r,"esriSpatialRelOverlaps",t.failDefferred,t.standardFunctionAsync)},t.functions.within=function(a,r){return l(a,r,"esriSpatialRelWithin",t.failDefferred,t.standardFunctionAsync)},t.functions.touches=function(a,r){return l(a,r,"esriSpatialRelTouches",t.failDefferred,t.standardFunctionAsync)},t.functions.crosses=function(a,r){return l(a,r,"esriSpatialRelCrosses",t.failDefferred,t.standardFunctionAsync)},t.functions.relate=function(a,r){return t.standardFunctionAsync(a,r,function(p,m,e){if(e=(0,s.H)(e),(0,s.p)(e,3,3),d(e[0])&&d(e[1]))return(0,c.LV)(e[0],e[1],(0,s.d)(e[2]));if(e[0]instanceof f.Z&&null===e[1]||e[1]instanceof f.Z&&null===e[0])return!1;if((0,s.q)(e[0])&&null===e[1])return new _.Z({parentfeatureset:e[0]});if((0,s.q)(e[1])&&null===e[0])return new _.Z({parentfeatureset:e[1]});if((0,s.q)(e[0])&&e[1]instanceof f.Z)return e[0].relate(e[1],(0,s.d)(e[2]));if((0,s.q)(e[1])&&e[0]instanceof f.Z)return e[1].relate(e[0],(0,s.d)(e[2]));if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")})})}}}]);