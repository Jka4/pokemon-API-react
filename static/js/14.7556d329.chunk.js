(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[14],{191:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(2),c=t(24),o=t(0),s=t.n(o),i=t(25),l=t(23),d=t(27),j=t(154),u=t(16),p=t(55),h=t(183),m=(t(98),Object(o.lazy)((function(){return t.e(0).then(t.bind(null,161))}))),b=function(e){var n=e.pokemonDataArray,t=void 0===n?[]:n,a=Object(o.useState)([]),s=Object(c.a)(a,2),i=s[0],l=s[1],b=Object(o.useState)(0),O=Object(c.a)(b,2),v=O[0],f=O[1];Object(o.useEffect)((function(){x()}),[]);var x=function(){for(var e=[],n=v;n<=v+20;n++)e.push(t[n]);l((function(n){return[].concat(Object(d.a)(n),e)})),f(i.length+1+20)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"main",children:Object(r.jsx)(j.a,{dataLength:i.length,next:x,hasMore:i.length<758,loader:Object(r.jsx)("h4",{children:"Loading..."}),className:"allPokemonsWrapper",endMessage:Object(r.jsx)("p",{className:"pokemon-end",children:"No more pokemons :("}),children:i.map((function(e){return Object(r.jsx)(u.b,{to:"/detailedPage/pokemon/".concat(e.name),"data-pokemon_id":e.id,onClick:function(){return n=e.id,void Object(p.b)(n);var n},children:Object(r.jsxs)(h.a,{elevation:3,className:"smallPokemonCard",children:[Object(r.jsx)("div",{className:"pokemonLogo",children:Object(r.jsx)(m,{url:e.imageHQ||e.image,cn:"pokemonImageCard",fallback:(n=e.placeholderBase64,Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{src:n,className:"placeholderBase64",alt:"placeholderBase64"})}))})}),Object(r.jsx)("div",{className:"pokemonName",children:e.name})]})},e.id);var n}))})})})},O=(t(155),Object(o.lazy)((function(){return t.e(0).then(t.bind(null,161))}))),v=function(e){var n=e.pokemonDataArray,t=void 0===n?[]:n;return Object(r.jsx)("div",{className:"wrapper",children:t.map((function(e,n){return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(u.b,{to:"/detailedPage/pokemon/".concat(null===e||void 0===e?void 0:e.name),"data-pokemon_id":null===e||void 0===e?void 0:e.id,onClick:function(){return n=e.id,void Object(p.b)(n);var n},children:Object(r.jsx)(O,{url:null===e||void 0===e?void 0:e.image,cn:"pokemonImageCard",fallback:(t=null===e||void 0===e?void 0:e.placeholderBase64,Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{loading:"lazy",src:t,className:"placeholderBase64",alt:"placeholderBase64"})}))})},n)},n);var t}))})},f=t(157),x=t.n(f),k=t(156),g=t.n(k),N=Object(i.b)((function(e){return{pokemonDataArray:e.pokemonsArr}}))((function(e){var n=e.pokemonDataArray,t=void 0===n?[]:n,a=Object(o.useState)(!1),s=Object(c.a)(a,2),i=s[0],l=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"viewType",children:Object(r.jsx)("div",{className:"viewTypeInner",children:Object(r.jsx)("div",{className:"innerBlock",onClick:function(){return l(!i)},children:i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:"Catalog view:"}),Object(r.jsx)("span",{className:"separator",children:"|"}),Object(r.jsx)("div",{className:"catalog",children:Object(r.jsx)(x.a,{})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:"List view:"}),Object(r.jsx)("span",{className:"separator",children:"|"}),Object(r.jsx)("div",{className:"list",children:Object(r.jsx)(g.a,{})})]})})})}),i?Object(r.jsx)(v,{pokemonDataArray:t}):Object(r.jsx)(b,{pokemonDataArray:t})]})}));n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.jsx)(i.a,{store:l.a,children:Object(r.jsx)(N,Object(a.a)({},e))})}},55:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var a=t(67),r=t.n(a),c=t(68),o=t(23),s=t(69),i=t.n(s),l=function(){var e=Object(c.a)(r.a.mark((function e(){var n,t,a,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:806,t=Math.floor(1+Math.random()*n),a="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),o.a.dispatch({type:"RANDOM_POKEMON_FETCHING_START"}),e.next=6,i.a.get(a).then(function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.data,e.next=3,o.a.dispatch({type:"ADD_RANDOM_POKEMON",randomPokemons:t});case 3:return e.next=5,o.a.dispatch({type:"RANDOM_POKEMON_FETCHING_END"});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pokeapi.co/api/v2/pokemon/".concat(n,"/"),e.next=3,i.a.get(t).then(function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=n.data).sprites.other,delete t.sprites.versions,e.next=5,o.a.dispatch({type:"SET_DETAILS_PAGE",page:t});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},98:function(e,n,t){}}]);
//# sourceMappingURL=14.7556d329.chunk.js.map