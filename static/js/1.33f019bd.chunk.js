(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[1,15],{147:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(23),c=n(0),u=n.n(c),i=n(65),a=n(66),f=n(68),s=n(67),l=function(t){Object(f.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={error:null},t}return Object(a.a)(n,[{key:"componentDidCatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setState({error:t}),e.ErrorType="ReactError"}},{key:"render",value:function(){return this.state.error?Object(r.jsx)("div",{className:"errorBoundary",children:Object(r.jsx)("div",{className:"textErrorBoundary",children:"Ooops..."})}):this.props.children}}]),n}(u.a.PureComponent);e.default=function(t){var e=t.url,n=t.cn,u=t.fallback,i=Object(c.useState)(!1),a=Object(o.a)(i,2),f=a[0],s=a[1];return Object(c.useEffect)((function(){var t=new Image;return t.onload=function(){return s(!0)},t.src=e,function(){s(!1)}}),[e]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l,{children:[!f&&Object(r.jsx)(r.Fragment,{children:"function"===typeof u?u():u}),Object(r.jsx)("img",{src:e,alt:n,className:n,style:{display:f?"block":"none"},loading:"lazy"})]})})}},65:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},66:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},67:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return c(this,n)}}n.d(e,"a",(function(){return u}))},68:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=1.33f019bd.chunk.js.map