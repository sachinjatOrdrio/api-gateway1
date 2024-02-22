import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly rabbitRPC;
    private readonly configService;
    constructor(jwtService: JwtService, rabbitRPC: AuthRpcService, configService: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
