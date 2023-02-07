import { Injectable } from '@nestjs/common'
import { Phq } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
/* import { AddPhqDto } from './dto/add-phq.dto' */
import { UpdatePhqDto } from './dto/updatePhq.dto'

@Injectable()
export class PhqsService {
  constructor (private readonly prisma: PrismaService) {}

  /* async create (dto: AddPhqDto): Promise<Phq> {
    return await this.prisma.phq.create({ data: { ...dto } })
  } */

  async update (id: string, dto: UpdatePhqDto): Promise<Phq> {
    return await this.prisma.phq.update({ where: { id }, data: { ...dto } })
  }
}
