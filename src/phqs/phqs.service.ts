import { Injectable } from '@nestjs/common'
import { Phq } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddPhqDto, AddPhqWithoutRelation } from './dto/add-phq.dto'
import { UpdatePhqDto } from './dto/updatePhq.dto'

@Injectable()
export class PhqsService {
  constructor (private readonly prisma: PrismaService) {}

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
}
