import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Company } from '@prisma/client'
import { CompanyService } from './company.service'
import { CreateCompanyDto } from './dto/createCompany.dto'
import { UpdateCompanyDto } from './dto/updateCompany.dto'

@Controller('company')
export class CompanyController {
  constructor (private readonly companyService: CompanyService) {}

  @Post()
  async create (@Body() dto: CreateCompanyDto): Promise<Company> {
    return await this.companyService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateCompanyDto): Promise<Company> {
    return await this.companyService.update(id, dto)
  }

  @Get()
  async findAll (): Promise<Company[]> {
    return await this.companyService.findAll()
  }
}
