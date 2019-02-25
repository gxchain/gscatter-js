"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_PluginRepository=_interopRequireDefault(require("./plugins/PluginRepository")),_SocketService=_interopRequireDefault(require("./services/SocketService")),_Plugin=_interopRequireDefault(require("./plugins/Plugin")),PluginTypes=_interopRequireWildcard(require("./plugins/PluginTypes"));var _Blockchains=require("./models/Blockchains"),_Network=_interopRequireDefault(require("./models/Network")),_ua=_interopRequireDefault(require("gxc-frontend-base/src/script/util/ua")),_blockcityUtil=require("./util/blockcityUtil"),_checkSupport=_interopRequireDefault(require("./util/checkSupport")),ENV_WEBVIEW="webview";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"SocketService",{enumerable:!0,get:function get(){return _SocketService.default}}),Object.defineProperty(exports,"Plugin",{enumerable:!0,get:function get(){return _Plugin.default}}),Object.defineProperty(exports,"Blockchains",{enumerable:!0,get:function get(){return _Blockchains.Blockchains}}),Object.defineProperty(exports,"Network",{enumerable:!0,get:function get(){return _Network.default}}),exports.PluginTypes=exports.default=exports.ENV_BLOCKCITY=exports.ENV_PC=exports.ENV_MOBILE=exports.ENV_WEBVIEW=void 0;exports.PluginTypes=PluginTypes;exports.ENV_WEBVIEW=ENV_WEBVIEW;var ENV_MOBILE="mobile";exports.ENV_MOBILE="mobile";var ENV_PC="pc";exports.ENV_PC="pc";var ENV_BLOCKCITY="blockcity";exports.ENV_BLOCKCITY="blockcity";var ua=new _ua.default,getEnv=function(){return new Promise(function(a){setTimeout(/*#__PURE__*/(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function b(){var c;return _regenerator.default.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!ua.WEB_VIEW){b.next=5;break}return b.next=3,(0,_blockcityUtil.detectBlockcityWebview)();case 3:c=b.sent,c&&a("blockcity");case 5:ua.WEB_VIEW&&a(ENV_WEBVIEW),ua.MOBILE&&a("mobile"),ua.PC&&a("pc");case 8:case"end":return b.stop();}},b,this)})),100)})},getEnvSingleInstance=getEnv();getEnvSingleInstance.then(function(a){a==="blockcity"&&(0,_blockcityUtil.blockcityGlobalInject)(),(0,_checkSupport.default)()});var throwNoAuth=function(){if(!holder.gscatter.isExtension&&!_SocketService.default.isConnected())throw new Error("Connect and Authenticate first - gscatter.connect( pluginName )")},checkForExtension=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0;return 30<c?void b(!1):holder.gscatter.isExtension?a(!0):void setTimeout(function(){return checkForExtension(a,c+1)},100)},Index=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a),this.isExtension=!1,this.identity=null}return(0,_createClass2.default)(a,[{key:"loadPlugin",value:function loadPlugin(a){var b=this;if(!a.isValid())throw new Error("".concat(a.name," doesn't seem to be a valid GScatterJS plugin."));_PluginRepository.default.loadPlugin(a),a.isSignatureProvider()&&(this[a.name]=a.signatureProvider(function noIdFunc(){if(!b.identity)throw new Error("No Identity")},function(){return b.identity}),this[a.name+"Hook"]=a.hookProvider)}},{key:"connect",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c,d=arguments;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<d.length&&void 0!==d[1]?d[1]:{},a.abrupt("return",new Promise(function(a,d){if(!b||!b.length)throw new Error("You must specify a name for this connection");// Setting options defaults
c=Object.assign({initTimeout:1e4,linkTimeout:3e4},c),setTimeout(function(){a(!1)},c.initTimeout),checkForExtension(a,d)}));case 2:case"end":return a.stop();}},a,this)}));return function connect(){return a.apply(this,arguments)}}()},{key:"disconnect",value:function disconnect(){return _SocketService.default.disconnect()}},{key:"isConnected",value:function isConnected(){return _SocketService.default.isConnected()}},{key:"isPaired",value:function isPaired(){return _SocketService.default.isPaired()}},{key:"getVersion",value:function getVersion(){return _SocketService.default.sendApiRequest({type:"getVersion",payload:{}})}},{key:"getIdentity",value:function getIdentity(){(0,_checkSupport.default)()}},{key:"getIdentityFromPermissions",value:function getIdentityFromPermissions(){var a=this;return throwNoAuth(),_SocketService.default.sendApiRequest({type:"identityFromPermissions",payload:{}}).then(function(b){return b&&(a.identity=b),b})}},{key:"forgetIdentity",value:function forgetIdentity(){(0,_checkSupport.default)()}},{key:"authenticate",value:function authenticate(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"authenticate",payload:{nonce:a}})}},{key:"getArbitrarySignature",value:function getArbitrarySignature(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",d=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];return throwNoAuth(),_SocketService.default.sendApiRequest({type:"requestArbitrarySignature",payload:{publicKey:a,data:b,whatfor:c,isHash:d}})}},{key:"getPublicKey",value:function getPublicKey(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"getPublicKey",payload:{blockchain:a}})}},{key:"linkAccount",value:function linkAccount(a,b){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"linkAccount",payload:{publicKey:a,network:b}})}},{key:"hasAccountFor",value:function hasAccountFor(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"hasAccountFor",payload:{network:a}})}},{key:"suggestNetwork",value:function suggestNetwork(){(0,_checkSupport.default)()}},{key:"requestTransfer",value:function requestTransfer(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return _SocketService.default.sendApiRequest({type:"requestTransfer",payload:{network:a,to:b,amount:c,options:d}})}},{key:"requestSignature",value:function requestSignature(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"requestSignature",payload:a})}},{key:"createTransaction",value:function createTransaction(a,b,c,d){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"createTransaction",payload:{blockchain:a,actions:b,account:c,network:d}})}}]),a}(),Holder=/*#__PURE__*/function(){function a(b){(0,_classCallCheck2.default)(this,a),this.gscatter=b}return(0,_createClass2.default)(a,[{key:"plugins",value:function plugins(){var a=this;if(!this.gscatter.isExtension){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];c.map(function(b){return a.gscatter.loadPlugin(b)})}}},{key:"openExtensionPage",value:function openExtensionPage(){this.gscatter.isExtension||(ua.MOBILE?window.open("https://blockcity.gxb.io/download/"):ua.PC&&window.open("https://gxchain.github.io/GScatter/arch/guide/"))}}]),a}(),holder=new Holder(new Index());if("undefined"!=typeof window){// Catching extension instead of Desktop
if("undefined"!=typeof document){var bindScatterClassic=function(){holder.gscatter=window.gscatter,holder.gscatter.isExtension=!0,holder.gscatter.connect=function(){return new Promise(function(a){return a(!0)})}};"undefined"==typeof window.gscatter?document.addEventListener("gscatterLoaded",function(){return bindScatterClassic()}):bindScatterClassic()}window.GScatterJS=holder}holder.Plugin=_Plugin.default,holder.PluginTypes=PluginTypes,holder.Blockchains=_Blockchains.Blockchains,holder.Network=_Network.default,holder.SocketService=_SocketService.default;var _default=holder;exports.default=_default;