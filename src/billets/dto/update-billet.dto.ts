import { PartialType } from '@nestjs/mapped-types';
import { CreateBilletDto } from './create-billet.dto';

export class UpdateBilletDto extends PartialType(CreateBilletDto) {}
