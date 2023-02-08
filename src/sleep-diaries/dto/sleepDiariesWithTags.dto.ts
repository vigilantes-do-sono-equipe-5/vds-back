import { IsOptional, IsArray } from 'class-validator'
import { SleepDiariesWithoutTagsDto } from './sleepDiariesWithoutTags.dto'

export class SleepDiariesWithTagsDto extends SleepDiariesWithoutTagsDto {
  @IsOptional()
  @IsArray()
    tags?: Array<{ sleep_tag: string }>
}
