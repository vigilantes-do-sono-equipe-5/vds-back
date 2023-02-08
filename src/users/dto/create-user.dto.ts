import { IsNumber, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNumber()
    points: number

  @IsNumber()
    day_goal: number

  @IsNumber()
    night_goal: number

  @IsString()
    company_id: string
}
