(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,l){},23:function(e,t,l){},27:function(e,t,l){"use strict";l.r(t);var r=l(1),a=l(0),n=l.n(a),c=l(9),i=l.n(c),s=(l(22),l(3)),o=function(e,t){var l=e.name,a=e.email,n=e.website,c=e.id;return"light"===e.theme?Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"f5",children:l}),Object(r.jsx)("p",{className:"f6",children:a}),Object(r.jsx)("p2",{className:"f6",children:n})]})]}):"dark"===e.theme?Object(r.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"f5",children:l}),Object(r.jsx)("p",{className:"f6",children:a}),Object(r.jsx)("p2",{className:"f6",children:n})]})]}):"gray"===e.theme?Object(r.jsxs)("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"f5",children:l}),Object(r.jsx)("p",{className:"f6",children:a}),Object(r.jsx)("p2",{className:"f6",children:n})]})]}):Object(r.jsxs)("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"f5",children:l}),Object(r.jsx)("p",{className:"f6",children:a}),Object(r.jsx)("p2",{className:"f6",children:n})]})]})},m=function(e){var t=e.robots,l=e.theme,a=t.map((function(e,a){return Object(r.jsx)(o,{theme:l,id:t[a].id,name:t[a].name,email:t[a].email,website:t[a].website},a)}));return Object(r.jsx)("div",{children:a})},h=function(e){var t,l=e.searchfield,a=e.searchChange;switch(e.theme){case"light":t="bg-lightest-blue";break;case"dark":t="bg-light-blue";break;case"gray":t="bg-lightest-gray";break;default:t="bg-lightest-blue"}return Object(r.jsxs)("div",{className:"tc pa2",children:[Object(r.jsx)("input",{className:"pa3 ba b--white ".concat(t),type:"search",placeholder:"search robots",onChange:a,value:l}),Object(r.jsx)("p",{class:"tc pa1 f7 near-white",children:" search robots by name, email or website "})]})},d=(l(23),l(10)),f=l(11),b=l(16),p=l(15),u=function(e){Object(b.a)(l,e);var t=Object(p.a)(l);function l(e){var r;return Object(d.a)(this,l),(r=t.call(this,e)).state={hasError:!1},r}return Object(f.a)(l,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),l}(a.Component),g=l(2),j={body:"linear-gradient(to left, rgba(7,27,82,1)0%, rgba(0,128,128,1) 100%)",text:"#0ccac4",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},x={body:"linear-gradient(90deg, rgba(15,48,164,1) 5%, rgba(14,137,232,1) 40%, rgba(0,212,255,1) 100%);",text:"blue",toggleBorder:"#FFF",gradient:"linear-gradient(90deg, rgba(110,175,214,1) 11%, rgba(91,127,254,1) 100%);"},v={body:"linear-gradient(90deg, rgba(77,73,74,1) 11%, rgba(162,164,172,1) 100%);",text:"darkgray",toggleBorder:"#FFF",gradient:"linear-gradient(90deg, rgba(77,73,74,1) 11%, rgba(135,161,146,1) 100%);"},O=l(4);function y(){var e=Object(O.a)(["\n  // *,\n  // *::after,\n  // *::before {\n  //   box-sizing: border-box;\n  // }\n\n  body {\n    // align-items: center;\n    background: ",";\n    color: ",";\n    //display: flex;\n    // flex-direction: column;\n    // justify-content: center;\n    // height: 100vh;\n    // margin: 0;\n    // padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 1s linear;\n }\n}\n"]);return y=function(){return e},e}var E=Object(g.b)(y(),(function(e){return e.theme.body}),(function(e){return e.theme.text}));function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var S=a.createElement("path",{d:"m203.039062 388.414062h105.929688v78.71875h-105.929688zm0 0",fill:"#2c2f38"}),z=a.createElement("path",{d:"m356.878906 423.726562h-201.746094c-14.257812 0-27.632812 1.941407-35.921874-9.65625l-30.929688-43.308593h335.445312l-30.894531 43.308593c-8.324219 11.597657-21.699219 9.65625-35.953125 9.65625zm0 0",fill:"#4c8056"}),_=a.createElement("path",{d:"m172.140625 459.035156h167.726563c12.1875 0 22.066406 9.882813 22.066406 22.070313s-9.878906 22.070312-22.066406 22.070312h-167.726563c-12.1875 0-22.066406-9.882812-22.066406-22.070312s9.878906-22.070313 22.066406-22.070313zm0 0",fill:"#4c8056"}),N=a.createElement("g",{fill:"#a5a5a4"},a.createElement("path",{d:"m26.488281 286.898438c-4.875 0-8.828125-3.953126-8.828125-8.828126v-17.65625c0-19.5 15.808594-35.308593 35.308594-35.308593h8.828125c4.875 0 8.828125 3.953125 8.828125 8.828125s-3.953125 8.828125-8.828125 8.828125h-8.828125c-9.75 0-17.652344 7.902343-17.652344 17.652343v17.65625c0 4.875-3.953125 8.828126-8.828125 8.828126zm0 0"}),a.createElement("path",{d:"m26.488281 392.828125c-4.875 0-8.828125-3.949219-8.828125-8.824219v-52.96875c0-4.875 3.953125-8.824218 8.828125-8.824218s8.828125 3.949218 8.828125 8.824218v52.96875c0 4.875-3.953125 8.824219-8.828125 8.824219zm0 0"}),a.createElement("path",{d:"m44.140625 445.796875c-4.875 0-8.824219-3.953125-8.824219-8.828125v-17.65625h-17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125s-8.82812475-3.953125-8.82812475-8.828125v-17.65625c0-9.75 7.90624975-17.65625 17.65624975-17.65625h17.65625c9.75 0 17.652344 7.90625 17.652344 17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0"})),G=a.createElement("path",{d:"m1.574219 419.542969c-1.558594-4.367188-1.96875-9.058594-1.191407-13.628907 2.324219-13.582031 14.671876-23.113281 28.398438-21.917968 13.726562 1.191406 24.242188 12.710937 24.1875 26.488281.003906 2.785156-.429688 5.550781-1.277344 8.203125-2.480468 6.996094-9.160156 11.617188-16.578125 11.472656h-17.339843c-7.085938.1875-13.542969-4.042968-16.199219-10.617187zm0 0",fill:"#4fba6f"}),C=a.createElement("path",{d:"m52.96875 304.554688c0 14.625-11.855469 26.480468-26.480469 26.480468-14.628906 0-26.48437475-11.855468-26.48437475-26.480468s11.85546875-26.484376 26.48437475-26.484376c14.625 0 26.480469 11.859376 26.480469 26.484376zm0 0",fill:"#4fba6f"}),I=a.createElement("path",{d:"m485.519531 286.898438c-4.875 0-8.824219-3.953126-8.824219-8.828126v-17.65625c0-9.75-7.90625-17.652343-17.65625-17.652343h-8.828124c-4.875 0-8.828126-3.953125-8.828126-8.828125s3.953126-8.828125 8.828126-8.828125h8.828124c19.5 0 35.308594 15.808593 35.308594 35.308593v17.65625c0 4.875-3.949218 8.828126-8.828125 8.828126zm0 0",fill:"#a5a5a4"}),D=a.createElement("path",{d:"m485.519531 392.828125c-4.875 0-8.824219-3.949219-8.824219-8.824219v-52.96875c0-4.875 3.949219-8.824218 8.824219-8.824218 4.878907 0 8.828125 3.949218 8.828125 8.824218v52.96875c0 4.875-3.949218 8.824219-8.828125 8.824219zm0 0",fill:"#a5a5a4"}),V=a.createElement("path",{d:"m503.175781 445.796875c-4.875 0-8.828125-3.953125-8.828125-8.828125v-17.65625h-17.652344v17.65625c0 4.875-3.953124 8.828125-8.828124 8.828125s-8.828126-3.953125-8.828126-8.828125v-17.65625c0-9.75 7.902344-17.65625 17.65625-17.65625h17.652344c9.753906 0 17.65625 7.90625 17.65625 17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0",fill:"#a5a5a4"}),U=a.createElement("path",{d:"m460.609375 419.542969c-1.558594-4.367188-1.96875-9.058594-1.191406-13.628907 2.324219-13.582031 14.671875-23.113281 28.398437-21.917968 13.726563 1.191406 24.242188 12.710937 24.1875 26.488281.003906 2.785156-.429687 5.550781-1.28125 8.203125-2.476562 6.996094-9.15625 11.617188-16.578125 11.472656h-17.335937c-7.085938.1875-13.542969-4.042968-16.199219-10.617187zm0 0",fill:"#4fba6f"}),R=a.createElement("path",{d:"m512.003906 304.554688c0 14.625-11.855468 26.480468-26.484375 26.480468-14.625 0-26.480469-11.855468-26.480469-26.480468s11.855469-26.484376 26.480469-26.484376c14.628907 0 26.484375 11.859376 26.484375 26.484376zm0 0",fill:"#4fba6f"}),H=a.createElement("path",{d:"m185.382812 169.058594h141.242188v73.703125h-141.242188zm0 0",fill:"#4c8056"}),F=a.createElement("path",{d:"m149.277344 69.828125c-2.339844.007813-4.589844-.925781-6.238282-2.585937l-30.898437-30.898438c-3.453125-3.445312-3.460937-9.039062-.011719-12.492188 3.445313-3.457031 9.039063-3.460937 12.496094-.015624l30.894531 30.898437c2.542969 2.519531 3.308594 6.328125 1.941407 9.640625-1.367188 3.308594-4.601563 5.464844-8.183594 5.453125zm0 0",fill:"#a5a5a4"}),T=a.createElement("path",{d:"m123.589844 17.65625c0 9.75-7.902344 17.65625-17.65625 17.65625-9.75 0-17.652344-7.90625-17.652344-17.65625s7.902344-17.65234375 17.652344-17.65234375c9.753906 0 17.65625 7.90234375 17.65625 17.65234375zm0 0",fill:"#f3d55b"}),B=a.createElement("path",{d:"m362.730469 69.828125c-3.582031.011719-6.816407-2.144531-8.183594-5.453125-1.367187-3.3125-.601563-7.121094 1.941406-9.640625l30.898438-30.898437c2.234375-2.234376 5.488281-3.105469 8.542969-2.289063 3.050781.820313 5.433593 3.203125 6.253906 6.253906.816406 3.054688-.054688 6.308594-2.289063 8.542969l-30.898437 30.898438c-1.65625 1.667968-3.914063 2.601562-6.265625 2.585937zm0 0",fill:"#a5a5a4"}),A=a.createElement("path",{d:"m423.726562 17.65625c0 9.75-7.902343 17.65625-17.652343 17.65625s-17.65625-7.90625-17.65625-17.65625 7.90625-17.65234375 17.65625-17.65234375 17.652343 7.90234375 17.652343 17.65234375zm0 0",fill:"#f3d55b"}),P=a.createElement("path",{d:"m88.28125 260.414062c-12.964844-.007812-24.015625-9.398437-26.117188-22.191406-2.097656-12.792968 5.371094-25.226562 17.652344-29.378906 12.28125-4.148438 25.761719 1.199219 31.855469 12.644531zm0 0",fill:"#4fba6f"}),L=a.createElement("path",{d:"m400.335938 221.488281c6.09375-11.445312 19.574218-16.792969 31.855468-12.644531 12.28125 4.152344 19.75 16.585938 17.652344 29.378906-2.097656 12.792969-13.152344 22.183594-26.117188 22.191406zm0 0",fill:"#4fba6f"}),W=a.createElement("path",{d:"m247.175781 17.65625h17.65625c73.128907 0 132.414063 59.285156 132.414063 132.414062h-282.484375c0-73.128906 59.285156-132.414062 132.414062-132.414062zm0 0",fill:"#7ed09e"}),Y=a.createElement("path",{d:"m114.761719 145.65625h282.484375c9.75 0 17.65625 7.90625 17.65625 17.65625s-7.90625 17.65625-17.65625 17.65625h-282.484375c-9.75 0-17.652344-7.90625-17.652344-17.65625s7.902344-17.65625 17.652344-17.65625zm0 0",fill:"#4fba6f"}),J=a.createElement("path",{d:"m203.039062 114.761719c-4.875 0-8.828124-3.953125-8.828124-8.828125v-26.484375c0-4.875 3.953124-8.828125 8.828124-8.828125s8.828126 3.953125 8.828126 8.828125v26.484375c0 4.875-3.953126 8.828125-8.828126 8.828125zm0 0",fill:"#2c2f38"}),M=a.createElement("path",{d:"m308.96875 114.761719c-4.875 0-8.828125-3.953125-8.828125-8.828125v-26.484375c0-4.875 3.953125-8.828125 8.828125-8.828125s8.828125 3.953125 8.828125 8.828125v26.484375c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0",fill:"#2c2f38"}),X=a.createElement("path",{d:"m88.28125 344.277344v-83.863282c0-24.375 19.761719-44.136718 44.136719-44.136718h247.171875c24.378906 0 44.136718 19.761718 44.136718 44.136718v83.863282zm0 0",fill:"#7ed09e"}),$=a.createElement("path",{d:"m88.28125 339.863281h335.445312c9.753907 0 17.65625 7.90625 17.65625 17.65625s-7.902343 17.65625-17.65625 17.65625h-335.445312c-9.75 0-17.65625-7.90625-17.65625-17.65625s7.90625-17.65625 17.65625-17.65625zm0 0",fill:"#4fba6f"}),q=a.createElement("path",{d:"m185.382812 251.589844h141.242188c14.625 0 26.484375 11.855468 26.484375 26.480468s-11.859375 26.484376-26.484375 26.484376h-141.242188c-14.625 0-26.480468-11.859376-26.480468-26.484376s11.855468-26.480468 26.480468-26.480468zm0 0",fill:"#e6e7e8"}),K=a.createElement("path",{d:"m132.417969 278.070312c0 4.875-3.953125 8.828126-8.828125 8.828126s-8.828125-3.953126-8.828125-8.828126 3.953125-8.828124 8.828125-8.828124 8.828125 3.953124 8.828125 8.828124zm0 0",fill:"#2c2f38"}),Q=a.createElement("path",{d:"m397.246094 278.070312c0 4.875-3.953125 8.828126-8.828125 8.828126s-8.828125-3.953126-8.828125-8.828126 3.953125-8.828124 8.828125-8.828124 8.828125 3.953124 8.828125 8.828124zm0 0",fill:"#2c2f38"}),Z=a.createElement("path",{d:"m211.867188 313.382812c-4.875 0-8.828126-3.953124-8.828126-8.828124v-52.964844c0-4.875 3.953126-8.828125 8.828126-8.828125s8.828124 3.953125 8.828124 8.828125v52.964844c0 4.875-3.953124 8.828124-8.828124 8.828124zm0 0",fill:"#ff5364"});function ee(e,t){var l=e.title,r=e.titleId,n=k(e,["title","titleId"]);return a.createElement("svg",w({height:"512pt",viewBox:"0 -4 512.00441 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,S,z,_,N,G,C,I,D,V,U,R,H,F,T,B,A,P,L,W,Y,J,M,X,$,q,K,Q,Z)}var te=a.forwardRef(ee);l.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var ae=a.createElement("g",null,a.createElement("path",{d:"m120 180h-30l-10-16.167 10-13.833h30l10 14z",fill:"#4b5586"}),a.createElement("path",{d:"m60 287.58v-32.58l-15-10-15 10v32.58l-30 42.42v30h30v-30l15-15 15 15v30h30v-30z",fill:"#4b5586"}),a.createElement("path",{d:"m90 255h-90v-135h90z",fill:"#fc6363"}),a.createElement("path",{d:"m390 180h30l10-15-10-15h-30l-10 15z",fill:"#4b5586"}),a.createElement("path",{d:"m480 287.58v-32.58l-15-10-15 10v32.58l-30 42.42v30h30v-30l15-15 15 15v30h30v-30z",fill:"#4b5586"}),a.createElement("path",{d:"m420 120h90v135h-90z",fill:"#e63950"}),a.createElement("path",{d:"m240 435-47.499 10-42.501-10v-75l45-10 45 10z",fill:"#4b5586"}),a.createElement("path",{d:"m240 510h-120v-75h120z",fill:"#fcbf00"}),a.createElement("path",{d:"m270 435 45 10 45-10v-75l-45-10-45 10z",fill:"#4b5586"}),a.createElement("path",{d:"m270 435h120v75h-120z",fill:"#ff9200"}),a.createElement("path",{d:"m180 75h-30v-30h30l10 15z",fill:"#293e65"}),a.createElement("path",{d:"m330 75h30v-30h-30l-10 15z",fill:"#293e65"}),a.createElement("path",{d:"m180 0v120l37.5 10 37.5-10 10-60-10-60z",fill:"#fcbf00"}),a.createElement("path",{d:"m330 0h-75v120l37.5 10 37.5-10z",fill:"#ff9200"}),a.createElement("path",{d:"m120 120v120l37.001 9 37.999-9 60-60 10-30-10-30z",fill:"#25d9f8"}),a.createElement("path",{d:"m390 120h-135v60l60 60 37.333 10 37.667-10z",fill:"#00bdef"}),a.createElement("path",{d:"m120 240v120h135l10-28.333-10-31.667-60-60z",fill:"#00bdef"}),a.createElement("path",{d:"m390 240h-75l-60 60v60h135z",fill:"#009ae4"}),a.createElement("path",{d:"m195 240c0 33.083 26.915 60 60 60l10-60-10-60c-33.083 0-60 26.915-60 60z",fill:"#ecf2ff"}),a.createElement("path",{d:"m315 240c0-33.083-26.915-60-60-60v120c33.083 0 60-26.915 60-60z",fill:"#d9e5ff"}));function ne(e,t){var l=e.title,r=e.titleId,n=re(e,["title","titleId"]);return a.createElement("svg",le({id:"Layer_1",enableBackground:"new 0 0 510 510",height:512,viewBox:"0 0 510 510",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,ae)}var ce=a.forwardRef(ne);l.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var oe=a.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,y1:502,y2:332.247},a.createElement("stop",{offset:0,stopColor:"#8d889d"}),a.createElement("stop",{offset:.9777,stopColor:"#c1bfc5"})),me=a.createElement("linearGradient",{id:"lg1"},a.createElement("stop",{offset:0,stopColor:"#78c5e6"}),a.createElement("stop",{offset:.9788,stopColor:"#bbe3f4"})),he=a.createElement("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:76.396,x2:76.396,xlinkHref:"#lg1",y1:184.312,y2:45.82}),de=a.createElement("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:425.604,x2:425.604,xlinkHref:"#lg1",y1:184.312,y2:45.82}),fe=a.createElement("linearGradient",{id:"lg2"},a.createElement("stop",{offset:.0212,stopColor:"#f3385d"}),a.createElement("stop",{offset:1,stopColor:"#fd869c"})),be=a.createElement("linearGradient",{id:"SVGID_4_",gradientUnits:"userSpaceOnUse",x1:63.552,x2:63.552,xlinkHref:"#lg2",y1:274.537,y2:162.473}),pe=a.createElement("linearGradient",{id:"SVGID_5_",gradientUnits:"userSpaceOnUse",x1:438.448,x2:438.448,xlinkHref:"#lg2",y1:274.537,y2:162.473}),ue=a.createElement("linearGradient",{id:"SVGID_6_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,y1:336.256,y2:69.369},a.createElement("stop",{offset:.0223,stopColor:"#c1bfc5"}),a.createElement("stop",{offset:1,stopColor:"#8d889d"})),ge=a.createElement("linearGradient",{id:"lg3"},a.createElement("stop",{offset:0,stopColor:"#fd869c"}),a.createElement("stop",{offset:.9788,stopColor:"#f3385d"})),je=a.createElement("radialGradient",{id:"SVGID_7_",cx:71.385,cy:27.921,gradientUnits:"userSpaceOnUse",r:27.921,xlinkHref:"#lg3"}),xe=a.createElement("radialGradient",{id:"SVGID_8_",cx:430.615,cy:27.921,gradientUnits:"userSpaceOnUse",r:27.921,xlinkHref:"#lg3"}),ve=a.createElement("linearGradient",{id:"SVGID_9_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,xlinkHref:"#lg3",y1:477.741,y2:262.745}),Oe=a.createElement("linearGradient",{id:"lg4"},a.createElement("stop",{offset:.0005580357,stopColor:"#f4e46a"}),a.createElement("stop",{offset:.9777,stopColor:"#f7f0a9"})),ye=a.createElement("linearGradient",{id:"SVGID_10_",gradientUnits:"userSpaceOnUse",x1:94.698,x2:94.698,xlinkHref:"#lg4",y1:454.777,y2:379.462}),Ee=a.createElement("linearGradient",{id:"SVGID_11_",gradientUnits:"userSpaceOnUse",x1:171.125,x2:171.125,xlinkHref:"#lg4",y1:454.777,y2:379.462}),we=a.createElement("linearGradient",{id:"SVGID_12_",gradientUnits:"userSpaceOnUse",x1:132.911,x2:132.911,xlinkHref:"#lg1",y1:454.777,y2:379.462}),ke=a.createElement("linearGradient",{id:"SVGID_13_",gradientUnits:"userSpaceOnUse",x1:407.303,x2:407.303,xlinkHref:"#lg4",y1:454.777,y2:379.462}),Se=a.createElement("linearGradient",{id:"SVGID_14_",gradientUnits:"userSpaceOnUse",x1:330.875,x2:330.875,xlinkHref:"#lg4",y1:454.777,y2:379.462}),ze=a.createElement("linearGradient",{id:"SVGID_15_",gradientUnits:"userSpaceOnUse",x1:369.089,x2:369.089,xlinkHref:"#lg1",y1:454.777,y2:379.462}),_e=a.createElement("g",null,a.createElement("path",{d:"m377.227 332.247h-252.454c-19.6 0-35.489 15.889-35.489 35.489v98.776c0 19.6 15.889 35.489 35.489 35.489h252.454c19.6 0 35.489-15.889 35.489-35.489v-98.776c0-19.6-15.889-35.489-35.489-35.489z",fill:"url(#SVGID_1_)"}),a.createElement("path",{d:"m53.486 184.312h35.798l10.022-21.839-10.022-31.385v-85.268h-35.798z",fill:"url(#SVGID_2_)"}),a.createElement("path",{d:"m53.486 83.068c5.641 1.836 11.654 2.84 17.899 2.84s12.258-1.005 17.899-2.84v-37.248h-35.798z",fill:"#59c2e7"}),a.createElement("path",{d:"m448.514 184.312h-35.798l-10.022-21.839 10.022-31.385v-85.268h35.798z",fill:"url(#SVGID_3_)"}),a.createElement("path",{d:"m448.514 83.068c-5.641 1.836-11.654 2.84-17.899 2.84s-12.258-1.005-17.899-2.84v-37.248h35.798z",fill:"#59c2e7"}),a.createElement("path",{d:"m83.83 162.473c-30.946 0-56.032 25.086-56.032 56.032 0 30.946 25.086 56.032 56.032 56.032h15.476v-112.064z",fill:"url(#SVGID_4_)"}),a.createElement("path",{d:"m418.17 162.473c30.946 0 56.032 25.086 56.032 56.032 0 30.946-25.086 56.032-56.032 56.032h-15.476v-112.064z",fill:"url(#SVGID_5_)"}),a.createElement("path",{d:"m350.997 69.369h-199.994c-34.086 0-61.719 27.633-61.719 61.719v143.449c0 34.086 27.632 61.719 61.719 61.719h199.994c34.086 0 61.719-27.633 61.719-61.719v-143.449c0-34.087-27.633-61.719-61.719-61.719z",fill:"url(#SVGID_6_)"}),a.createElement("circle",{cx:71.385,cy:27.921,fill:"url(#SVGID_7_)",r:27.921}),a.createElement("circle",{cx:430.615,cy:27.921,fill:"url(#SVGID_8_)",r:27.921}),a.createElement("g",null,a.createElement("ellipse",{cx:138.889,cy:231.607,fill:"#fb99ac",rx:19.054,ry:15.312}),a.createElement("ellipse",{cx:363.111,cy:231.607,fill:"#fb99ac",rx:19.054,ry:15.312}),a.createElement("circle",{cx:171.555,cy:193.825,fill:"#fff",r:37.782}),a.createElement("circle",{cx:330.445,cy:193.825,fill:"#fff",r:37.782}),a.createElement("g",{fill:"#383842"},a.createElement("g",null,a.createElement("circle",{cx:171.555,cy:193.825,r:22.518}),a.createElement("circle",{cx:330.445,cy:193.825,r:22.518})),a.createElement("path",{d:"m251 231.42c-6.361 0-12.722-2.405-17.912-7.216-2.025-1.878-2.145-5.041-.267-7.066 1.877-2.025 5.042-2.144 7.066-.268 6.542 6.065 15.681 6.067 22.225 0 2.023-1.875 5.188-1.757 7.066.268 1.877 2.025 1.758 5.188-.268 7.066-5.188 4.811-11.55 7.216-17.91 7.216z"}))),a.createElement("path",{d:"m251 289.003c-88.663-86.65-234.229 58.496-19.737 183.404 12.212 7.112 27.262 7.112 39.474 0 214.492-124.908 68.926-270.054-19.737-183.404z",fill:"url(#SVGID_9_)"}),a.createElement("g",null,a.createElement("path",{d:"m354.604 347.434c-5.529-.265-9.795-4.962-9.53-10.491.254-5.295-1.269-10.941-4.29-15.897-2.88-4.727-1.384-10.894 3.342-13.773 4.727-2.882 10.893-1.383 13.773 3.342 5.158 8.464 7.646 17.901 7.194 27.289-.263 5.524-4.957 9.795-10.489 9.53z",fill:"#fdb0bf"})),a.createElement("g",null,a.createElement("path",{d:"m318.938 303.591c-2.18-.624-4.413-.988-6.638-1.081-5.53-.232-9.825-4.902-9.593-10.433.232-5.53 4.907-9.822 10.433-9.593 3.806.16 7.614.778 11.318 1.839 5.32 1.524 8.398 7.073 6.874 12.394-1.522 5.317-7.068 8.398-12.394 6.874z",fill:"#fdb0bf"})),a.createElement("path",{d:"m194.049 353.162c-7.096-2.477-14.636-3.766-22.373-3.766h-50.454c3.224 17.881 12.258 37.457 28.877 57.65l43.698-15.002c2.965-1.018 5.659-2.7 7.876-4.917 10.69-10.689 6.648-28.983-7.624-33.965z",fill:"#f3385d"}),a.createElement("path",{d:"m105.19 379.461 27.721 37.662-27.721 37.653h-11.054c-10.403 0-19.813-4.209-26.628-11.024-6.805-6.815-11.024-16.236-11.024-26.628 0-20.796 16.857-37.663 37.653-37.663z",fill:"url(#SVGID_10_)"}),a.createElement("path",{d:"m209.339 417.124c0 20.796-16.867 37.652-37.663 37.652h-11.044l-27.721-37.653 27.721-37.662h11.044c10.393 0 19.813 4.219 26.628 11.034 6.815 6.816 11.035 16.236 11.035 26.629z",fill:"url(#SVGID_11_)"}),a.createElement("path",{d:"m105.19 379.461h55.441v75.315h-55.441z",fill:"url(#SVGID_12_)"}),a.createElement("path",{d:"m396.81 379.461-27.721 37.662 27.721 37.653h11.054c10.403 0 19.813-4.209 26.628-11.024 6.805-6.815 11.024-16.236 11.024-26.628 0-20.796-16.857-37.663-37.653-37.663z",fill:"url(#SVGID_13_)"}),a.createElement("path",{d:"m292.661 417.124c0 20.796 16.867 37.652 37.663 37.652h11.044l27.721-37.653-27.721-37.662h-11.044c-10.393 0-19.813 4.219-26.628 11.034-6.815 6.816-11.035 16.236-11.035 26.629z",fill:"url(#SVGID_14_)"}),a.createElement("path",{d:"m341.368 379.461h55.441v75.315h-55.441z",fill:"url(#SVGID_15_)"}));function Ne(e,t){var l=e.title,r=e.titleId,n=se(e,["title","titleId"]);return a.createElement("svg",ie({id:"Capa_1",enableBackground:"new 0 0 502 502",height:512,viewBox:"0 0 502 502",width:512,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,oe,me,he,de,fe,be,pe,ue,ge,je,xe,ve,Oe,ye,Ee,we,ke,Se,ze,_e)}var Ge=a.forwardRef(Ne);l.p;function Ce(){var e=Object(O.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-color:white;\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  // justify-content: space-between;\n  margin: auto;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  width: 6rem;\n  height: 2.5rem;\n  top: 1.2rem;\n  outline: 0;\n\n  svg {\n    height: 2rem;\n    width: 1.5rem;\n    transition: all 1s linear;\n    \n\n    &:first-child {\n      transform: ",";\n    }\n    \n    &:nth-child(2) {\n      transform: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return Ce=function(){return e},e}var Ie=g.c.button(Ce(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(-8px)":"translateY(50px)"}),(function(e){return e.darkTheme?"translateY(-8px)":"translateY(50px)"}),(function(e){return e.grayTheme?"translateY(-8px)":"translateY(50px)"})),De=function(e){var t=e.theme,l=e.toggleTheme,a="light"===t,n="gray"===t,c="dark"===t;return Object(r.jsxs)(Ie,{lightTheme:a,grayTheme:n,darkTheme:c,onClick:l,children:[Object(r.jsx)(te,{}),Object(r.jsx)(ce,{}),Object(r.jsx)(Ge,{})]})},Ve=function(e){e.generateCard,e.props;var t=e.name,l=e.website,a=e.email,n=e.setName,c=e.setEmail,i=e.setWebsite,s=e.colorVar;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"flex flex-column items-center pa4",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)("label",{classname:"tc",children:"Name:"}),Object(r.jsx)("input",{className:"pa4-m grow b--white outline tc ".concat(s),style:{width:"300"},type:"text",placeholder:"New name here",onChange:function(e){return n(e.target.value)}}),Object(r.jsx)("label",{classname:"",children:"Email:"}),Object(r.jsx)("input",{className:"pa4-m grow b--white outline tc ".concat(s),style:{width:"300"},type:"text",placeholder:"New email here",onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("label",{classname:"",children:"Website:"}),Object(r.jsx)("input",{className:"pa4-m grow b--white outline tc ".concat(s),style:{width:"300"},type:"text",placeholder:"New website here",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("button",{className:"b ph2 pv2 input-reset ba b--white grow pointer f6 dib ".concat(s),style:{marginTop:"1.5rem"},onClick:function(e){return function(e){e.preventDefault();var r={newName:t,newEmail:a,newWebsite:l};console.log(r)}(e)},children:"Submit"})]})})};var Ue=function(){document.title="Roboevolution";var e,t,l=Object(a.useState)("home"),n=Object(s.a)(l,2),c=n[0],i=n[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),f=d[0],b=d[1],p=Object(a.useState)(""),O=Object(s.a)(p,2),y=O[0],w=O[1],k=Object(a.useState)(""),S=Object(s.a)(k,2),z=S[0],_=S[1],N=Object(a.useState)("light"),G=Object(s.a)(N,2),C=G[0],I=G[1],D=Object(a.useState)("initial"),V=Object(s.a)(D,2),U=V[0],R=V[1],H=Object(a.useState)([]),F=Object(s.a)(H,2),T=F[0],B=F[1],A=Object(a.useState)(""),P=Object(s.a)(A,2),L=P[0],W=P[1],Y=function(){console.log(C),I("light"===C?"dark":"dark"===C?"gray":"light")},J=function(){console.log(c.value),"search"!==c&&i("search")},M=function(){console.log(c.value),"create"!==c&&i("create")},X=function(){console.log(c.value),"home"!==c&&i("home")};switch(C){case"light":e="bg-light-green",t="dark-green";break;case"dark":e="bg-light-blue",t="darkest-blue";break;case"gray":e="bg-light-gray",t="gray";break;default:e="gray"}Object(a.useEffect)((function(){"loaded"!==R&&fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){B(e)})).then(R("loaded"))}),[]);var $=function(e){W(e.target.value)},q=T.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())?e.name:e.email.toLowerCase().includes(L.toLowerCase())?e.email:e.website.toLowerCase().includes(L.toLowerCase())?e.website:""}));if("home"===c)return Object(r.jsxs)(g.a,{theme:"light"===C?j:"dark"===C?x:"gray"===C?v:C,children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{className:" tc",children:[Object(r.jsx)(De,{className:"tc",theme:C,toggleTheme:Y}),Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{justifyContent:"center",cursor:"pointer",borderRadius:"12px"},onClick:J,type:"submit",value:"Search robots"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{justifyContent:"center",cursor:"pointer",borderRadius:"12px"},onClick:M,type:"submit",value:"Create robots"})]}),Object(r.jsx)("footer",{})]});if("create"===c)return Object(r.jsxs)(g.a,{theme:"light"===C?j:"dark"===C?x:"gray"===C?v:C,children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(De,{className:" tc",style:{alignSelf:"center",position:"absolute"},theme:C,toggleTheme:Y}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",cursor:"pointer",top:"1rem",borderRadius:"12px"},onClick:J,type:"submit",value:"Search"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",left:"7rem",cursor:"pointer",top:"1rem",borderRadius:"12px",background:"".concat(e)},onClick:X,type:"submit",value:"Home"})]}),Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(Ve,{colorVar:e,name:f,setName:b,setEmail:w,setWebsite:_,email:y,website:z})]}),Object(r.jsx)("footer",{})]});if("search"===c){if("initial"===U)return Object(r.jsxs)(g.a,{theme:"light"===C?j:"dark"===C?x:"gray"===C?v:C,children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(De,{className:" tc",style:{alignSelf:"center",position:"absolute"},theme:C,toggleTheme:Y}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",cursor:"pointer",height:"1rem",top:"1rem",borderRadius:"12px",background:"".concat(e)},onClick:M,type:"submit",value:"Create"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",left:"7rem",height:"1rem",cursor:"pointer",top:"1rem",borderRadius:"12px",background:"".concat(e)},onClick:X,type:"submit",value:"Home"})]}),Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)("h1",{className:"tc",children:"Loading"})]}),Object(r.jsx)("footer",{})]});if("loaded"===U)return""==q?Object(r.jsxs)(g.a,{theme:"light"===C?j:"dark"===C?x:"gray"===C?v:C,children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(De,{className:" tc",style:{alignSelf:"center",position:"absolute"},theme:C,toggleTheme:Y}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",cursor:"pointer",top:"1rem",borderRadius:"12px",background:"".concat(e)},onClick:M,type:"submit",value:"Create"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",left:"7rem",cursor:"pointer",top:"1rem",borderRadius:"12px",background:"".concat(e)},onClick:X,type:"submit",value:"Home"})]}),Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(h,{theme:C,searchChange:$}),Object(r.jsx)("p",{class:"p1",children:"Search found no robots"})]}),Object(r.jsx)("footer",{})]}):Object(r.jsxs)(g.a,{theme:"light"===C?j:"dark"===C?x:"gray"===C?v:C,children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(De,{className:" tc",style:{alignSelf:"center",position:"absolute"},theme:C,toggleTheme:Y}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",cursor:"pointer",top:"1rem",borderRadius:"12px"},onClick:M,type:"submit",value:"Create"}),Object(r.jsx)("input",{className:" grow ".concat(e," ").concat(t),style:{display:"inline-block",textAlign:"center",width:"7rem",alignSelf:"flex-start",position:"absolute",left:"7rem",cursor:"pointer",top:"1rem",borderRadius:"12px"},onClick:X,type:"submit",value:"Home"})]}),Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(h,{theme:C,searchChange:$}),Object(r.jsx)(u,{children:Object(r.jsx)(m,{theme:C,robots:q})})]}),Object(r.jsx)("footer",{})]})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l(26);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(Ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.023d5901.chunk.js.map