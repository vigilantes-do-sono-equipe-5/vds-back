import { AddGadDto } from '../dto/add-gad.dto'

export class Gad extends AddGadDto {
  id: string
  user_id: string
  company_id: string
}
