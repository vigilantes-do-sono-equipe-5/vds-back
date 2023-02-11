import { Module } from '@nestjs/common'
import { MethodsModule } from 'src/commonMethods/commonMethods.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { CompanyController } from './company.controller'
import { CompanyService } from './company.service'

@Module({
  imports: [PrismaModule, MethodsModule],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
