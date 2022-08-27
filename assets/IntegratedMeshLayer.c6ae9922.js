import{a0 as t,a1 as a,as as S,cc as _,a2 as f,cP as O,dQ as x,jt as A,kf as N,aZ as L,kg as R,cT as b,c1 as j,U as I,eQ as w,eD as M,eE as J,eF as K,jk as D,eG as P,jx as U,an as V,dc as k,dK as E,c2 as G,aP as z,r as F,t as Q,f as d,ec as q,jA as C,eK as W}from"./index.a831a68c.js";import{w as m}from"./persistable.f7d6789f.js";import{A as Z,K as v}from"./SceneService.e10eef6e.js";import{s as B,l as H,u as X,m as Y}from"./I3SLayerDefinitions.8bbe1523.js";import"./multiOriginJSONSupportUtils.2c03086c.js";import"./originUtils.10ab3775.js";import"./resourceUtils.f3fa96d1.js";var h;let n=h=class extends O{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;N(e,l,o.layer.spatialReference),i[r]=l.toJSON(o)}else i[r]=e.toJSON(o);delete i[r].spatialReference}clone(){return new h({geometry:L(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([_(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends R(b.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const o of e)r.add(c.fromJSON(o,i));return r}static async fromUrl(e,i,r){const o={url:j(e),origin:"service"},l=await I(e,{responseType:"json",signal:w(r,"signal")}),$=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:$}},o));return new p({url:e,items:u})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([f("esri.layers.support.SceneModifications")],y);const T=y;let s=class extends Z(M(J(K(D(P(U(W))))))){constructor(...e){super(...e),this._handles=new V,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(k(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,E))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:G(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){z(r)}if(await this._fetchService(i),F(this._modificationsSource)){const r=await T.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!Q(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],s.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([a({type:B,readOnly:!0})],s.prototype,"nodePages",void 0),t([a({type:[H],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([a({type:[Y],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:T}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),t([q(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),t([a(C)],s.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=t([f("esri.layers.IntegratedMeshLayer")],s);const ne=s;export{ne as default};
