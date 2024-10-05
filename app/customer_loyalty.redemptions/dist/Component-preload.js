//@ui5-bundle customerloyalty/redemptions/Component-preload.js
sap.ui.require.preload({
	"customerloyalty/redemptions/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("customerloyalty.redemptions.Component",{metadata:{manifest:"json"}})});
},
	"customerloyalty/redemptions/i18n/i18n.properties":'# This is the resource bundle for customerloyalty.redemptions\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Redemptions\n\n#YDES: Application description\nappDescription=Manage Redemptions\n\n#XFLD,33\nflpTitle=Redemptions\n',
	"customerloyalty/redemptions/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"customerloyalty.redemptions","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.1","toolsId":"1859100c-0b33-4661-aa4f-4ff9e44a89f2"},"dataSources":{"mainService":{"uri":"service/customer_loyalty/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"customerloyaltyredemptions-display":{"semanticObject":"customerloyaltyredemptions","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"customerloyalty.redemptions.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"RedemptionsList","target":"RedemptionsList"},{"pattern":"Redemptions({key}):?query:","name":"RedemptionsObjectPage","target":"RedemptionsObjectPage"}],"targets":{"RedemptionsList":{"type":"Component","id":"RedemptionsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Redemptions","variantManagement":"Page","navigation":{"Redemptions":{"detail":{"route":"RedemptionsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"RedemptionsObjectPage":{"type":"Component","id":"RedemptionsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Redemptions"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.customer_loyalty"}}'
});
//# sourceMappingURL=Component-preload.js.map