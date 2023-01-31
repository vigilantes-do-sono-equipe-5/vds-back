import { IsDate, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddProductivityDto {
  @IsString()
    user_id: string

  @IsString()
    company_id: string

  @IsNumber()
  @Min(0)
  @Max(10)
    q1: number

  @IsNumber()
  @Min(0)
  @Max(80)
    q2: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q3: number

  @IsNumber()
  @Min(0)
  @Max(10)
    q4: number

  @IsDate()
    created_at: Date
}
