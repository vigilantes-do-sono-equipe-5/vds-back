import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddGadDto {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string

  @IsNumber()
  @Min(0)
  @Max(3)
    q1: number

  @IsNumber()
  @Min(0)
  @Max(3)
    q2: number
}
