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
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const create_theme_dto_1 = require("./dto/create-theme.dto");
const update_theme_dto_1 = require("./dto/update-theme.dto");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
const theme_rpc_service_1 = require("./theme.rpc.service");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../common/guards/auth.guard");
let ThemeController = class ThemeController {
    constructor(themeRpcService) {
        this.themeRpcService = themeRpcService;
    }
    async create(createThemeDto, req, res) {
        try {
            const user = req.user;
            const response = await this.themeRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_THEME, { createThemeDto, user })
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
    async update(id, updateThemeDto, req, res) {
        try {
            const response = await this.themeRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_THEME, {
                id,
                updateThemeDto,
                user: req.user,
            })
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
    async findByStore(storeId, cursorId, previousCursorId, limit, req, res) {
        try {
            const user = req.user;
            const response = await this.themeRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_THEMES, { storeId, cursorId, previousCursorId, limit, user })
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
    async findOne(id, req, res) {
        try {
            console.log('get theme', id);
            const user = req.user;
            const response = await this.themeRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_THEME, { id, user: user })
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
exports.ThemeController = ThemeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_theme_dto_1.CreateThemeDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_theme_dto_1.UpdateThemeDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiQuery)({ name: 'storeId', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'cursorId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'previousCursorId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    __param(0, (0, common_1.Query)('storeId')),
    __param(1, (0, common_1.Query)('cursorId')),
    __param(2, (0, common_1.Query)('previousCursorId')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Req)()),
    __param(5, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "findByStore", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "findOne", null);
exports.ThemeController = ThemeController = __decorate([
    (0, swagger_1.ApiTags)('designs'),
    (0, common_1.Controller)('designs'),
    __metadata("design:paramtypes", [theme_rpc_service_1.ThemeRpcService])
], ThemeController);
//# sourceMappingURL=theme.controller.js.map