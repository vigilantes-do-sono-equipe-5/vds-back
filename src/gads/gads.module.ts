import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { GadsController } from './gads.controller'
import { GadsService } from './gads.service'

@Module({
  imports: [PrismaModule],
  controllers: [GadsController],
  providers: [GadsService]
})
export class GadsModule {}
