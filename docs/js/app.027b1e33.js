(function(t){function e(e){for(var a,s,o=e[0],u=e[1],l=e[2],p=0,m=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b0":function(t,e,n){t.exports=n.p+"img/IT.6f245478.png"},"11a3":function(t,e,n){},"331c":function(t,e,n){t.exports=n.p+"img/inizia.36429c85.png"},3350:function(t,e,n){},3383:function(t,e,n){t.exports=n.p+"img/medium.8fdad3be.png"},"3c85":function(t,e,n){"use strict";var a=n("11a3"),i=n.n(a);i.a},4022:function(t,e,n){"use strict";var a=n("f9ef"),i=n.n(a);i.a},"45b1":function(t,e,n){t.exports=n.p+"img/mediumL.4ef7526e.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s={name:"App"},o=s,u=n("2877"),l=Object(u["a"])(o,i,r,!1,null,null,null),c=l.exports,p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"myImage"}},[n("swiper",{staticClass:"swiffer",attrs:{options:t.swiperOption},on:{reachEnd:t.activateButton}},[n("swiper-slide",[n("img",{attrs:{src:t.getImage(0),alt:"pagina",id:"image"}})]),n("swiper-slide",[n("img",{attrs:{src:t.getImage(1),alt:"pagina",id:"image"}})]),n("swiper-slide",[n("img",{attrs:{src:t.getImage(2),alt:"pagina",id:"image"}})]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),n("router-link",{attrs:{to:"/Game"}},[n("img",{staticClass:"iniziaIMG",attrs:{src:t.getImage(3),alt:"bottone"}})])],1)},f=[],g={avanti:n("5945"),italian0:n("e18e"),italian1:n("7c08"),italian2:n("e575"),inizia:n("331c")},d=g,v=(n("dfa4"),n("7212")),h=(d.inizia,d.italian0,{name:"Istruzioni",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},components:{swiper:v["swiper"],swiperSlide:v["swiperSlide"]},methods:{getImage:function(t){var e;switch(t){case 0:e=d.italian0;break;case 1:e=d.italian1;break;case 2:e=d.italian2;break;case 3:e=d.inizia}return e},activateButton:function(){!1},nextPage:function(){console.log("Next Page")}}}),b=h,_=(n("a2f9"),Object(u["a"])(b,m,f,!1,null,null,null)),x=_.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"head"}},[a("img",{staticClass:"bordo",attrs:{src:n("f4ce")}}),a("nav",[a("button",{attrs:{id:"italian",disabled:t.italianButton},on:{click:function(e){return e.preventDefault(),t.toItalian(e)}}},[a("img",{staticClass:"ButtonIMG",attrs:{src:n("02b0")}})]),a("button",{attrs:{id:"english",disabled:t.englishButton},on:{click:function(e){return e.preventDefault(),t.toEnglish(e)}}},[a("img",{staticClass:"ButtonIMG",attrs:{src:n("998d")}})])])])},$=[],w={root:"../../src/assets/",ITALIAN_IMAGE:"italian",ENGLISH_IMAGE:"english",currentImage:"italian",extension:".jpg"},y=w,k=!0,C=!1,E=y.ITALIAN_IMAGE,j={name:"Header",data:function(){return{italianButton:k,englishButton:C,currentLanguage:E}},methods:{toItalian:function(){this.italianButton=!0,this.englishButton=!1,E=y.ITALIAN_IMAGE,console.log(E)},toEnglish:function(){this.italianButton=!1,this.englishButton=!0,E=y.ENGLISH_IMAGE,console.log(E)}}},O=j,S=(n("4022"),Object(u["a"])(O,I,$,!1,null,null,null)),A=S.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"selezione"}},[n("div",{staticClass:"slidecontainer"},[n("input",{staticClass:"slider",attrs:{type:"range",min:"3",max:"8",id:"sliderRange"},domProps:{value:t.groupNumber}})]),t._l(t.groupNumber,(function(e){return n("tr",{key:e},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"edit me"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])})),n("input",{attrs:{type:"button"},on:{click:t.updateNumber}})],2)},M=[],N={name:"Selezione",data:function(){return{groupNumber:3}},methods:{updateNumber:function(){groupNumber=document.getElementById("sliderRange").value,console.log(groupNumber)}}},B=N,P=(n("c999"),n("3c85"),Object(u["a"])(B,G,M,!1,null,null,null)),T=P.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"testo"},[n("h1",{staticClass:"turno"},[t._v(" Turno "+t._s(t.turn)+" ")]),n("h1",{staticClass:"probabilita"},[t._v("Probabilita' precipitazioni: "+t._s(t.probabilita)+" % ")]),n("h1",{staticClass:"assicuri"},[t._v(" cliccare la casella della rispettiva citta' per assicurarsi ")])]),t._l(t.teams,(function(e,a){return n("tr",{key:e},[n("img","big"===e?{staticClass:"image",attrs:{src:t.getImage(0)}}:"medium"===e?{staticClass:"image1",attrs:{src:t.getImage(1)}}:{staticClass:"image2",attrs:{src:t.getImage(2)}}),n("label",{staticClass:"container"},[t._v("\n            "+t._s(e)+"\n            "),n("input",{attrs:{type:"checkbox",id:a}}),n("span",{staticClass:"checkmark"})])])})),n("router-link",{attrs:{to:{name:"Results",params:{teams:t.teams,risultati:t.risultati,turn:t.turn,events:t.events}}}},[n("button",{staticClass:"button",on:{click:t.save}},[t._v(" Fine Round ")])])],2)},L=[],F=(n("f386"),n("9c86"),n("5df3"),n("1c4c"),{big:n("af81"),bigL:n("9aa1"),bigS:n("6ee9"),medium:n("3383"),mediumL:n("45b1"),mediumS:n("855f"),small:n("ff80"),smallL:n("ccaa"),smallS:n("5fb3")}),R=F,H={name:"Game",props:[],data:function(){return{teams:["big","medium","small"],probabilita:Math.floor(100*Math.random()),index:0,risultati:Array.from(Array(3),(function(){return new Array(10)})),turn:1,events:new Array(10)}},methods:{getImage:function(t){switch(t){case 0:return R.big;case 1:return R.medium;case 2:return R.small}},save:function(){for(var t in this.teams)void 0===this.$route.params.turn?this.risultati[t][0]=document.getElementById(t).checked:this.risultati[t][this.$route.params.turn-1]=document.getElementById(t).checked;var e=Math.floor(100*Math.random());e<=this.probabilita?this.event=!0:this.event=!1,this.events[this.turn-1]=this.event}},created:function(){void 0===this.$route.params.turn?this.turn=1:(this.turn=this.$route.params.turn,this.risultati=this.$route.params.risultati,this.events=this.$route.params.events)}},D=H,J=(n("d03f"),Object(u["a"])(D,z,L,!1,null,null,null)),q=J.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[10===t.$route.params.turn?n("span",[t._v(" Turno Finale ")]):n("span",[t._v(" Turno "+t._s(t.$route.params.turn)+" ")]),!0===t.$route.params.events[this.$route.params.turn-1]?n("span",[t._v(" Ha nevicato ")]):n("span",[t._v(" Non ha nevicato ")]),t._l(t.$route.params.teams,(function(e,a){return n("tr",{key:e},[n("img","big"===e?{staticClass:"image",attrs:{src:t.getImage(0)}}:"medium"===e?{staticClass:"image1",attrs:{src:t.getImage(1)}}:{staticClass:"image2",attrs:{src:t.getImage(2)}}),n("label",{staticClass:"container"},[t._v("\n            "+t._s(e)+"  \n            "),n("span",[t._v(" "+t._s(t.$route.params.risultati[a][t.turn-1])+"  ")])])])})),10===t.$route.params.turn?n("router-link",{attrs:{to:{name:"Fine",params:{events:t.events,teams:t.teams,risultati:t.$route.params.risultati}}}},[n("button",{staticClass:"button"},[t._v(" Fine ")])]):n("router-link",{attrs:{to:{name:"Game",params:{events:t.events,teams:t.teams,risultati:t.$route.params.risultati,turn:t.turn}}}},[n("button",{staticClass:"button",on:{click:t.nextTurn}},[t._v(" Prossimo Turno ")])])],2)},Q=[],U={name:"Results",data:function(){return{teams:this.$route.params.teams,turn:this.$route.params.turn,events:this.$route.params.events}},methods:{getImage:function(t){switch(t){case 0:return R.big;case 1:return R.medium;case 2:return R.small}},nextTurn:function(){this.turn=this.turn+1,this.first=!1},calculate:function(t){var e=0;for(var n in 10)void 0!==this.$route.params.risultati[t][n]&&(e+=this.$route.params.risultati[t][n]);return e}}},V=U,W=Object(u["a"])(V,K,Q,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tr",[n("td",[t._v(" Giorno ")]),n("td",[t._v(" Evento ")]),t._l(t.$route.params.teams,(function(e){return n("td",{key:e},[t._v(" "+t._s(e)+" ")])}))],2),t._l(10,(function(e){return n("tr",{key:e},[n("td",[t._v(" "+t._s(e)+" ")]),n("td",[t._v(" "+t._s(t.$route.params.events[e-1])+" ")]),t._l(t.$route.params.teams,(function(a,i){return n("td",{key:a},[t._v(" "+t._s(t.$route.params.risultati[i][e-1])+" ")])}))],2)})),n("tr",[n("td",[t._v(" CSI ")]),n("td"),t._l(t.$route.params.teams,(function(e,a){return n("td",{key:e},[t._v(" "+t._s(t.csi(a))+" ")])}))],2)],2)},Z=[],tt={name:"Fine",data:function(){return{}},methods:{csi:function(t){for(var e=0,n=0,a=0,i=0,r=0;r<10;r++)!0===this.$route.params.risultati[t][r-1]&&!0===this.$route.params.events[r]?e++:!0===this.$route.params.risultati[t][r-1]&&!1===this.$route.params.events[r]?n++:!1===this.$route.params.risultati[t][r-1]&&!0===this.$route.params.events[r]&&a++;return i=e/(e+n+a),i=i.toFixed(2),i}}},et=tt,nt=Object(u["a"])(et,Y,Z,!1,null,null,null),at=nt.exports;a["a"].use(p["a"]);var it=new p["a"]({routes:[{path:"/",name:"Istruzioni",component:x},{path:"/header",name:"Header",component:A},{path:"/selezione",name:"Selezione",component:T},{path:"/game",name:"Game",component:q},{path:"/results",name:"Results",component:X},{path:"/fine",name:"Fine",component:at}]});a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:it,render:function(t){return t(c)}}).$mount("#app")},5945:function(t,e,n){t.exports=n.p+"img/avanti.c40ff228.png"},"5fb3":function(t,e,n){t.exports=n.p+"img/smallS.a2c569db.png"},"6ee9":function(t,e,n){t.exports=n.p+"img/bigS.5c77f887.png"},"7c08":function(t,e,n){t.exports=n.p+"img/italian1.10b93484.jpg"},"855f":function(t,e,n){t.exports=n.p+"img/mediumS.ce114d53.png"},"8e78":function(t,e,n){},"998d":function(t,e,n){t.exports=n.p+"img/ENG.0d164b78.jpg"},"9aa1":function(t,e,n){t.exports=n.p+"img/bigL.29c849f5.png"},a2f9:function(t,e,n){"use strict";var a=n("3350"),i=n.n(a);i.a},af81:function(t,e,n){t.exports=n.p+"img/big.dd35f06e.png"},c999:function(t,e,n){"use strict";var a=n("cc92"),i=n.n(a);i.a},cc92:function(t,e,n){},ccaa:function(t,e,n){t.exports=n.p+"img/smallL.d00f4914.png"},d03f:function(t,e,n){"use strict";var a=n("8e78"),i=n.n(a);i.a},e18e:function(t,e,n){t.exports=n.p+"img/italian0.79dbdb07.jpg"},e575:function(t,e,n){t.exports=n.p+"img/italian2.539b1581.jpg"},f4ce:function(t,e,n){t.exports=n.p+"img/bordo.26028522.png"},f9ef:function(t,e,n){},ff80:function(t,e,n){t.exports=n.p+"img/small.150f4fcc.png"}});
//# sourceMappingURL=app.027b1e33.js.map