import { PartialType } from '@nestjs/mapped-types'
import { AddSleepDiariesDto } from './add-sleep-diaries.dto'

export class UpdateSleepDiariesDto extends PartialType(AddSleepDiariesDto) {}
