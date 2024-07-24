import { Injectable } from '@nestjs/common';
import { CreateBilletDto } from './dto/create-billet.dto';
import { UpdateBilletDto } from './dto/update-billet.dto';

@Injectable()
export class BilletsService {
  create(createBilletDto: CreateBilletDto) {
    return 'This action adds a new billet';
  }

  findAll() {
    return `This action returns all billets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billet`;
  }

  update(id: number, updateBilletDto: UpdateBilletDto) {
    return `This action updates a #${id} billet`;
  }

  remove(id: number) {
    return `This action removes a #${id} billet`;
  }
}
