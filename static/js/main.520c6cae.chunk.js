(this["webpackJsonpmodern-movie-web"]=this["webpackJsonpmodern-movie-web"]||[]).push([[0],[,function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"g",(function(){return f})),a.d(t,"i",(function(){return v})),a.d(t,"j",(function(){return b})),a.d(t,"e",(function(){return g})),a.d(t,"d",(function(){return j})),a.d(t,"f",(function(){return h})),a.d(t,"h",(function(){return y}));var n=a(2),r=a.n(n),c=a(5),i=a(22),l=a.n(i),s="dc11dbd0605b4d60cc66ce5e8363e063",o="https://api.themoviedb.org/3",u="https://image.tmdb.org/t/p/w342",m="https://image.tmdb.org/t/p/w500",d="https://image.tmdb.org/t/p/original";function f(e,t){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o).concat(a?"/search":"","/movie/").concat(a?"?query=":"").concat(t).concat(a?"&":"?","api_key=").concat(s,"&language=ko-KR&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/trending/").concat(t,"/week?api_key=").concat(s,"&language=ko-KR"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/").concat(t,"/").concat(a,"/videos?api_key=").concat(s,"&language=ko-KR"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=ko-KR"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=ko-KR"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/movie/").concat(t,"/images?api_key=").concat(s));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(o,"/movie/").concat(t,"/similar?api_key=").concat(s,"&language=ko-KR"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={initial:function(e){return{data:e||null,loading:!1,error:null}},load:function(e){return{data:e||null,loading:!0,error:null}},success:function(e){return{data:e,loading:!1,error:null}},error:function(e){return{data:null,loading:!1,error:e}}}},,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l}));var n=a(7),r="trend/GET_TREND_LIST",c="trend/GET_TREND_LIST_SUCCESS",i="trend/GET_TREND_LIST_ERROR",l=Object(n.createAsyncAction)(r,c,i)()},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),r=a.n(n),c=a(5);function i(e,t){return function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return function(){var a=Object(c.a)(r.a.mark((function a(c){var i,l,s,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=e.request,l=e.success,s=e.failure,c(i(void 0)),a.prev=2,a.next=5,t.apply(void 0,n);case 5:o=a.sent,c(l(o)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),c(s(a.t0));case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l}));var n=a(7),r="tmdb/GET_MOVIE_LIST",c="tmdb/GET_MOVIE_LIST_SUCCESS",i="tmdb/GET_MOVIE_LIST_ERROR",l=Object(n.createAsyncAction)(r,c,i)()},function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l}));var n=a(7),r="detail/GET_DETAIL",c="detail/GET_DETAIL_SUCCESS",i="detailtrend/GET_DETAIL_ERROR",l=Object(n.createAsyncAction)(r,c,i)()},function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l}));var n=a(7),r="trend/GET_VIDEO",c="trend/GET_VIDEO_SUCCESS",i="trend/GET_VIDEO_LIST_ERROR",l=Object(n.createAsyncAction)(r,c,i)()},,,function(e,t,a){"use strict";var n=a(47);a.d(t,"default",(function(){return n.a}));a(18);var r=a(48);a.d(t,"getMovieListThunk",(function(){return r.a}));a(49)},,,,,function(e,t,a){"use strict";var n=a(36);a.d(t,"default",(function(){return n.a}));a(16);var r=a(37);a.d(t,"getTrendListThunk",(function(){return r.a}));a(46)},function(e,t,a){"use strict";var n=a(50);a.d(t,"default",(function(){return n.a}));a(19);var r=a(51);a.d(t,"getMovieThunk",(function(){return r.a}));a(52)},,,,,,,function(e,t,a){"use strict";var n,r=a(3),c=a(7),i=a(4),l=a(16);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={trendList:i.a.initial()},m=Object(c.createReducer)(u,(n={},Object(r.a)(n,l.a,(function(e){return o({},e,{trendList:i.a.load()})})),Object(r.a)(n,l.c,(function(e,t){return o({},e,{trendList:i.a.success(t.payload)})})),Object(r.a)(n,l.b,(function(e,t){return o({},e,{trendList:i.a.error(t.payload)})})),n));t.a=m},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a(16),c=a(17),i=Object(c.a)(r.d,n.i)},,,,,,,,,function(e,t){},function(e,t,a){"use strict";var n,r=a(3),c=a(7),i=a(4),l=a(18);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={movieList:i.a.initial()},m=Object(c.createReducer)(u,(n={},Object(r.a)(n,l.a,(function(e){return o({},e,{movieList:i.a.load()})})),Object(r.a)(n,l.c,(function(e,t){return o({},e,{movieList:i.a.success(t.payload)})})),Object(r.a)(n,l.b,(function(e,t){return o({},e,{movieList:i.a.error(t.payload)})})),n));t.a=m},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a(18),c=a(17),i=Object(c.a)(r.d,n.g)},function(e,t){},function(e,t,a){"use strict";var n,r=a(3),c=a(7),i=a(4),l=a(19);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={detail:i.a.initial()},m=Object(c.createReducer)(u,(n={},Object(r.a)(n,l.a,(function(e){return o({},e,{detail:i.a.load()})})),Object(r.a)(n,l.c,(function(e,t){return o({},e,{detail:i.a.success(t.payload)})})),Object(r.a)(n,l.b,(function(e,t){return o({},e,{detail:i.a.error(t.payload)})})),n));t.a=m},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a(19),c=a(17),i=Object(c.a)(r.d,n.e)},function(e,t){},function(e,t,a){"use strict";var n,r=a(3),c=a(7),i=a(4),l=a(20);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={video:i.a.initial()},m=Object(c.createReducer)(u,(n={},Object(r.a)(n,l.a,(function(e){return o({},e,{trendList:i.a.load()})})),Object(r.a)(n,l.c,(function(e,t){return o({},e,{trendList:i.a.success(t.payload)})})),Object(r.a)(n,l.b,(function(e,t){return o({},e,{trendList:i.a.error(t.payload)})})),n));t.a=m},function(e,t,a){"use strict";var n=a(1),r=a(20),c=a(17);Object(c.a)(r.d,n.j)},function(e,t){},,,,,,function(e,t,a){"use strict";var n=a(53);a.d(t,"default",(function(){return n.a}));a(20),a(54),a(55)},,function(e,t,a){e.exports=a(97)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),l=(a(68),a(8)),s=a(3),o=a(6);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=function(e){var t=e.menuList,a=e.load,c=e.initialParam,i=Object(n.useState)(t),l=Object(o.a)(i,2),s=l[0],u=l[1],d=function(e){var t=e.currentTarget.dataset.id,n=s.map((function(e){return e.id===t?m({},e,{isOn:!0}):m({},e,{isOn:!1})}));u(n),a(t)};return Object(n.useEffect)((function(){a(c)}),[a,c]),r.a.createElement("div",{className:"nav_wrap"},r.a.createElement("nav",{className:"clearfix"},r.a.createElement("ul",null,s&&s.map((function(e){return r.a.createElement("li",{key:e.id,"data-id":e.id,className:e.isOn?"on":void 0,onClick:d},e.label)})))))},f=a(28),p=[{id:"movie",label:"\uc601\ud654 \ud2b8\ub80c\ub4dc",isOn:!0},{id:"tv",label:"TV \ud2b8\ub80c\ub4dc",isOn:!1}];var v=function(){var e=Object(l.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"head_title"},"\uc774\ubc88 \uc8fc \ud2b8\ub80c\ub4dc"),r.a.createElement(d,{menuList:p,load:function(t){e(Object(f.getTrendListThunk)(t))},initialParam:"movie"}))},E=(a(91),a(2)),b=a.n(E),O=a(5),g=a(1),_=[{id:28,name:"\uc561\uc158"},{id:12,name:"\uc5b4\ub4dc\ubca4\ucc98"},{id:16,name:"\uc560\ub2c8\uba54\uc774\uc158"},{id:35,name:"\ucf54\uba54\ub514"},{id:80,name:"\ubc94\uc8c4"},{id:99,name:"\ub2e4\ud050"},{id:18,name:"\ub4dc\ub77c\ub9c8"},{id:10751,name:"\uac00\uc871"},{id:14,name:"\ud310\ud0c0\uc9c0"},{id:36,name:"\uc5ed\uc0ac"},{id:27,name:"\uacf5\ud3ec"},{id:10402,name:"\uc74c\uc545"},{id:9648,name:"\ubbf8\uc2a4\ud130\ub9ac"},{id:10749,name:"\ub85c\ub9e8\uc2a4"},{id:878,name:"SF"},{id:10770,name:"TV"},{id:53,name:"\uc2a4\ub9b4\ub7ec"},{id:10752,name:"\uc804\uc7c1"},{id:37,name:"\uc6e8\uc2a4\ud134"}],j=[{id:10759,name:"\uc561\uc158 & \uc5b4\ub4dc\ubca4\ucc98"},{id:16,name:"\uc560\ub2c8\uba54\uc774\uc158"},{id:35,name:"\ucf54\uba54\ub514"},{id:80,name:"\ubc94\uc8c4"},{id:99,name:"\ub2e4\ud050"},{id:18,name:"\ub4dc\ub77c\ub9c8"},{id:10751,name:"\uac00\uc871"},{id:10762,name:"\uc5b4\ub9b0\uc774"},{id:9648,name:"\ubbf8\uc2a4\ud130\ub9ac"},{id:10763,name:"\ub274\uc2a4"},{id:10764,name:"\ub9ac\uc5bc\ub9ac\ud2f0"},{id:10765,name:"SF & \ud310\ud0c0\uc9c0"},{id:10766,name:"\uc18c\ud504"},{id:10767,name:"\ud1a0\ud06c"},{id:10768,name:"\uc804\uc7c1 & \uc815\uce58"},{id:37,name:"\uc6e8\uc2a4\ud134"}];var h=a(24),y=a(13),w=function(){setTimeout((function(){document.querySelectorAll(".bg")[0].setAttribute("style","background-image: url(".concat(g.c).concat(document.querySelectorAll(".swiper-slide-active")[0].getAttribute("data-backdrop"),");"))}),100)};var N=r.a.memo((function(e){var t=e.media,a=e.renderGenre,c=t.id,i=t.title,l=t.poster_path,s=t.original_title,o=t.vote_average,u=t.vote_count,m=t.genre_ids,d=t.overview,f=t.media_type,p=t.backdrop_path,v=t.name,E=t.original_name,b=Object(n.useCallback)((function(){switch(f){case"movie":return i;case"tv":return v;default:throw new Error('[title error] -> Unhandled media type "'.concat(f,'"'))}}),[f,v,i]),O=Object(n.useCallback)((function(){switch(f){case"movie":return s;case"tv":return E;default:throw new Error('[original_title error] -> Unhandled media type "'.concat(f,'"'))}}),[f,E,s]);return r.a.createElement("div",{className:"swiper-slide media_list","data-id":c,"data-backdrop":p},r.a.createElement("div",{className:"media_poster"},"movie"===f?r.a.createElement(y.b,{to:"/detail/".concat(c)},r.a.createElement("img",{src:"".concat(g.b,"/").concat(l),alt:i})):r.a.createElement("img",{src:"".concat(g.b,"/").concat(l),alt:i})),r.a.createElement("div",{className:"media_info"},r.a.createElement("div",{className:"media_title"},r.a.createElement("h3",null,b()),r.a.createElement("h4",null,O())),r.a.createElement("div",{className:"media_score"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("span",{className:"vote_average"},10*o,"%"),r.a.createElement("span",{className:"vote_count"},"(",u,")")),r.a.createElement("div",{className:"media_genre"},m.map((function(e){return a(e)}))),r.a.createElement("div",{className:"media_overview"},r.a.createElement("p",null,d)),r.a.createElement(k,{mediaType:f,id:c})))}));function k(e){var t=e.mediaType,a=e.id,c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],s=i[1],u=Object(n.useCallback)(Object(O.a)(b.a.mark((function e(){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.j)(t,a);case 2:if(n=e.sent,e.prev=3,!(r=n.results.filter((function(e){return"Trailer"===e.type})))[0]){e.next=7;break}return e.abrupt("return",s(r[0].key));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),[t,a]);return Object(n.useEffect)((function(){u()}),[u]),l?r.a.createElement("div",{className:"media_trailer"},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(l),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-youtube"})," \uc608\uace0\ud3b8")):null}var P=function(e){var t=e.data;Object(n.useEffect)((function(){new h.a(".main_visual_slider",{observer:!0,observeParents:!0,loop:!0,spaceBetween:100,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:45,slideShadows:!1},slideToClickedSlide:!0,on:{init:function(){w()},slideChange:function(){w()}}})}),[]);var a=Object(n.useCallback)((function(e){var a=function(e){switch(e){case"tv":return j;case"movie":return _;default:throw new Error('Unhandled media type "'.concat(e,'"'))}}(t[0].media_type).filter((function(t){return t.id===e}));return a.length>0?r.a.createElement("div",{className:"genre",key:a[0].id},r.a.createElement("p",null,a[0].name)):null}),[t]);return r.a.createElement("div",{className:"main_visual"},r.a.createElement("div",{className:"bg"}),r.a.createElement("div",{className:"main_visual_inner"},r.a.createElement("div",{className:"swiper-container main_visual_slider"},r.a.createElement("div",{className:"swiper-wrapper"},t.map((function(e){return r.a.createElement(N,{key:e.id,media:e,renderGenre:a})}))))))};a(93);var S=function(){var e=Object(l.c)((function(e){return e.trend.trendList})),t=e.data,a=e.loading,n=e.error;return a?r.a.createElement("p",{className:"message"},"\ub85c\ub529\uc911"):n?r.a.createElement("p",{className:"message"},"\uc5d0\ub7ec\ubc1c\uc0dd"):t?r.a.createElement(P,{data:t.results}):null};var T=r.a.memo((function(e){var t=e.movie,a=t.poster_path,n=t.title,c=t.original_title,i=t.vote_average,l=t.vote_count,s=t.id;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie_poster"},r.a.createElement(y.b,{to:"/detail/".concat(s)},r.a.createElement("picture",null,r.a.createElement("img",{src:"".concat(g.a).concat(a),alt:n})))),r.a.createElement("div",{className:"movie_info"},r.a.createElement("div",{className:"movie_title"},r.a.createElement("h3",null,n),r.a.createElement("h4",null,c)),r.a.createElement("div",{className:"movie_score"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("span",{className:"vote_average"},10*i,"%"),r.a.createElement("span",{className:"vote_count"},"(",l,")"))))})),x=function(){var e=Object(l.c)((function(e){return e.tmdb.movieList})),t=e.data,a=e.loading,n=e.error;return a?r.a.createElement("div",{className:"message"},"\ub85c\ub529\uc911"):n?r.a.createElement("div",{className:"message"},"\uc5d0\ub7ec\ubc1c\uc0dd"):t?t.results.length>0?r.a.createElement(r.a.Fragment,null,t.results.map((function(e){return r.a.createElement(T,{key:e.id,movie:e})}))):r.a.createElement("div",{className:"message"},"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):null},D=(a(94),a(23)),L=[{id:"now_playing",label:"\ud604\uc7ac \uc0c1\uc601\uc911",isOn:!0},{id:"popular",label:"\uc778\uae30\uc21c",isOn:!1},{id:"top_rated",label:"\ud3c9\uc810\uc21c",isOn:!1},{id:"upcoming",label:"\uac1c\ubd09\uc608\uc815",isOn:!1}];var R=function(){var e=Object(l.b)();return r.a.createElement(d,{menuList:L,load:function(t){e(Object(D.getMovieListThunk)(t))},initialParam:"now_playing"})};function C(){var e=Object(l.b)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"search_form"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(Object(D.getMovieListThunk)(c,!0))}},r.a.createElement("input",{type:"text",placeholder:"\uac80\uc0c9",value:c,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))))}var A=function(){return r.a.createElement("div",{className:"list_inner"},r.a.createElement("div",{className:"list_nav"},r.a.createElement(R,null),r.a.createElement(C,null)),r.a.createElement("div",{className:"list_wrap"},r.a.createElement(x,null)))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"header_inner"},r.a.createElement(v,null))),r.a.createElement(S,null),r.a.createElement("section",{className:"list_section"},r.a.createElement(A,null)))},G=(a(95),a(21)),M=a(29),V=a(58);function F(e){var t=e.src,a=e.alt,n=e.zoom,c=e.original;return r.a.createElement("img",{src:t,alt:a,ref:function(e){n.attach(e)},"data-zoom-src":c})}var U=function(e){var t=e.id,a=e.name,c=Object(n.useState)(),i=Object(o.a)(c,2),l=i[0],s=i[1];Object(n.useEffect)((function(){Object(O.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.f)(t);case 2:a=e.sent;try{s(a)}catch(n){console.error(n)}case 4:case"end":return e.stop()}}),e)})))()}),[t]),Object(n.useEffect)((function(){var e=new h.a(".gallery_sl",{observer:!0,observeParents:!0,spaceBetween:50,slidesPerView:"auto",freeMode:!0,on:{slideChange:function(){e.update()}}})}),[]);var u=Object(V.a)({background:"rgba(0, 0, 0, .5)",margin:40});return r.a.createElement("div",{className:"gallery"},r.a.createElement("div",{className:"gallery_title"},r.a.createElement("h4",null,"\uac24\ub7ec\ub9ac")),r.a.createElement("div",{className:"gallery_sl swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},l&&l.backdrops.map((function(e){return r.a.createElement("div",{className:"swiper-slide",key:e.file_path},r.a.createElement(F,{src:"".concat(g.a).concat(e.file_path),original:"".concat(g.c).concat(e.file_path),alt:a,zoom:u}))})))))};var K=function(e){var t=e.id,a=Object(n.useState)(),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(5),p=Object(o.a)(f,2),v=p[0],E=p[1];return Object(n.useEffect)((function(){Object(g.d)(t).then((function(e){l(e.cast.splice(0,v)),d(e.crew.splice(0,v))}))}),[v,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"credit_wrap"},r.a.createElement("div",{className:"credit"},r.a.createElement("div",{className:"credit_title"},"\uc0c1\uc138"),r.a.createElement("div",{className:"crews_wrap"},m&&m.map((function(e){return r.a.createElement("div",{className:"crew",key:e.credit_id},r.a.createElement("div",{className:"crew_position"},r.a.createElement("h5",null,e.job)),r.a.createElement("div",{className:"crew_name"},r.a.createElement("p",null,e.name)))})))),r.a.createElement("div",{className:"credit"},r.a.createElement("div",{className:"credit_title"},"\ucd9c\uc5f0"),r.a.createElement("div",{className:"casts_wrap"},i&&i.map((function(e){return r.a.createElement("div",{className:"cast",key:e.credit_id},r.a.createElement("div",{className:"cast_profile"},r.a.createElement("picture",null,r.a.createElement("img",{src:"".concat(g.a).concat(e.profile_path),alt:e.name}))),r.a.createElement("div",{className:"cast_info"},r.a.createElement("div",{className:"cast_position"},r.a.createElement("h5",null,e.name)),r.a.createElement("div",{className:"cast_name"},r.a.createElement("p",null,e.character))))}))))),r.a.createElement("div",{className:"btn_more"},r.a.createElement("button",{type:"button",onClick:function(){return E(v+5)}},r.a.createElement("i",{className:"fas fa-plus"})," \ub354 \ubcf4\uae30")))};var q=function(e){var t=e.mediaType,a=e.id,c=Object(n.useState)(),i=Object(o.a)(c,2),l=i[0],s=i[1],u=Object(n.useCallback)(Object(O.a)(b.a.mark((function e(){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.j)(t,a);case 2:if(n=e.sent,e.prev=3,!(r=n.results.filter((function(e){return"YouTube"===e.site})))){e.next=7;break}return e.abrupt("return",s(r));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),[t,a]);return Object(n.useEffect)((function(){u()}),[u]),Object(n.useEffect)((function(){new h.a(".clips_sl",{observer:!0,observeParents:!0,slidesPerView:3.2,freeMode:!0,spaceBetween:50})}),[]),r.a.createElement("div",{className:"clips"},r.a.createElement("div",{className:"clips_title"},r.a.createElement("h4",null,"\ud074\ub9bd")),r.a.createElement("div",{className:"clips_sl swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},l&&l.length>0?l.map((function(e){return r.a.createElement("div",{className:"swiper-slide",key:e.id},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(e.key),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-play-circle"}),r.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.key,"/hqdefault.jpg"),alt:e.name})),r.a.createElement("p",null,e.name))})):r.a.createElement("p",{className:"message"},"\ud074\ub9bd\uc774 \uc5c6\uc5b4\uc694 \u3160_\u3160"))))};var B=r.a.memo((function(e){var t=e.movie,a=t.poster_path,n=t.title,c=t.original_title,i=t.vote_average,l=t.vote_count,s=t.id;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie_poster"},r.a.createElement(y.b,{to:"/detail/".concat(s)},r.a.createElement("picture",null,r.a.createElement("img",{src:"".concat(g.a).concat(a),alt:n})))),r.a.createElement("div",{className:"movie_info"},r.a.createElement("div",{className:"movie_title"},r.a.createElement("h3",null,n),r.a.createElement("h4",null,c)),r.a.createElement("div",{className:"movie_score"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("span",{className:"vote_average"},10*i,"%"),r.a.createElement("span",{className:"vote_count"},"(",l,")"))))})),z=function(e){var t=e.id,a=Object(n.useState)(),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(3),u=Object(o.a)(s,2),m=u[0],d=u[1];return console.log(m),Object(n.useEffect)((function(){Object(O.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.h)(t);case 2:a=e.sent;try{l(a.results.splice(0,m))}catch(n){console.error(n)}case 4:case"end":return e.stop()}}),e)})))()}),[t,m]),i?i.length>0?r.a.createElement(r.a.Fragment,null,i.map((function(e){return r.a.createElement(B,{key:e.id,movie:e})})),m<=20?r.a.createElement("div",{className:"btn_more"},r.a.createElement("button",{onClick:function(){return d(m+3)}},r.a.createElement("i",{className:"fas fa-plus"})," \ube44\uc2b7\ud55c \uc601\ud654 \ub354\ubcf4\uae30")):null):r.a.createElement("div",{className:"message"},"\ube44\uc2b7\ud55c \uc601\ud654\uac00 \uc5c6\uc5b4\uc694 \u3160_\u3160"):null};var J=function(e){var t=e.data,a=t.backdrop_path,n=t.title,c=t.original_title,i=t.tagline,l=t.release_date,s=t.poster_path,o=t.vote_average,u=t.vote_count,m=t.homepage,d=t.genres,f=t.id,p=t.overview,v=t.runtime,E=t.spoken_languages;return r.a.createElement("div",{className:"detail_wrap"},r.a.createElement("div",{className:"visual"},r.a.createElement("picture",null,r.a.createElement("img",{className:"backdrop",src:"".concat(g.c).concat(a),alt:n}))),r.a.createElement("div",{className:"detail_contents"},r.a.createElement("div",{className:"detail_title"},r.a.createElement("h2",null,n," ",r.a.createElement("span",null,"(",l.split("-")[0],")")),r.a.createElement("h3",null,c),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"detail_info"},r.a.createElement("div",{className:"detail_poster"},r.a.createElement("div",{className:"detail_poster_inner"},r.a.createElement("picture",null,r.a.createElement("img",{src:"".concat(g.a).concat(s),alt:n}))),r.a.createElement(k,{mediaType:"movie",id:f})),r.a.createElement("div",{className:"detail_list_wrap"},r.a.createElement("div",{className:"detail_info_top"},r.a.createElement("div",{className:"detail_subtitle"},r.a.createElement("h2",null,n),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-star"})," ",r.a.createElement("span",null,10*o,"%")," ",r.a.createElement("span",null,"(",u,")")),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-calendar-day"})," ",r.a.createElement("span",null,l)),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-clock"})," ",r.a.createElement("span",null,v,"\ubd84")),E.map((function(e){return r.a.createElement("p",{key:e.name},r.a.createElement("i",{className:"fas fa-language"})," ",r.a.createElement("span",null,e.name))}))),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,r.a.createElement("a",{href:m,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fas fa-link"})," Homepage")),r.a.createElement("div",{className:"genre_wrap"},d.map((function(e){return r.a.createElement("div",{className:"genre",key:e.id},e.name)}))))),r.a.createElement("div",{className:"detail_info_mid"},r.a.createElement(K,{id:f})),r.a.createElement("div",{className:"story_line"},r.a.createElement("div",{className:"story_title"},r.a.createElement("h4",null,"\uc904\uac70\ub9ac"),r.a.createElement("div",{className:"story_text"},r.a.createElement("h5",null,i),r.a.createElement("p",null,p)))))),r.a.createElement("div",{className:"gallery_wrap"},r.a.createElement(U,{id:f,name:n})),r.a.createElement("div",{className:"clips_wrap"},r.a.createElement(q,{id:f,mediaType:"movie"})),r.a.createElement("div",{className:"similar"},r.a.createElement("div",{className:"similar_title"},r.a.createElement("h4",null,"\ube44\uc2b7\ud55c \uc601\ud654")),r.a.createElement("div",{className:"similar_wrap"},r.a.createElement(z,{id:f})))))};a(96);var W=function(e){var t=e.match.params.movie_id,a=Object(l.b)();Object(n.useEffect)((function(){a(Object(M.getMovieThunk)(t))}),[a,t]);var c=Object(l.c)((function(e){return e.detail.detail})),i=c.data,s=c.loading,o=c.error;return s?r.a.createElement("div",{className:"message"},"\ub85c\ub529\uc911"):o?r.a.createElement("div",{className:"message"},"\uc5d0\ub7ec\ubc1c\uc0dd"):i?r.a.createElement(J,{data:i,getCredit:g.d}):null},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(G.a,{path:"/",exact:!0,component:I}),r.a.createElement(G.a,{path:"/detail/:movie_id",component:W})),r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright"},"byseop@gmail.com"),r.a.createElement("p",null,"Powered by ReactJS")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(15),$=a(59),Q=a(60),X=a(61),Z=Object(Y.combineReducers)({tmdb:D.default,trend:f.default,video:X.default,detail:M.default}),ee=a(62),te=a.n(ee),ae=Object(Y.createStore)(Z,Object($.composeWithDevTools)(Object(Y.applyMiddleware)(Q.a,te.a)));i.a.render(r.a.createElement(y.a,{basename:"/modern-movie-web"},r.a.createElement(l.a,{store:ae},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[63,1,2]]]);
//# sourceMappingURL=main.520c6cae.chunk.js.map