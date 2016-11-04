/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone', ['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));
/*
 * Copyright 2012 John Papa and Hans Fjällemark.  
 * All Rights Reserved.  
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: John Papa and Hans Fjällemark
 * Project: https://github.com/CodeSeven/toastr
 */
; (function (define) {
    define('toastr',['jquery'], function ($) {
        return (function () {
            var $container,

                defaults = {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,
                    fadeIn: 300,
                    fadeOut: 1000,
                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    target: 'body'
                },

                error = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.error,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                info = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.info,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                notify = function (map) {
                    var
                        options = getOptions(),
                        iconClass = map.iconClass || options.iconClass;

                    if (typeof (map.optionsOverride) !== 'undefined') {
                        options = $.extend(options, map.optionsOverride);
                        iconClass = map.optionsOverride.iconClass || iconClass;
                    }

                    var
                        intervalId = null,
                        $container = getContainer(options),
                        $toastElement = $('<div/>'),
                        $titleElement = $('<div/>'),
                        $messageElement = $('<div/>'),
                        response = { options: options, map: map };

                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }

                    if (map.title) {
                        $titleElement.append(map.title).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }

                    if (map.message) {
                        $messageElement.append(map.message).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }

                    $toastElement.hide();
                    $container.prepend($toastElement);
                    $toastElement.fadeIn(options.fadeIn);
                    if (options.timeOut > 0) {
                        intervalId = setTimeout(fadeAway, options.timeOut);
                    }

                    $toastElement.hover(stickAround, delayedFadeAway);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(fadeAway);
                    }

                    if (options.onclick) {
                        $toastElement.click(function () {
                            options.onclick() && fadeAway();
                        });
                    }

                    if (options.debug && console) {
                        console.log(response);
                    }

                    return $toastElement;

                    function fadeAway() {
                        if ($(':focus', $toastElement).length > 0) {
                            return;
                        }
                        return $toastElement.fadeOut(options.fadeOut, function () {
                            removeToast($toastElement);
                        });
                    }

                    function delayedFadeAway() {
                        if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                            intervalId = setTimeout(fadeAway, options.extendedTimeOut);
                        }
                    }

                    function stickAround() {
                        clearTimeout(intervalId);
                        $toastElement.stop(true, true).fadeIn(options.fadeIn);
                    }
                },

                success = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.success,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                warning = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.warning,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                clear = function ($toastElement) {
                    var options = getOptions();
                    if (!$container) { getContainer(options) };
                    if ($toastElement && $(':focus', $toastElement).length === 0) {
                        $toastElement.fadeOut(options.fadeOut, function () {
                            removeToast($toastElement);
                        });
                        return;
                    }
                    if ($container.children().length) {
                        $container.fadeOut(options.fadeOut, function () {
                            $container.remove();
                        });
                    }
                };

            var toastr = {
                clear: clear,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                success: success,
                version: '1.2.2',
                warning: warning
            };

            return toastr;

            //#region Internal Methods

            function getContainer(options) {
                if (!options) { options = getOptions(); }
                container = $('#' + options.containerId);
                if (container.children().length) {
                    return container;
                }
                container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);
                container.appendTo($(options.target));
                $container = container;
                return container;
            };

            function getOptions() {
                return $.extend({}, defaults, toastr.options);
            };

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                }
            }
            //#endregion

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require(deps[0]));
    } else {
        window['toastr'] = factory(window['jQuery']);
    }
}));
define('plugins/cache',
    [], 
    function(){
    'use strict';
    /*
        Options:
            keeponnav bool: we should keep the object when we navigate away
            type string: name the object to be placed on the view (model/collection/extras)
    */
    
    var cache = function(){
        this.cache = {};
    };

    cache.prototype = {

        construct: function(){
            var _this = this;

            _this.ready = true;
            
            App.Events.on('navigate:done', function(name){ 
                //TODO; check if we should clear model on cache
                var names = [];
                _.each(_this.cache, function(value, key){
                    if(name !== key && (value.options && !value.options.keeponnav)){
                        names.push(key);
                    }
                });
                _.each(names, function(remName){
                    _this.clear(remName);
                });
            });
        },

        showView: function(view, name){
            var _this = this,
                cache;

            if(_this.cache[name]){
                cache = _this.cache[name];
                view[cache.options.type ? cache.options.type : 'model'] = cache.model;
            }
            App.showView(view);
        },

        setModel: function(name, model){
            var _this = this;
            if(_this.cache[name]){
                _this.cache[name].model = model;
            }
            else {
                _this.init(name, model, {});
            }

            return model;
        },

        getModel: function(name){
            var _this = this;
            if(_this.cache[name]){
                return _this.cache[name].model;
            }
        },

        init: function(name, model, options){
            var _this = this;
            if(!_this.ready){
                _this.construct();
            }
            _this.cache[name] = { model: model, options: (options || {}) };
        },

        exists: function(name){
            return this.cache[name] !== undefined;
        },

        clear: function(name){
            var _this = this;
            if(_this.cache[name]){
                _this.cache[name] = undefined;
                delete _this.cache[name];
            }
        }

    };


    return cache;

});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define('i18next',t):e.i18next=t()}(this,function(){"use strict";function e(e){return null==e?"":""+e}function t(e,t,n){e.forEach(function(e){t[e]&&(n[e]=t[e])})}function n(e,t,n){function o(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}for(var r="string"!=typeof t?[].concat(t):t.split(".");r.length>1;){if(!e)return{};var i=o(r.shift());!e[i]&&n&&(e[i]=new n),e=e[i]}return e?{obj:e,k:o(r.shift())}:{}}function o(e,t,o){var r=n(e,t,Object),i=r.obj,s=r.k;i[s]=o}function r(e,t,o,r){var i=n(e,t,Object),s=i.obj,a=i.k;s[a]=s[a]||[],r&&(s[a]=s[a].concat(o)),r||s[a].push(o)}function i(e,t){var o=n(e,t),r=o.obj,i=o.k;return r?r[i]:void 0}function s(e,t,n){for(var o in t)o in e?"string"==typeof e[o]||e[o]instanceof String||"string"==typeof t[o]||t[o]instanceof String?n&&(e[o]=t[o]):s(e[o],t[o],n):e[o]=t[o];return e}function a(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function u(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return C[e]}):e}function l(e){return e.interpolation={unescapeSuffix:"HTML"},e.interpolation.prefix=e.interpolationPrefix||"__",e.interpolation.suffix=e.interpolationSuffix||"__",e.interpolation.escapeValue=e.escapeInterpolation||!1,e.interpolation.nestingPrefix=e.reusePrefix||"$t(",e.interpolation.nestingSuffix=e.reuseSuffix||")",e}function c(e){return e.resStore&&(e.resources=e.resStore),e.ns&&e.ns.defaultNs?(e.defaultNS=e.ns.defaultNs,e.ns=e.ns.namespaces):e.defaultNS=e.ns||"translation",e.fallbackToDefaultNS&&e.defaultNS&&(e.fallbackNS=e.defaultNS),e.saveMissing=e.sendMissing,e.saveMissingTo=e.sendMissingTo||"current",e.returnNull=!e.fallbackOnNull,e.returnEmptyString=!e.fallbackOnEmpty,e.returnObjects=e.returnObjectTrees,e.joinArrays="\n",e.returnedObjectHandler=e.objectTreeKeyHandler,e.parseMissingKeyHandler=e.parseMissingKey,e.appendNamespaceToMissingKey=!0,e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,"sprintf"===e.shortcutFunction&&(e.overloadTranslationOptionHandler=function(e){for(var t=[],n=1;n<e.length;n++)t.push(e[n]);return{postProcess:"sprintf",sprintf:t}}),e.whitelist=e.lngWhitelist,e.preload=e.preload,"current"===e.load&&(e.load="currentOnly"),"unspecific"===e.load&&(e.load="languageOnly"),e.backend=e.backend||{},e.backend.loadPath=e.resGetPath||"locales/__lng__/__ns__.json",e.backend.addPath=e.resPostPath||"locales/add/__lng__/__ns__",e.backend.allowMultiLoading=e.dynamicLoad,e.cache=e.cache||{},e.cache.prefix="res_",e.cache.expirationTime=6048e5,e.cache.enabled=!!e.useLocalStorage,e=l(e),e.defaultVariables&&(e.interpolation.defaultVariables=e.defaultVariables),e}function p(e){return e=l(e),e.joinArrays="\n",e}function f(e){return(e.interpolationPrefix||e.interpolationSuffix||e.escapeInterpolation)&&(e=l(e)),e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,e.returnObjects=e.returnObjectTrees,e}function h(e){e.lng=function(){return S.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),e.services.languageUtils.toResolveHierarchy(e.language)[0]},e.preload=function(t,n){S.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),e.loadLanguages(t,n)},e.setLng=function(t,n,o){return S.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),"function"==typeof n&&(o=n,n={}),n||(n={}),n.fixLng===!0&&o?o(null,e.getFixedT(t)):void e.changeLanguage(t,o)},e.addPostProcessor=function(t,n){S.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),e.use({type:"postProcessor",name:t,process:n})}}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(){var e={};return R.forEach(function(t){t.lngs.forEach(function(n){return e[n]={numbers:t.nr,plurals:P[t.fc]}})}),e}function v(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}function y(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,saveMissingTo:"fallback",missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,overloadTranslationOptionHandler:function(e){return{defaultValue:e[1]}},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",defaultVariables:void 0}}}function b(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&e.whitelist.push("cimode"),e}var m={};m["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m["extends"]=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},m.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},m.slicedToArray=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(u){r=!0,i=u}finally{try{!o&&a["return"]&&a["return"]()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var x={type:"logger",log:function(e){this._output("log",e)},warn:function(e){this._output("warn",e)},error:function(e){this._output("error",e)},_output:function(e,t){console&&console[e]&&console[e].apply(console,Array.prototype.slice.call(t))}},k=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];m.classCallCheck(this,e),this.subs=[],this.init(t,n)}return e.prototype.init=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.prefix=t.prefix||"i18next:",this.logger=e||x,this.options=t,this.debug=t.debug!==!1},e.prototype.setDebug=function(e){this.debug=e,this.subs.forEach(function(t){t.setDebug(e)})},e.prototype.log=function(){this.forward(arguments,"log","",!0)},e.prototype.warn=function(){this.forward(arguments,"warn","",!0)},e.prototype.error=function(){this.forward(arguments,"error","")},e.prototype.deprecate=function(){this.forward(arguments,"warn","WARNING DEPRECATED: ",!0)},e.prototype.forward=function(e,t,n,o){o&&!this.debug||("string"==typeof e[0]&&(e[0]=n+this.prefix+" "+e[0]),this.logger[t](e))},e.prototype.create=function(t){var n=new e(this.logger,m["extends"]({prefix:this.prefix+":"+t+":"},this.options));return this.subs.push(n),n},e}(),S=new k,w=function(){function e(){m.classCallCheck(this,e),this.observers={}}return e.prototype.on=function(e,t){var n=this;e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})},e.prototype.off=function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var o=n.observers[e].indexOf(t);o>-1&&n.observers[e].splice(o,1)}else delete n.observers[e]})},e.prototype.emit=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];this.observers[e]&&this.observers[e].forEach(function(e){e.apply(void 0,n)}),this.observers["*"]&&this.observers["*"].forEach(function(t){var o;t.apply(t,(o=[e]).concat.apply(o,n))})},e}(),C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},L=function(e){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments.length<=1||void 0===arguments[1]?{ns:["translation"],defaultNS:"translation"}:arguments[1];m.classCallCheck(this,t);var r=m.possibleConstructorReturn(this,e.call(this));return r.data=n,r.options=o,r}return m.inherits(t,e),t.prototype.addNamespaces=function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)},t.prototype.removeNamespaces=function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)},t.prototype.getResource=function(e,t,n){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],r=o.keySeparator||this.options.keySeparator;void 0===r&&(r=".");var s=[e,t];return n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(s=e.split(".")),i(this.data,s)},t.prototype.addResource=function(e,t,n,r){var i=arguments.length<=4||void 0===arguments[4]?{silent:!1}:arguments[4],s=this.options.keySeparator;void 0===s&&(s=".");var a=[e,t];n&&(a=a.concat(s?n.split(s):n)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),o(this.data,a,r),i.silent||this.emit("added",e,t,n,r)},t.prototype.addResources=function(e,t,n){for(var o in n)"string"==typeof n[o]&&this.addResource(e,t,o,n[o],{silent:!0});this.emit("added",e,t,n)},t.prototype.addResourceBundle=function(e,t,n,r,a){var u=[e,t];e.indexOf(".")>-1&&(u=e.split("."),r=n,n=t,t=u[1]),this.addNamespaces(t);var l=i(this.data,u)||{};r?s(l,n,a):l=m["extends"]({},l,n),o(this.data,u,l),this.emit("added",e,t,n)},t.prototype.removeResourceBundle=function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)},t.prototype.hasResourceBundle=function(e,t){return void 0!==this.getResource(e,t)},t.prototype.getResourceBundle=function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?m["extends"]({},this.getResource(e,t)):this.getResource(e,t)},t.prototype.toJSON=function(){return this.data},t}(w),N={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,o,r){var i=this;return e.forEach(function(e){i.processors[e]&&(t=i.processors[e].process(t,n,o,r))}),t}},O=function(e){function n(o){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];m.classCallCheck(this,n);var i=m.possibleConstructorReturn(this,e.call(this));return t(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],o,i),i.options=r,i.logger=S.create("translator"),i}return m.inherits(n,e),n.prototype.changeLanguage=function(e){e&&(this.language=e)},n.prototype.exists=function(e){var t=arguments.length<=1||void 0===arguments[1]?{interpolation:{}}:arguments[1];return"v1"===this.options.compatibilityAPI&&(t=f(t)),void 0!==this.resolve(e,t)},n.prototype.extractFromKey=function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var r=e.split(n);o=r[0],e=r[1]}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}},n.prototype.translate=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if("object"!==("undefined"==typeof t?"undefined":m["typeof"](t))?t=this.options.overloadTranslationOptionHandler(arguments):"v1"===this.options.compatibilityAPI&&(t=f(t)),void 0===e||null===e||""===e)return"";"number"==typeof e&&(e=String(e)),"string"==typeof e&&(e=[e]);var n=t.lng||this.language;if(n&&"cimode"===n.toLowerCase())return e[e.length-1];var o=t.keySeparator||this.options.keySeparator||".",r=this.extractFromKey(e[e.length-1],t),i=r.key,s=r.namespaces,a=s[s.length-1],u=this.resolve(e,t),l=Object.prototype.toString.apply(u),c=["[object Number]","[object Function]","[object RegExp]"],p=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays;if(u&&"string"!=typeof u&&c.indexOf(l)<0&&(!p||"[object Array]"!==l)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(i,u,t):"key '"+i+" ("+this.language+")' returned an object instead of string.";var h="[object Array]"===l?[]:{};for(var g in u)h[g]=this.translate(""+i+o+g,m["extends"]({joinArrays:!1,ns:s},t));u=h}else if(p&&"[object Array]"===l)u=u.join(p),u&&(u=this.extendTranslation(u,i,t));else{var d=!1,v=!1;if(this.isValidLookup(u)||void 0===t.defaultValue||(d=!0,u=t.defaultValue),this.isValidLookup(u)||(v=!0,u=i),v||d){this.logger.log("missingKey",n,a,i,u);var y=[];if("fallback"===this.options.saveMissingTo&&this.options.fallbackLng&&this.options.fallbackLng[0])for(var b=0;b<this.options.fallbackLng.length;b++)y.push(this.options.fallbackLng[b]);else"all"===this.options.saveMissingTo?y=this.languageUtils.toResolveHierarchy(t.lng||this.language):y.push(t.lng||this.language);this.options.saveMissing&&(this.options.missingKeyHandler?this.options.missingKeyHandler(y,a,i,u):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(y,a,i,u)),this.emit("missingKey",y,a,i,u)}u=this.extendTranslation(u,i,t),v&&u===i&&this.options.appendNamespaceToMissingKey&&(u=a+":"+i),v&&this.options.parseMissingKeyHandler&&(u=this.options.parseMissingKeyHandler(u))}return u},n.prototype.extendTranslation=function(e,t,n){var o=this;n.interpolation&&this.interpolator.init(n);var r=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(r=m["extends"]({},this.options.interpolation.defaultVariables,r)),e=this.interpolator.interpolate(e,r),e=this.interpolator.nest(e,function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return o.translate.apply(o,t)},n),n.interpolation&&this.interpolator.reset();var i=n.postProcess||this.options.postProcess,s="string"==typeof i?[i]:i;return void 0!==e&&s&&s.length&&n.applyPostProcessor!==!1&&(e=N.handle(s,e,t,n,this)),e},n.prototype.resolve=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=void 0;return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!t.isValidLookup(o)){var r=t.extractFromKey(e,n),i=r.key,s=r.namespaces;t.options.fallbackNS&&(s=s.concat(t.options.fallbackNS));var a=void 0!==n.count&&"string"!=typeof n.count,u=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,l=n.lngs?n.lngs:t.languageUtils.toResolveHierarchy(n.lng||t.language);s.forEach(function(e){t.isValidLookup(o)||l.forEach(function(r){if(!t.isValidLookup(o)){var s=i,l=[s],c=void 0;a&&(c=t.pluralResolver.getSuffix(r,n.count)),a&&u&&l.push(s+c),u&&l.push(s+=""+t.options.contextSeparator+n.context),a&&l.push(s+=c);for(var p=void 0;p=l.pop();)t.isValidLookup(o)||(o=t.getResource(r,e,p,n))}})})}}),o},n.prototype.isValidLookup=function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)},n.prototype.getResource=function(e,t,n){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];return this.resourceStore.getResource(e,t,n,o)},n}(w),j=function(){function e(t){m.classCallCheck(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=S.create("languageUtils")}return e.prototype.getLanguagePartFromCode=function(e){if(e.indexOf("-")<0)return e;var t=["NB-NO","NN-NO","nb-NO","nn-NO","nb-no","nn-no"],n=e.split("-");return this.formatLanguageCode(t.indexOf(e)>-1?n[1].toLowerCase():n[0])},e.prototype.formatLanguageCode=function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=g(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=g(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=g(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e},e.prototype.isWhitelisted=function(e){return"languageOnly"===this.options.load&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1},e.prototype.toResolveHierarchy=function(e,t){var n=this;t=t||this.options.fallbackLng||[],"string"==typeof t&&(t=[t]);var o=[],r=function(e){n.isWhitelisted(e)?o.push(e):n.logger.warn("rejecting non-whitelisted language code: "+e)};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):"string"==typeof e&&r(this.formatLanguageCode(e)),t.forEach(function(e){o.indexOf(e)<0&&r(n.formatLanguageCode(e))}),o},e}(),R=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","es_ar","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt","pt_br","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],P={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:7>e?2:11>e?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&20>e?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(10>e%100||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&11>e%100?1:e%100>10&&20>e%100?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&20>e%100?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},E=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];m.classCallCheck(this,e),this.languageUtils=t,this.options=n,this.logger=S.create("pluralResolver"),this.rules=d()}return e.prototype.addRule=function(e,t){this.rules[e]=t},e.prototype.getRule=function(e){return this.rules[this.languageUtils.getLanguagePartFromCode(e)]},e.prototype.needsPlural=function(e){var t=this.getRule(e);return!(t&&t.numbers.length<=1)},e.prototype.getSuffix=function(e,t){var n=this,o=this.getRule(e);if(!o)return this.logger.warn("no plural rule found for: "+e),"";var r=function(){if(1===o.numbers.length)return{v:""};var e=o.noAbs?o.plurals(t):o.plurals(Math.abs(t)),r=o.numbers[e];2===o.numbers.length&&1===o.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var i=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===n.options.compatibilityJSON?1===r?{v:""}:"number"==typeof r?{v:"_plural_"+r.toString()}:{v:i()}:"v2"===n.options.compatibilityJSON||2===o.numbers.length&&1===o.numbers[0]?{v:i()}:2===o.numbers.length&&1===o.numbers[0]?{v:i()}:{v:n.options.prepend&&e.toString()?n.options.prepend+e.toString():e.toString()}}();return"object"===("undefined"==typeof r?"undefined":m["typeof"](r))?r.v:void 0},e}(),_=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];m.classCallCheck(this,t),this.logger=S.create("interpolator"),this.init(e,!0)}return t.prototype.init=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];t&&(this.options=e),e.interpolation||(e.interpolation={escapeValue:!0});var n=e.interpolation;this.escapeValue=n.escapeValue,this.prefix=n.prefix?a(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?a(n.suffix):n.suffixEscaped||"}}",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?a(n.nestingPrefix):n.nestingPrefixEscaped||a("$t("),this.nestingSuffix=n.nestingSuffix?a(n.nestingSuffix):n.nestingSuffixEscaped||a(")");var o=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(o,"g");var r=this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(r,"g");var i=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(i,"g")},t.prototype.reset=function(){this.options&&this.init(this.options)},t.prototype.interpolate=function(t,n){function o(e){return e.replace(/\$/g,"$$$$")}for(var r=void 0,s=void 0;r=this.regexpUnescape.exec(t);){var a=i(n,r[1].trim());t=t.replace(r[0],a)}for(;r=this.regexp.exec(t);)s=i(n,r[1].trim()),"string"!=typeof s&&(s=e(s)),s||(this.logger.warn("missed to pass in variable "+r[1]+" for interpolating "+t),s=""),s=o(this.escapeValue?u(s):s),t=t.replace(r[0],s),this.regexp.lastIndex=0;return t},t.prototype.nest=function(t,n){function o(e){return e.replace(/\$/g,"$$$$")}function r(e){if(e.indexOf(",")<0)return e;var t=e.split(",");e=t.shift();var n=t.join(",");n=this.interpolate(n,l);try{l=JSON.parse(n)}catch(o){this.logger.error("failed parsing options string in nesting for key "+e,o)}return e}var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],s=void 0,a=void 0,l=JSON.parse(JSON.stringify(i));for(l.applyPostProcessor=!1;s=this.nestingRegexp.exec(t);)a=n(r.call(this,s[1].trim()),l),"string"!=typeof a&&(a=e(a)),a||(this.logger.warn("missed to pass in variable "+s[1]+" for interpolating "+t),a=""),a=o(this.escapeValue?u(a):a),t=t.replace(s[0],a),this.regexp.lastIndex=0;return t},t}(),T=function(e){function t(n,o,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];m.classCallCheck(this,t);var s=m.possibleConstructorReturn(this,e.call(this));return s.backend=n,s.store=o,s.services=r,s.options=i,s.logger=S.create("backendConnector"),s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(r,i.backend,i),s}return m.inherits(t,e),t.prototype.queueLoad=function(e,t,n){var o=this,r=[],i=[],s=[],a=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){var s=e+"|"+t;o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?i.indexOf(s)<0&&i.push(s):(o.state[s]=1,n=!1,i.indexOf(s)<0&&i.push(s),r.indexOf(s)<0&&r.push(s),a.indexOf(t)<0&&a.push(t)))}),n||s.push(e)}),(r.length||i.length)&&this.queue.push({pending:i,loaded:{},errors:[],callback:n}),{toLoad:r,pending:i,toLoadLanguages:s,toLoadNamespaces:a}},t.prototype.loaded=function(e,t,n){var o=this,i=e.split("|"),s=m.slicedToArray(i,2),a=s[0],u=s[1];t&&this.emit("failedLoading",a,u,t),n&&this.store.addResourceBundle(a,u,n),this.state[e]=t?-1:2,this.queue.forEach(function(n){r(n.loaded,[a],u),v(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(n.errors.length?n.callback(n.errors):n.callback(),o.emit("loaded",n.loaded),n.done=!0)}),this.queue=this.queue.filter(function(e){return!e.done})},t.prototype.read=function(e,t,n,o,r,i){var s=this;return o||(o=0),r||(r=250),e.length?void this.backend[n](e,t,function(a,u){return a&&u&&5>o?void setTimeout(function(){s.read.call(s,e,t,n,++o,2*r,i)},r):void i(a,u)}):i(null,{})},t.prototype.load=function(e,t,n){var o=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();var r=m["extends"]({},this.backend.options,this.options.backend);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var s=this.queueLoad(e,t,n);return s.toLoad.length?void(r.allowMultiLoading&&this.backend.readMulti?this.read(s.toLoadLanguages,s.toLoadNamespaces,"readMulti",null,null,function(e,t){e&&o.logger.warn("loading namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading failed",e),!e&&t&&o.logger.log("loaded namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading",t),s.toLoad.forEach(function(n){var r=n.split("|"),s=m.slicedToArray(r,2),a=s[0],u=s[1],l=i(t,[a,u]);if(l)o.loaded(n,e,l);else{var c="loading namespace "+u+" for language "+a+" via multiloading failed";o.loaded(n,c),o.logger.error(c)}})}):!function(){var e=function(e){var t=this,n=e.split("|"),o=m.slicedToArray(n,2),r=o[0],i=o[1];this.read(r,i,"read",null,null,function(n,o){n&&t.logger.warn("loading namespace "+i+" for language "+r+" failed",n),!n&&o&&t.logger.log("loaded namespace "+i+" for language "+r,o),t.loaded(e,n,o)})};s.toLoad.forEach(function(t){e.call(o,t)})}()):void(s.pending.length||n())},t.prototype.saveMissing=function(e,t,n,o){this.backend&&this.backend.create&&this.backend.create(e,t,n,o),e&&e[0]&&this.store.addResource(e[0],t,n,o)},t}(w),A=function(e){function t(n,o,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];m.classCallCheck(this,t);var s=m.possibleConstructorReturn(this,e.call(this));return s.cache=n,s.store=o,s.services=r,s.options=i,s.logger=S.create("cacheConnector"),s.cache&&s.cache.init&&s.cache.init(r,i.cache,i),s}return m.inherits(t,e),t.prototype.load=function(e,t,n){var o=this;if(!this.cache)return n&&n();var r=m["extends"]({},this.cache.options,this.options.cache);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]),r.enabled?this.cache.load(e,function(t,r){if(t&&o.logger.error("loading languages "+e.join(", ")+" from cache failed",t),r)for(var i in r)for(var s in r[i])if("i18nStamp"!==s){var a=r[i][s];a&&o.store.addResourceBundle(i,s,a)}n&&n()}):n&&n()},t.prototype.save=function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)},t}(w),M=function(e){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments[1];m.classCallCheck(this,t);var r=m.possibleConstructorReturn(this,e.call(this));return r.options=b(n),r.services={},r.logger=S,r.modules={},o&&!r.isInitialized&&r.init(n,o),r}return m.inherits(t,e),t.prototype.init=function(e,t){function n(e){return e?"function"==typeof e?new e:e:void 0}var o=this;if("function"==typeof e&&(t=e,e={}),e||(e={}),"v1"===e.compatibilityAPI?this.options=m["extends"]({},y(),b(c(e)),{}):"v1"===e.compatibilityJSON?this.options=m["extends"]({},y(),b(p(e)),{}):this.options=m["extends"]({},y(),this.options,b(e)),t||(t=function(){}),!this.options.isClone){this.modules.logger?S.init(n(this.modules.logger),this.options):S.init(null,this.options);var r=new j(this.options);this.store=new L(this.options.resources,this.options);var i=this.services;i.logger=S,i.resourceStore=this.store,i.resourceStore.on("added removed",function(e,t){i.cacheConnector.save()}),i.languageUtils=r,i.pluralResolver=new E(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON}),i.interpolator=new _(this.options),i.backendConnector=new T(n(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];o.emit.apply(o,[e].concat(n))}),i.backendConnector.on("loaded",function(e){i.cacheConnector.save()}),i.cacheConnector=new A(n(this.modules.cache),i.resourceStore,i,this.options),i.cacheConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];o.emit.apply(o,[e].concat(n))}),this.modules.languageDetector&&(i.languageDetector=n(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.translator=new O(this.services,this.options),this.translator.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];o.emit.apply(o,[e].concat(n))})}var s=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"];s.forEach(function(e){o[e]=function(){return this.store[e].apply(this.store,arguments)}}),"v1"===this.options.compatibilityAPI&&h(this);var a=function(){o.changeLanguage(o.options.lng,function(e,n){o.emit("initialized",o.options),o.logger.log("initialized",o.options),t(e,n)})};return this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),this},t.prototype.loadResources=function(e){var t=this;if(e||(e=function(){}),this.options.resources)e(null);else{var n=function(){if(t.language&&"cimode"===t.language.toLowerCase())return{v:e()};var n=[],o=function(e){var o=t.services.languageUtils.toResolveHierarchy(e);o.forEach(function(e){n.indexOf(e)<0&&n.push(e)})};o(t.language),t.options.preload&&t.options.preload.forEach(function(e){o(e)}),t.services.cacheConnector.load(n,t.options.ns,function(){t.services.backendConnector.load(n,t.options.ns,e)})}();if("object"===("undefined"==typeof n?"undefined":m["typeof"](n)))return n.v}},t.prototype.use=function(e){return"backend"===e.type&&(this.modules.backend=e),"cache"===e.type&&(this.modules.cache=e),("logger"===e.type||e.log&&e.warn&&e.warn)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"postProcessor"===e.type&&N.addPostProcessor(e),this},t.prototype.changeLanguage=function(e,t){var n=this,o=function(o){e&&(n.emit("languageChanged",e),n.logger.log("languageChanged",e)),t&&t(o,function(){for(var e=arguments.length,t=Array(e),o=0;e>o;o++)t[o]=arguments[o];return n.t.apply(n,t)})};!e&&this.services.languageDetector&&(e=this.services.languageDetector.detect()),e&&(this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.translator.changeLanguage(e),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage(e)),this.loadResources(function(e){o(e)})},t.prototype.getFixedT=function(e,t){var n=this,o=function r(e,t){return t=t||{},t.lng=t.lng||r.lng,t.ns=t.ns||r.ns,n.t(e,t)};return o.lng=e,o.ns=t,o},t.prototype.t=function(){return this.translator&&this.translator.translate.apply(this.translator,arguments)},t.prototype.exists=function(){return this.translator&&this.translator.exists.apply(this.translator,arguments)},t.prototype.setDefaultNamespace=function(e){this.options.defaultNS=e},t.prototype.loadNamespaces=function(e,t){
var n=this;return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),void this.loadResources(t)):t&&t()},t.prototype.loadLanguages=function(e,t){"string"==typeof e&&(e=[e]);var n=this.options.preload||[],o=e.filter(function(e){return n.indexOf(e)<0});return o.length?(this.options.preload=n.concat(o),void this.loadResources(t)):t()},t.prototype.dir=function(e){e||(e=this.language);var t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return t.indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"},t.prototype.createInstance=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];return new t(e,n)},t.prototype.cloneInstance=function(){var e=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments[1],r=new t(m["extends"]({},n,this.options,{isClone:!0}),o),i=["store","translator","services","language"];return i.forEach(function(t){r[t]=e[t]}),r},t}(w),H=new M;return H});
define('plugins/bb-i18next', ['i18next'], 
        function(i18next){

        return function(lang, cb){
            require(['translations/' + lang], function(langOpt){

                var config = {
                    lng: langOpt.lang,
                    resources: {}
                };
                config.resources[langOpt.lang] = {
                    translation: langOpt.translation
                };

                i18next.init(config, function(err, t){
                    cb(t);
                });
            });
        }
        
});
// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v1.1.0
//
// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr


(function(t,e){if("object"==typeof exports){var n=require("underscore"),r=require("backbone");module.exports=e(n,r)}else"function"==typeof define&&define.amd&&define('backbone-wreqr',["underscore","backbone"],e)})(this,function(t,e){"use strict";return e.Wreqr=function(t,e,n){var r={};return r.Handlers=function(t,e){var n=function(t){this.options=t,this._wreqrHandlers={},e.isFunction(this.initialize)&&this.initialize(t)};return n.extend=t.Model.extend,e.extend(n.prototype,t.Events,{setHandlers:function(t){e.each(t,function(t,n){var r=null;e.isObject(t)&&!e.isFunction(t)&&(r=t.context,t=t.callback),this.setHandler(n,t,r)},this)},setHandler:function(t,e,n){var r={callback:e,context:n};this._wreqrHandlers[t]=r,this.trigger("handler:add",t,e,n)},hasHandler:function(t){return!!this._wreqrHandlers[t]},getHandler:function(t){var e=this._wreqrHandlers[t];if(e)return function(){var t=Array.prototype.slice.apply(arguments);return e.callback.apply(e.context,t)}},removeHandler:function(t){delete this._wreqrHandlers[t]},removeAllHandlers:function(){this._wreqrHandlers={}}}),n}(t,n),r.CommandStorage=function(){var e=function(t){this.options=t,this._commands={},n.isFunction(this.initialize)&&this.initialize(t)};return n.extend(e.prototype,t.Events,{getCommands:function(t){var e=this._commands[t];return e||(e={command:t,instances:[]},this._commands[t]=e),e},addCommand:function(t,e){var n=this.getCommands(t);n.instances.push(e)},clearCommands:function(t){var e=this.getCommands(t);e.instances=[]}}),e}(),r.Commands=function(t){return t.Handlers.extend({storageType:t.CommandStorage,constructor:function(e){this.options=e||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var n=Array.prototype.slice.call(arguments);t.Handlers.prototype.constructor.apply(this,n)},execute:function(t,e){t=arguments[0],e=Array.prototype.slice.call(arguments,1),this.hasHandler(t)?this.getHandler(t).apply(this,e):this.storage.addCommand(t,e)},_executeCommands:function(t,e,r){var i=this.storage.getCommands(t);n.each(i.instances,function(t){e.apply(r,t)}),this.storage.clearCommands(t)},_initializeStorage:function(t){var e,r=t.storageType||this.storageType;e=n.isFunction(r)?new r:r,this.storage=e}})}(r),r.RequestResponse=function(t){return t.Handlers.extend({request:function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return this.hasHandler(t)?this.getHandler(t).apply(this,e):void 0}})}(r),r.EventAggregator=function(t,e){var n=function(){};return n.extend=t.Model.extend,e.extend(n.prototype,t.Events),n}(t,n),r}(e,e.Marionette,t),e.Wreqr});
define('application',[
        'backbone', 
        'toastr',
        'underscore',
        'plugins/cache',
        'plugins/bb-i18next'
        ,'backbone-wreqr'
    ], 
    function(Backbone, toastr, _, Cache, bbi18next){
    'use strict';
        
    var _showView = function (view, area) {
            area = area || 'main';
            var selectedArea = App.regions[area],
                onDone = function(){
                    $(selectedArea.selector).append(view.render().el);
                    view.$el.addClass('slide-in')
                        .one('animationend webkitAnimationEnd oAnimationEnd', function(){
                            view.$el.removeClass('slide-in');
                        });

                    selectedArea.view = view;
                    return view;
                };


            if (!selectedArea) {
                console.log('Area not defined!');
                return;
            }

            if (selectedArea.view) {
                _closeView(area, onDone);
            }
            else{
                onDone();
            }

        },
        _closeView = function(area, callback){
            var selectedArea = App.regions.main; 
            
            if (selectedArea.view) {
                var oldView = selectedArea.view;
                selectedArea.view = undefined;

                oldView.$el.addClass('slide-back');
                oldView.$el.one('animationend webkitAnimationEnd oAnimationEnd', function(){
                    oldView.Close();
                    if(callback){
                        callback();
                    }
                });
            }
        },
        _setColorPalette = (function(){ 
            var currentColor = '';
            return function(color){
                if(currentColor){
                    $(document.body).removeClass('color-' + currentColor);
                }
                if(color){
                    currentColor = color;
                    $(document.body).addClass('color-' + color);
                }
            };
        }()),
        _showNavMenu = function(){
            require(['components/menu'], function (Menu) {
                var $menu = $('#site-nav');

                $menu.html((new Menu()).render().el);
            });
        },
        _bindWorkoutListner = function(){
            App.Events.on('workout:changed', function(){
                _getDefaultWorkout();
            });
        },
        _bindTimer = function(){
            $('.timer-toggle').on('click', function(e){
                e.preventDefault();
                App.openTimer();
            });
        },
        _bindExternalLinks = function () {
            if(window.isMobile){
                $(document).on('click', 'a[target="_blank"]', function(e){
                    console.log('Browser called for ' + e.target.href);
                    e.preventDefault();
                    //window.open(e.target.href, '_system');
                    window.open(e.target.href, '_system', 'location=yes');
                });
            }
        };

    return {

        version: '0.0.0',

        initialize: function (Router) {
            var _this = this,
                onSetupDone = function(){
                    var lang = _this.User.get('language') || 'en';
                    
                    _this.setLanguage(lang, onSyncComplete);
                },
                onSyncComplete = function onSyncComplete(){
                    _showNavMenu.call(_this);

                    _bindTimer();
                    _bindExternalLinks();
                    _bindWorkoutListner();
                    
                    _this.router = new Router();

                    Backbone.history.start();
                };

            require(['plugins/setup'], function(Setup){
                Setup.init()
                    .then(function(data){
                        App.version = data.version;
                        onSetupDone();
                    });
            });
        },

        languages: {
            'en': 'English',
            'is': 'Íslenska'
        },

        setLanguage: function(lang, cb){
            bbi18next(lang, function(translate){
                window.App.translate = translate;
                if(cb){
                    cb();
                }
            });
        },

        vibrate: function(time){
            if('vibrate' in navigator){
                navigator.vibrate(time);
            }
        },

        toggleLoader: (function(){
            var loader = $('<div class="loader7-wrapper" style="display: none;"><div class="loader7"></div></div>');
            $(document.body).append(loader);

            return function toggleLoader (toggle) {
                    loader.toggle(toggle);
                };
        }()),

        navigate: function (url) {
            location.href = url;
        },

        title: function (title) {
            $('title, #title').text(title);
        },

        showView: _showView,

        cache: new Cache(),

        message: function(msg){ //TODO use plugin??
            $('body').append('<p>'+ msg +'</p>');
        },

        Events: new Backbone.Wreqr.EventAggregator(),
        
        regions: {
            main: {
                selector: '#container',
                view: undefined
            }
        },

        setColorPalette: _setColorPalette,

        toast: function(type, msg){
            if(toastr[type]){
                toastr[type](msg);
            } else {
                toastr.info(msg);
            }
        },

        uuid: function(){
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        //Deletable?
        versionNewerThan: function(ver){
            var _this = this,
                version = _this.version,
                versionSplit = version.split('.'),
                checkVerSplit = ver.split('.'),
                done = false,
                i = 0,
                l = checkVerSplit.length,
                newer = false;

            while(i < l){
                if(versionSplit[i] === undefined){
                    newer = true;
                    break;
                }
                else if(checkVerSplit[i] === undefined){
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) < parseInt(checkVerSplit[i])) {
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) > parseInt(checkVerSplit[i])){
                    newer = true;
                    break;
                }
                i++;
            }

            return newer;

        },

        enums: {
            goals: {
                1: 'Build muscles',
                2: 'Loose weight',
                3: 'Get healthier',
                4: 'Other'
            },
            units: {
                weight: function(){ return (App.User.get('units') === 'metric') ? 'kg' : 'lbs'; },
                shortLength: function(){ return (App.User.get('units') === 'metric') ? 'cm' : 'inch'; },
                longLength: function(){ return (App.User.get('units') === 'metric') ? 'm' : 'feet'; },
                farLength: function(){ return (App.User.get('units') === 'metric') ? 'km' : 'mile'; },
                time: function(){ return 'min'; },
                beats: function(){ return 'bpm'; },
                percent: function(){ return '%'; },
                shortDate: function(){ return (App.User.get('units') === 'metric') ? 'DD/MM/YY' : 'MM/DD/YY'; },
                longDate: function(){ return (App.User.get('units') === 'metric') ? 'DD. MMMM YYYY' : 'MMMM DD YYYY'; },
                dateTime: function(){ return (App.User.get('units') === 'metric') ? 'DD/MM/YYYY HH:mm' : 'MM/DD/YYYY hh:mm a'; },
                shortDateTime: function(){ return (App.User.get('units') === 'metric') ? 'DD. MM YYYY HH:mm' : 'MM DD YYYY HH:mm'; },
                getAll: function(){
                    var units = {};
                    _.each(this, function(unit, key){
                        if(key === 'getAll'){ return; }
                        units[key] = unit();
                    });
                    return units;
                }
            },
            workoutTypes: {
                'weightrep': ['weight', 'reps'],
                'weight': ['weight'],
                'reps': ['reps'],
                'distance': ['distance'],
                'time': ['time'],
                'beats': ['beats']
            }
        },

        support: (function(){
            return {
                touchstart : ('ontouchstart' in document.documentElement) ? 'mousedown' : 'touchstart',
                touchend : ('touchend' in document.documentElement) ? 'mouseup' : 'touchend'
            };
        }()),

        openTimer: (function(){
            var _timerView,
                toggleView = function(){
                    _timerView.$el.toggle();
                };

            return function(){
                if(!_timerView){
                    require(['views/timer'], function(View){
                        _timerView = new View();

                        $(document.body).append(_timerView.render().el);

                        toggleView();
                    });
                }
                else {
                    toggleView();
                }
            };

        }())

    };

});
define('router',['backbone'], function(Backbone){
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '(/)': 'dashboard',

            'about(/)': 'about',
            'about/license(/)': 'license',
            'settings(/)': 'settings',
            'workout(/)': 'workout',
            'workout/:id(/)': 'do-workout',

            /* Free workout */
            'freerun(/)': 'freerun',
            'freerun/history(/)': 'freerun-history',
            'freerun/history/:id(/)': 'freerun-history-item',

            /* Plans */
            'plan(/)': 'plan',
            'plan/list(/)': 'plan-list',

            /* History */
            'history/graph/:id(/)': 'history-graph',
            'history/session/:id(/)': 'history-sessions',
            'history/exercises/:parent/:id(/)': 'history-exercises',

            /* Create */
            'create/workout(/)': 'create-workout',
            'create/wizard/:id(/)': 'create-wizard',
            'create/wizard/:id/exercises/:exid(/)': 'create-exercise',

            /* Measurements */
            'measurements(/)': 'measurements',
            'measurements/add(/)': 'measurements-add',
            'measurements/addpart(/)': 'measurements-addpart'
        },

        initialize: function(){
        },
    
        'dashboard': function () {
            App.Events.trigger('navigate:done', 'home');
            require(['views/dashboard'], function (View) {
                App.showView(new View());
            });
        },

        'about': function(){
            App.Events.trigger('navigate:done', 'about');
            require(['views/about'], function (View) {
                App.showView(new View());
            });
        },

        'license': function(){
            App.Events.trigger('navigate:done', 'about');
            require(['views/license'], function (View) {
                App.showView(new View());
            });
        },
        
        'plan': function () {
            App.Events.trigger('navigate:done', 'plan');
            require(['views/plan/plan'], function (View) {
                App.showView(new View());
            });
        },

        'plan-list': function(){
            App.toggleLoader(true);

            require(['views/plan/server-list','collections/serveritems'], function (View, Collection) {
                var view = new View(),
                    collection = new Collection();
                view.collection = collection;
                
                view.collection.fetch({
                    success: function(){
                        App.toggleLoader(false);
                        App.showView(view);
                    }
                });
            });
        },

        'workout': function(){
            require(['views/workout'], function (View) {
                var view = new View(),
                    currentPlan = App.User.get('workout'),
                    noPlan = function(){
                        console.log('User has no plan!');
                        App.toast('info', 'No workout plan selected');
                    };

                if(currentPlan === undefined){
                    noPlan();
                } else {
                    view.model = App.Workout;
                    App.showView(view);
                }

            });
        },

        'do-workout': function(id){
            require(['views/exercises'], function(View){
                var view = new View();
                view.model = App.Workout.get('sessions').findWhere({id: id});
                view.parentModel = App.Workout;

                App.showView(view);
            });

        },

        /* Free-run start */

        'freerun': function(){
            require([
                    'views/freerun/freerun', 
                    'models/session-instance',
                    'collections/movements', 
                    'collections/muscles'
                ], function(View, Model, MoveColl, MuscColl){

                var movements = new MoveColl(),
                    muscles = new MuscColl(),
                    view = new View({
                        muscles: muscles,
                        movements: movements
                    }),
                    onDone = function () {
                        if(muscles.loaded && movements.loaded){
                            App.showView(view, 'main');
                        }
                    };

                view.model = new Model({ parent: '11111111-1111-1111-1111-111111111111' });

                muscles.fetch({
                    success: function(){
                        muscles.loaded = true;
                        onDone();
                    }
                });
                movements.fetch({
                    success: function(){
                        movements.loaded = true;
                        onDone();
                    }
                });

            });
        },

        'freerun-history': function(){
            require([
                    'views/freerun/freerun-history-list',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = view.collection = new Collection();

                collection.fetch({
                    filters: { parent: '11111111-1111-1111-1111-111111111111' },
                    success: function(){
                        App.showView(view);
                    },
                    error: function(){
                        App.toast('info', 'Could not get history');
                    }
                });

            });
        },

        'freerun-history-item': function(id){
            require([
                    'views/freerun/history-session',
                    'models/session-instance',
                    'collections/movements', 
                    'collections/muscles'
                ], function(View, Model, MoveColl, MuscColl){
                    
                var movements = new MoveColl(),
                    muscles = new MuscColl(),
                    model = new Model({ id: id }),
                    view = new View({
                        muscles: muscles,
                        movements: movements
                    }),
                    onDone = function () {
                        if(model.loaded && muscles.loaded && movements.loaded){
                            App.showView(view, 'main');
                        }
                    };

                view.model = model;

                view.model.fetch({
                    success: function(){
                        model.loaded = true;
                        onDone();
                    }
                });

                muscles.fetch({
                    success: function(){
                        muscles.loaded = true;
                        onDone();
                    }
                });
                movements.fetch({
                    success: function(){
                        movements.loaded = true;
                        onDone();
                    }
                });
            });
        },


        /* Free-run end */

        'settings': function () {
            App.Events.trigger('navigate:done', 'settings');
            require(['views/settings/settings'], function (View) {
                var view = new View();
                view.model = App.User;
                App.showView(view);
            });
        },

        //Is this in use??
        'session': function(id){
            require(['views/session','models/session'], function (View, Model) {
                var view = new View(),
                    model = new Model({ id: id });
                view.model = model;

                view.model.fetch({
                    success: function(){
                        App.showView(view);
                    }
                });
            });
        },

        /* History */
        'history-graph': function(id){
            require([
                    'views/history/graph-sessions',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = new Collection(),
                    onFetch = function(){
                        collection.fetch({
                            filters: { parent: id },
                            orderby: 'date',
                            ordertype: 'asc',
                            success: function(){
                                App.showView(view);
                            },
                            error: function(){
                                App.toast('error', 'Failed loading workout sessions');
                                console.log(arguments);
                            }
                        });
                    },
                    mdl = App.Workout.get('sessions').findWhere({ id: id });

                collection.asc = true;
                view.model = mdl;
                view.collection = collection;

                onFetch();
            });
        },

        'history-sessions': function(id){
            require([
                    'views/history/session-list',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = new Collection(),
                    onError = function(){
                        App.toast('error', 'Failed loading workout sessions');
                        console.log(arguments);
                    },
                    onModelComplete = function(){
                        collection.fetch({
                            filters: { parent: id },
                            success: function(){
                                view.collection = collection;
                                App.showView(view);
                            },
                            error: onError
                        });
                    },
                    mdl = App.Workout.get('sessions').findWhere({ id: id });

                view.model = mdl;
                onModelComplete();

            });
        },

        'history-exercises': function(sessionId, id){
            require([
                    'views/history/exercises',
                    'models/session-instance'
                ], function (View, Model) {
                var view = new View(),
                    session = App.Workout.get('sessions').findWhere({ id: sessionId }),
                    model = new Model({ id: id });

                view.session = session;
                view.model = model;

                view.model.fetch({
                    success: function(){
                        App.showView(view);
                    }
                });
            });
        },

        /* Create */

        'create-workout': function(){
            require(['views/create/workout'], function (View) {
                App.showView(new View());
            });
        },

        'create-wizard': function(id){
            require(['views/create/session', 'models/workout', 'collections/movements', 'collections/muscles'], function (View, Model, MoveColl, MuscColl) {
                var view = new View(),
                    movements = new MoveColl(),
                    muscles = new MuscColl(),
                    fetchCount = 0,
                    onDone = function () {
                        fetchCount++;
                        if(fetchCount === 3){
                            App.cache.showView(view, 'create' + id);
                        }
                    };
                view.model = new Model({ id: id });


                if(!App.cache.exists('create' + id)){
                    App.cache.init('create' + id, { 
                            model: view.model,
                            muscles: muscles,
                            movements: movements
                        }, {});

                    view.model.fetch({
                        success: onDone
                    });
                    muscles.fetch({
                        success: onDone
                    });
                    movements.fetch({
                        success: onDone
                    });
                } else {
                    App.cache.showView(view, 'create' + id);
                }
            });
        },

        'create-exercise': function(id, exid){
            require(['views/create/exercises', 'models/workout', 'collections/movements', 'collections/muscles'], function (View, Model, MoveColl, MuscColl) {
                var view = new View({ exerciseid: exid }),
                    movements = new MoveColl(),
                    muscles = new MuscColl(),
                    fetchCount = 0,
                    onDone = function () {
                        fetchCount++;
                        if(fetchCount === 3){
                            App.cache.showView(view, 'create' + id);
                        }
                    };
                view.model = new Model({ id: id });

                if(!App.cache.exists('create' + id)){
                    App.cache.init('create' + id, { 
                            model: view.model,
                            muscles: muscles,
                            movements: movements
                        }, {});

                    view.model.fetch({
                        success: onDone
                    });
                    muscles.fetch({
                        success: onDone
                    });
                    movements.fetch({
                        success: onDone
                    });
                } else {
                    App.cache.showView(view, 'create' + id);
                }

            });
        },

        /* Measurements */

        'measurements': function(){
            App.Events.trigger('navigate:done', 'measurements');
            require(['views/measurements/measurements'], function(View){
                var view = new View();

                App.showView(view);
                
            });
        },

        'measurements-add': function(){
            require(
                ['views/measurements/measurements-add','collections/body-parts'], 
                function(View, BodyParts){
                    var view = new View();
                    view.collection = new BodyParts();

                    view.collection.fetch({
                        success: function(){
                            App.showView(view);
                        }
                    });
                    
            });

        },

        'measurements-addpart': function(){
            require(['views/measurements/bodypart-add'], function(View){
                var view = new View();
                App.showView(view);
            });
        }

    });

});
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('backbone-db', ['backbone', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('backbone'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Backbone, root._);
    }
}(this, function (Backbone, _) {

    // Generate four random hex digits.
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    // Generate a pseudo-GUID by concatenating random hexadecimal.
    function guid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    if (typeof indexedDB === "undefined") { return; }

    var Deferred = Backbone.$ && Backbone.$.Deferred;

    // Driver object
    // That's the interesting part.
    // There is a driver for each schema provided. The schema is a te combination of name (for the database), a version as well as migrations to reach that
    // version of the database.
    function Driver(schema, ready, nolog, onerror) {
        this.schema         = schema;
        this.ready          = ready;
        this.error          = null;
        this.transactions   = []; // Used to list all transactions and keep track of active ones.
        this.db             = null;
        this.nolog          = nolog;
        this.onerror        = onerror;
        var lastMigrationPathVersion = _.last(this.schema.migrations).version;
        if (!this.nolog) debugLog("opening database " + this.schema.id + " in version #" + lastMigrationPathVersion);
        this.dbRequest      = indexedDB.open(this.schema.id,lastMigrationPathVersion); //schema version need to be an unsigned long

        this.launchMigrationPath = function(dbVersion) {
            var transaction = this.dbRequest.transaction;
            var clonedMigrations = _.clone(schema.migrations);
            this.migrate(transaction, clonedMigrations, dbVersion, {
                error: _.bind(function(event) {
                    this.error = "Database not up to date. " + dbVersion + " expected was " + lastMigrationPathVersion;
                }, this)
            });
        };

        this.dbRequest.onblocked = function(event){
            if (!this.nolog) debugLog("connection to database blocked");
        };

        this.dbRequest.onsuccess = _.bind(function (e) {
            this.db = e.target.result; // Attach the connection ot the queue.
            var currentIntDBVersion = (parseInt(this.db.version) ||  0); // we need convert beacuse chrome store in integer and ie10 DP4+ in int;
            var lastMigrationInt = (parseInt(lastMigrationPathVersion) || 0);  // And make sure we compare numbers with numbers.

            if (currentIntDBVersion === lastMigrationInt) { //if support new event onupgradeneeded will trigger the ready function
                // No migration to perform!
                this.ready();
            } else if (currentIntDBVersion < lastMigrationInt ) {
                // We need to migrate up to the current migration defined in the database
                this.launchMigrationPath(currentIntDBVersion);
            } else {
                // Looks like the IndexedDB is at a higher version than the current driver schema.
                this.error = "Database version is greater than current code " + currentIntDBVersion + " expected was " + lastMigrationInt;
            }
        }, this);


        this.dbRequest.onerror = _.bind(function (e) {
            // Failed to open the database
            this.error = "Couldn't not connect to the database"
            if (!this.nolog) debugLog("Couldn't not connect to the database");
            this.onerror();
        }, this);

        this.dbRequest.onabort = _.bind(function (e) {
            // Failed to open the database
            this.error = "Connection to the database aborted"
            if (!this.nolog) debugLog("Connection to the database aborted");
            this.onerror();
        }, this);


        this.dbRequest.onupgradeneeded = _.bind(function(iDBVersionChangeEvent){
            this.db =iDBVersionChangeEvent.target.result;

            var newVersion = iDBVersionChangeEvent.newVersion;
            var oldVersion = iDBVersionChangeEvent.oldVersion;

            // Fix Safari 8 and iOS 8 bug
            // at the first connection oldVersion is equal to 9223372036854776000
            // but the real value is 0
            if (oldVersion > 99999999999)
                oldVersion = 0;

            if (!this.nolog) debugLog("onupgradeneeded = " + oldVersion + " => " + newVersion);
            this.launchMigrationPath(oldVersion);
        }, this);
    }

    function debugLog(str) {
        if (typeof console !== "undefined" && typeof console.log === "function") {
            console.trace();
            console.log(str);
        }
    }

    // Driver Prototype
    Driver.prototype = {

        // Tracks transactions. Mostly for debugging purposes. TO-IMPROVE
        _track_transaction: function(transaction) {
            this.transactions.push(transaction);
            var removeIt = _.bind(function() {
                var idx = this.transactions.indexOf(transaction);
                if (idx !== -1) {this.transactions.splice(idx); }
            }, this);
            transaction.oncomplete = removeIt;
            transaction.onabort = removeIt;
            transaction.onerror = removeIt;
        },

        // Performs all the migrations to reach the right version of the database.
        migrate: function (transaction, migrations, version, options) {
            transaction.onerror = options.error;
            transaction.onabort = options.error;

            if (!this.nolog) debugLog("migrate begin version from #" + version);
            var that = this;
            var migration = migrations.shift();
            if (migration) {
                if (!version || version < migration.version) {
                    // We need to apply this migration-
                    if (typeof migration.before == "undefined") {
                        migration.before = function (next) {
                            next();
                        };
                    }
                    if (typeof migration.after == "undefined") {
                        migration.after = function (next) {
                            next();
                        };
                    }
                    // First, let's run the before script
                    if (!that.nolog) debugLog("migrate begin before version #" + migration.version);
                    migration.before(function () {
                    if (!that.nolog) debugLog("migrate done before version #" + migration.version);

                        if (!that.nolog) debugLog("migrate begin migrate version #" + migration.version);

                        migration.migrate(transaction, function () {
                            if (!that.nolog) debugLog("migrate done migrate version #" + migration.version);
                            // Migration successfully appliedn let's go to the next one!
                            if (!that.nolog) debugLog("migrate begin after version #" + migration.version);
                            migration.after(function () {
                                if (!that.nolog) debugLog("migrate done after version #" + migration.version);
                                if (!that.nolog) debugLog("Migrated to " + migration.version);

                                //last modification occurred, need finish
                                if(migrations.length ==0) {
                                    if (!that.nolog) {
                                        debugLog("migrate setting transaction.oncomplete to finish version #" + migration.version);
                                        transaction.oncomplete = function() {
                                            debugLog("migrate done transaction.oncomplete version #" + migration.version);
                                            debugLog("Done migrating");
                                        };
                                    }
                                }
                                else {
                                    if (!that.nolog) debugLog("migrate end from version #" + version + " to " + migration.version);
                                    that.migrate(transaction, migrations, version, options);
                                }

                            });
                        });
                    });
                } else {
                    // No need to apply this migration
                    if (!that.nolog) debugLog("Skipping migration " + migration.version);
                    that.migrate(transaction, migrations, version, options);
                }
            }
        },

        // This is the main method, called by the ExecutionQueue when the driver is ready (database open and migration performed)
        execute: function (storeName, method, object, options) {
            if (!this.nolog) debugLog("execute : " + method +  " on " + storeName + " for " + object.id);
            switch (method) {
            case "create":
                this.create(storeName, object, options);
                break;
            case "read":
                if (object.id || object.cid) {
                    this.read(storeName, object, options); // It's a model
                } else {
                    this.query(storeName, object, options); // It's a collection
                }
                break;
            case "update":
                this.update(storeName, object, options); // We may want to check that this is not a collection. TOFIX
                break;
            case "delete":
                if (object.id || object.cid) {
                    this['delete'](storeName, object, options);
                } else {
                    this.clear(storeName, object, options);
                }
                break;
            default:
                // Hum what?
            }
        },

        // Writes the json to the storeName in db. It is a create operations, which means it will fail if the key already exists
        // options are just success and error callbacks.
        create: function (storeName, object, options) {
            var writeTransaction = this.db.transaction([storeName], 'readwrite');
            //this._track_transaction(writeTransaction);
            var store = writeTransaction.objectStore(storeName);
            var json = object.toJSON();
            var idAttribute = _.result(object, 'idAttribute');
            var writeRequest;

            if (json[idAttribute] === undefined && !store.autoIncrement) json[idAttribute] = guid();

            writeTransaction.onerror = function (e) {
                options.error(e);
            };
            writeTransaction.oncomplete = function (e) {
                options.success(json);
            };

            if (!store.keyPath)
                writeRequest = store.add(json, json[idAttribute]);
            else
                writeRequest = store.add(json);
        },

        // Writes the json to the storeName in db. It is an update operation, which means it will overwrite the value if the key already exist
        // options are just success and error callbacks.
        update: function (storeName, object, options) {
            var writeTransaction = this.db.transaction([storeName], 'readwrite');
            //this._track_transaction(writeTransaction);
            var store = writeTransaction.objectStore(storeName);
            var json = object.toJSON();
            var idAttribute = _.result(object, 'idAttribute');
            var writeRequest;

            if (!json[idAttribute]) json[idAttribute] = guid();

            if (!store.keyPath)
              writeRequest = store.put(json, json[idAttribute]);
            else
              writeRequest = store.put(json);

            writeRequest.onerror = function (e) {
                options.error(e);
            };
            writeTransaction.oncomplete = function (e) {
                options.success(json);
            };
        },

        // Reads from storeName in db with json.id if it's there of with any json.xxxx as long as xxx is an index in storeName
        read: function (storeName, object, options) {
            var readTransaction = this.db.transaction([storeName], "readonly");
            this._track_transaction(readTransaction);

            var store = readTransaction.objectStore(storeName);
            var json = object.toJSON();
            var idAttribute = _.result(object, 'idAttribute');

            var getRequest = null;
            if (json[idAttribute]) {
                getRequest = store.get(json[idAttribute]);
            } else if(options.index) {
                var index = store.index(options.index.name);
                getRequest = index.get(options.index.value);
            } else {
                // We need to find which index we have
                var cardinality = 0; // try to fit the index with most matches
                _.each(store.indexNames, function (key) {
                    var index = store.index(key);
                    if(typeof index.keyPath === 'string' && 1 > cardinality) {
                        // simple index
                        if (json[index.keyPath] !== undefined) {
                            getRequest = index.get(json[index.keyPath]);
                            cardinality = 1;
                        }
                    } else if(typeof index.keyPath === 'object' && index.keyPath.length > cardinality) {
                        // compound index
                        var valid = true;
                        var keyValue = _.map(index.keyPath, function(keyPart) {
                            valid = valid && json[keyPart] !== undefined;
                            return json[keyPart];
                        });
                        if(valid) {
                            getRequest = index.get(keyValue);
                            cardinality = index.keyPath.length;
                        }
                    }
                });
            }
            if (getRequest) {
                getRequest.onsuccess = function (event) {
                    if (event.target.result) {
                        options.success(event.target.result);
                    } else {
                        options.error("Not Found");
                    }
                };
                getRequest.onerror = function () {
                    options.error("Not Found"); // We couldn't find the record.
                }
            } else {
                options.error("Not Found"); // We couldn't even look for it, as we don't have enough data.
            }
        },

        // Deletes the json.id key and value in storeName from db.
        delete: function (storeName, object, options) {
            var deleteTransaction = this.db.transaction([storeName], 'readwrite');
            //this._track_transaction(deleteTransaction);

            var store = deleteTransaction.objectStore(storeName);
            var json = object.toJSON();
            var idAttribute = store.keyPath || _.result(object, 'idAttribute');

            var deleteRequest = store['delete'](json[idAttribute]);

            deleteTransaction.oncomplete = function (event) {
                options.success(null);
            };
            deleteRequest.onerror = function (event) {
                options.error("Not Deleted");
            };
        },

        // Clears all records for storeName from db.
        clear: function (storeName, object, options) {
            var deleteTransaction = this.db.transaction([storeName], "readwrite");
            //this._track_transaction(deleteTransaction);

            var store = deleteTransaction.objectStore(storeName);

            var deleteRequest = store.clear();
            deleteRequest.onsuccess = function (event) {
                options.success(null);
            };
            deleteRequest.onerror = function (event) {
                options.error("Not Cleared");
            };
        },

        // Performs a query on storeName in db.
        // options may include :
        // - conditions : value of an index, or range for an index
        // - range : range for the primary key
        // - limit : max number of elements to be yielded
        // - offset : skipped items.
        query: function (storeName, collection, options) {
            var elements = [];
            var skipped = 0, processed = 0;
            var queryTransaction = this.db.transaction([storeName], "readonly");
            //this._track_transaction(queryTransaction);

            var idAttribute = _.result(collection.model.prototype, 'idAttribute');
            var readCursor = null;
            var store = queryTransaction.objectStore(storeName);
            var index = null,
                lower = null,
                upper = null,
                bounds = null,
                key;

            if (options.conditions) {
                // We have a condition, we need to use it for the cursor
                _.each(store.indexNames, function (key) {
                    if (!readCursor) {
                        index = store.index(key);
                        if (options.conditions[index.keyPath] instanceof Array) {
                            lower = options.conditions[index.keyPath][0] > options.conditions[index.keyPath][1] ? options.conditions[index.keyPath][1] : options.conditions[index.keyPath][0];
                            upper = options.conditions[index.keyPath][0] > options.conditions[index.keyPath][1] ? options.conditions[index.keyPath][0] : options.conditions[index.keyPath][1];
                            bounds = IDBKeyRange.bound(lower, upper, true, true);

                            if (options.conditions[index.keyPath][0] > options.conditions[index.keyPath][1]) {
                                // Looks like we want the DESC order
                                readCursor = index.openCursor(bounds, window.IDBCursor.PREV || "prev");
                            } else {
                                // We want ASC order
                                readCursor = index.openCursor(bounds, window.IDBCursor.NEXT || "next");
                            }
                        } else if (typeof options.conditions[index.keyPath] === 'object' && ('$gt' in options.conditions[index.keyPath] || '$gte' in options.conditions[index.keyPath])) {
                            if('$gt' in options.conditions[index.keyPath])
                                bounds = IDBKeyRange.lowerBound(options.conditions[index.keyPath]['$gt'], true);
                            else
                                bounds = IDBKeyRange.lowerBound(options.conditions[index.keyPath]['$gte']);
                            readCursor = index.openCursor(bounds, window.IDBCursor.NEXT || "next");
                        } else if (typeof options.conditions[index.keyPath] === 'object' && ('$lt' in options.conditions[index.keyPath] || '$lte' in options.conditions[index.keyPath])) {
                            if('$lt' in options.conditions[index.keyPath])
                                bounds = IDBKeyRange.upperBound(options.conditions[index.keyPath]['$lt'], true);
                            else
                                bounds = IDBKeyRange.upperBound(options.conditions[index.keyPath]['$lte']);
                            readCursor = index.openCursor(bounds, window.IDBCursor.NEXT || "next");
                        } else if (options.conditions[index.keyPath] != undefined) {
                            bounds = IDBKeyRange.only(options.conditions[index.keyPath]);
                            readCursor = index.openCursor(bounds);
                        }
                    }
                });
            } else {
                // No conditions, use the index
                if (options.range) {
                    lower = options.range[0] > options.range[1] ? options.range[1] : options.range[0];
                    upper = options.range[0] > options.range[1] ? options.range[0] : options.range[1];
                    bounds = IDBKeyRange.bound(lower, upper);
                    if (options.range[0] > options.range[1]) {
                        readCursor = store.openCursor(bounds, window.IDBCursor.PREV || "prev");
                    } else {
                        readCursor = store.openCursor(bounds, window.IDBCursor.NEXT || "next");
                    }
                } else if (options.sort && options.sort.index) {
                    if (options.sort.order === -1) {
                        readCursor = store.index(options.sort.index).openCursor(null, window.IDBCursor.PREV || "prev");
                    } else {
                        readCursor = store.index(options.sort.index).openCursor(null, window.IDBCursor.NEXT || "next");
                    }
                } else {
                    readCursor = store.openCursor();
                }
            }

            if (typeof (readCursor) == "undefined" || !readCursor) {
                options.error("No Cursor");
            } else {
                readCursor.onerror = function(e){
                    options.error("readCursor error", e);
                };
                // Setup a handler for the cursor’s `success` event:
                readCursor.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (!cursor) {
                        if (options.addIndividually || options.clear) {
                            options.success(elements, true);
                        } else {
                            options.success(elements); // We're done. No more elements.
                        }
                    }
                    else {
                        // Cursor is not over yet.
                        if (options.abort || (options.limit && processed >= options.limit)) {
                            // Yet, we have processed enough elements. So, let's just skip.
                            if (bounds && options.conditions[index.keyPath]) {
                                cursor["continue"](options.conditions[index.keyPath][1] + 1); /* We need to 'terminate' the cursor cleany, by moving to the end */
                            } else {
                                cursor["continue"](); /* We need to 'terminate' the cursor cleany, by moving to the end */
                            }
                        }
                        else if (options.offset && options.offset > skipped) {
                            skipped++;
                            cursor["continue"](); /* We need to Moving the cursor forward */
                        } else {
                            // This time, it looks like it's good!
                            if (!options.filter || typeof options.filter !== 'function' || options.filter(cursor.value)) {
                                if (options.addIndividually) {
                                    collection.add(cursor.value);
                                } else if (options.clear) {
                                    var deleteRequest = store['delete'](cursor.value[idAttribute]);
                                    deleteRequest.onsuccess = deleteRequest.onerror = function (event) {
                                        elements.push(cursor.value);
                                    };

                                } else {
                                    elements.push(cursor.value);
                                }
                            }
                            processed++;
                            cursor["continue"]();
                        }
                    }
                };
            }
        },
        close :function(){
            if(this.db){
                this.db.close();
            }
        }
    };

    // ExecutionQueue object
    // The execution queue is an abstraction to buffer up requests to the database.
    // It holds a "driver". When the driver is ready, it just fires up the queue and executes in sync.
    function ExecutionQueue(schema,next,nolog) {
        this.driver     = new Driver(schema, this.ready.bind(this), nolog, this.error.bind(this));
        this.started    = false;
        this.failed     = false;
        this.stack      = [];
        this.version    = _.last(schema.migrations).version;
        this.next       = next;
    }

    // ExecutionQueue Prototype
    ExecutionQueue.prototype = {
        // Called when the driver is ready
        // It just loops over the elements in the queue and executes them.
        ready: function () {
            this.started = true;
            _.each(this.stack, this.execute, this);
            this.stack = []; // fix memory leak
            this.next();
        },

        error: function() {
            this.failed = true;
            _.each(this.stack, this.execute, this);
            this.stack = [];
            this.next();
        },

        // Executes a given command on the driver. If not started, just stacks up one more element.
        execute: function (message) {
            if (this.started) {
                this.driver.execute(message[2].storeName || message[1].storeName, message[0], message[1], message[2]); // Upon messages, we execute the query
            } else if (this.failed) {
                message[2].error();
            } else {
                this.stack.push(message);
            }
        },

        close : function(){
            this.driver.close();
        }
    };

    // Method used by Backbone for sync of data with data store. It was initially designed to work with "server side" APIs, This wrapper makes
    // it work with the local indexedDB stuff. It uses the schema attribute provided by the object.
    // The wrapper keeps an active Executuon Queue for each "schema", and executes querues agains it, based on the object type (collection or
    // single model), but also the method... etc.
    // Keeps track of the connections
    var Databases = {};

    function sync(method, object, options) {

        if(method == "closeall"){
            _.invoke(Databases, "close");
            // Clean up active databases object.
            Databases = {};
            return Deferred && Deferred().resolve();
        }

        // If a model or a collection does not define a database, fall back on ajaxSync
        if (!object || !_.isObject(object.database)) {
            return Backbone.ajaxSync(method, object, options);
        }

        var schema = object.database;
        if (Databases[schema.id]) {
            if(Databases[schema.id].version != _.last(schema.migrations).version){
                Databases[schema.id].close();
                delete Databases[schema.id];
            }
        }

        var dfd, promise;
        if (Deferred) {
            dfd = Deferred();
            promise = dfd.promise();
            promise.abort = function () {
                options.abort = true;
            };
        }

        var success = options.success;
        options.success = function(resp, silenced) {
            if (!silenced) {
                if (success) success(resp);
                object.trigger('sync', object, resp, options);
            }
            if (dfd) {
                if (!options.abort) {
                    dfd.resolve(resp);
                } else {
                    dfd.reject();
                }
            }
        };

        var error = options.error;
        options.error = function(resp) {
            if (error) error(resp);
            if (dfd) dfd.reject(resp);
            object.trigger('error', object, resp, options);
        };

        var next = function(){
            Databases[schema.id].execute([method, object, options]);
        };

        if (!Databases[schema.id]) {
            Databases[schema.id] = new ExecutionQueue(schema,next,schema.nolog);
        } else {
            next();
        }

        return promise;
    };

    Backbone.ajaxSync = Backbone.sync;
    Backbone.sync = sync;

    return { sync: sync, debugLog: debugLog};
}));

