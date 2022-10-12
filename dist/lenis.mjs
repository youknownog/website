import t from"tiny-emitter";import e from"virtual-scroll";function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function s(t,e,o){return Math.max(t,Math.min(e,o))}var l=["duration","easing"],c=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var o=this,i=void 0===e?{}:e,n=i.duration,s=void 0===n?1:n,c=i.easing,a=void 0===c?function(t){return t}:c,h=function(t,e){if(null==t)return{};var o,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)e.indexOf(o=n[i])>=0||(r[o]=t[o]);return r}(i,l);this.target=t,this.fromKeys=r({},h),this.toKeys=r({},h),this.keys=Object.keys(r({},h)),this.keys.forEach(function(e){o.fromKeys[e]=t[e]}),this.duration=s,this.easing=a,this.currentTime=0,this.isRunning=!0},e.stop=function(){this.isRunning=!1},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+t,this.duration);var o=this.easing(this.progress);this.keys.forEach(function(t){var i=e.fromKeys[t];e.target[t]=i+(e.toKeys[t]-i)*o}),1===o&&this.stop()}},i(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),a=/*#__PURE__*/function(t){var o,r;function l(o){var i,r,n,l,a=void 0===o?{}:o,h=a.duration,p=void 0===h?1.2:h,u=a.easing,d=void 0===u?function(t){return 1===t?1:1-Math.pow(2,-10*t)}:u,f=a.smooth,v=void 0===f||f,g=a.smoothTouch,w=void 0!==g&&g,m=a.touchMultiplier,y=void 0===m?2:m,b=a.direction,S=void 0===b?"vertical":b,N=a.gestureDirection,O=void 0===N?"vertical":N,z=a.wrapper,R=void 0===z?window:z,W=a.content,T=void 0===W?document.body:W;(l=t.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(t){var e=t[0];if(e){var o=e.contentRect;l.wrapperWidth=o.width,l.wrapperHeight=o.height}},l.onContentResize=function(t){var e=t[0];if(e){var o=e.contentRect;l.contentWidth=o.width,l.contentHeight=o.height}},l.onVirtualScroll=function(t){var e=t.deltaY,o=t.deltaX,i=t.originalEvent;i.ctrlKey||(l.smooth=i.changedTouches?l.smoothTouch:l.options.smooth,l.stopped?i.preventDefault():l.smooth&&4!==i.buttons&&(l.smooth&&i.preventDefault(),l.targetScroll-="both"===l.gestureDirection?o+e:"horizontal"===l.gestureDirection?o:e,l.targetScroll=s(0,l.targetScroll,l.limit),l.scrollTo(l.targetScroll)))},l.onScroll=function(t){l.isScrolling&&l.smooth||(l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.notify())},window.lenisVersion="0.2.11",l.options={duration:p,easing:d,smooth:v,smoothTouch:w,touchMultiplier:y,direction:S,gestureDirection:O,wrapper:R,content:T},l.duration=p,l.easing=d,l.smooth=v,l.smoothTouch=w,l.touchMultiplier=y,l.direction=S,l.gestureDirection=O,l.wrapperNode=R,l.contentNode=T,l.wrapperNode.addEventListener("scroll",l.onScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.animate=new c;var k=(null==(i=navigator)||null==(r=i.userAgentData)?void 0:r.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return l.virtualScroll=new e({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:k.includes("Win")?1:.4,useKeyboard:!1,touchMultiplier:l.touchMultiplier,useTouch:!0,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l}r=t,(o=l).prototype=Object.create(r.prototype),o.prototype.constructor=o,n(o,r);var a=l.prototype;return a.start=function(){this.stopped=!1},a.stop=function(){this.stopped=!0,this.animate.stop()},a.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},a.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},a.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},a.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},a.scrollTo=function(t,e){var o=void 0===e?{}:e,i=o.offset,r=void 0===i?0:i,n=o.immediate,l=void 0!==n&&n,c=o.duration,a=void 0===c?this.duration:c,h=o.easing,p=void 0===h?this.easing:h;if(null!=t){var u;if("number"==typeof t)u=t;else if("top"===t||"#top"===t)u=0;else if("bottom"===t)u=this.limit;else{var d;if("string"==typeof t)d=document.querySelector(t);else{if(null==t||!t.nodeType)return;d=t}if(!d)return;var f=0;if(this.wrapperNode!==window){var v=this.wrapperNode.getBoundingClientRect();f="horizontal"===this.direction?v.left:v.top}var g=d.getBoundingClientRect();u=("horizontal"===this.direction?g.left:g.top)+this.scroll-f}this.targetScroll=s(0,u+=r,this.limit),!this.smooth||l?this.setScroll(this.targetScroll):this.animate.to(this,{duration:a,easing:p,scroll:this.targetScroll})}},i(l,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),l}(t);export{a as default};
//# sourceMappingURL=lenis.mjs.map
