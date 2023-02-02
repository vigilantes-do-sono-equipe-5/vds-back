import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddRatingsDto {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string

  @IsNumber()
  @Min(0)
  @Max(5)
    label: string

  @IsNumber()
  @Min(0)
  @Max(5)
    grade: number

  @IsString()
    created: String
}
