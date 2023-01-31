import { AddIsiDto } from '../dto/add-isi.dto'

export class Isi extends AddIsiDto {
  id: string
  user_id: string
  company_id: string
}
