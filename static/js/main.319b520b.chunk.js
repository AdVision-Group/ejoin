(this.webpackJsonpejoin=this.webpackJsonpejoin||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(19),r=n.n(i),l=n(12),o=n(2),d=(n(26),n(27),n(28),n(29),n.p+"static/media/logo-white.07ec3912.png");function j(){return Object(a.jsx)("div",{id:"transition",children:Object(a.jsx)("img",{src:d})})}var b=function(e){var t=document.getElementById("transition");t.style.height=window.innerHeight+"px",setTimeout((function(){e(),t.style.removeProperty("bottom"),t.style.top="0px",t.style.height="0px",setTimeout((function(){t.style.removeProperty("top"),t.style.bottom="0px"}),601)}),601)},m=n(6),u=n(7),h=n(14),p=n(9),O=n(8),x=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleScroll=e.handleScroll.bind(Object(h.a)(e)),e.appendAnimationClass=e.appendAnimationClass.bind(Object(h.a)(e)),e}return Object(u.a)(n,[{key:"handleScroll",value:function(){for(var e=document.getElementsByClassName("animated"),t=0;t<e.length;t++){var n=e[t];n.getBoundingClientRect().top<=window.innerHeight&&this.appendAnimationClass(n)}}},{key:"appendAnimationClass",value:function(e){e.classList.add("animate__animated"),e.classList.contains("fadeIn")&&e.classList.add("animate__fadeIn"),e.classList.contains("fadeInUp")&&e.classList.add("animate__fadeInUp"),e.classList.contains("fadeInDown")&&e.classList.add("animate__fadeInDown"),e.classList.contains("fadeInRight")&&e.classList.add("animate__fadeInRight"),e.classList.contains("fadeInLeft")&&e.classList.add("animate__fadeInLeft"),e.classList.contains("backInUp")&&e.classList.add("animate__backInUp"),e.classList.contains("zoomIn")&&e.classList.add("animate__zoomIn"),e.classList.contains("delay-1s")&&e.classList.add("animate__delay-1s"),e.classList.contains("delay-2s")&&e.classList.add("animate__delay-2s"),e.classList.contains("delay-3s")&&e.classList.add("animate__delay-3s"),e.classList.contains("delay-4s")&&e.classList.add("animate__delay-4s"),e.classList.contains("delay-5s")&&e.classList.add("animate__delay-5s")}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return null}}]),n}(s.a.Component),f=n.p+"static/media/landing-mountains.139c0711.png",v=n.p+"static/media/landing-car.01b7f637.png",g=n.p+"static/media/logo.0f2779ea.png",y=(n(30),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"main-landing",children:[Object(a.jsxs)("div",{className:"panel left",onClick:function(){return b((function(){return e.props.history.push("/produkty")}))},children:[Object(a.jsx)("img",{className:"mountains",src:f}),Object(a.jsx)("img",{className:"car",src:v}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("div",{className:"title",children:"Nab\xedjacie stanice"})})]}),Object(a.jsx)(l.b,{className:"panel right",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("div",{className:"title",children:"Sie\u0165 stan\xedc"})})})]})}}]),n}(s.a.Component)),k=Object(o.f)(y);n(39);var N=Object(o.f)((function(e){var t=e.location.pathname.includes("nabijacky")?d:g;return Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("img",{src:t}),Object(a.jsx)("div",{style:{flex:1}}),Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("ion-icon",{name:"bag-outline",class:"cart-icon"}),Object(a.jsx)("ion-icon",{name:"menu",class:"menu-icon"})]})]})})),L=(n(40),n.p+"static/media/landing.5e776512.png"),w=(n.p,n.p+"static/media/charger-1.061a98c0.png"),_=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"screen",id:"landing",children:[Object(a.jsx)("img",{className:"logo animated fadeIn delay-2s",src:g}),Object(a.jsx)("div",{className:"title animated fadeInUp delay-1s",children:"We understand the future"}),Object(a.jsx)("img",{className:"background-image animated fadeInUp",src:L})]})}}]),n}(s.a.Component);n(41),n(42);function I(e){var t=e.title,n=e.onClick,c=e.white?" white":"",s=e.black?" black":"";return Object(a.jsxs)("div",{className:"button",onClick:n,children:[Object(a.jsx)("div",{className:"title"+c+s,children:t}),Object(a.jsx)("ion-icon",{name:"arrow-forward-outline"})]})}n(43);var C=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"").replace(/ +/g,"-");return Object(a.jsxs)("div",{className:"screen product"+(this.props.background?" background":""),style:this.props.style,children:[Object(a.jsx)("div",{className:"info-panel",children:Object(a.jsxs)("div",{className:"panel",children:[Object(a.jsx)("div",{className:"heading green-color",children:"ejoin"}),Object(a.jsx)("div",{className:"name",children:this.props.name}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text",children:"Pohodln\xfd a \u013eahko ovl\xe1date\u013en\xfd wallbox do Va\u0161ej gar\xe1\u017ee, alebo na parkovisko pred dom. Od teraz u\u017e nemus\xedte h\u013eada\u0165 inteligentn\xfa nab\xedjaciu stanicu vo va\u0161om okol\xed."}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"properties",children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("ion-icon",{name:"accessibility"}),Object(a.jsx)("div",{className:"info",children:"Jednoduch\xe9 na pou\u017e\xedvanie"})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("ion-icon",{name:"time"}),Object(a.jsx)("div",{className:"info",children:"R\xfdchle a pohodln\xe9 nab\xedjanie"})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("ion-icon",{name:"leaf"}),Object(a.jsx)("div",{className:"info",children:"\u0160etr\xed \u017eivotn\xe9 prostredie"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(I,{title:"Zisti viac",onClick:function(){return b((function(){return e.props.history.push("/produkty/"+t)}))},black:!0})]})}),Object(a.jsx)("div",{className:"image-panel",children:Object(a.jsx)("img",{className:"image",src:this.props.image})})]})}}]),n}(s.a.Component),B=Object(o.f)(C);n(44);var E=n.p+"static/media/charger-car-mountains-1.ad4caac3.png",S=n.p+"static/media/charger-car-mountains-2.473bad15.png",D=n.p+"static/media/charger-bike-mountains-1.84edba55.png",H=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("home").childNodes[1],t=document.getElementById("scrollbar"),n=document.getElementById("scrollbar").childNodes[0].childNodes[0],a=4*window.innerHeight,c=parseInt(t.offsetHeight/(a/window.innerHeight));n.style.height=c+"px",e.addEventListener("scroll",(function(){var s=(a-window.innerHeight)/e.scrollTop,i=parseInt((t.offsetHeight-c)/s);n.style.top=i+"px"}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"home",children:[Object(a.jsx)(N,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(_,{}),Object(a.jsx)(B,{name:"Dom\xe1ce nab\xedja\u010dky",image:E}),Object(a.jsx)(B,{name:"Business nab\xedja\u010dky",image:S,background:!0}),Object(a.jsx)(B,{name:"Nab\xedja\u010dky pre elektrobicykle",image:D})]}),Object(a.jsx)(U,{})]})}}]),n}(s.a.Component);function U(){return Object(a.jsx)("div",{id:"scrollbar",children:Object(a.jsx)("div",{className:"scrollbar-container",children:Object(a.jsx)("div",{className:"indicator"})})})}n(45);var A=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={configurating:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"product",children:[Object(a.jsx)("div",{className:"image-panel",children:Object(a.jsx)("img",{className:"image",src:w})}),Object(a.jsx)("div",{className:"info-panel",style:{flex:this.state.configurating?2.5:1},children:Object(a.jsxs)("div",{className:"panel",children:[Object(a.jsx)("div",{className:"name",children:this.props.title}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(I,{title:"Konfigurova\u0165",onClick:function(){return e.setState((function(e){return{configurating:!e.configurating}}))},black:!0})]})})]})}}]),n}(s.a.Component);function z(){return Object(a.jsxs)(l.a,{basename:"/",children:[Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(k,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/produkty",children:Object(a.jsx)(H,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/produkty/domace-nabijacky",children:Object(a.jsx)(A,{title:"Dom\xe1ce nab\xedja\u010dky"})}),Object(a.jsx)(o.a,{exact:!0,path:"/produkty/business-nabijacky",children:Object(a.jsx)(A,{title:"Business nab\xedja\u010dky"})}),Object(a.jsx)(o.a,{exact:!0,path:"/produkty/nabijacky-pre-elektrobicykle",children:Object(a.jsx)(A,{title:"Nab\xedja\u010dky pre elektrobicykle"})})]}),Object(a.jsx)(j,{}),Object(a.jsx)(x,{})]})}r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.319b520b.chunk.js.map