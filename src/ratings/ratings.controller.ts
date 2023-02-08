import { Controller } from '@nestjs/common'
import { RatingsService } from './ratings.service'

@Controller()
export class RatingsController {
  constructor (private readonly ratingsService: RatingsService) {}
}
