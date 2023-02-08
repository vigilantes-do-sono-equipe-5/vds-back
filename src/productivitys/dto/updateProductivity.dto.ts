import { PartialType } from '@nestjs/mapped-types'
import { AddProductivityDto } from './add-productivity.dto'

export class UpdateProductivityDto extends PartialType(AddProductivityDto) {}