define("templates/about.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="card">\n	<h1>Styrkur</h1>\n	<em>v ' +
((__t = ( version )) == null ? '' : __t) +
'</em>\n	<p>' +
((__t = ( t('about.text') )) == null ? '' : __t) +
'</p>\n	<div class="container-padding">\n		<a class="btn btn-link" href="http://www.styrkurapp.com" target="_blank">' +
((__t = ( t('about.site') )) == null ? '' : __t) +
'</a>\n		<a class="btn btn-link" href="#/about/license">' +
((__t = ( t('about.thirdparty') )) == null ? '' : __t) +
'</a></li>\n	</div>\n</div>\n\n<div class="settings-wrapper card">\n	<h3>' +
((__t = ( t('settings.title') )) == null ? '' : __t) +
'</h3>\n</div>';

}
return __p
}});
define("templates/create/exercise-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="select-edit-toggle muscle-select">\n	<label>' +
((__t = ( t('workout.musclegroup') )) == null ? '' : __t) +
'</label>\n	<div class="select-edit-list sidebyside">\n		<div>\n			<select class="form-control" name="muscleid">\n					<option value="">' +
((__t = ( t('workout.musclegroup') )) == null ? '' : __t) +
'</option>\n				';
 parent.muscles.each(function(muscle){ ;
__p += '\n					<option value="' +
((__t = ( muscle.get('id') )) == null ? '' : __t) +
'">' +
((__t = ( muscle.get('name') )) == null ? '' : __t) +
'</option>\n				';
});;
__p += '\n			</select>\n		</div>\n		<div>\n			<button class="btn btn-default muscle-select-toggle icon icon-pen"></button>\n		</div>\n	</div>\n	<div class="select-edit-input sidebyside">\n		<div>\n			<input type="text" name="muscle" placeholder="Muscle" class="form-control">\n		</div>\n		<div>\n			<button class="btn btn-default muscle-select-toggle icon icon-list"></button>\n		</div>\n	</div>\n</div>\n<div class="movement-select">\n</div>\n<div>\n	<label>' +
((__t = ( t('workouttype.type') )) == null ? '' : __t) +
'</label>\n	<select name="type" class="form-control">\n		<option value="weightrep">' +
((__t = ( t('workouttype.weightrep') )) == null ? '' : __t) +
'</option>\n		<option value="weight">' +
((__t = ( t('workouttype.weightrep') )) == null ? '' : __t) +
'</option>\n		<option value="reps">' +
((__t = ( t('workouttype.reps') )) == null ? '' : __t) +
'</option>\n		<option value="distance">' +
((__t = ( t('workouttype.distance') )) == null ? '' : __t) +
'</option>\n		<option value="time">' +
((__t = ( t('workouttype.time') )) == null ? '' : __t) +
'</option>\n		<option value="beats">' +
((__t = ( t('workouttype.beats') )) == null ? '' : __t) +
'</option>\n	</select>\n</div>\n<div>\n	<label>' +
((__t = ( t('workout.setsandpause') )) == null ? '' : __t) +
'</label>\n	<div class="split-td">\n		<div class="split-td-inner">\n			<div class="input-group">\n			  <span class="input-group-addon"><i class="icon icon-reload"></i></span>\n			  <input type="number" name="sets" placeholder="Sets" class="form-control">\n			</div>\n		</div>\n		<div class="split-td-inner">\n			<div class="input-group">\n			  <span class="input-group-addon"><i class="icon icon-stopwatch"></i></span>\n			  <input type="number" name="pause" placeholder="Seconds of rest" class="form-control">\n			  <span class="input-group-addon">' +
((__t = ( t('shared.sek') )) == null ? '' : __t) +
'</span>\n			</div>\n		</div>\n	</div>\n</div>\n<div>\n	<label>' +
((__t = ( t('shared.enabled') )) == null ? '' : __t) +
'</label>\n	<label class="checkbox-label">\n		<input type="checkbox" name="enabled">\n		<i class="icon icon-check"></i>\n	</label>\n</div>';

}
return __p
}});
define("templates/create/exercises.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n\n	<div class="dropdown right-side">\n		<button class="btn btn-transparent dropdown-toggle" type="button">\n			<i class="icon icon-settings"></i>\n		</button>\n		<ul class="dropdown-menu" role="menu">\n			<li class="btn-toggle-disabled">' +
((__t = ( t('shared.toggledisabled') )) == null ? '' : __t) +
'</li>\n			<li class="btn-add-exercise">' +
((__t = ( t('create.addexercise') )) == null ? '' : __t) +
'</li>\n		</ul>\n	</div>\n\n	<h2>' +
((__t = ( title )) == null ? '' : __t) +
'</h2>\n	<em>' +
((__t = ( wotitle )) == null ? '' : __t) +
'</em>\n</div>\n\n<div class="exercise-list">\n</div>\n<div class="card">\n	<button class="btn btn-light btn-full-width btn-add-exercise">+</button>\n	<div class="wizard-buttons">\n		<button class="btn btn-primary btn-save">' +
((__t = ( t('shared.save') )) == null ? '' : __t) +
'</button>\n	    <button class="btn btn-default btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n	</div>\n</div>';

}
return __p
}});
define("templates/create/movement.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="select-edit-toggle">\n	<label>' +
((__t = ( t('create.exercise') )) == null ? '' : __t) +
'</label>\n	<div class="select-edit-list sidebyside">\n		<div>\n			<select class="form-control" name="movementid">\n				<option value="">' +
((__t = ( t('create.selectormake') )) == null ? '' : __t) +
'</option>\n				';
 _.each(movements, function(movement){ ;
__p += '\n					<option value="' +
((__t = ( movement.get('id') )) == null ? '' : __t) +
'">' +
((__t = ( movement.get('name') )) == null ? '' : __t) +
'</option>\n				';
});;
__p += '\n			</select>\n		</div>\n		<div>\n			<button class="btn btn-default movement-select-toggle icon icon-pen"></button>\n		</div>\n	</div>\n	<div class="select-edit-input sidebyside">\n		<div>\n			<input type="text" name="exercise" placeholder="' +
((__t = ( t('create.exercise') )) == null ? '' : __t) +
'" class="form-control">\n		</div>\n		<div>\n			<button class="btn btn-default movement-select-toggle icon icon-list"></button>\n		</div>\n	</div>\n</div>';

}
return __p
}});
define("templates/create/session-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="form-group">\n    <label>' +
((__t = ( t('create.sessionname') )) == null ? '' : __t) +
'</label>\n    <input type="text" class="form-control" name="sessionName" placeholder="' +
((__t = ( t('shared.name') )) == null ? '' : __t) +
'">\n</div>\n\n<div class="form-group">\n    <label>' +
((__t = ( t('shared.description') )) == null ? '' : __t) +
'</label>\n    <textarea class="form-control" name="description"></textarea>\n</div>\n<div class="form-group">\n    <div class="input-group">\n        <span class="input-group-addon"><i class="icon icon-clock"></i></span>\n        <input type="number" name="estTime" placeholder="' +
((__t = ( t('create.estmin') )) == null ? '' : __t) +
'" class="form-control">\n        <span class="input-group-addon">' +
((__t = ( t('shared.min') )) == null ? '' : __t) +
'</span>\n    </div>\n</div>\n<div class="form-group clearfix">\n    <button class="btn btn-default pull-right btn-exercises">' +
((__t = ( t('create.exercises') )) == null ? '' : __t) +
'</button>\n    <label>' +
((__t = ( t('shared.enabled') )) == null ? '' : __t) +
'</label>\n    <label class="checkbox-label">\n        <input type="checkbox" name="enabled">\n        <i class="icon icon-check"></i>\n    </label>\n</div>';

}
return __p
}});
define("templates/create/session.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n	<div class="dropdown right-side">\n		<button class="btn btn-transparent dropdown-toggle" type="button">\n			<i class="icon icon-settings"></i>\n		</button>\n		<ul class="dropdown-menu" role="menu">\n			<li class="btn-toggle-disabled">' +
((__t = ( t('shared.toggledisabled') )) == null ? '' : __t) +
'</li>\n			<li class="btn-add-session">' +
((__t = ( t('create.addsession') )) == null ? '' : __t) +
'</li>\n		</ul>\n	</div>\n\n	<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n</div>\n\n<div class="form-group card">\n	<label>' +
((__t = ( t('shared.description') )) == null ? '' : __t) +
'</label>\n	<textarea class="form-control" name="sessiondesc"></textarea>\n</div>\n\n<div class="sessions-list">\n</div>\n\n<div class="wizard-buttons card">\n	<button class="btn btn-light btn-full-width btn-add-session">+</button>\n\n	<div>\n		<button class="btn btn-primary btn-save">' +
((__t = ( t('shared.save') )) == null ? '' : __t) +
'</button>\n	    <button class="btn btn-default btn-back">' +
((__t = ( t('shared.close') )) == null ? '' : __t) +
'</button>\n	</div>\n</div>';

}
return __p
}});
define("templates/create/wizard.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<h1>' +
((__t = ( name )) == null ? '' : __t) +
'</h1>\n\n<button class="btn btn-default btn-toggle-disabled">Show disabled</button>\n\n<div class="wizard-container">\n\n</div>\n\n<div class="wizard-buttons">\n	<button class="btn btn-primary btn-save">Save</button>\n    <a class="btn btn-default" href="#/plan">Back to plans</a>\n</div>';

}
return __p
}});
define("templates/create/workout.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="form-group">\n    <label for="txtname">' +
((__t = ( t('shared.name') )) == null ? '' : __t) +
'</label>\n    <input type="text" id="txtname" placeholder="' +
((__t = ( t('shared.name') )) == null ? '' : __t) +
'" name="name" class="form-control" >\n</div>\n<div class="form-group">\n    <button class="btn btn-primary btn-create">' +
((__t = ( t('shared.next') )) == null ? '' : __t) +
'</button>\n    <a class="btn btn-link" href="#/plan">' +
((__t = ( t('shared.cancel') )) == null ? '' : __t) +
'</a>\n</div>\n';

}
return __p
}});
define("templates/dashboard.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="chart-lastweeks">\n	<h3>' +
((__t = ( t('dashboard.lastweek', {count: 12}) )) == null ? '' : __t) +
'</h3>\n</div>';

}
return __p
}});
define("templates/exercise-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="set-heading">\n	<h3 class="heading">' +
((__t = ( name )) == null ? '' : __t) +
' (' +
((__t = ( muscle )) == null ? '' : __t) +
')</h3>\n	';
if(description){;
__p += '\n	<p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n	';
};
__p += '\n</div>\n<div class="sets-list">\n</div>\n<div class="clearfix">\n	<button class="pull-right btn btn-default btn-add-set">' +
((__t = ( t('create.addset') )) == null ? '' : __t) +
'</button>\n</div>\n';

}
return __p
}});
define("templates/exercises.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n	';
 if(description) { ;
__p += '\n	<p class="description">\n		<i class="icon icon-pen"></i>\n		' +
((__t = ( description )) == null ? '' : __t) +
'\n	</p>\n	';
 } ;
__p += '\n</div>\n<div class="exercise-list">\n</div>\n\n<div class="card">\n	<label>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</label>\n	<textarea name="comment" class="form-control"></textarea>\n\n	<div class="container-padding">\n		<button class="btn btn-primary btn-save">' +
((__t = ( t('shared.complete') )) == null ? '' : __t) +
'</button>\n		<a class="btn btn-link" href="#/workout/">' +
((__t = ( t('shared.close') )) == null ? '' : __t) +
'</a>\n	</div>\n</div>\n\n<div class="welldone-box">\n	<i class="icon icon-check"></i>\n	<h1>' +
((__t = ( t('workout.goodjob') )) == null ? '' : __t) +
'</h1>\n	<h2>' +
((__t = ( t('workout.youlifted') )) == null ? '' : __t) +
' <span class="weight-lifted"></span></h2>\n</div>';

}
return __p
}});
define("templates/freerun/freerun-history-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<td>' +
((__t = ( formatedDate )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( comment )) == null ? '' : __t) +
'</td>';

}
return __p
}});
define("templates/freerun/freerun-history-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( t('workout.freerun') )) == null ? '' : __t) +
'</h2>\n</div>\n<div class="card card-outer">\n	<table class="table">\n		<thead>\n			<tr>\n				<th>' +
((__t = ( t('shared.date') )) == null ? '' : __t) +
'</th>\n				<th>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</th>\n			</tr>\n		</thead>\n		<tbody></tbody>\n	</table>\n</div>\n<div class="card">\n	<button class="btn btn-primary btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/freerun/freerun-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="set-heading container-padding">\n	<div>\n		<select class="form-control" name="muscle">\n			<option value="">' +
((__t = ( t('workout.muscle') )) == null ? '' : __t) +
'</option>\n			';
 parent.muscles.each(function(muscle){ ;
__p += '\n				<option value="' +
((__t = ( muscle.get('id') )) == null ? '' : __t) +
'">' +
((__t = ( muscle.get('name') )) == null ? '' : __t) +
'</option>\n			';
});;
__p += '\n		</select>\n	</div>\n	<div>\n		<select class="form-control" name="movement">\n			<option value="">' +
((__t = ( t('workout.movement') )) == null ? '' : __t) +
'</option>\n		</select>\n	</div>\n</div>\n<div class="sets-list container-padding">\n	<div class="sets-item form-group">\n		<input name="reps" placeholder="Reps" min="0" type="number" class="form-control">\n		<input name="weight" placeholder="Weight (' +
((__t = ( units.weight )) == null ? '' : __t) +
')" min="0" type="number" class="form-control">\n	</div>\n</div>\n<div class="clearfix form-group">\n	<button class="pull-right btn btn-default btn-add-set">' +
((__t = ( t('workout.addset') )) == null ? '' : __t) +
'</button>\n</div>\n';

}
return __p
}});
define("templates/freerun/freerun.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( t('workout.freerun') )) == null ? '' : __t) +
'</h2>\n</div>\n<div class="exercise-list">\n</div>\n\n<div class="card">\n	<button class="btn btn-light btn-full-width btn-add-exercise">+</button>\n\n	<label>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</label>\n	<textarea name="comment" class="form-control"></textarea>\n\n	<div class="container-padding">\n		<button class="btn btn-primary btn-save">' +
((__t = ( t('shared.complete') )) == null ? '' : __t) +
'</button>\n		<a class="btn btn-link" href="#/workout/">' +
((__t = ( t('shared.close') )) == null ? '' : __t) +
'</a>\n	</div>\n</div>\n\n<div class="welldone-box">\n	<i class="icon icon-check"></i>\n	<h1>' +
((__t = ( t('workout.goodjob') )) == null ? '' : __t) +
'</h1>\n	<h2>' +
((__t = ( t('workout.youlifted') )) == null ? '' : __t) +
' <span class="weight-lifted"></span></h2>\n</div>';

}
return __p
}});
define("templates/freerun/history-session-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>' +
((__t = ( movementname )) == null ? '' : __t) +
'</h3>\n<em>' +
((__t = ( musclename )) == null ? '' : __t) +
'</em>\n<p>\n	';
 _.each(sets, function(set){ ;
__p += '\n		<span class="set">\n			<span class="reps">' +
((__t = ( set.reps )) == null ? '' : __t) +
'</span> x <span class="weight">' +
((__t = ( set.weight )) == null ? '' : __t) +
'' +
((__t = ( units.weight )) == null ? '' : __t) +
'</span>\n		</span>\n	';
 }) ;
__p += '\n</p>';

}
return __p
}});
define("templates/freerun/history-session.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( t('workout.freerun') )) == null ? '' : __t) +
'</h2>\n	<p class="date">\n		<i class="icon icon-calendar"></i>\n		' +
((__t = (formatedDate)) == null ? '' : __t) +
'\n	</p>\n	';
 if(comment) { ;
__p += '\n	<p class="comment">\n		<i class="icon icon-message"></i>\n		' +
((__t = ( comment )) == null ? '' : __t) +
'\n	</p>\n	';
};
__p += '\n</div>\n\n<div class="exercise-history-list">\n</div>\n<div class="card">\n	<button class="btn btn-primary btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/history/exercise-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>' +
((__t = ( exercise.name )) == null ? '' : __t) +
'</h3>\n<em>' +
((__t = ( exercise.muscle )) == null ? '' : __t) +
'</em>\n<p>\n	';
 switch(exercise.type){
	case 'weightrep':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			<span class="reps">' +
((__t = ( set.reps )) == null ? '' : __t) +
'</span> x <span class="weight">' +
((__t = ( set.weight )) == null ? '' : __t) +
'' +
((__t = ( units.weight )) == null ? '' : __t) +
'</span>\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	case 'reps':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			' +
((__t = ( set.reps )) == null ? '' : __t) +
' reps\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	case 'weight':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			' +
((__t = ( set.weight )) == null ? '' : __t) +
' ' +
((__t = ( units.weight )) == null ? '' : __t) +
'\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	case 'time':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			' +
((__t = ( set.time )) == null ? '' : __t) +
' ' +
((__t = ( units.time )) == null ? '' : __t) +
'\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	case 'beats':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			' +
((__t = ( set.beats )) == null ? '' : __t) +
' ' +
((__t = ( units.beats )) == null ? '' : __t) +
'\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	case 'distance':
		_.each(instance.sets, function(set){ ;
__p += '\n		<span class="set">\n			' +
((__t = ( set.distance )) == null ? '' : __t) +
' ' +
((__t = ( units.farLength )) == null ? '' : __t) +
'\n			';
if(set.comment){;
__p += '<span class="set-comment"><i class="icon icon-message"></i> ' +
((__t = ( set.comment )) == null ? '' : __t) +
'</span>';
};
__p += '\n		</span>\n	';
	});
		break;
	} ;
__p += '\n</p>\n';
if(instance.comment){;
__p += '\n<p>\n	' +
((__t = ( instance.comment )) == null ? '' : __t) +
'\n</p>\n';
};


}
return __p
}});
define("templates/history/exercises-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( session.name )) == null ? '' : __t) +
'</h2>\n	<p class="date">\n		<i class="icon icon-calendar"></i>\n		' +
((__t = (formatedDate)) == null ? '' : __t) +
'\n	</p>\n	';
 if(session.description) { ;
__p += '\n	<p class="description">\n		<i class="icon icon-pen"></i>\n		' +
((__t = ( session.description )) == null ? '' : __t) +
'\n	</p>\n	';
 } ;
__p += '\n	';
 if(comment) { ;
__p += '\n	<p class="comment">\n		<i class="icon icon-message"></i>\n		' +
((__t = ( comment )) == null ? '' : __t) +
'\n	</p>\n	';
};
__p += '\n</div>\n\n<div class="exercise-history-list">\n</div>\n<div class="card">\n	<button class="btn btn-primary btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/history/graph-sessions-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<h3>' +
((__t = (exercise)) == null ? '' : __t) +
' (' +
((__t = (muscle)) == null ? '' : __t) +
')</h3>\n<div class="ct-chart"></div>';

}
return __p
}});
define("templates/history/graph-sessions.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n\n	<a href="#/history/session/' +
((__t = (id)) == null ? '' : __t) +
'" class="btn btn-transparent pull-right"><i class="icon icon-list"></i></a>\n\n	<h2>' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n	';
 if(description) { ;
__p += '\n	<p class="description">\n		<i class="icon icon-pen"></i>' +
((__t = ( description )) == null ? '' : __t) +
'\n	</p>\n	';
 } ;
__p += '\n</div>\n\n<div class="graphs">\n</div>\n\n<div class="card">\n	<button class="btn btn-default btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/history/session-list-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<td>' +
((__t = ( formatedDate )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( comment )) == null ? '' : __t) +
'</td>';

}
return __p
}});
define("templates/history/session-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n\n	<a href="#/history/graph/' +
((__t = (id)) == null ? '' : __t) +
'" class="btn btn-transparent pull-right"><i class="icon icon-chart"></i></a>\n\n	<h2>' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n	';
 if(description) { ;
__p += '\n	<p class="description">\n		<i class="icon icon-pen"></i>' +
((__t = ( description )) == null ? '' : __t) +
'\n	</p>\n	';
 } ;
__p += '\n</div>\n\n<div class="card card-outer">\n	<table class="table">\n		<thead>\n			<tr>\n				<th>' +
((__t = ( t('shared.date') )) == null ? '' : __t) +
'</th>\n				<th>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</th>\n			</tr>\n		</thead>\n		<tbody></tbody>\n	</table>\n</div>\n<div class="card">\n	<button class="btn btn-primary btn-back">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/license.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="card">\n	<p>\n	' +
((__t = ( t('about.thanks') )) == null ? '' : __t) +
'\n	</p>\n\n	<h2>RequireJS</h2>\n	<ul>\n		<li>v 2.1.4</li>\n		<li>Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.</li>\n	 	<li>Available via the MIT or new BSD license.</li>\n	 	<li>http://github.com/jrburke/requirejs</li>\n	 </ul>\n\n	<h2>Backbone.js</h2>\n	<ul>\n		<li>v 1.1.2</li>\n		<li>(c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors</li>\n		<li>Backbone may be freely distributed under the MIT license.</li>\n		<li>http://backbonejs.org</li>\n	</ul>\n\n	<h2>backbone.stickit</h2>\n	<ul>\n		<li>v 0.7.0</li>\n		<li>Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo</li>\n		<li>The MIT License</li>\n		<li>http://nytimes.github.io/backbone.stickit/</li>\n	</ul>\n\n	<h2>Backbone.Wreqr</h2>\n	<ul>\n		<li>(Backbone.Marionette)</li>\n		<li>v 1.1.0</li>\n		<li>Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.</li>\n		<li>Distributed under MIT license</li>\n		<li>http://github.com/marionettejs/backbone.wreqr</li>\n	</ul>\n\n	<h2>Chartist.js</h2>\n	<ul>\n		<li>v 0.7.3</li>\n		<li>Copyright © 2015 Gion Kunz</li>\n		<li>Free to use under the WTFPL license.</li>\n		<li>http://www.wtfpl.net/</li>\n	</ul>\n\n	<h2>Cordova</h2>\n	<ul>\n		<li>Apache License Version 2.0</li>\n		<li>http://cordova.apache.org/</li>\n	</ul>\n	 \n	<h2>jQuery JavaScript Library</h2>\n	<ul>\n		<li>v2.0.3</li>\n		<li>http://jquery.com/</li>\n		<li>Includes Sizzle.js</li>\n		<li>http://sizzlejs.com/</li>\n		<li>Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors</li>\n		<li>Released under the MIT license</li>\n		<li>http://jquery.org/license</li>\n	</ul>\n\n	<h2>moment.js</h2>\n	<ul>\n		<li>v 2.1.0</li>\n		<li>Author Tim Wood</li>\n		<li>Under the MIT license</li>\n		<li>momentjs.com</li>\n	</ul>\n\n	<h2>Toastr</h2>\n	<ul>\n		<li>Copyright 2012 John Papa and Hans Fjällemark.</li>\n		<li>All Rights Reserved.</li>\n		<li>Under the MIT license</li>\n		<li>http://www.opensource.org/licenses/mit-license.php</li>\n		<li>https://github.com/CodeSeven/toastr</li>\n	</ul>\n\n\n	<h2>Underscore.js</h2>\n	<ul>\n		<li>v 1.4.4</li>\n		<li>http://underscorejs.org</li>\n		<li>(c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.</li>\n		<li>Underscore may be freely distributed under the MIT license.</li>\n	<ul>\n</div>\n<div class="card">\n	<a class="btn btn-primary" href="#/about">' +
((__t = ( t('shared.close') )) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
}});
define("templates/measurements/bodypart-add.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( t('measure.addpart') )) == null ? '' : __t) +
'</h2>\n</div>\n\n<div class="card">\n	<div class="form-group">\n		<label>' +
((__t = ( t('shared.name') )) == null ? '' : __t) +
'</label>\n		<input type="text" name="name" class="form-control">\n	</div>\n	<div class="form-group">\n		<label>' +
((__t = ( t('shared.description') )) == null ? '' : __t) +
'</label>\n		<textarea name="description" class="form-control"></textarea>\n	</div>\n	<div class="form-group">\n		<label>' +
((__t = ( t('measure.unittype') )) == null ? '' : __t) +
'</label>\n		<select name="unittype" class="form-control">\n			<option value="weight">' +
((__t = ( t('measure.weight') )) == null ? '' : __t) +
'</option>\n			<option value="percent">' +
((__t = ( t('measure.percent') )) == null ? '' : __t) +
'</option>\n			<option value="shortLength">' +
((__t = ( t('measure.shortlen') )) == null ? '' : __t) +
'</option>\n			<option value="longLength">' +
((__t = ( t('measure.longlen') )) == null ? '' : __t) +
'</option>\n		</select>\n	</div>\n\n	<div class="clearfix">\n		<button class="btn btn-primary btn-save"><i class="icon icon-plus"></i> ' +
((__t = ( t('measure.add') )) == null ? '' : __t) +
'</button><a href="#/measurements/" class="btn btn-link">' +
((__t = ( t('shared.cancel') )) == null ? '' : __t) +
'</a>\n	</div>\n</div>';

}
return __p
}});
define("templates/measurements/measurements-add.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\n	<h2>' +
((__t = ( t('measure.title') )) == null ? '' : __t) +
'</h2>\n</div>\n<div class="measurement-items"></div>\n\n\n<div class="comment-field card">\n	<label>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</label>\n	<textarea class="form-control" name="comment" rows="3"></textarea>\n\n	<div class="container-padding">\n		<button class="btn btn-primary btn-save">' +
((__t = ( t('shared.save') )) == null ? '' : __t) +
'</button>\n		<a href="#/measurements" class="btn btn-link">' +
((__t = ( t('shared.cancel') )) == null ? '' : __t) +
'</a>\n	</div>\n</div>';

}
return __p
}});
define("templates/measurements/measurements-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h4>' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\n';
 if(description){ ;
__p += '\n<p><i class="icon icon-message"></i>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n';
};
__p += '\n';
 if(noData){ ;
__p += '\n	<p>' +
((__t = ( t('measure.minnotmet') )) == null ? '' : __t) +
'</p>\n	';
 if(lastOne){ ;
__p += '\n	<p>' +
((__t = ( t('measure.lastwas', { lastOne: lastOne, lastDate: lastDate }) )) == null ? '' : __t) +
'</p>\n	';
 } ;
__p += '\n';
} else {;
__p += '\n	<div class="ct-chart"></div>\n';
};


}
return __p
}});
define("templates/measurements/measurements.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n	<h1>' +
((__t = ( t('measure.title') )) == null ? '' : __t) +
'</h1>\n\n	<div class="clearfix">\n		<a href="#/measurements/add" class="btn btn-default pull-right"><i class="icon icon-plus"></i> ' +
((__t = ( t('measure.measure') )) == null ? '' : __t) +
'</a>\n		<a href="#/measurements/addpart" class="btn btn-default pull-right"><i class="icon icon-plus"></i> ' +
((__t = ( t('measure.addpart') )) == null ? '' : __t) +
'</a> \n	</div>\n</div>\n\n<!-- If there are no measurements.. -->\n';
 if(noData){ ;
__p += '\n<div class="card">\n	<p>' +
((__t = ( t('measure.nomeasure') )) == null ? '' : __t) +
'</p>\n\n	<div class="clearfix">\n		<a href="#/measurements/add" class="btn btn-primary pull-right"><i class="icon icon-plus"></i> ' +
((__t = ( t('measure.measure') )) == null ? '' : __t) +
'</a>\n	</div>\n</div>\n';
} else {;
__p += '\n<div class="measurement-items">\n</div>\n';
};


}
return __p
}});
define("templates/menu.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul>\r\n    <li><a href="#/" class="nav-home active">\r\n    	<i class="icon icon-home"></i>\r\n    	Home\r\n    </a></li>\r\n    <li><a href="#/workout/" class="nav-workout">\r\n    	<i class="icon icon-check"></i>\r\n    	Workout\r\n    </a></li>\r\n    <li><a href="#/plan/" class="nav-plan">\r\n    	<i class="icon icon-calendar"></i>\r\n    	Plan\r\n    </a></li>\r\n    <li><a href="#/measurements/" class="nav-measurements">\r\n    	<i class="icon icon-measure"></i>\r\n    	Measurements\r\n    </a></li>\r\n    <li><a href="#/settings/" class="nav-settings">\r\n    	<i class="icon icon-settings"></i>\r\n    	Settings\r\n    </a></li>\r\n    <li><a href="#/about/" class="nav-about">\r\n    	<i class="icon icon-label"></i>\r\n    	About\r\n    </a></li>\r\n</ul>\r\n';

}
return __p
}});
define("templates/menu/menu.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div>\n    <a class="nav-home active" href="#/">\n    	<i class="icon icon-home"></i>\n    </a><!--\n    --><a class="nav-workout" href="#/workout">\n    	<i class="icon icon-check"></i>\n    </a><!--\n    --><a class="nav-plan" href="#/plan">\n    	<i class="icon icon-calendar"></i>\n    </a><!--\n    --><a class="nav-measurements" href="#/measurements">\n    	<i class="icon icon-measure"></i>\n    </a><!--\n    --><a class="nav-settings" href="#/about">\n    	<i class="icon icon-settings"></i>\n    </a>\n</div>\n';

}
return __p
}});
define("templates/plan/plan.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="view-header">\r\n	<h1>' +
((__t = ( t('create.planner') )) == null ? '' : __t) +
'</h1>\r\n</div>\r\n\r\n<div class="workout-list">\r\n</div>\r\n\r\n<div class="card">\r\n    <a class="btn btn-primary pull-right" href="#/plan/list">' +
((__t = ( t('create.get') )) == null ? '' : __t) +
'</a>\r\n    <a class="btn btn-default" href="#/create/workout">' +
((__t = ( t('create.create') )) == null ? '' : __t) +
'</a>\r\n</div>\r\n';

}
return __p
}});
define("templates/plan/server-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<button class="btn btn-default icon icon-download get-item pull-right"> </button>\n<h3>' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n<p class="pre">' +
((__t = ( description )) == null ? '' : __t) +
'</p>';

}
return __p
}});
define("templates/plan/server-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="workout-table"></div>\n\n<div class="card">\n    <a class="btn btn-default" href="#/plan">' +
((__t = ( t('shared.back') )) == null ? '' : __t) +
'</a>\n</div>\n\n';

}
return __p
}});
define("templates/plan/workout-list-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a class="btn btn-default pull-right" href="#/create/wizard/' +
((__t = ( id )) == null ? '' : __t) +
'"><i class="icon icon-pen"></i> ' +
((__t = ( t('create.edit') )) == null ? '' : __t) +
'</a>\n<h3>' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n<p class="pre">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n<div>\n	';
 if(!currentWorkout || currentWorkout !== id){ ;
__p += '\n		<button class="btn btn-primary btn-use-item">' +
((__t = ( t('create.setcurr') )) == null ? '' : __t) +
'</button>\n	';
 } else { ;
__p += '\n		' +
((__t = ( t('create.current') )) == null ? '' : __t) +
'\n	';
 } ;
__p += '\n</div>';

}
return __p
}});
define("templates/plan/workout-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="workout-list-items"></div>';

}
return __p
}});
define("templates/session-list-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="session-list-content">\n<h3>' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n';
 if(description !== 0) { ;
__p += '\n	<p>\n		' +
((__t = ( description )) == null ? '' : __t) +
'\n	</p>\n';
 } ;
__p += '\n<p>\n	';
 if(count !== 0) { ;
__p += '\n		' +
((__t = ( last )) == null ? '' : __t) +
'\n	';
 } ;
__p += '\n</p>\n</div>\n';
 if(count !== 0) { ;
__p += '\n<div class="session-list-log">\n	<i class="icon icon-list"></i> ' +
((__t = ( t('workout.log') )) == null ? '' : __t) +
'\n</div>\n';
 } ;


}
return __p
}});
define("templates/session-list.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '';

}
return __p
}});
define("templates/set-item.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h4>' +
((__t = ( t('workout.set') )) == null ? '' : __t) +
' ' +
((__t = (index)) == null ? '' : __t) +
'</h4>\n<div class="form-group type-reps">\n	<label>' +
((__t = ( t('workouttype.reps') )) == null ? '' : __t) +
'</label><input type="number" value="" class="form-control input-reps" placeholder="' +
((__t = ( lastReps )) == null ? '' : __t) +
'">\n	<button class="btn btn-default add-reps"><i class="icon icon-plus"></i></button>\n	<button class="btn btn-default subtract-reps"><i class="icon icon-minus"></i></button>\n</div>\n<div class="form-group type-weight">\n	<label>' +
((__t = ( t('workouttype.weight') )) == null ? '' : __t) +
' (' +
((__t = ( units.weight )) == null ? '' : __t) +
')</label><input type="number" value="" class="form-control input-weight" placeholder="' +
((__t = ( lastWeight )) == null ? '' : __t) +
'">\n	<button class="btn btn-default add-weight"><i class="icon icon-plus"></i></button>\n	<button class="btn btn-default subtract-weight"><i class="icon icon-minus"></i></button>\n</div>\n<div class="form-group type-beats">\n	<label>' +
((__t = ( t('workouttype.beats') )) == null ? '' : __t) +
' (' +
((__t = ( units.beats )) == null ? '' : __t) +
')</label><input type="number" value="" class="form-control input-beats" placeholder="' +
((__t = ( lastBeat )) == null ? '' : __t) +
'">\n</div>\n<div class="form-group type-distance">\n	<label>' +
((__t = ( t('workouttype.distance') )) == null ? '' : __t) +
' (' +
((__t = ( units.farLength )) == null ? '' : __t) +
')</label><input type="number" value="" class="form-control input-distance" placeholder="' +
((__t = ( lastDistance )) == null ? '' : __t) +
'">\n</div>\n<div class="form-group type-time">\n	<label>' +
((__t = ( t('workouttype.time') )) == null ? '' : __t) +
' (' +
((__t = ( units.time )) == null ? '' : __t) +
')</label><input type="number" value="" class="form-control input-time" placeholder="' +
((__t = ( lastTime )) == null ? '' : __t) +
'">\n</div>\n<div class="form-group">\n	';
 if(pause && pause > 0){ ;
__p += '\n	<button class="btn btn-default btn-timer pull-right">\n		<i class="icon icon-stopwatch"></i>\n		<span class="timer"></span>\n	</button>\n	';
 } ;
__p += '\n	<button class="btn btn-default btn-comment">' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</button>\n</div>\n<div class="comment-box-modal">\n	<label>' +
((__t = ( t('shared.comment') )) == null ? '' : __t) +
'</label>\n	<textarea class="input-comment form-control"></textarea>\n</div>';

}
return __p
}});
define("templates/settings/settings.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n	<label>' +
((__t = ( t('gender.gender') )) == null ? '' : __t) +
'</label>\n	<select name="gender" class="form-control" required="required">\n		<option value="">' +
((__t = ( t('shared.select') )) == null ? '' : __t) +
'</option>\n		<option value="1">' +
((__t = ( t('gender.male') )) == null ? '' : __t) +
'</option>\n		<option value="2">' +
((__t = ( t('gender.female') )) == null ? '' : __t) +
'</option>\n	</select>\n</div>\n<div class="form-group">\n	<label>' +
((__t = ( t('settings.age') )) == null ? '' : __t) +
'</label>\n	<div class="input-group">\n		<input name="age" class="form-control" type="number">\n		<span class="input-group-addon">' +
((__t = ( t('settings.years') )) == null ? '' : __t) +
'</span>\n	</div>\n</div>\n<div class="form-group">\n	<label>' +
((__t = ( t('settings.goal') )) == null ? '' : __t) +
'</label>\n	<select name="goaltype" class="form-control" required="required">\n		<option value="">' +
((__t = ( t('shared.select') )) == null ? '' : __t) +
'</option>\n		<option value="1">' +
((__t = ( t('settings.buildmuscle') )) == null ? '' : __t) +
'</option>\n		<option value="2">' +
((__t = ( t('settings.looseweight') )) == null ? '' : __t) +
'</option>\n		<option value="3">' +
((__t = ( t('settings.gethealthy') )) == null ? '' : __t) +
'</option>\n	</select>\n</div>\n\n<div class="form-group tut-weight-goal">\n	<label>' +
((__t = ( t('settings.weightgoal') )) == null ? '' : __t) +
'</label>\n	<div class="input-group">\n		<input name="goal" class="form-control" type="number">\n		<span class="input-group-addon">kg/lbs</span>\n	</div>\n</div>\n<div class="form-group">\n	<label>' +
((__t = ( t('settings.unit') )) == null ? '' : __t) +
'</label>\n	<select name="units" class="form-control">\n		<option value="metric" ';
if(units ==='metric'){;
__p += 'selected';
};
__p += '>Metric</option>\n		<option value="imperial"';
if(units ==='imperial'){;
__p += 'selected';
};
__p += '>Imperial</option>\n	</select>\n</div>\n<div class="form-group">\n	<label>' +
((__t = ( t('settings.appcolor') )) == null ? '' : __t) +
'</label>\n	<select name="colorpalette" class="form-control" required="required">\n		<option value="blue">' +
((__t = ( t('settings.blue') )) == null ? '' : __t) +
'</option>\n		<option value="red">' +
((__t = ( t('settings.red') )) == null ? '' : __t) +
'</option>\n		<option value="orange">' +
((__t = ( t('settings.orange') )) == null ? '' : __t) +
'</option>\n		<option value="pantone">' +
((__t = ( t('settings.pantone') )) == null ? '' : __t) +
'</option>\n	</select>\n</div>\n<div class="form-group">\n  <label>' +
((__t = ( t('settings.language') )) == null ? '' : __t) +
'</label>\n  <select name="language" class="form-control" required="required">\n    ';
 _.each(languages, function(value, key){ ;
__p += '\n      <option value="' +
((__t = ( key )) == null ? '' : __t) +
'">' +
((__t = ( value )) == null ? '' : __t) +
'</option>\n    ';
 }) ;
__p += '\n  </select>\n</div>';

}
return __p
}});
define("templates/timer.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="timer-time">\n	<div class="spinner-wrapper">\n		<div class="spinner stopped"></div>\n		<h1>Not started</h1>\n	</div>\n</div>\n<div class="timer-controls">\n	<button class="btn btn-primary btn-toggle-timer">Start</button>\n	<button class="btn btn-danger btn-reset-timer">Reset</button>\n</div>';

}
return __p
}});
define("templates/topbar.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="navbar-header">\n    <button type="button" class="navbar-toggle">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n    </button>\n    <a class="navbar-brand" href="#">Fit Tracker</a>\n</div>\n';

}
return __p
}});
define("templates/tutorial/tutorial.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="tutorial-top">\n	<ul>\n		<li class="active">1</li>\n		<li>2</li>\n		<li>3</li>\n		<li>4</li>\n	</ul>\n</div>\n<section class="tut-welcome active">\n	<h1>Styrkur</h1>\n	<div class="padded-view">\n		<p>\n			<em>Welcome to Styrkur</em><br>\n			To get you started we will go through some simple\n			one time configuration so the app is set ut perfectly just for you!\n		</p>\n		<button class="btn btn-default pull-right btn-skip">Skip <i class="icon icon-cross_mark"></i></button>\n		<button class="btn btn-default btn-next">Next <i class="icon icon-chevron_right"></i></button>\n	</div>\n</section>\n<section class="tut-user">\n	<div class="padded-view">\n		<h2>User information</h2>\n		<input name="name" type="hidden" class="form-control" />\n		<div class="form-group">\n			<label>Gender</label>\n			<select name="gender" class="form-control" required="required">\n				<option value="">Select one</option>\n				<option value="1">Male</option>\n				<option value="2">Female</option>\n			</select>\n		</div>\n		<div class="form-group">\n			<label>Age</label>\n			<div class="input-group">\n				<input name="age" class="form-control" type="number">\n				<span class="input-group-addon">years</span>\n			</div>\n		</div>\n		<div class="form-group">\n			<label>Units of measure</label>\n			<select name="units" class="form-control">\n				<option value="metric">Metric</option>\n				<option value="imperial">Imperial</option>\n			</select>\n		</div>\n		<button class="btn btn-default btn-next">Next <i class="icon icon-chevron_right"></i></button>\n	</div>\n</section>\n<section class="tut-goals">\n	<div class="padded-view">\n		<h2>Your goals</h2>\n		<div class="form-group">\n			<label>I want to..</label>\n			<select name="goaltype" class="form-control" required="required">\n				<option value="">Select one</option>\n				<option value="1">Build muscles</option>\n				<option value="2">Loose weight</option>\n				<option value="3">Get healthier</option>\n			</select>\n		</div>\n		<div class="form-group tut-weight-goal">\n			<label>Do you have a weight goal?</label>\n			<div class="input-group">\n				<input name="goal" class="form-control" type="number">\n				<span class="input-group-addon">kg/lbs</span>\n			</div>\n		</div>\n		<button class="btn btn-default btn-next">Next <i class="icon icon-chevron_right"></i></button>\n	</div>\n</section>\n<section class="tut-done">\n	<div class="padded-view">\n		<h1>That is is!</h1>\n		<p>Have a great workout</p>\n		<button class="btn btn-primary btn-done">Lets Go!</button>\n	</div>\n</section>';

}
return __p
}});
define("templates/workout-wizard.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="wizard-container">\n</div>';

}
return __p
}});
define("templates/workout.html", function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="view-header">\n	';
 if(description){ ;
__p += '\n	<button class="btn btn-transparent pull-right toggle-description"><i class="icon icon-message"></i></button>\n	';
 } ;
__p += '\n	<h1>' +
((__t = ( name )) == null ? '' : __t) +
'</h1>\n	<div class="session-description pre" style="display: none;">' +
((__t = ( description )) == null ? '' : __t) +
'</div>\n</div>\n<div class="sessions-list-container">\n	<div class="sessions-list-content">\n	</div>\n\n	<div class="card card-outer">\n		<div class="session-list-content btn-freerun">\n			<h3>' +
((__t = ( t('workout.freerun') )) == null ? '' : __t) +
'</h3>\n			<p>\n        ' +
((__t = ( t('workout.freeruntext') )) == null ? '' : __t) +
'\n			</p>\n		</div>\n		<div class="session-list-log btn-freelog">\n			<i class="icon icon-list"></i> ' +
((__t = ( t('workout.log') )) == null ? '' : __t) +
'\n		</div>\n	</div>\n</div>\n';

}
return __p
}});
define("templates/templates", function(){});

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('chartist', [], function () {
      return (root['Chartist'] = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Chartist'] = factory();
  }
}(this, function () {

/* Chartist.js 0.7.3
 * Copyright © 2015 Gion Kunz
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.7.3'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    target = target || {};

    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      for (var prop in source) {
        if (typeof source[prop] === 'object' && !(source[prop] instanceof Array)) {
          target[prop] = Chartist.extend({}, target[prop], source[prop]);
        } else {
          target[prop] = source[prop];
        }
      }
    });

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a string to a number while removing the unit if present. If a number is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {String|Number} value
   * @return {Number} Returns the string as number or NaN if the passed length could not be converted to pixel
   */
  Chartist.stripUnit = function(value) {
    if(typeof value === 'string') {
      value = value.replace(/[^0-9\+-\.]/g, '');
    }

    return +value;
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + current;
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttribute(Chartist.xmlNs.qualifiedName);
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className).attr({
      style: 'width: ' + width + '; height: ' + height + ';'
    });

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };


  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} reverse If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function (data, reverse) {
    var array = [],
      value,
      localData;

    // If the data should be reversed but isn't we need to reverse it
    // If it's reversed but it shouldn't we need to reverse it back
    // That's required to handle data updates correctly and to reflect the responsive configurations
    if(reverse && !data.reversed || !reverse && data.reversed) {
      Chartist.reverseData(data);
      data.reversed = !data.reversed;
    }

    for (var i = 0; i < data.series.length; i++) {
      // If the series array contains an object with a data property we will use the property
      // otherwise the value directly (array or number).
      // We create a copy of the original data array with Array.prototype.push.apply
      localData = typeof(data.series[i]) === 'object' && data.series[i].data !== undefined ? data.series[i].data : data.series[i];
      if(localData instanceof Array) {
        array[i] = [];
        Array.prototype.push.apply(array[i], localData);
      } else {
        array[i] = localData;
      }

      // Convert object values to numbers
      for (var j = 0; j < array[i].length; j++) {
        value = array[i][j];
        value = value.value === 0 ? 0 : (value.value || value);
        array[i][j] = +value;
      }
    }

    return array;
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  /**
   * Adds missing values at the end of the array. This array contains the data, that will be visualized in the chart
   *
   * @memberof Chartist.Core
   * @param {Array} dataArray The array that contains the data to be visualized in the chart. The array in this parameter will be modified by function.
   * @param {Number} length The length of the x-axis data array.
   * @return {Array} The array that got updated with missing values.
   */
  Chartist.normalizeDataArray = function (dataArray, length) {
    for (var i = 0; i < dataArray.length; i++) {
      if (dataArray[i].length === length) {
        continue;
      }

      for (var j = dataArray[i].length; j < length; j++) {
        dataArray[i][j] = 0;
      }
    }

    return dataArray;
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? Chartist.serialize(value.meta) : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.stripUnit(options.height) || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} dataArray The array that contains the data to be visualized in the chart
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (dataArray) {
    var i,
      j,
      highLow = {
        high: -Number.MAX_VALUE,
        low: Number.MAX_VALUE
      };

    for (i = 0; i < dataArray.length; i++) {
      for (j = 0; j < dataArray[i].length; j++) {
        if (dataArray[i][j] > highLow.high) {
          highLow.high = dataArray[i][j];
        }

        if (dataArray[i][j] < highLow.low) {
          highLow.low = dataArray[i][j];
        }
      }
    }

    return highLow;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Number} referenceValue The reference value for the chart.
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, referenceValue) {
    var i,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if(bounds.high === bounds.low) {
      // If both values are 0 we set high to 1
      if(bounds.low === 0) {
        bounds.high = 1;
      } else if(bounds.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        bounds.high = 0;
      } else {
        // If we have the same positive value for the bounds we set bounds.low to 0
        bounds.low = 0;
      }
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (referenceValue || referenceValue === 0) {
      bounds.high = Math.max(referenceValue, bounds.high);
      bounds.low = Math.min(referenceValue, bounds.low);
    }

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.min = Math.floor(bounds.low / Math.pow(10, bounds.oom)) * Math.pow(10, bounds.oom);
    bounds.max = Math.ceil(bounds.high / Math.pow(10, bounds.oom)) * Math.pow(10, bounds.oom);
    bounds.range = bounds.max - bounds.min;
    bounds.step = Math.pow(10, bounds.oom);
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds),
      scaleUp = length < scaleMinSpace;

    while (true) {
      if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
        bounds.step *= 2;
      } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
        bounds.step /= 2;
      } else {
        break;
      }
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    for (i = bounds.min; i <= bounds.max; i += bounds.step) {
      if (i + bounds.step < bounds.low) {
        newMin += bounds.step;
      }

      if (i - bounds.step >= bounds.high) {
        newMax -= bounds.step;
      }
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    bounds.values = [];
    for (i = bounds.min; i <= bounds.max; i += bounds.step) {
      bounds.values.push(Chartist.roundWithPrecision(i));
    }

    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {Number} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var yOffset = options.axisY ? options.axisY.offset || 0 : 0,
      xOffset = options.axisX ? options.axisX.offset || 0 : 0,
      w = Chartist.stripUnit(options.width) || svg.width(),
      h = Chartist.stripUnit(options.height) || svg.height(),
      normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    return {
      x1: normalizedPadding.left + yOffset,
      y1: Math.max(h - normalizedPadding.bottom - xOffset, normalizedPadding.bottom),
      x2: Math.max(w - normalizedPadding.right, normalizedPadding.right + yOffset),
      y2: normalizedPadding.top,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param projectedValue
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(projectedValue, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = projectedValue.pos;
    positionalData[axis.units.pos + '2'] = projectedValue.pos;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis.units.pos,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param projectedValue
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(projectedValue, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement,
      positionalData = {};
    positionalData[axis.units.pos] = projectedValue.pos + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = projectedValue.len;
    positionalData[axis.counterUnits.len] = axisOffset;

    if(useForeignObject) {
      var content = '<span class="' + classes.join(' ') + '">' + labels[index] + '</span>';
      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * This function creates a whole axis with its grid lines and labels based on an axis model and a chartRect.
   *
   * @memberof Chartist.Core
   * @param axis
   * @param data
   * @param chartRect
   * @param gridGroup
   * @param labelGroup
   * @param useForeignObject
   * @param options
   * @param eventEmitter
   */
  Chartist.createAxis = function(axis, data, chartRect, gridGroup, labelGroup, useForeignObject, options, eventEmitter) {
    var axisOptions = options['axis' + axis.units.pos.toUpperCase()],
      projectedValues = data.map(axis.projectValue.bind(axis)).map(axis.transform),
      labelValues = data.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(!labelValues[index] && labelValues[index] !== 0) {
        return;
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, axis, axis.gridOffset, chartRect[axis.counterUnits.len](), gridGroup, [
          options.classNames.grid,
          options.classNames[axis.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, index, labelValues, axis, axisOptions.offset, axis.labelOffset, labelGroup, [
          options.classNames.label,
          options.classNames[axis.units.dir]
        ], useForeignObject, eventEmitter);
      }
    });
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(preventChangedEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && !preventChangedEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially so we get the correct options
    updateCurrentOptions(true);

    return {
      get currentOptions() {
        return Chartist.extend({}, currentOptions);
      },
      removeMediaQueryListeners: removeMediaQueryListeners
    };
  };

}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function() {
    return function cardinal(pathCoordinates) {
      var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1]);

      for(var i = 3; i < pathCoordinates.length; i += 2) {
        path.line(pathCoordinates[i - 1], pathCoordinates[i]);
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates) {
      var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1]);

      for(var i = 2; i < pathCoordinates.length; i += 2) {
        var prevX = pathCoordinates[i - 2],
            prevY = pathCoordinates[i - 1],
            currX = pathCoordinates[i],
            currY = pathCoordinates[i + 1],
            length = (currX - prevX) * d;

        path.curve(
          prevX + length,
          prevY,
          currX - length,
          currY,
          currX,
          currY
        );
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates) {
      // If less than two points we need to fallback to no smoothing
      if(pathCoordinates.length <= 4) {
        return Chartist.Interpolation.none()(pathCoordinates);
      }

      var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1]),
        z;

      for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
        var p = [
          {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
          {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
          {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
          {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
        ];
        if (z) {
          if (!i) {
            p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
          } else if (iLen - 4 === i) {
            p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
          } else if (iLen - 2 === i) {
            p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
          }
        } else {
          if (iLen - 4 === i) {
            p[3] = p[2];
          } else if (!i) {
            p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
          }
        }

        path.curve(
          (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
          (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
          (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
          (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
          p[2].x,
          p[2].y
        );
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data;
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.currentOptions);
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    window.removeEventListener('resize', this.resizeListener);
    this.optionsProvider.removeMediaQueryListeners();
    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.currentOptions);

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data;
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        if(this.container.__chartist__.initializeTimeoutId) {
          // If the initializeTimeoutId is still set we can safely assume that the initialization function has not
          // been called yet from the event loop. Therefore we should cancel the timeout and don't need to detach
          window.clearTimeout(this.container.__chartist__.initializeTimeoutId);
        } else {
          // The timeout reference has already been reset which means we need to detach the old chart first
          this.container.__chartist__.detach();
        }
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  var svgNs = 'http://www.w3.org/2000/svg',
    xmlNs = 'http://www.w3.org/2000/xmlns/',
    xhtmlNs = 'http://www.w3.org/1999/xhtml';

  Chartist.xmlNs = {
    qualifiedName: 'xmlns:ct',
    prefix: 'ct',
    uri: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|SVGElement} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof SVGElement) {
      this._node = name;
    } else {
      this._node = document.createElementNS(svgNs, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this._node.setAttributeNS(xmlNs, Chartist.xmlNs.qualifiedName, Chartist.xmlNs.uri);
      }

      if(attributes) {
        this.attr(attributes);
      }

      if(className) {
        this.addClass(className);
      }

      if(parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} ns If specified, the attributes will be set as namespace attributes with ns as prefix.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if(ns) {
        this._node.setAttributeNS(ns, [Chartist.xmlNs.prefix, ':', key].join(''), attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', xhtmlNs);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height with fallback to svg BoundingBox or parent container dimensions:
   * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.clientHeight || Math.round(this._node.getBBox().height) || this._node.parentNode.clientHeight;
  }

  /**
   * Get element width with fallback to svg BoundingBox or parent container dimensions:
   * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.clientWidth || Math.round(this._node.getBBox().width) || this._node.parentNode.clientWidth;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.stripUnit(animationDefinition.begin || 0);
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('www.http://w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative) {
    pathElements.splice(pos, 0, Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params));
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [position] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} relative If set to true the move element will be created with relative coordinates (lowercase letter)
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} relative If set to true the line element will be created with relative coordinates (lowercase letter)
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} relative If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @return {Chartist.Svg.Path}
   */
  function clone() {
    var c = new Chartist.Svg.Path(this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
}(window, document, Chartist));
;/**
 * Axis base class used to implement different axis types
 *
 * @module Chartist.Axis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, transform, labelOffset, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.transform = transform;
    this.labelOffset = labelOffset;
    this.options = options;
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The linear scale axis uses standard linear scale projection of values along an axis.
 *
 * @module Chartist.LinearScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function LinearScaleAxis(axisUnit, chartRect, transform, labelOffset, options) {
    Chartist.LinearScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      transform,
      labelOffset,
      options);

    this.bounds = Chartist.getBounds(this.axisLength, options.highLow, options.scaleMinSpace, options.referenceValue);
  }

  function projectValue(value) {
    return {
      pos: this.axisLength * (value - this.bounds.min) / (this.bounds.range + this.bounds.step),
      len: Chartist.projectLength(this.axisLength, this.bounds.step, this.bounds)
    };
  }

  Chartist.LinearScaleAxis = Chartist.Axis.extend({
    constructor: LinearScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * Step axis for step based charts like bar chart or step based line chart
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, chartRect, transform, labelOffset, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      transform,
      labelOffset,
      options);

    this.stepLength = this.axisLength / (options.stepCount - (options.stretch ? 1 : 0));
  }

  function projectValue(value, index) {
    return {
      pos: this.stepLength * index,
      len: this.stepLength
    };
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var seriesGroups = [],
      normalizedData = Chartist.normalizeDataArray(Chartist.getDataArray(this.data, options.reverseData), this.data.labels.length),
      normalizedPadding = Chartist.normalizePadding(options.chartPadding, defaultOptions.padding);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var highLow = Chartist.getHighLow(normalizedData);
    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var axisX = new Chartist.StepAxis(
      Chartist.Axis.units.x,
      chartRect,
      function xAxisTransform(projectedValue) {
        projectedValue.pos = chartRect.x1 + projectedValue.pos;
        return projectedValue;
      },
      {
        x: options.axisX.labelOffset.x,
        y: chartRect.y1 + options.axisX.labelOffset.y + (this.supportsForeignObject ? 5 : 20)
      },
      {
        stepCount: this.data.labels.length,
        stretch: options.fullWidth
      }
    );

    var axisY = new Chartist.LinearScaleAxis(
      Chartist.Axis.units.y,
      chartRect,
      function yAxisTransform(projectedValue) {
        projectedValue.pos = chartRect.y1 - projectedValue.pos;
        return projectedValue;
      },
      {
        x: normalizedPadding.left + options.axisY.labelOffset.x + (this.supportsForeignObject ? -10 : 0),
        y: options.axisY.labelOffset.y + (this.supportsForeignObject ? -15 : 0)
      },
      {
        highLow: highLow,
        scaleMinSpace: options.axisY.scaleMinSpace
      }
    );

    // Start drawing
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup),
      gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);

    Chartist.createAxis(
      axisX,
      this.data.labels,
      chartRect,
      gridGroup,
      labelGroup,
      this.supportsForeignObject,
      options,
      this.eventEmitter
    );

    Chartist.createAxis(
      axisY,
      axisY.bounds.values,
      chartRect,
      gridGroup,
      labelGroup,
      this.supportsForeignObject,
      options,
      this.eventEmitter
    );

    // Draw the series
    this.data.series.forEach(function(series, seriesIndex) {
      seriesGroups[seriesIndex] = this.svg.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesGroups[seriesIndex].attr({
        'series-name': series.name,
        'meta': Chartist.serialize(series.meta)
      }, Chartist.xmlNs.uri);

      // Use series class from series data or if not set generate one
      seriesGroups[seriesIndex].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [];

      normalizedData[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex,  normalizedData[seriesIndex]).pos,
          y: chartRect.y1 - axisY.projectValue(value, valueIndex,  normalizedData[seriesIndex]).pos
        };
        pathCoordinates.push(p.x, p.y);

        //If we should show points we need to create them now to avoid secondary loop
        // Small offset for Firefox to render squares correctly
        if (options.showPoint) {
          var point = seriesGroups[seriesIndex].elem('line', {
            x1: p.x,
            y1: p.y,
            x2: p.x + 0.01,
            y2: p.y
          }, options.classNames.point).attr({
            'value': value,
            'meta': Chartist.getMetaData(series, valueIndex)
          }, Chartist.xmlNs.uri);

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: value,
            index: valueIndex,
            group: seriesGroups[seriesIndex],
            element: point,
            x: p.x,
            y: p.y
          });
        }
      }.bind(this));

      // TODO: Nicer handling of conditions, maybe composition?
      if (options.showLine || options.showArea) {
        var smoothing = typeof options.lineSmooth === 'function' ?
          options.lineSmooth : (options.lineSmooth ? Chartist.Interpolation.cardinal() : Chartist.Interpolation.none()),
          path = smoothing(pathCoordinates);

        if(options.showLine) {
          var line = seriesGroups[seriesIndex].elem('path', {
            d: path.stringify()
          }, options.classNames.line, true).attr({
            'values': normalizedData[seriesIndex]
          }, Chartist.xmlNs.uri);

          this.eventEmitter.emit('draw', {
            type: 'line',
            values: normalizedData[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesGroups[seriesIndex],
            element: line
          });
        }

        if(options.showArea) {
          // If areaBase is outside the chart area (< low or > high) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(options.areaBase, axisY.bounds.max), axisY.bounds.min);

          // We project the areaBase value into screen coordinates
          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase).pos;

          // Clone original path and splice our new area path to add the missing path elements to close the area shape
          var areaPath = path.clone();
          // Modify line path and add missing elements for area
          areaPath.position(0)
            .remove(1)
            .move(chartRect.x1, areaBaseProjected)
            .line(pathCoordinates[0], pathCoordinates[1])
            .position(areaPath.pathElements.length)
            .line(pathCoordinates[pathCoordinates.length - 2], areaBaseProjected);

          // Create the new path for the area shape with the area class from the options
          var area = seriesGroups[seriesIndex].elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true).attr({
            'values': normalizedData[seriesIndex]
          }, Chartist.xmlNs.uri);

          this.eventEmitter.emit('draw', {
            type: 'area',
            values: normalizedData[seriesIndex],
            path: areaPath.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesGroups[seriesIndex],
            element: area
          });
        }
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In adition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 40
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackBars: false,
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var seriesGroups = [],
      normalizedData = Chartist.normalizeDataArray(Chartist.getDataArray(this.data, options.reverseData), this.data.labels.length),
      normalizedPadding = Chartist.normalizePadding(options.chartPadding, defaultOptions.padding),
      highLow;

    // Create new svg element
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);

    if(options.stackBars) {
      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(normalizedData, function serialSums() {
        return Array.prototype.slice.call(arguments).reduce(Chartist.sum, 0);
      });

      highLow = Chartist.getHighLow([serialSums]);
    } else {
      highLow = Chartist.getHighLow(normalizedData);
    }
    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxis;

    if(options.horizontalBars) {
      labelAxis = new Chartist.StepAxis(
        Chartist.Axis.units.y,
        chartRect,
        function timeAxisTransform(projectedValue) {
          projectedValue.pos = chartRect.y1 - projectedValue.pos;
          return projectedValue;
        },
        {
          x: normalizedPadding.left + options.axisY.labelOffset.x + (this.supportsForeignObject ? -10 : 0),
          y: options.axisY.labelOffset.y - chartRect.height() / this.data.labels.length
        },
        {
          stepCount: this.data.labels.length,
          stretch: options.fullHeight
        }
      );

      valueAxis = new Chartist.LinearScaleAxis(
        Chartist.Axis.units.x,
        chartRect,
        function valueAxisTransform(projectedValue) {
          projectedValue.pos = chartRect.x1 + projectedValue.pos;
          return projectedValue;
        },
        {
          x: options.axisX.labelOffset.x,
          y: chartRect.y1 + options.axisX.labelOffset.y + (this.supportsForeignObject ? 5 : 20)
        },
        {
          highLow: highLow,
          scaleMinSpace: options.axisX.scaleMinSpace,
          referenceValue: 0
        }
      );
    } else {
      labelAxis = new Chartist.StepAxis(
        Chartist.Axis.units.x,
        chartRect,
        function timeAxisTransform(projectedValue) {
          projectedValue.pos = chartRect.x1 + projectedValue.pos;
          return projectedValue;
        },
        {
          x: options.axisX.labelOffset.x,
          y: chartRect.y1 + options.axisX.labelOffset.y + (this.supportsForeignObject ? 5 : 20)
        },
        {
          stepCount: this.data.labels.length
        }
      );

      valueAxis = new Chartist.LinearScaleAxis(
        Chartist.Axis.units.y,
        chartRect,
        function valueAxisTransform(projectedValue) {
          projectedValue.pos = chartRect.y1 - projectedValue.pos;
          return projectedValue;
        },
        {
          x: normalizedPadding.left + options.axisY.labelOffset.x + (this.supportsForeignObject ? -10 : 0),
          y: options.axisY.labelOffset.y + (this.supportsForeignObject ? -15 : 0)
        },
        {
          highLow: highLow,
          scaleMinSpace: options.axisY.scaleMinSpace,
          referenceValue: 0
        }
      );
    }

    // Start drawing
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup),
      gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup),
      // Projected 0 point
      zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0).pos) : (chartRect.y1 - valueAxis.projectValue(0).pos),
      // Used to track the screen coordinates of stacked bars
      stackedBarValues = [];

    Chartist.createAxis(
      labelAxis,
      this.data.labels,
      chartRect,
      gridGroup,
      labelGroup,
      this.supportsForeignObject,
      options,
      this.eventEmitter
    );

    Chartist.createAxis(
      valueAxis,
      valueAxis.bounds.values,
      chartRect,
      gridGroup,
      labelGroup,
      this.supportsForeignObject,
      options,
      this.eventEmitter
    );

    // Draw the series
    this.data.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (this.data.series.length - 1) / 2,
      // Half of the period width between vertical grid lines used to position bars
        periodHalfLength = chartRect[labelAxis.units.len]() / normalizedData[seriesIndex].length / 2;

      seriesGroups[seriesIndex] = this.svg.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesGroups[seriesIndex].attr({
        'series-name': series.name,
        'meta': Chartist.serialize(series.meta)
      }, Chartist.xmlNs.uri);

      // Use series class from series data or if not set generate one
      seriesGroups[seriesIndex].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      normalizedData[seriesIndex].forEach(function(value, valueIndex) {
        var projected = {
            x: chartRect.x1 + (options.horizontalBars ? valueAxis : labelAxis).projectValue(value, valueIndex, normalizedData[seriesIndex]).pos,
            y: chartRect.y1 - (options.horizontalBars ? labelAxis : valueAxis).projectValue(value, valueIndex, normalizedData[seriesIndex]).pos
          },
          bar,
          previousStack;

        // Offset to center bar between grid lines
        projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
        // Using bi-polar offset for multiple series if no stacked bars are used
        projected[labelAxis.units.pos] += options.stackBars ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];
        // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
        positions[labelAxis.counterUnits.pos + '1'] = options.stackBars ? previousStack : zeroPoint;
        positions[labelAxis.counterUnits.pos + '2'] = options.stackBars ? stackedBarValues[valueIndex] : projected[labelAxis.counterUnits.pos];

        bar = seriesGroups[seriesIndex].elem('line', positions, options.classNames.bar).attr({
          'value': value,
          'meta': Chartist.getMetaData(series, valueIndex)
        }, Chartist.xmlNs.uri);

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          chartRect: chartRect,
          group: seriesGroups[seriesIndex],
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-pie',
      series: 'ct-series',
      slice: 'ct-slice',
      donut: 'ct-donut',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var seriesGroups = [],
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle,
      dataArray = Chartist.getDataArray(this.data, options.reverseData);

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || dataArray.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut ? options.donutWidth / 2  : 0;

    // If a donut chart then the label position is at the radius, if regular pie chart it's half of the radius
    // see https://github.com/gionkunz/chartist-js/issues/21
    labelRadius = options.donut ? radius : radius / 2;
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = this.data.series.filter(function(val) {
      return val !== 0;
    }).length === 1;

    // Draw the series
    // initialize series groups
    for (var i = 0; i < this.data.series.length; i++) {
      seriesGroups[i] = this.svg.elem('g', null, null, true);

      // If the series is an object and contains a name we add a custom attribute
      if(this.data.series[i].name) {
        seriesGroups[i].attr({
          'series-name': this.data.series[i].name,
          'meta': Chartist.serialize(this.data.series[i].meta)
        }, Chartist.xmlNs.uri);
      }

      // Use series class from series data or if not set generate one
      seriesGroups[i].addClass([
        options.classNames.series,
        (this.data.series[i].className || options.classNames.series + '-' + Chartist.alphaNumerate(i))
      ].join(' '));

      var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - startAngle === 360) {
        endAngle -= 0.01;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, startAngle - (i === 0 || hasSingleValInSeries ? 0 : 0.2)),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle),
        arcSweep = endAngle - startAngle <= 180 ? '0' : '1',
        d = [
          // Start at the end point from the cartesian coordinates
          'M', end.x, end.y,
          // Draw arc
          'A', radius, radius, 0, arcSweep, 0, start.x, start.y
        ];

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(options.donut === false) {
        d.push('L', center.x, center.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var path = seriesGroups[i].elem('path', {
        d: d.join(' ')
      }, options.classNames.slice + (options.donut ? ' ' + options.classNames.donut : ''));

      // Adding the pie series value to the path
      path.attr({
        'value': dataArray[i]
      }, Chartist.xmlNs.uri);

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut === true) {
        path.attr({
          'style': 'stroke-width: ' + (+options.donutWidth) + 'px'
        });
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: dataArray[i],
        totalDataSum: totalDataSum,
        index: i,
        group: seriesGroups[i],
        element: path,
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        // Position at the labelRadius distance from center and between start and end angle
        var labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2),
          interpolatedValue = options.labelInterpolationFnc(this.data.labels ? this.data.labels[i] : dataArray[i], i);

        var labelElement = seriesGroups[i].elem('text', {
          dx: labelPosition.x,
          dy: labelPosition.y,
          'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
        }, options.classNames.label).text('' + interpolatedValue);

        // Fire off draw event
        this.eventEmitter.emit('draw', {
          type: 'label',
          index: i,
          group: seriesGroups[i],
          element: labelElement,
          text: '' + interpolatedValue,
          x: labelPosition.x,
          y: labelPosition.y
        });
      }

      // Set next startAngle to current endAngle. Use slight offset so there are no transparent hairline issues
      // (except for last slice)
      startAngle = endAngle;
    }

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of objects that contain a data property with the value and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     data: 20,
   *     className: 'my-custom-class-one'
   *   }, {
   *     data: 10,
   *     className: 'my-custom-class-two'
   *   }, {
   *     data: 70,
   *     className: 'my-custom-class-three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));
define('plugins/setup', 
    [
        'jquery',
        'underscore'
    ], 
    function($, _){
    'use strict';
    
    var _versionNewerThan = function(ver, against){
            var _this = this,
                versionSplit = against.split('.'),
                checkVerSplit = ver.split('.'),
                done = false,
                i = 0,
                l = checkVerSplit.length,
                newer = false;

            while(i < l){
                if(versionSplit[i] === undefined && checkVerSplit[i] === undefined){
                    newer = false;
                    break;
                }
                else if(versionSplit[i] === undefined){
                    newer = true;
                    break;
                }
                else if(checkVerSplit[i] === undefined){
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) < parseInt(checkVerSplit[i])) {
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) > parseInt(checkVerSplit[i])){
                    newer = true;
                    break;
                }
                i++;
            }

            return newer;
        },

        _createWorkout = function(cfg){
            if(!cfg || ! cfg.workout){
                return false;
            }

            var deferred = new $.Deferred();

            require(['models/workout', 'workoutplans/' + cfg.workout], function(Model, Workout){
                var model = new Model(Workout);
                debugger;
                model.sync('create', model, {
                    success: function(mdl){
                        debugger;
                        App.User.set('workout', model.id);
                        if(!cfg.silent){
                            App.toast('success', 'Successfully added workout.');
                        }
                        _getDefaultWorkout(deferred);
                    },
                    error: function(){
                        debugger;
                        console.log('Error loading workout, "' + cfg.workout + '"', arguments);
                        if(!cfg.silent){
                            App.toast('error', 'Failed loading workout.');
                        }
                        deferred.reject();
                    }
                });
            });

            return deferred;
        },
        _createMeasurements = function(){
            
            var deferred = new $.Deferred();

            require(['models/body-part', 'workoutplans/measurements'], function(Model, BodyParts){
                var count = 0,
                    length = BodyParts.length,
                    onComplete = function(){
                        if(++count === length){
                            deferred.resolve();
                        }
                    };

                _.each(BodyParts, function(Bodypart){
                    var model = new Model(Bodypart);

                    model.sync('create', model, {
                        success: onComplete,
                        error: function(){
                            console.log('Failed to add bodypart to sql');
                            deferred.resolve();
                        }
                    });

                });
            });

            return deferred;
        },
        _getDefaultWorkout = function(prevDeferred){
            var deferred = prevDeferred || new $.Deferred();
            require(['models/workout'], function(Model){
                var model = new Model({ id: App.User.get('workout') });

                model.fetch({
                    success: function(){
                        App.Workout = model;
                        deferred.resolve();
                    },
                    error: function(){
                        console.log('Failed to load workout..');
                        deferred.resolve();
                    }
                });
            });

            return deferred.promise();
        },
        _getUser = function(){
            var _this = this,
                setUser = function(collection, arr, options){
                    var user;
                    if(collection.length){
                        user = collection.pop();

                        App.setColorPalette(user.get('colorpalette') || 'blue' );

                        deferred.resolve({firstTime: false, user: user});
                    }
                    else {
                        user = collection.create({ name: 'User' });

                        var onTutorialComplete = function(){
                            App.setColorPalette(user.get('colorpalette') || 'blue' );
                            
                            deferred.resolve({ firstTime: true, user: user });
                        };

                        require(['views/tutorial/tutorial'],function(TutorialView){
                            var view = new TutorialView();
                            view.model = user;

                            view.options.onComplete = onTutorialComplete;

                            document.body.appendChild(view.render().el);
                        });
                    }
                },
                deferred = new $.Deferred();

            require(['collections/users'], function (Collection) {
                var collection = new Collection();
                collection.fetch({
                    limit: 1,
                    success: setUser,
                    error: function(){
                        console.log('Failed to get users..');
                        setUser();
                    }
                });
            });

            return deferred.promise();
        }, 
        _doUpdates = function(version, deferred){

            if(_versionNewerThan(version, '1.1.2')){
                //Create workouts..
                require(['plugins/movements'], function(Movements){
                    Movements.load()
                        .then(function(){
                            _doUpdates('1.1.2', deferred);
                        });
                });
            }
            else if(_versionNewerThan(version, '1.1.4')){
                //Create workouts..
                _doUpdates('1.1.4', deferred);
            }
            else {
                deferred.resolve(version);
            }
        };


    return {
        init: function(){
            //Check what version the sql is.. run updates if necessary return current version 
            var deferred = new $.Deferred(),
                measurements = function(programname){
                    _createMeasurements(programname)
                        .then(appInfo);
                },
                appInfo = function(){
                    require(['models/appinfo'], function(AppInfo){
                        var appInformation = new AppInfo({ id: 0 });
                        appInformation.fetch({
                            success: function(){
                                var version = appInformation.get('version');
                                var updDeferred = $.Deferred();

                                updDeferred.promise().then(function(version){
                                    appInformation.set('version', version);
                                    appInformation.sync('update', appInformation, { success: function(){} });

                                    deferred.resolve({version: version });
                                });

                                _doUpdates(version, updDeferred);
                            },
                            error: function(){
                                var updDeferred = $.Deferred();

                                updDeferred.promise().then(function(version){
                                    appInformation.set('version', version);
                                    appInformation.sync('update', appInformation, { success: function(){} });

                                    deferred.resolve({version: version });
                                });

                                _doUpdates('0.0.0', updDeferred);
                            }
                        });
                    });
                };

            _getUser()
                .then(function(data){
                    App.User = data.user;
                    App.User.on('change', function(){
                            App.User.sync('update', App.User, { success: function(){} });
                            App.setColorPalette(App.User.get('colorpalette') || 'blue' );
                        });
                    console.log(App.User.attributes);

                    if(data.firstTime){
                        //TODO: find out what exercise fits this person the best!
                        _createWorkout({ silent: true, workout: 'simple3split' })
                            .then(function(){
                                measurements('simple3split');
                            });
                    }else{
                        _getDefaultWorkout()
                            .then(appInfo);
                    }
                });

            return deferred;
        },

    };

});
define('plugins/side-menu', 
    [
        'jquery'
    ], 
    function($){
    'use strict';
    
    var basecfg = {
            menu: '.side-menu',
            button: '.navbar-toggle'
        },
        __OpenClass = 'sidemenu-open',
        _openMenu = function(){
            $(document.body).addClass(__OpenClass);

            this.isOpen = true;
        },
        _closeMenu = function(){
            this.isOpen = false;
            $(document.body).removeClass(__OpenClass);
        },
        _coverClick = function(e){
            e.preventDefault();
            _closeMenu.call(this);
        },
        _toggleMenuWPrevent = function(){
            _toggleMenu.call(this);
        },
        _toggleMenu = function(){
            var _this = this;
            if(_this.isOpen){
                _closeMenu.call(_this);
            }else{
                _openMenu.call(_this);
            }
        },
        SideMenu = function(cfg){
            var _this = this;

            _this.config = $.extend({}, basecfg, cfg);

            _this.$menu = $(_this.config.menu);
            _this.$btn = $(_this.config.button);
            _this.$cover = $('<div class="side-menu-cover"></div>').appendTo('body');
            _this.isOpen = false;

            //Listen for clicks
            _this.$btn.on('click.open-side-menu', $.proxy(_toggleMenuWPrevent, _this) );
            _this.$cover.on('click.side-menu-cover touchstart.side-menu-cover', $.proxy(_coverClick, _this) );
            _this.$menu.on('click.close-side-menu', 'a',  $.proxy(_closeMenu, _this) );
        },
        _close = function(){
            var _this = this;
            _this.$btn.off('click.open-side-menu');
            _this.$menu.off('click.close-side-menu');
            _this.$cover.off('click.side-menu-cover touchstart.side-menu-cover');
        };


    return {
            init: SideMenu,
            close: $.proxy(_close, SideMenu),
            open: $.proxy(_openMenu, SideMenu)
        };

});
define('plugins/dbsetup', [], function(){

    return {
            id: "styrkur",
            description: "Styrkur database",
            nolog: true,
            migrations : [
                {
                    version: "1.0",
                    before: function(next) {
                        // Do magic stuff before the migration. For example, before adding indices, the Chrome implementation requires to set define a value for each of the objects.
                        next();
                    },
                    migrate: function(transaction, next) {
                        var appinfo = transaction.db.createObjectStore("appinfo");
                        var bodypart = transaction.db.createObjectStore("bodypart");
                        var measurement = transaction.db.createObjectStore("measurement");
                        var movement = transaction.db.createObjectStore("movement");
                            movement.createIndex("muscleIndex", "muscle");
                        var muscle = transaction.db.createObjectStore("muscle");
                        var sessionInstance = transaction.db.createObjectStore("session-instance"); 
                            sessionInstance.createIndex("parentIndex", "parent");
                            sessionInstance.createIndex("dateIndex", "date");
                        var user = transaction.db.createObjectStore("user");
                        var workout = transaction.db.createObjectStore("workout");
        
                        next();
                    }
                }
            ]
        };


});
define('translations/en', 
    [], 
    function(){
    'use strict';

    return {
        lang: 'en',
        langName: 'English',
        compatibilityJSON: 'v2',
        translation: {
            'dashboard': {
                'lastweek': 'Workouts last week',
                'lastweek_plural': 'Workouts last {{value}} weeks',
                'weeknum': 'Week number'
            },
            'shared': {
                'name': 'Name',
                'select': 'Select one',
                'close': 'Close',
                'back': 'Back',
                'continue': 'Continue',
                'next': 'Next',
                'complete': 'Complete',
                'save': 'Save',
                'cancel': 'Cancel',
                'ok': 'Ok',
                'date': 'Date',
                'comment': 'Comment',
                'sek': 'sek',
                'min': 'min',
                'enabled': 'Enabled',
                'toggledisabled': 'Toggle disabled',
                'description': 'Description'
            },
            'measure': {
                'title': 'Measurements',
                'measure': 'Measure',
                'addpart': 'Add part',
                'unittype': 'Unit type',
                'weight': 'Weight',
                'percent': 'Percent',
                'shortlen': 'Short length',
                'longlen': 'Long length',
                'add': 'Add',
                'nomeasure': 'You dont seem to have any measurements registered. Do you want to register one now?',
                'minnotmet': 'You need atleast two measurements',
                'lastwas': 'Last one was {{lastOne}} at {{lastDate}}'
            },
            'create': {
                'edit': 'Edit',
                'planner': 'Workout planner',
                'create': 'Create routine',
                'sessionname': 'Session name',
                'exercise': 'Exercise',
                'exercises': 'Exercises',
                'selectormake': 'Select or make your own',
                'estmin': 'Estimated time in minutes',
                'addset': 'Add set',
                'addexercise': 'Add exercise',
                'addsession': 'Add session',
                'get': 'Get more..',
                'setcurr': 'Set as current',
                'current': 'This is your current workout plan'
            },
            'workout': {
                'reps': 'Reps',
                'set': 'Set',
                'weight': 'Weight',
                'freerun': 'Free-run',
                'freeruntext': 'Not following the plan? That\'s no problem!',
                'log': 'Log',
                'goodjob': 'Good job!',
                'youlifted': 'You lifted',
                'muscle': 'Muscle',
                'movement': 'Movement',
                'addset': 'Add set',
                'addexercise': 'Add exercise',
                'musclegroup': 'Muscle group',
                'setsandpause': 'Sets & Pause'
            },
            'workouttype': {
                'type': 'Type',
                'weightrep': 'Weight/Reps',
                'weight': 'Weight',
                'reps': 'Repetitions',
                'distance': 'Distance',
                'time': 'Time',
                'beats': 'Heartrate'
            },
            'gender': {
                'gender': 'Kyn',
                'male': 'Male',
                'female': 'Female'
            },
            'settings': {
                'title': 'Settings',
                'age': 'Age',
                'years': 'years',
                'goal': 'I want to..',
                'buildmuscle': 'Build muscles',
                'looseweight': 'Loose weight',
                'gethealthy': 'Get healthier',
                'weightgoal': 'Do you have a weight goal?',
                'unit': 'Units of measure',
                'appcolor': 'App colors',
                'blue': 'Blue',
                'red': 'Red',
                'orange': 'Orange',
                'pantone': 'Pantone',
                'language': 'Language'
            },
            'about': {
                'text': 'Styrkur is icelandic for strength. And that is just what this app is for.',
                'site': 'Visit us!',
                'thirdparty': '3rd party',
                'thanks': 'Special thanks to all the free and open-source software that this app is built on top of. It would not be as good if it was not for them.'
            }
        }
    };

});
define('translations/is', 
    [], 
    function(){
    'use strict';

    return {
        lang: 'is',
        langName: 'Íslenska',
        compatibilityJSON: 'v2',
        translation: {
            'dashboard': {
                'lastweek': 'Æfingar síðustu vikuna',
                'lastweek_plural': 'Æfingar síðustu {{count}} vikurnar',
                'weeknum': 'Vika'
            },
            'shared': {
                'name': 'Nafn',
                'select': 'Veldu einn',
                'close': 'Loka',
                'back': 'Tilbaka',
                'continue': 'Áfram',
                'next': 'Næsta',
                'complete': 'Klára',
                'save': 'Vista',
                'cancel': 'Hætta við',
                'ok': 'Áfram',
                'date': 'Dagsetning',
                'comment': 'Athugasemd',
                'sek': 'sek',
                'min': 'mín',
                'enabled': 'Virkt',
                'toggledisabled': 'Sjá/fela virka',
                'description': 'Lýsing'
            },
            'measure': {
                'title': 'Mælingar',
                'measure': 'Mæla',
                'addpart': 'Bæta við mælingu',
                'unittype': 'Tegund',
                'weight': 'Vikt',
                'percent': 'Prósent',
                'shortlen': 'Stutt lengd',
                'longlen': 'Löng lengd',
                'add': 'Bæta við',
                'nomeasure': 'Engar mælingar skráðar, viltu skrá eina núna?',
                'minnotmet': 'Það þarf allavega 2 mælingar til að sýna graf',
                'lastwas': 'Síðasta mæling var {{lastOne}} mæld á {{lastDate}}'
            },
            'create': {
                'edit': 'Breyta',
                'planner': 'Skipuleggja æfingu',
                'create': 'Búa til rútínu',
                'sessionname': 'Session nafn',
                'exercise': 'Æfing',
                'exercises': 'Æfingar',
                'selectormake': 'Veldu eða skrifaðu inn eigið',
                'estmin': 'Æfing í mínútum',
                'addset': 'Bæta við setti',
                'addexercise': 'Bæta við æfingu',
                'addsession': 'Bæta við æfingu',
                'get': 'Sækja fleiri..',
                'setcurr': 'Nota þessa',
                'current': 'Þetta er núverandi'
            },
            'workout': {
                'reps': 'Reps',
                'set': 'Set',
                'weight': 'Weight',
                'freerun': 'Frjálst',
                'freeruntext': 'Viltu bara æfa frjálst? Ekkert mál!',
                'log': 'Saga',
                'goodjob': 'Vel gert!',
                'youlifted': 'Þú lyftir',
                'muscle': 'Vöðvi',
                'movement': 'Hreyfin',
                'addset': 'Nýtt set',
                'addexercise': 'Bæta við æfingingu',
                'musclegroup': 'Vöðvi',
                'setsandpause': 'Sets & pása'
            },
            'workouttype': {
                'type': 'Tegund',
                'weightrep': 'Þyngd/Endurtekningar',
                'weight': 'Þyngd',
                'reps': 'Endurtekningar',
                'distance': 'Vegalengd',
                'time': 'Tími',
                'beats': 'Hjartsláttur'
            },
            'gender': {
                'gender': 'Kyn',
                'male': 'Karlmaður',
                'female': 'Kona'
            },
            'settings': {
                'title': 'Stillingar',
                'age': 'Aldur',
                'years': 'ár',
                'goal': 'Ég ætla að..',
                'buildmuscle': 'Byggja vöðva',
                'looseweight': 'Léttast',
                'gethealthy': 'Verða heilsusamari',
                'weightgoal': 'Þyngdar markmið',
                'unit': 'Mælingar einingar',
                'appcolor': 'Litir',
                'blue': 'Blár',
                'red': 'Rauður',
                'orange': 'Appelsínugulur',
                'pantone': 'Pantone',
                'language': 'Tungumál'
            },
            'about': {
                'text': 'Styrkur er eins og nafnið gefur til kynna, ætlað þér sem vill ná árangri.',
                'site': 'Styrkur á netinu',
                'thirdparty': 'Undir húddið',
                'thanks': 'Sérstakar þakkir til allra þeirra sem búa til opinn hugbúnað. Hér er listi yfir þann hugbúnað sem er notaður í Styrkur.'
            }
        }
    };

});
define('models/user',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            age: '',
            gender: '',
            workout: undefined, //ID of the current workout
            targetWeight: '',
            goal: '',
            goalType: undefined,
            units: 'metric',
            colorpalette: 'blue'
        },

        storeName: 'user',

        database: window.styrkurdb

    });

});

define('collections/users',
    [
        'backbone',
        'models/user'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});

define('models/set-instance',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    var Model = Backbone.Model.extend({

        defaults: {
            reps: undefined,
            weight: undefined,
            comment: ''
        }
        
    });

    return Model;

});

define('collections/set-instances',
    [
        'backbone',
        'models/set-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({

        model: Model
        
    });
    
});

define('models/exercise-instance',
    [
        'backbone',
        'collections/set-instances'
    ], 
    function(Backbone, Sets){
    'use strict';

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            exercise: undefined,
            date: undefined,
            sets: undefined
        },

        initialize: function(attr, options){
            this.set('date', new Date());
            this.set('sets', new Sets((attr && attr.sets) ? attr.sets: undefined));

            return Model.__super__.initialize.apply(this, arguments);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.sets = (clone.sets && clone.sets.toJSON) ? clone.sets.toJSON() : (clone.sets ? clone.sets : undefined);

            clone.date = clone.date ? clone.date.getTime() : undefined;

            return clone;
        }
        
    });

    return Model;

});

define('collections/exercise-instances',
    [
        'backbone',
        'models/exercise-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('date');
        }
        
        
    });
    
});

define('models/exercise',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            order: 0,
            name: undefined,
            muscle: undefined,
            description: undefined,
            type: 'weightrep',
            sets: 1,
            pause: 0,
            record: undefined,
            enabled: true
        },

        initialize: function(attr, options){
            if(!attr.id){
                this.set('id', App.uuid());
            }
        }
        
    });

});

define('collections/exercises',
    [
        'backbone',
        'models/exercise'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('order');
        }
        
        
    });
    
});

define('models/session-instance',
    [
        'backbone',
        'collections/exercise-instances'
    ], 
    function(Backbone, Exercises){
    'use strict';

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            date: 0,
            parent: undefined,
            comment: undefined,
            exercises: undefined
        },

        initialize: function(attr, options){
            //Only set date if it does not exist..
            if(!attr.date){
                this.set('date', (new Date()).getTime());
            }
            this.set('exercises', new Exercises(attr.exercises));

            return Model.__super__.initialize.apply(this, arguments);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.exercises = (clone.exercises && clone.exercises.toJSON) ? clone.exercises.toJSON() : (clone.exercises ? clone.exercises : undefined);

            return clone;
        },

        storeName: 'session-instance',

        database: window.styrkurdb

    });

    return Model;

});

define('collections/session-instances',
    [
        'backbone',
        'models/session-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database,

        comparator: function(ab) {
            return ab.get('date') ? (this.asc ? (new Date(ab.get('date'))).getTime() : -(new Date(ab.get('date'))).getTime()) : undefined;
        }
        
    });
    
});

define('models/session',
    [
        'backbone',
        'collections/exercises'
    ], 
    function(Backbone, ExCollection){
    'use strict';

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            order: 0,
            name: undefined,
            estTime: undefined,
            description: undefined,
            exercises: undefined,
            enabled: true
        },

        initialize: function(attr, options){
            this.set('exercises', new ExCollection(attr.exercises));
            if(!attr.id){
                this.set('id', App.uuid());
            }
        },

        parse: function(attr, options){
            if(attr.exercises){
                attr.exercises = new ExCollection(attr.exercises);
            }
            else {
                attr.exercises = new ExCollection();
            }
            
            return Model.__super__.parse.call(this, attr, options);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.exercises = (clone.exercises && clone.exercises.toJSON) ? clone.exercises.toJSON() : (clone.exercises ? clone.exercises : undefined);

            return clone;
        }

    });

    return Model;

});

define('collections/sessions',
    [
        'backbone',
        'models/session'
    ], 
    function(Backbone, Model){
    'use strict';
     
    return Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('order');
        }
        
    });
    
});

define('models/workout',
    [
        'backbone',
        'collections/sessions'
    ], 
    function(Backbone, SesCollection){
    'use strict';

    var model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: null,
            sessions: undefined
        },

        initialize: function(attr, options){
            if(attr && attr.session){
                this.set('sessions', new SesCollection(attr.sessions));
            }
            return model.__super__.initialize.apply(this, arguments);
        },

        parse: function(attr, options){
            if(attr.sessions){
                attr.sessions = new SesCollection(attr.sessions);
            }
            else {
                attr.sessions = new SesCollection();
            }
            
            return model.__super__.parse.call(this, attr, options);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.sessions = (clone.sessions && clone.sessions.toJSON) ? clone.sessions.toJSON() : (clone.sessions ? clone.sessions : undefined);

            return clone;
        },

        storeName: 'workout',

        database: window.styrkurdb
        
    });

    return model;

});

define('collections/workouts',
    [
        'backbone',
        'models/workout'
    ], function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database
        
    });
    
});

define('models/body-part',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined,
            unittype: 'weight'
        },

        idAttribute: 'id',

        storeName: 'bodypart',

        database: window.styrkurdb

    });

});
define('collections/body-parts',
    [
        'backbone',
        'models/body-part'
    ], 
    function(Backbone, Model){
    'use strict';

    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});

define('models/measurement',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            date: undefined,
            comment: undefined,
            items: undefined
        },

        storeName: 'measurement',

        database: window.styrkurdb

    });

});

define('collections/measurements',
    [
        'backbone',
        'models/measurement'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});

define('models/movement',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            muscle: undefined
        },

        idAttribute: 'id',

        storeName: 'movement',

        database: window.styrkurdb

    });

});
define('collections/movements',
    [
        'backbone',
        'models/movement'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});

define('models/muscle',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined
        },

        idAttribute: 'id',

        storeName: 'muscle',

        database: window.styrkurdb

    });

});
define('collections/muscles',
    [
        'backbone',
        'models/muscle'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});

define('models/appinfo',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            version: '0.0.0'
        },

        initialize: function(attr, options){
            if(!attr.id){
                this.set('id', '0');
            }
        },

        storeName: 'appinfo',

        database: window.styrkurdb
        
    });

});

define('workoutplans/exercises', [], function(){
    return {
		    "Abdominals": {
		    	"id": "3b45888b-cfea-46a6-faad-781c7d3b1265",
		        "exercises": [
		            {
		                "id": "7c45888b-cfea-46a6-faad-781c7d3b1265",
		                "name": "Landmine 180s"
		            },
		            {
		                "id": "20871908-fa63-47da-c0bb-af6c2d4ae20f",
		                "name": "Bottoms up"
		            },
		            {
		                "id": "11788522-856a-48e7-bbb3-742c179cecfe",
		                "name": "Spider crawl"
		            },
		            {
		                "id": "40daafd1-c3a5-4fa2-c48f-5f44bd0b56ef",
		                "name": "Standing cable lift"
		            },
		            {
		                "id": "7e61e8ef-9376-48b4-4d82-e0c9b4ef5689",
		                "name": "Crunch"
		            },
		            {
		                "id": "e0652867-c3fe-46a5-70b4-b6414bd91f62",
		                "name": "Cross-body crunch"
		            },
		            {
		                "id": "c398b389-d0ad-4cfa-588e-29ba0355b801",
		                "name": "Plate twist"
		            },
		            {
		                "id": "6db9f32f-7661-4758-caaf-a6957297b4b6",
		                "name": "Cable crunch"
		            }
		        ]
		    },
		    "Biceps": {
		    	"id": "57eeecac-d218-49ba-3ba3-176cd235d737",
		        "exercises": [
		            {
		                "id": "2d6e8d78-80fc-ee07-9da4-35394f6c2853",
		                "name": "Barbell Curl"
		            },
		            {
		                "id": "903de803-aaf8-4d76-e7a9-866446017f67",
		                "name": "Alternate Hammer Curl"
		            },
		            {
		                "id": "476ac0f1-e133-4b84-4d84-eafeab1854f6",
		                "name": "Incline Hammer Curls"
		            },
		            {
		                "id": "96c1a9aa-8c85-44c6-68b3-edd30952aeaa",
		                "name": "Concentration Curls"
		            },
		            {
		                "id": "736ee7e3-d54b-4b9c-d595-68054ad43bb6",
		                "name": "Preacher Curl"
		            },
		            {
		                "id": "dbec344f-5073-40ca-a3b9-11ce10a6903a",
		                "name": "Dumbbell Bicep Curl"
		            }
		        ]
		    },
		    "Calves": {
                "id": "4d3e252b-cfba-4c84-01ab-2825970c3a33",
		        "exercises": [
		            {
		                "id": "d981e4e7-c118-4657-9682-c749cc7d4289",
		                "name": "Smith machine calf raise"
		            },
		            {
		                "id": "8108c651-804d-4520-868e-65a5ee322172",
		                "name": "Standing calf raises"
		            },
		            {
		                "id": "8c73d0a5-863d-f38a-0abc-439b1659f232",
		                "name": "Calf press on the leg press machine"
		            }
		        ]
		    },
		    "Chest": {
		    	"id": "7ad26a35-4290-4c28-cbb5-17188ea00f1a",
		        "exercises": [
		            {
		                "id": "dc2cce02-4d6e-4980-9cad-91f1b0db0840",
		                "name": "Dumbbell bench press"
		            },
		            {
		                
		                "id": "5b2c82b6-0ba1-b68a-9a4f-ba9c27388667",
		                "name": "Incline dumbbell press"
		            },
		            {
		                "id": "7295166f-1d38-4069-6785-e43c81d12c98",
		                "name": "Pushups"
		            },
		            {
		                "id": "30e20ef0-1893-4d07-ef86-c546eed65a39",
		                "name": "Barbell bench press"
		            },
		            {
		                "id": "13c14e23-2a79-4c33-28bc-6b7d696504f8",
		                "name": "Barbell incline bench press"
		            },
		            {
		                "id": "09a7078e-15ac-4f8f-ca90-59fc983e7765",
		                "name": "Dumbbell flyes"
		            },
		            {
		                "id": "9838fbae-e2a4-4548-f589-7fb59c20f8e2",
		                "name": "Dips - chest version"
		            },
		            {
		                "id": "386498b9-4501-480f-14aa-1672e3f8cabc",
		                "name": "Cable flye"
		            },
		            {
		            	"id": "1ad18161-1b05-949c-e51e-8025618cfb56",
		                "name": "Cable crossover"
		            }
		        ]
		    },
		    "Forearms": {
		    	"id": "3b45837f-5294-4d78-8993-17c52b5e5cee",
		        "exercises": [
		            {
		                "id": "5745837f-5294-4d78-8993-17c52b5e5cee",
		                "name": "Palms-down wrist curl over a bench"
		            },
		            {
		                "id": "697dbf13-692f-4e32-df8d-40c342ba99bd",
		                "name": "Palms-up barbell wrist curl over a bench"
		            },
		            {
		                "id": "50d91368-dcee-4f91-0099-079a9cf42aef",
		                "name": "Wrist rotations with straight bar"
		            },
		            {
		                "id": "e8a3c0ba-ebec-47e0-ce8f-1c6d45bef376",
		                "name": "Finger curls"
		            }
		        ]
		    },
		    "Glutes": {
		    	"id": "3bd132c0-658f-43e3-2084-cb68f2a038b5",
		        "exercises": [
		            {
		                "id": "53d132c0-658f-43e3-2084-cb68f2a038b5",
		                "name": "Barbell glute bridge"
		            },
		            {
		                "id": "7e29a52a-96c1-4e86-d1ae-ba5ef1dd8e3b",
		                "name": "Barbell hip thrust"
		            },
		            {
		                "id": "f67a5a2e-9793-41e4-4f99-6bf9a4b147c2",
		                "name": "Glute kickback"
		            },
		            {
		                "id": "76199e6e-47c1-4eab-23b8-c6847875f6e3",
		                "name": "Flutter kicks"
		            },
		            {
		                "id": "18db6074-7588-4e5e-b90b-b148ceadf9aa",
		                "name": "Pull through"
		            }
		        ]
		    },
		    "Hamstrings": {
		    	"id": "ac38b26d-1dfa-0d58-13a2-3e69edf3b3aa",
		        "exercises": [
		            {
		                "id": "dd378417-538e-4fbf-948b-0b01a8b2ad42",
		                "name": "Seated leg curl"
		            },
		            {
		                "id": "84d4c904-99b6-abba-7c33-b9253682faba",
		                "name": "Lying leg curls"
		            },
		            {
		                "id": "2d830378-2929-4f54-b43d-bcdde6788d2b",
		                "name": "Good morning"
		            },
		            {
		                "id": "84d4c904-99b6-abba-7c33-b9253682faba",
		                "name": "Deadlift"
		            },
		            {
		                "id": "5dd71962-325a-4f04-9e51-e872b435b06f",
		                "name": "Romanian deadlift"
		            },
		            {
		                "id": "40b85d10-6eae-443a-e19c-3c5ec2d792fd",
		                "name": "Sumo deadlift"
		            },
		            {
		                "id": "8608247a-7616-4717-b752-72ebe76d1549",
		                "name": "Ball leg curl"
		            },
		            {
		                "id": "84d4c904-99b6-abba-7c33-b9253682faba",
		                "name": "Single leg deadlift"
		            },
		            {
		                "id": "84d4c904-99b6-abba-7c33-b9253682faba",
		                "name": "Inchworm"
		            }
		        ]
		    },
		    "Quads": {
		    	"id": "82ee32c4-f898-443b-bc73-841e1d048a11",
		    	"exercises": [
		            {
		                "id": "35f8b26d-1dfa-0d58-13a2-3e69edf3bbcc",
		                "name": "Barbell Squat"
		            },
		            {
		                "id": "5b549e86-2d93-4d73-bc18-83b5090dacb8",
		                "name": "Barbell Walking Lunge"
		            },
		            {
		                "id": "ded6edcb-4c0e-4277-bd06-98606834558f",
		                "name": "Snatch"
		            },
		            {
		                "id": "0f3966eb-5104-43ad-a7bb-dc22af43534b",
		                "name": "Burpee"
		            },
		            {
		            	"id": "f15992ad-f0a8-4f12-9aa8-85bfcd11d4dd",
		            	"name": "Step mill"
		            },
		            {
		                "id": "26d1ded8-cfbf-478e-a563-ce256b0d2d36",
		                "name": "Front barbell squat"
		            },
		            {
		                "id": "5d63c2a3-0fab-4ac5-a8ef-32ea8fb441f6",
		                "name": "Leg extensions"
		            }
	            ]
	        },
		    "Lats": {
		    	"id": "4f54b3b9-c151-4c37-908c-4595d935e5fa",
		        "exercises": [
		            {
		                "id": "9bfa7834-0941-4c50-5290-e100b08b1ba0",
		                "name": "Pull ups"
		            },
		            {
		                "id": "428fd917-a431-4f52-8895-2ec7b0ae8ba2",
		                "name": "Chin-up"
		            },
		            {
		                "id": "e25dfe2f-492b-0c91-a349-b930881cd4b7",
		                "name": "Pulldown"
		            },
		            {
		                "id": "4f5435b9-c151-4c37-908c-4595d935e5ea",
		                "name": "V-bar pulldown"
		            },
		            {
		                "id": "bc04f62b-bc33-424d-4a97-13a335d14b35",
		                "name": "Muscle up"
		            },
		            {
		                "id": "67e577d9-f1d3-4d94-c288-bba22e2398a9",
		                "name": "Side to side chins"
		            }
		        ]
		    },
		    "Back": {
		    	"id": "1be353f4-d284-4b4f-ffb1-a3d07d4a3edd",
		        "exercises": [
		            {
		                "id": "1fb3d779-a68e-63bf-5997-321ffd4ae50a",
		                "name": "Bent over barbell row"
		            },
		            {
		                "id": "a401e13f-3030-436e-7e8f-12989a925bd9",
		                "name": "T-bar row with handle"
		            },
		            {
		                "id": "237271d9-4afe-47c4-27bc-cc76335584c6",
		                "name": "One-arm dumbbell row"
		            },
		            {
		                "id": "cbf198bb-fa75-4f33-3eb1-c64ab4b3cd77",
		                "name": "Seated cable rows"
		            },
		            {
		                "id": "e6b7464f-0f6b-44d8-5d97-f552d979cb7b",
		                "name": "Dumbbell incline row"
		            }
		        ]
		    },
		    "Shoulders": {
		    	"id": "3b2a6886-a09b-4cae-bebf-815ba34942f4",
		        "exercises": [
		            {
		                "id": "452a6886-a09b-4cae-bebf-815ba34942f4",
		                "name": "Arnold dumbbell press"
		            },
		            {
		                "id": "0ebe74bc-94d6-49c4-9ca3-981126401956",
		                "name": "Clean and press"
		            },
		            {
		                "id": "8830aee9-0395-417a-25a4-7825bee2f229",
		                "name": "Single-arm linear jammer"
		            },
		            {
		                "id": "5b22b41b-deac-4821-e68d-e774691a84d9",
		                "name": "Standing alternating dumbbell press"
		            },
		            {
		                "id": "e43de967-b30c-4828-95bc-775e2fa6fe2b",
		                "name": "Push Press"
		            },
		            {
		                "id": "f9f3f58f-e235-4595-69b3-f454325394e2",
		                "name": "Power partials"
		            },
		            {
		                "id": "c61fc021-caaf-42f4-858d-260d1f59d8b6",
		                "name": "Reverse flyes"
		            },
		            {
		                "id": "278af3b3-b3ca-4ad3-d488-bfd769d8bf97",
		                "name": "Military press"
		            },
		            {
		                "id": "bef240fb-c262-4a00-20b5-63fc13c2a4de",
		                "name": "Dumbbell shoulder press"
		            },
		            {
		                "id": "b3fed24c-562c-40d3-1a85-48c3ad7f5a96",
		                "name": "Front dumbbell raise"
		            },
		            {
		                "id": "cbbeb66b-dc07-402f-c79e-a73179967073",
		                "name": "Car drivers"
		            }
		        ]
		    },
		    "Traps": {
		    	"id": "3b5cec3a-9451-44dd-e3a5-21cb3008dcbc",
		        "exercises": [
		            {
		                "id": "c95cec3a-9451-44dd-e3a5-21cb3008dcbc",
		                "name": "Kettlebell sumo high pull"
		            },
		            {
		                "id": "12d97d83-c579-4dfe-339e-1285897a7384",
		                "name": "Dumbbell shrug"
		            },
		            {
		                "id": "d9f05d14-b28d-408a-5793-6031ec2de3cc",
		                "name": "Barbell shrug"
		            },
		            {
		                "id": "f9cbdd3c-bc80-4aa1-1599-3bdd5ad282b4",
		                "name": "Cable shrugs"
		            },
		            {
		                "id": "9d3d6d8b-3efc-4a54-ac8d-166bf54ec1ae",
		                "name": "Clean shrug"
		            }
		        ]
		    },
		    "Triceps": {
		    	"id": "8024fb28-fe70-4de9-4791-39382c105e9e",
		        "exercises": [
		            {
		                "id": "f0d63096-26b6-4040-b089-73929f6267e7",
		                "name": "Dips - triceps version"
		            },
		            {
		                "id": "2b471e12-e3a4-4b1b-64af-b0bdddd60693",
		                "name": "Standing dumbbell triceps extension"
		            },
		            {
		                "id": "06706cbc-228d-4232-1f8b-8480f88131e1",
		                "name": "Tricep dumbbell kickback"
		            },
		            {
		                "id": "c65f727c-4fdb-490c-d8a1-5199fbb602a6",
		                "name": "Weighted bench dip"
		            },
		            {
		                "id": "07846d38-4021-4c94-6092-b23a8290aae8",
		                "name": "Ez-bar skullcrusher"
		            },
		            {
		                "id": "3550d086-4c3e-439b-1d9f-f002c1d5c98d",
		                "name": "Body-up"
		            },
		            {
		                "id": "9db0681f-8da8-c42c-baa2-02dde2564ea2",
		                "name": "Triceps pushdown - rope attachment"
		            }
		        ]
		    }
		}

});
define('plugins/movements', 
    [
        'jquery',
        'underscore',
        'collections/muscles', 
        'collections/movements', 
        'workoutplans/exercises'
    ], 
    function($, _, MuscColl, MoveColl, Exercises){
    'use strict';

    var _loadData = function(){

            var deferred = new $.Deferred();

            var muscles = [];
            var movements = [];
            _.each(Exercises, function(value, key){
                var muscleid = value.id;
                muscles.push({id: muscleid, name: key });
                _.each(value.exercises, function(value, i){
                    movements.push({ id: value.id, name: value.name, muscle: muscleid });
                });
            });
            
            //First muscles
            _registerCollection(muscles, new MuscColl(), function(){
                //Second is movements
                _registerCollection(movements, new MoveColl(), function(){
                    deferred.resolve();
                });
            });

            return deferred;

        },
        _registerCollection = function(list, collection, onComplete){
            var i = 0,
                length = list.length,
                createNext = function(){
                    if(i === length){
                        setTimeout(onComplete, 0);
                        return;
                    }
                    var item = list[i];

                    i++;

                    if(item){
                        collection.create(item, {
                            success: createNext,
                            error: createNext
                        });
                    }
                    else{
                        createNext();
                    }
                };

            createNext();
        };

    return {
        load: _loadData
    };

});
define('base/base-view',
    [
        'jquery', 
        'backbone'
    ], 
    function($, Backbone){
    'use strict';
    
    var BaseView = Backbone.View.extend({
    
        render: function(){
            var _this = this,
                template = _this.Template,
                renderTemplate = function(){
                    var model = (_this.model && _this.model.attributes) ? _this.model.attributes : (_this.model ? _this.model : {}),
                        attr = _.extend({ t: App.translate }, model, _this.options);
                    _this.$el.html(template(attr));
                    return _this;
                };
                
            if ( _.isString(template) ) { //its a string
                template = _.template(template);
            }
            
            return renderTemplate();
        },
        
        Close: function() {
            this.remove();
        }
    
    });
    
    return BaseView;
});

define('base/parent-view',
    [
        'jquery', 
        'backbone', 
        'base/base-view'
    ],
    function($, Backbone, BaseView){
    'use strict';
    
    var ParentView = BaseView.extend({
        
        initialize: function(){
            //Should be kept as 'selector' : view
            this.children = {};
        },
    
        ShowChild: function(view, selector){
            //If there is already a view there we want to remove that first
            var _this = this,
                oldView = _this.children[selector];
                
            if (oldView){
                oldView.Close();
            }
            
            _this.children[selector] = view;
            _this.$(selector).html(view.render().el);
            
            return _this;
        },
    
        Close: function() {
            //Close all child views
            _.each(this.children, function(view, selector){
                view.Close();
            });
            this.children = {};
        
            return ParentView.__super__.Close.call(this, arguments);
        }
    
    });
    return ParentView;
});

define('views/session-list-item',
    [
        'base/base-view',
        'templates/session-list-item.html',
        'collections/session-instances'
    ],
    function(BaseView, Template, SessionInstances){
    'use strict';
    
    var View = BaseView.extend({

        initialize: function(){
            this.options = {};
            View.__super__.initialize.apply(this, arguments);
        },
    
        Template: Template,

        tagName: 'div',

        className: 'session-list-item card card-outer',

        render: function(){
            var _this = this,
                sessionId = _this.model.get('id');

            View.__super__.render.apply(_this, arguments);

            return this;
        },

        events: {
            'click .session-list-content': 'goToItem',
            'click .session-list-log': 'goToLog'
        },

        'goToItem': function(e){
            e.preventDefault();
            var id = this.model.get('id');

            App.navigate('#/workout/' + id);
        },

        'goToLog': function(e){
            e.preventDefault();
            var id = this.model.get('id');

            App.navigate('#/history/session/' + id);
        }
    
    });
    
    return View;
    
});
// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.1.0",
        round = Math.round, i,
        // internal storage for language config files
        languages = {},

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO seperator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        // preliminary iso regex
        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
        isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            w : 'week',
            M : 'month',
            y : 'year'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return this.weekYear();
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return this.isoWeekYear();
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return ~~(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(~~(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(10 * a / 6), 4);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            }
        };

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.week || duration.w || 0,
            days = duration.days || duration.day || duration.d || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0,
            milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        // store reference to input for deterministic cloning
        this._input = duration;

        // representation for dateAddRemove
        this._milliseconds = milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months +
            years * 12;

        this._data = {};

        this._bubble();
    }


    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }
        return a;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, ignoreUpdateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months,
            minutes,
            hours,
            currentDate;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        // store the minutes and hours so we can restore them
        if (days || months) {
            minutes = mom.minute();
            hours = mom.hour();
        }
        if (days) {
            mom.date(mom.date() + days * isAdding);
        }
        if (months) {
            mom.month(mom.month() + months * isAdding);
        }
        if (milliseconds && !ignoreUpdateOffset) {
            moment.updateOffset(mom);
        }
        // restore the minutes and hours after possibly changing dst
        if (days || months) {
            mom.minute(minutes);
            mom.hour(hours);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units;
    }


    /************************************
        Languages
    ************************************/


    Language.prototype = {
        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },
        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    };

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        if (!key) {
            return moment.fn._lang;
        }
        if (!languages[key] && hasModule) {
            try {
                require('./lang/' + key);
            } catch (e) {
                // call with no params to set to default
                return moment.fn._lang;
            }
        }
        return languages[key];
    }


    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[.*\]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return m.lang().longDateFormat(input) || input;
        }

        while (i-- && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        }

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        switch (token) {
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'YYYYY':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default :
            return new RegExp(token.replace('\\', ''));
        }
    }

    function timezoneMinutesFromString(string) {
        var tzchunk = (parseTokenTimezone.exec(string) || [])[0],
            parts = (tzchunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + ~~parts[2];

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[1] = a;
            } else {
                config._isValid = false;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DDDD
        case 'DD' : // fall through to DDDD
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                datePartArray[2] = ~~input;
            }
            break;
        // YEAR
        case 'YY' :
            datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
            break;
        case 'YYYY' :
        case 'YYYYY' :
            datePartArray[0] = ~~input;
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[3] = ~~input;
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[4] = ~~input;
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[5] = ~~input;
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
            datePartArray[6] = ~~ (('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        }

        // if the input is null, the date is not valid
        if (input == null) {
            config._isValid = false;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(config) {
        var i, date, input = [];

        if (config._d) {
            return;
        }

        for (i = 0; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[3] += ~~((config._tzm || 0) / 60);
        input[4] += ~~((config._tzm || 0) % 60);

        date = new Date(0);

        if (config._useUTC) {
            date.setUTCFullYear(input[0], input[1], input[2]);
            date.setUTCHours(input[3], input[4], input[5], input[6]);
        } else {
            date.setFullYear(input[0], input[1], input[2]);
            date.setHours(input[3], input[4], input[5], input[6]);
        }

        config._d = date;
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var tokens = config._f.match(formattingTokens),
            string = config._i,
            i, parsedInput;

        config._a = [];

        for (i = 0; i < tokens.length; i++) {
            parsedInput = (getParseRegexForToken(tokens[i], config).exec(string) || [])[0];
            if (parsedInput) {
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            }
            // don't parse if its not a known token
            if (formatTokenFunctions[tokens[i]]) {
                addTimeToArrayFromToken(tokens[i], parsedInput, config);
            }
        }

        // add remaining unparsed input to the string
        if (string) {
            config._il = string;
        }

        // handle am pm
        if (config._isPm && config._a[3] < 12) {
            config._a[3] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[3] === 12) {
            config._a[3] = 0;
        }
        // return
        dateFromArray(config);
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            tempMoment,
            bestMoment,

            scoreToBeat = 99,
            i,
            currentScore;

        for (i = 0; i < config._f.length; i++) {
            tempConfig = extend({}, config);
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);
            tempMoment = new Moment(tempConfig);

            currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

            // if there is any input that was not parsed
            // add a penalty for that format
            if (tempMoment._il) {
                currentScore += tempMoment._il.length;
            }

            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempMoment;
            }
        }

        extend(config, bestMoment);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            // match[2] should be "T" or undefined
            config._f = 'YYYY-MM-DD' + (match[2] || " ");
            for (i = 0; i < 4; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (parseTokenTimezone.exec(string)) {
                config._f += " Z";
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._d = new Date(string);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromArray(config);
        } else {
            config._d = input instanceof Date ? new Date(+input) : new Date(input);
        }
    }


    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }


    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || input === '') {
            return null;
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = extend({}, input);
            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang) {
        return makeMoment({
            _i : input,
            _f : format,
            _l : lang,
            _isUTC : false
        });
    };

    // creating with utc
    moment.utc = function (input, format, lang) {
        return makeMoment({
            _useUTC : true,
            _isUTC : true,
            _l : lang,
            _i : input,
            _f : format
        });
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var isDuration = moment.isDuration(input),
            isNumber = (typeof input === 'number'),
            duration = (isDuration ? input._input : (isNumber ? {} : input)),
            matched = aspNetTimeSpanJsonRegex.exec(input),
            sign,
            ret;

        if (isNumber) {
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (matched) {
            sign = (matched[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: ~~matched[2] * sign,
                h: ~~matched[3] * sign,
                m: ~~matched[4] * sign,
                s: ~~matched[5] * sign,
                ms: ~~matched[6] * sign
            };
        }

        ret = new Duration(duration);

        if (isDuration && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(key, values);
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };


    /************************************
        Moment Prototype
    ************************************/


    moment.fn = Moment.prototype = {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            return formatMoment(moment(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            if (this._isValid == null) {
                if (this._a) {
                    this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
                } else {
                    this._isValid = !isNaN(this._d.getTime());
                }
            }
            return !!this._isValid;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = this._isUTC ? moment(input).zone(this._offset || 0) : moment(input).local(),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().startOf('day'), 'days', true),
                format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            var year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                if (typeof input === 'string') {
                    input = this.lang().weekdaysParse(input);
                    if (typeof input !== 'number') {
                        return this;
                    }
                }
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : function (input) {
            var utc = this._isUTC ? 'UTC' : '',
                dayOfMonth,
                daysInMonth;

            if (input != null) {
                if (typeof input === 'string') {
                    input = this.lang().monthsParse(input);
                    if (typeof input !== 'number') {
                        return this;
                    }
                }

                dayOfMonth = this.date();
                this.date(1);
                this._d['set' + utc + 'Month'](input);
                this.date(Math.min(dayOfMonth, this.daysInMonth()));

                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + 'Month']();
            }
        },

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            }

            return this;
        },

        endOf: function (units) {
            return this.startOf(units).add(units, 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) === +moment(input).startOf(units);
        },

        min: function (other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other;
        },

        max: function (other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other;
        },

        zone : function (input) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, true);
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        daysInMonth : function () {
            return moment.utc([this.year(), this.month() + 1, 0]).date();
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    };

    // helper for adding shortcuts
    function makeGetterAndSetter(name, key) {
        moment.fn[name] = moment.fn[name + 's'] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeGetterAndSetter('year', 'FullYear');

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    moment.duration.fn = Duration.prototype = {
        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              ~~(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang
    };

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });


    /************************************
        Exposing Moment
    ************************************/


    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `moment` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        this['moment'] = moment;
    }
    /*global define:false */
    if (typeof define === "function" && define.amd) {
        define("moment", [], function () {
            return moment;
        });
    }
}).call(this);

define('views/session-list',
    [
        'base/base-view',
        'views/session-list-item',
        'collections/sessions',
        'collections/session-instances',
        'templates/session-list.html'
        ,'moment'
    ],
    function(ParentView, ItemView, Collection, Instances, Template){
    'use strict';

    var View = ParentView.extend({

        initialize: function(){
            this.children = [];
        },

        render: function(){
            var _this = this,
                instances = new Instances(),
                doRender = function(){
                    View.__super__.render.apply(_this, arguments);
                    _this.renderChildren();
                };

            instances.fetch({
                success: function(){
                    _this.instances = instances;
                    doRender();
                },
                error: function(){
                    console.log(arguments);
                    doRender();
                }
            });

            return _this;
        },

        renderChildren: function(){
            var _this = this,
                elements = [];

            _this.collection.each(function(item){
                var match = _this.instances.filter(function(it){ return it.get('parent') === item.get('id'); }),
                    last = _.max(match, function(it){ return it.get('date'); }),
                    options = {
                        workoutid: _this.workoutId,
                        last: (last && last.get) ? moment(last.get('date')).format( App.enums.units.shortDateTime() ) : false,
                        count: match.length
                    },
                    itemView = new _this.ItemView();
                
                itemView.options = options;
                itemView.model = item;

                _this.children.push(itemView);

                elements.push(itemView.render().el);
            });
            if(elements.length){
                _this.$el.append(elements);
            }
        },
        
        Close: function() {
            _.each(this.children, function(view){
                view.Close();
            });
            this.children = [];

            return View.__super__.Close.call(this, arguments);
        },

        Template: Template,

        className: 'session-table',

        tagName: 'div',

        listSelector: '',

        ItemView: ItemView,
            
    });
    
    return View;
    
});

define('views/workout',
    [
        'backbone',
        'base/parent-view',
        'templates/workout.html',
        'views/session-list'
    ],
    function (Backbone, BaseView, Template, SessionsView){

    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this,
                workoutId = _this.model.get('id'),
                sessionView = new SessionsView();

            sessionView.workoutId = workoutId;
            //Filter out to enabled sessions
            sessionView.collection = new Backbone.Collection(_this.model.get('sessions').filter(function(item){
                    return item.get('enabled') === undefined || item.get('enabled');
                }));

            View.__super__.render.apply(_this, arguments);
            _this.ShowChild(sessionView, '.sessions-list-content');
            
            return _this;
        },

        events: {
            'click .toggle-description': 'toggle-description',
            'click .btn-freerun': 'goToFreeRun',
            'click .btn-freelog': 'logFreeRun',
        },

        'goToFreeRun': function(e){
            e.preventDefault();
            App.navigate('#/freerun');
        },
        'logFreeRun': function(e){
            e.preventDefault();
            App.navigate('#/freerun/history');
        },

        'toggle-description': function(e){
            var _this = this,
                target = e.currentTarget,
                desc = _this.$('.session-description');

            desc.toggle();
        }
    
    });
    
    return View;
    
});
define('base/list-view',
    [
        'base/base-view'
    ],
    function(BaseView){
    'use strict';
    
    var View = BaseView.extend({

        initialize: function(){
            this.children = [];
        },

        ItemView: undefined,

        listSelector: '',
    
        render: function(){
            var _this = this;
            //Render the view itself first
            View.__super__.render.apply(_this, arguments);
            
            _this.renderChildren();

            return _this;
        },

        addChild: function(model){
            var _this = this,
                itemView = new _this.ItemView();

            itemView.model = model;

            if(_this.options){
                itemView.options = itemView.options || {};
                _.extend(itemView.options, { parent: _this.options });
            }

            _this.children.push(itemView);
            
            _this.$(_this.listSelector).append(itemView.render().el);
        },

        reRenderChildren: function(){
            this.closeChildren();
            this.renderChildren();
        },

        renderChildren: function(){
            var _this = this;

            _this.collection.each(function(item){
                var itemView = new _this.ItemView();
                itemView.model = item;

                if(_this.options){
                    itemView.options = itemView.options || {};
                    _.extend(itemView.options, { parent: _this.options });
                }

                _this.children.push(itemView);

                _this.$(_this.listSelector).append(itemView.render().el);
            });
        },
        
        Close: function() {
            this.closeChildren();
            return View.__super__.Close.call(this, arguments);
        },

        //Close all child views
        closeChildren: function(){
            _.each(this.children, function(view){
                view.Close();
            });
            this.children = [];
        }
    
    });

    return View;
});

//
// backbone.stickit - v0.7.0
// The MIT License
// Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com> 
//
(function (factory) {

  // Set up Stickit appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd)
    define('backbone.stickit',['underscore', 'backbone'], factory);

  // Next for Node.js or CommonJS.
  else if (typeof exports === 'object')
    factory(require('underscore'), require('backbone'));

  // Finally, as a browser global.
  else
    factory(_, Backbone);

}(function (_, Backbone) {

  // Backbone.Stickit Namespace
  // --------------------------

  Backbone.Stickit = {

    _handlers: [],

    addHandler: function(handlers) {
      // Fill-in default values.
      handlers = _.map(_.flatten([handlers]), function(handler) {
        return _.extend({
          updateModel: true,
          updateView: true,
          updateMethod: 'text'
        }, handler);
      });
      this._handlers = this._handlers.concat(handlers);
    }
  };

  // Backbone.View Mixins
  // --------------------

  _.extend(Backbone.View.prototype, {

    // Collection of model event bindings.
    //   [{model,event,fn}, ...]
    _modelBindings: null,

    // Unbind the model and event bindings from `this._modelBindings` and
    // `this.$el`. If the optional `model` parameter is defined, then only
    // delete bindings for the given `model` and its corresponding view events.
    unstickit: function(model) {
      var models = [];
      _.each(this._modelBindings, function(binding, i) {
        if (model && binding.model !== model) return false;
        binding.model.off(binding.event, binding.fn);
        models.push(binding.model);
        delete this._modelBindings[i];
      }, this);

      // Trigger an event for each model that was unbound.
      _.invoke(_.uniq(models), 'trigger', 'stickit:unstuck', this.cid);
      // Cleanup the null values.
      this._modelBindings = _.compact(this._modelBindings);

      this.$el.off('.stickit' + (model ? '.' + model.cid : ''));
    },

    // Using `this.bindings` configuration or the `optionalBindingsConfig`, binds `this.model`
    // or the `optionalModel` to elements in the view.
    stickit: function(optionalModel, optionalBindingsConfig) {
      var model = optionalModel || this.model,
        namespace = '.stickit.' + model.cid,
        bindings = optionalBindingsConfig || _.result(this, "bindings") || {};

      this._modelBindings || (this._modelBindings = []);
      this.unstickit(model);

      // Iterate through the selectors in the bindings configuration and configure
      // the various options for each field.
      _.each(bindings, function(v, selector) {
        var $el, options, modelAttr, config,
          binding = bindings[selector] || {},
          bindId = _.uniqueId();

        // Support ':el' selector - special case selector for the view managed delegate.
        $el = selector === ':el' ? this.$el : this.$(selector);

        // Fail fast if the selector didn't match an element.
        if (!$el.length) return;

        // Allow shorthand setting of model attributes - `'selector':'observe'`.
        if (_.isString(binding)) binding = {observe:binding};

        // Handle case where `observe` is in the form of a function.
        if (_.isFunction(binding.observe)) binding.observe = binding.observe.call(this);

        config = getConfiguration($el, binding);

        modelAttr = config.observe;

        // Create the model set options with a unique `bindId` so that we
        // can avoid double-binding in the `change:attribute` event handler.
        config.bindId = bindId;
        // Add a reference to the view for handlers of stickitChange events
        config.view = this;
        options = _.extend({stickitChange:config}, config.setOptions);

        initializeAttributes(this, $el, config, model, modelAttr);

        initializeVisible(this, $el, config, model, modelAttr);

        if (modelAttr) {
          // Setup one-way, form element to model, bindings.
          _.each(config.events, function(type) {
            var event = type + namespace;
            var method = function(event) {
              var val = config.getVal.call(this, $el, event, config, _.rest(arguments));
              // Don't update the model if false is returned from the `updateModel` configuration.
              if (evaluateBoolean(this, config.updateModel, val, event, config))
                setAttr(model, modelAttr, val, options, this, config);
            };
            method = _.bind(method, this);
            if (selector === ':el') this.$el.on(event, method);
            else this.$el.on(event, selector, method);
          }, this);

          // Setup a `change:modelAttr` observer to keep the view element in sync.
          // `modelAttr` may be an array of attributes or a single string value.
          _.each(_.flatten([modelAttr]), function(attr) {
            observeModelEvent(model, this, 'change:'+attr, function(model, val, options) {
              var changeId = options && options.stickitChange && options.stickitChange.bindId || null;
              if (changeId !== bindId)
                updateViewBindEl(this, $el, config, getAttr(model, modelAttr, config, this), model);
            });
          }, this);

          updateViewBindEl(this, $el, config, getAttr(model, modelAttr, config, this), model, true);
        }

        model.once('stickit:unstuck', function(cid) {
          if (cid === this.cid) applyViewFn(this, config.destroy, $el, model, config);
        }, this);

        // After each binding is setup, call the `initialize` callback.
        applyViewFn(this, config.initialize, $el, model, config);
      }, this);

      // Wrap `view.remove` to unbind stickit model and dom events.
      var remove = this.remove;
      this.remove = function() {
        var ret = this;
        this.unstickit();
        if (remove) ret = remove.apply(this, _.rest(arguments));
        return ret;
      };
    }
  });

  // Helpers
  // -------

  // Evaluates the given `path` (in object/dot-notation) relative to the given
  // `obj`. If the path is null/undefined, then the given `obj` is returned.
  var evaluatePath = function(obj, path) {
    var parts = (path || '').split('.');
    var result = _.reduce(parts, function(memo, i) { return memo[i]; }, obj);
    return result == null ? obj : result;
  };

  // If the given `fn` is a string, then view[fn] is called, otherwise it is
  // a function that should be executed.
  var applyViewFn = function(view, fn) {
    if (fn) return (_.isString(fn) ? evaluatePath(view,fn) : fn).apply(view, _.rest(arguments, 2));
  };

  var getSelectedOption = function($select) { return $select.find('option').not(function(){ return !this.selected; }); };

  // Given a function, string (view function reference), or a boolean
  // value, returns the truthy result. Any other types evaluate as false.
  var evaluateBoolean = function(view, reference) {
    if (_.isBoolean(reference)) return reference;
    else if (_.isFunction(reference) || _.isString(reference))
      return applyViewFn.apply(this, arguments);
    return false;
  };

  // Setup a model event binding with the given function, and track the event
  // in the view's _modelBindings.
  var observeModelEvent = function(model, view, event, fn) {
    model.on(event, fn, view);
    view._modelBindings.push({model:model, event:event, fn:fn});
  };

  // Prepares the given `val`ue and sets it into the `model`.
  var setAttr = function(model, attr, val, options, context, config) {
    var value = {};
    if (config.onSet)
      val = applyViewFn(context, config.onSet, val, config);

    if (config.set)
      applyViewFn(context, config.set, attr, val, options, config);
    else {
      value[attr] = val;
      // If `observe` is defined as an array and `onSet` returned
      // an array, then map attributes to their values.
      if (_.isArray(attr) && _.isArray(val)) {
        value = _.reduce(attr, function(memo, attribute, index) {
          memo[attribute] = _.has(val, index) ? val[index] : null;
          return memo;
        }, {});
      }
      model.set(value, options);
    }
  };

  // Returns the given `attr`'s value from the `model`, escaping and
  // formatting if necessary. If `attr` is an array, then an array of
  // respective values will be returned.
  var getAttr = function(model, attr, config, context) {
    var val,
      retrieveVal = function(field) {
        return model[config.escape ? 'escape' : 'get'](field);
      },
      sanitizeVal = function(val) {
        return val == null ? '' : val;
      };
    val = _.isArray(attr) ? _.map(attr, retrieveVal) : retrieveVal(attr);
    if (config.onGet) val = applyViewFn(context, config.onGet, val, config);
    return _.isArray(val) ? _.map(val, sanitizeVal) : sanitizeVal(val);
  };

  // Find handlers in `Backbone.Stickit._handlers` with selectors that match
  // `$el` and generate a configuration by mixing them in the order that they
  // were found with the given `binding`.
  var getConfiguration = Backbone.Stickit.getConfiguration = function($el, binding) {
    var handlers = [{
      updateModel: false,
      updateMethod: 'text',
      update: function($el, val, m, opts) { if ($el[opts.updateMethod]) $el[opts.updateMethod](val); },
      getVal: function($el, e, opts) { return $el[opts.updateMethod](); }
    }];
    handlers = handlers.concat(_.filter(Backbone.Stickit._handlers, function(handler) {
      return $el.is(handler.selector);
    }));
    handlers.push(binding);
    var config = _.extend.apply(_, handlers);
    // `updateView` is defaulted to false for configutrations with
    // `visible`; otherwise, `updateView` is defaulted to true.
    if (config.visible && !_.has(config, 'updateView')) config.updateView = false;
    else if (!_.has(config, 'updateView')) config.updateView = true;
    delete config.selector;
    return config;
  };

  // Setup the attributes configuration - a list that maps an attribute or
  // property `name`, to an `observe`d model attribute, using an optional
  // `onGet` formatter.
  //
  //     attributes: [{
  //       name: 'attributeOrPropertyName',
  //       observe: 'modelAttrName'
  //       onGet: function(modelAttrVal, modelAttrName) { ... }
  //     }, ...]
  //
  var initializeAttributes = function(view, $el, config, model, modelAttr) {
    var props = ['autofocus', 'autoplay', 'async', 'checked', 'controls', 'defer', 'disabled', 'hidden', 'indeterminate', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped', 'selected'];

    _.each(config.attributes || [], function(attrConfig) {
      var lastClass = '', observed, updateAttr;
      attrConfig = _.clone(attrConfig);
      observed = attrConfig.observe || (attrConfig.observe = modelAttr),
      updateAttr = function() {
        var updateType = _.indexOf(props, attrConfig.name, true) > -1 ? 'prop' : 'attr',
          val = getAttr(model, observed, attrConfig, view);
        // If it is a class then we need to remove the last value and add the new.
        if (attrConfig.name === 'class') {
          $el.removeClass(lastClass).addClass(val);
          lastClass = val;
        }
        else $el[updateType](attrConfig.name, val);
      };
      _.each(_.flatten([observed]), function(attr) {
        observeModelEvent(model, view, 'change:' + attr, updateAttr);
      });
      updateAttr();
    });
  };

  // If `visible` is configured, then the view element will be shown/hidden
  // based on the truthiness of the modelattr's value or the result of the
  // given callback. If a `visibleFn` is also supplied, then that callback
  // will be executed to manually handle showing/hiding the view element.
  //
  //     observe: 'isRight',
  //     visible: true, // or function(val, options) {}
  //     visibleFn: function($el, isVisible, options) {} // optional handler
  //
  var initializeVisible = function(view, $el, config, model, modelAttr) {
    if (config.visible == null) return;
    var visibleCb = function() {
      var visible = config.visible,
          visibleFn = config.visibleFn,
          val = getAttr(model, modelAttr, config, view),
          isVisible = !!val;
      // If `visible` is a function then it should return a boolean result to show/hide.
      if (_.isFunction(visible) || _.isString(visible)) isVisible = !!applyViewFn(view, visible, val, config);
      // Either use the custom `visibleFn`, if provided, or execute the standard show/hide.
      if (visibleFn) applyViewFn(view, visibleFn, $el, isVisible, config);
      else {
        $el.toggle(isVisible);
      }
    };
    _.each(_.flatten([modelAttr]), function(attr) {
      observeModelEvent(model, view, 'change:' + attr, visibleCb);
    });
    visibleCb();
  };

  // Update the value of `$el` using the given configuration and trigger the
  // `afterUpdate` callback. This action may be blocked by `config.updateView`.
  //
  //     update: function($el, val, model, options) {},  // handler for updating
  //     updateView: true, // defaults to true
  //     afterUpdate: function($el, val, options) {} // optional callback
  //
  var updateViewBindEl = function(view, $el, config, val, model, isInitializing) {
    if (!evaluateBoolean(view, config.updateView, val, config)) return;
    applyViewFn(view, config.update, $el, val, model, config);
    if (!isInitializing) applyViewFn(view, config.afterUpdate, $el, val, config);
  };

  // Default Handlers
  // ----------------

  Backbone.Stickit.addHandler([{
    selector: '[contenteditable="true"]',
    updateMethod: 'html',
    events: ['input', 'change']
  }, {
    selector: 'input',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) {
      return $el.val();
    }
  }, {
    selector: 'textarea',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) { return $el.val(); }
  }, {
    selector: 'input[type="radio"]',
    events: ['change'],
    update: function($el, val) {
      $el.filter('[value="'+val+'"]').prop('checked', true);
    },
    getVal: function($el) {
      return $el.filter(':checked').val();
    }
  }, {
    selector: 'input[type="checkbox"]',
    events: ['change'],
    update: function($el, val, model, options) {
      if ($el.length > 1) {
        // There are multiple checkboxes so we need to go through them and check
        // any that have value attributes that match what's in the array of `val`s.
        val || (val = []);
        $el.each(function(i, el) {
          var checkbox = Backbone.$(el);
          var checked = _.indexOf(val, checkbox.val()) > -1;
          checkbox.prop('checked', checked);
        });
      } else {
        var checked = _.isBoolean(val) ? val : val === $el.val();
        $el.prop('checked', checked);
      }
    },
    getVal: function($el) {
      var val;
      if ($el.length > 1) {
        val = _.reduce($el, function(memo, el) {
          var checkbox = Backbone.$(el);
          if (checkbox.prop('checked')) memo.push(checkbox.val());
          return memo;
        }, []);
      } else {
        val = $el.prop('checked');
        // If the checkbox has a value attribute defined, then
        // use that value. Most browsers use "on" as a default.
        var boxval = $el.val();
        if (boxval !== 'on' && boxval != null) {
          val = val ? $el.val() : null;
        }
      }
      return val;
    }
  }, {
    selector: 'select',
    events: ['change'],
    update: function($el, val, model, options) {
      var optList,
        selectConfig = options.selectOptions,
        list = selectConfig && selectConfig.collection || undefined,
        isMultiple = $el.prop('multiple');

      // If there are no `selectOptions` then we assume that the `<select>`
      // is pre-rendered and that we need to generate the collection.
      if (!selectConfig) {
        selectConfig = {};
        var getList = function($el) {
          return $el.map(function() {
            return {value:this.value, label:this.text};
          }).get();
        };
        if ($el.find('optgroup').length) {
          list = {opt_labels:[]};
          // Search for options without optgroup
          if ($el.find('> option').length) {
            list.opt_labels.push(undefined);
            _.each($el.find('> option'), function(el) {
              list[undefined] = getList(Backbone.$(el));
            });
          }
          _.each($el.find('optgroup'), function(el) {
            var label = Backbone.$(el).attr('label');
            list.opt_labels.push(label);
            list[label] = getList(Backbone.$(el).find('option'));
          });
        } else {
          list = getList($el.find('option'));
        }
      }

      // Fill in default label and path values.
      selectConfig.valuePath = selectConfig.valuePath || 'value';
      selectConfig.labelPath = selectConfig.labelPath || 'label';

      var addSelectOptions = function(optList, $el, fieldVal) {
        _.each(optList, function(obj) {
          var option = Backbone.$('<option/>'), optionVal = obj;

          var fillOption = function(text, val) {
            option.text(text);
            optionVal = val;
            // Save the option value as data so that we can reference it later.
            option.data('stickit_bind_val', optionVal);
            if (!_.isArray(optionVal) && !_.isObject(optionVal)) option.val(optionVal);
          };

          if (obj === '__default__')
            fillOption(selectConfig.defaultOption.label, selectConfig.defaultOption.value);
          else
            fillOption(evaluatePath(obj, selectConfig.labelPath), evaluatePath(obj, selectConfig.valuePath));

          // Determine if this option is selected.
          if (!isMultiple && optionVal != null && fieldVal != null && optionVal === fieldVal || (_.isObject(fieldVal) && _.isEqual(optionVal, fieldVal)))
            option.prop('selected', true);
          else if (isMultiple && _.isArray(fieldVal)) {
            _.each(fieldVal, function(val) {
              if (_.isObject(val)) val = evaluatePath(val, selectConfig.valuePath);
              if (val === optionVal || (_.isObject(val) && _.isEqual(optionVal, val)))
                option.prop('selected', true);
            });
          }

          $el.append(option);
        });
      };

      $el.html('');

      // The `list` configuration is a function that returns the options list or a string
      // which represents the path to the list relative to `window` or the view/`this`.
      var evaluate = function(view, list) {
        var context = window;
        if (list.indexOf('this.') === 0) context = view;
        list = list.replace(/^[a-z]*\.(.+)$/, '$1');
        return evaluatePath(context, list);
      };
      if (_.isString(list)) optList = evaluate(this, list);
      else if (_.isFunction(list)) optList = applyViewFn(this, list, $el, options);
      else optList = list;

      // Support Backbone.Collection and deserialize.
      if (optList instanceof Backbone.Collection) optList = optList.toJSON();

      if (selectConfig.defaultOption) {
        addSelectOptions(["__default__"], $el);
      }

      if (_.isArray(optList)) {
        addSelectOptions(optList, $el, val);
      } else if (optList.opt_labels) {
        // To define a select with optgroups, format selectOptions.collection as an object
        // with an 'opt_labels' property, as in the following:
        //
        //     {
        //       'opt_labels': ['Looney Tunes', 'Three Stooges'],
        //       'Looney Tunes': [{id: 1, name: 'Bugs Bunny'}, {id: 2, name: 'Donald Duck'}],
        //       'Three Stooges': [{id: 3, name : 'moe'}, {id: 4, name : 'larry'}, {id: 5, name : 'curly'}]
        //     }
        //
        _.each(optList.opt_labels, function(label) {
          var $group = Backbone.$('<optgroup/>').attr('label', label);
          addSelectOptions(optList[label], $group, val);
          $el.append($group);
        });
        // With no 'opt_labels' parameter, the object is assumed to be a simple value-label map.
        // Pass a selectOptions.comparator to override the default order of alphabetical by label.
      } else {
        var opts = [], opt;
        for (var i in optList) {
          opt = {};
          opt[selectConfig.valuePath] = i;
          opt[selectConfig.labelPath] = optList[i];
          opts.push(opt);
        }
        addSelectOptions(_.sortBy(opts, selectConfig.comparator || selectConfig.labelPath), $el, val);
      }
    },
    getVal: function($el) {
      var val;
      if ($el.prop('multiple')) {
        val = Backbone.$(getSelectedOption($el).map(function() {
          return Backbone.$(this).data('stickit_bind_val');
        })).get();
      } else {
        val = getSelectedOption($el).data('stickit_bind_val');
      }
      return val;
    }
  }]);

}));

define('views/set-item',
    [
        'base/base-view',
        'templates/set-item.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Template, SessionInstances){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'form-box',

        initialize: function(){
            this.options = {
                index : "unknown"
            };
        },

        render: function(){
            var _this = this;
            _this.options.units = App.enums.units.getAll();

            View.__super__.render.apply(_this, arguments);

            _this.toggleViews();

            _this.stickit();

            return _this;
        },

        toggleViews: function(){
            var _this = this,
                exType = _this.options.exType,
                matched = App.enums.workoutTypes[exType];

            _.each(matched, function(item){
                _this.$('.type-' + item).show();
            });
        },

        bindings: {
            '.input-reps': 'reps',
            '.input-weight': 'weight',
            '.input-beats': 'beats',
            '.input-distance': 'distance',
            '.input-time': 'time',
            '.input-comment': 'comment'
        },

        events: {
            'click .btn-comment': 'toggle-comment',

            'click .btn-timer': 'run-timer',

            'touchstart .subtract-reps': 'subtract-reps-multi',
            'touchend .subtract-reps': 'stop-timer',
            'touchstart .add-reps': 'add-reps-multi',
            'touchend .add-reps': 'stop-timer',

            'touchstart .subtract-weight': 'subtract-weight-multi',
            'touchend .subtract-weight': 'stop-timer',
            'touchstart .add-weight': 'add-weight-multi',
            'touchend .add-weight': 'stop-timer',
        },

        'toggle-comment': function(e){
            e.preventDefault();
            this.$('.comment-box-modal').toggle();
            this.$('.comment-box-modal textarea').focus();
        },

        'subtract-reps-multi': function(e){
            e.preventDefault();
            var _this = this,
                reps = this.model.get('reps'),
                addOne = function(){
                    if(reps === 0){
                        return;
                    }
                    _this.model.set('reps', (reps !== undefined) ? --reps : 0 );
                    _this.addTimer = setTimeout(addOne, 500);
                };
            addOne();
        },

        'add-reps-multi': function(e){
            e.preventDefault();
            var _this = this,
                reps = this.model.get('reps'),
                addOne = function(){
                    _this.model.set('reps', (reps !== undefined) ? ++reps : _this.options.lastReps );
                    _this.addTimer = setTimeout(addOne, 300);
                };

            addOne();
        },

        'subtract-weight-multi': function(e){
            e.preventDefault();
            var _this = this,
                weight = this.model.get('weight'),
                addOne = function(){
                    if(weight === 0){
                        return;
                    }
                    _this.model.set('weight', (weight !== undefined) ? --weight : 0 );
                    _this.addTimer = setTimeout(addOne, 500);
                };
            addOne();
        },

        'add-weight-multi': function(e){
            e.preventDefault();
            var _this = this,
                weight = this.model.get('weight'),
                addOne = function(){
                    _this.model.set('weight', (weight !== undefined) ? ++weight : _this.options.lastWeight );
                    _this.addTimer = setTimeout(addOne, 300);
                };

            addOne();
        },

        'stop-timer': function(e){
            e.preventDefault();
            clearTimeout(this.addTimer);
        },

        'run-timer': (function(){
            var interval;
            return function(e){
                e.preventDefault();
                var _this = this,
                    time = parseInt(this.options.pause),
                    $span = _this.$('span.timer'),
                    blink = function(){
                        //TODO: add vibrate?!?
                        $span.text('');
                        $span.addClass('blink');
                        setTimeout(function(){
                            $span.removeClass('blink');
                        }, 4000);
                    };
                if(interval){ //Reset old interval
                    clearInterval(interval);
                    interval = undefined;
                    return;
                }

                interval = setInterval(function(){
                    $span.text(--time);
                    if(time === 0){
                        clearInterval(interval);
                        interval = undefined;
                        App.vibrate(1000);
                        blink();
                    }
                }, 1000);

                $span.text(time);
            };

        }())
    
    });
    
    return View;
    
});
define('views/exercise-item',
    [
        'base/base-view',
        'templates/exercise-item.html',
        'models/exercise-instance',
        'collections/set-instances',
        'models/set-instance',
        'views/set-item'
    ],
    function(BaseView, Template, InstanceModel, SetCollection, SetModel, SetView){
    'use strict';

    var view = BaseView.extend({

        initialize: function(){
            this.children = [];
            this.options = this.options || {};
        },
    
        Template: Template,

        tagName: 'div',

        className: 'exercise-container card',

        render: function(){
            var _this = this,
                exerciseId = _this.model.get('id'),
                instance = new InstanceModel({ exercise: exerciseId }),
                setColl = instance.get('sets'),
                numbSets = parseInt(_this.model.get('sets'));

            view.__super__.render.apply(_this, arguments);

            for(var i = 0; i < numbSets; i++){
                var model = new SetModel();

                setColl.add(model);

                this.renderSet(model, i);
            }

            _this.listenTo(setColl, 'add', function(model, collection){
                    _this.renderSet(model, collection.length - 1);
                });
                
            _this.instance = instance;

            return _this;
        },

        findSetFromLastWorkout: function(index){
                var _this = this,
                    prevExercise,
                    prevSet;
            if(_this.options.lastWorkout && _this.options.lastWorkout.get('exercises')){
                prevExercise = _this.options.lastWorkout.get('exercises').findWhere({ exercise: _this.model.get('id') });
                prevSet = prevExercise ? prevExercise.get('sets').at(index) : undefined;
            }

            return prevSet;
        },

        renderSet: function(model, index){
            var _this = this,
                view = new SetView(),
                lastWorkout = _this.findSetFromLastWorkout(index);

            view.model = model;
            $.extend(view.options, { 
                    index: index + 1, 
                    exercise: _this.model,
                    lastReps: lastWorkout ? lastWorkout.get('reps') || 0 : 0,
                    lastWeight : lastWorkout ? lastWorkout.get('weight') || 0 : 0,
                    lastBeat: lastWorkout ? lastWorkout.get('beats') || 0 : 0,
                    lastDistance : lastWorkout ? lastWorkout.get('distance') || 0 : 0,
                    lastTime : lastWorkout ? lastWorkout.get('time') || 0 : 0,
                    pause: _this.model.get('pause'),
                    exType: _this.model.get('type')
                });

            _this.children.push(view);

            _this.$('.sets-list').append( view.render().el );
        },

        events: {
            'click .btn-add-set': 'addSet'
        },

        'addSet': function(e){
            e.preventDefault();

            this.instance.get('sets').add(new SetModel({ exercise: this.model.get('id') }));
        },

        Close: function(){
            this.CloseChildren();
            view.__super__.Close.apply(this, arguments);
        },

        CloseChildren: function(){
            _.each(this.children, function(child){
                child.Close();
            });
            this.children = [];
        }
    
    });
    
    return view;
    
});
define('views/exercises',
    [
        'base/list-view',
        'templates/exercises.html',
        'models/session-instance',
        'views/exercise-item',
        'collections/session-instances',
        'backbone'
    ],
    function(BaseView, Template, Model, ExItemView, Collection, Backbone){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this,
            	sessionId = _this.model.get('id');
                
        	_this.instance = new Model({ parent: sessionId });
            //Filter exercises to enabled
        	_this.collection = new Backbone.Collection(_this.model.get('exercises').filter(function(item){
                    return item.get('enabled') === undefined || item.get('enabled');
                }));

            var allWorkouts = new Collection();

            allWorkouts.fetch({
                orderby: 'date',
                ordertype: 'desc',
                limit: 1,
                filters: { parent: _this.model.get('id') },
                success: function(){
                    _this.lastWorkout = allWorkouts.length ? allWorkouts.pop() : undefined;

                    _this.ItemView = ExItemView.extend({
                        options: {
                            lastWorkout : _this.lastWorkout
                        }
                    });
            
                    View.__super__.render.call(_this);
                }
            });

            return _this;
        },

        listSelector: '.exercise-list',

        events: {
        	'click .btn-save': 'save',
        	'click .btn-back': 'go-back'
        },

        'save': function(e){
        	e.preventDefault();

            var _this = this;

            _this.instance.set('comment', _this.$('textarea[name="comment"]').val());

            var exList = _this.instance.get('exercises');

            _.each(_this.children, function(view){
                exList.add(view.instance); 
            });

            var totalLifted = this.calcWeightLifted(exList);
            console.log(totalLifted);
            if(totalLifted > 0){
                _this.$('.weight-lifted').text(totalLifted + App.enums.units.weight());
            }
            else {
                _this.$('.welldone-box h2').text('Another workout well done!');
            }

            _this.instance.save(null, {
                success: function(attr){
                    _this.$('.welldone-box').addClass('in');

                    setTimeout(function() {
                        App.navigate('#/workout');
                    }, 2500);
                }
            });
        },

        calcWeightLifted: function (list) {
            var totalWeight = 0;
            list.each(function(item){
                item.get('sets').each(function(set){
                    var reps = set.get('reps');
                    var weight = set.get('weight');
                    var ireps = parseInt(reps);
                    var iweight = parseInt(weight);
                    if(reps && weight && ireps > 0 && iweight > 0){
                        totalWeight += ireps * iweight;
                    }
                    
                });
            });
            return totalWeight;
        },

        'go-back': function(e){
        	e.preventDefault();

            App.Events.trigger('workout-wizard:view', 'sessions');
        }
    
    });
    
    return View;
    
});
define('views/workout-wizard',
    [
        'base/parent-view',
        'templates/workout-wizard.html',
        'views/workout',
        'views/exercises'
    ],
    function(BaseView, Template, SessionView, ExercisesView){

    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this;
            
            View.__super__.render.apply(_this, arguments);

            _this.switchView('sessions', {});

            App.Events.on('workout-wizard:view', function(view, options){
                _this.switchView(view, options);
            });
            
            return _this;
        },

        switchView: function(req, options){
            var view;
            switch(req){
                case 'exercises':
                    view = new ExercisesView();
                    view.model = options.model;
                    view.parentModel = this.model;
                    break;
                default:
                    view = new SessionView();
                    view.model = this.model;
                    break;
            }

            this.ShowChild(view, '.wizard-container');
        },
    
    });
    
    return View;
    
});
define('views/menu',[
        'jquery',
        'underscore',
        'backbone',
        'base/base-view',
        'templates/menu.html'
    ], function ($, _, Backbone, BaseView, template) {
    'use strict';
    
    var view = BaseView.extend({

        Template: template,

        render: function() {
            var _this = this,
                _super = view.__super__,
                render = function() {
                    _super.render.call(_this);
                };

            render();

            App.Events.on('navigate:done', function(place){
                _this.$('a').removeClass('active');
                _this.$('a.nav-' + place).addClass('active');
            });

            return _this;
        },
        
    });

    return view;

});

