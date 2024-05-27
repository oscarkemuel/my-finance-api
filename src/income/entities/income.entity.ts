// src/income/income.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

@Entity()
export class Income {
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
}
