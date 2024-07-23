import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { CategoryModule } from 'src/category/category.module';
import { BankModule } from 'src/bank/bank.module';

@Module({
  imports: [TypeOrmModule.forFeature([Expense]), CategoryModule, BankModule],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
