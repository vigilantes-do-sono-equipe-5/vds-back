import { Injectable } from '@nestjs/common'
import { Gad } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { AddGadDto } from './dto/add-gad.dto'
import { UpdateGadDto } from './dto/updateGad.dto'

@Injectable()
export class GadsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddGadDto): Promise<Gad> {
    return await this.prisma.gad.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateGadDto): Promise<Gad> {
    return await this.prisma.gad.update({ where: { id }, data: { ...dto } })
  }
}
