import { AddSleepDiariesDto } from '../dto/add-sleep-diaries.dto'

export class SleepDiaries extends AddSleepDiariesDto {
  id: string
  user_id: string
  company_id: string
}
