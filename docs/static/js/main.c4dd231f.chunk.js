(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(8),c=s.n(i),a=s(5),o=s(3),r=(s(13),s(2)),l=function(){return fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{questions:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}}))})).catch((function(e){console.error(e),alert("Hubo un error en la p\xe1gina, vuelve a cargar la p\xe1gina y si no espera unos minutos.")}))},u=(s(14),s(0)),_=function(){return Object(u.jsxs)("div",{className:"instructions",children:[Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("button",{className:"instructions__button",children:"Volver"})}),Object(u.jsx)("section",{className:"instructions__section",children:Object(u.jsx)("p",{className:"instructions__section--paragraph",children:"Bienvenido a Tri-vi-al, este juego consiste en responder 10 preguntas basadas en matem\xe1ticas y ver el resultado de las preguntas una vez contestadas."})})]})},j=(s(16),function(e){console.log(e);return Object(u.jsxs)("section",{className:"landing",children:[Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"}),Object(u.jsx)("form",{className:"landing--form",children:Object(u.jsxs)("div",{className:"landing--form__containerButtons",children:[Object(u.jsx)(a.b,{to:"game",children:Object(u.jsx)("input",{className:"landing--form__containerButtons--button",type:"button",value:"Comenzar juego",onClick:function(){for(var t=0;t<e.data.length;t++){for(var s=[],n=0;n<e.data[t].incorrectAnswers.length;n++)s.push(e.data[t].incorrectAnswers[n]);s.push(e.data[t].correctAnswer),s.sort((function(){return Math.random()-.5})),e.optionAnswerTotal.push(s)}e.loadNextQuestionAndAnswers()}})}),Object(u.jsx)(a.b,{to:"instructions",children:Object(u.jsx)("input",{className:"landing--form__containerButtons--button",type:"button",value:"\xbfC\xf3mo se juega?"})})]})})]})}),m=(s(17),function(){return Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"})})}),b=function(){return Object(u.jsx)(u.Fragment,{children:"Maitane Abad Conde"})},d=function(e){console.log(e);var t=function(e){E(""),r(e.target.value),y(e.target.checked),J(e.target.value)},s=Object(n.useState)(""),i=Object(o.a)(s,2),c=i[0],r=i[1],l=Object(n.useState)("hidden"),_=Object(o.a)(l,2),j=_[0],b=_[1],d=Object(n.useState)("hidden"),h=Object(o.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),f=w[0],N=w[1],Q=Object(n.useState)(""),g=Object(o.a)(Q,2),v=g[0],A=g[1],S=Object(n.useState)(!1),k=Object(o.a)(S,2),C=k[0],y=k[1],q=Object(n.useState)([]),B=Object(o.a)(q,2),T=B[0],F=(B[1],Object(n.useState)("")),z=Object(o.a)(F,2),R=z[0],E=z[1],J=function(){return c===e.data[e.counter-1].correctAnswer},M=function(s){var n=[];!0!==C?(p(""),E("Tienes que seleccionar alguna respuesta")):(p("hidden"),n.push(e.question),n.push(c),n.push(J(s.target.value)),T.push(n),t(s),e.loadNextQuestionAndAnswers()),"10"===s.target.id&&(console.log(s),!0!==C?(p(""),E("Tienes que seleccionar alguna respuesta")):(b(""),A("hidden"),N("hidden")))},H=T.map((function(t,s){return console.log(e),Object(u.jsxs)("li",{className:"main__sectionQuestions--viewQuestion__list--item",children:[Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__question",children:t[0]}),Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer",children:[Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection",children:[!0===t[2]?Object(u.jsx)("i",{className:" main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle"}):Object(u.jsx)("i",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle"}),Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick",children:t[1]})]}),!1===t[2]?Object(u.jsxs)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer",children:["Correct:",Object(u.jsxs)("span",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span",children:[e.data[s].correctAnswer," "]})]}):""]})]},s)}));return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)(m,{}),Object(u.jsxs)("section",{className:"main__sectionQuestions",children:[Object(u.jsx)("ul",{className:f,children:Object(u.jsxs)("li",{className:"main__sectionQuestions--list",id:e.counter,children:[Object(u.jsxs)("p",{className:"main__sectionQuestions--list__question",children:[Object(u.jsx)("span",{className:"main__sectionQuestions--list__question--number",children:e.counter+" "}),e.question]}),Object(u.jsxs)("form",{className:"main__sectionQuestions--list__form",children:[" ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"firstOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"firstOption",id:e.answer[0],value:e.answer[0],checked:c===e.answer[0],onChange:t}),Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[0]})]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"secondOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"secondOption",id:e.answer[1],value:e.answer[1],checked:c===e.answer[1],onChange:t}),Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[1]})]})," ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"thirdthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"thirdthOption",id:e.answer[2],value:e.answer[2],checked:c===e.answer[2],onChange:t})," ",Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[2]})]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"fourthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"fourthOption",id:e.answer[3],value:e.answer[3],checked:c===e.answer[3],onChange:t})," ",Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[3]})]})]}),e.counter<e.data.length?Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",onClick:M,children:"Siguiente"})}):Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",id:e.data.length,onClick:M,children:"Finalizar"})})]},e.counter)}),Object(u.jsx)("article",{className:"main__error ".concat(O),children:Object(u.jsx)("p",{className:"main__error--title",children:R})}),Object(u.jsx)("article",{className:"main__sectionQuestions--viewQuestion",children:Object(u.jsx)("ul",{className:"main__sectionQuestions--viewQuestion__list ".concat(v),children:H})})]}),Object(u.jsx)("section",{className:"main__sectionAnswers",children:Object(u.jsxs)("div",{className:"main__sectionAnswers--resumen ".concat(j),children:[Object(u.jsx)("h2",{className:"main__sectionAnswers--resumen__title",children:"Resumen del juego"}),Object(u.jsx)("ul",{className:"main__sectionAnswers--resumen__list",children:H}),Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("button",{className:"main__sectionAnswers--resumen__buttonReset",onClick:function(){e.setCounter(0)},children:"Reset"})})]})})]})},h=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),s=t[0],i=t[1],c=Object(n.useState)(0),a=Object(o.a)(c,2),m=a[0],h=a[1],O=Object(n.useState)([]),p=Object(o.a)(O,2),x=p[0],w=p[1],f=Object(n.useState)(""),N=Object(o.a)(f,2),Q=N[0],g=N[1],v=Object(n.useState)(""),A=Object(o.a)(v,2),S=A[0],k=A[1],C=function(){if(m<s.length){for(var e=s[m].questions,t=x[m],n=0;n<t.length;n++);g(e),k(t),h(m+1)}};return Object(n.useEffect)((function(){l().then((function(e){i(e)}))}),[]),Object(u.jsxs)("div",{className:"body",children:[Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",element:Object(u.jsx)(j,{data:s,optionAnswerTotal:x,setOptionAnswerTotal:w,loadNextQuestionAndAnswers:C})}),Object(u.jsx)(r.a,{path:"/game",element:Object(u.jsx)(d,{data:s,optionAnswerTotal:x,loadNextQuestionAndAnswers:C,question:Q,setQuestion:g,answer:S,setAnswer:k,counter:m,setCounter:h})}),Object(u.jsx)(r.a,{path:"instructions",element:Object(u.jsx)(_,{})}),Object(u.jsx)(r.a,{path:"*",element:Object(u.jsx)(u.Fragment,{children:"P\xe1gina no encontrada"})})]}),Object(u.jsx)(b,{})]})};c.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c4dd231f.chunk.js.map