"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDispatcherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_dispatcher_dto_1 = require("./create-dispatcher.dto");
class UpdateDispatcherDto extends (0, swagger_1.PartialType)(create_dispatcher_dto_1.CreateDispatcherDto) {
}
exports.UpdateDispatcherDto = UpdateDispatcherDto;
//# sourceMappingURL=update-dispatcher.dto.js.map