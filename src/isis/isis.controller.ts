import { Controller } from '@nestjs/common'
import { IsisService } from './isis.service'

@Controller()
export class IsisController {
  constructor (private readonly isisService: IsisService) {}
}
