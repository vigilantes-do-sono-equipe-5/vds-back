import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Company } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CompanyService } from './company.service'
import { CreateCompanyDto } from './dto/createCompany.dto'
import { UpdateCompanyDto } from './dto/updateCompany.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('companies')
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
  async findAll (): Promise<
  Array<{
    id: string
    name: string
    employees: number
    activeEmployees: number
  }>
  > {
    return await this.companyService.findAll()
  }

  @Get('main-numbers/:id')
  async mainNumbers (
    @Param('id') id: string,
      @Body() date: AddConvertDateUTC
  ): Promise<{
        userProgramSession: number
        sleepDiaries: number
        techniques: number
      }> {
    return await this.companyService.mainNumbers(id, date)
  }

  @Get('chosenGoals/:id')
  async chosenGoals (@Param('id') id: string): Promise<{
    concentration: number
    energy: number
    relationships: number
    humor: number
  }> {
    return await this.companyService.chosenGoals(id)
  }
}
