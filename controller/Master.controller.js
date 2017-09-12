sap.ui.define([
	"FormatterKap4/controller/BaseController"
	], function(BaseController){
		"use strict";
		return BaseController.extend("FormatterKap4.controller.Master",{
			onInit: function(){
				
			},	
			onListPress : function(oEvent){
				this._showObject(oEvent.getSource());
			},
			onNavBack: function(){
				var oHistory = sap.ui.core.routing.History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash(),
				oCrossAppNavigator= sap.ushell && sap.ushell.Container && sap.ushell.Container.getService("CrossApplicationNavigator");
				if(sPreviousHash !== undefined || !oCrossAppNavigator){
					window.history.go(-1);
				}else if (oCrossAppNavigator){
					oCrossAppNavigator.toExternal({
						target: {shellHash: '#'}
					});
				}
			},
			_showObject: function(oItem){
				this.getRouter().navTo("detail",{
					ID: oItem.getBindingContext().getProperty("ID")
				});
			}
		});
	});