/*!live-0.0.0.js 2016-06-03*/
jQuery.cookie=function(a,b,c){if("undefined"==typeof b){var d=null;if(document.cookie&&""!=document.cookie)for(var e=document.cookie.split(";"),f=0;f<e.length;f++){var g=jQuery.trim(e[f]);if(g.substring(0,a.length+1)==a+"="){d=decodeURIComponent(g.substring(a.length+1));break}}return d}c=c||{},null===b&&(b="",c.expires=-1);var h="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var i;"number"==typeof c.expires?(i=new Date,i.setTime(i.getTime()+24*c.expires*60*60*1e3)):i=c.expires,h="; expires="+i.toUTCString()}var j=c.path?"; path="+c.path:"",k=c.domain?"; domain="+c.domain:"",l=c.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(b),h,j,k,l].join("")},jQuery.cookie=function(a,b,c){if("undefined"==typeof b){var d=null;if(document.cookie&&""!=document.cookie)for(var e=document.cookie.split(";"),f=0;f<e.length;f++){var g=jQuery.trim(e[f]);if(g.substring(0,a.length+1)==a+"="){d=decodeURIComponent(g.substring(a.length+1));break}}return d}c=c||{},null===b&&(b="",c=$.extend({},c),c.expires=-1);var h="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var i;"number"==typeof c.expires?(i=new Date,i.setTime(i.getTime()+24*c.expires*60*60*1e3)):i=c.expires,h="; expires="+i.toUTCString()}var j=c.path?"; path="+c.path:"",k=c.domain?"; domain="+c.domain:"",l=c.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(b),h,j,k,l].join("")};