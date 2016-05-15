"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angularfire2_1 = require('angularfire2');
var user_1 = require('../shared/user');
var LoginComponent = (function () {
    function LoginComponent(router, af) {
        this.router = router;
        this.af = af;
        af.auth.subscribe(function (auth) {
            if (auth) {
                user_1.user.googleToken = auth.google.accessToken;
                user_1.user.googleAvatar = auth.google.profileImageURL;
            }
        });
        if (af.auth) {
            router.navigate(['Files']);
        }
    }
    LoginComponent.prototype.login = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
            scope: ["https://www.googleapis.com/auth/drive"]
        });
    };
    LoginComponent.prototype.overrideLogin = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Anonymous,
            method: angularfire2_1.AuthMethods.Anonymous,
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, angularfire2_1.AngularFire])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map