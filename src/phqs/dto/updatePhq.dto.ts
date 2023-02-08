import { PartialType } from '@nestjs/mapped-types'
import { AddPhqDto } from './add-phq.dto'

export class UpdatePhqDto extends PartialType(AddPhqDto) {}
