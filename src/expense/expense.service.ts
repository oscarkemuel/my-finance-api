// src/expense/expense.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { CategoryService } from 'src/category/category.service';
import { BankService } from 'src/bank/bank.service';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
    private categoryService: CategoryService,
    private bankService: BankService,
  ) {}

  async findAll(): Promise<Expense[]> {
    const all = await this.expenseRepository.find({
      relations: ['category', 'bank'],
    });
    return all.map((expense) => {
      return {
        ...expense,
        category_id: expense.category?.id,
        bank_id: expense.bank?.id,
        created_date: expense.createdDate,
      };
    });
  }

  findOne(id: number): Promise<Expense> {
    return this.expenseRepository.findOneBy({ id });
  }

  async create(expenseDto: CreateExpenseDto): Promise<Expense> {
    const category = await this.categoryService.findOne(expenseDto.category_id);
    const bank = await this.bankService.findOne(expenseDto.bank_id);

    const expense = this.expenseRepository.create({
      ...expenseDto,
      createdDate: new Date(),
      category,
      bank,
    });

    return this.expenseRepository.save(expense);
  }

  async update(id: number, expenseDto: UpdateExpenseDto): Promise<Expense> {
    const category = await this.categoryService.findOne(expenseDto.category_id);
    const bank = await this.bankService.findOne(expenseDto.bank_id);

    const payload = {
      name: expenseDto.name,
      amount: expenseDto.amount,
      date: expenseDto.date,
      category,
      bank,
    };

    await this.expenseRepository.update(id, payload);

    return this.expenseRepository.findOne({
      where: { id },
      relations: ['category', 'bank'],
    });
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
