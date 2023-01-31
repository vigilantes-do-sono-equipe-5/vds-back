import { AddPhqDto } from '../dto/add-phq.dto'

export class Phq extends AddPhqDto {
  id: string
  user_id: string
  company_id: string
}
