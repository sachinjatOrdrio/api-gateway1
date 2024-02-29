// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Res,
//   Req,
// } from '@nestjs/common';
// import { CreateOrdrioSwipeDto } from './dto/create-ordrioSwipe.dto';
// import { UpdateOrdrioSwipeDto } from './dto/update-ordrioSwipe.dto';
// import { OrdrioSwipeService } from './ordrioSwipe.service';
// import { Request, Response } from 'express';

// @Controller('ordrioSwipe')
// export class OrdrioSwipeController {
//   constructor(private readonly ordrioSwipeService: OrdrioSwipeService) { }

//   @Post('create-sub-account')
//   async createSubAccount(@Res() res:Response, @Req() req:Request){
//     return this.ordrioSwipeService.createSubAccount(req,res);
//   }

//   @Get('fetch-sub-account')
//   async fetchSubAccount(@Res() res:Response, @Req() req:Request) {
//     return this.ordrioSwipeService.fetchSubAccount(req,res);
//   }

//   @Post("ordrio-swipe/create-merchant-payment-details")
//   async createMerchantPaymentDetails(@Res() res:Response, @Req() req:Request) {
//     return this.ordrioSwipeService.createMerchantPaymentDetails(req,res);
//   }

//   @Post("ordrio-swipe/create-transfers-orders")
//   async createTransfersOrders(@Res() res:Response, @Req() req:Request) {
//     return this.ordrioSwipeService.createTransfersOrders(req,res);
//   }

//   @Post('ordrio-swipe/create-transfers-orders/by-pay-id')
//   async createTransfersOrdersByPayId(@Res() res:Response, @Req() req:Request) {
//     return this.ordrioSwipeService.createTransfersOrdersByPayId(req,res);
//   }

//   @Post('ordrio-swipe/razor-pay-webhook')
//   async razorPayWebhook(@Res() res:Response, @Req() req:Request) {
//     return this.ordrioSwipeService.razorPayWebhook(req,res);
//   }



  

  
// }
