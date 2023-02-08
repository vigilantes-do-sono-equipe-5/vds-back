import { Injectable } from '@nestjs/common'
import { Isi } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddIsiDto, AddIsiDtoWithoutRealtion } from './dto/add-isi.dto'
import { UpdateIsiDto } from './dto/updateIsi.dto'

@Injectable()
export class IsisService {
  constructor (private readonly prisma: PrismaService) {}

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
}
