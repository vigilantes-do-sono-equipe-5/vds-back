import { PartialType } from '@nestjs/mapped-types'
import { CreateCompanyDto } from './createCompany.dto'

export class UpdateCompany extends PartialType(CreateCompanyDto) {}
