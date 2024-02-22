"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThemeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_theme_dto_1 = require("./create-theme.dto");
class UpdateThemeDto extends (0, swagger_1.PartialType)(create_theme_dto_1.CreateThemeDto) {
}
exports.UpdateThemeDto = UpdateThemeDto;
//# sourceMappingURL=update-theme.dto.js.map