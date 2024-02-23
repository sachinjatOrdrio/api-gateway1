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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const auth_rpc_service_1 = require("../../auth/auth.rpc.service");
const message_patterns_enum_1 = require("../../auth/enums/message-patterns.enum");
let AuthGuard = class AuthGuard {
    constructor(jwtService, rabbitRPC, configService) {
        this.jwtService = jwtService;
        this.rabbitRPC = rabbitRPC;
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        console.log(token);
        if (!token) {
            throw new common_1.UnauthorizedException('Missing authorization token');
        }
        try {
            const decoded = this.jwtService.verify(token, {
                secret: this.configService.get('JWT_SECRET_KEY'),
            });
            const user = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.FIND_USER_BY_ID, decoded.userId)
                .toPromise();
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid token');
            }
            request.user = user;
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_rpc_service_1.AuthRpcService,
        config_1.ConfigService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map