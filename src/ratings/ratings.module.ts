import { Module } from '@nestjs/common'
import { MethodsModule } from 'src/commonMethods/commonMethods.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { RatingsController } from './ratings.controller'
import { RatingsService } from './ratings.service'

@Module({
  imports: [PrismaModule, MethodsModule],
  controllers: [RatingsController],
  providers: [RatingsService]
})
export class RatingsModule {}