define('views/widgets/chart',
    [
        'base/base-view',
        'collections/session-instances',
        'chartist'
        ,'moment'
    ], 
    function(BaseView, SessionsCollection, Chartist){
    'use strict';
    
    var _getRange = function(week){
            var thisWeek = week || moment().week(),
                list = [];

            while(thisWeek > 0 && list.length < 12){
                list.unshift(thisWeek--);
            }

            thisWeek = 52;
            while(list.length < 12){
                list.unshift(thisWeek--);
            }
            
            return list;
        },

        view = BaseView.extend({

            Template: '<div class="ct-chart"></div><p><%= t("dashboard.weeknum") %></p>',

            className: 'last-workouts',
            
            render: function(){
                var _this = this,
                    ctx,
                    collection = new SessionsCollection(),
                    windowWidth = $(window).innerWidth(),
                    date = new Date().getTime(),
                    dnow = (date + 86400000),
                    dmonth = (date - 3 * 2592000000); //last 3 months

                collection.fetch({
                    filters: 'date between ' + dmonth + ' and ' + dnow,
                    success: function(col, items){

                        var dates = _.map(items, function(a){ return a.date; }),
                            groups,
                            svg,
                            maxVal = 1,
                            data = {
                                labels: _getRange(),
                                series: []
                            };

                        //Group items by week
                        groups = _.groupBy(dates, function(item){
                            return moment(item).week();
                        });

                        data.series = [_.map(data.labels, function(lbl){
                                        return groups[lbl] ? groups[lbl].length : 0;
                                    })];
                        
                        view.__super__.render.apply(_this, arguments);

                        //Resize canvas for window
                        svg = _this.$('.ct-chart');

                        _this.chart = new Chartist.Line(svg[0], data, {
                            fullWidth: true,
                            scaleMinSpace: 1,
                            chartPadding: {
                                right: 40
                            }
                        });
                    }
                });

                return _this;
            },

            Close: function(){
                var _this = this;
                _this.chart.detach();
                delete _this.chart;
                view.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return view;
});
define('views/dashboard',
    [
        'base/base-view',
        'templates/dashboard.html',
        'views/widgets/chart'
    ], 
    function (BaseView, Template, ChartView) {
    'use strict';

    var view = BaseView.extend({

    	render: function(){
    		var _this = this,
    			chartview;
                
    		view.__super__.render.apply(_this, arguments);

            chartview = new ChartView();
            _this.$('.chart-lastweeks').append(chartview.render().el);
            _this.chartView = chartview;

    		return _this;
    	},

        Template: Template,

        className: 'dashboard-view card',

    	Close: function(){
    		var _this = this;
    		if(_this.chartView){
            _this.chartView.Close();
        }
        if(_this.tutorialView){
            _this.tutorialView.Close();
        }
            
    		return view.__super__.Close.apply(_this, arguments);
    	}

    });

    return view;
});

define('views/history/session-list-item',
    [
        'base/base-view',
        'templates/history/session-list-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){
    'use strict';
    
    var View = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options = {
                formatedDate : moment(_this.model.get('date') ).format(App.enums.units.dateTime())
            };

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'tr',
    
        Template: Template,

        events: {
            'click td': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                parent = _this.model.get('parent'),
                id = _this.model.get('id');
            App.navigate('#/history/exercises/' + parent + '/' + id);
        }
    
    });
    
    return View;
    
});
define('views/history/session-list',
    [
        'base/list-view',
        'templates/history/session-list.html',
        'views/history/session-list-item'
    ],
    function(BaseView, Template, ItemView){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        ItemView: ItemView,

        listSelector: 'tbody',

        events: {
            'click .btn-back': 'go-back'
        },

        'go-back': function(e){
            e.preventDefault();

            App.navigate('#/workout/');
        }
    
    });
    
    return View;
    
});
define('views/history/exercises-item',
    [
        'base/base-view',
        'templates/history/exercise-item.html',
        'collections/set-instances'
    ],
    function(BaseView, Template, Sets){
    'use strict';

    var View = BaseView.extend({

        render: function(){
            var _this = this;

            this.options = {
                units: App.enums.units.getAll()
            };

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'div',

        className: 'card',
    
        Template: Template,
    
    });
    
    return View;
    
});
define('views/history/exercises',
    [
        'base/base-view',
        'templates/history/exercises-list.html',
        'models/session',
        'collections/exercises',
        'collections/exercise-instances',
        'views/history/exercises-item',
        'base/base-view',
        'moment'
    ],
    function(BaseView, Template, SessionModel, ExerciseCollection, ExInsCollection, ItemView, DEVView){
    'use strict';

    var View = BaseView.extend({

            initialize: function(){
                this.children = [];
            },
        
            Template: Template,

            render: function(){
                var _this = this,
                    instanceId = _this.model.get('id'),
                    sessionId = _this.model.get('session');

                _this.options = {
                    session: _this.session.toJSON(),
                    formatedDate : moment(_this.model.get('date') ).format( App.enums.units.dateTime() )
                };

                View.__super__.render.apply(_this, arguments);

                _this.addExercises(sessionId, instanceId);

                return _this;
            },

            addExercises: function(sessionId, instanceId){
                var _this = this,
                    els = [];

                _this.session.get('exercises').each(function(exercise){
                    var view = new ItemView(),
                        exId = exercise.get('id'),
                        instance = _.find(_this.model.get('exercises'), function(it){ return it.exercise === exId; });

                    if(!instance){
                        return;
                    }

                    view.model = {
                        exercise : exercise.toJSON(),
                        instance: instance
                    };

                    _this.children.push(view);
                    els.push(view.render().el);

                });

                _this.$('.exercise-history-list').append(els);

            },

            events: {
                'click .btn-back': 'go-back'
            },

            'go-back': function(e){
                e.preventDefault();

                window.history.back();
            },

            Close: function(){
                var _this = this;
                _.each(_this.children, function(child){
                    child.Close();
                });
                _this.children = [];

                View.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return View;
    
});
define('views/plan/workout-list-item',
    [
        'base/base-view',
        'templates/plan/workout-list-item.html'
    ],
    function(BaseView, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'workout-item card',

        options: {
            currentWorkout: App.User.get('workout')
        },

        render: function(){
            this.options = {
                currentWorkout: App.User.get('workout') || '-1'
            };

            return View.__super__.render.apply(this, arguments);
        },

        events: {
            'click .btn-use-item': 'useWorkout'
        },

        'useWorkout': function(e){
            e.preventDefault();
            var target = $(e.target);

            App.toast('info', this.model.get('name') + ' set as current workout plan.');

            App.User.set('workout', this.model.get('id'));
            App.Events.trigger('workout:changed');
        }
    
    });
    
    return View;
    
});
define('views/plan/workout-list',
    [
        'base/list-view',
        'views/plan/workout-list-item',
        'collections/workouts',
        'templates/plan/workout-list.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    'use strict';
    
    var View = ParentView.extend({

        render: function(){
            var _this = this;
            View.__super__.render.apply(_this, arguments);

            _this.listenTo(App.User, 'change:workout', function(){
                _this.reRenderChildren();
            });

            return _this;
        },
    
        Template: Template,

        className: 'workout-table',

        tagName: 'div',

        listSelector: '.workout-list-items',

        ItemView: ItemView,
            
    });
    
    return View;
    
});

define('views/plan/plan',
    [
        'base/parent-view',
        'templates/plan/plan.html',
        'views/plan/workout-list',
        'collections/workouts'
    ],
    function(BaseView, Template, WorkoutList, WorkoutColl){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        className: 'view-plan',

        render: function(){
            var _this = this,
                workoutList = new WorkoutList(),
                collection = new WorkoutColl();

            View.__super__.render.apply(this, arguments);

            workoutList.collection = collection;

            collection.fetch({
                success: function(){
                    _this.ShowChild(workoutList, '.workout-list');
                }
            });

            return _this;
        }
    
    });
    
    return View;
    
});

