/*!live-0.0.0.js 2016-06-03*/
function StringToDate(a){return new Date(Date.parse(a.replace(/-/g,"/")))}function countTimeLength(a,b,c){var d={D:864e5,H:36e5,M:6e4,S:1e3,T:1};a=a.toUpperCase();var e=Date.parse(StringToDate(b)),f=Date.parse(StringToDate(c));try{return((f-e)/d[a]).toFixed(0)}catch(g){return g.message}}function nowTime(){function a(a){return 10>a?"0"+a:a}var b=new Date,c=b.getFullYear(),d=b.getMonth()+1,e=b.getDate(),f=b.getHours(),g=b.getMinutes(),h=b.getSeconds();return c+"-"+a(d)+"-"+a(e)+" "+a(f)+":"+a(g)+":"+a(h)}function getSWF(a){return-1!=navigator.appName.indexOf("Microsoft")?window[a]:document[a]}function GetNewTime(a){var b=new Date(new Date-60*a*1e3*-1);return b.format("yyyy-MM-dd hh:mm:ss")}function getDataTimes(){var a,b;return a=new Date,b=a.getTime()}function getGUID(){var a,b,c;return $.cookie("Guest_Name")?a=$.cookie("Guest_Name"):(c=["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"],b=new Date,a=c[b.getMonth()]+c[b.getDate()]+c[b.getHours()]+c[b.getMinutes()]+c[b.getSeconds()]+b.getMilliseconds(),$.cookie("Guest_Name",a,{path:"/",expires:365})),a}function GetSendTime(){var a=new Date;return(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())}function GetTimeDiffSecond(a){var b=new Date;return(b.getTime()-a)/1e3}function pop(a,b){new Dialog(b,{title:a}).show()}function CheckPowerKeys(a,b){return a.indexOf(b)>-1}function ReplaceKeys(a){a=htmlencode(a);for(var b=rKeys.split("_"),c=0;c<b.length;c++)for(;a.indexOf(b[c])>-1;)a=a.replace(b[c],"*");return a}function ReplaceKeys_UID(a){a=htmlencode_UID(a);for(var b=rKeys.split("_"),c=0;c<b.length;c++)for(;a.indexOf(b[c])>-1;)a=a.replace(b[c],"*");return a}function htmlencode_UID(a){for(;a.indexOf("!")>-1;)a=a.replace(/!/g,"！");for(a=a.replace(/\([^\)]*\)/g,""),a=a.replace(/\<[^\>]*\)/g,""),a=a.replace(/<script.*?>.*?<\/script>/gi,""),a=a.replace(/script/gi,""),a=a.replace(/</g,""),a=a.replace(/>/g,""),a=a.replace(/\(/g,""),a=a.replace(/\)/g,""),a=a.replace(/=/g,"");a.indexOf("  ")>-1;)a=a.replace(/  /g,"&nbsp;");return a=a.replace(/x22/g,"&quot;"),a=a.replace(/x27/g,"&#39;")}function htmlencode(a){for(;a.indexOf("!")>-1;)a=a.replace(/!/g,"！");for(a=a.replace(/\([^\)]*\)/g,""),a=a.replace(/\<[^\>]*\)/g,""),a=a.replace(/script/gi,""),a=a.replace(/<script.*?>.*?<\/script>/gi,""),a=a.replace(/<\/?[^>]*>/g,""),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;");a.indexOf("  ")>-1;)a=a.replace(/  /g,"&nbsp;");return a=a.replace(/x22/g,"&quot;"),a=a.replace(/x27/g,"&#39;")}function removeHTMLTag(a){return a=a.replace(/<\/?[^>]*>/g,""),a=a.replace(/[ | ]*\n/g,"\n"),a=a.replace(/&nbsp;/gi,"")}function GetBrowser(){return!$.browser.mozilla}function guidGenerator(){var a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function UnSecret(a){for(var b=["S","K","R","E","O","h","v","z","j","t"],c=0;c<b.length;c++)for(var d=0;d<a.length;d++)a=a.replace(b[c],c);return a}function FancyBoxClose(){$.fancybox.close()}function iUserInfo(){var a=new Object;return a.IsLogin=!1,a.UserID="",a.RoomID="",a.BestAccount="",a.UserNickName="",a.FacePic="",a.Live_NG_ID=location.pathname.substr(1),a.IsManager=!1,a.LevelClass="",a.InComeClass="",a.Money=0,a.Score=0,a.FixIcon="",a.VIPIcon="",a.LevelID=0,a.LoginTime="",a.LoginIP="",a.IsZber=!1,a.MicTime="",a.MicIndex=0,a.time=0,a.RoleCssStyle="",a.RoleName="",a.RoleID=0,a.RoleWeight=0,a.RoomRoleStyle="",a.RoomRoleTitle="",a.EnterTime=getDataTimes(),a.iPhone=ibrowser.iPhone,a.iPad=ibrowser.iPad,a.mobile=ibrowser.mobile,a}function GetiInfo(){return iInfo}function GetSimpleUInfo(){var a={};return a.IsLogin=iInfo.IsLogin,a.UserID=iInfo.UserID,a.UserNickName=GB2312UnicodeConverter.ToUnicode(iInfo.UserNickName),a.RoomID=iInfo.RoomID,a.LevelID=iInfo.LevelID,a.FacePic=GB2312UnicodeConverter.ToUnicode(iInfo.FacePic),a.IsManager=iInfo.IsManager,a.Power=iInfo.Power,a.RoleCssStyle=iInfo.RoleCssStyle,a.RoleName=GB2312UnicodeConverter.ToUnicode(iInfo.RoleName),a.RoleID=iInfo.RoleID,a.RoleWeight=iInfo.RoleWeight,a.RoomRoleStyle=iInfo.RoomRoleStyle,a.RoomRoleTitle=iInfo.RoomRoleTitle,a.IsZber=iInfo.IsZber,a.EnterTime=getDataTimes(),a.iPhone=ibrowser.iPhone,a.iPad=ibrowser.iPad,a.mobile=ibrowser.mobile,a}function on(){0==$("div:first").hasClass("mCustomScrollbar")?$("div:first").mCustomScrollbar({scrollButtons:{enable:!0}}):($("div:first").height($(window).height()),$("div:first").mCustomScrollbar("update"))}$.format=function(a,b){return 1==arguments.length?function(){var b=$.makeArray(arguments);return b.unshift(a),$.format.apply(this,b)}:(arguments.length>2&&b.constructor!=Array&&(b=$.makeArray(arguments).slice(1)),b.constructor!=Array&&(b=[b]),$.each(b,function(b,c){a=a.replace(new RegExp("\\{"+b+"\\}","g"),c)}),a)};var ibrowser={};ibrowser.iPhone=navigator.userAgent.indexOf("iPhone")>-1,ibrowser.iPad=navigator.userAgent.indexOf("iPad")>-1,ibrowser.mobile=!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a},$.browser={},$.browser.mozilla=/firefox/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase());var AgentType=navigator.userAgent.match(/.*Mobile.*/)?"mobile":"computer",iInfo=iUserInfo(),GB2312UnicodeConverter={ToUnicode:function(a){return escape(a).replace(/%u/gi,"\\u")},ToGB2312:function(a){return unescape(a.replace(/\\u/gi,"%u"))}},_Config={};_Config.DynamicFileServer="",_Config.USList_Height=51,_Config.USVolume=50,_Config.MicGain=30,_Config.isIE=!1,_Config.iFrameTools_Animate=!0,_Config.iFrameTools_Step=10,_Config.Pub_isScroll=!0,_Config.Pri_isScroll=!0,_Config.ModeType=1,_Config.ModeTypeDes=["发言模式","自由模式","主席模式","麦序模式"],_Config.TalkType=1,_Config.KeyDown=!1,_Config.BindPlayerID="TLivePlayer",_Config.PlayerID="iLivePlayer",_Config.BindBellPlayerID="TBellPlayer",_Config.BellPlayerID="iBellPlayer",_Config.BellUrl="/swf/bell.mp3",_Config.CurrentMicShowTime=0,_Config.DefaultFacePic="/images/DefaultFace.png",_Config.Mic_StopApply=!1,_Config.Mic_Manage=!1,_Config.PrivateChecked=!1,_Config.ToPersonUID=0,_Config.ToPersonUName="",_Config.MenuCurrentUID=0,_Config.MenuCurrentUname=0,_Config.MenuCurrentPower=0,_Config.BlackList={},_Config.MsgMaxNum=80,_Config.ShoutedIndex=0,_Config.PublicMsgMaxNum=100,_Config.ULMaxNum=100,_Config.CurrentULNum=0,_Config.SwfLoaded=!1,_Config.PrivatePop_ToPersonUID=0,_Config.PrivatePop_ToPersonUName="",_Config.GiftToPersonUID=0,_Config.GiftToPersonUName="",_Config.CurrentGiftID=0,_Config.CurrentGiftPrice=0,_Config.CurrentGiftNum=0,_Config.CurrentGiftIcon="",_Config.CurrentGiftPic="";var iRoomID,Login={Show:function(){$("#login_frame")[0].src="/miniLogin.shtml?"+location.href,Reg.Hide(),$(document).mousedown(function(a){Login.Hide()}),$("#Login_Box").show()},Hide:function(){$("#Login_Box_Opacity_Div").hide(),$("#Login_Box").hide(),$(document).unbind("mousedown")}},Reg={Show:function(){var a=window.location.hash.replace("#","").split(","),b="",c="";a.length>0?(b=a[0],a.length>1&&(c=a[1]),"SID"==b?""!=c&&($("#reg_frame")[0].src="/miniReg.asp?SID="+c+"&GoUrl="+location.href):"SCID"==b?""!=c&&($("#reg_frame")[0].src="/miniReg.asp?SCID="+c+"&GoUrl="+location.href):$("#reg_frame")[0].src="/miniReg.asp?GoUrl="+location.href):$("#reg_frame")[0].src="/miniReg.asp?GoUrl="+location.href,Login.Hide(),$(document).mousedown(function(a){Reg.Hide()}),$("#Reg_Box").show()},Hide:function(){$("#Reg_Box_Opacity_Div").hide(),$("#Reg_Box").hide(),$(document).unbind("mousedown")}};$(function(){0==iInfo.IsLogin&&window.location.hash.replace("#","").split(",").length>1&&Reg.Show()});var QQKF={Show:function(){$("#QQKF_Box").show(),$(document).mousedown(function(a){QQKF.Hide()})},Hide:function(){$("#QQKF_Box_Opacity_Div").hide(),$("#QQKF_Box").hide(),$(document).unbind("mousedown")}},QQKFs={Show:function(){$("#QQKFs_Box").show(),$(document).mousedown(function(a){QQKF.Hide()})},Hide:function(){$("#QQKFs_Box_Opacity_Div").hide(),$("#QQKFs_Box").hide(),$(document).unbind("mousedown")}},Url={encode:function(a){return escape(this._utf8_encode(a))},decode:function(a){return this._utf8_decode(unescape(a))},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},_utf8_decode:function(a){for(var b="",c=0,d=c1=c2=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(c2=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&c2),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),c+=3);return b}};window.onerror=function(){return!0};var Is_WS=!1;