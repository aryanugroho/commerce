var Check_Info;var Check_Sys;var Check_Interval;function Check_HK(){Check_Info=$.extend(true,{},iInfo);Check_Sys=$.extend(true,{},_SysConfig);setInterval(function(){var re=true;for(var t in Check_Info){if(Check_Info[t]!=iInfo[t]&&t!="IsPublishing"){re=false}}for(var t in _SysConfig){if(_SysConfig[t]!=Check_Sys[t]){re=false}}if(re==false){location.href="/"+iRoomID}},1000)};
