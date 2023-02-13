import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsNumber()
    points: number

  @IsNumber()
  @ApiProperty()
    day_goal: number

  @IsNumber()
  @ApiProperty()
    night_goal: number

  @IsString()
  @ApiProperty()
    company_id: string
}
