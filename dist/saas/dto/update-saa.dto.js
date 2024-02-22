"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_saa_dto_1 = require("./create-saa.dto");
class UpdateSaaDto extends (0, swagger_1.PartialType)(create_saa_dto_1.CreateSaaDto) {
}
exports.UpdateSaaDto = UpdateSaaDto;
//# sourceMappingURL=update-saa.dto.js.map