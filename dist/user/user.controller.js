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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_rpc_service_1 = require("./user.rpc.service");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
let UserController = class UserController {
    constructor(userRpcService) {
        this.userRpcService = userRpcService;
    }
    ping() {
        try {
            return this.userRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.PING, { test: 'USER-test' });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "ping", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_rpc_service_1.UserRpcService])
], UserController);
//# sourceMappingURL=user.controller.js.map