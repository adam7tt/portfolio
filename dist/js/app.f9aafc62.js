(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],u=0,d=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var h=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"is-fixed-top",class:[t.isDark?"is-dracula-background":"is-twitter"]},[a("template",{slot:"brand"},[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[a("p",[t._v("Adam Morishita")])]),a("b-navbar-item",[a("div",{staticClass:"field",on:{click:function(e){return t.say("hi")}}},[a("span",[t._v("🌙")]),a("b-switch",{attrs:{size:"is-small"}}),a("span",[t._v("☀️")])],1)])],1),a("template",{slot:"end"},[a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[t._v("About Me")])]),a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#contact"}},[t._v("Contact")])]),a("b-navbar-item",[a("a",{attrs:{href:"./Adam_Morishita.pdf",target:"_blank"}},[t._v("Resume")])])],1)],2)},n=[],c={name:"Navbar",components:{},data:function(){return{isDark:!0}},methods:{}},l=c,h=a("2877"),u=Object(h["a"])(l,o,n,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("footer",{staticClass:"footer mt-6 has-text-dracula-foreground has-background-dracula-background"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("div",{staticClass:"level sized"},[a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"https://www.google.com"}},[a("i",{staticClass:"fab fa-github"})])])],1),a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"https://www.google.com"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])],1),a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"https://www.google.com"}},[a("i",{staticClass:"fas fa-envelope"})])])],1)])])])])])},f=[],m={name:"Foot"},v=m,b=(a("5fb6"),Object(h["a"])(v,p,f,!1,null,null,null)),g=b.exports,C={components:{Navbar:d,Foot:g}},k=C,w=(a("5c0b"),Object(h["a"])(k,i,r,!1,null,null,null)),_=w.exports,y=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",style:t.cssProps},[a("b-navbar",{staticClass:"is-fixed-top",class:[t.isDark?"is-dracula-background":"is-nord6"]},[a("template",{slot:"brand"},[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[a("p",[t._v("Adam Morishita")])]),a("div",{staticClass:"field custom-nav",on:{click:function(e){return t.darkSwitch()}}},[a("span",[t._v("🌙")]),a("b-switch",{attrs:{size:"is-small",type:"is-nord12"}}),a("span",[t._v("☀️")])],1)],1),a("template",{slot:"end"},[a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[t._v("About Me")])]),a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("b-navbar-item",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#contact"}},[t._v("Contact")])]),a("b-navbar-item",[a("a",{attrs:{href:"./Adam_Morishita.pdf",target:"_blank"}},[t._v("Resume")])])],1)],2),t._m(0),a("section",[a("div",{staticClass:"hero is-fullheight has-background",class:[t.isDark?"is-dracula-purple":"is-nord13"]},[a("img",{staticClass:"hero-background is-transparent",attrs:{alt:"Los Angeles Skyline",src:"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=2530&q=80"}}),t._m(1)])]),a("section",{staticClass:"mt-6",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2 is-bold has-text-centered"},[t._v("About Me")]),a("p",{staticClass:"has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v("I'm Adam Morishita, a software engineer based in Los Angeles, California. I enjoy developing software tools that help people fulfill their needs. I've had to chance to write code for everything from automation scripts to fullstack web applications and even a few mobile applications. I'm a recent graduate from "),a("a",{attrs:{href:"https://www.csun.edu/"}},[t._v("California State University Northridge")]),t._v(" where I earned a bachelor's in computer science and I have been lucky enough to have had internships at organizations like "),a("a",{attrs:{href:"https://www.metalab.csun.edu/"}},[t._v("META + LAB")]),t._v(" and "),a("a",{attrs:{href:"https://mask-me.net/"}},[t._v("HushHush")]),t._v(". I currently work for "),a("a",{attrs:{href:"https://gsep.pepperdine.edu/"}},[t._v(" Pepperdine University's Graduate School of Education and Psychology")]),t._v(". Here are a few of the programming languages and technologies I use: ")]),a("p",{staticClass:"has-text-weight-light has-text-centered"},[t._v(" Javascript, Python, Node.js, Express, Vue.js, SQL, MongoDB, Django, Selenium, HTML, CSS")])])]),a("section",{staticClass:"mt-6",attrs:{id:"portfolio"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2 has-text-centered",attrs:{id:"portfolio"}},[t._v("Some Things I've Built")]),t._l(t.projects,(function(e,s){return a("div",{key:s,staticClass:"columns mt-2"},[a("div",{staticClass:"column is-one-third has-text-centered"},[a("a",{attrs:{href:e.heroku}},[a("vue-freezeframe",{staticClass:"is-16by9 mx-2",attrs:{src:e.gif}})],1),a("p",{staticClass:"has-text-weight-light"},[a("span",[a("a",{attrs:{href:e.heroku}},[a("i",{staticClass:"fas fa-laptop-code"}),t._v("Demo ")]),a("a",{attrs:{href:e.github}},[a("i",{staticClass:"fas fa-code"}),t._v("View Source")])])])]),a("div",{staticClass:"column is-two-thirds"},[a("h1",{staticClass:"is-size-4 "},[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("h1",{staticClass:"is-size-4"},[t._v("What I Used")]),a("p",[t._v(t._s(e.used))])])])}))],2)]),a("section",{staticClass:"mt-6",attrs:{id:"contact"}},[a("h1",{staticClass:"title is-2 is-bold has-text-centered"},[t._v("Get in touch")]),a("p",{staticClass:" has-text-centered"},[t._v("I am currently looking for new opportunities, please feel free to send me a message and I'll try to get back to you!")]),a("div",{staticClass:"mt-6 has-text-centered",class:[t.isDark?" has-background-dracula-background":"has-background-nord6"]},[a("a",{attrs:{href:"mailto:adam7tt@gmail.com"}},[a("b-button",{staticClass:"is-large",class:[t.isDark?"is-dracula-purple":"is-nord12"],attrs:{outlined:""}},[a("h1",[t._v("Contact")])])],1)])]),a("section",[a("footer",{staticClass:"footer mt-6",class:[t.isDark?" has-background-dracula-background":"has-background-nord6"]},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("div",{staticClass:"level sized"},[a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"https://github.com/adam7tt"}},[a("i",{staticClass:"fab fa-github"})])])],1),a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/adam-morishita-19a418170/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])],1),a("div",{staticClass:"level-item has-text-centered"},[a("font",{attrs:{size:"20"}},[a("a",{attrs:{href:"mailto:adam7tt@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"})])])],1)])])])])])],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side__StyledContainer",attrs:{orientation:"left"}},[a("ul",{staticClass:"social__StyledList"},[a("li",[a("a",{staticClass:"social__StyledLink",attrs:{href:"https://github.com/adam7tt"}},[a("i",{staticClass:"fab fa-github"})])]),a("li",[a("a",{staticClass:"social__StyledLink",attrs:{href:"https://www.linkedin.com/in/adam-morishita-19a418170/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("li",[a("a",{staticClass:"social__StyledLink",attrs:{href:"mailto:adam7tt@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"subtitle",staticStyle:{"font-size":"30px"}},[t._v("Hello, my name is")]),a("h1",{staticClass:"title",staticStyle:{"font-size":"80px"}},[t._v("Adam Morishita")])])])}],j={name:"Home",components:{},methods:{darkSwitch:function(){this.isDark=!this.isDark,this.isDark?(this.color="#282a36",this.linkColor="#bd93f9",this.textColor="#f8f8f2"):(this.color="#ECEFF4",this.linkColor="#D08770",this.textColor="#3B4252")}},computed:{cssProps:function(){return{"--color":this.color,"--link-color":this.linkColor,"--text-color":this.textColor}}},data:function(){return{color:"#282a36",linkColor:"#bd93f9",textColor:"#f8f8f2",isDark:!0,projects:[{title:"Realtime Chat",description:"A real time chat application that leverages WebSockets using the Socket.IO library for full-duplex communication between multiple clients. A user can enter into a chat room and chat with other users as well as send their approximate location to other users in a room.",used:"Javascript, Node.js, Socket.io, HTML, CSS",heroku:"https://cryptic-retreat-98541.herokuapp.com/",github:"https://github.com/adam7tt/socketio-chat-app",gif:"images/chatappsped.gif"},{title:"Task Tracker",description:"Task tracker is a task management system built from the ground up to allow users to create and manage their own daily tasks.",used:"Javascript, Vuejs, Nodejs, Express, MongoDB, Mongoose, Jest, HTML, CSS, Buefy",heroku:"",github:"https://github.com/adam7tt/task-app",gif:"images/chatappsped.gif"},{title:"Weather Report",description:"A weather application that uses the weatherstack API, geocoding, and reverse geocoding to allow a user to query for real time weather information around the world",used:"Javascript, Nodejs, Express, HTML, CSS",heroku:"https://morishita-weather-app.herokuapp.com/",github:"https://github.com/adam7tt/weatherstack-app",gif:"images/weather.png"},{title:"Internation Community for Collaborative Content Creation",description:"A SPA created for a client to serve as a hub for an international research project and youth learning initative. The application serves as a collection of brochure pages and as a knowledge repository for the youth participants. Organization heads have access to update a student portal via a headless CMS (ButterCMS) that has been integrated in the project which the student portal then consumes.",used:"Javascript, Vue.js, ButterCMS, HTML, CSS",heroku:"https://ic4.site/",github:"",gif:"images/ic4.png"},{title:"Ninja Smoothies",description:"Ninja Smoothies is a Vue.js application that uses Google's Firebase. Ninja smoothies allows users to interact with a virtual smoothie recipe making platform where they can save combinations of ingredients. Users can create, update, and delete their recipes. The application interacts with Firebase's Firestore databases for persistent storage.",used:"Javascript, Vue.js, Firebase, Firestore, HTML, CSS",heroku:"https://wizardly-khorana-34cc51.netlify.app/",github:"",gif:"images/smoothies.png"},{title:"Stocktrader",description:"Stocktrader is a game-ified stock trading application where users can purchase stock in a company whose valuation will randomly fluctuate. Users can cash out at the end of a day or hold onto their stock in hopes for a bigger payday.",used:"Javascript, Vue.js, HTML, CSS",heroku:"https://morishita-stocktrader.netlify.app/",github:"",gif:"images/stocktrader.png"},{title:"Monster Slayer",description:"Monster slayer is a simple game where the user plays a hero facing a vile monster and perform a variety of moves to defeat it.",used:"Javascript, Vue.js, HTML, CSS",heroku:"https://morishita-monster-slayer.netlify.app/",github:"",gif:"images/monsterhunter.png"}]}}},M=j,A=(a("cccb"),Object(h["a"])(M,S,x,!1,null,null,null)),z=A.exports;s["a"].use(y["a"]);var T=[{path:"/",name:"Home",component:z}],D=new y["a"]({mode:"history",routes:T}),O=D,L=a("289d"),N=(a("5abe"),a("5a58")),P=a.n(N),I=a("5681"),H=a.n(I);s["a"].use(H.a),s["a"].use(P.a),s["a"].use(L["a"]),s["a"].config.productionTip=!1,new s["a"]({router:O,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"5ced":function(t,e,a){},"5fb6":function(t,e,a){"use strict";var s=a("6a5f"),i=a.n(s);i.a},"6a5f":function(t,e,a){},"9c0c":function(t,e,a){},cccb:function(t,e,a){"use strict";var s=a("5ced"),i=a.n(s);i.a}});
//# sourceMappingURL=app.f9aafc62.js.map