define('views/create/movement',
    [
        'base/base-view',
        'templates/create/movement.html'
    ],
    function(BaseView, Template){
    'use strict';
    
    var view = BaseView.extend({

        initialize: function (cfg) {
            this.options = cfg || {};
        },
    
        Template: Template,

        tagName: 'div',

        render: function() {
            var _this = this;

            _this.model = _this.model || {};
            
            view.__super__.render.apply(_this, arguments);

            if(!_this.options.movements || _this.options.movements.length === 0){
                _this.$('.select-edit-toggle').addClass('toggle-edit');
            }

            _this.stickit();

            return _this;
        },

        bindings: {
            'select[name="movementid"]': {
                    observe: 'movementid',
                    onSet: function (value) {
                        var selectedValue = _.findWhere(this.options.movements,{id: value});
                        this.model.set('name', selectedValue.get('name'));
                        return value;
                    }
                },
            'input[name="exercise"]': {
                    observe: 'name',
                    onSet: function (value) {
                        if(value){
                            this.model.set('movementid', '');
                        }
                        return value;
                    }
                },
        },

        events: {
            'click .movement-select-toggle': 'movement-select-toggle'
        },

        'movement-select-toggle': function (e) {
            e.preventDefault();

            this.$('.select-edit-toggle').toggleClass('toggle-edit');
        },
    
    });
    
    return view;
    
});
define('views/create/exercise-item',
    [
        'base/base-view',
        'models/exercise',
        'templates/create/exercise-item.html',
        'views/create/movement'
        ,'backbone.stickit'
    ],
    function(BaseView, Model, Template, MovementsView){
    'use strict';

    var view = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'card',

        render: function() {
            var _this = this;

            if(_this.options && _this.options.parent && _this.options.parent.showDisabled === false){
                if(_this.model.get('enabled') === false){
                    _this.el.className = '';
                    return _this;
                }
            }

            view.__super__.render.apply(_this, arguments);
            _this.stickit();



            if(_this.model.get('muscle') && !_this.model.get('muscleid')){
                _this.$('.muscle-select').addClass('toggle-edit');
            }
            _this.renderMovements(_this.model.get('muscleid'));

            return _this;
        },

        renderMovements: function (muscleid){
            var _this = this,
                movements = _this.options.parent.movements.filter(function(mov){ return mov.get('muscle') === muscleid; }),
                movementview = new MovementsView({ muscleid: muscleid, movements: movements });

            if(_this.movementview){
                _this.movementview.Close();
            }

            _this.movementview = movementview;
            _this.movementview.model = _this.model;
            _this.$('.movement-select').html(movementview.render().el);
        },

        bindings: {
            'select[name="muscleid"]': {
                    observe: 'muscleid',
                    onSet: function (value) {
                        var selectedValue = this.options.parent.muscles.findWhere({id: value});
                        this.renderMovements(value);
                        this.model.set('muscle', selectedValue.get('name'));
                        return value;
                    }
                },
            'input[name="muscle"]': {
                    observe: 'muscle',
                    onSet: function (value) {
                        if(value){
                            this.model.set('muscleid', '');
                            this.renderMovements();
                        }
                        return value;
                    }
                },
            'input[name="sets"]': 'sets',
            'input[name="pause"]': 'pause',
            'input[name="enabled"]': 'enabled',
            'select[name="type"]': 'type'
        },

        events: {
            'click .muscle-select-toggle': 'muscle-select-toggle'
        },

        'muscle-select-toggle': function (e) {
            e.preventDefault();

            this.$('.muscle-select').toggleClass('toggle-edit');
        },

        getIdeas: function(){
            var muscles = _.keys(Workouts);
        }
    
    });
    
    return view;
    
});
define('views/create/exercises',
    [
        'base/list-view',
        'views/create/exercise-item',
        'collections/exercises',
        'templates/create/exercises.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    'use strict';

    var View = ParentView.extend({

        initialize: function(cfg){
            this.options = _.extend(this.options || {}, cfg);

            return View.__super__.initialize.apply(this, arguments);
        },
    
        Template: Template,

        className: 'create-session-view',

        render: function(){
            var _this = this,
                sessionId = _this.options.exerciseid;


            var matchingSession = _this.model.model.get('sessions').findWhere({ id: sessionId });

            if(matchingSession){
                _this.collection = matchingSession.get('exercises');

                _this.options.title = matchingSession.get('name');
                _this.options.wotitle = _this.model.model.get('name');
                _this.options.movements = _this.model.movements;
                _this.options.muscles = _this.model.muscles;
            }

            View.__super__.render.apply(_this,arguments);

            _this.listenTo(_this.collection, 'add', function(){
                _this.reRenderChildren();
            });

            return _this;
        },

        listSelector: '.exercise-list',

        ItemView: ItemView,
        
        events: {
            'click .btn-save': 'save',
            'click .btn-add-exercise': 'add-exercise',
            'click .btn-back': 'go-back',
            'click .btn-toggle-disabled': 'toggleDisabled',
            'click .dropdown-toggle': 'toggleDropdown'
        },

        'add-exercise': function(e){
            e.preventDefault();

            this.collection.add({ order: ++this.topOrder });

            var parent = $(e.target).parent('.dropdown-menu');
            this.toggleDropdown(undefined, parent);
        },

        'toggleDropdown': function(e, dropdownEl){
            if(e){
                e.preventDefault();    
            }
            var dropdown;
            if(dropdownEl){
                dropdown = dropdownEl;
            }
            else { 
                var _this = this,
                    target = _this.$(e.currentTarget);
                dropdown = target.siblings('.dropdown-menu');
            }
            
            dropdown.toggle();
        },

        'toggleDisabled': function(e){
            e.preventDefault();
            var _this = this;

            _this.options.showDisabled = _this.model.showDisabled = !_this.model.showDisabled;

            _this.reRenderChildren();

            var parent = $(e.target).parent('.dropdown-menu');
            _this.toggleDropdown(undefined, parent);
        },

        'go-back': function(e){
            e.preventDefault();
            var _this = this,
                wid = _this.model.model.get('id');

            App.navigate('#/create/wizard/' + wid);
        },
        
        'save': function(e){
            if(e){
                e.preventDefault();
            }
            var _this = this;

            _this.model.model.sync('update', _this.model.model, {
                success: function(){
                    App.toast('success', 'Workout plan saved');
                    if(App.Workout && (App.Workout.get('id') === _this.model.model.get('id'))){
                        App.Workout = _this.model.model;
                    }
                },
                error: function(){
                    App.toast('danger','Something went wrong!');
                    console.log(arguments);
                }
            });
            
        }
    
    });
    
    return View;
    
});

