"use strict";var An=Object.defineProperty,zn=Object.defineProperties,In=Object.getOwnPropertyDescriptors,mn=Object.getOwnPropertySymbols,Zn=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable,pn=(b,S,w)=>S in b?An(b,S,{enumerable:!0,configurable:!0,writable:!0,value:w}):b[S]=w,tn=(b,S)=>{for(var w in S||(S={}))Zn.call(S,w)&&pn(b,w,S[w]);if(mn)for(var w of mn(S))Bn.call(S,w)&&pn(b,w,S[w]);return b},en=(b,S)=>zn(b,In(S));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[8594],{28594:(b,S,w)=>{w.d(S,{Hq:()=>fn,Mk:()=>U,P_:()=>Cn,Qp:()=>vn,VO:()=>X,_D:()=>Mn,kZ:()=>Gn,kr:()=>Tn,nF:()=>H,tB:()=>$,ut:()=>k,vF:()=>bn,zD:()=>dn});var hn=w(15861),gn=(w(29132),w(26584)),C=w(62208),j=w(16730),P=w(44956),T=w(55915),K=w(2004),G=w(49672),yn=w(65234);function U(n,t,i){return!(0,T.Up)(n,t,i)}function N(n,t,i){const r=U(n,t,i);if(r&&!(0,T.kR)())throw new gn.Z("rasterprojectionhelper-project","projection engine is not loaded");return r}const on=function(n,t,i,r=0){if(1===i[0])return[0,0];let a=1,e=-1,s=1,c=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(a=a>n[u]?n[u]:a,e=e>n[u]?e:n[u],s=s>n[u+1]?n[u+1]:s,c=c>n[u+1]?c:n[u+1]);const{cols:o,rows:m}=t,p=(e-a)/o/i[0],R=(c-s)/m/i[1],g=2*r;let _=0,l=!1,f=[0,0];for(let u=0;u<o-3;u++){for(let y=0;y<m-3;y++){const x=u*m*2+2*y,d=(n[x+1]+n[x+5]+n[x+4*m+1]+n[x+4*m+5])/4,M=Math.abs(((n[x]+n[x+4]+n[x+4*m]+n[x+4*m+4])/4-n[x+2*m+2])/p),E=Math.abs((d-n[x+2*m+3])/R);if(M+E>_&&(_=M+E,f=[M,E]),g&&_>g){l=!0;break}}if(l)break}return f},_n={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},Y=new Map,V=new Map;function dn(){return J.apply(this,arguments)}function J(){return(J=(0,hn.Z)(function*(){if((0,T.kR)())return null;yield(0,T.zD)()})).apply(this,arguments)}function Mn(n,t,i){return N(n.spatialReference,t)?i?(0,T.rS)(t,n.spatialReference,n):(0,T.rS)(n.spatialReference,t,n):null}function X(n,t,i,r=null){const a=n.spatialReference;if(a.equals(t))return n;N(a,t,r);const e=i.center,s=new K.Z({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:a}),c=(0,T.iV)(s,t,r);if((0,C.Wi)(c))return null;const o={x:c.xmax-c.xmin,y:c.ymax-c.ymin},m=k(t);if((0,C.pC)(m)&&o.x>=m){const p=(0,j.c9)(a)/(0,j.c9)(t);o.x=n.x*p,o.y=n.y*p}return o}function O(n,t=.01){return(0,j.c9)(n)?t/(0,j.c9)(n):0}function H(n,t,i=null,r=!0){const a=n.spatialReference;if(a.equals(t))return n;N(a,t,i);const e=(0,T.iV)(n,t,i);if(!r||!e)return e;const s=Z(a,!0),c=Z(t,!0),o=O(a);return o&&(0,C.pC)(s)&&(0,C.pC)(c)&&(e.x>0&&Math.abs(n.x-s[0])<o?e.x-=c[1]-c[0]:e.x<0&&Math.abs(n.x-s[1])<o&&(e.x+=c[1]-c[0])),e}function sn(n){const{inSR:t,outSR:i,datumTransformation:r}=n,a=D(t),{points:e,mask:s}=Q(n,a);if(!t.isGeographic){const o=t.wkid?P.e.coordsys(t.wkid):P.e.fromString(t.isGeographic?P.f.PE_TYPE_GEOGCS:P.f.PE_TYPE_PROJCS,t.wkt);P.g.projToGeog(o,e.length,e)}if((0,C.pC)(r)&&r.steps.length&&r.steps.forEach(o=>{const m=o.wkid?P.e.geogtran(o.wkid):P.e.fromString(P.f.PE_TYPE_GEOGTRAN,o.wkt);P.h.geogToGeog(m,e.length,e,null,o.isInverse?P.f.PE_TRANSFORM_2_TO_1:P.f.PE_TRANSFORM_1_TO_2)}),!i.isGeographic){const o=D(i,!0),m=(0,C.pC)(o)&&o.isEnvelope?[o.bbox[1],o.bbox[3]]:[-90,90];!function wn(n,t){const[i,r]=t;for(let a=0;a<n.length;a++){const e=n[a][1];(e<i||e>r)&&(n[a]=[NaN,NaN])}}(e,m);const p=i.wkid?P.e.coordsys(i.wkid):P.e.fromString(i.isGeographic?P.f.PE_TYPE_GEOGCS:P.f.PE_TYPE_PROJCS,i.wkt);P.g.geogToProj(p,e.length,e)}let c=e;if(s&&e.length!==s.length){c=[];for(let o=0,m=0;o<s.length;o++)c.push(s[o]?e[m++]:[NaN,NaN])}return c}function D(n,t=!1){let i=n.wkid||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),Y.has(i)){const s=Y.get(i);return t?null==s?void 0:s.gcs:null==s?void 0:s.pcs}const r=n.wkid?P.e.coordsys(n.wkid):P.e.fromString(n.isGeographic?P.f.PE_TYPE_GEOGCS:P.f.PE_TYPE_PROJCS,n.wkt),a=rn(r,O(n,1e-4)),e=rn(r,0,!0);return Y.set(i,{pcs:a,gcs:e}),t?e:a}function rn(n,t=0,i=!1){const r=P.j.generate(n),a=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(null==a||!a.length)return null;let e=!1,s=a.find(f=>1===f.getInclusive()&&1===f.getKind());if(!s){if(s=a.find(f=>1===f.getInclusive()&&0===f.getKind()),!s)return null;e=!0}const c=r.isPannableRectangle(),o=s.getCoord();if(e)return{isEnvelope:e,isPannable:c,vertices:o,coef:null,bbox:[o[0][0]-t,o[0][1]-t,o[1][0]+t,o[1][1]+t]};let m=0;const p=[];let[R,g]=o[0],[_,l]=o[0];for(let f=0,u=o.length;f<u;f++){m++,m===u&&(m=0);const[y,x]=o[f],[h,d]=o[m];if(d===x)p.push([y,h,x,d,2]);else{const M=(h-y)/(d-x||1e-4),E=y-M*x;p.push(x<d?[M,E,x,d,0]:[M,E,d,x,1])}R=R<y?R:y,g=g<x?g:x,_=_>y?_:y,l=l>x?l:x}return{isEnvelope:!1,isPannable:c,vertices:o,coef:p,bbox:[R,g,_,l]}}function Q(n,t){const i=[],{cols:r,rows:a,xres:e,yres:s,usePixelCenter:c}=n;let{xmin:o,ymax:m}=n;if(c&&(o+=e/2,m-=s/2),!(0,C.pC)(t)){for(let _=0;_<r;_++)for(let l=0;l<a;l++)i.push([o+e*_,m-s*l]);return{points:i}}const p=new Uint8Array(r*a);if(t.isEnvelope){const{bbox:[_,l,f,u]}=t;for(let y=0,x=0;y<r;y++){const h=o+e*y,d=t.isPannable||h>=_&&h<=f;for(let M=0;M<a;M++,x++){const E=m-s*M;d&&E>=l&&E<=u&&(i.push([h,E]),p[x]=1)}}return{points:i,mask:p}}const{coef:R}=t,g=[];for(let _=0;_<a;_++){const l=m-s*_,f=[],u=[];for(let x=0;x<R.length;x++){const[h,d,M,E,W]=R[x];l===M&&M===E?(f.push(h),f.push(d),u.push(2),u.push(2)):l>=M&&l<=E&&(f.push(h*l+d),u.push(W))}let y=f;if(f.length>2){let x=2===u[0]?0:u[0],h=f[0];y=[];for(let d=1;d<u.length;d++)2===u[d]&&d!==u.length-1||(u[d]!==x&&(y.push(0===x?Math.min(h,f[d-1]):Math.max(h,f[d-1])),x=u[d],h=f[d]),d===u.length-1&&y.push(0===u[d]?Math.min(h,f[d]):Math.max(h,f[d])));y.sort((d,M)=>d-M)}else f[0]>f[1]&&(y=[f[1],f[0]]);g.push(y)}for(let _=0,l=0;_<r;_++){const f=o+e*_;for(let u=0;u<a;u++,l++){const y=m-s*u,x=g[u];if(2===x.length)f>=x[0]&&f<=x[1]&&(i.push([f,y]),p[l]=1);else if(x.length>2){let h=!1;for(let d=0;d<x.length;d+=2)if(f>=x[d]&&f<=x[d+1]){h=!0;break}h&&(i.push([f,y]),p[l]=1)}}}return{points:i,mask:p}}function an(n){const t=k(n[0].spatialReference);if(n.length<2||!(0,C.pC)(t))return n[0];let{xmin:i,xmax:r,ymin:a,ymax:e}=n[0];for(let s=1;s<n.length;s++){const c=n[s];r=c.xmax+t*s,a=Math.min(a,c.ymin),e=Math.max(e,c.ymax)}return new K.Z({xmin:i,xmax:r,ymin:a,ymax:e,spatialReference:n[0].spatialReference})}function $(n,t,i=null,r=!0){if(n.spatialReference.equals(t))return n;const a=fn(n),e=k(n.spatialReference,!0),s=k(t);if(0===a||(0,C.Wi)(e)||(0,C.Wi)(s))return ln(n,t,i,r);const c=n.clone().normalize();if(1===c.length&&n.xmax<e&&n.xmax-e/2>O(n.spatialReference)){const{xmin:o,xmax:m}=n;for(let p=0;p<=a;p++)c[p]=new K.Z({xmin:0===p?o:-e/2,xmax:p===a?m-e*p:e/2,ymin:n.ymin,ymax:n.ymax,spatialReference:n.spatialReference})}return an(c.map(o=>ln(o,t,i,r)).filter(o=>!!o))}function ln(n,t,i=null,r=!0,a=!0){const e=n.spatialReference;if(e.equals(t))return n;N(e,t,i);const s=(0,T.iV)(n,t,i);if(a&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508.342787,s.ymax),s.ymin=Math.max(-20037508.342787,s.ymin),s.ymin>=s.ymax))return null;if(!r||!s)return s;const c=Z(e,!0),o=Z(t,!0);if((0,C.Wi)(c)||(0,C.Wi)(o))return s;const m=O(e,.001),p=O(e,500),R=O(t,.001);if(Math.abs(s.xmin-o[0])<R&&Math.abs(s.xmax-o[1])<R){const g=Math.abs(n.xmin-c[0]),_=Math.abs(c[1]-n.xmax);if(g<m&&_>p){s.xmin=o[0];const l=[];l.push(new G.Z(n.xmax,n.ymin,e)),l.push(new G.Z(n.xmax,(n.ymin+n.ymax)/2,e)),l.push(new G.Z(n.xmax,n.ymax,e));const f=l.map(u=>H(u,t,i)).filter(u=>!isNaN(null==u?void 0:u.x)).map(u=>u.x);s.xmax=Math.max.apply(null,f)}if(_<m&&g>p){s.xmax=o[1];const l=[];l.push(new G.Z(n.xmin,n.ymin,e)),l.push(new G.Z(n.xmin,(n.ymin+n.ymax)/2,e)),l.push(new G.Z(n.xmin,n.ymax,e));const f=l.map(u=>H(u,t,i)).filter(u=>!isNaN(null==u?void 0:u.x)).map(u=>u.x);s.xmin=Math.min.apply(null,f)}}else{const g=O(t,.001);Math.abs(s.xmin-o[0])<g&&(s.xmin=o[0]),Math.abs(s.xmax-o[1])<g&&(s.xmax=o[1])}return s}function k(n,t=!1){return n.isWebMercator?2*(t?20037508.342787:20037508.342788905):n.wkid&&n.isGeographic?360:2*_n[n.wkid]||null}function Z(n,t=!1){if(n.isGeographic)return[-180,180];const i=k(n,t);return(0,C.pC)(i)?[-i/2,i/2]:null}function cn(n,t,i,r){let a=(n-t)/i;return a-Math.floor(a)!=0?a=Math.floor(a):r&&(a-=1),a}function fn(n,t=!1){const i=k(n.spatialReference);if(!(0,C.pC)(i))return 0;const r=t?0:-i/2,a=O(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<a?i/2:n.xmax,s=!t&&Math.abs(n.xmin+i/2)<a?-i/2:n.xmin;return cn(e,r,i,!0)-cn(s,r,i,!1)}function Cn(n){const t=n.storageInfo.origin.x,i=k(n.spatialReference,!0);if(!(0,C.pC)(i))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=i/2,{nativePixelSize:a,storageInfo:e,extent:s}=n,{maximumPyramidLevel:c,blockWidth:o,pyramidScalingFactor:m}=e;let p=a.x;const R=[],g=(0,C.pC)(n.transform)&&"gcs-shift"===n.transform.type,_=t+(g?0:r),l=g?i-t:r-t;for(let f=0;f<=c;f++){const u=(s.xmax-t)/p/o,y=u-Math.floor(u)==0?u:Math.ceil(u),x=l/p/o,h=x-Math.floor(x)==0?x:Math.ceil(x),d=Math.floor(_/p/o),M=Math.round(_/p)%o,E=(o-Math.round(l/p)%o)%o;R.push({resolutionX:p,blockWidth:o,datsetColumnCount:y,worldColumnCountFromOrigin:h,leftMargin:M,rightPadding:E,originColumnOffset:d}),p*=m}return{originX:t,halfWorldWidth:r,pyramidsInfo:R,hasGCSSShiftTransform:g}}function vn(n){const t=n.isAdaptive&&null==n.spacing;let i=n.spacing||[32,32],r=q(n),a={cols:r.size[0]+1,rows:r.size[1]+1};const e=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let s=r.outofBoundPointCount===r.offsets.length/2||t&&e?[0,0]:on(r.offsets,a,i,4);const o=n.projectedExtent.spatialReference,m=n.srcBufferExtent.spatialReference;if(t&&(e||(s[0]+s[1])/2>4)&&(U(o,m,n.datumTransformation)&&(o.isGeographic||(0,C.pC)(D(o))),i=[4,4],r=q(en(tn({},n),{spacing:i})),a={cols:r.size[0]+1,rows:r.size[1]+1},s=on(r.offsets,a,i,4)),r.error=s,i[0]>1&&(r.coefficients=un(r.offsets,a,e)),n.includeGCSGrid&&!o.isGeographic&&!o.isWebMercator)if(m.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:i};else{const p=D(o);if((0,C.pC)(p)&&!p.isEnvelope){const R=function Sn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt);let i;return V.has(t)?i=V.get(t):(i=(n.wkid?P.e.coordsys(n.wkid):P.e.fromString(P.f.PE_TYPE_PROJCS,n.wkt)).getGeogcs().getCode(),V.set(t,i)),new yn.Z({wkid:i})}(o),g=$(n.projectedExtent,R),{offsets:_}=q(en(tn({},n),{srcBufferExtent:g,spacing:i})),l=un(_,a,e);r.gcsGrid={offsets:_,coefficients:l,spacing:i}}}return r}function q(n){const{projectedExtent:t,srcBufferExtent:i,pixelSize:r,datumTransformation:a,rasterTransform:e}=n,s=t.spatialReference,c=i.spatialReference;N(s,c);const{xmin:o,ymin:m,xmax:p,ymax:R}=t,g=k(c),_=(0,C.pC)(g)&&(n.hasWrapAround||"gcs-shift"===(null==e?void 0:e.type)),l=n.spacing||[32,32],f=l[0]*r.x,u=l[1]*r.y,y=1===l[0],x=Math.ceil((p-o)/f-.1/l[0])+(y?0:1),h=Math.ceil((R-m)/u-.1/l[1])+(y?0:1),d=function Rn(n){const{inSR:t,outSR:i,datumTransformation:r,preferPE:a}=n;if(t.equals(i)){const{points:e}=Q(n,null);return e}if(t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator)return function Pn(n){const{cols:t,rows:i,xres:r,yres:a,usePixelCenter:e,inSR:s,outSR:c}=n;let{xmin:o,ymax:m}=n;e&&(o+=r/2,m-=a/2);const p=[],R=[],g=Math.max(t,i);for(let l=0;l<g;l++){const f=o+r*Math.min(t,l),u=m-a*Math.min(i,l),y=(0,T.iV)(new G.Z({x:f,y:u,spatialReference:s}),c);l<=t&&p.push(y.x),l<=i&&R.push(y.y)}const _=[];for(let l=0;l<t;l++)for(let f=0;f<i;f++)_.push([p[l],R[f]]);return _}(n);if(N(t,i,r)&&a){if(t.isGeographic)return sn(n);const e=D(t);if((0,C.pC)(e))return sn(n)}return function En(n){const{points:t}=Q(n,null),i=t.map(r=>new G.Z(r[0],r[1],n.inSR));return(0,T.iV)(i,n.outSR,n.datumTransformation).map(r=>r?[r.x,r.y]:[NaN,NaN])}(n)}({cols:x,rows:h,xmin:o,ymax:R,xres:f,yres:u,inSR:s,outSR:c,datumTransformation:a,preferPE:l[0]<=4,usePixelCenter:y}),M=[];let E,W=0;const B=y?-1:NaN,{xmin:On,xmax:kn,ymax:Nn,width:Wn,height:jn}=i,Dn=O(c,500);for(let L=0;L<x;L++){const nn=[];for(let A=0;A<h;A++){let v=d[L*h+A];if(_&&v[0]>kn&&v[0]>g/2-Dn&&(v[0]-=g),!v||isNaN(v[0])||isNaN(v[1]))M.push(B),M.push(B),nn.push(null),W++;else{if(e){const xn=e.inverseTransform(new G.Z({x:v[0],y:v[1],spatialReference:c}));v=[xn.x,xn.y]}nn.push(v),L>0&&_&&E[A]&&v[0]<E[A][0]&&(v[0]+=g),M.push((v[0]-On)/Wn),M.push((Nn-v[1])/jn)}}E=nn}return{offsets:M,error:null,coefficients:null,outofBoundPointCount:W,spacing:l,size:y?[x,h]:[x-1,h-1]}}function un(n,t,i){const{cols:r,rows:a}=t,e=new Float32Array((r-1)*(a-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let o=0;o<r-1;o++){for(let m=0;m<a-1;m++){let p=o*a*2+2*m;const R=n[p],g=n[p+1],_=n[p+2],l=n[p+3];p+=2*a;const f=n[p],u=n[p+1],y=n[p+2],x=n[p+3];let h=0,d=12*(m*(r-1)+o);for(let M=0;M<3;M++)e[d++]=s[h++]*R+s[h++]*_+s[h++]*y;h=0;for(let M=0;M<3;M++)e[d++]=s[h++]*g+s[h++]*l+s[h++]*x;h=0;for(let M=0;M<3;M++)e[d++]=c[h++]*R+c[h++]*f+c[h++]*y;h=0;for(let M=0;M<3;M++)e[d++]=c[h++]*g+c[h++]*u+c[h++]*x}if(i)for(let m=0;m<e.length;m++)isNaN(e[m])&&(e[m]=-1)}return e}function Gn(n){const t=n.clone().normalize();return 1===t.length?t[0]:an(t)}function Tn(n,t,i){const{storageInfo:r,pixelSize:a}=t;let e,s=!1;const{pyramidResolutions:c}=r;if((0,C.pC)(c)&&c.length){const g=(n.x+n.y)/2,_=c[c.length-1],l=(_.x+_.y)/2,f=(a.x+a.y)/2;if(g<=f)e=0;else if(g>=l)e=c.length,s=g/l>8;else{let y,x=f;for(let h=1;h<=c.length;h++){if(y=(c[h-1].x+c[h-1].y)/2,g<=y){g===y?e=h:"down"===i?(e=h-1,s=g/x>8):e="up"===i||g-x>y-g||g/x>2?h:h-1;break}x=y}}const u=0===e?a:c[e-1];return{pyramidLevel:e,pyramidResolution:new G.Z({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:s}}const o=Math.log(n.x/a.x)/Math.LN2,m=Math.log(n.y/a.y)/Math.LN2,p=t.storageInfo.maximumPyramidLevel||0;e="down"===i?Math.floor(Math.min(o,m)):"up"===i?Math.ceil(Math.max(o,m)):Math.round((o+m)/2),e<0?e=0:e>p&&(s=e>p+3,e=p);const R=2**e;return{pyramidLevel:e,pyramidResolution:new G.Z({x:R*t.nativePixelSize.x,y:R*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function bn(n,t,i=512,r=!0){const{extent:a,spatialReference:e,pixelSize:s}=n,c=X(new G.Z({x:s.x,y:s.y,spatialReference:e}),t,a);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const o=(c.x+c.y)/2,m=(0,j.c9)(t),p=o*m*96*39.37,R=t.isGeographic?256/i*295828763.7958547:256/i*591657527.591555;let g="vector-magdir"===n.dataType||"vector-uv"===n.dataType;const _=$(a,t);g||r&&(t.isGeographic||t.isWebMercator)&&(g=_.xmin*_.xmax<0);let l,f=p;const u=1.001;if(g){f=R;const M=t.isGeographic?1341104507446289e-21:.29858214164761665,E=M*(96*m*39.37);l=X(new G.Z({x:M,y:M,spatialReference:{wkid:t.isGeographic?4326:3857}}),e,_),l.x*=f/E,l.y*=f/E}else{l={x:s.x,y:s.y};const M=Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2);let E=0;for(;f<R*(u/2)&&E<M;)E++,f*=2,l.x*=2,l.y*=2;Math.max(f,R)/Math.min(f,R)<=u&&(f=R)}const y=[f],x=[{x:l.x,y:l.y}],d=Math.min(70.5310735,p)/u;for(;f>=d;)f/=2,l.x/=2,l.y/=2,y.push(f),x.push({x:l.x,y:l.y});return{projectedPixelSize:c,scales:y,srcResolutions:x,isCustomTilingScheme:!g}}}}]);