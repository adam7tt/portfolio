(function(t){function a(a){for(var s,o,n=a[0],c=a[1],l=a[2],u=0,d=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var h=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("router-view")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-navbar",{staticClass:"is-fixed-top",class:[t.isDark?"is-dracula-background":"is-twitter"]},[e("template",{slot:"brand"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("p",[t._v("Adam Morishita")])]),e("b-navbar-item",[e("div",{staticClass:"field",on:{click:function(a){return t.say("hi")}}},[e("span",[t._v("🌙")]),e("b-switch",{attrs:{size:"is-small"}}),e("span",[t._v("☀️")])],1)])],1),e("template",{slot:"end"},[e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[t._v("About Me")])]),e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#contact"}},[t._v("Contact")])]),e("b-navbar-item",[e("a",{attrs:{href:"./Adam_Morishita.pdf",target:"_blank"}},[t._v("Resume")])])],1)],2)},n=[],c={name:"Navbar",components:{},data:function(){return{isDark:!0}},methods:{}},l=c,h=e("2877"),u=Object(h["a"])(l,o,n,!1,null,null,null),d=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("footer",{staticClass:"footer mt-6 has-text-dracula-foreground has-background-dracula-background"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("div",{staticClass:"level sized"},[e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"fab fa-github"})])])],1),e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])],1),e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"fas fa-envelope"})])])],1)])])])])])},f=[],m={name:"Foot"},v=m,g=(e("5fb6"),Object(h["a"])(v,p,f,!1,null,null,null)),b=g.exports,k={components:{Navbar:d,Foot:b}},C=k,w=(e("5c0b"),Object(h["a"])(C,i,r,!1,null,null,null)),_=w.exports,y=e("8c4f"),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper",style:t.cssProps},[e("b-navbar",{staticClass:"is-fixed-top",class:[t.isDark?"is-dracula-background":"nord4"]},[e("template",{slot:"brand"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("p",[t._v("Adam Morishita")])]),e("div",{staticClass:"field custom-nav",on:{click:function(a){return t.darkSwitch()}}},[e("span",[t._v("🌙")]),e("b-switch",{attrs:{size:"is-small",type:"is-nord12"}}),e("span",[t._v("☀️")])],1)],1),e("template",{slot:"end"},[e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[t._v("About Me")])]),e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),e("b-navbar-item",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#contact"}},[t._v("Contact")])]),e("b-navbar-item",[e("a",{attrs:{href:"./Adam_Morishita.pdf",target:"_blank"}},[t._v("Resume")])])],1)],2),t._m(0),e("section",[e("div",{staticClass:"hero is-fullheight has-background",class:[t.isDark?"is-dracula-purple":"nord13"]},[e("img",{staticClass:"hero-background is-transparent",attrs:{alt:"Los Angeles Skyline",src:"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=2530&q=80"}}),t._m(1)])]),e("section",{staticClass:"mt-6",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-2 is-bold has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v("About Me")]),e("p",{staticClass:"has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v("I'm Adam Morishita, a software engineer based in Los Angeles, California. I enjoy developing software tools that helps people fulfill their needs. I've had to chance to write code for everything from automation scripts to fullstack web applications and even a few mobile applications. I'm a recent graduate from "),e("a",{attrs:{href:"https://www.csun.edu/"}},[t._v("California State University Northridge")]),t._v(" where I earned a bachelor's in computer science and I have been lucky enough to have had internships at organizations like "),e("a",{attrs:{href:"https://www.metalab.csun.edu/"}},[t._v("META + LAB")]),t._v(" and "),e("a",{attrs:{href:"https://mask-me.net/"}},[t._v("HushHush")]),t._v(". I currently work for "),e("a",{attrs:{href:"https://gsep.pepperdine.edu/"}},[t._v(" Pepperdine University's Graduate School of Education and Psychology")]),t._v(". Here are a few of the programming languages and technologies I use: ")]),e("p",{staticClass:"has-text-weight-light has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v(" Javascript, Python, Node.js, Express, Vue.js, SQL, MongoDB, Django, Selenium, HTML, CSS")])])]),e("section",{staticClass:"mt-6",attrs:{id:"portfolio"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-2 has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"],attrs:{id:"portfolio"}},[t._v("Some Things I've Built")]),t._l(t.projects,(function(a,s){return e("div",{key:s,staticClass:"columns mt-2",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[e("div",{staticClass:"column is-one-third has-text-centered"},[e("a",{attrs:{href:a.heroku}},[e("vue-freezeframe",{staticClass:"is-16by9 mx-2",attrs:{src:a.gif}})],1),e("p",{staticClass:"has-text-weight-light"},[e("span",[e("a",{attrs:{href:a.heroku}},[e("i",{staticClass:"fas fa-laptop-code"}),t._v("Demo ")]),e("a",{attrs:{href:a.github}},[e("i",{staticClass:"fas fa-code"}),t._v("View Source")])])])]),e("div",{staticClass:"column is-two-thirds"},[e("h1",{staticClass:"is-size-4 "},[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.description))]),e("h1",{staticClass:"is-size-4"},[t._v("What I Used")]),e("p",[t._v(t._s(a.used))])])])}))],2)]),e("section",{staticClass:"mt-6",attrs:{id:"contact"}},[e("h1",{staticClass:"title is-2 is-bold has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v("Get in touch")]),e("p",{staticClass:" has-text-centered",class:[t.isDark?"has-text-dracula-foreground ":"has-text-nord0"]},[t._v("I am currently looking for new opportunities, please feel free to send me a message and I'll try to get back to you!")]),e("div",{staticClass:"mt-6 has-text-centered",class:[t.isDark?" has-background-dracula-background":"nord4"]},[e("a",{attrs:{href:"mailto:adam7tt@gmail.com"}},[e("b-button",{attrs:{type:[t.isDark?"is-dracula-purple is-large":"is-nord12 is-large"],outlined:""}},[e("h1",[t._v("Contact")])])],1)])]),e("section",[e("footer",{staticClass:"footer mt-6",class:[t.isDark?" has-background-dracula-background has-text-dracula-foreground":"nord4 has-text-nord0"]},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("div",{staticClass:"level sized"},[e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"https://github.com/adam7tt"}},[e("i",{staticClass:"fab fa-github"})])])],1),e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/adam-morishita-19a418170/"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])],1),e("div",{staticClass:"level-item has-text-centered"},[e("font",{attrs:{size:"20"}},[e("a",{attrs:{href:"mailto:adam7tt@gmail.com"}},[e("i",{staticClass:"fas fa-envelope"})])])],1)])])])])])],1)},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"side__StyledContainer",attrs:{orientation:"left"}},[e("ul",{staticClass:"social__StyledList"},[e("li",[e("a",{staticClass:"social__StyledLink",attrs:{href:"https://github.com/adam7tt"}},[e("i",{staticClass:"fab fa-github"})])]),e("li",[e("a",{staticClass:"social__StyledLink",attrs:{href:"https://www.linkedin.com/in/adam-morishita-19a418170/"}},[e("i",{staticClass:"fab fa-linkedin-in"})])]),e("li",[e("a",{staticClass:"social__StyledLink",attrs:{href:"mailto:adam7tt@gmail.com"}},[e("i",{staticClass:"fas fa-envelope"})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"subtitle is-3"},[t._v("Hello, my name is")]),e("h1",{staticClass:"title is-1"},[t._v("Adam Morishita")])])])}],j={name:"Home",components:{},methods:{darkSwitch:function(){this.isDark=!this.isDark,this.isDark?(this.color="#282a36",this.linkColor="#bd93f9"):(this.color="#D8DEE9",this.linkColor="#BF616A")}},computed:{cssProps:function(){return{"--test":this.num+"px","--color":this.color,"--link-color":this.linkColor}}},data:function(){return{color:"#282a36",linkColor:"#bd93f9",isDark:!0,projects:[{title:"Realtime Chat",description:"A real time chat application that leverages WebSockets using the Socket.IO library for full-duplex communication between multiple clients. A user can enter into a chat room and chat with other users as well as send their approximate location to other users in a room.",used:"Javascript, Node.js, Socket.io, HTML, CSS",heroku:"https://cryptic-retreat-98541.herokuapp.com/",github:"https://github.com/adam7tt/socketio-chat-app",gif:"images/chatappsped.gif"},{title:"Task Tracker",description:"Task tracker is a task management system built from the ground up to allow users to create and manage their own daily tasks.",used:"Javascript, Vuejs, Nodejs, Express, MongoDB, Mongoose, Jest, HTML, CSS, Buefy",heroku:"",github:"https://github.com/adam7tt/task-app",gif:"images/chatappsped.gif"},{title:"Weather Report",description:"A weather application that uses the weatherstack API, geocoding, and reverse geocoding to allow a user to query for real time weather information around the world",used:"Javascript, Nodejs, Express, HTML, CSS",heroku:"https://morishita-weather-app.herokuapp.com/",github:"https://github.com/adam7tt/weatherstack-app",gif:"images/weather.png"},{title:"Internation Community for Collaborative Content Creation",description:"A SPA created for a client to serve as a hub for an international research project and youth learning initative. The application serves as a collection of brochure pages and as a knowledge repository for the youth participants. Organization heads have access to update a student portal via a headless CMS (ButterCMS) that has been integrated in the project which the student portal then consumes.",used:"Javascript, Vue.js, ButterCMS, HTML, CSS",heroku:"https://ic4.site/",github:"",gif:"images/ic4.png"},{title:"Ninja Smoothies",description:"Ninja Smoothies is a Vue.js application that uses Google's Firebase. Ninja smoothies allows users to interact with a virtual smoothie recipe making platform where they can save combinations of ingredients. Users can create, update, and delete their recipes. The application interacts with Firebase's Firestore databases for persistent storage.",used:"Javascript, Vue.js, Firebase, Firestore, HTML, CSS",heroku:"https://wizardly-khorana-34cc51.netlify.app/",github:"",gif:"images/smoothies.png"},{title:"Stocktrader",description:"Stocktrader is a game-ified stock trading application where users can purchase stock in a company whose valuation will randomly fluctuate. Users can cash out at the end of a day or hold onto their stock in hopes for a bigger payday.",used:"Javascript, Vue.js, HTML, CSS",heroku:"https://morishita-stocktrader.netlify.app/",github:"",gif:"images/stocktrader.png"},{title:"Monster Slayer",description:"Monster slayer is a simple game where the user plays a hero facing a vile monster and perform a variety of moves to defeat it.",used:"Javascript, Vue.js, HTML, CSS",heroku:"https://morishita-monster-slayer.netlify.app/",github:"",gif:"images/monsterhunter.png"}]}}},M=j,D=(e("cccb"),Object(h["a"])(M,x,S,!1,null,null,null)),A=D.exports;s["a"].use(y["a"]);var T=[{path:"/",name:"Home",component:A}],O=new y["a"]({mode:"history",routes:T}),z=O,L=e("289d"),N=(e("5abe"),e("5a58")),P=e.n(N),I=e("5681"),H=e.n(I);s["a"].use(H.a),s["a"].use(P.a),s["a"].use(L["a"]),s["a"].config.productionTip=!1,new s["a"]({router:z,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"5ced":function(t,a,e){},"5fb6":function(t,a,e){"use strict";var s=e("6a5f"),i=e.n(s);i.a},"6a5f":function(t,a,e){},"9c0c":function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("5ced"),i=e.n(s);i.a}});
//# sourceMappingURL=app.f4b01636.js.map