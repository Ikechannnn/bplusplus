var Qn=Array.isArray,Xn=Array.from,nr=Object.isFrozen,rr=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyDescriptors,er=Object.prototype,ur=Array.prototype,Dn=Object.getPrototypeOf;const lr=()=>{};function sr(n){return n()}function Cn(n){for(var r=0;r<n.length;r++)n[r]()}const k=2,tn=4,D=8,en=16,y=32,$=64,T=128,Y=256,E=512,g=1024,C=2048,q=4096,R=8192,Rn=16384,un=32768,or=65536,bn=1<<18,Z=Symbol("$state"),fr=Symbol("$state.frozen");function ln(n){return n===this.v}function jn(n,r){return n!=n?r==r:n!==r||n!==null&&typeof n=="object"||typeof n=="function"}function sn(n){return!jn(n,this.v)}function Nn(n){throw new Error("effect_in_teardown")}function Mn(){throw new Error("effect_in_unowned_derived")}function Pn(n){throw new Error("effect_orphan")}function Yn(){throw new Error("effect_update_depth_exceeded")}function ir(){throw new Error("hydration_failed")}function ar(n){throw new Error("props_invalid_value")}function In(){throw new Error("state_unsafe_mutation")}function on(n){return{f:0,v:n,reactions:null,equals:ln,version:0}}function _r(n){var t;const r=on(n);return r.equals=sn,a!==null&&a.l!==null&&((t=a.l).s??(t.s=[])).push(r),r}function Ln(n,r){return i!==null&&K()&&i.f&k&&In(),n.equals(r)||(n.v=r,n.version=dn(),fn(n,g),K()&&f!==null&&f.f&E&&!(f.f&y)&&(c!==null&&c.includes(n)?(h(f,g),U(f)):m===null?Vn([n]):m.push(n))),r}function fn(n,r){var t=n.reactions;if(t!==null)for(var e=K(),l=t.length,u=0;u<l;u++){var s=t[u],o=s.f;o&g||!e&&s===f||(h(s,r),o&(E|T)&&(o&k?fn(s,C):U(s)))}}function an(n){f===null&&i===null&&Pn(),i!==null&&i.f&T&&Mn(),G&&Nn()}function J(n,r){var t=r.last;t===null?r.last=r.first=n:(t.next=n,n.prev=t,r.last=n)}function b(n,r,t,e=!0){var l=(n&$)!==0,u={ctx:a,deps:null,nodes:null,f:n|g,first:null,fn:r,last:null,next:null,parent:l?null:f,prev:null,teardown:null,transitions:null,version:0};if(t){var s=A;try{Q(!0),M(u),u.f|=Rn}catch(_){throw B(u),_}finally{Q(s)}}else r!==null&&U(u);var o=t&&u.deps===null&&u.first===null&&u.nodes===null&&u.teardown===null;return!o&&!l&&e&&(f!==null&&J(u,f),i!==null&&i.f&k&&J(u,i)),u}function cr(n){const r=b(D,null,!1);return h(r,E),r.teardown=n,r}function vr(n){an();var r=f!==null&&(f.f&D)!==0&&a!==null&&!a.m;if(r){var t=a;(t.e??(t.e=[])).push(n)}else{var e=_n(n);return e}}function pr(n){return an(),L(n)}function hr(n){const r=b($,n,!0);return()=>{B(r)}}function _n(n){return b(tn,n,!1)}function wr(n,r){var t=a,e={effect:null,ran:!1};t.l.r1.push(e),e.effect=L(()=>{n(),!e.ran&&(e.ran=!0,Ln(t.l.r2,!0),Wn(r))})}function Er(){var n=a;L(()=>{if(Fn(n.l.r2)){for(var r of n.l.r1){var t=r.effect;j(t)&&M(t),r.ran=!1}n.l.r2.v=!1}})}function L(n){return b(D,n,!0)}function yr(n){return L(n)}function mr(n,r=0){return b(D|en|r,n,!0)}function gr(n,r=!0){return b(D|y,n,!0,r)}function cn(n){var r=n.teardown;if(r!==null){const t=G,e=i;X(!0),nn(null);try{r.call(null)}finally{X(t),nn(e)}}}function B(n,r=!0){var t=!1;if((r||n.f&bn)&&n.nodes!==null){for(var e=n.nodes.start,l=n.nodes.end;e!==null;){var u=e===l?null:e.nextSibling;e.remove(),e=u}t=!0}if(W(n,r&&!t),H(n,0),h(n,R),n.transitions)for(const o of n.transitions)o.stop();cn(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var r=n.parent,t=n.prev,e=n.next;t!==null&&(t.next=e),e!==null&&(e.prev=t),r!==null&&(r.first===n&&(r.first=e),r.last===n&&(r.last=t))}function dr(n,r){var t=[];pn(n,t,!0),Bn(t,()=>{B(n),r&&r()})}function Bn(n,r){var t=n.length;if(t>0){var e=()=>--t||r();for(var l of n)l.out(e)}else r()}function pn(n,r,t){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&r.push(s);for(var e=n.first;e!==null;){var l=e.next,u=(e.f&un)!==0||(e.f&y)!==0;pn(e,r,u?t:!1),e=l}}}function kr(n){hn(n,!0)}function hn(n,r){if(n.f&q){n.f^=q,j(n)&&M(n);for(var t=n.first;t!==null;){var e=t.next,l=(t.f&un)!==0||(t.f&y)!==0;hn(t,l?r:!1),t=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&u.in()}}let I=!1,z=[];function wn(){I=!1;const n=z.slice();z=[],Cn(n)}function Tr(n){I||(I=!0,queueMicrotask(wn)),z.push(n)}function Hn(){I&&wn()}function Un(n){let r=k|g;f===null&&(r|=T);const t={deps:null,deriveds:null,equals:ln,f:r,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(i!==null&&i.f&k){var e=i;e.deriveds===null?e.deriveds=[t]:e.deriveds.push(t)}return t}function xr(n){const r=Un(n);return r.equals=sn,r}function En(n){W(n);var r=n.deriveds;if(r!==null){n.deriveds=null;for(var t=0;t<r.length;t+=1)zn(r[t])}}function yn(n){En(n);var r=kn(n),t=(S||n.f&T)&&n.deps!==null?C:E;h(n,t),n.equals(r)||(n.v=r,n.version=dn())}function zn(n){En(n),H(n,0),h(n,R),n.first=n.last=n.deps=n.reactions=n.fn=null}const mn=0,Kn=1;let P=mn,N=!1,A=!1,G=!1;function Q(n){A=n}function X(n){G=n}let d=[],F=0,i=null;function nn(n){i=n}let f=null,c=null,v=0,m=null;function Vn(n){m=n}let gn=0,S=!1,a=null;function dn(){return gn++}function K(){return a!==null&&a.l===null}function j(n){var s,o;var r=n.f;if(r&g)return!0;if(r&C){var t=n.deps;if(t!==null){var e=(r&T)!==0,l;if(r&Y){for(l=0;l<t.length;l++)((s=t[l]).reactions??(s.reactions=[])).push(n);n.f^=Y}for(l=0;l<t.length;l++){var u=t[l];if(j(u)&&yn(u),u.version>n.version)return!0;e&&!S&&!((o=u==null?void 0:u.reactions)!=null&&o.includes(n))&&(u.reactions??(u.reactions=[])).push(n)}}h(n,E)}return!1}function $n(n,r,t){throw n}function kn(n){var r=c,t=v,e=m,l=i,u=S;c=null,v=0,m=null,i=n.f&(y|$)?null:n,S=!A&&(n.f&T)!==0;try{var s=(0,n.fn)(),o=n.deps;if(c!==null){var _,p;if(o!==null){var x=v===0?c:o.slice(0,v).concat(c),O=x.length>16?new Set(x):null;for(p=v;p<o.length;p++)_=o[p],(O!==null?!O.has(_):!x.includes(_))&&Tn(n,_)}if(o!==null&&v>0)for(o.length=v+c.length,p=0;p<c.length;p++)o[v+p]=c[p];else n.deps=o=c;if(!S)for(p=v;p<o.length;p++){_=o[p];var w=_.reactions;w===null?_.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&v<o.length&&(H(n,v),o.length=v);return s}finally{c=r,v=t,m=e,i=l,S=u}}function Tn(n,r){const t=r.reactions;let e=0;if(t!==null){e=t.length-1;const l=t.indexOf(n);l!==-1&&(e===0?r.reactions=null:(t[l]=t[e],t.pop()))}e===0&&r.f&k&&(h(r,C),r.f&(T|Y)||(r.f^=Y),H(r,0))}function H(n,r){var t=n.deps;if(t!==null)for(var e=r===0?null:t.slice(0,r),l=new Set,u=r;u<t.length;u++){var s=t[u];l.has(s)||(l.add(s),(e===null||!e.includes(s))&&Tn(n,s))}}function W(n,r=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var e=t.next;B(t,r),t=e}}function M(n){var r=n.f;if(!(r&R)){h(n,E);var t=n.ctx,e=f,l=a;f=n,a=t;try{r&en||W(n),cn(n);var u=kn(n);n.teardown=typeof u=="function"?u:null,n.version=gn}catch(s){$n(s)}finally{f=e,a=l}}}function xn(){F>1e3&&(F=0,Yn()),F++}function On(n){var r=n.length;if(r!==0){xn();var t=A;A=!0;try{for(var e=0;e<r;e++){var l=n[e];if(l.first===null&&!(l.f&y))rn([l]);else{var u=[];Sn(l,u),rn(u)}}}finally{A=t}}}function rn(n){var r=n.length;if(r!==0)for(var t=0;t<r;t++){var e=n[t];!(e.f&(R|q))&&j(e)&&(M(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?vn(e):e.fn=null))}}function Gn(){if(N=!1,F>1001)return;const n=d;d=[],On(n),N||(F=0)}function U(n){P===mn&&(N||(N=!0,queueMicrotask(Gn)));for(var r=n;r.parent!==null;){r=r.parent;var t=r.f;if(t&y){if(!(t&E))return;h(r,C)}}d.push(r)}function Sn(n,r){var t=n.first,e=[];n:for(;t!==null;){var l=t.f,u=(l&(R|q))===0,s=l&y,o=(l&E)!==0,_=t.first;if(u&&(!s||!o)){if(s&&h(t,E),l&D){if(!s&&j(t)&&(M(t),_=t.first),_!==null){t=_;continue}}else if(l&tn)if(s||o){if(_!==null){t=_;continue}}else e.push(t)}var p=t.next;if(p===null){let w=t.parent;for(;w!==null;){if(n===w)break n;var x=w.next;if(x!==null){t=x;continue n}w=w.parent}}t=p}for(var O=0;O<e.length;O++)_=e[O],r.push(_),Sn(_,r)}function An(n,r=!0){var t=P,e=d;try{xn();const u=[];P=Kn,d=u,N=!1,r&&On(e);var l=n==null?void 0:n();return Hn(),(d.length>0||u.length>0)&&An(),F=0,l}finally{P=t,d=e}}async function Or(){await Promise.resolve(),An()}function Fn(n){var r=n.f;if(r&R)return n.v;if(i!==null){var t=i.deps;c===null&&t!==null&&t[v]===n?v++:(t===null||v===0||t[v-1]!==n)&&(c===null?c=[n]:c[c.length-1]!==n&&c.push(n)),m!==null&&f!==null&&f.f&E&&!(f.f&y)&&m.includes(n)&&(h(f,g),U(f))}if(r&k){var e=n;j(e)&&yn(e)}return n.v}function Wn(n){const r=i;try{return i=null,n()}finally{i=r}}const Zn=~(g|C|E);function h(n,r){n.f=n.f&Zn|r}function Jn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Sr(n,r=!1,t){a={p:a,c:null,e:null,m:!1,s:n,x:null,l:null},r||(a.l={s:null,u:null,r1:[],r2:on(!1)})}function Ar(n){const r=a;if(r!==null){const e=r.e;if(e!==null){r.e=null;for(var t=0;t<e.length;t++)_n(e[t])}a=r.p,r.m=!0}return{}}function Fr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Z in n)V(n);else if(!Array.isArray(n))for(let r in n){const t=n[r];typeof t=="object"&&t&&Z in t&&V(t)}}}function V(n,r=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!r.has(n)){r.add(n),n instanceof Date&&n.getTime();for(let e in n)try{V(n[e],r)}catch{}const t=Dn(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const e=qn(t);for(let l in e){const u=e[l].get;if(u)try{u.call(n)}catch{}}}}}function qr(n){return Jn(n)?Fn(n):n}export{ur as A,on as B,tr as C,Dn as D,mr as E,kr as F,dr as G,un as H,_n as I,L as J,Tr as K,ar as L,or as M,sn as N,Un as O,xr as P,Or as Q,B as R,fr as S,q as T,pn as U,Bn as V,wr as W,Er as X,qr as Y,jn as Z,vr as a,Wn as b,a as c,sr as d,Fr as e,rr as f,Fn as g,An as h,Qn as i,ir as j,Xn as k,hr as l,gr as m,f as n,Ar as o,Sr as p,lr as q,Cn as r,_r as s,cr as t,pr as u,Ln as v,yr as w,nr as x,Z as y,er as z};