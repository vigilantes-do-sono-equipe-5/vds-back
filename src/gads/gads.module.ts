import { Module } from '@nestjs/common'
import { MethodsModule } from 'src/commonMethods/commonMethods.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { GadsController } from './gads.controller'
import { GadsService } from './gads.service'

@Module({
  imports: [PrismaModule, MethodsModule],
  controllers: [GadsController],
  providers: [GadsService]
})
export class GadsModule {}
