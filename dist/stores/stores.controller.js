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
const create_member_dto_1 = require("./dto/create-member.dto");
const update_member_dto_1 = require("./dto/update-member.dto");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const update_branch_dto_1 = require("./dto/update-branch.dto");
const create_branch_dto_1 = require("./dto/create-branch.dto");
const create_product_dto_1 = require("./dto/create-product.dto");
let StoresController = class StoresController {
    constructor(storesRpcService) {
        this.storesRpcService = storesRpcService;
    }
    async getProducts(req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_PRODUCTS, { user })
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
    async getBranches(req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_BRANCHES, { user })
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
    async getMembers(req, res) {
        try {
            console.log('get Members');
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_MEMBERS, { user })
                .toPromise();
            console.log('response:', response);
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
    async getCustomers(req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_CUSTOMERS, { user })
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
    async findOne(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_STORE, { id, user })
                .toPromise();
            console.log('responssae:', response);
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
    async update(id, updateStoreDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_STORE, {
                id,
                updateStoreDto,
                user,
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
    async remove(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_STORE, { id, user })
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
    async addMember(createMemberDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_MEMBER, {
                createMemberDto,
                user,
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
    async getMember(uid, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_MEMBER, { uid, user })
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
    async updateMember(id, updateMemberDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_MEMBER, {
                id,
                updateMemberDto,
                user,
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
    async removeMember(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_MEMBER, { id, user })
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
    async addCustomer(createCustomerDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_CUSTOMER, {
                createCustomerDto,
                user,
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
    async getCustomer(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_CUSTOMER, { id, user })
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
    async updateCustomer(id, updateCustomerDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_CUSTOMER, {
                id,
                updateCustomerDto,
                user,
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
    async removeCustomer(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_CUSTOMER, { id, user })
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
    async findAll(req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_STORES, { user })
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
    async addBranch(createBranchDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_BRANCH, {
                createBranchDto,
                user,
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
    async updateBranch(id, updateBranchDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_BRANCH, {
                id,
                updateBranchDto,
                user,
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
    async removeBranch(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_BRANCH, { id, user })
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
    async getBranch(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.GET_BRANCH, { id, user })
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
    async addProduct(createProductDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.CREATE_PRODUCT, {
                createProductDto,
                user,
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
    async updateProduct(id, updateProductDto, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.UPDATE_PRODUCT, {
                id,
                updateProductDto,
                user,
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
    async removeProduct(id, req, res) {
        try {
            const user = req.user;
            const response = await this.storesRpcService
                .sendRequest(message_patterns_enum_1.MessagePatternEnum.DELETE_PRODUCT, { id, user })
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
exports.StoresController = StoresController;
__decorate([
    (0, swagger_1.ApiTags)('stores/products'),
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getProducts", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/branches'),
    (0, common_1.Get)('branches'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getBranches", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/members'),
    (0, common_1.Get)('members'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getMembers", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/customers'),
    (0, common_1.Get)('customers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getCustomers", null);
__decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new store' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The store has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.CreateStoreDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_dto_1.UpdateStoreDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/members'),
    (0, common_1.Post)('members'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_dto_1.CreateMemberDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "addMember", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/members'),
    (0, common_1.Get)('members/:uid'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('uid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getMember", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/members'),
    (0, common_1.Patch)('members/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_member_dto_1.UpdateMemberDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "updateMember", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/members'),
    (0, common_1.Delete)('members/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "removeMember", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/customers'),
    (0, common_1.Post)('customers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "addCustomer", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/customers'),
    (0, common_1.Get)('customers/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getCustomer", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/customers'),
    (0, common_1.Patch)('customers/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_customer_dto_1.CreateCustomerDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "updateCustomer", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/customers'),
    (0, common_1.Delete)('customers/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "removeCustomer", null);
__decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/branches'),
    (0, common_1.Post)('branches'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_branch_dto_1.CreateBranchDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "addBranch", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/branches'),
    (0, common_1.Patch)('branches/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_branch_dto_1.UpdateBranchDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "updateBranch", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/branches'),
    (0, common_1.Delete)('branches/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "removeBranch", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/branches'),
    (0, common_1.Get)('branches/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "getBranch", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/products'),
    (0, common_1.Post)('products'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "addProduct", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/products'),
    (0, common_1.Patch)('products/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiTags)('stores/products'),
    (0, common_1.Delete)('products/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "removeProduct", null);
exports.StoresController = StoresController = __decorate([
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [stores_rpc_service_1.StoresRpcService])
], StoresController);
//# sourceMappingURL=stores.controller.js.map