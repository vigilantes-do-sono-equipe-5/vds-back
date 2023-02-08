import { Controller } from '@nestjs/common'
import { SleepDiariesService } from './sleepDiaries.service'

@Controller()
export class SleepDiariesController {
  constructor (private readonly sleepDiariesService: SleepDiariesService) {}
}
