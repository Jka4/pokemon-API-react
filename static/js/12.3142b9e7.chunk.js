(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[12],{138:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var i=n(9),s=n(3),c=n(113),a=n.n(c),r=n(115),l=n(23),o=n(0),j=n(2),d=n(24),m=n(25),b=n(83),h=n(73),u=n.n(h),O=function(e){var t=e.stats,n=e.weight,i=void 0!==t&&0!==(null===t||void 0===t?void 0:t.length);return Object(s.jsx)("div",{className:"stats",children:Object(s.jsxs)(b.a,{elevation:3,className:"statsUL",children:[Object(s.jsx)("div",{className:"skills_title",children:"Stats"}),i?t.map((function(e){return Object(s.jsxs)("li",{className:"statsLI",children:[e.stat.name,": ",e.base_stat]},e.stat.name)})):Object(s.jsx)(h.SkeletonTheme,{color:"#53aeff",highlightColor:"#0066be",children:[1,2,3,4,5,6].map((function(e){return Object(s.jsx)("p",{children:Object(s.jsx)(u.a,{height:15,width:100})},e)}))}),i&&Object(s.jsxs)("li",{className:"statsLI",children:["weight: ",n," kg"]})]})})},v=function(e){var t=e.abilities,n=void 0===t?[]:t;return Object(s.jsx)("div",{className:"abilities",children:Object(s.jsxs)(b.a,{elevation:3,className:"abilitiesUL",children:[Object(s.jsx)("div",{className:"skills_title",children:"Abilities"}),0!==n.length?n.map((function(e){return Object(s.jsxs)("li",{className:"abilitiesLI",children:["- ",e.ability.name]},e.ability.name)})):Object(s.jsx)(h.SkeletonTheme,{color:"#53aeff",highlightColor:"#0066be",children:[1,2,3,4,5,6].map((function(e){return Object(s.jsx)("p",{children:Object(s.jsx)(u.a,{height:15,width:100})},e)}))})]})})},x=n(17),p=n(118),f=n.n(p),g=function(e){var t=e.currentPokemon,n=e.pokemonArr,i=Object(o.useState)([]),c=Object(l.a)(i,2),a=c[0],r=c[1];Object(o.useMemo)((function(){var e=f()(n,(function(e){return e.name===t})),i=[];null===e||void 0===e||e.chain.forEach((function(e){var t,s,c,a=e.species_name;e.image=(null===(t=f()(n,(function(e){return e.name===a})))||void 0===t?void 0:t.image)||"",e.id=(null===(s=f()(n,(function(e){return e.name===a})))||void 0===s?void 0:s.id)||"",e.placeholderBase64=(null===(c=f()(n,(function(e){return e.name===a})))||void 0===c?void 0:c.placeholderBase64)||"",i.push(e)})),r(i)}),[t,n]);var j=function(){return Object(s.jsx)("div",{className:"formsTitle",children:a.length>=2?Object(s.jsx)("span",{children:"All forms:"}):Object(s.jsx)("span",{children:"Form:"})})};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsx)("div",{className:"evolutionForms",children:a.map((function(e){return Object(s.jsx)(x.b,{to:"/detailedPage/pokemon/".concat(e.species_name),"data-pokemon_id":e.id,children:Object(s.jsxs)(b.a,{elevation:3,className:t===e.species_name?"evoForm currentPokemon":"evoForm",children:[Object(s.jsx)("img",{src:e.image,className:"evoFormImg deBlur",alt:"evoFormImg",loading:"lazy"}),Object(s.jsx)("div",{className:"pokemonName",children:e.species_name})]})},e.id)}))})]})},k=function(e){var t=e.sprites,n=void 0===t?{}:t;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"imagesLine",children:Object(s.jsx)(o.Suspense,{fallback:Object(s.jsx)(s.Fragment,{children:[1,2,3,4].map((function(e){return Object(s.jsx)(b.a,{elevation:3,className:"block",children:Object(s.jsx)(h.SkeletonTheme,{color:"#6cff79",highlightColor:"yellow",children:Object(s.jsx)(u.a,{className:"solo",circle:!0,height:60,width:60})})},e)}))}),children:Object.keys(n).map((function(e){return Object(s.jsx)("div",{children:n[e]&&Object(s.jsx)(b.a,{elevation:3,className:"block",children:Object(s.jsx)("img",{src:n[e],alt:n[e],className:n[e]})})},e)}))})})})},N=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,147))})),w=function(e){var t=e.bigImage,n=void 0===t?{}:t,i=n.imageHQ,c=n.placeholderBase64;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(b.a,{elevation:3,style:{overflow:"hidden"},children:Object(s.jsx)(N,{url:i,cn:"bigImage",fallback:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("img",{src:c,className:"bigImage ",alt:"",style:{filter:"blur(18px)"}})})}})})})},F=n(119),I=n.n(F),y=(n(138),Object(d.b)((function(e){return{pokemonArr:e.pokemonArr}}))((function(e){var t=e.pokemonArr,n=void 0===t?[]:t,i=Object(o.useState)(),c=Object(l.a)(i,2),d=c[0],m=c[1],b=Object(o.useState)(),h=Object(l.a)(b,2),u=h[0],x=h[1],p=Object(j.g)().pathname.split("/").pop(),f=u||{},N=f.abilities,F=f.stats,y=f.weight,S=f.sprites;return Object(o.useEffect)((function(){x({});var e="https://pokeapi.co/api/v2/pokemon/".concat(p,"/");I.a.get(e).then(function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete(n=t.data).sprites.other,delete n.sprites.versions,x(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[p]),Object(o.useEffect)((function(){var e=n.find((function(e){return e.name===p}));m(e)}),[p,n]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"detailedPage",children:[Object(s.jsx)("div",{className:"name",children:p||"POKEMON"}),Object(s.jsx)(g,{currentPokemon:p,pokemonArr:n}),Object(s.jsxs)("div",{className:"mainInformation",children:[Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsx)(O,{weight:y,stats:F}),Object(s.jsx)(v,{abilities:N})]}),Object(s.jsx)(w,{bigImage:d})]}),Object(s.jsx)(k,{sprites:S})]})})})));t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.jsx)(d.a,{store:m.a,children:Object(s.jsx)(y,Object(i.a)({},e))})}}}]);
//# sourceMappingURL=12.3142b9e7.chunk.js.map