import { Controller } from '@nestjs/common'
import { GadsService } from './gads.service'

@Controller()
export class GadsController {
  constructor (private readonly gadsService: GadsService) {}
}
