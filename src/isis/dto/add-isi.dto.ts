import { IsDate, IsNumber, Min, Max } from 'class-validator'

export class AddIsiDto {
  @IsNumber()
  @Min(0)
  @Max(4)
    q1: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q2: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q3: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q4: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q5: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q6: number

  @IsNumber()
  @Min(0)
  @Max(4)
    q7: number

  @IsDate()
    created_at: Date
}