define('views/create/workout',
    [
        'base/base-view',
        'models/workout',
        'templates/create/workout.html'
    ],
    function(BaseView, Model, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,
        
        render: function(){
            return View.__super__.render.apply(this, arguments);
        },

        className: 'create-wizard create-workout-view card',
        
        events: {
            'click .btn-create': 'create'
        },
        
        'create': function(e){
            e.preventDefault();
            
            var model = new Model();

            model.set('name', this.$('input[name="name"]').val() );
            
            model.sync('create', model, {
                success: function(modelAttr){
                    App.navigate('#/create/wizard/' + model.get('id'));
                },
                error: function(){
                    console.log('failed creating');
                    App.toast('info', 'Whoops something went wrong');
                }
            });
        },
        
        Close: function(){
            View.__super__.Close.apply(this, arguments);
        }
    
    });
    
    return View;
    
});

define('views/create/session-item',
    [
        'base/base-view',
        'models/session',
        'collections/exercises',
        'views/create/exercises',
        'templates/create/session-item.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Model, ExercisesColl, ExercisesView, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        className: 'session-item card',

        render: function() {
            var _this = this;

            if(_this.options && _this.options.parent && _this.options.parent.showDisabled === false){
                if(_this.model.get('enabled') === false){
                    _this.el.className = '';
                    return _this;
                }
            }

            View.__super__.render.apply(_this, arguments);

            _this.stickit();
            return _this;
        },

        bindings: {
            'input[name="sessionName"]': 'name',
            'textarea[name="description"]': 'description',
            'input[name="estTime"]': 'estTime',
            'input[name="enabled"]': 'enabled'
        },

        events: {
            'click .btn-exercises': 'goExercises'
        },

        'goExercises': function(e){
            var _this = this,
                wid = _this.options.parent.workoutid,
                sessionid = _this.model.get('id');
                
            e.preventDefault();
            //App.Events.trigger('create-wizard:view', 'exercises', { model: this.model });
            App.navigate('#/create/wizard/' + wid + '/exercises/' + sessionid);
        }
    
    });
    
    return View;
    
});
define('views/create/session',
    [
        'base/list-view',
        'views/create/session-item',
        'collections/sessions',
        'templates/create/session.html'
        ,'backbone.stickit'
    ],
    function(ParentView, SessionItemView, Collection, Template, stickit){
    'use strict';

    var View = ParentView.extend({
    
        Template: Template,

        options: {
            showDisabled: false
        },

        className: 'create-wizard create-session-view',

        render: function(){
            var _this = this,
                collection;

            _this.collection = collection = _this.model.model.get('sessions');

            _.extend(_this.options, { title: _this.model.model.get('name'), workoutid: _this.model.model.get('id') });

            _this.topOrder = collection.length ? collection.max(function(item){ return item.get('order'); }) : 0;
            View.__super__.render.apply(_this, arguments);

            _this.listenTo(this.collection, 'add', function(){
                _this.reRenderChildren();
            });

            _this.stickit(_this.model.model, _this.bindings);

            return this;
        },

        bindings: {
            'textarea[name="sessiondesc"]': 'description'
        },

        listSelector: '.sessions-list',

        ItemView: SessionItemView,
        
        events: {
            'click .btn-back': 'go-back',
            'click .btn-save': 'save',
            'click .btn-add-session': 'add-session',
            'click .btn-toggle-disabled': 'toggleDisabled',
            'click .dropdown-toggle': 'toggleDropdown'
        },

        'toggleDropdown': function(e, dropdownEl){
            if(e){
                e.preventDefault();
            }
            var dropdown;
            if(dropdownEl){
                dropdown = dropdownEl;
            }
            else {            
                var _this = this,
                    target = _this.$(e.currentTarget);
                dropdown = target.siblings('.dropdown-menu');
            }

            dropdown.toggle();
        },

        'toggleDisabled': function(e){
            e.preventDefault();
            var _this = this;

            _this.options.showDisabled = _this.model.showDisabled = !_this.model.showDisabled;

            var parent = $(e.target).parent('.dropdown-menu');
            _this.toggleDropdown(undefined, parent);

            _this.reRenderChildren();
        },

        'go-back': function(e){
            e.preventDefault();

            //TODO: is the model dirty, ask if save first?
            App.navigate('#/plan/');
        },

        'add-session': function(e){
            e.preventDefault();

            this.collection.add({ order: ++this.topOrder });

            var parent = $(e.target).parent('.dropdown-menu');
            this.toggleDropdown(undefined, parent);
        },

        'save': function(e){
            if(e){
                e.preventDefault();
            }
            var _this = this;

            _this.model.model.sync('update', _this.model.model, {
                success: function(){
                    App.toast('success', 'Workout plan saved');
                    if(App.Workout && (App.Workout.get('id') === _this.model.model.get('id'))){
                        App.Workout = _this.model.model;
                    }
                },
                error: function(){
                    App.toast('danger','Something went wrong!');
                    console.log(arguments);
                }
            });
            
        }
    
    });
    
    return View;
    
});

