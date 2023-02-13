import { Body, Controller, Get, Post, Patch, Param, Query } from '@nestjs/common'
import { Isi } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddIsiDto } from './dto/add-isi.dto'
import { UpdateIsiDto } from './dto/updateIsi.dto'
import { IsisService } from './isis.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('isi')
@Controller('isi')
export class IsisController {
  constructor (private readonly isisService: IsisService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo formulário de Isi.'
  })
  async create (@Body() dto: AddIsiDto): Promise<Isi> {
    return await this.isisService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um formulário de Isi pelo id.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateIsiDto): Promise<Isi> {
    return await this.isisService.update(id, dto)
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontra a média das resposta dos formulários de Insomnia Severity Index (Isi), em três períodos, que são o início, meio e fim. Podendo ser de uma margem de uma semana(7 dias exatos) ou um mês.'
  })
  async findByCompanyId (
    @Param('id') id: string,
      @Query() dto: AddConvertDateUTC
  ): Promise<{
        beginningAverageIsi: number
        middleAverageIsi: number
        endAverageIsi: number
      }> {
    return await this.isisService.findByCompanyId(id, dto)
  }
}
