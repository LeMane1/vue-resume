(function(e){function t(t){for(var s,l,o=t[0],c=t[1],r=t[2],_=0,u=[];_<o.length;_++)l=o[_],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,r||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},i=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-resume/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0367":function(e,t,a){},"08b1":function(e,t,a){},"18fa":function(e,t,a){e.exports=a.p+"img/poly.053b02ec.png"},"1c96":function(e,t,a){"use strict";a("79cf")},"26fb":function(e,t,a){},"2b8a":function(e,t,a){e.exports=a.p+"img/picture.dddc4bb8.jpg"},"2f73":function(e,t,a){"use strict";a("08b1")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:e.scrollLock,expression:"scrollLock"}],staticClass:"main_wrapper"},[a("div",{staticClass:"app_header",class:{activeHeader:e.activeHeader}},[a("div",{staticClass:"header_cont_menu"},[a("div",{staticClass:"header_title_cont",class:{activeTitle:e.activeHeader}},[a("p",{staticClass:"header_title1"},[e._v("Alexandr Zelenin")]),a("p",{staticClass:"header_title2"},[e._v("Resume")])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[!0===e.maxScreen?a("ul",{staticClass:"main_header_navbar"},[a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#about"},expression:"{ element: '#about' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" About ")])]),a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#skills"},expression:"{ element: '#skills' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" Skills ")])]),a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#education"},expression:"{ element: '#education' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" Education ")])]),a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#achievements"},expression:"{ element: '#achievements' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" Achievements ")])]),a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#plans"},expression:"{ element: '#plans' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" Plans ")])]),a("li",{staticClass:"main_header_link"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#contact"},expression:"{ element: '#contact' }"}],staticClass:"main_header_button",class:{activeButtonHeader:e.activeHeader}},[e._v(" Contact ")])])]):a("button",{staticClass:"hamburger",on:{click:e.editModule}},[a("div",{staticClass:"burger"},[a("span",{class:{active:e.activeHumburger,activeBurgerBlue:e.activeHeader}})])])])],1),e._m(0),a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.module,expression:"module === true"}],staticClass:"module_window animate__animated",class:{animate__fadeInLeft:e.module,animate__fadeOutLeft:!e.module}},[a("ul",{staticClass:"main_header_navbar_mobile"},[a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#about"},expression:"{ element: '#about' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v("About")])]),a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#skills"},expression:"{ element: '#skills' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v("Skills")])]),a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#education"},expression:"{ element: '#education' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v(" Education ")])]),a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#achievements"},expression:"{ element: '#achievements' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v("Achievements")])]),a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#plans"},expression:"{ element: '#plans' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v("Plans")])]),a("li",{staticClass:"main_header_link_mobile"},[a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#contact"},expression:"{ element: '#contact' }"}],staticClass:"main_header_button_mobile",on:{click:e.scrollBurger}},[e._v("Contact")])])])])])],1),a("div",{staticClass:"container"},[a("Header"),a("About"),a("Skills",{attrs:{nodataSkills:this.nodataSkills}}),a("Education"),a("Achievements"),a("Plans"),a("Contact")],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progress-container"},[a("div",{staticClass:"progress-bar",attrs:{id:"myBar"}})])}],l=(a("77ed"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("transition",{attrs:{name:"check"}},[!0===e.check_seen?a("div",{staticClass:"check_mark"},[a("div",{staticClass:"check_mark_cont"},[a("p",[a("i",{staticClass:"far fa-check-square"}),e._v("Copied to the clipboard!")])])]):e._e()]),a("header",[a("div",{staticClass:"title"},[e._m(0),a("p",{staticClass:"animate__animated animate__fadeInLeft subtitle_2"},[e._v(" Alexandr Zelenin ")]),a("p",{staticClass:"animate__animated animate__fadeInLeft subtitle_3"},[e._v(" Frontend Developer ")]),a("div",{staticClass:"wrapper animate__animated animate__fadeInLeft"},[a("button",{staticClass:"icon phone",on:{click:e.clickPhone}},[a("div",{staticClass:"tooltip"},[e._v("Phone")]),e._m(1)]),a("button",{staticClass:"icon email",attrs:{href:"#!"},on:{click:e.clickEmail}},[a("div",{staticClass:"tooltip"},[e._v("Email")]),e._m(2)]),e._m(3),e._m(4),e._m(5)]),a("transition",{attrs:{name:"slide-fade"}},[!0===e.seen_phone?a("div",{staticClass:"phone_class"},[a("div",{staticClass:"phone_number"},[a("p",{staticClass:"phone_number_text"},[e._v(e._s(this.phone))])]),a("button",{staticClass:"icon_copy",on:{click:e.checkFunc}},[a("i",{staticClass:"fas fa-copy"})])]):e._e(),!0===e.seen_email?a("div",{staticClass:"phone_class"},[a("div",{staticClass:"phone_number"},[a("p",{staticClass:"phone_number_text"},[e._v(e._s(this.email))])]),a("button",{staticClass:"icon_copy",on:{click:e.checkFunc}},[a("i",{staticClass:"fas fa-copy"})])]):e._e()])],1),e._m(6)]),e._m(7)],1)}),o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animate__animated animate__fadeInLeft cont_sub_1"},[a("p",{staticClass:"subtitle_1"},[e._v("Hi! I am")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fas fa-phone-alt"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"icon instagram",attrs:{href:"https://www.instagram.com/zelenin.al/",target:"_blank"}},[a("div",{staticClass:"tooltip"},[e._v("Instagram")]),a("span",[a("i",{staticClass:"fab fa-instagram"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"icon github",attrs:{href:"https://github.com/LeMane1",target:"_blank"}},[a("div",{staticClass:"tooltip"},[e._v("Github")]),a("span",[a("i",{staticClass:"fab fa-github"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"icon vk",attrs:{href:"https://vk.com/aleksstandup",target:"_blank"}},[a("div",{staticClass:"tooltip"},[e._v("VK")]),a("span",[a("i",{staticClass:"fab fa-vk"})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animate__animated animate__fadeInRight pic_container"},[s("img",{staticClass:"pic_class",attrs:{src:a("2b8a"),alt:"It's me"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"arrow_down_cont"},[a("div",{staticClass:"arrow-down"},[a("span"),a("span"),a("span")])])}],c=(a("f13c"),{data:function(){return{seen_phone:!1,seen_email:!1,check_seen:!1,choose:"",phone:"+7(999)-519-76-40",email:"alexandrzelenin2013@yandex.ru"}},methods:{clickPhone:function(){this.seen_email?(this.seen_email=!1,this.seen_phone=!0,this.choose=this.phone):(this.choose=this.phone,this.seen_phone=!this.seen_phone)},clickEmail:function(){this.seen_phone?(this.seen_phone=!1,this.seen_email=!0,this.choose=this.email):(this.choose=this.email,this.seen_email=!this.seen_email)},checkFunc:function(){var e=this;this.$clipboard(this.choose),this.check_seen=!0,setTimeout((function(){e.check_seen=!1}),1500)}}}),r=c,m=(a("8baf"),a("2877")),_=Object(m["a"])(r,l,o,!1,null,null,null),u=_.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("p",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"comp_title",attrs:{id:"skills"}},[e._v(" Skills ")]),a("div",{staticClass:"skills_cont",attrs:{id:"circle"}},[a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.html,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue",gap:10}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("HTML")])]),a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.css,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue"}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("CSS")])]),a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.js,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue"}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("JS")])]),a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.php,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue"}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("PHP")])]),a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.vue,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue"}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("Vue.js")])]),a("vue-ellipse-progress",{staticClass:"skill",attrs:{progress:e.progress.react,animation:"reverse 1500 400",legend:!0,angle:-90,size:180,noData:e.nodataSkills,color:"#61a3e6",thickness:10,legendClass:"skill_class",dot:"10 blue"}},[a("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("/100")]),a("p",{staticClass:"skill_name",attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("React.js")])])],1)])},v=[],p={data:function(){return{progress:{html:90,css:80,js:70,php:50,vue:60,react:40}}},props:{nodataSkills:Boolean},methods:{skiLL:function(){console.log(this.nodataSkills)}}},h=p,f=(a("2f73"),Object(m["a"])(h,d,v,!1,null,null,null)),b=f.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"comp_title",attrs:{id:"education"}},[e._v("Education")]),a("div",{staticClass:"poly_container"},[a("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:{down:"animate__animated animate__flipInX",up:""},expression:"{\n      down: 'animate__animated animate__flipInX',\n      up: '',\n    }",modifiers:{repeat:!0}}],staticClass:"poly_subcontainer"},[e._m(0),e._m(1)]),a("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:{down:"animate__animated animate__flipInX",up:""},expression:"{\n      down: 'animate__animated animate__flipInX',\n      up: '',\n    }",modifiers:{repeat:!0}}],staticClass:"poly_subcontainer"},[e._m(2),e._m(3)])])])},g=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contpolypic"},[s("img",{staticClass:"poly_pic",attrs:{src:a("18fa"),alt:"Peter the Great St.Petersburg Polytechnic University"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"poly_text"},[a("p",{staticClass:"poly_title"},[e._v("Peter the Great St.Petersburg Polytechnic University")]),a("p",{staticClass:"poly_subtitle"},[e._v(" B.S.E. in Instrumentation (2016-2020) ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contpolypic"},[s("img",{staticClass:"poly_pic",attrs:{src:a("18fa"),alt:"Peter the Great St.Petersburg Polytechnic University"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"poly_text"},[a("p",{staticClass:"poly_title"},[e._v("Peter the Great St.Petersburg Polytechnic University")]),a("p",{staticClass:"poly_subtitle"},[e._v(" M.E. in Medical Instrumentation (2020-2022) ")])])}],k={},w=k,x=(a("1c96"),Object(m["a"])(w,C,g,!1,null,null,null)),y=x.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("p",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"comp_title",attrs:{id:"about"}},[e._v(" About ")]),s("div",{staticClass:"about_cont"},[s("div",{staticClass:"about-pic-cont"},[s("img",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"about-pic",attrs:{src:a("efb1"),alt:"About me"}})]),s("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__fadeInUp",expression:"'animate__animated animate__fadeInUp'"}],staticClass:"about-description"},[s("p",{staticClass:"about_text"},[e._v("I am 23 years old and I study at Polytechnic University for the 2nd year of Master's degree.")]),s("p",{staticClass:"about_text"},[e._v("I have Bachelor's Degree in Instrumentation, where I studied some programming languages such as PHP or C.")]),s("p",{staticClass:"about_text"},[e._v("But I decide to learn Web technologies that's why I studied basics of HTML and CSS, peculiarities of JS.")]),s("p",{staticClass:"about_text"},[e._v("I do not stop there therefore I continued to study related topics, for example CSS frameforks like as Bootstrap or MaterailUI, system of control of version git, CSS-preprocessors (SASS(SCCS)), JS-frameforks like as Vue(Vuex) or React(Redux). This resume was written at Vue.js. ")]),s("p",{staticClass:"about_text"},[e._v("I have no commercial experience but I have experience of development (6 months).")])])])])},I=[],E={},H=E,P=(a("b8ab"),Object(m["a"])(H,S,I,!1,null,null,null)),$=P.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("p",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"comp_title",attrs:{id:"plans"}},[e._v(" Plans ")]),s("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"plans_cont"},[e._m(0),s("div",{staticClass:"plans-pic-cont"},[s("img",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"plans-pic",attrs:{src:a("71ae"),alt:"Plans"}})])])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plans-description"},[a("p",{staticClass:"plans_text"},[e._v(" In the future, I plan to study the features of JS, its frameworks and libraries, learn new frameworks (Angular), understand existing solutions and make them better. Also, since the value of the fullstack specialists is increasing every year, I plan to study the development of the server side. ")])])}],U={},j=U,B=(a("62c9"),Object(m["a"])(j,L,N,!1,null,null,null)),O=B.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"contact_container",attrs:{id:"contact"}},[e._m(0),e._m(1),e._m(2)])},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact_part"},[a("p",{staticClass:"contact_title_1"},[e._v("Alexandr Zelenin")]),a("p",{staticClass:"contact_title_2"},[e._v("Resume")]),a("p",{staticClass:"contact_year"},[e._v("2021")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact_part"},[a("p",{staticClass:"button_label"},[e._v("Write me an email")]),a("button",{staticClass:"contact_button"},[a("a",{staticClass:"button_contact_link",attrs:{href:"mailto:alexandrzelenin2013@yandex.ru"}},[e._v("Write")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact_part_social"},[a("a",{staticClass:"social_contact",attrs:{href:"https://www.instagram.com/zelenin.al/",target:"_blank"}},[e._v("Instagram")]),a("a",{staticClass:"social_contact",attrs:{href:"https://github.com/LeMane1",target:"_blank"}},[e._v("Github")]),a("a",{staticClass:"social_contact",attrs:{href:"https://vk.com/aleksstandup",target:"_blank"}},[e._v("Vkontakte")])])}],T={},z=T,D=(a("610c"),Object(m["a"])(z,A,M,!1,null,null,null)),W=D.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("p",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__slideInUp",expression:"'animate__animated animate__slideInUp'"}],staticClass:"comp_title",attrs:{id:"achievements"}},[e._v(" Achievements ")]),a("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animate__animated animate__flipInY",expression:"'animate__animated animate__flipInY'"}],staticClass:"achieve_cont"},[e._m(0),e._m(1),e._m(2)])])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"achieve"},[a("i",{staticClass:"fas fa-check-square"}),e._v("Course on Stepik: HTML + CSS ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"achieve"},[a("i",{staticClass:"fas fa-check-square"}),e._v("Course on Stepik: Javascript ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"achieve"},[a("i",{staticClass:"fas fa-check-square"}),e._v("Participation in the hackathon from Finodays ")])}],G={},V=G,F=(a("b6c4"),Object(m["a"])(V,J,R,!1,null,null,null)),Y=F.exports,q={name:"App",components:{Header:u,Skills:b,Education:y,About:$,Plans:O,Contact:W,Achievements:Y},data:function(){return{activeHeader:!1,windowTop:window.top.scrollY,activeHumburger:!1,maxScreen:!1,width:window.innerWidth,module:!1,scrollLock:!1,circle:"",nodataSkills:!0}},watch:{windowTop:{immediate:!0,handler:function(e,t){this.activeHeader=e>100,this.circle-e<400?this.nodataSkills=!1:this.nodataSkills=!0}},scrolIndicator:{immediate:!0,handler:function(){window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,a=e/t*100;document.getElementById("myBar").style.width=a+"%"}}},width:{immediate:!0,handler:function(e){e>780?(this.maxScreen=!0,this.module=!1,this.activeHumburger=!1,this.scrollLock=!1):this.maxScreen=!1}}},mounted:function(){window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.updateWidth)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.updateWidth)},methods:{onScroll:function(e){this.windowTop=window.top.scrollY,this.circle=document.getElementById("circle").getBoundingClientRect().top+pageYOffset},updateWidth:function(){this.width=window.innerWidth},editModule:function(){this.activeHumburger=!this.activeHumburger,this.module=!this.module,this.scrollLock=!this.scrollLock},scrollBurger:function(){this.activeHumburger=!this.activeHumburger,this.module=!this.module,this.scrollLock=!this.scrollLock}}},X=q,Z=(a("034f"),Object(m["a"])(X,n,i,!1,null,null,null)),K=Z.exports,Q=a("1d49"),ee=a("4ae6"),te=a.n(ee),ae=a("f40c"),se=a("9949"),ne=a.n(se);s["a"].use(ae["a"]),s["a"].use(Q["a"]),s["a"].use(te.a),s["a"].use(ne.a);var ie=a("f13c");s["a"].use(ie,{container:"body",duration:1500,easing:"ease-in-out",offset:-100,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),s["a"].directive("scroll",{inserted:function(e,t){var a=function a(s){t.value(s,e)&&window.removeEventListener("scroll",a)};window.addEventListener("scroll",a)}}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(K)}}).$mount("#app")},"610c":function(e,t,a){"use strict";a("0367")},"62c9":function(e,t,a){"use strict";a("26fb")},6860:function(e,t,a){},"71ae":function(e,t,a){e.exports=a.p+"img/plans.3c5fab67.jpg"},"79cf":function(e,t,a){},"85ec":function(e,t,a){},"8baf":function(e,t,a){"use strict";a("6860")},"906b":function(e,t,a){},"98e0":function(e,t,a){},b6c4:function(e,t,a){"use strict";a("906b")},b8ab:function(e,t,a){"use strict";a("98e0")},efb1:function(e,t,a){e.exports=a.p+"img/about_new.b8458df1.jpg"}});
//# sourceMappingURL=app.9f47a9d6.js.map