define('views/about',
    [
        'base/base-view',
        'templates/about.html'
    ],
    function(BaseView, Template){
    'use strict';

    var view = BaseView.extend({

        options: {
            version: App.version
        },

        render: function(){
            var _this = this;
            view.__super__.render.apply(_this, arguments);

            require(['views/settings/settings'], function(settView){
                var subView = _this.settView = new settView();
                subView.model = App.User;
                _this.$('.settings-wrapper').append( subView.render().el );
            });

            return _this;
        },

        className: 'about-view',
    
        Template: Template,

        Close: function(){
            var _this = this;

            if(_this.settView){
                _this.settView.Close();
            }

            view.__super__.Close.call(_this);
        }
        
    });
    
    return view;
    
});
define('views/timer',
    [
        'base/base-view',
        'templates/timer.html'
    ],
    function(BaseView, Template, moment){

    var _diffTime = function(timer){
            var seconds = ((new Date()).getTime() - timer.getTime()) / 1000,
                minutes = parseInt(seconds / 60);
            seconds = parseInt(seconds % 60);
            if(seconds < 10){
                seconds = '0' + seconds;
            }
            return (minutes ? minutes + ':' : '0:') + seconds;
        },

        started = false,

        View = BaseView.extend({
    
            Template: Template,

            className: 'timer-container',

            events: {
                'click .btn-toggle-timer': 'toggle-timer',
                'click .btn-reset-timer': 'reset-timer'
            },

            'toggle-timer': function(e){
                e.preventDefault();
                var _this = this,
                    _updateTime = function(){
                        _this.$('h1').text( _diffTime(_this.timer) );
                    };

                e.target.innerText = started ? 'Start' : 'Split';

                if(!_this.timer){
                    _this.timer = new Date();
                }

                if(!started){
                    started = true;
                    _this.$('.spinner').removeClass('paused').removeClass('stopped');
                    _updateTime();
                    _this.interval = setInterval(_updateTime, 1000);
                }
                else {
                    _this.$('.spinner').addClass('paused').removeClass('stopped');
                    started = false;
                    clearInterval(_this.interval);
                }
            },

            'reset-timer': function(e){
                var _this = this;
                e.preventDefault();

                if(_this.interval){
                    clearInterval(_this.interval);
                }
                _this.timer = undefined;
                started = false;

                _this.$('.spinner').removeClass('paused').addClass('stopped');

                _this.$('.btn-toggle-timer').text('Start');
                _this.$('h1').text('Not started');
            }
        
        });
    
    return View;
    
});
define('views/settings/settings',
    [
        'base/base-view',
        'templates/settings/settings.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Template){
    'use strict';

    var view = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options.languages = App.languages;

            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

        options: {
            goalTypes: App.enums.goals
        },
    
        Template: Template,

        className: 'settings-view',

        events: {
            'click .btn-save': 'save'
        },

        bindings: {
            '[name="age"]': 'age',
            '[name="gender"]': 'gender',
            '[name="goaltype"]': 'goalType',
            '[name="goal"]': 'targetWeight',
            '[name="units"]': 'units',
            '[name="language"]': {
                observe: 'language',
                onSet: function(val){
                    App.setLanguage(val);
                    return val;
                }
            },
            '[name="colorpalette"]': 'colorpalette',

            '.tut-weight-goal .input-group-addon': {
                observe: 'units',
                onGet: function(value){
                    return value === 'metric' ? 'kg': 'lbs';
                }
            }
        },

        //User is saved automaticly..
        'save': function(e){
            e.preventDefault();
            var _this = this,
                onSuccess = function () {
                    App.setLanguage(App.User.get('language'));
                    App.toast('success', 'User updated');
                },
                onFail = function () {
                    App.toast('warning', 'Could not update user');
                };

            if(_this.model.get('gender') === '' || _this.model.get('age') === '' || _this.model.get('units') === '' || _this.model.get('goalType') === ''){
                App.toast('info', 'Please fill in all required fields');
                return false;
            }

            App.User.sync('update', App.User,{
                    success: onSuccess,
                    fail: onFail
                });
        }
    
    });
    
    return view;
    
});
define('views/history/graph-sessions-item',
    [
        'base/base-view',
        'templates/history/graph-sessions-item.html',
        'chartist'
        ,'moment'
    ],
    function(BaseView, Template, Chartist){
    'use strict';
    
    var _colors = ['187,151,205','151,187,205','220,220,220', '80,80,255', '0,0,200'],
        _getColor = function(no, alpha){
            return 'rgba(' + _colors[no] + ',' + alpha + ')';
        },

        view = BaseView.extend({

            render: function(){
                var _this = this,
                    counterType = _this.counterType(),
                    workedData = _this.createModel(counterType),
                    data;

                _this.model = workedData[0];
                data = workedData[1];

                view.__super__.render.apply(_this, arguments);

                var el = _this.$('.ct-chart');
                
                if(data.labels.length < 2){
                    el.text('Need atleast 2 sessions graph');
                }
                else {
                    _this.chart = new Chartist.Line(el[0], data, {
                        fullWidth: true,
                        chartPadding: {
                            right: 40
                        }
                    });
                }

                return _this;
            },

            counterType: function(){

                switch(this.model.get('type')){
                    case 'weightrep':
                        return 'weight';
                    default:
                        return this.model.get('type');
                }

            },

            createModel: function(counter){
                var _this = this,
                    legends = [],
                    data = {
                        labels: [],
                        series: []
                    },
                    maxVal = 1,
                    minVal = 9999,
                    models = _.sortBy(_this.model.get('items'), 'date');


                _.each(models, function(session){
                    data.labels.push( 
                            moment(session.date).format(App.enums.units.shortDate())
                        );
                    _.each(session.sets, function(set, i){
                        var color = '#' + i + i + i + i + i + i + '',
                            parsedVal = parseInt(set[counter]);

                        data.series[i] = data.series[i] || [];

                        data.series[i].push(parsedVal);
                    });
                });


                return [
                    { 
                        exercise: _this.model.get('exercise'), 
                        muscle: _this.model.get('muscle'),
                        legends: legends 
                    }, 
                    data
                    ];

            },

            tagName: 'div',

            className: 'graph-exercise clearfix card',
        
            Template: Template,

            Close: function(){
                var _this = this;
                if(_this.chart){
                    _this.chart.detach();
                    delete _this.chart;
                }
                view.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return view;
    
});
define('views/history/graph-sessions',
    [
        'backbone',
        'base/list-view',
        'templates/history/graph-sessions.html',
        'views/history/graph-sessions-item',
        'collections/session-instances'
    ],
    function(Backbone, BaseView, Template, ItemView){
    'use strict';

    var _createNewCollection = function(){
            var _this = this,
                coll = _this.collection,
                newObj = {},
                newList = [];

            coll.each(function(instance){
                var date = instance.get('date');
                instance.get('exercises').each(function(exercise){
                    var exid = exercise.get('exercise'),
                        exInfo;
                        
                    if(!newObj['_' + exid]){
                        exInfo = _this.model.get('exercises').findWhere({ id: exid });
                        newObj['_' + exid] = {
                                exercise: exInfo.get('name'),
                                muscle: exInfo.get('muscle'),
                                type: exInfo.get('type'),
                                items: []
                            };
                    }

                    newObj['_' + exid].items.push({ 
                            date: date, 
                            sets: exercise.get('sets').toJSON() 
                        });
                });
            });

            _.each(newObj, function(value, key){
                newList.push(value);
            });

            return new Backbone.Collection(newList, {parse: true});
        },

        view = BaseView.extend({

            render: function(){
                var _this = this;

                _this.collection = _createNewCollection.call(_this);

                return view.__super__.render.apply(_this, arguments);
            },
        
            Template: Template,

            ItemView: ItemView,

            listSelector: '.graphs',

            events: {
                'click .btn-back': 'go-back'
            },

            'go-back': function(e){
                e.preventDefault();

                App.navigate('#/workout/');
            }
        
        });
    
    return view;
    
});
define('views/measurements/measurement-item',
    [
        'base/base-view',
        'templates/measurements/measurements-item.html',
        'chartist'
        ,'moment'
    ],
    function(BaseView, Template, Chartist){
    'use strict';

        var view = BaseView.extend({

                initialize: function(){
                    var _this = this;
                    _this.options = _this.options || {};
                    _.extend(_this.options,{
                            noData: false,
                            lastOne: undefined
                        });
                    view.__super__.initialize.apply(_this, arguments);
                },

                render: function(){
                    var _this = this,
                        svg,
                        data;
                        
                    if(_this.model.get('items').length === 0){
                        _this.options.noData = true;
                        _this.options.lastOne = 
                        view.__super__.render.apply(_this, arguments);
                    }
                    else if(_this.model.get('items').length < 2){
                        _this.options.noData = true;
                        var lastOne = _this.model.get('items')[0];
                        _this.options.lastOne = lastOne.value;
                        _this.options.lastDate = moment(lastOne.date).format(App.enums.units.shortDate());
                        view.__super__.render.apply(_this, arguments);
                    }
                    else {
                        view.__super__.render.apply(_this, arguments);

                        data = {
                            labels: _.map(_this.model.get('items'), function(item){
                                        return moment(item.date).format(App.enums.units.shortDate());
                                    }),
                            series: [_.pluck(_this.model.get('items'),'value')]
                        };
                        
                        if(!_this.$('.ct-chart').length){
                            return _this;
                        }

                        svg = _this.$('.ct-chart')[0];

                        _this.chart = new Chartist.Line(svg, data, {
                            fullWidth: true,
                            chartPadding: {
                                right: 40
                            }
                        });
                    }

                    return _this;
                },
                
                Template: Template,

                tagName: 'div',

                className: 'card',

                Close: function(){
                    var _this = this;
                    if(_this.chart){
                        _this.chart.detach();
                        delete _this.chart;
                    }
                    view.__super__.Close.apply(_this, arguments);
                }

            });

        return view;

});
define('views/measurements/measurements',
    [
        'backbone',
        'base/list-view',
        'views/measurements/measurement-item',
        'templates/measurements/measurements.html',
        'collections/body-parts',
        'collections/measurements'
    ],
    function(Backbone, BaseView, ItemView, Template, BodyCollection, Measurements){
    'use strict';

    var _createCollection = function(){
            var _this = this,
                collection = {};
            _this.parts.each(function(part){
                    var model = part.toJSON();
                    model.items = [];
                    collection[model.id] = model;
                });
            _this.measurements.each(function(measurement){
                    _.each(measurement.get('items'), function(item){
                        var part = collection[item.partid];
                        if(!part){
                            return;
                        }
                        item.date = measurement.get('date');
                        part.items.push(item);
                    });
                });

            _this.collection = new Backbone.Collection(_.values(collection));
        },

        view = BaseView.extend({

            initialize: function(){
                var _this = this;
                _this.options = _this.options || {};
                _.extend(_this.options, {
                    goalTypes: App.enums.goals,
                    noData: false
                });
                view.__super__.initialize.apply(_this, arguments);
            },

            render: function(){
                var _this = this,
                    done = 0,
                    onRender = function(){
                        view.__super__.render.apply(_this, arguments);
                    },
                    onSuccess = function(){
                        ++done;
                        if(done === 2){
                            if(_this.measurements.length){
                                _createCollection.call(_this);   
                            }else {
                                _this.options.noData = true;
                                _this.collection = new Backbone.Collection([]);
                            }
                            onRender();
                        }
                    },
                    onError = function(){
                        _this.options.noData = true;
                        onRender();
                    };

                _this.parts = new BodyCollection();
                _this.measurements = new Measurements();

                _this.parts.fetch({
                    success: onSuccess,
                    error: onError
                });
                _this.measurements.fetch({
                    success: onSuccess,
                    error: onError
                });

                return _this;
            },
        
            Template: Template,

            ItemView: ItemView,

            listSelector: '.measurement-items',

            className: 'measurement-view'
        
        });
        
    return view;
    
});
define('views/measurements/measurement-add-item',
    [
        'base/base-view'
    ],
    function(BaseView){
    'use strict';

        var view = BaseView.extend({

            render: function(){
                var _this = this,
                    unittype = _this.model.get('unittype');

                _this.options = {
                        unit: App.enums.units[unittype]()
                    };

                return view.__super__.render.apply(_this, arguments);
            },
            
            Template: [
                    '<h4><%= name %></h4>',
                    '<p><%= description %></p>',
                    '<div class="form-control"><input type="number" min="0" step="any" <%if(unittype == "percent"){%> max="100" <%}%> /><i><%= unit %></i></div>' 
                    ].join(''),

            tagName: 'div',

            className: 'measurement-item card',

            getValue: function(){
                var _this = this,
                    value = _this.$('input').val();

                if(!value){ //Return if it is not filled
                    return;
                }

                value = parseFloat(value.replace(',','.').replace(/\s/g,''));

                if(isNaN(value)){ //return if it is still not a nummeric string
                    return;
                }

                if(_this.model.get('unittype') === 'percent' && value > 100 || value < 0){
                    App.toast('warning', 'Percent must be between 0 and 100');
                    return false;
                }

                return {
                        partid: _this.model.get('id'),
                        value: value
                    };
            }

        });

        return view;
});
define('views/measurements/measurements-add',
    [
        'base/list-view',
        'views/measurements/measurement-add-item',
        'templates/measurements/measurements-add.html',
        'models/measurement'
    ],
    function(BaseView, ItemView, Template, Model){
    'use strict';

    var view = BaseView.extend({

        options: {
            goalTypes: App.enums.goals
        },
    
        Template: Template,

        ItemView: ItemView,

        listSelector: '.measurement-items',

        className: 'measurement-view measurement-add',

        events: {
        	'click .btn-save': 'save'
        },

        'save': function(e){
        	e.preventDefault();
            var _this = this,
                values = [],
                comment = _this.$('textarea[name="comment"]').val(),
                onSuccess = function () {
                    App.toast('success', 'Measurement added');
                    App.navigate('#/measurements/');
                },
                onFail = function () {
                    App.toast('warning', 'Something went wrong, please check your fields');
                },
                model,
                fail = false;

            _.each(_this.children,function(child){
                var item = child.getValue ? child.getValue() : undefined;
                if(item === false){
                    fail = true;
                }
                if(item){
                    values.push(item);
                }
            });
            if(fail){ 
                return;
            }

            if(!values.length){
                onFail();
            }
            else{
                model = new Model({
                    date: (new Date()).getTime(),
                    comment: comment,
                    items: values
                });
                model.save(undefined,{
                    success: onSuccess,
                    error: onFail
                });
            }

        }
    
    });
    
    return view;
    
});
define('views/measurements/bodypart-add',
    [
        'base/base-view',
        'templates/measurements/bodypart-add.html',
        'models/body-part'
    ],
    function(BaseView, Template, Model){
    'use strict';

        var view = BaseView.extend({

                options: {
                    noData: false
                },
                
                Template: Template,

                events: {
                    'click .btn-save': 'save-part'
                },

                'save-part': function(e){
                    e.preventDefault();
                    var _this = this,
                        name = _this.$('[name="name"]').val(),
                        description = _this.$('[name="description"]').val(),
                        unittype = _this.$('[name="unittype"]').val(),
                        model;

                    if(!name){
                        App.toast('warning', 'No name set');
                        return;
                    }

                    model = new Model({
                        name: name,
                        description: description,
                        unittype: unittype
                    });
                    model.save(undefined,{
                        success: function(){
                            App.toast('info', 'Part added');
                            App.navigate('#/measurements/');
                        },
                        error: function(){
                            App.toast('warning', 'Whoops.. Something went wrong');
                        }
                    });
                }

            });

        return view;

});
define('views/tutorial/tutorial',
    [
        'base/base-view',
        'templates/tutorial/tutorial.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Template){

    var view = BaseView.extend({

        options: {
            currentStep: 0,
            onComplete: undefined
        },

        render: function(){
            var _this = this;
            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

        className: 'tutorial-view',
    
        Template: Template,

        events: {
            'click .btn-next': 'goToNext',
            'click .btn-done': 'allDone',
            'click .btn-skip': 'skip'
        },

        bindings: {
            '[name="age"]': 'age',
            '[name="gender"]': 'gender',
            '[name="goaltype"]': 'goalType',
            '[name="goal"]': 'targetWeight',
            '[name="units"]': 'units',

            '.tut-weight-goal .input-group-addon': {
                observe: 'units',
                onGet: function(value){
                    return value === 'metric' ? 'kg': 'lbs';
                }
            }
        },

        'goToNext': function(e){
            e.preventDefault();
            var _this = this,
                currentStep = _this.options.currentStep,
                counters = _this.$('.tutorial-top li'),
                sections = _this.$('section');

            if(currentStep === 1){
                if(_this.model.get('gender') === '' || _this.model.get('age') === '' || _this.model.get('units') === ''){
                    App.toast('info', 'Please fill in all required fields');
                    return false;
                }
            }
            else if(currentStep === 2){
                if(_this.model.get('goalType') === ''){
                    App.toast('info', 'Please fill in all required fields');
                    return false;
                }
            }

            currentStep = ++_this.options.currentStep;

            sections.removeClass('active');
            $(sections[currentStep]).addClass('active');
            
            counters.removeClass('active');
            $(counters[currentStep]).addClass('active');
        },

        'allDone': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.sync('update', _this.model, {
                success: function(){
                    _this.options.onComplete();
                    _this.Close();
                }
            });
        },

        'skip': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.set('age', '30');
            _this.model.set('gender', '1');
            _this.model.set('goalType', '3');
            _this.model.set('targetWeight', '');
            _this.model.set('units','metric');

            _this.model.sync('update', _this.model, {
                success: function(){
                    _this.options.onComplete();
                    _this.Close();
                }
            });
        }
        
    });
    
    return view;
    
});
define('views/license',
    [
        'base/base-view',
        'templates/license.html'
    ],
    function(BaseView, Template){
    'use strict';
    
    var view = BaseView.extend({

    	className: 'license-view',
    
        Template: Template
        
    });
    
    return view;
    
});
define('views/plan/server-item',
    [
        'base/base-view',
        'templates/plan/server-item.html'
    ],
    function(BaseView, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'workout-item card',

        events: {
            'click .get-item': 'getItem'
        },

        'getItem': function(e){
            e.preventDefault();
            var data,
                Modeldef,
                onDone = function(){
                    if(data && Modeldef){
                        var model = new Modeldef(data);
                        model.sync('create', model, {
                            success: function(){
                                App.toast('success', 'Successfully added workout.');
                            },
                            error: function(){
                                App.toast('error', 'Failed loading workout.');
                            }
                        });
                    }
                };

            $.get( window.apiurl + '/get/' + this.model.get('id'),
                function(mdl){
                    data = mdl;
                    onDone();
                });

            require(['models/workout'], function(Model){
                console.log('Model');
                Modeldef = Model;
                onDone();
            });
        }
    
    });
    
    return View;
    
});
define('models/serveritem',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined
        }

    });

});

