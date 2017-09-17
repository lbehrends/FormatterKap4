sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/model/json/JSONModel"
	], function(UIComponent, ResourceModel, JSONModel){
		"use strict";
		return UIComponent.extend("FormatterKap4.Component", {
			metadata:{
				"rootView":"FormatterKap4.view.App",
				"dependencies":{
					"minUI5Version": "1.28.0",
					"libs": ["sap.ui.core", "sap.m"]
				},
				"config":{
					"i18nBundle":"FormatterKap4.i18n.i18n",
					"serviceUrl":"service/data.json"
				},
				"routing":{
					"config":{
						"routerClass": "sap.m.routing.Router",
						"viewType": "XML",
						"viewPath":"FormatterKap4.view",
						"controlId":"app",
						"controlAggregation": "pages",
						"bypassed":{
							"target": "notFount"
						}
					},
					"routes":[
						{
							"pattern": "",
							"name": "master",
							"target":"master"
						},
						{
							"pattern":"detail/{ID}",
							"name": "detail",
							"target": "detail"
						}
					],
					"targets":{
						"master": {
							"viewName": "Master",
							"viewLevel":1
						},
						"detail":{
							"viewName": "Detail",
							"viewLevel": 2
						},
						"notFound":{
							"viewName":"NotFound",
							"viewId":"notFound"
						}
					}
				}
			},
			init: function(){
				var mConfig = this.getMetadata().getConfig();
				UIComponent.prototype.init.apply(this, arguments);
				this.setModel(new ResourceModel({
					bundleName: mConfig.i18nBundle
				}), "i18n");
			},
			createContent: function(){
				var oModel= new JSONModel(this.getMetadata().getConfig().serviceUrl);
				this.setModel(oModel);
				var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
				return oRootView;
			}
		});
	});