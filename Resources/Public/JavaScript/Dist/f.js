!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";n(5);var a=window.fabricator={};a.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},a.options.menu=window.matchMedia(a.options.mq).matches,a.test={},a.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}(),a.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(a.options)),a.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},a.getOptions=function(){return a.test.sessionStorage?JSON.parse(sessionStorage.fabricator):a.options},a.buildColorChips=function(){for(var e=document.querySelectorAll(".f-color-chip"),t=e.length-1;t>=0;t--){var n=e[t].querySelector(".f-color-chip__color").innerHTML;e[t].style.borderTopColor=n,e[t].style.borderBottomColor=n}return a},a.setActiveItem=function(){var e=function(){for(var e=window.location.pathname+window.location.hash,t=e.replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(e,t,n,a){return(n||"")+(a||"").split(".")[0]})||"index.html",n=a.dom.menuItems.length-1;n>=0;n--){var r=a.dom.menuItems[n],o=r.getAttribute("href").replace(/^\//g,"");o===t?r.classList.add("f-active"):r.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),a},a.menuToggle=function(){var e=a.dom.menuToggle,t=a.getOptions(),n=function(){t.menu=!a.dom.root.classList.contains("f-menu-active"),a.dom.root.classList.toggle("f-menu-active"),a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};document.onkeydown=function(e){e.ctrlKey&&e.keyCode==="M".charCodeAt(0)&&n()},e.addEventListener("click",function(){n()});for(var r=function(){window.matchMedia(a.options.mq).matches||n()},o=0;o<a.dom.menuItems.length;o++)a.dom.menuItems[o].addEventListener("click",r);return a},a.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),n=a.getOptions(),r=function(t,r){for(var o=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),i=e[t],s=0;s<i.length;s++)r?i[s].classList.remove("f-item-hidden"):i[s].classList.add("f-item-hidden");r?o.classList.add("f-active"):o.classList.remove("f-active"),n.toggles[t]=r,a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(n))},o=0;o<t.length;o++)t[o].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),n=e.currentTarget.className.indexOf("f-active")<0;r(t,n)});return Object.keys(n.toggles).forEach(function(e){r(e,n.toggles[e])}),a},a.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=e.currentTarget.parentNode.parentNode.parentNode,n=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+n+"]").classList.toggle("f-item-hidden")},n=0;n<e.length;n++)e[n].addEventListener("click",t);return a},a.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(n)},n=e.length-1;n>=0;n--)e[n].addEventListener("click",t.bind(void 0,e[n]))},a.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(a.options.mq),n=function(t){t.matches&&a.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(n),n(t),a},a.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect()},5:function(e,t){"use strict";self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function e(n){var a=t.util.type(n);switch(a){case"Object":var e={};for(var r in n)n.hasOwnProperty(r)&&(e[r]=t.util.clone(n[r]));return e;case"Array":return n.map(function(e){return t.util.clone(e)})}return n}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var o=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);return o}var s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==n)for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i]);s[l]=o[l]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;a=r[o++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,o){for(var i,s,l=a;l&&!e.test(l.className);)l=l.parentNode;if(l&&(i=(l.className.match(e)||[,""])[1],s=t.languages[i]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c=a.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:a,language:i,grammar:s,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),i),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),t.hooks.run("after-highlight",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(a),t.hooks.run("after-highlight",u)}}},highlight:function(e,a,r){var o=t.tokenize(e,a);return n.stringify(t.util.encode(o),r)},tokenize:function(e,n,a){var r=t.Token,o=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],g=u.inside,d=!!u.lookbehind,f=0,p=u.alias;u=u.pattern||u;for(var m=0;m<o.length;m++){var h=o[m];if(o.length>e.length)break e;if(!(h instanceof r)){u.lastIndex=0;var v=u.exec(h);if(v){d&&(f=v[1].length);var y=v.index-1+f,v=v[0].slice(f),w=v.length,b=y+w,k=h.slice(0,y+1),S=h.slice(b+1),A=[m,1];k&&A.push(k);var L=new r(s,g?t.tokenize(v,g):v,p);A.push(L),S&&A.push(S),Array.prototype.splice.apply(o,A)}}}}}return o},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,o=0;r=a[o++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var o={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,i)}t.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=l+'="'+(o.attributes[l]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+s+">"+o.content+"</"+o.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,function:/[-a-z0-9]+(?=\()/i},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,function:/(?!\d)[a-z0-9_$]+(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}})}});