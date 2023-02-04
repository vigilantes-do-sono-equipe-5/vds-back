import { IsOptional, IsArray } from 'class-validator'
import { SleepDiariesWithTagsDto } from './sleepDiariesWithTags.dto'

export class JsonSleepDiariesDto extends SleepDiariesWithTagsDto {
  @IsOptional()
  @IsArray()
    tags?: Array<{ sleep_tag: string }>
}
