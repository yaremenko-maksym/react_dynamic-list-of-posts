(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(3),r=n(4),o=n(1),u=n.n(o),i=n(2),l=n.n(i),j=(n(13),n(14),n(15),"https://mate.academy/students-api"),b=function(){var e=Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status,": ").concat(t.text));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts?userId=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status,": ").concat(n.text()));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status,": ").concat(n.text));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=(n(16),n(0)),f=function(){return Object(m.jsx)("div",{className:"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})},h=l.a.memo((function(e){var t=e.user,n=e.selectValue,c=e.selectedPostId,s=e.setSelectedPostId,r=e.setPostLoading,o=e.setSelectedPost,l=e.setSelectedPostComments,j=e.isPostListLoading,d=e.setPostListLoading,h=e.posts,O=e.setPosts,x=Object(i.useCallback)(Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,d(!1),O(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),v=Object(i.useCallback)(Object(a.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===t){e.next=7;break}return e.next=4,p(t.id);case 4:n=e.sent,O(n),d(!1);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),O(null),d(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[t]);return Object(i.useEffect)((function(){d(!0),"All users"!==n?v():x()}),[t]),Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsxs)("ul",{className:"PostsList__list","data-cy":"postDetails",children:[h&&h.map((function(e){return Object(m.jsxs)("li",{className:"PostsList__item",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(m.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){if(c===e.id)return r(!1),s(0),o(null),void l(null);o(null),l(null),r(!0),s(e.id)},children:c===e.id?"Close":"Open"})]},e.id)})),j&&Object(m.jsx)(f,{})]})]})})),O=n(7),x=n.n(O),v=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments?postId=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status,": ").concat(n.text));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments/").concat(t),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())},N=(n(18),l.a.memo((function(e){var t=e.getComments,n=e.postId,c=Object(i.useState)(""),s=Object(r.a)(c,2),o=s[0],l=s[1],j=Object(i.useState)(""),b=Object(r.a)(j,2),p=b[0],d=b[1],f=Object(i.useState)(""),h=Object(r.a)(f,2),O=h[0],v=h[1],w=Object(i.useState)(!0),N=Object(r.a)(w,2),C=N[0],P=N[1],y=Object(i.useState)(!1),S=Object(r.a)(y,2),g=S[0],L=S[1],A=Object(i.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(c){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),L(!0),o&&p&&O){e.next=4;break}return e.abrupt("return");case 4:if(_(p)){e.next=7;break}return P(!1),e.abrupt("return");case 7:return s={postId:n,name:o,email:p,body:O},e.next=10,k(s);case 10:return e.next=12,t();case 12:L(!1),l(""),d(""),v("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o,p,O,n]);return Object(m.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){return A(e)},children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){var t=e.target;l(t.value)}})}),Object(m.jsxs)("div",{className:"form-field",children:[!C&&Object(m.jsx)("p",{className:"NewCommentForm__emailError",children:"Email is invalid"}),Object(m.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:x()("NewCommentForm__input",{"NewCommentForm__input--invalid":!C}),value:p,onChange:function(e){var t=e.target;g&&p!==t.value&&P(!0),d(t.value)},onBlur:function(e){var t=e.target;g&&P(_(t.value))}})]}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:O,onChange:function(e){var t=e.target;v(t.value)}})}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}))),C=(n(19),l.a.memo((function(e){var t=e.selectedPost,n=e.selectedPostComments,c=e.deleteComment,s=e.getComments,a=Object(i.useState)(!0),o=Object(r.a)(a,2),u=o[0],l=o[1];return Object(m.jsxs)("div",{className:"PostDetails","data-cy":"postDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:t.body})}),n&&Object(m.jsxs)("section",{className:"PostDetails__comments",children:[Object(m.jsx)("button",{type:"button",className:"button",onClick:function(){return l(!u)},children:"".concat(u?"Hide":"Show"," ").concat(n.length," comments")}),Object(m.jsx)("ul",{className:"PostDetails__list",children:u&&n.map((function(e){return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return c(e.id)},children:"X"}),Object(m.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(N,{postId:t.id,getComments:s})})})]})}))),P=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users?name=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status,": ").concat(n.text()));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)("All users"),o=Object(r.a)(s,2),l=o[0],j=o[1],b=Object(i.useState)(0),p=Object(r.a)(b,2),O=p[0],x=p[1],k=Object(i.useState)(null),_=Object(r.a)(k,2),N=_[0],y=_[1],S=Object(i.useState)(null),g=Object(r.a)(S,2),L=g[0],A=g[1],D=Object(i.useState)(!1),E=Object(r.a)(D,2),I=E[0],F=E[1],B=Object(i.useState)(!1),G=Object(r.a)(B,2),R=G[0],T=G[1],V=Object(i.useState)(null),H=Object(r.a)(V,2),J=H[0],z=H[1],K=Object(i.useCallback)(Object(a.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=v(O),e.next=4,d(O);case 4:return n=e.sent,e.next=7,t;case 7:c=e.sent,F(!1),y(n),A(c),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),F(!1),y(null),A(null);case 18:case"end":return e.stop()}}),e,null,[[0,13]])}))),[O]);Object(i.useEffect)((function(){K()}),[O]);var M=Object(i.useCallback)(Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(O);case 3:t=e.sent,A(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),A(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[O]),W=Object(i.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:M();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[M]),Y=Object(i.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t);case 3:n=e.sent,c(n[0]),x(0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsxs)("label",{children:["Select a user: \xa0",Object(m.jsxs)("select",{className:"App__user-selector",value:l,onChange:function(e){var t=e.target;T(!0),j(t.value),c(null),z(null),"All users"!==t.value?Y(t.value):T(!1)},children:[Object(m.jsx)("option",{value:"All users",children:"All users"}),Object(m.jsx)("option",{value:"Leanne Graham",children:"Leanne Graham"}),Object(m.jsx)("option",{value:"Ervin Howell",children:"Ervin Howell"}),Object(m.jsx)("option",{value:"Clementine Bauch",children:"Clementine Bauch"}),Object(m.jsx)("option",{value:"Patricia Lebsack",children:"Patricia Lebsack"}),Object(m.jsx)("option",{value:"Chelsey Dietrich",children:"Chelsey Dietrich"}),Object(m.jsx)("option",{value:"Mrs. Dennis Schulist",children:"Mrs. Dennis Schulist"}),Object(m.jsx)("option",{value:"Kurtis Weissnat",children:"Kurtis Weissnat"}),Object(m.jsx)("option",{value:"Nicholas Runolfsdottir V",children:"Nicholas Runolfsdottir V"}),Object(m.jsx)("option",{value:"Glenna Reichert",children:"Glenna Reichert"})]})]})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(h,{user:n,selectValue:l,selectedPostId:O,setSelectedPostId:x,setPostLoading:F,setSelectedPost:y,setSelectedPostComments:A,isPostListLoading:R,setPostListLoading:T,posts:J,setPosts:z})}),N&&Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)(C,{selectedPost:N,selectedPostComments:L,deleteComment:W,getComments:M})}),I&&Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)(f,{})})]})]})};s.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.83e7fc69.chunk.js.map