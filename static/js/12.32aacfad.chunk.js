(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[12],{137:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var i=n(9),s=n(3),c=n(112),a=n.n(c),r=n(114),l=n(23),o=n(0),j=n(2),d=n(24),b=n(25),m=n(83),u=n(73),h=n.n(u),O=function(e){var t=e.stats,n=e.weight,i=void 0!==t&&0!==(null===t||void 0===t?void 0:t.length);return Object(s.jsx)("div",{className:"stats",children:Object(s.jsxs)(m.a,{elevation:3,className:"statsUL",children:[Object(s.jsx)("div",{className:"skills_title",children:"Stats"}),i?t.map((function(e){return Object(s.jsxs)("li",{className:"statsLI",children:[e.stat.name,": ",e.base_stat]},e.stat.name)})):Object(s.jsx)(u.SkeletonTheme,{color:"#53aeff",highlightColor:"#0066be",children:[1,2,3,4,5,6].map((function(e){return Object(s.jsx)("p",{children:Object(s.jsx)(h.a,{height:15,width:100})},e)}))}),i&&Object(s.jsxs)("li",{className:"statsLI",children:["weight: ",n," kg"]})]})})},v=function(e){var t=e.abilities,n=void 0===t?[]:t;return Object(s.jsx)("div",{className:"abilities",children:Object(s.jsxs)(m.a,{elevation:3,className:"abilitiesUL",children:[Object(s.jsx)("div",{className:"skills_title",children:"Abilities"}),0!==n.length?n.map((function(e){return Object(s.jsxs)("li",{className:"abilitiesLI",children:["- ",e.ability.name]},e.ability.name)})):Object(s.jsx)(u.SkeletonTheme,{color:"#53aeff",highlightColor:"#0066be",children:[1,2,3,4,5,6].map((function(e){return Object(s.jsx)("p",{children:Object(s.jsx)(h.a,{height:15,width:100})},e)}))})]})})},f=function(e){var t=e.sprites,n=void 0===t?{}:t;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"imagesLine",children:Object(s.jsx)(o.Suspense,{fallback:Object(s.jsx)(s.Fragment,{children:[1,2,3,4].map((function(e){return Object(s.jsx)(m.a,{elevation:3,className:"block",children:Object(s.jsx)(u.SkeletonTheme,{color:"#6cff79",highlightColor:"yellow",children:Object(s.jsx)(h.a,{className:"solo",circle:!0,height:60,width:60})})},e)}))}),children:Object.keys(n).map((function(e){return Object(s.jsx)("div",{children:n[e]&&Object(s.jsx)(m.a,{elevation:3,className:"block",children:Object(s.jsx)("img",{src:n[e],alt:n[e],className:n[e]})})},e)}))})})})},p=n(17),x=n(117),g=n.n(x),k=function(e){var t=e.currentPokemon,n=e.pokemonArr,i=Object(o.useState)([]),c=Object(l.a)(i,2),a=c[0],r=c[1];Object(o.useMemo)((function(){var e=g()(n,(function(e){return e.name===t})),i=[];null===e||void 0===e||e.chain.forEach((function(e){var t,s,c,a=e.species_name;e.image=(null===(t=g()(n,(function(e){return e.name===a})))||void 0===t?void 0:t.image)||"",e.id=(null===(s=g()(n,(function(e){return e.name===a})))||void 0===s?void 0:s.id)||"",e.placeholderBase64=(null===(c=g()(n,(function(e){return e.name===a})))||void 0===c?void 0:c.placeholderBase64)||"",i.push(e)})),r(i)}),[t,n]);var j=function(){return Object(s.jsx)("div",{className:"formsTitle",children:a.length>=2?Object(s.jsx)("span",{children:"All forms:"}):Object(s.jsx)("span",{children:"Form:"})})};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsx)("div",{className:"evolutionForms",children:a.map((function(e){return Object(s.jsx)(p.b,{to:"/detailedPage/pokemon/".concat(e.species_name),children:Object(s.jsxs)(m.a,{elevation:3,className:t===e.species_name?"evoForm currentPokemon":"evoForm",children:[Object(s.jsx)("img",{src:e.image,className:"evoFormImg deBlur",alt:"evoFormImg",loading:"lazy"}),Object(s.jsx)("div",{className:"pokemonName",children:e.species_name})]})},e.id)}))})]})},N=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,146))})),w=function(e){var t=e.bigImage;return Object(s.jsx)(m.a,{elevation:3,style:{overflow:"hidden"},children:Object(s.jsx)(N,{url:(null===t||void 0===t?void 0:t.imageHQ)||"",cn:"bigImage",fallback:function(){return Object(s.jsx)("img",{src:null===t||void 0===t?void 0:t.placeholderBase64,className:"bigImage ",alt:"",style:{filter:"blur(18px)"}})}})})},F=n(118),I=n.n(F),y=(n(137),Object(d.b)((function(e){return{pokemonArr:e.pokemonArr}}))((function(e){var t=e.pokemonArr,n=void 0===t?[]:t,i=Object(o.useState)(),c=Object(l.a)(i,2),d=c[0],b=c[1],m=Object(o.useState)({}),u=Object(l.a)(m,2),h=u[0],p=u[1],x=h.abilities,g=h.stats,N=h.weight,F=h.sprites,y=Object(j.g)().pathname.split("/").pop();return Object(o.useEffect)((function(){p({});var e=!0,t="https://pokeapi.co/api/v2/pokemon/".concat(y,"/");return I.a.get(t).then(function(){var t=Object(r.a)(a.a.mark((function t(n){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete(i=n.data).sprites.other,delete i.sprites.versions,e&&p(i);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),function(){e=!1}}),[y]),Object(o.useEffect)((function(){var e=n.find((function(e){return e.name===y}));e&&b(e)}),[y,n]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"detailedPage",children:[Object(s.jsx)("div",{className:"name",children:y||"POKEMON"}),Object(s.jsx)(k,{currentPokemon:y,pokemonArr:n}),Object(s.jsxs)("div",{className:"mainInformation",children:[Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsx)(O,{weight:N,stats:g}),Object(s.jsx)(v,{abilities:x})]}),Object(s.jsx)(w,{bigImage:d})]}),Object(s.jsx)(f,{sprites:F})]})})})));t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.jsx)(d.a,{store:b.a,children:Object(s.jsx)(y,Object(i.a)({},e))})}}}]);
//# sourceMappingURL=12.32aacfad.chunk.js.map