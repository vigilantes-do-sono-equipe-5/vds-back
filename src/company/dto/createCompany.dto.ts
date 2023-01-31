import { User } from 'src/users/entities/user.entity'

export class CreateCompanyDto {
  name: string
  users: User[]
}
