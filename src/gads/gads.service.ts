import { Injectable } from '@nestjs/common'
import { Gad } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CommonMethodsService } from 'src/commonMethods/commonMethods.service'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddGadDto, AddGadWithoutRelation } from './dto/add-gad.dto'
import { UpdateGadDto } from './dto/updateGad.dto'

@Injectable()
export class GadsService {
  constructor (private readonly prisma: PrismaService, private readonly commonMethodsService: CommonMethodsService) {}

  async create (dto: AddGadDto): Promise<Gad> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const gadDto: AddGadWithoutRelation = dto
    return await this.prisma.gad.create({ data: { ...gadDto, user, company } })
  }

  async update (id: string, dto: UpdateGadDto): Promise<Gad> {
    return await this.prisma.gad.update({ where: { id }, data: { ...dto } })
  }

  async findByCompanyId (
    id: string,
    date: AddConvertDateUTC
  ): Promise<{
      beginningAverageGad: number
      middleAverageGad: number
      endAverageGad: number
    }> {
    const gadList = await this.prisma.gad.findMany({ where: { company_id: id } })

    const dateUTC = this.commonMethodsService.divideThreePeriods(date)

    const beginningGad = gadList.filter((e: Gad) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.beginning.startPeriod && +date < dateUTC?.beginning.endPeriod : false
    })
    const beginningSumGad = beginningGad.map((e: Gad) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const beginningAverageGad = beginningSumGad.reduce((a, b) => a + b, 0) / beginningSumGad.length

    const middleGad = gadList.filter((e: Gad) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.middle.startPeriod && +date < dateUTC?.middle.endPeriod : false
    })
    const middleSumGad = middleGad.map((e: Gad) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const middleAverageGad = middleSumGad.reduce((a, b) => a + b, 0) / beginningSumGad.length

    const endGad = gadList.filter((e: Gad) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.end.startPeriod && +date < dateUTC?.end.endPeriod : false
    })
    const endSumGad = endGad.map((e: Gad) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const endAverageGad = endSumGad.reduce((a, b) => a + b, 0) / endSumGad.length

    return {
      beginningAverageGad,
      middleAverageGad,
      endAverageGad
    }
  }
}
