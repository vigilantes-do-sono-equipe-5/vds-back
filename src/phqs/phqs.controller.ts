import { Controller } from '@nestjs/common'
import { PhqsService } from './phqs.service'

@Controller()
export class PhqsController {
  constructor (private readonly phqsService: PhqsService) {}
}
