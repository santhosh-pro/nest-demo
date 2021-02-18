import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
/* PLOP_INJECT_IMPORT */
@Module({
    imports: [
        CommonModule,
        DatabaseModule,
        /* PLOP_INJECT_MODULE */
     ],
    controllers: [],
    providers: [],
})
export class UseCasesModule {}