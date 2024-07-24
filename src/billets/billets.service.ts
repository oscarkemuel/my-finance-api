import { Injectable } from '@nestjs/common';
import { CreateBilletDto } from './dto/create-billet.dto';
import { UpdateBilletDto } from './dto/update-billet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billet } from './entities/billet.entity';

@Injectable()
export class BilletsService {
  constructor(
    @InjectRepository(Billet)
    private billetRepository: Repository<Billet>,
  ) {}

  create(createBilletDto: CreateBilletDto) {
    const dueDate = new Date(createBilletDto.dueDate);

    createBilletDto.dueDate = dueDate;

    return this.billetRepository.save(createBilletDto);
  }

  findAll() {
    return this.billetRepository.find();
  }

  findOne(id: number) {
    return this.billetRepository.findOneBy({ id });
  }

  update(id: number, updateBilletDto: UpdateBilletDto) {
    return this.billetRepository.update(id, updateBilletDto);
  }

  remove(id: number) {
    return this.billetRepository.delete(id);
  }
}
