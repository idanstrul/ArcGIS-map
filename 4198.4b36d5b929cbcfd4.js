"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[4198],{34198:(v,u,s)=>{s.r(u),s.d(u,{registerFunctions:()=>l});var c=s(6729),t=s(47562),f=s(77132);function m(e){return e&&e.domain?c.Z.convertObjectToArcadeDictionary("coded-value"===e.domain.type||"codedValue"===e.domain.type?{type:"codedValue",name:e.domain.name,dataType:f.yE[e.field.type],codedValues:e.domain.codedValues.map(o=>({name:o.name,code:o.code}))}:{type:"range",name:e.domain.name,dataType:f.yE[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(e){"async"===e.mode&&(e.functions.domain=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,2,3),(0,t.k)(n[0]))return m((0,t.T)(n[0],(0,t.d)(n[1]),void 0===n[2]?void 0:(0,t.t)(n[2])));if((0,t.q)(n[0]))return n[0]._ensureLoaded().then(()=>m((0,t.Z)((0,t.d)(n[1]),n[0],null,void 0===n[2]?void 0:(0,t.t)(n[2]))));throw new Error("Invalid Parameter")})},e.functions.subtypes=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,1,1),(0,t.k)(n[0])){const r=(0,t.Q)(n[0]);return r?c.Z.convertObjectToArcadeDictionary(r):null}if((0,t.q)(n[0]))return n[0]._ensureLoaded().then(()=>{const r=n[0].subtypes();return r?c.Z.convertObjectToArcadeDictionary(r):null});throw new Error("Invalid Parameter")})},e.functions.domainname=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,2,4),(0,t.k)(n[0]))return(0,t.U)(n[0],(0,t.d)(n[1]),n[2],void 0===n[3]?void 0:(0,t.t)(n[3]));if((0,t.q)(n[0]))return n[0]._ensureLoaded().then(()=>{const r=(0,t.Z)((0,t.d)(n[1]),n[0],null,void 0===n[3]?void 0:(0,t.t)(n[3]));return(0,t._)(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,2,4),(0,t.k)(n[0]))return(0,t.V)(n[0],(0,t.d)(n[1]),n[2],void 0===n[3]?void 0:(0,t.t)(n[3]));if((0,t.q)(n[0]))return n[0]._ensureLoaded().then(()=>{const r=(0,t.Z)((0,t.d)(n[1]),n[0],null,void 0===n[3]?void 0:(0,t.t)(n[3]));return(0,t.$)(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,1,2),!(0,t.q)(n[0]))return(0,t.u)(n[0],n[1]);{const r=(0,t.C)(n[1],"");if(""===r)return n[0].castToText();if("schema"===r.toLowerCase())return n[0].convertToText("schema",i.abortSignal);if("featureset"===r.toLowerCase())return n[0].convertToText("featureset",i.abortSignal)}})},e.functions.gdbversion=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,1,1),(0,t.k)(n[0]))return n[0].gdbVersion();if((0,t.q)(n[0]))return n[0].load().then(r=>r.gdbVersion);throw new Error("Invalid Parameter")})},e.functions.schema=function(o,a){return e.standardFunctionAsync(o,a,function(i,d,n){if((0,t.p)(n,1,1),(0,t.q)(n[0]))return n[0].load().then(()=>c.Z.convertObjectToArcadeDictionary(n[0].schema()));if((0,t.k)(n[0])){const r=(0,t.P)(n[0]);return r?c.Z.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")})}}}}]);