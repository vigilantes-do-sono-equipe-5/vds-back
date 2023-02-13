import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateTagDto {
  @IsString()
  @ApiProperty()
    sleep_tag: string
}
