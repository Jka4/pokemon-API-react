(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[12],{156:function(e,n,t){"use strict";t.r(n);var a,r,c,i,l,o,u,p,d,s,m,f,x=t(24),g=t(26),h=t(0),b=t.n(h),j=t(28),v=t(127),O=t(16),y=t(27),E=t(104),w=t(65),k=t(25),B=function(){var e=Object(h.useState)([]),n=Object(g.a)(e,2),t=n[0],a=n[1],r=Object(h.useState)(0),c=Object(g.a)(r,2),i=c[0],l=c[1],o=Object(y.c)((function(e){return e.pokemonArr}));Object(h.useEffect)((function(){u()}),[]);var u=function(){for(var e=[],n=i;n<=i+34;n++)i<=713&&e.push(o[n]);a((function(n){return[].concat(Object(j.a)(n),e)})),l(t.length+1+34)};return b.a.createElement(b.a.Fragment,null,b.a.createElement(z,{dataLength:t.length,next:u,hasMore:i<=t.length,loader:b.a.createElement("h4",null,"Loading..."),endMessage:b.a.createElement(C,null,"Don't have more pokemon :(")},t.map((function(e){return b.a.createElement(O.b,{to:"/detailedPage/pokemon/".concat(e.name),key:e.id},b.a.createElement(P,{elevation:3},b.a.createElement(S,null,b.a.createElement(w.a,{url:e.imageHQ||e.image,cn:"pokemonImageCard deBlur",fallback:(n=e.placeholderBase64,b.a.createElement("img",{src:n,className:"placeholderBase64 deBlur",alt:"placeholderBase64"}))})),b.a.createElement(I,null,null===e||void 0===e?void 0:e.name)));var n}))))},z=Object(k.a)(v.a)(a||(a=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: 100vh;\n  max-width: 900px;\n  margin: 50px auto 100px;\n"]))),S=k.a.div(r||(r=Object(x.a)(["\n  width: 100%;\n  min-height: 160px;\n  text-align: center;\n\n  img,\n  svg {\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n  }\n"]))),P=Object(k.a)(E.a)(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 10px;\n  border-radius: 10px;\n  background: #4c4cffd9 !important;\n  cursor: pointer;\n  width: 160px;\n  min-height: 240px;\n  object-fit: cover;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),C=k.a.p(i||(i=Object(x.a)(["\n  margin-top: 40px;\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n"]))),I=k.a.div(l||(l=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: black;\n  font-size: 24px;\n"]))),A=function(){var e=Object(y.c)((function(e){return e.pokemonArr}));return b.a.createElement(T,null,e.map((function(e,n){return b.a.createElement(O.b,{to:"/detailedPage/pokemon/".concat(null===e||void 0===e?void 0:e.name),key:n},b.a.createElement("img",{src:e.image,alt:"img",loading:"lazy"}))})))},T=k.a.div(o||(o=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 50px;\n  margin-bottom: 100px;\n  width: 100%;\n  max-width: 100vw;\n\n  a {\n    box-shadow: 0.5px 0 0 0 red, 0 0.5px 0 0 red, 0.5px 0.5px 0 0 red, 0.5px 0 0 0 red inset, 0 0.5px 0 0 red inset;\n    overflow: hidden;\n    width: 65px;\n    height: 65px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n\n    &:hover {\n      background: #ff000099;\n      transform: scale(1.2);\n    }\n  }\n"]))),D=t(129),F=t.n(D),J=t(128),L=t.n(J),M=function(e){var n=e.changePageType,t=e.typeIsBig;return b.a.createElement(Q,null,b.a.createElement(R,{onClick:function(){return n()}},b.a.createElement(N,null,t?"Big grid":"Small grid"),b.a.createElement(H,null,"|"),b.a.createElement(q,null,t?b.a.createElement(L.a,null):b.a.createElement(F.a,null))))},N=k.a.span(u||(u=Object(x.a)(["\n  font-size: 24px;\n  margin-right: 5px;\n"]))),H=k.a.span(p||(p=Object(x.a)(["\n  margin-top: 2px;\n  margin-right: 10px;\n  font-size: 24px;\n"]))),Q=k.a.div(d||(d=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  width: 90%;\n"]))),R=k.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 5px 15px 5px 15px;\n  min-width: 200px;\n  color: black;\n  text-decoration: none;\n\n  &:hover {\n    box-shadow: 5px 3px 11px 1px #000000;\n  }\n\n  &:active {\n    box-shadow: 0 1px 0 #00823f;\n  }\n"]))),q=k.a.div(m||(m=Object(x.a)(["\n  margin-top: 4px;\n  cursor: pointer;\n  width: 20px;\n"]))),G=k.a.div(f||(f=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 100px;\n  width: 100%;\n  user-select: none;\n"])));n.default=b.a.memo((function(){var e=Object(h.useState)(!0),n=Object(g.a)(e,2),t=n[0],a=n[1];return b.a.createElement(G,null,b.a.createElement(M,{typeIsBig:t,changePageType:function(){return a(!t)}}),t?b.a.createElement(B,null):b.a.createElement(A,null))}))},65:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a,r,c,i,l=t(24),o=t(26),u=t(0),p=t.n(u),d=t(66),s=t(67),m=t(69),f=t(68),x=t(25),g=function(e){Object(m.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={error:null},e}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e}),n.ErrorType="ReactError"}},{key:"render",value:function(){return this.state.error?p.a.createElement(h,null,p.a.createElement(b,null,"Ooops...")):this.props.children}}]),t}(p.a.PureComponent),h=x.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),b=x.a.div(r||(r=Object(l.a)(["\n  font-size: 14px;\n  color: #ff3527;\n"]))),j=function(e){var n=e.url,t=void 0===n?"":n,a=e.cn,r=e.fallback,c=Object(u.useState)(!1),i=Object(o.a)(c,2),l=i[0],d=i[1];return Object(u.useEffect)((function(){var e=new Image;return e.onload=function(){return d(!0)},e.src=t,function(){d(!1)}}),[t]),p.a.createElement(p.a.Fragment,null,p.a.createElement(g,null,p.a.createElement(O,{ready:l},r),p.a.createElement(v,{src:t,alt:a,className:a,loading:"lazy",ready:l})))},v=x.a.img(c||(c=Object(l.a)(["\n  display: ",";\n"])),(function(e){return e.ready?"block":"none"})),O=x.a.div(i||(i=Object(l.a)(["\n  display: ",";\n"])),(function(e){return e.ready?"none":"block"}))}}]);
//# sourceMappingURL=12.ce54b426.chunk.js.map