/*!
 * Vue-Lazyload.js v1.0.0-rc12
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueLazyload=e()}(this,function(){"use strict";function t(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function e(t,e){if(!t||!e)return t||{};if(t instanceof Object)for(var n in e)t[n]=e[n];return t}function n(t,e){for(var n=!1,i=0,r=t.length;i<r;i++)if(e(t[i])){n=!0;break}return n}function i(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),i=[],r=t.parentNode,o=r.offsetWidth*e,s=void 0,a=void 0,u=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),s=t.lastIndexOf(" "),s===-1?(a=t,u=999998):(a=t.substr(0,s),u=parseInt(t.substr(s+1,t.length-s-2),10)),i.push([u,a])}),i.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(e[1].indexOf(".webp",e[1].length-5)!==-1)return 1;if(t[1].indexOf(".webp",t[1].length-5)!==-1)return-1}return 0});for(var d="",l=void 0,c=i.length,h=0;h<c;h++)if(l=i[h],l[0]>=o){d=l[1];break}return d}}function r(t,e){for(var n=void 0,i=0,r=t.length;i<r;i++)if(e(t[i])){n=t[i];break}return n}function o(){if(!h)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function s(t,e){var n=null,i=0;return function(){if(!n){var r=Date.now()-i,o=this,s=arguments,a=function(){i=Date.now(),n=!1,t.apply(o,s)};r>=e?a():n=setTimeout(a,e)}}}function a(){if(h){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}function u(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":d(t))}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h="undefined"!=typeof window,f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return h&&window.devicePixelRatio||t},p=a(),v={on:function(t,e,n){p?t.addEventListener(e,n,{passive:!0}):t.addEventListener(e,n,!1)},off:function(t,e,n){t.removeEventListener(e,n)}},y=function(t,e,n){var i=new Image;i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(t){n(t)}},m=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},g=function(t){return m(t,"overflow")+m(t,"overflow-y")+m(t,"overflow-x")},b=function(t){if(h){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(g(e)))return e;e=e.parentNode}return window}},w={},L=function(){function t(e){var n=e.el,i=e.src,r=e.error,o=e.loading,s=e.bindType,a=e.$parent,u=e.options,d=e.elRenderer;l(this,t),this.el=n,this.src=i,this.error=r,this.loading=o,this.bindType=s,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.initState(),this.performanceData={init:Date.now(),loadStart:null,loadEnd:null},this.rect=n.getBoundingClientRect(),this.$parent=a,this.elRenderer=d}return c(t,[{key:"initState",value:function(){this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,i=t.error;this.src=e,this.loading=n,this.error=i,this.attempt=0,this.initState()}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"load",value:function(){var t=this;return this.attempt>this.options.attempt-1&&this.state.error?void(this.options.silent||console.log("error end")):this.state.loaded||w[this.src]?this.render("loaded",!0):(this.render("loading",!1),this.attempt++,this.record("loadStart"),void y({src:this.src},function(e){t.src=e.src,t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),w[t.src]=1},function(e){t.state.error=!0,t.state.loaded=!1,t.render("error",!1)}))}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",A=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],E=function(a){return function(){function d(t){var e=this,n=t.preLoad,i=t.error,r=t.loading,a=t.attempt,u=t.silent,c=t.scale,h=t.listenEvents,p=(t.hasbind,t.filter),v=t.adapter;l(this,d),this.ListenerQueue=[],this.options={silent:u||!0,preLoad:n||1.3,error:i||k,loading:r||k,attempt:a||3,scale:f(c),ListenEvents:h||A,hasbind:!1,supportWebp:o(),filter:p||{},adapter:v||{}},this.initEvent(),this.lazyLoadHandler=s(function(){var t=!1;e.ListenerQueue.forEach(function(e){e.state.loaded||(t=e.checkInView(),t&&e.load())})},200)}return c(d,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this.options,t)}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),this.options.hasbind=!0,this.initListen(window,!0)}},{key:"add",value:function(t,e,r){var o=this;if(n(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,e),a.nextTick(this.lazyLoadHandler);var s=this.valueFormatter(e.value),u=s.src,d=s.loading,l=s.error;a.nextTick(function(){var n=i(t,o.options.scale);n&&(u=n);var s=Object.keys(e.modifiers)[0],c=void 0;s&&(c=r.context.$refs[s],c=c?c.$el||c:document.getElementById(s)),c||(c=b(t)),o.ListenerQueue.push(o.listenerFilter(new L({bindType:e.arg,$parent:c,el:t,loading:d,error:l,src:u,elRenderer:o.elRenderer.bind(o),options:o.options}))),o.ListenerQueue.length&&!o.options.hasbind&&(o.options.hasbind=!0,o.initListen(window,!0),c&&o.initListen(c,!0),o.lazyLoadHandler(),a.nextTick(function(){return o.lazyLoadHandler()}))})}},{key:"update",value:function(t,e){var n=this,i=this.valueFormatter(e.value),o=i.src,s=i.loading,u=i.error,d=r(this.ListenerQueue,function(e){return e.el===t});d&&d.src!==o&&d.update({src:o,loading:s,error:u}),this.lazyLoadHandler(),a.nextTick(function(){return n.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){var n=r(this.ListenerQueue,function(t){return t.el===e});n&&t(this.ListenerQueue,n)&&n.destroy(),this.options.hasbind&&!this.ListenerQueue.length&&this.initListen(window,!1)}}},{key:"removeComponent",value:function(e){e&&t(this.ListenerQueue,e),this.options.hasbind&&!this.ListenerQueue.length&&this.initListen(window,!1)}},{key:"initListen",value:function(t,e){var n=this;this.options.hasbind=e,this.options.ListenEvents.forEach(function(i){return v[e?"on":"off"](t,i,n.lazyLoadHandler)})}},{key:"initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function i(){r.$off(t,i),n.apply(r,arguments)}var r=e;e.$on(t,i)},this.$off=function(n,i){return i?void t(e.Event.listeners[n],i):void(e.Event.listeners[n]=[])},this.$emit=function(t,n,i){e.Event.listeners[t].forEach(function(t){return t(n,i)})}}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"elRenderer",value:function(t,e,n){if(t.el){var i=t.el,r=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}r?i.style[r]="url("+o+")":i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options)}}},{key:"listenerFilter",value:function(t){return this.options.filter.webp&&this.options.supportWebp&&(t.src=this.options.filter.webp(t,this.options)),this.options.filter.customer&&(t.src=this.options.filter.customer(t,this.options)),t}},{key:"valueFormatter",value:function(t){var e=t,n=this.options.loading,i=this.options.error;return u(t)&&(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),e=t.src,n=t.loading||this.options.loading,i=t.error||this.options.error),{src:e,loading:n,error:i}}}]),d}()},z=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return this.show===!1?t(this.tag,{attrs:{class:"cov"}}):t(this.tag,{attrs:{class:"cov"}},this.$slots.default)},data:function(){return{state:{loaded:!1},rect:{},show:!1}},mounted:function(){t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),h&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.$emit("show",this)}}}},H={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=E(t),r=new i(n),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=r,n.lazyComponent&&t.component("lazy-component",z(r)),o?t.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}):t.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(t,n){e(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:n},{context:this.vm})},unbind:function(){r.remove(this.el)}})}};return H});