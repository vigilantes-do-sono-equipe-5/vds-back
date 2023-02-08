import { Injectable } from '@nestjs/common'
import { Tag } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/updateTag.dto'

@Injectable()
export class TagsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: CreateTagDto): Promise<Tag> {
    return await this.prisma.tag.create({ data: { ...dto } })
  }

  async update (dto: UpdateTagDto): Promise<Tag> {
    return await this.prisma.tag.update({
      where: { ...dto },
      data: { ...dto }
    })
  }
}
