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
exports.CronController = void 0;
const common_1 = require("@nestjs/common");
const cron_rpc_service_1 = require("./cron.rpc.service");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
let CronController = class CronController {
    constructor(CronRpcService) {
        this.CronRpcService = CronRpcService;
    }
    ping() {
        try {
            return this.CronRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.PING, { test: 'cron-test' });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.CronController = CronController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronController.prototype, "ping", null);
exports.CronController = CronController = __decorate([
    (0, common_1.Controller)('cron'),
    __metadata("design:paramtypes", [cron_rpc_service_1.CronRpcService])
], CronController);
//# sourceMappingURL=cron.controller.js.map