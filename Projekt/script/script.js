"use strict";
window.onload = function() {

	// skapar namnrymd (tomt objekt som man fyller p� med funktioner man vill nyttja)	
	var WEBDESK = WEBDESK || {};
	
	WEBDESK.util = WEBDESK.util || {};
	
	WEBDESK.util.renderPopUpImages = function() { 
			AjaxTester.init();
			var imagesWindow = new PopUpImages(); 
			imagesWindow.render();
			//imagesWindow.logga();
	};
	
	WEBDESK.util.renderMemory= function() { 
			var memoryWindow = new PopUpMemory(); 
			memoryWindow.render();
	};	
		
	//skapar ikonen och tar bakgrundsbilden som ikonbild + startar f�nsterfunktionen!
	WEBDESK.util.renderIcon = function(url, windowProperty ) {   
			var icon1 = new Icon(); 
			icon1.createIcon(url, windowProperty);					
	};
	
	WEBDESK.util.renderIcon("pics/icon.png", WEBDESK.util.renderPopUpImages); 
	WEBDESK.util.renderIcon("pics/icon2.png",WEBDESK.util.renderMemory);
	  
};
