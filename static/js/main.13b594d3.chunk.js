(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(t,e,a){t.exports=a(68)},65:function(t,e,a){},66:function(t,e,a){},68:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),o=a(14),l=a(15),s=a(17),u=a(16),m=a(18),d=a(86),p="SEARCH",f="FILTER",h=a(10),b=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).changeHandle=function(t){a.setState({search:t.target.value})},a.handledSearch=function(t){},a.handleShowHide=function(t){a.setState({show:!a.state.show}),a.state.show&&a.state.search&&(a.setState({show:!0}),a.props.FilterTasks(a.state.search))},a.state={search:"",show:!1},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props),c.a.createElement("div",{className:"active-cyan-3 active-cyan-4 mb-2"},this.state.show&&c.a.createElement("input",{className:"myform-control",type:"text",placeholder:"Search","aria-label":"Search",value:this.state.search,onChange:function(e){return t.changeHandle(e)}}),c.a.createElement("i",{className:"myfa fa-search","aria-hidden":"true",onClick:function(e){t.handleShowHide(e)}}))}}]),e}(n.Component),v=Object(h.b)(function(t){return{items:t.cart.items}},function(t){return{FilterTasks:function(e){console.log(e),t(function(t){return{type:p,value:t}}(e))}}})(b),E=a(27),y=function(t){var e=t.addedItems,a=t.totalCount;return c.a.createElement(d.a,{className:"navbar navbar-dark bg-primary justify-content-between"},c.a.createElement("div",{className:"col-6"},c.a.createElement(E.b,{to:"/cart"},c.a.createElement("img",{src:"images/icon.png",height:"50px"}))),c.a.createElement("div",{className:"col-6 text-right left-head"},c.a.createElement("div",null,c.a.createElement(E.b,{to:"/cart",className:"link"},c.a.createElement("i",{class:"mycart fa-cart-plus pl-5","aria-hidden":"true"},e.length>0&&c.a.createElement("span",{className:"cartNumber"},e.length," of ",a-1)))),c.a.createElement(v,null)))},g=function(t){return{type:"ADD_TO_CART",id:t}},O=a(29),j=a(84),I=a(87),N=Object(j.a)({root:{width:"100%"}});function C(t){return"".concat(t,"\xb0C")}var T=function(t){var e=N(),a=c.a.useState([10,999]),n=Object(O.a)(a,2),i=n[0],r=n[1];return c.a.createElement("div",{className:e.root},c.a.createElement(I.a,{min:100,max:1e3,value:i,onChange:function(e,a){r(a),t.handleChange(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:C}),c.a.createElement("div",{className:"mt-15 d-flex justify-content-lg-between"},c.a.createElement("div",null,100),c.a.createElement("div",{className:"strong"},"Price"),c.a.createElement("div",null,1e3)))},w=(a(63),function(t){function e(t,a){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t,a))).handleChange=function(t){n.setState({value:t})},n.handleChangeHorizontal=function(t){n.setState({horizontal:t})},n.handleChangeVertical=function(t){n.setState({vertical:t})},n.state={size:"",value:[]},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"slider custom-labels"},c.a.createElement(T,{handleChange:this.handleChange}),c.a.createElement("div",{className:"btn-center"},c.a.createElement("button",{type:"button",class:"btn btn-success",onClick:function(){t.props.FilterPrice(t.state.value)}},"Apply"))))}}]),e}(n.Component)),k=Object(h.b)(function(t){return{items:t.cart.items}},function(t){return{FilterPrice:function(e){t(function(t){return{type:f,value:t}}(e))}}})(w),x=function(t){var e=Object(n.useState)(""),a=Object(O.a)(e,2),i=a[0],r=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row sort-by"},c.a.createElement("div",{className:"title"},"Sort By"),c.a.createElement("ul",null,c.a.createElement("li",{key:1,className:1===i?"active":"",onClick:function(){t.sortItemBy("price",t.items,1),r(1)}},"Price -- High Low"),c.a.createElement("li",{key:2,className:2===i?"active":"",onClick:function(){t.sortItemBy("price",t.items),r(2)}},"Price -- Low High"),c.a.createElement("li",{key:3,className:3===i?"active":"",onClick:function(){t.sortItemBy("discount",t.items),r(3)}},"Discount"))))},D=a(88),S=a(89),_=function(t){var e=Object(n.useState)([{}]),a=Object(O.a)(e,2),i=a[0],r=a[1],o=Object(h.c)(function(t){return t.cart.items});Object(n.useEffect)(function(){r(o)},[]);return 0===t.items.length?c.a.createElement("div",null,"No Result Found"):i.map(function(e){return c.a.createElement(D.a,{className:"text-center px-md-5",key:e.id},c.a.createElement(D.a.Img,{variant:"top",src:e.img_url,alt:e.name}),c.a.createElement(D.a.Body,null,c.a.createElement("div",{className:"card-title"},e.name),c.a.createElement("div",{className:"card-price"},c.a.createElement("span",null,"\u20b9")," ",e.price," ",c.a.createElement("div",{className:"price-details"},c.a.createElement("span",{className:"actual-price"},function(t,e){var a=100-e,n=100*t;return Math.round(n/a)}(e.price,e.discount)),c.a.createElement("span",{className:"discount-on-item"},e.discount+"% off"," ")))),c.a.createElement(D.a.Footer,null,0===e.quantity?c.a.createElement(S.a,{variant:"info",disabled:!0,onClick:function(){return t.addToCart(e.id)}},"Add to cart"):c.a.createElement(S.a,{className:"btn",variant:"info",onClick:function(){t.addToCart(e.id)}},"Add to cart")))})},A=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"popup"},c.a.createElement("div",{className:"close-me"},c.a.createElement("i",{onClick:this.props.closePopup},"X")),c.a.createElement("div",{className:"popup_inner"},this.props.Component))}}]),e}(n.Component),P=a(43),q=(a(64),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(t){a.props.addToCart(t)},a.notify=function(){return Object(P.b)("Total Items in Cart is "+a.props.totalitemscount)},a.sortItemBy=function(t,e,n){var c=e.sort(function(e,a){return n?e[t]>a[t]?-1:e[t]<a[t]?1:0:e[t]<a[t]?-1:e[t]>a[t]?1:0});console.log(c),a.setState({items:c})},a.state={items:a.props.items,active:"",showPopup:!1,moduelname:""},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"togglePopup",value:function(t){this.setState({showPopup:!this.state.showPopup,moduelname:t})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row filterAndSortMenu"},c.a.createElement("button",{type:"button",class:"btnx btn-primary btn-block",onClick:this.togglePopup.bind(this,"filter")},"Filter"),c.a.createElement("button",{type:"button",class:"btnx btn-primary btn-block",onClick:this.togglePopup.bind(this,"sortby")},"SortBy")),c.a.createElement("div",{className:"col-md-2 side-bar"},c.a.createElement(k,null)),c.a.createElement("div",{className:"col-md-10"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row sortinByItem"},c.a.createElement(x,Object.assign({sortItemBy:this.sortItemBy},this.props))),c.a.createElement("div",{className:"row listing-data"},this.props&&c.a.createElement(_,Object.assign({},this.props,{notify:this.notify})),c.a.createElement(P.a,null)))),this.state.showPopup?c.a.createElement(A,{text:"Close Me",closePopup:this.togglePopup.bind(this),Component:"filter"===this.state.moduelname?c.a.createElement(k,null):c.a.createElement(x,Object.assign({sortItemBy:this.sortItemBy},this.props))}):null)}}]),e}(n.Component)),R=Object(h.b)(function(t){return{items:t.seachReducer.items,totalitemscount:t.cart.totalitemscount}},function(t){return{addToCart:function(e){t(g(e))}}})(q),B=(a(65),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).getTotalDiscount=function(){var t=a.state.totalDisocunt;a.props.items.map(function(e){t+=a.findPrice(e.price,e.discount)-e.price}),a.setState({totalDisocunt:t}),console.log(a.state.totalDisocunt,"totalDiscount")},a.handleRemove=function(t){a.props.removeItem(t),a.getTotalDiscount()},a.handleAddQuantity=function(t){a.props.addQuantity(t),a.getTotalDiscount()},a.handleSubtractQuantity=function(t,e){0!==e&&a.props.subtractQuantity(t)},a.findPrice=function(t,e){var a=100-e,n=100*t;return Math.round(n/a)},a.totalDiscount=function(t,e){a.setState({totalDisocunt:a.state.totalDisocunt+(a.findPrice(t,e)-t)})},a.state={totalDisocunt:0},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.getTotalDiscount()}},{key:"render",value:function(){var t=this,e=this.props.items.length?this.props.items.map(function(e){return c.a.createElement("ul",{className:"row ml-0",key:e.id},c.a.createElement("li",{className:"col-8 list-group-item"},c.a.createElement("h4",null,e.name),c.a.createElement("p",null,c.a.createElement("img",{variant:"top",src:e.img_url,alt:e.name,height:"50px",width:"50px"}),c.a.createElement("span",{className:"mr-3 font-weight-bold"},c.a.createElement("span",null,"\u20b9"),e.price),c.a.createElement("span",{className:"actual-price"},t.findPrice(e.price,e.discount)),c.a.createElement("span",{className:"discount-on-item"},e.discount+"% off"," "),c.a.createElement("button",{onClick:function(){t.handleSubtractQuantity(e.id,e.quantity)},className:"btn btn-primary mr-3"},"-"),e.quantity,c.a.createElement("button",{onClick:function(){t.handleAddQuantity(e.id,e.quantity)},className:"btn btn-primary ml-3"},"+"))),c.a.createElement("li",{className:"col-4 list-group-item d-flex justify-content-center align-items-center"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){t.handleRemove(e.id)}},"Remove")))}):c.a.createElement("p",null,"No Item found in  cart."),a=this.props.total;return c.a.createElement("div",{className:"container di"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl"},c.a.createElement("div",{className:"cart"},c.a.createElement("h5",null,"Your Cart:"),c.a.createElement("ul",{className:"collection"},e))),c.a.createElement("div",{className:"col-sm",style:{paddingTop:"50px"}},c.a.createElement("div",null," ",c.a.createElement("strong",null,"Price Details")," "),c.a.createElement("ul",{className:"col ml-0"},this.props.items.map(function(t){return c.a.createElement("li",{className:"d-flex justify-content-lg-between"},c.a.createElement("div",null,t.name," ( ",t.quantity," )")," ",c.a.createElement("div",null,t.price*t.quantity))}),c.a.createElement("li",{className:"d-flex justify-content-lg-between"},c.a.createElement("div",null,"Total Discount"),c.a.createElement("div",null,this.props.discount)),c.a.createElement("li",{className:"d-flex justify-content-lg-between"}," ",c.a.createElement("div",null,"Total"),c.a.createElement("div",null,a)," ")))))}}]),e}(n.Component)),Q=Object(h.b)(function(t){return{items:t.cart.addedItems,addedItems:t.cart.addedItems,total:t.cart.total,totalItem:t.cart.totalItem,totalitemscount:t.cart.totalitemscount,discount:t.cart.discount}},function(t){return{removeItem:function(e){t(function(t){return{type:"REMOVE_ITEM",id:t}}(e))},addQuantity:function(e){t(function(t){return{type:"ADD_QUANTITY",id:t}}(e))},subtractQuantity:function(e){t(function(t){return{type:"SUB_QUANTITY",id:t}}(e))},totalDiscount:function(e){t(function(t){return{type:"TOTAL_DISCOUNT",id:t}}(e))},totalQuantity:function(e){t(function(t){return{type:"TOTAL_QUANTITY",id:t}}(e))}}})(B),F=a(6),M=function(){return c.a.createElement("div",{className:"col-md-12 footer"},"@Copyright")},U=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={items:a.props.items,active:""},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.state={items:this.props.items,active:""}}},{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(y,Object.assign({},this.props,{addedItems:this.props.addedItems,totalCount:this.props.totalitemscount})))),c.a.createElement("div",{className:"row "},c.a.createElement(F.c,null,c.a.createElement(F.a,{exact:!0,path:"/shop",component:R}),c.a.createElement(F.a,{exact:!0,path:"/cart",component:Q}))),c.a.createElement("div",{className:"row"},c.a.createElement(M,null)))}}]),e}(n.Component),H=Object(h.b)(function(t){return{items:t.cart.items,addedItems:t.cart.addedItems,totalitemscount:t.cart.totalitemscount}},function(t){return{addToCart:function(e){t(g(e))}}})(U),L=(a(66),a(24)),Y=a(8),V="FETCH_PRODUCT_PENDING",z="FETCH_PRODUCT_SUCCESS",J="FETCH_PRODUCT_ERROR";var G={pending:!1,items:[],error:null};var X=a(22),K=[{id:9090,name:"Item1",price:200,discount:10,category:"fiction",img_url:"http://lorempixel.com/500/600/technics/"},{id:9091,name:"Item2",price:250,discount:15,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9092,name:"Item3",price:320,discount:5,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9093,name:"Item4",price:290,discount:0,category:"thriller",img_url:"http://lorempixel.com/500/600/technics/"},{id:9094,name:"Item1",price:500,discount:25,category:"thriller",img_url:"http://lorempixel.com/500/600/technics/"},{id:9095,name:"Item2",price:150,discount:5,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9096,name:"Item3",price:700,discount:22,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9097,name:"Item4",price:350,discount:18,category:"fiction",img_url:"http://lorempixel.com/500/600/technics/"}],W={items:K,addedItems:[],total:0,discount:0,totalitemscount:1},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0,a=function(t,e){var a=100-e,n=100*t;return Math.round(n/a)};switch(e.type){case"ADD_TO_CART":var n=t.addedItems.findIndex(function(t){return e.id===t.id}),c=Object(X.a)(t.items),i=c.findIndex(function(t){return e.id===t.id});if(c[i].quantity-=1,-1!==n){var r=Object(X.a)(t.addedItems),o=r[n];return o.quantity+=1,Object(Y.a)({},t,{items:c,addedItems:r,total:t.total+o.price,discount:t.discount+(a(o.price,o.discount)-o.price),totalitemscount:t.totalitemscount+1})}var l=t.items.findIndex(function(t){return t.id===e.id});if(-1!==l){var s=Object(Y.a)({},t.items[l]);return s.quantity=1,Object(Y.a)({},t,{items:c,addedItems:[].concat(Object(X.a)(t.addedItems),[s]),total:t.total+s.price,discount:t.discount+(a(s.price,s.discount)-s.price),totalitemscount:t.totalitemscount+1})}return Object(Y.a)({},t);case"REMOVE_ITEM":var u=t.addedItems.find(function(t){return e.id===t.id}),m=t.addedItems.filter(function(t){return e.id!==t.id}),d=t.total-u.price*u.quantity;return console.log(u),Object(Y.a)({},t,{addedItems:m,total:d,discount:+(t.discount-(a(u.price,u.discount)-u.price)*u.quantity),totalitemscount:t.totalitemscount-u.quantity});case"ADD_QUANTITY":var p=t.addedItems.findIndex(function(t){return e.id===t.id}),f=Object(X.a)(t.items),h=f.findIndex(function(t){return e.id===t.id});if(0===f[h].quantity?f[h].quantity=0:f[h].quantity-=1,-1!==p){var b=Object(X.a)(t.addedItems),v=b[p];return v.quantity+=1,Object(Y.a)({},t,{items:f,addedItems:b,total:t.total+v.price,discount:t.discount+(a(v.price,v.discount)-v.price),totalitemscount:t.totalitemscount+b.length})}case"SUB_QUANTITY":var E=t.addedItems.findIndex(function(t){return e.id===t.id}),y=Object(X.a)(t.items),g=y.findIndex(function(t){return e.id===t.id});if(y[g].quantity+=1,-1!==E){var O=Object(X.a)(t.addedItems),j=O[E];return j.quantity-=1,Object(Y.a)({},t,{items:y,addedItems:O,total:t.total-j.price,discount:t.discount-(a(j.price,j.discount)-j.price),totalitemscount:t.totalitemscount-1})}break;case"TOTAL_QUANTITY":var I=t.addedItems.findIndex(function(t){return e.id===t.id}),N=Object(X.a)(t.items),C=N.findIndex(function(t){return e.id===t.id});if(-1!==I)return Object(X.a)(t.addedItems)[I].quantity-=1,Object(Y.a)({},t,{totalitemscount:t.totalitems+N[C].quantity});break;default:return t}},$={items:K,addedItems:[],total:0};var tt=Object(L.combineReducers)({productReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:return Object(Y.a)({},t,{pending:!0});case z:return Object(Y.a)({},t,{pending:!1,items:e.payload});case J:return Object(Y.a)({},t,{pending:!1,error:e.error});default:return t}},cart:Z,seachReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(console.log(t,"state"),e.type){case p:var a=e.value,n=(t=Object(Y.a)({},t,{items:K})).items.filter(function(t){return t.name===a});return Object(Y.a)({},t,{items:n});case f:var c=e.value,i=(t=Object(Y.a)({},t,{items:K})).items.filter(function(t){return t.price>c[0]&&t.price<c[1]});return Object(Y.a)({},t,{items:i});default:return t}}}),et=a(50),at=(a(67),Object(L.createStore)(tt,void 0,Object(L.applyMiddleware)(et.a)));r.a.render(c.a.createElement(h.a,{store:at},c.a.createElement(E.a,null,c.a.createElement(H,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.13b594d3.chunk.js.map