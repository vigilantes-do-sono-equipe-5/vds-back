import { Module } from '@nestjs/common'
import { MethodsModule } from 'src/commonMethods/commonMethods.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { IsisController } from './isis.controller'
import { IsisService } from './isis.service'

@Module({
  imports: [PrismaModule, MethodsModule],
  controllers: [IsisController],
  providers: [IsisService]
})
export class IsisModule {}
