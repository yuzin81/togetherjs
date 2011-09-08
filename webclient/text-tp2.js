(function(){
function i(j){throw j;}var k=void 0,m=null;
(function(){var j,r,o,p,q,s,t,l,u,h;s=window.sharejs;h={name:"text-tp2",u:!0,create:function(){return{g:0,f:0,r:[],data:[]}},t:function(c){c.data||i(Error("invalid doc snapshot"));return c.data},o:function(c){var b,a,e,d;a=h.create();a.data=c;for(e=0,d=c.length;e<d;e++)b=c[e],typeof b==="string"?(a.g+=b.length,a.f+=b.length):a.f+=b;return a}};p=function(c){var b,a,e,d,f;Array.isArray(c)||i(Error("Op must be an array of components"));a=m;f=[];for(e=0,d=c.length;e<d;e++)b=c[e],typeof b==="object"?b.a!==
k?typeof b.a==="string"&&b.a.length>0||typeof b.a==="number"&&b.a>0||i(Error("Inserts must insert a string or a +ive number")):b.b!==k?typeof b.b==="number"&&b.b>0||i(Error("Deletes must be a +ive number")):i(Error("Operation component must define .i or .d")):(typeof b!=="number"&&i(Error("Op components must be objects or numbers")),b>0||i(Error("Skip components must be a positive number")),typeof a==="number"&&i(Error("Adjacent skip components should be combined"))),f.push(a=b)};h.j=l=function(c,
b,a,e){b.index>=c.data.length&&i(Error("Operation goes past the end of the document"));c=c.data[b.index];a=typeof c==="string"?a!==k?c.slice(b.c,b.c+a):c.slice(b.c):a===k||e?c-b.c:Math.min(a,c-b.c);e=a.length||a;(c.length||c)-b.c>e?b.c+=e:(b.index++,b.c=0);return a};h.m=r=function(c,b){var a;if(!(b===0||b===""))typeof b==="string"?(c.g+=b.length,c.f+=b.length):c.f+=b,a=c.data,a.length===0?a.push(b):typeof a[a.length-1]===typeof b?a[a.length-1]+=b:a.push(b)};h.apply=function(c,b){var a,e,d,f,g,n,j;
c.f!==k&&c.g!==k&&c.data.length!==k||i(Error("Snapshot is invalid"));p(b);e=h.create();f={index:0,c:0};for(n=0,j=b.length;n<j;n++)if(a=b[n],typeof a==="number")for(g=a;g>0;)d=l(c,f,g),r(e,d),g-=d.length||d;else if(a.a!==k)r(e,a.a);else if(a.b!==k){for(g=a.b;g>0;)d=l(c,f,g),g-=d.length||d;r(e,a.b)}return e};h.h=j=function(c,b){var a;if(!(b===0||b.a===""||b.a===0||b.b===0))return c.length===0?c.push(b):(a=c[c.length-1],typeof b==="number"&&typeof a==="number"?c[c.length-1]+=b:b.a!==k&&a.a!=m&&typeof a.a===
typeof b.a?a.a+=b.a:b.b!==k&&a.b!=m?a.b+=b.b:c.push(b))};t=function(c){var b,a;a=b=0;return[function(e,d){var f,g;if(b===c.length)return m;g=c[b];return typeof(f=g)==="number"||typeof(f=g.a)==="number"||(f=g.b)!==k?(e==m||f-a<=e||d&&g.a!==k?(f-=a,++b,a=0):(a+=e,f=e),g.a!==k?{a:f}:g.b!==k?{b:f}:f):(e==m||g.a.length-a<=e||d?(g={a:g.a.slice(a)},++b,a=0):(g={a:g.a.slice(a,a+e)},a+=e),g)},function(){return c[b]}]};q=function(c){return typeof c==="number"?c:typeof c.a==="string"?c.a.length:c.b||c.a};h.normalize=
function(c){var b,a,e,d;a=[];for(e=0,d=c.length;e<d;e++)b=c[e],j(a,b);return a};u=function(c,b,a,e){var d,f,g,n,h,l,o;p(c);p(b);g=[];f=t(c);n=f[0];c=f[1];for(h=0,l=b.length;h<l;h++)if(d=b[h],f=q(d),d.a!==k)if(a){if(e==="left")for(;((o=c())!=m?o.a:k)!==k;)j(g,n());j(g,f)}else for(;f>0;)d=n(f,!0),d===m&&i(Error("The transformed op is invalid")),d.b!==k&&i(Error("The transformed op deletes locally inserted characters - it cannot be purged of the insert.")),typeof d==="number"?f-=d:j(g,d);else for(;f>
0;)d=n(f,!0),d===m&&i(Error("The op traverses more elements than the document has")),j(g,d),d.a||(f-=q(d));for(;d=n();)d.a===k&&i(Error("Remaining fragments in the op: "+d)),j(g,d);return g};h.transform=function(c,b,a){a==="left"||a==="right"||i(Error("side ("+a+") should be 'left' or 'right'"));return u(c,b,!0,a)};h.s=function(c,b){return u(c,b,!1)};h.n=function(c,b){var a,e,d,f,g,h,l;if(c===m||c===k)return b;p(c);p(b);f=[];h=t(c);g=h[0];for(h=0,l=b.length;h<l;h++)if(a=b[h],typeof a==="number")for(d=
a;d>0;)a=g(d),a===m&&i(Error("The op traverses more elements than the document has")),j(f,a),d-=q(a);else if(a.a!==k)j(f,{a:a.a});else for(d=a.b;d>0;)a=g(d),a===m&&i(Error("The op traverses more elements than the document has")),e=q(a),a.a!==k?j(f,{a:e}):j(f,{b:e}),d-=e;for(;a=g();)a.a===k&&i(Error("Remaining fragments in op1: "+a)),j(f,a);return f};typeof!0!=="undefined"?s.types["text-tp2"]=h:module.p=h;h=typeof!0!=="undefined"?s.types["text-tp2"]:require("./text-tp2");l=h.j;j=h.h;o=function(c,b,
a,e){var d,f;for(f=[];(e===k||e>0)&&a.index<b.data.length;)d=l(b,a,e,!0),e!==k&&typeof d==="string"&&(e-=d.length),f.push(j(c,d.length||d))};h.api={provides:{text:!0},getLength:function(){return this.e.g},getText:function(){var c;return function(){var b,a,e,d;e=this.e.data;d=[];for(b=0,a=e.length;b<a;b++)c=e[b],typeof c==="string"&&d.push(c);return d}.call(this).join("")},insert:function(c,b,a){var e,d;b===k&&(b=0);d=[];e={index:0,c:0};o(d,this.e,e,b);j(d,{i:c});o(d,this.e,e);this.l(d,a);return d},
del:function(c,b,a){var e,d;d=[];e={index:0,c:0};for(o(d,this.e,e,b);c>0;)b=l(this.e,e,c,!0),typeof b==="string"?(j(d,{d:b.length}),c-=b.length):j(d,b);o(d,this.e,e);this.l(d,a);return d},_register:function(){return this.q("remoteop",function(c,b){var a,e,d,f,g,h;f=0;e={index:0,c:0};for(g=0,h=c.length;g<h;g++)if(a=c[g],typeof a==="number")for(d=a;d>0;)a=l(b,e,d),typeof a==="string"&&(f+=a.length),d-=a.length||a;else if(a.a!==k)typeof a.a==="string"&&(this.k("insert",a.a,f),f+=a.a.length);else for(d=
a.b;d>0;)a=l(b,e,d),typeof a==="string"&&this.k("delete",a,f),d-=a.length||a})}}}).call(this);})();