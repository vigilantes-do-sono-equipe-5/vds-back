import { IsNumber, Min, Max, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AddProductivityWithoutRelation {
  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(10)
    q1: number

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(80)
    q2: number

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(4)
    q3: number

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(10)
    q4: number

  @IsString()
  @ApiProperty()
    created_at: string
}

export class AddProductivityDto extends AddProductivityWithoutRelation {
  @ApiProperty()
  @IsString()
    user_id?: string

  @IsString()
  @ApiProperty()
    company_id?: string
}