define('collections/serveritems',
    [
        'backbone',
        'models/serveritem'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        url: window.apiurl + '/list'

    });
    
});

define('views/plan/server-list',
    [
        'base/list-view',
        'views/plan/server-item',
        'collections/serveritems',
        'templates/plan/server-list.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    'use strict';
    
    var View = ParentView.extend({

        render: function(){
            var _this = this;
            View.__super__.render.apply(_this, arguments);

            return _this;
        },
    
        Template: Template,

        className: 'server-list',

        tagName: 'div',

        listSelector: '.workout-table',

        ItemView: ItemView
            
    });
    
    return View;
    
});

define('components/menu',[
        'jquery',
        'backbone',
        'base/base-view',
        'templates/menu/menu.html'
    ], function ($, Backbone, BaseView, Template) {
    'use strict';
    
    var view = BaseView.extend({

        initialize: function(){
            this.currentItem = 0;
        },

        colorpalette: ['blue', 'blue', 'orange', 'red', 'pantone'],

        Template: Template,

        render: function() {
            var _this = this;

            view.__super__.render.call(_this);

            App.Events.on('navigate:done', function(place){
                _this.$('li').removeClass('active');
                _this.$('li.nav-' + place).addClass('active');
            });

            return _this;
        },

        className: 'top-menu'
        
    });

    return view;

});

