(this["webpackJsonptodo-task"]=this["webpackJsonptodo-task"]||[]).push([[0],{26:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return g}));var a=n(6),r=n.n(a),c=n(12),i=n(7),o=n(27),s=n(48),d=Object(i.c)({key:"requestIDtodos",default:0}),l=Object(i.c)({key:"requestIDtodo",default:0}),u=Object(i.c)({key:"currentPageState",default:1}),x=Object(i.c)({key:"filterTodosState",default:{completed:!1,my:!1}}),j=Object(i.e)({key:"todosResponseQuery",get:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i,l,j,b,p,h,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.get)(d),a=n(x),c=a.completed,i=a.my,l=n(s.a),j=n(u),!i||!c){e.next=10;break}return e.next=8,Object(o.d)({page:j,q:"&user_id=".concat(l.id,"&completed=true")}).catch((function(e){throw e}));case 8:return b=e.sent,e.abrupt("return",b);case 10:if(!c){e.next=15;break}return e.next=13,Object(o.d)({page:j,q:"&completed=true"}).catch((function(e){throw e}));case 13:return p=e.sent,e.abrupt("return",p);case 15:if(!i){e.next=20;break}return e.next=18,Object(o.d)({page:j,q:"&user_id=".concat(l.id)}).catch((function(e){throw e}));case 18:return h=e.sent,e.abrupt("return",h);case 20:return e.next=22,Object(o.d)({page:j}).catch((function(e){throw e}));case 22:return f=e.sent,e.abrupt("return",f);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),b=Object(i.c)({key:"todosResponseState",default:j}),p=Object(i.e)({key:"todosStatsQuery",get:function(e){var t=(0,e.get)(b).todoList,n=t.length,a=t.filter((function(e){return e.completed})).length;return{totalCompleted:a,totalUncompleted:n-a}}}),h=Object(i.c)({key:"newTodoTextState",default:""}),f=Object(i.e)({key:"newTodoTextLengthQuery",get:function(e){var t=(0,e.get)(h);return"".concat(t.length,"/200")}}),O=Object(i.f)({key:"todoResponseQuery",get:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,n.get)(l),t.next=4,Object(o.c)({id:e}).catch((function(e){throw e}));case 4:return a=t.sent,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),g=Object(i.d)({key:"todoResponseState",default:O})},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(8),r=n(30),c=function(e){var t=e.id,n=void 0===t?1:t;return Object(r.a)({endpoint:"/todos/".concat(n)}).then((function(e){if(200===e.code)return e.data;if(404===e.code)throw Promise.reject("Nie ma takiego zadanie - Mo\u017cliwe, \u017ce przed chwil\u0105 kto\u015b je usun\u0105\u0142 ;)");if(200!==e.code&&404!==e.code)throw Promise.reject("Wyst\u0105pi\u0142 b\u0142\u0105d z zaptaniem!")}))},i=function(e){var t=e.page,n=void 0===t?1:t,c=e.q,i=void 0===c?"":c;return Object(r.a)({endpoint:"/todos",query:"?page=".concat(n).concat(i)}).then((function(e){if(200===e.code)return{todoList:Object(a.a)(e.data),pagination:e.meta.pagination};if(200!==e.code)throw Promise.reject("Error HTTP status: ".concat(e.code))}))},o=function(e){var t=e.data,n=e.user_id,a=void 0===n?30:n;return Object(r.a)({endpoint:"/users/".concat(a,"/todos"),options:{method:"POST",body:JSON.stringify(t)}}).then((function(e){return e}))},s=function(e){var t=e.todo,n=void 0===t?{}:t,a=e.newData;return Object(r.a)({endpoint:"/todos/".concat(n.id),options:{method:"PATCH",body:JSON.stringify(a)}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))},d=function(e){var t=e.todo,n=void 0===t?{}:t;return Object(r.a)({endpoint:"/todos/".concat(n.id),options:{method:"DELETE"}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),r=function(e){var t=e.endpoint,n=e.query,r=void 0===n?"":n,c=e.options,i=void 0===c?{}:c;return fetch("".concat("https://gorest.co.in/public-api","/").concat(t).concat(r),Object(a.a)({headers:{Authorization:"Bearer ".concat("7efaf3d98d701b62153fc7a434e892046474604fdbb39dd15812ac3949ebb483"),Accept:"application/json","Content-Type":"application/json"}},i)).then((function(e){return e.ok?e.json():e.ok?void 0:Promise.reject("Error HTTP status: ".concat(e.status))})).catch((function(e){return Promise.reject("Network error: ".concat(e))}))}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n(3),r=n(30),c=function(e){var t=e.id;return Object(r.a)({endpoint:"/users/".concat(t)}).then((function(e){return e.data}))},i=function(e){var t=e.user;return Object(r.a)({endpoint:"/users",query:"?email=".concat(t.email)}).then((function(e){return e.data}))},o=function(e){var t=e.user;return Object(r.a)({endpoint:"/users",options:{method:"POST",body:JSON.stringify(Object(a.a)({status:"Active"},t))}}).then((function(e){return 201===e.code||200===e.code?e.data:t}))},s=function(e){var t=e.newUserInfo,n=e.user;return Object(r.a)({endpoint:"/users/".concat(n.id),options:{method:"PATCH",body:JSON.stringify(t)}}).then((function(e){return 204===e.code||200===e.code?e.data:n}))}},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return j}));var a=n(6),r=n.n(a),c=n(12),i=n(7),o=n(63),s=n(45),d=n(57),l=Object(i.c)({key:"newDataUserState",default:d.a,effects_UNSTABLE:[Object(o.c)("current_user")]}),u=Object(i.e)({key:"getCurrentUserQuery",get:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(l),e.next=4,Object(o.a)({user:a});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),x=Object(i.c)({key:"currentUserState",default:u}),j=Object(i.f)({key:"getUserQuery",get:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.get,t.next=3,Object(s.b)({id:e});case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(7),r=function(e){var t=Object(a.j)(e);return function(){t((function(e){return e+1}))}}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={name:"Karol Testowy",email:"testowy@example.com",gender:"Male"}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u}));var a=n(6),r=n.n(a),c=n(12),i=n(7),o=n(45),s=n(57),d=function(e){var t=new Date(e),n=t.getDate()>9?t.getDate():"0".concat(t.getDate()),a=t.getMonth()+1>9?t.getMonth()+1:"0".concat(t.getMonth()+1),r=t.getHours()>9?t.getHours():"0".concat(t.getHours()),c=t.getMinutes()+1>9?t.getMinutes()+1:"0".concat(t.getMinutes()+1);return"".concat(n,"/").concat(a,"/").concat(t.getFullYear()," ").concat(r,":").concat(c)},l=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,a=void 0===n?s.a:n,e.next=3,Object(o.c)({user:a});case 3:if(0!==(null===(c=e.sent)||void 0===c?void 0:c.length)){e.next=9;break}return e.next=7,Object(o.a)({user:a});case 7:return i=e.sent,e.abrupt("return",i);case 9:if(c[0].name===a.name&&c[0].gender===a.gender){e.next=14;break}return e.next=12,Object(o.d)({newUserInfo:a,user:c[0]});case 12:return d=e.sent,e.abrupt("return",d);case 14:return e.abrupt("return",c[0]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){return function(t){var n=t.setSelf,a=t.onSet,r=localStorage.getItem(e);null!=r&&n(JSON.parse(r)),a((function(t){t instanceof i.a?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}}},73:function(e,t,n){"use strict";var a=n(3),r=n(11),c=(n(1),n(22)),i=n.n(c),o=n(77),s=n(2);t.a=function(e){var t=document.getElementById("modal");return function(n){var c=n.isOpen,d=n.onClose,l=Object(r.a)(n,["isOpen","onClose"]);return c?i.a.createPortal(Object(s.jsx)(o.f,{sx:{position:"fixed",top:0,width:"100vw",height:"100vh",minheight:"100vh",justifyContent:"center",alignItems:"center",zIndex:11,backgroundColor:"rgba(0,0,0, 0.3)"},children:Object(s.jsx)(o.a,{sx:{flexBasis:["90%","80%","45%","35%"],backgroundColor:"white",padding:["10px","30px 5px","20px 50px 50px 50px"]},children:Object(s.jsx)(e,Object(a.a)(Object(a.a)({},l),{},{onClose:d}))})}),t):null}}},96:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),i=n.n(c),o={switch:{backgroundColor:"highlight","input:checked ~ &":{backgroundColor:"primary"}},textarea:{color:"forms",resize:"none",width:"80%",margin:"20px auto",backgroundColor:"muted",fontSize:[3,4,null,5],maxHeight:"60vh"},select:{color:"forms"},label:{fontSize:[3,3,4],display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"10px 0px"},input:{fontSize:[3,3,4],margin:"0px 0px 0px 15px"}},s=n(3),d={color:"background",cursor:"pointer",opacity:.7,transition:"opacity 0.2s ease-in-out",textTransform:"uppercase","&:hover":{opacity:1}},l={display:"flex",alignItems:"center",justifyContent:"space-between",opacity:.7,padding:"10px 20px",borderRadius:"5px",transition:"opacity 0.3s 0.1s ease-in-out","&:hover":{opacity:.9}},u={breakpoints:["400px","1024px","1296px"],colors:{text:"#454f5b",forms:"#454f5b",background:"#fff",primary:"#5c6ac4",secondary:"#006fbb",highlight:"#47c1bf",muted:"#e6e6e6",lightRed:"#e96363",softGreen:"#8cec79",modes:{dark:{forms:"#f2f2f2",background:"#383838",primary:"#3cf",secondary:"#e0f",muted:"#191919"}}},fonts:{body:'"Nunito Sans", sans-serif'},fontSizes:[12,14,16,18,24,32,48,64],fontWeights:{body:400,text:600,heading:700,bold:700},letterSpacings:{body:"normal"},lineHeights:{body:1.5,heading:1.15},styles:{root:{fontFamily:"body",fontWeight:"body"},a:{textDecoration:"none",fontSize:[1,2,3,4],fontWeight:"bold",minHeight:["100px","70px"],color:"text"}},forms:o,buttons:{primary:Object(s.a)(Object(s.a)({},d),{},{bg:"highlight",fontSize:[0,2,3]}),secondary:Object(s.a)(Object(s.a)({},d),{},{bg:"secondary"}),deleted:Object(s.a)(Object(s.a)({},d),{},{bg:"#ff9999"}),icon:Object(s.a)(Object(s.a)({},d),{},{width:"100%",height:"100%",color:"text",borderColor:"text",border:"1px solid",transition:"all 0.2s ease-in-out","&:hover":{opacity:1,color:"secondary"},"&:disabled":{opacity:.7,cursor:"default"}}),close:{cursor:"pointer",margin:"5px",border:"1px solid"}},text:{heading:{textTransform:"uppercase",textAlign:"center",fontFamily:"body",lineHeight:"heading"}},cards:{uncompleted:Object(s.a)({backgroundColor:"lightRed",boxShadow:"0 0 5px red"},l),completed:Object(s.a)({backgroundColor:"softGreen",boxShadow:"0 0 5px green"},l)}},x=n(99),j=n(46),b=n(13),p=n(39),h=n(7),f=n(9),O=n(19),g=n(28),m=n(29),y=n(77),v=n(2);var w=function(e){var t=e.isError,n=Object(b.f)();return Object(v.jsx)(y.f,{sx:{justifyContent:"center",alignItems:"center",minHeight:"90vh"},children:Object(v.jsxs)(y.a,{sx:{backgroundColor:"muted",borderRadius:"5px",padding:["30px 10px 20px","50px 20px 20px"],flexBasis:["95%","85%","50%","35%"],color:"forms"},children:[Object(v.jsx)(y.h,{as:"h1",children:"Szczeg\xf3\u0142y zadania"}),Object(v.jsxs)(y.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(v.jsx)("b",{children:"Tytu\u0142:"})," ",t||Object(v.jsx)(y.o,{sx:{width:"18px",height:"18px"}})]}),Object(v.jsxs)(y.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(v.jsx)("b",{children:"Zako\u0144czone:"})," ",Object(v.jsx)(y.o,{sx:{width:"18px",height:"18px"}})]}),Object(v.jsxs)(y.h,{sx:{m:"20px 0px",textAlign:"left",fontWeight:"text",textTransform:"none"},as:"h2",children:[Object(v.jsx)("b",{children:"Tw\xf3rca:"})," ",Object(v.jsx)(y.o,{sx:{width:"18px",height:"18px"}})]}),Object(v.jsxs)(y.f,{sx:{justifyContent:"space-between",flexWrap:"wrap"},children:[Object(v.jsxs)(y.a,{children:[Object(v.jsx)("b",{children:"Utworzono: "}),Object(v.jsx)(y.o,{sx:{width:"12px",height:"12px"}})]}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)("b",{children:"Aktualizacja: "}),Object(v.jsx)(y.o,{sx:{width:"12px",height:"12px"}})]})]}),Object(v.jsxs)(y.f,{sx:{justifyContent:"space-between",flexWrap:"wrap",mt:"15px"},children:[Object(v.jsx)(y.b,{onClick:function(){n.goBack()},sx:{mb:"15px"},children:"Powr\xf3t"}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)(y.b,{variant:"deleted",sx:{mr:"15px"},children:"Usu\u0144"}),Object(v.jsx)(y.b,{variant:"secondary",children:"Edytuj"})]})]})]})})},k=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={hasError:!1,error:""},a}return Object(O.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(v.jsx)(w,{isError:this.state.error}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),n}(r.a.Component),z=n(5),C=n(27),S=n(26),T=n(51);var P=function(e){var t=e.user,n=Object(T.a)(S.f),a=Object(h.g)(S.d),r=Object(z.a)(a,2),c=r[0],i=r[1],o=Object(h.h)(S.c),s=Object(p.useToasts)().addToast;return Object(v.jsxs)(y.a,{as:"section",sx:{flexBasis:["100%",null,"40%"],minHeight:"100vh",pt:100,pb:50,position:"relative"},children:[Object(v.jsx)(y.h,{as:"h1",sx:{color:"forms"},children:"Nowe zadanie"}),Object(v.jsx)(y.q,{placeholder:"Wpisz swoje zadanie",rows:20,value:c,onChange:function(e){i(e.target.value)}}),Object(v.jsxs)(y.f,{sx:{justifyContent:"space-between",width:"80%",margin:"0px auto"},children:[Object(v.jsx)(y.a,{sx:{color:"forms"},children:o}),Object(v.jsx)(y.b,{"aria-label":"Dodaj zadanie",variant:"secondary",onClick:function(e){c?(null===c||void 0===c?void 0:c.length)>200?s("Tre\u015b\u0107 jest za du\u017ca",{appearance:"info",autoDismiss:!0}):(null===t||void 0===t?void 0:t.contents)&&Object(C.a)({data:{title:c,completed:!1},user_id:t.contents.id}).then((function(e){201!==e.code&&200!==e.code?s("Nie uda\u0142o si\u0119 stworzy\u0107 zadania!",{appearance:"error",autoDismiss:!0}):(s("Stworzono zadanie!",{appearance:"success",autoDismiss:!0}),n()),i("")})).catch((function(){s("Nie uda\u0142o si\u0119 stworzy\u0107 zadania!",{appearance:"error",autoDismiss:!0}),i("")})):s("Dodaj tre\u015b\u0107 zadania",{appearance:"info",autoDismiss:!0})},children:"Dodaj zadanie"})]})]})};var B=function(e){var t=e.completed,n=e.totalCompleted,a=e.totalUncompleted,r=e.handleToggleCompleted,c=e.my,i=e.handleToggleMy;return Object(v.jsxs)(y.f,{sx:{flexWrap:"wrap"},children:[Object(v.jsxs)(y.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",backgroundColor:"softGreen",borderRadius:"5px",boxShadow:"0 0 5px green",opacity:t?0:.9},children:["Zako\u0144czone: ",n]}),Object(v.jsxs)(y.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",backgroundColor:"lightRed",borderRadius:"5px",boxShadow:"0 0 5px red",opacity:t?0:.9},children:["Niezako\u0144czone: ",a]}),Object(v.jsx)(y.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"]},children:Object(v.jsx)(y.p,{defaultChecked:t,onChange:r,label:"Ukryj zako\u0144czone","aria-label":"Ukryj zako\u0144czone"})}),Object(v.jsx)(y.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(v.jsx)(y.p,{defaultChecked:c,onChange:i,label:"Poka\u017c moje","aria-label":"Poka\u017c moje"})})]})},W=n(6),I=n.n(W),D=n(12),N=n(67),E=function(e){var t=e.children,n=e.to,a=e.sx,r=void 0===a?{}:a;return Object(v.jsx)(y.l,{sx:Object(s.a)({},r),to:n,as:j.b,children:t})};var A=function(e){var t=e.title,n=e.id,a=e.completed,r=Object(T.a)(S.f),c=Object(p.useToasts)().addToast,i=function(){var e=Object(D.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)({todo:{id:n},newData:{completed:!0}}).catch((function(e){c(e,{appearance:"error",autoDismiss:!0})}));case 2:c("Zadanie zaznaczono jako wykonane!",{appearance:"success",autoDismiss:!0}),r();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(D.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("Usuni\u0119to zadanie!",{appearance:"info",autoDismiss:!0}),e.next=3,Object(C.b)({todo:{id:n}}).catch((function(e){c(e,{appearance:"error",autoDismiss:!0})}));case 3:r();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(y.c,{variant:a?"completed":"uncompleted",children:[Object(v.jsx)(E,{sx:{flexBasis:"88%",display:"flex",alignItems:"center"},to:"/todo/".concat(n),children:Object(v.jsx)(y.a,{sx:{overflowWrap:"break-word"},children:t})}),Object(v.jsx)(y.i,{onClick:a?o:i,"aria-label":a?"Usuni\u0119cie zadania":"Zaznaczenie zadania jako wykonane",sx:{border:"0",borderLeft:"2px solid",borderLeftColor:"text",borderRadius:"0",fontSize:[1,2,3,4],flexBasis:"10%","&:hover":{color:a?"lightRed":"softGreen",borderLeftColor:a?"lightRed":"softGreen"}},children:a?Object(v.jsx)(N.b,{}):Object(v.jsx)(N.a,{})})]})};var U=function(e){var t=e.todoList;return Object(v.jsxs)(y.g,{columns:[1],sx:{width:"90%",margin:"20px auto"},children:[Array.isArray(t)&&t.length>0&&t.map((function(e){return Object(a.createElement)(A,Object(s.a)(Object(s.a)({},e),{},{key:e.id}))})),Array.isArray(t)&&0===t.length&&Object(v.jsx)("h1",{children:"Brak wynik\xf3w"})]})},H=n(8),R=n(20);var L=function(e){var t=e.pagination,n=e.handleNexPage,a=e.handleBackPage,r=e.handleGoToFirst,c=e.handleGoToLast,i=e.handleSelectPage,o=e.currentPage,s=t.total,d=t.pages;return Object(v.jsxs)(y.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(v.jsxs)(y.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",s]}),Object(v.jsxs)(y.f,{sx:{flexBasis:["100%","auto"]},children:[Object(v.jsx)(y.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:1===o,onClick:r,children:Object(v.jsx)(R.a,{})}),Object(v.jsx)(y.i,{"aria-label":"Cofnij storn\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:o<2,onClick:a,children:Object(v.jsx)(R.c,{})}),Object(v.jsx)(y.n,{"aria-label":"zmie\u0144 stron\u0119",value:o,onChange:i,sx:{width:"60px"},children:d&&Object(H.a)(Array(d).keys()).map((function(e){return Object(v.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(v.jsx)(y.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:o>=d,onClick:n,children:Object(v.jsx)(R.d,{})}),Object(v.jsx)(y.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:o===d,onClick:c,children:Object(v.jsx)(R.b,{})})]})]})};var q=function(){var e=Object(h.h)(S.h),t=e.todoList,n=e.pagination,r=Object(h.h)(S.i),c=r.totalCompleted,i=r.totalUncompleted,o=Object(h.g)(S.b),d=Object(z.a)(o,2),l=d[0],u=d[1],x=Object(h.g)(S.a),j=Object(z.a)(x,2),b=j[0],p=j[1],f=function(){p((function(e){return e+1}))},O=function(){p((function(e){return e-1}))},g=function(){p(1)},m=function(){p(null===n||void 0===n?void 0:n.pages)},w=function(e){p(Number(e.target.value))};return Object(a.useEffect)((function(){b>(null===n||void 0===n?void 0:n.pages)&&p(1)})),Object(v.jsxs)(y.a,{as:"section",bg:"muted",sx:{flexBasis:["100%",null,"60%"],minheight:"100vh",maxHeight:[null,null,"100vh"],pt:50,overflow:"auto"},children:[Object(v.jsx)(y.a,{sx:{width:"90%",margin:"0px auto"},children:Object(v.jsx)(B,{totalCompleted:c,totalUncompleted:i,handleToggleCompleted:function(){u(Object(s.a)(Object(s.a)({},l),{},{completed:!l.completed}))},completed:null===l||void 0===l?void 0:l.completed,handleToggleMy:function(){u(Object(s.a)(Object(s.a)({},l),{},{my:!l.my}))},my:null===l||void 0===l?void 0:l.my})}),Object(v.jsx)(y.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(v.jsx)(L,{pagination:n,currentPage:b,handleBackPage:O,handleNexPage:f,handleGoToFirst:g,handleGoToLast:m,handleSelectPage:w})}),Object(v.jsx)(U,{todoList:t}),Object(v.jsx)(y.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(v.jsx)(L,{pagination:n,currentPage:b,handleBackPage:O,handleNexPage:f,handleGoToFirst:g,handleGoToLast:m,handleSelectPage:w})})]})};var F=function(e){var t=e.isError;return Object(v.jsxs)(y.a,{as:"section",bg:"muted",sx:{flexBasis:["100%",null,"60%"],minheight:"100vh",maxHeight:[null,null,"100vh"],pt:50,overflow:"auto"},children:[Object(v.jsx)(y.a,{sx:{width:"90%",margin:"0px auto"},children:Object(v.jsxs)(y.f,{sx:{flexWrap:"wrap"},children:[Object(v.jsx)(y.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",opacity:0},children:"Zako\u0144czone"}),Object(v.jsx)(y.a,{sx:{flexBasis:["80%",null,"40%"],fontSize:[3,null,1,2],ml:"10px",mb:"10px",fontWeight:"bold",padding:"10px 20px",opacity:0},children:"Niezako\u0144czone:"}),Object(v.jsx)(y.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(v.jsx)(y.p,{label:"Ukryj zako\u0144czone","aria-label":"Ukryj zako\u0144czone"})}),Object(v.jsx)(y.a,{sx:{fontWeight:"bold",padding:"0px 20px",opacity:.9,flexBasis:["100%"],mb:["10px",null,"0px"]},children:Object(v.jsx)(y.p,{label:"Poka\u017c moje ","aria-label":"Poka\u017c moje"})})]})}),Object(v.jsx)(y.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(v.jsxs)(y.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(v.jsxs)(y.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",Object(v.jsx)(y.o,{sx:{width:"14px",height:"14px"}})]}),Object(v.jsxs)(y.f,{sx:{flexBasis:["100%","auto"]},children:[Object(v.jsx)(y.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.a,{})}),Object(v.jsx)(y.i,{"aria-label":"Cofnij stron\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.c,{})}),Object(v.jsx)(y.n,{"aria-label":"Wybierz stron\u0119",sx:{width:"60px"},children:Object(H.a)(Array(10).keys()).map((function(e){return Object(v.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(v.jsx)(y.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:!0,children:Object(v.jsx)(R.d,{})}),Object(v.jsx)(y.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.b,{})})]})]})}),Object(v.jsx)(y.f,{sx:{justifyContent:"center",alignItems:"center"},children:t?Object(v.jsx)(y.a,{sx:{width:"80%",height:"50vh",textAlign:"center"},children:Object(v.jsx)("h1",{children:"Wyst\u0105pi\u0142 problem z sieci\u0105"})}):Object(v.jsx)(y.o,{sx:{width:"80%",height:"80%"}})}),Object(v.jsx)(y.a,{sx:{width:"90%",margin:"20px auto",bg:"highlight",borderRadius:"5px"},children:Object(v.jsxs)(y.f,{sx:{alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",p:"20px",minHeight:"80px"},children:[Object(v.jsxs)(y.a,{sx:{fontSize:1,flexBasis:["100%","auto"],textAlign:"center",mb:["10px","0px"]},children:["\u0141\u0105cznie: ",Object(v.jsx)(y.o,{sx:{width:"14px",height:"14px"}})]}),Object(v.jsxs)(y.f,{sx:{flexBasis:["100%","auto"]},children:[Object(v.jsx)(y.i,{"aria-label":"Id\u017a do pierwszej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.a,{})}),Object(v.jsx)(y.i,{"aria-label":"Cofnij stron\u0119",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.c,{})}),Object(v.jsx)(y.n,{"aria-label":"Wybierz stron\u0119",sx:{width:"60px"},children:Object(H.a)(Array(10).keys()).map((function(e){return Object(v.jsx)("option",{value:e+1,children:e+1},e)}))}),Object(v.jsx)(y.i,{"aria-label":"Nast\u0119pna strona",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px 0px 10px"},disabled:!0,children:Object(v.jsx)(R.d,{})}),Object(v.jsx)(y.i,{"aria-label":"Id\u017a do ostatniej strony",sx:{width:["18%","30px","40px"],height:"40px",margin:"0px 5px"},disabled:!0,children:Object(v.jsx)(R.b,{})})]})]})})]})},M=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(O.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(v.jsx)(F,{isError:!0}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.a.Component),G=n(48),J=function(e){return function(t){var n=Object.assign({},t),a=Object(h.j)(G.c),r=Object(h.i)(G.a);return Object(v.jsx)(e,Object(s.a)({user:r,setNewUser:a},n))}},Z=J(P);var Q=function(){return Object(v.jsxs)(y.f,{sx:{flexWrap:"wrap"},children:[Object(v.jsx)(Z,{}),Object(v.jsx)(M,{children:Object(v.jsx)(r.a.Suspense,{fallback:Object(v.jsx)(F,{}),children:Object(v.jsx)(q,{})})})]})},V=n(75),_=n(98),K=n(72);var Y=function(e){var t=e.onClose,n=e.user,a=e.setNewUser,r=Object(K.a)(),c=r.register,i=r.handleSubmit,o=r.formState.errors;return Object(v.jsxs)("form",{onSubmit:i((function(e){a(Object(s.a)({},e)),t()})),children:[Object(v.jsxs)(y.f,{sx:{justifyContent:o.name||o.email||o.gender?"space-between":"flex-end"},children:[(o.name||o.email||o.gender)&&Object(v.jsx)(y.a,{color:"red",children:"Uzupe\u0142nij wszystkie pola!"}),Object(v.jsx)(y.e,{"aria-label":"Zamknij modal",type:"button",onClick:t})]}),Object(v.jsxs)(y.k,{children:[Object(v.jsx)(y.a,{sx:{width:"100px"},children:"Nazwa:"}),Object(v.jsx)(y.j,Object(s.a)(Object(s.a)({},c("name",{required:!0})),{},{placeholder:"Wpisz nazw\u0119...",defaultValue:"hasValue"===n.state&&n.contents.name||""}))]}),Object(v.jsxs)(y.k,{children:[Object(v.jsx)(y.a,{sx:{width:"100px"},children:"Email:"}),Object(v.jsx)(y.j,Object(s.a)(Object(s.a)({},c("email",{required:!0})),{},{type:"email",placeholder:"Wpisz email...",defaultValue:"hasValue"===n.state&&n.contents.email||""}))]}),Object(v.jsxs)(y.k,{sx:{justifyContent:"flex-start"},children:[Object(v.jsx)(y.a,{sx:{width:"125px"},children:"M\u0119\u017cczyzna"}),Object(v.jsx)(y.m,Object(s.a)(Object(s.a)({},c("gender",{required:!0})),{},{value:"Male",defaultChecked:"hasValue"===n.state&&"Male"===n.contents.gender,name:"gender"}))]}),Object(v.jsxs)(y.k,{sx:{justifyContent:"flex-start"},children:[Object(v.jsx)(y.a,{sx:{width:"125px"},children:"Kobieta"}),Object(v.jsx)(y.m,Object(s.a)(Object(s.a)({},c("gender",{required:!0})),{},{value:"Female",defaultChecked:"hasValue"===n.state&&"Female"===n.contents.gender,name:"gender"}))]}),Object(v.jsx)(y.b,{type:"submit",sx:{width:"100%"},children:"Zapisz"})]})},X=n(73),$=Object(_.a)(X.a,J)(Y);var ee=function(){var e=Object(V.b)(),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(z.a)(c,2),o=i[0],s=i[1],d=function(){s(!o)};return Object(v.jsxs)(y.a,{as:"header",sx:{position:"absolute",top:0,left:0,width:"100vw",padding:"10px 15px",zIndex:"10"},children:[Object(v.jsxs)(y.f,{as:"nav",sx:{justifyContent:"space-between"},children:[Object(v.jsx)(y.a,{children:Object(v.jsx)(y.b,{"aria-label":"Konfiguracja konta",variant:"primary",onClick:d,children:"Konfiguracja konta"})}),Object(v.jsx)(y.a,{children:Object(v.jsx)(y.p,{onChange:function(e){r("default"===n?"dark":"default")}})})]}),Object(v.jsx)($,{onClose:d,isOpen:o})]})},te=r.a.lazy((function(){return n.e(3).then(n.bind(null,101))}));var ne=function(){return Object(v.jsx)(h.b,{children:Object(v.jsx)(j.a,{children:Object(v.jsx)(p.ToastProvider,{placement:"bottom-center",children:Object(v.jsx)(x.a,{theme:u,children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(ee,{}),Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"/todo/:id",children:Object(v.jsx)(k,{children:Object(v.jsx)(r.a.Suspense,{fallback:Object(v.jsx)(w,{}),children:Object(v.jsx)(te,{})})})}),Object(v.jsx)(b.a,{path:"/",children:Object(v.jsx)(Q,{})})]})]})})})})})},ae=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[96,1,2]]]);
//# sourceMappingURL=main.040ebb59.chunk.js.map