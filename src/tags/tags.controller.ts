import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { Tag } from '@prisma/client'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/updateTag.dto'
import { TagsService } from './tags.service'

@Controller()
export class TagsController {
  constructor (private readonly tagsService: TagsService) {}
  @Post()
  async create (@Body() dto: CreateTagDto): Promise<Tag> {
    return await this.tagsService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateTagDto): Promise<Tag> {
    return await this.tagsService.update(id, dto)
  }
}
