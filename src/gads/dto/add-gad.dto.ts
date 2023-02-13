import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AddGadWithoutRelation {
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

  @ApiProperty()
  @IsString()
    created_at: string
}
export class AddGadDto extends AddGadWithoutRelation {
  @ApiProperty()
  @IsOptional()
  @IsString()
    user_id?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
    company_id?: string
}