define('views/freerun/freerun-item',
    [
        'base/base-view',
        'collections/set-instances',
        'templates/freerun/freerun-item.html'
    ],
    function(BaseView, SetCollection, Template){
    'use strict';

    var view = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options.units = App.enums.units.getAll();
            
            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

        renderMovements: function (muscleid){
            var _this = this,
                movements = _this.options.parent.movements.filter(function(mov){ return mov.get('muscle') === muscleid; }),
                html = [];

            _.each(movements, function(movement){
                html.push('<option value="' + movement.get('id') + '">' + movement.get('name') + '</option>');
            });

            _this.$('[name="movement"]').html(html.join(''));

            _this.model.set('exercise', movements.length ? movements[0].get('id') : '');

            setTimeout(function(){
                //Need to trigger this so that the newly created html will be catched..
                _this.stickit();
            }, 0);
        },

    	className: 'free-run-item card',
    
        Template: Template,

        bindings: {
            'select[name="muscle"]': {
                    observe: 'muscle',
                    onSet: function (value) {
                        var selectedValue = this.options.parent.muscles.findWhere({id: value});
                        this.renderMovements(value);
                        return value;
                    }
                },
            'select[name="movement"]': 'exercise'
        },

        getData: function(){
            var _this = this,
                list = [];
            _this.$('.sets-item').each(function(i, item){
                list.push({
                    "reps": $(item).find('[name="reps"]').val(),
                    "weight": $(item).find('[name="weight"]').val(),
                    "comment": ""
                });
            });
            _this.model.set('sets', new SetCollection(list));
        },

        events: {
            'click .btn-add-set': 'add-set'
        },

        'add-set': function(e){
            e.preventDefault(); 
            //This should have its own template file
            var html = '<div class="sets-item form-group">' +
                '<input name="reps" placeholder="Reps" min="0" type="number" class="form-control"> ' +
                '<input name="weight" placeholder="Weight ('+
                 this.options.units.weight +
                 ')" min="0" type="number" class="form-control">' +
            '</div>';

            this.$('.sets-list').append(html);
        }
        
    });
    
    return view;
    
});
define('views/freerun/freerun',
    [
        'base/list-view',
        'templates/freerun/freerun.html',
        'views/freerun/freerun-item',
        'backbone'
        ,'backbone.stickit'
    ],
    function(BaseView, Template, ItemView, InstanceModel, Backbone){
    'use strict';

    var view = BaseView.extend({

        initialize: function(opt){
            var _this = this;
            _this.options = _.extend({}, opt || {});
            view.__super__.initialize.apply(_this, arguments);
        },

        render: function(){
            var _this = this;

            _this.collection = _this.model.get('exercises');

            _this.collection.on('add', function(model, collection, options){
                _this.addChild(model);
            });

            return view.__super__.render.apply(_this, arguments);
        },

    	className: 'free-run',
    
        Template: Template,

        ItemView: ItemView,

        listSelector: '.exercise-list',

        events: {
            'click .btn-add-exercise': 'add-exercise',
            'click .btn-save': 'save',
            'click .btn-back': 'go-back'
        },

        'add-exercise': function(e){
            e.preventDefault();
            this.collection.add({});
        },

        'save': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.set('comment', _this.$('textarea[name="comment"]').val());

            _.each(_this.children, function(view){
                view.getData();
            });

            var totalLifted = this.calcWeightLifted(_this.model.get('exercises'));


            if(totalLifted > 0){
                _this.$('.weight-lifted').text(totalLifted + App.enums.units.weight());
            }
            else {
                _this.$('.welldone-box h2').text('Another workout well done!');
            }

            _this.model.save(null, {
                success: function(attr){
                    _this.$('.welldone-box').addClass('in');

                    setTimeout(function() {
                        App.navigate('#/workout');
                    }, 2500);
                }
            });

        },

        calcWeightLifted: function (list) {
            var totalWeight = 0;
            list.each(function(item){
                item.get('sets').each(function(set){
                    var reps = set.get('reps');
                    var weight = set.get('weight');
                    var ireps = parseInt(reps);
                    var iweight = parseInt(weight);
                    if(reps && weight && ireps > 0 && iweight > 0){
                        totalWeight += ireps * iweight;
                    }
                    
                });
            });
            return totalWeight;
        },

        'go-back': function(e){
            e.preventDefault();

            App.Events.trigger('workout-wizard:view', 'sessions');
        }

        
    });
    
    return view;
    
});
define('views/freerun/freerun-history-item',
    [
        'base/base-view',
        'templates/freerun/freerun-history-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){
    'use strict';

    var View = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options = {
                formatedDate : moment(_this.model.get('date') ).format(App.enums.units.dateTime())
            };

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'tr',
    
        Template: Template,

        events: {
            'click': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                id = _this.model.get('id');
            App.navigate('#/freerun/history/' + id);
        }
    
    });
    
    return View;
    
});
define('views/freerun/freerun-history-list',
    [
        'base/list-view',
        'templates/freerun/freerun-history-list.html',
        'views/freerun/freerun-history-item'
    ],
    function(BaseView, Template, ItemView){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        ItemView: ItemView,

        listSelector: 'tbody',

        events: {
            'click .btn-back': 'go-back'
        },

        'go-back': function(e){
            e.preventDefault();

            App.navigate('#/workout/');
        }
    
    });
    
    return View;
    
});
define('views/freerun/history-session-item',
    [
        'base/base-view',
        'templates/freerun/history-session-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){
    'use strict';
    
    var View = BaseView.extend({

        initialize: function(opt){
            var _this = this;
            _this.options = _this.options || {};
            _.extend(_this.options, opt);
        },

        render: function(){
            var _this = this;

            _.extend(_this.options, {
                formatedDate : moment(_this.model.date ).format(App.enums.units.dateTime()),
                units: App.enums.units.getAll()
            });

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'div',

        className: 'card',
    
        Template: Template,

        events: {
            'click td': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                parent = _this.model.get('parent'),
                id = _this.model.get('id');
            App.navigate('#/freerun/history/');
        }
    
    });
    
    return View;
    
});
define('views/freerun/history-session',
    [
        'base/base-view',
        'templates/freerun/history-session.html',
        'views/freerun/history-session-item'
        ,'moment'
    ],
    function(BaseView, Template, ItemView){
    'use strict';

    var View = BaseView.extend({

            initialize: function(opt){
                var _this = this;
                _this.options = _.extend(_this.options || {}, opt);

                _this.children = [];
            },
        
            Template: Template,

            render: function(){
                var _this = this,
                    instanceId = _this.model.get('id');

                _this.options.formatedDate = moment(_this.model.get('date') ).format( App.enums.units.dateTime() );
                
                View.__super__.render.apply(_this, arguments);

                _this.addExercises();

                return _this;
            },

            addExercises: function(){
                var _this = this,
                    els = [];

                _.each(_this.model.get('exercises'), function(exercise){
                    var exId = exercise.id,//get('id'),
                        muscleId = exercise.muscle,//.get('muscle'),
                        movementId = exercise.exercise,// .get('exercise'),
                        muscle = _this.options.muscles.findWhere({id: muscleId}),
                        movement = _this.options.movements.findWhere({id: movementId}),
                        view = new ItemView({
                                musclename: muscle.get('name'),
                                movementname: movement.get('name')
                            });

                    view.model = exercise;

                    _this.children.push(view);
                    els.push(view.render().el);

                });

                _this.$('.exercise-history-list').append(els);

            },

            events: {
                'click .btn-back': 'go-back'
            },

            'go-back': function(e){
                e.preventDefault();

                window.history.back();
            },

            Close: function(){
                var _this = this;
                _.each(_this.children, function(child){
                    child.Close();
                });
                _this.children = [];

                View.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return View;
    
});
define('workoutplans/simple3split', [], function(){
    return {
        "name": "Simple 3 split",
        "sessions": [
            {
                "order": 0,
                "name": "Back & Bicep",
                "description": "Back & Bicep day!! !!",
                "estTime": 45,
                "exercises": [
                    {
                        "order": 0,
                        "id": "e25dfe2f-492b-0c91-a349-b930881cd4b7",
                        "name": "Pulldown",
                        "muscle": "Lats",
                        "muscleid": "4f54b3b9-c151-4c37-908c-4595d935e5fa",
                        "sets": "3"
                    },
                    {
                        "order": 1,
                        "id": "1fb3d779-a68e-63bf-5997-321ffd4ae50a",
                        "name": "Barbell Rows",
                        "muscle": "Back thickness",
                        "muscleid": "1be353f4-d284-4b4f-ffb1-a3d07d4a3edd",
                        "sets": "3"
                    },
                    {
                        "order": 2,
                        "id": "2d6e8d78-80fc-ee07-9da4-35394f6c2853",
                        "name": "Barbell curls",
                        "muscle": "Bicep",
                        "muscleid": "57eeecac-d218-49ba-3ba3-176cd235d737",
                        "sets": "3"
                    }
                ],
                "id": "c917b9fc-1abb-b4ce-8aea-5318d54d9c5e"
            },
            {
                "order": 1,
                "name": "Chest & Tricep",
                "description": "Chest day!!",
                "sets": 0,
                "estTime": 45,
                "exercises": [
                    {   "id": "5b2c82b6-0ba1-b68a-9a4f-ba9c27388667",
                        "order": 0,
                        "name": "Incline dumbbell press",
                        "muscle": "Chest",
                        "muscleid": "7ad26a35-4290-4c28-cbb5-17188ea00f1a",
                        "sets": 3
                    },
                    {
                        "order": 1,
                        "id": "1ad18161-1b05-949c-e51e-8025618cfb56",
                        "name": "Cable crossover",
                        "muscle": "Chest",
                        "muscleid": "7ad26a35-4290-4c28-cbb5-17188ea00f1a",
                        "sets": 3
                    },
                    {
                        "order": 2,
                        "id": "9db0681f-8da8-c42c-baa2-02dde2564ea2",
                        "name": "Triceps Pushdown",
                        "muscle": "Tricep",
                        "muscleid": "8024fb28-fe70-4de9-4791-39382c105e9e",
                        "sets": "3"
                    }
                ],
                "id": "7e550395-9c28-11b6-f071-e0a0298a128f"
            },
            {
                "order": 2,
                "id": "68c6c7a9-d167-1955-373d-751a87f3d649",
                "name": "Legs",
                "estTime": "45",
                "description": "Eehh, optional brah!",
                "exercises": [
                    {
                        "order": 0,
                        "id": "35f8b26d-1dfa-0d58-13a2-3e69edf3bbcc",
                        "name": "Squat",
                        "muscle": "Hamstrings",
                        "muscleid": "ac38b26d-1dfa-0d58-13a2-3e69edf3b3aa",
                        "sets": "3"
                    },
                    {
                        "order": 1,
                        "id": "84d4c904-99b6-abba-7c33-b9253682faba",
                        "name": "Deadlift",
                        "muscle": "Hamstrings",
                        "muscleid": "ac38b26d-1dfa-0d58-13a2-3e69edf3b3aa",
                        "sets": "3"
                    },
                    {
                        "order": 2,
                        "id": "8c73d0a5-863d-f38a-0abc-439b1659f232",
                        "name": "Legg press",
                        "muscle": "Calfs",
                        "muscleid": "4d3e252b-cfba-4c84-01ab-2825970c3a33",
                        "sets": "3"
                    }
                ]
            }
        ]
    };
});
define('workoutplans/measurements', [], function(){
	
	return [{
                name: 'Weight',
                description: 'Choose a time of day, and always weigh your self at the same time. For example early morning before breakfast.',
                unittype: 'weight'
            },
            {
                name: 'Body Fat',
                description: '',
                unittype: 'percent' 
            },
            {
            	name: 'Chest',
                description: '',
                unittype: 'shortLength'
            },
            {
            	name: 'Shoulders',
                description: '',
                unittype: 'shortLength'
            },
            {
            	name: 'Arms',
                description: '',
                unittype: 'shortLength'	
            },
            {
            	name: 'Waist',
                description: '',
                unittype: 'shortLength'	
            }]	
})

;
