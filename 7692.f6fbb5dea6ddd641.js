"use strict";(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[7692],{60295:(mt,lt,V)=>{V.d(lt,{Z:()=>ut});var tt,F=V(17626),L=(V(8314),V(26584)),rt=V(86810),ot=V(58817),at=V(63290),ht=V(62208),Q=V(77712),ft=V(66656),ct=V(76898);const et=at.Z.getLogger("esri.layers.support.PixelBlock");let N=tt=class extends rt.wq{constructor(w){super(w),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(w,g){return new(tt.getPixelArrayConstructor(w))(g)}static getPixelArrayConstructor(w){let g;switch(w){case"u1":case"u2":case"u4":case"u8":g=Uint8Array;break;case"u16":g=Uint16Array;break;case"u32":g=Uint32Array;break;case"s8":g=Int8Array;break;case"s16":g=Int16Array;break;case"s32":g=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":g=Float32Array;break;case"f64":g=Float64Array}return g}castPixelType(w){if(!w)return"f32";let g=w.toLowerCase();return["u1","u2","u4"].indexOf(g)>-1?g="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(g)&&(g="f32"),g}getPlaneCount(){return this.pixels&&this.pixels.length}addData(w){if(!w.pixels||w.pixels.length!==this.width*this.height)throw new L.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(w.pixels),this.statistics.push(w.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const w=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(w);break;default:this._fillFrom8Bit(w)}return new Uint8ClampedArray(w)}getAsRGBAFloat(){const w=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(w),w}updateStatistics(){this.statistics=this.pixels.map(B=>this._calculateBandStatistics(B,this.mask));const w=this.mask;let g=0;if(w)for(let B=0;B<w.length;B++)w[B]&&g++;else g=this.width*this.height;this.validPixelCount=g}clamp(w){if(!w||"f64"===w||"f32"===w)return;let g;switch(w){case"u8":g=[0,255];break;case"u16":g=[0,65535];break;case"u32":g=[0,4294967295];break;case"s8":g=[-128,127];break;case"s16":g=[-32768,32767];break;case"s32":g=[-2147483648,2147483647];break;default:g=[-34e38,34e38]}const[B,P]=g,E=this.pixels,U=this.width*this.height,M=E.length;let v,D,W;const J=[];for(let Y=0;Y<M;Y++){W=tt.createEmptyBand(w,U),v=E[Y];for(let H=0;H<U;H++)D=v[H],W[H]=D>P?P:D<B?B:D;J.push(W)}this.pixels=J,this.pixelType=w}extractBands(w){if((0,ht.Wi)(w)||0===w.length||null==this.pixels||0===this.pixels.length)return this;const g=this.pixels.length,B=w.some(E=>E>=this.pixels.length),P=g===w.length&&!w.some((E,U)=>E!==U);return B||P?this:new tt({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:w.map(E=>this.pixels[E]),statistics:this.statistics&&w.map(E=>this.statistics[E])})}clone(){const w=new tt({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let g;this.mask&&(w.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));const B=tt.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){w.pixels=[];const P=this.pixels[0].slice;for(g=0;g<this.pixels.length;g++)w.pixels[g]=P?this.pixels[g].slice(0,this.pixels[g].length):new B(this.pixels[g])}if(this.statistics)for(w.statistics=[],g=0;g<this.statistics.length;g++)w.statistics[g]=(0,ot.d9)(this.statistics[g]);return w}_fillFrom8Bit(w){const{mask:g,maskIsAlpha:B,pixels:P}=this;if(!w||!P||!P.length)return void et.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let E,U,M,v;E=U=M=P[0],P.length>=3?(U=P[1],M=P[2]):2===P.length&&(U=P[1]);const D=new Uint32Array(w),W=this.width*this.height;if(E.length===W)if(g&&g.length===W)if(B)for(v=0;v<W;v++)g[v]&&(D[v]=g[v]<<24|M[v]<<16|U[v]<<8|E[v]);else for(v=0;v<W;v++)g[v]&&(D[v]=255<<24|M[v]<<16|U[v]<<8|E[v]);else for(v=0;v<W;v++)D[v]=255<<24|M[v]<<16|U[v]<<8|E[v];else et.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(w){const{pixels:g,mask:B,statistics:P}=this;if(!w||!g||!g.length)return void et.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const E=this.pixelType;let U=1,M=0,v=1;if(P&&P.length>0)M=P.map(G=>G.minValue).reduce((G,n)=>Math.min(G,n)),v=P.map(G=>G.maxValue-G.minValue).reduce((G,n)=>Math.max(G,n)),U=255/v;else{let G=255;"s8"===E?(M=-128,G=127):"u16"===E?G=65535:"s16"===E?(M=-32768,G=32767):"u32"===E?G=4294967295:"s32"===E?(M=-2147483648,G=2147483647):"f32"===E?(M=-34e38,G=34e38):"f64"===E&&(M=-Number.MAX_VALUE,G=Number.MAX_VALUE),U=255/(G-M)}const D=new Uint32Array(w),W=this.width*this.height;let J,Y,H,S,q;if(J=Y=H=g[0],J.length!==W)return et.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(g.length>=2)if(Y=g[1],g.length>=3&&(H=g[2]),B&&B.length===W)for(S=0;S<W;S++)B[S]&&(D[S]=255<<24|(H[S]-M)*U<<16|(Y[S]-M)*U<<8|(J[S]-M)*U);else for(S=0;S<W;S++)D[S]=255<<24|(H[S]-M)*U<<16|(Y[S]-M)*U<<8|(J[S]-M)*U;else if(B&&B.length===W)for(S=0;S<W;S++)q=(J[S]-M)*U,B[S]&&(D[S]=255<<24|q<<16|q<<8|q);else for(S=0;S<W;S++)q=(J[S]-M)*U,D[S]=255<<24|q<<16|q<<8|q}_fillFrom32Bit(w){const{pixels:g,mask:B}=this;if(!w||!g||!g.length)return et.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let P,E,U,M;P=E=U=g[0],g.length>=3?(E=g[1],U=g[2]):2===g.length&&(E=g[1]);const v=this.width*this.height;if(P.length!==v)return et.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let D=0;if(B&&B.length===v)for(M=0;M<v;M++)w[D++]=P[M],w[D++]=E[M],w[D++]=U[M],w[D++]=1&B[M];else for(M=0;M<v;M++)w[D++]=P[M],w[D++]=E[M],w[D++]=U[M],w[D++]=1}_calculateBandStatistics(w,g){let B=1/0,P=-1/0;const E=w.length;let U,M=0;if(g)for(U=0;U<E;U++)g[U]&&(M=w[U],B=M<B?M:B,P=M>P?M:P);else for(U=0;U<E;U++)M=w[U],B=M<B?M:B,P=M>P?M:P;return{minValue:B,maxValue:P}}};(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"width",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"height",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"pixelType",void 0),(0,F._)([(0,ft.p)("pixelType")],N.prototype,"castPixelType",null),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"validPixelCount",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"mask",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"maskIsAlpha",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"pixels",void 0),(0,F._)([(0,Q.Cb)({json:{write:!0}})],N.prototype,"statistics",void 0),N=tt=(0,F._)([(0,ct.j)("esri.layers.support.PixelBlock")],N);const ut=N},77692:(mt,lt,V)=>{V.d(lt,{Hv:()=>ht,Kh:()=>g,Oh:()=>Q,Pz:()=>ot,Qh:()=>q,SJ:()=>at,Uk:()=>G,Vl:()=>H,XV:()=>N,dy:()=>et,hE:()=>ft,nk:()=>L,oc:()=>tt,pW:()=>U,qF:()=>rt,us:()=>P,zp:()=>ut});var F=V(62208),z=V(60295);function L(n){return(0,F.pC)(n)&&"esri.layers.support.PixelBlock"===n.declaredClass&&n.pixels&&n.pixels.length>0}function rt(n,f){if(null==f||!f.length||!L(n))return n;const s=n.pixels.length;return f&&f.some(l=>l>=s)||1===s&&1===f.length&&0===f[0]?n:s!==f.length||f.some((l,h)=>l!==h)?new z.Z({pixelType:n.pixelType,width:n.width,height:n.height,mask:n.mask,validPixelCount:n.validPixelCount,maskIsAlpha:n.maskIsAlpha,pixels:f.map(l=>n.pixels[l]),statistics:n.statistics&&f.map(l=>n.statistics[l])}):n}function ot(n){if(!n)return;const f=n.colormap;if(!f||0===f.length)return;const s=f.sort((t,i)=>t[0]-i[0]);let l=0;s[0][0]<0&&(l=s[0][0]);const h=Math.max(256,s[s.length-1][0]-l+1),r=new Uint8Array(4*h),u=[];let c,e=0,a=0;const x=5===s[0].length;if(h>65536)return s.forEach(t=>{u[t[0]-l]=x?t.slice(1):t.slice(1).concat([255])}),{indexed2DColormap:u,offset:l,alphaSpecified:x};if(n.fillUnspecified)for(c=s[a],e=c[0]-l;e<h;e++)r[4*e]=c[1],r[4*e+1]=c[2],r[4*e+2]=c[3],r[4*e+3]=x?c[4]:255,e===c[0]-l&&(c=a===s.length-1?c:s[++a]);else for(e=0;e<s.length;e++)c=s[e],a=4*(c[0]-l),r[a]=c[1],r[a+1]=c[2],r[a+2]=c[3],r[a+3]=x?c[4]:255;return{indexedColormap:r,offset:l,alphaSpecified:x}}function at(n,f){if(!L(n)||!f&&(f.indexedColormap||f.indexed2DColormap))return n;const s=n.clone(),l=s.pixels;let h=s.mask;const r=s.width*s.height;if(1!==l.length)return n;const{indexedColormap:u,indexed2DColormap:c,offset:e,alphaSpecified:a}=f,x=u.length-1;let t=0;const i=l[0],o=new Uint8Array(i.length),p=new Uint8Array(i.length),m=new Uint8Array(i.length);let y,d=0;if(u)if(h)for(t=0;t<r;t++)h[t]&&(d=4*(i[t]-e),d<e||d>x?h[t]=0:(o[t]=u[d],p[t]=u[d+1],m[t]=u[d+2],h[t]=u[d+3]));else{for(h=new Uint8Array(r),t=0;t<r;t++)d=4*(i[t]-e),d<e||d>x?h[t]=0:(o[t]=u[d],p[t]=u[d+1],m[t]=u[d+2],h[t]=u[d+3]);s.mask=h}else if(h)for(t=0;t<r;t++)h[t]&&(y=c[i[t]],o[t]=y[0],p[t]=y[1],m[t]=y[2],h[t]=y[3]);else{for(h=new Uint8Array(r),t=0;t<r;t++)y=c[i[t]],o[t]=y[0],p[t]=y[1],m[t]=y[2],h[t]=y[3];s.mask=h}return s.pixels=[o,p,m],s.statistics=null,s.pixelType="u8",s.maskIsAlpha=a,s}function ht(n){if(!L(n))return null;n.statistics||n.updateStatistics();const{pixels:f,mask:s,pixelType:l,statistics:h}=n,r=n.width*n.height,u=f.length;let c,e,a,x,t;const i=[],o=[];let p,m,y,d,_,k,A,C,R,b;const O=256;for(x=0;x<u;x++){if(p=new Uint32Array(O),y=f[x],"u8"===l)if(c=-.5,e=255.5,s)for(t=0;t<r;t++)s[t]&&p[y[t]]++;else for(t=0;t<r;t++)p[y[t]]++;else{if(c=h[x].minValue,e=h[x].maxValue,a=(e-c)/O,m=new Uint32Array(257),s)for(t=0;t<r;t++)s[t]&&m[Math.floor((y[t]-c)/a)]++;else for(t=0;t<r;t++)m[Math.floor((y[t]-c)/a)]++;for(t=0;t<255;t++)p[t]=m[t];p[255]=m[255]+m[256]}for(i.push({min:c,max:e,size:O,counts:p}),d=0,_=0,C=0,t=0;t<O;t++)d+=p[t],_+=t*p[t];for(R=_/d,t=0;t<O;t++)C+=p[t]*(t-R)**2;b=Math.sqrt(C/(d-1)),a=(e-c)/O,k=(R+.5)*a+c,A=b*a,o.push({min:c,max:e,avg:k,stddev:A})}return{statistics:o,histograms:i}}function Q(n){const f=[];for(let s=0;s<n.length;s++){const{min:l,max:h,size:r,counts:u}=n[s];let c=0,e=0;for(let p=0;p<r;p++)c+=u[p],e+=p*u[p];const a=e/c;let x=0;for(let p=0;p<r;p++)x+=u[p]*(p-a)**2;const t=(h-l)/r,i=(a+.5)*t+l,o=Math.sqrt(x/(c-1))*t;f.push({min:l,max:h,avg:i,stddev:o})}return f}function ft(n){const{minCutOff:f,maxCutOff:s,gamma:l,pixelType:h}=n,r=n.outMin||0,u=n.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(h))return null;const c=f.length;let e,a,x=0;"s8"===h?x=-127:"s16"===h&&(x=-32767);let t=256;["u16","s16"].indexOf(h)>-1&&(t=65536);const i=[],o=[],p=u-r;for(e=0;e<c;e++)o[e]=s[e]-f[e],i[e]=p/(s[e]-f[e]);const m=l&&l.length>=c,y=[];if(m)for(e=0;e<c;e++)y[e]=l[e]>1?l[e]>2?6.5+(l[e]-2)**2.5:6.5+100*(2-l[e])**4:1;let d;const _=[];let k,A,C;if(m)for(e=0;e<c;e++){for(C=[],a=0;a<t;a++)k=a+x,d=(k-f[e])/o[e],A=1,l[e]>1&&(A-=(1/p)**(d*y[e])),C[a]=k<s[e]&&k>f[e]?Math.floor(A*p*d**(1/l[e]))+r:k>=s[e]?u:r;_[e]=C}else for(e=0;e<c;e++){for(C=[],a=0;a<t;a++)k=a+x,C[a]=k<=f[e]?r:k>=s[e]?u:Math.floor((k-f[e])/o[e]*p)+r;_[e]=C}if(null!=n.contrastOffset){const R=function ct(n,f){const s=Math.min(Math.max(n,-100),100),l=Math.min(Math.max(f,-100),100),h=255;let u,c;const e=new Uint8Array(256);for(u=0;u<256;u++)s>0&&s<100?c=(200*u-25500+510*l)/(2*(100-s))+128:s<=0&&s>-100?c=(200*u-25500+510*l)*(100+s)/2e4+128:100===s?(c=200*u-25500+256*(100-s)+510*l,c=c>0?h:0):-100===s&&(c=128),e[u]=c>h?h:c<0?0:c;return e}(n.contrastOffset,n.brightnessOffset);for(e=0;e<c;e++)for(C=_[e],a=0;a<t;a++)C[a]=R[C[a]]}return{lut:_,offset:x}}function tt(n,f=256){f=Math.min(f,256);const{size:s,counts:l}=n,h=new Uint8Array(s),r=l.reduce((x,t)=>x+t/f,0);let u=0,c=0,e=0,a=r;for(let x=0;x<s;x++)if(e+=l[x],!(x<s-1&&e+l[x+1]<a)){for(;u<f-1&&a<e;)u++,a+=r;for(let t=c;t<=x;t++)h[t]=u;c=x+1}for(let x=c;x<s;x++)h[x]=f-1;return h}function et(n,f){if(!L(n))return null;const s=n.clone(),{pixels:l,mask:h}=s,{minCutOff:r,maxCutOff:u,gamma:c}=f,e=f.outMin||0,a=f.outMax||255,x=s.width*s.height,t=l.length;let i,o,p,m,y;const d=a-e,_=[],k=[];for(i=0;i<t;i++)k[i]=u[i]-r[i],_[i]=d/(u[i]-r[i]);const A=c&&c.length>=t,C=[];if(A)for(i=0;i<t;i++)C[i]=c[i]>1?c[i]>2?6.5+(c[i]-2)**2.5:6.5+100*(2-c[i])**4:1;if(A)if(null!=h){for(o=0;o<x;o++)if(h[o])for(i=0;i<t;i++)p=l[i][o],y=(p-r[i])/k[i],m=1,c[i]>1&&(m-=(1/d)**(y*C[i])),l[i][o]=p<u[i]&&p>r[i]?Math.floor(m*d*y**(1/c[i]))+e:p>=u[i]?a:e}else for(o=0;o<x;o++)for(i=0;i<t;i++)p=l[i][o],y=(p-r[i])/k[i],m=1,c[i]>1&&(m-=(1/d)**(y*C[i])),l[i][o]=p<u[i]&&p>r[i]?Math.floor(m*d*y**(1/c[i]))+e:p>=u[i]?a:e;else if(null!=h){for(o=0;o<x;o++)if(h[o])for(i=0;i<t;i++)p=l[i][o],l[i][o]=p<u[i]&&p>r[i]?Math.floor((p-r[i])/k[i]*d)+e:p>=u[i]?a:e}else for(o=0;o<x;o++)for(i=0;i<t;i++)p=l[i][o],l[i][o]=p<u[i]&&p>r[i]?Math.floor((p-r[i])/k[i]*d)+e:p>=u[i]?a:e;return s.pixelType="u8",s.updateStatistics(),s}function N(n,f){if(!L(n))return null;const{pixels:s,mask:l}=n,h=n.width*n.height,r=s.length;let u=f.lut;const{offset:c}=f;let e,a;u&&1===u[0].length&&(u=s.map(()=>u));const x=[];let t,i,o;if(c)if(null==l)for(e=0;e<r;e++){for(t=s[e],i=u[e],o=new Uint8Array(h),a=0;a<h;a++)o[a]=i[t[a]-c];x.push(o)}else for(e=0;e<r;e++){for(t=s[e],i=u[e],o=new Uint8Array(h),a=0;a<h;a++)l[a]&&(o[a]=i[t[a]-c]);x.push(o)}else if(null==l)for(e=0;e<r;e++){for(t=s[e],i=u[e],o=new Uint8Array(h),a=0;a<h;a++)o[a]=i[t[a]];x.push(o)}else for(e=0;e<r;e++){for(t=s[e],i=u[e],o=new Uint8Array(h),a=0;a<h;a++)l[a]&&(o[a]=i[t[a]]);x.push(o)}const p=new z.Z({width:n.width,height:n.height,pixels:x,mask:l,pixelType:"u8"});return p.updateStatistics(),p}function ut(n,f){if(!L(n))return null;const s=n.clone(),{pixels:l}=s,h=s.width*s.height,r=f.length,u=Math.floor(r/2),c=f[Math.floor(u)],e=l[0];let a,x,t,i,o,p,m=!1;const y=new Uint8Array(h),d=new Uint8Array(h),_=new Uint8Array(h);let k=s.mask;const A=4===f[0].mappedColor.length;for(k||(k=new Uint8Array(h),k.fill(A?255:1),s.mask=k),o=0;o<h;o++)if(k[o]){for(a=e[o],m=!1,p=u,x=c,t=0,i=r-1;i-t>1;){if(a===x.value){m=!0;break}a>x.value?t=p:i=p,p=Math.floor((t+i)/2),x=f[Math.floor(p)]}m||(a===f[t].value?(x=f[t],m=!0):a===f[i].value?(x=f[i],m=!0):a<f[t].value?(m=!1,x=null):a>f[t].value&&(a<f[i].value?(x=f[t],m=!0):i===r-1?(m=!1,x=null):(x=f[i],m=!0))),m?(y[o]=x.mappedColor[0],d[o]=x.mappedColor[1],_[o]=x.mappedColor[2],k[o]=x.mappedColor[3]):y[o]=d[o]=_[o]=k[o]=0}return s.pixels=[y,d,_],s.mask=k,s.pixelType="u8",s.maskIsAlpha=A,s}function g(n,f){if(!n||0===n.length)return null;const s=n.find(p=>p.pixelBlock);if(!s||(0,F.Wi)(s.pixelBlock))return null;const l=(s.extent.xmax-s.extent.xmin)/s.pixelBlock.width,h=(s.extent.ymax-s.extent.ymin)/s.pixelBlock.height,r=.01*Math.min(l,h),u=n.sort((p,m)=>Math.abs(p.extent.ymax-m.extent.ymax)>r?m.extent.ymax-p.extent.ymax:Math.abs(p.extent.xmin-m.extent.xmin)>r?p.extent.xmin-m.extent.xmin:0),c=Math.min.apply(null,u.map(p=>p.extent.xmin)),e=Math.min.apply(null,u.map(p=>p.extent.ymin)),a=Math.max.apply(null,u.map(p=>p.extent.xmax)),x=Math.max.apply(null,u.map(p=>p.extent.ymax)),t={x:Math.round((f.xmin-c)/l),y:Math.round((x-f.ymax)/h)},i={width:Math.round((a-c)/l),height:Math.round((x-e)/h)},o={width:Math.round((f.xmax-f.xmin)/l),height:Math.round((f.ymax-f.ymin)/h)};return Math.round(i.width/s.pixelBlock.width)*Math.round(i.height/s.pixelBlock.height)!==u.length||t.x<0||t.y<0||i.width<o.width||i.height<o.height?null:{extent:f,pixelBlock:P(u.map(p=>p.pixelBlock),i,{clipOffset:t,clipSize:o})}}function B(n,f,s,l,h,r){const{width:u,height:c}=s.block,{x:e,y:a}=s.offset,{width:x,height:t}=s.mosaic,i=function w(n,f,s,l,h,r,u,c){return{xmin:h<=s*n?0:h<s*n+n?h-s*n:n,ymin:r<=l*f?0:r<l*f+f?r-l*f:f,xmax:h+u<=s*n?0:h+u<s*n+n?h+u-s*n:n,ymax:r+c<=l*f?0:r+c<l*f+f?r+c-l*f:f}}(u,c,l,h,e,a,x,t);let o=0,p=0;if(r){const m=r.hasGCSSShiftTransform?360:r.halfWorldWidth,y=u*r.resolutionX,d=r.startX+l*y,_=d+y;d<m&&_>m?p=r.rightPadding:d>=m&&(o=r.leftMargin-r.rightPadding,p=0)}if(i.xmax-=p,"number"!=typeof f)for(let m=i.ymin;m<i.ymax;m++){const y=(h*c+m-a)*x+(l*u-e)+o,d=m*u;for(let _=i.xmin;_<i.xmax;_++)n[y+_]=f[d+_]}else for(let m=i.ymin;m<i.ymax;m++){const y=(h*c+m-a)*x+(l*u-e)+o;for(let d=i.xmin;d<i.xmax;d++)n[y+d]=f}}function P(n,f,s={}){const{clipOffset:l,clipSize:h,alignmentInfo:r,blockWidths:u}=s;if(u)return function E(n,f,s){const l=n.find(o=>(0,F.pC)(o));if(!(0,F.pC)(l))return null;const h=n.some(o=>!(0,F.pC)(o)||!!o.mask),{width:r,height:u}=f,c=h?new Uint8Array(r*u):null,{blockWidths:e}=s,a=[],x=l.getPlaneCount(),t=z.Z.getPixelArrayConstructor(l.pixelType);if(h)for(let o=0,p=0;o<n.length;p+=e[o],o++){const m=n[o];if(!L(m))continue;const y=m.mask;for(let d=0;d<u;d++)for(let _=0;_<e[o];_++)c[d*r+_+p]=null==y?255:y[d*m.width+_]}for(let o=0;o<x;o++){const p=new t(r*u);for(let m=0,y=0;m<n.length;y+=e[m],m++){const d=n[m];if(!L(d))continue;const _=d.pixels[o];if(null!=_)for(let k=0;k<u;k++)for(let A=0;A<e[m];A++)p[k*r+A+y]=_[k*d.width+A]}a.push(p)}const i=new z.Z({width:r,height:u,mask:c,pixels:a,pixelType:l.pixelType});return i.updateStatistics(),i}(n,f,{blockWidths:u});const c=n.find(b=>L(b));if((0,F.Wi)(c))return null;const e=h?h.width:f.width,a=h?h.height:f.height,x=c.width,t=c.height,i=f.width/x,o=f.height/t,p={offset:l||{x:0,y:0},mosaic:h||f,block:{width:x,height:t}},m=c.pixelType,y=z.Z.getPixelArrayConstructor(m),d=c.pixels.length,_=[];let k,A,C;for(let b=0;b<d;b++){A=new y(e*a);for(let O=0;O<o;O++)for(let T=0;T<i;T++){const j=n[O*i+T];L(j)&&(k=j.pixels[b],B(A,k,p,T,O,r))}_.push(A)}if(n.some(b=>(0,F.Wi)(b)||b.mask&&b.mask.length>0)){C=new Uint8Array(e*a);for(let b=0;b<o;b++)for(let O=0;O<i;O++){const T=n[b*i+O];B(C,((0,F.pC)(T)?T.mask:null)||(T?1:0),p,O,b,r)}}const R=new z.Z({width:e,height:a,pixels:_,pixelType:m,mask:C});return R.updateStatistics(),R}function U(n,f,s){if(!L(n))return null;const{width:l,height:h}=n,r=f.x,u=f.y,c=s.width+r,e=s.height+u;if(r<0||u<0||c>l||e>h||0===r&&0===u&&c===l&&e===h)return n;n.mask||(n.mask=new Uint8Array(l*h));const a=n.mask;for(let x=0;x<h;x++){const t=x*l;for(let i=0;i<l;i++)a[t+i]=x<u||x>=e||i<r||i>=c?0:1}return n.updateStatistics(),n}function v(n){if(0===n.size)return 0;let f=0,s=-1,l=0;const h=n.keys();let r=h.next();for(;!r.done;)l=n.get(r.value),l>f&&(s=r.value,f=l),r=h.next();return s}function D(n,f,s){if(0===s)return;const l=n.get(f);1===l?n.delete(f):n.set(f,l-1)}function W(n,f,s){0!==s&&n.set(f,n.has(f)?n.get(f)+1:1)}function J(n,f,s){let{x:l,y:h}=f;const{width:r,height:u}=s;if(0===l&&0===h&&u===n.height&&r===n.width)return n;const{width:c,height:e}=n,a=Math.max(0,h),x=Math.max(0,l),t=Math.min(l+r,c),i=Math.min(h+u,e);if(t<0||i<0||!L(n))return null;l=Math.max(0,-l),h=Math.max(0,-h);const{pixels:o,mask:p}=n,m=r*u,y=o.length,d=[];for(let A=0;A<y;A++){const C=o[A],R=z.Z.createEmptyBand(n.pixelType,m);for(let b=a;b<i;b++){const O=b*c;let T=(b+h-a)*r+l;for(let j=x;j<t;j++)R[T++]=C[O+j]}d.push(R)}const _=new Uint8Array(m);for(let A=a;A<i;A++){const C=A*c;let R=(A+h-a)*r+l;for(let b=x;b<t;b++)_[R++]=p?p[C+b]:1}const k=new z.Z({width:s.width,height:s.height,pixelType:n.pixelType,pixels:d,mask:_});return k.updateStatistics(),k}function Y(n,f=!0){if(!L(n))return null;const{pixels:s,width:l,height:h,mask:r,pixelType:u}=n,c=[],e=Math.round(l/2),a=Math.round(h/2),x=h-1,t=l-1;for(let o=0;o<s.length;o++){const p=s[o],m=z.Z.createEmptyBand(u,e*a);let y=0;for(let d=0;d<h;d+=2)for(let _=0;_<l;_+=2){const k=p[d*l+_];if(f){const A=_===t?k:p[d*l+_+1],C=d===x?k:p[d*l+_+l];m[y++]=(k+A+C+(_===t?C:d===x?A:p[d*l+_+l+1]))/4}else m[y++]=k}c.push(m)}let i=null;if(r){i=new Uint8Array(e*a);let o=0;for(let p=0;p<h;p+=2)for(let m=0;m<l;m+=2){const y=r[p*l+m];if(f){const d=m===t?y:r[p*l+m+1],_=p===x?y:r[p*l+m+l];i[o++]=y*d*_*(m===t?_:p===x?d:r[p*l+m+l+1])?1:0}else i[o++]=y}}return new z.Z({width:e,height:a,pixelType:u,pixels:c,mask:i})}function H(n,f,s){if(!L(n))return null;const{width:l,height:h}=f;let{width:r,height:u}=n;const c=new Map,e={x:0,y:0},a=null==s?1:1+s;let x=n;for(let t=0;t<a;t++){const i=Math.ceil(r/l),o=Math.ceil(u/h);for(let p=0;p<o;p++){e.y=p*h;for(let m=0;m<i;m++){e.x=m*l;const y=J(x,e,f);c.set(`${t}/${p}/${m}`,y)}}t<a-1&&(x=Y(x)),r=Math.round(r/2),u=Math.round(u/2)}return c}function S(n,f,s,l,h=.5){const{width:r,height:u}=n,{width:c,height:e}=f,a=l.cols,x=l.rows,t=Math.ceil(c/a-.1/a),i=Math.ceil(e/x-.1/x);let o,p,m,y,d,_,k;const A=t*a,C=A*i*x,R=new Float32Array(C),b=new Float32Array(C),O=new Uint32Array(C),T=new Uint32Array(C);let j,it,Z=0;for(let X=0;X<i;X++)for(let $=0;$<t;$++){o=12*(X*t+$),p=s[o],m=s[o+1],y=s[o+2],d=s[o+3],_=s[o+4],k=s[o+5];for(let K=0;K<x;K++){Z=(X*x+K)*A+$*a,it=(K+.5)/x;for(let I=0;I<K;I++)j=(I+.5)/a,R[Z+I]=(p*j+m*it+y)*r-h,b[Z+I]=(d*j+_*it+k)*u-h,O[Z+I]=Math.round(R[Z+I]),T[Z+I]=Math.round(b[Z+I])}o+=6,p=s[o],m=s[o+1],y=s[o+2],d=s[o+3],_=s[o+4],k=s[o+5];for(let K=0;K<x;K++){Z=(X*x+K)*A+$*a,it=(K+.5)/x;for(let I=K;I<a;I++)j=(I+.5)/a,R[Z+I]=(p*j+m*it+y)*r-h,b[Z+I]=(d*j+_*it+k)*u-h,O[Z+I]=Math.round(R[Z+I]),T[Z+I]=Math.round(b[Z+I])}}return{offsets_x:R,offsets_y:b,offsets_xi:O,offsets_yi:T,gridWidth:A}}function q(n,f){const{coefficients:s,spacing:l}=f,{offsets_x:h,offsets_y:r,gridWidth:u}=S(n,n,s,{rows:l[0],cols:l[1]},.5),{width:c,height:e}=n,a=new Float32Array(c*e),x=180/Math.PI;for(let t=0;t<e;t++)for(let i=0;i<c;i++){const o=t*u+i,p=0===t?o:o-u,m=t===e-1?o:o+u,y=h[p]-h[m],d=r[m]-r[p];if(isNaN(y)||isNaN(d))a[t*c+i]=90;else{let _=Math.atan2(d,y)*x;_=(360+_)%360,a[t*c+i]=_}}return a}function G(n,f,s,l,h="nearest"){if(!L(n))return null;"majority"===h&&(n=function M(n){if(!L(n))return null;const f=n.clone(),{width:s,height:l,pixels:h,mask:r}=n,u=h[0],c=f.pixels[0];for(let e=2;e<l-1;e++){const a=new Map;for(let t=e-2;t<e+2;t++)for(let i=0;i<4;i++){const o=t*s+i;W(a,u[o],r?r[o]:1)}c[e*s]=v(a),c[e*s+1]=c[e*s+2]=c[e*s];let x=3;for(;x<s-1;x++){let t=(e-2)*s+x+1;W(a,u[t],r?r[t]:1),t=(e-1)*s+x+1,W(a,u[t],r?r[t]:1),t=e*s+x+1,W(a,u[t],r?r[t]:1),t=(e+1)*s+x+1,W(a,u[t],r?r[t]:1),t=(e-2)*s+x-3,D(a,u[t],r?r[t]:1),t=(e-1)*s+x-3,D(a,u[t],r?r[t]:1),t=e*s+x-3,D(a,u[t],r?r[t]:1),t=(e+1)*s+x-3,D(a,u[t],r?r[t]:1),c[e*s+x]=v(a)}c[e*s+x+1]=c[e*s+x]}for(let e=0;e<s;e++)c[e]=c[s+e]=c[2*s+e],c[(l-1)*s+e]=c[(l-2)*s+e];return f.updateStatistics(),f}(n));const{pixels:r,mask:u,pixelType:c}=n,e=n.width,a=n.height,x=z.Z.getPixelArrayConstructor(c),t=r.length,{width:i,height:o}=f;let p=!1;for(let T=0;T<s.length;T+=3)-1===s[T]&&-1===s[T+1]&&-1===s[T+2]&&(p=!0);const{offsets_x:m,offsets_y:y,offsets_xi:d,offsets_yi:_,gridWidth:k}=S({width:e,height:a},f,s,l,"majority"===h?0:.5);let A;const C=(T,j,it)=>{const Z=T instanceof Float32Array||T instanceof Float64Array?0:.5;for(let X=0;X<o;X++){A=X*k;for(let $=0;$<i;$++){if(m[A]<0||y[A]<0)T[X*i+$]=0;else if(it)T[X*i+$]=j[d[A]+_[A]*e];else{const K=Math.floor(m[A]),I=Math.floor(y[A]),pt=Math.ceil(m[A]),st=Math.ceil(y[A]),nt=m[A]-K,xt=y[A]-I;T[X*i+$]=!u||u[K+I*e]&&u[K+I*e]&&u[K+st*e]&&u[pt+st*e]?(1-xt)*((1-nt)*j[K+I*e]+nt*j[pt+I*e])+xt*((1-nt)*j[K+st*e]+nt*j[pt+st*e])+Z:j[d[A]+_[A]*e]}A++}}},R=[];let b;for(let T=0;T<t;T++)b=new x(i*o),C(b,r[T],"nearest"===h||"majority"===h),R.push(b);const O=new z.Z({width:i,height:o,pixelType:c,pixels:R});if(u)O.mask=new Uint8Array(i*o),C(O.mask,u,!0);else if(p){O.mask=new Uint8Array(i*o);for(let T=0;T<i*o;T++)O.mask[T]=m[T]<0||y[T]<0?0:1}return O.updateStatistics(),O}}}]);