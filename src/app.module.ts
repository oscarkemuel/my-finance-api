import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { BilletsModule } from './billets/billets.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BankModule,
    CategoryModule,
    ExpenseModule,
    IncomeModule,
    BilletsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
