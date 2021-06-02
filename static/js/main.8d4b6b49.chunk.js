(this["webpackJsonptodo-task"]=this["webpackJsonptodo-task"]||[]).push([[0],{86:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),i=n(22),o=n.n(i),s={switch:{backgroundColor:"highlight","input:checked ~ &":{backgroundColor:"primary"}},textarea:{color:"forms",resize:"none",width:"80%",margin:"20px auto",backgroundColor:"muted",fontSize:[3,4,null,5],maxHeight:"60vh"},select:{color:"forms"},label:{fontSize:[3,3,4],display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"10px 0px"},input:{fontSize:[3,3,4],margin:"0px 0px 0px 15px"}},d=n(3),l={color:"background",cursor:"pointer",opacity:.7,transition:"opacity 0.2s ease-in-out",textTransform:"uppercase","&:hover":{opacity:1}},x={display:"flex",alignItems:"center",justifyContent:"space-between",opacity:.7,padding:"10px 20px",borderRadius:"5px",transition:"opacity 0.3s 0.1s ease-in-out","&:hover":{opacity:.9}},j={breakpoints:["400px","1024px","1296px"],colors:{text:"#454f5b",forms:"#454f5b",background:"#fff",primary:"#5c6ac4",secondary:"#006fbb",highlight:"#47c1bf",muted:"#e6e6e6",lightRed:"#e96363",softGreen:"#8cec79",modes:{dark:{forms:"#f2f2f2",background:"#383838",primary:"#3cf",secondary:"#e0f",muted:"#191919"}}},fonts:{body:'"Nunito Sans", sans-serif'},fontSizes:[12,14,16,18,24,32,48,64],fontWeights:{body:400,text:600,heading:700,bold:700},letterSpacings:{body:"normal"},lineHeights:{body:1.5,heading:1.15},styles:{root:{fontFamily:"body",fontWeight:"body"},a:{textDecoration:"none",fontSize:[1,2,3,4],fontWeight:"bold",minHeight:["100px","70px"],color:"text"}},forms:s,buttons:{primary:Object(d.a)(Object(d.a)({},l),{},{bg:"highlight",fontSize:[0,2,3]}),secondary:Object(d.a)(Object(d.a)({},l),{},{bg:"secondary"}),deleted:Object(d.a)(Object(d.a)({},l),{},{bg:"#ff9999"}),icon:Object(d.a)(Object(d.a)({},l),{},{width:"100%",height:"100%",color:"text",borderColor:"text",border:"1px solid",transition:"all 0.2s ease-in-out","&:hover":{opacity:1,color:"secondary"},"&:disabled":{opacity:.7,cursor:"default"}}),close:{cursor:"pointer",margin:"5px",border:"1px solid"}},text:{heading:{textTransform:"uppercase",textAlign:"center",fontFamily:"body",lineHeight:"heading"}},cards:{uncompleted:Object(d.a)({backgroundColor:"lightRed",boxShadow:"0 0 5px red"},x),completed:Object(d.a)({backgroundColor:"softGreen",boxShadow:"0 0 5px green"},x)}},u=n(90),p=n(36),b=n(13),h=n(37),f=n(7),O=n(89),g=n(5),m=n(8),y=function(e){var t=e.endpoint,n=e.query,a=void 0===n?"":n,r=e.options,c=void 0===r?{}:r;return fetch("".concat("https://gorest.co.in/public-api","/").concat(t).concat(a),Object(d.a)({headers:{Authorization:"Bearer ".concat("7efaf3d98d701b62153fc7a434e892046474604fdbb39dd15812ac3949ebb483"),Accept:"application/json","Content-Type":"application/json"}},c)).then((function(e){return e.ok?e.json():e.ok?void 0:Promise.reject("Error HTTP status: ".concat(e.status))})).catch((function(e){return Promise.reject("Network error: ".concat(e))}))},v=function(e){var t=e.id;return y({endpoint:"/todos/".concat(void 0===t?1:t)}).then((function(e){if(200===e.code)return e.data;if(404===e.code)throw Promise.reject("Nie ma takiego zadanie - Mo\u017cliwe, \u017ce przed chwil\u0105 kto\u015b je usun\u0105\u0142 ;)");if(200!==e.code&&404!==e.code)throw Promise.reject("Wyst\u0105pi\u0142 b\u0142\u0105d z zaptaniem!")}))},w=function(e){var t=e.page,n=void 0===t?1:t,a=e.q,r=void 0===a?"":a;return y({endpoint:"/todos",query:"?page=".concat(n).concat(r)}).then((function(e){if(200===e.code)return{todoList:Object(m.a)(e.data),pagination:e.meta.pagination};if(200!==e.code)throw Promise.reject("Error HTTP status: ".concat(e.code))}))},k=function(e){var t=e.todo,n=void 0===t?{}:t,a=e.newData;return y({endpoint:"/todos/".concat(n.id),options:{method:"PATCH",body:JSON.stringify(a)}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))},z=function(e){var t=e.todo,n=void 0===t?{}:t;return y({endpoint:"/todos/".concat(n.id),options:{method:"DELETE"}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))},C=n(6),S=n.n(C),T=n(10),W=function(e){var t=e.id;return y({endpoint:"/users/".concat(t)}).then((function(e){return e.data}))},P=function(e){var t=e.user;return y({endpoint:"/users",query:"?email=".concat(t.email)}).then((function(e){return e.data}))},B=function(e){var t=e.user;return y({endpoint:"/users",options:{method:"POST",body:JSON.stringify(Object(d.a)({status:"Active"},t))}}).then((function(e){return 201===e.code||200===e.code?e.data:t}))},I=function(e){var t=e.newUserInfo,n=e.user;return y({endpoint:"/users/".concat(n.id),options:{method:"PATCH",body:JSON.stringify(t)}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))},A={name:"Karol Testowy",email:"testowy@example.com",gender:"Male"},D=function(e){var t=new Date(e),n=t.getDate()>9?t.getDate():"0".concat(t.getDate()),a=t.getMonth()+1>9?t.getMonth()+1:"0".concat(t.getMonth()+1),r=t.getHours()>9?t.getHours():"0".concat(t.getHours()),c=t.getMinutes()+1>9?t.getMinutes()+1:"0".concat(t.getMinutes()+1);return"".concat(n,"/").concat(a,"/").concat(t.getFullYear()," ").concat(r,":").concat(c)},N=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,a=void 0===n?A:n,e.next=3,P({user:a});case 3:if(0!==(null===(r=e.sent)||void 0===r?void 0:r.length)){e.next=9;break}return e.next=7,B({user:a});case 7:return c=e.sent,e.abrupt("return",c);case 9:if(r[0].name===a.name&&r[0].gender===a.gender){e.next=14;break}return e.next=12,I({newUserInfo:a,user:r[0]});case 12:return i=e.sent,e.abrupt("return",i);case 14:return e.abrupt("return",r[0]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(f.c)({key:"newDataUserState",default:A,effects_UNSTABLE:[(a="current_user",function(e){var t=e.setSelf,n=e.onSet,r=localStorage.getItem(a);null!=r&&t(JSON.parse(r)),n((function(e){e instanceof f.a?localStorage.removeItem(a):localStorage.setItem(a,JSON.stringify(e))}))})]}),U=Object(f.e)({key:"getCurrentUserQuery",get:function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(E),e.next=4,N({user:a});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),H=Object(f.c)({key:"currentUserState",default:U}),L=Object(f.f)({key:"getUserQuery",get:function(e){return function(){var t=Object(T.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.get,t.next=3,W({id:e});case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),R=Object(f.c)({key:"requestIDtodos",default:0}),q=Object(f.c)({key:"requestIDtodo",default:0}),F=Object(f.c)({key:"currentPageState",default:1}),M=Object(f.c)({key:"filterTodosState",default:{completed:!1,my:!1}}),Z=Object(f.e)({key:"todosResponseQuery",get:function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r,c,i,o,s,d,l,x;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.get)(R),a=n(M),r=a.completed,c=a.my,i=n(H),o=n(F),!c||!r){e.next=10;break}return e.next=8,w({page:o,q:"&user_id=".concat(i.id,"&completed=true")}).catch((function(e){throw e}));case 8:return s=e.sent,e.abrupt("return",s);case 10:if(!r){e.next=15;break}return e.next=13,w({page:o,q:"&completed=true"}).catch((function(e){throw e}));case 13:return d=e.sent,e.abrupt("return",d);case 15:if(!c){e.next=20;break}return e.next=18,w({page:o,q:"&user_id=".concat(i.id)}).catch((function(e){throw e}));case 18:return l=e.sent,e.abrupt("return",l);case 20:return e.next=22,w({page:o}).catch((function(e){throw e}));case 22:return x=e.sent,e.abrupt("return",x);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),G=Object(f.c)({key:"todosResponseState",default:Z}),_=Object(f.e)({key:"todosStatsQuery",get:function(e){var t=(0,e.get)(G).todoList,n=t.length,a=t.filter((function(e){return e.completed})).length;return{totalCompleted:a,totalUncompleted:n-a}}}),J=Object(f.c)({key:"newTodoTextState",default:""}),V=Object(f.e)({key:"newTodoTextLengthQuery",get:function(e){var t=(0,e.get)(J);return"".concat(t.length,"/200")}}),Q=Object(f.f)({key:"todoResponseQuery",get:function(e){return function(){var t=Object(T.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,n.get)(q),t.next=4,v({id:e}).catch((function(e){throw e}));case 4:return a=t.sent,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),K=Object(f.d)({key:"todoResponseState",default:Q}),Y=function(e){var t=Object(f.j)(e);return function(){t((function(e){return e+1}))}},X=n(2);var $=function(e){var t=e.user,n=Y(R),a=Object(f.g)(J),r=Object(g.a)(a,2),c=r[0],i=r[1],o=Object(f.h)(V),s=Object(h.useToasts)().addToast;return Object(X.jsxs)(O.a,{as:"section",sx:{flexBasis:["100%",null,"40%"],minHeight:"100vh",pt:100,pb:50,position:"relative"},children:[Object(X.jsx)(O.h,{as:"h1",sx:{color:"forms"},children:"Nowe zadanie"}),Object(X.jsx)(O.q,{placeholder:"Wpisz swoje zadanie",rows:20,value:c,onChange:function(e){i(e.target.value)}}),Object(X.jsxs)(O.f,{sx:{justifyContent:"space-between",width:"80%",margin:"0px auto"},children:[Object(X.jsx)(O.a,{sx:{color:"forms"},children:o}),Object(X.jsx)(O.b,{"aria-label":"Dodaj zadanie",variant:"secondary",onClick:function(e){c?(null===c||void 0===c?void 0:c.length)>200?s("Tre\u015b\u0107 jest za du\u017ca",{appearance:"info",autoDismiss:!0}):(null===t||void 0===t?void 0:t.contents)&&function(e){var t=e.data,n=e.user_id;return y({endpoint:"/users/".concat(void 0===n?30:n,"/todos"),options:{method:"POST",body:JSON.stringify(t)}}).then((function(e){return e}))}({data:{title:c,completed:!1},user_id:t.contents.id}).then((function(e){201!==e.code&&200!==e.code?s("Nie uda\u0142o si\u0119 stworzy\u0107 zadania!",{appearance:"error",autoDismiss:!0}):(s("Stworzono zadanie!",{appearance:"success",autoDismiss:!0}),n()),i("")})).catch((function(){s("Nie uda\u0142o si\u0119 stworzy\u0107 zadania!",{appearance:"error",autoDismiss:!0}),i("")})):s("Dodaj tre\u015b\u0107 zadania",{appearance:"info",autoDismiss:!0})},children:"Dodaj zadanie"})]})]})};var ee=function(e){var t=e.completed,n=e.totalCompleted,a=e.totalUncompleted,r=e.handleToggleCompleted,c=e.my,i=e.handleToggleMy;return Object(X.jsxs)(O.f,{sx:{flexWrap:"wrap"},children:[Object(X.jsxs)(O.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",backgroundColor:"softGreen",borderRadius:"5px",boxShadow:"0 0 5px green",opacity:t?0:.9},children:["Zako\u0144czone: ",n]}),Object(X.jsxs)(O.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",backgroundColor:"lightRed",borderRadius:"5px",boxShadow:"0 0 5px red",opacity:t?0:.9},children:["Niezako\u0144czone: ",a]}),Object(X.jsx)(O.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"]},children:Object(X.jsx)(O.p,{defaultChecked:t,onChange:r,label:"Ukryj zako\u0144czone","aria-label":"Ukryj zako\u0144czone"})}),Object(X.jsx)(O.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(X.jsx)(O.p,{defaultChecked:c,onChange:i,label:"Poka\u017c moje","aria-label":"Poka\u017c moje"})})]})},te=n(60),ne=function(e){var t=e.children,n=e.to,a=e.sx,r=void 0===a?{}:a;return Object(X.jsx)(O.l,{sx:Object(d.a)({},r),to:n,as:p.b,children:t})};var ae=function(e){var t=e.title,n=e.id,a=e.completed,r=Y(R),c=Object(h.useToasts)().addToast,i=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({todo:{id:n},newData:{completed:!0}}).catch((function(e){c(e,{appearance:"error",autoDismiss:!0})}));case 2:c("Zadanie zaznaczono jako wykonane!",{appearance:"success",autoDismiss:!0}),r();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(T.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("Usuni\u0119to zadanie!",{appearance:"info",autoDismiss:!0}),e.next=3,z({todo:{id:n}}).catch((function(e){c(e,{appearance:"error",autoDismiss:!0})}));case 3:r();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)(O.c,{variant:a?"completed":"uncompleted",children:[Object(X.jsx)(ne,{sx:{flexBasis:"88%",display:"flex",alignItems:"center"},to:"/todo/".concat(n),children:Object(X.jsx)(O.a,{sx:{overflowWrap:"break-word"},children:t})}),Object(X.jsx)(O.i,{onClick:a?o:i,"aria-label":a?"Usuni\u0119cie zadania":"Zaznaczenie zadania jako wykonane",sx:{border:"0",borderLeft:"2px solid",borderLeftColor:"text",borderRadius:"0",fontSize:[1,2,3,4],flexBasis:"10%","&:hover":{color:a?"lightRed":"softGreen",borderLeftColor:a?"lightRed":"softGreen"}},children:a?Object(X.jsx)(te.b,{}):Object(X.jsx)(te.a,{})})]})};var re=function(e){var t=e.todoList;return Object(X.jsxs)(O.g,{columns:[1],sx:{width:"90%",margin:"20px auto"},children:[Array.isArray(t)&&t.length>0&&t.map((function(e){return Object(r.createElement)(ae,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))})),Array.isArray(t)&&0===t.length&&Object(X.jsx)("h1",{children:"Brak wynik\xf3w"})]})},ce=n(21);var ie=function(e){var t=e.pagination,n=e.handleNexPage,a=e.handleBackPage,r=e.handleGoToFirst,c=e.handleGoToLast,i=e.handleSelectPage,o=e.currentPage,s=t.total,d=t.pages;return Object(X.jsxs)(O.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(X.jsxs)(O.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",s]}),Object(X.jsxs)(O.f,{sx:{flexBasis:["100%","auto"]},children:[Object(X.jsx)(O.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:1===o,onClick:r,children:Object(X.jsx)(ce.a,{})}),Object(X.jsx)(O.i,{"aria-label":"Cofnij storn\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:o<2,onClick:a,children:Object(X.jsx)(ce.c,{})}),Object(X.jsx)(O.n,{"aria-label":"zmie\u0144 stron\u0119",value:o,onChange:i,sx:{width:"60px"},children:d&&Object(m.a)(Array(d).keys()).map((function(e){return Object(X.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(X.jsx)(O.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:o>=d,onClick:n,children:Object(X.jsx)(ce.d,{})}),Object(X.jsx)(O.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:o===d,onClick:c,children:Object(X.jsx)(ce.b,{})})]})]})};var oe=function(){var e=Object(f.h)(G),t=e.todoList,n=e.pagination,a=Object(f.h)(_),c=a.totalCompleted,i=a.totalUncompleted,o=Object(f.g)(M),s=Object(g.a)(o,2),l=s[0],x=s[1],j=Object(f.g)(F),u=Object(g.a)(j,2),p=u[0],b=u[1],h=function(){b((function(e){return e+1}))},m=function(){b((function(e){return e-1}))},y=function(){b(1)},v=function(){b(null===n||void 0===n?void 0:n.pages)},w=function(e){b(Number(e.target.value))};return Object(r.useEffect)((function(){p>(null===n||void 0===n?void 0:n.pages)&&b(1)})),Object(X.jsxs)(O.a,{as:"section",bg:"muted",sx:{flexBasis:["100%",null,"60%"],minheight:"100vh",maxHeight:[null,null,"100vh"],pt:50,overflow:"auto"},children:[Object(X.jsx)(O.a,{sx:{width:"90%",margin:"0px auto"},children:Object(X.jsx)(ee,{totalCompleted:c,totalUncompleted:i,handleToggleCompleted:function(){x(Object(d.a)(Object(d.a)({},l),{},{completed:!l.completed}))},completed:null===l||void 0===l?void 0:l.completed,handleToggleMy:function(){x(Object(d.a)(Object(d.a)({},l),{},{my:!l.my}))},my:null===l||void 0===l?void 0:l.my})}),Object(X.jsx)(O.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(X.jsx)(ie,{pagination:n,currentPage:p,handleBackPage:m,handleNexPage:h,handleGoToFirst:y,handleGoToLast:v,handleSelectPage:w})}),Object(X.jsx)(re,{todoList:t}),Object(X.jsx)(O.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(X.jsx)(ie,{pagination:n,currentPage:p,handleBackPage:m,handleNexPage:h,handleGoToFirst:y,handleGoToLast:v,handleSelectPage:w})})]})};var se=function(e){var t=e.isError;return Object(X.jsxs)(O.a,{as:"section",bg:"muted",sx:{flexBasis:["100%",null,"60%"],minheight:"100vh",maxHeight:[null,null,"100vh"],pt:50,overflow:"auto"},children:[Object(X.jsx)(O.a,{sx:{width:"90%",margin:"0px auto"},children:Object(X.jsxs)(O.f,{sx:{flexWrap:"wrap"},children:[Object(X.jsx)(O.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",opacity:0},children:"Zako\u0144czone"}),Object(X.jsx)(O.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",opacity:0},children:"Niezako\u0144czone:"}),Object(X.jsx)(O.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(X.jsx)(O.p,{label:"Ukryj zako\u0144czone","aria-label":"Ukryj zako\u0144czone"})}),Object(X.jsx)(O.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(X.jsx)(O.p,{label:"Poka\u017c moje ","aria-label":"Poka\u017c moje"})})]})}),Object(X.jsx)(O.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(X.jsxs)(O.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(X.jsxs)(O.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",Object(X.jsx)(O.o,{sx:{width:"14px",height:"14px"}})]}),Object(X.jsxs)(O.f,{sx:{flexBasis:["100%","auto"]},children:[Object(X.jsx)(O.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.a,{})}),Object(X.jsx)(O.i,{"aria-label":"Cofnij stron\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.c,{})}),Object(X.jsx)(O.n,{"aria-label":"Wybierz stron\u0119",sx:{width:"60px"},children:Object(m.a)(Array(10).keys()).map((function(e){return Object(X.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(X.jsx)(O.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:!0,children:Object(X.jsx)(ce.d,{})}),Object(X.jsx)(O.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.b,{})})]})]})}),Object(X.jsx)(O.f,{sx:{justifyContent:"center",alignItems:"center"},children:t?Object(X.jsx)(O.a,{sx:{width:"80%",height:"50vh",textAlign:"center"},children:Object(X.jsx)("h1",{children:"Wyst\u0105pi\u0142 problem z sieci\u0105"})}):Object(X.jsx)(O.o,{sx:{width:"80%",height:"80%"}})}),Object(X.jsx)(O.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(X.jsxs)(O.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(X.jsxs)(O.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",Object(X.jsx)(O.o,{sx:{width:"14px",height:"14px"}})]}),Object(X.jsxs)(O.f,{sx:{flexBasis:["100%","auto"]},children:[Object(X.jsx)(O.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.a,{})}),Object(X.jsx)(O.i,{"aria-label":"Cofnij stron\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.c,{})}),Object(X.jsx)(O.n,{"aria-label":"Wybierz stron\u0119",sx:{width:"60px"},children:Object(m.a)(Array(10).keys()).map((function(e){return Object(X.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(X.jsx)(O.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:!0,children:Object(X.jsx)(ce.d,{})}),Object(X.jsx)(O.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(X.jsx)(ce.b,{})})]})]})})]})},de=n(9),le=n(20),xe=n(26),je=n(27),ue=function(e){Object(xe.a)(n,e);var t=Object(je.a)(n);function n(e){var a;return Object(de.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(le.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(X.jsx)(se,{isError:!0}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.a.Component),pe=function(e){return function(t){var n=Object.assign({},t),a=Object(f.j)(E),r=Object(f.i)(H);return Object(X.jsx)(e,Object(d.a)({user:r,setNewUser:a},n))}},be=pe($);var he=function(){return Object(X.jsxs)(O.f,{sx:{flexWrap:"wrap"},children:[Object(X.jsx)(be,{}),Object(X.jsx)(ue,{children:Object(X.jsx)(c.a.Suspense,{fallback:Object(X.jsx)(se,{}),children:Object(X.jsx)(oe,{})})})]})},fe=n(66),Oe=n(88),ge=n(51);var me=function(e){var t=e.onClose,n=e.user,a=e.setNewUser,r=Object(ge.a)(),c=r.register,i=r.handleSubmit,o=r.formState.errors;return Object(X.jsxs)("form",{onSubmit:i((function(e){a(Object(d.a)({},e)),t()})),children:[Object(X.jsxs)(O.f,{sx:{justifyContent:o.name||o.email||o.gender?"space-between":"flex-end"},children:[(o.name||o.email||o.gender)&&Object(X.jsx)(O.a,{color:"red",children:"Uzupe\u0142nij wszystkie pola!"}),Object(X.jsx)(O.e,{"aria-label":"Zamknij modal",type:"button",onClick:t})]}),Object(X.jsxs)(O.k,{children:[Object(X.jsx)(O.a,{sx:{width:"100px"},children:"Nazwa:"}),Object(X.jsx)(O.j,Object(d.a)(Object(d.a)({},c("name",{required:!0})),{},{placeholder:"Wpisz nazw\u0119...",defaultValue:"hasValue"===n.state&&n.contents.name||""}))]}),Object(X.jsxs)(O.k,{children:[Object(X.jsx)(O.a,{sx:{width:"100px"},children:"Email:"}),Object(X.jsx)(O.j,Object(d.a)(Object(d.a)({},c("email",{required:!0})),{},{type:"email",placeholder:"Wpisz email...",defaultValue:"hasValue"===n.state&&n.contents.email||""}))]}),Object(X.jsxs)(O.k,{sx:{justifyContent:"flex-start"},children:[Object(X.jsx)(O.a,{sx:{width:"125px"},children:"M\u0119\u017cczyzna"}),Object(X.jsx)(O.m,Object(d.a)(Object(d.a)({},c("gender",{required:!0})),{},{value:"Male",defaultChecked:"hasValue"===n.state&&"Male"===n.contents.gender,name:"gender"}))]}),Object(X.jsxs)(O.k,{sx:{justifyContent:"flex-start"},children:[Object(X.jsx)(O.a,{sx:{width:"125px"},children:"Kobieta"}),Object(X.jsx)(O.m,Object(d.a)(Object(d.a)({},c("gender",{required:!0})),{},{value:"Female",defaultChecked:"hasValue"===n.state&&"Female"===n.contents.gender,name:"gender"}))]}),Object(X.jsx)(O.b,{type:"submit",sx:{width:"100%"},children:"Zapisz"})]})},ye=n(12),ve=function(e){var t=document.getElementById("modal");return function(n){var a=n.isOpen,r=n.onClose,c=Object(ye.a)(n,["isOpen","onClose"]);return a?o.a.createPortal(Object(X.jsx)(O.f,{sx:{position:"fixed",top:0,width:"100vw",height:"100vh",minheight:"100vh",justifyContent:"center",alignItems:"center",zIndex:11,backgroundColor:"rgba(0,0,0, 0.3)"},children:Object(X.jsx)(O.a,{sx:{flexBasis:["90%","80%","45%","35%"],backgroundColor:"white",padding:["10px","30px 5px","20px 50px 50px 50px"]},children:Object(X.jsx)(e,Object(d.a)(Object(d.a)({},c),{},{onClose:r}))})}),t):null}},we=Object(Oe.a)(ve,pe)(me);var ke=function(){var e=Object(fe.b)(),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(g.a)(c,2),o=i[0],s=i[1],d=function(){s(!o)};return Object(X.jsxs)(O.a,{as:"header",sx:{position:"absolute",top:0,left:0,width:"100vw",padding:"10px 15px",zIndex:"10"},children:[Object(X.jsxs)(O.f,{as:"nav",sx:{justifyContent:"space-between"},children:[Object(X.jsx)(O.a,{children:Object(X.jsx)(O.b,{"aria-label":"Konfiguracja konta",variant:"primary",onClick:d,children:"Konfiguracja konta"})}),Object(X.jsx)(O.a,{children:Object(X.jsx)(O.p,{onChange:function(e){a("default"===n?"dark":"default")}})})]}),Object(X.jsx)(we,{onClose:d,isOpen:o})]})};var ze=ve((function(e){var t,n,a=e.onClose,r=e.todo,c=Y(q),i=Y(R),o=Object(ge.a)(),s=o.register,l=o.handleSubmit,x=o.formState.errors,j=r.title,u=r.completed,p=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,a=void 0===n?{}:n,e.next=3,k({todo:r,newData:a}).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)("form",{onSubmit:l((function(e){p({data:e}),c(),i(),a()})),children:[Object(X.jsx)(O.f,{sx:{justifyContent:"flex-end"},children:Object(X.jsx)(O.e,{"aria-label":"Zamknij modal",type:"button",onClick:a})}),Object(X.jsx)(O.h,{as:"h3",children:"Tre\u015b\u0107 zadania"}),Object(X.jsx)(O.q,Object(d.a)(Object(d.a)({},s("title",{required:!0,minLength:1,maxLength:200})),{},{placeholder:"Wpisz now\u0105 tre\u015b\u0107",rows:10,defaultValue:j})),Object(X.jsx)(O.f,{sx:{justifyContent:"center"},children:Object(X.jsxs)(O.k,{sx:{justifyContent:"center"},children:["Uko\u0144czone",Object(X.jsx)(O.d,Object(d.a)(Object(d.a)({},s("completed")),{},{defaultChecked:u,sx:{ml:"10px"}}))]})}),Object(X.jsxs)(O.f,{sx:{justifyContent:"center",height:"16px",color:"red",fontSize:"12px"},children:["required"===(null===x||void 0===x||null===(t=x.title)||void 0===t?void 0:t.type)&&"Zadanie musi mie\u0107 tre\u015b\u0107","maxLength"===(null===x||void 0===x||null===(n=x.title)||void 0===n?void 0:n.type)&&"Zadanie mo\u017ce mie\u0107 max 200 znak\xf3w"]}),Object(X.jsx)(O.f,{sx:{justifyContent:"flex-end"},children:Object(X.jsx)(O.b,{"aria-label":"Zapisz edytowanie zadanie",type:"submit",children:"Zapisz"})})]})}));var Ce=function(){var e=Y(R),t=Object(b.g)().id,n=Object(b.f)(),a=Object(r.useState)(!1),c=Object(g.a)(a,2),i=c[0],o=c[1],s=Object(f.h)(K(t)),d=s.title,l=s.created_at,x=s.updated_at,j=s.completed,u=s.user_id,p=Object(f.h)(L(u)).name,h=function(){o(!i)};return Object(X.jsxs)(O.f,{sx:{justifyContent:"center",alignItems:"center",minHeight:"90vh"},children:[Object(X.jsxs)(O.a,{sx:{backgroundColor:"muted",borderRadius:"5px",padding:["30px 10px 20px","50px 20px 20px"],flexBasis:["95%","85%","50%","35%"],color:"forms"},children:[Object(X.jsx)(O.h,{as:"h1",children:"Szczeg\xf3\u0142y zadania"}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Tytu\u0142:"})," ",d]}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Zako\u0144czone:"})," ",j?"Tak":"Nie"]}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Tw\xf3rca:"})," ",p]}),Object(X.jsxs)(O.f,{sx:{justifyContent:"space-between",flexWrap:"wrap"},children:[Object(X.jsxs)(O.a,{children:[Object(X.jsx)("b",{children:"Utworzono: "}),D(l)]}),Object(X.jsxs)(O.a,{children:[Object(X.jsx)("b",{children:"Aktualizacja: "}),D(x)]})]}),Object(X.jsxs)(O.f,{sx:{justifyContent:"space-between",flexWrap:"wrap",mt:"15px"},children:[Object(X.jsx)(O.b,{onClick:function(e){n.goBack()},sx:{mb:"15px"},children:"Powr\xf3t"}),Object(X.jsxs)(O.a,{children:[Object(X.jsx)(O.b,{variant:"deleted",sx:{mr:"15px"},onClick:function(t){z({todo:s}),e(),n.push("/")},children:"Usu\u0144"}),Object(X.jsx)(O.b,{variant:"secondary",onClick:h,children:"Edytuj"})]})]})]}),Object(X.jsx)(ze,{todo:s,isOpen:i,onClose:h})]})};var Se=function(e){var t=e.isError,n=Object(b.f)();return Object(X.jsx)(O.f,{sx:{justifyContent:"center",alignItems:"center",minHeight:"90vh"},children:Object(X.jsxs)(O.a,{sx:{backgroundColor:"muted",borderRadius:"5px",padding:["30px 10px 20px","50px 20px 20px"],flexBasis:["95%","85%","50%","35%"],color:"forms"},children:[Object(X.jsx)(O.h,{as:"h1",children:"Szczeg\xf3\u0142y zadania"}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Tytu\u0142:"})," ",t||Object(X.jsx)(O.o,{sx:{width:"18px",height:"18px"}})]}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Zako\u0144czone:"})," ",Object(X.jsx)(O.o,{sx:{width:"18px",height:"18px"}})]}),Object(X.jsxs)(O.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(X.jsx)("b",{children:"Tw\xf3rca:"})," ",Object(X.jsx)(O.o,{sx:{width:"18px",height:"18px"}})]}),Object(X.jsxs)(O.f,{sx:{justifyContent:"space-between",flexWrap:"wrap"},children:[Object(X.jsxs)(O.a,{children:[Object(X.jsx)("b",{children:"Utworzono: "}),Object(X.jsx)(O.o,{sx:{width:"12px",height:"12px"}})]}),Object(X.jsxs)(O.a,{children:[Object(X.jsx)("b",{children:"Aktualizacja: "}),Object(X.jsx)(O.o,{sx:{width:"12px",height:"12px"}})]})]}),Object(X.jsxs)(O.f,{sx:{justifyContent:"space-between",flexWrap:"wrap",mt:"15px"},children:[Object(X.jsx)(O.b,{onClick:function(){n.goBack()},sx:{mb:"15px"},children:"Powr\xf3t"}),Object(X.jsxs)(O.a,{children:[Object(X.jsx)(O.b,{variant:"deleted",sx:{mr:"15px"},children:"Usu\u0144"}),Object(X.jsx)(O.b,{variant:"secondary",children:"Edytuj"})]})]})]})})},Te=function(e){Object(xe.a)(n,e);var t=Object(je.a)(n);function n(e){var a;return Object(de.a)(this,n),(a=t.call(this,e)).state={hasError:!1,error:""},a}return Object(le.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(X.jsx)(Se,{isError:this.state.error}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),n}(c.a.Component);var We=function(){return Object(X.jsx)(f.b,{children:Object(X.jsx)(p.a,{children:Object(X.jsx)(h.ToastProvider,{placement:"bottom-center",children:Object(X.jsx)(u.a,{theme:j,children:Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(ke,{}),Object(X.jsxs)(b.c,{children:[Object(X.jsx)(b.a,{path:"/todo/:id",children:Object(X.jsx)(Te,{children:Object(X.jsx)(c.a.Suspense,{fallback:Object(X.jsx)(Se,{}),children:Object(X.jsx)(Ce,{})})})}),Object(X.jsx)(b.a,{path:"/",children:Object(X.jsx)(he,{})})]})]})})})})})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(We,{})}),document.getElementById("root")),Pe()}},[[86,1,2]]]);
//# sourceMappingURL=main.8d4b6b49.chunk.js.map