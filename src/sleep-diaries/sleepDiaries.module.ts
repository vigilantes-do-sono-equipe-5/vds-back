import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { SleepDiariesController } from './sleepDiaries.controller'
import { SleepDiariesService } from './sleepDiaries.service'

@Module({
  imports: [PrismaModule],
  controllers: [SleepDiariesController],
  providers: [SleepDiariesService]
})
export class SleepDiariesModule {}
