import { IsDate, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddRatingsDto {
  @IsString()
    user_id: string

  @IsString()
    company_id: string

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
