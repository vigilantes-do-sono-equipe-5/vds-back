import { Injectable } from '@nestjs/common'
import { Isi } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CommonMethodsService } from 'src/commonMethods/commonMethods.service'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddIsiDto, AddIsiDtoWithoutRealtion } from './dto/add-isi.dto'
import { UpdateIsiDto } from './dto/updateIsi.dto'

@Injectable()
export class IsisService {
  constructor (private readonly prisma: PrismaService, private readonly commonMethodsService: CommonMethodsService) {}

  async create (dto: AddIsiDto): Promise<Isi> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const isiDto: AddIsiDtoWithoutRealtion = dto
    return await this.prisma.isi.create({ data: { ...isiDto, user, company } })
  }

  async update (id: string, dto: UpdateIsiDto): Promise<Isi> {
    return await this.prisma.isi.update({ where: { id }, data: { ...dto } })
  }

  async findByCompanyId (
    id: string,
    date: AddConvertDateUTC
  ): Promise<{
      beginningAverageIsi: number
      middleAverageIsi: number
      endAverageIsi: number
    }> {
    const isiList = await this.prisma.isi.findMany({ where: { company_id: id } })

    const dateUTC = this.commonMethodsService.divideThreePeriods(date)

    const beginningIsi = isiList.filter((e: Isi) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.beginning.startPeriod && +date < dateUTC?.beginning.endPeriod : false
    })
    const beginningSumIsi = beginningIsi.map((e: Isi) => {
      const sum = e.q1 + e.q2 + e.q3 + e.q4 + e.q5 + e.q6 + e.q7
      return sum
    })
    const beginningAverageIsi = beginningSumIsi.reduce((a, b) => a + b, 0) / beginningSumIsi.length

    const middleIsi = isiList.filter((e: Isi) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.middle.startPeriod && +date < dateUTC?.middle.endPeriod : false
    })
    const middleSumIsi = middleIsi.map((e: Isi) => {
      const sum = e.q1 + e.q2 + e.q3 + e.q4 + e.q5 + e.q6 + e.q7
      return sum
    })
    const middleAverageIsi = middleSumIsi.reduce((a, b) => a + b, 0) / beginningSumIsi.length

    const endIsi = isiList.filter((e: Isi) => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC?.end.startPeriod && +date < dateUTC?.end.endPeriod : false
    })
    const endSumIsi = endIsi.map((e: Isi) => {
      const sum = e.q1 + e.q2 + e.q3 + e.q4 + e.q5 + e.q6 + e.q7
      return sum
    })
    const endAverageIsi = endSumIsi.reduce((a, b) => a + b, 0) / endSumIsi.length

    return {
      beginningAverageIsi,
      middleAverageIsi,
      endAverageIsi
    }
  }
}
