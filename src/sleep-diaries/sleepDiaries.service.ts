import { Injectable } from '@nestjs/common'
import { Sleep_Diaries } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { AddSleepDiariesDto } from './dto/add-sleepDiaries.dto'
import { UpdateSleepDiariesDto } from './dto/updateSleepDiaries.dto'

@Injectable()
export class SleepDiariesService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddSleepDiariesDto): Promise<Sleep_Diaries> {
    return await this.prisma.sleep_Diaries.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateSleepDiariesDto): Promise<Sleep_Diaries> {
    return await this.prisma.sleep_Diaries.update({
      where: { id },
      data: { ...dto }
    })
  }
}
