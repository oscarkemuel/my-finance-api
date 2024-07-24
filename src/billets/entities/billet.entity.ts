import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

@Entity()
export class Billet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  code: string;

  @Column('double')
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  company: string;

  @Column()
  @IsDate()
  dueDate: Date;
}
