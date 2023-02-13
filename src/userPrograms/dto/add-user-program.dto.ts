import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, IsOptional } from 'class-validator'

export class AdduserProgramSessionWithoutRelation {
  @IsNumber()
  @ApiProperty()
    session_id: number

  @IsString()
  @ApiProperty()
    state: string

  @IsOptional()
  @ApiProperty()
  @IsString()
    created_at: string
}

export class AddUserProgramDto extends AdduserProgramSessionWithoutRelation {
  @IsOptional()
  @ApiProperty()
  @IsString()
    user_id?: string

  @IsOptional()
  @ApiProperty()
  @IsString()
    company_id?: string
}
