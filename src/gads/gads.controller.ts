import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Gad } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddGadDto } from './dto/add-gad.dto'
import { UpdateGadDto } from './dto/updateGad.dto'
import { GadsService } from './gads.service'

@Controller('gad')
export class GadsController {
  constructor (private readonly gadsService: GadsService) {}
  @Post()
  async create (@Body() dto: AddGadDto): Promise<Gad> {
    return await this.gadsService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateGadDto): Promise<Gad> {
    return await this.gadsService.update(id, dto)
  }

  @Get(':id')
  async findByCompanyId (
    @Param('id') id: string,
      @Body() dto: AddConvertDateUTC
  ): Promise<{
        beginningAverageGad: number
        middleAverageGad: number
        endAverageGad: number
      }> {
    return await this.gadsService.findByCompanyId(id, dto)
  }
}
