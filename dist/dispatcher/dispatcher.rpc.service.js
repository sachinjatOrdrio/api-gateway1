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
exports.DispatcherRpcService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const enums_1 = require("../common/enums");
let DispatcherRpcService = class DispatcherRpcService {
    constructor() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://user:UnRISD1TUE2x85ZW@20.204.233.105:5672'],
                queue: enums_1.QueuesEnum.DISPATCHER,
            },
        });
    }
    sendRequest(pattern, data) {
        return new rxjs_1.Observable((observer) => {
            this.client
                .send(pattern, data)
                .subscribe({
                next: (response) => {
                    observer.next(response);
                    observer.complete();
                },
                error: (error) => observer.error(error),
            });
        });
    }
};
exports.DispatcherRpcService = DispatcherRpcService;
exports.DispatcherRpcService = DispatcherRpcService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DispatcherRpcService);
//# sourceMappingURL=dispatcher.rpc.service.js.map