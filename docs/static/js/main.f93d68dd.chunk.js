(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(8),c=s.n(i),a=s(5),o=s(3),r=(s(13),s(2)),l=function(){return fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return console.log(e),{questions:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}}))})).catch((function(e){console.error(e),alert("Hubo un error en la p\xe1gina, vuelve a cargar la p\xe1gina y si no espera unos minutos.")}))},u=(s(14),s(1)),_=function(e){return Object(u.jsxs)("section",{className:"landing ".concat(e.hiddenStart),children:[Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"}),Object(u.jsx)("form",{className:"landing--form",children:Object(u.jsx)(a.b,{to:"game",children:Object(u.jsx)("input",{className:"landing--form__button",type:"button",value:"Comenzar juego",onClick:function(){for(var t=0;t<e.data.length;t++){for(var s=[],n=0;n<e.data[t].incorrectAnswers.length;n++)s.push(e.data[t].incorrectAnswers[n]);s.push(e.data[t].correctAnswer),s.sort((function(){return Math.random()-.5})),e.optionAnswerTotal.push(s)}e.loadNextQuestionAndAnswers()}})})})]})},j=(s(16),function(){return Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"})}),m=function(e){console.log(e);var t=function(e){G(""),a(e.target.value),C(e.target.checked),H(e.target.value)},s=Object(n.useState)(""),i=Object(o.a)(s,2),c=i[0],a=i[1],r=Object(n.useState)("hidden"),l=Object(o.a)(r,2),_=l[0],m=l[1],d=Object(n.useState)("hidden"),b=Object(o.a)(d,2),h=b[0],O=b[1],p=Object(n.useState)(""),w=Object(o.a)(p,2),x=w[0],f=w[1],N=Object(n.useState)(""),Q=Object(o.a)(N,2),v=Q[0],g=Q[1],A=Object(n.useState)(!1),S=Object(o.a)(A,2),k=S[0],C=S[1],y=Object(n.useState)([]),q=Object(o.a)(y,2),T=q[0],F=(q[1],Object(n.useState)(0)),B=Object(o.a)(F,2),z=(B[0],B[1],Object(n.useState)(0)),E=Object(o.a)(z,2),J=(E[0],E[1],Object(n.useState)("")),R=Object(o.a)(J,2),D=R[0],G=R[1],H=function(){return c===e.data[e.counter-1].correctAnswer},I=function(s){var n=[];!0!==k?(O(""),G("Tienes que seleccionar alguna respuesta")):(O("hidden"),n.push(e.question),n.push(c),n.push(H(s.target.value)),T.push(n),t(s),e.loadNextQuestionAndAnswers()),"10"===s.target.id&&(m(""),g("hidden"),f("hidden"))},M=T.map((function(t,s){return console.log(e),Object(u.jsxs)("li",{className:"main__sectionQuestions--viewQuestion__list--item",children:[Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__question",children:t[0]}),Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer",children:[Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection",children:[!0===t[2]?Object(u.jsx)("i",{className:" main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle"}):Object(u.jsx)("i",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle"}),Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick",children:t[1]})]}),!1===t[2]?Object(u.jsxs)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer",children:["Correct:",Object(u.jsxs)("span",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span",children:[e.data[s].correctAnswer," "]})]}):""]})]},s)}));return Object(u.jsxs)("main",{className:"main ".concat(e.hiddenGame),children:[Object(u.jsx)(j,{}),Object(u.jsxs)("section",{className:"main__sectionQuestions",children:[Object(u.jsx)("ul",{className:x,children:Object(u.jsxs)("li",{className:"main__sectionQuestions--list",id:e.counter,children:[Object(u.jsx)("p",{className:"main__sectionQuestions--list__question",children:e.question}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"main__sectionQuestions--list__form",children:[" ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"firstOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"firstOption",id:e.answer[0],value:e.answer[0],checked:c===e.answer[0],onChange:t}),e.answer[0]]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"secondOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"secondOption",id:e.answer[1],value:e.answer[1],checked:c===e.answer[1],onChange:t}),e.answer[1]]})," ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"thirdthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"thirdthOption",id:e.answer[2],value:e.answer[2],checked:c===e.answer[2],onChange:t}),e.answer[2]]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"fourthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"fourthOption",id:e.answer[3],value:e.answer[3],checked:c===e.answer[3],onChange:t}),e.answer[3]]})]}),e.counter<e.data.length?Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",onClick:I,children:"Siguiente"})}):Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",id:e.data.length,onClick:I,children:"Finalizar"})})]},e.counter)}),Object(u.jsx)("article",{className:"main__error ".concat(h),children:Object(u.jsx)("p",{className:"main__error--title",children:D})}),Object(u.jsx)("article",{className:"main__sectionQuestions--viewQuestion",children:Object(u.jsx)("ul",{className:"main__sectionQuestions--viewQuestion__list ".concat(v),children:M})})]}),Object(u.jsx)("section",{className:"main__sectionAnswers",children:Object(u.jsxs)("div",{className:_,children:[Object(u.jsx)("h2",{children:"Resumen del Tri-vi-al"}),Object(u.jsx)("ul",{children:M}),Object(u.jsx)("button",{onClick:function(){window.location.reload()},children:"Reset"})]})})]})},d=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),s=t[0],i=t[1],c=Object(n.useState)(0),a=Object(o.a)(c,2),j=a[0],d=a[1],b=Object(n.useState)([]),h=Object(o.a)(b,2),O=h[0],p=h[1],w=Object(n.useState)(""),x=Object(o.a)(w,2),f=x[0],N=x[1],Q=Object(n.useState)(""),v=Object(o.a)(Q,2),g=v[0],A=v[1],S=function(){if(j<s.length){for(var e=s[j].questions,t=O[j],n=0;n<t.length;n++);N(e),A(t),d(j+1)}};return Object(n.useEffect)((function(){l().then((function(e){i(e),console.log(e)}))}),[]),Object(u.jsx)("div",{className:"body",children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",element:Object(u.jsx)(_,{data:s,optionAnswerTotal:O,setOptionAnswerTotal:p,loadNextQuestionAndAnswers:S})}),Object(u.jsx)(r.a,{path:"/game",element:Object(u.jsx)(m,{data:s,optionAnswerTotal:O,loadNextQuestionAndAnswers:S,question:f,setQuestion:N,answer:g,setAnswer:A,counter:j})}),Object(u.jsx)(r.a,{path:"*",element:Object(u.jsx)(u.Fragment,{children:"P\xe1gina no encontrada"})})]})})};c.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f93d68dd.chunk.js.map