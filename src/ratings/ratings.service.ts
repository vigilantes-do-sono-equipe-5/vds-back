import { Injectable } from '@nestjs/common'
import { Rating } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { AddRatingsDto } from './dto/add-ratings.dto'
import { UpdateRatingsDto } from './dto/updateRating.dto'

@Injectable()
export class RatingsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddRatingsDto): Promise<Rating> {
    return await this.prisma.rating.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateRatingsDto): Promise<Rating> {
    return await this.prisma.rating.update({
      where: { id },
      data: { ...dto }
    })
  }
}
