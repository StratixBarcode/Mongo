import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = this.mainHello111()
    console.log(hello)
    return hello
  }
  
  mainHello111(): string {
    return 'Hello main 111!';
  }

  mainTest111(): number{
    return 111;
  }


}
