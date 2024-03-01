import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PhoneLoginAuthDto } from './dto/phone-login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResendEmailDto } from './dto/resend-email.dto';
import { SocialLoginDto } from './dto/social-login.dto';
import { PhoneRegisterDto } from './dto/phone-register.dto';
import { SocialAuthRegisterDto } from './dto/social-auth.dto';
import { Observable } from 'rxjs';
import { AuthRpcService } from './auth.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { Response } from 'express';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly rabbitRPC: AuthRpcService) {}
  @Post('/register')
  async signUp(
    @Body() createAuthDto: CreateAuthDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const response = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.REGISTER, createAuthDto)
        .toPromise();
      console.log(response);
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      console.log('AuthController', error);
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Post('/phone-login')
  async phoneLogin(
    @Body() phoneLoginAuthDto: PhoneLoginAuthDto,
    @Res() res: Response,
  ) {
    try {
      const response: any = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.PHONE_LOGIN, phoneLoginAuthDto)
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Post('/verify-otp')
  async verifyOTP(@Body() verifyOtpDto: VerifyOtpDto, @Res() res: Response) {
    try {
      const response = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.VERIFY_OTP, verifyOtpDto)
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const response: any = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.LOGIN, loginDto)
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  // @Post('/resetpassword/:verficationToken')
  // @ApiParam({ name: 'verficationToken', type: String })
  // resetPassword(
  //   @Body() resetPasswordDto: ResetPasswordDto,
  //   @Param('verficationToken') verficationToken: string,
  // ) {
  //   return this.rabbitRPC.sendRequest(MessagePatternEnum.RESET_PASSWORD, {
  //     resetPasswordDto,
  //     verficationToken,
  //   });
  // }

  @Post('/forgotpassword')
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.rabbitRPC.sendRequest(
      MessagePatternEnum.FORGOT_PASSWORD,
      forgotPasswordDto,
    );
  }

  // @Post('/resendemail')
  // resendEmail(@Body() resendEmailDto: ResendEmailDto) {
  //   return this.rabbitRPC.sendRequest(
  //     MessagePatternEnum.RESEND_EMAIL,
  //     resendEmailDto,
  //   );
  // }

  @Post('social-login')
  async socialLogin(
    @Body() socialLoginDto: SocialLoginDto,
    @Res() res: Response,
  ) {
    try {
      const response = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.SOCIAL_LOGIN, socialLoginDto)
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get('verify/:id')
  @ApiParam({ name: 'id', type: String })
  async verifyId(@Param('id') id: string, @Res() res: Response) {
    try {
      // return this.rabbitRPC.sendRequest(MessagePatternEnum.VERIFY_ID, id);
      const response: any = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.VERIFY_ID, id)
        .toPromise();
      console.log(response);
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Post('phone-register')
  async phoneRegister(
    @Body() phoneRegisterDto: PhoneRegisterDto,
    @Res() res: Response,
  ) {
    try {
      const response: any = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.PHONE_REGISTER, phoneRegisterDto)
        .toPromise();
      console.log(response);
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Post('social-register')
  async socialRegister(
    @Body() socialAuthRegisterDto: SocialAuthRegisterDto,
    @Res() res: Response,
  ) {
    try {
      const response: any = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.SOCIAL_REGISTER, socialAuthRegisterDto)
        .toPromise();

      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}
