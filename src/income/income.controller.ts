// src/income/income.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { Income } from './entities/income.entity';

@Controller('incomes')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  findAll(): Promise<Income[]> {
    return this.incomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Income> {
    return this.incomeService.findOne(id);
  }

  @Post()
  create(@Body() income: Income): Promise<Income> {
    return this.incomeService.create(income);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() income: Income): Promise<Income> {
    return this.incomeService.update(id, income);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.incomeService.remove(id);
  }
}
