import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCompanyDto } from './dto/createCompany.dto'
import { UpdateCompanyDto } from './dto/updateCompany.dto'

@Injectable()
export class CompanyService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: CreateCompanyDto): Promise<Company> {
    return await this.prisma.company.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateCompanyDto): Promise<Company> {
    return await this.prisma.company.update({ where: { id }, data: { ...dto } })
  }
}
