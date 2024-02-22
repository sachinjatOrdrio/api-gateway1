import { Module } from '@nestjs/common';
import { PromotionController } from './promotion.controller';
import { PromotionRpcService } from './promotion.rpc.service';

@Module({
  controllers: [PromotionController],
  providers: [PromotionRpcService],
})
export class PromotionModule {}
