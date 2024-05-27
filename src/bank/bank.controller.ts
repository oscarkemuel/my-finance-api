// src/bank/bank.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BankService } from './bank.service';
import { Bank } from './entities/bank.entity';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  findAll(): Promise<Bank[]> {
    return this.bankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Bank> {
    return this.bankService.findOne(id);
  }

  @Post()
  create(@Body() bank: Bank): Promise<Bank> {
    console.log(bank);
    return this.bankService.create(bank);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bank: Bank): Promise<Bank> {
    return this.bankService.update(id, bank);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.bankService.remove(id);
  }
}
