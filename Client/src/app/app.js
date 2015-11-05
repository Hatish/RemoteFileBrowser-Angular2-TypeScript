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
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Remote File Manager';
        this.myLeftLocation = 'C:\\';
        this.myRightLocation = 'D:\\';
        this.drives = ['C', 'D', 'E', 'F'];
        this.leftLocations = [
            { "name": "dir1", "size": 0, "type": "Directory" },
            { "name": "dir2", "size": 1100, "type": "Directory" },
            { "name": "file1", "size": 1048576, "type": "File" },
            { "name": "file2", "size": 1234, "type": "File" },
        ];
        this.rightLocations = [
            { "name": "dir100", "size": 0, "type": "Directory" },
            { "name": "dir101", "size": 1100, "type": "Directory" },
            { "name": "file100", "size": 1048576, "type": "File" },
            { "name": "file101", "size": 1234, "type": "File" },
        ];
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/Template.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
var Location = (function () {
    function Location() {
    }
    return Location;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map