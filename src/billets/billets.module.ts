import { Module } from '@nestjs/common';
import { BilletsService } from './billets.service';
import { BilletsController } from './billets.controller';
import { Billet } from './entities/billet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Billet])],
  controllers: [BilletsController],
  providers: [BilletsService],
})
export class BilletsModule {}
