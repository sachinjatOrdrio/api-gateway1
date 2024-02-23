// auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt'; // Import JwtService if you're using JWT for authentication
import { AuthRpcService } from 'src/auth/auth.rpc.service';
import { MessagePatternEnum } from 'src/auth/enums/message-patterns.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly rabbitRPC: AuthRpcService,
    private readonly configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header
    console.log(token);

    if (!token) {
      throw new UnauthorizedException('Missing authorization token');
    }

    try {
      const decoded = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      }); // Verify and decode the token

      const user = await this.rabbitRPC
        .sendRequest(MessagePatternEnum.FIND_USER_BY_ID, decoded.userId)
        .toPromise();

      // const user = await this.usersService.findById(decoded.userId); // Fetch user from database based on decoded userId

      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      request.user = user; // Attach the user object to the request for future use
      return true; // User is authenticated
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
