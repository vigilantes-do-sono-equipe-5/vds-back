import { Controller } from '@nestjs/common'
import { UserProgramsService } from './userPrograms.service'

@Controller()
export class UserProgramsController {
  constructor (private readonly nameService: UserProgramsService) {}
}
