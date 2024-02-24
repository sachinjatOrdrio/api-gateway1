import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StoresModule } from './stores/stores.module';
import { CartModule } from './cart/cart.module';
import { CronModule } from './cron/cron.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { PromotionModule } from './promotion/promotion.module';
import { SaasModule } from './saas/saas.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    StoresModule,
    // CartModule,
    // CronModule,
    // CustomerModule,
    // OrderModule,
    // PaymentModule,
    // PromotionModule,
    // SaasModule,
    // SharedModule,
    // ThemeModule,
    // UserModule,
    // DispatcherModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRY') },
      }),
    }),
  ],
  })
export class AppModule {}
