function e(){}function t(e,t,n,o,l){const r=[];let u;for(;t;)r.push(t),u=t.previousComponent,delete t.previousComponent,t=u;r.reverse();let s=0,i=r.length,a=0,c=0;for(;s<i;s++){let t=r[s];if(t.removed)t.value=e.join(o.slice(c,c+t.count)),c+=t.count;else{if(!t.added&&l){let l=n.slice(a,a+t.count);l=l.map((function(e,t){let n=o[c+t];return n.length>e.length?n:e})),t.value=e.join(l)}else t.value=e.join(n.slice(a,a+t.count));a+=t.count,t.added||(c+=t.count)}}return r}e.prototype={diff(e,n,o={}){let l=o.callback;"function"==typeof o&&(l=o,o={});let r=this;function u(e){return e=r.postProcess(e,o),l?(setTimeout((function(){l(e)}),0),!0):e}e=this.castInput(e,o),n=this.castInput(n,o),e=this.removeEmpty(this.tokenize(e,o));let s=(n=this.removeEmpty(this.tokenize(n,o))).length,i=e.length,a=1,c=s+i;null!=o.maxEditLength&&(c=Math.min(c,o.maxEditLength));const f=o.timeout??1/0,h=Date.now()+f;let p=[{oldPos:-1,lastComponent:void 0}],g=this.extractCommon(p[0],n,e,0,o);if(p[0].oldPos+1>=i&&g+1>=s)return u(t(r,p[0].lastComponent,n,e,r.useLongestToken));let d=-1/0,m=1/0;function v(){for(let l=Math.max(d,-a);l<=Math.min(m,a);l+=2){let a,c=p[l-1],f=p[l+1];c&&(p[l-1]=void 0);let h=!1;if(f){const e=f.oldPos-l;h=f&&0<=e&&e<s}let v=c&&c.oldPos+1<i;if(h||v){if(a=!v||h&&c.oldPos<f.oldPos?r.addToPath(f,!0,!1,0,o):r.addToPath(c,!1,!0,1,o),g=r.extractCommon(a,n,e,l,o),a.oldPos+1>=i&&g+1>=s)return u(t(r,a.lastComponent,n,e,r.useLongestToken));p[l]=a,a.oldPos+1>=i&&(m=Math.min(m,l-1)),g+1>=s&&(d=Math.max(d,l+1))}else p[l]=void 0}a++}if(l)!function e(){setTimeout((function(){if(a>c||Date.now()>h)return l();v()||e()}),0)}();else for(;a<=c&&Date.now()<=h;){let e=v();if(e)return e}},addToPath(e,t,n,o,l){let r=e.lastComponent;return r&&!l.oneChangePerToken&&r.added===t&&r.removed===n?{oldPos:e.oldPos+o,lastComponent:{count:r.count+1,added:t,removed:n,previousComponent:r.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:r}}},extractCommon(e,t,n,o,l){let r=t.length,u=n.length,s=e.oldPos,i=s-o,a=0;for(;i+1<r&&s+1<u&&this.equals(n[s+1],t[i+1],l);)i++,s++,a++,l.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return a&&!l.oneChangePerToken&&(e.lastComponent={count:a,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,i},equals:(e,t,n)=>n.comparator?n.comparator(e,t):e===t||n.ignoreCase&&e.toLowerCase()===t.toLowerCase(),removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t},castInput:e=>e,tokenize:e=>Array.from(e),join:e=>e.join(""),postProcess:e=>e};const n=new e;function o(e,t,o){return n.diff(e,t,o)}function l(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function r(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function u(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function s(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function i(e,t){return u(e,t,"")}function a(e,t){return s(e,t,"")}function c(e,t){return t.slice(0,function(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let o=t.length;e.length<t.length&&(o=e.length);let l=Array(o),r=0;l[0]=0;for(let e=1;e<o;e++){for(t[e]==t[r]?l[e]=l[r]:l[e]=r;r>0&&t[e]!=t[r];)r=l[r];t[e]==t[r]&&r++}r=0;for(let o=n;o<e.length;o++){for(;r>0&&e[o]!=t[r];)r=l[r];e[o]==t[r]&&r++}return r}(e,t))}function f(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function h(e){return e.match(/^\s*/)[0]}const p="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",g=new RegExp(`[${p}]+|\\s+|[^${p}]`,"ug"),d=new e;function m(e,t,n,o){if(t&&n){const c=h(t.value),p=f(t.value),g=h(n.value),d=f(n.value);if(e){const o=l(c,g);e.value=s(e.value,g,o),t.value=i(t.value,o),n.value=i(n.value,o)}if(o){const e=r(p,d);o.value=u(o.value,d,e),t.value=a(t.value,e),n.value=a(n.value,e)}}else if(n){if(e){const e=h(n.value);n.value=n.value.substring(e.length)}if(o){const e=h(o.value);o.value=o.value.substring(e.length)}}else if(e&&o){const n=h(o.value),c=h(t.value),p=f(t.value),g=l(n,c);t.value=i(t.value,g);const d=r(i(n,g),p);t.value=a(t.value,d),o.value=u(o.value,n,d),e.value=s(e.value,n,n.slice(0,n.length-d.length))}else if(o){const e=h(o.value),n=c(f(t.value),e);t.value=a(t.value,n)}else if(e){const n=c(f(e.value),h(t.value));t.value=i(t.value,n)}}d.equals=function(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()},d.tokenize=function(e,t={}){let n;if(t.intlSegmenter){if("word"!=t.intlSegmenter.resolvedOptions().granularity)throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(t.intlSegmenter.segment(e),(e=>e.segment))}else n=e.match(g)||[];const o=[];let l=null;return n.forEach((e=>{/\s/.test(e)?null==l?o.push(e):o.push(o.pop()+e):/\s/.test(l)?o[o.length-1]==l?o.push(o.pop()+e):o.push(l+e):o.push(e),l=e})),o},d.join=function(e){return e.map(((e,t)=>0==t?e:e.replace(/^\s+/,""))).join("")},d.postProcess=function(e,t){if(!e||t.oneChangePerToken)return e;let n=null,o=null,l=null;return e.forEach((e=>{e.added?o=e:e.removed?l=e:((o||l)&&m(n,l,o,e),n=e,o=null,l=null)})),(o||l)&&m(n,l,o,null),e};(new e).tokenize=function(e){const t=new RegExp(`(\\r?\\n)|[${p}]+|[^\\S\\n\\r]+|[^${p}]`,"ug");return e.match(t)||[]};const v=new e;v.tokenize=function(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,"\n"));let n=[],o=e.split(/(\n|\r\n)/);o[o.length-1]||o.pop();for(let e=0;e<o.length;e++){let l=o[e];e%2&&!t.newlineIsToken?n[n.length-1]+=l:n.push(l)}return n},v.equals=function(t,n,o){return o.ignoreWhitespace?(o.newlineIsToken&&t.includes("\n")||(t=t.trim()),o.newlineIsToken&&n.includes("\n")||(n=n.trim())):o.ignoreNewlineAtEof&&!o.newlineIsToken&&(t.endsWith("\n")&&(t=t.slice(0,-1)),n.endsWith("\n")&&(n=n.slice(0,-1))),e.prototype.equals.call(this,t,n,o)};(new e).tokenize=function(e){return e.split(/(?<=[.!?])(\s+|$)/)};(new e).tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};const C=new e;function w(e,t,n,o,l){let r,u;for(t=t||[],n=n||[],o&&(e=o(l,e)),r=0;r<t.length;r+=1)if(t[r]===e)return n[r];if("[object Array]"===Object.prototype.toString.call(e)){for(t.push(e),u=new Array(e.length),n.push(u),r=0;r<e.length;r+=1)u[r]=w(e[r],t,n,o,l);return t.pop(),n.pop(),u}if(e&&e.toJSON&&(e=e.toJSON()),"object"==typeof e&&null!==e){t.push(e),u={},n.push(u);let l,s=[];for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&s.push(l);for(s.sort(),r=0;r<s.length;r+=1)l=s[r],u[l]=w(e[l],t,n,o,l);t.pop(),n.pop()}else u=e;return u}C.useLongestToken=!0,C.tokenize=v.tokenize,C.castInput=function(e,t){const{undefinedReplacement:n,stringifyReplacer:o=(e,t)=>void 0===t?n:t}=t;return"string"==typeof e?e:JSON.stringify(w(e,null,null,o),o,"  ")},C.equals=function(t,n,o){return e.prototype.equals.call(C,t.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"),o)};const y=new e;y.tokenize=function(e){return e.slice()},y.join=y.removeEmpty=function(e){return e};export{o as diffChars};
