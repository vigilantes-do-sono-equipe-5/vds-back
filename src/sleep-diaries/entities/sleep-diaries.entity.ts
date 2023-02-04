import { JsonSleepDiariesDto } from '../dto/json-sleep-diaries.dto'

export class SleepDiaries extends JsonSleepDiariesDto {
  id: string
  user_id: string
  company_id: string
}
