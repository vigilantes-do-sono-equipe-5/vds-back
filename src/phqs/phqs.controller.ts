import { Body, Controller, Get, Post, Patch, Param, Query } from '@nestjs/common'
import { Phq } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddPhqDto } from './dto/add-phq.dto'
import { UpdatePhqDto } from './dto/updatePhq.dto'
import { PhqsService } from './phqs.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('phq')
@Controller('phq')
export class PhqsController {
  constructor (private readonly phqsService: PhqsService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo formulário de Phq.'
  })
  async create (@Body() dto: AddPhqDto): Promise<Phq> {
    return await this.phqsService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um formulário de Phq pelo id.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdatePhqDto): Promise<Phq> {
    return await this.phqsService.update(id, dto)
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontra a média das resposta dos formulários de Patient Health Questionnaire 2-item(Phq-2), em três períodos, que são o início, meio e fim. Podendo ser de uma margem de uma semana(7 dias exatos) ou um mês.'
  })
  async findByCompanyId (
    @Param('id') id: string,
      @Query() dto: AddConvertDateUTC
  ): Promise<{
        beginningAveragePhq: number
        middleAveragePhq: number
        endAveragePhq: number
      }> {
    return await this.phqsService.findByCompanyId(id, dto)
  }
}
