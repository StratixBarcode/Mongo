import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = this.mainHello888()
    console.log(hello)
    return hello
  }
  
  mainHello888(): string {
    return 'Hello main 888!';
  }

  mainTest(): number{
    return 888;
  }
}
