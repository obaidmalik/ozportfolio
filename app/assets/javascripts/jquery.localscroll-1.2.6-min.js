/**  * jQuery.LocalScroll - Animated scrolling navigation, using anchors.  *
Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com |
http://flesler.blogspot.com  * Dual licensed under MIT and GPL.  * Date:
6/3/2008  * @author Ariel Flesler  * @version 1.2.6  **/ ;(function($){var g=l
ocation.href.replace(/#.*/,''),h=$.localScroll=function(a){$('body').localScro
ll(a)};h.defaults={duration:1e3,axis:'y',event:'click',stop:1};h.hash=function
(a){a=$.extend({},h.defaults,a);a.hash=0;if(location.hash)setTimeout(function(
){i(0,location,a)},0)};$.fn.localScroll=function(b){b=$.extend({},h.defaults,b
);return(b.persistent||b.lazy)?this.bind(b.event,function(e){var a=$([e.target
,e.target.parentNode]).filter(c)[0];a&&i(e,a,b)}):this.find('a,area').filter(c
).bind(b.event,function(e){i(e,this,b)}).end().end();function c(){var a=this;r
eturn!!a.href&&!!a.hash&&a.href.replace(a.hash,'')==g&&(!b.filter||$(a).is(b.f
ilter))}};function i(e,a,b){var c=a.hash.slice(1),d=document.getElementById(c)
||document.getElementsByName(c)[0],f;if(d){e&&e.preventDefault();f=$(b.target|
|$.scrollTo.window());if(b.lock&&f.is(':animated')||b.onBefore&&b.onBefore.cal
l(a,e,d,f)===!1)return;if(b.stop)f.queue('fx',[]).stop();f.scrollTo(d,b).trigg
er('notify.serialScroll',[d]);if(b.hash)f.queue(function(){location=a.hash;$(t
his).dequeue()})}}})(jQuery);
