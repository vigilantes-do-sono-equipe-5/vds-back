import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { Gad } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddGadDto } from './dto/add-gad.dto'
import { UpdateGadDto } from './dto/updateGad.dto'
import { GadsService } from './gads.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('gad')
@Controller('gad')
export class GadsController {
  constructor (private readonly gadsService: GadsService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo formulário de Gad.'
  })
  async create (@Body() dto: AddGadDto): Promise<Gad> {
    return await this.gadsService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um formulário de Gad pelo id.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateGadDto): Promise<Gad> {
    return await this.gadsService.update(id, dto)
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontra a média das resposta dos formulários de Generalized Anxiety Disorder 2-item(Gad-2), em três períodos, que são o início, meio e fim. Podendo ser de uma margem de uma semana(7 dias exatos) ou um mês.'
  })
  async findByCompanyId (
    @Param('id') id: string,
      @Query() dto: AddConvertDateUTC
  ): Promise<{
        beginningAverageGad: number
        middleAverageGad: number
        endAverageGad: number
      }> {
    return await this.gadsService.findByCompanyId(id, dto)
  }
}
