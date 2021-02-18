import { UseCasesModule } from './use-cases/use-cases.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from './common/snake-naming.strategy';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
@Module({
	imports: [
		CommonModule,
		UseCasesModule,
		DatabaseModule,
		AutomapperModule.forRoot({
			options: [{ name: 'mapper', pluginInitializer: classes }],
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
