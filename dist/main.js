"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const configService = new config_1.ConfigService();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ordrio 2.0 Api gateways')
        .setDescription('The Ordrio 2.0 API gateways')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    app.enableCors({ allowedHeaders: '*', origin: '*', methods: '*' });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(configService.get('PORT') || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map