(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0,13],{288:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}t.d(r,"a",(function(){return n}))},289:function(e,r,t){"use strict";function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}t.d(r,"a",(function(){return o}))},294:function(e,r,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r){return!r||"object"!==c(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function u(e){return function(){var r,t=n(e);if(o()){var c=n(this).constructor;r=Reflect.construct(t,arguments,c)}else r=t.apply(this,arguments);return i(this,r)}}t.d(r,"a",(function(){return u}))},295:function(e,r,t){"use strict";function n(e,r){return(n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&n(e,r)}t.d(r,"a",(function(){return o}))},299:function(e,r,t){!function(e,r,t,n){"use strict";function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function i(e){var r=e.srcList,n=e.imgPromise,o=void 0===n?a({decode:!0}):n,i=e.useSuspense,u=void 0===i||i,d=t.useState(!0)[1],y=s(f(r)),b=y.join("");if(l[b]||(l[b]={promise:p(y,o),cache:"pending",error:null}),l[b].promise.then((function(e){l[b]=c(c({},l[b]),{},{cache:"resolved",src:e}),u||d(!1)})).catch((function(e){l[b]=c(c({},l[b]),{},{cache:"rejected",error:e}),u||d(!1)})),"resolved"===l[b].cache)return{src:l[b].src,isLoading:!1,error:null};if("rejected"===l[b].cache){if(u)throw l[b].error;return{isLoading:!1,error:l[b].error,src:void 0}}if(u)throw l[b].promise;return{isLoading:!0,src:void 0,error:null}}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var u="default"in t?t.default:t;n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var a=function(e){var r=e.decode,t=e.crossOrigin,n=void 0===t?"":t;return function(e){return new Promise((function(t,o){var c=new Image;n&&(c.crossOrigin=n),c.onload=function(){(void 0===r||r)&&c.decode?c.decode().then(t).catch(o):t()},c.onerror=o,c.src=e}))}},s=function(e){return e.filter((function(e){return e}))},f=function(e){return Array.isArray(e)?e:[e]},l={},p=function(e,r){var t=!1;return new Promise((function(n,o){var c=function(e){return r(e).then((function(){t=!0,n(e)}))};e.reduce((function(e,r){return e.catch((function(){if(!t)return c(r)}))}),c(e.shift())).catch(o)}))},d=function(e){return e};e.Img=function(e){var t=e.decode,n=e.src,o=void 0===n?[]:n,c=e.loader,s=void 0===c?null:c,f=e.unloader,l=void 0===f?null:f,p=e.container,y=void 0===p?d:p,b=e.loaderContainer,v=void 0===b?d:b,h=e.unloaderContainer,m=void 0===h?d:h,O=e.imgPromise,g=e.crossorigin,j=e.useSuspense,w=void 0!==j&&j,P=r(e,["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"]),E=i({srcList:o,imgPromise:O=O||a({decode:!(void 0!==t)||t,crossOrigin:g}),useSuspense:w}),S=E.src,_=E.isLoading;return S?y(u.createElement("img",Object.assign({src:S},P))):!w&&_?v(s):!w&&l?m(l):null},e.useImage=i,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(300),t(0),t(301))},300:function(e,r){e.exports=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}},301:function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},382:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),c=t(299),i=t(288),u=t(289),a=t(295),s=t(294),f=function(e){Object(a.a)(t,e);var r=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=r.call.apply(r,[this].concat(o))).state={error:null},e}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setState({error:e}),r.ErrorType="ReactError"}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",{className:"errorBoundary"},o.a.createElement("div",{className:"textErrorBoundary"},"Ooops...")):this.props.children}}]),t}(o.a.PureComponent);r.default=function(e){var r=function(e){var r=e.props,t=r.url,n=r.cn,i=Object(c.useImage)({srcList:t}).src;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{loading:"lazy",src:i,alt:n,className:n}))};return o.a.createElement(f,null,o.a.createElement(r,{props:e}))}}}]);
//# sourceMappingURL=0.f2981259.chunk.js.map