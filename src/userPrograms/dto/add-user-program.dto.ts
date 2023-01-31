import { IsNumber, IsString } from 'class-validator'

export class AddUserProgramDto {
  @IsNumber()
    session_id: number

  @IsString()
    state: string

  @IsString()
    user_id: string

  @IsString()
    company_id: string
}
