import { PartialType } from '@nestjs/mapped-types'
import { AddSleepDiariesDto } from './add-sleepDiaries.dto'

export class UpdateSleepDiariesDto extends PartialType(AddSleepDiariesDto) {}
