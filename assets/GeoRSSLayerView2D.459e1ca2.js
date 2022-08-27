import{S as l,T as h,dC as g,cT as w,dG as d,dH as f,dI as n,a0 as u,a2 as S}from"./index.a831a68c.js";import{f as b,u as V}from"./LayerView.dc56aed3.js";import{i as T}from"./GraphicContainer.b957e03e.js";import{a as v}from"./BaseGraphicContainer.48b0a311.js";import"./utils.c5d68ceb.js";import"./Utils.52ce5732.js";import"./number.6e30c64a.js";import"./enums.c60b1dad.js";import"./Texture.799a4527.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.9bf60063.js";import"./alignmentUtils.84250e5d.js";import"./definitions.a48e52ac.js";import"./CIMSymbolHelper.49a4dde1.js";import"./BidiEngine.95523203.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.f68c7e05.js";import"./projectionSupport.5ef1eff5.js";import"./json.8bd707cf.js";import"./VertexArrayObject.47b5a963.js";import"./FeatureContainer.f0757bf1.js";import"./TileContainer.8cab8d8b.js";import"./WGLContainer.6c26f111.js";import"./pixelUtils.0c287117.js";import"./ProgramTemplate.30511351.js";import"./StyleDefinition.f1dd8ba9.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./visualVariablesUtils.eb44e100.js";import"./visualVariablesUtils.4ccb186b.js";import"./Matcher.7b29957c.js";import"./tileUtils.0d12ad86.js";import"./TileClipper.46fbd347.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.52b380bb.js";import"./quantizationUtils.d707a317.js";import"./ExpandedCIM.cd816331.js";import"./schemaUtils.5a296482.js";import"./createSymbolSchema.f93af27b.js";import"./MD5.7323a015.js";import"./util.c286b664.js";import"./ComputedAttributeStorage.a96b0cc6.js";import"./centroid.d71a978e.js";import"./vec3f32.ca7a14c1.js";let y=class extends b(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new w(i.features),s=t.drawingInfo,c=r?d.fromJSON(r):null,a=f(s.renderer),m=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new T(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([S("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ge=y;export{ge as default};
