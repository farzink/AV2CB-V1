System.register(["angular2/http", "angular2/core", 'rxjs/Rx'], function(exports_1) {
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
    var http_1, core_1;
    var CarRepository;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarRepository = (function () {
                function CarRepository(http) {
                    this.http = http;
                    this.url = 'http://localhost:16847/api/values/';
                    this.cars = [
                        { Id: 10, Model: "C300", Brand: "Benz", Year: "2016" },
                        { Id: 11, Model: "C200", Brand: "Benz", Year: "2000" },
                        { Id: 12, Model: "428", Brand: "BMW", Year: "2015" },
                        { Id: 13, Model: "206", Brand: "Peugeot", Year: "1990" },
                    ];
                }
                CarRepository.prototype.GetAll = function () {
                    //console.log("This is the array : "  + this.http);
                    return this.http.get(this.url).map(function (res) { return res.json(); });
                };
                CarRepository = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CarRepository);
                return CarRepository;
            })();
            exports_1("CarRepository", CarRepository);
        }
    }
});
//# sourceMappingURL=CarRepository.js.map