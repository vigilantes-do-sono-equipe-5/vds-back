import { Injectable } from '@nestjs/common'
import { Gad } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddGadDto, AddGadWithoutRelation } from './dto/add-gad.dto'
import { UpdateGadDto } from './dto/updateGad.dto'

@Injectable()
export class GadsService {
  constructor (private readonly prisma: PrismaService) {}

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
}
