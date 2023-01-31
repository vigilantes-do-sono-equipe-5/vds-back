import { PartialType } from '@nestjs/mapped-types'
import { AddGadDto } from './add-gad.dto'

export class UpdateGadDto extends PartialType(AddGadDto) {}
