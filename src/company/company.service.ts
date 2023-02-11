import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from 'src/users/entities/user.entity'
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

  async findAll (): Promise<Array<{
    id: string
    name: string
    employees: number
    activeEmployees: number
  }>> {
    const companyList = await this.prisma.company.findMany({ include: { users: true } })
    return companyList.map((e: Company & {
      users: User[] }) => {
      return {
        id: e.id,
        name: e.name,
        employees: e.employees,
        activeEmployees: e.users.length
      }
    })
  }
}
