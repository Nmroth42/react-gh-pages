(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){e.exports=t(153)},129:function(e,a,t){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),i=t.n(o),l=t(222),c=(t(129),t(37)),m=t(38),s=t(68),u=t(56),p=t(69),d=t(42),g=t(229),h=t(231),f=t(220),b=t(232),E=t(210),v=t(16),y=t(43),x=t.n(y),w=t(57),j=t(3),O=t(197),C=t(216),k=t(6),W=t.n(k),B=t(202),N=t(200),T=t(211),S=t(203),R=t(94),G=t.n(R),P=t(233),q=t(230),D=t(97),M=t(234),F=t(205),H=t(206),I=t(207),V=t(208),z=t(209),A=t(95),U=t.n(A),J=t(96),Y=t.n(J),$=t(212),K=t(213),L=t(214),Q=t(226),X=t(199),Z=t(225);function _(e){var a=e.children,t=e.value,n=e.index,o=Object(d.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),t===n&&r.a.createElement(Z.a,{p:3},r.a.createElement(O.a,null,a)))}function ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}Object(j.a)(function(e){return{root:{textTransform:"none",color:"#eee",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}})(function(e){return r.a.createElement(X.a,Object.assign({disableRipple:"disableRipple"},e))});var ae=Object(j.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > span":{maxWidth:400,width:"100%",backgroundColor:"#635ee7"}}})(function(e){return r.a.createElement(Q.a,Object.assign({},e,{TabIndicatorProps:{children:r.a.createElement("span",null)}}))});N.a.propTypes={classes:W.a.objectOf(W.a.string),children:W.a.node,history:W.a.object,width:W.a.oneOf(["lg","md","sm","xl","xs"]).isRequired};var te=Object(D.a)(Object(P.a)({initialWidth:"lg"}),Object(j.a)(function(e){return{root:{"& .MuiBox-root-23":{padding:"2px"}},menuButton:{marginRight:e.spacing(2),background:"white",color:"#094067"},title:{flexGrow:1,color:"#094067",fontWeight:"700 !important"},toolbar:{width:"100%",maxWidth:e.layout.contentMaxWidth,margin:"0 auto"},demo1:{display:"flex",justifyContent:"space-between"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},appBar:{paddingTop:"5px !important",paddingBottom:"5px !important",background:"#fffffe",position:"fixed !important",boxShadow:"none"},headerbtn:{marginRight:e.spacing(1),background:"white",color:"#094067",fontWeight:"600","&:hover":{background:"white"}}}}))(function(e){var a=e.classes,t=(e.children,e.history,e.width,r.a.useState(null)),n=Object(v.a)(t,2),o=(n[0],n[1],r.a.useState(!1)),i=Object(v.a)(o,2),l=i[0],c=i[1],m=r.a.useState(!1),s=Object(v.a)(m,2),u=s[0],p=s[1],d=r.a.useState(0),g=Object(v.a)(d,2),h=g[0],f=g[1],b=r.a.useState(0),y=Object(v.a)(b,2),x=y[0],w=y[1];return r.a.createElement("div",{className:a.root},r.a.createElement(N.a,{className:a.appBar,position:"static"},r.a.createElement(B.a,{className:a.toolbar},r.a.createElement(q.a,{mdUp:"mdUp"},r.a.createElement(S.a,{edge:"start",onClick:function(){return c(!0)},className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(G.a,null)),r.a.createElement(M.a,{open:l,onClose:function(){return c(!1)}},r.a.createElement(F.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(H.a,{button:"button"},r.a.createElement(I.a,null,r.a.createElement(U.a,null)),r.a.createElement(V.a,{primary:"Inbox"})),r.a.createElement(H.a,{button:"button"},r.a.createElement(I.a,null,r.a.createElement(Y.a,null)),r.a.createElement(V.a,{primary:"Drafts"}))),r.a.createElement(z.a,null),r.a.createElement(F.a,{component:"nav","aria-label":"secondary mailbox folders"},r.a.createElement(H.a,{button:"button"},r.a.createElement(V.a,{primary:"Trash"}))))),r.a.createElement(O.a,{component:E.a,to:"/main",variant:"h6",className:a.title},"EDUAGG"),r.a.createElement(T.a,{component:E.a,to:"/login",className:a.headerbtn,color:"inherit"},"\u041f\u043e\u0438\u0441\u043a"),r.a.createElement(T.a,{component:E.a,to:"/login",className:a.headerbtn,color:"inherit"},"\u0412\u0445\u043e\u0434"),r.a.createElement($.a,{open:u,onClose:function(){return p(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(K.a,null,r.a.createElement(L.a,null),r.a.createElement(ae,{variant:"fullWidth",value:h,onChange:function(e,a){f(a)},"aria-label":"simple tabs example"},r.a.createElement(X.a,Object.assign({label:"\u0412\u0445\u043e\u0434"},ee(0))),r.a.createElement(X.a,Object.assign({label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"},ee(1)))),r.a.createElement(_,{value:h,index:0}),r.a.createElement(_,{value:h,index:1},r.a.createElement(ae,{variant:"fullWidth",value:x,onChange:function(e,a){w(a)},"aria-label":"simple tabs example"},r.a.createElement(X.a,Object.assign({label:"\u0423\u0447\u0435\u043d\u0438\u043a"},ee(2))),r.a.createElement(X.a,Object.assign({label:"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c"},ee(3)))),r.a.createElement(_,{value:x,index:0},"2"),r.a.createElement(_,{value:x,index:1},"3")))))))}),ne=t(215);function re(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",r.a.createElement(ne.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var oe=Object(j.a)(function(e){return{root:{},wrapper:{display:"flex",flexDirection:"column",minHeight:"100vh ",background:"#fffffe"},aside:{width:400},asider:{width:0},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},contentWrapper:{marginTop:"64px",background:"#fffffe"},main:{overflow:"hidden"}}})(function(e){var a=e.classes,t=e.children,n=(e.aside,e.asider,e.history);return r.a.createElement("div",{className:a.root},r.a.createElement("main",{className:a.wrapper},r.a.createElement(te,{history:n}),r.a.createElement("div",{className:a.contentWrapper},t),r.a.createElement("footer",{className:a.footer},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{variant:"body1"},"My sticky footer can be found here."),r.a.createElement(re,null)))))}),ie=t(218),le=t(217),ce=function(){function e(){Object(c.a)(this,e)}return Object(m.a)(e,null,[{key:"getTest",value:function(){var e=Object(w.a)(x.a.mark(function e(){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.eduagg.somee.com/schools",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),me=Object(le.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4),color:"#fffffe"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}),se=function(e){var a=e.history;r.a.useEffect(function(){!function(){var e=Object(w.a)(x.a.mark(function e(){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.getTest();case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},[]);var t=r.a.useState([]),n=Object(v.a)(t,2),o=(n[0],n[1],me());return r.a.createElement(oe,{history:a},r.a.createElement("div",{className:o.heroContent},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h3",variant:"h3",align:"center",color:"textPrimary",gutterBottom:"gutterBottom"},"\u0411\u043b\u043e\u043a \u201c\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u0447\u0438\u0442\u044c\u0441\u044f\u201d"),r.a.createElement(O.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:"paragraph"},"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u0440\u0430\u0442\u043a\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435, \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u042f - \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u043e\u043d\u043b\u0430\u0439\u043d-\u0448\u043a\u043e\u043b\u044b\u201d, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0432\u0438\u0434 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (\u0441\u043c. \u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 (\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440));"),r.a.createElement("div",{className:o.heroButtons},r.a.createElement(ie.a,{container:"container",spacing:2,justify:"center"},r.a.createElement(ie.a,{item:"item"},r.a.createElement(T.a,{color:"inherit"},"\u042f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u041e\u043d\u043b\u0430\u0439\u043d-\u0448\u043a\u043e\u043b\u044b")))))),r.a.createElement("div",{className:o.heroContent},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h3",variant:"h3",align:"center",color:"textPrimary",gutterBottom:"gutterBottom"},"\u0411\u043b\u043e\u043a \u201c\u041e \u0441\u0435\u0440\u0432\u0438\u0441\u0435\u201d"),r.a.createElement(O.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:"paragraph"},"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d \u0441\u0435\u0440\u0432\u0438\u0441 (\u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0440, \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432\u0441\u0451 \u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u043e\u043d\u043b\u0430\u0439\u043d-\u0448\u043a\u043e\u043b\u0430\u043c\u0438);"))),r.a.createElement("div",{className:o.heroContent},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h3",variant:"h3",align:"center",color:"textPrimary",gutterBottom:"gutterBottom"},"\u0411\u043b\u043e\u043a \u201c\u041d\u0430\u0448\u0438 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u201d"),r.a.createElement(O.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:"paragraph"},"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (\u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u0448\u043a\u043e\u043b, \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0438 \u043f\u0440\u043e\u0447\u0435\u0435);"))),r.a.createElement("div",{className:o.heroContent},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h3",variant:"h3",align:"center",color:"textPrimary",gutterBottom:"gutterBottom"},"\u0411\u043b\u043e\u043a \u201c\u041e\u043d\u043b\u0430\u0439\u043d-\u0448\u043a\u043e\u043b\u044b\u201d"),r.a.createElement(O.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:"paragraph"},"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u043d\u043b\u0430\u0439\u043d-\u0448\u043a\u043e\u043b\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0438\u0441\u044c \u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0443."))))},ue=Object(le.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}),pe=function(e){var a=e.history,t=ue();return r.a.createElement(oe,{history:a},r.a.createElement("div",{className:t.heroContent},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h3",variant:"h3",align:"center",color:"textPrimary",gutterBottom:"gutterBottom"},"\u041f\u041e\u0418\u0421\u041a"))))},de=t(219),ge=t(223);function he(e){var a=e.children,t=e.value,n=e.index,o=Object(d.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),t===n&&r.a.createElement(Z.a,{p:3},r.a.createElement(O.a,null,a)))}Object(j.a)(function(e){return{root:{textTransform:"none",color:"#eee",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}})(function(e){return r.a.createElement(X.a,Object.assign({disableRipple:"disableRipple"},e))});var fe=Object(j.a)(function(e){return{root:{"& > div":{background:"white"}}}})(function(e){return r.a.createElement(ge.a,e)}),be=Object(j.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > span":{maxWidth:400,width:"100%",backgroundColor:"#3da9fc"}}})(function(e){return r.a.createElement(Q.a,Object.assign({},e,{TabIndicatorProps:{children:r.a.createElement("span",null)}}))});function Ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ve=Object(le.a)(function(e){return{root:{},test:{padding:e.spacing(8,2,6)},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),background:"#3da9fc",color:"#fffffe","&:hover":{background:"#3da9fc"}}}});function ye(e,a){if(e.includes(e.find(function(e){return e.name===a}))){var t=e.find(function(e){return e.name===a});return{error:"error",helperText:"".concat(t.error)}}}var xe=[{path:"/main",component:se,exact:!0},{path:"/search",component:pe,exact:!0},{path:"/login",component:function(e){var a=e.history,t=ve(),n=r.a.useState([{name:"email",error:"\u043e\u043f\u0430\u0447\u043a\u0438"}]),o=Object(v.a)(n,2),i=o[0],l=o[1],c=r.a.useState(0),m=Object(v.a)(c,2),s=m[0],u=m[1],p=r.a.useState(0),d=Object(v.a)(p,2),g=d[0],h=d[1],f=r.a.useState(""),b=Object(v.a)(f,2),E=b[0],y=b[1],x=r.a.useState(""),w=Object(v.a)(x,2),j=w[0],k=(w[1],r.a.useState("")),W=Object(v.a)(k,2),B=W[0],N=(W[1],r.a.useState("")),S=Object(v.a)(N,2),R=S[0],G=S[1],P=r.a.useState(""),q=Object(v.a)(P,2),D=q[0],M=q[1],F=function(e){y(e.target.value)},H=function(e){G(e.target.value)},I=function(e){e.preventDefault();var a={email:E,firstName:j,lastName:B,password:R,passwordConfirmation:D};l([{name:"email",error:"\u043e\u043f\u0430\u0447\u043a\u0438"}]),console.log(a),console.log(E),console.log(R)};return r.a.createElement(oe,{history:a},r.a.createElement(C.a,{className:t.test,component:"main",maxWidth:"xs"},r.a.createElement(be,{variant:"fullWidth",value:s,onChange:function(e,a){u(a),l([]),y(""),G(""),M("")},"aria-label":"simple tabs example"},r.a.createElement(X.a,Object.assign({label:"\u0412\u0445\u043e\u0434"},Ee(0))),r.a.createElement(X.a,Object.assign({label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"},Ee(1)))),r.a.createElement(he,{value:s,index:0},r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(fe,Object.assign({},ye(i,"email"),{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",onChange:F})),r.a.createElement(fe,{error:!0,helperText:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u043e\u0439  \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"pqassword",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",onChange:H}),r.a.createElement(T.a,{fullWidth:!0,type:"submit",variant:"contained",color:"inherit",onClick:I,className:t.submit},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(ie.a,{container:!0},r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement(ie.a,{item:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0412\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u0448\u043a\u043e\u043b\u044b?"))))),r.a.createElement(he,{style:{border:"1px solid #EEEEEE",background:"#F6F6F6"},value:s,index:1},"\xa0",r.a.createElement(be,{style:{background:"white",borderTop:"1px solid #EEEEEE"},variant:"fullWidth",value:g,onChange:function(e,a){h(a),l([]),y(""),G(""),M("")},"aria-label":"simple tabs example"},r.a.createElement(X.a,Object.assign({label:"\u0423\u0447\u0435\u043d\u0438\u043a"},Ee(2))),r.a.createElement(X.a,Object.assign({label:"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c"},Ee(3)))),r.a.createElement(he,{style:{margin:"30px"},value:g,index:0},r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(fe,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email"},ye(i,"email"),{onChange:F})),r.a.createElement(fe,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",onChange:H}),r.a.createElement(fe,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"passwordConfirmation",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password-confirmation",autoComplete:"current-password"}),r.a.createElement(T.a,{fullWidth:!0,type:"submit",variant:"contained",color:"inherit",onClick:I,className:t.submit},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0443\u0447\u0435\u043d\u0438\u043a"),r.a.createElement(O.a,{variant:"body2",gutterBottom:!0},"By creating an account, you agree to the Terms of Service. For more information about GitHub's privacy practices, see the GitHub Privacy Statement. We'll occasionally send you account-related emails."),r.a.createElement(ie.a,{container:!0},r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement(ie.a,{item:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0412\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u0448\u043a\u043e\u043b\u044b?"))))),r.a.createElement(he,{style:{margin:"30px"},value:g,index:1},r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(fe,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",onChange:F}),r.a.createElement(fe,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"passsdword",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(fe,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(T.a,{fullWidth:!0,type:"submit",variant:"contained",color:"inherit",onClick:I,className:t.submit},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),r.a.createElement(O.a,{variant:"body2",gutterBottom:!0},"By creating an account, you agree to the Terms of Service. For more information about GitHub's privacy practices, see the GitHub Privacy Statement. We'll occasionally send you account-related emails."),r.a.createElement(ie.a,{container:!0},r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement(ie.a,{item:!0},r.a.createElement(ne.a,{href:"#",variant:"body2"},"\u0412\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u0448\u043a\u043e\u043b\u044b?")))))),r.a.createElement(de.a,null),r.a.createElement(Z.a,{mt:8})))},exact:!0},{path:"/s",isPrivate:!0,routes:[{path:"/search",component:se}]}],we=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 - Not Found!"),r.a.createElement(E.a,{to:"/"},"Go Home"))},je=function(e){var a=e.component,t=e.redirect,n=e.path,o=e.exact,i=e.isPrivate,l=e.routes,c=Object(d.a)(e,["component","redirect","path","exact","isPrivate","routes"]);return t?r.a.createElement(g.a,{from:n,to:t}):i?r.a.createElement(h.a,{path:n,exact:o,render:function(e){return r.a.createElement(g.a,{to:{pathname:"/authorization"}})}}):r.a.createElement(h.a,{path:n,exact:o,render:function(e){return r.a.createElement(a,Object.assign({routes:l},c,e))}})},Oe=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(b.a,null,xe.map(function(e,a){return r.a.createElement(je,Object.assign({key:a},e))}),r.a.createElement(h.a,{component:we})))}}]),a}(r.a.Component),Ce=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"route-config-wrapper"},r.a.createElement(Oe,null))}}]),a}(n.Component),ke=t(221),We=t(152),Be=t(99),Ne=t.n(Be),Te=Object(We.a)({palette:{type:"light",primary:{main:"#2C4FFE"},background:{contrast:Ne.a[100]}},overrides:{MuiDialog:{paper:{margin:"15px",minWidth:"100vw",minHeight:"100vw"}},MuiButton:{text:{background:"#3da9fc",color:"#fffffe","&:hover":{background:"#3da9fc"}}},MuiBox:{root:{}}},typography:{useNextVariants:!0},props:{MuiButtonBase:{disableRipple:!1}},layout:{contentMaxWidth:1112}});Te.shadows[1]="0 3px 3px rgba(0,0,0,.08)",Te.shadows[2]="0 10px 10px rgba(0,0,0,.08)",Te.shadows[4]="0px 2px 40px 0px rgba(0,0,0,0.08)";var Se=function(e){var a=e.children;return r.a.createElement(ke.a,{theme:Te},a)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(Se,null,r.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,2,1]]]);
//# sourceMappingURL=main.db8ee87a.chunk.js.map