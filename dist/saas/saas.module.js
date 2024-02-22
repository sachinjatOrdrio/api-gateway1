"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaasModule = void 0;
const common_1 = require("@nestjs/common");
const saas_controller_1 = require("./saas.controller");
const saas_rpc_service_1 = require("./saas.rpc.service");
const jwt_1 = require("@nestjs/jwt");
let SaasModule = class SaasModule {
};
exports.SaasModule = SaasModule;
exports.SaasModule = SaasModule = __decorate([
    (0, common_1.Module)({
        controllers: [saas_controller_1.SaasController],
        providers: [saas_rpc_service_1.SaasRpcService, jwt_1.JwtService],
    })
], SaasModule);
//# sourceMappingURL=saas.module.js.map