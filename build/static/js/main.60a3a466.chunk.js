/*! For license information please see main.60a3a466.chunk.js.LICENSE.txt */
(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),l=(n(16),n(1)),s=n(7),c=n(8),u=n(2),p=n(10),d=n(9),h=n(4),f=n(3),y=n.n(f);function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(H){s=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new L(a||[]);return r(i,"_invoke",{value:E(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(H){return{type:"throw",arg:H}}}e.wrap=c;var p={};function d(){}function h(){}function f(){}var y={};s(y,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(T([])));v&&v!==t&&n.call(v,o)&&(y=v);var b=f.prototype=d.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var s=u(e[a],e,o);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(p).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(s.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=S(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return h.prototype=f,r(b,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:h,configurable:!0}),h.displayName=s(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),s(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new x(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),s(b,l,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),B(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;B(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}var g=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(m().mark((function n(){var r,a,o,i;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=15;break}return r=new y.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:return n.next=7,r.eth.net.getId().then(function(){var e=Object(l.a)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(5===t){e.next=3;break}return e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:5}]});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:e(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),t(n.t0);case 13:n.next=16;break;case 15:window.web3?(a=window.web3,console.log("Injected web3 detected."),e(a)):(o=new y.a.providers.HttpProvider("https://goerli.infura.io/v3/"),i=new y.a(o),console.log("No web3 instance injected, using Local web3."),e(i));case 16:case"end":return n.stop()}}),n,null,[[2,10]])}))))}))};n(18);function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(H){s=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new L(a||[]);return r(i,"_invoke",{value:E(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(H){return{type:"throw",arg:H}}}e.wrap=c;var p={};function d(){}function h(){}function f(){}var y={};s(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(T([])));g&&g!==t&&n.call(g,o)&&(y=g);var b=f.prototype=d.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var s=u(e[a],e,o);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(p).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(s.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=S(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return h.prototype=f,r(b,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:h,configurable:!0}),h.displayName=s(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),s(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new x(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),s(b,l,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),B(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;B(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}var b=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).componentDidMount=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g();case 3:return n=t.sent,r=n.currentProvider.selectedAddress,t.next=7,n.eth.net.getId();case 7:return a=t.sent,o=h.networks[a],i=new n.eth.Contract(h.abi,o&&o.address),t.next=12,i.methods.getGameState().call();case 12:l=t.sent,e.setState({web3:n,playerAccount:r,game:i,maxBet:l.gameMaxBet}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])}))),e.newRound=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.playerAccount,a=n.game,t.next=3,a.methods.newRound().send({from:r,value:e.state.betSize,gas:45e4});case 3:return t.next=5,a.methods.getDealerState().call();case 5:return o=t.sent,t.next=8,a.methods.getPlayerState().call();case 8:return i=t.sent,t.next=11,a.methods.getGameState().call();case 11:l=t.sent,e.setState({stage:l.stage,maxBet:l.gameMaxBet,dealerHand:o.hand,playerHand:i.hand,splitHand:i.splitHand,dealerScore:o.score,handScore:i.handScore,splitHandScore:i.splitHandScore,bet:i.bet,splitBet:i.splitBet,doubleDownBet:i.doubleDownBet,splitDoubleDownBet:i.splitDoubleDownBet});case 13:case"end":return t.stop()}}),t)}))),e.split=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.playerAccount,a=n.game,t.next=3,a.methods.split().send({from:r,value:e.state.betSize,gas:45e4});case 3:return t.next=5,a.methods.getDealerState().call();case 5:return o=t.sent,t.next=8,a.methods.getPlayerState().call();case 8:return i=t.sent,t.next=11,a.methods.getGameState().call();case 11:l=t.sent,e.setState({stage:l.stage,maxBet:l.gameMaxBet,dealerHand:o.hand,playerHand:i.hand,splitHand:i.splitHand,dealerScore:o.score,handScore:i.handScore,splitHandScore:i.splitHandScore,bet:i.bet,splitBet:i.splitBet,doubleDownBet:i.doubleDownBet,splitDoubleDownBet:i.splitDoubleDownBet});case 13:case"end":return t.stop()}}),t)}))),e.doubleDown=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.playerAccount,a=n.game,t.next=3,a.methods.doubleDown().send({from:r,value:e.state.betSize,gas:45e4});case 3:return t.next=5,a.methods.getDealerState().call();case 5:return o=t.sent,t.next=8,a.methods.getPlayerState().call();case 8:return i=t.sent,t.next=11,a.methods.getGameState().call();case 11:l=t.sent,e.setState({stage:l.stage,maxBet:l.gameMaxBet,dealerHand:o.hand,playerHand:i.hand,splitHand:i.splitHand,dealerScore:o.score,handScore:i.handScore,splitHandScore:i.splitHandScore,bet:i.bet,splitBet:i.splitBet,doubleDownBet:i.doubleDownBet,splitDoubleDownBet:i.splitDoubleDownBet});case 13:case"end":return t.stop()}}),t)}))),e.hit=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.playerAccount,a=n.game,t.next=3,a.methods.hit().send({from:r,gas:45e4});case 3:return t.next=5,a.methods.getDealerState().call();case 5:return o=t.sent,t.next=8,a.methods.getPlayerState().call();case 8:return i=t.sent,t.next=11,a.methods.getGameState().call();case 11:l=t.sent,e.setState({stage:l.stage,maxBet:l.gameMaxBet,dealerHand:o.hand,playerHand:i.hand,splitHand:i.splitHand,dealerScore:o.score,handScore:i.handScore,splitHandScore:i.splitHandScore,bet:i.bet,splitBet:i.splitBet,doubleDownBet:i.doubleDownBet,splitDoubleDownBet:i.splitDoubleDownBet});case 13:case"end":return t.stop()}}),t)}))),e.stand=Object(l.a)(v().mark((function t(){var n,r,a,o,i,l;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.playerAccount,a=n.game,t.next=3,a.methods.stand().send({from:r,gas:45e4});case 3:return t.next=5,a.methods.getDealerState().call();case 5:return o=t.sent,t.next=8,a.methods.getPlayerState().call();case 8:return i=t.sent,t.next=11,a.methods.getGameState().call();case 11:l=t.sent,e.setState({stage:l.stage,maxBet:l.gameMaxBet,dealerHand:o.hand,playerHand:i.hand,splitHand:i.splitHand,dealerScore:o.score,handScore:i.handScore,splitHandScore:i.splitHandScore,bet:i.bet,splitBet:i.splitBet,doubleDownBet:i.doubleDownBet,splitDoubleDownBet:i.splitDoubleDownBet});case 13:case"end":return t.stop()}}),t)}))),e.state={betSize:"",web3:null,playerAccount:null,game:null,dealerHand:[],playerHand:[],splitHand:[]},e.onChange=e.onChange.bind(Object(u.a)(e)),e}return Object(c.a)(n,[{key:"onChange",value:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&this.setState({betSize:e.target.value})}},{key:"render",value:function(){var e,t=["A","2","3","4","5","6","7","8","9","T","J","Q","K"],n=[11,2,3,4,5,6,7,8,9,10,10,10,10],r=[String.fromCharCode(9827),String.fromCharCode(9830),String.fromCharCode(9829),String.fromCharCode(9824)];2===this.state.playerHand.length&&0===this.state.splitHand.length&&n[this.state.playerHand[0]%13]===n[this.state.playerHand[1]%13]&&(e=a.a.createElement("button",{onClick:this.split.bind(this)},"Split"));var o,i,l=this.state.splitHand.map((function(e,n){return a.a.createElement("td",{align:"center",border:"20px",key:n}," ",t[e%13],r[e%4]," ")})),s=this.state.splitHand.length>0;if(this.state.splitHandScore>21)var c=" - Busted!";s&&(o=a.a.createElement("td",null,a.a.createElement("i",null,"Split Hand Score: ",this.state.splitHandScore,a.a.createElement("b",null,c),"\xa0\xa0\xa0\xa0")),i=a.a.createElement("td",null,a.a.createElement("i",null,"Bet: ",parseInt(this.state.splitBet)+parseInt(this.state.splitDoubleDownBet)," wei\xa0\xa0\xa0\xa0")));var u,p,d,h,f,y,m=2===this.state.playerHand.length||2===this.state.splitHand.length;if(m&&"1"===this.state.stage&&(u=a.a.createElement("button",{onClick:this.doubleDown.bind(this)},"Double Down")),m&&"2"===this.state.stage&&(p=a.a.createElement("button",{onClick:this.doubleDown.bind(this)},"Double Down")),"1"===this.state.stage&&(d=a.a.createElement("button",{onClick:this.stand.bind(this)},"Stand")),"2"===this.state.stage&&(h=a.a.createElement("button",{onClick:this.stand.bind(this)},"Stand")),"1"===this.state.stage&&(f=a.a.createElement("button",{onClick:this.hit.bind(this)},"Hit")),"2"===this.state.stage&&(y=a.a.createElement("button",{onClick:this.hit.bind(this)},"Hit")),!this.state.web3)return a.a.createElement("div",null,"Loading Web3, accounts, and contract...");var g,v,b,w=this.state.dealerHand.map((function(e,n){return a.a.createElement("td",{align:"center",border:"20px",key:n}," ",t[e%13],r[e%4]," ")})),x=this.state.playerHand.map((function(e,n){return a.a.createElement("td",{align:"center",border:"20px",key:n}," ",t[e%13],r[e%4]," ")})),E=this.state.playerHand.length>0;if(this.state.handScore>21)var S=" - Busted!";if(this.state.dealerScore>21)var k=" - Busted!";return E&&(g=a.a.createElement("td",null,a.a.createElement("i",null,"Dealer Score: ",this.state.dealerScore,a.a.createElement("b",null,k))),v=a.a.createElement("td",null,a.a.createElement("i",null,"Hand Score: ",this.state.handScore,a.a.createElement("b",null,S),"\xa0\xa0\xa0\xa0")),b=a.a.createElement("td",null,a.a.createElement("i",null,"Bet: ",parseInt(this.state.bet)+parseInt(this.state.doubleDownBet)," wei\xa0\xa0\xa0\xa0"))),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Blackjack dApp"),a.a.createElement("h3",null,"Dealer:"),a.a.createElement("table",{align:"center",style:{"font-size":"24px"}},a.a.createElement("tbody",null,a.a.createElement("tr",null,w))),a.a.createElement("table",{align:"center"},a.a.createElement("tbody",null,a.a.createElement("tr",null,g))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h3",null,"Your Cards:"),a.a.createElement("table",{align:"center",style:{"font-size":"24px"}},a.a.createElement("tbody",null,a.a.createElement("tr",null,x))),a.a.createElement("table",{align:"center"},a.a.createElement("tbody",null,a.a.createElement("tr",null,v,b))),d,"\xa0\xa0\xa0\xa0\xa0\xa0",f,"\xa0\xa0\xa0\xa0\xa0\xa0",u,"\xa0\xa0\xa0\xa0\xa0\xa0",e,a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("table",{align:"center",style:{"font-size":"24px"}},a.a.createElement("tbody",null,a.a.createElement("tr",null,l))),a.a.createElement("table",{align:"center"},a.a.createElement("tbody",null,a.a.createElement("tr",null,o,i))),h,"\xa0\xa0\xa0\xa0\xa0\xa0",y,"\xa0\xa0\xa0\xa0\xa0\xa0",p,a.a.createElement("br",null),a.a.createElement("br",null),"Place your bet: ",a.a.createElement("input",{value:this.state.betSize,onChange:this.onChange})," wei \xa0\xa0\xa0\xa0\xa0\xa0",a.a.createElement("button",{onClick:this.newRound.bind(this)},"Deal"),a.a.createElement("br",null),a.a.createElement("div",null," Maximum bet: ",this.state.maxBet," wei"),a.a.createElement("br",null),a.a.createElement("i",null,"(connected account: ",this.state.playerAccount,")"),a.a.createElement("p",null),a.a.createElement("hr",{style:{height:2}}),a.a.createElement("p",null,"Blackjack Pays 3:2 ",String.fromCharCode(9827)," Dealer Stands on Soft 17 ",String.fromCharCode(9829)," No Insurance ",String.fromCharCode(9830)," Double After Split ",String.fromCharCode(9824)," No Resplit"))}}]),n}(r.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}()},4:function(e){e.exports=JSON.parse('{"contractName":"Blackjack","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"round","type":"uint64"},{"indexed":false,"internalType":"uint8","name":"cardValue","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"score","type":"uint8"}],"name":"CardDrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"LogNewProvableQuery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"cards","type":"string"}],"name":"LogNewWolframRandomDraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"round","type":"uint64"},{"indexed":false,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"bet","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"playerHand","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"playerSplitHand","type":"uint256[]"}],"name":"PlayerHand","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"round","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"payout","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"playerScore","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"dealerScore","type":"uint8"}],"name":"Result","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"round","type":"uint64"},{"indexed":false,"internalType":"enum Blackjack.Stage","name":"newStage","type":"uint8"}],"name":"StageChanged","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"}],"name":"__callback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"},{"internalType":"bytes","name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"doubleDown","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getDealerState","outputs":[{"internalType":"uint256[]","name":"hand","type":"uint256[]"},{"internalType":"uint256","name":"score","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGameState","outputs":[{"internalType":"uint256","name":"gameId","type":"uint256"},{"internalType":"uint64","name":"startTime","type":"uint64"},{"internalType":"uint256","name":"gameMaxBet","type":"uint256"},{"internalType":"uint64","name":"round","type":"uint64"},{"internalType":"enum Blackjack.Stage","name":"stage","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlayerState","outputs":[{"internalType":"uint256[]","name":"hand","type":"uint256[]"},{"internalType":"uint256[]","name":"splitHand","type":"uint256[]"},{"internalType":"uint256","name":"handScore","type":"uint256"},{"internalType":"uint256","name":"splitHandScore","type":"uint256"},{"internalType":"uint256","name":"bet","type":"uint256"},{"internalType":"uint256","name":"splitBet","type":"uint256"},{"internalType":"uint256","name":"doubleDownBet","type":"uint256"},{"internalType":"uint256","name":"splitDoubleDownBet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"newRound","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"split","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stand","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"networks":{"5":{"address":"0x9f8c03a5037D0242B0d032b68d5c211114409961"}}}')}},[[11,1,2]]]);
//# sourceMappingURL=main.60a3a466.chunk.js.map