(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{4613:function(e,i,a){"use strict";var t=a(4836);i.Z=void 0;var s=t(a(4938)),l=a(5893),n=(0,s.default)((0,l.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");i.Z=n},5661:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/[id]",function(){return a(7726)}])},196:function(e,i){"use strict";i.Z={src:"/_next/static/media/playButton.0b252f5c.svg",height:33,width:32}},7726:function(e,i,a){"use strict";a.r(i),a.d(i,{__N_SSP:function(){return p}});var t=a(5893),s=a(9755),l=a.n(s),n=a(1274),o=a.n(n),r=a(4613),_=a(196),c=a(4957),d=a(1664),m=a.n(d),u=a(7294),p=!0;i.default=function(e){let{movie:i}=e,[a,s]=(0,u.useState)(null),n=async()=>{let e=await fetch("https://api.themoviedb.org/3/movie/".concat(null==i?void 0:i.id,"/videos?api_key=6e37d364da090a453e6c12697bcfcde7")),a=await e.json();s(a.results.filter(e=>"Trailer"===e.type)[0])};return(0,u.useEffect)(()=>{let e=e=>{let i=document.getElementById("movie__poster__id");e.target!==i&&s(null)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,t.jsxs)("div",{className:o().movie_detail,style:{background:"linear-gradient(to left, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(https://image.tmdb.org/t/p/original".concat(null==i?void 0:i.backdrop_path,")"),backgroundSize:"100% 100%"},children:[(0,t.jsxs)("div",{className:o().movie__info,children:[(0,t.jsx)("div",{className:o().back,children:(0,t.jsx)(m(),{href:"/",style:{display:"contents"},children:(0,t.jsx)(r.Z,{color:"white"})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:i.original_title}),(0,t.jsxs)("p",{className:o().rating,children:["Rating : ",(0,t.jsx)(c.Z,{className:o().icon_star})," 4.5/5"]}),(0,t.jsx)("p",{className:o().overview,children:i.overview}),(0,t.jsxs)("div",{className:o().release_wrapper,children:[(0,t.jsx)("span",{className:o().release,children:"Release Data"}),(0,t.jsxs)("span",{children:[" ",i.release_date]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:o().release_language,children:"Original Language"}),(0,t.jsx)("span",{children:i.spoken_languages.map(e=>e.english_name).join(",")})]})]})]}),(0,t.jsx)("div",{className:o().movie__poster,children:(0,t.jsxs)("div",{className:o().subMain_img,children:[a?(0,t.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/".concat(null==a?void 0:a.key,"?controls=0&autoplay=1&mute=1"),title:"YouTube video player",frameBorder:"0",id:"movie__poster__id",width:500,height:500,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,t.jsx)(l(),{src:"https://image.tmdb.org/t/p/original".concat(i.poster_path),alt:"title",width:500,height:500,priority:!0,className:o().subMain_img__poster,placeholder:"blur",blurDataURL:"https://image.tmdb.org/t/p/original".concat(null==i?void 0:i.poster_path)}),a?"":(0,t.jsx)("div",{className:o().movie_playbtn,onClick:n,children:(0,t.jsx)(l(),{src:_.Z,alt:"playButton",layout:"fill",objectFit:"contain"})})]})})]})}},1274:function(e){e.exports={movie_detail:"movieDetails_movie_detail__nXwA9",movie__info:"movieDetails_movie__info__U41TJ",rating:"movieDetails_rating__cV5oM",overview:"movieDetails_overview___nr4m",release_wrapper:"movieDetails_release_wrapper__s3o_g",release:"movieDetails_release__b_skE",release_language:"movieDetails_release_language__uAovc",icon_star:"movieDetails_icon_star__ezDec",movie__poster:"movieDetails_movie__poster___tbCO",movie_playbtn:"movieDetails_movie_playbtn__FC4nr",subMain_img:"movieDetails_subMain_img__4Gzsf",back:"movieDetails_back__WMH1M",subMain_img__poster:"movieDetails_subMain_img__poster__x8mVe"}}},function(e){e.O(0,[175,774,888,179],function(){return e(e.s=5661)}),_N_E=e.O()}]);