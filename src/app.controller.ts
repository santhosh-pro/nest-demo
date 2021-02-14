import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitmqConnection, RabbitmqSubscribe } from './infra/rabbit-mq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: RabbitmqConnection
    ) { }

  @Get()
  async getHello(): Promise<string> {
    await this.amqpConnection.publish('ProductCreated2','routingKey', { test: 'hello' });
    return this.appService.getHello();
  }

  @RabbitmqSubscribe('ProductCreated2', 'routingKey', 'queueName')
  async getInfo(info: any) {
    console.log(`this is the info from producer ${info}`);
  }
}
