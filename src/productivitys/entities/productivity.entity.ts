import { AddProductivityDto } from '../dto/add-productivity.dto'

export class Productivity extends AddProductivityDto {
  id: string
  user_id: string
  company_id: string
}
