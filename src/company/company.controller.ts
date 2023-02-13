import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Company } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CompanyService } from './company.service'
import { CreateCompanyDto } from './dto/createCompany.dto'
import { UpdateCompanyDto } from './dto/updateCompany.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('companies')
@Controller('company')
export class CompanyController {
  constructor (private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova empresa'
  })
  async create (@Body() dto: CreateCompanyDto): Promise<Company> {
    return await this.companyService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige uma empresa pelo id.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateCompanyDto): Promise<Company> {
    return await this.companyService.update(id, dto)
  }

  @Get()
  @ApiOperation({ summary: 'Encontra todas as empresas.' })
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
  @ApiOperation({
    summary: 'Obtenha os principais números de uma empresa, sendo eles respectivamente, o número total de sessões, total de noites de sono relatadas e por fim o valor total das técnicas aplicadas.'
  })
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
  @ApiOperation({
    summary: 'Mostra os objetivos escolhidos pelos usuários ao longo das sessões.'
  })
  async chosenGoals (@Param('id') id: string): Promise<{
    concentration: number
    energy: number
    relationships: number
    humor: number
  }> {
    return await this.companyService.chosenGoals(id)
  }
}
