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
import { ProductModule } from './product/product.module';
import { StorageModule } from './storage/storage.module';
import { CategoriesModule } from './categories/categories.module';
import { MemberController } from './member/member.controller';
import { MemberRpcService } from './member/member.rpc.service';
import { MemberModule } from './member/member.module';
import { BranchesModule } from './branches/branches.module';
import { RoleModule } from './role/role.module';
import { BatchesModule } from './batches/batches.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    StoresModule,
    // CartModule,
    // CronModule,
    CustomerModule,
    MemberModule,
    // OrderModule,
    // PaymentModule,
    // PromotionModule,
    // SaasModule,
    // SharedModule,
    ThemeModule,
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
    ProductModule,
    StorageModule,
    CategoriesModule,
    BranchesModule,
    MemberModule,
    RoleModule,
    BatchesModule,
  ],
  // controllers: [MemberController],
  // providers: [MemberRpcService],
})
export class AppModule {}
