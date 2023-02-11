import { Injectable } from '@nestjs/common'
import { Phq } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CommonMethodsService } from 'src/commonMethods/commonMethods.service'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddPhqDto, AddPhqWithoutRelation } from './dto/add-phq.dto'
import { UpdatePhqDto } from './dto/updatePhq.dto'

@Injectable()
export class PhqsService {
  constructor (private readonly prisma: PrismaService, private readonly commonMethodsService: CommonMethodsService) {}

  async create (dto: AddPhqDto): Promise<Phq> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const phqDto: AddPhqWithoutRelation = dto
    return await this.prisma.phq.create({ data: { ...phqDto, user, company } })
  }

  async update (id: string, dto: UpdatePhqDto): Promise<Phq> {
    return await this.prisma.phq.update({ where: { id }, data: { ...dto } })
  }

  async findByCompanyId (
    id: string,
    date: AddConvertDateUTC
  ): Promise<{
      beginningAveragePhq: number
      middleAveragePhq: number
      endAveragePhq: number
    }> {
    const phqList = await this.prisma.phq.findMany({ where: { company_id: id } })

    const dateUTC = this.commonMethodsService.divideThreePeriods(date)

    const beginningPhq = phqList.filter((e: Phq) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.beginning.startPeriod && +date < dateUTC?.beginning.endPeriod : false
    })
    const beginningSumPhq = beginningPhq.map((e: Phq) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const beginningAveragePhq = beginningSumPhq.reduce((a, b) => a + b, 0) / beginningSumPhq.length

    const middlePhq = phqList.filter((e: Phq) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.middle.startPeriod && +date < dateUTC?.middle.endPeriod : false
    })
    const middleSumPhq = middlePhq.map((e: Phq) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const middleAveragePhq = middleSumPhq.reduce((a, b) => a + b, 0) / beginningSumPhq.length

    const endPhq = phqList.filter((e: Phq) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.end.startPeriod && +date < dateUTC?.end.endPeriod : false
    })
    const endSumPhq = endPhq.map((e: Phq) => {
      const sum = e.q1 + e.q2
      return sum
    })
    const endAveragePhq = endSumPhq.reduce((a, b) => a + b, 0) / endSumPhq.length

    return {
      beginningAveragePhq,
      middleAveragePhq,
      endAveragePhq
    }
  }
}
