(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(48)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),l=n.n(c),o=n(10),i=n(2),s=n(13),m=n(15),u=(n(38),n(39),n(5)),d=n(6),h=n(8),p=n(7),E=n(9),v=n(11),b=n.n(v),f=(n(40),n(41),function(e){return a.createElement("button",{type:"button",className:"hamburger",onClick:e.onClick},a.createElement("span",{className:"hamburger__label"},"Menu"))}),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},n.toggleExpandedState=function(){var e=n.state.expanded;n.setState({expanded:!e})},n.handleHamburgerClick=function(){n.toggleExpandedState()},n.handleOverlayClick=function(){n.toggleExpandedState()},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=b()({header:!0,"header--expanded":this.state.expanded}),t=b()({header__menu:!0,"header__menu--expanded":this.state.expanded});return a.createElement("header",{className:"".concat(e," header--sticky")},a.createElement("div",{className:"header__inner"},a.createElement("div",{className:"header__logo"}),a.createElement("div",{className:t},a.createElement(f,{onClick:this.handleHamburgerClick}),this.props.children)),a.createElement("div",{className:"header__overlay",onClick:this.handleOverlayClick}))}}]),t}(a.PureComponent),O=(n(42),function(e){var t=b()(e.className,"nav");return a.createElement("nav",{className:t},a.createElement("ul",{className:"nav__list"},(e.children||[]).map(function(e){return a.createElement("li",{className:"nav__item",key:"nav_item_".concat(e.props.to)},e)})))}),j=(n(43),n(44),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=b()(this.props.className,"hero");return a.createElement("div",{className:e},a.createElement("div",{className:"hero__inner"},a.createElement("h1",{className:"hero__heading"},this.props.title),a.createElement("p",{className:"hero__text intro"},this.props.intro)))}}]),t}(a.PureComponent)),N=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"home"},a.createElement(s.Helmet,null,a.createElement("title",null,"Home"),a.createElement("meta",{name:"description",content:"Home"})),a.createElement(j,{title:"Hero",intro:"It's where the heart is."}))}}]),t}(a.PureComponent),k=(n(45),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.createElement("section",{className:"test"},a.createElement(s.Helmet,null,a.createElement("title",null,"Test"),a.createElement("meta",{name:"description",content:"Test"})),a.createElement(j,{title:"Test",intro:"Hello there!"}))}}]),t}(a.PureComponent)),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Helmet,{titleTemplate:"SWM - %s",defaultTitle:"SWM"},r.a.createElement("meta",{name:"description",content:""})),r.a.createElement(_,null,r.a.createElement(O,null,r.a.createElement(m.a,{to:"/",className:"nav__link",title:"Home"},"Home"),r.a.createElement(m.a,{to:"/test",className:"nav__link",title:"About"},"Test"))),r.a.createElement("main",{className:"main"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:N}),r.a.createElement(o.a,{exact:!0,path:"/test",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=Object(i.a)();l.a.render(r.a.createElement(o.b,{history:y},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a33aa7e8.chunk.js.map