import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PhqsController } from './phqs.controller'
import { PhqsService } from './phqs.service'

@Module({
  imports: [PrismaModule],
  controllers: [PhqsController],
  providers: [PhqsService]
})
export class PhqsModule {}
