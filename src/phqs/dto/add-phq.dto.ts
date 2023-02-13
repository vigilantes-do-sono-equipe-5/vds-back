import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AddPhqWithoutRelation {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(3)
    q1: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(3)
    q2: number

  @IsString()
  @ApiProperty()
    created_at: string
}
export class AddPhqDto extends AddPhqWithoutRelation {
  @IsOptional()
  @IsString()
  @ApiProperty()
    user_id?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
    company_id?: string
}
