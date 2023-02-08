import { IsArray, IsOptional, IsString } from 'class-validator'
import { SleepDiariesWithTagsDto } from './sleepDiariesWithTags.dto'
import { SleepDiariesWithoutTagsDto } from './sleepDiariesWithoutTags.dto'

export class AddSleepDiariesDto extends SleepDiariesWithoutTagsDto {
  @IsString()
    user_id?: string

  @IsString()
    company_id?: string
}

export class AddSleepDiariesWithTagsDto extends AddSleepDiariesDto implements SleepDiariesWithTagsDto {
  @IsOptional()
  @IsArray()
    tags?: Array<{ sleep_tag: string }>
}
