import { Injectable } from '@nestjs/common'
import { Rating } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddRatingsDto, AddRatingWithoutRelation } from './dto/add-ratings.dto'
import { UpdateRatingsDto } from './dto/updateRating.dto'

@Injectable()
export class RatingsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddRatingsDto): Promise<Rating> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const ratingDto: AddRatingWithoutRelation = dto
    return await this.prisma.rating.create({ data: { ...ratingDto, user, company } })
  }

  async update (id: string, dto: UpdateRatingsDto): Promise<Rating> {
    return await this.prisma.rating.update({
      where: { id },
      data: { ...dto }
    })
  }
}
