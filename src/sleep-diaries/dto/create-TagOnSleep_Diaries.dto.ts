import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateTagOnSleepDiariesDto {
  @IsString()
  @ApiProperty()
    sleep_tag: string

  @IsString()
  @ApiProperty()
    sleep_DiariesId: string
}
