(this["webpackJsonpunder-the-haze"]=this["webpackJsonpunder-the-haze"]||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"link":"/overview","name":"Overview","visible":false},{"link":"/episodes","name":"Episodes","visible":true},{"link":"/music","name":"Music","visible":true},{"link":"/about","name":"About Under the Haze","visible":true},{"link":"/donate","name":"Donate","visible":true},{"link":"/listen","name":"How to Listen","visible":true},{"link":"/contact","name":"Contact","visible":true}]')},function(e){e.exports=JSON.parse('[{"id":"1","active_date":"2019-12-12T00:00:00Z","title":"Freedom","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis quam. Pellentesque scelerisque vehicula sapien, lacinia pulvinar dui interdum at. Nam vulputate mattis felis, at malesuada lectus ullamcorper quis.","duration":"30m","thumbnail":"../../assets/img/GrandCanyon_poster_landscape_desktop.png"},{"id":"2","active_date":"2019-12-13T00:00:00Z","title":"Caravan","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis quam. Pellentesque scelerisque vehicula sapien, lacinia pulvinar dui interdum at. Nam vulputate mattis felis, at malesuada lectus ullamcorper quis.","duration":"29m","thumbnail":"../../assets/img/GrandCanyon_poster_landscape_desktop.png"},{"id":"3","active_date":"2019-12-14T00:00:00Z","title":"Black Mountain","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis quam. Pellentesque scelerisque vehicula sapien, lacinia pulvinar dui interdum at. Nam vulputate mattis felis, at malesuada lectus ullamcorper quis.","duration":"29m","thumbnail":"../../assets/img/GrandCanyon_poster_landscape_desktop.png"},{"id":"4","active_date":"2019-12-15T00:00:00Z","title":"Tyrant","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis quam. Pellentesque scelerisque vehicula sapien, lacinia pulvinar dui interdum at. Nam vulputate mattis felis, at malesuada lectus ullamcorper quis.","duration":"29m","thumbnail":"../../assets/img/GrandCanyon_poster_landscape_desktop.png"},{"id":"5","active_date":"2020-12-15T00:00:00Z","title":"Swiftwater","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis quam. Pellentesque scelerisque vehicula sapien, lacinia pulvinar dui interdum at. Nam vulputate mattis felis, at malesuada lectus ullamcorper quis.","duration":"29m","thumbnail":"../../assets/img/GrandCanyon_poster_landscape_desktop.png"}]')},,function(e){e.exports=JSON.parse('[{"name":"Ryan Wright","roles":"Writer, Director, Cast","bio":"He\'s got it going on"},{"name":"Will Fosset","roles":"Audio Director, Cast","bio":"He\'s groovin and movin"}]')},,,,,,function(e,t,s){},,,,,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(9),c=s.n(a),r=s(61),o=s(63),l=s(62),d=(s(23),s(60)),h=s(13),u=(s(41),s(14)),j=s(0);function p(e){const t=e.links.filter((e=>e.visible)).map(((t,s)=>Object(j.jsx)("li",{children:Object(j.jsx)(d.a,{to:t.link,className:e.active===t.link?"active":"","data-hover":t.name,onClick:e.handler.bind(this,t.link),children:t.name})},s)));return t&&e.isMobile?Object(j.jsxs)(h.slide,{isOpen:e.menuOpen,onStateChange:t=>e.stateChange(t),width:"100%",pageWrapId:"page-wrap",outerContainerId:"app",customCrossIcon:!1,noOverlay:!0,children:[t,Object(j.jsx)("div",{className:"social"})]}):t&&!e.isMobile?Object(j.jsx)("div",{className:"links",children:t}):Object(j.jsx)("p",{children:" No Links found...This shouldn't happen...I'm embarassed."})}class m extends n.a.Component{constructor(e){super(e),this.state={active:"/home",menuOpen:!1},this.isMobile=e.isMobile,this.handleStateChange=this.handleStateChange.bind(this),this._handleClick=this._handleClick.bind(this)}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState((e=>({menuOpen:!e.menuOpen})))}_handleClick(e){this.setState({active:e}),this.closeMenu()}render(){return Object(j.jsx)(p,{links:u,active:this.state.active,menuOpen:this.state.menuOpen,isMobile:this.isMobile,stateChange:this.handleStateChange,handler:this._handleClick})}}var b=m,v=(s(43),s.p+"static/media/uth_logo.6dcd87a9.svg");class x extends n.a.Component{constructor(e){super(e),this.state={active:"/home"},this._handleClick=this._handleClick.bind(this)}_handleClick(e){this.setState({active:e})}render(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"nav mobile",children:Object(j.jsx)(b,{isMobile:!0})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)(d.a,{to:"/",children:Object(j.jsx)("img",{src:v,alt:"Under the Haze"})})}),Object(j.jsx)("div",{className:"nav desktop",children:Object(j.jsx)(b,{isMobile:!1})})]})}}var O=x;s(44);class g extends n.a.Component{render(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(d.a,{to:"/",children:Object(j.jsx)("img",{src:v,alt:"Under the Haze"})})}),Object(j.jsx)("div",{className:"mobile",children:Object(j.jsx)(b,{isMobile:!1})}),Object(j.jsxs)("div",{className:"legal",children:[Object(j.jsx)("span",{children:"2021 Under the Haze | "}),Object(j.jsx)("span",{children:"Privacy Policy | "}),Object(j.jsx)("span",{children:"Terms of Use"})]})]})}}var f=g,w=(s(45),s.p+"static/media/GrandCanyon_poster_landscape_desktop.0f2649d3.png");class C extends n.a.Component{constructor(e){super(e),this.id=e.id,this.thumbnail=w,this.title=e.title,this.description=e.description,this.duration=e.duration,this.active_date=e.active_date,this.link="/episode/"+this.id}render(){return Object(j.jsxs)("div",{className:"episode",children:[Object(j.jsxs)("div",{className:"episode-header split-content",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{className:"thumbnail",src:this.thumbnail,alt:this.title})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"active-date",children:new Date(this.active_date).toLocaleDateString("en-US",{month:"long",year:"numeric",day:"numeric"})}),Object(j.jsxs)("div",{className:"episode-title",children:[Object(j.jsxs)("span",{children:["Episode ",this.id,":"]}),Object(j.jsx)("span",{children:this.title})]})]})]}),Object(j.jsx)("div",{className:"episode-description",children:this.description}),Object(j.jsx)("div",{className:"episode-link",children:Object(j.jsx)(d.a,{to:this.link,children:"Episode Page"})})]})}}var N=C,y=(s(46),s(15));function k(e){let t,s;s=e.episodeId?e.episodes.filter((t=>t.id===e.episodeId)):e.episodes.filter(e.filter);const i=s.sort(e.sort);if(e.returnCount){t=i.slice(0,e.returnCount)}else t=i;const n=t.map((e=>Object(j.jsx)("li",{children:Object(j.jsx)(N,{id:e.id,thumbnail:e.thumbnail,title:e.title,description:e.description,duration:e.duration,active_date:e.active_date},e.id)})));return n?Object(j.jsx)("ul",{children:n}):Object(j.jsxs)("p",{children:["No episodes yet! Mostly because we're just ",Object(j.jsx)("strong",{children:"so so very lazy."})]})}class _ extends n.a.Component{ActiveEpisodesFilter(e){return new Date(e.active_date)<new Date}highToLowSort(e,t){return e.id-t.id}lowToHighSort(e,t){return t.id-e.id}constructor(e){if(super(e),e.filter&&"function"===typeof e.filter?this.filter=e.filter:this.filter=this.ActiveEpisodesFilter,e.sort&&"function"===typeof e.sort)this.sort=e.sort;else if(e.sort&&("string"===typeof e.sort||e.sort instanceof String))switch(e.sort){case"highToLow":this.sort=this.highToLowSort;break;case"lowToHigh":this.sort=this.lowToHighSort;break;default:this.sort=this.lowToHighSort}else this.sort=this.lowToHighSort;e.returnCount?this.returnCount=e.returnCount:this.returnCount=null,this.episodeId=e.episodeId}render(){return Object(j.jsx)("div",{className:"episodes",children:Object(j.jsx)(k,{episodes:y,episodeId:this.episodeId,filter:this.filter,sort:this.sort,returnCount:this.returnCount})})}}var S=_;s(47);class T extends n.a.Component{MostRecentEpisodesFilter(e,t,s){let i=-1;for(var n=0;n<s.length;n++)s[n].id>i&&(i=s[n].id);return new Date(e.active_date)<new Date&&!(e.id===i)}render(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsxs)("div",{className:"content slot-1",children:[Object(j.jsx)("div",{className:"content-left",children:Object(j.jsx)("div",{className:"content-image",children:Object(j.jsx)("img",{src:w,alt:"Content"})})}),Object(j.jsxs)("div",{className:"content-right",children:[Object(j.jsx)("h3",{className:"section-header",children:Object(j.jsx)("span",{children:"New This Week"})}),Object(j.jsx)("div",{className:"latest-episode",children:Object(j.jsx)(S,{sort:"lowToHighSort",returnCount:1})})]})]}),Object(j.jsxs)("div",{className:"content slot-2",children:[Object(j.jsx)("h3",{className:"section-header",children:Object(j.jsx)("span",{children:"Recently Aired"})}),Object(j.jsx)("div",{className:"recent-episodes",children:Object(j.jsx)(S,{filter:this.MostRecentEpisodesFilter,sort:"lowToHighSort",returnCount:3})}),Object(j.jsx)("div",{className:"all-episodes-link",children:Object(j.jsx)("a",{href:"/episodes",children:"See All Episodes"})})]}),Object(j.jsxs)("div",{className:"content slot-3",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("span",{children:"About Season 1"})}),Object(j.jsx)("p",{children:"Tertiary Content."})]})]})}}var q=T;s(48);class I extends n.a.Component{render(){return Object(j.jsx)("div",{className:"overview",children:Object(j.jsx)("p",{children:"So far nothing has happened because we haven't recorded anything."})})}}var M=I;s(49);class z extends n.a.Component{render(){return Object(j.jsx)("div",{className:"content episode-page",children:Object(j.jsx)(S,{})})}}var H=z,L=(s(50),s.p+"static/media/theme.a42797b5.wav"),P=s(16),U=s.n(P);class D extends n.a.Component{constructor(e){super(e),this.songUrl=e.songUrl}render(){return Object(j.jsx)(U.a,{src:this.songUrl,type:"audio/wav",controls:!0})}}var W=D;class E extends n.a.Component{constructor(e){super(e),this.themeUrl=L}render(){return Object(j.jsxs)("div",{className:"content music",children:[Object(j.jsx)("p",{children:"We have one song. This is it."}),Object(j.jsx)(W,{songUrl:this.themeUrl})]})}}var A=E,F=(s(51),s(52),s.p+"static/media/placeholder.39a842d0.png");class B extends n.a.Component{constructor(e){super(e),this.name=e.name,this.portrait=F,this.roles=e.roles,this.bio=e.bio}render(){return Object(j.jsxs)("div",{className:"cast-tile slot-1",children:[Object(j.jsx)("div",{className:"content-left",children:Object(j.jsx)("div",{className:"portrait",children:Object(j.jsx)("img",{src:this.portrait,alt:"{this.name}"})})}),Object(j.jsxs)("div",{className:"content-right",children:[Object(j.jsx)("div",{className:"name",children:this.name}),Object(j.jsx)("div",{className:"roles",children:this.roles}),Object(j.jsx)("div",{className:"bio",children:this.bio})]})]})}}var G=B,J=s(17);function R(e){const t=e.castList.map(((e,t)=>Object(j.jsx)("li",{children:Object(j.jsx)(G,{name:e.name,roles:e.roles,bio:e.bio})},t)));return t||Object(j.jsx)("p",{children:"Crew? We ain't got a crew. This was all done by AI."})}class Z extends n.a.Component{render(){return Object(j.jsxs)("div",{className:"content overview",children:[Object(j.jsx)("p",{children:"You want to know what this podcast is about? Fine but just for you. Don't tell anyone else."}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Overview"}),Object(j.jsx)("p",{children:"Under the Haze is a podcast about a dark place. Where a cataclysmic event has covered the face of the land in a thick fog that obscures light and leaves pockets of civilization scattered throughout. When there is no connection, no accountability, power reigns and in the world of Under the Haze power corrupts and consumes all. In the story, we see these aspects of our humanity. The worst of us. Men and women are turned into monsters and yet they still remain human. We see power, even when wielded with the best intentions can turn us into people we don't recognize."}),Object(j.jsx)("p",{children:"Despite all that, it is a story about courage and justice.  It's a story about how mercy isn't found in in a lack of domination but rather in an abundance of love. The characters try their best to help where they can even when it puts them in danger. This story is my candlelight in a dark world and I hope it conveys the message that justice and mercy are not passive concepts but things that need to be actively worked on."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Cast and Crew"}),Object(j.jsx)("p",{children:"List the cast and crew here. Maybe Pictures if they want them."}),Object(j.jsx)(R,{castList:J})]})]})}}var Y=Z;s(53);class K extends n.a.Component{render(){return Object(j.jsxs)("div",{className:"content donate",children:[Object(j.jsx)("p",{children:"Patreon? I guess we could do that."}),Object(j.jsx)("button",{children:"Become a supporter"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Kofi is a thing for one time donations right?"}),Object(j.jsx)("button",{children:"Buy the crew a pizza"})]})}}var Q=K;s(54);class V extends n.a.Component{render(){return Object(j.jsx)("div",{className:"content listen",children:Object(j.jsx)("p",{children:"It's a podcast... You listen with your ears dummy."})})}}var X=V;s(55);class $ extends n.a.Component{render(){return Object(j.jsxs)("div",{className:"content overview",children:[Object(j.jsx)("p",{children:"Right now we only take messages in the form of cryptic and mildly threatening notes made from newspaper and magazine clippings sent to this P.O. Box:"}),Object(j.jsx)("div",{className:"address",children:Object(j.jsx)("p",{children:"Note to self: get a P.O. Box"})}),Object(j.jsx)("p",{children:"Please don't put a return address."}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"We also have an email. You could try that I guess..."}),Object(j.jsx)("p",{children:"underthehazecast@gmail.com"})]})}}var ee=$;s(56);class te extends n.a.Component{constructor(e){super(e),this.id=e.match.params.id}SpecificEpisode(e){return e.id===this.id}render(){return Object(j.jsx)("div",{className:"episode-detail-page",children:Object(j.jsx)(S,{episodeId:this.id})})}}var se=te;class ie extends n.a.Component{render(){return Object(j.jsx)("div",{className:"error",children:"Page not found. Looks like you got lost in the haze."})}}var ne=ie;class ae extends n.a.Component{render(){const e=this.props.location;return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(O,{location:e}),Object(j.jsx)("main",{id:"page-wrap",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:q}),Object(j.jsx)(l.a,{path:"/overview",component:M}),Object(j.jsx)(l.a,{path:"/episode/:id",component:se}),Object(j.jsx)(l.a,{path:"/episodes",component:H}),Object(j.jsx)(l.a,{path:"/music",component:A}),Object(j.jsx)(l.a,{path:"/about",component:Y}),Object(j.jsx)(l.a,{path:"/donate",component:Q}),Object(j.jsx)(l.a,{path:"/listen",component:X}),Object(j.jsx)(l.a,{path:"/contact",component:ee}),Object(j.jsx)(l.a,{component:ne})]})}),Object(j.jsx)(f,{})]})})}}var ce=ae;c.a.render(Object(j.jsx)(ce,{}),document.getElementById("root"))}],[[58,1,2]]]);
//# sourceMappingURL=main.b393c7c0.chunk.js.map