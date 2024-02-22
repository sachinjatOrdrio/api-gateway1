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
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const theme_rpc_service_1 = require("./theme.rpc.service");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
let ThemeController = class ThemeController {
    constructor(themeRpcService) {
        this.themeRpcService = themeRpcService;
    }
    ping() {
        try {
            return this.themeRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.PING, { test: 'theme-test' });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ThemeController = ThemeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "ping", null);
exports.ThemeController = ThemeController = __decorate([
    (0, common_1.Controller)('theme'),
    __metadata("design:paramtypes", [theme_rpc_service_1.ThemeRpcService])
], ThemeController);
//# sourceMappingURL=theme.controller.js.map