import { UsecasesModule } from './usecases/usecases.module';
import { DatabaseModule } from './infra/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infra/database/product/product.entity';
import { SnakeNamingStrategy } from './common/snake-naming.strategy';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { Customer } from './infra/database/customer/customer.entity';

@Module({
	imports: [
		CommonModule,
		UsecasesModule,
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
				Customer
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
