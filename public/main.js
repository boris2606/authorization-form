!function(){"use strict";var e,o={520:function(e,o,t){t(169),t(755);let n=document.querySelector(".register_form"),r=document.querySelector(".autorization_form"),l=document.querySelector(".reg_login"),a=document.querySelector(".reg_age"),u=document.querySelector(".reg_pass"),i=document.querySelector(".reg_confirm_pass"),c=document.querySelector(".autentification_login"),s=document.querySelector(".autentification_pass");const f=document.querySelector(".register_btn"),y=document.querySelector(".autorization_btn"),d=document.querySelector(".enter_btn"),p=document.querySelector(".go_register"),v=document.querySelector(".alert_txt"),g=document.querySelector(".confirmed_person");let m=[];const S=localStorage.getItem("person");if(S&&null!==S)try{m=JSON.parse(S)}catch(e){console.log(e)}function b(){c.value="",s.value=""}function _(){r.style.display="flex",n.style.display="none"}function w(){v.style.display="none",g.style.display="none"}p.onclick=()=>{b(),r.style.display="none",n.style.display="flex",v.innerHTML="",w()},y.onclick=()=>{_()},d.onclick=()=>{let e=m.find((e=>e.login==c.value.toLowerCase()&&e.password!=s.value.toLowerCase())),o=m.find((e=>e.login==c.value.toLowerCase()&&e.password==s.value.toLowerCase()));null!=o?(g.innerHTML=`Вітаю ${o.login}, авторизація пройшла успішно`,g.style.display="block",v.style.display="none",b()):null!=e?(w(),alert("Невірно вказаний пароль користувача")):(v.innerHTML="Користувача не знайдено",g.style.display="none",v.style.display="block")},f.onclick=()=>{let e=m.find((e=>e.login==l.value.toLowerCase()));if(u.value==i.value.toLowerCase())if(0==l.value&&0==a.value&&0==u.value&&0==i.value)alert("Необхідно заповнити всі поля");else if(e)alert("Нажаль такий користувач вже є в системі");else{let e={login:l.value.toLowerCase(),age:a.value,password:u.value.toLowerCase()};m.push(e),localStorage.setItem("person",JSON.stringify(m)),l.value="",a.value="",u.value="",i.value="",alert("Вітаємо, реєстрація успішна, перейдіть до входу"),_()}else alert("Паролі не співпадають")}}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var l=t[e]={exports:{}};return o[e].call(l.exports,l,l.exports,n),l.exports}n.m=o,e=[],n.O=function(o,t,r,l){if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],l=e[s][2];for(var u=!0,i=0;i<t.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(u=!1,l<a&&(a=l));if(u){e.splice(s--,1);var c=r();void 0!==c&&(o=c)}}return o}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[t,r,l]},n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,l,a=t[0],u=t[1],i=t[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var s=i(n)}for(o&&o(t);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},t=self.webpackChunkwebpack_example6=self.webpackChunkwebpack_example6||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var r=n.O(void 0,[582],(function(){return n(520)}));r=n.O(r)}();