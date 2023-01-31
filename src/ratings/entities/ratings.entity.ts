import { AddRatingsDto } from '../dto/add-ratings.dto'

export class Ratings extends AddRatingsDto {
  id: string
  user_id: string
  company_id: string
}
