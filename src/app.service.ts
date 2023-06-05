import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.v2_Hello();
  }

  v2_Hello(): string {
    return 'Hello World v2!';
  }

}
