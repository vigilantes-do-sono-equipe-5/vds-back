import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator'

export class AddRatingWithoutRelation {
  @IsString()
  @ApiProperty()
    label: string

  @IsNumber()
  @ApiProperty()
  @Min(1)
  @Max(5)
    grade: number

  @IsString()
  @ApiProperty()
    created: string
}

export class AddRatingsDto extends AddRatingWithoutRelation {
  @ApiProperty()
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @ApiProperty()
  @IsString()
    company_id?: string
}
