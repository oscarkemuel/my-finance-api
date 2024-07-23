// src/expense/expense.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Expense> {
    return this.expenseService.findOne(id);
  }

  @Post()
  create(@Body() expense: CreateExpenseDto): Promise<Expense> {
    return this.expenseService.create(expense);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() expense: UpdateExpenseDto,
  ): Promise<Expense> {
    return this.expenseService.update(id, expense);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.expenseService.remove(id);
  }

  @Patch('update-by-category/:categoryId')
  updateByCategory(@Param('categoryId') categoryId: number) {
    return this.expenseService.updateExpenseByExcludedCategory(categoryId);
  }

  @Patch('update-by-bank/:bankId')
  updateByBank(@Param('bankId') bankId: number) {
    return this.expenseService.updateExpenseByExcludedBank(bankId);
  }
}
