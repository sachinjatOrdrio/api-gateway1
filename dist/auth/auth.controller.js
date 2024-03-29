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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const swagger_1 = require("@nestjs/swagger");
const phone_login_dto_1 = require("./dto/phone-login.dto");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
const login_dto_1 = require("./dto/login.dto");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const resend_email_dto_1 = require("./dto/resend-email.dto");
const social_login_dto_1 = require("./dto/social-login.dto");
const phone_register_dto_1 = require("./dto/phone-register.dto");
const social_auth_dto_1 = require("./dto/social-auth.dto");
const auth_rpc_service_1 = require("./auth.rpc.service");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
let AuthController = class AuthController {
    constructor(rabbitRPC) {
        this.rabbitRPC = rabbitRPC;
    }
    async signUp(createAuthDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.REGISTER, createAuthDto)
                .toPromise();
            console.log('response: ', response);
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            console.log('AuthController', error);
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async resendEmail(resendEmailDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.RESEND_EMAIL, resendEmailDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            console.log('AuthController', error);
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async phoneLogin(phoneLoginAuthDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.PHONE_LOGIN, phoneLoginAuthDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async verifyOTP(verifyOtpDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.VERIFY_OTP, verifyOtpDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async login(loginDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.LOGIN, loginDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    forgotPassword(forgotPasswordDto) {
        return this.rabbitRPC.sendRequest(message_patterns_enum_1.MessagePatternEnum.FORGOT_PASSWORD, forgotPasswordDto);
    }
    async socialLogin(socialLoginDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.SOCIAL_LOGIN, socialLoginDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async verifyId(id, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.VERIFY_ID, id)
                .toPromise();
            console.log(response);
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async phoneRegister(phoneRegisterDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.PHONE_REGISTER, phoneRegisterDto)
                .toPromise();
            console.log(response);
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
    async socialRegister(socialAuthRegisterDto, res) {
        try {
            const response = await this.rabbitRPC
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.SOCIAL_REGISTER, socialAuthRegisterDto)
                .toPromise();
            res
                .status(response.status_code)
                .json({ ...response, status_code: undefined });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.CreateAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/resend-email'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resend_email_dto_1.ResendEmailDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendEmail", null);
__decorate([
    (0, common_1.Post)('/phone-login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_login_dto_1.PhoneLoginAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "phoneLogin", null);
__decorate([
    (0, common_1.Post)('/verify-otp'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOTP", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('social-login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [social_login_dto_1.SocialLoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "socialLogin", null);
__decorate([
    (0, common_1.Get)('verify/:id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyId", null);
__decorate([
    (0, common_1.Post)('phone-register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_register_dto_1.PhoneRegisterDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "phoneRegister", null);
__decorate([
    (0, common_1.Post)('social-register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [social_auth_dto_1.SocialAuthRegisterDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "socialRegister", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    __metadata("design:paramtypes", [auth_rpc_service_1.AuthRpcService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map