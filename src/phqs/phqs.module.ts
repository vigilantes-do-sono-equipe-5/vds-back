import { Module } from '@nestjs/common'
import { MethodsModule } from 'src/commonMethods/commonMethods.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PhqsController } from './phqs.controller'
import { PhqsService } from './phqs.service'

@Module({
  imports: [PrismaModule, MethodsModule],
  controllers: [PhqsController],
  providers: [PhqsService]
})
export class PhqsModule {}
