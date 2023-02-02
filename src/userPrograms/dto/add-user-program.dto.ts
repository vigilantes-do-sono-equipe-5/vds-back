import { IsNumber, IsString, IsOptional } from 'class-validator'

export class AddUserProgramDto {
  @IsNumber()
    session_id: number

  @IsString()
    state: string

  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string
}
