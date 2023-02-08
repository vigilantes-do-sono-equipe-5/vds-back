import { PartialType } from '@nestjs/mapped-types'
import { AddRatingsDto } from './add-ratings.dto'

export class UpdateRatingsDto extends PartialType(AddRatingsDto) {}
