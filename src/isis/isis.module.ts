import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { IsisController } from './isis.controller'
import { IsisService } from './isis.service'

@Module({
  imports: [PrismaModule],
  controllers: [IsisController],
  providers: [IsisService]
})
export class IsisModule {}
