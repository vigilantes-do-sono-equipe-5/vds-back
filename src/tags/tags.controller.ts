import { Controller } from '@nestjs/common'
import { TagsService } from './tags.service'

@Controller()
export class TagsController {
  constructor (private readonly tagsService: TagsService) {}
}
