var OxO74f5=["btn_editinwin","btnok","btncc","controlparent","display","style","none","onclick","nocancel","length","nodeName","SELECT","INPUT","TEXTAREA","isnotinput","1","skipAutoFireChanged","onpropertychange","","OnPropertyChange()","onchange","if(!syncingtoview)FireUIChanged()","onkeypress","onkeyup"];var btn_editinwin=Window_GetElement(window,OxO74f5[0],true);var btnok=Window_GetElement(window,OxO74f5[1],true);var btncc=Window_GetElement(window,OxO74f5[2],true);var controlparent=Window_GetElement(window,OxO74f5[3],true);btn_editinwin[OxO74f5[5]][OxO74f5[4]]=OxO74f5[6];btn_editinwin[OxO74f5[7]]=function btn_editinwin_onclick(){} ;if(Window_GetDialogTop(window)[OxO74f5[8]]){btncc[OxO74f5[5]][OxO74f5[4]]=OxO74f5[6];} ;btnok[OxO74f5[7]]=function btnok_onclick(){Window_SetDialogReturnValue(window,true);Window_CloseDialog(window);} ;btncc[OxO74f5[7]]=function btncc_onclick(){Window_SetDialogReturnValue(window,false);Window_CloseDialog(window);} ;function HookChangeEvents(){var Ox2f=Element_GetAllElements(controlparent);for(var i=0;i<Ox2f[OxO74f5[9]];i++){var Ox42=Ox2f[i];if(Ox42[OxO74f5[10]]==OxO74f5[11]||Ox42[OxO74f5[10]]==OxO74f5[12]||Ox42[OxO74f5[10]]==OxO74f5[13]){if(Ox42.getAttribute(OxO74f5[14])==OxO74f5[15]||Ox42.getAttribute(OxO74f5[16])==OxO74f5[15]){continue ;} ;Event_Attach(Ox42,OxO74f5[17], new Function(OxO74f5[18],OxO74f5[19]));Event_Attach(Ox42,OxO74f5[20], new Function(OxO74f5[18],OxO74f5[21]));Event_Attach(Ox42,OxO74f5[22], new Function(OxO74f5[18],OxO74f5[21]));Event_Attach(Ox42,OxO74f5[23], new Function(OxO74f5[18],OxO74f5[21]));} ;} ;} ;HookChangeEvents();SyncToViewInternal();setInterval(UpdateState,300);