import { PartialType } from '@nestjs/mapped-types';
import { CreateDFDto } from './create-devil-fruit.dto';

export class UpdateDFDto extends PartialType(CreateDFDto) { }