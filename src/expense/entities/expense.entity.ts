// src/expense/expense.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { Bank } from 'src/bank/entities/bank.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column('double')
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Column()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @Column()
  @IsNotEmpty()
  @IsDate()
  createdDate: Date;

  @ManyToOne(() => Category, (category) => category.id, { nullable: true })
  @IsNotEmpty()
  category: Category;

  @ManyToOne(() => Bank, (bank) => bank.id, { nullable: true })
  @IsNotEmpty()
  bank: Bank;
}
