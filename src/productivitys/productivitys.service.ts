import { Injectable } from '@nestjs/common'
import { Productivity } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddProductivityDto, AddProductivityWithoutRelation } from './dto/add-productivity.dto'
import { UpdateProductivityDto } from './dto/updateProductivity.dto'

@Injectable()
export class ProductivitysService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddProductivityDto): Promise<Productivity> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const productivityDto: AddProductivityWithoutRelation = dto
    return await this.prisma.productivity.create({ data: { ...productivityDto, user, company } })
  }

  async update (id: string, dto: UpdateProductivityDto): Promise<Productivity> {
    return await this.prisma.productivity.update({
      where: { id },
      data: { ...dto }
    })
  }
}
