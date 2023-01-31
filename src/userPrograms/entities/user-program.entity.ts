import { UserProgramDto } from '../dto/add-user-program.dto'

export class UserProgram extends UserProgramDto {
  id: string
  user_id: string
  company_id: string
}
