import { Controller, Get } from '@nestjs/common';
import { ExtendedMessage, RMQMessage, RMQRoute, RMQService } from 'nestjs-rmq';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly rmqService: RMQService) {}

  @Get()
  getHello(): string {
    this.rmqService.notify<string>('info.none', 'My data');
    return this.appService.getHello();
  }

  @RMQRoute('info.none')
	info(data: string) {
		console.log(data);
	}
  
  @RMQRoute('info.none', { manualAck: true })
	myOtherMethod(data: string, @RMQMessage msg: ExtendedMessage) {
		// Any logic goes here
		this.rmqService.nack(msg);
		// Any logic goes here
	}
}
