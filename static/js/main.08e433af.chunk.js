(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{157:function(e,t){},159:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(10),a=n.n(c),i=(n(97),n(45)),o=n(9),s=(n(98),n(82)),l=n(192),u=n(193),j=n(195),d=n(196),b=n(197),h=n(207),p=n(212),f=n(190),g=n(23),O=n(4),m=Object(r.createContext)(),x=function(e){var t=e.children,n=Object(r.useState)("INR"),c=Object(g.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)("\u20b9"),s=Object(g.a)(o,2),l=s[0],u=s[1];return Object(r.useEffect)((function(){"INR"===a?u("\u20b9"):"USD"===a&&u("$")}),[a]),Object(O.jsx)(m.Provider,{value:{currency:a,symbol:l,setCurrency:i},children:t})},y=function(){return Object(r.useContext)(m)},v=function(){var e=y(),t=e.currency,n=e.setCurrency,r=(Object(o.f)(),Object(s.a)({palette:{primary:{main:"#fff"},type:"dark"}})),c=Object(f.a)((function(){return{Title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}}))();return Object(O.jsx)(l.a,{theme:r,children:Object(O.jsx)(u.a,{color:"transparent",position:"static",children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{variant:"h5",className:c.Title,children:"Crypto-Zone"}),Object(O.jsxs)(h.a,{variant:"outlined",style:{width:100,height:40,marginRight:15},value:t,onChange:function(e){return n(e.target.value)},children:[Object(O.jsx)(p.a,{value:"USD",children:"USD"}),Object(O.jsx)(p.a,{value:"INR",children:"INR"})]})]})})})})},C=n(40),k=n.n(C),_=n(58),w=n(59),S=n.n(w),I=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},F=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},N=n(81),D=n.n(N),M=Object(f.a)((function(){return{carousel:{height:"50%",display:"flex",alignItems:"center"},profit:{color:"gold"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}));function B(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var T=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],a=M(),o=y(),s=o.currency,l=o.symbol,u=function(){var e=Object(_.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(F(s));case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u()}),[s]);var j=n.map((function(e){var t,n=e.price_change_percentage_24h>=0;return Object(O.jsxs)(i.b,{className:a.carouselItem,to:"/",children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(O.jsxs)("span",{className:a.profit,children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(O.jsxs)("span",{style:{color:n>0?"rgb(14,203,129)":"red"},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2)]})]}),Object(O.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[l,B(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(O.jsx)("div",{className:a.carousel,children:Object(O.jsx)(D.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},autoPlay:!0,items:j})})},E=Object(f.a)((function(){return{banner:{background:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",alignItems:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}})),R=function(){var e=E();return Object(O.jsx)("div",{className:e.banner,children:Object(O.jsxs)(j.a,{className:e.bannerContent,children:[Object(O.jsxs)("div",{className:e.tagline,children:[Object(O.jsx)(b.a,{variant:"h4",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto-Zone"}),Object(O.jsx)(b.a,{variant:"subtitle2",style:{color:"darkgray",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info Regarding Your Favorite CryptoCurrency "})]}),Object(O.jsx)(T,{})]})})},P=n(210),W=n(200),z=n(201),A=n(202),U=n(203),J=n(204),L=n(205),Z=n(206),G=n(208),H=function(){var e,t=Object(r.useState)([]),n=Object(g.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),u=Object(g.a)(i,2),d=u[0],h=u[1],p=Object(r.useState)(""),m=Object(g.a)(p,2),x=m[0],v=m[1],C=Object(r.useState)(1),w=Object(g.a)(C,2),F=w[0],N=w[1],D=(Object(o.f)(),y()),M=D.currency,T=D.symbol,E=function(){var e=Object(_.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,S.a.get(I(M));case 3:t=e.sent,n=t.data,a(n),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){E()}),[M]);var R=Object(s.a)({palette:{primary:{main:"#fff"},type:"dark"}}),H=function(){return c.filter((function(e){return e.name.toLowerCase().includes(x)||e.symbol.toLowerCase().includes(x)}))},Y=Object(f.a)((function(){return{row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}}}))();return Object(O.jsx)(l.a,{theme:R,children:Object(O.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(O.jsx)(b.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"CryptoCurrency price By Market Cap"}),Object(O.jsx)(P.a,{label:"Search for CryptoCurrency",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),Object(O.jsx)(W.a,{children:d?Object(O.jsx)(z.a,{style:{backgroundColor:"gold"}}):Object(O.jsxs)(A.a,{children:[Object(O.jsx)(U.a,{style:{backgroundColor:"#EEBC1D"},children:Object(O.jsx)(J.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(O.jsx)(L.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(O.jsx)(Z.a,{children:H().slice(10*(F-1),10*(F-1)+10).map((function(e){var t=e.price_change_percentage_24h>=0;return Object(O.jsxs)(J.a,{className:Y.row,children:[Object(O.jsxs)(L.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:null===e||void 0===e?void 0:e.name,height:"50",style:{marginBottom:10}}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(O.jsx)("span",{style:{color:"darkgray"},children:e.name})]})]}),Object(O.jsxs)(L.a,{align:"right",children:[T," ",B(e.current_price.toFixed(2))]}),Object(O.jsxs)(L.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(O.jsxs)(L.a,{align:"right",children:[T," ",B(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(O.jsx)(G.a,{count:((null===(e=H())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,display:"flex",width:"100%",justifyContent:"center"},classes:{ul:Y.pagination},onChange:function(e,t){N(t),window.scroll(0,450)}})]})})},Y=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R,{}),Object(O.jsx)(H,{})]})};n(157);var $=function(){var e=Object(f.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}))();return Object(O.jsx)(i.a,{children:Object(O.jsxs)("div",{className:e.App,children:[Object(O.jsx)(v,{}),Object(O.jsx)(o.c,{children:Object(O.jsx)(o.a,{path:"/",component:Y})})]})})};n(158);a.a.render(Object(O.jsx)(x,{children:Object(O.jsx)($,{})}),document.getElementById("root"))},97:function(e,t,n){},98:function(e,t,n){}},[[159,1,2]]]);
//# sourceMappingURL=main.08e433af.chunk.js.map