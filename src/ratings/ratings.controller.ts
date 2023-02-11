import { Body, Controller, Get, Param } from '@nestjs/common'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { RatingsService } from './ratings.service'

@Controller('rating')
export class RatingsController {
  constructor (private readonly ratingsService: RatingsService) {}

  @Get(':id')
  async findByCompanyId (
    @Param('id') id: string,
      @Body() date: AddConvertDateUTC
  ): Promise<{
        1: number
        2: number
        3: number
        4: number
        5: number
      }> {
    return await this.ratingsService.findByCompanyId(id, date)
  }
}
