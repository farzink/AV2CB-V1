System.register(['angular2/core', "../repository/CarRepository", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, CarRepository_1, http_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CarRepository_1_1) {
                CarRepository_1 = CarRepository_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(_carRepo) {
                    this._carRepo = _carRepo;
                    this.title = "Here is a title";
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carRepo.GetAll().subscribe(function (k) { return _this.cars = k; });
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-component',
                        templateUrl: 'app/component/component.template/header.component.html',
                        providers: [CarRepository_1.CarRepository, http_1.HTTP_PROVIDERS]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [CarRepository_1.CarRepository])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map