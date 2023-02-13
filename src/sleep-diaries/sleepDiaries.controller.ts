import { Controller, Get, Param, Post, Patch, Body } from '@nestjs/common'
import { SleepDiariesService } from './sleepDiaries.service'
import { Sleep_Diaries } from '@prisma/client'
import { AddSleepDiariesWithTagsDto } from './dto/add-sleepDiaries.dto'
import { UpdateSleepDiariesDto } from './dto/updateSleepDiaries.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('sleep-diaries')
@Controller('sleepDiaries')
export class SleepDiariesController {
  constructor (private readonly sleepDiariesService: SleepDiariesService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo diário de sono.'
  })
  async create (@Body() dto: AddSleepDiariesWithTagsDto): Promise<Sleep_Diaries | null> {
    return await this.sleepDiariesService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um diário de sono.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateSleepDiariesDto): Promise<Sleep_Diaries> {
    return await this.sleepDiariesService.update(id, dto)
  }

  @Get('interferenceAndTechniques/:id')
  @ApiOperation({
    summary: 'Entrega as tabelas de técnicas mais aplicadas e a tabela de inteferência de sono. Sendo entregue os valores totais de cada técnica ou interferência apontados por todos os usuários.'
  })
  async sleepInterferenceAndTechniques (@Param('id') id: string): Promise<{ moreAppliedTechniques: { autogenic_training: number
    behavior_activation: number
    challenge_catastrophic_thinking: number
    deep_breath: number
    gratitude: number
    imagery: number
    light_therapy: number
    meditation: number
    paradoxical_intention: number
    parking_lot: number
    pmr: number
    stimulus_control: number
    thought_block: number
  }
  sleepInterference: {
    nicotine: number
    nap: number
    exercise: number
    caffeine: number
    partner: number
    pain: number
    medicine: number
    noise: number
    bathroom: number
    meal: number
    temperature: number
    alcohol: number
    light: number
    dream: number }
  }> {
    return {
      ...await this.sleepDiariesService.sleepInterference(id),
      ...await this.sleepDiariesService.moreAppliedTechniques(id)
    }
  }
}
