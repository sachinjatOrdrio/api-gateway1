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
exports.CreateThemeDto = exports.ColorDto = exports.SectionDto = exports.FooterDto = exports.HeaderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class HeaderDto {
}
exports.HeaderDto = HeaderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HeaderDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HeaderDto.prototype, "favicon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], HeaderDto.prototype, "links", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], HeaderDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], HeaderDto.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], HeaderDto.prototype, "categories", void 0);
class FooterDto {
}
exports.FooterDto = FooterDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FooterDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FooterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], FooterDto.prototype, "links", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], FooterDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], FooterDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], FooterDto.prototype, "pages", void 0);
class SectionDto {
}
exports.SectionDto = SectionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SectionDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SectionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SectionDto.prototype, "view", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SectionDto.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], SectionDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], isArray: true }),
    __metadata("design:type", Array)
], SectionDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], isArray: true }),
    __metadata("design:type", Array)
], SectionDto.prototype, "brands", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], isArray: true }),
    __metadata("design:type", Array)
], SectionDto.prototype, "squareBanners", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], isArray: true }),
    __metadata("design:type", Array)
], SectionDto.prototype, "landscapeBanners", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SectionDto.prototype, "index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SectionDto.prototype, "active", void 0);
class ColorDto {
}
exports.ColorDto = ColorDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ColorDto.prototype, "primary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ColorDto.prototype, "secondary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ColorDto.prototype, "primaryfont", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], isArray: true }),
    __metadata("design:type", Array)
], ColorDto.prototype, "secondaryfont", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ColorDto.prototype, "colors", void 0);
class CreateThemeDto {
}
exports.CreateThemeDto = CreateThemeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateThemeDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateThemeDto.prototype, "storeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: HeaderDto }),
    __metadata("design:type", HeaderDto)
], CreateThemeDto.prototype, "header", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FooterDto], isArray: true }),
    __metadata("design:type", Array)
], CreateThemeDto.prototype, "footer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SectionDto], isArray: true }),
    __metadata("design:type", Array)
], CreateThemeDto.prototype, "sections", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ColorDto }),
    __metadata("design:type", ColorDto)
], CreateThemeDto.prototype, "colors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CreateThemeDto.prototype, "font", void 0);
//# sourceMappingURL=create-theme.dto.js.map