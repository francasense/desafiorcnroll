(this.webpackJsonpdesafio=this.webpackJsonpdesafio||[]).push([[0],{21:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),l=a(3),c=a(4),o=a(6),m=a(5),u=a(7),d=a(2),h=a.n(d),E=a(8),g=a(19),p=a.n(g).a.create({baseURL:"https://itunes.apple.com/"}),v=a(20),f=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={track:[],songs:[],artistName:[],artistId:null,temArtista:!1,artista:"Alanis Morissette",width:window.innerWidth,desck:!1,dadosOK:!0,artistImg:""},a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.handleInputChange=function(e){a.setState({artista:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.loadArtists(),a.setState({temArtista:!0})},a.loadSongs=Object(E.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({dadosOK:!1}),e.next=3,p.get("/lookup?id=".concat(a.state.artistId,"&limit=10000&entity=song"));case 3:t=e.sent,n=a.getUnique(t.data.results,"trackId"),r=a.getUnique(n,"trackName"),a.setState({songs:r}),console.log(a.state.songs);case 8:case"end":return e.stop()}}),e)}))),a.loadArtists=Object(E.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/search?term=".concat(a.state.artista,"&limit=1000&entity=song"));case 2:t=e.sent,n=a.getUnique(t.data.results,"collectionId"),r=a.getUnique(n,"collectionName"),a.setState({track:r}),a.setState({artistName:n[0].artistName}),a.setState({artistId:n[0].artistId}),a.setState({artistImg:n[0].artworkUrl100}),a.loadSongs();case 10:case"end":return e.stop()}}),e)}))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillDidMount",value:function(){this.state.width<=500&&this.setState({desck:!1})}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"getUnique",value:function(e,t){return e.map((function(e){return e[t]})).map((function(e,t,a){return a.indexOf(e)===t&&t})).filter((function(t){return e[t]})).map((function(t){return e[t]}))}},{key:"render",value:function(){var e=this,t=(this.state.desck,this.state.artista);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},this.state.dadosOK&&r.a.createElement(v.a,{color:"#0a657a",size:150}),this.state.dadosOK?r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Digite o nome de um ",r.a.createElement("strong",null,"Artista")," ou",r.a.createElement("strong",null,"Banda")," que deseja pesquisar"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"artista"},"ex."),r.a.createElement("input",{type:"artista",id:"email",plceholder:"ex. Alanis Morissette",value:t,onChange:this.handleInputChange}),r.a.createElement("button",{className:"btn",type:"submit"},"Pesquisar"))):r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:this.state.artistImg}),r.a.createElement("p",null,r.a.createElement("strong",null,this.state.artistName)))),r.a.createElement("div",{className:"containerGrande"},this.state.temArtista&&r.a.createElement("p",null,r.a.createElement("strong",null,"LISTA DE ALBUMS")),this.state.width>=500?r.a.createElement("ul",{className:"artist"},this.state.track.map((function(e){return r.a.createElement("li",{key:e.collectionId},r.a.createElement("img",{src:e.artworkUrl60}),r.a.createElement("div",{className:"divlinhas"},r.a.createElement("span",null,e.collectionName),r.a.createElement("strong",null,e.primaryGenreName)))}))):r.a.createElement("ul",{className:"musicMobile"},this.state.track.map((function(e){return r.a.createElement("li",{key:e.collectionId},r.a.createElement("coluna",null,r.a.createElement("div",null,r.a.createElement("img",{src:e.artworkUrl60})),r.a.createElement("div",{className:"divlinhas"},r.a.createElement("span",null,e.collectionName),r.a.createElement("strong",null,e.primaryGenreName))))}))),this.state.temArtista&&r.a.createElement("p",null,r.a.createElement("strong",null,"LISTA DE MUSICAS")),r.a.createElement("ul",{className:"music"},this.state.songs.reverse().map((function(t){return r.a.createElement("li",{key:t.trackId},r.a.createElement("coluna",null,r.a.createElement("div",null,r.a.createElement("img",{src:t.artworkUrl30})),e.state.width>=500?r.a.createElement("div",{className:"divlinhasMisic"},r.a.createElement("span",null,t.trackName),r.a.createElement("strong",null,(t.trackTimeMillis/60).toString().substr(0,1),":",(t.trackTimeMillis/60).toString().substr(0,2))):r.a.createElement("div",{className:"divlinhasMobile"},r.a.createElement("span",null,t.trackName," "),r.a.createElement("strong",null,(t.trackTimeMillis/60).toString().substr(0,1),":",(t.trackTimeMillis/60).toString().substr(0,2)))))})))))}}]),t}(n.Component)),k=(a(45),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);