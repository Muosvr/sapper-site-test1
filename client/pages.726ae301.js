import{S as e,i as a,s as t,e as r,t as n,k as s,c as l,a as i,b as o,d as c,m as u,f as h,g as f,h as p,L as m,y as d,G as g,j as $,l as v,o as E,H as w,p as I,q as y,r as j,I as x}from"./client.2f94a70a.js";import{v as b}from"./v4.96b22442.js";import"./index.4309d992.js";import{U as L}from"./UserMenu.0c1e5527.js";function A(e,a,t){const r=e.slice();return r[7]=a[t],r}function M(e){let a,t,g,$,v,E,w,I,y=e[3]&&P(e);return{c(){a=r("form"),t=r("label"),g=n("Enter a page title"),$=s(),v=r("input"),E=s(),y&&y.c(),this.h()},l(e){a=l(e,"FORM",{});var r=i(a);t=l(r,"LABEL",{for:!0});var n=i(t);g=o(n,"Enter a page title"),n.forEach(c),$=u(r),v=l(r,"INPUT",{id:!0}),E=u(r),y&&y.l(r),r.forEach(c),this.h()},h(){h(t,"for","page-name-input"),h(v,"id","page-name-input")},m(r,n){f(r,a,n),p(a,t),p(t,g),p(a,$),p(a,v),m(v,e[3]),p(a,E),y&&y.m(a,null),w||(I=d(v,"input",e[5]),w=!0)},p(e,t){8&t&&v.value!==e[3]&&m(v,e[3]),e[3]?y?y.p(e,t):(y=P(e),y.c(),y.m(a,null)):y&&(y.d(1),y=null)},d(e){e&&c(a),y&&y.d(),w=!1,I()}}}function P(e){let a,t,s;return{c(){a=r("a"),t=n("create"),this.h()},l(e){a=l(e,"A",{href:!0});var r=i(a);t=o(r,"create"),r.forEach(c),this.h()},h(){h(a,"href",s=e[4](e[3]))},m(e,r){f(e,a,r),p(a,t)},p(e,t){8&t&&s!==(s=e[4](e[3]))&&h(a,"href",s)},d(e){e&&c(a)}}}function U(e,a){let t,m,d,$,v,E=`${a[7].pageId.replace(N,"").replace("_"," ")} ${a[7].published?"":"(draft)"}`;return{key:e,first:null,c(){t=r("li"),m=r("a"),d=n(E),v=s(),this.h()},l(e){t=l(e,"LI",{});var a=i(t);m=l(a,"A",{href:!0});var r=i(m);d=o(r,E),r.forEach(c),v=u(a),a.forEach(c),this.h()},h(){h(m,"href",$=`/${a[2]}/${a[7].pageId}`),this.first=t},m(e,a){f(e,t,a),p(t,m),p(m,d),p(t,v)},p(e,a){1&a&&E!==(E=`${e[7].pageId.replace(N,"").replace("_"," ")} ${e[7].published?"":"(draft)"}`)&&g(d,E),5&a&&$!==($=`/${e[2]}/${e[7].pageId}`)&&h(m,"href",$)},d(e){e&&c(t)}}}function _(e){let a,t,m,d,b,P,_,k,H,N=e[2]+"'s Pages",q=[],B=new Map;b=new L({props:{username:e[1]}});let F=e[1]&&M(e),G=e[0]||[];const O=e=>e[7].pageId;for(let a=0;a<G.length;a+=1){let t=A(e,G,a),r=O(t);B.set(r,q[a]=U(r,t))}return{c(){a=r("main"),t=r("h1"),m=n(N),d=s(),$(b.$$.fragment),P=s(),F&&F.c(),_=s(),k=r("ul");for(let e=0;e<q.length;e+=1)q[e].c();this.h()},l(e){a=l(e,"MAIN",{class:!0});var r=i(a);t=l(r,"H1",{});var n=i(t);m=o(n,N),n.forEach(c),d=u(r),v(b.$$.fragment,r),P=u(r),F&&F.l(r),_=u(r),k=l(r,"UL",{});var s=i(k);for(let e=0;e<q.length;e+=1)q[e].l(s);s.forEach(c),r.forEach(c),this.h()},h(){h(a,"class","svelte-1u6d46m")},m(e,r){f(e,a,r),p(a,t),p(t,m),p(a,d),E(b,a,null),p(a,P),F&&F.m(a,null),p(a,_),p(a,k);for(let e=0;e<q.length;e+=1)q[e].m(k,null);H=!0},p(e,[t]){(!H||4&t)&&N!==(N=e[2]+"'s Pages")&&g(m,N);const r={};if(2&t&&(r.username=e[1]),b.$set(r),e[1]?F?F.p(e,t):(F=M(e),F.c(),F.m(a,_)):F&&(F.d(1),F=null),5&t){const a=e[0]||[];q=w(q,t,O,1,e,a,B,k,x,U,null,A)}},i(e){H||(I(b.$$.fragment,e),H=!0)},o(e){y(b.$$.fragment,e),H=!1},d(e){e&&c(a),j(b),F&&F.d();for(let e=0;e<q.length;e+=1)q[e].d()}}}var k=function(e,a,t,r){return new(t||(t=Promise))((function(n,s){function l(e){try{o(r.next(e))}catch(e){s(e)}}function i(e){try{o(r.throw(e))}catch(e){s(e)}}function o(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(l,i)}o((r=r.apply(e,a||[])).next())}))};function H(e,a){return k(this,void 0,void 0,(function*(){try{const{username:t,pageId:r}=e.params,n=`/api/${t}/pages.json`,s=yield this.fetch(n);return{pages:yield s.json(),username:a.username,owner:t}}catch(e){this.error(500,e)}}))}let N=/-.{8}$/g;function q(e,a,t){let r,{pages:n}=a,{username:s}=a,{owner:l}=a,i=b().split("-")[0];return e.$$set=e=>{"pages"in e&&t(0,n=e.pages),"username"in e&&t(1,s=e.username),"owner"in e&&t(2,l=e.owner)},[n,s,l,r,e=>`/${s}/${e.replace(" ","_")}-${i}/edit/?create=true`,function(){r=this.value,t(3,r)}]}export default class extends e{constructor(e){super(),a(this,e,q,_,t,{pages:0,username:1,owner:2})}}export{H as preload};
