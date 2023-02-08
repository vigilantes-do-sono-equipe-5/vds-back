import { PartialType } from '@nestjs/mapped-types'
import { AddIsiDto } from './add-isi.dto'

export class UpdateIsiDto extends PartialType(AddIsiDto) {}
