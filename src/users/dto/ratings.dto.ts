import { IsDate, IsNumber, Min, Max } from 'class-validator'

export class RatingsDto {
  @IsNumber()
  @Min(0)
  @Max(5)
    id: string

  @IsNumber()
  @Min(0)
  @Max(5)
    label: string

  @IsNumber()
  @Min(0)
  @Max(5)
    grade: number

  @IsDate()
  @Min(0)
  @Max(5)
    created_at: Date
}
