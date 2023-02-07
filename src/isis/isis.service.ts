import { Injectable } from '@nestjs/common'
import { Isi } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
/* import { AddIsiDto } from './dto/add-isi.dto' */
import { UpdateIsiDto } from './dto/updateIsi.dto'

@Injectable()
export class IsisService {
  constructor (private readonly prisma: PrismaService) {}

  /* async create (dto: AddIsiDto): Promise<Isi> {
    return await this.prisma.isi.create({ data: { ...dto } })
  } */

  async update (id: string, dto: UpdateIsiDto): Promise<Isi> {
    return await this.prisma.isi.update({ where: { id }, data: { ...dto } })
  }
}
