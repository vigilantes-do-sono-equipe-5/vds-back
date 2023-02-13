import { Injectable } from '@nestjs/common'
import { Rating } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CommonMethodsService } from 'src/commonMethods/commonMethods.service'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddRatingsDto, AddRatingWithoutRelation } from './dto/add-ratings.dto'
import { UpdateRatingsDto } from './dto/updateRating.dto'

@Injectable()
export class RatingsService {
  constructor (private readonly prisma: PrismaService, private readonly commonMethodsService: CommonMethodsService) {}

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

  async findByCompanyId (
    id: string,
    date: AddConvertDateUTC
  ): Promise<{
      1: number
      2: number
      3: number
      4: number
      5: number
    }> {
    const ratingList = await this.prisma.rating.findMany({ where: { company_id: id } })

    const dateUTC = this.commonMethodsService.convertDateUTC(date)

    const filterByPeriod: Rating[] = ratingList.filter((e: Rating): boolean => {
      const date = new Date(e.created.slice(0, 10))
      return dateUTC ? +date >= dateUTC.start && +date < dateUTC.final : false
    })

    const rating = [0, 0, 0, 0, 0]

    filterByPeriod.forEach((e) => {
      rating[e.grade - 1]++
    })

    return {
      1: rating[0],
      2: rating[1],
      3: rating[2],
      4: rating[3],
      5: rating[4]
    }
  }
}
