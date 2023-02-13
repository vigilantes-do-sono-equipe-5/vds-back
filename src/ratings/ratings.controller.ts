import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common'
import { Rating } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { AddRatingsDto } from './dto/add-ratings.dto'
import { UpdateRatingsDto } from './dto/updateRating.dto'
import { RatingsService } from './ratings.service'

@Controller('rating')
export class RatingsController {
  constructor (private readonly ratingsService: RatingsService) {}
  @Post()
  async create (@Body() dto: AddRatingsDto): Promise<Rating> {
    return await this.ratingsService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateRatingsDto): Promise<Rating> {
    return await this.ratingsService.update(id, dto)
  }

  @Get(':id')
  async findByCompanyId (
    @Param('id') id: string,
      @Body() date: AddConvertDateUTC
  ): Promise<{
        1: number
        2: number
        3: number
        4: number
        5: number
      }> {
    return await this.ratingsService.findByCompanyId(id, date)
  }
}
