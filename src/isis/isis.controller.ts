import { Body, Controller, Get, Param } from '@nestjs/common'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { IsisService } from './isis.service'

@Controller('isi')
export class IsisController {
  constructor (private readonly isisService: IsisService) {}

  @Get(':id')
  async findByCompanyId (
    @Param('id') id: string,
      @Body() dto: AddConvertDateUTC
  ): Promise<{
        beginningAverageIsi: number
        middleAverageIsi: number
        endAverageIsi: number
      }> {
    return await this.isisService.findByCompanyId(id, dto)
  }
}
