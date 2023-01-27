import { IsDate, IsNumber, IsString } from 'class-validator'

export class UserProgramDto {
  @IsNumber()
    session_id: number

  @IsString()
    state: string

  @IsDate()
    created_at: Date
}
