import { UsecasesModule } from './usecases/usecases.module';
import { DatabaseModule } from './infra/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infra/database/product/product.entity';
import { SnakeNamingStrategy } from './common/snake-naming.strategy';
import { RMQModule } from 'nestjs-rmq';

@Module({
  imports: [
    CommonModule,
    UsecasesModule,
    DatabaseModule,
	RMQModule.forRoot({
		exchangeName: 'exchange1',
		connections: [
			{
				login: 'guest',
				password: 'guest',
				host: 'localhost',
			},
		],
		queueName: 'my-service-queue',
	}),
    TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'computer',
			database: 'nest-demo',
			entities: [
				ProductEntity,
			],
			synchronize: true,
			logging: ["query", "error"],
			namingStrategy: new SnakeNamingStrategy(),
		}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
