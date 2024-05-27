// src/bank/bank.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: Repository<Bank>,
  ) {}

  findAll(): Promise<Bank[]> {
    return this.bankRepository.find();
  }

  findOne(id: number): Promise<Bank> {
    return this.bankRepository.findOneBy({ id });
  }

  create(bank: Bank): Promise<Bank> {
    return this.bankRepository.save(bank);
  }

  async update(id: number, bank: Bank): Promise<Bank> {
    await this.bankRepository.update(id, bank);
    return this.bankRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.bankRepository.delete(id);
  }
}
