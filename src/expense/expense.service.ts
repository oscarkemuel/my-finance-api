// src/expense/expense.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async findAll(): Promise<Expense[]> {
    const all = await this.expenseRepository.find({
      relations: ['category', 'bank'],
    });
    console.log(all);
    return all;
  }

  findOne(id: number): Promise<Expense> {
    return this.expenseRepository.findOneBy({ id });
  }

  create(expense: Expense): Promise<Expense> {
    const createdDate = new Date();
    expense.createdDate = createdDate;
    return this.expenseRepository.save(expense);
  }

  async update(id: number, expense: Expense): Promise<Expense> {
    await this.expenseRepository.update(id, expense);
    return this.expenseRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }

  async updateExpenseByExcludedCategory(
    categoryId: number,
  ): Promise<UpdateResult> {
    return this.expenseRepository.update(
      { category: { id: categoryId } },
      { category: null },
    );
  }

  async updateExpenseByExcludedBank(bankId: number): Promise<UpdateResult> {
    return this.expenseRepository.update(
      { bank: { id: bankId } },
      { bank: null },
    );
  }
}
