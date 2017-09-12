sap.ui.define([
	"FormatterKap4/controller/BaseController",
	"FormatterKap4/model/formatter",
	"FormatterKap4/model/types"
	], function(BaseController, formatter, types){
		"use strict";
		return BaseController.extend("FormatterKap4.controller.Detail",{
			formatter: formatter,
			types: types,
			onInit: function(){
				this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			},
			onNavPress: function(){
				this.myNavBack("master");
			},
			_onObjectMatched: function(oEvent){
				var sObjectPath = "/Suppliers/" + oEvent.getParamater("arguments").ID;
				this._bindView(sObjectPath);
			},
			_bindView:function(sObjectPath){
				var oView = this.getView();
				oView.bindElement(sObjectPath);
			}
		});
	});