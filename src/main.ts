import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFilter } from 'src/validation.filter';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ordrio 2.0 Api gateways')
    .setDescription('The Ordrio 2.0 API gateways')
    .setVersion('1.0')
    .addBearerAuth() // Add this line to specify Bearer token authentication
    .build();

  app.enableCors({ allowedHeaders: '*', origin: '*', methods: '*' });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ValidationExceptionFilter());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get('PORT') || 8000);
}
bootstrap();
