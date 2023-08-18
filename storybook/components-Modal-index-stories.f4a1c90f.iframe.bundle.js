/*! For license information please see components-Modal-index-stories.f4a1c90f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_juicy_modal=self.webpackChunkreact_juicy_modal||[]).push([[861],{"./src/components/Modal/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Common:function(){return Common},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/react/index.js");var _Common$parameters,_Common$parameters2,_Common$parameters2$d,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var buttons=_ref.buttons,title=_ref.title,content=_ref.content,onClose=_ref.onClose;return(0,jsx_runtime.jsx)("div",{style:{position:"absolute",padding:"20px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255,255,255,0.8)"},className:"modal",children:(0,jsx_runtime.jsxs)("div",{className:"modal-content",children:[(0,jsx_runtime.jsxs)("div",{className:"modal-header",children:[(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:"0",right:"0",padding:"10px",cursor:"pointer"},className:"close",onClick:onClose,children:"×"}),(0,jsx_runtime.jsx)("h2",{children:title})]}),(0,jsx_runtime.jsx)("div",{style:{padding:"10px",height:"50px",overflowY:"auto"},className:"modal-body",children:content}),(0,jsx_runtime.jsx)("div",{className:"modal-footer",children:null==buttons?void 0:buttons.map((function(_ref2){var label=_ref2.label,onClick=_ref2.onClick;return(0,jsx_runtime.jsx)("button",{style:{padding:"10px",margin:"10px",cursor:"pointer"},onClick:onClick,children:label},label)}))})]})})},components_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonData[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var index_stories={title:"components/Modal",component:components_Modal,parameters:{layout:"centered"}},Common={args:{title:"확인하시겠습니까?",buttons:[{label:"확인",onClick:function onClick(){console.log("OK")}},{label:"닫기",onClick:function onClick(){console.log("Close")}}],content:"변경사항을 적용합니다!",onClose:function onClose(){console.log("onClose")}}};Common.parameters=_objectSpread2(_objectSpread2({},Common.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Common$parameters=Common.parameters)||void 0===_Common$parameters?void 0:_Common$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    title: '확인하시겠습니까?',\n    buttons: [{\n      label: '확인',\n      onClick: () => {\n        console.log('OK');\n      }\n    }, {\n      label: '닫기',\n      onClick: () => {\n        console.log('Close');\n      }\n    }],\n    content: '변경사항을 적용합니다!',\n    onClose: () => {\n      console.log('onClose');\n    }\n  }\n}"},null===(_Common$parameters2=Common.parameters)||void 0===_Common$parameters2||null===(_Common$parameters2$d=_Common$parameters2.docs)||void 0===_Common$parameters2$d?void 0:_Common$parameters2$d.source)})});var __namedExportsOrder=["Common"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);