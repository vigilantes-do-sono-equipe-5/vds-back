import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common'
import { Isi } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddIsiDto } from './dto/add-isi.dto'
import { UpdateIsiDto } from './dto/updateIsi.dto'
import { IsisService } from './isis.service'

@Controller('isi')
export class IsisController {
  constructor (private readonly isisService: IsisService) {}
  @Post()
  async create (@Body() dto: AddIsiDto): Promise<Isi> {
    return await this.isisService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateIsiDto): Promise<Isi> {
    return await this.isisService.update(id, dto)
  }

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
