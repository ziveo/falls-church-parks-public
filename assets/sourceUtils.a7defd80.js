import{gB as g,gC as p,gA as y,fj as w,gD as I,bN as f,t as h,am as b}from"./index.a831a68c.js";class _{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function V(e){return new q(e)}const a=new Set;function A(e,t,n,m=!1,u){a.clear();for(const r in n){const i=e.get(r);if(!i)continue;const l=n[r],s=P(i,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),a.add(i.name),i&&(m||i.editable)){const c=g(i,s);if(c)return d(p(c,i,s));t[i.name]=s}}for(const r of e.requiredFields)if(!a.has(r.name))return d(`missing required field "${r.name}"`);return null}function P(e,t){let n=t;return typeof t=="string"&&y(e)?n=parseFloat(t):t!=null&&w(e)&&typeof t!="string"&&(n=String(t)),I(n)}let o;function B(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function j(){return h(o)&&(o=await b(()=>import("./geometryEngineJSON.1c890801.js"),["geometryEngineJSON.1c890801.js","index.a831a68c.js","index.454cc923.css","geometryEngineJSON.58446c85.js","json.8bd707cf.js"],import.meta.url)),o}async function D(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{d as a,V as f,B as g,A as m,D as w};
