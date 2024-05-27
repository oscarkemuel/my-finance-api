// src/income/income.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Income } from './entities/income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  findAll(): Promise<Income[]> {
    return this.incomeRepository.find();
  }

  findOne(id: number): Promise<Income> {
    return this.incomeRepository.findOneBy({ id });
  }

  create(income: Income): Promise<Income> {
    return this.incomeRepository.save(income);
  }

  async update(id: number, income: Income): Promise<Income> {
    await this.incomeRepository.update(id, income);
    return this.incomeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.incomeRepository.delete(id);
  }
}
