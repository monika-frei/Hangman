(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{19:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(12),c=t.n(o),i=t(13),u=t(2),l=t(1);function f(){var n=Object(u.a)(['\n\n   \n    *,*::before,*::after {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n         -moz-osx-font-smoothing: grayscale;\n         margin: 0;\n        padding: 0;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-family: "Montserrat", sans-serif;\n        font-size: 1.6rem;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n    }\n']);return f=function(){return n},n}var m=Object(l.b)(f()),s={white:"#ffffff",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 60%)",black:"#080707",light:300,bold:500,fontFamilySecondary:'"Walter Turncoat", cursive',fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}};function d(){var n=Object(u.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"]);return d=function(){return n},n}var h=l.d.h1(d(),(function(n){return n.theme.grey200}),(function(n){return n.theme.fontSize.xl}),(function(n){return n.theme.bold}));function g(){var n=Object(u.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  padding: 15px;\n"]);return g=function(){return n},n}var p=l.d.p(g(),(function(n){return n.theme.grey200}),(function(n){return n.theme.fontSize.m}),(function(n){return n.theme.light}));function b(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n"]);return b=function(){return n},n}var x=l.d.div(b()),y=function(){return a.a.createElement(x,null,a.a.createElement(h,null,"HANGMAN"),a.a.createElement(p,null,"Find hidden word! Enter a letter"))},v=t(10),E=t(4);function w(){var n=Object(u.a)(["\n  fill: transparent;\n  stroke: #fff;\n  stroke-width: 4px;\n  stroke-linecap: round;\n"]);return w=function(){return n},n}var j=l.d.svg(w()),O=function(n){var e=n.errors;return a.a.createElement(j,{height:"250",width:"200"},a.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),a.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),a.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),a.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),e.length>0&&a.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),e.length>1&&a.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),e.length>2&&a.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),e.length>3&&a.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),e.length>4&&a.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),e.length>5&&a.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))};function k(){var n=Object(u.a)(["\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  margin: 0 10px;\n  border-bottom: 1px solid ",";\n  color: ",";\n  font-size: ",";\n  font-family: ",";\n"]);return k=function(){return n},n}function S(){var n=Object(u.a)(["\n  position: absolute;\n  right: 200px;\n  margin-left: 200px;\n  border: 1px solid ",";\n  padding: 10px;\n  max-width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return S=function(){return n},n}var z=l.d.div(S(),(function(n){return n.theme.grey300})),F=l.d.span(k(),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.fontSize.l}),(function(n){return n.theme.fontFamilySecondary})),M=function(n){var e=n.wrongLetters;return a.a.createElement(a.a.Fragment,null,e.length>0&&a.a.createElement(z,null,a.a.createElement(p,null,"Wrong letters:"),e.map((function(n){return a.a.createElement(F,{key:n},n)}))))};function L(){var n=Object(u.a)(["\n  width: 40px;\n  height: 40px;\n  align-self: center;\n  text-align: center;\n  margin: 0 10px;\n  border-bottom: 1px solid ",";\n  color: ",";\n  font-size: ",";\n  font-family: ",";\n"]);return L=function(){return n},n}function A(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return n},n}var C=l.d.div(A()),T=l.d.span(L(),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.fontSize.l}),(function(n){return n.theme.fontFamilySecondary})),W=function(n){var e=n.word,t=n.correctLetters;return a.a.createElement(C,null,e.split("").map((function(n,e){return a.a.createElement(T,{key:e},t.includes(n)?n:"")})))};function H(){var n=Object(u.a)(["\n  font-size: ",";\n  text-align: center;\n  color: ",";\n"]);return H=function(){return n},n}function J(){var n=Object(u.a)(["\n      transform: translate(-50%, -50px);\n    "]);return J=function(){return n},n}function N(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 10px 10px 0 0;\n  margin: 0 auto;\n  background-color: ",";\n  transition: transform 0.4s ease-in-out;\n\n  ","\n"]);return N=function(){return n},n}var Y=l.d.div(N(),(function(n){return n.theme.grey300}),(function(n){return n.show&&Object(l.c)(J())})),B=Object(l.d)(p)(H(),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.black})),G=function(n){var e=n.show;return a.a.createElement(Y,{show:e},a.a.createElement(B,null,"You have already checked this letter!"))};function I(){var n=Object(u.a)(["\n  margin-top: 20px;\n  padding: 20px;\n  background-color: ",";\n  border: none;\n  border-radius: 5px;\n  color: ",";\n  font-weight: ",";\n  letter-spacing: 1px;\n  cursor: pointer;\n"]);return I=function(){return n},n}function P(){var n=Object(u.a)(["\n  font-size: ",";\n  font-family: ",";\n"]);return P=function(){return n},n}function X(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding: 60px 100px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n"]);return X=function(){return n},n}function q(){var n=Object(u.a)(["\n  background-color: hsla(0, 0%, 60%, 0.8);\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return q=function(){return n},n}var D=l.d.div(q()),K=l.d.div(X(),(function(n){return n.theme.grey200}),(function(n){return n.theme.black})),Q=Object(l.d)(p)(P(),(function(n){return n.theme.fontSize.l}),(function(n){return n.theme.fontFamilySecondary})),R=l.d.button(I(),(function(n){return n.theme.grey200}),(function(n){return n.theme.black}),(function(n){return n.theme.bold})),U=function(n){var e=n.result,t=n.playAgain;return a.a.createElement(D,null,a.a.createElement(K,null,a.a.createElement(Q,null,"You ".concat(e)),a.a.createElement(R,{onClick:t},"Play Again!")))},V=function(n){n(!0),setTimeout((function(){return n(!1)}),2e3)},Z=function(n,e,t){var r=t.split(""),a="won";return r.forEach((function(e){n.includes(e)||(a="")})),6===e.length&&(a="lost"),a};function $(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return $=function(){return n},n}var _=l.d.div($()),nn=["react","components","veganism","frontend","backend","programming","vanilla","javascript"],en=nn[Math.floor(Math.random()*nn.length)],tn=function(){var n=Object(r.useState)(!0),e=Object(E.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),i=Object(E.a)(c,2),u=i[0],l=i[1],f=Object(r.useState)([]),m=Object(E.a)(f,2),s=m[0],d=m[1],h=Object(r.useState)(!1),g=Object(E.a)(h,2),p=g[0],b=g[1],x=Object(r.useState)(""),y=Object(E.a)(x,2),w=y[0],j=y[1],k=!0,S="";Object(r.useEffect)((function(){var n=function(n){var e=n.key,r=n.keyCode;if(t&&r>=65&&r<=90){var a=e.toLowerCase();en.includes(a)&&!u.includes(a)?l((function(n){return[].concat(Object(v.a)(n),[a])})):en.includes(a)&&u.includes(a)||s.includes(a)?V(b):d((function(n){return[].concat(Object(v.a)(n),[a])}))}};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[t,s,u]),Object(r.useEffect)((function(){o(k),j(S)})),"won"===Z(u,s,en)?(S="won",k=!1):"lost"===Z(u,s,en)&&(S="lost",k=!1);return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,a.a.createElement(O,{errors:s}),a.a.createElement(M,{wrongLetters:s})),a.a.createElement(_,null,a.a.createElement(W,{word:en,correctLetters:u})),a.a.createElement(G,{show:p?"show":""}),!t&&a.a.createElement(U,{result:w,playAgain:function(){o(!0),l([]),d([]),j([]),en=nn[Math.floor(Math.random()*nn.length)]}}))};function rn(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"]);return rn=function(){return n},n}var an=l.d.div(rn(),(function(n){return n.theme.black})),on=function(){return a.a.createElement(an,null,a.a.createElement(y,null),a.a.createElement(tn,null))};var cn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Hangman"),a.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Walter+Turncoat&display=swap"})),a.a.createElement(m,null),a.a.createElement(l.a,{theme:s},a.a.createElement(on,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(cn,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.94e29a03.chunk.js.map