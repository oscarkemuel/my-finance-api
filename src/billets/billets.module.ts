import { Module } from '@nestjs/common';
import { BilletsService } from './billets.service';
import { BilletsController } from './billets.controller';

@Module({
  controllers: [BilletsController],
  providers: [BilletsService],
})
export class BilletsModule {}
