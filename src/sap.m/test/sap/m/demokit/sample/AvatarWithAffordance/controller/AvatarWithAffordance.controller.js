sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function (MessageToast, Controller) {
	"use strict";

	return Controller.extend("sap.m.sample.AvatarWithAffordance.controller.AvatarWithAffordance", {
		onPress: function(oEvent) {
			MessageToast.show(oEvent.getSource().getId() + " Pressed");
		}
	});
});