import { CreateAuthDto } from './dto/create-auth.dto';
import { PhoneLoginAuthDto } from './dto/phone-login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { LoginDto } from './dto/login.dto';
import { SocialLoginDto } from './dto/social-login.dto';
import { PhoneRegisterDto } from './dto/phone-register.dto';
import { SocialAuthRegisterDto } from './dto/social-auth.dto';
import { AuthRpcService } from './auth.rpc.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly rabbitRPC;
    constructor(rabbitRPC: AuthRpcService);
    signUp(createAuthDto: CreateAuthDto, res: Response): Promise<any>;
    phoneLogin(phoneLoginAuthDto: PhoneLoginAuthDto, res: Response): Promise<void>;
    verifyOTP(verifyOtpDto: VerifyOtpDto, res: Response): Promise<void>;
    login(loginDto: LoginDto, res: Response): Promise<void>;
    socialLogin(socialLoginDto: SocialLoginDto, res: Response): Promise<void>;
    phoneRegister(phoneRegisterDto: PhoneRegisterDto, res: Response): Promise<void>;
    socialRegister(socialAuthRegisterDto: SocialAuthRegisterDto, res: Response): Promise<void>;
}
