import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BilletsService } from './billets.service';
import { CreateBilletDto } from './dto/create-billet.dto';
import { UpdateBilletDto } from './dto/update-billet.dto';

@Controller('billets')
export class BilletsController {
  constructor(private readonly billetsService: BilletsService) {}

  @Post()
  create(@Body() createBilletDto: CreateBilletDto) {
    return this.billetsService.create(createBilletDto);
  }

  @Get()
  findAll() {
    return this.billetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBilletDto: UpdateBilletDto) {
    return this.billetsService.update(+id, updateBilletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billetsService.remove(+id);
  }
}
