import { Module } from '@nestjs/common'
import { CommonMethodsService } from './commonMethods.service'

@Module({
  providers: [CommonMethodsService],
  exports: [CommonMethodsService]
})
export class MethodsModule {}
