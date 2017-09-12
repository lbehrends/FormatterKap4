sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
	], function(Controller, History){
		"use strict";
		return Controller.extend("FormatterKap4.controller.BaseController",{
			getRouter: function(){
				return sap.ui.core.UIComponent.getRouterFor(this);
			},
			getModel: function(sName){
				return this.getView().getModel(sName);
			},
			setModel: function(oModel, sName){
				return this.getView().setModel(oModel, sName);
			},
			getResurceBundle: function(){
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},
			myNavBack: function (sRoute, mData) {
				var oHistory = History.getInstance();
				var oPreviousHash = oHistory.getPreviousHash();
				if(oPreviousHash !== undefined){
					window.history.go(-1);
				}else{
					var bReplace = true;
					this.getRouter().navTo(sRoute,mData,bReplace);
				}
			}
		});
	});