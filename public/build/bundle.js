var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function f(e){e.forEach(t)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let r,o;function i(e,t){return r||(r=document.createElement("a")),r.href=t,e===r.href}function c(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function h(e){return document.createTextNode(e)}function p(){return h(" ")}function v(){return h("")}function b(e,t,n,f){return e.addEventListener(t,n,f),()=>e.removeEventListener(t,n,f)}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,f){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,f?"important":"")}function C(e,t,n){e.classList[n?"add":"remove"](t)}function x(e){o=e}const S=[],$=[],M=[],j=[],A=Promise.resolve();let N=!1;function z(e){M.push(e)}const T=new Set;let I=0;function q(){const e=o;do{for(;I<S.length;){const e=S[I];I++,x(e),_(e.$$)}for(x(null),S.length=0,I=0;$.length;)$.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];T.has(t)||(T.add(t),t())}M.length=0}while(S.length);for(;j.length;)j.pop()();N=!1,T.clear(),x(e)}function _(e){if(null!==e.fragment){e.update(),f(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const B=new Set;let G;function P(){G={r:0,c:[],p:G}}function E(){G.r||f(G.c),G=G.p}function L(e,t){e&&e.i&&(B.delete(e),e.i(t))}function D(e,t,n,f){if(e&&e.o){if(B.has(e))return;B.add(e),G.c.push((()=>{B.delete(e),f&&(n&&e.d(1),f())})),e.o(t)}}function R(e){e&&e.c()}function H(e,n,s,r){const{fragment:o,on_mount:i,on_destroy:c,after_update:l}=e.$$;o&&o.m(n,s),r||z((()=>{const n=i.map(t).filter(a);c?c.push(...n):f(n),e.$$.on_mount=[]})),l.forEach(z)}function U(e,t){const n=e.$$;null!==n.fragment&&(f(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&(S.push(e),N||(N=!0,A.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,a,s,r,i,c,l,d=[-1]){const m=o;x(t);const g=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||m.$$.root};l&&l(g.root);let h=!1;if(g.ctx=s?s(t,a.props||{},((e,n,...f)=>{const a=f.length?f[0]:n;return g.ctx&&i(g.ctx[e],g.ctx[e]=a)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](a),h&&O(t,e)),n})):[],g.update(),h=!0,f(g.before_update),g.fragment=!!r&&r(g.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);g.fragment&&g.fragment.l(e),e.forEach(u)}else g.fragment&&g.fragment.c();a.intro&&L(t.$$.fragment),H(t,a.target,a.anchor,a.customElement),q()}x(m)}class J{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var K={},V={};function W(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function Y(e){var t=Object.create(null),n=[];return e.forEach((function(e){for(var f in e)f in t||n.push(t[f]=f)})),n}function Z(e,t){var n=e+"",f=n.length;return f<t?new Array(t-f+1).join(0)+n:n}function Q(e){var t,n=e.getUTCHours(),f=e.getUTCMinutes(),a=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":((t=e.getUTCFullYear())<0?"-"+Z(-t,6):t>9999?"+"+Z(t,6):Z(t,4))+"-"+Z(e.getUTCMonth()+1,2)+"-"+Z(e.getUTCDate(),2)+(s?"T"+Z(n,2)+":"+Z(f,2)+":"+Z(a,2)+"."+Z(s,3)+"Z":a?"T"+Z(n,2)+":"+Z(f,2)+":"+Z(a,2)+"Z":f||n?"T"+Z(n,2)+":"+Z(f,2)+"Z":"")}var X=function(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0);function f(e,t){var f,a=[],s=e.length,r=0,o=0,i=s<=0,c=!1;function l(){if(i)return V;if(c)return c=!1,K;var t,f,a=r;if(34===e.charCodeAt(a)){for(;r++<s&&34!==e.charCodeAt(r)||34===e.charCodeAt(++r););return(t=r)>=s?i=!0:10===(f=e.charCodeAt(r++))?c=!0:13===f&&(c=!0,10===e.charCodeAt(r)&&++r),e.slice(a+1,t-1).replace(/""/g,'"')}for(;r<s;){if(10===(f=e.charCodeAt(t=r++)))c=!0;else if(13===f)c=!0,10===e.charCodeAt(r)&&++r;else if(f!==n)continue;return e.slice(a,t)}return i=!0,e.slice(a,s)}for(10===e.charCodeAt(s-1)&&--s,13===e.charCodeAt(s-1)&&--s;(f=l())!==V;){for(var u=[];f!==K&&f!==V;)u.push(f),f=l();t&&null==(u=t(u,o++))||a.push(u)}return a}function a(t,n){return t.map((function(t){return n.map((function(e){return r(t[e])})).join(e)}))}function s(t){return t.map(r).join(e)}function r(e){return null==e?"":e instanceof Date?Q(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var n,a,s=f(e,(function(e,f){if(n)return n(e,f-1);a=e,n=t?function(e,t){var n=W(e);return function(f,a){return t(n(f),a,e)}}(e,t):W(e)}));return s.columns=a||[],s},parseRows:f,format:function(t,n){return null==n&&(n=Y(t)),[n.map(r).join(e)].concat(a(t,n)).join("\n")},formatBody:function(e,t){return null==t&&(t=Y(e)),a(e,t).join("\n")},formatRows:function(e){return e.map(s).join("\n")},formatRow:s,formatValue:r}}(","),ee=X.parse;var te,ne,fe=(te=function(e){!function(e,t,n){function f(e){var t=this,n=function(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){var f=.02519603282416938*(e+=t.charCodeAt(n));f-=e=f>>>0,e=(f*=e)>>>0,e+=4294967296*(f-=e)}return 2.3283064365386963e-10*(e>>>0)}}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function a(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var n=new f(e),s=t&&t.state,r=n.next;return r.int32=function(){return 4294967296*n.next()|0},r.double=function(){return r()+11102230246251565e-32*(2097152*r()|0)},r.quick=r,s&&("object"==typeof s&&a(s,n),r.state=function(){return a(n,{})}),r}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.alea=s}(0,e,!1)},te(ne={exports:{}},ne.exports),ne.exports);function ae(e,t=Math.random){return e.map((e=>({value:e,sort:t()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e))}function se(e,t){let n=JSON.stringify(t);localStorage.setItem(e,n)}function re(t){let n,f,a;return{c(){n=g("svg"),f=g("path"),y(f,"d",a=t[1][t[0]]),y(n,"viewBox","0 0 24 24"),y(n,"fill-rule","evenodd"),y(n,"clip-rule","evenodd"),y(n,"class","svelte-1elm16i")},m(e,t){l(e,n,t),c(n,f)},p(e,[t]){1&t&&a!==(a=e[1][e[0]])&&y(f,"d",a)},i:e,o:e,d(e){e&&u(n)}}}function oe(e,t,n){let{type:f="info"}=t;return e.$$set=e=>{"type"in e&&n(0,f=e.type)},[f,{info:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",chart:"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}]}class ie extends J{constructor(e){super(),F(this,e,oe,re,s,{type:0})}}function ce(e,t,n){const f=e.slice();return f[30]=t[n],f[32]=n,f}function le(e,t,n){const f=e.slice();return f[33]=t[n],f[32]=n,f}function ue(e,t,n){const f=e.slice();return f[27]=t[n],f}function de(e,t,n){const f=e.slice();return f[24]=t[n],f}function me(e,t,n){const f=e.slice();return f[33]=t[n],f[32]=n,f}function ge(e){let t,n=e[32]/10*100+"%";return{c(){t=m("div"),y(t,"class","svelte-1tf619m"),k(t,"left",n,!1),k(t,"width","10%",!1),k(t,"background-color",e[33]?"rgb(106,170,100)":"red",!1)},m(e,n){l(e,t,n)},p(e,n){2&n[0]&&k(t,"background-color",e[33]?"rgb(106,170,100)":"red",!1)},d(e){e&&u(t)}}}function he(t){let n,f,a,s,r,o,i,c,d,g,h,v,w;return{c(){n=m("h2"),n.textContent="How to play",f=p(),a=m("p"),a.textContent="Just guess the names of ten countries from their flags (eg. 🇵🇸 = Palestine)... And it's multi-choice so you've got a fair chance even if you're not a geography nerd.",s=p(),r=m("h2"),r.textContent="Credits",o=p(),i=m("p"),i.innerHTML='This game was invented by Yazan and Kinan, and coded by <a href="https://twitter.com/bothness" target="_blank">their dad</a>. Inspired by the Wordle-verse.',c=p(),d=m("p"),d.innerHTML='You can find the <a href="https://github.com/bothness/guesswhichflag" target="_blank">source code here</a>.',g=p(),h=m("button"),h.textContent="Go back",y(n,"class","svelte-1tf619m"),y(a,"class","svelte-1tf619m"),y(r,"class","svelte-1tf619m"),y(i,"class","svelte-1tf619m"),y(d,"class","svelte-1tf619m"),y(h,"class","svelte-1tf619m")},m(e,u){l(e,n,u),l(e,f,u),l(e,a,u),l(e,s,u),l(e,r,u),l(e,o,u),l(e,i,u),l(e,c,u),l(e,d,u),l(e,g,u),l(e,h,u),v||(w=b(h,"click",t[17]),v=!0)},p:e,i:e,o:e,d(e){e&&u(n),e&&u(f),e&&u(a),e&&u(s),e&&u(r),e&&u(o),e&&u(i),e&&u(c),e&&u(d),e&&u(g),e&&u(h),v=!1,w()}}}function pe(e){let t,n,f,a,s,r,o,i,g,b,C,x,S,$,M,j,A,N,z,T,I,q,_,B,G,R,H,U,O,F,J,K,V,W,Y,Z,Q,X,ee,te,ne,fe,ae,se,re,oe,ie,le,ue,de,me=e[2].stats.played+"",ge=(e[2].stats.right+e[2].stats.wrong>0?Math.round(100*e[2].stats.right/(e[2].stats.right+e[2].stats.wrong)):0)+"",he=e[2].stats.streak+"",pe=e[2].stats.max+"",ve=e[1].turn==Ie&&we(e),be=[...e[2].stats.dist].reverse(),ye=[];for(let t=0;t<be.length;t+=1)ye[t]=xe(ce(e,be,t));let ke=e[2].daily.game&&e[2].daily.game.turn==Ie&&Se(e);function Ce(e,t){return e[1].turn==Ie?Me:$e}let je=Ce(e),Ae=je(e);return{c(){ve&&ve.c(),t=p(),n=m("h2"),n.textContent="Your daily game stats",f=p(),a=m("hr"),s=p(),r=m("h3"),r.textContent="All-time record",o=p(),i=m("div"),g=m("div"),b=m("span"),C=h(me),x=p(),S=m("br"),$=h("Played"),M=p(),j=m("div"),A=m("span"),N=h(ge),z=h("%"),T=p(),I=m("br"),q=h("Correct flags"),_=p(),B=m("div"),G=m("span"),R=h(he),H=p(),U=m("br"),O=h("Current streak\n\t\t\t"),F=m("br"),J=m("span"),J.textContent="(flags in a row)",K=p(),V=m("div"),W=m("span"),Y=h(pe),Z=p(),Q=m("br"),X=h("Max streak"),ee=p(),te=m("hr"),ne=p(),fe=m("h3"),fe.textContent="Correct flags distribution",ae=p(),se=m("div");for(let e=0;e<ye.length;e+=1)ye[e].c();re=p(),oe=m("hr"),ie=p(),ke&&ke.c(),le=p(),Ae.c(),ue=v(),y(n,"class","svelte-1tf619m"),k(n,"margin-top","5px",!1),y(a,"class","svelte-1tf619m"),y(r,"class","svelte-1tf619m"),y(b,"class","text-lrg svelte-1tf619m"),y(A,"class","text-lrg svelte-1tf619m"),y(G,"class","text-lrg svelte-1tf619m"),y(J,"class","text-sml svelte-1tf619m"),y(W,"class","text-lrg svelte-1tf619m"),y(i,"class","num-container svelte-1tf619m"),y(te,"class","svelte-1tf619m"),y(fe,"class","svelte-1tf619m"),y(se,"class","bar-container svelte-1tf619m"),y(oe,"class","svelte-1tf619m")},m(e,u){ve&&ve.m(e,u),l(e,t,u),l(e,n,u),l(e,f,u),l(e,a,u),l(e,s,u),l(e,r,u),l(e,o,u),l(e,i,u),c(i,g),c(g,b),c(b,C),c(g,x),c(g,S),c(g,$),c(i,M),c(i,j),c(j,A),c(A,N),c(A,z),c(j,T),c(j,I),c(j,q),c(i,_),c(i,B),c(B,G),c(G,R),c(B,H),c(B,U),c(B,O),c(B,F),c(B,J),c(i,K),c(i,V),c(V,W),c(W,Y),c(V,Z),c(V,Q),c(V,X),l(e,ee,u),l(e,te,u),l(e,ne,u),l(e,fe,u),l(e,ae,u),l(e,se,u);for(let e=0;e<ye.length;e+=1)ye[e].m(se,null);l(e,re,u),l(e,oe,u),l(e,ie,u),ke&&ke.m(e,u),l(e,le,u),Ae.m(e,u),l(e,ue,u),de=!0},p(e,n){if(e[1].turn==Ie?ve?(ve.p(e,n),2&n[0]&&L(ve,1)):(ve=we(e),ve.c(),L(ve,1),ve.m(t.parentNode,t)):ve&&(P(),D(ve,1,1,(()=>{ve=null})),E()),(!de||4&n[0])&&me!==(me=e[2].stats.played+"")&&w(C,me),(!de||4&n[0])&&ge!==(ge=(e[2].stats.right+e[2].stats.wrong>0?Math.round(100*e[2].stats.right/(e[2].stats.right+e[2].stats.wrong)):0)+"")&&w(N,ge),(!de||4&n[0])&&he!==(he=e[2].stats.streak+"")&&w(R,he),(!de||4&n[0])&&pe!==(pe=e[2].stats.max+"")&&w(Y,pe),6&n[0]){let t;for(be=[...e[2].stats.dist].reverse(),t=0;t<be.length;t+=1){const f=ce(e,be,t);ye[t]?ye[t].p(f,n):(ye[t]=xe(f),ye[t].c(),ye[t].m(se,null))}for(;t<ye.length;t+=1)ye[t].d(1);ye.length=be.length}e[2].daily.game&&e[2].daily.game.turn==Ie?ke?ke.p(e,n):(ke=Se(e),ke.c(),ke.m(le.parentNode,le)):ke&&(ke.d(1),ke=null),je===(je=Ce(e))&&Ae?Ae.p(e,n):(Ae.d(1),Ae=je(e),Ae&&(Ae.c(),Ae.m(ue.parentNode,ue)))},i(e){de||(L(ve),de=!0)},o(e){D(ve),de=!1},d(e){ve&&ve.d(e),e&&u(t),e&&u(n),e&&u(f),e&&u(a),e&&u(s),e&&u(r),e&&u(o),e&&u(i),e&&u(ee),e&&u(te),e&&u(ne),e&&u(fe),e&&u(ae),e&&u(se),d(ye,e),e&&u(re),e&&u(oe),e&&u(ie),ke&&ke.d(e),e&&u(le),Ae.d(e),e&&u(ue)}}}function ve(t){let n,f,a,s,r,o,d,g,b,k,C="right"==t[1].status?"Right!":"Wrong...",x=t[1].questions[t[1].turn-1].name+"";function S(e,t){return e[1].turn<Ie?Ae:je}let $=S(t),M=$(t);return{c(){n=m("div"),f=m("img"),r=p(),o=h(C),d=h(" It was "),g=h(x),b=h(".\n\t"),M.c(),k=v(),i(f.src,a="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+t[1].questions[t[1].turn-1].unicode+".svg")||y(f,"src",a),y(f,"alt",s=t[1].questions[t[1].turn-1].unicode),y(n,"class","flag svelte-1tf619m")},m(e,t){l(e,n,t),c(n,f),l(e,r,t),l(e,o,t),l(e,d,t),l(e,g,t),l(e,b,t),M.m(e,t),l(e,k,t)},p(e,t){2&t[0]&&!i(f.src,a="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+e[1].questions[e[1].turn-1].unicode+".svg")&&y(f,"src",a),2&t[0]&&s!==(s=e[1].questions[e[1].turn-1].unicode)&&y(f,"alt",s),2&t[0]&&C!==(C="right"==e[1].status?"Right!":"Wrong...")&&w(o,C),2&t[0]&&x!==(x=e[1].questions[e[1].turn-1].name+"")&&w(g,x),$===($=S(e))&&M?M.p(e,t):(M.d(1),M=$(e),M&&(M.c(),M.m(k.parentNode,k)))},i:e,o:e,d(e){e&&u(n),e&&u(r),e&&u(o),e&&u(d),e&&u(g),e&&u(b),M.d(e),e&&u(k)}}}function be(t){let n,f,a,s,r,o,g=t[1].options[t[1].turn],h=[];for(let e=0;e<g.length;e+=1)h[e]=Ne(ue(t,g,e));return{c(){n=m("div"),f=m("img"),r=p();for(let e=0;e<h.length;e+=1)h[e].c();o=v(),i(f.src,a="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+t[1].questions[t[1].turn].unicode+".svg")||y(f,"src",a),y(f,"alt",s=t[1].questions[t[1].turn].unicode),y(n,"class","flag svelte-1tf619m")},m(e,t){l(e,n,t),c(n,f),l(e,r,t);for(let n=0;n<h.length;n+=1)h[n].m(e,t);l(e,o,t)},p(e,t){if(2&t[0]&&!i(f.src,a="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+e[1].questions[e[1].turn].unicode+".svg")&&y(f,"src",a),2&t[0]&&s!==(s=e[1].questions[e[1].turn].unicode)&&y(f,"alt",s),66&t[0]){let n;for(g=e[1].options[e[1].turn],n=0;n<g.length;n+=1){const f=ue(e,g,n);h[n]?h[n].p(f,t):(h[n]=Ne(f),h[n].c(),h[n].m(o.parentNode,o))}for(;n<h.length;n+=1)h[n].d(1);h.length=g.length}},i:e,o:e,d(e){e&&u(n),e&&u(r),d(h,e),e&&u(o)}}}function ye(t){let n,a,s,r,o,i,c,g=ae(t[3]).slice(0,120),h=[];for(let e=0;e<g.length;e+=1)h[e]=ze(de(t,g,e));return{c(){n=m("div");for(let e=0;e<h.length;e+=1)h[e].c();a=p(),s=m("button"),s.textContent="Daily game",r=p(),o=m("button"),o.textContent="Practice game",y(n,"class","flag-container svelte-1tf619m"),y(s,"class","svelte-1tf619m"),k(s,"margin-top","10px",!1),y(o,"class","svelte-1tf619m")},m(e,f){l(e,n,f);for(let e=0;e<h.length;e+=1)h[e].m(n,null);l(e,a,f),l(e,s,f),l(e,r,f),l(e,o,f),i||(c=[b(s,"click",t[5]),b(o,"click",t[4])],i=!0)},p(e,t){if(8&t[0]){let f;for(g=ae(e[3]).slice(0,120),f=0;f<g.length;f+=1){const a=de(e,g,f);h[f]?h[f].p(a,t):(h[f]=ze(a),h[f].c(),h[f].m(n,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}},i:e,o:e,d(e){e&&u(n),d(h,e),e&&u(a),e&&u(s),e&&u(r),e&&u(o),i=!1,f(c)}}}function we(e){let t,n,f,a,s,r,o,i,g,v,k,C,x,S,$,M,j=e[1].score+"",A="daily"!=e[1].mode&&ke(),N=e[1].answers,z=[];for(let t=0;t<N.length;t+=1)z[t]=Ce(le(e,N,t));return x=new ie({props:{type:"share"}}),{c(){t=m("h2"),n=h("You scored "),f=h(j),a=h(" out of "),s=h(Ie),r=h("."),o=p(),A&&A.c(),i=p(),g=m("div");for(let e=0;e<z.length;e+=1)z[e].c();v=p(),k=m("button"),C=h("Share your score "),R(x.$$.fragment),y(t,"class","svelte-1tf619m"),y(g,"class","flag-container svelte-1tf619m"),y(k,"class","svelte-1tf619m")},m(u,d){l(u,t,d),c(t,n),c(t,f),c(t,a),c(t,s),c(t,r),l(u,o,d),A&&A.m(u,d),l(u,i,d),l(u,g,d);for(let e=0;e<z.length;e+=1)z[e].m(g,null);l(u,v,d),l(u,k,d),c(k,C),H(x,k,null),S=!0,$||(M=b(k,"click",e[9]),$=!0)},p(e,t){if((!S||2&t[0])&&j!==(j=e[1].score+"")&&w(f,j),"daily"!=e[1].mode?A||(A=ke(),A.c(),A.m(i.parentNode,i)):A&&(A.d(1),A=null),2&t[0]){let n;for(N=e[1].answers,n=0;n<N.length;n+=1){const f=le(e,N,n);z[n]?z[n].p(f,t):(z[n]=Ce(f),z[n].c(),z[n].m(g,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=N.length}},i(e){S||(L(x.$$.fragment,e),S=!0)},o(e){D(x.$$.fragment,e),S=!1},d(e){e&&u(t),e&&u(o),A&&A.d(e),e&&u(i),e&&u(g),d(z,e),e&&u(v),e&&u(k),U(x),$=!1,M()}}}function ke(e){let t;return{c(){t=h("(practice mode)")},m(e,n){l(e,t,n)},d(e){e&&u(t)}}}function Ce(e){let t,n,f,a,s,r,o=e[33]?"✔️":"❌";return{c(){t=m("div"),n=m("img"),s=m("br"),r=h(o),i(n.src,f="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+e[1].questions[e[32]].unicode+".svg")||y(n,"src",f),y(n,"alt",a=e[1].questions[e[32]].unicode),y(t,"class","flag-mini svelte-1tf619m")},m(e,f){l(e,t,f),c(t,n),c(t,s),c(t,r)},p(e,t){2&t[0]&&!i(n.src,f="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+e[1].questions[e[32]].unicode+".svg")&&y(n,"src",f),2&t[0]&&a!==(a=e[1].questions[e[32]].unicode)&&y(n,"alt",a),2&t[0]&&o!==(o=e[33]?"✔️":"❌")&&w(r,o)},d(e){e&&u(t)}}}function xe(e){let t,n,f,a,s,r,o,i,d=10-e[32]+"",g=e[30]+"",v=100*e[30]/Math.max(...e[2].stats.dist)+"%";return{c(){t=m("div"),n=m("div"),f=h(d),a=p(),s=m("div"),r=m("div"),o=h(g),i=p(),y(n,"class","bar-count svelte-1tf619m"),y(r,"class","svelte-1tf619m"),C(r,"highlight","daily"==e[1].mode&&e[1].turn==Ie&&10-e[32]==e[1].score),k(r,"width",v,!1),y(s,"class","bar svelte-1tf619m"),y(t,"class","bar-group svelte-1tf619m")},m(e,u){l(e,t,u),c(t,n),c(n,f),c(t,a),c(t,s),c(s,r),c(r,o),c(t,i)},p(e,t){4&t[0]&&g!==(g=e[30]+"")&&w(o,g),2&t[0]&&C(r,"highlight","daily"==e[1].mode&&e[1].turn==Ie&&10-e[32]==e[1].score),4&t[0]&&v!==(v=100*e[30]/Math.max(...e[2].stats.dist)+"%")&&k(r,"width",v,!1)},d(e){e&&u(t)}}}function Se(e){let t,n,f,a,s,r,o,i,d,g,v=String(Math.floor(e[0]%864e5/36e5)).padStart(2,"0")+"",b=String(Math.floor(e[0]%36e5/6e4)).padStart(2,"0")+"",k=String(Math.floor(e[0]%6e4/1e3)).padStart(2,"0")+"";return{c(){t=m("h3"),t.textContent="Next daily game",n=p(),f=m("span"),a=h(v),s=h(" :\n\t\t"),r=h(b),o=h(" :\n\t\t"),i=h(k),d=p(),g=m("hr"),y(t,"class","svelte-1tf619m"),y(f,"class","text-lrg svelte-1tf619m"),y(g,"class","svelte-1tf619m")},m(e,u){l(e,t,u),l(e,n,u),l(e,f,u),c(f,a),c(f,s),c(f,r),c(f,o),c(f,i),l(e,d,u),l(e,g,u)},p(e,t){1&t[0]&&v!==(v=String(Math.floor(e[0]%864e5/36e5)).padStart(2,"0")+"")&&w(a,v),1&t[0]&&b!==(b=String(Math.floor(e[0]%36e5/6e4)).padStart(2,"0")+"")&&w(r,b),1&t[0]&&k!==(k=String(Math.floor(e[0]%6e4/1e3)).padStart(2,"0")+"")&&w(i,k)},d(e){e&&u(t),e&&u(n),e&&u(f),e&&u(d),e&&u(g)}}}function $e(t){let n,f,a;return{c(){n=m("button"),n.textContent="Go back",y(n,"class","svelte-1tf619m")},m(e,s){l(e,n,s),f||(a=b(n,"click",t[16]),f=!0)},p:e,d(e){e&&u(n),f=!1,a()}}}function Me(t){let n,f,a;return{c(){n=m("button"),n.textContent="Return to menu",y(n,"class","svelte-1tf619m")},m(e,s){l(e,n,s),f||(a=b(n,"click",t[15]),f=!0)},p:e,d(e){e&&u(n),f=!1,a()}}}function je(t){let n,f,a;return{c(){n=m("button"),n.textContent="How did I do?",y(n,"class","svelte-1tf619m")},m(e,s){l(e,n,s),f||(a=b(n,"click",t[14]),f=!0)},p:e,d(e){e&&u(n),f=!1,a()}}}function Ae(t){let n,f,a;return{c(){n=m("button"),n.textContent="Next turn",y(n,"class","svelte-1tf619m")},m(e,s){l(e,n,s),f||(a=b(n,"click",t[13]),f=!0)},p:e,d(e){e&&u(n),f=!1,a()}}}function Ne(e){let t,n,f,a,s=e[27].name+"";function r(){return e[12](e[27])}return{c(){t=m("button"),n=h(s),y(t,"class","svelte-1tf619m")},m(e,s){l(e,t,s),c(t,n),f||(a=b(t,"click",r),f=!0)},p(t,f){e=t,2&f[0]&&s!==(s=e[27].name+"")&&w(n,s)},d(e){e&&u(t),f=!1,a()}}}function ze(t){let n,f,a,s;return{c(){n=m("div"),f=m("img"),i(f.src,a="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/"+t[24].unicode+".svg")||y(f,"src",a),y(f,"alt",s=t[24].unicode),y(n,"class","flag-mini svelte-1tf619m")},m(e,t){l(e,n,t),c(n,f)},p:e,d(e){e&&u(n)}}}function Te(e){let t,n,a,s,r,o,i,g,h,v,w,k,C,x,S,$,M,j,A;s=new ie({}),v=new ie({props:{type:"chart"}});let N=e[1].answers,z=[];for(let t=0;t<N.length;t+=1)z[t]=ge(me(e,N,t));const T=[ye,be,ve,pe,he],I=[];function q(e,t){return"start"==e[1].status?0:"guess"==e[1].status?1:"right"==e[1].status||"wrong"==e[1].status?2:"end"==e[1].status?3:"info"==e[1].status?4:-1}return~(S=q(e))&&($=I[S]=T[S](e)),{c(){t=m("header"),n=m("div"),a=m("button"),R(s.$$.fragment),r=p(),o=m("h1"),o.textContent="Guess which flag!",i=p(),g=m("div"),h=m("button"),R(v.$$.fragment),w=p(),k=m("div");for(let e=0;e<z.length;e+=1)z[e].c();C=p(),x=m("div"),$&&$.c(),y(a,"class","svelte-1tf619m"),y(n,"class","menu svelte-1tf619m"),y(o,"class","svelte-1tf619m"),y(h,"class","svelte-1tf619m"),y(g,"class","menu svelte-1tf619m"),y(t,"class","svelte-1tf619m"),y(k,"class","progress svelte-1tf619m"),y(x,"class","container svelte-1tf619m")},m(f,u){l(f,t,u),c(t,n),c(n,a),H(s,a,null),c(t,r),c(t,o),c(t,i),c(t,g),c(g,h),H(v,h,null),l(f,w,u),l(f,k,u);for(let e=0;e<z.length;e+=1)z[e].m(k,null);l(f,C,u),l(f,x,u),~S&&I[S].m(x,null),M=!0,j||(A=[b(a,"click",e[10]),b(h,"click",e[11])],j=!0)},p(e,t){if(2&t[0]){let n;for(N=e[1].answers,n=0;n<N.length;n+=1){const f=me(e,N,n);z[n]?z[n].p(f,t):(z[n]=ge(f),z[n].c(),z[n].m(k,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=N.length}let n=S;S=q(e),S===n?~S&&I[S].p(e,t):($&&(P(),D(I[n],1,1,(()=>{I[n]=null})),E()),~S?($=I[S],$?$.p(e,t):($=I[S]=T[S](e),$.c()),L($,1),$.m(x,null)):$=null)},i(e){M||(L(s.$$.fragment,e),L(v.$$.fragment,e),L($),M=!0)},o(e){D(s.$$.fragment,e),D(v.$$.fragment,e),D($),M=!1},d(e){e&&u(t),U(s),U(v),e&&u(w),e&&u(k),d(z,e),e&&u(C),e&&u(x),~S&&I[S].d(),j=!1,f(A)}}}const Ie=10;function qe(e,t,n){const f=ee('"iso","icon","unicode","name"\n"ad","🇦🇩","1f1e6-1f1e9","Andorra"\n"ae","🇦🇪","1f1e6-1f1ea","United Arab Emirates"\n"af","🇦🇫","1f1e6-1f1eb","Afghanistan"\n"ag","🇦🇬","1f1e6-1f1ec","Antigua and Barbuda"\n"ai","🇦🇮","1f1e6-1f1ee","Anguilla"\n"al","🇦🇱","1f1e6-1f1f1","Albania"\n"am","🇦🇲","1f1e6-1f1f2","Armenia"\n"ao","🇦🇴","1f1e6-1f1f4","Angola"\n"aq","🇦🇶","1f1e6-1f1f6","Antarctica"\n"ar","🇦🇷","1f1e6-1f1f7","Argentina"\n"as","🇦🇸","1f1e6-1f1f8","American Samoa"\n"at","🇦🇹","1f1e6-1f1f9","Austria"\n"au","🇦🇺","1f1e6-1f1fa","Australia"\n"aw","🇦🇼","1f1e6-1f1fc","Aruba"\n"ax","🇦🇽","1f1e6-1f1fd","Åland Islands"\n"az","🇦🇿","1f1e6-1f1ff","Azerbaijan"\n"ba","🇧🇦","1f1e7-1f1e6","Bosnia and Herzegovina"\n"bb","🇧🇧","1f1e7-1f1e7","Barbados"\n"bd","🇧🇩","1f1e7-1f1e9","Bangladesh"\n"be","🇧🇪","1f1e7-1f1ea","Belgium"\n"bf","🇧🇫","1f1e7-1f1eb","Burkina Faso"\n"bg","🇧🇬","1f1e7-1f1ec","Bulgaria"\n"bh","🇧🇭","1f1e7-1f1ed","Bahrain"\n"bi","🇧🇮","1f1e7-1f1ee","Burundi"\n"bj","🇧🇯","1f1e7-1f1ef","Benin"\n"bm","🇧🇲","1f1e7-1f1f2","Bermuda"\n"bn","🇧🇳","1f1e7-1f1f3","Brunei Darussalam"\n"bo","🇧🇴","1f1e7-1f1f4","Bolivia"\n"br","🇧🇷","1f1e7-1f1f7","Brazil"\n"bs","🇧🇸","1f1e7-1f1f8","Bahamas"\n"bt","🇧🇹","1f1e7-1f1f9","Bhutan"\n"bw","🇧🇼","1f1e7-1f1fc","Botswana"\n"by","🇧🇾","1f1e7-1f1fe","Belarus"\n"bz","🇧🇿","1f1e7-1f1ff","Belize"\n"ca","🇨🇦","1f1e8-1f1e6","Canada"\n"cc","🇨🇨","1f1e8-1f1e8","Cocos (Keeling) Islands"\n"cd","🇨🇩","1f1e8-1f1e9","Democratic Republic of the Congo"\n"cf","🇨🇫","1f1e8-1f1eb","Central African Republic"\n"cg","🇨🇬","1f1e8-1f1ec","Congo"\n"ch","🇨🇭","1f1e8-1f1ed","Switzerland"\n"ci","🇨🇮","1f1e8-1f1ee","Côte D\'Ivoire"\n"ck","🇨🇰","1f1e8-1f1f0","Cook Islands"\n"cl","🇨🇱","1f1e8-1f1f1","Chile"\n"cm","🇨🇲","1f1e8-1f1f2","Cameroon"\n"cn","🇨🇳","1f1e8-1f1f3","China"\n"co","🇨🇴","1f1e8-1f1f4","Colombia"\n"cr","🇨🇷","1f1e8-1f1f7","Costa Rica"\n"cu","🇨🇺","1f1e8-1f1fa","Cuba"\n"cv","🇨🇻","1f1e8-1f1fb","Cape Verde"\n"cw","🇨🇼","1f1e8-1f1fc","Curaçao"\n"cx","🇨🇽","1f1e8-1f1fd","Christmas Island"\n"cy","🇨🇾","1f1e8-1f1fe","Cyprus"\n"cz","🇨🇿","1f1e8-1f1ff","Czech Republic"\n"de","🇩🇪","1f1e9-1f1ea","Germany"\n"dj","🇩🇯","1f1e9-1f1ef","Djibouti"\n"dk","🇩🇰","1f1e9-1f1f0","Denmark"\n"dm","🇩🇲","1f1e9-1f1f2","Dominica"\n"do","🇩🇴","1f1e9-1f1f4","Dominican Republic"\n"dz","🇩🇿","1f1e9-1f1ff","Algeria"\n"ec","🇪🇨","1f1ea-1f1e8","Ecuador"\n"ee","🇪🇪","1f1ea-1f1ea","Estonia"\n"eg","🇪🇬","1f1ea-1f1ec","Egypt"\n"eh","🇪🇭","1f1ea-1f1ed","Western Sahara"\n"er","🇪🇷","1f1ea-1f1f7","Eritrea"\n"es","🇪🇸","1f1ea-1f1f8","Spain"\n"et","🇪🇹","1f1ea-1f1f9","Ethiopia"\n"fi","🇫🇮","1f1eb-1f1ee","Finland"\n"fj","🇫🇯","1f1eb-1f1ef","Fiji"\n"fk","🇫🇰","1f1eb-1f1f0","Falkland Islands (Malvinas)"\n"fm","🇫🇲","1f1eb-1f1f2","Micronesia"\n"fo","🇫🇴","1f1eb-1f1f4","Faroe Islands"\n"fr","🇫🇷","1f1eb-1f1f7","France"\n"ga","🇬🇦","1f1ec-1f1e6","Gabon"\n"gb","🇬🇧","1f1ec-1f1e7","United Kingdom"\n"gd","🇬🇩","1f1ec-1f1e9","Grenada"\n"ge","🇬🇪","1f1ec-1f1ea","Georgia"\n"gf","🇬🇫","1f1ec-1f1eb","French Guiana"\n"gg","🇬🇬","1f1ec-1f1ec","Guernsey"\n"gh","🇬🇭","1f1ec-1f1ed","Ghana"\n"gi","🇬🇮","1f1ec-1f1ee","Gibraltar"\n"gl","🇬🇱","1f1ec-1f1f1","Greenland"\n"gm","🇬🇲","1f1ec-1f1f2","Gambia"\n"gn","🇬🇳","1f1ec-1f1f3","Guinea"\n"gp","🇬🇵","1f1ec-1f1f5","Guadeloupe"\n"gq","🇬🇶","1f1ec-1f1f6","Equatorial Guinea"\n"gr","🇬🇷","1f1ec-1f1f7","Greece"\n"gs","🇬🇸","1f1ec-1f1f8","South Georgia"\n"gt","🇬🇹","1f1ec-1f1f9","Guatemala"\n"gw","🇬🇼","1f1ec-1f1fc","Guinea-Bissau"\n"gy","🇬🇾","1f1ec-1f1fe","Guyana"\n"hk","🇭🇰","1f1ed-1f1f0","Hong Kong"\n"hn","🇭🇳","1f1ed-1f1f3","Honduras"\n"hr","🇭🇷","1f1ed-1f1f7","Croatia"\n"ht","🇭🇹","1f1ed-1f1f9","Haiti"\n"hu","🇭🇺","1f1ed-1f1fa","Hungary"\n"id","🇮🇩","1f1ee-1f1e9","Indonesia"\n"ie","🇮🇪","1f1ee-1f1ea","Ireland"\n"im","🇮🇲","1f1ee-1f1f2","Isle of Man"\n"in","🇮🇳","1f1ee-1f1f3","India"\n"io","🇮🇴","1f1ee-1f1f4","British Indian Ocean Territory"\n"iq","🇮🇶","1f1ee-1f1f6","Iraq"\n"ir","🇮🇷","1f1ee-1f1f7","Iran"\n"is","🇮🇸","1f1ee-1f1f8","Iceland"\n"it","🇮🇹","1f1ee-1f1f9","Italy"\n"je","🇯🇪","1f1ef-1f1ea","Jersey"\n"jm","🇯🇲","1f1ef-1f1f2","Jamaica"\n"jo","🇯🇴","1f1ef-1f1f4","Jordan"\n"jp","🇯🇵","1f1ef-1f1f5","Japan"\n"ke","🇰🇪","1f1f0-1f1ea","Kenya"\n"kg","🇰🇬","1f1f0-1f1ec","Kyrgyzstan"\n"kh","🇰🇭","1f1f0-1f1ed","Cambodia"\n"ki","🇰🇮","1f1f0-1f1ee","Kiribati"\n"km","🇰🇲","1f1f0-1f1f2","Comoros"\n"kn","🇰🇳","1f1f0-1f1f3","Saint Kitts and Nevis"\n"kp","🇰🇵","1f1f0-1f1f5","North Korea"\n"kr","🇰🇷","1f1f0-1f1f7","South Korea"\n"kw","🇰🇼","1f1f0-1f1fc","Kuwait"\n"ky","🇰🇾","1f1f0-1f1fe","Cayman Islands"\n"kz","🇰🇿","1f1f0-1f1ff","Kazakhstan"\n"la","🇱🇦","1f1f1-1f1e6","Lao People\'s Democratic Republic"\n"lb","🇱🇧","1f1f1-1f1e7","Lebanon"\n"lc","🇱🇨","1f1f1-1f1e8","Saint Lucia"\n"li","🇱🇮","1f1f1-1f1ee","Liechtenstein"\n"lk","🇱🇰","1f1f1-1f1f0","Sri Lanka"\n"lr","🇱🇷","1f1f1-1f1f7","Liberia"\n"ls","🇱🇸","1f1f1-1f1f8","Lesotho"\n"lt","🇱🇹","1f1f1-1f1f9","Lithuania"\n"lu","🇱🇺","1f1f1-1f1fa","Luxembourg"\n"lv","🇱🇻","1f1f1-1f1fb","Latvia"\n"ly","🇱🇾","1f1f1-1f1fe","Libya"\n"ma","🇲🇦","1f1f2-1f1e6","Morocco"\n"mc","🇲🇨","1f1f2-1f1e8","Monaco"\n"md","🇲🇩","1f1f2-1f1e9","Moldova"\n"me","🇲🇪","1f1f2-1f1ea","Montenegro"\n"mg","🇲🇬","1f1f2-1f1ec","Madagascar"\n"mh","🇲🇭","1f1f2-1f1ed","Marshall Islands"\n"mk","🇲🇰","1f1f2-1f1f0","Macedonia"\n"ml","🇲🇱","1f1f2-1f1f1","Mali"\n"mm","🇲🇲","1f1f2-1f1f2","Myanmar"\n"mn","🇲🇳","1f1f2-1f1f3","Mongolia"\n"mo","🇲🇴","1f1f2-1f1f4","Macao"\n"mp","🇲🇵","1f1f2-1f1f5","Northern Mariana Islands"\n"mr","🇲🇷","1f1f2-1f1f7","Mauritania"\n"ms","🇲🇸","1f1f2-1f1f8","Montserrat"\n"mt","🇲🇹","1f1f2-1f1f9","Malta"\n"mu","🇲🇺","1f1f2-1f1fa","Mauritius"\n"mv","🇲🇻","1f1f2-1f1fb","Maldives"\n"mw","🇲🇼","1f1f2-1f1fc","Malawi"\n"mx","🇲🇽","1f1f2-1f1fd","Mexico"\n"my","🇲🇾","1f1f2-1f1fe","Malaysia"\n"mz","🇲🇿","1f1f2-1f1ff","Mozambique"\n"na","🇳🇦","1f1f3-1f1e6","Namibia"\n"nc","🇳🇨","1f1f3-1f1e8","New Caledonia"\n"ne","🇳🇪","1f1f3-1f1ea","Niger"\n"nf","🇳🇫","1f1f3-1f1eb","Norfolk Island"\n"ng","🇳🇬","1f1f3-1f1ec","Nigeria"\n"ni","🇳🇮","1f1f3-1f1ee","Nicaragua"\n"nl","🇳🇱","1f1f3-1f1f1","Netherlands"\n"no","🇳🇴","1f1f3-1f1f4","Norway"\n"np","🇳🇵","1f1f3-1f1f5","Nepal"\n"nr","🇳🇷","1f1f3-1f1f7","Nauru"\n"nu","🇳🇺","1f1f3-1f1fa","Niue"\n"nz","🇳🇿","1f1f3-1f1ff","New Zealand"\n"om","🇴🇲","1f1f4-1f1f2","Oman"\n"pa","🇵🇦","1f1f5-1f1e6","Panama"\n"pe","🇵🇪","1f1f5-1f1ea","Peru"\n"pf","🇵🇫","1f1f5-1f1eb","French Polynesia"\n"pg","🇵🇬","1f1f5-1f1ec","Papua New Guinea"\n"ph","🇵🇭","1f1f5-1f1ed","Philippines"\n"pk","🇵🇰","1f1f5-1f1f0","Pakistan"\n"pl","🇵🇱","1f1f5-1f1f1","Poland"\n"pm","🇵🇲","1f1f5-1f1f2","Saint Pierre and Miquelon"\n"pn","🇵🇳","1f1f5-1f1f3","Pitcairn"\n"pr","🇵🇷","1f1f5-1f1f7","Puerto Rico"\n"ps","🇵🇸","1f1f5-1f1f8","Palestine"\n"pt","🇵🇹","1f1f5-1f1f9","Portugal"\n"pw","🇵🇼","1f1f5-1f1fc","Palau"\n"py","🇵🇾","1f1f5-1f1fe","Paraguay"\n"qa","🇶🇦","1f1f6-1f1e6","Qatar"\n"ro","🇷🇴","1f1f7-1f1f4","Romania"\n"rs","🇷🇸","1f1f7-1f1f8","Serbia"\n"ru","🇷🇺","1f1f7-1f1fa","Russia"\n"rw","🇷🇼","1f1f7-1f1fc","Rwanda"\n"sa","🇸🇦","1f1f8-1f1e6","Saudi Arabia"\n"sb","🇸🇧","1f1f8-1f1e7","Solomon Islands"\n"sc","🇸🇨","1f1f8-1f1e8","Seychelles"\n"sd","🇸🇩","1f1f8-1f1e9","Sudan"\n"se","🇸🇪","1f1f8-1f1ea","Sweden"\n"sg","🇸🇬","1f1f8-1f1ec","Singapore"\n"sh","🇸🇭","1f1f8-1f1ed","Saint Helena, Ascension and Tristan Da Cunha"\n"si","🇸🇮","1f1f8-1f1ee","Slovenia"\n"sk","🇸🇰","1f1f8-1f1f0","Slovakia"\n"sl","🇸🇱","1f1f8-1f1f1","Sierra Leone"\n"sm","🇸🇲","1f1f8-1f1f2","San Marino"\n"sn","🇸🇳","1f1f8-1f1f3","Senegal"\n"so","🇸🇴","1f1f8-1f1f4","Somalia"\n"sr","🇸🇷","1f1f8-1f1f7","Suriname"\n"ss","🇸🇸","1f1f8-1f1f8","South Sudan"\n"st","🇸🇹","1f1f8-1f1f9","Sao Tome and Principe"\n"sv","🇸🇻","1f1f8-1f1fb","El Salvador"\n"sx","🇸🇽","1f1f8-1f1fd","Sint Maarten (Dutch Part)"\n"sy","🇸🇾","1f1f8-1f1fe","Syrian Arab Republic"\n"sz","🇸🇿","1f1f8-1f1ff","Swaziland"\n"tc","🇹🇨","1f1f9-1f1e8","Turks and Caicos Islands"\n"td","🇹🇩","1f1f9-1f1e9","Chad"\n"tg","🇹🇬","1f1f9-1f1ec","Togo"\n"th","🇹🇭","1f1f9-1f1ed","Thailand"\n"tj","🇹🇯","1f1f9-1f1ef","Tajikistan"\n"tk","🇹🇰","1f1f9-1f1f0","Tokelau"\n"tl","🇹🇱","1f1f9-1f1f1","Timor-Leste"\n"tm","🇹🇲","1f1f9-1f1f2","Turkmenistan"\n"tn","🇹🇳","1f1f9-1f1f3","Tunisia"\n"to","🇹🇴","1f1f9-1f1f4","Tonga"\n"tr","🇹🇷","1f1f9-1f1f7","Turkey"\n"tt","🇹🇹","1f1f9-1f1f9","Trinidad and Tobago"\n"tv","🇹🇻","1f1f9-1f1fb","Tuvalu"\n"tw","🇹🇼","1f1f9-1f1fc","Taiwan"\n"tz","🇹🇿","1f1f9-1f1ff","Tanzania"\n"ua","🇺🇦","1f1fa-1f1e6","Ukraine"\n"ug","🇺🇬","1f1fa-1f1ec","Uganda"\n"us","🇺🇸","1f1fa-1f1f8","United States of America"\n"uy","🇺🇾","1f1fa-1f1fe","Uruguay"\n"uz","🇺🇿","1f1fa-1f1ff","Uzbekistan"\n"va","🇻🇦","1f1fb-1f1e6","Vatican City"\n"vc","🇻🇨","1f1fb-1f1e8","Saint Vincent and The Grenadines"\n"ve","🇻🇪","1f1fb-1f1ea","Venezuela"\n"vg","🇻🇬","1f1fb-1f1ec","Virgin Islands, British"\n"vi","🇻🇮","1f1fb-1f1ee","Virgin Islands, U.S."\n"vn","🇻🇳","1f1fb-1f1f3","Viet Nam"\n"vu","🇻🇺","1f1fb-1f1fa","Vanuatu"\n"wf","🇼🇫","1f1fc-1f1eb","Wallis and Futuna"\n"ws","🇼🇸","1f1fc-1f1f8","Samoa"\n"ye","🇾🇪","1f1fe-1f1ea","Yemen"\n"za","🇿🇦","1f1ff-1f1e6","South Africa"\n"zm","🇿🇲","1f1ff-1f1f2","Zambia"\n"zw","🇿🇼","1f1ff-1f1fc","Zimbabwe"');let a=new Date("2022-04-04");a.setHours(0,0,0,0);const s=Math.floor(a.getTime()/864e5);let r=new Date;r.setHours(0,0,0,0);const o=Math.floor(r.getTime()/864e5),i=new Date;let c;i.setHours(24,0,0,0),setInterval((()=>{n(0,c=i-new Date)}),1e3);let l={mode:null,status:"start",status_prev:[],questions:null,options:null,answers:[],turn:0,score:0},u={daily:{day:o,game:null},stats:{played:0,right:0,wrong:0,streak:0,max:0,dist:[0,0,0,0,0,0,0,0,0,0,0]}};function d(e="practice"){let t="daily"==e?new fe(o):Math.random,a=ae(f,t).slice(0,Ie),s=[];a.forEach((e=>{let n=ae(f.filter((t=>t.iso!=e.iso)),t).slice(0,3);s.push(ae([...n,e],t))})),n(1,l.mode=e,l),n(1,l.questions=a,l),n(1,l.options=s,l),n(1,l.answers=[],l),n(1,l.turn=n(1,l.score=0,l),l),n(1,l.status="guess",l)}function m(e){l.questions[l.turn].iso==e?(n(1,l.score+=1,l),n(1,l.status="right",l),l.answers.push(!0),"daily"==l.mode&&(n(2,u.stats.right+=1,u),n(2,u.stats.streak+=1,u),u.stats.streak>u.stats.max&&n(2,u.stats.max+=1,u))):(n(1,l.status="wrong",l),l.answers.push(!1),"daily"==l.mode&&(n(2,u.stats.wrong+=1,u),n(2,u.stats.streak=0,u))),n(1,l.turn+=1,l),l.turn==Ie&&"daily"==l.mode&&(n(2,u.stats.dist[l.score]+=1,u),n(2,u.stats.played+=1,u)),"daily"==l.mode&&(n(2,u.daily.game=JSON.parse(JSON.stringify(l)),u),se("flag-game-history",u))}function g(e){l.status_prev.push(l.status),n(1,l.status=e,l)}function h(){n(1,l.status=l.status_prev[l.status_prev.length-1],l),l.status_prev.pop()}!function(){let e=(t="flag-game-history",localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):null);var t;e?n(2,u=e):se("flag-game-history",u)}();return[c,l,u,f,d,function(){u.daily.today==o&&u.daily.game?(n(1,l=JSON.parse(JSON.stringify(u.daily.game))),n(1,l.status=l.turn==Ie?"end":"guess",l)):(n(2,u.daily.today=o,u),d("daily"))},m,g,h,function(){let e=`#GuessWhichFlag!${"daily"==l.mode?" #"+(o-s+1):""}\n${l.score} out of ${Ie} flags\n${l.questions.map((e=>e.icon)).join("")}\n${l.answers.map((e=>e?"✔️":"❌")).join("")}\nhttps://guesswhichflag.netlify.app`;navigator.clipboard.writeText(e).then((()=>alert("Copied: "+e)))},()=>g("info"),()=>g("end"),e=>m(e.iso),()=>n(1,l.status="guess",l),()=>n(1,l.status="end",l),()=>g("start"),()=>h(),()=>h()]}var _e=new class extends J{constructor(e){super(),F(this,e,qe,Te,s,{},null,[-1,-1])}}({target:document.body});return _e}();
//# sourceMappingURL=bundle.js.map
