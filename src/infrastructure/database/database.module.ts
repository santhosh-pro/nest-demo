import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
/* PLOP_INJECT_IMPORT */

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            /* PLOP_INJECT_ENTITY */
        ])
    ],
    controllers: [],
    providers: [
        /* PLOP_INJECT_MODULE */
    ],
    exports: [
        /* PLOP_EXPORT_MODULE */
    ]
})
export class DatabaseModule { }
