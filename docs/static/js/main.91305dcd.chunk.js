(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),s=n.n(c),r=n(3),l=n(11),i=n(4),o=(n(16),n(2)),j=function(){return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random").then((function(e){return e.json()})).then((function(e){return e.body.Word}))},d=(n(17),n(0)),u=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{className:"header__title",children:"Juego del ahorcado"})})},b=(n(19),function(e){return Object(d.jsxs)("section",{className:"dummy error-".concat(e.calcErrors()),children:[Object(d.jsx)("span",{className:"error-13 eye"}),Object(d.jsx)("span",{className:"error-12 eye"}),Object(d.jsx)("span",{className:"error-11 line"}),Object(d.jsx)("span",{className:"error-10 line"}),Object(d.jsx)("span",{className:"error-9 line"}),Object(d.jsx)("span",{className:"error-8 line"}),Object(d.jsx)("span",{className:"error-7 line"}),Object(d.jsx)("span",{className:"error-6 head"}),Object(d.jsx)("span",{className:"error-5 line"}),Object(d.jsx)("span",{className:"error-4 line"}),Object(d.jsx)("span",{className:"error-3 line"}),Object(d.jsx)("span",{className:"error-2 line"}),Object(d.jsx)("span",{className:"error-1 line"})]})}),h=(n(9),n(20),function(e){return Object(d.jsx)(d.Fragment,{children:e.isLoading?Object(d.jsx)("span",{className:"loading"}):null})}),m=function(e){return Object(d.jsxs)("div",{className:"solution",children:[Object(d.jsx)("h2",{className:"title",children:"Soluci\xf3n:"}),Object(d.jsx)(h,{isLoading:e.isLoading}),Object(d.jsx)("ul",{className:"letters",children:e.renderSolutionLetters()})]})},O=function(e){return Object(d.jsxs)("div",{className:"feedback",children:[Object(d.jsx)("h2",{className:"title",children:"Letras falladas:"}),Object(d.jsx)("ul",{className:"letters",children:e.renderErrorLetters()})]})},x=(n(21),function(e){return Object(d.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("label",{className:"title",htmlFor:"last-letter",children:"Escribe una letra:"}),Object(d.jsx)("input",{onChange:e.handleLastLetter,autoComplete:"off",className:"form__input",maxLength:"1",type:"text",name:"last-letter",id:"last-letter",value:e.lastLetter})]})});n(22);var f=function(e){return Object(d.jsx)("div",{className:"modal ".concat(e.hidden),children:Object(d.jsx)("div",{className:"modal__dialog",children:Object(d.jsxs)("div",{className:"modal__content",children:[Object(d.jsxs)("header",{className:"modal__header",children:[Object(d.jsx)("h2",{className:"modal__title",children:13===e.calcErrors()?"Has perdido :(":e.hasWon?"Has ganado!! :D":void 0}),Object(d.jsx)("div",{onClick:function(){e.handleModalVisibility()},children:Object(d.jsx)("span",{className:"modal__close icon fas fa-times"})})]}),Object(d.jsxs)("section",{className:"modal__contents_section",children:[e.children,Object(d.jsx)("button",{className:"modal__button",onClick:function(){e.handleButton()},children:"Jugar de nuevo"})]})]})})})},p=function(e){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{children:[Object(d.jsx)(m,{renderSolutionLetters:e.renderSolutionLetters,isLoading:e.isLoading}),Object(d.jsx)(O,{renderErrorLetters:e.renderErrorLetters}),Object(d.jsx)(x,{handleLastLetter:e.handleLastLetter,lastLetter:e.lastLetter})]}),Object(d.jsx)(b,{calcErrors:e.calcErrors}),13===e.calcErrors()?Object(d.jsx)(f,{calcErrors:e.calcErrors,hasWon:e.hasWon,handleButton:e.handleButton,handleModalVisibility:e.handleModalVisibility,hidden:e.hidden,children:Object(d.jsxs)("p",{children:["El resultado era: ",e.word]})}):e.hasWon?Object(d.jsx)(f,{calcErrors:e.calcErrors,hasWon:e.hasWon,handleButton:e.handleButton,handleModalVisibility:e.handleModalVisibility,hidden:e.hidden,children:Object(d.jsx)("p",{children:"Felicidades"})}):void 0]})},N=(n(23),function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"footer__menu",children:[Object(d.jsx)("li",{className:"footer__menu-item",children:Object(d.jsx)(r.c,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/",children:"A jugar"})}),Object(d.jsx)("li",{className:"footer__menu-item",children:Object(d.jsx)(r.c,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/instructions",children:"\xbfC\xf3mo se juega?"})}),Object(d.jsx)("li",{className:"footer__menu-item",children:Object(d.jsx)(r.c,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/options",children:"M\xe1s opciones"})})]})}),Object(d.jsx)("small",{className:"footer__copy",children:"\xa9 Adalab"})]})}),_=(n(24),function(e){return Object(d.jsxs)("div",{className:"instructions_page",children:[Object(d.jsxs)("section",{className:"instructions",children:[Object(d.jsx)("h2",{children:"Instrucciones del juego:"}),Object(d.jsx)("p",{children:"Hay dos modalidades para jugar al juego del ahorcado: "}),Object(d.jsx)("h4",{className:"instructions_headings",children:"1.) Tratar de adivinar una palabra aleatoria:"}),Object(d.jsxs)("p",{children:["\xdanicamente habr\xe1 que ir introduciendo una por una letras en el campo de texto hasta que se complete la palabra. Pero cuidado de no fallar m\xe1s de 13 veces ",Object(d.jsx)("span",{role:"img","aria-label":"emoji calavera",title:"emoji calavera",children:"\ud83d\udc80"})]}),Object(d.jsx)("h4",{className:"instructions_headings",children:"2. ) Jugar en grupo:"}),Object(d.jsxs)("p",{children:["En la pesta\xf1a de ",Object(d.jsx)(r.b,{to:"/options",children:"M\xe1s opciones"})," se introducir\xe1 una palabra (secretamente). A continuaci\xf3n habr\xe1 que dirigirse de nuevo a la pesta\xf1a",Object(d.jsx)(r.b,{to:"/",children:" A jugar"}),". All\xed el resto de personas tratar\xe1n de adivinar dicha palabra."]})]}),Object(d.jsx)(b,{calcErrors:e.calcErrors})]})}),g=(n(25),function(e){return Object(d.jsxs)("section",{className:"options",children:[Object(d.jsxs)("div",{className:"options_container",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)("label",{className:"title",htmlFor:"word",children:"Escribe aqu\xed la palabra que hay que adivinar:"}),Object(d.jsx)("input",{onChange:function(t){console.log(t.target.value),e.handleInput(t.target.value)},autoFocus:!0,autoComplete:"off",className:"form__input",maxLength:"15",type:"text",id:"word",name:"word"})]}),Object(d.jsx)(r.b,{className:"options_play_button",to:"/",children:" A jugar"})]}),Object(d.jsx)(b,{calcErrors:e.calcErrors})]})}),v=(n(26),function(e){return Object(d.jsxs)("div",{className:"nofoundpage",children:[Object(d.jsxs)("div",{className:"nofoundpage_message",children:[Object(d.jsx)("h2",{children:"Parece que aqu\xed no hay nada"}),Object(d.jsx)(r.b,{to:"/",children:"Volver al inicio"})]}),Object(d.jsx)(b,{calcErrors:e.calcErrors})]})});var L=function(){var e=1,t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),b=Object(i.a)(r,2),h=b[0],m=b[1],O=Object(a.useState)([]),x=Object(i.a)(O,2),f=x[0],L=x[1],E=Object(a.useState)(!0),y=Object(i.a)(E,2),k=y[0],S=y[1],w=Object(a.useState)(!1),A=Object(i.a)(w,2),C=A[0],q=A[1],M=Object(a.useState)(""),W=Object(i.a)(M,2),B=W[0],V=W[1],F=Object(a.useState)(!1),J=Object(i.a)(F,2),I=J[0],D=J[1];Object(a.useEffect)((function(){j().then((function(e){S(!1),m(e)}))}),[]),Object(a.useEffect)((function(){("hidden"===B&&C||"hidden"===B&&I)&&V("")}),[C,B,I]);var H=function(e){return f.find((function(t){return t===(e=e.toLocaleLowerCase().replace(/[\xe0\xe1\xe2\xe3\xe4\xe5]/,"a").replace(/[\xe8\xe9\xea\xeb]/,"e").replace(/[\xec\xed\xee\xef]/,"i").replace(/[\xf2\xf3\xf4\xf6]/,"o").replace(/[\xf9\xfa\xfb\xfc]/,"u").replace(/[\xe7]/,"c"))}))},P=function(){return f.filter((function(e){return!h.includes(e)}))},z=function(){return P().length},R=function(){var t=h.split("");t.forEach((function(t){H(t)&&(e++,console.log(e))})),e===t.length&&q(!0)};return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(u,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(p,{renderSolutionLetters:function(){return h.split("").map((function(e,t){return H(e)?Object(d.jsx)("li",{className:"letter",children:e},t):Object(d.jsx)("li",{className:"letter"},t)}))},renderErrorLetters:function(){return P().map((function(e,t){return Object(d.jsx)("li",{className:"letter",children:e},t)}))},handleLastLetter:function(e){(s(e.target.value),function(e){var t,n=new RegExp("^[a-zA-Z\xc0-\xff\xf1\xd1]$");t=!!e&&!!n.test(e);return t}(e.target.value))&&(f.find((function(t){return t===e.target.value}))||(R(),L([].concat(Object(l.a)(f),[e.target.value.toLocaleLowerCase()])),console.log(z()),12===z()&&(console.log("ha perdido"),D(!0))))},lastLetter:c,calcErrors:z,isLoading:k,word:h,hasWon:C,handleModalVisibility:function(){V("hidden"),D(!1),q(!1)},hidden:B,handleButton:function(){j().then((function(e){S(!1),m(e)})),s(""),L([]),q(!1),V("hidden")}})}),Object(d.jsx)(o.a,{path:"/instructions",element:Object(d.jsx)(_,{calcErrors:z})}),Object(d.jsx)(o.a,{path:"/options",element:Object(d.jsx)(g,{calcErrors:z,handleInput:function(e){m(e),s(""),L([])}})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(v,{calcErrors:z})})]}),Object(d.jsx)(N,{})]})};s.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.91305dcd.chunk.js.map