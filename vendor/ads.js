!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DocsifyAds=e():o.DocsifyAds=e()}(this,(()=>(()=>{"use strict";var o={};return window.$docsify||(window.$docsify={}),window.$docsify.plugins=(window.$docsify.plugins||[]).concat((function(o,e){o.doneEach((function(){if(!window.$docsify.ads)return void console.warn("[docsify-ads] ads not config");var o=window.$docsify.ads,e=o[0];if(o.length>1){var n=Math.floor(Math.random()*o.length);console.log("[docsify-ads] ads random index="+n),e=o[n]}const d=document.querySelector(".sidebar-nav");var i=document.createElement("div");i.innerHTML=`<a target='_blank' href='${e.href}'><img src='${e.img}'/></a>`,d.insertBefore(i,d.firstChild),console.info("docsify-ads render success!")}))})),o=o.default})()));