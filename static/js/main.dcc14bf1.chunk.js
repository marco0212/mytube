(this["webpackJsonpmy-tube"]=this["webpackJsonpmy-tube"]||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(15),r=a.n(i),l=a(1),s=a(9),o=a(4),m=a(5),u=a(7),h=a(6),d=a(8);function p(){return c.a.createElement("div",{className:"d-flex justify-content-center loading flex-grow-1"},c.a.createElement("div",{className:"spinner-border text-primary my-auto",role:"status",style:{width:"4rem",height:"4rem"}},c.a.createElement("span",{className:"sr-only"},"Loading...")))}function b(e){var t=e.id,a=e.thumbnailUrl;return c.a.createElement(l.b,{to:"/watch/".concat(t),className:"video-thumb mb-3",style:{backgroundImage:"url(".concat(a,")")}})}var f="AIzaSyCcE593L6gG9TKsdj_dFcNrVCd1CuL5ORM";function v(e,t){return fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(e,"&key=").concat(f)).then((function(e){return e.json()})).then((function(e){var a=e.items;t(a[0])}))}function E(e){var t=((new Date).getTime()-new Date(e).getTime())/1e3,a=Math.floor(t/60),n=Math.floor(a/60),c=Math.floor(n/24),i=Math.floor(c/30),r=Math.floor(i/12);return r?"".concat(r,"\ub144 \uc804"):i?"".concat(i,"\uac1c\uc6d4 \uc804"):c?"".concat(c,"\uc77c \uc804"):n?"".concat(n,"\uc2dc\uac04 \uc804"):"".concat(a,"\ubd84 \uc804")}function N(e){var t=e.src,a=e.title;return c.a.createElement("div",{className:"channel-thumb-area mr-3"},c.a.createElement("div",{className:"img-wrap rounded-circle overflow-hidden"},t&&c.a.createElement("img",{src:t,className:"img-fluid",alt:a})))}var y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={chThumb:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v(this.props.chId,(function(t){e.setState({chThumb:t.snippet.thumbnails.default.url})}))}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.thumbnailUrl,i=e.chTitle,r=e.time;return c.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-4 mb-3"},c.a.createElement("div",{className:"video-item"},c.a.createElement(b,{id:t,thumbnailUrl:n}),c.a.createElement("div",{className:" d-flex"},c.a.createElement(N,{title:i,src:this.state.chThumb}),c.a.createElement("div",{className:"video-info-area"},c.a.createElement("h5",null,c.a.createElement(l.b,{to:"/watch/".concat(t),className:"text-dark"},a)),c.a.createElement("ul",null,c.a.createElement("li",{className:"text-muted"},i),c.a.createElement("li",{className:"text-muted"},E(r)))))))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).fetchHomeData=function(){var e;e=function(e){a.setState({isLoading:!1,videoData:e})},fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&key=".concat(f)).then((function(e){return e.json()})).then((function(t){var a=t.items;e(a)}))},a.state={isLoading:!0,videoData:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchHomeData()}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(p,null):c.a.createElement("div",{className:"container pt-4 home-wrapper"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h4",{className:"mb-4"},"Most Popular Videos")),this.state.videoData.map((function(e){var t=e.id,a=e.snippet.title,n=e.snippet.thumbnails.high.url,i=e.snippet.channelId,r=e.snippet.channelTitle,l=e.snippet.publishedAt;return c.a.createElement(y,{id:t,title:a,thumbnailUrl:n,chId:i,chTitle:r,time:l,key:t})}))))}}]),t}(c.a.Component);function w(e){var t=e.id,a=e.title,n=e.description,i=e.thumbnailUrl,r=e.chTitle,s=e.time;return c.a.createElement("div",{className:"row",key:t},c.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-3"},c.a.createElement("div",{className:"thumb-area"},c.a.createElement(b,{id:t,thumbnailUrl:i}))),c.a.createElement("div",{className:"col-sm-12 col-md-7 col-lg-9"},c.a.createElement("div",{className:"info-area"},c.a.createElement("h5",null,c.a.createElement(l.b,{to:"/watch/".concat(t),className:"text-dark"},a)),c.a.createElement("ul",{className:"mb-5"},c.a.createElement("li",{className:"text-muted mb-2"},"".concat(r," \xb7 ").concat(E(s))),c.a.createElement("li",{className:"text-muted description"},n)))))}var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).fetchSearchData=function(e){!function(e,t){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=".concat(e,"&maxResults=10&order=relevance&key=").concat(f)).then((function(e){return e.json()})).then((function(e){var a=e.items;t(a)}))}(e,(function(e){e?a.setState({isLoading:!1,searchedList:e}):a.props.history.push("/")}))},a.state={isLoading:!0,searchedList:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchSearchData(this.props.match.params.keyword)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.keyword;e.match.params.keyword!==t&&(this.setState({isLoading:!0}),this.fetchSearchData(t))}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(p,null):c.a.createElement("div",{className:"container pt-4 search-wrapper"},this.state.searchedList.map((function(e){return c.a.createElement(w,{id:e.id.videoId,title:e.snippet.title,description:e.snippet.description,thumbnailUrl:e.snippet.thumbnails.high.url,chTitle:e.snippet.channelTitle,time:e.snippet.publishedAt})})))}}]),t}(c.a.Component);function j(e){var t,a=e.currentVideo,n=e.chThumb;return c.a.createElement("div",{className:"player-area"},c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 mb-4"},c.a.createElement("iframe",{src:(t=a.id,"https://www.youtube.com/embed/".concat(t)),className:"embed-responsive-item",allowFullScreen:"1",title:a.snippet.title})),c.a.createElement("h3",{className:"h4 mb-3"},a.snippet.title),c.a.createElement("div",{className:"video-info-area"},c.a.createElement("div",{className:"d-flex align-items-center mb-3"},c.a.createElement(N,{src:n,title:a.snippet.title}),c.a.createElement("p",{className:"h6 mb-0"},a.snippet.channelTitle)),c.a.createElement("ul",{className:"tags d-flex flex-wrap"},a.snippet.tags?a.snippet.tags.slice(0,10).map((function(e){return c.a.createElement("li",{key:e,className:"mr-2"},c.a.createElement(l.b,{to:"/search/".concat(e),className:"badge badge-info h5"},"#".concat(e)))})):null),c.a.createElement("p",{className:"description"},a.snippet.description)))}function O(e){var t=e.id,a=e.title,n=e.thumbnailUrl,i=e.channelTitle,r=e.time;return c.a.createElement("div",{className:"video-item",key:t},c.a.createElement("div",{className:"thumb-area"},c.a.createElement(b,{id:t,thumbnailUrl:n})),c.a.createElement("div",{className:"text-area"},c.a.createElement("h6",null,c.a.createElement(l.b,{to:"/watch/".concat(t),className:"text-dark"},a)),c.a.createElement("ul",null,c.a.createElement("li",null,i),c.a.createElement("li",null,E(r)))))}function x(e){var t=e.relatedVideo;return c.a.createElement("aside",{className:"related-video-area"},t.map((function(e){var t=e.id.videoId,a=e.snippet.title,n=e.snippet.thumbnails.high.url,i=e.snippet.channelTitle,r=e.snippet.publishedAt;return c.a.createElement(O,{key:t,id:t,title:a,thumbnailUrl:n,channelTitle:i,time:r})})))}var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).fetchWatchData=function(e){!function(e,t){fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(e,"&key=").concat(f)).then((function(e){return e.json()})).then((function(e){var a=e.items;t(a[0])}))}(e,(function(t){t?function(e,t){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=".concat(e,"&type=video&maxResults=5&key=").concat(f)).then((function(e){return e.json()})).then((function(e){var a=e.items;t(a)}))}(e,(function(e){v(t.snippet.channelId,(function(n){var c=n.snippet.thumbnails.default.url;a.setState({currentVideo:t,relatedVideos:e,chThumb:c,isLoading:!1})}))})):a.props.history.push("/")}))},a.state={isLoading:!0,currentVideo:{},relatedVideos:[],chThumb:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.id;e.match.params.id!==t&&(this.setState({isLoading:!0}),this.fetchWatchData(t))}},{key:"componentDidMount",value:function(){this.fetchWatchData(this.props.match.params.id)}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(p,null):c.a.createElement("div",{className:"container pt-4 watch-wrapper"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8"},c.a.createElement(j,{currentVideo:this.state.currentVideo,chThumb:this.state.chThumb})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(x,{relatedVideo:this.state.relatedVideos}))))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={inputText:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handlerOnSubmit",value:function(e){e.preventDefault(),this.props.history.push("/search/".concat(this.state.inputText))}},{key:"handlerOnChange",value:function(e){this.setState({inputText:e.target.value})}},{key:"render",value:function(){return c.a.createElement("header",{className:"py-3 bg-dark sticky-top"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h1",{className:"logo mr-3 my-auto h3"},c.a.createElement(l.b,{to:"/",className:"text-white"},"MYTUBE")),c.a.createElement("form",{className:"d-flex my-auto",onSubmit:this.handlerOnSubmit.bind(this)},c.a.createElement("input",{className:"form-control mr-1",placeholder:"Search",onChange:this.handlerOnChange.bind(this)}),c.a.createElement("button",{className:"btn btn-outline-success"},"Search")))))))}}]),t}(c.a.Component);a(31),a(32);r.a.render(c.a.createElement((function(){return c.a.createElement(l.a,null,c.a.createElement(s.b,{path:"/",component:D}),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/search/:keyword",component:k}),c.a.createElement(s.b,{path:"/watch/:id",component:T}),c.a.createElement(s.b,{exact:!0,path:"/",component:g}),c.a.createElement(s.b,{path:"*"},c.a.createElement(s.a,{to:"/"}))))}),null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dcc14bf1.chunk.js.map