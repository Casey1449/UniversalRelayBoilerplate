Object.defineProperty(exports,"__esModule",{value:true});exports.



















getSiteInformation=getSiteInformation;require('dotenv').load();var googleMapsJavascriptAPI=process.env.GOOGLE_MAPS_JAVASCRIPT_API;if(googleMapsJavascriptAPI==null||typeof googleMapsJavascriptAPI!=='string')throw new Error('💔  urb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set');var siteInformation={site_id:'00000000-0000-0000-0000-000000000000',inEditingMode:false,isSiteBuilderDisabled:true,siteConfiguration:{webapp:{api:{googleMapsJavascriptAPI:googleMapsJavascriptAPI}},server:{},builderClient:{}}};function getSiteInformation(req,res){return regeneratorRuntime.async(function getSiteInformation$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt('return',
siteInformation);case 1:case'end':return _context.stop();}}},null,this);}
//# sourceMappingURL=siteSettings.js.map