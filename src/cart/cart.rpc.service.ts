import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { QueuesEnum } from 'src/common/enums';

@Injectable()
export class CartRpcService {
  private client: ClientProxy;

  constructor(private readonly configService: ConfigService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get('RABBITMQ_URL')],
        queue: QueuesEnum.STORES,
      },
    });
  }

  sendRequest(pattern: string, data: any): Observable<any> {
    return new Observable<any>((observer) => {
      this.client
        .send<any, any>(pattern, data) // Pass the pattern as the first argument
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => observer.error(error),
        });
    });
  }
}
