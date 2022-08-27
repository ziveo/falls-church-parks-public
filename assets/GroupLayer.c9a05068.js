import{jj as p,jk as v,eE as b,eF as c,jJ as u,jK as f,eG as _,em as m,jL as L,S as h,jM as g,r as O,jy as w,jN as j,a0 as t,a1 as l,cc as M,dK as d,a2 as V,eK as C}from"./index.a831a68c.js";let s=class extends p(v(b(c(u(f(_(C))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new m({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=L(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.own(h(()=>this.visible,this._onVisibilityChange.bind(this),d))}_writeLayers(i,e,o,r){const a=[];if(!i)return a;i.forEach(y=>{const n=g(y,r.webmap?r.webmap.getLayerJSONFromResourceInfo(y):null,r);O(n)&&n.layerType&&a.push(n)}),e.layers=a}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return w(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=h(()=>i.visible,e=>this._onChildVisibilityChange(i,e),d)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!j(this).initialized)return;const o=this.layers;let r=o.find(a=>a.visible);switch(i){case"exclusive":o.length&&!r&&(r=o.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":o.forEach(a=>{a.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};t([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),t([l({readOnly:!0})],s.prototype,"allTables",void 0),t([l()],s.prototype,"fullExtent",void 0),t([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),t([M("layers")],s.prototype,"_writeLayers",null),t([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),t([l({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),t([l()],s.prototype,"spatialReference",void 0),t([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),t([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],s.prototype,"visibilityMode",null),s=t([V("esri.layers.GroupLayer")],s);const E=s;export{E as default};
