import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { UserProgramsController } from './userPrograms.controller'
import { UserProgramsService } from './userPrograms.service'

@Module({
  imports: [PrismaModule],
  controllers: [UserProgramsController],
  providers: [UserProgramsService]
})
export class UserProgramsModule {}
