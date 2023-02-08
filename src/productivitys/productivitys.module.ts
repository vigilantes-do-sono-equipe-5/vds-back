import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ProductivitysController } from './productivitys.controller'
import { ProductivitysService } from './productivitys.service'

@Module({
  imports: [PrismaModule],
  controllers: [ProductivitysController],
  providers: [ProductivitysService]
})
export class ProductivityModule {}
