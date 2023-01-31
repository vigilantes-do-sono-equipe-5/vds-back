import { IsDate, IsNumber, Min, Max } from 'class-validator'

export class AddProductivityDto {
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
