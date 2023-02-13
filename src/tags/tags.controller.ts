import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { Tag } from '@prisma/client'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/updateTag.dto'
import { TagsService } from './tags.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor (private readonly tagsService: TagsService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo formulário de tags.'
  })
  async create (@Body() dto: CreateTagDto): Promise<Tag> {
    return await this.tagsService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um formulário de tags.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateTagDto): Promise<Tag> {
    return await this.tagsService.update(id, dto)
  }
}
