(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[12],{156:function(e,n,t){"use strict";t.r(n);var a,r,i,c,l,o,u,p,d,s,m,f,x=t(16),h=t(26),b=t(0),g=t.n(b),j=t(28),v=t(127),O=t(18),E=t(27),w=t(104),y=t(62),k=t(17),B=function(){var e=Object(b.useState)([]),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(b.useState)(0),i=Object(h.a)(r,2),c=i[0],l=i[1],o=Object(E.c)((function(e){return e.pokemonArr}));Object(b.useEffect)((function(){u()}),[]);var u=function(){for(var e=[],n=c;n<=c+34;n++)c<=713&&e.push(o[n]);a((function(n){return[].concat(Object(j.a)(n),e)})),l(t.length+1+34)};return g.a.createElement(g.a.Fragment,null,g.a.createElement(z,{dataLength:t.length,next:u,hasMore:c<=t.length,loader:g.a.createElement("h4",null,"Loading..."),endMessage:g.a.createElement(A,null,"Don't have more pokemon :(")},t.map((function(e){return g.a.createElement(O.b,{to:"/detailedPage/pokemon/".concat(e.name),key:e.id},g.a.createElement(P,{elevation:3},g.a.createElement(S,null,g.a.createElement(y.a,{url:e.imageHQ||e.image,fallback:(n=e.placeholderBase64,g.a.createElement("img",{src:n,alt:"placeholderBase64"}))})),g.a.createElement(C,null,null===e||void 0===e?void 0:e.name)));var n}))))},z=Object(k.a)(v.a)(a||(a=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: 100vh;\n  max-width: 900px;\n  margin: 50px auto 100px;\n"]))),S=k.a.div(r||(r=Object(x.a)(["\n  width: 100%;\n  min-height: 160px;\n  text-align: center;\n\n  img,\n  svg {\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n  }\n"]))),P=Object(k.a)(w.a)(i||(i=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 10px;\n  border-radius: 10px;\n  background: #4c4cffd9 !important;\n  cursor: pointer;\n  width: 160px;\n  min-height: 240px;\n  object-fit: cover;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),A=k.a.p(c||(c=Object(x.a)(["\n  margin-top: 40px;\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n"]))),C=k.a.div(l||(l=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: black;\n  font-size: 24px;\n"]))),I=function(){var e=Object(E.c)((function(e){return e.pokemonArr}));return g.a.createElement(T,null,e.map((function(e,n){return g.a.createElement(O.b,{to:"/detailedPage/pokemon/".concat(null===e||void 0===e?void 0:e.name),key:n},g.a.createElement(y.a,{url:e.image,fallback:(t=e.placeholderBase64,g.a.createElement("img",{src:t,alt:"placeholderBase64"}))}));var t})))},T=k.a.div(o||(o=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 50px;\n  margin-bottom: 100px;\n  width: 100%;\n  max-width: 100vw;\n\n  a {\n    box-shadow: 0.5px 0 0 0 red, 0 0.5px 0 0 red, 0.5px 0.5px 0 0 red, 0.5px 0 0 0 red inset, 0 0.5px 0 0 red inset;\n    overflow: hidden;\n    width: 65px;\n    height: 65px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n\n    &:hover {\n      background: #ff000099;\n      transform: scale(1.2);\n    }\n  }\n"]))),D=t(129),F=t.n(D),J=t(128),L=t.n(J),M=function(e){var n=e.changePageType,t=e.typeIsBig;return g.a.createElement(R,null,g.a.createElement(q,{onClick:function(){return n()}},g.a.createElement(H,null,t?"Big grid":"Small grid"),g.a.createElement(Q,null,"|"),g.a.createElement(G,null,t?g.a.createElement(L.a,null):g.a.createElement(F.a,null))))},H=k.a.span(u||(u=Object(x.a)(["\n  font-size: 24px;\n  margin-right: 5px;\n"]))),Q=k.a.span(p||(p=Object(x.a)(["\n  margin-top: 2px;\n  margin-right: 10px;\n  font-size: 24px;\n"]))),R=k.a.div(d||(d=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  width: 90%;\n"]))),q=k.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 5px 15px 5px 15px;\n  min-width: 200px;\n  color: black;\n  text-decoration: none;\n\n  &:hover {\n    box-shadow: 5px 3px 11px 1px #000000;\n  }\n\n  &:active {\n    box-shadow: 0 1px 0 #00823f;\n  }\n"]))),G=k.a.div(m||(m=Object(x.a)(["\n  margin-top: 4px;\n  cursor: pointer;\n  width: 20px;\n"]))),K=k.a.div(f||(f=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 100px;\n  width: 100%;\n  user-select: none;\n"])));n.default=g.a.memo((function(){var e=Object(b.useState)(!0),n=Object(h.a)(e,2),t=n[0],a=n[1];return g.a.createElement(K,null,g.a.createElement(M,{typeIsBig:t,changePageType:function(){return a(!t)}}),t?g.a.createElement(B,null):g.a.createElement(I,null))}))},62:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var a,r,i,c,l,o=t(16),u=t(26),p=t(0),d=t.n(p),s=t(66),m=t(67),f=t(69),x=t(68),h=t(17),b=function(e){Object(f.a)(t,e);var n=Object(x.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={error:null},e}return Object(m.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e}),n.ErrorType="ReactError"}},{key:"render",value:function(){return this.state.error?d.a.createElement(g,null,d.a.createElement(j,null,"Ooops...")):this.props.children}}]),t}(d.a.PureComponent),g=h.a.div(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),j=h.a.div(r||(r=Object(o.a)(["\n  font-size: 14px;\n  color: #ff3527;\n"]))),v=function(e){var n=e.url,t=void 0===n?"":n,a=e.fallback,r=Object(p.useState)(!1),i=Object(u.a)(r,2),c=i[0],l=i[1];return Object(p.useEffect)((function(){var e=new Image;return e.onload=function(){return l(!0)},e.src=t,function(){l(!1)}}),[t]),d.a.createElement(d.a.Fragment,null,d.a.createElement(b,null,d.a.createElement(w,{src:t,loading:"lazy",ready:c}),d.a.createElement(O,{ready:c},a)))},O=h.a.div(i||(i=Object(o.a)(["\n  display: ",";\n  width: auto;\n  height: 100%;\n  filter: blur(18px);\n  overflow: hidden;\n"])),(function(e){return e.ready?"none":"block"})),E=Object(h.b)(c||(c=Object(o.a)(["\n    from {\n      filter: blur(18px);\n    }\n\n    to {\n      filter: blur(0px);\n    }\n"]))),w=h.a.img(l||(l=Object(o.a)(["\n  display: ",";\n  width: auto;\n  height: 100%;\n  animation: 0.2s ",";\n"])),(function(e){return e.ready?"block":"none"}),E)}}]);
//# sourceMappingURL=12.e84acd8c.chunk.js.map