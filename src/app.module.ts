import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CompanyModule } from './company/company.module'
import { GadsModule } from './gads/gads.module'
import { IsisModule } from './isis/isis.module'
import { PhqsModule } from './phqs/phqs.module'
import { PrismaModule } from './prisma/prisma.module'
import { ProductivityModule } from './productivitys/productivitys.module'
import { RatingsModule } from './ratings/ratings.module'
import { SleepDiariesModule } from './sleep-diaries/sleepDiaries.module'
import { TagsModule } from './tags/tags.module'
import { UserProgramsModule } from './userPrograms/userPrograms.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    PrismaModule,
    CompanyModule,
    GadsModule,
    IsisModule,
    PhqsModule,
    ProductivityModule,
    RatingsModule,
    SleepDiariesModule,
    TagsModule,
    UserProgramsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
