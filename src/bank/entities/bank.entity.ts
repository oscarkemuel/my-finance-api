// src/bank/bank.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column('double')
  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
