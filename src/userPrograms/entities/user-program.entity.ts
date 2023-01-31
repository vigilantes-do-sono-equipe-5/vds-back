import { AddUserProgramDto } from '../dto/add-user-program.dto'

export class UserProgram extends AddUserProgramDto {
  id: string
  user_id: string
  company_id: string
}
