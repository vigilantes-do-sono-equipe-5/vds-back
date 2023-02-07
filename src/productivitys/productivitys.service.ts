import { Injectable } from '@nestjs/common'
import { Productivity } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
/* import { AddProductivityDto } from './dto/add-productivity.dto' */
import { UpdateProductivityDto } from './dto/updateProductivity.dto'

@Injectable()
export class ProductivitysService {
  constructor (private readonly prisma: PrismaService) {}

  /* async create (dto: AddProductivityDto): Promise<Productivity> {
    return await this.prisma.productivity.create({ data: { ...dto } })
  } */

  async update (id: string, dto: UpdateProductivityDto): Promise<Productivity> {
    return await this.prisma.productivity.update({
      where: { id },
      data: { ...dto }
    })
  }
}
