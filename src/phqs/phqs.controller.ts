import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common'
import { Phq } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddPhqDto } from './dto/add-phq.dto'
import { UpdatePhqDto } from './dto/updatePhq.dto'
import { PhqsService } from './phqs.service'

@Controller('phq')
export class PhqsController {
  constructor (private readonly phqsService: PhqsService) {}
  @Post()
  async create (@Body() dto: AddPhqDto): Promise<Phq> {
    return await this.phqsService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdatePhqDto): Promise<Phq> {
    return await this.phqsService.update(id, dto)
  }

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
