var $n=Array.isArray,Jn=Array.from,Qn=Object.isFrozen,Wn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Fn=Object.getOwnPropertyDescriptors,Zn=Object.prototype,nr=Array.prototype,Sn=Object.getPrototypeOf;const rr=()=>{};function tr(n){return n()}function Dn(n){for(var r=0;r<n.length;r++)n[r]()}const k=2,rn=4,D=8,tn=16,y=32,G=64,T=128,I=256,E=512,g=1024,C=2048,S=4096,R=8192,Cn=16384,en=32768,er=65536,Rn=1<<18,J=Symbol("$state");function ln(n){return n===this.v}function bn(n,r){return n!=n?r==r:n!==r||n!==null&&typeof n=="object"||typeof n=="function"}function un(n){return!bn(n,this.v)}function jn(n){throw new Error("effect_in_teardown")}function Nn(){throw new Error("effect_in_unowned_derived")}function Pn(n){throw new Error("effect_orphan")}function In(){throw new Error("effect_update_depth_exceeded")}function lr(){throw new Error("hydration_failed")}function ur(n){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_unsafe_mutation")}function sn(n){return{f:0,v:n,reactions:null,equals:ln,version:0}}function sr(n){var t;const r=sn(n);return r.equals=un,p!==null&&p.l!==null&&((t=p.l).s??(t.s=[])).push(r),r}function or(n,r){return i!==null&&U()&&i.f&k&&Mn(),n.equals(r)||(n.v=r,n.version=dn(),on(n,g),U()&&f!==null&&f.f&E&&!(f.f&y)&&(c!==null&&c.includes(n)?(h(f,g),H(f)):m===null?Un([n]):m.push(n))),r}function on(n,r){var t=n.reactions;if(t!==null)for(var e=U(),l=t.length,u=0;u<l;u++){var s=t[u],o=s.f;o&g||!e&&s===f||(h(s,r),o&(E|T)&&(o&k?on(s,C):H(s)))}}function fn(n){f===null&&i===null&&Pn(),i!==null&&i.f&T&&Nn(),V&&jn()}function Q(n,r){var t=r.last;t===null?r.last=r.first=n:(t.next=n,n.prev=t,r.last=n)}function b(n,r,t,e=!0){var l=(n&G)!==0,u=f,s={ctx:p,deps:null,nodes:null,f:n|g,first:null,fn:r,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(t){var o=A;try{W(!0),B(s),s.f|=Cn}catch(_){throw L(s),_}finally{W(o)}}else r!==null&&H(s);var a=t&&s.deps===null&&s.first===null&&s.nodes===null&&s.teardown===null;return!a&&!l&&e&&(u!==null&&Q(s,u),i!==null&&i.f&k&&Q(s,i)),s}function ir(n){const r=b(D,null,!1);return h(r,E),r.teardown=n,r}function fr(n){fn();var r=f!==null&&(f.f&D)!==0&&p!==null&&!p.m;if(r){var t=p;(t.e??(t.e=[])).push(n)}else{var e=an(n);return e}}function ar(n){return fn(),_n(n)}function _r(n){const r=b(G,n,!0);return()=>{L(r)}}function an(n){return b(rn,n,!1)}function _n(n){return b(D,n,!0)}function cr(n){return _n(n)}function vr(n,r=0){return b(D|tn|r,n,!0)}function pr(n,r=!0){return b(D|y,n,!0,r)}function cn(n){var r=n.teardown;if(r!==null){const t=V,e=i;X(!0),Z(null);try{r.call(null)}finally{X(t),Z(e)}}}function L(n,r=!0){var t=!1;if((r||n.f&Rn)&&n.nodes!==null){for(var e=n.nodes.start,l=n.nodes.end;e!==null;){var u=e===l?null:e.nextSibling;e.remove(),e=u}t=!0}if($(n,r&&!t),Y(n,0),h(n,R),n.transitions)for(const o of n.transitions)o.stop();cn(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var r=n.parent,t=n.prev,e=n.next;t!==null&&(t.next=e),e!==null&&(e.prev=t),r!==null&&(r.first===n&&(r.first=e),r.last===n&&(r.last=t))}function hr(n,r){var t=[];pn(n,t,!0),Ln(t,()=>{L(n),r&&r()})}function Ln(n,r){var t=n.length;if(t>0){var e=()=>--t||r();for(var l of n)l.out(e)}else r()}function pn(n,r,t){if(!(n.f&S)){if(n.f^=S,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&r.push(s);for(var e=n.first;e!==null;){var l=e.next,u=(e.f&en)!==0||(e.f&y)!==0;pn(e,r,u?t:!1),e=l}}}function wr(n){hn(n,!0)}function hn(n,r){if(n.f&S){n.f^=S,N(n)&&B(n);for(var t=n.first;t!==null;){var e=t.next,l=(t.f&en)!==0||(t.f&y)!==0;hn(t,l?r:!1),t=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&u.in()}}let M=!1,K=[];function wn(){M=!1;const n=K.slice();K=[],Dn(n)}function Er(n){M||(M=!0,queueMicrotask(wn)),K.push(n)}function Yn(){M&&wn()}function Bn(n){let r=k|g;f===null&&(r|=T);const t={deps:null,deriveds:null,equals:ln,f:r,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(i!==null&&i.f&k){var e=i;e.deriveds===null?e.deriveds=[t]:e.deriveds.push(t)}return t}function yr(n){const r=Bn(n);return r.equals=un,r}function En(n){$(n);var r=n.deriveds;if(r!==null){n.deriveds=null;for(var t=0;t<r.length;t+=1)Hn(r[t])}}function yn(n){En(n);var r=kn(n),t=(q||n.f&T)&&n.deps!==null?C:E;h(n,t),n.equals(r)||(n.v=r,n.version=dn())}function Hn(n){En(n),Y(n,0),h(n,R),n.first=n.last=n.deps=n.reactions=n.fn=null}const mn=0,Kn=1;let P=mn,j=!1,A=!1,V=!1;function W(n){A=n}function X(n){V=n}let d=[],F=0,i=null;function Z(n){i=n}let f=null,c=null,v=0,m=null;function Un(n){m=n}let gn=0,q=!1,p=null;function dn(){return gn++}function U(){return p!==null&&p.l===null}function N(n){var s,o;var r=n.f;if(r&g)return!0;if(r&C){var t=n.deps,e=(r&T)!==0;if(t!==null){var l;if(r&I){for(l=0;l<t.length;l++)((s=t[l]).reactions??(s.reactions=[])).push(n);n.f^=I}for(l=0;l<t.length;l++){var u=t[l];if(N(u)&&yn(u),u.version>n.version)return!0;e&&!q&&!((o=u==null?void 0:u.reactions)!=null&&o.includes(n))&&(u.reactions??(u.reactions=[])).push(n)}}e||h(n,E)}return!1}function zn(n,r,t){throw n}function kn(n){var r=c,t=v,e=m,l=i,u=q;c=null,v=0,m=null,i=n.f&(y|G)?null:n,q=!A&&(n.f&T)!==0;try{var s=(0,n.fn)(),o=n.deps;if(c!==null){var a,_;if(o!==null){var x=v===0?c:o.slice(0,v).concat(c),O=x.length>16?new Set(x):null;for(_=v;_<o.length;_++)a=o[_],(O!==null?!O.has(a):!x.includes(a))&&Tn(n,a)}if(o!==null&&v>0)for(o.length=v+c.length,_=0;_<c.length;_++)o[v+_]=c[_];else n.deps=o=c;if(!q)for(_=v;_<o.length;_++){a=o[_];var w=a.reactions;w===null?a.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&v<o.length&&(Y(n,v),o.length=v);return s}finally{c=r,v=t,m=e,i=l,q=u}}function Tn(n,r){const t=r.reactions;let e=0;if(t!==null){e=t.length-1;const l=t.indexOf(n);l!==-1&&(e===0?r.reactions=null:(t[l]=t[e],t.pop()))}e===0&&r.f&k&&(h(r,C),r.f&(T|I)||(r.f^=I),Y(r,0))}function Y(n,r){var t=n.deps;if(t!==null)for(var e=r===0?null:t.slice(0,r),l=new Set,u=r;u<t.length;u++){var s=t[u];l.has(s)||(l.add(s),(e===null||!e.includes(s))&&Tn(n,s))}}function $(n,r=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var e=t.next;L(t,r),t=e}}function B(n){var r=n.f;if(!(r&R)){h(n,E);var t=n.ctx,e=f,l=p;f=n,p=t;try{r&tn||$(n),cn(n);var u=kn(n);n.teardown=typeof u=="function"?u:null,n.version=gn}catch(s){zn(s)}finally{f=e,p=l}}}function xn(){F>1e3&&(F=0,In()),F++}function On(n){var r=n.length;if(r!==0){xn();var t=A;A=!0;try{for(var e=0;e<r;e++){var l=n[e];if(l.first===null&&!(l.f&y))nn([l]);else{var u=[];qn(l,u),nn(u)}}}finally{A=t}}}function nn(n){var r=n.length;if(r!==0)for(var t=0;t<r;t++){var e=n[t];!(e.f&(R|S))&&N(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?vn(e):e.fn=null))}}function Gn(){if(j=!1,F>1001)return;const n=d;d=[],On(n),j||(F=0)}function H(n){P===mn&&(j||(j=!0,queueMicrotask(Gn)));for(var r=n;r.parent!==null;){r=r.parent;var t=r.f;if(t&y){if(!(t&E))return;h(r,C)}}d.push(r)}function qn(n,r){var t=n.first,e=[];n:for(;t!==null;){var l=t.f,u=(l&(R|S))===0,s=l&y,o=(l&E)!==0,a=t.first;if(u&&(!s||!o)){if(s&&h(t,E),l&D){if(!s&&N(t)&&(B(t),a=t.first),a!==null){t=a;continue}}else if(l&rn)if(s||o){if(a!==null){t=a;continue}}else e.push(t)}var _=t.next;if(_===null){let w=t.parent;for(;w!==null;){if(n===w)break n;var x=w.next;if(x!==null){t=x;continue n}w=w.parent}}t=_}for(var O=0;O<e.length;O++)a=e[O],r.push(a),qn(a,r)}function An(n){var r=P,t=d;try{xn();const l=[];P=Kn,d=l,j=!1,On(t);var e=n==null?void 0:n();return Yn(),(d.length>0||l.length>0)&&An(),F=0,e}finally{P=r,d=t}}async function mr(){await Promise.resolve(),An()}function gr(n){var r=n.f;if(r&R)return n.v;if(i!==null){var t=i.deps;c===null&&t!==null&&t[v]===n?v++:(t===null||v===0||t[v-1]!==n)&&(c===null?c=[n]:c[c.length-1]!==n&&c.push(n)),m!==null&&f!==null&&f.f&E&&!(f.f&y)&&m.includes(n)&&(h(f,g),H(f))}if(r&k){var e=n;N(e)&&yn(e)}return n.v}function dr(n){const r=i;try{return i=null,n()}finally{i=r}}const Vn=~(g|C|E);function h(n,r){n.f=n.f&Vn|r}function kr(n,r=!1,t){p={p,c:null,e:null,m:!1,s:n,x:null,l:null},r||(p.l={s:null,u:null,r1:[],r2:sn(!1)})}function Tr(n){const r=p;if(r!==null){const e=r.e;if(e!==null){r.e=null;for(var t=0;t<e.length;t++)an(e[t])}p=r.p,r.m=!0}return{}}function xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(J in n)z(n);else if(!Array.isArray(n))for(let r in n){const t=n[r];typeof t=="object"&&t&&J in t&&z(t)}}}function z(n,r=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!r.has(n)){r.add(n),n instanceof Date&&n.getTime();for(let e in n)try{z(n[e],r)}catch{}const t=Sn(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const e=Fn(t);for(let l in e){const u=e[l].get;if(u)try{u.call(n)}catch{}}}}}export{Xn as A,Sn as B,vr as C,wr as D,hr as E,en as F,an as G,_n as H,Er as I,ur as J,un as K,er as L,Bn as M,yr as N,An as O,mr as P,bn as Q,J as S,Jn as a,pr as b,f as c,Wn as d,_r as e,Tr as f,p as g,lr as h,$n as i,fr as j,dr as k,tr as l,gr as m,xr as n,rr as o,kr as p,sr as q,Dn as r,or as s,ir as t,ar as u,cr as v,Qn as w,Zn as x,nr as y,sn as z};