import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = this.mainHello777()
    console.log(hello)
    return hello
  }
  
  mainHello777(): string {
    return 'Hello main 777!';
  }

  mainTest123(): number{
    return 123;
  }
}
