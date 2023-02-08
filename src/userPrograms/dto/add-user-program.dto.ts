import { IsNumber, IsString, IsOptional } from 'class-validator'

export class AdduserProgramSessionWithoutRelation {
  @IsNumber()
    session_id: number

  @IsString()
    state: string

  @IsOptional()
  @IsString()
    created_at: string
}

export class AddUserProgramDto extends AdduserProgramSessionWithoutRelation {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string
}
