import { IsNumber, Min, Max, IsString, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AddIsiDtoWithoutRealtion {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q1: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q2: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q3: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q4: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q5: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q6: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(4)
    q7: number

  @ApiProperty()
  @IsString()
    created_at: string
}

export class AddIsiDto extends AddIsiDtoWithoutRealtion {
  @ApiProperty()
  @IsOptional()
  @IsString()
    user_id?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
    company_id?: string
}
