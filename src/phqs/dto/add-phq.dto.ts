import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddPhqWithoutRelation {
  @IsNumber()
  @Min(0)
  @Max(3)
    q1: number

  @IsNumber()
  @Min(0)
  @Max(3)
    q2: number

  @IsString()
    created_at: string
}
export class AddPhqDto extends AddPhqWithoutRelation {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string
}
