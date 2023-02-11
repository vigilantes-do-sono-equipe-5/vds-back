import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddRatingWithoutRelation {
  @IsString()
    label: string

  @IsNumber()
  @Min(1)
  @Max(5)
    grade: number

  @IsString()
    created: string
}

export class AddRatingsDto extends AddRatingWithoutRelation {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string
}
