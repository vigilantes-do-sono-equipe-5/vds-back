import { SleepDiariesWithTagsDto } from '../dto/sleepDiariesWithTags.dto'

export class SleepDiaries extends SleepDiariesWithTagsDto {
  id: string
  user_id: string
  company_id: string
}
