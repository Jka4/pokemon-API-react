(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[14],{177:function(e,a,n){"use strict";n.r(a);var c=n(9),t=n(3),r=n(23),s=n(0),l=n.n(s),o=n(24),i=n(25),j=n(26),d=n(139),m=n(17),b=n(83),O=(n(93),Object(s.lazy)((function(){return n.e(1).then(n.bind(null,147))}))),h=function(e){var a=e.pokemonDataArray,n=void 0===a?[]:a,c=Object(s.useState)([]),l=Object(r.a)(c,2),o=l[0],i=l[1],h=Object(s.useState)(0),p=Object(r.a)(h,2),u=p[0],x=p[1];Object(s.useEffect)((function(){v()}),[]);var v=function(){for(var e=[],a=u;a<=u+20;a++)e.push(n[a]);i((function(a){return[].concat(Object(j.a)(a),e)})),x(o.length+1+20)};return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("section",{className:"main",children:Object(t.jsx)(d.a,{dataLength:o.length,next:v,hasMore:o.length<758,loader:Object(t.jsx)("h4",{children:"Loading..."}),className:"allPokemonWrapper",endMessage:Object(t.jsx)("p",{className:"pokemon-end",children:"No more pokemon :("}),children:o.map((function(e){return Object(t.jsx)(m.b,{to:"/detailedPage/pokemon/".concat(e.name),"data-pokemon_id":e.id,children:Object(t.jsxs)(b.a,{elevation:3,className:"smallPokemonCard",children:[Object(t.jsx)("div",{className:"pokemonLogo",children:Object(t.jsx)(O,{url:e.imageHQ||e.image,cn:"pokemonImageCard",fallback:(a=e.placeholderBase64,Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("img",{src:a,className:"placeholderBase64 deBlur",alt:"placeholderBase64"})}))})}),Object(t.jsx)("div",{className:"pokemonName",children:e.name})]})},e.id);var a}))})})})},p=(n(140),Object(s.lazy)((function(){return n.e(1).then(n.bind(null,147))}))),u=function(e){var a=e.pokemonDataArray,n=void 0===a?[]:a;return Object(t.jsx)("div",{className:"wrapper",children:n.map((function(e,a){return Object(t.jsx)(l.a.Fragment,{children:Object(t.jsx)(m.b,{to:"/detailedPage/pokemon/".concat(null===e||void 0===e?void 0:e.name),"data-pokemon_id":null===e||void 0===e?void 0:e.id,children:Object(t.jsx)(p,{url:null===e||void 0===e?void 0:e.image,cn:"pokemonImageCard",fallback:(n=null===e||void 0===e?void 0:e.placeholderBase64,Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("img",{loading:"lazy",src:n,className:"placeholderBase64 deBlur",alt:"placeholderBase64"})}))})},a)},a);var n}))})},x=n(142),v=n.n(x),g=n(141),k=n.n(g),f=Object(o.b)((function(e){return{pokemonDataArray:e.pokemonArr}}))((function(e){var a=e.pokemonDataArray,n=void 0===a?[]:a,c=Object(s.useState)(!0),l=Object(r.a)(c,2),o=l[0],i=l[1];return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"viewType",children:Object(t.jsx)("div",{className:"viewTypeInner",children:Object(t.jsx)("div",{className:"innerBlock",onClick:function(){return i(!o)},children:o?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{children:"Catalog view:"}),Object(t.jsx)("span",{className:"separator",children:"|"}),Object(t.jsx)("div",{className:"catalog",children:Object(t.jsx)(v.a,{})})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{children:"List view:"}),Object(t.jsx)("span",{className:"separator",children:"|"}),Object(t.jsx)("div",{className:"list",children:Object(t.jsx)(k.a,{})})]})})})}),o?Object(t.jsx)(u,{pokemonDataArray:n}):Object(t.jsx)(h,{pokemonDataArray:n})]})}));a.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(t.jsx)(o.a,{store:i.a,children:Object(t.jsx)(f,Object(c.a)({},e))})}},93:function(e,a,n){}}]);
//# sourceMappingURL=14.80084a52.chunk.js.map