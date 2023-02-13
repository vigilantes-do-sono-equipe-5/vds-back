import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { Productivity } from '@prisma/client'
import { AddProductivityDto } from './dto/add-productivity.dto'
import { UpdateProductivityDto } from './dto/updateProductivity.dto'
import { ProductivitysService } from './productivitys.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('productivities')
@Controller('productivity')
export class ProductivitysController {
  constructor (private readonly productivitysService: ProductivitysService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo formulário de produtividade.'
  })
  async create (@Body() dto: AddProductivityDto): Promise<Productivity> {
    return await this.productivitysService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um formulário de produtividade.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateProductivityDto): Promise<Productivity> {
    return await this.productivitysService.update(id, dto)
  }
}
