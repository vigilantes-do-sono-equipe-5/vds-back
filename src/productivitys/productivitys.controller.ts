import { Controller } from '@nestjs/common'
import { ProductivitysService } from './productivitys.service'

@Controller()
export class ProductivitysController {
  constructor (private readonly productivitysService: ProductivitysService) {}
}
