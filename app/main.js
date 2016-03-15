System.register(['angular2/platform/browser', "./component/master.component"], function(exports_1) {
    var browser_1, master_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(master_component_1.MasterComponent);
        }
    }
});
//# sourceMappingURL=main.js.map