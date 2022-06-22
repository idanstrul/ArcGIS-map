"use strict";var Va=Object.defineProperty,Wa=Object.defineProperties,Ga=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,li=(ve,K,x)=>K in ve?Va(ve,K,{enumerable:!0,configurable:!0,writable:!0,value:x}):ve[K]=x,It=(ve,K)=>{for(var x in K||(K={}))ja.call(K,x)&&li(ve,x,K[x]);if(si)for(var x of si(K))Ka.call(K,x)&&li(ve,x,K[x]);return ve},hr=(ve,K)=>Wa(ve,Ga(K));(self.webpackChunkKapow_Maps_Exam=self.webpackChunkKapow_Maps_Exam||[]).push([[7090,3100],{96160:(ve,K,x)=>{x.d(K,{D:()=>ht,b:()=>mt});var y=x(59617),S=x(52382),O=x(73132),I=x(6945),P=x(78925),B=x(24255),w=x(60355),M=x(26859),U=x(84833),H=x(72326),N=x(36603),j=x(58173),k=x(85305),W=x(52071),$=x(5105),V=x(47923),J=x(29052),ce=x(54662),Be=x(22792),ie=x(10109),se=x(96395),ue=x(98898),_e=x(92724),xe=x(8507),Z=x(92836),He=x(93609),we=x(411),ze=x(49974),Te=x(17625),ne=x(22355),pe=x(16396);function mt(F){const fe=new ne.kG,Ft=fe.vertex.code,st=fe.fragment.code;fe.include(we.a,{name:"Default Material Shader",output:F.output}),fe.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const zt=F.hasModelTransformation;return zt&&fe.vertex.uniforms.add("model","mat4"),fe.include(U.f),fe.varyings.add("vpos","vec3"),fe.include(Z.kl,F),fe.include(w.fQ,F),fe.include(W.LC,F),F.output!==I.H.Color&&F.output!==I.H.Alpha||(fe.include(M.O,F),fe.include(B.w,{linearDepth:!1,hasModelTransformation:zt}),F.normalType===M.h.Attribute&&F.offsetBackfaces&&fe.include(O.w),fe.include(J.Q,F),fe.include(k.B,F),F.instancedColor&&fe.attributes.add(pe.T.INSTANCECOLOR,"vec4"),fe.varyings.add("localvpos","vec3"),fe.include(N.D,F),fe.include(S.q,F),fe.include(H.R,F),fe.include(j.c,F),fe.vertex.uniforms.add("externalColor","vec4"),fe.varyings.add("vcolorExt","vec4"),F.multipassTerrainEnabled&&fe.varyings.add("depth","float"),Ft.add(Te.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${F.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Te.H.float(He.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${F.normalType===M.h.Attribute?Te.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${F.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${zt?"model,":""} vpos);
          ${F.normalType===M.h.Attribute&&F.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${F.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),F.output===I.H.Alpha&&(fe.include(P.p2,F),fe.include(He.sj,F),F.multipassTerrainEnabled&&(fe.fragment.include(V.S),fe.include(ie.l,F)),fe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),F.hasColorTexture&&fe.fragment.uniforms.add("tex","sampler2D"),fe.fragment.include(ze.y),st.add(Te.H`
      void main() {
        discardBySlice(vpos);
        ${F.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${F.hasColorTexture?Te.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${F.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Te.H`vec4 texColor = vec4(1.0);`}
        ${F.attributeColor?Te.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Te.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),F.output===I.H.Color&&(fe.include(P.p2,F),fe.include(Be.X,F),fe.include(ce.K,F),fe.include(He.sj,F),F.receiveShadows&&fe.include(xe.hX,F),F.multipassTerrainEnabled&&(fe.fragment.include(V.S),fe.include(ie.l,F)),fe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),F.hasColorTexture&&fe.fragment.uniforms.add("tex","sampler2D"),fe.include(_e.jV,F),fe.include(ue.T,F),fe.fragment.include(ze.y),fe.include(se.k,F),st.add(Te.H`
      void main() {
        discardBySlice(vpos);
        ${F.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${F.hasColorTexture?Te.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${F.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Te.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${F.normalType===M.h.ScreenDerivative?Te.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:Te.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${F.pbrMode===_e.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${F.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":F.viewingMode===y.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${F.attributeColor?Te.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Te.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${F.hasNormalTexture?Te.H`
              mat3 tangentSpace = ${F.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${F.pbrMode===_e.f7.Normal||F.pbrMode===_e.f7.Schematic?F.viewingMode===y.JY.Global?Te.H`vec3 normalGround = normalize(vpos + localOrigin);`:Te.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Te.H``}
        ${F.pbrMode===_e.f7.Normal||F.pbrMode===_e.f7.Schematic?Te.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${F.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),fe.include($.s,F),fe}const ht=Object.freeze({__proto__:null,build:mt})},77133:(ve,K,x)=>{x.d(K,{R:()=>Te,b:()=>ze});var y=x(59617),S=x(52382),O=x(73132),I=x(6945),P=x(78925),B=x(24255),w=x(60355),M=x(26859),U=x(84833),H=x(72326),N=x(36603),j=x(58173),k=x(52071),W=x(5105),$=x(47923),V=x(54662),J=x(22792),ce=x(10109),Be=x(98898),ie=x(92724),se=x(8507),ue=x(92836),_e=x(93609),xe=x(49974),Z=x(17625),He=x(22355),we=x(16396);function ze(ne){const pe=new He.kG,mt=pe.vertex.code,ht=pe.fragment.code;return pe.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),pe.include(U.f),pe.varyings.add("vpos","vec3"),pe.include(ue.kl,ne),pe.include(w.fQ,ne),pe.include(k.LC,ne),ne.output!==I.H.Color&&ne.output!==I.H.Alpha||(pe.include(M.O,ne),pe.include(B.w,{linearDepth:!1}),ne.offsetBackfaces&&pe.include(O.w),ne.instancedColor&&pe.attributes.add(we.T.INSTANCECOLOR,"vec4"),pe.varyings.add("vNormalWorld","vec3"),pe.varyings.add("localvpos","vec3"),ne.multipassTerrainEnabled&&pe.varyings.add("depth","float"),pe.include(N.D,ne),pe.include(S.q,ne),pe.include(H.R,ne),pe.include(j.c,ne),pe.vertex.uniforms.add("externalColor","vec4"),pe.varyings.add("vcolorExt","vec4"),mt.add(Z.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${ne.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Z.H.float(_e.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${ne.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${ne.multipassTerrainEnabled?Z.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),ne.output===I.H.Alpha&&(pe.include(P.p2,ne),pe.include(_e.sj,ne),ne.multipassTerrainEnabled&&(pe.fragment.include($.S),pe.include(ce.l,ne)),pe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),pe.fragment.uniforms.add("view","mat4"),ne.hasColorTexture&&pe.fragment.uniforms.add("tex","sampler2D"),pe.fragment.include(xe.y),ht.add(Z.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassTerrainEnabled?Z.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ne.hasColorTexture?Z.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Z.H`vec4 texColor = vec4(1.0);`}
        ${ne.attributeColor?Z.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Z.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),ne.output===I.H.Color&&(pe.include(P.p2,ne),pe.include(J.X,ne),pe.include(V.K,ne),pe.include(_e.sj,ne),ne.receiveShadows&&pe.include(se.hX,ne),ne.multipassTerrainEnabled&&(pe.fragment.include($.S),pe.include(ce.l,ne)),pe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),pe.fragment.uniforms.add("view","mat4"),ne.hasColorTexture&&pe.fragment.uniforms.add("tex","sampler2D"),pe.include(ie.jV,ne),pe.include(Be.T,ne),pe.fragment.include(xe.y),ht.add(Z.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassTerrainEnabled?Z.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ne.hasColorTexture?Z.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Z.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${ne.pbrMode===ie.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${ne.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":ne.viewingMode===y.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${ne.attributeColor?Z.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Z.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Z.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${ne.pbrMode===ie.f7.Normal||ne.pbrMode===ie.f7.Schematic?ne.viewingMode===y.JY.Global?Z.H`vec3 normalGround = normalize(vpos + localOrigin);`:Z.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Z.H``}
        ${ne.pbrMode===ie.f7.Normal||ne.pbrMode===ie.f7.Schematic?Z.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ne.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),pe.include(W.s,ne),pe}const Te=Object.freeze({__proto__:null,build:ze})},550:(ve,K,x)=>{function y(){return[1,0,0,0,1,0,0,0,1]}function I(B,w){return new Float64Array(B,w,9)}x.d(K,{a:()=>I,c:()=>y}),Object.freeze({__proto__:null,create:y,clone:function S(B){return[B[0],B[1],B[2],B[3],B[4],B[5],B[6],B[7],B[8]]},fromValues:function O(B,w,M,U,H,N,j,k,W){return[B,w,M,U,H,N,j,k,W]},createView:I})},43703:(ve,K,x)=>{function y(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function S(w){return[w[0],w[1],w[2],w[3],w[4],w[5],w[6],w[7],w[8],w[9],w[10],w[11],w[12],w[13],w[14],w[15]]}function I(w,M){return new Float64Array(w,M,16)}x.d(K,{I:()=>P,a:()=>I,b:()=>S,c:()=>y});const P=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:y,clone:S,fromValues:function O(w,M,U,H,N,j,k,W,$,V,J,ce,Be,ie,se,ue){return[w,M,U,H,N,j,k,W,$,V,J,ce,Be,ie,se,ue]},createView:I,IDENTITY:P})},48977:(ve,K,x)=>{x.d(K,{c:()=>ce,g:()=>U,j:()=>F,k:()=>ie,m:()=>H,s:()=>M});var y=x(550),S=x(78451),O=x(28093),I=x(39863),P=x(84161),B=x(993);function M(G,q,z){z*=.5;const oe=Math.sin(z);return G[0]=oe*q[0],G[1]=oe*q[1],G[2]=oe*q[2],G[3]=Math.cos(z),G}function U(G,q){const z=2*Math.acos(q[3]),oe=Math.sin(z/2);return oe>I.E?(G[0]=q[0]/oe,G[1]=q[1]/oe,G[2]=q[2]/oe):(G[0]=1,G[1]=0,G[2]=0),z}function H(G,q,z){const oe=q[0],he=q[1],ge=q[2],Ee=q[3],Ae=z[0],Ue=z[1],lt=z[2],ft=z[3];return G[0]=oe*ft+Ee*Ae+he*lt-ge*Ue,G[1]=he*ft+Ee*Ue+ge*Ae-oe*lt,G[2]=ge*ft+Ee*lt+oe*Ue-he*Ae,G[3]=Ee*ft-oe*Ae-he*Ue-ge*lt,G}function $(G,q,z,oe){const he=q[0],ge=q[1],Ee=q[2],Ae=q[3];let Ue,lt,ft,yt,X,Y=z[0],te=z[1],ee=z[2],le=z[3];return lt=he*Y+ge*te+Ee*ee+Ae*le,lt<0&&(lt=-lt,Y=-Y,te=-te,ee=-ee,le=-le),1-lt>I.E?(Ue=Math.acos(lt),ft=Math.sin(Ue),yt=Math.sin((1-oe)*Ue)/ft,X=Math.sin(oe*Ue)/ft):(yt=1-oe,X=oe),G[0]=yt*he+X*Y,G[1]=yt*ge+X*te,G[2]=yt*Ee+X*ee,G[3]=yt*Ae+X*le,G}function ce(G,q){return G[0]=-q[0],G[1]=-q[1],G[2]=-q[2],G[3]=q[3],G}function Be(G,q){const z=q[0]+q[4]+q[8];let oe;if(z>0)oe=Math.sqrt(z+1),G[3]=.5*oe,oe=.5/oe,G[0]=(q[5]-q[7])*oe,G[1]=(q[6]-q[2])*oe,G[2]=(q[1]-q[3])*oe;else{let he=0;q[4]>q[0]&&(he=1),q[8]>q[3*he+he]&&(he=2);const ge=(he+1)%3,Ee=(he+2)%3;oe=Math.sqrt(q[3*he+he]-q[3*ge+ge]-q[3*Ee+Ee]+1),G[he]=.5*oe,oe=.5/oe,G[3]=(q[3*ge+Ee]-q[3*Ee+ge])*oe,G[ge]=(q[3*ge+he]+q[3*he+ge])*oe,G[Ee]=(q[3*Ee+he]+q[3*he+Ee])*oe}return G}function ie(G,q,z,oe){const he=.5*Math.PI/180;q*=he,z*=he,oe*=he;const ge=Math.sin(q),Ee=Math.cos(q),Ae=Math.sin(z),Ue=Math.cos(z),lt=Math.sin(oe),ft=Math.cos(oe);return G[0]=ge*Ue*ft-Ee*Ae*lt,G[1]=Ee*Ae*ft+ge*Ue*lt,G[2]=Ee*Ue*lt-ge*Ae*ft,G[3]=Ee*Ue*ft+ge*Ae*lt,G}const ue=B.c,_e=B.s,xe=B.a,Z=H,He=B.b,we=B.d,ze=B.l,Te=B.e,ne=Te,pe=B.f,mt=pe,ht=B.n,F=B.g,fe=B.h,st=(0,O.c)(),zt=(0,O.f)(1,0,0),nr=(0,O.f)(0,1,0),vt=(0,S.a)(),Vt=(0,S.a)(),rr=(0,y.c)();Object.freeze({__proto__:null,identity:function w(G){return G[0]=0,G[1]=0,G[2]=0,G[3]=1,G},setAxisAngle:M,getAxisAngle:U,multiply:H,rotateX:function N(G,q,z){z*=.5;const oe=q[0],he=q[1],ge=q[2],Ee=q[3],Ae=Math.sin(z),Ue=Math.cos(z);return G[0]=oe*Ue+Ee*Ae,G[1]=he*Ue+ge*Ae,G[2]=ge*Ue-he*Ae,G[3]=Ee*Ue-oe*Ae,G},rotateY:function j(G,q,z){z*=.5;const oe=q[0],he=q[1],ge=q[2],Ee=q[3],Ae=Math.sin(z),Ue=Math.cos(z);return G[0]=oe*Ue-ge*Ae,G[1]=he*Ue+Ee*Ae,G[2]=ge*Ue+oe*Ae,G[3]=Ee*Ue-he*Ae,G},rotateZ:function k(G,q,z){z*=.5;const oe=q[0],he=q[1],ge=q[2],Ee=q[3],Ae=Math.sin(z),Ue=Math.cos(z);return G[0]=oe*Ue+he*Ae,G[1]=he*Ue-oe*Ae,G[2]=ge*Ue+Ee*Ae,G[3]=Ee*Ue-ge*Ae,G},calculateW:function W(G,q){const z=q[0],oe=q[1],he=q[2];return G[0]=z,G[1]=oe,G[2]=he,G[3]=Math.sqrt(Math.abs(1-z*z-oe*oe-he*he)),G},slerp:$,random:function V(G){const q=(0,I.R)(),z=(0,I.R)(),oe=(0,I.R)(),he=Math.sqrt(1-q),ge=Math.sqrt(q);return G[0]=he*Math.sin(2*Math.PI*z),G[1]=he*Math.cos(2*Math.PI*z),G[2]=ge*Math.sin(2*Math.PI*oe),G[3]=ge*Math.cos(2*Math.PI*oe),G},invert:function J(G,q){const z=q[0],oe=q[1],he=q[2],ge=q[3],Ee=z*z+oe*oe+he*he+ge*ge,Ae=Ee?1/Ee:0;return G[0]=-z*Ae,G[1]=-oe*Ae,G[2]=-he*Ae,G[3]=ge*Ae,G},conjugate:ce,fromMat3:Be,fromEuler:ie,str:function se(G){return"quat("+G[0]+", "+G[1]+", "+G[2]+", "+G[3]+")"},copy:ue,set:_e,add:xe,mul:Z,scale:He,dot:we,lerp:ze,length:Te,len:ne,squaredLength:pe,sqrLen:mt,normalize:ht,exactEquals:F,equals:fe,rotationTo:function Ft(G,q,z){const oe=(0,P.d)(q,z);return oe<-.999999?((0,P.c)(st,zt,q),(0,P.u)(st)<1e-6&&(0,P.c)(st,nr,q),(0,P.n)(st,st),M(G,st,Math.PI),G):oe>.999999?(G[0]=0,G[1]=0,G[2]=0,G[3]=1,G):((0,P.c)(st,q,z),G[0]=st[0],G[1]=st[1],G[2]=st[2],G[3]=1+oe,ht(G,G))},sqlerp:function _t(G,q,z,oe,he,ge){return $(vt,q,he,ge),$(Vt,z,oe,ge),$(G,vt,Vt,2*ge*(1-ge)),G},setAxes:function sr(G,q,z,oe){const he=rr;return he[0]=z[0],he[3]=z[1],he[6]=z[2],he[1]=oe[0],he[4]=oe[1],he[7]=oe[2],he[2]=-q[0],he[5]=-q[1],he[8]=-q[2],ht(G,Be(G,he))}})},78451:(ve,K,x)=>{function y(){return[0,0,0,1]}function S(w){return[w[0],w[1],w[2],w[3]]}function I(w,M){return new Float64Array(w,M,4)}x.d(K,{I:()=>P,a:()=>y,b:()=>S,c:()=>I});const P=[0,0,0,1];Object.freeze({__proto__:null,create:y,clone:S,fromValues:function O(w,M,U,H){return[w,M,U,H]},createView:I,IDENTITY:P})},79800:(ve,K,x)=>{x.d(K,{a:()=>O,b:()=>B,n:()=>P,s:()=>I,t:()=>S});var y=x(96286);function S(M,U,H){if(M.count!==U.count)return void y.c.error("source and destination buffers need to have the same number of elements");const N=M.count,j=H[0],k=H[1],W=H[2],$=H[4],V=H[5],J=H[6],ce=H[8],Be=H[9],ie=H[10],se=H[12],ue=H[13],_e=H[14],xe=M.typedBuffer,Z=M.typedBufferStride,He=U.typedBuffer,we=U.typedBufferStride;for(let ze=0;ze<N;ze++){const Te=ze*Z,ne=ze*we,pe=He[ne],mt=He[ne+1],ht=He[ne+2];xe[Te]=j*pe+$*mt+ce*ht+se,xe[Te+1]=k*pe+V*mt+Be*ht+ue,xe[Te+2]=W*pe+J*mt+ie*ht+_e}}function O(M,U,H){if(M.count!==U.count)return void y.c.error("source and destination buffers need to have the same number of elements");const N=M.count,j=H[0],k=H[1],W=H[2],$=H[3],V=H[4],J=H[5],ce=H[6],Be=H[7],ie=H[8],se=M.typedBuffer,ue=M.typedBufferStride,_e=U.typedBuffer,xe=U.typedBufferStride;for(let Z=0;Z<N;Z++){const He=Z*ue,we=Z*xe,ze=_e[we],Te=_e[we+1],ne=_e[we+2];se[He]=j*ze+$*Te+ce*ne,se[He+1]=k*ze+V*Te+Be*ne,se[He+2]=W*ze+J*Te+ie*ne}}function I(M,U,H){const N=Math.min(M.count,U.count),j=M.typedBuffer,k=M.typedBufferStride,W=U.typedBuffer,$=U.typedBufferStride;for(let V=0;V<N;V++){const J=V*k,ce=V*$;j[J]=H*W[ce],j[J+1]=H*W[ce+1],j[J+2]=H*W[ce+2]}}function P(M,U){const H=Math.min(M.count,U.count),N=M.typedBuffer,j=M.typedBufferStride,k=U.typedBuffer,W=U.typedBufferStride;for(let $=0;$<H;$++){const V=$*j,J=$*W,ce=k[J],Be=k[J+1],ie=k[J+2],se=Math.sqrt(ce*ce+Be*Be+ie*ie);if(se>0){const ue=1/se;N[V]=ue*ce,N[V+1]=ue*Be,N[V+2]=ue*ie}}}function B(M,U,H){const N=Math.min(M.count,U.count),j=M.typedBuffer,k=M.typedBufferStride,W=U.typedBuffer,$=U.typedBufferStride;for(let V=0;V<N;V++){const J=V*k,ce=V*$;j[J]=W[ce]>>H,j[J+1]=W[ce+1]>>H,j[J+2]=W[ce+2]>>H}}Object.freeze({__proto__:null,transformMat4:S,transformMat3:O,scale:I,normalize:P,shiftRight:B})},9554:(ve,K,x)=>{function y(I,P,B){const w=I.typedBuffer,M=I.typedBufferStride,U=P.typedBuffer,H=P.typedBufferStride,N=B?B.count:P.count;let j=(B&&B.dstIndex?B.dstIndex:0)*M,k=(B&&B.srcIndex?B.srcIndex:0)*H;for(let W=0;W<N;++W)w[j]=U[k],w[j+1]=U[k+1],w[j+2]=U[k+2],j+=M,k+=H}function S(I,P,B,w,M){var U,H;const N=I.typedBuffer,j=I.typedBufferStride,k=null!=(U=null==M?void 0:M.count)?U:I.count;let W=(null!=(H=null==M?void 0:M.dstIndex)?H:0)*j;for(let $=0;$<k;++$)N[W]=P,N[W+1]=B,N[W+2]=w,W+=j}x.d(K,{c:()=>y,f:()=>S}),Object.freeze({__proto__:null,copy:y,fill:S})},14658:(ve,K,x)=>{function y(){return new Float32Array(3)}function O(V,J,ce){const Be=new Float32Array(3);return Be[0]=V,Be[1]=J,Be[2]=ce,Be}function P(){return y()}function B(){return O(1,1,1)}function w(){return O(1,0,0)}function M(){return O(0,1,0)}function U(){return O(0,0,1)}x.d(K,{c:()=>y,f:()=>O});const H=P(),N=B(),j=w(),k=M(),W=U();Object.freeze({__proto__:null,create:y,clone:function S(V){const J=new Float32Array(3);return J[0]=V[0],J[1]=V[1],J[2]=V[2],J},fromValues:O,createView:function I(V,J){return new Float32Array(V,J,3)},zeros:P,ones:B,unitX:w,unitY:M,unitZ:U,ZEROS:H,ONES:N,UNIT_X:j,UNIT_Y:k,UNIT_Z:W})},83100:(ve,K,x)=>{function y(U){return U=U||globalThis.location.hostname,M.some(H=>{var N;return null!=(null==(N=U)?void 0:N.match(H))})}function S(U,H){return U&&(H=H||globalThis.location.hostname)?null!=H.match(I)||null!=H.match(B)?U.replace("static.arcgis.com","staticdev.arcgis.com"):null!=H.match(P)||null!=H.match(w)?U.replace("static.arcgis.com","staticqa.arcgis.com"):U:U}x.d(K,{XO:()=>y,pJ:()=>S});const I=/^devext.arcgis.com$/,P=/^qaext.arcgis.com$/,B=/^[\w-]*\.mapsdevext.arcgis.com$/,w=/^[\w-]*\.mapsqa.arcgis.com$/,M=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,I,P,/^jsapps.esri.com$/,B,w]},96286:(ve,K,x)=>{x.d(K,{c:()=>S});const S=x(63290).Z.getLogger("esri.views.3d.support.buffer.math")},47090:(ve,K,x)=>{x.r(K),x.d(K,{fetch:()=>Ua,gltfToEngineResources:()=>br,parseUrl:()=>ni});var y=x(15861),S=x(83100),O=x(62208),I=x(30217),P=x(550),B=x(28347),w=x(43703),M=x(84161),U=x(28093),H=x(5548),N=x(60479),j=x(79800),k=x(63657),W=x(60490),$=x(9160),V=x(93831),J=x(96170),ce=x(84792),Be=x(59213),ie=x(26584),se=x(63290),ue=x(10699),_e=x(10349),xe=x(70026),Z=x(42743),He=x(77029),we=x(2282);class ze{constructor(d,u,v,b){this.primitiveIndices=d,this._numIndexPerPrimitive=u,this.indices=v,this.position=b,this.center=(0,U.c)(),(0,we.hu)(d.length>=1),(0,we.hu)(v.length%this._numIndexPerPrimitive==0),(0,we.hu)(v.length>=d.length*this._numIndexPerPrimitive),(0,we.hu)(3===b.size||4===b.size);const{data:C,size:A}=b,R=d.length;let L=A*v[this._numIndexPerPrimitive*d[0]];Te.clear(),Te.push(L),this.bbMin=(0,U.f)(C[L],C[L+1],C[L+2]),this.bbMax=(0,U.a)(this.bbMin);for(let Q=0;Q<R;++Q){const de=this._numIndexPerPrimitive*d[Q];for(let ae=0;ae<this._numIndexPerPrimitive;++ae){L=A*v[de+ae],Te.push(L);let be=C[L];this.bbMin[0]=Math.min(be,this.bbMin[0]),this.bbMax[0]=Math.max(be,this.bbMax[0]),be=C[L+1],this.bbMin[1]=Math.min(be,this.bbMin[1]),this.bbMax[1]=Math.max(be,this.bbMax[1]),be=C[L+2],this.bbMin[2]=Math.min(be,this.bbMin[2]),this.bbMax[2]=Math.max(be,this.bbMax[2])}}(0,M.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let D=this.radius*this.radius;for(let Q=0;Q<Te.length;++Q){L=Te.getItemAt(Q);const de=C[L]-this.center[0],ae=C[L+1]-this.center[1],be=C[L+2]-this.center[2],re=de*de+ae*ae+be*be;if(re<=D)continue;const De=Math.sqrt(re),Re=.5*(De-this.radius);this.radius=this.radius+Re,D=this.radius*this.radius;const Fe=Re/De;this.center[0]+=de*Fe,this.center[1]+=ae*Fe,this.center[2]+=be*Fe}Te.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,M.h)(this.bbMin,this.bbMax)>1){const d=(0,M.e)((0,U.c)(),this.bbMin,this.bbMax,.5),u=this.primitiveIndices.length,v=new Uint8Array(u),b=new Array(8);for(let D=0;D<8;++D)b[D]=0;const{data:C,size:A}=this.position;for(let D=0;D<u;++D){let Q=0;const de=this._numIndexPerPrimitive*this.primitiveIndices[D];let ae=A*this.indices[de],be=C[ae],re=C[ae+1],De=C[ae+2];for(let Re=1;Re<this._numIndexPerPrimitive;++Re){ae=A*this.indices[de+Re];const Fe=C[ae],dt=C[ae+1],Qe=C[ae+2];Fe<be&&(be=Fe),dt<re&&(re=dt),Qe<De&&(De=Qe)}be<d[0]&&(Q|=1),re<d[1]&&(Q|=2),De<d[2]&&(Q|=4),v[D]=Q,++b[Q]}let R=0;for(let D=0;D<8;++D)b[D]>0&&++R;if(R<2)return;const L=new Array(8);for(let D=0;D<8;++D)L[D]=b[D]>0?new Uint32Array(b[D]):void 0;for(let D=0;D<8;++D)b[D]=0;for(let D=0;D<u;++D){const Q=v[D];L[Q][b[Q]++]=this.primitiveIndices[D]}this._children=new Array(8);for(let D=0;D<8;++D)void 0!==L[D]&&(this._children[D]=new ze(L[D],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Te.prune()}}const Te=new He.Z({deallocator:null});var mt,_,ne=x(86236);class pe{constructor(){this.id=(0,ne.D)()}unload(){}}(_=mt||(mt={}))[_.Layer=0]="Layer",_[_.Object=1]="Object",_[_.Geometry=2]="Geometry",_[_.Material=3]="Material",_[_.Texture=4]="Texture",_[_.COUNT=5]="COUNT";var ht=x(73825),F=x(16396);class fe extends pe{constructor(d,u=[],v=Z.MX.Triangle,b=-1){super(),this._primitiveType=v,this.edgeIndicesLength=b,this.type=mt.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[C,A]of d)A&&this._vertexAttributes.set(C,It({},A));if(null==u||0===u.length){const C=function Ft(_){const d=_.values().next().value;return null==d?0:d.data.length/d.size}(this._vertexAttributes),A=(0,ht.p)(C);this.edgeIndicesLength=this.edgeIndicesLength<0?C:this.edgeIndicesLength;for(const R of this._vertexAttributes.keys())this._indices.set(R,A)}else for(const[C,A]of u)A&&(this._indices.set(C,st(A)),C===F.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(C).length:this.edgeIndicesLength))}cloneShallow(){const d=new fe([],void 0,this._primitiveType,void 0),{_vertexAttributes:u,_indices:v}=d;return this._vertexAttributes.forEach((b,C)=>{u.set(C,b)}),this._indices.forEach((b,C)=>{v.set(C,b)}),d.screenToWorldRatio=this.screenToWorldRatio,d._boundingInfo=this._boundingInfo,d}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(d){const u=this._vertexAttributes.get(d);return u&&!u.exclusive&&(u.data=Array.from(u.data),u.exclusive=!0),u}get indices(){return this._indices}get indexCount(){const d=this._indices.values().next().value;return d?d.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,O.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(d){return this.primitiveType===Z.MX.Triangle?this._computeAttachmentOriginTriangles(d):this._computeAttachmentOriginPoints(d)}_computeAttachmentOriginTriangles(d){const u=this.indices.get(F.T.POSITION),v=this.vertexAttributes.get(F.T.POSITION);return(0,ht.cM)(v,u,d)}_computeAttachmentOriginPoints(d){const u=this.indices.get(F.T.POSITION),v=this.vertexAttributes.get(F.T.POSITION);return(0,ht.NO)(v,u,d)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const d=this.indices.get(F.T.POSITION);if(0===d.length)return null;const u=this.primitiveType===Z.MX.Triangle?3:1;(0,we.hu)(d.length%u==0,"Indexing error: "+d.length+" not divisible by "+u);const v=(0,ht.p)(d.length/u),b=this.vertexAttributes.get(F.T.POSITION);return new ze(v,u,d,b)}}function st(_){if(_.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return _;for(const d of _)if(d>=65536)return _;return new Uint16Array(_)}var zt=x(94573),nr=x(61885),_t=x(21286),vt=x(55713),Vt=x(21726),sr=x(33899),rr=x(54346);function lr(){if((0,O.Wi)(G)){const _=d=>(0,rr.V)(`esri/libs/basisu/${d}`);G=x.e(2405).then(x.bind(x,52405)).then(d=>d.b).then(({default:d})=>d({locateFile:_}).then(u=>(u.initializeBasis(),delete u.then,u)))}return G}let G;var q;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(q||(q={}));var z=x(67969),oe=x(55086),he=x(26906);let ge=null,Ee=null;function Ae(){return Ue.apply(this,arguments)}function Ue(){return(Ue=(0,y.Z)(function*(){return(0,O.Wi)(Ee)&&(Ee=lr(),ge=yield Ee),Ee})).apply(this,arguments)}function yt(_,d,u,v,b){const C=(0,he.RG)(d?z.q_.COMPRESSED_RGBA8_ETC2_EAC:z.q_.COMPRESSED_RGB8_ETC2);return Math.ceil(u*v*C*(b&&_>1?(4**_-1)/(3*4**(_-1)):1))}function X(_){return _.getNumImages()>=1&&!_.isUASTC()}function Y(_){return _.getFaces()>=1&&_.isETC1S()}function ee(){return ee=(0,y.Z)(function*(_,d,u){(0,O.Wi)(ge)&&(ge=yield Ae());const v=new ge.BasisFile(new Uint8Array(u));if(!X(v))return null;v.startTranscoding();const b=Le(_,d,v.getNumLevels(0),v.getHasAlpha(),v.getImageWidth(0,0),v.getImageHeight(0,0),(C,A)=>v.getImageTranscodedSizeInBytes(0,C,A),(C,A,R)=>v.transcodeImage(R,0,C,A,0,0));return v.close(),v.delete(),b}),ee.apply(this,arguments)}function Ce(){return Ce=(0,y.Z)(function*(_,d,u){(0,O.Wi)(ge)&&(ge=yield Ae());const v=new ge.KTX2File(new Uint8Array(u));if(!Y(v))return null;v.startTranscoding();const b=Le(_,d,v.getLevels(),v.getHasAlpha(),v.getWidth(),v.getHeight(),(C,A)=>v.getImageTranscodedSizeInBytes(C,0,0,A),(C,A,R)=>v.transcodeImage(R,C,0,0,A,0,-1,-1));return v.close(),v.delete(),b}),Ce.apply(this,arguments)}function Le(_,d,u,v,b,C,A,R){const{compressedTextureETC:L,compressedTextureS3TC:D}=_.capabilities,[Q,de]=L?v?[q.ETC2_RGBA,z.q_.COMPRESSED_RGBA8_ETC2_EAC]:[q.ETC1_RGB,z.q_.COMPRESSED_RGB8_ETC2]:D?v?[q.BC3_RGBA,z.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[q.BC1_RGB,z.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[q.RGBA32,z.VI.RGBA],ae=d.hasMipmap?u:Math.min(1,u),be=[];for(let Fe=0;Fe<ae;Fe++)be.push(new Uint8Array(A(Fe,Q))),R(Fe,Q,be[Fe]);const re=be.length>1,De=re?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,Re=hr(It({},d),{samplingMode:De,hasMipmap:re,internalFormat:de,width:b,height:C});return new oe.x(_,Re,{type:"compressed",levels:be})}const Me=se.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Xe(_){return _.charCodeAt(0)+(_.charCodeAt(1)<<8)+(_.charCodeAt(2)<<16)+(_.charCodeAt(3)<<24)}const Et=Xe("DXT1"),ct=Xe("DXT3"),xt=Xe("DXT5");const At=new Map([[F.T.POSITION,0],[F.T.NORMAL,1],[F.T.UV0,2],[F.T.COLOR,3],[F.T.SIZE,4],[F.T.TANGENT,4],[F.T.AUXPOS1,5],[F.T.SYMBOLCOLOR,5],[F.T.AUXPOS2,6],[F.T.FEATUREATTRIBUTE,6],[F.T.INSTANCEFEATUREATTRIBUTE,6],[F.T.INSTANCECOLOR,7],[F.T.MODEL,8],[F.T.MODELNORMAL,12],[F.T.MODELORIGINHI,11],[F.T.MODELORIGINLO,15]]);var ut=x(40852);new ut.G(F.T.POSITION,3,z.g.FLOAT,0,12),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,20),new ut.G(F.T.UV0,2,z.g.FLOAT,12,20),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,32),new ut.G(F.T.NORMAL,3,z.g.FLOAT,12,32),new ut.G(F.T.UV0,2,z.g.FLOAT,24,32),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,16),new ut.G(F.T.COLOR,4,z.g.UNSIGNED_BYTE,12,16);const Dt=[new ut.G(F.T.POSITION,2,z.g.FLOAT,0,8)],Rt=[new ut.G(F.T.POSITION,2,z.g.FLOAT,0,16),new ut.G(F.T.UV0,2,z.g.FLOAT,8,16)];var Ct,Kt=x(83994),kt=x(49353),Lt=x(85775),qt=x(38210);class ke extends pe{constructor(d,u){super(),this.data=d,this.type=mt.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new nr.Z,this.params=u||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:z.e8.REPEAT,t:z.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Z.CE.STRETCH,this.estimatedTexMemRequired=ke._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const d=this.data;(0,O.Wi)(d)||(d instanceof HTMLVideoElement?this._startPreloadVideoElement(d):d instanceof HTMLImageElement&&this._startPreloadImageElement(d))}_startPreloadVideoElement(d){(0,Vt.jc)(d.src)||"auto"===d.preload&&d.crossOrigin||(d.preload="auto",d.crossOrigin="anonymous",d.src=d.src)}_startPreloadImageElement(d){(0,Vt.HK)(d.src)||(0,Vt.jc)(d.src)||d.crossOrigin||(d.crossOrigin="anonymous",d.src=d.src)}static _getDataDimensions(d){return d instanceof HTMLVideoElement?{width:d.videoWidth,height:d.videoHeight}:d}static _estimateTexMemRequired(d,u){if((0,O.Wi)(d))return 0;if((0,vt.eP)(d)||(0,vt.lq)(d))return u.encoding===ke.KTX2_ENCODING?function ft(_,d){if((0,O.Wi)(ge))return _.byteLength;const u=new ge.KTX2File(new Uint8Array(_)),v=Y(u)?yt(u.getLevels(),u.getHasAlpha(),u.getWidth(),u.getHeight(),d):0;return u.close(),u.delete(),v}(d,u.mipmap):u.encoding===ke.BASIS_ENCODING?function lt(_,d){if((0,O.Wi)(ge))return _.byteLength;const u=new ge.BasisFile(new Uint8Array(_)),v=X(u)?yt(u.getNumLevels(0),u.getHasAlpha(),u.getImageWidth(0,0),u.getImageHeight(0,0),d):0;return u.close(),u.delete(),v}(d,u.mipmap):d.byteLength;const{width:v,height:b}=d instanceof Image||d instanceof ImageData||d instanceof HTMLCanvasElement||d instanceof HTMLVideoElement?ke._getDataDimensions(d):u;return(u.mipmap?4/3:1)*v*b*(u.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(d){var u;return{target:z.No.TEXTURE_2D,pixelFormat:z.VI.RGBA,dataType:z.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(u=this.params.maxAnisotropy)?u:this.params.mipmap?d.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(d,u){if((0,O.pC)(this._glTexture))return this._glTexture;if((0,O.pC)(this._loadingPromise))return this._loadingPromise;const v=this.data;return(0,O.Wi)(v)?(this._glTexture=new oe.x(d,this._createDescriptor(d),null),this._glTexture):"string"==typeof v?this._loadFromURL(d,u,v):v instanceof Image?this._loadFromImageElement(d,u,v):v instanceof HTMLVideoElement?this._loadFromVideoElement(d,u,v):v instanceof ImageData||v instanceof HTMLCanvasElement?this._loadFromImage(d,v,u):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===ke.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(d,v)):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===ke.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(d,v)):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===ke.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(d,v)):(0,vt.lq)(v)?this._loadFromPixelData(d,v):(0,vt.eP)(v)?this._loadFromPixelData(d,new Uint8Array(v)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(d,u,v){if(!(this.data instanceof HTMLVideoElement)||(0,O.Wi)(this._glTexture)||this.data.readyState<Ct.HAVE_CURRENT_DATA||v===this.data.currentTime)return v;if((0,O.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:b,vao:C,sourceTexture:A}=this._powerOfTwoStretchInfo;A.setData(this.data),this._drawStretchedTexture(d,u,b,C,A,this._glTexture)}else{const{width:b,height:C}=this.data,{width:A,height:R}=this._glTexture.descriptor;b!==A||C!==R?this._glTexture.updateData(0,0,0,Math.min(b,A),Math.min(C,R),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(d,u){return this._glTexture=function Wt(_,d,u){const{textureData:v,internalFormat:b,width:C,height:A}=function Gt(_,d){const u=new Int32Array(_,0,31);if(542327876!==u[0])return Me.error("Invalid magic number in DDS header"),null;if(!(4&u[20]))return Me.error("Unsupported format, must contain a FourCC code"),null;const v=u[21];let b,C;switch(v){case Et:b=8,C=z.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ct:b=16,C=z.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case xt:b=16,C=z.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Me.error("Unsupported FourCC code:",function tt(_){return String.fromCharCode(255&_,_>>8&255,_>>16&255,_>>24&255)}(v)),null}let A=1,R=u[4],L=u[3];0==(3&R)&&0==(3&L)||(Me.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,L=L+3&-4);const D=R,Q=L;let de,ae;131072&u[2]&&!1!==d&&(A=Math.max(1,u[7])),1===A||(0,_t.wt)(R)&&(0,_t.wt)(L)||(Me.warn("Ignoring mipmaps of non power of two sized compressed texture."),A=1);let be=u[1]+4;const re=[];for(let De=0;De<A;++De)ae=(R+3>>2)*(L+3>>2)*b,de=new Uint8Array(_,be,ae),re.push(de),be+=ae,R=Math.max(1,R>>1),L=Math.max(1,L>>1);return{textureData:{type:"compressed",levels:re},internalFormat:C,width:D,height:Q}}(u,d.hasMipmap);return d.samplingMode=v.levels.length>1?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,d.hasMipmap=v.levels.length>1,d.internalFormat=b,d.width=C,d.height=A,new oe.x(_,d,v)}(d,this._createDescriptor(d),u),this._glTexture}_loadFromKTX2(d,u){return this._loadAsync(()=>function le(_,d,u){return Ce.apply(this,arguments)}(d,this._createDescriptor(d),u).then(v=>(this._glTexture=v,v)))}_loadFromBasis(d,u){return this._loadAsync(()=>function te(_,d,u){return ee.apply(this,arguments)}(d,this._createDescriptor(d),u).then(v=>(this._glTexture=v,v)))}_loadFromPixelData(d,u){(0,we.hu)(this.params.width>0&&this.params.height>0);const v=this._createDescriptor(d);return v.pixelFormat=1===this.params.components?z.VI.LUMINANCE:3===this.params.components?z.VI.RGB:z.VI.RGBA,v.width=this.params.width,v.height=this.params.height,this._glTexture=new oe.x(d,v,u),this._glTexture}_loadFromURL(d,u,v){var b=this;return this._loadAsync(function(){var C=(0,y.Z)(function*(A){const R=yield(0,xe.t)(v,{signal:A});return(0,ue.k_)(A),b._loadFromImage(d,R,u)});return function(A){return C.apply(this,arguments)}}())}_loadFromImageElement(d,u,v){var b=this;return v.complete?this._loadFromImage(d,v,u):this._loadAsync(function(){var C=(0,y.Z)(function*(A){const R=yield(0,sr.f)(v,v.src,!1,A);return(0,ue.k_)(A),b._loadFromImage(d,R,u)});return function(A){return C.apply(this,arguments)}}())}_loadFromVideoElement(d,u,v){return v.readyState>=Ct.HAVE_CURRENT_DATA?this._loadFromImage(d,v,u):this._loadFromVideoElementAsync(d,u,v)}_loadFromVideoElementAsync(d,u,v){return this._loadAsync(b=>new Promise((C,A)=>{const R=()=>{v.removeEventListener("loadeddata",L),v.removeEventListener("error",D),(0,O.hw)(Q)},L=()=>{v.readyState>=Ct.HAVE_CURRENT_DATA&&(R(),C(this._loadFromImage(d,v,u)))},D=de=>{R(),A(de||new ie.Z("Failed to load video"))};v.addEventListener("loadeddata",L),v.addEventListener("error",D);const Q=(0,ue.fu)(b,()=>D((0,ue.zE)()))}))}_loadFromImage(d,u,v){const b=ke._getDataDimensions(u);this.params.width=b.width,this.params.height=b.height;const C=this._createDescriptor(d);return C.pixelFormat=3===this.params.components?z.VI.RGB:z.VI.RGBA,!this._requiresPowerOfTwo(d,C)||(0,_t.wt)(b.width)&&(0,_t.wt)(b.height)?(C.width=b.width,C.height=b.height,this._glTexture=new oe.x(d,C,u),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(d,u,b,C,v),this._glTexture)}_loadAsync(d){const u=new AbortController;this._loadingController=u;const v=d(u.signal);this._loadingPromise=v;const b=()=>{this._loadingController===u&&(this._loadingController=null),this._loadingPromise===v&&(this._loadingPromise=null)};return v.then(b,b),v}_requiresPowerOfTwo(d,u){const v=z.e8.CLAMP_TO_EDGE,b="number"==typeof u.wrapMode?u.wrapMode===v:u.wrapMode.s===v&&u.wrapMode.t===v;return!(0,qt.Z)(d.gl)&&(u.hasMipmap||!b)}_makePowerOfTwoTexture(d,u,v,b,C){const{width:A,height:R}=v,L=(0,_t.Sf)(A),D=(0,_t.Sf)(R);let Q;switch(b.width=L,b.height=D,this.params.powerOfTwoResizeMode){case Z.CE.PAD:b.textureCoordinateScaleFactor=[A/L,R/D],Q=new oe.x(d,b),Q.updateData(0,0,0,A,R,u);break;case Z.CE.STRETCH:case null:case void 0:Q=this._stretchToPowerOfTwo(d,u,b,C());break;default:(0,zt.Bg)(this.params.powerOfTwoResizeMode)}return b.hasMipmap&&Q.generateMipmap(),Q}_stretchToPowerOfTwo(d,u,v,b){const C=new oe.x(d,v),A=new Lt.X(d,{colorTarget:z.Lm.TEXTURE,depthStencilTarget:z.OU.NONE},C),R=new oe.x(d,{target:z.No.TEXTURE_2D,pixelFormat:v.pixelFormat,dataType:z.Br.UNSIGNED_BYTE,wrapMode:z.e8.CLAMP_TO_EDGE,samplingMode:z.cw.LINEAR,flipped:!!v.flipped,maxAnisotropy:8,preMultiplyAlpha:v.preMultiplyAlpha},u),L=function Qt(_,d=Dt,u=At,v=-1,b=1){let C=null;return C=d===Rt?new Float32Array([v,v,0,0,b,v,1,0,v,b,0,1,b,b,1,1]):new Float32Array([v,v,b,v,v,b,b,b]),new kt.U(_,u,{geometry:d},{geometry:Kt.f.createVertex(_,z.l1.STATIC_DRAW,C)})}(d),D=d.getBoundFramebufferObject();return this._drawStretchedTexture(d,b,A,L,R,C),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:L,sourceTexture:R,framebuffer:A}:(L.dispose(!0),R.dispose(),A.detachColorTexture(),A.dispose()),d.bindFramebuffer(D),C}_drawStretchedTexture(d,u,v,b,C,A){d.bindFramebuffer(v);const R=d.getViewport();d.setViewport(0,0,A.descriptor.width,A.descriptor.height);const L=d.useTechnique(u);L.setUniform4f("uColor",1,1,1,1),L.bindTexture(C,"tex"),d.bindVAO(b),d.drawArrays(z.MX.TRIANGLE_STRIP,0,(0,he._V)(b,"geometry")),d.bindFramebuffer(null),d.setViewport(R.x,R.y,R.width,R.height)}unload(){if((0,O.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:d,vao:u,sourceTexture:v}=this._powerOfTwoStretchInfo;u.dispose(!0),v.dispose(),d.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,O.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,O.pC)(this._loadingController)){const d=this._loadingController;this._loadingController=null,this._loadingPromise=null,d.abort()}this.events.emit("unloaded")}}ke.DDS_ENCODING="image/vnd-ms.dds",ke.KTX2_ENCODING="image/ktx2",ke.BASIS_ENCODING="image/x.basis",function(_){_[_.HAVE_NOTHING=0]="HAVE_NOTHING",_[_.HAVE_METADATA=1]="HAVE_METADATA",_[_.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",_[_.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",_[_.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Ct||(Ct={}));var Mr,Nt=x(59617),cr=x(19625),Ke=x(6945),er=x(96395),ci=x(93609),tr=x(50229);class hi extends pe{constructor(d,u){super(),this.type=mt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=At,this._parameters=(0,tr.Uf)(d,u),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(d){return!1}setParameters(d){(0,tr.LO)(this._parameters,d)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(d){}get visible(){return this._visible}set visible(d){d!==this._visible&&(this._visible=d,this.parametersChanged())}shouldRender(d){return this.isVisible()&&this.isVisibleInPass(d.pass)&&0!=(this.renderOccluded&d.renderOccludedMask)}isVisibleInPass(d){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(d){d!==this._renderPriority&&(this._renderPriority=d,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(d){d!==this._insertOrder&&(this._insertOrder=d,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,O.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(_){_[_.Occlude=1]="Occlude",_[_.Transparent=2]="Transparent",_[_.OccludeAndTransparent=4]="OccludeAndTransparent",_[_.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",_[_.Opaque=16]="Opaque"}(Mr||(Mr={}));const mi={renderOccluded:Mr.Occlude};var ir,dr=x(88569),Er=x(91263),mr=x(5894),fi=x(48977),vi=x(78451),pi=x(14658),fr=x(4794),gi=(x(8314),x(993));!function(_){_[_.X=0]="X",_[_.Y=1]="Y",_[_.Z=2]="Z"}(ir||(ir={})),x(85931);var _i=x(97535),Zt=x(26242);new _i.x(function Mi(){return{origin:null,direction:null}}),(0,U.c)(),(0,U.c)();const Oi=se.Z.getLogger("esri.geometry.support.sphere");function Ar(){return(0,fr.c)()}function Nr(_,d=Ar()){return(0,gi.c)(d,_)}function Pr(_){return Array.isArray(_)?_[3]:_}function Jt(_){return Array.isArray(_)?_:Fi}function pr(_,d,u){if((0,O.Wi)(d))return!1;const{origin:v,direction:b}=d,C=Li;C[0]=v[0]-_[0],C[1]=v[1]-_[1],C[2]=v[2]-_[2];const A=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],R=2*(b[0]*C[0]+b[1]*C[1]+b[2]*C[2]),L=R*R-4*A*(C[0]*C[0]+C[1]*C[1]+C[2]*C[2]-_[3]*_[3]);if(L<0)return!1;const D=Math.sqrt(L);let Q=(-R-D)/(2*A);const de=(-R+D)/(2*A);return(Q<0||de<Q&&de>0)&&(Q=de),!(Q<0||(u&&(u[0]=v[0]+b[0]*Q,u[1]=v[1]+b[1]*Q,u[2]=v[2]+b[2]*Q),0))}const Li=(0,U.c)();function Fr(_,d,u){const v=Zt.WM.get(),b=Zt.MP.get();(0,M.c)(v,d.origin,d.direction);const C=Pr(_);(0,M.c)(u,v,d.origin),(0,M.a)(u,u,1/(0,M.l)(u)*C);const A=Vr(_,d.origin),R=function Ci(_,d){const u=(0,M.d)(_,d)/((0,M.l)(_)*(0,M.l)(d));return-(0,_t.ZF)(u)}(d.origin,u);return(0,B.d)(b,R+A,v),(0,M.m)(u,u,b),u}function zr(_,d,u){const v=(0,M.f)(Zt.WM.get(),d,Jt(_)),b=(0,M.a)(Zt.WM.get(),v,_[3]/(0,M.l)(v));return(0,M.b)(u,b,Jt(_))}function Vr(_,d){const u=(0,M.f)(Zt.WM.get(),d,Jt(_)),v=(0,M.l)(u),b=Pr(_),C=b+Math.abs(b-v);return(0,_t.ZF)(b/C)}const yr=(0,U.c)();function Wr(_,d,u,v){const b=(0,M.f)(yr,d,Jt(_));switch(u){case ir.X:{const C=(0,_t.jE)(b,yr)[2];return(0,M.s)(v,-Math.sin(C),Math.cos(C),0)}case ir.Y:{const C=(0,_t.jE)(b,yr),A=C[1],R=C[2],L=Math.sin(A);return(0,M.s)(v,-L*Math.cos(R),-L*Math.sin(R),Math.cos(A))}case ir.Z:return(0,M.n)(v,b);default:return}}function Gr(_,d){const u=(0,M.f)(Sr,d,Jt(_));return(0,M.l)(u)-_[3]}const Fi=(0,U.c)(),Sr=(0,U.c)();Object.freeze({__proto__:null,create:Ar,copy:Nr,fromCenterAndRadius:function Ai(_,d){return(0,fr.f)(_[0],_[1],_[2],d)},wrap:function Pi(_){return _},clear:function yi(_){_[0]=_[1]=_[2]=_[3]=0},fromRadius:function Si(_){return _},getRadius:Pr,getCenter:Jt,fromValues:function Di(_,d,u,v){return(0,fr.f)(_,d,u,v)},elevate:function Ri(_,d,u){return _!==u&&(0,M.g)(u,_),u[3]=_[3]+d,u},setExtent:function wi(_,d,u){return Oi.error("sphere.setExtent is not yet supported"),_===u?u:Nr(_,u)},intersectRay:pr,intersectsRay:function Ii(_,d){return pr(_,d,null)},intersectRayClosestSilhouette:function Bi(_,d,u){if(pr(_,d,u))return u;const v=Fr(_,d,Zt.WM.get());return(0,M.b)(u,d.origin,(0,M.a)(Zt.WM.get(),d.direction,(0,M.i)(d.origin,v)/(0,M.l)(d.direction))),u},closestPointOnSilhouette:Fr,closestPoint:function Ui(_,d,u){return pr(_,d,u)?u:(function bi(_,d,u){const v=(0,M.d)(_.direction,(0,M.f)(u,d,_.origin));(0,M.b)(u,_.origin,(0,M.a)(u,_.direction,v))}(d,Jt(_),u),zr(_,u,u))},projectPoint:zr,distanceToSilhouette:function Hi(_,d){const u=(0,M.f)(Zt.WM.get(),d,Jt(_)),v=(0,M.p)(u);return Math.sqrt(Math.abs(v-_[3]*_[3]))},angleToSilhouette:Vr,axisAt:Wr,altitudeAt:Gr,setAltitudeAt:function Ni(_,d,u,v){const b=Gr(_,d),C=Wr(_,d,ir.Z,Sr),A=(0,M.a)(Sr,C,u-b);return(0,M.b)(v,d,A)}});const jr=new class Wi{constructor(d=0){this.offset=d,this.sphere=Ar(),this.tmpVertex=(0,U.c)()}applyToVertex(d,u,v){const b=this.objectTransform.transform;let C=b[0]*d+b[4]*u+b[8]*v+b[12],A=b[1]*d+b[5]*u+b[9]*v+b[13],R=b[2]*d+b[6]*u+b[10]*v+b[14];const L=this.offset/Math.sqrt(C*C+A*A+R*R);C+=C*L,A+=A*L,R+=R*L;const D=this.objectTransform.inverse;return this.tmpVertex[0]=D[0]*C+D[4]*A+D[8]*R+D[12],this.tmpVertex[1]=D[1]*C+D[5]*A+D[9]*R+D[13],this.tmpVertex[2]=D[2]*C+D[6]*A+D[10]*R+D[14],this.tmpVertex}applyToMinMax(d,u){const v=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*v,d[1]+=d[1]*v,d[2]+=d[2]*v;const b=this.offset/Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]);u[0]+=u[0]*b,u[1]+=u[1]*b,u[2]+=u[2]*b}applyToAabb(d){const u=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*u,d[1]+=d[1]*u,d[2]+=d[2]*u;const v=this.offset/Math.sqrt(d[3]*d[3]+d[4]*d[4]+d[5]*d[5]);return d[3]+=d[3]*v,d[4]+=d[4]*v,d[5]+=d[5]*v,d}applyToBoundingSphere(d){const u=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),v=this.offset/u;return this.sphere[0]=d[0]+d[0]*v,this.sphere[1]=d[1]+d[1]*v,this.sphere[2]=d[2]+d[2]*v,this.sphere[3]=d[3]+d[3]*this.offset/u,this.sphere}};new class Vi{constructor(d=0){this.offset=d,this.componentLocalOriginLength=0,this.tmpVertex=(0,U.c)(),this.mbs=(0,fr.c)(),this.obb={center:(0,U.c)(),halfSize:(0,pi.c)(),quaternion:null}}set localOrigin(d){this.componentLocalOriginLength=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])}applyToVertex(d,u,v){const b=d,C=u,A=v+this.componentLocalOriginLength,R=this.offset/Math.sqrt(b*b+C*C+A*A);return this.tmpVertex[0]=d+b*R,this.tmpVertex[1]=u+C*R,this.tmpVertex[2]=v+A*R,this.tmpVertex}applyToAabb(d){const u=d[0],v=d[1],b=d[2]+this.componentLocalOriginLength,C=d[3],A=d[4],R=d[5]+this.componentLocalOriginLength,L=this.offset/Math.sqrt(u*u+v*v+b*b);d[0]+=u*L,d[1]+=v*L,d[2]+=b*L;const D=this.offset/Math.sqrt(C*C+A*A+R*R);return d[3]+=C*D,d[4]+=A*D,d[5]+=R*D,d}applyToMbs(d){const u=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),v=this.offset/u;return this.mbs[0]=d[0]+d[0]*v,this.mbs[1]=d[1]+d[1]*v,this.mbs[2]=d[2]+d[2]*v,this.mbs[3]=d[3]+d[3]*this.offset/u,this.mbs}applyToObb(d){const u=d.center,v=this.offset/Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]);this.obb.center[0]=u[0]+u[0]*v,this.obb.center[1]=u[1]+u[1]*v,this.obb.center[2]=u[2]+u[2]*v,(0,M.q)(this.obb.halfSize,d.halfSize,d.quaternion),(0,M.b)(this.obb.halfSize,this.obb.halfSize,d.center);const b=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*b,this.obb.halfSize[1]+=this.obb.halfSize[1]*b,this.obb.halfSize[2]+=this.obb.halfSize[2]*b,(0,M.f)(this.obb.halfSize,this.obb.halfSize,d.center),(0,fi.c)(Xr,d.quaternion),(0,M.q)(this.obb.halfSize,this.obb.halfSize,Xr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=d.quaternion,this.obb}},new class zi{constructor(d=0){this.offset=d,this.tmpVertex=(0,U.c)()}applyToVertex(d,u,v){const b=d+this.localOrigin[0],C=u+this.localOrigin[1],A=v+this.localOrigin[2],R=this.offset/Math.sqrt(b*b+C*C+A*A);return this.tmpVertex[0]=d+b*R,this.tmpVertex[1]=u+C*R,this.tmpVertex[2]=v+A*R,this.tmpVertex}applyToAabb(d){const u=d[0]+this.localOrigin[0],v=d[1]+this.localOrigin[1],b=d[2]+this.localOrigin[2],C=d[3]+this.localOrigin[0],A=d[4]+this.localOrigin[1],R=d[5]+this.localOrigin[2],L=this.offset/Math.sqrt(u*u+v*v+b*b);d[0]+=u*L,d[1]+=v*L,d[2]+=b*L;const D=this.offset/Math.sqrt(C*C+A*A+R*R);return d[3]+=C*D,d[4]+=A*D,d[5]+=R*D,d}};const Xr=(0,vi.a)();function ji(_,d,u,v){const b=u.typedBuffer,C=u.typedBufferStride,A=_.length;v*=C;for(let R=0;R<A;++R){const L=2*_[R];b[v]=d[L],b[v+1]=d[L+1],v+=C}}function Yr(_,d,u,v,b){const C=u.typedBuffer,A=u.typedBufferStride,R=_.length;if(v*=A,null==b||1===b)for(let L=0;L<R;++L){const D=3*_[L];C[v]=d[D],C[v+1]=d[D+1],C[v+2]=d[D+2],v+=A}else for(let L=0;L<R;++L){const D=3*_[L];for(let Q=0;Q<b;++Q)C[v]=d[D],C[v+1]=d[D+1],C[v+2]=d[D+2],v+=A}}function $i(_,d,u,v,b,C=1){if(!u)return void Yr(_,d,v,b,C);const A=v.typedBuffer,R=v.typedBufferStride,L=_.length,D=u[0],Q=u[1],de=u[2],ae=u[4],be=u[5],re=u[6],De=u[8],Re=u[9],Fe=u[10],dt=u[12],Qe=u[13],qe=u[14];if(b*=R,1===C)for(let it=0;it<L;++it){const Ve=3*_[it],Ne=d[Ve],Ge=d[Ve+1],me=d[Ve+2];A[b]=D*Ne+ae*Ge+De*me+dt,A[b+1]=Q*Ne+be*Ge+Re*me+Qe,A[b+2]=de*Ne+re*Ge+Fe*me+qe,b+=R}else for(let it=0;it<L;++it){const Ve=3*_[it],Ne=d[Ve],Ge=d[Ve+1],me=d[Ve+2],Ie=D*Ne+ae*Ge+De*me+dt,Ye=Q*Ne+be*Ge+Re*me+Qe,Ze=de*Ne+re*Ge+Fe*me+qe;for(let je=0;je<C;++je)A[b]=Ie,A[b+1]=Ye,A[b+2]=Ze,b+=R}}function Xi(_,d,u,v,b,C=1){if(!u)return void Yr(_,d,v,b,C);const R=v.typedBuffer,L=v.typedBufferStride,D=_.length,Q=u[0],de=u[1],ae=u[2],be=u[4],re=u[5],De=u[6],Re=u[8],Fe=u[9],dt=u[10],Qe=!(0,B.p)(u);if(b*=L,1===C)for(let Ve=0;Ve<D;++Ve){const Ne=3*_[Ve],Ge=d[Ne],me=d[Ne+1],Ie=d[Ne+2];let Ye=Q*Ge+be*me+Re*Ie,Ze=de*Ge+re*me+Fe*Ie,je=ae*Ge+De*me+dt*Ie;if(Qe){const at=Ye*Ye+Ze*Ze+je*je;if(at<.999999&&at>1e-6){const et=1/Math.sqrt(at);Ye*=et,Ze*=et,je*=et}}R[b+0]=Ye,R[b+1]=Ze,R[b+2]=je,b+=L}else for(let Ve=0;Ve<D;++Ve){const Ne=3*_[Ve],Ge=d[Ne],me=d[Ne+1],Ie=d[Ne+2];let Ye=Q*Ge+be*me+Re*Ie,Ze=de*Ge+re*me+Fe*Ie,je=ae*Ge+De*me+dt*Ie;if(Qe){const at=Ye*Ye+Ze*Ze+je*je;if(at<.999999&&at>1e-6){const et=1/Math.sqrt(at);Ye*=et,Ze*=et,je*=et}}for(let at=0;at<C;++at)R[b+0]=Ye,R[b+1]=Ze,R[b+2]=je,b+=L}}function Yi(_,d,u,v,b,C=1){if(!u)return void function Ki(_,d,u,v,b=1){const C=u.typedBuffer,A=u.typedBufferStride,R=_.length;if(v*=A,1===b)for(let L=0;L<R;++L){const D=4*_[L];C[v]=d[D],C[v+1]=d[D+1],C[v+2]=d[D+2],C[v+3]=d[D+3],v+=A}else for(let L=0;L<R;++L){const D=4*_[L];for(let Q=0;Q<b;++Q)C[v]=d[D],C[v+1]=d[D+1],C[v+2]=d[D+2],C[v+3]=d[D+3],v+=A}}(_,d,v,b,C);const R=v.typedBuffer,L=v.typedBufferStride,D=_.length,Q=u[0],de=u[1],ae=u[2],be=u[4],re=u[5],De=u[6],Re=u[8],Fe=u[9],dt=u[10],Qe=!(0,B.p)(u);if(b*=L,1===C)for(let Ve=0;Ve<D;++Ve){const Ne=4*_[Ve],Ge=d[Ne],me=d[Ne+1],Ie=d[Ne+2],Ye=d[Ne+3];let Ze=Q*Ge+be*me+Re*Ie,je=de*Ge+re*me+Fe*Ie,at=ae*Ge+De*me+dt*Ie;if(Qe){const et=Ze*Ze+je*je+at*at;if(et<.999999&&et>1e-6){const ot=1/Math.sqrt(et);Ze*=ot,je*=ot,at*=ot}}R[b+0]=Ze,R[b+1]=je,R[b+2]=at,R[b+3]=Ye,b+=L}else for(let Ve=0;Ve<D;++Ve){const Ne=4*_[Ve],Ge=d[Ne],me=d[Ne+1],Ie=d[Ne+2],Ye=d[Ne+3];let Ze=Q*Ge+be*me+Re*Ie,je=de*Ge+re*me+Fe*Ie,at=ae*Ge+De*me+dt*Ie;if(Qe){const et=Ze*Ze+je*je+at*at;if(et<.999999&&et>1e-6){const ot=1/Math.sqrt(et);Ze*=ot,je*=ot,at*=ot}}for(let et=0;et<C;++et)R[b+0]=Ze,R[b+1]=je,R[b+2]=at,R[b+3]=Ye,b+=L}}function Zr(_,d,u,v,b,C=1){const A=v.typedBuffer,R=v.typedBufferStride,L=_.length;if(b*=R,1===C){if(4===u)for(let D=0;D<L;++D){const Q=4*_[D];A[b]=d[Q],A[b+1]=d[Q+1],A[b+2]=d[Q+2],A[b+3]=d[Q+3],b+=R}else if(3===u)for(let D=0;D<L;++D){const Q=3*_[D];A[b]=d[Q],A[b+1]=d[Q+1],A[b+2]=d[Q+2],A[b+3]=255,b+=R}}else if(4===u)for(let D=0;D<L;++D){const Q=4*_[D];for(let de=0;de<C;++de)A[b]=d[Q],A[b+1]=d[Q+1],A[b+2]=d[Q+2],A[b+3]=d[Q+3],b+=R}else if(3===u)for(let D=0;D<L;++D){const Q=3*_[D];for(let de=0;de<C;++de)A[b]=d[Q],A[b+1]=d[Q+1],A[b+2]=d[Q+2],A[b+3]=255,b+=R}}var ye=x(17626),Ji=x(78925),ki=x(60355),Dr=x(26859),_r=x(36603),Qi=x(52071),qi=x(62952),ea=x(10109),ar=x(92724),ta=x(8507),ra=x(92836),Jr=x(7228);const Qr=(0,x(55494).c)();class qr{constructor(d,u){this._module=d,this._loadModule=u}get(){return this._module}reload(){var d=this;return(0,y.Z)(function*(){return d._module=yield d._loadModule(),d._module})()}}function Se(_={}){return(d,u)=>{var v,b;d._parameterNames=null!=(v=d._parameterNames)?v:[],d._parameterNames.push(u);const C=d._parameterNames.length-1,R=Math.ceil(Math.log2(_.count||2)),L=null!=(b=d._parameterBits)?b:[0];let D=0;for(;L[D]+R>16;)D++,D>=L.length&&L.push(0);d._parameterBits=L;const Q=L[D],de=(1<<R)-1<<Q;L[D]+=R,Object.defineProperty(d,u,{get(){return this[C]},set(ae){if(this[C]!==ae&&(this[C]=ae,this._keyDirty=!0,this._parameterBits[D]=this._parameterBits[D]&~de|+ae<<Q&de,"number"!=typeof ae&&"boolean"!=typeof ae))throw"Configuration value for "+u+" must be boolean or number, got "+typeof ae}})}}var la=x(81653);class ei{constructor(d,u,v){this._context=d,this._locations=v,this._textures=new Map,this._freeTextureUnits=new He.Z({deallocator:null}),this._glProgram=d.programCache.acquire(u.generateSource("vertex"),u.generateSource("fragment"),v),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=(0,la.hZ)()?u.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(d,u){this._glProgram.setUniform1i(d,u?1:0)}setUniform1i(d,u){this._glProgram.setUniform1i(d,u)}setUniform1f(d,u){this._glProgram.setUniform1f(d,u)}setUniform1fv(d,u){this._glProgram.setUniform1fv(d,u)}setUniform1iv(d,u){this._glProgram.setUniform1iv(d,u)}setUniform2f(d,u,v){this._glProgram.setUniform2f(d,u,v)}setUniform2fv(d,u){this._glProgram.setUniform2fv(d,u)}setUniform2iv(d,u){this._glProgram.setUniform2iv(d,u)}setUniform3f(d,u,v,b){this._glProgram.setUniform3f(d,u,v,b)}setUniform3fv(d,u){this._glProgram.setUniform3fv(d,u)}setUniform3iv(d,u){this._glProgram.setUniform3iv(d,u)}setUniform4f(d,u,v,b,C){this._glProgram.setUniform4f(d,u,v,b,C)}setUniform4fv(d,u){this._glProgram.setUniform4fv(d,u)}setUniform4iv(d,u){this._glProgram.setUniform4iv(d,u)}setUniformMatrix3fv(d,u){this._glProgram.setUniformMatrix3fv(d,u)}setUniformMatrix4fv(d,u){this._glProgram.setUniformMatrix4fv(d,u)}assertCompatibleVertexAttributeLocations(d){d.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(d,u){if((0,O.Wi)(d)||null==d.glName){const b=this._textures.get(u);return b&&(this._context.bindTexture(null,b.unit),this._freeTextureUnit(b),this._textures.delete(u)),null}let v=this._textures.get(u);return null==v?(v=this._allocTextureUnit(d),this._textures.set(u,v)):v.texture=d,this._context.useProgram(this),this.setUniform1i(u,v.unit),this._context.bindTexture(d,v.unit),v.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((d,u)=>{this._context.bindTexture(d.texture,d.unit),this.setUniform1i(u,d.unit)}),(0,O.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(d=>{if(("sampler2D"===d.type||"samplerCube"===d.type)&&!this._textures.has(d.name))throw new Error(`Texture sampler ${d.name} has no bound texture`)})}_allocTextureUnit(d){return{texture:d,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(d){this._freeTextureUnits.push(d.unit)}}const ca={mask:255},da={function:{func:z.wb.ALWAYS,ref:Z.hU.OutlineVisualElementMask,mask:Z.hU.OutlineVisualElementMask},operation:{fail:z.xS.KEEP,zFail:z.xS.KEEP,zPass:z.xS.ZERO}},ua={function:{func:z.wb.ALWAYS,ref:Z.hU.OutlineVisualElementMask,mask:Z.hU.OutlineVisualElementMask},operation:{fail:z.xS.KEEP,zFail:z.xS.KEEP,zPass:z.xS.REPLACE}};var ha=x(96160),xr=x(2078);const ma=se.Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class ur extends class na{constructor(d,u,v){this.release=v,u&&(this._config=u.snapshot()),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d)}destroy(){this._program=(0,O.O3)(this._program),this._pipeline=this._config=null}reload(d){(0,O.O3)(this._program),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(d,u){}bindMaterial(d,u){}bindDraw(d){}bindPipelineState(d,u=null,v){d.setPipelineState(this.getPipelineState(u,v))}ensureAttributeLocations(d){this.program.assertCompatibleVertexAttributeLocations(d)}get primitiveType(){return z.MX.TRIANGLES}getPipelineState(d,u){return this._pipeline}}{initializeProgram(d){const u=ur.shader.get(),v=this.configuration,b=u.build({oitEnabled:v.transparencyPassType===Z.Am.Color,output:v.output,viewingMode:d.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?v.isSchematic?ar.f7.Schematic:ar.f7.Normal:ar.f7.Disabled,hasMetalnessAndRoughnessTexture:v.hasMetalnessAndRoughnessTexture,hasEmissionTexture:v.hasEmissionTexture,hasOcclusionTexture:v.hasOcclusionTexture,hasNormalTexture:v.hasNormalTexture,hasColorTexture:v.hasColorTexture,hasModelTransformation:v.hasModelTransformation,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:v.normalsTypeDerivate?Dr.h.ScreenDerivative:Dr.h.Attribute,doubleSidedMode:v.doubleSidedMode,vertexTangents:v.vertexTangents,attributeTextureCoordinates:v.hasMetalnessAndRoughnessTexture||v.hasEmissionTexture||v.hasOcclusionTexture||v.hasNormalTexture||v.hasColorTexture?_r.N.Default:_r.N.None,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Jr.I)(d.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new ei(d.rctx,b,At)}bindPass(d,u){var v,b;!function oa(_,d){_.setUniformMatrix4fv("proj",d)}(this.program,u.camera.projectionMatrix);const C=this.configuration.output;this.configuration.hasModelTransformation&&((0,O.pC)(d.modelTransformation)?this.program.setUniformMatrix4fv("model",d.modelTransformation):ma.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===Ke.H.Depth||u.multipassTerrainEnabled||C===Ke.H.Shadow)&&this.program.setUniform2fv("nearFar",u.camera.nearFar),u.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",u.inverseViewport),(0,ea.p)(this.program,u)),C===Ke.H.Alpha&&(this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.program.setUniform4fv("externalColor",d.externalColor),this.program.setUniform1i("colorMixMode",tr.FZ[d.colorMixMode])),C===Ke.H.Color?(u.lighting.setUniforms(this.program,!1,u.hasFillLights),this.program.setUniform3fv("ambient",d.ambient),this.program.setUniform3fv("diffuse",d.diffuse),this.program.setUniform4fv("externalColor",d.externalColor),this.program.setUniform1i("colorMixMode",tr.FZ[d.colorMixMode]),this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.configuration.usePBR&&(0,ar.nW)(this.program,d,this.configuration.isSchematic)):C===Ke.H.Highlight&&(0,qi.wW)(this.program,u),(0,ra.uj)(this.program,d),(0,Qi.Mo)(this.program,d,u),(0,tr.bj)(d.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),d.textureAlphaMode!==Z.JJ.Mask&&d.textureAlphaMode!==Z.JJ.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff),null==(v=u.shadowMap)||v.bind(this.program),null==(b=u.ssaoHelper)||b.bind(this.program,u.camera)}bindDraw(d){const u=this.configuration.instancedDoublePrecision?(0,U.f)(d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]):d.origin;(function kr(_,d,u){(0,B.j)(Qr,u,d),_.setUniform3fv("localOrigin",d),_.setUniformMatrix4fv("view",Qr)})(this.program,u,d.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===Ke.H.Color||this.configuration.output===Ke.H.Alpha||this.configuration.output===Ke.H.Depth&&this.configuration.screenSizePerspective||this.configuration.output===Ke.H.Normal&&this.configuration.screenSizePerspective||this.configuration.output===Ke.H.Highlight&&this.configuration.screenSizePerspective)&&function aa(_,d,u){_.setUniform3f("cameraPosition",u[3]-d[0],u[7]-d[1],u[11]-d[2])}(this.program,u,d.camera.viewInverseTransposeMatrix),this.configuration.output===Ke.H.Normal&&this.program.setUniformMatrix4fv("viewNormal",d.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&(0,ki.d3)(this.program,u),(0,Ji.Vv)(this.program,this.configuration,d.slicePlane,{origin:u}),this.configuration.output===Ke.H.Color&&(0,ta.vL)(this.program,d,u)}_convertDepthTestFunction(d){return d===Z.Gv.Lequal?z.wb.LEQUAL:z.wb.LESS}_setPipeline(d,u){const v=this.configuration,b=d===Z.Am.NONE,C=d===Z.Am.FrontFace;return(0,xr.sm)({blending:v.output!==Ke.H.Color&&v.output!==Ke.H.Alpha||!v.transparent?null:b?dr.wu:(0,dr.j7)(d),culling:fa(v)&&(0,xr.zp)(v.cullFace),depthTest:{func:(0,dr.Bh)(d,this._convertDepthTestFunction(v.customDepthTest))},depthWrite:b||C?v.writeDepth&&xr.LZ:null,colorWrite:xr.BK,stencilWrite:v.sceneHasOcludees?ca:null,stencilTest:v.sceneHasOcludees?u?ua:da:null,polygonOffset:b||C?null:(0,dr.je)(v.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(d,u){return u?this._occludeePipelineState:super.getPipelineState(d,u)}}function fa(_){return _.cullFace?_.cullFace!==Z.Vr.None:!_.slicePlaneEnabled&&!_.transparent&&!_.doubleSidedMode}ur.shader=new qr(ha.D,()=>x.e(3907).then(x.bind(x,83907)));class Oe extends class sa{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const d=this._parameterNames,u={key:this.key};for(const v of d)u[v]=this[v];return u}}{constructor(){super(...arguments),this.output=Ke.H.Color,this.alphaDiscardMode=Z.JJ.Opaque,this.doubleSidedMode=er.q.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=Z.Vr.None,this.transparencyPassType=Z.Am.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=Z.Gv.Less}}(0,ye._)([Se({count:Ke.H.COUNT})],Oe.prototype,"output",void 0),(0,ye._)([Se({count:Z.JJ.COUNT})],Oe.prototype,"alphaDiscardMode",void 0),(0,ye._)([Se({count:er.q.COUNT})],Oe.prototype,"doubleSidedMode",void 0),(0,ye._)([Se()],Oe.prototype,"isSchematic",void 0),(0,ye._)([Se()],Oe.prototype,"vertexColors",void 0),(0,ye._)([Se()],Oe.prototype,"offsetBackfaces",void 0),(0,ye._)([Se()],Oe.prototype,"symbolColors",void 0),(0,ye._)([Se()],Oe.prototype,"vvSize",void 0),(0,ye._)([Se()],Oe.prototype,"vvColor",void 0),(0,ye._)([Se()],Oe.prototype,"verticalOffset",void 0),(0,ye._)([Se()],Oe.prototype,"receiveShadows",void 0),(0,ye._)([Se()],Oe.prototype,"slicePlaneEnabled",void 0),(0,ye._)([Se()],Oe.prototype,"sliceHighlightDisabled",void 0),(0,ye._)([Se()],Oe.prototype,"receiveAmbientOcclusion",void 0),(0,ye._)([Se()],Oe.prototype,"screenSizePerspective",void 0),(0,ye._)([Se()],Oe.prototype,"textureAlphaPremultiplied",void 0),(0,ye._)([Se()],Oe.prototype,"hasColorTexture",void 0),(0,ye._)([Se()],Oe.prototype,"usePBR",void 0),(0,ye._)([Se()],Oe.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,ye._)([Se()],Oe.prototype,"hasEmissionTexture",void 0),(0,ye._)([Se()],Oe.prototype,"hasOcclusionTexture",void 0),(0,ye._)([Se()],Oe.prototype,"hasNormalTexture",void 0),(0,ye._)([Se()],Oe.prototype,"instanced",void 0),(0,ye._)([Se()],Oe.prototype,"instancedColor",void 0),(0,ye._)([Se()],Oe.prototype,"instancedDoublePrecision",void 0),(0,ye._)([Se()],Oe.prototype,"vertexTangents",void 0),(0,ye._)([Se()],Oe.prototype,"normalsTypeDerivate",void 0),(0,ye._)([Se()],Oe.prototype,"writeDepth",void 0),(0,ye._)([Se()],Oe.prototype,"sceneHasOcludees",void 0),(0,ye._)([Se()],Oe.prototype,"transparent",void 0),(0,ye._)([Se()],Oe.prototype,"enableOffset",void 0),(0,ye._)([Se({count:Z.Vr.COUNT})],Oe.prototype,"cullFace",void 0),(0,ye._)([Se({count:Z.Am.COUNT})],Oe.prototype,"transparencyPassType",void 0),(0,ye._)([Se()],Oe.prototype,"multipassTerrainEnabled",void 0),(0,ye._)([Se()],Oe.prototype,"cullAboveGround",void 0),(0,ye._)([Se()],Oe.prototype,"hasModelTransformation",void 0),(0,ye._)([Se({count:Z.Gv.COUNT})],Oe.prototype,"customDepthTest",void 0);var va=x(77133);class Tr extends ur{initializeProgram(d){const u=Tr.shader.get(),v=this.configuration,b=u.build({oitEnabled:v.transparencyPassType===Z.Am.Color,output:v.output,viewingMode:d.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?ar.f7.Normal:ar.f7.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:v.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Dr.h.Attribute,doubleSidedMode:er.q.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:v.hasColorTexture?_r.N.Default:_r.N.None,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Jr.I)(d.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new ei(d.rctx,b,At)}}Tr.shader=new qr(va.R,()=>x.e(6919).then(x.bind(x,96919)));class ti extends hi{constructor(d){super(d,ga),this.supportsEdges=!0,this.techniqueConfig=new Oe,this.vertexBufferLayout=function xa(_){const d=_.textureId||_.normalTextureId||_.metallicRoughnessTextureId||_.emissiveTextureId||_.occlusionTextureId,u=(0,cr.U$)().vec3f(F.T.POSITION).vec3f(F.T.NORMAL);return _.vertexTangents&&u.vec4f(F.T.TANGENT),d&&u.vec2f(F.T.UV0),_.vertexColors&&u.vec4u8(F.T.COLOR),_.symbolColors&&u.vec4u8(F.T.SYMBOLCOLOR),u}(this.parameters),this.instanceBufferLayout=d.instanced?function Ta(_){let d=(0,cr.U$)();return d=_.instancedDoublePrecision?d.vec3f(F.T.MODELORIGINHI).vec3f(F.T.MODELORIGINLO).mat3f(F.T.MODEL).mat3f(F.T.MODELNORMAL):d.mat4f(F.T.MODEL).mat4f(F.T.MODELNORMAL),_.instanced&&_.instanced.indexOf("color")>-1&&(d=d.vec4f(F.T.INSTANCECOLOR)),_.instanced&&_.instanced.indexOf("featureAttribute")>-1&&(d=d.vec4f(F.T.INSTANCEFEATUREATTRIBUTE)),d}(this.parameters):null}isVisibleInPass(d){return d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const d=this.parameters;if(!super.isVisible()||0===d.layerOpacity)return!1;const u=d.instanced,v=d.vertexColors,b=d.symbolColors,C=!!u&&u.indexOf("color")>-1,A=d.vvColorEnabled,R="replace"===d.colorMixMode,L=d.opacity>0,D=d.externalColor&&d.externalColor[3]>0;return v&&(C||A||b)?!!R||L:v?R?D:L:C||A||b?!!R||L:R?D:L}getTechniqueConfig(d,u){return this.techniqueConfig.output=d,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,O.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?Z.Vr.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=u.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=u.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,O.pC)(this.parameters.modelTransformation),d!==Ke.H.Color&&d!==Ke.H.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?er.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?er.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?er.q.WindingOrder:er.q.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!u.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=u.transparencyPassType,this.techniqueConfig.enableOffset=u.camera.relativeElevation<dr.ve),this.techniqueConfig}intersect(d,u,v,b,C,A,R){if(null!==this.parameters.verticalOffset){const L=b.camera;(0,M.s)(wr,v[12],v[13],v[14]);let D=null;switch(b.viewingMode){case Nt.JY.Global:D=(0,M.n)(ri,wr);break;case Nt.JY.Local:D=(0,M.g)(ri,Ea)}let Q=0;if(null!==this.parameters.verticalOffset){const de=(0,M.f)(Ca,wr,L.eye),ae=(0,M.l)(de),be=(0,M.a)(de,de,1/ae);let re=null;this.parameters.screenSizePerspective&&(re=(0,M.d)(D,be)),Q+=(0,tr.Hx)(L,ae,this.parameters.verticalOffset,re,this.parameters.screenSizePerspective)}(0,M.a)(D,D,Q),(0,M.t)(Rr,D,b.transform.inverseRotation),C=(0,M.f)(ba,C,Rr),A=(0,M.f)(Ma,A,Rr)}(0,tr.Bw)(d,u,b,C,A,function Gi(_){return(0,O.pC)(_)?(jr.offset=_,jr):null}(b.verticalOffset),R)}requiresSlot(d){return d===(this.parameters.transparent?this.parameters.writeDepth?mr.r.TRANSPARENT_MATERIAL:mr.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:mr.r.OPAQUE_MATERIAL)||d===mr.r.DRAPED_MATERIAL}createGLMaterial(d){return d.output===Ke.H.Color||d.output===Ke.H.Alpha||d.output===Ke.H.Depth||d.output===Ke.H.Normal||d.output===Ke.H.Shadow||d.output===Ke.H.Highlight?new pa(d):null}createBufferWriter(){return new _a(this.vertexBufferLayout,this.instanceBufferLayout)}}class pa extends class ui extends class di{constructor(d){this._material=d.material,this._techniqueRep=d.techniqueRep,this._output=d.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(d,u,v=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(d,this._material.getTechniqueConfig(v,u),this._technique),this._technique}ensureResources(d){return Z.Rw.LOADED}}{constructor(d){super(d),this._numLoading=0,this._disposed=!1,this._textureRepository=d.textureRep,this._textureId=d.textureId,this._acquire(d.textureId,u=>this._texture=u),this._acquire(d.normalTextureId,u=>this._textureNormal=u),this._acquire(d.emissiveTextureId,u=>this._textureEmissive=u),this._acquire(d.occlusionTextureId,u=>this._textureOcclusion=u),this._acquire(d.metallicRoughnessTextureId,u=>this._textureMetallicRoughness=u)}dispose(){this._texture=(0,O.RY)(this._texture),this._textureNormal=(0,O.RY)(this._textureNormal),this._textureEmissive=(0,O.RY)(this._textureEmissive),this._textureOcclusion=(0,O.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,O.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(d){return 0===this._numLoading?Z.Rw.LOADED:Z.Rw.LOADING}updateTexture(d){((0,O.Wi)(this._texture)||d!==this._texture.id)&&(this._texture=(0,O.RY)(this._texture),this._textureId=d,this._acquire(this._textureId,u=>this._texture=u))}bindTextures(d){(0,O.pC)(this._texture)&&d.bindTexture(this._texture.glTexture,"tex"),(0,O.pC)(this._textureNormal)&&d.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,O.pC)(this._textureEmissive)&&d.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,O.pC)(this._textureOcclusion)&&d.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,O.pC)(this._textureMetallicRoughness)&&d.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(d){const u=(0,O.pC)(this._texture)?this._texture.glTexture:null;(0,O.pC)(u)&&u.descriptor.textureCoordinateScaleFactor?d.setUniform2fv("textureCoordinateScaleFactor",u.descriptor.textureCoordinateScaleFactor):d.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(d,u){if((0,O.Wi)(d))return void u(null);const v=this._textureRepository.acquire(d);if((0,ue.y8)(v))return++this._numLoading,void v.then(b=>{if(this._disposed)return(0,O.RY)(b),void u(null);u(b)}).finally(()=>--this._numLoading);u(v)}}{constructor(d){super(It(It({},d),d.material.parameters))}updateParameters(d){const u=this._material.parameters;return this.updateTexture(u.textureId),this.ensureTechnique(u.treeRendering?Tr:ur,d)}_updateShadowState(d){d.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:d.shadowMappingEnabled})}_updateOccludeeState(d){d.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:d.hasOccludees})}beginSlot(d){return this._output!==Ke.H.Color&&this._output!==Ke.H.Alpha||(this._updateShadowState(d),this._updateOccludeeState(d)),this.updateParameters(d)}bind(d,u){u.bindPass(this._material.parameters,d),this.bindTextures(u.program)}}const ga=It({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:Z.Vr.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,P.c)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:Z.Gv.Less,textureAlphaMode:Z.JJ.Blend,textureAlphaCutoff:ci.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},mi);class _a{constructor(d,u){this.vertexBufferLayout=d,this.instanceBufferLayout=u}allocate(d){return this.vertexBufferLayout.createBuffer(d)}elementCount(d){return d.indices.get(F.T.POSITION).length}write(d,u,v,b){!function Zi(_,d,u,v,b,C){for(const A of d.fieldNames){const R=_.vertexAttributes.get(A),L=_.indices.get(A);if(R&&L)switch(A){case F.T.POSITION:{(0,we.hu)(3===R.size);const D=b.getField(A,N.ct);D&&$i(L,R.data,u,D,C);break}case F.T.NORMAL:{(0,we.hu)(3===R.size);const D=b.getField(A,N.ct);D&&Xi(L,R.data,v,D,C);break}case F.T.UV0:{(0,we.hu)(2===R.size);const D=b.getField(A,N.Eu);D&&ji(L,R.data,D,C);break}case F.T.COLOR:{(0,we.hu)(3===R.size||4===R.size);const D=b.getField(A,N.mc);D&&Zr(L,R.data,R.size,D,C);break}case F.T.SYMBOLCOLOR:{(0,we.hu)(3===R.size||4===R.size);const D=b.getField(A,N.mc);D&&Zr(L,R.data,R.size,D,C);break}case F.T.TANGENT:{(0,we.hu)(4===R.size);const D=b.getField(A,N.ek);D&&Yi(L,R.data,v,D,C);break}}}}(u,this.vertexBufferLayout,d.transformation,d.invTranspTransformation,v,b)}}const ba=(0,U.c)(),Ma=(0,U.c)(),Ea=(0,U.f)(0,0,1),ri=(0,U.c)(),Rr=(0,U.c)(),wr=(0,U.c)(),Ca=(0,U.c)(),$t=se.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Oa(_,d){return Lr.apply(this,arguments)}function Lr(){return Lr=(0,y.Z)(function*(_,d){const u=yield Aa(_,d);return{resource:u,textures:yield Ra(u.textureDefinitions,d)}}),Lr.apply(this,arguments)}function Aa(_,d){return Ir.apply(this,arguments)}function Ir(){return Ir=(0,y.Z)(function*(_,d){const u=(0,O.pC)(d)&&d.streamDataRequester;if(u)return Pa(_,u,d);const v=yield(0,Be.q6)((0,ce.default)(_,(0,O.Wg)(d)));if(!0===v.ok)return v.value.data;(0,ue.r9)(v.error),ii(v.error)}),Ir.apply(this,arguments)}function Pa(_,d,u){return Br.apply(this,arguments)}function Br(){return Br=(0,y.Z)(function*(_,d,u){const v=yield(0,Be.q6)(d.request(_,"json",u));if(!0===v.ok)return v.value;(0,ue.r9)(v.error),ii(v.error.details.url)}),Br.apply(this,arguments)}function ii(_){throw new ie.Z("",`Request for object resource failed: ${_}`)}function ya(_){const d=_.params,u=d.topology;let v=!0;switch(d.vertexAttributes||($t.warn("Geometry must specify vertex attributes"),v=!1),d.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const C=d.faces;if(C){if(d.vertexAttributes)for(const A in d.vertexAttributes){const R=C[A];R&&R.values?(null!=R.valueType&&"UInt32"!==R.valueType&&($t.warn(`Unsupported indexed geometry indices type '${R.valueType}', only UInt32 is currently supported`),v=!1),null!=R.valuesPerElement&&1!==R.valuesPerElement&&($t.warn(`Unsupported indexed geometry values per element '${R.valuesPerElement}', only 1 is currently supported`),v=!1)):($t.warn(`Indexed geometry does not specify face indices for '${A}' attribute`),v=!1)}}else $t.warn("Indexed geometries must specify faces"),v=!1;break}default:$t.warn(`Unsupported topology '${u}'`),v=!1}_.params.material||($t.warn("Geometry requires material"),v=!1);const b=_.params.vertexAttributes;for(const C in b)b[C].values||($t.warn("Geometries with externally defined attributes are not yet supported"),v=!1);return v}function Sa(_,d){const u=[],v=[],b=[],C=[],A=_.resource,R=_e.G.parse(A.version||"1.0","wosr");La.validate(R);const L=A.model.name,D=A.model.geometries,Q=A.materialDefinitions,de=_.textures;let ae=0;const be=new Map;for(let re=0;re<D.length;re++){const De=D[re];if(!ya(De))continue;const Re=wa(De),Fe=De.params.vertexAttributes,dt=[];for(const me in Fe){const Ie=Fe[me];dt.push([me,{data:Ie.values,size:Ie.valuesPerElement,exclusive:!0}])}const Qe=[];if("PerAttributeArray"!==De.params.topology){const me=De.params.faces;for(const Ie in me)Qe.push([Ie,new Uint32Array(me[Ie].values)])}const qe=de&&de[Re.texture];if(qe&&!be.has(Re.texture)){const{image:me,params:Ie}=qe,Ye=new ke(me,Ie);C.push(Ye),be.set(Re.texture,Ye)}const it=be.get(Re.texture),Ve=it?it.id:void 0;let Ne=b[Re.material]?b[Re.material][Re.texture]:null;if(!Ne){const me=Q[Re.material.substring(Re.material.lastIndexOf("/")+1)].params;1===me.transparency&&(me.transparency=0);const Ie=qe&&qe.alphaChannelUsage,Ye=me.transparency>0||"transparency"===Ie||"maskAndTransparency"===Ie,Ze=qe?ai(qe.alphaChannelUsage):void 0,je={ambient:(0,U.d)(me.diffuse),diffuse:(0,U.d)(me.diffuse),opacity:1-(me.transparency||0),transparent:Ye,textureAlphaMode:Ze,textureAlphaCutoff:.33,textureId:Ve,initTextureTransparent:!0,doubleSided:!0,cullFace:Z.Vr.None,colorMixMode:me.externalColorMixMode||"tint",textureAlphaPremultiplied:!!qe&&!!qe.params.preMultiplyAlpha};(0,O.pC)(d)&&d.materialParamsMixin&&Object.assign(je,d.materialParamsMixin),Ne=new ti(je),b[Re.material]||(b[Re.material]={}),b[Re.material][Re.texture]=Ne}v.push(Ne);const Ge=new fe(dt,Qe);ae+=Qe.position?Qe.position.length:0,u.push(Ge)}return{name:L,stageResources:{textures:C,materials:v,geometries:u},pivotOffset:A.model.pivotOffset,boundingBox:Da(u),numberOfVertices:ae,lodThreshold:null}}function Da(_){const d=(0,H.cS)();return _.forEach(u=>{const v=u.boundingInfo;(0,O.pC)(v)&&((0,H.pp)(d,v.getBBMin()),(0,H.pp)(d,v.getBBMax()))}),d}function Ra(_,d){return Ur.apply(this,arguments)}function Ur(){return Ur=(0,y.Z)(function*(_,d){const u=[];for(const C in _){const A=_[C],R=A.images[0].data;if(!R){$t.warn("Externally referenced texture data is not yet supported");continue}const L=A.encoding+";base64,"+R,D="/textureDefinitions/"+C,Q="rgba"===A.channels?A.alphaChannelUsage||"transparency":"none",de={noUnpackFlip:!0,wrap:{s:z.e8.REPEAT,t:z.e8.REPEAT},preMultiplyAlpha:ai(Q)!==Z.JJ.Opaque},ae=(0,O.pC)(d)&&d.disableTextures?Promise.resolve(null):(0,xe.t)(L,d);u.push(ae.then(be=>({refId:D,image:be,params:de,alphaChannelUsage:Q})))}const v=yield Promise.all(u),b={};for(const C of v)b[C.refId]=C;return b}),Ur.apply(this,arguments)}function ai(_){switch(_){case"mask":return Z.JJ.Mask;case"maskAndTransparency":return Z.JJ.MaskBlend;case"none":return Z.JJ.Opaque;default:return Z.JJ.Blend}}function wa(_){const d=_.params;return{id:1,material:d.material,texture:d.texture,region:d.texture}}const La=new _e.G(1,2,"wosr");var or=x(79331),Ia=x(35995),oi=x(63470),Ba=x(9554);function Ua(_,d){return Hr.apply(this,arguments)}function Hr(){return Hr=(0,y.Z)(function*(_,d){const u=ni((0,S.pJ)(_));if("wosr"===u.fileType){const L=yield d.cache?d.cache.loadWOSR(u.url,d):Oa(u.url,d),D=Sa(L,d);return{lods:[D],referenceBoundingBox:D.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:L.remove}}const v=yield d.cache?d.cache.loadGLTF(u.url,d,d.usePBR):(0,V.z)(new $.C(d.streamDataRequester),u.url,d,d.usePBR),b=(0,O.U2)(v.model.meta,"ESRI_proxyEllipsoid");v.meta.isEsriSymbolResource&&(0,O.pC)(b)&&-1!==v.meta.uri.indexOf("/RealisticTrees/")&&Fa(v,b);const C=v.meta.isEsriSymbolResource?{usePBR:d.usePBR,isSchematic:!1,treeRendering:v.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:d.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},A=hr(It({},d.materialParamsMixin),{treeRendering:v.customMeta.esriTreeRendering});if(null!=u.specifiedLodIndex){const L=br(v,C,A,u.specifiedLodIndex);let D=L[0].boundingBox;return 0!==u.specifiedLodIndex&&(D=br(v,C,A,0)[0].boundingBox),{lods:L,referenceBoundingBox:D,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}const R=br(v,C,A);return{lods:R,referenceBoundingBox:R[0].boundingBox,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}),Hr.apply(this,arguments)}function ni(_){const d=_.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return d?{fileType:"gltf",url:d[1],specifiedLodIndex:null!=d[4]?Number(d[4]):null}:_.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:_,specifiedLodIndex:null}:{fileType:"unknown",url:_,specifiedLodIndex:null}}function br(_,d,u,v){const b=_.model,C=(0,P.c)(),A=new Array,R=new Map,L=new Map;return b.lods.forEach((D,Q)=>{if(void 0!==v&&Q!==v)return;const de={name:D.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,O.pC)(D.lodThreshold)?D.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,H.cS)()};A.push(de),D.parts.forEach(ae=>{const be=ae.material+(ae.attributes.normal?"_normal":"")+(ae.attributes.color?"_color":"")+(ae.attributes.texCoord0?"_texCoord0":"")+(ae.attributes.tangent?"_tangent":""),re=b.materials.get(ae.material),De=(0,O.pC)(ae.attributes.texCoord0),Re=(0,O.pC)(ae.attributes.normal),Fe=function Ha(_){switch(_){case"BLEND":return Z.JJ.Blend;case"MASK":return Z.JJ.Mask;case"OPAQUE":case null:case void 0:return Z.JJ.Opaque}}(re.alphaMode);if(!R.has(be)){if(De){if((0,O.pC)(re.textureColor)&&!L.has(re.textureColor)){const ot=b.textures.get(re.textureColor),za=hr(It({},ot.parameters),{preMultiplyAlpha:Fe!==Z.JJ.Opaque});L.set(re.textureColor,new ke(ot.data,za))}if((0,O.pC)(re.textureNormal)&&!L.has(re.textureNormal)){const ot=b.textures.get(re.textureNormal);L.set(re.textureNormal,new ke(ot.data,ot.parameters))}if((0,O.pC)(re.textureOcclusion)&&!L.has(re.textureOcclusion)){const ot=b.textures.get(re.textureOcclusion);L.set(re.textureOcclusion,new ke(ot.data,ot.parameters))}if((0,O.pC)(re.textureEmissive)&&!L.has(re.textureEmissive)){const ot=b.textures.get(re.textureEmissive);L.set(re.textureEmissive,new ke(ot.data,ot.parameters))}if((0,O.pC)(re.textureMetallicRoughness)&&!L.has(re.textureMetallicRoughness)){const ot=b.textures.get(re.textureMetallicRoughness);L.set(re.textureMetallicRoughness,new ke(ot.data,ot.parameters))}}const me=re.color[0]**(1/or.K),Ie=re.color[1]**(1/or.K),Ye=re.color[2]**(1/or.K),Ze=re.emissiveFactor[0]**(1/or.K),je=re.emissiveFactor[1]**(1/or.K),at=re.emissiveFactor[2]**(1/or.K),et=(0,O.pC)(re.textureColor)&&De?L.get(re.textureColor):null;R.set(be,new ti(It(hr(It({},d),{transparent:Fe===Z.JJ.Blend,customDepthTest:Z.Gv.Lequal,textureAlphaMode:Fe,textureAlphaCutoff:re.alphaCutoff,diffuse:[me,Ie,Ye],ambient:[me,Ie,Ye],opacity:re.opacity,doubleSided:re.doubleSided,doubleSidedType:"winding-order",cullFace:re.doubleSided?Z.Vr.None:Z.Vr.Back,vertexColors:!!ae.attributes.color,vertexTangents:!!ae.attributes.tangent,normals:Re?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,O.pC)(et)?et.id:void 0,colorMixMode:re.colorMixMode,normalTextureId:(0,O.pC)(re.textureNormal)&&De?L.get(re.textureNormal).id:void 0,textureAlphaPremultiplied:(0,O.pC)(et)&&!!et.params.preMultiplyAlpha,occlusionTextureId:(0,O.pC)(re.textureOcclusion)&&De?L.get(re.textureOcclusion).id:void 0,emissiveTextureId:(0,O.pC)(re.textureEmissive)&&De?L.get(re.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,O.pC)(re.textureMetallicRoughness)&&De?L.get(re.textureMetallicRoughness).id:void 0,emissiveFactor:[Ze,je,at],mrrFactors:[re.metallicFactor,re.roughnessFactor,d.mrrFactors[2]],isSchematic:!1}),u)))}const dt=function Na(_,d){switch(d){case z.MX.TRIANGLES:return(0,J.nh)(_);case z.MX.TRIANGLE_STRIP:return(0,J.DA)(_);case z.MX.TRIANGLE_FAN:return(0,J.jX)(_)}}(ae.indices||ae.attributes.position.count,ae.primitiveType),Qe=ae.attributes.position.count,qe=(0,W.gS)(N.ct,Qe);(0,j.t)(qe,ae.attributes.position,ae.transform);const it=[[F.T.POSITION,{data:qe.typedBuffer,size:qe.elementCount,exclusive:!0}]],Ve=[[F.T.POSITION,dt]];if((0,O.pC)(ae.attributes.normal)){const me=(0,W.gS)(N.ct,Qe);(0,I.a)(C,ae.transform),(0,j.a)(me,ae.attributes.normal,C),it.push([F.T.NORMAL,{data:me.typedBuffer,size:me.elementCount,exclusive:!0}]),Ve.push([F.T.NORMAL,dt])}if((0,O.pC)(ae.attributes.tangent)){const me=(0,W.gS)(N.ek,Qe);(0,I.a)(C,ae.transform),(0,k.t)(me,ae.attributes.tangent,C),it.push([F.T.TANGENT,{data:me.typedBuffer,size:me.elementCount,exclusive:!0}]),Ve.push([F.T.TANGENT,dt])}if((0,O.pC)(ae.attributes.texCoord0)){const me=(0,W.gS)(N.Eu,Qe);(0,Ia.n)(me,ae.attributes.texCoord0),it.push([F.T.UV0,{data:me.typedBuffer,size:me.elementCount,exclusive:!0}]),Ve.push([F.T.UV0,dt])}if((0,O.pC)(ae.attributes.color)){const me=(0,W.gS)(N.mc,Qe);if(4===ae.attributes.color.elementCount)ae.attributes.color instanceof N.ek?(0,k.s)(me,ae.attributes.color,255):ae.attributes.color instanceof N.mc?(0,oi.c)(me,ae.attributes.color):ae.attributes.color instanceof N.v6&&(0,k.s)(me,ae.attributes.color,1/256);else{(0,oi.f)(me,255,255,255,255);const Ie=new N.ne(me.buffer,0,4);ae.attributes.color instanceof N.ct?(0,j.s)(Ie,ae.attributes.color,255):ae.attributes.color instanceof N.ne?(0,Ba.c)(Ie,ae.attributes.color):ae.attributes.color instanceof N.mw&&(0,j.s)(Ie,ae.attributes.color,1/256)}it.push([F.T.COLOR,{data:me.typedBuffer,size:me.elementCount,exclusive:!0}]),Ve.push([F.T.COLOR,dt])}const Ne=new fe(it,Ve);de.stageResources.geometries.push(Ne),de.stageResources.materials.push(R.get(be)),De&&((0,O.pC)(re.textureColor)&&de.stageResources.textures.push(L.get(re.textureColor)),(0,O.pC)(re.textureNormal)&&de.stageResources.textures.push(L.get(re.textureNormal)),(0,O.pC)(re.textureOcclusion)&&de.stageResources.textures.push(L.get(re.textureOcclusion)),(0,O.pC)(re.textureEmissive)&&de.stageResources.textures.push(L.get(re.textureEmissive)),(0,O.pC)(re.textureMetallicRoughness)&&de.stageResources.textures.push(L.get(re.textureMetallicRoughness))),de.numberOfVertices+=Qe;const Ge=Ne.boundingInfo;(0,O.pC)(Ge)&&((0,H.pp)(de.boundingBox,Ge.getBBMin()),(0,H.pp)(de.boundingBox,Ge.getBBMax()))})}),A}function Fa(_,d){for(let u=0;u<_.model.lods.length;++u){const v=_.model.lods[u];_.customMeta.esriTreeRendering=!0;for(const b of v.parts){const C=b.attributes.normal;if((0,O.Wi)(C))return;const A=b.attributes.position,R=A.count,L=(0,U.c)(),D=(0,U.c)(),Q=(0,U.c)(),de=(0,W.gS)(N.mc,R),ae=(0,W.gS)(N.ct,R),be=(0,B.a)((0,w.c)(),b.transform);for(let re=0;re<R;re++){A.getVec(re,D),C.getVec(re,L),(0,M.m)(D,D,b.transform),(0,M.f)(Q,D,d.center),(0,M.E)(Q,Q,d.radius);const De=Q[2],Re=(0,M.l)(Q),Fe=Math.min(.45+.55*Re*Re,1);(0,M.E)(Q,Q,d.radius),(0,M.m)(Q,Q,be),(0,M.n)(Q,Q),u+1!==_.model.lods.length&&_.model.lods.length>1&&(0,M.e)(Q,Q,L,De>-1?.2:Math.min(-4*De-3.8,1)),ae.setVec(re,Q),de.set(re,0,255*Fe),de.set(re,1,255*Fe),de.set(re,2,255*Fe),de.set(re,3,255)}b.attributes.normal=ae,b.attributes.color=de}}}},9044:(ve,K,x)=>{var S,U;x.d(K,{a9:()=>S}),x(21286),(U=S||(S={}))[U.Multiply=1]="Multiply",U[U.Ignore=2]="Ignore",U[U.Replace=3]="Replace",U[U.Tint=4]="Tint"},52382:(ve,K,x)=>{x.d(K,{q:()=>O});var y=x(6945),S=x(17625);function O(I,P){P.output===y.H.Color&&P.receiveShadows?(I.varyings.add("linearDepth","float"),I.vertex.code.add(S.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):P.output===y.H.Depth||P.output===y.H.Shadow?(I.varyings.add("linearDepth","float"),I.vertex.uniforms.add("nearFar","vec2"),I.vertex.code.add(S.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):I.vertex.code.add(S.H`void forwardLinearDepth() {}`)}},73132:(ve,K,x)=>{x.d(K,{w:()=>S});var y=x(17625);function S(O){O.vertex.code.add(y.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},6945:(ve,K,x)=>{var y,S;x.d(K,{H:()=>y}),(S=y||(y={}))[S.Color=0]="Color",S[S.Depth=1]="Depth",S[S.Normal=2]="Normal",S[S.Shadow=3]="Shadow",S[S.Highlight=4]="Highlight",S[S.Draped=5]="Draped",S[S.Occlusion=6]="Occlusion",S[S.Alpha=7]="Alpha",S[S.COUNT=8]="COUNT"},78925:(ve,K,x)=>{x.d(K,{Vv:()=>U,p2:()=>w});var y=x(62208),S=x(28347),O=x(43703),I=x(84161),P=x(28093),B=x(17625);function w(W,$){if($.slicePlaneEnabled){W.extensions.add("GL_OES_standard_derivatives"),$.sliceEnabledForVertexPrograms&&(W.vertex.uniforms.add("slicePlaneOrigin","vec3"),W.vertex.uniforms.add("slicePlaneBasis1","vec3"),W.vertex.uniforms.add("slicePlaneBasis2","vec3")),W.fragment.uniforms.add("slicePlaneOrigin","vec3"),W.fragment.uniforms.add("slicePlaneBasis1","vec3"),W.fragment.uniforms.add("slicePlaneBasis2","vec3");const V=B.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,J=B.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,ce=$.sliceHighlightDisabled?B.H`#define highlightSlice(_color_, _pos_) (_color_)`:B.H`
        ${J}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;$.sliceEnabledForVertexPrograms&&W.vertex.code.add(V),W.fragment.code.add(V),W.fragment.code.add(ce)}else{const V=B.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;$.sliceEnabledForVertexPrograms&&W.vertex.code.add(V),W.fragment.code.add(V)}}function U(W,$,V,J){if($.slicePlaneEnabled)if((0,y.pC)(V)){if((0,I.g)(H,V.origin),(0,I.g)(N,V.basis1),(0,I.g)(j,V.basis2),(0,y.pC)(J)&&(0,y.pC)(J.origin)&&(0,I.f)(H,V.origin,J.origin),(0,y.pC)(J)&&(0,y.pC)(J.view)){const ce=(0,y.pC)(J.origin)?(0,S.j)(k,J.view,J.origin):J.view;(0,I.b)(N,N,H),(0,I.b)(j,j,H),(0,I.m)(H,H,ce),(0,I.m)(N,N,ce),(0,I.m)(j,j,ce),(0,I.f)(N,N,H),(0,I.f)(j,j,H)}W.setUniform3fv("slicePlaneOrigin",H),W.setUniform3fv("slicePlaneBasis1",N),W.setUniform3fv("slicePlaneBasis2",j)}else W.setUniform3fv("slicePlaneBasis1",P.Z),W.setUniform3fv("slicePlaneBasis2",P.Z),W.setUniform3fv("slicePlaneOrigin",P.Z)}const H=(0,P.c)(),N=(0,P.c)(),j=(0,P.c)(),k=(0,O.c)()},24255:(ve,K,x)=>{x.d(K,{w:()=>S});var y=x(17625);function S(O,I){const P=It({hasModelTransformation:!1},I);if(P.hasModelTransformation)return P.linearDepth?void O.vertex.code.add(y.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void O.vertex.code.add(y.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);O.vertex.code.add(P.linearDepth?y.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:y.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},60355:(ve,K,x)=>{x.d(K,{d3:()=>U,fQ:()=>w});var y=x(28093),S=x(6945),O=x(7228),I=x(17625),P=x(16396),B=x(2757);function w(j,k){k.instanced&&k.instancedDoublePrecision&&(j.attributes.add(P.T.MODELORIGINHI,"vec3"),j.attributes.add(P.T.MODELORIGINLO,"vec3"),j.attributes.add(P.T.MODEL,"mat3"),j.attributes.add(P.T.MODELNORMAL,"mat3")),k.instancedDoublePrecision&&(j.vertex.include(O.$,k),j.vertex.uniforms.add("viewOriginHi","vec3"),j.vertex.uniforms.add("viewOriginLo","vec3"));const W=[I.H`
    vec3 calculateVPos() {
      ${k.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,I.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${k.instancedDoublePrecision?I.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,I.H`
    vec3 dpNormal(vec4 _normal) {
      ${k.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,I.H`
    vec3 dpNormalView(vec4 _normal) {
      ${k.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,k.vertexTangents?I.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${k.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:I.H``];j.vertex.code.add(W[0]),j.vertex.code.add(W[1]),j.vertex.code.add(W[2]),k.output===S.H.Normal&&j.vertex.code.add(W[3]),j.vertex.code.add(W[4])}function U(j,k){(0,B.po)(k,H,N,3),j.setUniform3fv("viewOriginHi",H),j.setUniform3fv("viewOriginLo",N)}const H=(0,y.c)(),N=(0,y.c)()},26859:(ve,K,x)=>{x.d(K,{O:()=>I,h:()=>P});var y=x(17625);function S(B){const w=y.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;B.fragment.code.add(w),B.vertex.code.add(w)}var P,B,O=x(16396);function I(B,w){w.normalType===P.Attribute&&(B.attributes.add(O.T.NORMAL,"vec3"),B.vertex.code.add(y.H`vec3 normalModel() {
return normal;
}`)),w.normalType===P.CompressedAttribute&&(B.include(S),B.attributes.add(O.T.NORMALCOMPRESSED,"vec2"),B.vertex.code.add(y.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),w.normalType===P.ScreenDerivative&&(B.extensions.add("GL_OES_standard_derivatives"),B.fragment.code.add(y.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(B=P||(P={}))[B.Attribute=0]="Attribute",B[B.CompressedAttribute=1]="CompressedAttribute",B[B.Ground=2]="Ground",B[B.ScreenDerivative=3]="ScreenDerivative",B[B.COUNT=4]="COUNT"},84833:(ve,K,x)=>{x.d(K,{f:()=>O});var y=x(17625),S=x(16396);function O(I){I.attributes.add(S.T.POSITION,"vec3"),I.vertex.code.add(y.H`vec3 positionModel() { return position; }`)}},72326:(ve,K,x)=>{x.d(K,{R:()=>P});var y=x(9044),S=x(17625);function O(B){B.vertex.code.add(S.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${S.H.int(y.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${S.H.int(y.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${S.H.int(y.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${S.H.int(y.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var I=x(16396);function P(B,w){w.symbolColor?(B.include(O),B.attributes.add(I.T.SYMBOLCOLOR,"vec4"),B.varyings.add("colorMixMode","mediump float")):B.fragment.uniforms.add("colorMixMode","int"),B.vertex.code.add(w.symbolColor?S.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:S.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},36603:(ve,K,x)=>{x.d(K,{D:()=>O,N:()=>I});var I,P,y=x(17625),S=x(16396);function O(P,B){B.attributeTextureCoordinates===I.Default&&(P.attributes.add(S.T.UV0,"vec2"),P.varyings.add("vuv0","vec2"),P.vertex.code.add(y.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),B.attributeTextureCoordinates===I.Atlas&&(P.attributes.add(S.T.UV0,"vec2"),P.varyings.add("vuv0","vec2"),P.attributes.add(S.T.UVREGION,"vec4"),P.varyings.add("vuvRegion","vec4"),P.vertex.code.add(y.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),B.attributeTextureCoordinates===I.None&&P.vertex.code.add(y.H`void forwardTextureCoordinates() {}`)}(P=I||(I={}))[P.None=0]="None",P[P.Default=1]="Default",P[P.Atlas=2]="Atlas",P[P.COUNT=3]="COUNT"},58173:(ve,K,x)=>{x.d(K,{c:()=>O});var y=x(17625),S=x(16396);function O(I,P){P.attributeColor?(I.attributes.add(S.T.COLOR,"vec4"),I.varyings.add("vColor","vec4"),I.vertex.code.add(y.H`void forwardVertexColor() { vColor = color; }`),I.vertex.code.add(y.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):I.vertex.code.add(y.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85305:(ve,K,x)=>{x.d(K,{B:()=>W});var y=x(59617),S=x(26859),B=(x(550),x(43703),x(28093),x(84833)),w=x(7228),M=x(17625);function U(V,J){V.include(B.f),V.vertex.include(w.$,J),V.varyings.add("vPositionWorldCameraRelative","vec3"),V.varyings.add("vPosition_view","vec3"),V.vertex.uniforms.add("transformWorldFromModelRS","mat3"),V.vertex.uniforms.add("transformWorldFromModelTH","vec3"),V.vertex.uniforms.add("transformWorldFromModelTL","vec3"),V.vertex.uniforms.add("transformWorldFromViewTH","vec3"),V.vertex.uniforms.add("transformWorldFromViewTL","vec3"),V.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),V.vertex.uniforms.add("transformProjFromView","mat4"),V.vertex.code.add(M.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),V.fragment.uniforms.add("transformWorldFromViewTL","vec3"),V.fragment.code.add(M.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function W(V,J){J.normalType===S.h.Attribute||J.normalType===S.h.CompressedAttribute?(V.include(S.O,J),V.varyings.add("vNormalWorld","vec3"),V.varyings.add("vNormalView","vec3"),V.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),V.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),V.vertex.code.add(M.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):J.normalType===S.h.Ground?(V.include(U,J),V.varyings.add("vNormalWorld","vec3"),V.vertex.code.add(M.H`
    void forwardNormal() {
      vNormalWorld = ${J.viewingMode===y.JY.Global?M.H`normalize(vPositionWorldCameraRelative);`:M.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):V.vertex.code.add(M.H`void forwardNormal() {}`)}},85982:(ve,K,x)=>{x.d(K,{i:()=>I});var y=x(36603),S=x(17625);function O(P){P.extensions.add("GL_EXT_shader_texture_lod"),P.extensions.add("GL_OES_standard_derivatives"),P.fragment.code.add(S.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function I(P,B){P.include(y.D,B),P.fragment.code.add(S.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${B.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),B.attributeTextureCoordinates===y.N.Default&&P.fragment.code.add(S.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),B.attributeTextureCoordinates===y.N.Atlas&&(P.include(O),P.fragment.code.add(S.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},52071:(ve,K,x)=>{x.d(K,{LC:()=>B,Mo:()=>w});var y=x(59617),S=x(17625);function I(H){H.vertex.code.add(S.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),H.vertex.code.add(S.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),H.vertex.code.add(S.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),H.vertex.code.add(S.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),H.vertex.code.add(S.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),H.vertex.code.add(S.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),H.vertex.code.add(S.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function B(H,N){const j=H.vertex.code;N.verticalOffsetEnabled?(H.vertex.uniforms.add("verticalOffset","vec4"),N.screenSizePerspectiveEnabled&&(H.include(I),H.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),j.add(S.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${N.viewingMode===y.JY.Global?S.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:S.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${N.screenSizePerspectiveEnabled?S.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:S.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):j.add(S.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function w(H,N,j){if(!N.verticalOffset)return;const k=function M(H,N,j,k=U){return k.screenLength=H.screenLength,k.perDistance=Math.tan(.5*N)/(.5*j),k.minWorldLength=H.minWorldLength,k.maxWorldLength=H.maxWorldLength,k}(N.verticalOffset,j.camera.fovY,j.camera.fullViewport[3]);H.setUniform4f("verticalOffset",k.screenLength*(j.camera.pixelRatio||1),k.perDistance,k.minWorldLength,k.maxWorldLength)}x(50229);const U={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},5105:(ve,K,x)=>{x.d(K,{s:()=>k});var y=x(6945),S=x(78925),O=x(24255),I=x(26859),P=x(36603),B=x(85305),w=x(19278),M=x(17625);function U(W,$){W.fragment.include(w.n),$.output===y.H.Shadow?(W.extensions.add("GL_OES_standard_derivatives"),W.fragment.code.add(M.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):$.output===y.H.Depth&&W.fragment.code.add(M.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var H=x(62952),N=x(92836),j=x(93609);function k(W,$){const V=W.vertex.code,J=W.fragment.code,ce=$.hasModelTransformation;$.output!==y.H.Depth&&$.output!==y.H.Shadow||(W.include(O.w,{linearDepth:!0,hasModelTransformation:ce}),W.include(P.D,$),W.include(N.kl,$),W.include(U,$),W.include(S.p2,$),W.vertex.uniforms.add("nearFar","vec2"),W.varyings.add("depth","float"),$.hasColorTexture&&W.fragment.uniforms.add("tex","sampler2D"),V.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${ce?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),W.include(j.sj,$),J.add(M.H`
      void main(void) {
        discardBySlice(vpos);
        ${$.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),$.output===y.H.Normal&&(W.include(O.w,{linearDepth:!1,hasModelTransformation:ce}),W.include(I.O,$),W.include(B.B,$),W.include(P.D,$),W.include(N.kl,$),$.hasColorTexture&&W.fragment.uniforms.add("tex","sampler2D"),W.vertex.uniforms.add("viewNormal","mat4"),W.varyings.add("vPositionView","vec3"),V.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${$.normalType===I.h.Attribute?M.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${ce?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),W.include(S.p2,$),W.include(j.sj,$),J.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${$.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${$.normalType===I.h.ScreenDerivative?M.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:M.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),$.output===y.H.Highlight&&(W.include(O.w,{linearDepth:!1,hasModelTransformation:ce}),W.include(P.D,$),W.include(N.kl,$),$.hasColorTexture&&W.fragment.uniforms.add("tex","sampler2D"),V.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${ce?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),W.include(S.p2,$),W.include(j.sj,$),W.include(H.bA),J.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${$.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},62952:(ve,K,x)=>{x.d(K,{bA:()=>P,wW:()=>B});var y=x(4794),S=x(17625);const O=(0,y.f)(1,1,0,1),I=(0,y.f)(1,0,1,1);function P(w){w.fragment.uniforms.add("depthTex","sampler2D"),w.fragment.uniforms.add("highlightViewportPixelSz","vec4"),w.fragment.constants.add("occludedHighlightFlag","vec4",O).add("unoccludedHighlightFlag","vec4",I),w.fragment.code.add(S.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function B(w,M){w.bindTexture(M.highlightDepthTexture,"depthTex"),w.setUniform4f("highlightViewportPixelSz",0,0,M.inverseViewport[0],M.inverseViewport[1])}},47923:(ve,K,x)=>{x.d(K,{S:()=>O});var y=x(19278),S=x(17625);function O(I){I.include(y.n),I.code.add(S.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},29052:(ve,K,x)=>{x.d(K,{Q:()=>B});var y=x(36603),S=x(85982),O=x(96395),I=x(17625),P=x(16396);function B(w,M){const U=w.fragment;M.vertexTangents?(w.attributes.add(P.T.TANGENT,"vec4"),w.varyings.add("vTangent","vec4"),U.code.add(M.doubleSidedMode===O.q.WindingOrder?I.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:I.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(w.extensions.add("GL_OES_standard_derivatives"),U.code.add(I.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),M.attributeTextureCoordinates!==y.N.None&&(w.include(S.i,M),U.uniforms.add("normalTexture","sampler2D"),U.uniforms.add("normalTextureSize","vec2"),U.code.add(I.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${M.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},54662:(ve,K,x)=>{x.d(K,{K:()=>S});var y=x(17625);function S(O,I){const P=O.fragment;I.receiveAmbientOcclusion?(P.uniforms.add("ssaoTex","sampler2D"),P.uniforms.add("viewportPixelSz","vec4"),P.code.add(y.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):P.code.add(y.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},22792:(ve,K,x)=>{x.d(K,{X:()=>H});var y=x(59617),S=x(92724),O=x(17625);function I(N,j){const k=N.fragment,W=void 0!==j.lightingSphericalHarmonicsOrder?j.lightingSphericalHarmonicsOrder:2;0===W?(k.uniforms.add("lightingAmbientSH0","vec3"),k.code.add(O.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===W?(k.uniforms.add("lightingAmbientSH_R","vec4"),k.uniforms.add("lightingAmbientSH_G","vec4"),k.uniforms.add("lightingAmbientSH_B","vec4"),k.code.add(O.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===W&&(k.uniforms.add("lightingAmbientSH0","vec3"),k.uniforms.add("lightingAmbientSH_R1","vec4"),k.uniforms.add("lightingAmbientSH_G1","vec4"),k.uniforms.add("lightingAmbientSH_B1","vec4"),k.uniforms.add("lightingAmbientSH_R2","vec4"),k.uniforms.add("lightingAmbientSH_G2","vec4"),k.uniforms.add("lightingAmbientSH_B2","vec4"),k.code.add(O.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),j.pbrMode!==S.f7.Normal&&j.pbrMode!==S.f7.Schematic||k.code.add(O.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var P=x(54662);function B(N){const j=N.fragment;j.uniforms.add("lightingMainDirection","vec3"),j.uniforms.add("lightingMainIntensity","vec3"),j.uniforms.add("lightingFixedFactor","float"),j.uniforms.add("lightingSpecularStrength","float"),j.uniforms.add("lightingEnvironmentStrength","float"),j.code.add(O.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var w=x(98898),M=x(39337),U=x(8507);function H(N,j){const k=N.fragment;N.include(B),N.include(P.K,j),j.pbrMode!==S.f7.Disabled&&N.include(w.T,j),N.include(I,j),j.receiveShadows&&N.include(U.hX,j),k.uniforms.add("lightingGlobalFactor","float"),k.uniforms.add("ambientBoostFactor","float"),k.uniforms.add("hasFillLights","bool"),N.include(M.e),k.code.add(O.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${j.pbrMode===S.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),k.code.add(O.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${j.viewingMode===y.JY.Global?O.H`normalize(vPosWorld)`:O.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),k.code.add(O.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),j.pbrMode===S.f7.Disabled||j.pbrMode===S.f7.WaterOnIntegratedMesh?k.code.add(O.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):j.pbrMode!==S.f7.Normal&&j.pbrMode!==S.f7.Schematic||(k.code.add(O.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),k.code.add(O.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),k.code.add(O.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),k.code.add(O.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),k.code.add(O.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${j.pbrMode===S.f7.Schematic?O.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:O.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},10109:(ve,K,x)=>{x.d(K,{l:()=>S,p:()=>O});var y=x(17625);function S(I,P){I.fragment.uniforms.add("terrainDepthTexture","sampler2D"),I.fragment.uniforms.add("nearFar","vec2"),I.fragment.uniforms.add("inverseViewport","vec2"),I.fragment.code.add(y.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${P.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function O(I,P){P.multipassTerrainEnabled&&P.terrainLinearDepthTexture&&I.bindTexture(P.terrainLinearDepthTexture,"terrainDepthTexture")}},96395:(ve,K,x)=>{x.d(K,{k:()=>O,q:()=>I});var I,P,y=x(94573),S=x(17625);function O(P,B){const w=P.fragment;switch(w.code.add(S.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),B.doubleSidedMode){case I.None:w.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case I.View:w.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case I.WindingOrder:w.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,y.Bg)(B.doubleSidedMode);case I.COUNT:}}(P=I||(I={}))[P.None=0]="None",P[P.View=1]="View",P[P.WindingOrder=2]="WindingOrder",P[P.COUNT=3]="COUNT"},98898:(ve,K,x)=>{x.d(K,{T:()=>P});var y=x(17625);function S(B){const w=B.fragment.code;w.add(y.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),w.add(y.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),w.add(y.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var O=x(92724),I=x(39337);function P(B,w){const M=B.fragment.code;B.include(I.e),w.pbrMode===O.f7.Water||w.pbrMode===O.f7.WaterOnIntegratedMesh?(M.add(y.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${w.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),M.add(y.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),M.add(y.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),M.add(y.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),M.add(y.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):w.pbrMode!==O.f7.Normal&&w.pbrMode!==O.f7.Schematic||(B.include(S),M.add(y.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),M.add(y.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),M.add(y.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),M.add(y.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),M.add(y.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),M.add(y.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},92724:(ve,K,x)=>{x.d(K,{f7:()=>P,jV:()=>B,nW:()=>w});var P,M,y=x(14658),S=x(85982),O=x(17625);function B(M,U){const H=M.fragment,N=U.hasMetalnessAndRoughnessTexture||U.hasEmissionTexture||U.hasOcclusionTexture;U.pbrMode===P.Normal&&N&&M.include(S.i,U),U.pbrMode!==P.Schematic?(U.pbrMode===P.Disabled&&H.code.add(O.H`float getBakedOcclusion() { return 1.0; }`),U.pbrMode===P.Normal&&(H.uniforms.add("emissionFactor","vec3"),H.uniforms.add("mrrFactors","vec3"),H.code.add(O.H`vec3 mrr;
vec3 emission;
float occlusion;`),U.hasMetalnessAndRoughnessTexture&&(H.uniforms.add("texMetallicRoughness","sampler2D"),U.supportsTextureAtlas&&H.uniforms.add("texMetallicRoughnessSize","vec2"),H.code.add(O.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),U.hasEmissionTexture&&(H.uniforms.add("texEmission","sampler2D"),U.supportsTextureAtlas&&H.uniforms.add("texEmissionSize","vec2"),H.code.add(O.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),U.hasOcclusionTexture?(H.uniforms.add("texOcclusion","sampler2D"),U.supportsTextureAtlas&&H.uniforms.add("texOcclusionSize","vec2"),H.code.add(O.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):H.code.add(O.H`float getBakedOcclusion() { return 1.0; }`),H.code.add(O.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${N?"vtc.uv = vuv0;":""}
      ${U.hasMetalnessAndRoughnessTexture?U.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${U.hasEmissionTexture?U.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${U.hasOcclusionTexture?U.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):H.code.add(O.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function w(M,U,H=!1){H||(M.setUniform3fv("mrrFactors",U.mrrFactors),M.setUniform3fv("emissionFactor",U.emissiveFactor))}(0,y.f)(0,.6,.2),(M=P||(P={}))[M.Disabled=0]="Disabled",M[M.Normal=1]="Normal",M[M.Schematic=2]="Schematic",M[M.Water=3]="Water",M[M.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",M[M.COUNT=5]="COUNT"},39337:(ve,K,x)=>{x.d(K,{e:()=>S});var y=x(17625);function S(O){O.vertex.code.add(y.H`const float PI = 3.141592653589793;`),O.fragment.code.add(y.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},8507:(ve,K,x)=>{x.d(K,{hX:()=>O,vL:()=>P});var y=x(19278),S=x(17625);function O(w){w.fragment.include(y.n),w.fragment.uniforms.add("shadowMapTex","sampler2D"),w.fragment.uniforms.add("numCascades","int"),w.fragment.uniforms.add("cascadeDistances","vec4"),w.fragment.uniforms.add("shadowMapMatrix","mat4",4),w.fragment.uniforms.add("depthHalfPixelSz","float"),w.fragment.code.add(S.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function P(w,M,U){M.shadowMappingEnabled&&M.shadowMap.bindView(w,U)}},92836:(ve,K,x)=>{x.d(K,{kl:()=>O,uj:()=>B});var y=x(17625),S=x(16396);function O(w,M){M.vvInstancingEnabled&&(M.vvSize||M.vvColor)&&w.attributes.add(S.T.INSTANCEFEATUREATTRIBUTE,"vec4"),M.vvSize?(w.vertex.uniforms.add("vvSizeMinSize","vec3"),w.vertex.uniforms.add("vvSizeMaxSize","vec3"),w.vertex.uniforms.add("vvSizeOffset","vec3"),w.vertex.uniforms.add("vvSizeFactor","vec3"),w.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),w.vertex.uniforms.add("vvSymbolAnchor","vec3"),w.vertex.code.add(y.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),w.vertex.code.add(y.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${M.vvInstancingEnabled?y.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):w.vertex.code.add(y.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),M.vvColor?(w.vertex.constants.add("vvColorNumber","int",8),w.vertex.code.add(y.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${M.vvInstancingEnabled?y.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):w.vertex.code.add(y.H`vec4 vvColor() { return vec4(1.0); }`)}function B(w,M){(function I(w,M){M.vvSizeEnabled&&(w.setUniform3fv("vvSizeMinSize",M.vvSizeMinSize),w.setUniform3fv("vvSizeMaxSize",M.vvSizeMaxSize),w.setUniform3fv("vvSizeOffset",M.vvSizeOffset),w.setUniform3fv("vvSizeFactor",M.vvSizeFactor)),M.vvColorEnabled&&(w.setUniform1fv("vvColorValues",M.vvColorValues),w.setUniform4fv("vvColorColors",M.vvColorColors))})(w,M),M.vvSizeEnabled&&(w.setUniform3fv("vvSymbolAnchor",M.vvSymbolAnchor),w.setUniformMatrix3fv("vvSymbolRotationMatrix",M.vvSymbolRotationMatrix))}},93609:(ve,K,x)=>{x.d(K,{F:()=>O,bf:()=>I,sj:()=>P});var y=x(17625),S=x(42743);const O=.1,I=.001;function P(B,w){const M=B.fragment;switch(w.alphaDiscardMode){case S.JJ.Blend:M.code.add(y.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${y.H.float(I)}) { discard; } }
      `);break;case S.JJ.Opaque:M.code.add(y.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case S.JJ.Mask:M.uniforms.add("textureAlphaCutoff","float"),M.code.add(y.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case S.JJ.MaskBlend:B.fragment.uniforms.add("textureAlphaCutoff","float"),B.fragment.code.add(y.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},7228:(ve,K,x)=>{x.d(K,{$:()=>O,I:()=>I});var y=x(8314),S=x(17625);function O({code:P},B){P.add(B.doublePrecisionRequiresObfuscation?S.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:S.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function I(P){return!!(0,y.Z)("force-double-precision-obfuscation")||P.driverTest.doublePrecisionRequiresObfuscation}},411:(ve,K,x)=>{x.d(K,{a:()=>I});var y=x(6945),S=x(17625),O=x(81653);function I(P,B){const w=S.H`
  /*
  *  ${B.name}
  *  ${B.output===y.H.Color?"RenderOutput: Color":B.output===y.H.Depth?"RenderOutput: Depth":B.output===y.H.Shadow?"RenderOutput: Shadow":B.output===y.H.Normal?"RenderOutput: Normal":B.output===y.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,O.CG)()&&(P.fragment.code.add(w),P.vertex.code.add(w))}},49974:(ve,K,x)=>{x.d(K,{y:()=>I});var y=x(9044),S=x(17625);function O(P){P.code.add(S.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function I(P){P.include(O),P.code.add(S.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${S.H.int(y.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${S.H.int(y.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${S.H.int(y.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${S.H.int(y.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${S.H.int(y.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},19278:(ve,K,x)=>{x.d(K,{n:()=>S});var y=x(17625);function S(O){O.code.add(y.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},22355:(ve,K,x)=>{x.d(K,{kG:()=>I});const S=x(63290).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class O{constructor(){this.includedModules=new Map}include($,V){this.includedModules.has($)?this.includedModules.get($)!==V&&S.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set($,V),$(this.builder,V))}}class I extends O{constructor(){super(...arguments),this.vertex=new w,this.fragment=new w,this.attributes=new M,this.varyings=new U,this.extensions=new H,this.constants=new N}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource($){const V=this.extensions.generateSource($),J=this.attributes.generateSource($),ce=this.varyings.generateSource(),Be="vertex"===$?this.vertex:this.fragment,ie=Be.uniforms.generateSource(),se=Be.code.generateSource(),ue="vertex"===$?k:j,_e=this.constants.generateSource().concat(Be.constants.generateSource());return`\n${V.join("\n")}\n\n${ue}\n\n${_e.join("\n")}\n\n${ie.join("\n")}\n\n${J.join("\n")}\n\n${ce.join("\n")}\n\n${se.join("\n")}`}}class P{constructor(){this._entries=new Map}add($,V,J){return this._entries.set(`${$}_${V}_${J}`,{name:$,type:V,arraySize:J}),this}generateSource(){return Array.from(this._entries.values()).map(V=>`uniform ${V.type} ${V.name}${(V=>V?`[${V}]`:"")(V.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class B{constructor(){this._entries=new Array}add($){this._entries.push($)}generateSource(){return this._entries}}class w extends O{constructor(){super(...arguments),this.uniforms=new P,this.code=new B,this.constants=new N}get builder(){return this}}class M{constructor(){this._entries=new Array}add($,V){this._entries.push([$,V])}generateSource($){return"fragment"===$?[]:this._entries.map(V=>`attribute ${V[1]} ${V[0]};`)}}class U{constructor(){this._entries=new Array}add($,V){this._entries.push([$,V])}generateSource(){return this._entries.map($=>`varying ${$[1]} ${$[0]};`)}}class H{constructor(){this._entries=new Set}add($){this._entries.add($)}generateSource($){const V="vertex"===$?H.ALLOWLIST_VERTEX:H.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(J=>V.includes(J)).map(J=>`#extension ${J} : enable`)}}H.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],H.ALLOWLIST_VERTEX=[];class N{constructor(){this._entries=[]}add($,V,J){let ce="ERROR_CONSTRUCTOR_STRING";switch(V){case"float":ce=N._numberToFloatStr(J);break;case"int":ce=N._numberToIntStr(J);break;case"bool":ce=J.toString();break;case"vec2":ce=`vec2(${N._numberToFloatStr(J[0])},                            ${N._numberToFloatStr(J[1])})`;break;case"vec3":ce=`vec3(${N._numberToFloatStr(J[0])},                            ${N._numberToFloatStr(J[1])},                            ${N._numberToFloatStr(J[2])})`;break;case"vec4":ce=`vec4(${N._numberToFloatStr(J[0])},                            ${N._numberToFloatStr(J[1])},                            ${N._numberToFloatStr(J[2])},                            ${N._numberToFloatStr(J[3])})`;break;case"ivec2":ce=`ivec2(${N._numberToIntStr(J[0])},                             ${N._numberToIntStr(J[1])})`;break;case"ivec3":ce=`ivec3(${N._numberToIntStr(J[0])},                             ${N._numberToIntStr(J[1])},                             ${N._numberToIntStr(J[2])})`;break;case"ivec4":ce=`ivec4(${N._numberToIntStr(J[0])},                             ${N._numberToIntStr(J[1])},                             ${N._numberToIntStr(J[2])},                             ${N._numberToIntStr(J[3])})`;break;case"mat2":case"mat3":case"mat4":ce=`${V}(${Array.prototype.map.call(J,Be=>N._numberToFloatStr(Be)).join(", ")})`}return this._entries.push(`const ${V} ${$} = ${ce};`),this}static _numberToIntStr($){return $.toFixed(0)}static _numberToFloatStr($){return Number.isInteger($)?$.toFixed(1):$.toString()}generateSource(){return Array.from(this._entries)}}const j="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",k="precision highp float;\nprecision highp sampler2D;"},17625:(ve,K,x)=>{function y(S,...O){let I="";for(let P=0;P<O.length;P++)I+=S[P]+O[P];return I+=S[S.length-1],I}var S;x.d(K,{H:()=>y}),(S=y||(y={})).int=function O(P){return Math.round(P).toString()},S.float=function I(P){return P.toPrecision(8)}},2282:(ve,K,x)=>{x.d(K,{hu:()=>w}),x(67831),x(99770),x(993),(0,x(4794).c)();class B{constructor(se){this.message=se}toString(){return`AssertException: ${this.message}`}}function w(ie,se){if(!ie)throw se=se||"assert",console.log(new Error(se).stack),new B(se)}},50229:(ve,K,x)=>{x.d(K,{bj:()=>ge,FZ:()=>ft,Uf:()=>Ee,Bw:()=>zt,LO:()=>Ae,Hx:()=>he});var y=x(21286),S=x(62208),O=x(84161),I=x(28093),P=x(5548),B=x(42743);x(59617),(0,y.Vl)(10),(0,y.Vl)(12),(0,y.Vl)(70),(0,y.Vl)(40);const ue={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var xe=x(2282),Z=x(16396),we=(x(28347),x(43703));x(2757),new Float64Array(3),new Float32Array(6),(0,we.c)();const st=(0,P.Ue)();function zt(X,Y,te,ee,le,Ce,Le){if(!function pe(X){return!!(0,S.pC)(X)&&!X.visible}(Y))if(X.boundingInfo)(0,xe.hu)(X.primitiveType===B.MX.Triangle),_t(X.boundingInfo,ee,le,te.tolerance,Ce,Le);else{const Me=X.indices.get(Z.T.POSITION),We=X.vertexAttributes.get(Z.T.POSITION);Vt(ee,le,0,Me.length/3,Me,We,void 0,Ce,Le)}}const nr=(0,I.c)();function _t(X,Y,te,ee,le,Ce){if((0,S.Wi)(X))return;const Le=function q(X,Y,te){return(0,O.s)(te,1/(Y[0]-X[0]),1/(Y[1]-X[1]),1/(Y[2]-X[2]))}(Y,te,nr);if((0,P.op)(st,X.getBBMin()),(0,P.Tn)(st,X.getBBMax()),(0,S.pC)(le)&&le.applyToAabb(st),function z(X,Y,te,ee){return function oe(X,Y,te,ee,le){const Ce=(X[0]-ee-Y[0])*te[0],Le=(X[3]+ee-Y[0])*te[0];let Me=Math.min(Ce,Le),We=Math.max(Ce,Le);const Pe=(X[1]-ee-Y[1])*te[1],$e=(X[4]+ee-Y[1])*te[1];if(We=Math.min(We,Math.max(Pe,$e)),We<0||(Me=Math.max(Me,Math.min(Pe,$e)),Me>We))return!1;const Xe=(X[2]-ee-Y[2])*te[2],tt=(X[5]+ee-Y[2])*te[2];return We=Math.min(We,Math.max(Xe,tt)),!(We<0)&&(Me=Math.max(Me,Math.min(Xe,tt)),!(Me>We)&&Me<le)}(X,Y,te,ee,1/0)}(st,Y,Le,ee)){const{primitiveIndices:Me,indices:We,position:Pe}=X,$e=Me?Me.length:We.length/3;if($e>yt){const Xe=X.getChildren();if(void 0!==Xe){for(let tt=0;tt<8;++tt)void 0!==Xe[tt]&&_t(Xe[tt],Y,te,ee,le,Ce);return}}Vt(Y,te,0,$e,We,Pe,Me,le,Ce)}}const vt=(0,I.c)();function Vt(X,Y,te,ee,le,Ce,Le,Me,We){if(Le)return function sr(X,Y,te,ee,le,Ce,Le,Me,We){const Pe=Ce.data,$e=Ce.stride||Ce.size,Xe=X[0],tt=X[1],Et=X[2],ct=Y[0]-Xe,xt=Y[1]-tt,bt=Y[2]-Et;for(let nt=te;nt<ee;++nt){const St=Le[nt];let rt=3*St,Je=$e*le[rt++],pt=Pe[Je++],gt=Pe[Je++],Mt=Pe[Je];Je=$e*le[rt++];let Ot=Pe[Je++],Wt=Pe[Je++],Gt=Pe[Je];Je=$e*le[rt];let At=Pe[Je++],ut=Pe[Je++],jt=Pe[Je];(0,S.pC)(Me)&&([pt,gt,Mt]=Me.applyToVertex(pt,gt,Mt,nt),[Ot,Wt,Gt]=Me.applyToVertex(Ot,Wt,Gt,nt),[At,ut,jt]=Me.applyToVertex(At,ut,jt,nt));const Bt=Ot-pt,Ut=Wt-gt,Ht=Gt-Mt,Dt=At-pt,Rt=ut-gt,Kt=jt-Mt,kt=xt*Kt-Rt*bt,Qt=bt*Dt-Kt*ct,Pt=ct*Rt-Dt*xt,Tt=Bt*kt+Ut*Qt+Ht*Pt;if(Math.abs(Tt)<=Number.EPSILON)continue;const Xt=Xe-pt,Yt=tt-gt,wt=Et-Mt,Lt=Xt*kt+Yt*Qt+wt*Pt;if(Tt>0){if(Lt<0||Lt>Tt)continue}else if(Lt>0||Lt<Tt)continue;const qt=Yt*Ht-Ut*wt,ke=wt*Bt-Ht*Xt,Ct=Xt*Ut-Bt*Yt,Nt=ct*qt+xt*ke+bt*Ct;if(Tt>0){if(Nt<0||Lt+Nt>Tt)continue}else if(Nt>0||Lt+Nt<Tt)continue;const cr=(Dt*qt+Rt*ke+Kt*Ct)/Tt;cr>=0&&We(cr,G(Bt,Ut,Ht,Dt,Rt,Kt,vt),St,!1)}}(X,Y,te,ee,le,Ce,Le,Me,We);const Pe=Ce.data,$e=Ce.stride||Ce.size,Xe=X[0],tt=X[1],Et=X[2],ct=Y[0]-Xe,xt=Y[1]-tt,bt=Y[2]-Et;for(let nt=te,St=3*te;nt<ee;++nt){let rt=$e*le[St++],Je=Pe[rt++],pt=Pe[rt++],gt=Pe[rt];rt=$e*le[St++];let Mt=Pe[rt++],Ot=Pe[rt++],Wt=Pe[rt];rt=$e*le[St++];let Gt=Pe[rt++],At=Pe[rt++],ut=Pe[rt];(0,S.pC)(Me)&&([Je,pt,gt]=Me.applyToVertex(Je,pt,gt,nt),[Mt,Ot,Wt]=Me.applyToVertex(Mt,Ot,Wt,nt),[Gt,At,ut]=Me.applyToVertex(Gt,At,ut,nt));const jt=Mt-Je,Bt=Ot-pt,Ut=Wt-gt,Ht=Gt-Je,Dt=At-pt,Rt=ut-gt,Kt=xt*Rt-Dt*bt,kt=bt*Ht-Rt*ct,Qt=ct*Dt-Ht*xt,Pt=jt*Kt+Bt*kt+Ut*Qt;if(Math.abs(Pt)<=Number.EPSILON)continue;const Tt=Xe-Je,Xt=tt-pt,Yt=Et-gt,wt=Tt*Kt+Xt*kt+Yt*Qt;if(Pt>0){if(wt<0||wt>Pt)continue}else if(wt>0||wt<Pt)continue;const Lt=Xt*Ut-Bt*Yt,qt=Yt*jt-Ut*Tt,ke=Tt*Bt-jt*Xt,Ct=ct*Lt+xt*qt+bt*ke;if(Pt>0){if(Ct<0||wt+Ct>Pt)continue}else if(Ct>0||wt+Ct<Pt)continue;const Nt=(Ht*Lt+Dt*qt+Rt*ke)/Pt;Nt>=0&&We(Nt,G(jt,Bt,Ut,Ht,Dt,Rt,vt),nt,!1)}}const rr=(0,I.c)(),lr=(0,I.c)();function G(X,Y,te,ee,le,Ce,Le){return(0,O.s)(rr,X,Y,te),(0,O.s)(lr,ee,le,Ce),(0,O.c)(Le,rr,lr),(0,O.n)(Le,Le),Le}function he(X,Y,te,ee,le){let Ce=(te.screenLength||0)*X.pixelRatio;le&&(Ce=function J(X,Y,te,ee){return function k(X,Y){return Math.max((0,y.t7)(X*Y.scale,X,Y.factor),function j(X,Y){return 0===X?Y.minPixelSize:Y.minPixelSize*(1+2*Y.paddingPixels/X)}(X,Y))}(X,function N(X,Y,te){const ee=te.parameters,le=te.paddingPixelsOverride;return ue.scale=Math.min(ee.divisor/(Y-ee.offset),1),ue.factor=function H(X){return Math.abs(X*X*X)}(X),ue.minPixelSize=ee.minPixelSize,ue.paddingPixels=le,ue}(Y,te,ee))}(Ce,ee,Y,le));const Le=Ce*Math.tan(.5*X.fovY)/(.5*X.fullHeight);return(0,y.uZ)(Le*Y,te.minWorldLength||0,null!=te.maxWorldLength?te.maxWorldLength:1/0)}function ge(X,Y,te){if(!X)return;const ee=X.parameters;Y.setUniform4f(te,ee.divisor,ee.offset,ee.minPixelSize,X.paddingPixelsOverride)}function Ee(X,Y){const te=Y?Ee(Y):{};for(const ee in X){let le=X[ee];le&&le.forEach&&(le=lt(le)),null==le&&ee in te||(te[ee]=le)}return te}function Ae(X,Y){let te=!1;for(const ee in Y){const le=Y[ee];void 0!==le&&(te=!0,X[ee]=Array.isArray(le)?le.slice():le)}return te}function lt(X){const Y=[];return X.forEach(te=>Y.push(te)),Y}const ft={multiply:1,ignore:2,replace:3,tint:4},yt=1e3},40852:(ve,K,x)=>{x.d(K,{G:()=>y});class y{constructor(O,I,P,B,w,M=!1,U=0){this.name=O,this.count=I,this.type=P,this.offset=B,this.stride=w,this.normalized=M,this.divisor=U}}}}]);