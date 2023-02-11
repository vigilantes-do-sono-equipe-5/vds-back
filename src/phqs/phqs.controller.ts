import { Body, Controller, Get, Param } from '@nestjs/common'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { PhqsService } from './phqs.service'

@Controller('phq')
export class PhqsController {
  constructor (private readonly phqsService: PhqsService) {}

  @Get(':id')
  async findByCompanyId (
    @Param('id') id: string,
      @Body() dto: AddConvertDateUTC
  ): Promise<{
        beginningAveragePhq: number
        middleAveragePhq: number
        endAveragePhq: number
      }> {
    return await this.phqsService.findByCompanyId(id, dto)
  }
}
