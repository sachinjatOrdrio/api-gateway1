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
exports.StoresController = void 0;
const common_1 = require("@nestjs/common");
const create_store_dto_1 = require("./dto/create-store.dto");
const update_store_dto_1 = require("./dto/update-store.dto");
const stores_rpc_service_1 = require("./stores.rpc.service");
const message_patterns_enum_1 = require("./enums/message-patterns.enum");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../common/guards/auth.guard");
let StoresController = class StoresController {
    constructor(storesRpcService) {
        this.storesRpcService = storesRpcService;
    }
    async create(createStoreDto, req, res) {
        try {
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_STORE, {
                createStoreDto,
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
    findAll() {
        try {
            return this.storesRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_STORES, {});
        }
        catch (error) {
            console.log(error);
        }
    }
    findOne(id) {
        try {
            return this.storesRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_STORE, id);
        }
        catch (error) {
            console.log(error);
        }
    }
    update(id, updateStoreDto) {
        try {
            return this.storesRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_STORE, { id, ...updateStoreDto });
        }
        catch (error) {
            console.log(error);
        }
    }
    remove(id) {
        try {
            return this.storesRpcService.sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_STORE, id);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.StoresController = StoresController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.CreateStoreDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "remove", null);
exports.StoresController = StoresController = __decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [stores_rpc_service_1.StoresRpcService])
], StoresController);
//# sourceMappingURL=stores.controller.js.map