import{s as a,f as r}from"./index.a831a68c.js";import{Q as l,k as i}from"./Utils.52ce5732.js";const n=a.getLogger("esri.views.2d.engine.webgl");function p(e){return l(e.minDataValue)&&l(e.maxDataValue)&&e.minSize!=null&&e.maxSize!=null?i.SIZE_MINMAX_VALUE:(e.expression&&e.expression==="view.scale"||e.valueExpression&&e.valueExpression==="$view.scale")&&Array.isArray(e.stops)?i.SIZE_SCALE_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?i.SIZE_FIELD_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&e.valueUnit!=null?i.SIZE_UNIT_VALUE:(n.error(new r("mapview-bad-type","Found invalid size VisualVariable",e)),i.NONE)}export{p as o};
