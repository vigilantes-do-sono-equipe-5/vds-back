
import { IsString } from 'class-validator'
import { SleepDiariesWithTagsDto } from './sleepDiariesWithTags.dto'

export class AddSleepDiariesDto extends SleepDiariesWithTagsDto {
  @IsString()
    user_id: string

  @IsString()
    company_id: string
}
