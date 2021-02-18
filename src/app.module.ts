import { UseCasesModule } from './use-cases/use-cases.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/database/product/product.entity';
import { SnakeNamingStrategy } from './common/snake-naming.strategy';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { Customer } from './infrastructure/database/customer/customer.entity';
import { Payment } from './infrastructure/database/payment/payment.entity';

@Module({
	imports: [
		CommonModule,
		UseCasesModule,
		DatabaseModule,
		AutomapperModule.forRoot({
			options: [{ name: 'blah', pluginInitializer: classes }],
			singular: true,
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
				Customer,
				Payment
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
