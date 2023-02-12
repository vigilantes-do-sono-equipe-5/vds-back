import { Controller, Post, Patch, Param, Body } from '@nestjs/common'
import { Sleep_Diaries } from '@prisma/client'
import { AddSleepDiariesWithTagsDto } from './dto/add-sleepDiaries.dto'
import { UpdateSleepDiariesDto } from './dto/updateSleepDiaries.dto'
import { SleepDiariesService } from './sleepDiaries.service'

@Controller()
export class SleepDiariesController {
  constructor (private readonly sleepDiariesService: SleepDiariesService) {}
  @Post()
  async create (@Body() dto: AddSleepDiariesWithTagsDto): Promise<Sleep_Diaries | null> {
    return await this.sleepDiariesService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateSleepDiariesDto): Promise<Sleep_Diaries> {
    return await this.sleepDiariesService.update(id, dto)
  }
}
